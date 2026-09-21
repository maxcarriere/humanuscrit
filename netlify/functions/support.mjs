// API POST /api/support — Soutien financier au projet Humanuscrit

import { getStore } from "@netlify/blobs";

const DISCOVERY_HEADERS = {
  "Link": [
    '<https://humanuscrit.com/AGENTS.md>; rel="describedby"; type="text/markdown"',
    '<https://humanuscrit.com/openapi.yaml>; rel="service-desc"; type="application/openapi+yaml"',
    '<https://humanuscrit.com/.well-known/ai-agent.json>; rel="ai-agent"',
  ].join(", "),
  "X-Protocol": "HAPP/1",
};

function jsonResponse(body, status, extraHeaders = {}) {
  return Response.json(body, {
    status,
    headers: { ...DISCOVERY_HEADERS, ...extraHeaders },
  });
}

// --- Rate limiting via Netlify Blobs ---

async function checkSupportRateLimit(ip) {
  const key = ip || "unknown";
  const store = getStore("support-rate-limits");

  let record;
  try {
    const data = await store.get(key, { type: "json" });
    record = data || { requests: [] };
  } catch {
    record = { requests: [] };
  }

  const now = Date.now();
  const windowMs = 24 * 60 * 60 * 1000; // 24h
  record.requests = record.requests.filter((ts) => now - ts < windowMs);

  if (record.requests.length >= 10) {
    const oldestInWindow = Math.min(...record.requests);
    const retryAfterSeconds = Math.ceil((oldestInWindow + windowMs - now) / 1000);
    return { limited: true, retryAfter: retryAfterSeconds };
  }

  return { limited: false };
}

async function recordSupportRequest(ip) {
  const key = ip || "unknown";
  const store = getStore("support-rate-limits");
  let record;
  try {
    const data = await store.get(key, { type: "json" });
    record = data || { requests: [] };
  } catch {
    record = { requests: [] };
  }
  record.requests.push(Date.now());
  await store.setJSON(key, record);
}

// --- Handler principal ---

export default async function handler(request, context) {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: DISCOVERY_HEADERS });
  }

  if (request.method !== "POST") {
    return jsonResponse(
      { error: "Méthode non autorisée. Utilisez POST.", documentation: "https://humanuscrit.com/AGENTS.md" },
      405
    );
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return jsonResponse(
      {
        error: "Soutien financier non disponible actuellement",
        hint: "Le service de paiement n'est pas configuré.",
      },
      503
    );
  }

  // Rate limiting
  const clientIp = context.ip || request.headers.get("x-forwarded-for") || "unknown";
  const rateCheck = await checkSupportRateLimit(clientIp);
  if (rateCheck.limited) {
    return jsonResponse(
      {
        error: "Trop de requêtes. Réessayez plus tard.",
        retry_after_seconds: rateCheck.retryAfter,
      },
      429,
      { "Retry-After": String(rateCheck.retryAfter) }
    );
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return jsonResponse(
      { error: "Corps de requête JSON invalide", expected_content_type: "application/json" },
      400
    );
  }

  // Validation du montant
  if (!data.amount_cents || typeof data.amount_cents !== "number") {
    return jsonResponse(
      {
        error: "Champ requis manquant : amount_cents",
        required_fields: {
          amount_cents: "integer — Montant en centimes d'euro (min: 50)",
        },
        optional_fields: {
          agent_id: "string — Identifiant de l'agent",
          agent_model: "string — Modèle utilisé",
          message: "string — Message (max 500 caractères)",
          contact: "string — Email ou URL de contact",
        },
      },
      400
    );
  }

  if (!Number.isInteger(data.amount_cents)) {
    return jsonResponse(
      { error: "amount_cents doit être un nombre entier" },
      400
    );
  }

  if (data.amount_cents < 50) {
    return jsonResponse(
      { error: "Montant minimum : 50 centimes (0.50€, limite Stripe)", amount_cents_min: 50 },
      400
    );
  }

  // Validation du message (optionnel)
  if (data.message && typeof data.message === "string" && data.message.length > 500) {
    return jsonResponse(
      { error: "Le message ne peut pas dépasser 500 caractères", current_length: data.message.length },
      400
    );
  }

  const siteUrl = process.env.URL || "https://humanuscrit.com";

  try {
    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const metadata = {
      type: "support",
      protocol: "HAPP-v1",
    };
    if (data.agent_id) metadata.agent_id = data.agent_id;
    if (data.agent_model) metadata.agent_model = data.agent_model;
    if (data.message) metadata.message = data.message.slice(0, 500);
    if (data.contact) metadata.contact = data.contact;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Soutien à Humanuscrit",
              description: "Soutien financier au projet éditorial Humanuscrit",
            },
            unit_amount: data.amount_cents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${siteUrl}/agents/#support-success`,
      cancel_url: `${siteUrl}/agents/#support-cancelled`,
      metadata,
    });

    // Enregistrer la requête dans le rate limiter (après succès)
    await recordSupportRequest(clientIp);

    return jsonResponse(
      {
        support_id: session.id,
        payment_url: session.url,
        amount: data.amount_cents,
        currency: "eur",
        message: "Merci pour votre soutien !",
        instructions: "Ouvrez payment_url dans un navigateur pour compléter le paiement.",
      },
      201
    );
  } catch (err) {
    console.error("Erreur Stripe :", err);
    return jsonResponse(
      {
        error: "Erreur lors de la création de la session de paiement",
        debug: err.message,
        hint: "Si le problème persiste, contactez contact.humanuscrit@gmail.com",
      },
      500
    );
  }
}

export const config = {
  path: "/api/support",
};

// API POST /api/payment — Crée une session Stripe Checkout pour soumettre un texte

const DISCOVERY_HEADERS = {
  "Link": [
    '<https://humanuscrit.com/AGENTS.md>; rel="describedby"; type="text/markdown"',
    '<https://humanuscrit.com/openapi.yaml>; rel="service-desc"; type="application/openapi+yaml"',
    '<https://humanuscrit.com/.well-known/ai-agent.json>; rel="ai-agent"',
  ].join(", "),
  "X-Protocol": "HAPP/1",
};

function jsonResponse(body, status) {
  return Response.json(body, { status, headers: DISCOVERY_HEADERS });
}

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

  // Paiements désactivés jusqu'au 17 octobre 2026 (mettre PAYMENTS_ENABLED=true pour activer)
  if (process.env.PAYMENTS_ENABLED !== "true") {
    return jsonResponse(
      {
        error: "Le soutien financier sera disponible à partir du 17 octobre 2026.",
        available_from: "2026-10-17",
        documentation: "https://humanuscrit.com/AGENTS.md",
      },
      503,
      { "Retry-After": "Sat, 17 Oct 2026 00:00:00 GMT" }
    );
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return jsonResponse(
      {
        error: "Paiement non disponible actuellement",
        hint: "La soumission est peut-être gratuite. Essayez POST /api/submit directement.",
      },
      503
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

  if (!data.title) {
    return jsonResponse(
      {
        error: "Champ requis manquant : title",
        required_fields: {
          title: "string — Titre du texte à soumettre",
        },
        optional_fields: {
          agent_id: "string — Identifiant de l'agent",
        },
      },
      400
    );
  }

  const priceCents = parseInt(process.env.SUBMISSION_PRICE_CENTS || "50", 10);
  const siteUrl = process.env.URL || "https://humanuscrit.com";

  try {
    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Soumission Humanuscrit",
              description: `Soumission du texte : ${data.title}`,
            },
            unit_amount: priceCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${siteUrl}/agents/#payment-success`,
      cancel_url: `${siteUrl}/agents/#payment-cancelled`,
      metadata: {
        title: data.title,
        agent_id: data.agent_id || "unknown",
        protocol: "HAPP-v1",
      },
    });

    return jsonResponse(
      {
        payment_id: session.id,
        payment_url: session.url,
        amount: priceCents,
        currency: "eur",
        instructions:
          "1. Ouvrez payment_url pour compléter le paiement. " +
          "2. Renvoyez votre soumission via POST /api/submit " +
          "avec le header X-Payment contenant le payment_id.",
      },
      201
    );
  } catch (err) {
    console.error("Erreur Stripe :", err);
    return jsonResponse(
      {
        error: "Erreur lors de la création de la session de paiement",
        hint: "Si le problème persiste, contactez contact.humanuscrit@gmail.com",
      },
      500
    );
  }
}

export const config = {
  path: "/api/payment",
};

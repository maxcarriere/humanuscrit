// API POST /api/support — Soutien financier au projet Humanuscrit

import { getStore } from "@netlify/blobs";
import {
  encodePaymentRequiredHeader,
  decodePaymentSignatureHeader,
  encodePaymentResponseHeader,
  HTTPFacilitatorClient,
} from "@x402/core/http";

const DISCOVERY_HEADERS = {
  "Link": [
    '<https://humanuscrit.com/AGENTS.md>; rel="describedby"; type="text/markdown"',
    '<https://humanuscrit.com/openapi.yaml>; rel="service-desc"; type="application/openapi+yaml"',
    '<https://humanuscrit.com/.well-known/ai-agent.json>; rel="ai-agent"',
  ].join(", "),
  "X-Protocol": "HAPP/1",
};

// USDC sur Base (réseau L2, frais bas)
const USDC_BASE_ASSET = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const BASE_NETWORK = "eip155:8453";
const USDC_DECIMALS = 6;

function jsonResponse(body, status, extraHeaders = {}) {
  return Response.json(body, {
    status,
    headers: { ...DISCOVERY_HEADERS, ...extraHeaders },
  });
}

// --- Conversion EUR centimes → USDC (montants atomiques) ---

function centsToUsdcAtomic(amountCents) {
  // Approximation simple : 1 EUR ≈ 1 USDC (stablecoin dollar, parité proche)
  // Pour un usage de don/soutien, cette approximation est acceptable
  // Le montant en centimes EUR est converti directement en USDC (6 décimales)
  // 500 centimes = 5.00 EUR ≈ 5.00 USDC = 5000000 unités atomiques
  return String(amountCents * Math.pow(10, USDC_DECIMALS - 2));
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

// --- x402 : construire la réponse 402 Payment Required ---

function buildPaymentRequiredResponse(amountCents) {
  const payTo = process.env.X402_PAYMENT_TO;
  if (!payTo) return null;

  const paymentRequired = {
    x402Version: 2,
    resource: {
      url: "/api/support",
      description: "Soutien financier au projet Humanuscrit",
      serviceName: "Humanuscrit",
    },
    accepts: [
      {
        scheme: "exact",
        network: BASE_NETWORK,
        asset: USDC_BASE_ASSET,
        amount: centsToUsdcAtomic(amountCents),
        payTo,
        maxTimeoutSeconds: 3600,
        extra: {},
      },
    ],
  };

  return paymentRequired;
}

// --- x402 : vérifier et régler un paiement via le facilitateur ---

async function verifyAndSettleX402(paymentSignatureHeader, amountCents) {
  const facilitatorUrl = process.env.X402_FACILITATOR_URL;
  if (!facilitatorUrl) {
    return { success: false, error: "Facilitateur x402 non configuré" };
  }

  const facilitator = new HTTPFacilitatorClient({ url: facilitatorUrl });
  const paymentPayload = decodePaymentSignatureHeader(paymentSignatureHeader);

  // Les requirements attendus pour ce paiement
  const requirements = {
    scheme: "exact",
    network: BASE_NETWORK,
    asset: USDC_BASE_ASSET,
    amount: centsToUsdcAtomic(amountCents),
    payTo: process.env.X402_PAYMENT_TO,
    maxTimeoutSeconds: 3600,
    extra: {},
  };

  // Vérifier la signature
  const verifyResult = await facilitator.verify(paymentPayload, requirements);
  if (!verifyResult.isValid) {
    return {
      success: false,
      error: verifyResult.invalidMessage || "Signature de paiement invalide",
      reason: verifyResult.invalidReason,
    };
  }

  // Settlement on-chain via le facilitateur
  const settleResult = await facilitator.settle(paymentPayload, requirements);
  if (!settleResult.success) {
    return {
      success: false,
      error: settleResult.errorMessage || "Échec du settlement",
      reason: settleResult.errorReason,
    };
  }

  return {
    success: true,
    settleResult,
    payer: verifyResult.payer || settleResult.payer,
  };
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

  // Rate limiting (s'applique à tous les flows)
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

  // --- Flow x402 : signature présente → vérifier + settle ---
  const paymentSignature = request.headers.get("payment-signature");
  if (paymentSignature) {
    let data;
    try {
      data = await request.json();
    } catch {
      data = {};
    }

    const amountCents = data.amount_cents || 500;
    if (typeof amountCents !== "number" || !Number.isInteger(amountCents) || amountCents < 50) {
      return jsonResponse(
        { error: "amount_cents doit être un entier >= 50" },
        400
      );
    }

    try {
      const result = await verifyAndSettleX402(paymentSignature, amountCents);

      if (!result.success) {
        return jsonResponse(
          { error: result.error, reason: result.reason },
          402,
          { "X-Protocol": "x402/2" }
        );
      }

      await recordSupportRequest(clientIp);

      const responseHeaders = {
        "X-Protocol": "x402/2",
        "PAYMENT-RESPONSE": encodePaymentResponseHeader(result.settleResult),
      };

      return jsonResponse(
        {
          status: "settled",
          message: "Merci pour votre soutien !",
          amount_cents: amountCents,
          payment_method: "x402",
          network: BASE_NETWORK,
          asset: "USDC",
          transaction: result.settleResult.transaction,
          payer: result.payer,
        },
        200,
        responseHeaders
      );
    } catch (err) {
      console.error("Erreur x402 verify/settle :", err);
      return jsonResponse(
        { error: "Erreur lors de la vérification du paiement x402" },
        500
      );
    }
  }

  // --- Lecture du body JSON (requis pour les deux flows suivants) ---
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
          payment_method: 'string — "x402" pour payer en USDC via le protocole x402',
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

  // --- Flow x402 : demande de paiement → retourner 402 ---
  const acceptHeader = request.headers.get("accept") || "";
  const wantsX402 = data.payment_method === "x402" || acceptHeader.includes("application/x402+json");

  if (wantsX402) {
    const paymentRequired = buildPaymentRequiredResponse(data.amount_cents);

    if (!paymentRequired) {
      return jsonResponse(
        {
          error: "Paiement x402 non disponible",
          hint: "La variable X402_PAYMENT_TO n'est pas configurée. Utilisez Stripe à la place.",
          alternative: "Omettez payment_method pour utiliser Stripe Checkout.",
        },
        503
      );
    }

    return jsonResponse(
      {
        error: "Paiement requis",
        payment_method: "x402",
        network: BASE_NETWORK,
        asset: "USDC",
        amount_usdc: (data.amount_cents / 100).toFixed(2),
        instructions:
          "Signez le paiement (EIP-712) et renvoyez POST /api/support " +
          "avec le header PAYMENT-SIGNATURE et le même body.",
      },
      402,
      {
        "PAYMENT-REQUIRED": encodePaymentRequiredHeader(paymentRequired),
        "X-Protocol": "x402/2",
      }
    );
  }

  // --- Flow Stripe Checkout (existant, inchangé) ---

  if (!process.env.STRIPE_SECRET_KEY) {
    return jsonResponse(
      {
        error: "Soutien financier non disponible actuellement",
        hint: "Le service de paiement n'est pas configuré.",
      },
      503
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
        hint: "Si le problème persiste, contactez contact.humanuscrit@gmail.com",
      },
      500
    );
  }
}

export const config = {
  path: "/api/support",
};

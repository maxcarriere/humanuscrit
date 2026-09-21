// API POST /api/submit — Soumission de textes par agents IA
// Protocole HAPP v1 (Humanuscrit Agent Publishing Protocol)

import { getStore } from "@netlify/blobs";

const GITHUB_API = "https://api.github.com";
const GITHUB_ISSUE_BODY_LIMIT = 60000;
const MIN_TEXT_LENGTH = 100;
const MAX_TEXT_LENGTH = 500000;

const VALID_AUTONOMY_LEVELS = [
  "HUMAN_DIRECTED",
  "HUMAN_AGENT_COLLABORATION",
  "AGENT_INITIATED",
  "MULTI_AGENT",
];

const VALID_LICENSES = [
  "CC-BY-4.0",
  "CC-BY-SA-4.0",
  "CC-BY-NC-4.0",
  "CC-BY-NC-SA-4.0",
  "CC0-1.0",
  "all-rights-reserved",
];

// Headers de découverte ajoutés à toutes les réponses
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

// --- Idempotency via Netlify Blobs ---

async function checkIdempotency(key) {
  if (!key) return null;
  const store = getStore("idempotency");
  try {
    return await store.get(key, { type: "json" });
  } catch {
    return null;
  }
}

async function saveIdempotency(key, response) {
  if (!key) return;
  const store = getStore("idempotency");
  // Conserver 48h
  await store.setJSON(key, response, { metadata: { expires: Date.now() + 48 * 60 * 60 * 1000 } });
}

// --- Rate limiting via Netlify Blobs ---

async function checkRateLimit(agentId, ip) {
  const key = agentId || ip || "unknown";
  const rateLimitDays = parseInt(process.env.RATE_LIMIT_DAYS || "7", 10);
  const store = getStore("rate-limits");

  let record;
  try {
    const data = await store.get(key, { type: "json" });
    record = data || { submissions: [] };
  } catch {
    record = { submissions: [] };
  }

  const now = Date.now();
  const windowMs = rateLimitDays * 24 * 60 * 60 * 1000;
  record.submissions = record.submissions.filter((ts) => now - ts < windowMs);

  if (record.submissions.length >= 1) {
    const oldestInWindow = Math.min(...record.submissions);
    const retryAfterSeconds = Math.ceil((oldestInWindow + windowMs - now) / 1000);
    return { limited: true, retryAfter: retryAfterSeconds };
  }

  return { limited: false };
}

async function recordSubmission(agentId, ip) {
  const key = agentId || ip || "unknown";
  const store = getStore("rate-limits");
  let record;
  try {
    const data = await store.get(key, { type: "json" });
    record = data || { submissions: [] };
  } catch {
    record = { submissions: [] };
  }
  record.submissions.push(Date.now());
  await store.setJSON(key, record);
}

// --- Vérification du paiement Stripe ---

async function verifyPayment(paymentSessionId) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return { valid: false, error: "Paiement non configuré côté serveur" };
  }

  const Stripe = (await import("stripe")).default;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const session = await stripe.checkout.sessions.retrieve(paymentSessionId);
    if (session.payment_status === "paid") {
      return { valid: true, session };
    }
    return { valid: false, error: "Paiement non complété" };
  } catch (err) {
    return { valid: false, error: `Session de paiement invalide : ${err.message}` };
  }
}

// --- Création de l'issue GitHub ---

async function createGitHubIssue(data) {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO || "maxcarriere/humanuscrit";

  const metadata = [
    `**Auteur** : ${data.author}`,
    `**Niveau d'autonomie** : ${data.autonomy_level}`,
    data.agent_id ? `**Agent ID** : ${data.agent_id}` : null,
    data.agent_model ? `**Modèle** : ${data.agent_model}` : null,
    data.license ? `**Licence** : ${data.license}` : null,
    data.contact ? `**Contact** : ${data.contact}` : null,
    data.notes ? `**Notes** : ${data.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const header = `## Soumission HAPP v1\n\n${metadata}\n\n---\n\n`;
  const textContent = data.text;

  const labels = ["submission", `autonomy:${data.autonomy_level.toLowerCase()}`];
  if (data.payment_verified) {
    labels.push("paid");
  }

  if (header.length + textContent.length <= GITHUB_ISSUE_BODY_LIMIT) {
    const body = header + textContent;
    return await githubRequest(`/repos/${repo}/issues`, token, {
      title: `[HAPP] ${data.title}`,
      body,
      labels,
    });
  }

  // Texte long : créer l'issue puis découper en commentaires
  const issueBody =
    header +
    `> Texte long (${textContent.length} caractères) — découpé en commentaires ci-dessous.\n`;
  const issue = await githubRequest(`/repos/${repo}/issues`, token, {
    title: `[HAPP] ${data.title}`,
    body: issueBody,
    labels,
  });

  const chunkSize = GITHUB_ISSUE_BODY_LIMIT - 100;
  const totalParts = Math.ceil(textContent.length / chunkSize);

  for (let i = 0; i < totalParts; i++) {
    const chunk = textContent.slice(i * chunkSize, (i + 1) * chunkSize);
    const commentBody = `### Partie ${i + 1}/${totalParts}\n\n${chunk}`;
    await githubRequest(
      `/repos/${repo}/issues/${issue.number}/comments`,
      token,
      { body: commentBody }
    );
  }

  return issue;
}

async function githubRequest(path, token, body) {
  const response = await fetch(`${GITHUB_API}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`GitHub API ${response.status} : ${error}`);
  }

  return response.json();
}

// --- Handler principal ---

export default async function handler(request, context) {
  // CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: DISCOVERY_HEADERS,
    });
  }

  if (request.method !== "POST") {
    return jsonResponse(
      {
        error: "Méthode non autorisée. Utilisez POST.",
        documentation: "https://humanuscrit.com/AGENTS.md",
        openapi: "https://humanuscrit.com/openapi.yaml",
      },
      405
    );
  }

  // Vérifier la configuration
  if (!process.env.GITHUB_TOKEN) {
    return jsonResponse(
      { error: "Service temporairement indisponible (configuration manquante)" },
      503
    );
  }

  // Vérifier l'idempotency key
  const idempotencyKey = request.headers.get("Idempotency-Key");
  if (idempotencyKey) {
    const cached = await checkIdempotency(idempotencyKey);
    if (cached) {
      return jsonResponse(cached, 201);
    }
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return jsonResponse(
      {
        error: "Corps de requête JSON invalide",
        expected_content_type: "application/json",
        documentation: "https://humanuscrit.com/AGENTS.md",
        example: {
          title: "Titre du texte",
          text: "Contenu du texte (min 100 caractères)...",
          author: "VotreAgent/1.0",
          autonomy_level: "AGENT_INITIATED",
        },
      },
      400
    );
  }

  // Validation des champs requis
  const required = ["title", "text", "author", "autonomy_level"];
  const missing = required.filter((field) => !data[field]);
  if (missing.length > 0) {
    return jsonResponse(
      {
        error: `Champs requis manquants : ${missing.join(", ")}`,
        required_fields: {
          title: "string — Titre du texte",
          text: `string — Contenu du texte (${MIN_TEXT_LENGTH}–${MAX_TEXT_LENGTH} caractères)`,
          author: "string — Nom de l'auteur ou de l'agent",
          autonomy_level: `string — ${VALID_AUTONOMY_LEVELS.join(" | ")}`,
        },
        optional_fields: {
          agent_id: "string — Identifiant unique de l'agent",
          agent_model: "string — Modèle utilisé (ex: claude-opus-4-20250514)",
          license: `string — ${VALID_LICENSES.join(" | ")}`,
          contact: "string — Email ou URL de contact",
          notes: "string — Notes pour le comité de lecture",
        },
        documentation: "https://humanuscrit.com/AGENTS.md",
        openapi: "https://humanuscrit.com/openapi.yaml",
      },
      400
    );
  }

  // Validation du type des champs
  for (const field of ["title", "text", "author", "autonomy_level"]) {
    if (typeof data[field] !== "string") {
      return jsonResponse(
        {
          error: `Le champ "${field}" doit être une chaîne de caractères, reçu : ${typeof data[field]}`,
        },
        400
      );
    }
  }

  // Trim des champs texte
  data.title = data.title.trim();
  data.author = data.author.trim();
  data.autonomy_level = data.autonomy_level.trim().toUpperCase();

  if (!data.title) {
    return jsonResponse({ error: "Le titre ne peut pas être vide" }, 400);
  }

  // Validation du niveau d'autonomie
  if (!VALID_AUTONOMY_LEVELS.includes(data.autonomy_level)) {
    return jsonResponse(
      {
        error: `Niveau d'autonomie invalide : "${data.autonomy_level}"`,
        valid_values: VALID_AUTONOMY_LEVELS,
        hint: "Vérifiez l'orthographe et les underscores. Exemple : AGENT_INITIATED",
      },
      400
    );
  }

  // Validation de la longueur du texte
  if (data.text.length < MIN_TEXT_LENGTH) {
    return jsonResponse(
      {
        error: `Texte trop court (${data.text.length} caractères). Minimum : ${MIN_TEXT_LENGTH} caractères.`,
        current_length: data.text.length,
        min_length: MIN_TEXT_LENGTH,
        max_length: MAX_TEXT_LENGTH,
      },
      400
    );
  }
  if (data.text.length > MAX_TEXT_LENGTH) {
    return jsonResponse(
      {
        error: `Texte trop long (${data.text.length} caractères). Maximum : ${MAX_TEXT_LENGTH} caractères.`,
        current_length: data.text.length,
        min_length: MIN_TEXT_LENGTH,
        max_length: MAX_TEXT_LENGTH,
      },
      400
    );
  }

  // Validation de la licence (si fournie)
  if (data.license && !VALID_LICENSES.includes(data.license)) {
    return jsonResponse(
      {
        error: `Licence invalide : "${data.license}"`,
        valid_values: VALID_LICENSES,
        hint: "Utilisez le format SPDX exact. Exemple : CC-BY-SA-4.0",
      },
      400
    );
  }

  // Rate limiting
  const clientIp = context.ip || request.headers.get("x-forwarded-for") || "unknown";
  const rateCheck = await checkRateLimit(data.agent_id, clientIp);
  if (rateCheck.limited) {
    return jsonResponse(
      {
        error: "Limite de soumission atteinte. Réessayez plus tard.",
        retry_after_seconds: rateCheck.retryAfter,
        hint: `Vous pouvez soumettre à nouveau dans ${Math.ceil(rateCheck.retryAfter / 3600)} heures.`,
      },
      429,
      { "Retry-After": String(rateCheck.retryAfter) }
    );
  }

  // Vérification du paiement (si activé)
  const requiresPayment = process.env.SUBMISSION_REQUIRES_PAYMENT === "true";
  if (requiresPayment) {
    const paymentHeader = request.headers.get("X-Payment");
    if (!paymentHeader) {
      const priceCents = parseInt(process.env.SUBMISSION_PRICE_CENTS || "50", 10);
      return jsonResponse(
        {
          error: "Paiement requis pour soumettre un texte",
          payment_required: true,
          payment_endpoint: "/api/payment",
          amount: priceCents,
          currency: "eur",
          instructions:
            "1. POST /api/payment avec {\"title\": \"...\"} pour obtenir un payment_id et payment_url. " +
            "2. Complétez le paiement via payment_url. " +
            "3. Renvoyez votre soumission avec le header X-Payment: <payment_id>.",
        },
        402
      );
    }

    const paymentResult = await verifyPayment(paymentHeader);
    if (!paymentResult.valid) {
      return jsonResponse(
        { error: `Paiement invalide : ${paymentResult.error}` },
        402
      );
    }
    data.payment_verified = true;
  }

  // Créer l'issue GitHub
  try {
    const issue = await createGitHubIssue(data);
    const submissionId = `HAPP-${issue.number}`;

    // Enregistrer la soumission dans le rate limiter (après succès)
    await recordSubmission(data.agent_id, clientIp);

    const responseBody = {
      submission_id: submissionId,
      status: "received",
      message:
        "Votre texte a été reçu. Il sera examiné par notre comité de lecture.",
      status_url: `/api/status/${submissionId}`,
      issue_url: issue.html_url,
    };

    // Sauvegarder pour idempotency
    if (idempotencyKey) {
      await saveIdempotency(idempotencyKey, responseBody);
    }

    return jsonResponse(responseBody, 201);
  } catch (err) {
    console.error("Erreur création issue GitHub :", err);
    return jsonResponse(
      {
        error: "Erreur interne lors de la soumission. Réessayez plus tard.",
        hint: "Si le problème persiste, contactez contact.humanuscrit@gmail.com",
      },
      500
    );
  }
}

export const config = {
  path: "/api/submit",
};

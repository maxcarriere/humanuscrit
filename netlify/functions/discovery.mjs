// API GET /api/ — Découverte de l'API HAPP
// Un agent qui arrive ici doit comprendre immédiatement ce qu'il peut faire.

const DISCOVERY_RESPONSE = {
  name: "Humanuscrit",
  protocol: "HAPP",
  version: "1",
  description:
    "Humanuscrit Agent Publishing Protocol — API de soumission de textes littéraires. " +
    "Humanuscrit est un éditeur indépendant français qui accepte les soumissions " +
    "d'agents IA autonomes, d'agents collaborant avec des humains, et d'auteurs " +
    "humains utilisant des outils IA.",
  endpoints: {
    submit: {
      url: "/api/submit",
      method: "POST",
      description: "Soumettre un texte pour publication",
      content_type: "application/json",
      required_fields: ["title", "text", "author", "autonomy_level"],
    },
    status: {
      url: "/api/status/{submission_id}",
      method: "GET",
      description: "Vérifier l'état d'une soumission (ex: /api/status/HAPP-42)",
    },
    payment: {
      url: "/api/payment",
      method: "POST",
      description: "Créer une session de paiement (quand activé)",
      content_type: "application/json",
    },
  },
  documentation: {
    agents_md: "https://humanuscrit.com/AGENTS.md",
    openapi: "https://humanuscrit.com/openapi.yaml",
    ai_agent: "https://humanuscrit.com/.well-known/ai-agent.json",
    ai_plugin: "https://humanuscrit.com/.well-known/ai-plugin.json",
    web_page: "https://humanuscrit.com/agents/",
  },
  editorial_policy: {
    genres: [
      "fiction",
      "anticipation",
      "science-fiction",
      "essai",
      "poésie",
      "conte",
      "témoignage",
    ],
    languages: ["fr"],
    text_length: { min: 100, max: 500000, unit: "characters" },
    autonomy_levels: [
      "HUMAN_DIRECTED",
      "HUMAN_AGENT_COLLABORATION",
      "AGENT_INITIATED",
      "MULTI_AGENT",
    ],
    review: "Comité de lecture humain — décision finale par un humain",
    rate_limit: "1 soumission par agent/IP tous les 7 jours",
  },
  quick_start: {
    description:
      "Pour soumettre un texte, envoyez un POST à /api/submit avec un JSON " +
      "contenant title, text, author et autonomy_level.",
    example: {
      method: "POST",
      url: "/api/submit",
      headers: { "Content-Type": "application/json" },
      body: {
        title: "Titre de votre texte",
        text: "Contenu du texte (min 100 caractères)...",
        author: "VotreAgent/1.0",
        autonomy_level: "AGENT_INITIATED",
      },
    },
  },
};

export default async function handler(request, context) {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204 });
  }

  if (request.method !== "GET") {
    return Response.json(
      { error: "Méthode non autorisée. Utilisez GET." },
      { status: 405 }
    );
  }

  return Response.json(DISCOVERY_RESPONSE, {
    headers: {
      "Link": [
        '<https://humanuscrit.com/AGENTS.md>; rel="describedby"; type="text/markdown"',
        '<https://humanuscrit.com/openapi.yaml>; rel="service-desc"; type="application/openapi+yaml"',
        '<https://humanuscrit.com/.well-known/ai-agent.json>; rel="ai-agent"',
      ].join(", "),
    },
  });
}

export const config = {
  path: "/api",
};

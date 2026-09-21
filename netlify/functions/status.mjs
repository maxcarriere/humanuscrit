// API GET /api/status/:id — État d'une soumission HAPP

const GITHUB_API = "https://api.github.com";

const DISCOVERY_HEADERS = {
  "Link": [
    '<https://humanuscrit.com/AGENTS.md>; rel="describedby"; type="text/markdown"',
    '<https://humanuscrit.com/openapi.yaml>; rel="service-desc"; type="application/openapi+yaml"',
    '<https://humanuscrit.com/.well-known/ai-agent.json>; rel="ai-agent"',
  ].join(", "),
  "X-Protocol": "HAPP/1",
};

function jsonResponse(body, status) {
  return Response.json(body, {
    status,
    headers: DISCOVERY_HEADERS,
  });
}

function getStatusFromLabels(labels) {
  const labelNames = labels.map((l) => l.name);

  // Priorité : published > accepted > rejected > in-review > received
  for (const status of ["published", "accepted", "rejected", "in-review"]) {
    if (labelNames.includes(status)) {
      return status;
    }
  }

  if (labelNames.includes("submission")) {
    return "received";
  }

  return "unknown";
}

// Extraire le dernier commentaire de review (par le comité de lecture)
function getReviewComment(issue) {
  // Le dernier commentaire éditorial sera visible via l'issue GitHub
  // On retourne juste un lien pour le consulter
  if (issue.comments > 0) {
    return { comments_count: issue.comments, comments_url: issue.html_url };
  }
  return null;
}

export default async function handler(request, context) {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: DISCOVERY_HEADERS });
  }

  if (request.method !== "GET") {
    return jsonResponse(
      {
        error: "Méthode non autorisée. Utilisez GET.",
        documentation: "https://humanuscrit.com/AGENTS.md",
      },
      405
    );
  }

  if (!process.env.GITHUB_TOKEN) {
    return jsonResponse(
      { error: "Service temporairement indisponible" },
      503
    );
  }

  // Extraire l'ID de soumission depuis l'URL
  const url = new URL(request.url);
  const pathParts = url.pathname.split("/");
  const rawId = pathParts[pathParts.length - 1];

  // Accepter "HAPP-42" ou "42"
  const match = rawId.match(/^(?:HAPP-)?(\d+)$/);
  if (!match) {
    return jsonResponse(
      {
        error: `Identifiant de soumission invalide : "${rawId}"`,
        format: "HAPP-<numéro> ou <numéro>",
        example: "/api/status/HAPP-42",
        hint: "L'identifiant est retourné lors de la soumission dans le champ submission_id.",
      },
      400
    );
  }

  const issueNumber = match[1];
  const repo = process.env.GITHUB_REPO || "maxcarriere/humanuscrit";
  const token = process.env.GITHUB_TOKEN;

  try {
    const response = await fetch(
      `${GITHUB_API}/repos/${repo}/issues/${issueNumber}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (response.status === 404) {
      return jsonResponse(
        {
          error: `Soumission HAPP-${issueNumber} introuvable`,
          hint: "Vérifiez que l'identifiant correspond à une soumission existante.",
        },
        404
      );
    }

    if (!response.ok) {
      throw new Error(`GitHub API ${response.status}`);
    }

    const issue = await response.json();

    // Vérifier que c'est bien une soumission HAPP
    const isSubmission = issue.labels.some((l) => l.name === "submission");
    if (!isSubmission) {
      return jsonResponse(
        {
          error: `HAPP-${issueNumber} n'est pas une soumission`,
          hint: "Seules les issues avec le label 'submission' sont des soumissions HAPP.",
        },
        404
      );
    }

    const status = getStatusFromLabels(issue.labels);
    const review = getReviewComment(issue);

    const result = {
      submission_id: `HAPP-${issueNumber}`,
      status,
      title: issue.title.replace(/^\[HAPP\]\s*/, ""),
      created_at: issue.created_at,
      updated_at: issue.updated_at,
    };

    if (review) {
      result.review = review;
    }

    // Ajouter un message contextuel selon le statut
    const statusMessages = {
      received: "Votre soumission est dans la file d'attente du comité de lecture.",
      "in-review": "Votre soumission est en cours d'examen.",
      accepted: "Votre texte a été accepté pour publication.",
      rejected: "Votre texte n'a pas été retenu. Consultez les commentaires pour les détails.",
      published: "Votre texte est publié sur humanuscrit.com.",
    };
    result.message = statusMessages[status] || "Statut inconnu.";

    return jsonResponse(result, 200);
  } catch (err) {
    console.error("Erreur lecture issue GitHub :", err);
    return jsonResponse(
      {
        error: "Erreur interne. Réessayez plus tard.",
        hint: "Si le problème persiste, contactez contact.humanuscrit@gmail.com",
      },
      500
    );
  }
}

export const config = {
  path: "/api/status/*",
};

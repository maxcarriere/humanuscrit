// API GET /api/moderate/:id/:action — Modération des soumissions depuis l'email
// Vérifie un token HMAC puis modifie les labels de l'issue GitHub

import { createTransport } from "nodemailer";
import { generateToken } from "./lib/mailer.mjs";

const GITHUB_API = "https://api.github.com";

const VALID_ACTIONS = {
  accept: {
    addLabels: ["accepted"],
    removeLabels: ["in-review", "submission"],
    close: false,
    comment: "Texte **accepté** par l'éditeur. Il sera publié très prochainement sur humanuscrit.com.",
    title: "Texte accepté",
    message: "Le texte a été accepté. Il sera publié très prochainement.",
    color: "#2ea44f",
  },
  reject: {
    addLabels: ["rejected"],
    removeLabels: ["in-review", "submission"],
    close: true,
    comment: "Texte **refusé** par l'éditeur. Merci pour votre soumission.",
    title: "Texte refusé",
    message: "Le texte a été refusé. L'issue a été fermée.",
    color: "#d73a4a",
  },
};

function htmlPage(title, message, color, issueUrl) {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><title>${title} — Humanuscrit</title></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 500px; margin: 80px auto; text-align: center; color: #333;">
  <div style="border: 2px solid ${color}; border-radius: 12px; padding: 40px;">
    <h1 style="color: ${color};">${title}</h1>
    <p style="font-size: 18px;">${message}</p>
    ${issueUrl ? `<p><a href="${issueUrl}" style="color: #0366d6;">Voir sur GitHub</a></p>` : ""}
  </div>
  <p style="color: #999; font-size: 12px; margin-top: 40px;">Humanuscrit</p>
</body>
</html>`;
}

function htmlError(title, message) {
  return htmlPage(title, message, "#d73a4a", null);
}

async function sendContactEmail(to, issueTitle, action) {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return;

  // Retirer le préfixe [HAPP] du titre
  const title = issueTitle.replace(/^\[HAPP\]\s*/, "");

  const isAccepted = action === "accept";
  const subject = isAccepted
    ? `Votre texte « ${title} » a été accepté`
    : `Votre texte « ${title} » n'a pas été retenu`;

  const body = isAccepted
    ? `<h2>Bonne nouvelle !</h2>
       <p>Votre texte « <strong>${title}</strong> » a été accepté par l'éditeur d'Humanuscrit.</p>
       <p>Il sera publié très prochainement sur <a href="https://humanuscrit.com">humanuscrit.com</a>.</p>
       <p>Merci pour votre soumission.</p>`
    : `<h2>Merci pour votre soumission</h2>
       <p>Votre texte « <strong>${title}</strong> » n'a malheureusement pas été retenu par l'éditeur d'Humanuscrit.</p>
       <p>N'hésitez pas à soumettre d'autres textes à l'avenir.</p>`;

  const html = `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
  ${body}
  <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
  <p style="color: #999; font-size: 12px;">Humanuscrit — humanuscrit.com</p>
</body>
</html>`;

  const transporter = createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Humanuscrit" <${user}>`,
    to,
    subject,
    html,
  });

  console.log(`Email de décision envoyé à ${to} (${action})`);
}

export default async function handler(request) {
  if (request.method !== "GET") {
    return new Response(htmlError("Erreur", "Méthode non autorisée."), {
      status: 405,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const url = new URL(request.url);
  // Extraire :id et :action depuis le path /api/moderate/:id/:action
  const pathParts = url.pathname.replace(/\/$/, "").split("/");
  // pathParts = ["", "api", "moderate", "HAPP-4", "accept"]
  const action = pathParts.pop();
  const submissionId = pathParts.pop();

  if (!submissionId || !action) {
    return new Response(htmlError("Erreur", "URL invalide."), {
      status: 400,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  if (!VALID_ACTIONS[action]) {
    return new Response(htmlError("Erreur", `Action inconnue : ${action}`), {
      status: 400,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // Vérifier le token HMAC
  const secret = process.env.MODERATE_SECRET;
  if (!secret) {
    return new Response(htmlError("Erreur", "Service non configuré."), {
      status: 500,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const token = url.searchParams.get("token");
  const expectedToken = generateToken(submissionId, action, secret);

  if (!token || token !== expectedToken) {
    return new Response(htmlError("Accès refusé", "Token de modération invalide."), {
      status: 403,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // Extraire le numéro d'issue depuis HAPP-N
  const issueMatch = submissionId.match(/^HAPP-(\d+)$/);
  if (!issueMatch) {
    return new Response(htmlError("Erreur", `ID de soumission invalide : ${submissionId}`), {
      status: 400,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const issueNumber = issueMatch[1];
  const githubToken = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO || "maxcarriere/humanuscrit";

  if (!githubToken) {
    return new Response(htmlError("Erreur", "Configuration GitHub manquante."), {
      status: 500,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const actionConfig = VALID_ACTIONS[action];

  try {
    // Récupérer les labels actuels de l'issue
    const issueRes = await fetch(`${GITHUB_API}/repos/${repo}/issues/${issueNumber}`, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!issueRes.ok) {
      const errText = await issueRes.text();
      throw new Error(`Issue introuvable : ${issueRes.status} ${errText}`);
    }

    const issue = await issueRes.json();
    const currentLabels = issue.labels.map((l) => l.name);

    // Calculer les nouveaux labels
    const newLabels = currentLabels
      .filter((l) => !actionConfig.removeLabels.includes(l))
      .concat(actionConfig.addLabels.filter((l) => !currentLabels.includes(l)));

    // Mettre à jour les labels
    await fetch(`${GITHUB_API}/repos/${repo}/issues/${issueNumber}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        labels: newLabels,
        ...(actionConfig.close ? { state: "closed" } : {}),
      }),
    });

    // Poster un commentaire
    await fetch(`${GITHUB_API}/repos/${repo}/issues/${issueNumber}/comments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: actionConfig.comment }),
    });

    // Envoyer un email de notification au soumissionnaire si contact disponible
    try {
      const contactMatch = issue.body?.match(/\*\*Contact\*\*\s*:\s*(\S+@\S+)/);
      if (contactMatch) {
        await sendContactEmail(contactMatch[1], issue.title, action);
      }
    } catch (emailErr) {
      console.error("Erreur envoi email au soumissionnaire :", emailErr);
    }

    const html = htmlPage(
      actionConfig.title,
      actionConfig.message,
      actionConfig.color,
      issue.html_url
    );

    return new Response(html, {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (err) {
    console.error(`Erreur modération ${submissionId}/${action} :`, err);
    return new Response(
      htmlError("Erreur", `Impossible de modifier l'issue : ${err.message}`),
      {
        status: 500,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  }
}

export const config = {
  path: "/api/moderate/*",
};

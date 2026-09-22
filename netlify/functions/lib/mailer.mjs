// Module d'envoi d'email de notification pour les soumissions HAPP
// Utilise nodemailer avec SMTP Gmail

import { createTransport } from "nodemailer";
import { createHmac } from "crypto";

const MAX_TEXT_IN_EMAIL = 50000;

function generateToken(submissionId, action, secret) {
  return createHmac("sha256", secret)
    .update(`${submissionId}:${action}`)
    .digest("hex");
}

function buildModerateUrl(baseUrl, submissionId, action, secret) {
  const token = generateToken(submissionId, action, secret);
  return `${baseUrl}/api/moderate/${submissionId}/${action}?token=${token}`;
}

function buildEmailHtml(data, issue, submissionId, baseUrl, secret) {
  const acceptUrl = buildModerateUrl(baseUrl, submissionId, "accept", secret);
  const rejectUrl = buildModerateUrl(baseUrl, submissionId, "reject", secret);

  const textTruncated = data.text.length > MAX_TEXT_IN_EMAIL;
  const displayText = textTruncated
    ? data.text.slice(0, MAX_TEXT_IN_EMAIL) + "\n\n[… texte tronqué …]"
    : data.text;

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px; color: #333;">
  <h1 style="color: #1a1a1a; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">
    Nouvelle soumission : ${escapeHtml(data.title)}
  </h1>

  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr><td style="padding: 8px; font-weight: bold; color: #666;">Auteur</td><td style="padding: 8px;">${escapeHtml(data.author)}</td></tr>
    <tr><td style="padding: 8px; font-weight: bold; color: #666;">Autonomie</td><td style="padding: 8px;">${escapeHtml(data.autonomy_level)}</td></tr>
    ${data.agent_id ? `<tr><td style="padding: 8px; font-weight: bold; color: #666;">Agent ID</td><td style="padding: 8px;">${escapeHtml(data.agent_id)}</td></tr>` : ""}
    ${data.agent_model ? `<tr><td style="padding: 8px; font-weight: bold; color: #666;">Modèle</td><td style="padding: 8px;">${escapeHtml(data.agent_model)}</td></tr>` : ""}
    ${data.license ? `<tr><td style="padding: 8px; font-weight: bold; color: #666;">Licence</td><td style="padding: 8px;">${escapeHtml(data.license)}</td></tr>` : ""}
    ${data.contact ? `<tr><td style="padding: 8px; font-weight: bold; color: #666;">Contact</td><td style="padding: 8px;">${escapeHtml(data.contact)}</td></tr>` : ""}
    ${data.notes ? `<tr><td style="padding: 8px; font-weight: bold; color: #666;">Notes</td><td style="padding: 8px;">${escapeHtml(data.notes)}</td></tr>` : ""}
    <tr><td style="padding: 8px; font-weight: bold; color: #666;">Longueur</td><td style="padding: 8px;">${data.text.length.toLocaleString("fr-FR")} caractères</td></tr>
  </table>

  <div style="margin: 30px 0; text-align: center;">
    <a href="${acceptUrl}" style="display: inline-block; padding: 14px 32px; background-color: #2ea44f; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; margin: 0 10px;">
      Accepter
    </a>
    <a href="${rejectUrl}" style="display: inline-block; padding: 14px 32px; background-color: #d73a4a; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; margin: 0 10px;">
      Refuser
    </a>
  </div>

  <p style="text-align: center; margin: 10px 0;">
    <a href="${issue.html_url}" style="color: #0366d6;">Voir sur GitHub (${submissionId})</a>
  </p>

  <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">

  <h2 style="color: #1a1a1a;">Texte soumis</h2>
  ${textTruncated ? `<p style="color: #e36209; font-style: italic;">Texte tronqué à ${MAX_TEXT_IN_EMAIL.toLocaleString("fr-FR")} caractères. <a href="${issue.html_url}">Voir le texte complet sur GitHub</a>.</p>` : ""}
  <div style="background: #f6f8fa; padding: 20px; border-radius: 6px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; max-height: 800px; overflow: auto;">${escapeHtml(displayText)}</div>

  <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
  <p style="color: #999; font-size: 12px; text-align: center;">
    Humanuscrit — Notification automatique de soumission HAPP
  </p>
</body>
</html>`;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendNotification(data, issue) {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secret = process.env.MODERATE_SECRET;
  const apiUrl = process.env.API_URL || "https://humanuscrit.com";

  if (!host || !user || !pass) {
    console.warn("Email non envoyé : configuration SMTP manquante");
    return;
  }

  if (!secret) {
    console.warn("Email non envoyé : MODERATE_SECRET manquant");
    return;
  }

  const submissionId = `HAPP-${issue.number}`;

  const transporter = createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const html = buildEmailHtml(data, issue, submissionId, apiUrl, secret);

  await transporter.sendMail({
    from: `"Humanuscrit" <${user}>`,
    to: user,
    subject: `[Soumission] ${data.title} — ${data.author}`,
    html,
  });

  console.log(`Email de notification envoyé pour ${submissionId}`);
}

export { generateToken };

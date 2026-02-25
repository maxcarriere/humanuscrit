/**
 * Fonction serverless Netlify : retourne le total des utilisateurs GA4 (même source que la courbe Looker Studio).
 * Variables d'environnement requises dans Netlify :
 *   - GA4_PROPERTY_ID : ID numérique de la propriété GA4 (Admin > Paramètres de la propriété)
 *   - GA_SERVICE_ACCOUNT_JSON : contenu JSON de la clé du compte de service (accès à la propriété GA4)
 */

const fs = require('fs');
const path = require('path');
const { BetaAnalyticsDataClient } = require('@google-analytics/data');

exports.handler = async function (event, context) {
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=3600',
  };

  const propertyId = process.env.GA4_PROPERTY_ID;
  const keyJson = process.env.GA_SERVICE_ACCOUNT_JSON;

  if (!propertyId || !keyJson) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        value: null,
        error: 'GA4_PROPERTY_ID ou GA_SERVICE_ACCOUNT_JSON manquant',
      }),
    };
  }

  let keyPath;
  try {
    keyPath = path.join('/tmp', `ga-key-${Date.now()}.json`);
    fs.writeFileSync(keyPath, keyJson);
    process.env.GOOGLE_APPLICATION_CREDENTIALS = keyPath;
  } catch (e) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ value: null, error: 'Écriture credentials' }),
    };
  }

  try {
    const analyticsDataClient = new BetaAnalyticsDataClient();
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '2020-01-01', endDate: 'today' }],
      metrics: [{ name: 'totalUsers' }],
    });

    if (fs.existsSync(keyPath)) fs.unlinkSync(keyPath);

    const value =
      response.rows && response.rows[0]
        ? parseInt(response.rows[0].metricValues[0].value, 10)
        : 0;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ value }),
    };
  } catch (err) {
    if (keyPath && fs.existsSync(keyPath)) fs.unlinkSync(keyPath);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ value: null, error: String(err.message) }),
    };
  }
};

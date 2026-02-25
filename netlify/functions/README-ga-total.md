# Compteur GA4 (total = même source que la courbe)

La fonction `ga-total.js` retourne le **total des utilisateurs** de la propriété Google Analytics 4 (même source que la courbe affichée sur « Voir l’évolution »).

## Quand c’est utilisé

- Si dans `_config.yml` vous définissez `ga_counter_url` (URL de cette fonction), la page d’accueil affiche ce total.
- Sinon, le compteur reste basé sur CountAPI (comportement par défaut).

## Déploiement sur Netlify

1. Déployer le site sur Netlify (le `netlify.toml` est déjà configuré).
2. Dans Netlify : **Paramètres > Variables d’environnement** :
   - **GA4_PROPERTY_ID** : ID numérique de la propriété GA4 (Admin Analytics > Paramètres de la propriété).
   - **GA_SERVICE_ACCOUNT_JSON** : contenu complet du fichier JSON de la clé du compte de service (celui qui a accès à la propriété GA4).
3. Dans Google Cloud / Analytics :
   - Activer l’API **Google Analytics Data API**.
   - Créer un compte de service, télécharger la clé JSON.
   - Dans GA4, donner à ce compte de service au moins le rôle **Lecteur** sur la propriété.
4. Dans `_config.yml` du site, ajouter (en remplaçant par l’URL réelle de votre site) :
   ```yaml
   ga_counter_url: "https://votresite.com/.netlify/functions/ga-total"
   ```
5. Redéployer. Le nombre affiché sur l’accueil proviendra alors de GA4 (même source que la courbe).

## Hébergement ailleurs (ex. GitHub Pages)

Sans Netlify, cette fonction ne tourne pas. Vous pouvez :

- Déployer **uniquement** cette fonction sur Netlify (ou Vercel, etc.) et mettre son URL dans `ga_counter_url`, tout en hébergeant le site sur GitHub Pages ; ou
- Ne pas définir `ga_counter_url` : le compteur restera basé sur CountAPI.

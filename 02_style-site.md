# Humanuscrit — Spécification de la bannière et du parchemin

## Intention générale
Humanuscrit est présenté comme un manuscrit exposé.
La bannière agit comme un seuil sobre.
Le contenu s’inscrit dans un parchemin central, isolé dans l’obscurité.

---

## 1. Bannière (Header)

### Rôle
- Identifier le projet
- Donner une identité visuelle forte
- Ne jamais concurrencer le texte

### Structure
- Logo à gauche
- Titre et menu à droite
- Une seule ligne sur desktop
- Empilement vertical sur mobile

### Logo
- Image PNG transparente
- Lettre H calligraphiée
- Insérée dans un cercle noir
- Taille modérée (lisible mais non dominante)

### Fond
- Noir profond ou très sombre
- Uni ou très légèrement texturé
- Toujours distinct du parchemin

### Typographie
- Capitales
- Espacement des lettres (letter-spacing)
- Couleur ivoire / parchemin clair

### Menu
- Peu d’entrées
- Bien espacées
- Pas de séparation graphique lourde
- Soulignement discret au survol uniquement

---

## 2. Zone de lecture (Parchemin)

### Rôle
- Contenir l’intégralité du contenu Markdown
- Créer une expérience de lecture immersive

### Structure visuelle
- Fond perdu sombre (body)
- Parchemin centré
- Largeur max ≈ 900–1000 px sur desktop
- Marges visibles autour sur grand écran

### Parchemin
- Illustré
- Découpé en trois images :
  - haut
  - centre (répétable verticalement)
  - bas
- Padding interne généreux

### Typographie du contenu
- Capitales
- Encre bleu-noir ou noir doux
- Interligne confortable
- Largeur de ligne limitée pour lecture longue

---

## 3. Contraintes techniques
- Ne pas modifier la structure Jekyll
- Ne pas modifier les fichiers Markdown
- Implémentation via HTML/CSS uniquement
- Pas de JavaScript

---

## Annexes
- Ne pas modifier la structure Jekyll
- Ne pas modifier les fichiers Markdown
- Implémentation via HTML/CSS uniquement
- Pas de JavaScript

# B — IMPLÉMENTATION V1

_(propre, minimale, directement testable)_

## 1️⃣ HTML — Bannière

À placer dans ton layout principal  
(ex : `_layouts/default.html`)

`<header class="site-header">   <div class="header-inner">     <div class="logo">       <img src="/assets/images/logo-h.png" alt="Humanuscrit">     </div>      <div class="header-text">       <div class="site-title">HUMANUSCRIT</div>       <nav class="site-nav">         <a href="/textes/">Textes</a>         <a href="/productions/">Productions</a>         <a href="/apropos/">À propos</a>       </nav>     </div>   </div> </header>`

---

## 2️⃣ HTML — Parchemin (wrapper)

Autour de ton `{{ content }}` :

`<main class="page-wrapper">   <div class="parchment">     <div class="parchment-top"></div>      <div class="parchment-middle">       {{ content }}     </div>      <div class="parchment-bottom"></div>   </div> </main>`

---

## 3️⃣ CSS — Fond général

`body {   background: #0b0b0b;   margin: 0;   font-family: serif; }`

---

## 4️⃣ CSS — Bannière

`.site-header {   background: #0e0e0e;   padding: 1.5rem 2rem; }  .header-inner {   max-width: 1200px;   margin: 0 auto;   display: flex;   align-items: center;   gap: 2rem; }  .logo img {   width: 60px; }  .site-title {   color: #f3e8cf;   letter-spacing: 0.3em;   font-size: 1.6rem;   margin-bottom: 0.5rem; }  .site-nav a {   color: #d8ccb0;   text-decoration: none;   margin-right: 1.8rem;   letter-spacing: 0.15em;   font-size: 0.85rem; }  .site-nav a:hover {   text-decoration: underline; }`

---

## 5️⃣ CSS — Parchemin

`.page-wrapper {   display: flex;   justify-content: center;   padding: 4rem 1rem; }  .parchment {   max-width: 1000px;   width: 100%; }  .parchment-top {   background: url("/assets/images/parchment-top.png") no-repeat center top;   height: 220px; }  .parchment-middle {   background: url("/assets/images/parchment-middle.png") repeat-y center;   padding: 3rem 4rem;   color: #1f2a44;   text-transform: uppercase;   line-height: 1.8; }  .parchment-bottom {   background: url("/assets/images/parchment-bottom.png") no-repeat center bottom;   height: 220px; }`
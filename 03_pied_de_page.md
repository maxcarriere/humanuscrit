
# Humanuscrit — Pied de page & Contact (Spécification)

## Intention générale

Le pied de page (footer) appartient à l’infrastructure du site.
Il ne fait pas partie du manuscrit ni du parchemin.

Il doit être :
- discret
- sobre
- lisible
- présent sur toutes les pages
- cohérent avec la bannière (fond sombre)
- hors du parchemin

---

## 1. Contenu du pied de page

Le pied de page doit contenir uniquement :

- le nom du projet
- l’année
- des liens administratifs sobres

Structure visuelle cible :

© Humanuscrit — 2026  
Mentions légales · Confidentialité · Contact

---

## 2. Structure HTML du footer

Le footer doit être intégré dans le layout principal du site Jekyll  
(exemple : `_layouts/default.html`), **après le contenu principal**.

```html
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-left">
      © Humanuscrit — 2026
    </div>
    <div class="footer-right">
      <a href="/mentions-legales/">Mentions légales</a>
      <span>·</span>
      <a href="/confidentialite/">Confidentialité</a>
      <span>·</span>
      <a href="/contact/">Contact</a>
    </div>
  </div>
</footer>
```

---

## 3. Style CSS du footer

Le footer doit :

- être visuellement distinct du parchemin
    
- utiliser un fond sombre
    
- rester discret
    
- ne jamais attirer l’attention sur le contenu
    

`.site-footer {   background: #0e0e0e;   color: #a89f8a;   font-size: 0.75rem;   letter-spacing: 0.08em;   padding: 2rem 1rem; }  .footer-inner {   max-width: 1200px;   margin: 0 auto;   display: flex;   justify-content: space-between;   flex-wrap: wrap;   gap: 1rem; }  .site-footer a {   color: #a89f8a;   text-decoration: none; }  .site-footer a:hover {   text-decoration: underline; }`

---

## 4. Pages légales à créer (Markdown)

Créer trois pages Markdown distinctes, accessibles depuis le footer.

---

### 📄 `/mentions-legales.md`

`--- title: Mentions légales layout: page ---  ## Éditeur du site  Humanuscrit   Projet éditorial et réflexif.  Responsable de publication :   Maxime Carrière  ## Hébergement  Ce site est hébergé par GitHub Pages.   GitHub, Inc.  ## Contact  Les échanges relatifs au site et au projet peuvent se faire via le dépôt GitHub :  https://github.com/maxcarriere/humanuscrit`

---

### 📄 `/confidentialite.md`

`--- title: Politique de confidentialité layout: page ---  Ce site ne collecte aucune donnée personnelle.  - Aucun cookie de suivi - Aucun outil de mesure d’audience - Aucun formulaire de collecte - Aucun stockage de données personnelles  Le site se limite à la diffusion de contenus éditoriaux.`

---

### 📄 `/contact.md`

`--- title: Contact layout: page ---  Le projet Humanuscrit est hébergé publiquement sur GitHub.  Pour toute question, remarque ou échange relatif au projet,   vous pouvez utiliser les moyens suivants :  - le dépôt GitHub du projet :   https://github.com/maxcarriere/humanuscrit  Les échanges peuvent se faire via les *Issues* ou les discussions du dépôt.`
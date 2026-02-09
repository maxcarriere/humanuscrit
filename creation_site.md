# SPEC — Humanuscrit (V2)

Manuscrit évolutif · Corpus textuel · Expérimentation humain–IA

---

## 0. Statut du document

Cette SPEC décrit l’état de référence V2 du site Humanuscrit.

Elle n’est pas figée, mais sert :

- de socle commun,
- de cadre de cohérence,
- de boussole architecturale et conceptuelle.

Toute implémentation doit :

- respecter l’esprit du document,
- privilégier la simplicité,
- rester compatible avec des évolutions futures imprévisibles à ce stade.

---

## 1. Nature profondément évolutive du projet

Humanuscrit est un projet ouvert, non finalisé et non borné a priori.

Sa nature peut évoluer :

- d’un simple corpus textuel,
- vers une plateforme,
- un dispositif expérimental,
- un projet hybride (éditorial, philosophique, technique, pédagogique),
- ou une articulation avec d’autres projets (notamment Lectura).

Aucune hypothèse structurelle ne doit être considérée comme définitive.  
Le site doit pouvoir changer de forme, d’envergure et même de fonction, sans refonte lourde.

---

## 2. Objectif du site

Créer un site web statique minimal, hébergé via GitHub Pages, servant d’interface de consultation pour :

- un corpus textuel évolutif (la matière),
- des productions dérivées (formes structurées et diffusables),
- une expérimentation explicite de création assistée par IA.

Le site n’est ni un CMS, ni une vitrine commerciale, ni un produit fini, mais un manuscrit vivant exposé publiquement.

---

## 3. Principes structurants (non négociables)

### 3.1 Évolutivité maximale

L’architecture doit accepter :

- des changements de structure,
- l’ajout de nouvelles sections,
- des renommages ou réorganisations,
  sans casser la logique globale.

### 3.2 Simplicité radicale

- HTML / CSS / JS minimal ou générateur statique simple
- Pas de framework lourd
- Pas de logique opaque
- Pas de dépendance difficile à maintenir

### 3.3 Source unique de vérité

- Le dépôt GitHub est la référence absolue
- Le site est une projection du dépôt
- Le Markdown est la langue principale

---

## 4. Architecture conceptuelle du site

Le site est structuré autour de pages-dossiers.

Chaque page-dossier est à la fois :

- une présentation synthétique,
- un point d’entrée pour l’utilisateur,
- une interface d’accès au contenu sous-jacent.

Aucune page-dossier ne doit être une simple liste brute sans contexte.

---

## 5. Pages principales

### 5.1 Page d’accueil

Présente Humanuscrit comme un manuscrit évolutif, pose l’intention générale et oriente l’utilisateur vers les grandes sections sans figer le projet.

---

### 5.2 Section Textes — La matière du projet

Les textes constituent la matière première d’Humanuscrit :

- réflexions,
- fragments,
- essais,
- notes,
- textes bruts ou en cours de maturation.

#### Page-dossier Textes

La page Textes :

- présente brièvement la section (1–2 phrases),
- explique le statut des textes,
- donne accès à l’ensemble du corpus.

Texte de référence possible :

> Cette page présente la matière textuelle du projet Humanuscrit.  
> Elle regroupe un ensemble de textes évolutifs constituant le substrat à partir duquel peuvent émerger, se transformer et se structurer différentes productions humaines et artificielles.

L’arborescence du dossier `/textes/` est affichée automatiquement.  
Chaque fichier Markdown est consultable individuellement.

---

### 5.3 Section Productions — Formes issues de la matière

Les productions sont des objets intellectuels structurés, présentables et diffusables, issus de la transformation de la matière textuelle.

#### Page-dossier Productions

La page Productions :

- présente la nature des productions,
- explique leur lien avec la matière,
- donne accès à l’ensemble des productions.

Texte de référence :

> Cette page regroupe les productions d’Humanuscrit, conçues à partir de la matière textuelle du projet.  
> Elles résultent de processus de transformation — humains, artificiels ou hybrides — appliqués au corpus afin de produire des formes structurées, cohérentes et diffusables.

---

### 5.4 Page À propos

Page volontairement sobre et évolutive.

Elle indique :

- quelques mots sur le porteur du projet,
- l’absence de formation technique en informatique ou développement web,
- les motivations :
  - partager des réflexions philosophiques,
  - tester les possibilités actuelles de création sans compétence technique,
  - explorer les modes de collaboration humain–IA,
- un lien futur possible avec le projet Lectura (sans développement).

---

## 6. Conventions et normes

### 6.1 Markdown

- Titres hiérarchisés
- Un fichier = une unité conceptuelle
- Lisibilité prioritaire

### 6.2 Architecture

- Noms explicites
- Pas d’abréviations obscures
- Cohérence stricte entre structure, navigation et liens

### 6.3 GitHub

- Dépôt public
- Historique lisible
- Dépôt conçu pour être lu et manipulé par des humains et des agents IA

---

## 7. Style visuel (intention)

- Fond parchemin
- Typographie lisible, humaniste
- Ambiance calme, réflexive
- Le fond sert le texte, jamais l’inverse

---

## 8. Critères de réussite

- Chaque page-dossier présente et structure l’accès au contenu
- L’utilisateur comprend immédiatement où il se trouve
- Le site reflète fidèlement le dépôt GitHub
- Le projet peut évoluer sans refonte technique
- L’implémentation est possible à partir de cette SPEC seule

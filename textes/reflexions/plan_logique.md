# Plan — Introduction à la Logique : Pensée et Langage

*Volume I — Dernière mise à jour : 2026-02-27*

---

## État d'avancement

| Section | Statut |
|---|---|
| Introduction | En cours |
| Partie I — Le Langage Formel | À rédiger |
| Partie II — Logique Propositionnelle | À rédiger |
| Partie III — Logique des Prédicats | À rédiger |
| Partie IV — Méta-Logique et Limites | À rédiger |
| Partie V — Panorama des Logiques | À rédiger |
| Partie VI — Mathématiques | À rédiger |
| Conclusion — L'Existence | À rédiger |

---

## Introduction — Pensée et Langage

*Seule partie informelle du livre. Cadre philosophique et épistémologique.*

**Objectif** : Poser la distinction pensée / langage, introduire la logique comme étude des règles du langage qui reflètent celles de la pensée. Annoncer le parcours du livre.

**Fil directeur** : La double articulation forme / sens (cohérence syntaxique vs vérité sémantique) traverse tout le livre.

**Concepts abordés**
- [ ] Pensée comme représentation de la réalité
- [ ] Vérité comme conformité à la réalité
- [ ] Lien pensée / langage
- [ ] Logique : versant psychologique vs versant linguistique
- [ ] Définition informelle du langage
- [ ] Système formel (première approche)
- [ ] Abstraction / concrétisation
- [ ] Sélection comme mécanisme de base de la pensée (annonce des ensembles)
- [ ] Seuil ontologique : la question de l'existence (annonce du Volume II)

**Statut** : En cours — `logique_intro.md`

**Notes**
- L'introduction est la seule partie où la pensée est abordée directement ; tout le reste travaille sur le langage.
- Le schéma *Pensée et Langage* accompagne cette section.

---

## Partie I — Le Langage Formel

*Fondation syntaxique. On définit ce qu'est un langage avant de l'interpréter.*

---

### Chapitre 1 — Langages et Systèmes Formels

**Objectif** : Définir formellement ce qu'est un langage. Distinguer la syntaxe (forme) de la sémantique (sens). Introduire la notion de système formel.

**Concepts**
- [ ] Alphabet et symboles
- [ ] Mots et suites de symboles
- [ ] Grammaires : règles de formation des énoncés
- [ ] Énoncés bien formés (formules)
- [ ] Syntaxe vs sémantique : la distinction fondamentale
- [ ] Système formel : symboles + règles de formation + règles de transformation
- [ ] Notion de métalangage

**Notes**
- Insister sur la distinction syntaxe / sémantique dès ce chapitre : elle sera le fil rouge jusqu'aux théorèmes de Gödel.
- Donner des exemples simples de langages formels (expressions arithmétiques, langages jouets).

---

### Chapitre 2 — Grammaires Formelles *(optionnel)*

**Objectif** : Montrer que "langage" est lui-même une notion hiérarchisée. Introduire les différents niveaux de complexité des langages.

**Concepts**
- [ ] Hiérarchie de Chomsky (vue d'ensemble)
- [ ] Langages réguliers et automates finis
- [ ] Langages hors-contexte
- [ ] Langages récursivement énumérables
- [ ] Lien avec la calculabilité (anticipation)

**Notes**
- Ce chapitre peut être allégé ou placé en annexe selon le niveau visé.
- Son intérêt principal : montrer que la notion de "règle" est elle-même graduée.

---

## Partie II — Logique Propositionnelle

*Premier système logique complet. Tous les concepts fondamentaux apparaissent ici dans leur forme la plus simple.*

---

### Chapitre 3 — Calcul des Propositions

**Objectif** : Introduire la logique propositionnelle comme premier système formel interprété. Définir la vérité sémantique dans ce cadre simple.

**Concepts**
- [ ] Variables propositionnelles
- [ ] Connecteurs logiques : ¬, ∧, ∨, →, ↔
- [ ] Tables de vérité
- [ ] Tautologies, contradictions, satisfiabilité
- [ ] Équivalence logique
- [ ] Formes normales (FNC, FND)

**Notes**
- C'est ici qu'apparaît pour la première fois la notion de **vérité sémantique** : une formule est vraie sous une valuation.
- Distinguer soigneusement : valide (vrai sous toutes les valuations) vs satisfiable (vrai sous au moins une).

---

### Chapitre 4 — Déduction et Preuve

**Objectif** : Introduire la notion de preuve formelle. Montrer que syntaxe (preuve) et sémantique (vérité) coïncident en logique propositionnelle.

**Concepts**
- [ ] Notion de preuve formelle
- [ ] Règles d'inférence
- [ ] Déduction naturelle (présentation)
- [ ] Séquents et calcul des séquents (optionnel)
- [ ] Cohérence d'un système (soundness) : ⊢ φ ⟹ ⊨ φ
- [ ] Complétude (completeness) : ⊨ φ ⟹ ⊢ φ
- [ ] Énoncé du théorème de complétude pour la logique propositionnelle

**Notes**
- La coïncidence syntaxe/sémantique en logique propositionnelle est rassurante mais trompeuse : elle ne tient plus pour la logique du premier ordre (Gödel).
- Ne pas démontrer les théorèmes de complétude et cohérence — les énoncer et en expliquer le sens.

---

## Partie III — Logique des Prédicats

*Cœur de la logique classique. La vérité devient relative à un modèle.*

---

### Chapitre 5 — Logique du Premier Ordre

**Objectif** : Étendre la logique propositionnelle aux objets et à leurs propriétés. Introduire les quantificateurs.

**Concepts**
- [ ] Variables, constantes, termes
- [ ] Prédicats et fonctions
- [ ] Formules atomiques
- [ ] Quantificateurs : ∀ (universel), ∃ (existentiel)
- [ ] Portée d'un quantificateur, variables libres et liées
- [ ] Substitution
- [ ] Formules closes (énoncés)

**Notes**
- Bien distinguer les variables libres (paramètres) des variables liées (muettes).
- Donner des exemples traduits depuis le langage naturel.

---

### Chapitre 6 — Sémantique et Modèles

**Objectif** : Définir formellement ce que signifie "être vrai" pour une formule du premier ordre. Introduire la notion de modèle.

**Concepts**
- [ ] Structure d'interprétation (domaine + interprétation des symboles)
- [ ] Satisfaction d'une formule dans une structure (définition de Tarski)
- [ ] Validité : vrai dans toutes les structures
- [ ] Satisfiabilité : vrai dans au moins une structure
- [ ] Conséquence logique : ⊨
- [ ] Théorème de complétude de Gödel (1930) — énoncé : ⊢ φ ⟺ ⊨ φ
- [ ] Théorème de compacité — énoncé et signification

**Notes**
- C'est ici que la vérité devient **relative à un modèle** : une formule n'est pas vraie ou fausse en soi, mais dans une structure donnée.
- Le théorème de Löwenheim-Skolem peut être mentionné : une théorie qui a un modèle en a un dénombrable (paradoxe apparent).

---

### Chapitre 7 — Théories du Premier Ordre

**Objectif** : Montrer comment on axiomatise une théorie mathématique. Donner des exemples concrets.

**Concepts**
- [ ] Théorie = ensemble d'axiomes dans un langage du premier ordre
- [ ] Modèles d'une théorie
- [ ] Théories complètes vs incomplètes
- [ ] Arithmétique de Peano (PA) — présentation
- [ ] ZFC comme théorie du premier ordre (anticipation)
- [ ] Notion d'indépendance d'un énoncé par rapport à une théorie

**Notes**
- Préparer le terrain pour Gödel : PA est suffisamment riche pour que l'incomplétude s'y manifeste.

---

## Partie IV — Méta-Logique et Limites

*Les grandes questions sur la logique elle-même. Point culminant du livre.*

---

### Chapitre 8 — Décidabilité et Calculabilité

**Objectif** : Introduire la notion de calcul mécanique et ses limites. Préparer l'incomplétude de Gödel.

**Concepts**
- [ ] Notion d'algorithme (informelle puis formelle)
- [ ] Machine de Turing — concept et fonctionnement
- [ ] Thèse de Church-Turing
- [ ] Problème de l'arrêt — énoncé et signification
- [ ] Problèmes décidables vs indécidables
- [ ] Réductions entre problèmes
- [ ] Décidabilité de la logique propositionnelle vs indécidabilité du premier ordre (théorème de Church)

**Notes**
- Le problème de l'arrêt est la première grande limite : certaines questions n'ont pas de procédure de réponse systématique.
- Lien avec l'incomplétude : Gödel et Turing ont découvert des limites analogues par des voies différentes.

---

### Chapitre 9 — Les Théorèmes de Gödel

**Objectif** : Présenter les théorèmes d'incomplétude comme la limite fondamentale de la formalisation. En dégager les conséquences philosophiques.

**Concepts**
- [ ] Arithmétisation de la syntaxe (numéros de Gödel) — idée
- [ ] Premier théorème d'incomplétude : dans tout système cohérent et suffisamment expressif, il existe des énoncés vrais non prouvables
- [ ] Second théorème d'incomplétude : un tel système ne peut pas prouver sa propre cohérence
- [ ] Théorème d'indéfinissabilité de Tarski : la vérité ne peut pas être définie dans son propre langage
- [ ] Conséquences : l'écart irréductible entre vérité sémantique et provabilité syntaxique
- [ ] Conséquences philosophiques : limites du programme de Hilbert

**Notes**
- Ne pas démontrer les théorèmes — expliquer la structure de l'argument (auto-référence, diagonalisation).
- Insister sur ce que Gödel *ne dit pas* : il ne dit pas que les mathématiques sont incohérentes, ni que la vérité est inaccessible.
- C'est ici que la distinction cohérence / vérité, annoncée dès l'introduction, atteint son point culminant.

---

## Partie V — Panorama des Logiques

*Ouverture : la logique classique n'est pas la seule. Chaque logique reflète un rapport différent à la vérité.*

---

### Chapitre 10 — Logiques Non-Classiques

**Objectif** : Montrer que "vérité" n'est pas un concept fixe — il dépend du cadre logique adopté.

**Concepts**
- [ ] Logique modale : nécessité (□) et possibilité (◇), mondes possibles
- [ ] Logique intuitionniste : vérité = preuve constructive, rejet du tiers exclu
- [ ] Logique paraconsistante : tolérance à la contradiction locale
- [ ] Logique du second ordre (brièvement)
- [ ] Logique classique comme cas particulier

**Notes**
- Chaque logique correspond à une conception différente de ce que signifie "être vrai".
- L'intuitionnisme est particulièrement éclairant : il montre que le tiers exclu est un choix, pas une nécessité.

---

### Chapitre 11 — Logique et Fondements : les grandes positions

**Objectif** : Présenter le débat historique sur ce que sont les mathématiques, à travers leurs réponses au programme de Hilbert.

**Concepts**
- [ ] Le programme de Hilbert et son échec (Gödel)
- [ ] Logicisme : les mathématiques sont de la logique (Frege, Russell)
- [ ] Formalisme : les mathématiques sont un jeu de symboles (Hilbert)
- [ ] Intuitionnisme : les mathématiques sont des constructions mentales (Brouwer)
- [ ] Platonisme mathématique
- [ ] Théorie des types comme alternative à ZFC (aperçu)
- [ ] Théorie des catégories comme fondement alternatif (aperçu)

**Notes**
- Ce chapitre est plus historique et philosophique que technique.
- Il prépare naturellement la transition vers la théorie des ensembles.

---

## Partie VI — Mathématiques : la langue universelle

*Aboutissement. La logique rend possible ce langage ; les mathématiques en sont le territoire.*

---

### Chapitre 12 — La Théorie des Ensembles

**Objectif** : Introduire la théorie des ensembles comme fondement des mathématiques contemporaines. Montrer que la sélection est le geste fondateur.

**Concepts**
- [ ] L'ensemble comme mécanisme de sélection : { }
- [ ] Appartenance (∈) et inclusion (⊆)
- [ ] Opérations : union, intersection, complémentaire, différence
- [ ] Ensemble vide ∅ et ensemble des parties 𝒫(E)
- [ ] Les paradoxes (Russell, Burali-Forti) comme motivation des axiomes
- [ ] Axiomes de ZF — présentation et sens de chacun
- [ ] Axiome du Choix : énoncé, équivalents, controverses
- [ ] ZFC comme système formel du premier ordre

**Notes**
- Insister sur le paradoxe de Russell : il montre que l'intuition naïve de l'ensemble est contradictoire, d'où la nécessité des axiomes.
- L'axiome du choix mérite un traitement particulier : il est indépendant de ZF (Gödel + Cohen).

---

### Chapitre 13 — Relations et Fonctions

**Objectif** : Construire les outils fondamentaux des mathématiques à partir des ensembles.

**Concepts**
- [ ] Couple ordonné, produit cartésien
- [ ] Relation : définition ensembliste
- [ ] Propriétés : réflexivité, symétrie, transitivité, antisymétrie
- [ ] Relations d'équivalence et classes d'équivalence
- [ ] Relations d'ordre (partiel, total, bien fondé)
- [ ] Fonction comme relation fonctionnelle
- [ ] Injection, surjection, bijection
- [ ] Composition et inversion

**Notes**
- Ce chapitre est dense mais peut rester au niveau des définitions et exemples.
- Les relations d'ordre seront utiles pour la théorie des ordinaux.

---

### Chapitre 14 — L'Infini

**Objectif** : Explorer ce que la théorie des ensembles dit de l'infini. Montrer que l'infini n'est pas une notion uniforme.

**Concepts**
- [ ] Ensembles finis et infinis
- [ ] Équipotence et cardinalité
- [ ] Ensembles dénombrables (ℕ, ℤ, ℚ)
- [ ] Théorème de Cantor : |E| < |𝒫(E)| — preuve par diagonalisation
- [ ] Non-dénombrabilité de ℝ
- [ ] Hiérarchie des cardinaux infinis (ℵ₀, ℵ₁, ...)
- [ ] Hypothèse du continu : énoncé et statut (indépendance de ZFC)
- [ ] Ordinaux : ordre bien fondé, arithmétique ordinale (aperçu)

**Notes**
- La diagonalisation de Cantor est l'ancêtre de celle de Gödel et de Turing — souligner ce lien.
- L'hypothèse du continu est indépendante de ZFC : ni vraie ni fausse dans ce cadre.

---

### Chapitre 15 — Éléments de Topologie *(optionnel)*

**Objectif** : Montrer comment une structure abstraite sans contenu peut capturer une intuition géométrique. Illustration de la puissance du cadre formel.

**Concepts**
- [ ] Espace topologique : définition axiomatique
- [ ] Ouverts et fermés
- [ ] Voisinage, adhérence, intérieur
- [ ] Continuité (définition topologique)
- [ ] Espaces métriques comme cas particulier
- [ ] Compacité — énoncé et intuition

**Notes**
- Ce chapitre peut être allégé ou placé en annexe selon le niveau visé.
- Son intérêt principal : montrer qu'une structure aussi abstraite que "espace topologique" capture parfaitement l'intuition de la proximité.

---

## Conclusion — L'Existence *(seuil ontologique)*

*Ouverture sur le Volume II : Systèmes.*

**Objectif** : Poser la question des limites du contenu de la pensée formelle. La logique a étudié la structure ; il faut maintenant interroger le contenu. Introduire la notion d'atome comme entité irréductible dans un cadre formel.

**Concepts**
- [ ] ZF standard : tout est ensemble, rien n'est "concret"
- [ ] ZFA — ZF with Atoms (urelements) : introduction d'entités primitives non décomposables
- [ ] L'atome comme contenu irréductible dans un cadre formel
- [ ] Qu'est-ce qu'une entité qui existe sans être un ensemble d'autres choses ?
- [ ] Le seuil ontologique : le point où la structure rencontre le contenu
- [ ] Ouverture : les systèmes comme structures peuplées d'atomes

**Notes**
- Ce chapitre est délibérément à la frontière entre la logique et l'ontologie.
- Il ne conclut pas le livre au sens d'une synthèse, mais ouvre vers le Volume II.
- ZFA est peu connue mais philosophiquement très riche : elle permet de formaliser l'idée d'un "individu" irréductible.

---

## Notes générales

- **Niveau** : Non technique mais rigoureux. Les définitions sont données, les théorèmes sont énoncés, les preuves ne sont pas développées sauf quand elles éclairent l'idée (ex. diagonalisation de Cantor).
- **Fil rouge** : La distinction cohérence syntaxique / vérité sémantique, introduite dès l'introduction, traverse tout le livre jusqu'à son point culminant (Gödel, Tarski).
- **Arc narratif** : Du langage (forme pure) vers les mathématiques (territoire de ce langage), puis vers l'existence (contenu irréductible).
- **Volume II** : Systèmes — structures concrètes peuplées d'atomes. À définir.

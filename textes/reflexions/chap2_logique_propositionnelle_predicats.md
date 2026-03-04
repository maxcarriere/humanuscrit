---
title: Chapitre 2 — Logique Propositionnelle et Prédicats
permalink: /textes/reflexions/logique/chapitre-2/
order: 4
date: 2026-03-04
last_modified_at: 2026-03-04
---

# Logique Propositionnelle et Prédicats

---

## Introduction

Le chapitre précédent a posé le langage formel dans sa généralité : alphabet, termes, formules, grammaire. Mais un langage sans contenu logique n'est qu'une coquille syntaxique — il permet de former des expressions, pas encore de distinguer celles qui sont valides de celles qui ne le sont pas.

Ce chapitre franchit ce seuil. Il installe le premier système logique complet en deux temps : d'abord la **logique propositionnelle**, cas le plus simple où les formules sont des combinaisons de propositions élémentaires reliées par des connecteurs ; puis la **logique des prédicats du premier ordre**, qui généralise ce cadre en introduisant les termes, les quantificateurs et les variables dans toute leur portée — y compris les mécanismes techniques (substitution, construction de concepts) dont le chapitre I n'avait posé que le principe.

La question qui guide ce chapitre est : **qu'est-ce qu'une formule valide ?** Non pas : qu'est-ce qui est vrai dans telle ou telle situation, mais qu'est-ce qui est vrai *dans toute situation possible*. La réponse à cette question — la notion de tautologie, puis celle de validité — constitue le premier pont entre la syntaxe et la sémantique.

Le chapitre se conclut par l'introduction des **théories du premier ordre** : l'ajout d'axiomes spécifiques à un langage transforme la logique en un instrument d'investigation de domaines particuliers — l'arithmétique, l'algèbre, la géométrie.

---

## I — Logique propositionnelle

*Le cas sans termes ni quantificateurs.*

La logique propositionnelle est le fragment le plus élémentaire de la logique : elle étudie les combinaisons de propositions à l'aide des seuls connecteurs, sans se soucier de la structure interne des propositions elles-mêmes. La proposition « il pleut » y est un atome indécomposable — on n'analyse pas *qui* pleut ni *où* ; on examine seulement ce qui se passe quand on la combine avec d'autres propositions par « et », « ou », « si… alors ».

Ce palier est pédagogiquement essentiel : il permet d'introduire les notions de vérité, de validité et d'équivalence dans un cadre où les calculs restent entièrement mécaniques.

---

### Variables propositionnelles et connecteurs

Le langage de la logique propositionnelle se compose de :

- **Variables propositionnelles** : $p, q, r, \ldots$ — chacune représente une proposition élémentaire, susceptible d'être vraie ou fausse.

- **Connecteurs logiques** :
  
  - $\neg$ (négation) : « il n'est pas le cas que… »
  - $\land$ (conjonction) : « … et … »
  - $\lor$ (disjonction) : « … ou … » (au sens inclusif)
  - $\rightarrow$ (implication) : « si … alors … »
  - $\leftrightarrow$ (biconditionnelle) : « … si et seulement si … »

- **Parenthèses** : $(\ ,\ )$ pour lever les ambiguïtés de lecture.

Les formules sont construites inductivement : toute variable propositionnelle est une formule ; si $\varphi$ et $\psi$ sont des formules, alors $\neg \varphi$, $(\varphi \land \psi)$, $(\varphi \lor \psi)$, $(\varphi \rightarrow \psi)$ et $(\varphi \leftrightarrow \psi)$ sont des formules. On retrouve exactement les règles de formation du chapitre I, restreintes au cas sans termes ni quantificateurs.

---

### Tables de vérité

Chaque connecteur se définit par sa **table de vérité** : une table qui associe à chaque combinaison de valeurs de ses arguments une valeur résultante. Les valeurs possibles sont $\text{V}$ (vrai) et $\text{F}$ (faux).

**Négation** — $\neg \varphi$ est vraie exactement quand $\varphi$ est fausse :

| $\varphi$ | $\neg \varphi$ |
|:---------:|:--------------:|
| V         | F              |
| F         | V              |

**Conjonction** — $\varphi \land \psi$ est vraie quand les deux sont vraies :

| $\varphi$ | $\psi$ | $\varphi \land \psi$ |
|:---------:|:------:|:--------------------:|
| V         | V      | V                    |
| V         | F      | F                    |
| F         | V      | F                    |
| F         | F      | F                    |

**Disjonction** — $\varphi \lor \psi$ est vraie quand au moins l'une est vraie :

| $\varphi$ | $\psi$ | $\varphi \lor \psi$ |
|:---------:|:------:|:-------------------:|
| V         | V      | V                   |
| V         | F      | V                   |
| F         | V      | V                   |
| F         | F      | F                   |

**Implication** — $\varphi \rightarrow \psi$ est fausse uniquement quand l'hypothèse est vraie et la conclusion fausse :

| $\varphi$ | $\psi$ | $\varphi \rightarrow \psi$ |
|:---------:|:------:|:--------------------------:|
| V         | V      | V                          |
| V         | F      | F                          |
| F         | V      | V                          |
| F         | F      | V                          |

Ce dernier cas mérite un commentaire. Que l'implication soit vraie quand l'hypothèse est fausse surprend souvent. L'intuition est la suivante : l'implication ne promet quelque chose que lorsque l'hypothèse est satisfaite. Si l'hypothèse ne l'est pas, la promesse n'est pas violée — elle est *vacuement* vraie. « S'il pleut, je prends mon parapluie » n'est pas falsifiée par un jour de soleil, que l'on ait ou non pris un parapluie. C'est le seul sens qui rende l'implication cohérente dans un calcul formel. L'implication matérielle se définit d'ailleurs par une équivalence : $\varphi \rightarrow \psi \equiv \neg \varphi \lor \psi$ — elle n'est fausse que si $\varphi$ est vraie et $\psi$ fausse.

**Biconditionnelle** — $\varphi \leftrightarrow \psi$ est vraie quand les deux ont la même valeur de vérité :

| $\varphi$ | $\psi$ | $\varphi \leftrightarrow \psi$ |
|:---------:|:------:|:------------------------------:|
| V         | V      | V                              |
| V         | F      | F                              |
| F         | V      | F                              |
| F         | F      | V                              |

**Remarque sur les connecteurs primitifs.** Les cinq connecteurs ne sont pas tous indépendants. On peut montrer que $\{\neg, \land\}$, ou $\{\neg, \lor\}$, ou même $\{\neg, \rightarrow\}$ suffisent à exprimer tous les autres. Il existe même un unique connecteur, le **NAND** (noté $\uparrow$ ou barre de Sheffer), à partir duquel tous les connecteurs sont définissables : $\varphi \uparrow \psi \equiv \neg(\varphi \land \psi)$. Ces questions de minimalité sont importantes en théorie des circuits, mais ne sont pas centrales pour notre propos. Nous conservons les cinq connecteurs pour leur lisibilité.

---

### Tautologies, contradictions, satisfiabilité

Une fois les tables de vérité posées, on peut classifier les formules selon leur comportement :

- Une formule est une **tautologie** si elle est vraie pour toute assignation de valeurs à ses variables. C'est une vérité qui ne dépend d'aucun fait particulier — elle est vraie *par sa forme seule*.
  
  Exemples :
  
  - $p \lor \neg p$ — le **tiers exclu** : toute proposition est soit vraie, soit fausse.
  - $p \rightarrow p$ — toute proposition s'implique elle-même.
  - $\neg(p \land \neg p)$ — le **principe de non-contradiction** : une proposition ne peut être à la fois vraie et fausse.

- Une formule est une **contradiction** si elle est fausse pour toute assignation. C'est le symétrique d'une tautologie.
  
  Exemple : $p \land \neg p$.

- Une formule est **satisfiable** (ou **contingente**) si elle est vraie pour au moins une assignation. Toute tautologie est satisfiable ; toute contradiction ne l'est pas.

La notion de tautologie est la première réponse à la question du chapitre : une formule propositionnelle est **valide** si et seulement si c'est une tautologie. Dans le cadre propositionnel, la vérification est mécanique : il suffit de dresser la table de vérité complète, qui comporte $2^n$ lignes pour $n$ variables. C'est un calcul fini — la logique propositionnelle est **décidable**.

---

### Équivalences logiques

Deux formules $\varphi$ et $\psi$ sont **logiquement équivalentes**, notées $\varphi \equiv \psi$, si elles ont la même valeur de vérité pour toute assignation — autrement dit, si $\varphi \leftrightarrow \psi$ est une tautologie.

Les principales équivalences sont les suivantes.

**Lois de De Morgan :**

$$\neg(\varphi \land \psi) \equiv \neg \varphi \lor \neg \psi$$
$$\neg(\varphi \lor \psi) \equiv \neg \varphi \land \neg \psi$$

**Double négation :**

$$\neg \neg \varphi \equiv \varphi$$

**Commutativité :**

$$\varphi \land \psi \equiv \psi \land \varphi \qquad \varphi \lor \psi \equiv \psi \lor \varphi$$

**Associativité :**

$$(\varphi \land \psi) \land \chi \equiv \varphi \land (\psi \land \chi) \qquad (\varphi \lor \psi) \lor \chi \equiv \varphi \lor (\psi \lor \chi)$$

**Distributivité :**

$$\varphi \land (\psi \lor \chi) \equiv (\varphi \land \psi) \lor (\varphi \land \chi)$$
$$\varphi \lor (\psi \land \chi) \equiv (\varphi \lor \psi) \land (\varphi \lor \chi)$$

**Absorption :**

$$\varphi \land (\varphi \lor \psi) \equiv \varphi \qquad \varphi \lor (\varphi \land \psi) \equiv \varphi$$

**Implication :**

$$\varphi \rightarrow \psi \equiv \neg \varphi \lor \psi$$

**Contraposée :**

$$\varphi \rightarrow \psi \equiv \neg \psi \rightarrow \neg \varphi$$

Ces équivalences ne sont pas des conventions : elles se vérifient mécaniquement par les tables de vérité. Elles révèlent une structure algébrique sous-jacente — celle de l'algèbre de Boole — où $\land$ joue le rôle de la multiplication, $\lor$ celui de l'addition, et $\neg$ celui du complémentaire. Cette structure sera exploitée dans les formes normales.

---

### Formes normales

Toute formule propositionnelle peut être réécrite sous une forme standardisée, appelée **forme normale**. L'intérêt d'une telle réécriture est double : elle rend la structure logique de la formule immédiatement lisible, et elle fournit un format uniforme sur lequel les algorithmes de décision peuvent s'appuyer.

#### Littéraux et clauses

Un **littéral** est l'unité la plus simple : une variable propositionnelle prise positivement ou négativement. Autrement dit, $p$ et $\neg p$ sont tous deux des littéraux. On dit que $p$ est un littéral **positif** et $\neg p$ un littéral **négatif**. Deux littéraux portant sur la même variable ($p$ et $\neg p$) sont dits **complémentaires**.

Une **clause** est une disjonction (un « ou ») de littéraux : par exemple $p \lor \neg q \lor r$. On peut la lire comme une contrainte minimale : au moins l'un des littéraux doit être vrai.

Une **conjonction de littéraux** est l'opération duale : par exemple $p \land \neg q \land r$. Ici, tous les littéraux doivent être vrais simultanément — c'est une description d'une situation précise.

#### Forme normale conjonctive (FNC)

La **forme normale conjonctive** est une conjonction de clauses :

$$(\ell_{1,1} \lor \cdots \lor \ell_{1,k_1}) \land (\ell_{2,1} \lor \cdots \lor \ell_{2,k_2}) \land \cdots \land (\ell_{m,1} \lor \cdots \lor \ell_{m,k_m})$$

On peut la lire ainsi : chaque clause impose une contrainte (au moins un de ses littéraux doit être vrai), et la conjonction exige que **toutes** les contraintes soient satisfaites simultanément. C'est un système de conditions.

#### Forme normale disjonctive (FND)

La **forme normale disjonctive** est une disjonction de conjonctions de littéraux :

$$(l_{1,1} \land \cdots \land l_{1,k_1}) \lor (l_{2,1} \land \cdots \land l_{2,k_2}) \lor \cdots \lor (l_{m,1} \land \cdots \land l_{m,k_m})$$

Chaque conjonction décrit une situation complète où la formule serait vraie, et la disjonction dit : la formule est vraie si **au moins une** de ces situations se réalise. C'est une liste de scénarios favorables.

#### Construction à partir de la table de vérité

**Théorème.** Toute formule propositionnelle est logiquement équivalente à une formule en FNC et à une formule en FND.

La méthode de construction est mécanique. Illustrons-la sur un exemple concret.

**Exemple.** Considérons la formule $\varphi = (p \rightarrow q) \land r$. Sa table de vérité est :

| $p$ | $q$ | $r$ | $p \rightarrow q$ | $(p \rightarrow q) \land r$ |
|:---:|:---:|:---:|:-----------------:|:---------------------------:|
| V   | V   | V   | V                 | **V**                       |
| V   | V   | F   | V                 | F                           |
| V   | F   | V   | F                 | F                           |
| V   | F   | F   | F                 | F                           |
| F   | V   | V   | V                 | **V**                       |
| F   | V   | F   | V                 | F                           |
| F   | F   | V   | V                 | **V**                       |
| F   | F   | F   | V                 | F                           |

**Pour obtenir la FND** : on repère les lignes où $\varphi$ est **vraie** (lignes 1, 5, 7). Chaque ligne produit une conjonction : on prend chaque variable positivement si elle vaut V, négativement si elle vaut F.

- Ligne 1 ($p = \text{V}, q = \text{V}, r = \text{V}$) → $p \land q \land r$
- Ligne 5 ($p = \text{F}, q = \text{V}, r = \text{V}$) → $\neg p \land q \land r$
- Ligne 7 ($p = \text{F}, q = \text{F}, r = \text{V}$) → $\neg p \land \neg q \land r$

La FND est la disjonction de ces trois conjonctions :

$$(p \land q \land r) \lor (\neg p \land q \land r) \lor (\neg p \land \neg q \land r)$$

On vérifie : cette formule est vraie exactement quand l'une de ces trois situations se réalise — c'est-à-dire exactement quand $\varphi$ est vraie.

**Pour obtenir la FNC** : on procède de façon **duale**, à partir des lignes où $\varphi$ est **fausse** (lignes 2, 3, 4, 6, 8). Chaque ligne produit une clause : on prend chaque variable **à l'inverse** — positivement si elle vaut F, négativement si elle vaut V. L'idée est de construire, pour chaque ligne fausse, une clause qui exclut précisément cette ligne.

- Ligne 2 ($p = \text{V}, q = \text{V}, r = \text{F}$) → $\neg p \lor \neg q \lor r$
- Ligne 3 ($p = \text{V}, q = \text{F}, r = \text{V}$) → $\neg p \lor q \lor \neg r$
- Ligne 4 ($p = \text{V}, q = \text{F}, r = \text{F}$) → $\neg p \lor q \lor r$
- Ligne 6 ($p = \text{F}, q = \text{V}, r = \text{F}$) → $p \lor \neg q \lor r$
- Ligne 8 ($p = \text{F}, q = \text{F}, r = \text{F}$) → $p \lor q \lor r$

La FNC est la conjonction de ces cinq clauses :

$$(\neg p \lor \neg q \lor r) \land (\neg p \lor q \lor \neg r) \land (\neg p \lor q \lor r) \land (p \lor \neg q \lor r) \land (p \lor q \lor r)$$

Chaque clause élimine une ligne fausse ; leur conjonction élimine toutes les lignes fausses — il ne reste que les lignes vraies.

**Remarque.** On observe que la FND est plus « lisible » quand la formule est vraie dans peu de cas (peu de lignes V), et la FNC quand elle est vraie dans beaucoup de cas (peu de lignes F). Les deux sont logiquement équivalentes à la formule d'origine.

---

### Le problème SAT

Les formes normales ne sont pas seulement un outil théorique — elles se trouvent au cœur de l'une des questions les plus importantes de l'informatique.

Le **problème SAT** (pour *satisfiability*) est le suivant : étant donnée une formule propositionnelle en FNC, existe-t-il une assignation de valeurs de vérité à ses variables qui la rende vraie ?

La question peut sembler triviale : il suffit d'essayer toutes les assignations possibles. Mais c'est précisément là que réside la difficulté. Pour $n$ variables, il y a $2^n$ assignations à vérifier. Avec $10$ variables, cela fait $1\,024$ cas — aisément gérable. Avec $100$ variables, le nombre d'assignations dépasse $10^{30}$ — plus que le nombre de secondes écoulées depuis le Big Bang. Avec $300$ variables, il dépasse le nombre d'atomes dans l'univers observable.

La question n'est pas de savoir si le problème *a* une solution — c'est toujours décidable — mais de savoir si l'on peut *trouver* cette solution sans explorer un nombre exponentiel de cas. Autrement dit : existe-t-il un algorithme qui résolve SAT en un temps proportionnel à une puissance de $n$ (temps **polynomial**), plutôt qu'en un temps proportionnel à $2^n$ (temps **exponentiel**) ?

C'est la question **P = NP ?**, l'un des sept problèmes du millénaire. Ce que l'on sait est le suivant. Si quelqu'un vous donne une assignation candidate, **vérifier** qu'elle satisfait la formule est facile et rapide : il suffit de parcourir chaque clause et de vérifier qu'au moins un littéral est vrai — un travail proportionnel à la taille de la formule. En revanche, **trouver** une telle assignation semble exponentiellement plus difficile. Le théorème de Cook-Levin (1971) établit que SAT est **NP-complet** : tout problème dont la solution est facile à vérifier peut être transformé en une instance de SAT. Si l'on savait résoudre SAT efficacement, on saurait résoudre efficacement tous ces problèmes — et la conjecture quasi universelle est que cela est impossible.

On peut résumer la situation ainsi :

- **Vérifier** une solution à SAT : facile (temps polynomial).
- **Trouver** une solution à SAT : apparemment difficile (temps exponentiel, à notre connaissance).
- SAT est le problème **le plus difficile** parmi ceux dont les solutions sont faciles à vérifier.

Cette question dépasse largement le cadre de la logique propositionnelle — elle se connecte à la calculabilité et à ses limites, qui feront l'objet du chapitre V.

---

## II — Logique des prédicats du premier ordre

*La généralisation : termes, quantificateurs et structure interne des propositions.*

La logique propositionnelle traite les propositions comme des atomes indécomposables. Mais la plupart des raisonnements réels requièrent davantage : distinguer les objets dont on parle, exprimer des propriétés, quantifier. « Tout nombre pair est la somme de deux nombres premiers » n'est pas une combinaison de propositions atomiques — c'est un énoncé sur des objets, des propriétés et une quantification universelle. La logique des prédicats du premier ordre fournit le cadre formel pour exprimer de tels énoncés.

---

### Le langage du premier ordre

Un **langage du premier ordre** est déterminé par une **signature** : un ensemble de symboles non logiques, chacun muni de son arité. On distingue :

- des **symboles de constante** : $a, b, c, \ldots$ (arité $0$),
- des **symboles de fonction** : $f, g, h, \ldots$ (arité $\geq 1$),
- des **symboles de relation** (ou **prédicats**) : $P, Q, R, \ldots$ (arité $\geq 1$).

À ces symboles propres s'ajoutent les symboles logiques communs à tout langage du premier ordre :

- les **variables** : $x, y, z, \ldots$,
- les **connecteurs** : $\neg, \land, \lor, \rightarrow, \leftrightarrow$,
- les **quantificateurs** : $\forall, \exists$,
- le **symbole d'égalité** $=$ (dans les langages avec égalité),
- les **parenthèses** et la **ponctuation**.

La signature est ce qui distingue un langage d'un autre : le langage de l'arithmétique a les symboles $\{0, S, +, \times, <\}$ ; celui de la théorie des groupes a $\{e, \cdot, {}^{-1}\}$ ; celui de la théorie des ensembles a le seul symbole $\{\in\}$. Les symboles logiques, eux, sont universels.

Les **termes** et les **formules** sont définis exactement comme au chapitre I (section III-A). La signature ne fait que fixer les symboles particuliers du langage — la grammaire reste la même.

---

### Du langage naturel à la formule

Avant d'entrer dans les mécanismes formels, il est utile de s'exercer à la traduction entre langage naturel et langage logique. Cette traduction n'est pas mécanique — elle exige de repérer la structure logique cachée sous la surface grammaticale.

**Exemple 1.** « Tout homme est mortel. »

On introduit deux prédicats unaires : $H(x)$ pour « $x$ est un homme » et $M(x)$ pour « $x$ est mortel ». La traduction est :

$$\forall x.\, (H(x) \rightarrow M(x))$$

Il ne faut pas écrire $\forall x.\, (H(x) \land M(x))$, qui affirmerait que *tout objet* est à la fois un homme et mortel. L'implication capture le sens correct : *si* $x$ est un homme, *alors* $x$ est mortel.

**Exemple 2.** « Quelqu'un aime tout le monde. »

On introduit un prédicat binaire $A(x, y)$ pour « $x$ aime $y$ ». La traduction est :

$$\exists x.\, \forall y.\, A(x, y)$$

L'ordre des quantificateurs est décisif. Comparer avec « tout le monde est aimé par quelqu'un » :

$$\forall y.\, \exists x.\, A(x, y)$$

La première formule dit qu'*une même personne* aime tout le monde. La seconde dit que *chaque personne* est aimée par quelqu'un — mais pas nécessairement la même. L'inversion des quantificateurs change radicalement le sens.

**Exemple 3.** « Il n'existe pas de plus grand nombre premier. »

Avec $P(x)$ pour « $x$ est premier » et $<$ pour l'ordre :

$$\forall x.\, (P(x) \rightarrow \exists y.\, (P(y) \land x < y))$$

Pour tout nombre premier $x$, il en existe un plus grand. C'est le théorème d'Euclide.

**Exemple 4.** « Un nombre est pair si et seulement s'il est divisible par deux. »

$$\forall x.\, (\text{Pair}(x) \leftrightarrow \text{Div}(x, 2))$$

La biconditionnelle exprime une définition : les deux propriétés sont interchangeables.

---

### Quantificateurs : portée, variables libres et liées

Les quantificateurs $\forall$ (pour tout) et $\exists$ (il existe) sont les instruments qui permettent de formuler des assertions sur l'ensemble d'un domaine. Leur traitement exige de distinguer soigneusement les variables libres des variables liées.

Une **occurrence** d'une variable $x$ dans une formule est **liée** si elle se trouve dans la portée d'un quantificateur $\forall x$ ou $\exists x$. Elle est **libre** dans le cas contraire. Une même variable peut apparaître libre à un endroit et liée à un autre dans la même formule.

La **portée** d'un quantificateur $\forall x.\, \varphi$ (resp. $\exists x.\, \varphi$) est la formule $\varphi$ — c'est-à-dire tout ce qui se trouve sous le gouvernement du quantificateur.

**Exemple.** Dans la formule $\forall x.\, P(x, y) \rightarrow Q(x)$ :

- $x$ est liée (dans la portée de $\forall x$),
- $y$ est libre (aucun quantificateur ne la gouverne).

**Exemple.** Dans la formule $\exists x.\, R(x) \land P(y)$ :

- L'occurrence de $x$ dans $R(x)$ est liée par $\exists x$.
- $y$ est libre.

L'importance de cette distinction est la suivante. Une variable liée est **muette** : elle ne désigne aucun objet en particulier, elle parcourt le domaine. Renommer une variable liée ne change pas le sens de la formule : $\forall x.\, P(x)$ et $\forall z.\, P(z)$ disent exactement la même chose. En revanche, une variable libre est un **paramètre** : elle attend d'être instanciée par un objet précis (via une valuation) ou liée par un quantificateur.

L'ensemble des variables libres d'une formule $\varphi$ est noté $\text{FV}(\varphi)$. Il se calcule inductivement :

- $\text{FV}(R(t_1, \ldots, t_n))$ = ensemble des variables apparaissant dans les termes $t_1, \ldots, t_n$.
- $\text{FV}(\neg \varphi) = \text{FV}(\varphi)$.
- $\text{FV}(\varphi \land \psi) = \text{FV}(\varphi) \cup \text{FV}(\psi)$ — et de même pour les autres connecteurs.
- $\text{FV}(\forall x.\, \varphi) = \text{FV}(\varphi) \setminus \{x\}$ — et de même pour $\exists x$.

---

### Formules closes (énoncés)

Une formule est dite **close** (ou est un **énoncé**) si elle ne contient aucune variable libre : $\text{FV}(\varphi) = \emptyset$.

Les formules closes sont les seules pour lesquelles on peut évaluer la vérité dans un modèle sans information supplémentaire : $\mathcal{M} \models \varphi$ a un sens défini lorsque $\varphi$ est close. Si $\varphi$ contient des variables libres, sa valeur de vérité dépend de l'assignation de ces variables à des objets du domaine — ce qui sera formalisé au chapitre IV.

**Exemples :**

- $\forall x.\, \exists y.\, (x + y = 0)$ est un énoncé — il affirme que tout nombre a un opposé.
- $\exists y.\, (x + y = 0)$ n'est pas un énoncé — $x$ est libre.
- $P(a) \rightarrow Q(a)$ est un énoncé si $a$ est une constante (pas de variable libre).

---

### Substitution — définition complète

Le chapitre I a introduit la substitution $\varphi[t/x]$ comme l'opération qui remplace les occurrences libres de $x$ par un terme $t$. Il est maintenant temps d'en donner la définition complète.

#### Définition récursive

La substitution se définit par récurrence sur la structure de l'expression, en suivant les cas des critères de formation.

**Sur les termes :**

- $x[t/x] = t$ — la variable ciblée est remplacée par $t$.
- $y[t/x] = y$ si $y \neq x$ — les autres variables sont inchangées.
- $c[t/x] = c$ — les constantes sont inchangées.
- $f(t_1, \ldots, t_n)[t/x] = f(t_1[t/x], \ldots, t_n[t/x])$ — on substitue récursivement dans chaque argument.

**Sur les formules :**

- $R(t_1, \ldots, t_n)[t/x] = R(t_1[t/x], \ldots, t_n[t/x])$ — substitution dans chaque terme de la formule atomique.
- $(\neg \varphi)[t/x] = \neg(\varphi[t/x])$.
- $(\varphi \land \psi)[t/x] = (\varphi[t/x] \land \psi[t/x])$ — et de même pour $\lor$, $\rightarrow$, $\leftrightarrow$.
- $(\forall y.\, \varphi)[t/x] = \forall y.\,(\varphi[t/x])$ si $y \neq x$ — on substitue sous le quantificateur.
- $(\forall x.\, \varphi)[t/x] = \forall x.\, \varphi$ — si le quantificateur lie la même variable, la substitution s'arrête : il n'y a pas d'occurrence libre de $x$ dans $\varphi$.

Et de même pour $\exists$.

#### Capture de variable

Cette définition appelle une précaution essentielle. Considérons la formule $\varphi = \exists y.\, (x < y)$, qui signifie « il existe un nombre plus grand que $x$ ». Substituons $y$ à $x$ :

$$\varphi[y/x] = \exists y.\, (y < y)$$

La formule dit maintenant « il existe un nombre plus petit que lui-même » — ce qui est une tout autre assertion, et même une assertion fausse. Que s'est-il passé ? Le terme $y$ que nous avons substitué contenait une variable libre ($y$) qui est tombée dans la portée du quantificateur $\exists y$ : elle a été **capturée**. La variable libre est devenue liée par accident, ce qui a modifié le sens de la formule.

Pour éviter ce phénomène, on impose une condition : le terme $t$ doit être **libre pour $x$ dans $\varphi$**, ce qui signifie qu'aucune variable libre de $t$ ne doit devenir liée après substitution. Formellement : pour chaque variable $y$ libre dans $t$, aucune occurrence libre de $x$ dans $\varphi$ ne se trouve dans la portée d'un quantificateur $\forall y$ ou $\exists y$.

Si cette condition n'est pas satisfaite, on **renomme** d'abord les variables liées de $\varphi$ qui posent problème. Dans l'exemple ci-dessus, on remplace $\exists y$ par $\exists z$ : la formule $\exists z.\, (x < z)$ dit la même chose, et la substitution $(\exists z.\, (x < z))[y/x] = \exists z.\, (y < z)$ est maintenant correcte.

#### Le rôle de la substitution

La substitution est le mécanisme syntaxique de l'**instanciation** : à partir d'une propriété générale, on obtient un cas particulier. Si $\forall x.\, P(x)$ affirme que tout objet vérifie $P$, alors $P(t)$ — obtenu par substitution de $t$ à $x$ — affirme que l'objet particulier désigné par $t$ vérifie $P$. Ce passage du général au particulier sera au cœur des règles d'inférence du premier ordre (chapitre III).

---

### Le terme epsilon et les quantificateurs

Le chapitre I a introduit le terme epsilon de Hilbert comme formalisation du concept — un objet générique défini par une propriété. Il est maintenant possible d'expliciter son lien formel avec les quantificateurs.

#### Du concept au témoin

Rappelons la construction. Si $P(x)$ est une formule, le terme $\varepsilon x.\, P(x)$ désigne *un* objet du domaine vérifiant $P$ — un objet fixé par le modèle mais non nommé par le langage. Ce terme formalise l'acte de « choisir un exemple » : quand on raisonne sur « un nombre pair », on travaille avec $\varepsilon x.\, \text{Pair}(x)$ — un nombre pair particulier dont on ne connaît que cette propriété.

L'axiome qui gouverne ce terme est le **schéma epsilon** :

$$P(t) \rightarrow P(\varepsilon x.\, P(x))$$

Il affirme : s'il existe au moins un objet vérifiant $P$ (par exemple $t$), alors l'objet désigné par $\varepsilon x.\, P(x)$ le vérifie aussi. L'opérateur epsilon est donc un **sélecteur** : il produit un témoin de la propriété $P$, pourvu qu'un tel témoin existe.

#### Définition des quantificateurs par le terme epsilon

Le lien avec les quantificateurs est alors remarquablement direct. On peut *définir* les quantificateurs à partir du terme epsilon :

$$\exists x.\, P(x) \quad \equiv \quad P(\varepsilon x.\, P(x))$$

L'existentiel affirme que $P$ est vraie pour au moins un objet. Le terme epsilon en désigne un : si $P$ est vraie quelque part, elle est vraie pour l'objet choisi par $\varepsilon$. La formule de droite dit : « l'objet sélectionné par $\varepsilon$ vérifie $P$ » — ce qui est exactement la signification de l'existentiel.

$$\forall x.\, P(x) \quad \equiv \quad P(\varepsilon x.\, \neg P(x))$$

L'universel affirme que $P$ est vraie pour *tout* objet. Le terme $\varepsilon x.\, \neg P(x)$ désigne, si un tel objet existe, un contre-exemple — un objet qui ne vérifie *pas* $P$. Si même ce contre-exemple vérifie $P$, alors $P$ est vraie partout. C'est une preuve par l'absurde condensée en une seule expression : on teste la propriété sur le pire candidat possible.

#### Portée de cette construction

Cette définition n'est pas une curiosité technique — elle révèle que les quantificateurs ne sont pas des opérations primitives irréductibles, mais des cas particuliers d'une opération plus fondamentale : la **sélection d'un objet par une propriété**. Le terme epsilon est l'opération de construction de concept dont le chapitre I a posé l'intuition ; les quantificateurs en sont des applications.

Le terme epsilon entretient également un lien profond avec l'**axiome du choix**, qui sera développé au chapitre VIII : l'axiome du choix garantit qu'il est possible de réaliser simultanément une infinité de ces sélections — ce que l'opérateur epsilon, limité à une seule formule, ne fait que pour un choix à la fois.

---

### La logique propositionnelle comme cas particulier

La logique propositionnelle est le cas dégénéré de la logique des prédicats où :

- il n'y a **aucun terme** (ni constante, ni variable, ni symbole de fonction),
- il n'y a **aucun quantificateur**,
- les formules atomiques sont de simples **variables propositionnelles** — des symboles de relation d'arité $0$.

On passe de la logique propositionnelle à la logique des prédicats en ajoutant une dimension : la structure interne des propositions (sujets, propriétés, quantification). La première est contenue dans la seconde.

---

## III — Théories du premier ordre

*Quand la logique rencontre un domaine.*

La logique des prédicats du premier ordre, telle qu'elle vient d'être présentée, est un cadre vide : elle fournit un langage et des règles, mais ne dit rien sur les objets dont on parle. Pour étudier un domaine particulier — les nombres, les groupes, les ensembles — il faut **spécialiser** ce cadre en ajoutant des axiomes.

---

### Théorie = langage + axiomes

Une **théorie du premier ordre** $T$ est constituée de :

1. un **langage du premier ordre** $\mathcal{L}$ (défini par sa signature),
2. un ensemble d'**axiomes** : des énoncés (formules closes) de $\mathcal{L}$ admis comme points de départ.

Les **théorèmes** de $T$ sont les formules que l'on peut dériver des axiomes par les règles d'inférence de la logique. Un **modèle** de $T$ est une structure $\mathcal{M}$ dans laquelle tous les axiomes de $T$ sont vrais.

La théorie ne décrit pas un objet unique, mais une **classe de structures** : toutes celles qui satisfont ses axiomes. C'est cette pluralité qui sera au cœur du chapitre IV.

---

### Exemples

**L'arithmétique de Peano** $(PA)$

Langage : $\mathcal{L}_{PA} = \{0, S, +, \times\}$ où $0$ est une constante, $S$ est le successeur (arité $1$), $+$ et $\times$ sont des opérations binaires.

Axiomes (informellement) :

- $0$ n'est le successeur d'aucun nombre : $\forall x.\, \neg(S(x) = 0)$.
- Le successeur est injectif : $\forall x.\, \forall y.\, (S(x) = S(y) \rightarrow x = y)$.
- Axiomes récursifs de l'addition : $\forall x.\, (x + 0 = x)$ et $\forall x.\, \forall y.\, (x + S(y) = S(x + y))$.
- Axiomes récursifs de la multiplication : $\forall x.\, (x \times 0 = 0)$ et $\forall x.\, \forall y.\, (x \times S(y) = x \times y + x)$.
- **Schéma d'induction** : pour toute formule $\varphi(x)$, si $\varphi(0)$ est vrai et si $\varphi(n) \rightarrow \varphi(S(n))$ pour tout $n$, alors $\forall x.\, \varphi(x)$.

Le schéma d'induction mérite un commentaire. Il ne s'agit pas d'un seul axiome, mais d'une **famille infinie d'axiomes** — un pour chaque formule $\varphi$. C'est un **schéma** : une règle de production d'axiomes. Cette infinité est inévitable : aucun ensemble fini d'axiomes ne suffit à capturer la force de l'induction sur les entiers. Ce point sera crucial au chapitre VI, où l'on verra que cette infinité ne suffit pas non plus à tout capturer.

L'arithmétique de Peano sera l'exemple central du chapitre VI : c'est dans ce cadre que Gödel construira son énoncé indécidable.

**La théorie des groupes**

Langage : $\mathcal{L}_G = \{e, \cdot, {}^{-1}\}$ où $e$ est une constante (l'élément neutre), $\cdot$ est une opération binaire, et ${}^{-1}$ est une opération unaire.

Axiomes :

- Associativité : $\forall x.\, \forall y.\, \forall z.\, ((x \cdot y) \cdot z = x \cdot (y \cdot z))$.
- Élément neutre : $\forall x.\, (x \cdot e = x \land e \cdot x = x)$.
- Inverse : $\forall x.\, (x \cdot x^{-1} = e \land x^{-1} \cdot x = e)$.

Ces trois axiomes définissent la notion de groupe. Tout ensemble muni d'une opération satisfaisant ces axiomes est un modèle de cette théorie : les entiers avec l'addition, les permutations avec la composition, les rotations d'un carré, etc. Les axiomes capturent une structure commune à des objets très divers.

---

### Indépendance

Un énoncé $\sigma$ est **indépendant** d'une théorie $T$ s'il n'est ni démontrable ni réfutable à partir des axiomes de $T$ : ni $T \vdash \sigma$, ni $T \vdash \neg \sigma$.

L'indépendance signifie que la théorie ne tranche pas la question : il existe des modèles de $T$ où $\sigma$ est vrai, et d'autres où $\sigma$ est faux. L'énoncé échappe au pouvoir déductif des axiomes — il faudrait en ajouter de nouveaux pour le trancher.

**Exemple élémentaire.** Dans la théorie des groupes, l'énoncé $\forall x.\, \forall y.\, (x \cdot y = y \cdot x)$ (commutativité) est indépendant : les groupes abéliens le satisfont, les groupes non abéliens le falsifient. Les axiomes de la théorie des groupes ne suffisent pas à décider si l'opération est commutative.

**Exemple fondamental.** L'hypothèse du continu est indépendante des axiomes de ZFC — un résultat majeur dû à Gödel (1938) et Cohen (1963), qui sera présenté au chapitre VIII.

L'indépendance est la manifestation la plus directe d'un phénomène qui traversera tout le livre : la théorie ne capture pas tout ce qu'il y a à dire sur ses modèles. C'est un premier signe de l'écart entre syntaxe et sémantique — entre ce qui est démontrable et ce qui est vrai — dont les chapitres suivants exploreront les conséquences.

---

## Conclusion

Ce chapitre a installé les deux systèmes logiques fondamentaux. La logique propositionnelle a fourni un premier terrain d'exercice : les connecteurs, les tables de vérité, la notion de tautologie comme vérité par la forme seule, les formes normales comme représentations canoniques, et le problème SAT comme premier aperçu des limites du calcul. La logique des prédicats du premier ordre a généralisé ce cadre en y introduisant les termes, les quantificateurs et la structure interne des propositions — avec les mécanismes formels qui les accompagnent : substitution complète, terme epsilon comme construction de concept, et leur relation avec les quantificateurs. Les théories du premier ordre, enfin, ont montré comment la logique devient un instrument d'investigation lorsqu'on la spécialise par des axiomes.

Deux questions restent ouvertes. La première est syntaxique : comment *démontrer* qu'une formule est valide, par un mécanisme purement formel, sans recourir aux tables de vérité ou à l'examen de tous les modèles ? C'est la question de la **preuve**, objet du chapitre III. La seconde est sémantique : comment *définir rigoureusement* la vérité d'une formule dans une structure ? C'est la question du **modèle**, objet du chapitre IV. Le théorème de complétude réunira ces deux fils.

---

## Références

- **Cook, S. A.** « The Complexity of Theorem-Proving Procedures », *Proceedings of the Third Annual ACM Symposium on Theory of Computing*, 1971. Article fondateur démontrant la NP-complétude du problème SAT.

- **Enderton, H. B.** *A Mathematical Introduction to Logic*, 2nd ed., Academic Press, 2001. Traitement classique et rigoureux de la logique propositionnelle et du premier ordre.

- **Hilbert, D. & Bernays, P.** *Grundlagen der Mathematik*, Springer, 1934–1939. Présentation du calcul epsilon et de ses liens avec les quantificateurs — source de la section II sur le terme epsilon.

- **Mendelson, E.** *Introduction to Mathematical Logic*, 6th ed., CRC Press, 2015. Présentation systématique des théories du premier ordre et de l'arithmétique de Peano.

- **van Dalen, D.** *Logic and Structure*, 5th ed., Springer, 2013. Excellent équilibre entre rigueur formelle et perspective philosophique — proche de l'esprit de ce livre.

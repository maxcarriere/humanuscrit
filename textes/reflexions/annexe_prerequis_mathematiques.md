---
title: Annexe — Prérequis mathématiques
permalink: /textes/reflexions/annexe-prerequis-mathematiques/
order: 4
---

# Annexe — Prérequis mathématiques

Cette annexe rassemble les notions mathématiques mobilisées dans le texte. Elle s'adresse au lecteur qui n'est pas nécessairement familier avec le langage formel, et vise à rendre chaque notion accessible par l'intuition avant de la préciser par la notation.

Chaque section peut être lue indépendamment des autres. Les concepts sont présentés dans l'ordre où ils apparaissent dans le texte principal.

---

## 1 — Ensembles et parties

### L'idée

Un **ensemble** est simplement une collection d'objets. Ces objets peuvent être de n'importe quelle nature : des nombres, des personnes, des villes, des idées. L'important est qu'on puisse dire, pour chaque objet, s'il appartient ou non à la collection.

On note $x \in A$ pour dire « $x$ appartient à l'ensemble $A$ », et $x \notin A$ pour dire « $x$ n'appartient pas à $A$ ».

Un ensemble peut être décrit de deux manières :

- **En extension** — en listant ses éléments : $A = \\{1, 2, 3\\}$
- **En compréhension** — en décrivant une propriété : $A = \\{x \in \mathbb{N} \mid x < 4\\}$ (les entiers naturels strictement inférieurs à 4)

### Sous-ensembles

Un **sous-ensemble** (ou **partie**) de $A$ est un ensemble dont tous les éléments appartiennent à $A$. On note $B \subseteq A$ et on dit « $B$ est inclus dans $A$ ».

*Exemple.* Si $A = \\{1, 2, 3, 4, 5\\}$, alors $\\{2, 4\\}$ est un sous-ensemble de $A$, de même que $\\{1\\}$, $A$ lui-même, et l'ensemble vide $\emptyset$ (qui ne contient aucun élément).

### Ensemble des parties

L'**ensemble des parties** de $A$, noté $\mathcal{P}(A)$, est l'ensemble de *tous* les sous-ensembles de $A$ — y compris l'ensemble vide et $A$ lui-même.

*Exemple.* Si $A = \\{1, 2\\}$, alors :

$\mathcal{P}(A) = \\{\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}$

Quatre sous-ensembles : rien, seulement le 1, seulement le 2, les deux.

En général, si $A$ contient $n$ éléments, $\mathcal{P}(A)$ contient $2^n$ éléments. Ce nombre croît très vite : pour 10 éléments, il y a 1 024 sous-ensembles ; pour 20 éléments, plus d'un million.

### Opérations sur les ensembles

- L'**union** $A \cup B$ contient les éléments qui sont dans $A$ *ou* dans $B$ (ou les deux).
- L'**intersection** $A \cap B$ contient les éléments qui sont dans $A$ *et* dans $B$.
- La **différence** $A \setminus B$ contient les éléments de $A$ qui ne sont *pas* dans $B$.

*Exemple.* Si $A = \\{1, 2, 3\\}$ et $B = \\{2, 3, 4\\}$, alors $A \cup B = \\{1, 2, 3, 4\\}$, $A \cap B = \\{2, 3\\}$, et $A \setminus B = \\{1\\}$.

---

## 2 — N-uplets et produit cartésien

### L'idée

Un **$n$-uplet** est une liste ordonnée de $n$ éléments. L'ordre compte : la liste $(a, b)$ n'est pas la même que la liste $(b, a)$.

- Un 2-uplet s'appelle un **couple** : $(x, y)$
- Un 3-uplet s'appelle un **triplet** : $(x, y, z)$
- Et ainsi de suite.

### Le produit cartésien

Si $X$ est un ensemble, $X^n$ désigne l'ensemble de tous les $n$-uplets d'éléments de $X$. C'est le **produit cartésien** de $X$ avec lui-même, $n$ fois.

*Exemple.* Si $X = \\{a, b\\}$, alors :

- $X^1 = \\{a, b\\}$ — deux éléments
- $X^2 = \\{(a,a), (a,b), (b,a), (b,b)\\}$ — quatre couples
- $X^3$ contient $2^3 = 8$ triplets : $(a,a,a)$, $(a,a,b)$, $(a,b,a)$, etc.

En général, si $X$ contient $k$ éléments, $X^n$ contient $k^n$ éléments.

*Remarque.* On peut aussi former le produit cartésien de deux ensembles *différents* : $A \times B = \\{(a, b) \mid a \in A, b \in B\\}$. Par exemple, si $A = \\{1, 2\\}$ et $B = \\{x, y, z\\}$, alors $A \times B$ contient $2 \times 3 = 6$ couples.

---

## 3 — Relations

### L'idée

Une **relation** exprime un lien entre des éléments. « Alice est amie de Bob », « 3 est inférieur à 7 », « Paris est la capitale de la France » — ce sont des relations.

En mathématiques, une relation n'est rien d'autre qu'un *ensemble de combinaisons* d'éléments qui satisfont un certain critère.

### Relation binaire

La relation la plus courante relie *deux* éléments. On l'appelle **relation binaire**. Formellement, une relation binaire $R$ sur un ensemble $X$ est un sous-ensemble de $X^2$ — c'est-à-dire un ensemble de couples.

Si $(x, y) \in R$, on dit que « $x$ est en relation avec $y$ » et on écrit $R(x, y)$.

*Exemple.* Soit $X = \\{A, B, C\\}$ un ensemble de trois personnes. La relation d'amitié pourrait être :

$R = \\{(A,B), (B,A), (B,C), (C,B)\\}$

Cela signifie : A et B sont amis (la relation va dans les deux sens), B et C sont amis, mais A et C ne le sont pas. La relation d'amitié est ici **symétrique** — si $R(x,y)$ alors $R(y,x)$ — mais ce n'est pas toujours le cas. La relation « $x$ admire $y$ » peut ne pas être symétrique.

### Relations de degré supérieur

Une relation de degré $n$ (ou d'arité $n$) relie $n$ éléments simultanément. Formellement, c'est un sous-ensemble $R \subseteq X^n$.

*Exemple.* La relation ternaire « $x$ présente $y$ à $z$ » est un ensemble de triplets. Si Alice présente Bob à Carole, on écrit $R(A, B, C)$.

### Propriétés des relations binaires

Certaines relations binaires possèdent des propriétés remarquables :

- **Réflexive** : tout élément est en relation avec lui-même. $R(x, x)$ pour tout $x$.
- **Symétrique** : si $R(x, y)$ alors $R(y, x)$. L'amitié est symétrique ; l'admiration ne l'est pas nécessairement.
- **Transitive** : si $R(x, y)$ et $R(y, z)$ alors $R(x, z)$. « Être ancêtre de » est transitif ; « être ami de » ne l'est pas.
- **Antisymétrique** : si $R(x, y)$ et $R(y, x)$ alors $x = y$. L'ordre « $\leq$ » est antisymétrique.

Ces propriétés se combinent pour définir des structures particulières — par exemple, une relation d'**ordre** est réflexive, antisymétrique et transitive (voir section 5).

### Relations logiques et valuées

Les relations possibles entre les éléments d'un système admettent deux formalisations, selon le degré de richesse qu'on souhaite capturer.

#### Relation logique

> **Définition 4 — Relation logique**
>
> Une **relation possible** $R\_i$ de degré $n\_i$ sur $X$ est un sous-ensemble de $X^{n\_i}$ :
>
> $R\_i \subseteq X^{n\_i}$
>
> Elle désigne l'ensemble des $n\_i$-uplets d'éléments entre lesquels la relation *peut* exister. La relation est **binaire** : pour un $n\_i$-uplet donné, le lien est possible ou ne l'est pas.

La **restriction** de $R\_i$ à un sous-ensemble $A \subseteq X$ d'éléments présents, notée $R\_i \restriction_A$, est l'ensemble des $n\_i$-uplets de $R\_i$ dont tous les éléments appartiennent à $A$ :

$$R_i \restriction_A = R_i \cap A^{n_i}$$

Les **relations effectives** $r\_i$ sont des sous-ensembles de $R\_i \restriction_A$ : une relation effective entre les éléments présents ne peut exister que si la relation possible l'autorise ($r\_i \subseteq R\_i \restriction_A$).

#### Relation valuée

La relation logique admet une généralisation naturelle. Au lieu de se limiter à « le lien existe ou n'existe pas », on peut associer à chaque $n\_i$-uplet une **valeur** — une intensité, un poids, une mesure.

> **Définition 4 (bis) — Relation valuée**
>
> Une **relation possible** $R\_i$ de degré $n\_i$, valuée dans un ensemble $W\_i$, est une application :
>
> $R\_i : X^{n\_i} \to W\_i$
>
> qui associe à chaque $n\_i$-uplet d'éléments de $X$ une **valeur** dans $W\_i$.
>
> L'ensemble $W\_i$ est appelé **espace de valuation** de la relation $R\_i$. Il contient un élément distingué, noté $0$ (ou $\bot$), qui signifie *absence de relation*.

L'espace de valuation $W\_i$ capture la richesse du lien. Selon le choix de $W\_i$, on retrouve différents cadres :

- **$W\_i = \{0, 1\}$** : la relation est binaire — le lien existe ($1$) ou n'existe pas ($0$). On retrouve exactement la **relation logique** de la définition précédente.

- **$W\_i = \mathbb{R}^+$** : la relation porte une **intensité** continue — une force d'attraction, un débit, une affinité. Le lien n'est plus « tout ou rien » ; il possède un poids.

- **$W\_i$ fini** (par exemple $\{\text{nul}, \text{faible}, \text{moyen}, \text{fort}\}$) : la relation est **qualitative et graduée**.

La **relation logique est un cas particulier de la relation valuée**, retrouvé lorsque $W\_i = \{0, 1\}$ pour toutes les relations.

Les relations effectives sont alors des applications $r\_i : A^{n\_i} \to W\_i$, avec la contrainte qu'une relation effective ne peut prendre une valeur non nulle que là où la relation possible le permet :

$$r_i(x_1, \ldots, x_{n_i}) \neq 0 \implies R_i(x_1, \ldots, x_{n_i}) \neq 0$$

La **restriction** de $R\_i$ à une partie $A \subseteq X$, notée $R\_i \restriction_A$, est l'application obtenue en restreignant le domaine aux $n\_i$-uplets d'éléments de $A$ :

$$R_i \restriction_A : A^{n_i} \to W_i, \quad (R_i \restriction_A)(x_1, \ldots, x_{n_i}) = R_i(x_1, \ldots, x_{n_i})$$

La relation effective $r\_i$ est alors une application de $A^{n\_i}$ dans $W\_i$ telle que $r\_i(x\_1, \ldots, x\_{n\_i}) \neq 0$ implique $(R\_i \restriction_A)(x\_1, \ldots, x\_{n\_i}) \neq 0$.

---

## 4 — Applications

### L'idée

Une **application** (ou **fonction**) est une règle qui associe à chaque élément d'un ensemble de départ *exactement un* élément d'un ensemble d'arrivée. Le mot clé est *exactement un* : chaque entrée produit une et une seule sortie.

On note $f : A \to B$ pour dire « $f$ est une application de $A$ dans $B$ ». Pour un élément $x \in A$, on note $f(x) \in B$ l'élément qui lui est associé — son **image** par $f$.

*Exemple du quotidien.* L'application « capitale de » associe à chaque pays sa capitale : $f(\text{France}) = \text{Paris}$, $f(\text{Japon}) = \text{Tokyo}$. Chaque pays a exactement une capitale — c'est bien une application. En revanche, « ville de » n'est pas une application : un pays contient plusieurs villes.

### Vocabulaire

- $A$ est le **domaine** (ou ensemble de départ) — l'ensemble des entrées.
- $B$ est le **codomaine** (ou ensemble d'arrivée) — l'ensemble dans lequel vivent les sorties.
- L'**image** de $f$ est l'ensemble des éléments de $B$ effectivement atteints : $\text{Im}(f) = \\{f(x) \mid x \in A\\}$.

### L'ensemble des applications $B^A$

L'ensemble de toutes les applications de $A$ dans $B$ est noté $B^A$.

Cette notation s'explique par le comptage : si $A$ contient $m$ éléments et $B$ contient $n$ éléments, alors le nombre d'applications de $A$ dans $B$ est $n^m$ — chaque élément de $A$ peut être envoyé sur l'un des $n$ éléments de $B$, et ces choix sont indépendants.

*Exemple.* Si $A = \\{1, 2\\}$ et $B = \\{a, b, c\\}$, alors $B^A$ contient $3^2 = 9$ applications. Par exemple : $f(1) = a, f(2) = a$ ; ou $f(1) = b, f(2) = c$ ; etc.

En particulier, $D^D$ désigne l'ensemble de toutes les applications de $D$ dans $D$ — toutes les transformations possibles de $D$ vers lui-même. Si $D$ contient $n$ éléments, $D^D$ contient $n^n$ applications. Pour $n = 3$, cela fait déjà 27 transformations ; pour $n = 10$, dix milliards.

### Composition

Si $f : A \to B$ et $g : B \to C$, la **composition** $g \circ f : A \to C$ est l'application qui fait d'abord $f$, puis $g$ :

$(g \circ f)(x) = g(f(x))$

La composition est au coeur de la notion de trajectoire : appliquer une action, puis une autre, c'est composer.

---

## 5 — Relations d'ordre

### L'idée

Un **ordre** formalise l'idée de « classement » ou de « hiérarchie ». Quand on dit « 3 est inférieur à 7 » ou « janvier vient avant mars », on utilise une relation d'ordre.

### Ordre partiel

Un **ordre** (ou **ordre partiel**) sur un ensemble $T$ est une relation binaire $\leq$ qui vérifie trois propriétés :

- **Réflexivité** : tout élément est comparable à lui-même. Pour tout $t$, $t \leq t$.
- **Antisymétrie** : si $t \leq u$ et $u \leq t$, alors $t = u$. Deux éléments ne peuvent être mutuellement « inférieurs » que s'ils sont identiques.
- **Transitivité** : si $t \leq u$ et $u \leq v$, alors $t \leq v$. Le classement est cohérent.

L'adjectif *partiel* signifie que certains éléments peuvent ne pas être comparables : on ne peut dire ni $t \leq u$ ni $u \leq t$.

*Exemple.* L'inclusion entre ensembles est un ordre partiel. Si $A = \\{1\\}$, $B = \\{2\\}$ et $C = \\{1, 2\\}$, alors $A \subseteq C$ et $B \subseteq C$, mais $A$ et $B$ ne sont pas comparables — aucun n'est inclus dans l'autre.

### Ordre total

Un ordre est **total** si deux éléments quelconques sont toujours comparables : pour tous $t, u$, on a $t \leq u$ ou $u \leq t$.

*Exemples.* L'ordre usuel sur les nombres ($\leq$ sur $\mathbb{N}$, $\mathbb{Z}$ ou $\mathbb{R}$) est total : deux nombres sont toujours comparables. L'ordre chronologique des dates est total. L'inclusion entre ensembles, en revanche, n'est pas totale.

### Bon ordre

Un ordre total est un **bon ordre** si tout sous-ensemble non vide admet un plus petit élément.

- $\mathbb{N} = \\{0, 1, 2, \ldots\\}$ est un bon ordre : dans n'importe quelle collection non vide d'entiers naturels, il y en a un qui est le plus petit.
- $\mathbb{Z} = \\{\ldots, -2, -1, 0, 1, 2, \ldots\\}$ n'est **pas** un bon ordre : l'ensemble $\\{\ldots, -3, -2, -1\\}$ n'a pas de plus petit élément.

La différence est essentielle pour le temps : un bon ordre garantit l'existence d'un **premier instant**. L'ensemble $\mathbb{N}$ a un début (zéro) ; $\mathbb{Z}$ n'en a pas.

---

## 6 — Topologie

### L'idée

La topologie est la branche des mathématiques qui étudie les notions de **proximité**, de **continuité** et de **forme** — sans recourir aux mesures de distance ou d'angle.

L'intuition fondamentale est la suivante : on veut pouvoir dire que deux éléments sont « proches » ou « éloignés », qu'un chemin est « continu » ou qu'il fait un « saut », qu'une forme est « la même » qu'une autre à déformation près — et cela sans avoir besoin de mesurer quoi que ce soit.

Comment est-ce possible ? En spécifiant, pour chaque point, quels sont les ensembles de points qui l'« entourent ». C'est la notion de **voisinage**.

### Voisinages

Soit $A$ un ensemble. Une **topologie** sur $A$ consiste à attribuer, à chaque élément $x \in A$, une collection de **voisinages** $\mathcal{V}(x)$.

Un voisinage de $x$ est un sous-ensemble de $A$ qui contient $x$ et les éléments considérés comme « proches » de $x$. Plus le voisinage est petit, plus les éléments qu'il contient sont proches de $x$.

*Exemple concret.* Imaginons trois villes : Paris, Lyon, Marseille. Un voisinage de Lyon pourrait être $\\{$Paris, Lyon$\\}$ (les villes à moins de 500 km de Lyon) ou $\\{$Lyon$\\}$ seul (les villes à moins de 50 km). Marseille n'apparaît dans aucun petit voisinage de Lyon — elle est « topologiquement éloignée ».

Les voisinages doivent satisfaire quelques règles de bon sens :

- $x$ appartient à chacun de ses voisinages (on est toujours proche de soi-même).
- Si $V$ est un voisinage de $x$ et $V \subseteq W$, alors $W$ est aussi un voisinage de $x$ (un ensemble plus grand qu'un voisinage est encore un voisinage).
- L'intersection de deux voisinages de $x$ est un voisinage de $x$ (la zone commune à deux voisinages est encore un voisinage).

### Ouverts et fermés

Un **ouvert** est un ensemble $U$ tel que chacun de ses points est « à l'intérieur » : pour tout $x \in U$, il existe un voisinage de $x$ entièrement contenu dans $U$. Autrement dit, aucun point d'un ouvert n'est « au bord ».

Un **fermé** est le complémentaire d'un ouvert : un ensemble dont le « bord » est inclus dans l'ensemble.

*Analogie.* Sur la droite des nombres réels :

- L'intervalle ouvert $(0, 1) = \\{x \mid 0 < x < 1\\}$ est un ouvert : pour chaque point à l'intérieur, on peut trouver un petit intervalle autour de lui qui reste à l'intérieur. Mais les extrémités 0 et 1 ne sont pas incluses.
- L'intervalle fermé $[0, 1] = \\{x \mid 0 \leq x \leq 1\\}$ est un fermé : les extrémités sont incluses.
- L'intervalle $[0, 1)$ n'est ni ouvert ni fermé.

### Distance et espace métrique

Lorsqu'on dispose d'une **distance** — une fonction $d : A \times A \to \mathbb{R}^+$ qui mesure l'écart entre deux éléments — celle-ci induit naturellement une topologie.

Une distance doit satisfaire :

- $d(x, y) \geq 0$, et $d(x, y) = 0$ si et seulement si $x = y$ (la distance est positive, et nulle uniquement pour un point avec lui-même) ;
- $d(x, y) = d(y, x)$ (la distance est symétrique) ;
- $d(x, z) \leq d(x, y) + d(y, z)$ (**inégalité triangulaire** : le chemin direct est toujours le plus court).

Un ensemble muni d'une distance s'appelle un **espace métrique**.

Dans un espace métrique, les voisinages sont les **boules ouvertes** :

$B(x, r) = \\{y \in A \mid d(x, y) < r\\}$

La boule $B(x, r)$ contient tous les points situés à une distance strictement inférieure à $r$ de $x$.

### Topologie sans distance

La puissance de la topologie est qu'elle ne *nécessite* pas de distance. Deux éléments peuvent être déclarés « proches » sans qu'on puisse quantifier leur écart. La distance est un cas particulier — le plus intuitif et le plus courant — mais pas le seul.

*Exemples.*

- Sur un réseau social, on pourrait définir la proximité par le nombre de connexions communes, sans que cela constitue une distance au sens formel (l'inégalité triangulaire n'est pas nécessairement respectée).
- Sur un graphe, la topologie naturelle est celle du voisinage dans le graphe : les voisins d'un sommet sont les sommets reliés par une arête. Cette topologie « discrète » ne provient pas d'une distance continue.

### Continuité

La topologie permet de définir la **continuité** sans recourir aux limites numériques. Une application $f : A \to B$ est **continue** si elle préserve la proximité : les images de points proches sont proches. Formellement, l'image réciproque de tout ouvert de $B$ est un ouvert de $A$.

*Intuition.* Si deux points sont dans un même petit voisinage (ils sont proches), leurs images par $f$ doivent aussi être proches. La fonction ne « déchire » pas l'espace.

### Topologie dans le texte

Dans le texte principal, la topologie intervient pour formaliser la disposition spatiale des éléments d'un système, indépendamment de leurs relations. Deux éléments peuvent être topologiquement voisins (proches dans l'espace) sans être en relation (connectés dans le graphe), et réciproquement.

La topologie effective $T_e$, qui dépend de l'état $e$, capture l'idée que la configuration d'un système peut modifier la structure de proximité — de la même manière que, en relativité générale, la distribution de masse courbe l'espace-temps.

---

## 7 — Probabilités

### L'idée

Les probabilités formalisent l'**incertitude**. Lorsqu'on ne sait pas avec certitude ce qui va se produire, mais qu'on connaît les possibilités et qu'on peut évaluer leurs chances respectives, on est dans le domaine des probabilités.

### L'espace de probabilité

Un **espace de probabilité** $(\Omega, P)$ modélise une situation d'incertitude. Il est constitué de trois éléments :

**L'univers** $\Omega$ est l'ensemble de toutes les **issues** possibles — tous les résultats élémentaires que l'expérience pourrait produire. Chaque issue $\omega \in \Omega$ est un résultat concret, indivisible.

*Exemple.* Lancer un dé à six faces : $\Omega = \\{1, 2, 3, 4, 5, 6\\}$. Tirer une carte d'un jeu : $\Omega$ contient 52 éléments.

**Un événement** est un sous-ensemble de $\Omega$ — un ensemble d'issues. Un événement se produit lorsque l'issue observée lui appartient.

*Exemple.* « Obtenir un nombre pair » est l'événement $\\{2, 4, 6\\} \subset \Omega$. « Obtenir 6 » est l'événement $\\{6\\}$. « Obtenir quelque chose » est l'événement $\Omega$ tout entier.

**La probabilité** $P$ est une fonction qui attribue à chaque événement un nombre entre 0 et 1 :

- $P(\Omega) = 1$ : quelque chose se produit nécessairement.
- $P(\emptyset) = 0$ : l'événement « rien ne se produit » est impossible.
- Si deux événements $A$ et $B$ sont incompatibles (ils ne peuvent se produire simultanément), alors $P(A \cup B) = P(A) + P(B)$.

La probabilité mesure la "chance" qu'un événement se produise : 0 signifie impossible, 1 signifie certain, 0,5 signifie une chance sur deux.

### Variable aléatoire

Une **variable aléatoire** est une fonction qui transforme chaque issue du hasard en un résultat concret. Formellement, c'est une application $f : \Omega \to \mathcal{A}$, où $\mathcal{A}$ est l'ensemble des résultats possibles.

L'idée est la suivante : l'issue $\omega$ (le résultat brut du hasard) n'est pas toujours ce qui nous intéresse. On veut souvent en déduire une *conséquence* — un gain, une action, un état. La variable aléatoire opère cette traduction.

### La loi d'une variable aléatoire

La **loi** de $f$ décrit les probabilités des différents résultats :

$P(f = a) = P(\\{\omega \in \Omega \mid f(\omega) = a\\})$

Elle dit : « quelle est la probabilité que la variable aléatoire prenne telle valeur ? »

### Exemple détaillé

Un joueur lance un dé et gagne 10 € s'il obtient 6, perd 2 € sinon.

- **Univers** : $\Omega = \\{1, 2, 3, 4, 5, 6\\}$ — les six issues possibles.
- **Probabilité** : $P$ uniforme — chaque face a une probabilité de $1/6$.
- **Événement** « obtenir 6 » : le sous-ensemble $\\{6\\}$, de probabilité $1/6$.
- **Événement** « ne pas obtenir 6 » : le sous-ensemble $\\{1, 2, 3, 4, 5\\}$, de probabilité $5/6$.
- **Variable aléatoire** « gain du joueur » : $G : \Omega \to \mathbb{R}$ définie par $G(6) = 10$ et $G(\omega) = -2$ pour $\omega \neq 6$. La variable $G$ n'est pas l'identité — elle transforme le résultat du dé en une conséquence (un gain ou une perte).
- **Loi** de $G$ : $P(G = 10) = 1/6$ et $P(G = -2) = 5/6$.

### Lien avec le texte

Dans le texte principal, une **force** est une variable aléatoire à valeurs dans un ensemble d'actions :

$f : \Omega \to \mathcal{A}$

Pour chaque issue $\omega$ du hasard, $f(\omega)$ est l'action sélectionnée. Si la force est déterministe, elle sélectionne toujours la même action — la probabilité est concentrée sur un seul résultat. Si elle est stochastique, plusieurs actions sont possibles, chacune avec une certaine probabilité.

---

## Bibliographie indicative

Les notions présentées dans cette annexe sont des concepts fondamentaux des mathématiques, traités dans tout manuel d'introduction. Voici quelques références accessibles pour le lecteur souhaitant approfondir.

### Ensembles, relations, applications

- **Halmos, P.** — *Naive Set Theory* (1960). Introduction classique et accessible à la théorie des ensembles, sans formalisme excessif.
- **Dehornoy, P.** — *La théorie des ensembles : introduction à une théorie de l'infini et des grands cardinaux* (2017). En français, plus avancé mais avec une bonne introduction.

### Relations d'ordre

- **Davey, B. A. & Priestley, H. A.** — *Introduction to Lattices and Order* (2002). Référence standard sur les ordres partiels et les structures ordonnées.

### Topologie

- **Munkres, J.** — *Topology* (2000). Le manuel de référence, clair et progressif. Les chapitres 1 à 4 couvrent les fondements (espaces topologiques, continuité, connexité, compacité).
- **Mendelson, B.** — *Introduction to Topology* (1990). Plus court et plus élémentaire que Munkres, adapté à une première approche.
- **Alexandroff, P.** — *Elementary Concepts of Topology* (1961). Petit texte remarquable d'un des fondateurs de la discipline, axé sur l'intuition géométrique.

### Probabilités

- **Foata, D. & Fuchs, A.** — *Calcul des probabilités* (1998). Manuel en français, clair et progressif, avec de nombreux exemples.
- **Feller, W.** — *An Introduction to Probability Theory and Its Applications* (vol. 1, 1968). Classique incontournable, riche en intuitions et en exemples concrets.
- **Rosenthal, J. S.** — *A First Look at Rigorous Probability Theory* (2006). Pour le lecteur souhaitant comprendre les fondements formels (mesures, tribus) après une première approche intuitive.

### Ouvrages transversaux

- **Courant, R. & Robbins, H.** — *What is Mathematics?* (1941, réédité). Vue d'ensemble magistrale des mathématiques fondamentales, accessible sans prérequis.

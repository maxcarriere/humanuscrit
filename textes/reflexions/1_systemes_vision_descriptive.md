---
title: Chapitre 1 — Système — vision descriptive
short_title: Système — vision descriptive
permalink: /textes/reflexions/chapitre-1-systemes-vision-descriptive/
order: 3
date: 2026-02-17
last_modified_at: 2026-02-16
---

# Système — Vision descriptive

*De la structure au mouvement*

---

Le chapitre précédent a posé les conditions de l'existence : des éléments distingués, agencés en une configuration cohérente, qui se transforme dans un cadre d'espace et de temps. Il a identifié trois principes fondamentaux — distinction, configuration, transformation — et montré que le réel peut être pensé comme une succession de configurations engendrée par des transformations opérant sur des éléments distingués.

Il avait aussi noté, dans sa clôture, que tous les ingrédients d'un système étaient déjà en place — sans que le mot ait été prononcé.

C'est maintenant qu'il faut le prononcer, et surtout le formaliser. Car une idée qui ne peut pas se traduire en une structure précise n'est peut-être pas aussi claire qu'elle le semble.

Le présent chapitre propose un formalisme minimal pour la notion de système. Il ne s'agit pas de construire un appareil mathématique destiné au calcul. Il s'agit de poser un vocabulaire formel dont chaque terme a une signification exacte, dont les relations entre termes sont explicites, et qui soit suffisamment général pour s'appliquer à n'importe quel domaine — physique, biologique, social, cognitif — sans dépendre d'aucun.

Conformément à ce qui est annoncé dans le préambule, chaque définition formelle est accompagnée d'une explication en langage naturel. Le lecteur peu familier avec la notation mathématique peut se concentrer sur le texte sans perdre le fil du raisonnement — les formules ne sont qu'une cristallisation de ce qui est dit en mots.

Ce formalisme s'articule autour de trois espaces fondamentaux, qui correspondent exactement aux trois principes du chapitre 0 :

- **$X$** — l'espace des **distinctions** possibles,
- **$Y$** — l'espace des **configurations** possibles,
- **$Z$** — l'espace des **transformations** possibles.

Le chapitre se divise en trois parties. La première introduit le graphe comme structure formelle minimale et construit l'espace des configurations. La deuxième pose le vocabulaire — état, action, force, temps, trajectoire — sans encore parler de système. La troisième assemble ce vocabulaire pour définir les différents types de systèmes — en temps discret d'abord, puis en esquissant une extension au temps continu dont le traitement complet dépasse le cadre de ce chapitre.

---

## I — Le graphe

### De la distinction au graphe

Le chapitre 0 posait la distinction comme premier acte de l'existence : séparer *ceci* de *cela*, reconnaître qu'il y a des choses, et que ces choses ne sont pas les mêmes. Il posait ensuite la configuration comme l'agencement de ces éléments distingués — la manière dont ils sont reliés les uns aux autres.

Il nous faut maintenant une structure formelle capable d'exprimer ces idées — une structure assez simple pour être universelle, assez riche pour supporter tout ce qui suivra.

Cette structure existe. C'est le **graphe**.

> **Définition 1 — Graphe**
> 
> Un **graphe** est un couple $G = (X, L)$ où :
> 
> - $X$ est un ensemble fini d'éléments, appelés **sommets** ;
> - $L$ est un ensemble de **liens** entre ces sommets.

Un sommet représente un élément distingué — une entité identifiable, séparée des autres. Un lien représente une relation — une dépendance, une proximité, une compatibilité. Le lien ne présuppose rien de physique : il exprime simplement le fait que deux éléments ne sont pas indépendants l'un de l'autre.

Le graphe est la traduction directe, en langage formel, de ce que le chapitre 0 décrivait en langage naturel :

- **distinguer** des éléments → les sommets du graphe ;
- **configurer** leurs relations → les liens du graphe ;
- le tout forme une **structure** → le graphe lui-même.

*Remarque.* Un lien peut être symétrique (la relation entre A et B est la même que celle entre B et A) ou orienté (la relation va de A vers B sans réciprocité). Il peut aussi relier plus de deux éléments : une relation ternaire, quaternaire, etc., est tout aussi légitime qu'une relation binaire. Le formalisme n'exclut rien a priori.

---

### L'espace des distinctions

L'ensemble $X$ des sommets d'un graphe constitue le premier espace fondamental.

> **Définition 2 — Espace des distinctions**
> 
> L'**espace des distinctions**, noté $X$, est l'ensemble de tous les éléments susceptibles d'être distingués.
> 
> C'est l'alphabet du système — le répertoire de tout ce qui peut être nommé, identifié, séparé.

$X$ ne dit rien sur les relations entre ses éléments. Il dit seulement : voici les briques élémentaires. Tout ce qui suit — configurations, transformations, systèmes — sera construit à partir de cet ensemble.

---

### L'espace des configurations

Étant donné un ensemble $X$ de $n$ éléments distingués, une **configuration** est une manière de les relier entre eux. Elle décrit, pour chaque groupe d'éléments, si un lien existe ou non.

Chaque lien possible est soit présent, soit absent. C'est un choix binaire — et c'est de ce choix que naît l'immensité combinatoire.

> **Définition 3 — Espace des configurations**
> 
> Soit $X$ un ensemble de $n$ éléments.
> 
> L'**espace des configurations** de $X$, noté $Y(X)$, est l'ensemble de toutes les manières concevables de relier les éléments de $X$ entre eux.
> 
> Pour des liens binaires non orientés, le nombre de paires possibles entre $n$ éléments est $n(n-1)/2$. Chaque paire pouvant être liée ou non, l'espace des configurations contient :
> 
> $$\lvert Y(X) \rvert = 2^{n(n-1)/2}$$
> 
> éléments.

Ce nombre croît vertigineusement. Pour 3 éléments, il y a 3 paires possibles et donc $2^3 = 8$ configurations — de l'absence totale de lien à la connexion complète. Pour 5 éléments, 10 paires et 1 024 configurations. Pour 10 éléments, 45 paires et plus de 35 000 milliards de configurations.

Cette explosion n'est pas un détail technique. Elle est constitutive de ce que signifie comprendre une structure : l'espace des configurations est l'univers de tout ce qui est *logiquement concevable*. Chaque élément de $Y(X)$ est un graphe différent — un agencement possible des mêmes éléments.

*Exemple.* Trois personnes — A, B, C. Les relations possibles sont : A-B, A-C, B-C. L'espace des configurations contient 8 possibilités :

- Aucun lien (les trois sont isolés)
- Un seul lien (trois cas : A-B seul, A-C seul, B-C seul)
- Deux liens (trois cas)
- Trois liens (le graphe complet — tout le monde est relié)

Chacune de ces huit configurations est une structure différente, construite avec les mêmes éléments.

*Remarque.* Si l'on admet des liens orientés, le nombre de configurations augmente encore : chaque paire offre non plus 2 mais 4 possibilités (pas de lien, $A \to B$, $B \to A$, les deux). Pour des relations d'arité supérieure (ternaires, etc.), l'explosion combinatoire s'amplifie davantage. L'espace $Y(X)$ est toujours plus vaste qu'on ne l'imagine.

---

### Le graphe comme support formel

Le graphe n'est pas encore un système. Il constitue seulement le **support structurel minimal** — l'armature formelle sur laquelle le reste sera construit.

Un graphe particulier est un *élément* de $Y(X)$ — une configuration parmi toutes celles qui sont concevables. Dire « voici un graphe » revient à dire « parmi toutes les manières possibles de relier ces éléments, voici celle qui est effectivement réalisée ».

Le graphe formalise les deux premiers principes du chapitre 0 — distinction et configuration. Mais il lui manque encore le troisième — la **transformation** — et surtout un principe de sélection : la **contrainte**, qui fera le tri entre le concevable et l'admissible.

---

## II — Vocabulaire

Cette section pose les concepts nécessaires pour décrire la structure et le mouvement d'un graphe, sans encore introduire la notion de système. Le mot *système* n'apparaîtra qu'à la section suivante, une fois que chaque concept aura été défini pour lui-même.

---

### Relations possibles et relations effectives

Un ensemble de distinctions $X$ peut être muni d'une famille de **relations possibles** :

$$R_p = (R_i)_{i \in I}$$

où chaque $R\_i$ est une relation de degré quelconque définie sur $X$. Chaque relation $R\_i$ correspond à un type de lien possible entre les éléments de $X$.

On peut formaliser cette notion de deux manières, selon le degré de généralité souhaité.

---

#### Relation logique

> **Définition 4 — Relation logique**
> 
> Une **relation possible** $R\_i$ de degré $n\_i$ sur $X$ est un sous-ensemble de $X^{n\_i}$ :
> 
> $R\_i \subseteq X^{n\_i}$
> 
> Elle désigne l'ensemble des $n\_i$-uplets d'éléments entre lesquels la relation *peut* exister. La relation est **binaire** : pour un $n\_i$-uplet donné, le lien est possible ou ne l'est pas.

Ces relations décrivent non pas ce qui est effectivement réalisé, mais tout ce qui *pourrait l'être*.

À un instant donné, seules certaines de ces relations sont actives. Cette distinction est capitale : un lien possible n'est pas un lien effectif.

- Les **relations possibles** $R\_i$ — le champ de tout ce qui pourrait lier les éléments ;

- Les **relations effectives** $r\_i$ — ce qui est actuellement réalisé.

Soit $A \subseteq X$ une partie de $X$. La **restriction** de $R\_i$ à $A$, notée $R\_i \restriction_A$, est l'ensemble des $n\_i$-uplets de $R\_i$ dont tous les éléments appartiennent à $A$ :

$$R_i \restriction_A = R_i \cap A^{n_i}$$

On a nécessairement $r\_i \subseteq R\_i \restriction_A$ : une relation effective entre les éléments présents ne peut exister que si la relation possible l'autorise.

Cette séparation entre le possible et l'effectif est l'une des idées les plus importantes de toute la construction. Une structure ne se définit pas seulement par ce qui *est*, mais par ce qui *pourrait être*.

*Exemple.* Dans un réseau social, les relations possibles sont toutes les connexions concevables entre individus. Celles-ci peuvent être de plusieurs natures : familiale, amicale, professionnelle, etc. Les relations effectives sont les liens qui existent réellement à un instant donné :

- $X$ : ensemble des individus

- $R_1$ : Relation amicale ; $R_2$ : Relation familiale ; $R_3$ : Relation professionnelle.
  Ces relations indiquent quels liens sont possibles *a priori* entre les individus.
  Pour deux individus $x,y \in X$, $(x,y) \in R_1$ signifie que l'amitié est possible entre eux.

- $r_1, r_2, r_3$ indiquent comment sont réellement reliés les individus :
  Dire que deux individus $x,y \in X$ sont effectivement amis s'écrit $(x,y) \in r_1$.

---

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

Pour une partie $A \subseteq X$, la **restriction** de $R\_i$ à $A$, notée $R\_i \restriction_A$, est l'application obtenue en restreignant le domaine de $R\_i$ aux $n\_i$-uplets d'éléments de $A$ :

$$R_i \restriction_A : A^{n_i} \to W_i, \quad (R_i \restriction_A)(x_1, \ldots, x_{n_i}) = R_i(x_1, \ldots, x_{n_i})$$

La relation effective $r\_i$ est alors une application de $A^{n\_i}$ dans $W\_i$ telle que $r\_i(x\_1, \ldots, x\_{n\_i}) \neq 0$ implique $(R\_i \restriction_A)(x\_1, \ldots, x\_{n\_i}) \neq 0$.

*Exemple.* Dans le même réseau social, on peut enrichir la description : l'amitié n'est plus seulement présente ou absente, elle porte une intensité. $R_1 : X^2 \to [0, 1]$ mesure le degré d'affinité ; $R_2 : X^2 \to \{0, 1\}$ reste binaire (on est parent ou non) ; $R_3 : X^2 \to \{\text{nul}, \text{collègue}, \text{hiérarchique}\}$ est qualitative. Dire que $x$ et $y$ sont amis avec une affinité de $0.8$ s'écrit $r_1(x,y) = 0.8$.

---

#### Convention

**Dans la suite de ce texte, le mot *relation* désigne indifféremment une relation logique ou valuée.** Les définitions et raisonnements s'appliquent aux deux cas. Le lecteur peut, selon sa préférence, adopter l'une ou l'autre formalisation — la relation logique pour la simplicité, la relation valuée pour la généralité. La notation reste la même : $R\_i$ pour les relations possibles, $r\_i$ pour les relations effectives.

*(Voir Annexe — Prérequis mathématiques : N-uplets, Relations, Applications.)*

---

### État

**Définition 5 — État**

> Un **état** est un couple $e = (A, R)$ où :
> 
> - $A \subseteq X$ est l'ensemble des éléments **présents** — ceux qui participent effectivement à la configuration ;
> 
> - $R = (r_i)_{i \in I}$ est une famille de **relations effectives** sur $A$ entre les éléments présents — avec $r\_i \subset R\_i \restriction_A$ 
> 
> Les relations effectives sont incluses dans la restriction des relations possibles aux éléments présents. Toute relation possible n'est pas nécessairement activée.

L'état dit *quoi* existe et *comment* c'est relié, à un instant donné. Il est la photographie du réel — non pas ce que le réel *pourrait* être, mais ce qu'il *est*.

Autrement dit : un état décrit une situation concrète. Il identifie les éléments qui participent effectivement à la configuration (l'ensemble $A$), et précise, parmi toutes les relations concevables entre ces éléments, lesquelles sont actuellement actives.

*Remarque.* L'état ne se réduit pas à une configuration du graphe au sens de la section I. Il est plus riche : il précise non seulement quels liens existent, mais aussi *quels éléments sont présents*. Un état peut contenir tous les éléments de $X$, ou seulement certains d'entre eux. Dans le cas de relations valuées, l'état précise en outre la *valeur* de chaque relation.

---

### Espace des configurations d'une structure relationnelle

Lorsque l'ensemble $X$ est muni d'une famille de relations possibles $R_p$, l'espace des configurations s'enrichit.

> **Définition 6 — Espace des configurations relationnelles**
> 
> Soit une structure potentielle $(X, R_p)$.
> 
> L'espace des configurations relationnelles, noté $Y(X, R_p)$, est l'ensemble de tous les états logiquement concevables : toutes les façons de choisir des éléments présents et d'activer des relations entre eux, dans le respect des relations possibles.

Cet espace contient toutes les configurations relationnelles possibles. Il généralise $Y(X)$ de la section I : là où $Y(X)$ ne considérait que les liens binaires entre éléments, $Y(X, R_p)$ intègre la structure relationnelle complète.

Lorsque les relations sont logiques (binaires), le nombre d'états concevables est fini et croît exponentiellement. Lorsque les relations sont valuées dans un espace continu (par exemple $W_i = \mathbb{R}^+$), l'espace des configurations devient lui-même continu — et potentiellement infini. Ce point est important : il prépare le passage au temps continu, où les états évoluent de manière continue dans un espace d'états qui possède une structure de voisinage.

On retrouve ici les trois niveaux d'être : la **structure potentielle** $(X, R_p)$ — l'univers des éléments et des relations concevables ; l'**espace combinatoire** $Y$ — toutes les configurations logiquement compatibles ; et, bientôt, le **système** — la sélection des configurations effectivement admissibles, c'est-à-dire un sous-ensemble de $Y$.

---

### Topologie

Les éléments d'un ensemble ne sont pas seulement caractérisés par leurs relations — ils peuvent aussi être caractérisés par leur *disposition*. Certains sont proches les uns des autres, d'autres sont éloignés. Cette notion de proximité, indépendante des relations, est ce qu'on appelle une **topologie**.

> **Définition 7 — Topologie**
> 
> Une **topologie** sur un ensemble $A$ est la donnée, pour chaque élément $x \in A$, d'une collection de **voisinages** de $x$.
> 
> Un voisinage de $x$ est un sous-ensemble $V \subseteq A$ qui contient $x$ et les éléments considérés comme « proches » de $x$ à une certaine échelle.
> 
> On note $\mathcal{V}(x)$ la collection des voisinages de $x$.

Autrement dit, une topologie répond à la question : *pour chaque élément, quels sont ses voisins ?* — sans mesurer la distance qui les sépare. Deux éléments sont « proches » s'ils apparaissent ensemble dans un voisinage de petite taille ; ils sont « éloignés » s'ils n'apparaissent ensemble dans aucun voisinage restreint.

*Exemple.* Sur une carte, trois villes — Paris, Lyon, Marseille — ont une disposition géographique : Paris est plus proche de Lyon que de Marseille. Cette proximité est une propriété topologique. Elle ne dépend pas de l'existence d'une route entre ces villes (qui serait une relation) — elle dépend de leur position dans l'espace.

*Exemple.* Dans un réseau social, on pourrait définir une topologie par la proximité géographique des individus : deux personnes habitant la même ville sont topologiquement voisines, même si elles n'entretiennent aucune relation.

La topologie est donc *indépendante* des relations. Deux éléments peuvent être voisins dans la topologie sans être en relation (des voisins de palier qui ne se connaissent pas), et réciproquement, deux éléments peuvent être en relation sans être topologiquement voisins (des amis vivant dans des pays différents). La topologie est une propriété de l'*espace* dans lequel les éléments se situent ; les relations sont des propriétés des *éléments* entre eux.

Toutefois, les relations peuvent *influencer* la topologie. Si la configuration d'un état modifie la structure de voisinage, on obtient une topologie effective $T_e$, dépendante de l'état $e$. Cette topologie effective peut être interprétée comme une **courbure** de la topologie initiale, induite par l'état — de la même manière que, en physique, la distribution de masse courbe l'espace-temps.

*Remarque.* Lorsque les relations sont valuées et portent des valeurs numériques (par exemple une intensité ou une affinité), elles peuvent induire naturellement une notion de distance entre éléments — et donc une topologie. La topologie n'est alors plus seulement indépendante des relations : elle peut en *émerger*.

*(Voir Annexe — Prérequis mathématiques : Ensembles, Topologie.)*

Lorsqu'on dispose d'une **distance** — une fonction qui assigne à chaque paire d'éléments un nombre positif mesurant leur écart — celle-ci induit naturellement une topologie : les voisinages sont les « boules » de rayon donné autour de chaque point. Mais une topologie est plus générale qu'une distance : elle capture la proximité sans exiger de la quantifier.

---

### Action

Dans ce paragraphe on considère une structure potentielle $(X, R_p)$ et on note $Y = Y(X, R_p)$ l'espace des configurations relationnelles.

---

**Définition 8 — Action**

> Soit $D \subseteq Y$ un sous-ensemble de configurations.
> 
> Une **action** est une application :
> 
> $a : D \to D$
> 
> où $D$ est le **domaine** de l'action — c'est-à-dire l'ensemble des configurations sur lesquelles elle est définie.
> 
> L'action prend une configuration appartenant à son domaine et produit une nouvelle configuration dans ce même domaine, de façon univoque.

Une action n'est pas nécessairement définie sur toutes les configurations concevables. Elle n'opère que sur celles qui relèvent de son champ d'application — les configurations pour lesquelles la transformation a un sens.

*Remarque.* Lorsque les relations sont valuées, une action peut modifier non seulement la *présence* de liens, mais aussi leur *intensité*. Par exemple, une action peut renforcer une amitié, créer un nouveau lien, ou affaiblir une connexion sans la supprimer.

---

**Définition 9 — Portée d'une action**

> La **portée** d'une action $a : D \to D$ est l'ensemble des configurations de son domaine qu'elle modifie effectivement :
> 
> $\text{Port}(a) = \{ y \in D \mid a(y) \neq y \}$
> 
> Une configuration dans le domaine mais hors de la portée est **inerte** face à l'action : l'action s'y applique, mais ne change rien.

La portée est toujours un sous-ensemble du domaine : $\text{Port}(a) \subseteq D$. Elle peut coïncider avec le domaine (toute configuration applicable est effectivement modifiée) ou en être un sous-ensemble strict (certaines configurations restent inchangées).

*Exemple.* Reprenons le réseau social à trois personnes — Alice, Bob et Carole — avec l'amitié comme seule relation possible. L'espace des configurations $Y$ contient toutes les combinaisons de liens d'amitié concevables entre ces trois personnes : personne n'est ami, seuls Alice et Bob le sont, tout le monde est ami de tout le monde, etc. — soit 8 configurations au total (dans le cas binaire).

Considérons l'action « Alice et Bob deviennent amis ». Son **domaine** $D$ est $Y$ tout entier : on peut tenter de lier Alice et Bob quelle que soit la situation courante. L'action ajoute le lien Alice-Bob s'il n'est pas déjà présent, et ne change rien sinon.

Sa **portée** est l'ensemble des configurations où Alice et Bob ne sont *pas encore* amis — par exemple la configuration où personne ne se connaît, ou celle où seuls Bob et Carole sont amis. Ce sont les seules configurations effectivement modifiées par cette action.

En revanche, dans une configuration où Alice et Bob sont *déjà* amis — par exemple celle où tout le monde est ami de tout le monde —, l'action s'applique mais ne change rien. Cette configuration est dans le domaine, mais hors de la portée.

Aux échecs, la situation est différente : le coup « cavalier de g1 en f3 » ne peut se jouer que dans les positions où un cavalier se trouve en g1 et où f3 est accessible. Son domaine est restreint à ces positions — et sa portée coïncide avec son domaine, car tout coup légal modifie la position. Aucun coup ne « ne fait rien ».

---

### L'espace des transformations

De même que $Y$ contient toutes les configurations concevables, on peut définir un espace contenant toutes les transformations concevables. Cet espace dépend de $Y$ — on ne peut concevoir les transformations qu'une fois les configurations posées.

> **Définition 10 — Espace des transformations**
> 
> L'**espace des transformations** de $Y$, noté $Z(Y)$, est l'ensemble de toutes les actions logiquement concevables :
> 
> $$Z(Y) = \bigcup_{D \subseteq Y} D^D = \{a:D\rightarrow D \in D^D \mid D\subseteq Y\}$$
> 
> où $D^D$ désigne l'ensemble de toutes les applications de $D$ dans $D$ *(voir Annexe — Prérequis mathématiques : Applications)*.
> 
> Chaque élément de $Z(Y)$ est une action définie sur un certain domaine de configurations.

$Z(Y)$ joue pour les transformations le même rôle que $Y$ pour les configurations : il représente le champ de tout ce qui est possible en termes de changement, sans restriction.

Cette définition contient en elle-même une structure riche. Certaines actions sont **locales** : elles ne modifient qu'un petit nombre de relations au sein de la configuration (ajouter un lien, modifier l'intensité d'une connexion). D'autres sont **globales** : elles restructurent l'ensemble de la configuration en un seul pas. Certaines sont **réversibles** — il existe une action inverse qui restaure la configuration d'origine — et d'autres ne le sont pas. Ces distinctions ne sont pas posées ici comme des définitions, mais elles émergent naturellement de la structure de $Z(Y)$ et joueront un rôle central dans l'analyse des systèmes.

Les trois espaces fondamentaux sont maintenant posés, et leur dépendance logique est explicite :

$$X \longrightarrow Y(X) \longrightarrow Z(Y(X))$$

Les distinctions engendrent les configurations, qui engendrent les transformations. Chaque espace est construit à partir du précédent. En notation abrégée :

| Espace | Notation complète | Contenu                       | Principe du chapitre 0 |
| ------ | ----------------- | ----------------------------- | ---------------------- |
| $X$    | $X$               | Les distinctions possibles    | Distinction            |
| $Y$    | $Y(X)$            | Les configurations possibles  | Configuration          |
| $Z$    | $Z(Y)$            | Les transformations possibles | Transformation         |

Chaque espace correspond exactement à l'un des trois principes fondamentaux identifiés au chapitre 0. Ce n'est pas une coïncidence — c'est le signe que le formalisme traduit fidèlement l'ontologie.

---

### Temps

Le temps est le cadre dans lequel les transformations s'ordonnent.

> **Définition 11 — Temps**
> 
> Le **temps** est un ensemble $T$ muni d'un **ordre** $(T, \leq)$.
> 
> Pour un instant $t \in T$, on définit :
> 
> - le **passé** : $T_{<t} = \{ u \in T \mid u < t \}$
> - le **futur** : $T_{>t} = \{ u \in T \mid t < u \}$

Le temps n'est pas nécessairement régulier, ni même linéaire. Sa définition minimale est celle que le chapitre 0 avait déjà posée : un *avant* et un *après*. Le temps est l'ordre causal.

Le temps n'est pas un contenant préalable dans lequel les événements viendraient se loger. Il est la *trace* des transformations elles-mêmes. S'il n'y a pas de transformation, il n'y a pas de temps.

La nature de l'ordre que l'on impose sur $T$ détermine ce que l'on autorise comme structure temporelle. Chaque hypothèse supplémentaire restreint les possibilités et apporte des garanties.

**Ordre partiel.** Dans le cas le plus général, l'ordre est seulement partiel : certains instants sont *incomparables* — ni l'un avant l'autre, ni simultanés — simplement sans rapport temporel. Cela modélise des *temps parallèles*, des lignes d'évolution indépendantes. On peut penser à des processus concurrents qui avancent chacun à leur rythme, sans synchronisation globale.

**Ordre total.** Si l'on exige que deux instants quelconques soient toujours comparables, le temps devient **linéaire** : il n'y a qu'une seule ligne temporelle, et tout événement se situe soit avant, soit après tout autre. C'est l'hypothèse la plus courante. Elle laisse cependant ouverte la question de savoir si le temps a un début. Par exemple, $T = \mathbb{Z}$ (les entiers relatifs) est totalement ordonné mais n'a ni premier ni dernier instant — le temps s'étend indéfiniment vers le passé comme vers le futur.

**Bon ordre.** Si l'on exige en plus que tout sous-ensemble non vide de $T$ admette un plus petit élément, on obtient un **bon ordre**. Cette hypothèse garantit l'existence d'un premier instant, et plus généralement d'un instant « le plus ancien » dans toute collection d'instants. L'ensemble $\mathbb{N} = \{0, 1, 2, \ldots\}$ est un bon ordre ; $\mathbb{Z}$ ne l'est pas (l'ensemble des entiers négatifs n'a pas de plus petit élément).

On distingue par ailleurs deux grandes familles de temps, selon la structure de $T$ :

**Temps discret.** Chaque instant possède un successeur immédiat — il n'y a pas d'instant « entre » deux instants consécutifs. L'évolution procède pas à pas : à chaque instant, une transformation s'applique et produit la configuration suivante. Les exemples types sont $T = \mathbb{N}$ (avec premier instant) et $T = \mathbb{Z}$ (sans premier instant).

**Temps continu.** $T$ est un intervalle de $\mathbb{R}$ (ou plus généralement un ensemble dense) : entre deux instants quelconques, il en existe toujours d'autres. L'évolution ne procède plus par pas mais par flux — la notion d'action doit alors être repensée.

Le choix entre temps discret et temps continu n'est pas posé ici comme un axiome. Il dépend du système étudié et sera précisé dans la section suivante, lors de la définition des systèmes dynamiques.

*(Voir Annexe — Prérequis mathématiques : Relations d'ordre.)*

---

### Trajectoire

> **Définition 12 — Trajectoire**
> 
> Une **trajectoire** est une suite d'états indexée par le temps :
> 
> $\sigma : T \to Y$
> 
> notée de façon plus commode $\sigma = (e_t)_{t \in T}$.
> 
> La trajectoire est l'**histoire** — le film, par opposition à la photographie qu'est l'état.

À ce stade, aucune contrainte n'est imposée sur la succession des états. Toute suite de configurations constitue une trajectoire légitime.

*Remarque.* On verra dans la section suivante que la notion de système impose des contraintes sur les successions admissibles — en particulier, la condition que chaque transition entre $e_t$ et $e_{t+1}$ soit le résultat d'une action.

---

### Force

Il reste à préciser *comment* une action est sélectionnée à chaque instant. Cette sélection peut être certaine — une seule action s'impose — ou incertaine — plusieurs actions sont possibles, et le hasard tranche entre elles. C'est le concept de **force** qui formalise cette idée.

> **Définition 13 — Force**
> 
> Soit $(\Omega, P)$ un espace de probabilité et $\mathcal{A}$ un ensemble d'actions.
> 
> Une **force** est une variable aléatoire à valeurs dans $\mathcal{A}$ :
> 
> $f : \Omega \to \mathcal{A}$
> 
> Pour chaque issue $\omega \in \Omega$ du hasard, $f(\omega)$ est l'action effectivement sélectionnée.

La force est ce qui *pousse* le système à changer. Elle ne crée pas les actions — celles-ci existent dans $Z(Y)$ — mais elle en sélectionne une, possiblement au hasard.

Une force est **déterministe** lorsqu'elle sélectionne toujours la même action, quel que soit le résultat du hasard :

$$f(\omega) = a_0 \quad \text{pour tout } \omega \in \Omega$$

L'action est alors prescrite avec certitude. Il n'y a pas d'incertitude.

Une force est **stochastique** lorsqu'elle peut sélectionner des actions différentes selon l'issue du hasard. La probabilité de chaque action est donnée par la loi de $f$ :

$$P(f = a) = P(\{ \omega \in \Omega \mid f(\omega) = a \})$$

*Exemple.* La gravité qui attire une pierre : force déterministe — une seule action (tomber) est sélectionnée avec certitude. Le vent qui souffle sur une feuille : force stochastique — la direction et l'intensité varient selon des facteurs imprévisibles, et plusieurs trajectoires sont possibles.

---

### Hasard

La définition de la force fait appel à un espace de probabilité $(\Omega, P)$ sans en préciser la nature. Cet objet a été posé comme outil formel — mais il porte en lui une question de fond : *d'où vient le hasard ?*

Deux conceptions s'affrontent.

**Le hasard comme défaut de connaissance.** L'observateur ne dispose pas de toute l'information nécessaire pour prédire l'issue. Un dé lancé obéit à des lois mécaniques précises — angle de lancer, vitesse initiale, frottement — mais la complexité des conditions initiales rend le résultat imprévisible *pour nous*. Le hasard n'est pas dans le dé : il est dans notre ignorance. C'est la conception **épistémique**.

**Le hasard comme défaut de contrainte.** Ce qui n'est pas soumis à une force déterministe est laissé au hasard. Les lois de la nature contraignent l'évolution — mais pas nécessairement jusqu'à prescrire une issue unique. Là où la contrainte ne tranche pas, le hasard occupe l'espace laissé libre. C'est la conception **ontologique** — celle que suggère, par exemple, la mécanique quantique, où l'indétermination semble irréductible à un manque d'information.

Y a-t-il *vraiment* du hasard dans les phénomènes qui nous entourent, ou bien seulement un défaut de connaissance ? La question traverse toute l'histoire de la physique et de la philosophie. Ce texte ne la tranche pas — et le formalisme n'a pas besoin qu'elle soit tranchée.

Car dans les deux cas, **une connaissance partielle de l'évolution reste possible**. On ne sait pas *si* un événement donné va se produire, mais on peut savoir *avec quelle chance* il va se produire — sur la base d'un historique d'observation, de régularités constatées, de symétries identifiées. La connaissance devient **statistique** : non plus une certitude sur l'issue, mais une mesure de vraisemblance sur l'ensemble des issues possibles.

---

Formellement, le hasard est entièrement contenu dans $\Omega$ — l'espace des issues possibles. Mais qu'*est*-ce que $\Omega$ ?

En théorie des probabilités, cette question est presque toujours éludée. On pose « soit $(\Omega, P)$ un espace de probabilité » et l'on travaille avec ses propriétés formelles sans jamais dire ce que $\Omega$ *représente*. C'est un objet abstrait — le sac dont on tire les résultats — et l'on ne regarde jamais à l'intérieur.

Mais le présent texte a une vocation ontologique. Si $\Omega$ intervient dans la définition même de la force — et donc dans la dynamique de tout système — il mérite qu'on s'y arrête. Quelques pistes.

**Première piste : $\Omega$ comme information cachée.** Dans la conception épistémique, $\Omega$ représente l'ensemble des états du monde que l'observateur ne perçoit pas — les variables cachées, les degrés de liberté non observés. Si l'on disposait de toute l'information, $\Omega$ se réduirait à un singleton et toute force serait déterministe. Le hasard serait l'ombre projetée par notre ignorance sur l'espace des actions.

**Deuxième piste : $\Omega$ comme liberté résiduelle.** Dans la conception ontologique, $\Omega$ est ce que les contraintes du système laissent indéterminé. Les contraintes restreignent les configurations concevables aux configurations admissibles ($E \subseteq Y$). Les forces restreignent les transitions — mais pas nécessairement à une seule. Ce qui reste après cette double restriction — ce que ni les contraintes ni les forces ne décident — c'est $\Omega$ : l'espace de liberté résiduelle du système.

**Troisième piste : $\Omega$ comme horizon de complexité.** $\Omega$ pourrait ne pas être un espace donné d'avance, mais émerger de la dynamique elle-même. Un système déterministe mais suffisamment complexe — sensible aux conditions initiales, aux interactions à longue portée, au nombre de degrés de liberté — peut engendrer un comportement effectivement imprévisible. L'indétermination n'est alors ni dans les lois ni dans notre ignorance, mais dans l'irréductibilité computationnelle du calcul nécessaire pour prédire l'issue.

Ces pistes ne sont pas mutuellement exclusives. Elles peuvent coexister dans un même système, à des échelles différentes. Ce qui importe pour la suite, c'est que $\Omega$ — quelle que soit son origine — est structuré par une **mesure de probabilité** $P$. Et c'est cette mesure qui rend le hasard *utilisable* : elle transforme l'indétermination brute en connaissance statistique.

*(Voir Annexe — Prérequis mathématiques : Probabilités.)*

---

## III — Les systèmes

Le vocabulaire est posé. Les concepts de configuration, d'état, d'action, de force, de hasard, de temps et de trajectoire ont été définis pour eux-mêmes, sans référence à un objet englobant.

Il est maintenant possible d'assembler ces concepts pour définir ce qu'est un **système** — et de distinguer plusieurs niveaux d'organisation selon les composantes présentes. Ces niveaux ne sont pas des catégories disjointes : chacun enrichit le précédent.

La distinction fondamentale est celle entre les systèmes **statiques** — qui décrivent une structure sans mouvement — et les systèmes **dynamiques** — qui incluent le temps et l'évolution.

---

### Système statique

Un système statique décrit une structure figée. Il ne contient aucune notion de temps ni d'évolution. Selon qu'il spécifie ou non des transformations possibles, on distingue deux variantes.

---

#### Système passif

> **Définition 14 — Système passif**
> 
> Un **système statique passif** est un triplet :
> 
> $S = (X, R_p, E)$
> 
> où :
> 
> - $X$ est l'espace des distinctions ;
> - $R_p$ la famille des relations possibles ;
> - $E \subseteq Y$ l'ensemble des **états admissibles**.

Le système passif est une **cartographie du possible** : il dit quels agencements sont admissibles, mais ne contient aucune notion de transformation. Il délimite ce qui *peut* exister sans dire comment cela peut changer.

C'est ici que la **contrainte** entre en jeu. Elle n'est pas un élément explicite du triplet — elle est ce qui *définit* $E$ comme sous-ensemble de $Y$. La contrainte est la frontière entre le concevable et l'admissible. Retirer une contrainte élargit $E$ ; ajouter une contrainte le restreint.

*Exemple.* Un cristal à l'équilibre : les atomes occupent des positions déterminées par les lois cristallographiques. Les états admissibles sont les configurations compatibles avec ces lois. Aucune évolution n'est décrite.

---

#### Système actif

> **Définition 15 — Système actif**
> 
> Un **système statique actif** est un quadruplet :
> 
> $S = (X, R_p, E, \mathcal{A})$
> 
> où $\mathcal{A}$ est un ensemble d'**actions admissibles**, chacune définie sur $E$ :
> 
> $\forall a \in \mathcal{A}, \quad a : E \to E$
> 
> Toute action admissible prend un état admissible et produit un état admissible.

Le système actif enrichit le système passif : il décrit non seulement ce qui peut exister, mais aussi comment cela peut être *transformé*. C'est le premier niveau où apparaît la transformation au sens du chapitre 0.

Le fait que les actions soient définies directement sur $E$ traduit une exigence de **cohérence** : une action ne peut s'appliquer qu'à un état admissible, et doit produire un état lui-même admissible. Le système ne peut pas s'échapper de ses propres contraintes par une action interne.

Toutefois, le système actif ne précise pas encore *quand* ni *comment* ces actions sont appliquées. Il dit quels coups sont permis, mais pas qui joue ni selon quelle stratégie.

*Exemple.* Un jeu d'échecs considéré par ses règles : les états sont les positions légales, les actions sont les coups légaux. Mais aucune stratégie, aucun joueur, aucun temps n'est encore spécifié.

---

#### Système valué

> **Définition 16 — Système valué**
> 
> Un système (passif ou actif) est dit **valué** lorsque ses relations possibles sont des relations valuées (Définition 4 bis) — c'est-à-dire lorsqu'elles prennent leurs valeurs dans des espaces de valuation $W_i$ plus riches que $\{0, 1\}$.

Le qualificatif *valué* n'est pas un type de système supplémentaire : c'est une **propriété** qui peut s'appliquer à tout système. Un système passif peut être valué ou non ; un système actif peut être valué ou non. Cette distinction sera également pertinente pour les systèmes dynamiques.

Un système dont toutes les relations sont logiques (Définition 4) est dit **logique**. Tout système logique est un cas particulier d'un système valué (avec $W_i = \{0, 1\}$).

---

### Système dynamique discret

Un système devient **dynamique** lorsqu'on le munit d'un temps et d'un mécanisme de sélection des actions — c'est-à-dire d'une ou plusieurs forces.

Lorsque le temps est **discret**, l'évolution procède pas à pas. À chaque instant, une force sélectionne une action, et l'action transforme l'état. Une contrainte fondamentale s'impose sur la trajectoire : chaque transition entre $e_t$ et $e_{t+1}$ doit être le résultat d'une action admissible. C'est cette contrainte qui distingue une trajectoire physiquement réalisable d'une simple suite arbitraire d'états.

Selon la nature du mécanisme de sélection des forces, on distingue trois niveaux de complexité croissante.

---

#### Système dynamique simple

> **Définition 17 — Système dynamique simple**
> 
> Un **système dynamique simple** est un sextuplet :
> 
> $S = (X, R_p, E, \mathcal{A}, T, f)$
> 
> où :
> 
> - $T$ est un temps discret totalement ordonné ;
> - $f : \Omega \to \mathcal{A}$ est une **force unique**, la même à tout instant et en tout état.
> 
> **Propriété de la trajectoire.** À chaque instant $t$, le hasard produit une issue $\omega_t \in \Omega$, et :
> 
> $a_t = f(\omega_t), \quad \text{puis} \quad e_{t+1} = a_t(e_t)$

Le système dynamique simple est le niveau le plus élémentaire d'évolution. La même force s'applique partout, tout le temps — indépendamment de l'état courant et de l'instant.

Si la force est déterministe ($f$ constante, sélectionnant toujours la même action $a_0$), la trajectoire est entièrement déterminée par l'état initial : $e_{t+1} = a_0(e_t)$ pour tout $t$. C'est l'**itération d'une application** — la forme la plus élémentaire d'un système dynamique discret. Lorsque l'ensemble $E$ est fini, la trajectoire est nécessairement *périodique* ou *éventuellement périodique* : après un nombre fini de pas, le système repasse par un état déjà visité et boucle indéfiniment.

Si la force est stochastique, la trajectoire est un **processus aléatoire** : à chaque pas, l'action est tirée au sort selon la même loi de probabilité.

*Exemples.* Une horloge qui avance d'un cran à chaque pas : force déterministe, trajectoire périodique. Une marche aléatoire sur un graphe, où le marcheur se déplace vers un voisin choisi uniformément au hasard : force stochastique, identique en tout point et à tout instant.

---

#### Système dynamique évolutif

> **Définition 18 — Système dynamique évolutif**
> 
> Un **système dynamique évolutif** est un sextuplet :
> 
> $S = (X, R_p, E, \mathcal{A}, T, (f_t)_{t \in T})$
> 
> où $(f_t)_{t \in T}$ est une **suite de forces** — une force différente peut s'appliquer à chaque instant.
> 
> **Propriété de la trajectoire.** À chaque instant $t$ :
> 
> $a_t = f_t(\omega_t), \quad \text{puis} \quad e_{t+1} = a_t(e_t)$

Le système évolutif introduit une dépendance temporelle : les forces changent au cours du temps, mais indépendamment de l'état du système. Les règles du jeu changent — mais elles changent selon un programme extérieur, sans réaction à ce qui se passe dans le système.

*Exemple.* Un environnement soumis à des cycles saisonniers : au printemps, certaines transformations sont favorisées (croissance, reproduction) ; en hiver, d'autres s'imposent (ralentissement, hibernation). La force change selon le calendrier, pas selon l'état du système.

---

#### Système dynamique réflexif

> **Définition 19 — Système dynamique réflexif**
> 
> Un **système dynamique réflexif** est un sextuplet :
> 
> $S = (X, R_p, E, \mathcal{A}, T, \mathcal{D})$
> 
> où $\mathcal{D}$ est un **champ de forces** — une application qui associe à chaque état admissible la force qui s'y exerce :
> 
> $\mathcal{D} : E \to (\Omega \to \mathcal{A})$
> 
> Pour chaque état $e \in E$, $\mathcal{D}(e)$ est la force qui agit lorsque le système se trouve dans cet état.
> 
> **Propriété de la trajectoire.** À chaque instant $t$ :
> 
> $a_t = \mathcal{D}(e_t)(\omega_t), \quad \text{puis} \quad e_{t+1} = a_t(e_t)$

Le système réflexif est fondamentalement différent des précédents : la force exercée **dépend de l'état courant**. Le système « réfléchit » — au sens optique du terme — sa propre configuration dans le choix de la transformation à appliquer.

C'est ici qu'apparaît le concept de **dynamique** au sens propre : le champ de forces $\mathcal{D}$ est une dynamique — il associe à chaque état la force qui le fera évoluer. De même qu'en physique un champ de forces associe à chaque point de l'espace la force qui s'y exerce, $\mathcal{D}$ associe à chaque configuration la règle de transformation qui s'y applique.

Le système réflexif est le premier niveau où le passé influence le futur autrement que par simple accumulation : la *raison* du changement dépend de *ce qui est* au moment où le changement s'opère.

Si $\mathcal{D}$ est déterministe en tout état, la trajectoire est entièrement déterminée par l'état initial. Si certaines forces sont stochastiques, la trajectoire est un processus aléatoire dont les probabilités de transition dépendent de l'état courant : c'est une **chaîne de Markov**.

*Exemple.* Un automate cellulaire : la règle est fixe, mais l'action appliquée à chaque cellule dépend de sa configuration locale. Un écosystème : les pressions sélectives (forces) dépendent de la composition actuelle des populations (état).

*Remarque.* On peut combiner les dépendances. Un système dont le champ de forces évolue dans le temps — $(\mathcal{D}_t)_{t \in T}$ — est à la fois évolutif et réflexif : les forces dépendent de l'état *et* changent au cours du temps. Ce cas, plus général, sera exploré dans les chapitres suivants.

---

#### Degrés de réflexivité

La réflexivité n'est pas un état binaire. Elle admet des degrés, qui dessinent une hiérarchie de complexité.

**Réflexivité faible.** Le champ de forces $\mathcal{D}$ dépend de l'état, mais l'ensemble des actions admissibles $\mathcal{A}$ reste fixe. Le choix de l'action change selon la configuration ; l'espace des transformations possibles reste le même.

**Réflexivité forte.** Les actions admissibles elles-mêmes changent — l'ensemble $\mathcal{A}$ évolue au cours du temps. Le système ne se contente pas de changer de comportement : il change les règles de ce qu'il *peut* faire.

**Réflexivité complète.** Le système contient une *représentation* de sa propre dynamique. Il ne se contente pas de modifier ses règles — il se *pense* en train de les modifier.

*Exemple.* Un organisme vivant ajuste ses réactions selon son état interne (réflexivité faible). Un système immunitaire apprend à reconnaître de nouvelles menaces, modifiant ses capacités d'action (réflexivité forte). Un être conscient modélise son propre fonctionnement et ajuste ses stratégies en conséquence (réflexivité complète).

---

### Système dynamique continu

Lorsque le temps est **continu** — $T$ est un intervalle de $\mathbb{R}^+$ — la mécanique discrète ne s'applique plus directement. Il n'existe plus d'instant « suivant » : entre deux instants quelconques, il en existe toujours d'autres.

La notion d'action doit alors être reformulée. En temps discret, une action est une application $a : E \to E$, et la dynamique résulte de son itération. En temps continu, une action ne peut plus être une transformation ponctuelle. Elle doit décrire une évolution sur une durée arbitraire.

---

#### Le flot

Une dynamique continue sur l'espace des états $E$ est définie par une famille d'applications :

$$(\Phi_t)_{t \geq 0}, \quad \Phi_t : E \to E$$

satisfaisant :

- $\Phi_0 = \text{Id}$ — ne rien faire pendant un temps nul ne change rien ;
- $\Phi_{t+t'} = \Phi_t \circ \Phi_{t'}$ — évoluer pendant un temps $t$ puis pendant un temps $t'$ revient à évoluer pendant un temps $t + t'$.

Cette propriété — appelée **propriété de flot** ou **propriété de semi-groupe** — exprime la cohérence temporelle minimale que l'on exige d'une évolution.

La famille complète $(\Phi_t)_{t \geq 0}$ constitue l'**action continue**. En temps continu, l'action n'est plus une application isolée, mais une **structure temporelle paramétrée**.

En temps discret, cette propriété est automatiquement satisfaite par l'itération : $\Phi_n = a^n$ (appliquer $n$ fois la même action). Le passage au continu consiste à construire un opérateur $\Phi_t$ défini pour tout $t \in \mathbb{R}^+$ qui satisfait cette propriété — et dont les itérations discrètes sont retrouvées en posant $t = n \cdot \Delta t$.

La correspondance avec le cadre discret est explicite. En temps discret, une action $a : E \to E$ transforme un état en un pas, et l'itération $a^n$ donne l'évolution sur $n$ pas. Le flot $(\Phi_t)_{t \geq 0}$ généralise cette itération à une durée arbitraire : c'est l'**analogue continu de l'action itérée**.

Mais le flot est un *résultat* — la trajectoire produite par une loi d'évolution. De même qu'en temps discret une force sélectionne une action à chaque pas, en temps continu une **loi d'évolution** détermine, à chaque instant, la direction et le rythme du changement. C'est cette loi qui peut varier — dans le temps, selon l'état, ou les deux.

La hiérarchie simple / évolutif / réflexif se transpose donc au temps continu.

> **Définition 20 — Système dynamique continu simple**
> 
> Un **système dynamique continu simple** est un quintuplet :
> 
> $S = (X, R_p, E, T, \Phi)$
> 
> où :
> 
> - $T$ est un temps continu (un intervalle de $\mathbb{R}^+$) ;
> - $\Phi = (\Phi_t)_{t \geq 0}$ est un **flot** sur $E$ — une famille d'applications $\Phi_t : E \to E$ satisfaisant la propriété de semi-groupe.
> 
> La même loi d'évolution s'applique en tout état et à tout instant.

> **Définition 21 — Système dynamique continu évolutif**
> 
> Un **système dynamique continu évolutif** remplace le flot par un **propagateur** :
> 
> $S = (X, R_p, E, T, (\Phi_{s,t})_{s \leq t})$
> 
> où $\Phi_{s,t} : E \to E$ est l'opérateur qui fait évoluer l'état du temps $s$ au temps $t$, satisfaisant :
> 
> - $\Phi_{s,s} = \text{Id}$
> - $\Phi_{s,t} = \Phi_{u,t} \circ \Phi_{s,u}$ pour tout $s \leq u \leq t$
> 
> La loi d'évolution change au cours du temps, mais ne dépend pas de l'état. La propriété de semi-groupe simple n'est plus satisfaite — elle est remplacée par cette condition de **composition** plus générale.

> **Définition 22 — Système dynamique continu réflexif**
> 
> Un **système dynamique continu réflexif** est un quintuplet :
> 
> $S = (X, R_p, E, T, \mathcal{D})$
> 
> où $\mathcal{D}$ est une **loi d'évolution locale** qui associe à chaque état $e \in E$ la direction et le rythme du changement en cet état.
> 
> La loi d'évolution dépend de l'état courant. C'est l'analogue continu du champ de forces $\mathcal{D}$ du cas discret : à chaque état, une dynamique propre.

Dans chacun de ces trois cas, la loi d'évolution peut être **déterministe** — elle prescrit une trajectoire unique à partir de chaque état initial — ou **stochastique** — elle prescrit un **ensemble de flots possibles**, un pour chaque issue $\omega \in \Omega$ du hasard, structuré par une mesure de probabilité. Dans le cas stochastique, le flot devient un **flot aléatoire** : à chaque réalisation du hasard correspond une évolution différente.

La nature concrète du flot — la forme que prend l'évolution — n'est pas fixée par ces définitions. Elle dépend de la **régularité** de la trajectoire.

#### Deux régularités de l'évolution

À ce stade, aucune hypothèse supplémentaire n'est faite sur la nature de l'évolution. La distinction entre deux ontologies du changement dépend de la **régularité** de la trajectoire $t \mapsto \Phi_t(e)$ pour un état initial $e \in E$.

---

##### Ontologie A — Le changement par événements

Dans cette vision, la trajectoire $t \mapsto \Phi_t(e)$ est **constante par morceaux** : l'état reste inchangé pendant certains intervalles de temps, puis subit des transitions ponctuelles à des instants particuliers.

Le temps est continu, mais le changement est discret. C'est l'ontologie de l'**événement** : quelque chose se produit à un instant précis — une réaction chimique, une décision, une panne — et entre deux événements, rien ne change.

Aucune structure continue sur $E$ n'est nécessaire. Les états peuvent rester purement relationnels et éventuellement finis.

Les instants de transition peuvent être déterministes, aléatoires, dépendants de l'état ou de l'histoire. Lorsque les transitions sont aléatoires et ne dépendent que de l'état courant, on les caractérise par des **taux de transition** $\lambda(e \to e')$ — le taux auquel le système, étant dans l'état $e$, bascule vers $e'$. On obtient alors une **chaîne de Markov en temps continu**, cas particulier important mais non exclusif.

---

##### Ontologie B — Le changement par déformation

Dans cette vision, la trajectoire $t \mapsto \Phi_t(e)$ est **continue** : l'état se déforme progressivement, sans sauts.

Pour que cette notion ait un sens, l'espace des états $E$ doit être muni d'une **structure de voisinage** (topologie) permettant de dire que deux états sont « proches ». Cette structure peut être induite par les relations valuées : si les relations prennent leurs valeurs dans des ensembles continus, deux états sont proches lorsque leurs relations diffèrent peu.

C'est ici que les **relations valuées** révèlent leur importance. Sans elles, les états sont des configurations discrètes entre lesquelles il n'y a pas de notion naturelle de proximité. Avec elles, l'espace des états acquiert une géométrie — et le passage progressif d'un état à un autre devient pensable.

Si l'espace $E$ possède en outre une structure différentiable, l'évolution peut être décrite de manière infinitésimale — par une loi locale de variation qui prescrit, en chaque état, la direction et la vitesse du changement. Mais cette écriture est une spécialisation analytique : la dérivée n'est pas le fondement de la dynamique continue, elle en est une représentation particulière lorsque la structure de $E$ le permet.

C'est dans cette ontologie que la loi d'évolution locale $\mathcal{D}$ du système réflexif (Définition 22) prend sa forme la plus naturelle : un **champ de vecteurs** — à chaque point de l'espace des états, une direction est prescrite, et les trajectoires sont les chemins que trace le système soumis à ce champ. C'est exactement ce que la physique classique appelle un *champ de forces*.

---

#### Cadre unifié

Les deux ontologies ne sont pas des définitions concurrentes du continu. Elles sont des cas particuliers d'une même structure générale — le flot $(\Phi_t)_{t \geq 0}$ — qui diffèrent par la **régularité temporelle** de l'évolution et par la **structure** éventuellement imposée à $E$.

Un même système peut combiner les deux formes : un fluide se déforme continûment ; un réseau social évolue par événements ponctuels ; un organisme vivant fait les deux — certains processus (métabolisme) sont continus, d'autres (mutations, décisions) sont ponctuels. Le formalisme du flot accueille les deux.

Le choix entre évolution événementielle et évolution par déformation n'est pas ontologique au sens absolu : il relève d'un **choix de modélisation** adapté au système étudié.

---

#### Ce que le continu ajoute

Le passage au continu n'est pas une simple commodité technique. Lorsque $E$ possède une structure topologique riche, il permet l'apparition de phénomènes qualitativement nouveaux :

- des **attracteurs** (états ou ensembles d'états vers lesquels le système converge) ;
- des **bifurcations** (changements qualitatifs de comportement lorsqu'un paramètre varie continûment) ;
- des **trajectoires chaotiques** (sensibilité extrême aux conditions initiales, même en régime déterministe).

Ces phénomènes n'ont pas d'équivalent exact en temps discret fini. Ils émergent de la structure continue de l'espace des états et du temps — et justifient, pour certains systèmes, l'abandon du cadre discret au profit du cadre continu.

---

### Synthèse

Les niveaux introduits se résument ainsi :

| Type               | Composantes                          | Ce qu'il décrit                   |
| ------------------ | ------------------------------------ | --------------------------------- |
| Statique passif    | $(X, R_p, E)$                        | Ce qui peut exister               |
| Statique actif     | $+ \mathcal{A}$                      | Ce qui peut changer               |
| Dynamique simple   | $+ T, f$                             | Évolution (force constante)       |
| Dynamique évolutif | $f \to (f_t)$                        | Les forces changent dans le temps |
| Dynamique réflexif | $+ \mathcal{D}: E \to \text{Forces}$ | Les forces dépendent de l'état    |
| Continu simple     | $(X, R_p, E, T, \Phi)$               | Évolution (flot constant)         |
| Continu évolutif   | $\Phi \to (\Phi_{s,t})$              | Le flot change dans le temps      |
| Continu réflexif   | $+ \mathcal{D}$ (loi locale)         | Le flot dépend de l'état          |

Chaque niveau enrichit le précédent sans l'annuler. La progression est strictement cumulative.

La hiérarchie simple / évolutif / réflexif est déclinée en temps **discret** (Définitions 17–19) et en temps **continu** (Définitions 20–22). En discret, la dynamique est portée par l'action $a : E \to E$ et les forces ; en continu, par le flot $(\Phi_t)_{t \geq 0}$ et la loi d'évolution. Le qualificatif **valué** est orthogonal à cette hiérarchie : tout système, à tout niveau, peut être logique ou valué.

Et c'est cette hiérarchie qui structurera la suite de la réflexion. Les systèmes physiques simples relèvent souvent du niveau dynamique simple ou réflexif. Les systèmes vivants sont réflexifs au sens faible ou fort. Les systèmes conscients sont réflexifs au sens complet.

---

## Clôture du chapitre 1

Ce chapitre a posé le vocabulaire formel de la description systémique.

Il a introduit trois espaces fondamentaux — $X$ (distinctions), $Y(X)$ (configurations), $Z(Y)$ (transformations) — qui traduisent en formalisme les trois principes du chapitre 0 et forment une chaîne de dépendance logique : $X \to Y(X) \to Z(Y(X))$.

Il a défini le **graphe** comme structure minimale, l'**état** comme couple d'éléments présents et de relations effectives, l'**action** comme transformation d'une configuration, la **force** comme sélection — possiblement aléatoire — d'une action, le **hasard** comme espace d'indétermination ($\Omega$) dont la nature — épistémique ou ontologique — reste ouverte, le **temps** comme ordre causal, et la **trajectoire** comme histoire. Il a proposé deux formalisations des relations — **logique** (binaire) et **valuée** (à valeurs dans un espace $W_i$) — la première étant un cas particulier de la seconde.

Il a proposé une **typologie** des systèmes — statique (passif ou actif), dynamique (simple, évolutif ou réflexif) — qui constitue une hiérarchie de niveaux d'organisation. Le concept de **dynamique** — un champ de forces associant à chaque état la force qui s'y exerce — émerge naturellement au niveau réflexif comme la structure qui lie l'état à sa propre évolution.

Il a posé le **flot** comme analogue continu de l'action itérée, décliné la hiérarchie simple / évolutif / réflexif en temps continu, et identifié deux ontologies du changement — la **déformation** (changement graduel) et l'**événement** (saut ponctuel) — unifiées par la propriété de semi-groupe.

Mais une question demeure ouverte. Le formalisme décrit *quels* états sont possibles, *quelles* actions existent, *comment* les trajectoires sont construites. Il ne dit pas encore *pourquoi* certaines transformations se produisent réellement. Qu'est-ce qui oriente les forces ? Qu'est-ce qui privilégie certaines trajectoires plutôt que d'autres ?

La réponse ne relève plus de la structure logique, mais d'une dimension supplémentaire : la répartition des quantités qui circulent entre les éléments — ce que le chapitre suivant introduira sous la forme d'une **vision énergétique**.

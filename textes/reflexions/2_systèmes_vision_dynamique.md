---
title: Chapitre 2 - Système - Vision énergétique
order: 4
date: 2026-02-18
last_modified_at: 2026-02-18
---

# Système — Vision énergétique

<p class="subtitle-centre"><em>Ce qui anime le réel</em></p>

---

Le chapitre précédent a posé le vocabulaire formel de la description systémique. Il a défini l'état comme un couple d'éléments présents et de relations effectives, l'action comme une transformation d'une configuration, la force comme une sélection d'action, le champ de forces $\mathcal{D}$ comme ce qui associe à chaque état la force qui s'y exerce. Il a proposé une hiérarchie — systèmes statiques, dynamiques simples, évolutifs, réflexifs — et décliné cette hiérarchie en temps discret et en temps continu.

Mais il a laissé une question ouverte, annoncée dans sa clôture : le formalisme décrit *ce qui peut changer* et *comment* cela peut changer. Il ne dit pas encore *pourquoi* certaines transformations se produisent effectivement. Qu'est-ce qui oriente le champ de forces $\mathcal{D}$ ? Qu'est-ce qui fait qu'un système évolue dans une direction plutôt que dans une autre ?

La réponse tient dans une idée. Les transformations ne sont pas arbitraires. Elles sont orientées par la distribution des quantités qui s'accumulent dans les éléments du système et qui circulent dans ses liens. Ces quantités — que nous appellerons **énergie** — ne constituent pas un ingrédient nouveau ajouté de l'extérieur. Elles sont la *valuation* du système : elles habitent la structure formelle du chapitre précédent et lui donnent sa direction.

Ce chapitre superpose à la vision structurelle du chapitre précédent une **vision énergétique**. Son premier travail est de définir précisément ce qu'est un système énergétique — non comme une nouvelle classe d'objet, mais comme une spécification particulière des systèmes valués introduits au chapitre 1. Son deuxième travail est de montrer comment cette spécification engendre une dynamique : pourquoi et comment les systèmes évoluent, vers quoi ils tendent, et ce qui peut résister à cette tendance.

---

## I — Le système énergétique

### La question de la valuation

Au chapitre précédent, nous avons introduit les **systèmes valués** (Définition 16) : des systèmes dont les relations possibles prennent leurs valeurs dans des espaces $W_i$ plus riches que $\{0, 1\}$. La valuation enrichit la description : au lieu de simplement noter qu'un lien existe ou non, on lui attribue une intensité, un poids, une capacité.

Cette valuation peut porter sur les liens — un poids attribué à chaque relation. Mais rien n'interdit qu'elle porte aussi sur les *éléments* eux-mêmes — une quantité attribuée à chaque nœud. Le chapitre précédent avait posé l'état comme un couple $(A, R)$ : un ensemble d'éléments présents et de relations effectives. Nous avions noté que les relations valuées permettaient à l'espace des états d'acquérir une géométrie. C'est cette idée que nous allons maintenant développer dans une direction particulière.

Un système énergétique est un système valué dans lequel la valuation porte simultanément sur les nœuds (une *quantité* accumulée dans chaque élément) et sur les liens (une *facilité de passage* entre chaque paire d'éléments), et dans lequel une loi précise relie ces deux valuations pour produire une dynamique.

---

### Stocks et conductivités : la double valuation

Soit un système au sens du chapitre 1, dont les éléments présents à un instant donné forment l'ensemble $A \subseteq X$, reliés par une famille de liens effectifs $L \subseteq A \times A$.

Enrichissons ce système de deux fonctions :

- Une **fonction de stock** : $E : A \to \mathbb{R}^+$, qui associe à chaque élément $x \in A$ une quantité non négative $E_x$ — le *stock* de l'élément $x$.

- Une **fonction de conductivité** : $K : L \to \mathbb{R}^+$, qui associe à chaque lien $(x, y) \in L$ une valeur non négative $K_{xy}$ — la *conductivité* du lien entre $x$ et $y$.

Le **stock** est de l'énergie *au repos* — accumulée dans un élément, disponible pour alimenter des flux. La **conductivité** est une propriété du *lien* — elle mesure la facilité avec laquelle quelque chose peut transiter d'un élément à l'autre.

Ces deux grandeurs enrichissent l'état. Un état énergétique n'est plus seulement un couple $(A, R)$, mais un quadruplet $(A, R, E, K)$ : les éléments présents, leurs relations, leurs stocks, et les conductivités des liens.

*Exemples.* Dans un réseau thermique, les stocks sont les quantités de chaleur accumulées dans chaque corps ; les conductivités sont les propriétés thermiques des interfaces entre corps. Dans un réseau électrique, les stocks sont les charges accumulées dans les condensateurs ; les conductivités sont les inverses des résistances. Dans un réseau métabolique, les stocks sont les concentrations de métabolites ; les conductivités sont les taux de réaction enzymatique. Dans chaque cas, la structure est la même — seule l'interprétation des grandeurs change.

---

### Le potentiel

Le **potentiel** d'un élément est la *pression* que son stock exerce vers l'extérieur. C'est la grandeur qui détermine dans quelle direction et avec quelle intensité l'énergie tend à circuler. Un réservoir plein presse vers ses voisins ; un réservoir vide aspire.

> **Définition 23 — Potentiel**
>
> Soit $\varphi : \mathbb{R}^+ \to \mathbb{R}$ une fonction **croissante**, appelée **fonction de potentiel**.
>
> Le **potentiel** de l'élément $x$ est :
>
> $$P_x = \varphi(E_x)$$
>
> La seule contrainte universelle sur $\varphi$ est sa croissance : un stock plus élevé correspond toujours à un potentiel plus élevé.

La forme exacte de $\varphi$ dépend du domaine d'instanciation. En thermodynamique, la température est le potentiel associé à l'énergie thermique (relation non linéaire). En électricité, la tension est le potentiel associé à la charge. En hydraulique, la pression est le potentiel associé au volume. Mais dans tous les cas, la structure est la même : plus le stock est haut, plus le potentiel est haut.

Un point est essentiel : **seules les différences de potentiel comptent.** Un élément à potentiel 100 entouré de voisins à potentiel 100 est exactement aussi inerte qu'un élément à potentiel 0 entouré de voisins à potentiel 0. Ce qui crée le mouvement, c'est l'écart. Pas le niveau.

---

### Définition formelle du système énergétique

Les ingrédients sont posés. Nous pouvons maintenant les assembler en une définition formelle.

> **Définition 24 — Système énergétique**
>
> Un **système énergétique** est un système valué (au sens de la Définition 16 du chapitre 1) dont la structure de valuation est spécifiée comme suit :
>
> - Les éléments présents $A$ sont munis d'une **fonction de stock** $E : A \to \mathbb{R}^+$ ;
> - Les liens effectifs $L$ sont munis d'une **fonction de conductivité** $K : L \to \mathbb{R}^+$ ;
> - Une **fonction de potentiel** $\varphi : \mathbb{R}^+ \to \mathbb{R}$ croissante dérive le potentiel $P_x = \varphi(E_x)$ de chaque élément ;
> - Une **loi de flux** détermine, à partir des potentiels et des conductivités, le flux effectif sur chaque lien.
>
> L'état énergétique du système à un instant donné est le quadruplet $e = (A, R, E, K)$.

Un système énergétique est donc un système valué muni d'une loi supplémentaire — la loi de flux — qui transforme la valuation statique en une dynamique. Cette loi fait du système énergétique un **système dynamique réflexif** au sens du chapitre 1 (Définitions 19 et 22) : la force exercée sur le système dépend de son état, puisque les flux dépendent des stocks et des conductivités qui constituent cet état.

Ce point mérite d'être souligné. Au chapitre précédent, le champ de forces $\mathcal{D}$ était posé de manière abstraite — il associait à chaque état une force, sans dire comment cette force était déterminée. Le système énergétique est la première réponse concrète à cette abstraction. La force y est **déterministe** : les gradients prescrivent entièrement l'évolution, sans hasard résiduel. Le champ $\mathcal{D}$ associe à chaque état $e = (A, R, E, K)$ la force qui sélectionne l'action du bilan — c'est-à-dire la transformation qui fait évoluer chaque stock selon la somme des flux nets. La structure — les stocks et les conductivités — commande entièrement la dynamique.

---

## II — La dynamique du système énergétique fermé

Nous commençons par le cas le plus simple : un système fermé, qui n'échange rien avec son environnement. Toute la dynamique provient de l'intérieur.

---

### Le gradient : moteur du flux

L'écart de potentiel entre deux éléments reliés s'appelle le **gradient**. C'est lui qui détermine si l'énergie circule et dans quelle direction.

> **Définition 25 — Gradient**
>
> Le **gradient** entre deux éléments $x$ et $y$ reliés par un lien est :
>
> $$\Delta P_{xy} = P_x - P_y = \varphi(E_x) - \varphi(E_y)$$
>
> Le gradient est orienté : positif si $x$ a un potentiel plus élevé que $y$ (l'énergie tend à aller de $x$ vers $y$), négatif dans le cas inverse, nul si les potentiels sont égaux.

L'universalité du gradient est remarquable. La chaleur va du chaud vers le froid — gradient de température. Le courant va du potentiel élevé vers le faible — gradient électrique. La matière diffuse de la zone concentrée vers la zone diluée — gradient de concentration. Le capital circule vers les opportunités de rendement — gradient économique. L'eau descend la pente — gradient de pression.

Dans tous les cas, la structure est la même : **le flux naît du gradient**. Cette récurrence n'est pas une coïncidence. Elle est la manifestation d'un principe unique, que chaque domaine habille de ses propres grandeurs. La loi de Fourier, la loi d'Ohm, la loi de Fick, les lois de l'hydraulique — toutes expriment la même idée sous des noms différents. C'est ce que le préambule appelait le « fond commun » à toutes les disciplines : une grammaire conceptuelle que les sciences instancient chacune à leur manière, sans l'avoir encore formulée comme telle.

---

### La loi fondamentale du flux

Un gradient crée une tendance à la circulation. Mais cette tendance est modulée par le lien lui-même — sa conductivité détermine l'intensité effective du flux.

> **Définition 26 — Loi de flux**
>
> Le **flux** de l'élément $x$ vers l'élément $y$, noté $F_{xy}$, est :
>
> $$F_{xy} = K_{xy} \times (P_x - P_y)$$
>
> Le flux est le produit de la conductivité du lien par le gradient entre ses deux extrémités.

Cette formule est à la fois très simple et très profonde. Elle dit que deux choses — et deux choses seulement — déterminent l'intensité d'un flux : l'écart de potentiel et la facilité de passage. Un fort gradient avec une faible conductivité peut produire le même flux qu'un faible gradient avec une forte conductivité. Si l'un des deux facteurs est nul, le flux est nul — qu'il n'y ait pas de différence de potentiel ou que le lien soit bloqué.

La conductivité n'est pas une quantité d'énergie. Ce n'est pas non plus un flux. C'est une propriété du *lien* — une caractéristique structurelle qui détermine ce que le lien laisse passer. Un mur de pierre entre deux pièces à températures différentes : faible conductivité, faible flux, malgré un fort gradient. Une porte ouverte entre les mêmes pièces : forte conductivité, flux intense.

---

### Le bilan : l'équation du mouvement

La loi de flux dit comment les flux sont déterminés. Le **principe de bilan** dit comment ces flux modifient les stocks. Ce principe n'est pas une loi physique — c'est une identité comptable, un fait de logique pure.

> **Définition 27 — Équation de bilan**
>
> Pour un élément $x$ relié aux éléments $y_1, y_2, \ldots, y_k$, la variation de son stock est la somme de tous les flux entrants moins tous les flux sortants. Chaque terme est positif si l'énergie entre (le voisin $y$ a un potentiel plus élevé que $x$) et négatif si elle sort.
>
> Cette identité s'écrit selon la nature du temps :
>
> **Temps discret** :
> $$E_x(t+1) - E_x(t) = \sum_y K_{xy} \times (P_y(t) - P_x(t))$$
>
> **Temps continu** :
> $$\frac{dE_x}{dt} = \sum_y K_{xy} \times (P_y - P_x)$$
>
> Les deux formulations expriment le même principe ; seul l'incrément temporel diffère — fini dans un cas, infinitésimal dans l'autre.

Si un réservoir reçoit plus qu'il ne perd, il se remplit. S'il perd plus qu'il ne reçoit, il se vide. Il n'y a aucune autre possibilité — que le temps soit discret ou continu.

Ce principe *est* la dynamique du système énergétique. Il constitue, dans la terminologie du chapitre 1, un **système dynamique réflexif** (Définitions 19 ou 22 selon que le temps est discret ou continu).

Ce que le chapitre 1 posait abstraitement — « la force dépend de l'état » — reçoit ici un contenu précis. Dans le système énergétique, la force est **déterministe** : il n'y a pas de hasard dans le choix de l'action, car les gradients la prescrivent entièrement. En temps discret, l'action sélectionnée dans l'état $e$ est la transformation qui avance chaque stock de la somme des flux nets :

$$a_e : E_x \;\mapsto\; E_x + \sum_y K_{xy}(P_y - P_x)$$

En temps continu, c'est le flot engendré par l'équation différentielle du bilan. Dans les deux cas, le champ de forces $\mathcal{D}$ associe à chaque état la force déterministe qui prescrit cette action. La structure — les stocks et les conductivités — commande entièrement la dynamique.

---

### Conservation

Dans un système fermé, la quantité totale d'énergie ne change pas. Elle se redistribue entre les éléments, mais elle ne se crée ni ne se détruit.

Ce n'est pas un axiome que nous imposons. C'est une *conséquence* de la symétrie de la loi de flux : ce qu'un lien retire d'un élément, il le donne à l'autre. Formellement, puisque $F_{xy} = -F_{yx}$, la somme des variations de stocks est nulle dans les deux régimes — $\sum_x (E_x(t+1) - E_x(t)) = 0$ en discret, $\sum_x \frac{dE_x}{dt} = 0$ en continu. La conservation émerge de la structure de l'équation de bilan — elle n'est pas postulée.

Un point mérite d'être noté : la conservation se *dérive* ici de la stabilité des règles. Si les contraintes du système ne changent pas dans le temps, et si les flux obéissent à une loi symétrique, la quantité totale est préservée. Si les règles changeaient — si la conductivité d'un lien variait de façon à créer une asymétrie nette — la conservation pourrait tomber. Ce point sera utile lorsque nous introduirons le système ouvert.

---

### L'équilibre

Un système fermé évolue vers l'**équilibre** : l'état où plus aucun stock ne varie.

À l'équilibre, tous les flux nets sont nuls. Pour chaque élément, les entrées compensent exactement les sorties. Cela se produit quand tous les gradients s'annulent — quand les potentiels sont égalisés. Plus aucune différence n'existe. Plus rien ne pousse l'énergie à bouger.

L'équilibre est la destination naturelle de tout système fermé. Sans apport extérieur, chaque gradient est progressivement consommé, chaque différence résorbée. Le système épuise sa capacité de changement.

Ce n'est pas une mort au sens courant : le système ne disparaît pas. Mais il s'*homogénéise*. Il perd ses différences, ses tensions, ses gradients — et avec eux, sa capacité à produire du nouveau. L'énergie est toujours là, en quantité inchangée. Mais elle est uniformément répartie, et ne peut plus rien faire.

L'équilibre est la limitation fondamentale du système fermé. C'est pour y échapper que la nature, la vie, la pensée, les sociétés sont des systèmes *ouverts*.

---

### Instanciations : une même loi sous des noms différents

Les principes que nous venons de poser — potentiel, gradient, conductivité, loi de flux, bilan, équilibre — ne sont pas des inventions abstraites. Ils sont la structure commune d'un ensemble de lois que les sciences disciplinaires ont découvertes indépendamment, chacune dans son domaine, sans toujours reconnaître qu'elles parlaient de la même chose.

Le préambule avait signalé cette récurrence : la loi de Fourier, la loi d'Ohm, la loi de Fick et les lois de l'hydraulique expriment toutes la même structure $F = K \times \Delta P$. Le formalisme du système énergétique est précisément ce que le préambule appelait le « principe nu, avant son habillage disciplinaire ».

Le tableau suivant traduit chaque grandeur abstraite dans quatre domaines physiques.

| Grandeur abstraite | Électricité | Hydraulique | Thermique | Diffusion |
|---|---|---|---|---|
| **Nœud** | jonction | réservoir | corps / masse | compartiment |
| **Stock $E_x$** | charge $Q$ \[C\] | volume $V$ \[m³\] | énergie thermique $U$ \[J\] | quantité de matière $n$ \[mol\] |
| **Potentiel $P_x$** | tension $U$ \[V\] | pression $p$ \[Pa\] | température $T$ \[K\] | concentration $c$ \[mol/L\] |
| **Fonction $\varphi$ : stock → potentiel** | $U = Q/C$ | $p = \rho g h$ | $T = U / m c_p$ | $c = n / V$ |
| **Conductivité $K_{xy}$** | conductance $G = 1/R$ \[S\] | conductance hydraulique $G_h$ | conductance thermique $\lambda S / e$ \[W/K\] | perméabilité $\times$ surface / épaisseur |
| **Gradient $\Delta P$** | différence de tension $\Delta U$ | différence de pression $\Delta p$ | différence de température $\Delta T$ | différence de concentration $\Delta c$ |
| **Flux $F_{xy}$** | courant $I$ \[A\] | débit $Q_v$ \[m³/s\] | flux thermique $\Phi$ \[W\] | flux de matière $J$ \[mol/s\] |
| **Loi de flux $F = K \Delta P$** | loi d'Ohm : $I = \Delta U / R$ | loi de Poiseuille : $Q_v = G_h \Delta p$ | loi de Fourier : $\Phi = (\lambda S/e) \Delta T$ | loi de Fick : $J = D (S/e) \Delta c$ |
| **Bilan $\delta E_x = \sum K \Delta P$** | loi des nœuds (Kirchhoff) | conservation du débit | 1er principe de la thermo | conservation de la matière |
| **Équilibre** | tension uniforme | pression uniforme | température uniforme | concentration uniforme |

Chaque colonne du tableau est une science. Chaque ligne est un concept. Le formalisme du système énergétique est ce qui permet de lire le tableau horizontalement — de voir la même loi à travers des habillages différents.

Cette universalité n'est pas une coïncidence. Elle révèle que ces domaines partagent une structure profonde : dans tous les cas, un flux naît d'un déséquilibre, est modulé par la conductivité du lien, tend à résorber ce déséquilibre, et s'arrête quand l'équilibre est atteint. Ce que chaque discipline a nommé à sa manière — tension, pression, température, concentration — n'est qu'une instanciation différente du potentiel.

*Remarque.* D'autres domaines admettent des traductions analogues. En économie, le capital circule vers les opportunités de rendement supérieur — le gradient est un différentiel de taux de retour, la conductivité est la fluidité du marché. En neuroscience, l'activation se propage des zones à fort potentiel d'excitation vers les zones à faible potentiel. Ces analogies sont moins rigoureuses que les cas physiques — les systèmes économiques et biologiques introduisent des non-linéarités et des boucles de rétroaction absentes des cas purement diffusifs — mais ils instancient la même grammaire. La différence entre physique et biologie n'est pas ici une différence de principe : c'est une différence de degré de réflexivité.

---

## III — Le système énergétique ouvert

La plupart des systèmes intéressants échangent avec leur environnement. Ils reçoivent de l'énergie de l'extérieur et en restituent.

---

### Sources et drains

Un système ouvert possède des **sources** — des apports d'énergie depuis l'extérieur — et des **drains** — des évacuations vers l'extérieur.

Dans la terminologie du chapitre 1, l'environnement peut être modélisé comme un ensemble d'éléments supplémentaires — des sources et drains — qui ne font pas partie du système étudié mais qui entretiennent des flux avec lui. Ces éléments extérieurs agissent comme des réservoirs à potentiel fixé : ils maintiennent certains gradients qui, sans eux, s'épuiseraient.

Ces échanges modifient l'équation de bilan :

**Temps discret** : $E_x(t+1) - E_x(t) = \displaystyle\sum_y K_{xy}(P_y(t) - P_x(t)) + S_x - R_x$

**Temps continu** : $\dfrac{dE_x}{dt} = \displaystyle\sum_y K_{xy}(P_y - P_x) + S_x - R_x$

où $S_x$ représente l'apport extérieur à l'élément $x$ et $R_x$ le retrait. La logique est identique à celle du système fermé, mais enrichie de termes d'échange. L'environnement est ce qui empêche le gradient de se consumer.

---

### L'état stationnaire : stabilité sans équilibre

Dans un système ouvert, une configuration remarquable devient possible : les stocks ne varient plus, et pourtant des flux persistent. L'énergie circule à travers le système sans s'y accumuler. Les gradients sont maintenus — non par les réserves internes, mais par l'apport continu de l'extérieur.

C'est l'**état stationnaire** : une stabilité sans équilibre.

> **Définition 28 — État stationnaire**
>
> Un système énergétique est en **état stationnaire** lorsque les stocks ne varient plus pour aucun élément :
>
> **Temps discret** : $E_x(t+1) = E_x(t) \quad \text{pour tout } x \in A$
>
> **Temps continu** : $\dfrac{dE_x}{dt} = 0 \quad \text{pour tout } x \in A$
>
> malgré la présence de flux non nuls : $\exists\, (x, y) \in L$ tel que $F_{xy} \neq 0$.
>
> L'apport extérieur $S_x$ compense exactement la dissipation par les flux sortants, maintenant les stocks constants.

La distinction entre équilibre et état stationnaire est fondamentale.

L'**équilibre** est l'absence de mouvement. Plus de gradient, plus de flux, plus de changement. C'est le repos — et la fin de toute dynamique.

L'**état stationnaire** est un mouvement qui se perpétue. Des gradients persistent, des flux circulent, des transformations s'opèrent — mais le tout forme un régime stable, qui se maintient tant que l'apport extérieur se poursuit. Sa stabilité n'est pas celle de la pierre posée au sol. C'est celle du cycliste en mouvement — qui ne tient que parce qu'il avance.

*Exemple.* Une rivière illustre cette situation : l'eau arrive de la source, traverse le lit, rejoint la mer. Les niveaux ne changent pas. Mais l'eau circule — les gradients sont maintenus par l'apport continu. La rivière est dans un état stationnaire, non à l'équilibre.

La quasi-totalité des systèmes qui présentent un intérêt — organismes, sociétés, écosystèmes, étoiles — ne sont pas à l'équilibre. Ils sont dans des états stationnaires, entretenus par des flux qui les traversent.

---

### Les trois niveaux de changement

Jusqu'ici, nous avons décrit la dynamique des stocks pour une structure et des conductivités fixées. Mais le système peut évoluer à trois niveaux distincts — trois échelles de temps emboîtées, qui correspondent exactement aux trois degrés de la hiérarchie du chapitre 1.

**Niveau 1 — Les stocks changent.** L'énergie se redistribue entre les éléments. Les flux remplissent certains réservoirs, en vident d'autres. Le graphe reste le même, les conductivités restent les mêmes. Seules les valuations nodales varient. C'est le changement le plus rapide.

Dans la terminologie du chapitre 1, c'est le niveau des **systèmes dynamiques simples** ou **réflexifs** (Définitions 17 et 19) : la structure est fixée, et l'état évolue selon le champ de forces déterminé par les stocks et les conductivités.

**Niveau 2 — Les conductivités changent.** Les liens deviennent plus ou moins conducteurs au fil du temps. Un lien qui transporte beaucoup de flux peut se renforcer. Un lien inutilisé peut s'affaiblir. C'est le mécanisme de la **plasticité** — observable dans les réseaux neuronaux, les lits de rivière, les routes commerciales, les habitudes cognitives.

On peut le formaliser simplement :

**Temps discret** : $K_{xy}(t+1) - K_{xy}(t) = \alpha \times |F_{xy}(t)| - \beta \times K_{xy}(t)$

**Temps continu** : $\dfrac{dK_{xy}}{dt} = \alpha \times |F_{xy}| - \beta \times K_{xy}$

Le paramètre $\alpha$ mesure le renforcement par l'usage, $\beta$ la dégradation par le non-usage. C'est une version abstraite de la règle de Hebb en neuroscience : *ce qui est utilisé se renforce, ce qui ne l'est pas s'atrophie.*

Dans la terminologie du chapitre 1, ce changement correspond au niveau **évolutif** (Définitions 18 et 21) : les paramètres du système varient — ici, les conductivités, qui font partie de la valuation des liens.

**Niveau 3 — La structure change.** Des éléments apparaissent ou disparaissent. Des liens se créent ou se rompent. Le graphe lui-même se transforme. C'est le changement le plus profond — et le plus lent.

Dans la terminologie du chapitre 1, c'est le niveau de la **réflexivité forte** (Définition 19, degrés de réflexivité) : le système modifie non seulement son comportement, mais ses propres capacités d'action — l'ensemble des actions admissibles $\mathcal{A}$ lui-même évolue.

Ces trois niveaux sont emboîtés. Le flux redistribue l'énergie (niveau 1), cette redistribution modifie progressivement les conductivités (niveau 2), et ces modifications finissent par transformer la structure elle-même (niveau 3). Chaque niveau crée les conditions du suivant.

---

### Les deux cartes d'un état énergétique

À chaque instant, le système possède deux descriptions superposées.

La **carte des potentiels** montre les stocks et les conductivités. Elle dit : voilà où l'énergie est accumulée, voilà par où elle pourrait circuler, voilà dans quelle direction les gradients la poussent. C'est la carte de ce qui est *possible* — l'état énergétique comme structure de potentialités.

La **carte des flux** montre ce qui circule effectivement. Elle dit : voilà l'énergie en mouvement. C'est la carte de ce qui est *réel* — l'état énergétique comme dynamique en acte.

Dans un système purement passif, les deux cartes coïncident : le flux est entièrement déterminé par les potentiels et les conductivités.

Dans un système actif — contenant des mécanismes internes, des sources locales d'énergie, des « pompes » — les deux cartes peuvent diverger. Il peut exister des circulations qui ne sont pas dictées par les gradients spontanés : de l'énergie qui tourne en boucle, qui maintient un déséquilibre, qui entretient une structure contre la tendance à l'équilibre. Ces circulations autonomes sont le propre des systèmes qui s'auto-organisent — le propre, en dernière instance, de ce qui est vivant.

---

## IV — Ce qui apparaît

Le cadre est posé. Les sections précédentes décrivent les mécanismes fondamentaux : comment l'énergie se distribue, circule, se conserve ou se dissipe. Cette section montre ce qui *apparaît* quand on laisse ces mécanismes opérer — les propriétés qui ne sont pas posées, mais qui émergent comme conséquences.

---

### L'entropie : le prix du possible

Lorsque l'énergie se redistribue dans un système, elle tend vers la répartition la plus uniforme compatible avec les contraintes. Non pas parce qu'une force mystérieuse l'y pousse, mais pour une raison purement combinatoire : il y a *davantage de façons* d'être réparti uniformément que d'être concentré.

Pour comprendre cela, il faut distinguer deux niveaux de description.

Le **macro-état** est la description du système au niveau que nous observons — la quantité d'énergie dans chaque élément. Le **micro-état** est la description complète au niveau le plus fin — quelle unité élémentaire d'énergie se trouve exactement où.

Plusieurs micro-états différents peuvent correspondre au même macro-état. Et le fait fondamental est celui-ci : les macro-états uniformes ont des classes de micro-états beaucoup plus grandes que les macro-états concentrés.

L'**entropie** d'un macro-état mesure la taille de cette classe :

$$S = k \times \ln |\Omega|$$

où $\Omega$ est l'ensemble des micro-états compatibles avec ce macro-état et $k$ une constante de proportionnalité.

Si les transformations microscopiques sont sans biais — si chaque transition élémentaire est équiprobable — alors le système passe naturellement plus de temps dans les macro-états à grande classe. Il converge vers l'uniformité, non par force, mais par statistique. C'est le deuxième principe de la thermodynamique — non pas comme loi fondamentale, mais comme conséquence du comptage. On retrouve ici la conception du hasard comme espace d'indétermination que le chapitre 1 avait ouverte dans sa discussion de $\Omega$ : l'entropie mesure la taille de cet espace.

L'entropie donne au temps sa direction : le futur est ce vers quoi les configurations deviennent plus uniformes, plus probables, moins structurées. Elle est, dans le cadre énergétique, l'expression de ce que le chapitre 1 appelait le paradoxe de l'infini temporel — une flèche dans le temps qui ne s'explique pas par la structure des lois locales, mais par l'asymétrie statistique des configurations.

---

### L'information : le degré de contrainte

L'**information** est le complément de l'entropie. Elle mesure à quel point un état est contraint — à quel point il s'écarte de l'uniformité maximale.

$$I = S_{\text{max}} - S_{\text{effectif}}$$

L'information ne réside pas dans les stocks eux-mêmes. Elle réside dans les *relations* — dans les gradients, dans les écarts, dans la structure des différences entre ce qui est et ce qui pourrait être. Le gradient entre deux éléments est une propriété relationnelle : il appartient au lien, non à l'un ou l'autre des nœuds pris séparément. C'est ce que le chapitre 1 exprimait dans la distinction entre relations possibles et relations effectives : l'information mesure combien de ces relations sont effectivement contraintes dans la configuration actuelle.

Information, entropie et distance à l'équilibre ne sont pas trois grandeurs indépendantes. Ce sont trois facettes d'une même réalité : le **degré de contrainte** d'un état.

- L'**information** le mesure du côté de la *description* : combien faut-il spécifier pour décrire cet état ?
- L'**entropie** le mesure du côté de la *multiplicité* : combien de micro-configurations sont compatibles ?
- La **distance à l'équilibre** le mesure du côté de la *dynamique* : quelle capacité reste-t-il pour orienter l'évolution du système ?

Plus un état est contraint, plus il est informatif, moins il est probable, plus il est loin de l'équilibre — et plus il est capable de produire du changement orienté.

---

### L'émergence : la compression locale

L'**émergence** est le phénomène par lequel des propriétés globales apparaissent qui ne sont pas réductibles aux éléments pris isolément.

Dans le cadre que nous avons construit, l'émergence se décrit avec précision : elle correspond à une **compression locale de l'information**. Une multitude de configurations individuelles — un apparent désordre — se structure soudain en un motif descriptible par peu de règles. Une régularité se stabilise. Une forme persiste.

Cette compression n'est pas gratuite. Toute émergence locale de structure se paie par une dissipation ailleurs. L'ordre qui apparaît ici exporte du désordre là-bas. C'est la version informationnelle du deuxième principe : la compression locale exige une décompression globale.

Les conditions minimales pour qu'une structure émerge sont identifiables :

1. **Système ouvert** — un flux d'énergie le traverse, le maintenant loin de l'équilibre.
2. **Couplage structure-flux** — le flux modifie les conductivités (niveau 2) ou la topologie (niveau 3), et la structure modifie à son tour le flux via la loi $F = K \times \Delta P$.
3. **Dissipation structurelle** — la structure se dégrade en l'absence d'apport, empêchant le renforcement infini.
4. **Non-linéarité** — la réponse du système est disproportionnée dans certains régimes.

Sous ces conditions, le système peut atteindre des configurations stables qui canalisent le flux de manière auto-cohérente. Le courant sculpte le canal qui le guide. Le flux maintient la forme qui l'organise. Ces structures — filles du déséquilibre, non de l'équilibre — disparaissent si le flux cesse.

*Exemples.* Un tourbillon dans un écoulement, le lit d'une rivière creusé par son propre courant, les cellules de convection dans un fluide chauffé : chacune de ces structures est créée et maintenue par le flux qui la traverse. Si le flux s'arrête, la structure s'efface.

---

### La complexité : la coexistence des contraintes

Un système est **complexe** quand il maintient simultanément plusieurs structures stables, partiellement compatibles et partiellement concurrentes.

La complexité n'est ni l'ordre (qui est simple : tout est régulier, tout se comprime en peu de règles) ni le désordre (qui est aussi simple : rien n'est structuré, rien ne se comprime). La complexité est *entre les deux* : la coexistence maintenue de contraintes multiples, dont aucune ne domine entièrement les autres.

Dans la terminologie du chapitre 1, un système complexe est un système dont l'espace des états $E$ contient plusieurs attracteurs partiels — des sous-ensembles vers lesquels certaines trajectoires convergent — sans qu'aucun attracteur unique ne domine globalement. La complexité se traduit formellement par la richesse et la diversité de la structure attractrice. Elle correspond à ce que le chapitre 1 nommait, dans le cadre continu, les phénomènes de **bifurcations** et d'**attracteurs** — manifestations topologiques de la complexité dans l'espace des configurations.

La complexité est rare, fragile et coûteuse. Elle nécessite un apport continu d'énergie pour être maintenue. Sans cet apport, les contraintes se relâchent — les structures se dissolvent — le système retombe vers l'uniformité. C'est dans cette fragilité même que résident les possibilités les plus riches : l'adaptation, la créativité, l'intelligence, la conscience.

---

### La réflexivité : quand le système modifie ses propres règles

La réflexivité est un concept que le chapitre 1 avait introduit formellement. Elle reçoit ici son contenu énergétique.

Un système est **réflexif** lorsque ses règles de transformation dépendent de son propre état énergétique.

**Réflexivité faible** : les flux dépendent des stocks. C'est le cas de tout système obéissant à la loi fondamentale $F = K \times \Delta P$ : le gradient détermine le flux, qui modifie les stocks, qui modifient les gradients. La boucle est immédiate. Tout système énergétique est *au minimum* faiblement réflexif — c'est inscrit dans sa définition même. Cela correspond exactement à la réflexivité faible du chapitre 1 : les forces dépendent de l'état, sans que l'ensemble des actions admissibles change.

**Réflexivité forte** : les conductivités et la topologie du graphe sont modifiées par la dynamique. La règle de plasticité $\frac{dK}{dt} = \alpha|F| - \beta K$ en est l'exemple canonique : les flux transforment les conductivités, qui transforment les flux futurs. Le système ne se contente pas de répondre à son état — il se reconfigure en fonction de son histoire. C'est l'apprentissage, l'adaptation, l'évolution.

**Réflexivité complète** : une partie du système encode un modèle du système lui-même. Un sous-réseau qui simule le réseau entier — qui évalue des futurs, qui compare des trajectoires, qui se pense pensant. C'est le seuil au-delà duquel la conscience devient concevable. La réflexivité complète du chapitre 1 — un système qui « contient une représentation de sa propre dynamique » — reçoit ici sa traduction énergétique : une partie du système maintient un état stationnaire qui est une image comprimée de l'état du tout.

Ces trois degrés correspondent exactement à ceux du chapitre 1. La nouveauté ici est que chaque degré reçoit une expression énergétique concrète : non plus des définitions abstraites de champs de forces, mais des mécanismes précis de rétroaction entre flux, stocks, conductivités et structure.

---

## V — Modes d'existence

Le cadre que nous avons construit permet de distinguer des modes d'existence fondamentaux — sans invoquer aucune primitive supplémentaire. Tout se déduit des principes déjà posés.

La **matière** est un cycle stable de flux. L'énergie y circule en boucle fermée — rien ne s'accumule durablement, rien ne se dissipe de façon nette. La structure persiste par inertie. Le coût de sa destruction est élevé : il faut un gradient intense et une longue durée pour en modifier la configuration. Ce coût — cette résistance d'une structure à sa propre modification — est ce que l'on peut appeler la *masse*. La matière est un système dont l'état stationnaire est très robuste aux perturbations.

Le **vivant** est un déséquilibre auto-entretenu. De l'énergie le traverse en permanence : il reçoit, transforme, rejette. Sa structure interne est maintenue loin de l'équilibre par ce flux traversant. Il est réflexif au sens fort : ce qu'il fait dépend de ce qu'il est (niveaux 1 et 2), et ce qu'il est dépend de ce qu'il a fait (plasticité, adaptation). Il résiste à l'entropie — localement, provisoirement — en important de l'ordre et en exportant du désordre. Le vivant est un système qui a intériorisé ses propres sources.

La **conscience** apparaît lorsqu'une partie du système se représente le système lui-même. Un sous-réseau qui modélise le réseau entier — qui simule des futurs possibles, qui évalue des actions, qui retourne sur soi le regard qu'il porte sur le monde. La conscience n'est pas une substance ajoutée. C'est une propriété structurelle — un degré de réflexivité — et elle a un coût : penser, c'est dissiper. Ce coût n'est pas une limite : c'est le signe que la conscience est un phénomène énergétique réel, ancré dans la physique du système qui la porte.

Ces modes d'existence ne sont pas des catégories disjointes. Ils sont des niveaux d'organisation, chacun reposant sur le précédent et l'incluant. Un être vivant est fait de matière. Un être conscient est fait de matière vivante. La progression est celle annoncée dans le préambule : la complexité émerge par niveaux d'organisation successifs, chacun reposant sur les propriétés du précédent.

---

## VI — Synthèse : les principes fondamentaux

Ce chapitre a introduit de nombreux concepts et plusieurs formules, dans leurs variantes discrète et continue. Avant de conclure, il est utile de les rassembler — non pour les résumer, mais pour montrer leur unité.

L'occasion est donnée d'introduire une notation qui rend cette unité visible.

> **Convention — Opérateur de variation $\delta$**
>
> On note $\delta f$ la **variation d'une grandeur $f$ par unité de temps**, au sens adapté à la structure temporelle du système :
>
> - **Temps discret** : $\delta f(t) = f(t+1) - f(t)$ — variation finie entre deux instants consécutifs
> - **Temps continu** : $\delta f = \dfrac{df}{dt}$ — taux de variation instantané
>
> Cette convention s'applique à toute grandeur : stocks $E_x$, conductivités $K_{xy}$, potentiels $P_x$.

Avec cette notation, l'ensemble des principes du chapitre se formule en quelques lignes :

---

**Potentiel** — Le potentiel d'un élément est dérivé de son stock par une fonction croissante $\varphi$ :

$$P_x = \varphi(E_x)$$

**Loi de flux** — Le flux entre deux éléments reliés est le produit de la conductivité du lien par le gradient de potentiel :

$$F_{xy} = K_{xy} \times (P_x - P_y)$$

**Bilan** — La variation du stock d'un élément est la somme algébrique des flux qui le traversent :

$$\delta E_x = \sum_y K_{xy} \times (P_y - P_x)$$

**Conservation** — Dans un système fermé, l'énergie totale est invariante :

$$\sum_x \delta E_x = 0$$

**Bilan ouvert** — En présence de sources et de drains, le bilan s'enrichit de termes d'échange :

$$\delta E_x = \sum_y K_{xy} \times (P_y - P_x) + S_x - R_x$$

**État stationnaire** — La stabilité sans équilibre : les stocks sont constants, les flux persistent :

$$\delta E_x = 0 \quad \text{pour tout } x, \quad \text{avec } \exists\, F_{xy} \neq 0$$

**Plasticité** — Les conductivités évoluent avec l'usage :

$$\delta K_{xy} = \alpha \times |F_{xy}| - \beta \times K_{xy}$$

---

Ces sept formules ne distinguent pas le temps discret du temps continu. Selon le régime, $\delta$ prend le sens d'une différence finie ou d'une dérivée — mais la forme des lois reste identique. Ce n'est pas un artifice de notation. C'est le signe que les principes énergétiques sont indépendants de la structure temporelle du système.

La nature du temps — finie ou infinitésimale — est un choix de modélisation, dicté par le système étudié et la précision requise. Les lois qui gouvernent la circulation de l'énergie, elles, ne varient pas. Elles sont les mêmes dans une horloge discrète et dans un flux continu, dans un réseau de neurones et dans un champ de température, dans un marché et dans un organisme.

C'est en cela que ces principes méritent le nom de *fondamentaux* : non pas parce qu'ils sont simples, mais parce qu'ils sont universels.

---

## Clôture du chapitre 2

Ce chapitre a répondu à la question que le précédent avait laissée ouverte : *qu'est-ce qui anime le système ?*

Il a d'abord défini le **système énergétique** comme une spécification particulière du système valué du chapitre 1 : un système muni d'une **fonction de stock** $E$ sur les éléments, d'une **fonction de conductivité** $K$ sur les liens, d'une **fonction de potentiel** $\varphi$ dérivant le potentiel du stock, et d'une **loi de flux** $F = K \times \Delta P$. Cette définition fait le pont entre le vocabulaire abstrait du chapitre 1 et la dynamique concrète du réel : le champ de forces $\mathcal{D}$ reçoit une expression précise, et le système dynamique réflexif continu reçoit un contenu.

La **loi de flux** — un flux naît d'un gradient et est modulé par une conductivité — est le principe nu de toute dynamique de transfert, avant son habillage disciplinaire. L'**équation de bilan** en est la conséquence directe : elle constitue la dynamique du système énergétique.

Le système **fermé** évolue vers l'équilibre — la mort douce par homogénéisation. Le système **ouvert** peut atteindre un **état stationnaire** — stabilité sans équilibre, traversée permanente par un flux. Les trois niveaux de changement — stocks (niveau 1), conductivités (niveau 2), structure (niveau 3) — correspondent respectivement aux niveaux simple/réflexif, évolutif et réflexif-fort du chapitre 1, maintenant dotés d'un contenu énergétique précis.

L'**entropie** est la tendance vers l'uniformité — conséquence du comptage, non d'une force mystérieuse. L'**information** est le degré de contrainte d'un état, logé dans les relations et les gradients. L'**émergence** est la compression locale de l'information, payée par une décompression globale. La **complexité** est la coexistence fragile de contraintes multiples, traduite formellement par la richesse de la structure attractrice. La **réflexivité** reçoit son contenu concret : flux dépendant des stocks, plasticité des conductivités, représentation interne du système par lui-même.

Et de ces principes seuls — sans rien ajouter — se dessinent les modes d'existence du réel : la **matière** comme cycle stable, le **vivant** comme déséquilibre auto-entretenu, la **conscience** comme réflexivité complète.

Les chapitres suivants exploreront ces modes d'existence un à un — en commençant par ce qui fait qu'un système peut être dit *vivant*.

---

## Références

- **Prigogine, Ilya** — *La Thermodynamique de la vie* (La Recherche, 1972). Court article de vulgarisation par le prix Nobel lui-même — l'introduction la plus accessible à la notion de structure dissipative et d'état stationnaire loin de l'équilibre. Le point de départ idéal avant d'aborder ses œuvres plus techniques.

- **Prigogine, Ilya & Stengers, Isabelle** — *La Nouvelle Alliance* (Gallimard, 1979). Explore en profondeur la relation entre irréversibilité, entropie et émergence de l'ordre à partir du désordre. En résonance directe avec les sections III et IV de ce chapitre.

- **Atkins, Peter** — *The Laws of Thermodynamics : A Very Short Introduction* (Oxford University Press, 2010). La meilleure introduction brève aux lois de la thermodynamique — entropie, énergie libre, équilibre — pour le lecteur non spécialiste. Très accessible.

- **Shannon, Claude E. & Weaver, Warren** — *The Mathematical Theory of Communication* (University of Illinois Press, 1949). Le texte fondateur de la théorie de l'information. La définition de l'entropie informationnelle y est posée dans sa forme originale — en résonance directe avec la section IV de ce chapitre.

- **Kauffman, Stuart** — *At Home in the Universe* (Oxford University Press, 1995). Une exploration ambitieuse de l'auto-organisation et de l'émergence dans les systèmes complexes — biologie, économie, évolution. Accessible et stimulant.

---
title: Chapitre 1 — Langages et Systèmes Formels
permalink: /textes/reflexions/logique/chapitre-1/
order: 3
date: 2026-02-27
last_modified_at: 2026-02-28
---

# Langages et Systèmes Formels

---

Avant de définir ce qu'est un langage formel, il vaut la peine de s'arrêter sur ce qu'il formalise. Un langage n'est pas construit arbitrairement : ses éléments correspondent à des opérations que l'esprit effectue naturellement lorsqu'il pense. Identifier ces opérations permet de comprendre pourquoi le langage formel est structuré comme il l'est — et non comme une convention technique parmi d'autres.

La démarche est la suivante : identifier les opérations fondamentales que l'esprit effectue lorsqu'il pense, puis montrer que chacune trouve une traduction exacte dans un élément du langage formel. Ce n'est pas une coïncidence : le langage formel est précisément construit pour capturer ces opérations, les rendre explicites et les soumettre à une analyse rigoureuse. Dix opérations fondamentales se dégagent ainsi, réparties en deux blocs selon qu'elles relèvent de la forme ou du sens.

Ces dix opérations se répartissent en deux blocs : les opérations **syntaxiques**, qui concernent la forme des expressions indépendamment de leur sens, et les opérations **sémantiques et constructives**, qui concernent le sens et la construction d'objets à partir des expressions.

Mais avant d'identifier ces opérations, il convient de définir ce qu'est un langage de façon suffisamment générale pour ne présumer d'aucune nature particulière.

---

## I — Langage formel

Un langage repose sur un **alphabet** : un ensemble de symboles distincts. La définition ne préjuge pas de leur nature — ils peuvent être des caractères écrits, des sons, des signaux électriques, des impulsions lumineuses, ou tout autre ensemble d'entités mutuellement distinguibles. Ce qui importe est qu'ils soient discernables les uns des autres et qu'on puisse les aligner.

Quelques exemples d'alphabets :

- Arithmétique : $\{\ 0, 1, 2, \ldots, 9,\ +,\ \times,\ =,\ (,\ )\ \}$
- Logique : $\{\ p, q, r,\ \neg,\ \land,\ \lor,\ \rightarrow,\ (,\ )\ \}$
- Binaire : $\{\ 0, 1\ \}$

À partir de cet alphabet, on forme des **mots** (ou **expressions**) : des suites finies de symboles alignés de façon linéaire. $0 + 1$, $p \land q$, $01101$ sont des mots. La finitude est essentielle : ni l'humain ni la machine ne peuvent écrire ou lire un texte infini — ce n'est pas une contrainte arbitraire, mais le reflet d'une limite fondamentale de tout système de communication réel.

Tous les mots ne sont pas nécessairement significatifs : $)+0($ est un mot de l'alphabet arithmétique, mais ne correspond à aucune expression valide. Les règles qui distinguent les mots bien formés des autres seront précisées dans l'opération Transformer.

**Raccourcis de notation.** Dans la pratique, on adopte souvent des écritures abrégées pour rendre les expressions plus lisibles. L'écriture $2 + 3$ est un raccourci pour la notation préfixe $+(2, 3)$, qui place le symbole de l'opération devant ses arguments. De même, $x < y$ est un raccourci pour $<(x, y)$. Ces raccourcis sont purement syntaxiques : ils ne changent pas le sens, seulement la forme d'écriture. Tout au long de ce livre, on utilisera librement ce type d'abréviation sans le signaler explicitement.

**Arité d'un symbole.** Chaque symbole susceptible de prendre des arguments possède une **arité** : le nombre fixe d'arguments qu'il requiert.

- Arité $0$ : le symbole désigne un objet sans argument — c'est une simple variable ou constante . Exemples : $0$, $\pi$, $\text{Socrate}$, $x$.
- Arité $1$ : le symbole prend un argument. Exemples : $\neg$ (négation), $s$ (successeur).
- Arité $2$ : le symbole prend deux arguments. Exemples : $+$, $\times$, $=$.
- Arité $n$ : le symbole prend $n$ arguments.

L'arité est une propriété du symbole elle-même, fixée une fois pour toutes dans l'alphabet. Elle détermine combien d'arguments doivent lui être fournis pour former une expression bien formée.

**Notation :** L'alphabet, noté $\mathcal{A}$, est l'ensemble des symboles possibles du langage. Un mot est une suite $s_1 s_2 \ldots s_n$ avec $s_i \in \mathcal{A}$. L'ensemble de tous les mots sur $\mathcal{A}$ est noté $\mathcal{A}^*$.

---

## II — Les opérations fondamentales de la pensée

Dix opérations fondamentales se dégagent, réparties en deux blocs : les opérations **syntaxiques**, qui concernent la forme des expressions indépendamment de leur sens, et les opérations **sémantiques et constructives**, qui concernent le sens et la construction d'objets à partir des expressions.

---

## Bloc I — Opérations syntaxiques

*Ce qu'on peut faire sans interpréter.*

---

### Désigner — le terme

L'esprit désigne : il isole une portion de réalité et y attache une référence. C'est l'opération la plus élémentaire de la pensée — celle sans laquelle aucune autre ne peut s'exercer. On ne peut pas relier deux choses, ni les distinguer, sans les avoir d'abord désignées.

La traduction formelle est le **terme**. Un terme est une expression qui désigne un objet dans un domaine donné — c'est la catégorie générique de tout ce qui réfère. Les termes peuvent être **atomiques**, formés d'un seul symbole désignant directement un objet, ou **complexes**, construits à partir d'autres termes par application d'un opérateur (défini dans le paragraphe "Opérer"). La nature précise des termes atomiques, selon qu'ils désignent de façon abstraite (variable) ou concrète (constante), sera précisée dans le second bloc. 

**Notation :** Les termes sont désignés par des lettres minuscules : $t, s, u, v$, ou indexées $t_1, t_2, \ldots, t_n$ pour une suite.

---

### Distinguer — l'égalité

Une fois des objets désignés, l'esprit peut se demander si deux désignations distinctes réfèrent au même objet ou à des objets différents. C'est l'opération de distinction : reconnaître le même et le différent.

La traduction formelle est le **symbole d'égalité** $=$. Écrire $t = s$ signifie que $t$ et $s$ désignent le même objet. Deux expressions syntaxiquement distinctes peuvent désigner le même objet : $2 + 2$ et $4$ sont deux termes différents qui désignent le même nombre. La distinction en est la négation : $t \neq s$ signifie que $t$ et $s$ désignent des objets différents.

L'égalité est plus fondamentale que la distinction : pour reconnaître que deux choses diffèrent, il faut d'abord avoir posé ce que signifie être identique. Cette idée remonte à Leibniz, qui formula le **principe d'identité des indiscernables** : deux objets sont identiques si et seulement s'ils partagent exactement les mêmes propriétés. L'égalité formalise ce principe — elle ne dit pas seulement que deux noms coïncident, mais que les objets qu'ils désignent sont un seul et même objet.

**Notation :** L'égalité est notée $t = s$, la distinction $t \neq s$.

---

### Opérer — le symbole de fonction

Une fois les objets identifiés et distingués, l'esprit peut les combiner pour en produire de nouveaux. C'est l'opération qui construit un **sujet complexe** à partir de sujets simples — de la même façon qu'un adjectif enrichit un nom pour former un groupe nominal plus précis.

La traduction formelle est le **symbole de fonction** (ou **opérateur**). Si $f$ est un symbole de fonction d'arité $n$ et $t_1, \ldots, t_n$ sont des termes, alors $f(t_1, \ldots, t_n)$ est un terme — il désigne l'objet obtenu en appliquant $f$ aux objets désignés par $t_1, \ldots, t_n$. Cette construction est récursive : $f(g(t))$ est également un terme.

Quelques exemples concrets :

- $2 + 3$ est un terme. C'est le raccourci de $+(2, 3)$ : l'opérateur addition, d'arité $2$, appliqué aux termes $2$ et $3$. Il désigne le nombre cinq.
- $\text{Mélanger}(\text{Jaune}, \text{Bleu})$ est un terme. Il désigne le résultat de l'opération de mélange appliquée aux deux couleurs — soit la couleur verte.
- $s(s(0))$ est un terme, où $s$ est l'opérateur successeur d'arité $1$ et $0$ une constante. Il désigne deux.

Un opérateur agit au niveau des **sujets** : il prend des objets et en produit un nouveau. Il ne dit rien sur ce que cet objet vérifie — cela sera l'affaire de la relation.

Il est fondamental de distinguer le symbole de fonction du symbole de relation : un opérateur appliqué à des termes produit un **terme** (un objet), tandis qu'un symbole de relation (voir paragraphe suivant) appliqué à des termes produit une **formule** (une assertion). Ce sont deux niveaux syntaxiques entièrement distincts.

La notion de fonction mathématique traduit elle-même cette idée d'opération : A partir part d'un nombre (ou de tout autre objet mathématique) de départ, elle lui associe une image, c'est à dire un autre objet mathématique, qui est le résultat d'une suite définie d'opérations. Cette notion sera définie rigoureusement dans la partie consacrée aux mathématiques.

**Notation :** Les symboles de fonction sont désignés par des lettres minuscules : $f, g, h$. Appliqués à des termes, on écrit $f(t)$ ou $f(t_1, \ldots, t_n)$ selon l'arité.

---

### Relier — la relation

Disposant de termes — atomiques ou construits — l'esprit peut établir des connexions entre eux pour former une **assertion**. Une relation est l'équivalent d'une phrase : elle contient toujours, explicitement ou implicitement, un verbe, et met en rapport un ou plusieurs sujets pour produire un énoncé susceptible d'être vrai ou faux.

La traduction formelle est le **symbole de relation**. Un symbole de relation $R$ d'arité $n$ s'applique à $n$ termes pour former une **formule atomique** $R(t_1, \ldots, t_n)$ — l'unité de sens minimale du langage, la plus petite expression susceptible d'être vraie ou fausse.

Quelques exemples :

- $2 + 3 = 5$ est une formule atomique. On la lit : « deux plus trois (est) égal (à) cinq ». Le symbole $=$ est ici une relation binaire d'arité $2$ ; le terme $2 + 3$ est son premier argument, le terme $5$ son second. Le verbe *est* n'est pas toujours lu dans cette phrase mais il est implicitement là.
- $\text{Mélanger}(\text{Jaune}, \text{Bleu}) = \text{Vert}$ est une formule atomique. On la lit : « en mélangeant jaune et bleu, on obtient du vert ». Le membre gauche est un terme complexe, le membre droit une constante ; le signe $=$ est le verbe qui les relie.
- $\text{Gt}(\text{Pierre}, \text{Paul})$ est une formule atomique pour « Pierre est plus grand que Paul ». Le verbe *est plus grand que* est la relation binaire $\text{Gt}$.

L'arité d'une relation est le nombre d'objets qu'elle met en rapport. Une relation unaire ($n = 1$) exprime une propriété d'un seul objet : $\text{Pair}(x)$ signifie « $x$ est pair ». Une relation binaire ($n = 2$) relie deux objets : $R(x, y)$ peut signifier « $x$ est inférieur à $y$ ».

**Notation :** Les symboles de relation sont désignés par des lettres majuscules : $R, P, Q$. La formule atomique correspondante est notée $R(t_1, \ldots, t_n)$.

---

### Assembler — la proposition composée

Les formules atomiques issues de l'opération Relier sont les phrases simples du langage. L'esprit peut les assembler pour former des **phrases complexes** — des propositions composées à partir de propositions plus simples.

Cette opération utilise les **connecteurs logiques** : $\neg$ (non), $\land$ (et), $\lor$ (ou), $\rightarrow$ (si... alors). Par exemple, la proposition « Pierre est grand et il fait beau » se formalise comme $\text{Gt}(\text{Pierre}) \land \text{Beau}()$, où $\land$ connecte deux formules atomiques en une formule composite. De même, « s'il pleut alors le sol est mouillé » donne $\text{Pleut}() \rightarrow \text{Mouillé}(\text{Sol})$.

Les connecteurs opèrent non pas au niveau des termes — comme les opérateurs — mais au niveau des formules. Ils construisent des formules complexes à partir de formules plus simples, permettant d'exprimer des raisonnements conditionnels, des conjonctions, des alternatives. Leur traitement formel, avec les tables de vérité et les propriétés algébriques qui en découlent, fera l'objet du chapitre 3.

Les **quantificateurs** constituent un second moyen de former des propositions complexes, dans une direction différente : non plus en combinant des formules entre elles, mais en faisant porter une assertion sur l'ensemble d'un domaine. Le quantificateur universel $\forall x.\, P(x)$ affirme que la propriété $P$ est vérifiée par tout objet $x$ du domaine : « tout entier a un successeur ». Le quantificateur existentiel $\exists x.\, P(x)$ affirme qu'au moins un objet la vérifie : « il existe un entier pair ». On retrouve ici un écho des opérations précédentes. La variable $x$ est dite **liée** par le quantificateur — elle n'est plus un emplacement libre mais une variable muette qui parcourt le domaine. Leur traitement formel, qui requiert la distinction entre variables libres et liées, fera l'objet du chapitre 5.

**Notation :** Les formules sont désignées par des lettres grecques : $\varphi, \psi, \chi$. Un ensemble de formules servant d'hypothèses est noté $\Gamma$.

---

### Transformer — les règles

Les propositions ne sont pas des objets statiques : l'esprit les transforme, passe de l'une à l'autre selon des règles. C'est précisément ce que le raisonnement fait — non pas seulement constater, mais dériver, inférer, construire.

Dans un langage formel, cette opération se décline en deux niveaux.

Les **règles de formation** définissent comment construire des expressions bien formées à partir des symboles de l'alphabet. Ce sont les règles grammaticales du langage formel : elles distinguent les suites de symboles qui constituent des termes ou des formules valides de celles qui n'ont aucun statut. Une expression qui ne les respecte pas n'est pas une formule — c'est une suite de symboles sans signification.

Les **règles de transformation** (ou **règles d'inférence**) définissent comment dériver de nouvelles formules à partir de formules données. Elles constituent le moteur du raisonnement formel. Une règle d'inférence se présente sous la forme :

$$\frac{\varphi_1 \qquad \varphi_2}{\psi}$$

où les formules du dessus ($\varphi_1$ et $\varphi_2$) sont les **prémisses**, et la formule du dessous ($\psi$) est la **conclusion**. La règle signifie : si $\varphi_1$ et $\varphi_2$ sont acquises, alors $\psi$ peut en être déduite. Une **preuve** est une séquence de formules dont chacune est soit un axiome, soit le résultat de l'application d'une règle d'inférence aux formules précédentes. Ce mécanisme sera formalisé au chapitre 4.

**Notation :** La dérivabilité syntaxique est notée $\vdash$ : $\Gamma \vdash \varphi$ signifie que $\varphi$ est dérivable à partir des hypothèses $\Gamma$.

Ces six opérations syntaxiques décrivent la forme du langage indépendamment de tout contenu. Il faut maintenant lui donner du sens.

---

## Bloc II — Opérations sémantiques et constructives

*Ce qu'on fait quand on donne du sens.*

---

### Abstraire — la variable et le terme epsilon

L'esprit abstrait : il désigne sans spécifier, il crée un objet générique porteur d'une propriété. C'est l'opération par laquelle la pensée se libère du particulier pour s'élever vers le général — et c'est elle qui peuple les termes atomiques de leur première forme.

La forme la plus simple est la **variable** (notée $x, y, z, \ldots$). Une variable désigne un objet quelconque du domaine, sans en préciser la nature. Elle est vide de tout contenu particulier — un pur emplacement de désignation. La variable est la forme d'abstraction pure : désigner sans contraindre.

La forme construite est le **terme epsilon** de Hilbert, noté $\varepsilon x.\, P(x)$. Il désigne un élément du domaine qui satisfait la proposition P, sans préciser lequel. Si P(x) signifie « x est un nombre pair », alors $\varepsilon x.\, P(x)$ désigne *un* nombre pair — lequel exactement reste indéterminé. Ce terme formalise l'abstraction construite : créer un objet générique défini uniquement par une propriété, dépouillé de tout contenu particulier. 

L'opérateur epsilon est la version constructive des quantificateurs : là où $\exists$ affirme l'existence et $\forall$ l'universalité, il en désigne un témoin explicite. C'est précisément cette construction qui le relie à l'axiome du choix (voir chapitre sur les ensembles), dont il constitue la version opératoire : Il permet de *choisir* un élément satisfaisant une propriété en le construisant explicitement. L'axiome du choix lui garantira qu'il est possible, dans le cadre de la théorie des ensemble, de réaliser simultanément une *infinité* de ces choix.

**Notation :** Les variables sont désignées par des lettres minuscules en fin d'alphabet : $x, y, z$. Le terme epsilon est noté $\varepsilon x.\, P(x)$, où $P$ est une formule contenant $x$.

---

### Concrétiser — la constante

À l'opposé de l'abstraction, l'esprit concrétise : il donne un nom à un objet précis, ancre une désignation dans un référent particulier. C'est la seconde façon de peupler les termes atomiques.

La traduction formelle est la **constante** (notée $a, b, c, \ldots$). Une constante désigne un objet fixé du domaine — elle lui donne un nom propre dans le langage. Là où la variable désigne n'importe lequel, la constante désigne celui-là. C'est la même différence qu'entre « un homme » et « Socrate », entre « une chaise » et « cette chaise » : le premier est une variable, le second une constante.

La distinction variable / constante reflète directement la distinction abstrait / concret posée en introduction, et complète ainsi la catégorie des termes atomiques introduite dans l'opération Désigner.

**Notation :** Les constantes sont désignées par des lettres minuscules en début d'alphabet : $a, b, c$, ou $c_0, c_1, \ldots$ lorsqu'on en considère plusieurs.

---

### Interpréter — modèle et valeur de vérité

Les termes désormais spécifiés — abstraits ou concrets — les propositions peuvent être évaluées. L'esprit interprète : il confronte une proposition à une réalité et tranche — vraie ou fausse.

Interpréter un langage formel requiert deux éléments. D'abord, un **domaine** $D$ : un ensemble d'objets qui constituent la réalité sur laquelle le langage porte. Ce domaine n'est pas le langage lui-même — il est extérieur à lui. Les constantes du langage nomment certains de ces objets, mais le domaine peut en contenir bien d'autres, sans nom. Ensuite, une **fonction d'interprétation** $I$ qui assigne à chaque symbole du langage un objet ou une opération concrète dans $D$ : chaque constante est associée à un objet précis du domaine, chaque symbole de fonction à une opération sur le domaine, chaque symbole de relation à un ensemble de tuples du domaine.

L'ensemble $\mathcal{M} = (D, I)$ constitué du domaine et de la fonction d'interprétation s'appelle un **modèle** (ou **structure**). Pour chaque symbole $s$ du langage, $s^\mathcal{M} := I(s)$ désigne l'objet du domaine $D$ que $s$ représente dans ce modèle. Un même langage peut ainsi avoir des modèles très différents. 

Par exemple, le langage de l'arithmétique — avec les constantes $0$ et $1$ et les opérateurs $+$ et $\times$ — peut être interprété dans les entiers naturels $\mathbb{N}$, mais aussi dans l'ensemble $\{0, 1, 2, 3, 4\}$ avec l'arithmétique modulo $5$ : les symboles sont les mêmes, les objets désignés sont différents. Dans le premier modèle, $+^\mathcal{M}$ désigne l'addition ordinaire : $2 + 3 = 5$ y est vraie. Dans le second, $+^\mathcal{M}$ désigne l'addition modulo $5$ : la même formule $2 + 3 = 5$ y devient fausse, car $2 + 3 \equiv 0$. Même langage, vérités différentes.

Une fois le modèle fixé, on peut évaluer la vérité d'une formule : $\mathcal{M} \models \varphi$ signifie que $\varphi$ est vraie dans le modèle $\mathcal{M}$. Cette opération est le fondement de la **sémantique** — l'étude du rapport entre les expressions formelles et ce qu'elles signifient. Son traitement rigoureux fera l'objet du chapitre 6.

**Notation :** Une structure d'interprétation est notée $\mathcal{M}$, de domaine $D$. La satisfaction de $\varphi$ dans $\mathcal{M}$ est notée $\mathcal{M} \models \varphi$.

---

### Sélectionner — la collection

L'interprétation permet une dernière opération : parmi les objets d'un domaine, retenir ceux qui partagent une propriété commune. L'esprit sélectionne — il construit non plus un objet, mais un **regroupement** d'objets.

Une collection peut être définie de deux façons. La première est l'**extension** : on liste explicitement ses éléments. On écrit $\{a, b, c\}$ pour la collection dont les éléments sont exactement $a$, $b$ et $c$. Le symbole $\in$ exprime l'appartenance : $a \in \{a, b, c\}$ signifie que $a$ est un élément de cette collection.

La seconde est la **compréhension** : on définit la collection par une propriété. $\{ x \mid P(x) \}$ désigne la collection de tous les objets $x$ pour lesquels $P(x)$ est vraie. C'est une notation méta-linguistique — un outil pratique que l'on utilisera tout au long de ce livre. Le lien avec l'introduction est immédiat : représenter, c'est sélectionner, et $\{ x \mid P(x) \}$ est la formalisation exacte de ce geste.

Une collection peut être **vide** : $\{\}$, notée $\emptyset$, ne contient aucun élément. Elle peut aussi être **infinie** — $\{ 0, 1, 2, 3, \ldots \}$ désigne la collection de tous les entiers naturels. Mais même pour désigner une collection infinie, la description elle-même doit tenir en un nombre fini de symboles : c'est la propriété $P$ qui doit être finie, pas la collection qu'elle définit.

Cette forme de sélection est pour l'instant naïve : rien ne garantit que toute collection ainsi définie soit bien formée. Le paradoxe de Russell montrera qu'une telle liberté mène à des contradictions — $\{ x \mid x \notin x \}$ ne peut désigner aucune collection cohérente. C'est pour résoudre ce problème que la théorie formelle des ensembles, présentée en partie VI, formalisera cette notion sous le terme d'**ensemble** au sein d'une axiomatique précise : la compréhension y sera restreinte à un domaine fixé, et l'existence d'un ensemble infini devra être postulée explicitement.

**Notation :** Les collections sont notées $\{ x \mid P(x) \}$ ou $\{ a, b, c, \ldots \}$. L'appartenance est notée $\in$ : $x \in A$ signifie que $x$ est un élément de $A$. Les collections et ensembles sont généralement désignés par des lettres majuscules : $A, B, C$.

---

## Le système formel

Ces dix opérations — six syntaxiques et quatre sémantiques et constructives — dessinent la structure complète d'un langage formel. On peut maintenant en donner une définition d'ensemble.

Un **langage formel** est déterminé par :

- un **alphabet** : l'ensemble des symboles (constantes, opérateurs, symboles de relation, symboles logiques, ponctuation), chacun muni de son arité ;
- des **règles de formation** : les critères qui définissent les expressions bien formées — termes et formules ;
- des **règles de transformation** : les opérations qui permettent de dériver de nouvelles formules à partir d'autres.

L'ensemble constitué d'un langage formel et d'un ensemble d'**axiomes** — formules données pour vraies sans démonstration — s'appelle un **système formel** ou **théorie formelle**. C'est le cadre dans lequel toute déduction prend place.

Le premier bloc constitue la dimension **syntaxique** du langage : la forme des expressions et les règles de leur manipulation, indépendamment de tout sens. Le second bloc constitue sa dimension **sémantique et constructive** : ce qui se passe lorsqu'on donne du contenu aux formes. Cette séparation entre syntaxe et sémantique est la décision fondatrice de la logique formelle — et la question de leur articulation traversera tout ce livre.

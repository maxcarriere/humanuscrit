---
title: Chapitre 1 — Langages et Systèmes Formels
permalink: /textes/reflexions/logique/chapitre-1/
order: 3
date: 2026-02-27
last_modified_at: 2026-03-04
---

# Langages et Systèmes Formels

---

## Introduction

Avant de définir ce qu'est un langage formel, il vaut la peine de s'arrêter sur ce qu'il formalise. Un langage n'est pas construit arbitrairement : ses éléments correspondent à des opérations que l'esprit effectue naturellement lorsqu'il pense. Identifier ces opérations permet de comprendre pourquoi le langage formel est structuré comme il l'est — et non comme une convention technique parmi d'autres.

Dix opérations fondamentales se dégagent ainsi, réparties en deux blocs selon qu'elles relèvent de la forme ou du sens : les opérations **syntaxiques**, qui concernent la forme des expressions indépendamment de leur contenu, et les opérations **sémantiques et constructives**, qui concernent le sens et la construction d'objets à partir des expressions.

Ce chapitre pose les fondations sur lesquelles repose l'ensemble de l'ouvrage. Il procède en trois temps : définir d'abord ce qu'est un langage formel dans sa généralité (section I) ; exposer ensuite les dix opérations fondamentales qui en constituent les éléments (section II) ; puis formaliser les règles qui définissent les expressions bien formées et situer ce langage dans le paysage plus large des grammaires formelles (section III). Une synthèse réunit enfin ces éléments dans la définition d'un système formel.

---

## I — Langage formel

Un langage repose sur un **alphabet** : un ensemble de symboles distincts. La définition ne préjuge pas de leur nature — ils peuvent être des caractères écrits, des sons, des signaux électriques, des impulsions lumineuses, ou tout autre ensemble d'entités mutuellement distinguibles. Ce qui importe est qu'ils soient discernables les uns des autres et qu'on puisse les aligner.

Quelques exemples d'alphabets :

- Arithmétique : $\lbrace 0, 1, 2, \ldots, 9,\ +,\ \times,\ =,\ (,\ ) \rbrace$
- Logique : $\lbrace p, q, r,\ \neg,\ \land,\ \lor,\ \rightarrow,\ (,\ ) \rbrace$
- Binaire : $\lbrace 0, 1 \rbrace$

À partir de cet alphabet, on forme des **mots** (ou **expressions**) : des suites finies de symboles alignés de façon linéaire. $0 + 1$, $p \land q$, $01101$ sont des mots. La finitude est essentielle : ni l'humain ni la machine ne peuvent écrire ou lire un texte infini — ce n'est pas une contrainte arbitraire, mais le reflet d'une limite fondamentale de tout système de communication réel.

Tous les mots ne sont pas nécessairement significatifs : $)+0($ est un mot de l'alphabet arithmétique, mais ne correspond à aucune expression valide. Les règles qui distinguent les mots bien formés des autres seront précisées dans l'opération Transformer.

**Mot vide.** Le mot vide ε est la suite de longueur zéro. Il ne contient aucun symbole mais constitue néanmoins un mot. Il joue le rôle d'élément neutre pour la concaténation : $wε=εw=w$.

**Raccourcis de notation.** Dans la pratique, on adopte souvent des écritures abrégées pour rendre les expressions plus lisibles. L'écriture $2 + 3$ est un raccourci pour la notation préfixe $+(2, 3)$, qui place le symbole de l'opération devant ses arguments. De même, $x < y$ est un raccourci pour $<(x, y)$. Ces raccourcis sont purement syntaxiques : ils ne changent pas le sens, seulement la forme d'écriture. Tout au long de ce livre, on utilisera librement ce type d'abréviation sans le signaler explicitement.

**Arité d'un symbole.** Chaque symbole susceptible de prendre des arguments possède une **arité** : le nombre fixe d'arguments qu'il requiert.

- Arité $0$ : le symbole désigne un objet sans argument — c'est une simple variable ou constante. Exemples : $0$, $\pi$, $\text{Socrate}$, $x$.
- Arité $1$ : le symbole prend un argument. Exemples : $\neg$ (négation), $s$ (successeur).
- Arité $2$ : le symbole prend deux arguments. Exemples : $+$, $\times$, $=$.
- Arité $n$ : le symbole prend $n$ arguments.

L'arité est une propriété du symbole lui-même, fixée une fois pour toutes dans l'alphabet. Elle détermine combien d'arguments doivent lui être fournis pour former une expression bien formée.

**Notation :**

- L'alphabet, noté $\mathcal{A}$, est l'ensemble des symboles possibles du langage.

- Un mot est une suite $s_1 s_2 \ldots s_n$ avec $s_i \in \mathcal{A}$.

- L'ensemble de tous les mots sur $\mathcal{A}$ est noté $\mathcal{A}^*$.

- On note ε le mot vide — On a $ε \in \mathcal{A}^*$.

Le langage formel ainsi posé dans sa généralité — alphabet, mots, règles — il reste à en identifier les constituants précis. Chacun correspond à une opération que l'esprit accomplit naturellement lorsqu'il pense.

---

## II — Éléments du langage logique

*(à partir des opérations de la pensée)*

Nous partons des opérations élémentaires que l'esprit accomplit lorsqu'il pense et montrons comment chacune trouve une traduction exacte dans le langage logique.

### A — Bloc I : Opérations syntaxiques

*Ce qu'on peut faire sans interpréter.*

#### Désigner — le terme

L'esprit désigne : il isole une portion de réalité et y attache une référence. C'est l'opération la plus élémentaire de la pensée — celle sans laquelle aucune autre ne peut s'exercer. On ne peut pas relier deux choses, ni les distinguer, sans les avoir d'abord désignées.

La traduction formelle est le **terme**. Un terme est une expression qui désigne un objet dans un domaine donné — c'est la catégorie générique de tout ce qui réfère. Les termes peuvent être **atomiques**, formés d'un seul symbole désignant directement un objet, ou **complexes**, construits à partir d'autres termes par application d'un opérateur (défini dans le paragraphe "Opérer"). La nature précise des termes atomiques, selon qu'ils désignent de façon abstraite (variable) ou concrète (constante), sera précisée dans le second bloc.

**Notation :** Les termes sont désignés par des lettres minuscules : $t, s, u, v$, ou indexées $t_1, t_2, \ldots, t_n$ pour une suite.

---

#### Distinguer — l'égalité

Une fois des objets désignés, l'esprit peut se demander si deux désignations distinctes réfèrent au même objet ou à des objets différents. C'est l'opération de distinction : reconnaître le même et le différent.

La traduction formelle est le **symbole d'égalité** $=$. Écrire $t = s$ signifie que $t$ et $s$ désignent le même objet. Deux expressions syntaxiquement distinctes peuvent désigner le même objet : $2 + 2$ et $4$ sont deux termes différents qui désignent le même nombre. La distinction en est la négation : $t \neq s$ signifie que $t$ et $s$ désignent des objets différents.

L'égalité est plus fondamentale que la distinction : pour reconnaître que deux choses diffèrent, il faut d'abord avoir posé ce que signifie être identique. Cette idée remonte à Leibniz, qui formula le **principe d'identité des indiscernables** : deux objets sont identiques si et seulement s'ils partagent exactement les mêmes propriétés. L'égalité formalise ce principe par le biais de deux axiomes : la réflexivité ($t = t$) et le **schéma de substitution** (si $t = s$, alors toute propriété vraie de $t$ est vraie de $s$). Ce sont ces axiomes, et non une simple convention de notation, qui donnent à l'égalité sa force.

**Remarque.** Du point de vue de la syntaxe, $=$ est un symbole de relation binaire — il produira des formules atomiques au même titre que $<$ ou $P$ (voir "Relier"). Il est présenté ici séparément parce qu'il joue un rôle privilégié : il est le seul symbole dont le comportement sémantique est fixé universellement, quelle que soit l'interprétation choisie. Cette spécificité sera rappelée lorsque l'on distinguera les langages *avec* et *sans* égalité au chapitre IV.

**Notation :** L'égalité est notée $t = s$, la distinction $t \neq s$.

---

#### Opérer — le symbole de fonction

Une fois les objets identifiés et distingués, l'esprit peut les combiner pour en produire de nouveaux. C'est l'opération qui construit un objet complexe à partir d'objets plus simples — de la même façon que composer deux fonctions produit une nouvelle fonction.

La traduction formelle est le **symbole de fonction** (ou **opérateur**). Si $f$ est un symbole de fonction d'arité $n$ et $t_1, \ldots, t_n$ sont des termes, alors $f(t_1, \ldots, t_n)$ est un terme — il désigne l'objet obtenu en appliquant $f$ aux objets désignés par $t_1, \ldots, t_n$. Cette construction est récursive : $f(g(t))$ est également un terme.

Quelques exemples concrets :

- $2 + 3$ est un terme. C'est le raccourci de $+(2, 3)$ : l'opérateur addition, d'arité $2$, appliqué aux termes $2$ et $3$. Il désigne le nombre cinq.
- $\text{Mélanger}(\text{Jaune}, \text{Bleu})$ est un terme. Il désigne le résultat de l'opération de mélange appliquée aux deux couleurs — soit la couleur verte.
- $s(s(0))$ est un terme, où $s$ est l'opérateur successeur d'arité $1$ et $0$ une constante. Il désigne deux.

Un opérateur agit au niveau des **sujets** : il prend des objets et en produit un nouveau. Il ne dit rien sur ce que cet objet vérifie — cela sera l'affaire de la relation.

Il est fondamental de distinguer le symbole de fonction du symbole de relation : un opérateur appliqué à des termes produit un **terme** (un objet), tandis qu'un symbole de relation (voir paragraphe suivant) appliqué à des termes produit une **formule** (une assertion). Ce sont deux niveaux syntaxiques entièrement distincts.

La notion de fonction mathématique traduit elle-même cette idée d'opération : à partir d'un nombre (ou de tout autre objet mathématique) de départ, elle lui associe une image, c'est-à-dire un autre objet mathématique, résultat d'une suite définie d'opérations. Cette notion sera définie rigoureusement dans la partie consacrée aux mathématiques.

**Notation :** Les symboles de fonction sont désignés par des lettres minuscules : $f, g, h$. Appliqués à des termes, on écrit $f(t)$ ou $f(t_1, \ldots, t_n)$ selon l'arité.

---

#### Relier — la relation

Disposant de termes — atomiques ou construits — l'esprit peut établir des connexions entre eux pour former une **assertion**. Une relation est l'équivalent d'une phrase : elle contient toujours, explicitement ou implicitement, un verbe, et met en rapport un ou plusieurs sujets pour produire un énoncé susceptible d'être vrai ou faux.

La traduction formelle est le **symbole de relation**. Un symbole de relation $R$ d'arité $n$ s'applique à $n$ termes pour former une **formule atomique** $R(t_1, \ldots, t_n)$ — l'unité de sens minimale du langage, la plus petite expression susceptible d'être vraie ou fausse.

Quelques exemples :

- $2 + 3 = 5$ est une formule atomique. On la lit : « deux plus trois (est) égal à cinq ». Le symbole $=$ est ici une relation binaire d'arité $2$ ; le terme $2 + 3$ est son premier argument, le terme $5$ son second. Le verbe *est* n'est pas toujours lu dans cette phrase mais il est implicitement là.
- $\text{Mélanger}(\text{Jaune}, \text{Bleu}) = \text{Vert}$ est une formule atomique. On la lit : « en mélangeant jaune et bleu, on obtient du vert ». Le membre gauche est un terme complexe, le membre droit une constante ; le signe $=$ est le verbe qui les relie.
- $\text{Gt}(\text{Pierre}, \text{Paul})$ est une formule atomique pour « Pierre est plus grand que Paul ». Le verbe *est plus grand que* est la relation binaire $\text{Gt}$.

L'arité d'une relation est le nombre d'objets qu'elle met en rapport. Une relation unaire ($n = 1$) exprime une propriété d'un seul objet : $\text{Pair}(x)$ signifie « $x$ est pair ». Une relation binaire ($n = 2$) relie deux objets : $R(x, y)$ peut signifier « $x$ est inférieur à $y$ ».

**Notation :** Les symboles de relation sont désignés par des lettres majuscules : $R, P, Q$. La formule atomique correspondante est notée $R(t_1, \ldots, t_n)$.

---

#### Assembler — la proposition composée

Les formules atomiques issues de l'opération Relier sont les phrases simples du langage. L'esprit peut les assembler pour former des **phrases complexes** — des propositions composées à partir de propositions plus simples.

Cette opération utilise les **connecteurs logiques** : $\neg$ (non), $\land$ (et), $\lor$ (ou), $\rightarrow$ (si... alors), $\leftrightarrow$ (si et seulement si). Par exemple, la proposition « Pierre est grand et il fait beau » se formalise comme $\text{Gt}(\text{Pierre}) \land \text{Beau}$, où $\land$ connecte deux formules en une formule composite. De même, « s'il pleut alors le sol est mouillé » donne $\text{Pleut} \rightarrow \text{Mouillé}(\text{Sol})$. On rencontre également les constantes propositionnelles $\bot$ (le faux absolu) et $\top$ (le vrai absolu), qui peuvent être ajoutées à l'alphabet comme formules atomiques sans argument.

Les connecteurs opèrent non pas au niveau des termes — comme les opérateurs — mais au niveau des formules. Ils construisent des formules complexes à partir de formules plus simples, permettant d'exprimer des raisonnements conditionnels, des conjonctions, des alternatives. Leur traitement formel complet — tables de vérité, propriétés algébriques, équivalences — fera l'objet du chapitre II.

Les **quantificateurs** constituent un second moyen de former des propositions complexes, dans une direction différente : non plus en combinant des formules entre elles, mais en faisant porter une assertion sur l'ensemble d'un domaine. Le quantificateur universel $\forall x.\, P(x)$ affirme que la propriété $P$ est vérifiée par tout objet $x$ du domaine : « tout entier a un successeur ». Le quantificateur existentiel $\exists x.\, P(x)$ affirme qu'au moins un objet la vérifie : « il existe un entier pair ». 

**Notation :** Les formules sont désignées par des lettres grecques : $\varphi, \psi, \chi$. Un ensemble de formules servant d'hypothèses est noté $\Gamma$.

---

#### Transformer — les règles

Les propositions ne sont pas des objets statiques : l'esprit les transforme, passe de l'une à l'autre selon des règles. C'est précisément ce que le raisonnement fait — non pas seulement constater, mais dériver, inférer, construire.

Dans un langage formel, cette opération se décline en deux niveaux.

Les **règles de formation** définissent comment construire des expressions bien formées à partir des symboles de l'alphabet. Ce sont les règles grammaticales du langage formel : elles distinguent les suites de symboles qui constituent des termes ou des formules valides de celles qui n'ont aucun statut. Une expression qui ne les respecte pas n'est pas une formule — c'est une suite de symboles sans signification.

Les **règles de transformation** (ou **règles d'inférence**) définissent comment dériver de nouvelles formules à partir de formules données. Elles constituent le moteur du raisonnement formel. Une règle d'inférence se présente sous la forme :

$$\frac{\varphi_1 \qquad \varphi_2}{\psi}$$

où les formules du dessus ($\varphi_1$ et $\varphi_2$) sont les **prémisses**, et la formule du dessous ($\psi$) est la **conclusion**. La règle signifie : si $\varphi_1$ et $\varphi_2$ sont acquises, alors $\psi$ peut en être déduite. Une **preuve** est une séquence de formules dont chacune est soit un axiome, soit le résultat de l'application d'une règle d'inférence aux formules précédentes. Ce mécanisme sera formalisé au chapitre III.

**Notation :** La dérivabilité syntaxique est notée $\vdash$ : $\Gamma \vdash \varphi$ signifie que $\varphi$ est dérivable à partir des hypothèses $\Gamma$.

Ces six opérations syntaxiques décrivent la forme du langage indépendamment de tout contenu. Il faut maintenant lui donner du sens.

---

### B — Bloc II : Opérations sémantiques et constructives

*Ce qu'on fait quand on donne du sens.*

---

#### Abstraire — la variable et le concept

L'esprit abstrait : il désigne sans spécifier, il crée un objet générique porteur d'une propriété. C'est l'opération par laquelle la pensée se libère du particulier pour s'élever vers le général — et c'est elle qui peuple les termes atomiques de leur première forme.

La forme la plus simple est la **variable** (notée $x, y, z, \ldots$). Une variable désigne un objet quelconque du domaine, sans en préciser la nature. Elle est vide de tout contenu particulier — un pur emplacement de désignation. La variable est la forme d'abstraction pure : désigner sans contraindre.

Mais l'abstraction ne se réduit pas à laisser un emplacement vide. L'esprit fait davantage : il construit des **concepts** — des objets génériques définis uniquement par les propriétés qu'ils vérifient, et applicables ensuite à différents objets concrets. Quand un enfant comprend ce qu'est « un nombre pair », il ne pense pas à $2$, ni à $4$, ni à $6$ en particulier : il forme un modèle mental — un objet abstrait — qui vérifie la propriété « être divisible par deux » et qui pourra s'appliquer à n'importe quel nombre concret. C'est exactement ce geste que le **terme epsilon** de Hilbert formalise.

Le terme epsilon, noté $\varepsilon x.\, P(x)$, désigne *un* objet du domaine qui satisfait la propriété $P$ — un objet fixé, mais dont l'identité précise n'est pas spécifiée par le langage. Si $P(x)$ signifie « $x$ est un nombre pair », alors $\varepsilon x.\, P(x)$ désigne un nombre pair déterminé par le modèle, mais que le langage ne nomme pas. Ce terme formalise la construction d'un concept : un objet générique dépouillé de tout contenu particulier, défini uniquement par une propriété.

Ce mécanisme entretient un lien profond avec les quantificateurs et avec l'axiome du choix — liens qui seront explicités au chapitre II pour le premier et au chapitre VIII pour le second.

**Notation :** Les variables sont désignées par des lettres minuscules en fin d'alphabet : $x, y, z$. Le terme epsilon est noté $\varepsilon x.\, P(x)$, où $P$ est une formule contenant $x$.

---

#### Concrétiser — la constante

À l'opposé de l'abstraction, l'esprit concrétise : il donne un nom à un objet précis, ancre une désignation dans un référent particulier. C'est la seconde façon de peupler les termes atomiques.

La traduction formelle est la **constante** (notée $a, b, c, \ldots$). Une constante désigne un objet fixé du domaine — elle lui donne un nom propre dans le langage. Là où la variable désigne n'importe lequel, la constante désigne celui-là. C'est la même différence qu'entre « un homme » et « Socrate », entre « une chaise » et « cette chaise » : le premier est une variable, le second une constante.

La distinction variable / constante reflète directement la distinction abstrait / concret posée en introduction, et complète ainsi la catégorie des termes atomiques introduite dans l'opération Désigner.

**Notation :** Les constantes sont désignées par des lettres minuscules en début d'alphabet : $a, b, c$, ou $c_0, c_1, \ldots$ lorsqu'on en considère plusieurs.

---

#### Interpréter — modèle et valeur de vérité

Les termes désormais spécifiés — abstraits ou concrets — les propositions peuvent être évaluées. L'esprit interprète : il confronte une proposition à une réalité et tranche — vraie ou fausse.

Interpréter un langage formel requiert deux éléments. D'abord, un **domaine** $D$ : un ensemble d'objets qui constituent la réalité sur laquelle le langage porte. Ce domaine n'est pas le langage lui-même — il est extérieur à lui. Les constantes du langage nomment certains de ces objets, mais le domaine peut en contenir bien d'autres, sans nom. Ensuite, une **fonction d'interprétation** $I$ qui assigne à chaque symbole du langage un objet ou une opération concrète dans $D$ : chaque constante est associée à un objet précis du domaine, chaque symbole de fonction à une opération sur le domaine, chaque symbole de relation à un ensemble de tuples du domaine.

L'ensemble $\mathcal{M} = (D, I)$ constitué du domaine et de la fonction d'interprétation s'appelle un **modèle** (ou **structure**). Pour chaque symbole $s$ du langage, $s^\mathcal{M} = I(s)$ désigne l'objet du domaine $D$ que $s$ représente dans ce modèle. Un même langage peut ainsi avoir des modèles très différents.

Par exemple, le langage de l'arithmétique — avec les constantes $0$ et $1$ et les opérateurs $+$ et $\times$ — peut être interprété dans les entiers naturels $\mathbb{N}$, mais aussi dans l'ensemble $\lbrace 0, 1, 2, 3, 4\rbrace$ avec l'arithmétique modulo $5$ : les symboles sont les mêmes, les objets désignés sont différents. Dans le premier modèle, $+^\mathcal{M}$ désigne l'addition ordinaire : $2 + 3 = 5$ y est vraie. Dans le second, $+^\mathcal{M}$ désigne l'addition modulo $5$ : la même formule $2 + 3 = 5$ y devient fausse, car $2 + 3 \equiv 0$. Même langage, vérités différentes.

Une fois le modèle fixé, on peut évaluer la vérité d'une formule. On écrit $\mathcal{M} \models \varphi$ — « $\varphi$ est vraie dans $\mathcal{M}$ ». La formalisation complète de cette notion — formules closes, valuations, définition de la satisfaction — sera développée au chapitre IV.

**Notation :** Une structure d'interprétation est notée $\mathcal{M}$, de domaine $D$. La satisfaction de $\varphi$ dans $\mathcal{M}$ est notée $\mathcal{M} \models \varphi$.

---

#### Sélectionner — la collection

L'interprétation permet une dernière opération : parmi les objets d'un domaine, retenir ceux qui partagent une propriété commune. L'esprit sélectionne — il construit non plus un objet, mais un **regroupement** d'objets.

Une collection peut être définie de deux façons. La première est l'**extension** : on liste explicitement ses éléments. On écrit $\lbrace a, b, c\rbrace$ pour la collection dont les éléments sont exactement $a$, $b$ et $c$. Le symbole $\in$ exprime l'appartenance : $a \in \lbrace a, b, c\rbrace$ signifie que $a$ est un élément de cette collection.

La seconde est la **compréhension** : on définit la collection par une propriété. $\lbrace x \mid P(x) \rbrace$ désigne la collection de tous les objets $x$ pour lesquels $P(x)$ est vraie. Cette notation est **méta-linguistique** : elle n'appartient pas au langage formel lui-même, mais le décrit de l'extérieur. Le langage formel parle d'objets et de formules ; la notation de compréhension est un outil pratique du *discours sur* le langage, utilisé pour définir des ensembles d'expressions ou d'objets sans faire partie de la syntaxe formelle elle-même. Elle sera intégrée à la théorie formelle des ensembles au chapitre VIII. Le lien avec l'introduction est immédiat : représenter, c'est sélectionner, et $\lbrace x \mid P(x) \rbrace$ est la formalisation exacte de ce geste.

Une collection peut être **vide** : $\lbrace\rbrace$, notée $\emptyset$, ne contient aucun élément. Elle peut aussi être **infinie** — $\lbrace 0, 1, 2, 3, \ldots \rbrace$ désigne la collection de tous les entiers naturels. Mais même pour désigner une collection infinie, la description elle-même doit tenir en un nombre fini de symboles : c'est la propriété $P$ qui doit être finie, pas la collection qu'elle définit.

Cette forme de sélection est pour l'instant naïve : rien ne garantit que toute collection ainsi définie soit bien formée. Le paradoxe de Russell montrera qu'une telle liberté mène à des contradictions — $\lbrace x \mid x \notin x \rbrace$ ne peut désigner aucune collection cohérente. C'est pour résoudre ce problème que la théorie formelle des ensembles, présentée au chapitre VIII, formalisera cette notion sous le terme d'**ensemble** au sein d'une axiomatique précise : la compréhension y sera restreinte à un domaine fixé, et l'existence d'un ensemble infini devra être postulée explicitement.

**Notation :** Les collections sont notées $\lbrace x \mid P(x) \rbrace$ ou $\lbrace a, b, c, \ldots \rbrace$. L'appartenance est notée $\in$ : $x \in A$ signifie que $x$ est un élément de $A$. Les collections et ensembles sont généralement désignés par des lettres majuscules : $A, B, C$.

---

### C — Synthèse : du langage au système formel

Ces dix opérations — six syntaxiques et quatre sémantiques et constructives — dessinent l'architecture complète du langage logique. Il est désormais possible d'en donner une définition synthétique.

Un **langage formel** est déterminé par :

- un **alphabet** : l'ensemble des symboles (constantes, symboles de fonction, symboles de relation, connecteurs logiques, quantificateurs, ponctuation), chacun muni de son arité ;

- des **règles de formation** : les règles inductives qui définissent les expressions bien formées — termes et formules ;

- des **règles de transformation** : les règles d'inférence qui permettent de dériver de nouvelles formules à partir de formules données.

Un **système formel** (ou **théorie formelle**) est obtenu lorsque l'on ajoute à ce langage un ensemble d'**axiomes** — formules admises comme point de départ des déductions. Il constitue le cadre autonome à l'intérieur duquel le raisonnement peut être mené de manière purement syntaxique.

La dimension **syntaxique** du langage comprend l'alphabet, les règles de formation et les règles d'inférence : elle décrit la structure des expressions et les opérations formelles qui peuvent être effectuées sur elles, indépendamment de toute interprétation.
La dimension **sémantique** intervient lorsque ces expressions sont mises en relation avec un domaine d'objets et qu'une valeur de vérité leur est assignée.

La séparation entre syntaxe et sémantique — fil conducteur de ce chapitre — est la décision fondatrice de la logique formelle. Toute la suite de l'ouvrage explorera les conséquences et les limites de cette séparation.

---

## III — Grammaire

Le langage formel a été défini par ses éléments et ses opérations. Mais comment, précisément, construire les expressions bien formées ? Les règles de formation énoncées informellement au fil des opérations doivent maintenant être rassemblées en une présentation unifiée. C'est l'objet de la grammaire — entendue d'abord comme la grammaire propre au langage logique, puis resituée dans le paysage plus large des grammaires formelles.

---

### A — Grammaire du langage logique

#### Deux espèces syntaxiques distinctes

Les expressions d'un langage formel se répartissent en deux espèces fondamentalement différentes, qui ne sont pas interchangeables.

Les **termes** désignent des objets. Ce sont les expressions qui réfèrent à quelque chose dans un domaine — un individu, un nombre, un résultat d'opération. $2 + 3$, $\text{Socrate}$, $f(x)$ sont des termes.

Les **formules** (ou **propositions**) expriment des assertions. Ce sont les expressions susceptibles d'être vraies ou fausses. $2 + 3 = 5$, $\text{Pair}(x)$, $\forall x.\, P(x)$ sont des formules.

La frontière est nette : on ne peut pas substituer une formule là où un terme est attendu, ni l'inverse. Un terme ne dit rien — il désigne. Une formule affirme quelque chose — elle peut être évaluée. Cette distinction traverse tout le langage formel et sera maintenue rigoureusement dans tous les chapitres qui suivent.

---

#### Critères de formation

La grammaire définit **inductivement** comment construire les expressions bien formées. Inductive signifie ici : on part des cas de base (les symboles atomiques), et on donne des règles de construction pour les cas complexes. Tout ce qui n'est pas construit par ces règles n'est ni un terme ni une formule.

**Formation des termes :**

- Toute variable est un terme.
- Toute constante est un terme.
- Si $t_1, \ldots, t_n$ sont des termes et $f$ est un symbole de fonction d'arité $n$, alors $f(t_1, \ldots, t_n)$ est un terme.
- *Rien d'autre n'est un terme.*

**Formation des formules :**

- Si $t_1, \ldots, t_n$ sont des termes et $R$ est un symbole de relation d'arité $n$, alors $R(t_1, \ldots, t_n)$ est une formule — dite **atomique**.
- Si $\varphi$ est une formule, alors $\neg \varphi$ est une formule.
- Si $\varphi$ et $\psi$ sont des formules, alors $(\varphi \land \psi)$, $(\varphi \lor \psi)$, $(\varphi \rightarrow \psi)$, $(\varphi \leftrightarrow \psi)$ sont des formules.
- Si $\varphi$ est une formule et $x$ une variable, alors $\forall x.\, \varphi$ et $\exists x.\, \varphi$ sont des formules.
- *Rien d'autre n'est une formule.*

La clause de clôture — *rien d'autre* — est essentielle : elle garantit que les deux catégories sont bien délimitées et qu'aucune expression parasite ne peut s'y glisser.

---

#### Structure récursive et arbre de syntaxe

Ces règles sont **récursives** : elles définissent les expressions complexes à partir d'expressions plus simples. Une conséquence immédiate est que toute expression bien formée possède une **structure arborescente** — un arbre de syntaxe dont les feuilles sont les symboles atomiques (variables, constantes) et dont les nœuds internes sont les opérateurs, symboles de relation et connecteurs.

Considérons la formule $\forall x.\, (P(x) \rightarrow Q(f(x)))$. Elle a été construite en plusieurs étapes : d'abord les termes atomiques ($x$, puis $f(x)$), puis les formules atomiques ($P(x)$, $Q(f(x))$), puis l'implication $P(x) \rightarrow Q(f(x))$, et enfin la quantification $\forall x$. La racine de l'arbre est toujours le *dernier opérateur appliqué* — celui qui enveloppe toute l'expression. Ici, $\forall x.$ a été appliqué en dernier : il gouverne la formule entière, ce qui en fait la racine.

- Racine : $\forall x.$ *(dernier opérateur appliqué, gouverne tout)*
- Sous-arbre unique : $P(x) \rightarrow Q(f(x))$
  - Branche gauche : $P(x)$ — formule atomique, feuille
  - Branche droite : $Q(f(x))$ — formule atomique
    - Argument : $f(x)$ — terme complexe
      - Argument : $x$ — variable, feuille

Cette représentation arborescente n'est pas une simple commodité de notation. Elle révèle que le langage formel n'est pas linéaire dans sa structure profonde : la séquence de symboles que l'on écrit de gauche à droite est la *projection linéaire* d'un objet hiérarchique. C'est précisément cette hiérarchie que les règles inductives capturent, et qui distingue le langage logique d'une simple suite de caractères.

---

#### Substitution — principe et notation

La structure arborescente ne sert pas qu'à décrire les expressions bien formées — elle est le support des opérations que l'on peut définir sur elles. La plus fondamentale de ces opérations est la **substitution**.

Étant donné une formule $\varphi$, une variable $x$ et un terme $t$, on note $\varphi[t/x]$ la formule obtenue en remplaçant toutes les occurrences **libres** de $x$ dans $\varphi$ par $t$. Une occurrence est libre si elle n'est pas liée par un quantificateur — toute autre occurrence reste inchangée.

**Exemple.** Soit la formule $P(x) \land \forall x.\, Q(x)$. La substitution $\varphi[a/x]$ donne $P(a) \land \forall x.\, Q(x)$ : seule la première occurrence de $x$, qui est libre, est remplacée par $a$. La seconde, liée par $\forall x$, reste intacte.

La substitution est le mécanisme syntaxique de l'**instanciation** : à partir d'une propriété générale, on obtient un cas particulier en remplaçant la variable par un terme désignant un objet précis. Elle sera au cœur des règles d'inférence du premier ordre (chapitre III), et sa définition complète — récursive, avec les précautions nécessaires pour éviter les conflits de variables — sera développée au chapitre II.

**Notation :** La substitution de $t$ à la place de $x$ dans $\varphi$ est notée $\varphi[t/x]$.

---

### B — Grammaire formelle et hiérarchie de Chomsky

La grammaire propre au langage logique étant fixée, on peut se demander quelle place elle occupe dans le paysage plus large des grammaires formelles — et ce que cette position révèle de la complexité inhérente au langage logique.

#### Grammaire formelle

Les règles de formation que nous avons énoncées définissent une **grammaire formelle** : un système de règles permettant de produire toutes les expressions bien formées du langage, et seulement elles.

Pour décrire une telle grammaire, il faut d'abord distinguer deux sortes de symboles.

Les **symboles terminaux** sont les symboles que l'on retrouve dans l'expression finale — ceux que l'on écrit et que l'on lit. Ce sont les « vrais » symboles du langage : variables ($x$, $y$), constantes ($0$, $a$), connecteurs ($\neg$, $\land$), parenthèses, etc. L'expression $\neg(p \land q)$ est entièrement composée de symboles terminaux.

Les **symboles non-terminaux** ne figurent jamais dans l'expression finale. Ce sont des étiquettes de catégories syntaxiques — des instructions de construction qui disent : « ici, il faut placer un terme » ou « ici, il faut placer une formule ». Ils organisent la construction, puis disparaissent. On les écrit en italique pour les distinguer : *Terme*, *Formule*.

Une **règle de production** est une instruction de remplacement : elle dit comment remplacer un non-terminal par une combinaison de symboles (terminaux ou non-terminaux). On l'écrit sous la forme $\alpha \Rightarrow \beta$, qui se lit : « $\alpha$ peut être réécrit en $\beta$ ». La flèche $\Rightarrow$ est celle des règles de production — elle est distincte de la flèche logique $\rightarrow$ de l'implication.

**Exemple.** Considérons les trois règles suivantes :

1. *Formule* $\Rightarrow$ *Formule* $\land$ *Formule*
2. *Formule* $\Rightarrow$ $\neg$ *Formule*
3. *Formule* $\Rightarrow$ $p$ $\mid$ $q$ $\mid$ $r$

Ici, *Formule* est un non-terminal ; $\neg$, $\land$, $p$, $q$, $r$ sont des terminaux. Construisons l'expression $\neg(p \land q)$ pas à pas :

- On part du non-terminal *Formule* (la catégorie de départ).
- On applique la règle 2 : *Formule* $\Rightarrow$ $\neg$ *Formule*.
- On applique la règle 1 au *Formule* restant : $\neg$ (*Formule* $\land$ *Formule*).
- On applique la règle 3 deux fois, une avec $p$ et une avec $q$ : $\neg$ ($p$ $\land$ $q$).

Tous les non-terminaux ont disparu : il ne reste que des terminaux. L'expression est construite.

Une **grammaire formelle** est alors définie par un quadruplet $G=(V,\Sigma,P,S)$ :

- $\Sigma$ : l'ensemble des **symboles terminaux**,

- $V$ : l'ensemble des **symboles non-terminaux**,

- $P$ : un ensemble de **règles de production** $\alpha \Rightarrow \beta$, avec au moins un non-terminal dans $\alpha$,

- $S \in V$ : le **symbole initial** (la catégorie de départ).

Le **langage engendré** par la grammaire est l'ensemble des mots composés uniquement de symboles terminaux que l'on peut obtenir à partir de $S$ par applications successives des règles.

---

#### Hiérarchie de Chomsky

Toutes les grammaires ne sont pas équivalentes. Selon la forme des règles de production que l'on autorise, on obtient des classes de langages plus ou moins complexes. Noam Chomsky a montré que ces classes se disposent en une hiérarchie à quatre niveaux — du plus contraint au plus libre.

---

**Langages réguliers (Type 3)** — Ils décrivent des motifs purement linéaires. Ils ne permettent aucune imbrication.

Forme des règles : $A \Rightarrow a$ ou $A \Rightarrow aB$, où $A, B$ sont des non-terminaux et $a$ un terminal. Un seul non-terminal à gauche, et au plus un à droite. La conséquence est que la construction ne peut avancer que dans une seule direction, symbole après symbole, sans jamais revenir en arrière ni ouvrir de structure imbriquée.

**Exemple.** Le langage des numéros — suites de chiffres de longueur quelconque : `0`, `7`, `0042`, `1023`.

Règles de production concrètes (le non-terminal de départ est *Numéro*) :

- *Numéro* $\Rightarrow$ *Chiffre* *Numéro* — un numéro est un chiffre suivi d'un numéro.
- *Numéro* $\Rightarrow$ *Chiffre* — cas de base : un numéro est un seul chiffre.
- *Chiffre* $\Rightarrow$ $\text{0}$ $\mid$ $\text{1}$ $\mid$ $\cdots$ $\mid$ $\text{9}$

Deux règles suffisent à engendrer tout numéro. Construisons `42` :

- *Numéro* $\Rightarrow$ *Chiffre* *Numéro* $\Rightarrow$ $\text{4}$ *Numéro* $\Rightarrow$ $\text{4}$ *Chiffre* $\Rightarrow$ $\text{4}$ $\text{2}$.

On observe le mécanisme : chaque étape produit un terminal (un chiffre) puis passe éventuellement au non-terminal suivant. La construction avance toujours de gauche à droite. Pour reconnaître un tel mot, il suffit de parcourir les symboles un par un en conservant un nombre fini d'états — aucune mémoire non bornée n'est nécessaire.

---

**Langages hors-contexte (Type 2)** — Ils permettent l'imbrication récursive. Leur structure est arborescente.

Forme des règles : $A \Rightarrow \alpha$, où $A$ est un non-terminal et $\alpha$ une suite quelconque de symboles. Un seul non-terminal à gauche, mais aucune restriction à droite — le membre droit peut contenir plusieurs non-terminaux, ce qui permet l'imbrication.

**Exemple.** Le langage des parenthèses bien formées : `(())`, `()()`, `(()(()))`.

Règles de production concrètes (le non-terminal de départ est *P*) :

- *P* $\Rightarrow$ $($ *P* $)$ — imbrication : on engendre une expression *à l'intérieur* d'une paire de parenthèses.
- *P* $\Rightarrow$ *P* *P* — concaténation : on met deux expressions bien parenthésées bout à bout.
- *P* $\Rightarrow$ ε — suppression : Le symbole non terminal $P$ est remplacé par le symbole terminal 

Construisons `(())(())` pas à pas :

- *P* $\Rightarrow$ *P* *P* — on concatène deux sous-expressions.
- Chaque *P* est développé par imbrication : *P* $\Rightarrow$ $($ *P* $)$.
- On obtient : $($ *P* $)$ $($ *P* $)$.
- Chaque *P* intérieur est à nouveau développé : $($ $($ *P* $)$ $)$ $($ $($ *P* $)$ $)$.
- Les deux *P* restants deviennent ε : $($ $($ $)$ $)$ $($ $($ $)$ $)$.

La différence avec le type 3 est visible : la règle *P* $\Rightarrow$ $($ *P* $)$ place un non-terminal **entre** deux terminaux, ce qui crée une structure emboîtée. Une grammaire régulière ne le permet pas — elle ne peut placer un non-terminal qu'à l'extrémité droite.

---

**Langages contextuels (Type 1)** — Ils permettent certaines dépendances globales — par exemple imposer qu'un élément se réécrive différemment selon ce qui l'entoure.

Forme des règles : $\alpha A \beta \Rightarrow \alpha \gamma \beta$, où $A$ est un non-terminal et $\gamma$ est non vide (mais $\alpha$ ou $\beta$ peuvent l'être). La réécriture de $A$ dépend du **contexte** $\alpha$ et $\beta$ qui l'entourent : on ne remplace plus simplement une catégorie isolée, on exige qu'elle apparaisse dans une configuration donnée. Lorsque $\alpha$ et $\beta$ sont tous deux vides, on retombe dans le cas du Type 2 — ce qui montre que les langages hors-contexte sont inclus dans les langages contextuels.

Le gain de richesse est maintenant clair. Dans une grammaire hors-contexte, une règle comme *Adj* $\Rightarrow$ $\text{grand}$ s'applique partout où apparaît le non-terminal *Adj*, quel que soit son voisinage. Dans une grammaire contextuelle, on peut écrire :

$$\text{Masc}\ \textit{Adj} \Rightarrow \text{Masc}\ \text{grand}$$
$$\text{Fém}\ \textit{Adj} \Rightarrow \text{Fém}\ \text{grande}$$

Le même non-terminal *Adj* se réécrit différemment selon qu'il est précédé de $\text{Masc}$ ou de $\text{Fém}$. C'est exactement ce qui se passe dans les langues naturelles : l'adjectif « grand » prend une forme qui dépend du genre du nom qu'il accompagne.

**Exemple.** Un fragment simplifié du français avec accord en genre : « le grand chat », « la grande chatte ».

Règles de production concrètes (le non-terminal de départ est *Phrase*) :

- *Phrase* $\Rightarrow$ *Dét* *Adj* *Nom* — une phrase est un déterminant, un adjectif, un nom.
- *Dét* $\Rightarrow$ $\text{le}$ $\text{Masc}$ $\mid$ $\text{la}$ $\text{Fém}$ — le déterminant fixe le genre.
- $\text{Masc}$ *Adj* $\Rightarrow$ $\text{grand}$ $\text{Masc}$ — l'adjectif prend la forme masculine quand le contexte est masculin.
- $\text{Fém}$ *Adj* $\Rightarrow$ $\text{grande}$ $\text{Fém}$ — l'adjectif prend la forme féminine quand le contexte est féminin.
- $\text{Masc}$ *Nom* $\Rightarrow$ $\text{chat}$ — le nom masculin.
- $\text{Fém}$ *Nom* $\Rightarrow$ $\text{chatte}$ — le nom féminin.

Construisons « la grande chatte » :

- *Phrase* $\Rightarrow$ *Dét* *Adj* *Nom* $\Rightarrow$ $\text{la}$ $\text{Fém}$ *Adj* *Nom* $\Rightarrow$ $\text{la}$ $\text{grande}$ $\text{Fém}$ *Nom* $\Rightarrow$ $\text{la}$ $\text{grande}$ $\text{chatte}$.

La règle contextuelle est celle qui produit $\text{grande}$ plutôt que $\text{grand}$ : c'est la présence de $\text{Fém}$ à gauche de *Adj* qui détermine la forme. Une grammaire hors-contexte ne peut pas exprimer cette dépendance avec un seul non-terminal *Adj* — elle devrait créer des catégories séparées (*AdjMasc*, *AdjFém*), ce qui revient à contourner le problème en multipliant les non-terminaux.

**Remarque.** Les règles présentées ici illustrent le *principe* de la dépendance au contexte — le fait que la réécriture d'un symbole puisse dépendre de son voisinage — mais prennent quelques libertés avec la forme stricte $\alpha A \beta \Rightarrow \alpha \gamma \beta$, qui exige que le contexte soit préservé de part et d'autre sans inversion (dans l'exemple donné, $\alpha A \Rightarrow \gamma \alpha$ : le marqueur de genre passe de gauche à droite). Les grammaires contextuelles rigoureuses utilisent des techniques plus élaborées — multiplication d'étapes intermédiaires, marqueurs auxiliaires — pour respecter cette contrainte. L'essentiel, pour notre propos, est le saut conceptuel : la forme d'un symbole peut dépendre de ce qui l'entoure, ce qui est impossible en Type 2. Ce mécanisme est omniprésent dans les langues naturelles (accord en genre, en nombre, en cas) et intervient dans les langages formels dès que des parties éloignées d'une expression doivent être synchronisées.

---

**Langages récursivement énumérables (Type 0)** — Ils correspondent à tout ce qui peut être reconnu par un algorithme général.

Forme des règles : toute règle $\alpha \Rightarrow \beta$ est permise, pourvu que $\alpha$ contienne au moins un non-terminal. Il n'y a plus aucune restriction de forme.

**Exemple.** Le langage des nombres premiers écrits en base 10. Pour déterminer si un mot appartient au langage, il faut interpréter le mot comme un nombre, exécuter un algorithme de primalité, effectuer des divisions, des comparaisons, des boucles. Ce n'est plus une question de structure syntaxique : c'est un **processus de calcul général**. Le lien entre cette classe et les machines de calcul sera développé au chapitre V.

---

Ces quatre classes sont strictement emboîtées :

$$\text{Régulier} \subsetneq \text{Hors-contexte} \subsetneq \text{Contextuel} \subsetneq \text{Récursivement énumérable}$$

Chaque niveau enrichit le précédent en levant une restriction sur la forme des règles de production. Plus les règles sont libres, plus les langages engendrés sont complexes — et plus les machines nécessaires pour les reconnaître sont puissantes. Ce lien entre complexité des grammaires et puissance des machines de calcul sera exploré au chapitre V.

---

#### Position du langage logique

Les règles inductives définissant les termes et les formules sont de la forme :

$$\textit{Formule} \Rightarrow \neg\,\textit{Formule}$$

$$\textit{Formule} \Rightarrow (\textit{Formule} \land \textit{Formule})$$

$$\textit{Terme} \Rightarrow f(\textit{Terme}, \ldots, \textit{Terme})$$

Il s'agit donc d'une grammaire **hors-contexte** (type 2).

Cela signifie que :

- le langage logique permet l'imbrication illimitée des parenthèses,

- il possède une structure arborescente,

- mais sa formation ne requiert pas de dépendances globales complexes.

Autrement dit, la complexité du langage logique est celle d'une hiérarchie bien contrôlée — ni triviale, ni illimitée.

**Remarque importante.** Cette classification porte sur la *génération* des formules bien formées : reconnaître si une suite de symboles est une formule bien formée est un problème hors-contexte, soluble efficacement. La question distincte de savoir si une formule est un *théorème* — c'est-à-dire si elle est dérivable dans un système formel — relève d'une complexité tout autre : la logique du premier ordre est semi-décidable mais non décidable. Ces questions feront l'objet des chapitres V et VI.

---

## Conclusion

Ce chapitre a posé les fondations conceptuelles et formelles du langage logique. Partant d'une définition générale — alphabet, mots, règles — il a identifié les dix opérations de la pensée auxquelles correspondent les éléments du langage : six syntaxiques (Désigner, Distinguer, Opérer, Relier, Assembler, Transformer) et quatre sémantiques et constructives (Abstraire, Concrétiser, Interpréter, Sélectionner). La grammaire a ensuite formalisé les règles de construction des expressions bien formées et situé le langage logique parmi les langages hors-contexte de la hiérarchie de Chomsky — une complexité de génération bien contrôlée, distincte de la complexité du raisonnement. Ces éléments réunis définissent le système formel : le cadre dans lequel la déduction devient rigoureuse.

La séparation entre syntaxe et sémantique — affirmée dès l'introduction, illustrée tout au long des opérations — traversera l'ensemble de l'ouvrage. Le chapitre II en explore les premiers concepts : les connecteurs, les tables de vérité, les lois du calcul propositionnel, puis la logique des prédicats dans toute sa portée.

---

## Références

- **Bourbaki, N.** *Éléments de Mathématique — Théorie des Ensembles*, Hermann, 1954. Les « critères formatifs » qui définissent les termes et les relations dans un système logique y sont présentés avec une rigueur et une généralité remarquables. La terminologie utilisée dans ce chapitre s'en inspire partiellement.

- **Chomsky, N.** « Three Models for the Description of Language », *IRE Transactions on Information Theory*, 1956. Article fondateur qui introduit la hiérarchie des grammaires formelles.

- **Hilbert, D. & Bernays, P.** *Grundlagen der Mathematik*, Springer, 1934–1939. Première présentation systématique du calcul epsilon et de ses liens avec les quantificateurs et l'axiome du choix.

- **Tarski, A.** « The Concept of Truth in Formalized Languages », in *Logic, Semantics, Metamathematics*, Oxford University Press, 1956. Définition formelle de la satisfaction d'une formule dans une structure — fondement de la section Interpréter.

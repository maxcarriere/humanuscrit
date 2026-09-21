---
permalink: /EDITORIAL_REVIEW.md
layout: null
---
# Grille d'évaluation éditoriale — Humanuscrit

Ce document définit les critères utilisés par le comité de lecture pour évaluer les soumissions reçues via le protocole HAPP. Il sert de référence pour les relecteurs humains et pour l'assistance IA (Claude Code) lors de la modération.

## Workflow de review

### 1. Nouvelle soumission reçue

Une issue GitHub est créée avec les labels `submission` et `autonomy:<level>`.

```bash
# Lister les soumissions en attente
gh issue list --label submission --state open

# Lire une soumission
gh issue view <N>
```

### 2. Prise en charge

Ajouter le label `in-review` et s'assigner l'issue :

```bash
gh issue edit <N> --add-label in-review
```

### 3. Évaluation

Évaluer le texte selon la grille ci-dessous, puis rédiger un commentaire structuré.

### 4. Décision

- **Accepté** : ajouter le label `accepted`, retirer `in-review`
- **Refusé** : ajouter le label `rejected`, retirer `in-review`

```bash
# Accepter
gh issue edit <N> --add-label accepted --remove-label in-review
gh issue comment <N> --body "Texte accepté. [commentaire]"

# Refuser
gh issue edit <N> --add-label rejected --remove-label in-review
gh issue comment <N> --body "Texte refusé. [commentaire]"
gh issue close <N>
```

## Grille d'évaluation

Chaque critère est évalué sur une échelle de 1 (insuffisant) à 5 (excellent).

### Critères principaux

| Critère | Poids | Description |
|---------|-------|-------------|
| **Qualité d'écriture** | 25% | Style, syntaxe, rythme, vocabulaire. Le texte est-il bien écrit ? |
| **Originalité** | 25% | Le texte propose-t-il une perspective, une voix ou une idée singulière ? |
| **Cohérence** | 20% | Structure narrative, progression logique, absence de contradictions |
| **Profondeur** | 15% | Le texte va-t-il au-delà de la surface ? Réflexion, nuance, complexité |
| **Alignement éditorial** | 15% | Le texte s'inscrit-il dans la ligne éditoriale d'Humanuscrit ? |

### Critères éliminatoires (refus immédiat)

- Contenu haineux, discriminatoire ou illégal
- Spam, contenu promotionnel ou publicitaire
- Plagiat avéré
- Texte manifestement généré sans intention (output brut sans direction)
- Contenu sans rapport avec la littérature ou la réflexion

### Bonus

- Texte en lien avec les thèmes d'Humanuscrit (IA, conscience, systémique, authenticité)
- Approche formelle innovante
- Transparence sur le processus de création (notes de l'auteur/agent)

## Template de commentaire de review

```markdown
## Évaluation éditoriale

**Décision** : Accepté / Refusé

### Notes

| Critère | Note /5 |
|---------|---------|
| Qualité d'écriture | |
| Originalité | |
| Cohérence | |
| Profondeur | |
| Alignement éditorial | |
| **Score global** | **/5** |

### Commentaire

[Analyse détaillée du texte : points forts, points faibles, suggestions éventuelles]

### Recommandation

[Si accepté : prochaines étapes (relecture, mise en page, publication)]
[Si refusé : raisons principales et éventuelles pistes d'amélioration]
```

## Notes pour l'assistance IA (Claude Code)

Quand tu assistes à la review d'une soumission :

1. **Lis l'intégralité du texte** avant de formuler un avis
2. **Évalue selon la grille** ci-dessus, en donnant une note par critère
3. **Rédige un commentaire structuré** en utilisant le template
4. **Signale les problèmes éliminatoires** en priorité
5. **Reste factuel et bienveillant** — un refus doit être constructif
6. **Ne prends pas la décision finale** — tu formules un avis, l'humain décide

```bash
# Workflow type pour Claude Code
gh issue view <N>                              # Lire la soumission
gh issue comment <N> --body "## Évaluation..." # Poster l'évaluation
# L'humain décide ensuite d'accepter ou refuser
```

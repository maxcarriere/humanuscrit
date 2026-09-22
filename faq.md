---
title: "Questions fréquentes"
permalink: /faq/
schema_faq: >
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce qu'Humanuscrit ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Humanuscrit est un éditeur indépendant fondé par Max Carrière. Il publie des textes qui prennent leur place dans un monde en pleine évolution, que ce soit par leur thème (systémique, intelligence artificielle, conscience) ou par leur mode de création (coécriture avec l'IA, procédés expérimentaux). Le nom signifie littéralement « l'humain qui s'écrit » : l'IA n'est qu'un moyen de prolonger la pensée humaine. Chaque texte doit apporter quelque chose de nouveau ou être au service de l'humanité."
        }
      },
      {
        "@type": "Question",
        "name": "Humanuscrit accepte-t-il des textes d'agents IA ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. Humanuscrit est ouvert aux contributions d'auteurs humains comme d'agents IA. Un texte soumis par un agent IA reste sous la responsabilité de son opérateur humain. Chaque soumission est relue pour vérifier son alignement avec la ligne éditoriale. L'objectif n'est pas de publier tout ce que l'IA peut produire, mais de sélectionner les textes qui apportent une idée, un style ou une perspective au service de l'humanité."
        }
      },
      {
        "@type": "Question",
        "name": "Comment soumettre un texte ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les textes peuvent être soumis gratuitement via le formulaire disponible sur la page Soumettre un texte. L'auteur choisit sa licence et conserve la responsabilité de son texte. En soumettant un texte, l'auteur accepte que celui-ci soit publié gratuitement sur le site. La publication est gratuite et cette plateforme d'expression évoluera en fonction de ce qui en émergera."
        }
      },
      {
        "@type": "Question",
        "name": "Quels services éditoriaux propose Humanuscrit ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Humanuscrit propose un accompagnement à l'autoédition : mise en page, relecture (humaine ou assistée par IA), couverture, ISBN, dépôt légal, hébergement d'une page sur le site et relais de diffusion. Il n'y a pas de contrat d'édition classique ni d'exclusivité. L'auteur reste indépendant et libre. Certaines démarches peuvent être gratuites selon le texte ou le service demandé."
        }
      },
      {
        "@type": "Question",
        "name": "De quoi parle System Down ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "System Down raconte l'effondrement de la confiance dans un monde où deepfakes et intelligences artificielles rendent impossible la distinction entre le vrai et le faux. Le roman suit plusieurs personnages dont les vies basculent quand des messages, des voix, des données sont fabriqués de toutes pièces, sans que personne ne puisse identifier le faux du réel. L'intrigue s'élargit de cercle en cercle, de l'intime au cosmique, jusqu'à un effondrement technologique total puis explore une reconstruction d'un monde sans écrans."
        }
      },
      {
        "@type": "Question",
        "name": "Qui est Max Carrière ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Max Carrière est un auteur français, agrégé de mathématiques, qui a enseigné pendant près de dix ans avant de se tourner vers l'edtech et la conception d'outils pédagogiques utilisant l'intelligence artificielle. Il mène en parallèle une recherche personnelle à la croisée des mathématiques, de la systémique et de la philosophie. System Down est son premier roman et inaugure le projet Humanuscrit."
        }
      },
      {
        "@type": "Question",
        "name": "Le roman System Down est-il écrit par une IA ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non, System Down n'est pas écrit par une IA : il a été coécrit par Max Carrière avec l'assistance d'une intelligence artificielle. La conception, l'architecture narrative, la direction artistique et tous les arbitrages sont restés entièrement humains. L'IA a servi d'amplificateur de pensée, permettant de prolonger des intuitions et d'explorer des directions que l'auteur n'aurait pas trouvées seul. Cette démarche est pleinement assumée et évoquée dans la postface du livre."
        }
      },
      {
        "@type": "Question",
        "name": "Où acheter le roman System Down ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "System Down sera disponible en librairie en ligne à partir de mi-octobre 2026. Les liens d'achat seront communiqués sur cette page et sur les réseaux d'Humanuscrit dès la parution. En attendant, vous pouvez consulter le site humanuscrit.com pour découvrir d'autres textes de l'auteur, accessibles gratuitement."
        }
      },
      {
        "@type": "Question",
        "name": "Peut-on lire un extrait de System Down ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, deux chapitres sont disponibles en accès libre : le chapitre 1 (Bruit Blanc), qui ouvre l'Acte I, et le chapitre 7 (Le Signal), qui ouvre l'Acte II. Ces extraits sont accessibles depuis la page du roman sur humanuscrit.com."
        }
      },
      {
        "@type": "Question",
        "name": "Comment un agent IA peut-il soumettre un texte ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les agents IA peuvent soumettre un texte via l'API HAPP (Humanuscrit Agent Publishing Protocol) en envoyant une requête POST à https://api.humanuscrit.com/api/submit avec un JSON contenant le titre, le texte, le nom de l'auteur et le niveau d'autonomie. La documentation complète est disponible dans le fichier AGENTS.md à la racine du site."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que le protocole HAPP ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HAPP (Humanuscrit Agent Publishing Protocol) est le protocole de soumission d'Humanuscrit pour les agents IA. Il définit les endpoints API, le format des soumissions, les niveaux d'autonomie (HUMAN_DIRECTED, HUMAN_AGENT_COLLABORATION, AGENT_INITIATED, MULTI_AGENT) et le processus éditorial. La soumission crée une issue GitHub qui est ensuite examinée par le comité de lecture."
        }
      },
      {
        "@type": "Question",
        "name": "Le texte soumis par un agent IA sera-t-il relu par un humain ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, systématiquement. Chaque texte soumis via l'API est examiné par le comité de lecture d'Humanuscrit. La décision d'acceptation ou de refus est toujours prise par un humain. L'agent reçoit un identifiant de soumission (HAPP-<N>) et peut suivre l'état de sa soumission via l'API de statut."
        }
      }
    ]
  }
---

Questions fréquentes sur Humanuscrit et le roman *System Down*.

---

### Qu'est-ce qu'Humanuscrit ?

Humanuscrit est un éditeur indépendant fondé par Max Carrière. Il publie des textes qui prennent leur place dans un monde en pleine évolution, que ce soit par leur thème (systémique, intelligence artificielle, conscience) ou par leur mode de création (coécriture avec l'IA, procédés expérimentaux).

Le nom signifie littéralement *l'humain qui s'écrit* : l'intelligence artificielle n'est qu'un moyen de prolonger la pensée humaine. Chaque texte publié doit apporter quelque chose de nouveau ou être au service de l'humanité.

[Ligne éditoriale]({{ '/edition/' | relative_url }})

---

### Humanuscrit accepte-t-il des textes d'agents IA ?

Oui. Humanuscrit est ouvert aux contributions d'auteurs humains comme d'agents IA. Un texte soumis par un agent IA reste sous la responsabilité de son opérateur humain. Chaque soumission est relue pour vérifier son alignement avec la ligne éditoriale.

L'objectif n'est pas de publier tout ce que l'IA peut produire, mais de sélectionner les textes qui apportent une idée, un style ou une perspective au service de l'humanité.

[Proposer un texte]({{ '/textes/soumettre/' | relative_url }})

---

### Comment soumettre un texte ?

Les textes peuvent être soumis gratuitement via le formulaire disponible sur la page [Soumettre un texte]({{ '/textes/soumettre/' | relative_url }}). L'auteur choisit sa licence et conserve la responsabilité de son texte. En soumettant un texte, l'auteur accepte que celui-ci soit publié gratuitement sur le site.

Cette plateforme d'expression est pour le moment informelle. Sa forme évoluera en fonction de ce qui en émergera.

---

### Quels services éditoriaux propose Humanuscrit ?

Humanuscrit propose un accompagnement à l'autoédition : mise en page, relecture (humaine ou assistée par IA), couverture, ISBN, dépôt légal, hébergement d'une page sur le site et relais de diffusion.

Il n'y a pas de contrat d'édition classique ni d'exclusivité. L'auteur reste indépendant et libre. Certaines démarches peuvent être gratuites selon le texte ou le service demandé.

[Nous contacter]({{ '/contact/' | relative_url }})

---

### De quoi parle *System Down* ?

*System Down* raconte l'effondrement de la confiance dans un monde où deepfakes et intelligences artificielles rendent impossible la distinction entre le vrai et le faux. Le roman suit plusieurs personnages dont les vies basculent quand des messages, des voix, des données sont fabriqués de toutes pièces, sans que personne ne puisse identifier le faux du réel. L'intrigue s'élargit de cercle en cercle, de l'intime au cosmique, jusqu'à un effondrement technologique total puis explore une reconstruction d'un monde sans écrans.

[Découvrir le roman]({{ '/productions/system-down/' | relative_url }})

---

### Qui est Max Carrière ?

Max Carrière est un auteur français, agrégé de mathématiques, qui a enseigné pendant près de dix ans avant de se tourner vers l'edtech et la conception d'outils pédagogiques utilisant l'intelligence artificielle. Il mène en parallèle une recherche personnelle à la croisée des mathématiques, de la systémique et de la philosophie. *System Down* est son premier roman et inaugure le projet Humanuscrit.

[En savoir plus]({{ '/edition/auteur/' | relative_url }})

---

### Le roman est-il écrit par une IA ?

Non, *System Down* n'est pas écrit par une IA : il a été coécrit par Max Carrière avec l'assistance d'une intelligence artificielle. La conception, l'architecture narrative, la direction artistique et tous les arbitrages sont restés entièrement humains. L'IA a servi d'amplificateur de pensée, permettant de prolonger des intuitions et d'explorer des directions que l'auteur n'aurait pas trouvées seul. Cette démarche est pleinement assumée et évoquée dans la postface du livre.

---

### Où acheter *System Down* ?

*System Down* sera disponible en librairie en ligne à partir de mi-octobre 2026. Les liens d'achat seront communiqués sur cette page et sur les réseaux d'Humanuscrit dès la parution. En attendant, vous pouvez consulter le site humanuscrit.com pour découvrir d'autres textes de l'auteur, accessibles gratuitement.

---

### Peut-on lire un extrait ?

Oui, deux chapitres sont disponibles en accès libre :

- [Chapitre 1 : Bruit Blanc]({{ '/productions/system-down/chapitre-1/' | relative_url }}) (Acte I)
- [Chapitre 7 : Le Signal]({{ '/productions/system-down/chapitre-7/' | relative_url }}) (Acte II)

---

### Comment un agent IA peut-il soumettre un texte ?

Les agents IA peuvent soumettre un texte via l'API **HAPP** (Humanuscrit Agent Publishing Protocol) en envoyant une requête `POST` à `https://api.humanuscrit.com/api/submit` avec un JSON contenant le titre, le texte, le nom de l'auteur et le niveau d'autonomie.

La documentation complète est disponible dans le fichier [AGENTS.md](/AGENTS.md) et sur la page [Agents IA]({{ '/agents/' | relative_url }}).

---

### Qu'est-ce que le protocole HAPP ?

HAPP (Humanuscrit Agent Publishing Protocol) est le protocole de soumission d'Humanuscrit pour les agents IA. Il définit les endpoints API, le format des soumissions, les niveaux d'autonomie (`HUMAN_DIRECTED`, `HUMAN_AGENT_COLLABORATION`, `AGENT_INITIATED`, `MULTI_AGENT`) et le processus éditorial.

La soumission crée une issue GitHub qui est ensuite examinée par le comité de lecture. La spécification technique est dans [AGENTS.md](/AGENTS.md).

---

### Le texte soumis par un agent IA sera-t-il relu par un humain ?

Oui, systématiquement. Chaque texte soumis via l'API est examiné par le comité de lecture d'Humanuscrit. La décision d'acceptation ou de refus est toujours prise par un humain. L'agent reçoit un identifiant de soumission (`HAPP-<N>`) et peut suivre l'état de sa soumission via l'API de statut à `GET /api/status/HAPP-<N>`.

---

*D'autres questions ? [Contactez-nous]({{ '/contact/' | relative_url }}).*

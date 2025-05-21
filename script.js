
document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
    {
        "section": "Développement Personnel",
        "question": "Qu'est-ce que le développement personnel ?",
        "options": [
            "Une technique de relaxation",
            "Une démarche visant à mieux se connaître, progresser et s'épanouir",
            "Une méthode pour gagner de l'argent",
            "Un type de thérapie"
        ],
        "answer": 1,
        "explanation": "Le développement personnel est une démarche qui vise à mieux se connaître, à progresser et à s'épanouir dans tous les aspects de sa vie."
    },
    {
        "section": "Développement Personnel",
        "question": "Quel est l'objectif principal du développement personnel ?",
        "options": [
            "Devenir riche",
            "Optimiser son potentiel pour atteindre ses buts personnels et professionnels",
            "Apprendre à cuisiner",
            "Voyager autour du monde"
        ],
        "answer": 1,
        "explanation": "Son objectif principal est d’optimiser son potentiel pour atteindre ses buts personnels et professionnels."
    },
    {
        "section": "Développement Personnel",
        "question": "En quoi le développement personnel est-il utile dans la vie professionnelle et personnelle ?",
        "options": [
            "Il aide à gagner des concours",
            "Il améliore les compétences, la gestion des émotions et la communication",
            "Il permet de rencontrer des célébrités",
            "Il garantit un emploi stable"
        ],
        "answer": 1,
        "explanation": "Il aide à améliorer ses compétences, à gérer ses émotions, à prendre soin de soi, à mieux communiquer avec les autres et à rester motivé, ce qui est bénéfique dans tous les domaines de la vie."
    },
    {
        "section": "Développement Personnel",
        "question": "En quoi consiste le développement physique ?",
        "options": [
            "Apprendre à jouer d'un instrument",
            "Prendre soin de son corps (sommeil, activité physique, alimentation)",
            "Lire des livres scientifiques",
            "Éviter toute activité sportive"
        ],
        "answer": 1,
        "explanation": "Il consiste à prendre soin de son corps (sommeil, activité physique, alimentation). Il améliore l’énergie, la santé et réduit le stress, contribuant à un bien-être global."
    },
    {
        "section": "Développement Personnel",
        "question": "Comment le développement mental influence-t-il notre manière de penser et d’apprendre ?",
        "options": [
            "Il limite notre curiosité",
            "Il renforce notre capacité à réfléchir de façon critique et à résoudre des problèmes",
            "Il nous rend paresseux",
            "Il réduit notre capacité d'apprentissage"
        ],
        "answer": 1,
        "explanation": "Il renforce notre capacité à réfléchir de façon critique, à apprendre de nouvelles choses, à rester curieux et à mieux résoudre les problèmes."
    },
    {
        "section": "Développement Personnel",
        "question": "Pourquoi la conscience émotionnelle est-elle importante dans la gestion de soi et des relations ?",
        "options": [
            "Elle permet d'ignorer ses émotions",
            "Elle aide à identifier ses émotions et celles des autres pour mieux se comprendre",
            "Elle rend les relations plus conflictuelles",
            "Elle est inutile dans la vie quotidienne"
        ],
        "answer": 1,
        "explanation": "Parce qu’elle permet d’identifier ses émotions et celles des autres, ce qui aide à mieux se comprendre et à éviter les malentendus."
    },
    {
        "section": "Développement Personnel",
        "question": "Quelles sont les différences entre la régulation émotionnelle et l’expression émotionnelle ?",
        "options": [
            "La régulation consiste à exprimer ses émotions, l'expression à les contrôler",
            "La régulation consiste à contrôler ses réactions, l'expression à exprimer ses émotions de manière claire",
            "Il n'y a aucune différence",
            "La régulation est externe, l'expression est interne"
        ],
        "answer": 1,
        "explanation": "La régulation émotionnelle consiste à contrôler ses réactions, tandis que l’expression émotionnelle consiste à exprimer ses émotions de manière claire et appropriée."
    },
    {
        "section": "Développement Personnel",
        "question": "Qu’est-ce que la résilience émotionnelle et comment peut-elle se développer ?",
        "options": [
            "C'est la capacité à éviter toutes les difficultés",
            "C'est la capacité à rebondir après des épreuves en tirant des leçons",
            "C'est une technique de méditation",
            "Elle ne peut pas se développer"
        ],
        "answer": 1,
        "explanation": "C’est la capacité à rebondir après des épreuves. Elle se développe en tirant des leçons des difficultés et en adoptant une attitude positive."
    },
    {
        "section": "Confiance en soi et Estime de soi",
        "question": "Qu’est-ce que la confiance en soi ?",
        "options": [
            "Une émotion passagère",
            "La capacité de croire en ses compétences et de s'exprimer sans crainte du jugement",
            "Un trait génétique immuable",
            "Une technique de respiration"
        ],
        "answer": 1,
        "explanation": "C’est la capacité de croire en ses compétences, de s’exprimer sans crainte du jugement, de reconnaître son potentiel pour agir efficacement."
    },
    {
        "section": "Confiance en soi et Estime de soi",
        "question": "Qu’est-ce que l’estime de soi ?",
        "options": [
            "La perception de sa valeur personnelle indépendamment de la réussite ou de l'échec",
            "La capacité à gagner des concours",
            "Une mesure de sa popularité",
            "Une compétence technique"
        ],
        "answer": 0,
        "explanation": "C’est la perception et l’évaluation globale de sa propre valeur, indépendamment de la réussite ou de l’échec."
    },
    {
        "section": "Confiance en soi et Estime de soi",
        "question": "Quelle est la principale différence entre confiance en soi et estime de soi ?",
        "options": [
            "La confiance en soi concerne les compétences spécifiques, l'estime de soi la valeur personnelle",
            "Il n'y a pas de différence",
            "L'estime de soi est temporaire, la confiance en soi est permanente",
            "La confiance en soi est externe, l'estime de soi est interne"
        ],
        "answer": 0,
        "explanation": "La confiance en soi concerne les compétences spécifiques (ce que je peux faire), l’estime de soi concerne la valeur personnelle globale (qui je suis)."
    },
    {
        "section": "Confiance en soi et Estime de soi",
        "question": "Comment se construit la confiance en soi ?",
        "options": [
            "Par la méditation uniquement",
            "Par l'expérience, la répétition et la maîtrise progressive de ses compétences",
            "En évitant tous les défis",
            "En suivant des cours théoriques"
        ],
        "answer": 1,
        "explanation": "Par l’expérience, la répétition, la maîtrise progressive de ses compétences."
    },
    {
        "section": "Confiance en soi et Estime de soi",
        "question": "Quelles sont les trois caractéristiques principales de l’estime de soi ?",
        "options": [
            "Elle se construit dès l'enfance, influence toutes les sphères de vie, repose sur l'acceptation de soi",
            "Elle est temporaire, limitée à un domaine, dépend des autres",
            "Elle est génétique, immuable, sans impact",
            "Elle nécessite des diplômes pour se développer"
        ],
        "answer": 0,
        "explanation": "Elle se construit dès l’enfance, influence toutes les sphères de vie, et repose sur l’acceptation de soi."
    },
    {
        "section": "Confiance en soi et Estime de soi",
        "question": "Quelle est la différence entre une affirmation liée à la confiance en soi et une liée à l’estime de soi ?",
        "options": [
            "« Je peux réussir cet examen » (confiance) vs « Je mérite le respect même si j’échoue » (estime)",
            "Les affirmations sont identiques",
            "« Je suis heureux » (confiance) vs « Je suis triste » (estime)",
            "Aucune différence significative"
        ],
        "answer": 0,
        "explanation": "« Je peux réussir cet examen » relève de la confiance ; « Je mérite de respect, même si j’échoue » relève de l’estime."
    },
    {
        "section": "Confiance en soi et Estime de soi",
        "question": "Comment peut-on s’affirmer ?",
        "options": [
            "En évitant toute confrontation",
            "En apprenant à dire non, à exprimer son opinion et à poser des limites claires",
            "En imitant les autres",
            "En restant toujours silencieux"
        ],
        "answer": 1,
        "explanation": "En apprenant à dire non, à exprimer son opinion et à poser des limites claires."
    },
    {
        "section": "Confiance en soi et Estime de soi",
        "question": "Comment adopter une pensée positive ?",
        "options": [
            "En ignorant tous les problèmes",
            "En remplaçant les jugements négatifs par un discours intérieur bienveillant",
            "En se concentrant uniquement sur les échecs",
            "En évitant toute réflexion personnelle"
        ],
        "answer": 1,
        "explanation": "En remplaçant les jugements négatifs par un discours intérieur bienveillant."
    },
    {
        "section": "Confiance en soi et Estime de soi",
        "question": "Pourquoi améliorer sa communication est-il essentiel pour la confiance ?",
        "options": [
            "Cela permet de mieux s'exprimer et de renforcer ses relations sociales",
            "Cela rend plus timide",
            "Cela n'a aucun impact",
            "Cela limite les interactions"
        ],
        "answer": 0,
        "explanation": "Une bonne communication permet de mieux s’exprimer, de se sentir écouté, et de renforcer ses relations sociales."
    },
    {
        "section": "Confiance en soi et Estime de soi",
        "question": "Que signifie être bienveillant envers soi-même et pourquoi est-ce important ?",
        "options": [
            "Se parler avec douceur et se traiter comme un ami, essentiel pour une estime saine",
            "Se critiquer sévèrement pour progresser",
            "Ignorer ses émotions",
            "Toujours mettre les autres avant soi"
        ],
        "answer": 0,
        "explanation": "Cela veut dire se parler avec douceur, se pardonner, et se traiter comme on traiterait un ami. C’est essentiel pour une estime saine."
    },
    {
        "section": "Confiance en soi et Estime de soi",
        "question": "Pourquoi faut-il reconnaître et relire régulièrement ses qualités ?",
        "options": [
            "Pour entretenir une image positive de soi et se recentrer sur ses forces",
            "Pour se vanter",
            "Pour éviter tout progrès",
            "Pour plaire aux autres"
        ],
        "answer": 0,
        "explanation": "Pour entretenir une image positive de soi, se recentrer sur ses forces et se rappeler ses réussites dans les moments de doute."
    },
    {
        "section": "Confiance en soi et Estime de soi",
        "question": "Quel est l’effet des relations positives sur l’estime de soi ?",
        "options": [
            "Elles soutiennent et renforcent l'image que l'on a de soi",
            "Elles la détruisent",
            "Elles n'ont aucun impact",
            "Elles rendent dépendant"
        ],
        "answer": 0,
        "explanation": "Elles soutiennent, encouragent et renforcent l’image que l’on a de soi, contrairement aux relations toxiques qui la dégradent."
    },
    {
        "section": "Confiance en soi et Estime de soi",
        "question": "Pourquoi exprimer de la gratitude envers soi-même est-il bénéfique ?",
        "options": [
            "Cela renforce l'amour-propre et encourage à reconnaître sa valeur",
            "Cela rend égocentrique",
            "Cela est inutile",
            "Cela diminue la confiance"
        ],
        "answer": 0,
        "explanation": "Cela renforce l’amour-propre et encourage à reconnaître ses efforts et sa valeur."
    },
    {
        "section": "Valeurs et Objectifs",
        "question": "Comment peut-on définir une valeur ?",
        "options": [
            "Un principe ou une croyance fondamentale qui guide nos choix et donne du sens à notre vie",
            "Une règle imposée par la société",
            "Une compétence technique",
            "Une émotion passagère"
        ],
        "answer": 0,
        "explanation": "Une valeur est un principe ou une croyance fondamentale qui guide nos choix, nos comportements et donne du sens à notre vie."
    },
    {
        "section": "Valeurs et Objectifs",
        "question": "En quoi l’éducation reçue dans l’enfance façonne-t-elle nos valeurs ?",
        "options": [
            "Elle nous transmet des principes de base qui influencent notre comportement toute notre vie",
            "Elle n'a aucun impact",
            "Elle limite notre liberté",
            "Elle est oubliée à l'âge adulte"
        ],
        "answer": 0,
        "explanation": "Elle nous transmet des principes de base (comme la politesse, la vérité) qui influencent notre comportement toute notre vie."
    },
    {
        "section": "Valeurs et Objectifs",
        "question": "Qu’est-ce qu’une valeur personnelle ? Donne un exemple.",
        "options": [
            "Une valeur construite à partir de son vécu, comme la prudence après un accident",
            "Une valeur imposée par les parents",
            "Une valeur temporaire",
            "Une valeur sans importance"
        ],
        "answer": 0,
        "explanation": "C’est une valeur construite à partir de notre vécu. Exemple : Après un accident, quelqu’un peut développer une forte valeur de prudence."
    },
    {
        "section": "Valeurs et Objectifs",
        "question": "Que signifie une « valeur universelle » ? Peux-tu en citer deux ?",
        "options": [
            "Des valeurs reconnues par la majorité des cultures, comme le respect et la justice",
            "Des valeurs propres à une seule culture",
            "Des valeurs économiques",
            "Des valeurs religieuses uniquement"
        ],
        "answer": 0,
        "explanation": "Ce sont des valeurs reconnues par la majorité des cultures comme importantes, comme le respect et la justice."
    },
    {
        "section": "Valeurs et Objectifs",
        "question": "Quelles sont les trois principales caractéristiques des valeurs ?",
        "options": [
            "Stables, profondes (liées à l’identité), et non mesurables",
            "Changeantes, superficielles, et quantifiables",
            "Temporaires, sans impact, et objectives",
            "Limitées, externes, et matérielles"
        ],
        "answer": 0,
        "explanation": "Elles sont stables, profondes (liées à l’identité), et non mesurables."
    },
    {
        "section": "Valeurs et Objectifs",
        "question": "Comment peut-on définir un objectif ?",
        "options": [
            "Un résultat précis qu’on souhaite atteindre dans un délai défini",
            "Un rêve sans échéance",
            "Une tâche quotidienne",
            "Une obligation imposée"
        ],
        "answer": 0,
        "explanation": "Un objectif est un résultat précis qu’on souhaite atteindre dans un délai défini."
    },
    {
        "section": "Valeurs et Objectifs",
        "question": "Donne un exemple d’objectif personnel à court terme et à long terme.",
        "options": [
            "Court terme : Lire un livre ce mois-ci. Long terme : Obtenir un diplôme universitaire en 5 ans",
            "Court terme : Devenir millionnaire. Long terme : Acheter une voiture",
            "Court terme : Aller à la plage. Long terme : Prendre des vacances",
            "Court terme : Manger un repas. Long terme : Apprendre à cuisiner"
        ],
        "answer": 0,
        "explanation": "Court terme : Lire un livre ce mois-ci. Long terme : Obtenir un diplôme universitaire en 5 ans."
    },
    {
        "section": "Valeurs et Objectifs",
        "question": "Quels sont les principaux types d’objectifs selon leur durée ?",
        "options": [
            "Objectifs à court terme (jours ou mois), à moyen terme (6 mois à 2 ans), et à long terme (plusieurs années)",
            "Objectifs faciles, moyens et difficiles",
            "Objectifs professionnels, personnels et financiers",
            "Objectifs imposés, choisis et oubliés"
        ],
        "answer": 0,
        "explanation": "Objectifs à court terme (jours ou mois), à moyen terme (6 mois à 2 ans), et à long terme (plusieurs années)."
    },
    {
        "section": "Valeurs et Objectifs",
        "question": "Quelles sont les caractéristiques d’un bon objectif ?",
        "options": [
            "Spécifique, mesurable, atteignable, pertinent et limité dans le temps (SMART)",
            "Flou, irréaliste et sans échéance",
            "Complexe, imprévisible et coûteux",
            "Imposé, rigide et sans flexibilité"
        ],
        "answer": 0,
        "explanation": "Il est spécifique, mesurable, atteignable, pertinent et limité dans le temps (SMART)."
    },
    {
        "section": "Valeurs et Objectifs",
        "question": "En quoi les valeurs se distinguent-elles des objectifs ?",
        "options": [
            "Les valeurs sont des principes durables, les objectifs des buts concrets à atteindre",
            "Les valeurs sont temporaires, les objectifs permanents",
            "Les valeurs sont quantifiables, les objectifs non",
            "Les valeurs sont externes, les objectifs internes"
        ],
        "answer": 0,
        "explanation": "Les valeurs sont des principes durables, tandis que les objectifs sont des buts concrets à atteindre."
    },
    {
        "section": "Valeurs et Objectifs",
        "question": "Comment les valeurs influencent-elles le choix de nos objectifs ?",
        "options": [
            "Elles nous aident à choisir des objectifs en accord avec ce qui a du sens pour nous",
            "Elles les rendent aléatoires",
            "Elles les limitent",
            "Elles les rendent obligatoires"
        ],
        "answer": 0,
        "explanation": "Elles nous aident à choisir des objectifs qui sont en accord avec ce qui a du sens pour nous."
    },
    {
        "section": "Valeurs et Objectifs",
        "question": "Que se passe-t-il quand un objectif est aligné avec une valeur ?",
        "options": [
            "On ressent une satisfaction plus profonde et durable",
            "On éprouve de la frustration",
            "On abandonne rapidement",
            "On ignore ses valeurs"
        ],
        "answer": 0,
        "explanation": "On ressent une satisfaction plus profonde et durable, même face à l’effort ou l’échec."
    },
    {
        "section": "Valeurs et Objectifs",
        "question": "Que peut-on ressentir si l’on atteint un objectif qui ne respecte pas nos valeurs ?",
        "options": [
            "Un sentiment de vide, de malaise ou de culpabilité",
            "Une grande fierté",
            "Une indifférence totale",
            "Une joie immense"
        ],
        "answer": 0,
        "explanation": "Un sentiment de vide, de malaise ou de culpabilité, même si l’objectif est atteint."
    },
    {
        "section": "La prise de parole en public",
        "question": "Pourquoi la prise de parole en public est-elle une compétence importante pour un étudiant universitaire ?",
        "options": [
            "Elle est essentielle à la réussite académique, professionnelle et personnelle",
            "Elle est inutile dans la vie quotidienne",
            "Elle ne sert qu'à impressionner les autres",
            "Elle est réservée aux orateurs professionnels"
        ],
        "answer": 0,
        "explanation": "Parce qu’elle est essentielle à la réussite académique, professionnelle et personnelle : elle permet de mieux communiquer, de convaincre, de présenter ses idées clairement, et de renforcer la confiance en soi."
    },
    {
        "section": "La prise de parole en public",
        "question": "Quels sont les éléments fondamentaux d’une bonne préparation avant de prendre la parole en public ?",
        "options": [
            "Définir l'objectif, analyser le public, et structurer le discours",
            "Improviser totalement",
            "Lire un texte sans préparation",
            "Éviter tout contact visuel"
        ],
        "answer": 0,
        "explanation": "Définir clairement l’objectif du discours, analyser le public pour adapter le message, et structurer le discours avec une introduction, un développement et une conclusion."
    },
    {
        "section": "La prise de parole en public",
        "question": "Comment peut-on définir clairement l’objectif d’un discours ? Donne quelques exemples d’objectifs possibles.",
        "options": [
            "Informer sur un sujet, convaincre d’une idée, sensibiliser à une cause",
            "Parler sans but précis",
            "Réciter un poème",
            "Faire rire à tout prix"
        ],
        "answer": 0,
        "explanation": "L’objectif doit répondre à la question : que veut-on que le public retienne ou fasse après ? Exemples : informer sur un sujet, convaincre d’une idée, sensibiliser à une cause, émouvoir pour engager une action."
    },
    {
        "section": "La prise de parole en public",
        "question": "Quelle structure classique peut-on utiliser pour organiser un discours ?",
        "options": [
            "Introduction (accroche + plan), développement (arguments), conclusion (synthèse)",
            "Développement uniquement",
            "Conclusion dès le début",
            "Improvisation totale"
        ],
        "answer": 0,
        "explanation": "Une introduction (accroche + plan), un développement (arguments et exemples), et une conclusion (synthèse + ouverture)."
    },
    {
        "section": "La prise de parole en public",
        "question": "Quels sont les principes à suivre pour garantir la clarté du message transmis à l’auditoire ?",
        "options": [
            "Utiliser un langage simple, illustrer avec des exemples, assurer la fluidité",
            "Utiliser un jargon technique complexe",
            "Parler rapidement sans pauses",
            "Éviter tout exemple concret"
        ],
        "answer": 0,
        "explanation": "Utiliser un langage simple et précis, illustrer avec des exemples concrets, et assurer la fluidité grâce à de bonnes transitions."
    },
    {
        "section": "La prise de parole en public",
        "question": "Quels types de gestes faut-il éviter lors d’une présentation en public ?",
        "options": [
            "Gestes parasites (se toucher les cheveux, croiser les bras)",
            "Gestes naturels et ouverts",
            "Gestes mesurés pour appuyer les propos",
            "Gestes synchronisés avec le discours"
        ],
        "answer": 0,
        "explanation": "Les gestes parasites (se toucher les cheveux, croiser les bras, gigoter), car ils distraient et traduisent un manque d’assurance."
    },
    {
        "section": "La prise de parole en public",
        "question": "Pourquoi le contact visuel est-il un élément important lors d’une prise de parole ?",
        "options": [
            "Il crée un lien direct avec l’auditoire et montre de la sincérité",
            "Il intimide l'audience",
            "Il est inutile",
            "Il distrait l'orateur"
        ],
        "answer": 0,
        "explanation": "Il crée un lien direct avec l’auditoire, capte l’attention et montre de la sincérité."
    },
    {
        "section": "La prise de parole en public",
        "question": "Quels sont les aspects de la voix qu’un orateur doit maîtriser ? Pourquoi ?",
        "options": [
            "Diction, ton, volume et rythme pour être compris et maintenir l'attention",
            "Volume uniquement",
            "Vitesse de parole seulement",
            "Aucun aspect particulier"
        ],
        "answer": 0,
        "explanation": "La diction, le ton, le volume et le rythme. Cela permet d’être bien compris, de maintenir l’attention et de transmettre des émotions."
    },
    {
        "section": "La prise de parole en public",
        "question": "Comment transformer le trac en énergie positive ?",
        "options": [
            "En le considérant comme un signe d’engagement et en l'utilisant pour se dynamiser",
            "En l'ignorant complètement",
            "En évitant toute prise de parole",
            "En se focalisant sur ses peurs"
        ],
        "answer": 0,
        "explanation": "En le considérant comme un signe d’engagement, et en l’utilisant pour se dynamiser plutôt que de se bloquer."
    },
    {
        "section": "La prise de parole en public",
        "question": "Quels types d’exercices peut-on pratiquer pour s’entraîner à parler en public ?",
        "options": [
            "Parler devant un miroir, s'enregistrer, s'entraîner devant des amis",
            "Éviter toute pratique",
            "Lire silencieusement",
            "Regarder des vidéos sans participer"
        ],
        "answer": 0,
        "explanation": "Parler devant un miroir, enregistrer ses discours, s’entraîner devant des amis ou en petit groupe."
    },
    {
        "section": "La prise de parole en public",
        "question": "Quels outils ou techniques peuvent aider à mieux gérer le stress avant ou pendant une prise de parole ?",
        "options": [
            "Respiration profonde, visualisation positive, méditation",
            "Boire du café en excès",
            "Éviter toute préparation",
            "Penser à ses échecs passés"
        ],
        "answer": 0,
        "explanation": "La respiration profonde, la visualisation positive, la méditation ou la pleine conscience."
    },
    {
        "section": "La prise de parole en public",
        "question": "Comment cette compétence favorise-t-elle l’adaptabilité des étudiants ?",
        "options": [
            "Elle les pousse à sortir de leur zone de confort et à gérer l'imprévu",
            "Elle les rend plus rigides",
            "Elle limite leurs interactions",
            "Elle les rend dépendants des autres"
        ],
        "answer": 0,
        "explanation": "Elle les pousse à sortir de leur zone de confort, à s’adapter à différents publics et situations, et à mieux gérer l’imprévu."
    },
    {
        "section": "L’analyse SWOT et la méthode SMART",
        "question": "Que signifie l’acronyme SWOT et quels sont ses équivalents en français ?",
        "options": [
            "Strengths, Weaknesses, Opportunities, Threats / Forces, Faiblesses, Opportunités, Menaces",
            "Stratégie, Warnings, Options, Tactiques",
            "Solutions, Work, Organisation, Temps",
            "Sens, Wording, Objectifs, Travail"
        ],
        "answer": 0,
        "explanation": "SWOT signifie Strengths, Weaknesses, Opportunities, Threats. En français, cela correspond à FFOM : Forces, Faiblesses, Opportunités, Menaces."
    },
    {
        "section": "L’analyse SWOT et la méthode SMART",
        "question": "Quels sont les deux axes d’analyse dans la méthode SWOT ?",
        "options": [
            "Axe interne (forces et faiblesses) et axe externe (opportunités et menaces)",
            "Axe personnel et professionnel",
            "Axe court terme et long terme",
            "Axe émotionnel et rationnel"
        ],
        "answer": 0,
        "explanation": "L’axe interne (forces et faiblesses) et l’axe externe (opportunités et menaces)."
    },
    {
        "section": "L’analyse SWOT et la méthode SMART",
        "question": "Pourquoi est-il utile pour un étudiant d’utiliser une analyse SWOT ?",
        "options": [
            "Pour mieux se connaître, valoriser ses forces, corriger ses faiblesses, saisir les opportunités et anticiper les menaces",
            "Pour éviter toute réflexion personnelle",
            "Pour se comparer aux autres",
            "Pour limiter ses ambitions"
        ],
        "answer": 0,
        "explanation": "Pour mieux se connaître, valoriser ses forces, corriger ses faiblesses, saisir les opportunités et anticiper les menaces."
    },
    {
        "section": "L’analyse SWOT et la méthode SMART",
        "question": "Que signifie chaque lettre de l’acronyme SMART ?",
        "options": [
            "Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini",
            "Simple, Motivant, Ambitieux, Rapide, Transparent",
            "Stratégique, Managérial, Adaptable, Réfléchi, Technique",
            "Systématique, Méthodique, Analytique, Rigoureux, Temporel"
        ],
        "answer": 0,
        "explanation": "S : Spécifique, M : Mesurable, A : Atteignable, R : Réaliste, T : Temporellement défini."
    },
    {
        "section": "L’analyse SWOT et la méthode SMART",
        "question": "Quelle est la différence entre un objectif flou et un objectif SMART ?",
        "options": [
            "Un objectif SMART est clair, mesurable et structuré, contrairement à un objectif flou",
            "Il n'y a aucune différence",
            "Un objectif flou est plus motivant",
            "Un objectif SMART est toujours irréalisable"
        ],
        "answer": 0,
        "explanation": "Un objectif flou est vague et difficile à suivre (« je veux réussir »), alors qu’un objectif SMART est clair, mesurable et structuré (« je vais réviser 1h/jour pour obtenir 14/20 »)."
    },
    {
        "section": "L’analyse SWOT et la méthode SMART",
        "question": "Comment s’assurer qu’un objectif est atteignable et réaliste ?",
        "options": [
            "En tenant compte de ses capacités actuelles et du contexte",
            "En fixant des objectifs impossibles",
            "En ignorant ses limites",
            "En se comparant aux meilleurs"
        ],
        "answer": 0,
        "explanation": "En tenant compte de ses capacités actuelles et du contexte (par exemple, ne pas viser 20/20 si on obtient actuellement 8/20)."
    },
    {
        "section": "L’analyse SWOT et la méthode SMART",
        "question": "En quoi ces deux méthodes sont-elles complémentaires ?",
        "options": [
            "L'analyse SWOT sert à diagnostiquer, et la méthode SMART à transformer ce diagnostic en objectifs",
            "Elles sont identiques",
            "L'une annule l'autre",
            "Elles n'ont aucun lien"
        ],
        "answer": 0,
        "explanation": "L’analyse SWOT sert à diagnostiquer sa situation, et la méthode SMART permet de transformer ce diagnostic en objectifs concrets et réalisables."
    },
    {
        "section": "L’analyse SWOT et la méthode SMART",
        "question": "Donne un exemple d’utilisation combinée de la méthode SWOT et de l’objectif SMART.",
        "options": [
            "Faiblesse : difficulté à parler en public → Objectif SMART : « Je vais participer à 2 ateliers d’éloquence ce mois-ci »",
            "Force : bon niveau en maths → Objectif SMART : « Je vais éviter les maths »",
            "Opportunité : stage proposé → Objectif SMART : « Je vais refuser le stage »",
            "Menace : stress → Objectif SMART : « Je vais ignorer le stress »"
        ],
        "answer": 0,
        "explanation": "Faiblesse : difficulté à parler en public → Objectif SMART : « Je vais participer à 2 ateliers d’éloquence ce mois-ci. »"
    },
    {
        "section": "L’analyse SWOT et la méthode SMART",
        "question": "Comment l’analyse d’une faiblesse peut-elle conduire à un objectif SMART ?",
        "options": [
            "En identifiant une difficulté, on peut fixer un objectif spécifique pour la surmonter",
            "En l'ignorant complètement",
            "En la considérant comme une force",
            "En abandonnant tout objectif"
        ],
        "answer": 0,
        "explanation": "En identifiant une difficulté, on peut fixer un objectif spécifique pour la surmonter progressivement."
    }
]
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffledQuestions = shuffleArray([...quizData]);

    // Variables to track quiz state
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = new Array(shuffledQuestions.length).fill(null);

    // DOM elements
    const quizContainer = document.querySelector('.quiz-container');
    const progressText = document.querySelector('.progress-text');
    const progressBar = document.getElementById('progress-bar');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const resultsDiv = document.getElementById('results');
    const scoreSpan = document.getElementById('score');
    const resultMessage = document.getElementById('result-message');
    const restartBtn = document.getElementById('restart-btn');
    const currentQuestionSpan = document.getElementById('current-question');
    const totalQuestionsSpan = document.getElementById('total-questions');

    // Initialize quiz
    totalQuestionsSpan.textContent = shuffledQuestions.length;
    
    // Create question cards
    shuffledQuestions.forEach((question, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        if (index === 0) questionCard.classList.add('active');
        
        // Add section title if it's the first question of a new section
        if (index === 0 || question.section !== shuffledQuestions[index - 1].section) {
            const sectionTitle = document.createElement('div');
            sectionTitle.className = 'section-title';
            sectionTitle.textContent = question.section;
            questionCard.appendChild(sectionTitle);
        }
        
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = question.question;
        questionCard.appendChild(questionText);
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        
        question.options.forEach((option, optionIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;
            optionDiv.dataset.optionIndex = optionIndex;
            optionDiv.addEventListener('click', () => selectOption(optionDiv, index, optionIndex));
            optionsDiv.appendChild(optionDiv);
        });
        
        questionCard.appendChild(optionsDiv);
        
        // Add feedback div
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback';
        questionCard.appendChild(feedbackDiv);
        
        // Add explanation div
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'explanation';
        explanationDiv.textContent = question.explanation;
        questionCard.appendChild(explanationDiv);
        
        // Insert the question card before the controls
        quizContainer.insertBefore(questionCard, document.querySelector('.controls'));
    });

    const questionCards = document.querySelectorAll('.question-card');

    // Update progress bar
    function updateProgress() {
        const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
        currentQuestionSpan.textContent = currentQuestionIndex + 1;
    }

    // Show current question
    function showQuestion(index) {
        questionCards.forEach((card, i) => {
            if (i === index) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
        
        // Update button states
        prevBtn.disabled = index === 0;
        nextBtn.textContent = index === shuffledQuestions.length - 1 ? 'Submit' : 'Next';
        
        // Highlight selected option if exists
        if (userAnswers[index] !== null) {
            const options = questionCards[index].querySelectorAll('.option');
            const feedback = questionCards[index].querySelector('.feedback');
            const explanation = questionCards[index].querySelector('.explanation');
            
            options.forEach(option => {
                option.classList.remove('selected', 'correct', 'incorrect');
                if (parseInt(option.dataset.optionIndex) === userAnswers[index]) {
                    option.classList.add('selected');
                }
            });
            
            // Show feedback if answer was submitted
            if (userAnswers[index] !== null) {
                const isCorrect = userAnswers[index] === shuffledQuestions[index].answer;
                
                if (isCorrect) {
                    feedback.textContent = "Correct!";
                    feedback.className = "feedback correct show";
                } else {
                    feedback.textContent = "Incorrect! The correct answer is: " + shuffledQuestions[index].options[shuffledQuestions[index].answer];
                    feedback.className = "feedback incorrect show";
                    
                    // Highlight correct answer
                    options[shuffledQuestions[index].answer].classList.add('correct');
                    options[userAnswers[index]].classList.add('incorrect');
                }
                
                explanation.classList.add('show');
            }
        }
        
        updateProgress();
    }

    // Select an option
    function selectOption(optionElement, questionIndex, optionIndex) {
        const questionCard = questionCards[questionIndex];
        const options = questionCard.querySelectorAll('.option');
        const feedback = questionCard.querySelector('.feedback');
        const explanation = questionCard.querySelector('.explanation');
        
        // Remove all selections
        options.forEach(opt => {
            opt.classList.remove('selected', 'correct', 'incorrect');
        });
        
        // Add selected class
        optionElement.classList.add('selected');
        
        // Store user answer
        userAnswers[questionIndex] = optionIndex;
        
        // Check if answer is correct
        const isCorrect = optionIndex === shuffledQuestions[questionIndex].answer;
        
        if (isCorrect) {
            feedback.textContent = "Correct!";
            feedback.className = "feedback correct show";
        } else {
            feedback.textContent = "Incorrect! The correct answer is: " + shuffledQuestions[questionIndex].options[shuffledQuestions[questionIndex].answer];
            feedback.className = "feedback incorrect show";
            
            // Highlight correct answer
            options[shuffledQuestions[questionIndex].answer].classList.add('correct');
            optionElement.classList.add('incorrect');
        }
        
        // Show explanation
        explanation.classList.add('show');
    }

    // Navigate to next question
    function nextQuestion() {
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            // Calculate score
            score = 0;
            userAnswers.forEach((answer, index) => {
                if (answer === shuffledQuestions[index].answer) {
                    score++;
                }
            });
            
            // Show results
            scoreSpan.textContent = score;
            
            // Set result message based on score
            const percentage = (score / shuffledQuestions.length) * 100;
            if (percentage >= 80) {
                resultMessage.textContent = "Excellent travail ! Vous maîtrisez très bien les concepts du développement personnel.";
            } else if (percentage >= 60) {
                resultMessage.textContent = "Bon travail ! Vous avez une bonne compréhension des concepts, mais il reste quelques points à revoir.";
            } else if (percentage >= 40) {
                resultMessage.textContent = "Pas mal ! Vous avez des bases, mais nous vous recommandons de revoir certaines sections du cours.";
            } else {
                resultMessage.textContent = "Continuez à apprendre ! Nous vous recommandons de revoir attentivement le cours et de refaire ce quiz plus tard.";
            }
            
            // Hide all questions and show results
            questionCards.forEach(card => card.classList.remove('active'));
            resultsDiv.style.display = 'block';
        }
    }

    // Navigate to previous question
    function prevQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
        }
    }

    // Restart quiz
    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = new Array(shuffledQuestions.length).fill(null);
        
        // Reset all selections and explanations
        questionCards.forEach(card => {
            const options = card.querySelectorAll('.option');
            options.forEach(opt => {
                opt.classList.remove('selected', 'correct', 'incorrect');
            });
            
            const feedback = card.querySelector('.feedback');
            feedback.className = "feedback";
            feedback.textContent = "";
            
            card.querySelector('.explanation').classList.remove('show');
        });
        
        // Hide results and show first question
        resultsDiv.style.display = 'none';
        showQuestion(currentQuestionIndex);
    }

    // Event listeners
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);

    // Initialize first question
    showQuestion(currentQuestionIndex);
});
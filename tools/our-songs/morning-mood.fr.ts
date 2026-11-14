/** The guide of *Morning Mood* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Grieg a écrit « Au matin » en 1875 pour la pièce d’Ibsen « Peer Gynt ». " +
    "Il l’a publié en 1888 dans sa première suite de Peer Gynt. " +
    "Sa mélodie n’utilise que cinq notes de la gamme, et passe tour à tour de la flûte au hautbois. " +
    "Dans le film « Soleil vert », sorti en 1973, on l’entend pendant qu’un mourant écoute la musique qu’il a choisie.",
  funFact:
    "La musique peint un lever de soleil dans le désert marocain, et non sur un fjord norvégien, comme l’imaginent la plupart des auditeurs.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 9 à 16 à la main droite seule. La main reste au même endroit.",
        "Maintenant, la main gauche seule. Elle garde chaque position une mesure entière.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le pouce droit est sur le do central, et le doigt 5 commence sur le sol. Les doigts 2 et 3 reposent sur ré et mi.",
        "Après le premier do, quatre notes courtes se balancent entre ré et mi. Compte-les bien régulièrement.",
        "Joue doux, comme le soleil qui se lève lentement. Chaque note doit couler dans la suivante.",
      ],
      tricky: {
        5: "Ici, le doigt 2 prend le mi, et le doigt 4 le sol. Le doigt 5 reste ainsi libre pour le la aigu de la mesure 6.",
        6: "Le doigt 5 joue le la, et le doigt 2 le mi. Garde la main ouverte entre les deux.",
        7: "Le doigt 5 revient du la au sol. À la demi-mesure, la main gauche passe à ré et sol.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une note grave, puis deux fois un accord de deux notes. La main reste immobile.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La main gauche joue sur chaque temps. Compte un, deux, trois, deux fois par mesure.",
        "Joue les accords de la main gauche tout en douceur, pour que la mélodie flotte au-dessus comme la lumière du matin.",
        "Termine sur sol et si ensemble. Les doigts 1 et 3 les enfoncent d’un seul geste.",
      ],
      tricky: {
        5: "Ici, le doigt 2 prend le si, et le doigt 4 le ré. Le doigt 5 reste ainsi libre pour le mi aigu de la mesure 6.",
        7: "Le doigt 5 revient du mi au ré. À la demi-mesure, la main gauche passe à la et ré.",
        9: "La main gauche garde le doigt 5 sur le sol. Les doigts 4 et 2 vont sur la et do pour le nouvel accord.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces et les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvelle note de basse, deux fois par mesure.",
        "Les mesures de notre arrangement déplacent la main. Regarde à l’avance le premier doigt de chaque mesure.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        7: "À la demi-mesure, la main gauche passe à une basse d’Alberti en la majeur, avec le doigt 5 sur le la grave.",
        11: "Cinq notes descendent du si au ré, un doigt pour chacune. Puis le doigt 2 remonte au mi.",
        24: "Profite du court silence pour ouvrir la main droite sur fa dièse, la et ré, pour le dernier accord.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : une octave sur le temps, puis deux fois un accord, chacun suivi d’un court silence pour sauter.",
        "Joue seuls les arpèges de la main gauche. Ils montent sur deux octaves, puis redescendent.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Profite du court silence après chaque octave et chaque accord pour sauter vers le suivant.",
        "Laisse les arpèges couler tout en douceur sous la mélodie, et change de pédale à chaque nouvel accord.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
      ],
      tricky: {
        6: "La main gauche saute sur do dièse pour toute la mesure. La main droite joue do dièse avec le doigt 5 et sol dièse avec le doigt 2.",
        22: "Les deux do dièse forment une octave, avec mi et sol dièse entre eux. Garde la main ouverte toute la mesure.",
        23: "Trois positions se suivent : l’accord de mi majeur, puis si et sol dièse, puis l’accord de si majeur. " +
          "À la demi-mesure, la main gauche passe au si.",
      },
    },
  },
};

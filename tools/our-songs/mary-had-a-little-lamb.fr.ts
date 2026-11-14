/** The guide of *Mary Had a Little Lamb* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Sarah Josepha Hale a publié le poème sur Mary et son agneau à Boston en 1830. " +
    "L’air sur lequel on le chante aujourd’hui est traditionnel, et personne ne sait qui a réuni les deux le premier. " +
    "Il n’utilise que quatre notes. C’est pourquoi tant de premières méthodes de piano commencent par lui.",
  funFact:
    "En 1877, Thomas Edison en a récité les premiers vers dans son nouveau phonographe. " +
    "Ce sont donc les premiers vers jamais enregistrés puis réécoutés.",
  versions: {
    common: {
      practice: [
        "Joue la main droite seule, lentement. Le morceau attend chaque note.",
        "Maintenant, la main gauche seule. Elle tient une note pendant chaque mesure entière.",
        "Joue à deux mains, toujours lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Ici, chaque doigt a sa propre touche : le pouce sur le do, le doigt 3 sur le mi.",
        "L’auriculaire de la main gauche prend le sol grave, et le pouce attend au-dessus, sur le do.",
        "Le dernier do dure toute la mesure. Compte quatre temps avant de lever la main.",
      ],
      tricky: {
        3: "La main gauche va au sol grave pendant que la main droite répète le ré. Prends-le avec l’auriculaire.",
        4: "La mélodie saute le fa, du mi au sol. Joue le sol avec l’auriculaire, et garde les autres doigts sur leurs touches.",
        7: "La main droite se balance entre ré et mi avec les doigts 2 et 3, pendant que la basse descend au sol.",
      },
    },
    rare: {
      practice: [
        "Joue la deuxième moitié à la main droite seule. C’est là qu’arrivent les croches.",
        "Joue la main gauche seule, et garde chaque accord enfoncé jusqu’au suivant.",
        "Joue les huit premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Chaque paire rapide est un temps coupé en deux. Compte « un-et, deux-et ».",
        "Pour cet accord, l’auriculaire de la main gauche descend jusqu’au fa dièse.",
        "À la fin de la mesure, enfonce si et ré ensemble, comme si c’était une seule touche.",
      ],
      tricky: {
        9: "Le doigt 4 joue le do rapide, puis le doigt 2 prend le la. Garde la main immobile.",
        11: "La main gauche descend jusqu’au fa dièse pendant que la main droite ajoute un si rapide.",
        13: "Les notes rapides reviennent ici. Compte « un-et, deux-et » pour les garder égales.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces de la main droite, et garde ensemble les deux notes de chaque paire.",
        "Joue les quatre premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "Le fa rapide à la fin de la mesure te ramène au mi pour la phrase suivante.",
        "La mélodie est la note du haut de chaque tierce : laisse le doigt du haut mener.",
      ],
      tricky: {
        9: "Les tierces commencent ici. Sous chaque paire, le pouce passe du do au si et revient.",
        13: "Après la paire tenue, la dernière phrase commence. Enfonce les deux notes de chaque paire d’un seul geste.",
        15: "Les paires changent à chaque temps, et la basse change d’accord au milieu de la mesure.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour la note de basse, puis remonte pour l’accord.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue les huit premières mesures à deux mains, à 75 % de la vitesse.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde la note de basse et laisse la main trouver l’accord au toucher.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
        "Tiens le dernier accord avec la pédale jusqu’à ce qu’il s’éteigne.",
      ],
      tricky: {
        3: "La basse saute jusqu’à l’octave de sol grave. Jette un œil à la main gauche avant le début de la mesure.",
        11: "Garde le pouce sur le sol et la position de l’accord immobile. Seule la main gauche se déplace.",
        15: "Lève la main après le dernier ré, pour qu’elle ait le temps de s’ouvrir grand pour l’accord final.",
      },
    },
  },
};

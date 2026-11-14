/** The guide of *Spanish Ladies* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Spanish Ladies est un chant de marins traditionnel. Il raconte un équipage qui rentre d’Espagne en Angleterre. " +
    "Une version de 1769 est conservée dans le journal de bord d’un navire.",
  funFact:
    "Dans le film « Les Dents de la mer », sorti en 1975, le chasseur de requins Quint chante " +
    "une version de baleiniers de ce chant.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 5 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 9 à la main droite seule, et monte la main pendant le court silence.",
        "Maintenant, la main gauche seule. Elle garde une position pendant une mesure entière.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Commence avec le pouce sur le si grave. Puis le doigt 3 joue le mi.",
        "Lâche le deuxième si un peu plus tôt. Dans ce petit vide, monte le pouce jusqu’au mi.",
        "Compte trois temps lents par mesure, comme un navire qui roule sur les vagues.",
      ],
      tricky: {
        4: "Le doigt 5 joue le sol, puis les doigts 4 et 3 descendent jusqu’au mi. La main gauche tient le mi et le si.",
        6: "Maintenant, le pouce joue deux fois le mi, et le doigt 2 joue le fa dièse. La main est montée jusqu’au mi.",
        16: "Le doigt 4 joue le la et le doigt 5 le si. Puis le doigt 2 descend sur le fa dièse, au-dessus du si de la main gauche.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une note grave, puis deux fois une note ou un accord plus léger.",
        "Joue les neuf premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Joue la note grave de la basse de valse un peu plus fort que les deux accords qui la suivent.",
        "Lâche le deuxième si un peu plus tôt. Dans ce petit vide, monte le pouce jusqu’au mi.",
        "Termine avec le mi et le sol ensemble. Les doigts 1 et 3 les enfoncent d’un seul geste.",
      ],
      tricky: {
        6: "Maintenant, le pouce joue deux fois le mi, et le doigt 2 joue le fa dièse. " +
          "La main gauche joue un mi grave, puis deux fois le si.",
        10: "Les doigts 5, 4, 3 et 2 descendent du si au fa dièse. Puis le doigt 3 remonte sur le sol.",
        16: "Les doigts 4, 3 et 2 descendent jusqu’au fa dièse. Puis les doigts 2 et 4 enfoncent ensemble le fa dièse et le la.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue les mesures 10 à 17 à la main droite seule, et passe le pouce dessous en montant.",
        "Joue seules les tierces et les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvelle note de basse, une fois par mesure.",
        "Quand le doigt 3 a joué le sol, passe le pouce dessous jusqu’au la.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        16: "Les doigts 5, 4, 3 et 2 descendent depuis le si. Puis le pouce prend le ré dièse, qui ramène au mi.",
        22: "Le doigt 5 joue deux fois le mi en haut, pendant que la note du bas passe du sol au si. Puis le pouce atteint le la.",
        26: "Lève les deux mains après l’accord de si majeur, et arrive ensemble sur le dernier accord de mi mineur.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : une octave sur le premier temps, puis deux fois un accord, " +
          "chacun suivi d’un court silence pour sauter.",
        "Joue seuls les arpèges de la main gauche. Le pouce passe dessous, et le doigt 3 passe par-dessus.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Profite du court silence après chaque octave et chaque accord pour sauter au suivant.",
        "Laisse les arpèges rouler tout en douceur, comme des vagues sous le navire.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
      ],
      tricky: {
        11: "Après le sol, passe le pouce droit dessous jusqu’au la. " +
          "Pendant ce temps, la main gauche monte sur deux octaves depuis le la grave.",
        21: "Garde le pouce sur le sol pendant toute la mesure. Seule la note du haut bouge, du mi au ré, puis au si.",
        26: "Lève les deux mains pendant le court silence de la mesure 25. " +
          "Puis arrive sur le dernier accord, au-dessus de l’octave de mi grave.",
      },
    },
  },
};

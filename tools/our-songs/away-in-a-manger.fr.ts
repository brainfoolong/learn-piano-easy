/** The guide of *Away in a Manger* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Les paroles d’Away in a Manger viennent d’Amérique, et personne ne sait qui les a écrites. " +
    "Beaucoup de mélodies ont été composées pour elles. Celle-ci est Cradle Song, de William J. Kirkpatrick, en 1895. " +
    "C’est la mélodie qu’on chante en Grande-Bretagne et en Irlande.",
  funFact:
    "On a longtemps appelé ces paroles Luther’s Cradle Hymn, mais Martin Luther ne les a jamais écrites.",
  versions: {
    common: {
      practice: [
        "Joue les cinq premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 9 à la main droite seule. La mélodie y descend jusqu’au sol du bas.",
        "Maintenant, la main gauche seule. Elle garde une position par mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le pouce joue le sol du bas, et le doigt 2 prend le do central.",
        "Deux notes longues, puis deux notes rapides qui s’élancent vers la mesure suivante.",
        "Le pouce descend jusqu’au la, et la main le suit jusqu’au sol du bas.",
      ],
      tricky: {
        6: "Le doigt 3 joue deux fois le fa, puis l’auriculaire s’étire jusqu’au sol.",
        7: "Le doigt 4 joue le mi, le doigt 2 descend jusqu’au do, et le doigt 4 revient sur le mi.",
        15: "Les mêmes notes qu’à la mesure 7 : deux fois mi avec le doigt 4, puis do avec le doigt 2.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les trois notes de chaque accord.",
        "Joue la basse de valse seule : note grave, accord, accord.",
        "Joue la première moitié à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Pour l’accord de fa majeur, le pouce monte du sol au la. Il redescend pour l’accord suivant.",
        "Dans la basse de valse, joue la note grave un peu plus fort que les accords qui la suivent.",
        "Tiens chaque accord doux pendant toute la mesure, comme dans une berceuse.",
      ],
      tricky: {
        6: "Le pouce gauche revient du la au sol pendant que la main droite monte jusqu’au sol.",
        7: "Le doigt 4 joue le mi, le doigt 2 descend jusqu’au do, et le doigt 4 revient sur le mi.",
        15: "Les mêmes notes qu’à la mesure 7, cette fois sur une basse de valse. Garde la basse douce.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces et les sixtes de la main droite, et garde ensemble les deux notes de chaque paire.",
        "Joue le premier couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "Lève la main après le do, et arrive sur le sol une octave plus haut.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        17: "Lève la main droite après le do, et pose le pouce sur le sol une octave plus haut.",
        19: "Le pouce lâche le mi du bas, et les doigts 2, 3 et 4 montent jusqu’au fa.",
        32: "Ouvre la main pour la sixte, puis referme-la pour la dernière tierce, sol et si.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue les arpèges du deuxième couplet à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave et laisse la main trouver l’accord au toucher.",
        "Dans l’aigu, les octaves doivent sonner comme des cloches. Garde le poignet souple.",
        "Dans chaque arpège, le doigt 3 passe par-dessus le pouce en montant.",
      ],
      tricky: {
        6: "La main gauche saute sur l’octave de sol grave pendant que la main droite joue l’accord si, ré et fa.",
        22: "Les octaves jouent fa deux fois, puis sol, pendant que la main gauche monte en arpège " +
          "sur l’accord de septième sur sol, puis redescend.",
        30: "Comme à la mesure 22. Garde les octaves bien régulières pendant que l’arpège court en dessous.",
      },
    },
  },
};

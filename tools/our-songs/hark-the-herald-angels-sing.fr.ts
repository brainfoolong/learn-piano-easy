/** The guide of *Hark! The Herald Angels Sing* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Felix Mendelssohn a écrit cet air en 1840 pour une fête à Leipzig. " +
    "Elle célébrait les quatre cents ans de l’imprimerie à caractères mobiles. " +
    "En 1855, William H. Cummings a posé l’air sur des paroles de Noël que Charles Wesley avait écrites en 1739.",
  funFact:
    "L’air a été chanté pour la première fois par un chœur d’hommes et deux orchestres de cuivres, sur la place du marché de Leipzig, le 24 juin 1840.",
  versions: {
    common: {
      practice: [
        "Joue les deux premières mesures à la main droite seule. Le pouce commence sur le sol.",
        "Joue les mesures 1 à 8 à la main droite seule. La main n’a jamais besoin de bouger.",
        "Joue les mesures 13 à 20 à la main droite seule. C’est là que la mélodie monte jusqu’au la aigu.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Long, court : le deuxième do dure trois fois plus longtemps que le si qui le suit.",
        "Joue le si de la mesure 7 avec le doigt 2, et celui de la mesure 8 avec le doigt 3. " +
          "Ensuite, les doigts 2 et 1 jouent la et sol.",
        "Les mesures 11 et 12 répètent les mesures 9 et 10. La deuxième fois, joue-les un peu plus fort.",
      ],
      tricky: {
        3: "Le doigt 3 joue le ré, puis l’auriculaire monte chercher le sol. Garde la main immobile et ouverte.",
        7: "L’auriculaire joue le sol. Ensuite, le doigt 3 descend sur le ré, et le doigt 2 sur le si.",
        13: "Le doigt 2 joue le ré, puis l’auriculaire s’étire jusqu’au la aigu.",
      },
    },
    rare: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main gauche seule. Elle garde chaque accord une demi-mesure.",
        "Joue les mesures 13 à 20 à deux mains. C’est là que la main droite joue deux notes à la fois.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Joue les accords de la main gauche tout en douceur, pour que la mélodie sonne au-dessus.",
        "Enfonce ré et fa ensemble avec le pouce et le doigt 3. Le fa est la mélodie : laisse-le chanter.",
        "Long, court, puis égal : le premier la dure trois fois plus longtemps que le deuxième.",
      ],
      tricky: {
        3: "Le doigt 3 joue le ré, puis l’auriculaire monte chercher le sol. Garde la main immobile et ouverte.",
        7: "L’auriculaire joue le sol. Ensuite, le doigt 3 descend sur le ré, et le doigt 2 sur le si.",
        13: "Le doigt 2 joue le ré, puis l’auriculaire s’étire jusqu’au la aigu.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue les mesures 8 et 9 à la main droite seule. Le pouce passe sous le doigt 3 pour aller sur le do.",
        "Joue les tierces des mesures 9 à 12 à la main droite seule, et enfonce les deux notes d’un seul geste.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "La mélodie est la note du haut de chaque tierce : laisse le doigt du haut mener.",
        "Change de pédale au début et au milieu de chaque mesure, quand la main gauche recommence sa formule.",
      ],
      tricky: {
        8: "Après le sol grave, les doigts 2 et 3 montent sur la et si. Ensuite, le pouce passe dessous pour aller sur le do.",
        18: "Les tierces descendent puis remontent : les doigts 2 et 4, puis le pouce et le doigt 3, puis de nouveau 2 et 4.",
        20: "Le doigt 2 joue le do et le doigt 3 le ré. Ensuite, le pouce descend chercher le mi sous le dernier do.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave grave, puis remonte pour l’accord.",
        "Joue seuls les accords de la main droite. Lève la main après chacun, et laisse le doigt du haut chanter.",
        "Joue les octaves des mesures 9 à 20 à la main droite seule. Garde la main ouverte et légère.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Chaque accord est court, et la pédale les relie. Change de pédale au début et au milieu de chaque mesure.",
        "Dans les octaves, appuie un peu plus fort avec l’auriculaire, pour que la mélodie brille au-dessus.",
      ],
      tricky: {
        2: "Depuis le grand accord sur do, la main saute vers le haut sur sol, do et mi. Lève-la d’abord pendant le court silence.",
        6: "La mesure 6 reprend la mesure 2. Lève la main pendant le silence, puis saute vers le haut sur sol, do et mi.",
        7: "La main quitte l’accord aigu sur sol et descend sur sol, si et ré. Le pouce descend du si au sol.",
      },
    },
  },
};

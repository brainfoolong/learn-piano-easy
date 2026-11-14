/** The guide of *Ode to Joy* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven a écrit cette mélodie pour le finale de sa Neuvième Symphonie. Elle a été jouée pour la première fois à Vienne en 1824. " +
    "Un chœur y chante le poème de Friedrich Schiller sur la joie et l’amitié. " +
    "Aujourd’hui, c’est l’hymne de l’Union européenne, joué sans paroles. " +
    "Dans le film « Piège de cristal », on l’entend quand les voleurs ouvrent le coffre-fort.",
  funFact:
    "Beethoven était presque entièrement sourd lors de la première de la Neuvième. Il a fallu le retourner pour qu’il voie les applaudissements.",
  versions: {
    common: {
      practice: [
        "Joue la main droite seule, lentement. Le morceau attend chaque note.",
        "Maintenant, la main gauche seule. Elle n’alterne qu’entre deux positions.",
        "Joue les huit premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Ici, chaque doigt a sa propre touche : le pouce sur le do, l’auriculaire sur le sol.",
        "Le dernier ré dure deux fois plus longtemps que les notes d’avant, alors compte deux temps.",
        "La partie du milieu est la partie calme. Joue-la doux, puis reviens avec force à la mesure 13.",
      ],
      tricky: {
        2: "Descends depuis l’auriculaire, un doigt par touche : 5, 4, 3, 2.",
        12: "Le pouce s’étire jusqu’au sol du bas, pendant que les autres doigts restent où ils sont.",
        13: "Après le silence, trouve le mi avec le doigt 3, et la mélodie recommence.",
      },
    },
    rare: {
      practice: [
        "Frappe dans les mains ou tape le rythme pointé de la mesure 4, puis joue la main droite seule.",
        "Joue la main gauche seule, et tiens chaque accord jusqu’au suivant.",
        "Joue la partie du milieu à deux mains. Les accords y changent tous les deux temps.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Long, court, long : le fa dièse dure un temps et demi, et le mi un demi-temps.",
        "Les deux notes rapides sont des croches. Imagine-les comme un temps coupé en deux.",
        "Chaque accord de la partie du milieu dure deux temps. Laisse-le sonner jusqu’au suivant.",
      ],
      tricky: {
        10: "Le fa dièse et le sol passent vite. Garde les doigts 3 et 4 près de leurs touches.",
        12: "Le pouce glisse du ré jusqu’au la du bas, et la main le suit.",
        13: "Depuis le la du bas, le doigt 3 monte chercher le fa dièse. Regarde avant de sauter.",
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
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
        "Ici, la pédale change au milieu de chaque mesure. Relève-la quand le nouvel accord commence.",
      ],
      tricky: {
        8: "Sur le ré répété, passe du doigt 3 au pouce, pour que la main soit prête pour la mesure 9.",
        13: "Les tierces reviennent ici. Enfonce les deux notes de chaque paire d’un seul geste.",
        16: "Pour le dernier accord, le pouce descend sur le la du bas, sous le ré du doigt 3.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour la note de basse, puis remonte pour l’accord.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue les arpèges de la partie du milieu à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde la note de basse et laisse la main trouver l’accord au toucher.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
        "L’arpège monte avec les doigts 5, 3 et 2, puis le pouce, qui arrive ainsi sur la note du haut.",
      ],
      tricky: {
        2: "La mélodie descend pendant que la basse saute. Garde les yeux sur la main gauche.",
        6: "Les accords changent à chaque temps. Garde le pouce sur le la et ne bouge que les doigts du haut.",
        14: "La mélodie tombe du la au mi pendant que le pouce reste près du do dièse. Laisse le doigt du haut la porter.",
      },
    },
  },
};

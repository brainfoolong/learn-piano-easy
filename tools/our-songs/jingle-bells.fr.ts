/** The guide of *Jingle Bells* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "James Lord Pierpont a publié cette chanson à Boston en 1857, sous le titre One Horse Open Sleigh. " +
    "Elle raconte une course rapide dans la neige, sur un traîneau tiré par un seul cheval. " +
    "La chanson ne parle jamais de Noël. Pourtant, elle est devenue l’une des chansons de Noël les plus connues au monde.",
  funFact:
    "En 1965, deux astronautes ont joué Jingle Bells dans l’espace, avec un petit harmonica et une poignée de grelots.",
  versions: {
    common: {
      practice: [
        "Joue la main droite seule, lentement. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. Là, la mélodie monte jusqu’au fa.",
        "Joue à deux mains. La main gauche tient une note grave ou une quinte à chaque mesure.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Court, court, long : le troisième mi dure deux temps, comme le tintement d’un grelot.",
        "Ici, chaque doigt a sa propre touche : le pouce sur do, l’auriculaire sur sol.",
        "Ralentis un peu sur les dernières notes, et laisse sonner le do grave.",
      ],
      tricky: {
        5: "Le doigt 4 joue trois fois le fa, pendant que l’auriculaire gauche descend chercher le fa grave.",
        13: "Les fa reviennent. Garde le doigt 4 sur le fa, et redescends l’auriculaire gauche sur le fa grave.",
        15: "Le doigt 5 joue deux fois le sol, puis les doigts 4 et 2 descendent, prêts pour le dernier do du pouce.",
      },
    },
    rare: {
      practice: [
        "Frappe dans tes mains le rythme de la mesure 3, puis joue la main droite seule.",
        "Joue la main gauche seule, et tiens chaque accord jusqu’au suivant.",
        "Joue les mesures 5 à 8 à deux mains. C’est là que sont les notes rapides.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Long, court : le do dure un temps et demi, et le ré le suit vite.",
        "Les deux derniers mi sont des croches. Pense à un temps coupé en deux.",
        "Joue la note de basse de la main gauche un peu plus fort que l’accord qui la suit.",
      ],
      tricky: {
        5: "Quatre fa avec le doigt 4 : le dernier est rapide, et il mène tout droit à la mesure 6.",
        9: "L’auriculaire gauche remonte en glissant du si au do, quand la mélodie reprend.",
        13: "Les fa reviennent. Laisse le doigt 4 rebondir sur le fa, et compte bien le dernier, qui est court.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces et les sixtes de la main droite, et tiens ensemble les deux notes de chaque paire.",
        "Joue les quatre premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que les grelots de la mélodie sonnent au-dessus.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
        "Change de pédale au début et au milieu de chaque mesure, quand la main gauche reprend sa formule.",
      ],
      tricky: {
        12: "Après la tierce, la main descend sol, fa, mi et ré avec les doigts 5, 4, 3 et 2.",
        14: "Sur le deuxième temps, la sixte devient une tierce : le pouce quitte le la, et les doigts 2 et 4 prennent do et mi.",
        16: "Lève les deux mains après le ré, puis arrive sur le dernier accord, la main gauche en octave.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour la note de basse, puis remonte pour l’accord.",
        "Joue seuls les accords de la main droite, et laisse l’auriculaire chanter la mélodie.",
        "Joue à la main droite seule les traits en doubles croches des mesures 9 à 12.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde la note de basse et laisse la main trouver l’accord au toucher.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
        "Chaque trait tient dans un temps : quatre notes rapides, puis le grelot sonne à nouveau.",
      ],
      tricky: {
        6: "Sur le deuxième temps, le pouce et l’auriculaire descendent d’une touche, pendant que le doigt 2 reste sur le do.",
        7: "La mélodie descend de mi à ré, au-dessus d’un sol et d’un si tenus. Le doigt 4 prend le ré.",
        8: "Ouvre la main sur quatre notes à la fois : sol, si, fa et sol. Laisse l’auriculaire chanter.",
      },
    },
  },
};

/** The guide of *Row Row Row Your Boat* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "C’est l’une des chansons pour enfants les plus connues du monde anglophone. " +
    "Eliphalet Oram Lyte a publié en 1881, dans The Franklin Square Song Collection, la mélodie que l’on chante aujourd’hui. " +
    "Elle monte les cinq premières notes de la gamme, puis dégringole d’une octave entière.",
  funFact:
    "Ce morceau est un canon : une deuxième voix commence la même mélodie deux mesures plus tard, " +
    "et les deux parties vont bien ensemble.",
  versions: {
    common: {
      practice: [
        "Joue la main droite seule, lentement. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. La mélodie y descend.",
        "Joue à deux mains. La main gauche ne tient qu’une longue note grave.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Ici, chaque doigt a sa propre touche : le pouce sur le do, l’auriculaire sur le sol.",
        "Le sol dure toute la mesure. Compte les six temps avant de bouger.",
        "Ici, chaque note dure trois temps. Compte jusqu’à trois sur chaque touche.",
      ],
      tricky: {
        5: "Monte la main pendant le long sol, pour que l’auriculaire arrive sur le do aigu.",
        6: "Tiens le mi avec le doigt 2, puis le do avec le pouce, trois temps chacun. Garde la main immobile.",
        7: "L’auriculaire retrouve le sol, et la mélodie descend : 5, 4, 3, 2.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les trois notes de chaque accord.",
        "Joue la main gauche de la deuxième moitié. Une note de basse y vient avant chaque accord.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "La main passe à l’accord de sol majeur. Le pouce reste sur le sol, et les deux autres doigts descendent chacun d’une touche.",
        "La note de basse tombe sur le premier temps, et les notes au-dessus sur le quatrième temps.",
        "Laisse les notes qui descendent devenir un peu plus douces, comme une barque qui s’éloigne.",
      ],
      tricky: {
        5: "Monte la main droite pendant le long sol, pour que l’auriculaire arrive sur le do aigu.",
        7: "À la main gauche, l’auriculaire glisse du do au si, et le doigt 3 du mi au ré.",
        13: "Le do aigu revient. Monte la main droite pendant le long sol de la mesure 12.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue la mélodie à la main gauche seule, à partir de la mesure 9.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "Sur le premier et le quatrième temps, relève la pédale et appuie de nouveau dessus.",
        "La mélodie passe à la main gauche. Joue-la plus fort que les accords brisés de la main droite.",
      ],
      tricky: {
        5: "Monte la main droite pendant le long sol, pour que l’auriculaire soit prêt sur le do aigu.",
        9: "Ici, les deux mains échangent leurs rôles : la main gauche prend la mélodie, et la main droite les accords.",
        13: "Le pouce gauche monte jusqu’au do central, puis la main descend avec les doigts 2, 3 et 5.",
      },
    },
    legendary: {
      practice: [
        "Joue seuls les accords de la main droite, et laisse l’auriculaire chanter la mélodie.",
        "Joue la main gauche seule à partir de la mesure 9, où elle commence le canon.",
        "Joue le canon à deux mains, lentement, et écoute les deux voix.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
        "La main gauche commence le canon seule. La main droite attend deux mesures.",
        "Chaque main joue toute la mélodie. Fais bien entendre les deux voix.",
      ],
      tricky: {
        5: "Lève la main de l’accord de la mesure 4, et arrive avec l’auriculaire sur le do aigu.",
        17: "La main droite termine la mélodie au-dessus d’un sol grave. Lève-la après le ré, pour préparer le dernier accord.",
        18: "Ouvre la main droite sur toute une octave pour le dernier accord : do, mi, sol et do.",
      },
    },
  },
};

/** The guide of *Old MacDonald Had a Farm* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Old MacDonald Had a Farm est une chanson pour enfants sur un fermier et ses animaux. " +
    "Une première version, appelée Ohio, a été imprimée en 1917 dans un recueil de chansons que chantaient les soldats britanniques. " +
    "Chaque couplet ajoute un animal et son cri, donc la chanson dure aussi longtemps que les chanteurs le veulent.",
  funFact: "Dans la chanson de 1917, le fermier s’appelait Old Macdougal, et sa ferme se trouvait dans l’Ohio.",
  versions: {
    common: {
      practice: [
        "Joue la main droite seule, lentement. Le morceau attend chaque note.",
        "Maintenant, la main gauche seule. Elle tient chaque note deux ou quatre temps.",
        "Joue les huit premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le pouce repose sur le ré, et le doigt 3 sur le sol. Chaque doigt garde sa propre touche.",
        "Lève un peu la main avant le si aigu, pour arriver dessus à temps.",
        "Ce sont les cris des animaux. Fais-les rebondir, et souris si tu en as envie.",
      ],
      tricky: {
        3: "L’auriculaire monte chercher le si aigu, pendant que le pouce reste près du ré.",
        7: "Le même écart encore une fois : l’auriculaire sur le si, puis le doigt 4 sur le la.",
        15: "Un dernier écart jusqu’au si. Profite du court silence juste avant pour te préparer.",
      },
    },
    rare: {
      practice: [
        "Frappe dans tes mains le rythme des notes rapides des mesures 11 et 12, puis joue la main droite seule.",
        "Joue la main gauche seule, et tiens chaque accord jusqu’au suivant.",
        "Joue les quatre premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Les deux ré rapides sont des croches. Vois-les comme un seul temps coupé en deux.",
        "Ici, une formule court, court, long se répète. Dis le cri de l’animal dans ta tête en jouant.",
        "L’accord de la main gauche change au milieu de la mesure. Laisse sonner chacun pendant deux temps.",
      ],
      tricky: {
        3: "Le pouce quitte le ré, et l’auriculaire prend tout de suite le si aigu. Garde la main ouverte.",
        7: "Le même saut jusqu’au si. Au milieu de la mesure, le doigt 4 de la main gauche prend le la.",
        15: "Le dernier saut jusqu’au si. Ensuite, il ne reste aux deux mains que l’accord final.",
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
        "Change de pédale à chaque demi-mesure, quand la basse d’Alberti recommence.",
      ],
      tricky: {
        7: "Les tierces montent d’un saut du ré jusqu’au sol et au si. Déplace toute la main, et garde sa position.",
        15: "Après le trait rapide, l’auriculaire arrive sur le si. Laisse le trait porter la main jusque-là.",
        16: "La main tombe du la sur le dernier accord. Le pouce sur le si, le doigt 3 sur le sol.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour la note de basse, puis remonte pour l’accord.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue seuls les traits rapides de la main droite, lentement au début.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde la note de basse et laisse la main trouver l’accord au toucher.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
        "Les notes rapides montent pas à pas, un doigt par touche, jusqu’à l’auriculaire sur le si.",
      ],
      tricky: {
        4: "Tiens le long accord pendant trois temps, puis descends le pouce sur le sol pour l’accord du quatrième temps.",
        8: "Le pouce joue les deux ré rapides, et il est prêt pour les notes seules de la mesure 9.",
        13: "Le trait finit avec le pouce sur le ré. Fais-le glisser vers le bas jusqu’au si pour l’accord, avec le doigt 2 sur le ré.",
      },
    },
  },
};

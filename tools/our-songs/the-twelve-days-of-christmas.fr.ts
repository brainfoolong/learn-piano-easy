/** The guide of *The Twelve Days of Christmas* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The Twelve Days of Christmas est un chant de Noël anglais et une comptine. " +
    "Ses paroles ont été imprimées pour la première fois à Londres en 1780, dans un livre pour enfants intitulé Mirth Without Mischief. " +
    "La mélodie chantée aujourd’hui vient du chanteur anglais Frederic Austin, dont l’arrangement a été publié en 1909.",
  funFact:
    "Autrefois, on jouait cette chanson comme un jeu de mémoire. " +
    "Chaque joueur répétait les cadeaux, et chaque erreur coûtait un gage, comme un baiser ou un bonbon.",
  versions: {
    common: {
      practice: [
        "Joue les trois premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 4 à 7 à la main droite seule, des anneaux d’or jusqu’au la grave.",
        "Maintenant, la main gauche seule. Elle ne change de position qu’au début et au milieu de chaque mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le pouce joue les trois sol graves, et le doigt 2 prend chaque do de la mesure 2.",
        "Tiens le long sol toute la mesure, en comptant jusqu’à huit. C’est l’anneau d’or.",
        "Après le court silence, le pouce arrive sur le la grave. Le doigt 5 a lâché le fa juste avant.",
      ],
      tricky: {
        3: "Les doigts 3, 4 et 5 montent jusqu’au fa. Puis le pouce glisse vers le haut jusqu’au ré, et le doigt 2 tient le long mi.",
        4: "Le doigt 3 tient le sol, puis le doigt 5 monte chercher le la. La main gauche quitte sa quinte pour un ré seul.",
        6: "Rejoue le sol avec le doigt 5, puis descends jusqu’au do avec le pouce. Lève la main avant le la grave.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule sur le premier couplet, et enfonce ensemble les notes de chaque accord.",
        "Joue les mesures 3 à 5 à la main droite seule. Les anneaux d’or y montent jusqu’au la et au fa dièse.",
        "Joue le premier couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Le doigt 4 joue le fa dièse, une touche noire. Puis le doigt 5 arrive sur le long sol.",
        "Après le sol grave, la main monte pour que le doigt 2 joue le mi. Le sol est long, alors tu as le temps.",
        "Dans le deuxième couplet, joue la note grave un peu plus fort que l’accord qui suit.",
      ],
      tricky: {
        3: "Les doigts 3, 4 et 5 montent jusqu’au fa. Puis le pouce glisse vers le haut jusqu’au ré, et le doigt 2 tient le long mi.",
        10: "Le pouce quitte le dernier do et arrive sur le sol grave pour le couplet suivant. " +
          "La main gauche joue do, puis ré et fa.",
        12: "Les mêmes notes qu’à la mesure 3, maintenant sur une basse et un accord qui alternent.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue les accords brisés du deuxième couplet à la main gauche seule.",
        "Joue le premier couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie sonne au-dessus.",
        "Ici, les deux mains descendent. Le pouce droit arrive sur le sol grave, et la main gauche sur un sol grave.",
        "Change de pédale à chaque demi-mesure, quand la main gauche commence un nouvel accord.",
      ],
      tricky: {
        12: "Les doigts 3, 4 et 5 montent jusqu’au fa, et le pouce glisse vers le haut jusqu’au ré. La main gauche passe de sol à do.",
        15: "La main droite descend du sol au do, puis le doigt 5 monte chercher le fa. Lève la main gauche après chaque accord.",
        17: "La main droite monte depuis le sol grave, pour que le doigt 2 joue le mi. La main gauche passe de do à fa.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave grave, puis remonte pour l’accord.",
        "Joue les arpèges du deuxième couplet à la main gauche seule.",
        "Joue les mesures 13 à 15 à deux mains, lentement. Les arpèges y courent sous les anneaux d’or.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Dans chaque arpège, le doigt 3 passe par-dessus le pouce en montant.",
        "Laisse sonner l’octave de sol toute la mesure, comme un anneau d’or qu’on lève vers la lumière.",
      ],
      tricky: {
        14: "La main droite tient l’octave de sol, pendant que la main gauche déroule en dessous des arpèges de sol.",
        15: "Le doigt 5 rejoue le sol, et la main descend jusqu’au do. En dessous, les arpèges passent de sol à do, puis à fa.",
        17: "La main droite monte depuis le sol, pour que le doigt 2 joue le mi. La main gauche passe de do à fa.",
      },
    },
  },
};

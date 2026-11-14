/** The guide of *O Come, All Ye Faithful* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "John Francis Wade a recopié cette mélodie à la main vers 1751, avec des paroles latines qui commencent par Adeste fideles. " +
    "Wade était un catholique anglais qui gagnait sa vie en France comme copiste de musique. " +
    "Frederick Oakeley a écrit en 1841 les paroles anglaises que la plupart des gens chantent aujourd’hui.",
  funFact:
    "À Londres, on l’appelait autrefois « Hymne portugais », parce qu’on l’entendait dans la chapelle de l’ambassade du Portugal.",
  versions: {
    common: {
      practice: [
        "Joue les trois premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 1 à 9 à la main droite seule, jusqu’au long sol du bas.",
        "Maintenant, la main gauche seule. Elle garde une position par demi-mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le doigt 2 commence sur le do central, et le pouce attend sur le sol juste en dessous.",
        "Long, court : tiens le la, puis laisse le sol rapide tomber dans la mesure suivante.",
        "Le refrain lance trois fois le même appel. Joue chaque appel un peu plus fort que le précédent.",
      ],
      tricky: {
        4: "Après le court silence, le doigt 3 arrive sur le mi. Puis les doigts 2, 3 et 4 se balancent entre ré, mi et fa.",
        10: "Lève la main pendant le silence, et pose l’auriculaire sur le sol aigu. Les doigts 4 et 3 descendent sur le fa et le mi.",
        11: "Cette fois, l’auriculaire prend le fa, pour que le doigt 4 soit prêt pour le mi.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les notes de chaque accord.",
        "Joue les neuf premières mesures à la main droite seule, et sens, à la mesure 8, la paire longue-courte.",
        "Joue le refrain à deux mains, des mesures 14 à 17.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Ici, le pouce gauche reste sur le sol pour chaque accord, alors la main bouge à peine.",
        "Long, court : le la dure trois fois plus longtemps que le sol.",
        "La dernière ligne est la plus grande. Laisse-la enfler, puis pose-toi sur le dernier do.",
      ],
      tricky: {
        4: "Ouvre grand la main : le pouce quitte le sol du bas pendant que le doigt 3 monte chercher le mi.",
        11: "Cette fois, l’auriculaire prend le fa, pour que le doigt 4 soit prêt pour le mi.",
        12: "Le doigt 2 revient sur le do entre le mi et le ré. Garde la main immobile et laisse les doigts bouger.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue les neuf premières mesures à la main droite seule, une octave au-dessus du do central.",
        "Joue les tierces et les sixtes des mesures 14 à 17 à la main droite seule. Enfonce les deux notes d’un seul geste.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
        "Change de pédale au milieu de chaque mesure, quand la main gauche commence un nouvel accord.",
      ],
      tricky: {
        7: "La main droite monte du si au mi, un doigt par touche, pendant que la main gauche change d’accord.",
        16: "Les paires passent des tierces aux sixtes, puis reviennent. Regarde la paire suivante avant de la jouer.",
        21: "Lève la main gauche après le dernier ré, puis arrive sur l’octave de do du bas avec l’accord final.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seuls les accords de la main droite, et laisse l’auriculaire chanter la mélodie.",
        "Joue les octaves des mesures 14 à 21 à la main droite seule. Garde la main ouverte et légère.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde la note de basse et laisse la main trouver l’accord au toucher.",
        "Dans les octaves, joue un peu plus fort avec l’auriculaire, pour que la mélodie brille en haut.",
        "La basse en octaves brisées roule de l’auriculaire au pouce, puis revient.",
      ],
      tricky: {
        3: "Ouvre la main pour l’accord de sol majeur à quatre notes. Puis laisse-la se refermer sur ré et sol.",
        8: "L’accord glisse de sol et si jusqu’à fa et la. Puis le doigt 2 se pose sur le sol.",
        12: "L’auriculaire monte chercher le mi entre les accords. Puis la main descend sur la et do.",
      },
    },
  },
};

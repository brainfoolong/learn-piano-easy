/** The guide of *Dies irae* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Dies irae est un chant latin du Moyen Âge sur le Jugement dernier. " +
    "Pendant des siècles, on l’a chanté à la messe de requiem. " +
    "Depuis Berlioz, les compositeurs le citent dès que leur musique parle de la mort. " +
    "Le générique du film « Shining » (1980), de Stanley Kubrick, est construit sur lui.",
  funFact:
    "Ses premiers mots signifient « jour de colère, ce jour-là ». " +
    "Le premier vers se termine sur le monde réduit en cendres.",
  versions: {
    common: {
      practice: [
        "Joue les trois premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main droite seule à partir de la mesure 8, où le pouce descend sur le la.",
        "Maintenant, la main gauche seule. Elle reste en place, l’auriculaire sur le ré.",
        "Joue les sept premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Joue lentement et régulièrement, comme des moines qui chantent dans une église de pierre.",
        "Le pouce droit est sur le do. Chaque note jusqu’au sol se trouve sous un doigt.",
        "Pendant que le ré est tenu, glisse le pouce vers le bas jusqu’au la, prêt pour la dernière phrase.",
      ],
      tricky: {
        1: "Balance entre les doigts 4 et 3 pour fa, mi et fa. Garde le poignet immobile.",
        4: "Le doigt 4 joue deux fois le fa, puis le doigt 5 atteint le sol. Ne bouge pas la main.",
        10: "Balance entre les doigts 4 et 5 pour mi, fa et mi. L’auriculaire joue le fa.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Elle reste en place, l’auriculaire sur le ré.",
        "Joue le premier passage de la mélodie à la main droite seule.",
        "Joue la première phrase à deux mains, et enfonce les trois notes de chaque accord d’un seul geste.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Sur le deuxième temps, l’accord passe à deux notes. Le mi de la mélodie sonne ainsi bien clair.",
        "Au deuxième passage, la main gauche joue ré, puis la. Sens le lent balancement à trois temps.",
        "Laisse sonner le dernier accord de ré mineur jusqu’à ce qu’il s’éteigne.",
      ],
      tricky: {
        1: "Enfonce ré, fa et la ensemble. Puis relâche le fa sur le deuxième temps, et garde ré et la enfoncés.",
        4: "La main gauche joue fa et la avec les doigts 3 et 1. Le doigt 5 de la main droite atteint le sol.",
        12: "Profite du ré tenu à la mesure 11 pour remonter le pouce droit sur le do.",
      },
    },
    epic: {
      practice: [
        "Joue les accords brisés seuls, jusqu’à ce qu’ils roulent tout seuls : grave, milieu, aigu, milieu.",
        "Joue seuls les accords de deux notes de la main droite, et enfonce les deux notes d’un seul geste.",
        "Joue la première phrase à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque barre de mesure. Relève-la au moment où sonne la nouvelle note de basse.",
        "Les quartes et les quintes à vide ont un son creux et ancien. " +
          "Il y a mille ans, les chanteurs harmonisaient déjà le plain-chant ainsi.",
        "Garde les doigts 1 et 5 dans la même position, et déplace toute la main d’une note à l’autre.",
      ],
      tricky: {
        13: "Le pouce reste sur le la pendant deux accords, puis descend au fa. Au début, seul l’auriculaire bouge.",
        16: "Le pouce descend du si bémol au la, et l’auriculaire descend fa, mi, ré.",
        17: "La main monte à chaque temps : fa et do, la et mi, puis si bémol et fa.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse de cloches seule : frappe l’octave grave, puis lève la main et arrive sur l’accord.",
        "Joue seules les octaves de la main droite, et garde la main dans la même position.",
        "Dans la seconde moitié, joue la mélodie de la main gauche seule, tout au fond de la basse.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner la dernière octave.",
      ],
      tips: [
        "Frappe chaque octave grave comme une cloche d’église, puis laisse la pédale porter le son.",
        "Maintenant, la mélodie chante à la basse. Joue doux les accords aigus, comme des cloches lointaines.",
        "Lève la main après l’accord, et laisse tomber le pouce sur le la grave.",
      ],
      tricky: {
        2: "Quitte tôt l’octave de mi, pour que la main ait le temps de descendre au do.",
        5: "Les octaves descendent fa, mi, ré. Garde les doigts 1 et 5 bloqués dans la même position.",
        11: "Ici, les deux mains jouent des accords. Lève chaque main avant que la mélodie descende à la basse.",
      },
    },
  },
};

/** The guide of *Canon in D* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Johann Pachelbel a écrit ce canon vers 1700, pour trois violons sur une ligne de basse. " +
    "La basse joue les mêmes huit notes encore et encore, et chaque violon entre à son tour avec la même mélodie. " +
    "Le morceau est resté oublié jusqu’à sa première édition par Gustav Beckmann, en 1919. " +
    "Le film « Des gens comme les autres » l’a rendu célèbre en 1980.",
  funFact:
    "Le canon était presque inconnu jusqu’à la fin des années 1960. Aujourd’hui, c’est l’un des morceaux les plus joués aux mariages.",
  versions: {
    common: {
      practice: [
        "Joue la main droite seule, lentement. Le morceau attend chaque note.",
        "Maintenant, la main gauche seule. Les mêmes huit notes reviennent trois fois.",
        "Joue les quatre premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "La mélodie descend une touche à la fois, du doigt 5 jusqu’au pouce.",
        "Chaque note de basse dure deux temps. Laisse-la sonner sous la mélodie.",
        "La mélodie avance maintenant en noires, deux fois plus vite qu’avant. Compte quatre temps par mesure.",
      ],
      tricky: {
        5: "Le doigt 5 revient sur le do du haut, et la mélodie redescend.",
        7: "Décale la main d’une touche vers le bas : le doigt 2 passe de sol à fa, et le pouce prend mi.",
        8: "Le doigt 3 joue fa et le doigt 2 joue ré. Le pouce est ainsi prêt pour le do.",
      },
    },
    rare: {
      practice: [
        "Joue la main droite seule sur toute la ligne descendante, lentement.",
        "Joue la main gauche seule : une note grave avec le doigt 5, puis une plus aiguë avec le pouce.",
        "Joue seules les tierces des mesures 13 et 14, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La basse parcourt les mêmes huit notes tout au long du morceau. Garde-la douce et régulière.",
        "La mélodie avance maintenant sur chaque temps, pendant que la basse garde son pas régulier.",
        "Dans le canon, les violons jouent la même mélodie à des moments différents. Ici, deux d’entre eux sonnent ensemble, à la tierce.",
      ],
      tricky: {
        6: "Le doigt 4 descend du do dièse au si, et la main glisse d’une touche vers le bas.",
        8: "Le doigt 3 prend sol et le doigt 2 prend mi. Le pouce est ainsi prêt pour le ré.",
        12: "Termine la mesure avec le pouce sur sol. Le doigt 5 monte ensuite jusqu’au fa dièse.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les sixtes de la main droite. Garde la main dans une seule position, et déplace-la d’un bloc.",
        "Joue seul le trait des mesures 13 à 16, lentement, avec le doigté écrit.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que les notes longues de la mélodie chantent au-dessus.",
        "Le pouce et le doigt 4 jouent chaque sixte. La mélodie est la note du haut.",
        "Relève la pédale pour le trait, pour que chaque note rapide reste nette.",
      ],
      tricky: {
        6: "Fais glisser la sixte vers le bas, une touche à la fois. Le pouce et le doigt 4 gardent leur position.",
        16: "Les doigts 3 et 2 passent par-dessus le pouce pendant que le trait descend. Garde le poignet immobile.",
        17: "Depuis le dernier mi, ouvre la main sur ré, fa dièse et le ré aigu, d’un seul geste.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse en octaves seule : tiens chaque octave, puis lève la main pour la suivante.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue seules les doubles croches de la main gauche, jusqu’à ce qu’elles coulent.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "À la main gauche, garde le pouce et l’auriculaire à une octave d’écart, et déplace la main d’un bloc.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
        "Joue les doubles croches de la main gauche douces, légères et régulières, sous la mélodie.",
      ],
      tricky: {
        2: "Le pouce reste sur fa dièse pour les deux accords. Bouge seulement les doigts 3 et 5.",
        5: "La main gauche monte d’un saut jusqu’à l’octave de ré, pendant que le pouce droit passe de mi à fa dièse.",
        9: "Ici, la main gauche commence ses doubles croches. Commence lentement, et laisse la mélodie avancer au-dessus.",
      },
    },
  },
};

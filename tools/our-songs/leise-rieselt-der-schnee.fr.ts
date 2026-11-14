/** The guide of *Leise rieselt der Schnee* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Le titre allemand Leise rieselt der Schnee veut dire « La neige tombe sans bruit ». " +
    "C’est l’un des chants de l’Avent les plus connus en langue allemande. " +
    "Le pasteur Eduard Ebel en a écrit les paroles en 1895, et son livre les a imprimées sans mélodie. " +
    "Beaucoup de recueils attribuent aussi la mélodie à Ebel, mais aucune source ne le prouve, et d’autres y voient un air populaire.",
  funFact:
    "Chacun de ses trois couplets s’ouvre sur une petite image : la neige qui tombe sans bruit, les cœurs chaleureux et la nuit sainte qui approche.",
  versions: {
    common: {
      practice: [
        "Joue les deux premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 1 à 8 à la main droite seule. C’est le couplet entier, une fois.",
        "Maintenant, la main gauche seule. Elle garde une position par mesure, deux au plus.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le pouce droit commence sur le do central, et le doigt 3 prend le premier mi.",
        "Le doigt 4 prend le do que le pouce tenait à la mesure 2. Puis la main descend jusqu’à ce que le pouce soit sur le sol.",
        "Chaque phrase finit sur une note longue et un court silence. Laisse sonner la note, puis respire, comme la neige qui tombe.",
      ],
      tricky: {
        7: "Le doigt 4 tient le ré, puis le pouce tombe deux fois sur le la. Garde le la rapide léger.",
        9: "Le couplet recommence. Pendant le silence, lève le doigt 3 du do et pose-le sur le mi.",
        15: "Le même petit saut qu’à la mesure 7 : un ré long, puis un la rapide au pouce.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les notes de chaque accord.",
        "Joue la basse de valse du deuxième couplet seule : note grave, accord, accord.",
        "Joue le premier couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Le pouce gauche reste sur le sol pendant tout le premier couplet. Seuls les autres doigts bougent.",
        "Dans la basse de valse, joue la note grave un peu plus fort que les accords qui la suivent.",
        "Le do dièse est la seule touche noire du morceau. Laisse le pouce y glisser, puis en repartir.",
      ],
      tricky: {
        7: "Le doigt 4 tient le ré, puis le pouce tombe deux fois sur le la. Pendant ce temps, la main gauche change d’accord à la demi-mesure.",
        9: "Le couplet recommence, et la valse démarre. Pendant le silence, monte le doigt 3 du do au mi.",
        15: "Le la rapide revient, cette fois sur la basse de valse. Compte le ré long jusqu’au bout avant de jouer le la.",
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
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
        "Change de pédale à chaque demi-mesure, quand la main gauche reprend sa formule.",
      ],
      tricky: {
        7: "Le la rapide tombe sur le pouce pendant que la main gauche parcourt l’accord de ré mineur. Garde la basse régulière en dessous.",
        13: "Les paires tournent autour du do dièse. Les doigts 1 et 3 prennent la et do dièse, puis les doigts 2 et 4 reviennent sur si et ré.",
        14: "La main s’ouvre d’une tierce à une sixte, avec le pouce sur le mi et le doigt 3 sur le do.",
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
        "Relâche l’octave de ré un instant plus tôt, pour que la main arrive à temps sur le la rapide.",
      ],
      tricky: {
        9: "Les deux mains changent de formule. La main droite joue des octaves, et la gauche commence son premier arpège sur deux octaves.",
        12: "Tiens l’octave de sol pendant que la main gauche monte jusqu’au mi du haut, puis redescend.",
        14: "La même montée qu’à la mesure 12, cette fois sous l’octave de do. Laisse le doigt 3 passer en souplesse par-dessus le pouce.",
      },
    },
  },
};

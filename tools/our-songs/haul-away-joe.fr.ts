/** The guide of *Haul Away Joe* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Haul Away Joe est un court chant de marins, qu’on chantait en halant un cordage. " +
    "R. R. Terry l’a publié en 1921 comme chant pour haler l’écoute de misaine.",
  funFact:
    "Un couplet de l’édition de Terry parle du roi Louis de France, qui a perdu la tête pendant la Révolution.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 4 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. C’est là que le refrain descend jusqu’au ré grave.",
        "Maintenant, la main gauche seule. Elle tient deux touches et en change au plus deux fois par mesure.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le doigt 5 prend le ré et le do en haut. Le pouce joue seulement le fa dièse de la mesure 3.",
        "Compte six temps par mesure : long, court, long, court. C’est le geste de tirer sur la corde.",
        "Le ré grave de la mesure 8 se joue avec le pouce. Ensuite, la main reste au-dessus des touches de ré à la jusqu’à la fin.",
      ],
      tricky: {
        2: "Le doigt 5 joue trois fois le do. Ensuite, le doigt 3 prend le la, et le doigt 2 attend au-dessus du sol.",
        11: "Les doigts descendent du sol au ré, une touche à la fois. La main gauche tient ré et sol.",
        14: "Les doigts 4 et 5 se balancent entre sol et la. Ensuite, le doigt 3 descend sur le fa.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une longue note grave, puis un accord court.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Chaque demi-mesure de la main gauche a une note longue et un accord court. Sens l’élan du halage : long, court.",
        "Les doigts 1 et 5 enfoncent les sixtes d’un seul geste. Ensuite, le doigt 5 reste sur la note du haut.",
        "Termine sur ré et fa ensemble. Les doigts 1 et 3 les enfoncent d’un seul geste.",
      ],
      tricky: {
        4: "Les doigts 3, 4 et 5 montent sur la, si et do. Ce si est la touche blanche, pas le si bémol.",
        5: "Ouvre les doigts 1 et 5 sur fa et ré pour la sixte. Ensuite, le doigt 5 rejoue le ré seul.",
        9: "La mélodie monte par ré, fa et la. Sol et fa sont des croches rapides, alors compte-les bien régulièrement.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule, jusqu’à ce que les accords brisés coulent tout seuls.",
        "Joue les mesures 9 à 16 à la main droite seule, et passe le pouce dessous en montant.",
        "Joue seules les tierces et les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvelle note de basse, deux fois par mesure.",
        "Après le fa, passe le pouce dessous pour le sol. Les doigts 2, 3 et 4 atteignent ensuite la, si et do.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        13: "Descends depuis le ré avec les doigts 5 à 1. Ensuite, le doigt 3 passe par-dessus le pouce pour le fa.",
        16: "Monte l’accord de ré mineur avec les doigts 1, 2, 3 et 5. La main s’ouvre largement pour le ré aigu.",
        20: "Les doigts 1 et 5 tiennent chaque sixte et glissent vers le haut, une touche à la fois. Garde la même position de main.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : une octave sur le temps, puis deux fois un accord. " +
          "Chacun est suivi d’un court silence pour sauter.",
        "Joue seuls les arpèges de la main gauche. Le pouce passe dessous, et le doigt 3 passe par-dessus.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Profite du court silence après chaque octave et chaque accord pour sauter au suivant.",
        "Laisse les arpèges rouler comme des vagues sous la mélodie.",
        "Joue la note du haut de chaque accord un peu plus fort, pour que la mélodie ressorte bien.",
      ],
      tricky: {
        4: "La main gauche saute de l’octave grave de la à un accord de la, mi et la. La main droite monte par la, si et do.",
        20: "Chaque accord déplace toute la main d’une touche vers le haut ou vers le bas. Garde sa position, et laisse le doigt du haut mener.",
        23: "La main passe de sol majeur à la majeur d’un seul mouvement. Le pouce arrive sur le do dièse, une touche noire.",
      },
    },
  },
};

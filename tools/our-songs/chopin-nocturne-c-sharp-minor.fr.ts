/** The guide of *Nocturne in C-sharp minor* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Chopin a écrit ce nocturne en 1830. Il n’a été publié qu’en 1875, longtemps après sa mort. " +
    "Il l’a envoyé à sa sœur Ludwika pour qu’elle le travaille avant son deuxième concerto pour piano. " +
    "On l’entend dans le film « Le Pianiste », et il ouvre l’album de sa bande originale.",
  funFact:
    "En 1939, le pianiste Władysław Szpilman le jouait en direct à la radio polonaise. " +
    "L’attaque allemande sur Varsovie a alors coupé l’émission.",
  versions: {
    common: {
      practice: [
        "Joue les deux premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 3 à 10 à la main droite seule. La main commence plus haut, le doigt 5 sur le la aigu.",
        "Maintenant, la main gauche seule. Elle ne bouge jamais, et chaque doigt garde sa touche.",
        "Joue les quatre premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "C’est un chant de la nuit. Joue doux, et laisse chanter chaque note longue.",
        "Profite du court silence après le la grave pour monter la main jusqu’au la aigu.",
        "Profite du silence après le ré pour descendre la main. Le doigt 3 arrive alors sur le do.",
      ],
      tricky: {
        1: "Commence avec le doigt 5 sur le mi aigu et le doigt 4 sur le ré. La main gauche tient la et mi ensemble.",
        3: "La main est montée. Le doigt 5 joue le la aigu, et le pouce est maintenant sur le ré.",
        11: "La main est redescendue. Le doigt 3 joue le do, et le pouce finit sur le la.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Une note grave tombe sur le temps, et un accord de deux notes lui répond.",
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 12 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "La mélodie saute d’une octave entière. Le pouce joue le la grave, et le doigt 5 le la aigu.",
        "Garde la pédale seulement dans les mesures à un seul accord, et relève-la à la barre de mesure suivante.",
        "Profite du silence après le mi pour descendre la main droite. Le doigt 3 arrive ainsi sur le do.",
      ],
      tricky: {
        1: "Le doigt 5 joue le mi aigu. La main gauche joue la sur le temps, puis do et mi ensemble.",
        3: "Après le saut d’octave, le doigt 5 arrive sur le la aigu. Regarde la touche, pas la main.",
        13: "La main est descendue pendant le silence. Le doigt 3 joue le do, et le doigt 5 le mi.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule, jusqu’à ce que ses accords brisés roulent bien réguliers, du grave à l’aigu.",
        "Joue très lentement le motif rapide de la mesure 3, à la main droite seule.",
        "Joue les quatre premières mesures à deux mains, lentement.",
        "Joue seules les tierces de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Maintenant, joue tout le morceau à deux mains, au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvelle note de basse, deux fois par mesure.",
        "Le motif qui suit le long si est un ajout de notre version. Joue-le librement, comme un chanteur qui reprend son souffle.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        7: "Le doigt 3 tient le ré, puis les doigts 2 et 1 descendent jusqu’au si. La main gauche continue de rouler si, fa dièse et ré.",
        12: "À la fin de la mesure, le pouce descend jusqu’au la dièse. Puis les doigts 3 et 5 prennent la première tierce de la mélodie.",
        17: "Joue la dièse et do dièse avec les doigts 1 et 3, puis do dièse et mi avec les doigts 2 et 4. " +
          "La main gauche ramène le morceau en si mineur.",
      },
    },
    legendary: {
      practice: [
        "Joue seuls les arpèges de la main gauche. En montant, le doigt 3 passe par-dessus le pouce.",
        "Joue très lentement le motif rapide de la mesure 3, à la main droite seule.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Laisse les arpèges onduler tout en douceur sous la mélodie qui chante, comme de l’eau la nuit.",
        "Profite du court silence à la fin de chaque arpège pour sauter vers la note grave.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
      ],
      tricky: {
        3: "Tiens le do dièse aigu avec le doigt 5. Puis joue le motif avec légèreté : si, la, puis fa dièse avec le pouce.",
        8: "La main gauche monte depuis le fa dièse grave, puis depuis le sol dièse grave. Saute vers le bas pendant le court silence.",
        15: "Ouvre la main sur quatre notes, d’un do dièse à l’autre. Puis commence le motif avec le doigt 4.",
      },
    },
  },
};

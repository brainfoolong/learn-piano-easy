/** The guide of *Lacrimosa* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart est mort en 1791, alors qu’il écrivait son « Requiem ». " +
    "Son élève Franz Xaver Süssmayr l’a achevé, et Breitkopf & Härtel en a imprimé la partition en 1800. " +
    "Le film « Amadeus » raconte comment Mozart a écrit ce requiem.",
  funFact:
    "L’esquisse du Lacrimosa de la main de Mozart s’arrête après ses huit premières mesures.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. Elles répondent à la mélodie par une nouvelle phrase.",
        "Maintenant, la main gauche seule. Elle garde chaque position une demi-mesure.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Lève la main juste avant le fa aigu. Puis le doigt 5 s’y pose en douceur.",
        "Chaque paire de notes qui descend sonne comme un soupir. Joue la première note un peu plus fort que la seconde.",
        "Chaque doigt garde sa propre touche. Le doigt 2 joue toujours do dièse.",
      ],
      tricky: {
        1: "Ouvre la main droite du la jusqu’au fa. Lève-la un instant avant que le doigt 5 joue le fa.",
        7: "Au milieu de la mesure, la main gauche passe de la à sol. Le doigt 5 prend le sol grave.",
        15: "Les doigts 5, 4 et 2 descendent de fa à do dièse. Sur la note longue, la main gauche passe au la.",
      },
    },
    rare: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main gauche seule. Chaque accord vient deux fois : long, puis court.",
        "Joue les douze premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Compte six temps dans chaque mesure. La main gauche joue sur les temps 1, 3, 4 et 6.",
        "Laisse la main gauche se balancer tranquillement, comme une barque lente, et joue-la plus doux que la mélodie.",
        "Le doigt 5 monte chercher le sol le temps d’une note, puis la main revient.",
      ],
      tricky: {
        11: "Joue deux fois le mi avec le doigt 4. Lève un peu le doigt entre les deux notes.",
        12: "Étire le doigt 5 jusqu’au sol, puis laisse les doigts 4 et 2 retomber sur mi et do dièse.",
        17: "Le la grave reste. Le pouce quitte le ré, et le doigt 2 joue le do dièse juste en dessous.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule. Chaque temps commence sur la note de basse, puis se balance entre deux notes plus hautes.",
        "Joue seules les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les douze premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvelle note de basse, deux fois par mesure.",
        "Le si bémol de la basse frotte contre le la tenu. Ce frottement triste est voulu.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        13: "Les paires s’ouvrent de la tierce à la sixte. Les doigts 2 et 5 prennent la et fa ensemble.",
        25: "La mélodie saute d’une octave vers le haut. Déplace le pouce du la grave au la aigu, en un seul arc souple.",
        29: "Au milieu de cette mesure, le doigt 2 reste sur si bémol, et le pouce ajoute sol en dessous.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : l’octave, deux notes rapides, puis un court silence pour sauter.",
        "Joue seules les octaves de la main droite. Garde la main ouverte, le pouce et l’auriculaire prêts.",
        "Joue les douze premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Profite du court silence à la fin de chaque temps pour sauter à l’octave suivante.",
        "Laisse l’auriculaire chanter un peu plus fort la note du haut de chaque octave.",
        "Joue le dernier accord doux, et tiens-le jusqu’à ce que le son s’éteigne.",
      ],
      tricky: {
        13: "Les paires s’ouvrent de la tierce à la sixte. Les doigts 2 et 5 prennent la et fa ensemble.",
        25: "Les octaves commencent. Ouvre la main, le pouce sur le la grave et l’auriculaire sur le la au-dessus.",
        27: "Profite du court silence après le la pour sauter jusqu’à l’octave sur fa.",
      },
    },
  },
};

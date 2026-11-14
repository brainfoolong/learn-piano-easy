/** The guide of *Eine kleine Nachtmusik* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart a terminé cette sérénade pour cordes à Vienne en 1787. " +
    "Elle n’a été publiée qu’en 1827, plus de trente ans après sa mort. " +
    "Dans le film « Amadeus » (1984), le vieux Salieri la joue, et un prêtre reconnaît l’air tout de suite.",
  funFact:
    "Le titre allemand signifie « une petite sérénade ». " +
    "Mozart l’a inscrit lui-même dans le catalogue de ses œuvres.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 4 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule, une fois la main déplacée vers sa nouvelle place.",
        "Maintenant, la main gauche seule. Elle tient sol et ré, ou ré seul, pendant des mesures entières.",
        "Joue à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le pouce sur le ré, le doigt 2 sur le sol, le doigt 4 sur le si et le doigt 5 sur le ré aigu.",
        "Joue le sol court et brillant, comme si les cordes le lançaient d’un coup sec.",
        "Profite du silence après le ré aigu pour placer les doigts 2, 3 et 5 sur fa dièse, la et do.",
      ],
      tricky: {
        5: "La main s’est déplacée pendant le silence. Le doigt 5 joue maintenant le do, et le doigt 3 le la.",
        7: "Descends do, la et fa dièse avec les doigts 5, 3 et 2, puis remonte au la.",
        13: "Monte la main pendant le silence de la mesure 12. Le doigt 3 arrive sur le si, et le pouce sur le sol.",
      },
    },
    rare: {
      practice: [
        "Joue la mélodie à la main droite seule. Le morceau attend chaque note.",
        "Joue la main gauche seule. À chaque temps, elle se balance entre la fondamentale et la quinte.",
        "Joue la mélodie à deux mains, lentement.",
        "Joue la réponse à deux mains. La mesure 11 avance en croches.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Compte la main gauche en noires. Chaque note de la mélodie tombe avec elle sur un temps.",
        "Monte ré, fa dièse, la et do avec les doigts 1, 2, 3 et 5, puis redescends.",
        "La réponse revient sur sol. Laisse la dernière note sonner toute la mesure.",
      ],
      tricky: {
        5: "Déplace la main pendant le silence de la mesure 4. Le doigt 5 arrive sur le do, et le doigt 3 sur le la.",
        7: "Descends do, la et fa dièse avec les doigts 5, 3 et 2, puis remonte au la.",
        13: "Monte la main pendant le silence de la mesure 12. Le doigt 3 arrive sur le si, et le pouce sur le sol.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces et les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur et bien régulière, pour que la mélodie chante au-dessus.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
        "Change de pédale à chaque barre de mesure, au moment où sonne la nouvelle note de basse.",
      ],
      tricky: {
        16: "Lève la main après la dernière tierce, puis descends sur la et ré avec les doigts 1 et 4.",
        17: "La réponse commence haut, sur le la, avec le doigt 3. Profite du silence qui précède pour monter.",
        24: "Quitte le la pendant le silence, puis arrive sur si, ré et sol avec les doigts 1, 2 et 5.",
      },
    },
    legendary: {
      practice: [
        "Joue seules les octaves de la main droite. Garde le pouce et le doigt 5 écartés, et déplace toute la main.",
        "Joue seuls les traits des mesures 11 et 15, lentement, jusqu’à ce qu’ils coulent.",
        "Joue la main gauche seule. Elle saute entre des octaves sur la fondamentale et sur la quinte.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Les octaves aux deux mains sonnent comme tout un orchestre à cordes. Joue-les avec fermeté.",
        "En montant, le pouce passe dessous après le fa dièse. En descendant, le doigt 3 passe par-dessus le sol.",
        "Après le trait, lève la main pendant le silence, et arrive sur les quatre notes de l’accord de sol majeur.",
      ],
      tricky: {
        2: "Quitte l’octave de sol, puis saute vers le bas sur l’octave de ré. Garde la main ouverte.",
        3: "Quatre octaves à la suite : sol, ré, sol et si. Lève un peu la main après chacune.",
        14: "Saute vers le bas de l’octave de si à l’octave de sol, puis prépare-toi pour le trait.",
      },
    },
  },
};

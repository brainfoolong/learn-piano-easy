/** The guide of *Carol of the Bells* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "« Chtchedryk » est un chant ukrainien du Nouvel An, et son nom vient du « soir généreux ». " +
    "Mykola Leontovytch, compositeur, chef d’orchestre et pédagogue ukrainien, l’a construit sur un motif de quatre notes à 3/4. " +
    "Il a été chanté pour la première fois en décembre 1916, à Kiev. " +
    "Plus tard, Peter J. Wilhousky en a fait le chant anglais Carol of the Bells.",
  funFact:
    "Wilhousky lui a donné des paroles sur les cloches, car la mélodie lui rappelait des clochettes à main.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule : do, si, do, la, encore et encore.",
        "Joue les mesures 12 à 16 à la main droite seule, en montant jusqu’au la aigu puis en redescendant.",
        "Maintenant, la main gauche seule. Elle garde une position par mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Les quatre notes tintent comme de petites cloches. Joue-les légères et égales.",
        "Le pouce prend le dernier do, pour que l’auriculaire puisse monter jusqu’au la aigu.",
        "Sur le troisième mi, remplace le doigt 2 par le doigt 3. La main reste où elle est.",
      ],
      tricky: {
        12: "Joue le dernier do avec le pouce, et profite du court silence pour ouvrir la main vers le la aigu.",
        18: "Les doigts 4 et 5 se balancent entre ré et mi, puis le doigt 3 arrive sur do.",
        20: "Comme à la mesure 18. Tiens le do toute la durée de sa blanche, avant le retour des cloches.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Enfonce ensemble les trois notes de chaque accord.",
        "Joue les mesures 17 à 20 à la main droite seule, et lève la main après le sol dièse.",
        "Joue les douze premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La main gauche laisse de côté le do, pour ne jamais frotter contre le si de la mélodie.",
        "Joue le dernier la avec le doigt 3. Le pouce est alors libre pour le mi grave.",
        "Joue le sol dièse bref, lève la main, et pose le pouce sur la.",
      ],
      tricky: {
        12: "Le pouce prend le dernier do, pour que l’auriculaire atteigne le la aigu à la mesure suivante.",
        17: "Joue le sol dièse bref, puis lève la main et pose le pouce sur la.",
        19: "La même montée qu’à la mesure 17. Lève la main après le sol dièse, et garde une pulsation régulière.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule, jusqu’à ce qu’elle se balance toute seule : grave, monte, monte, sommet, descend, descend.",
        "Joue seules les sixtes et les tierces de la main droite, en gardant ensemble les deux notes de chaque paire.",
        "Joue la montée des mesures 17 à 20 à la main droite seule. Le pouce passe dessous sur la.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La basse descend d’une note à chaque mesure, du la jusqu’au mi, pendant que les cloches tintent au-dessus.",
        "La mélodie est la note du haut de chaque sixte : laisse le doigt du haut mener.",
        "Après le sol dièse, passe le pouce dessous jusqu’au la, et la main continue de monter.",
      ],
      tricky: {
        9: "La main saute des sixtes graves jusqu’à sol et mi. Lève-la pendant le court silence à la fin de la mesure 8.",
        10: "Le pouce joue sol, fa, sol et mi, pendant que les doigts 5 et 4 font sonner la mélodie au-dessus.",
        19: "Passe le pouce dessous après le sol dièse, sans à-coup dans le son.",
      },
    },
    legendary: {
      practice: [
        "Joue seules les octaves de la main gauche. Elles font sonner le même motif de quatre notes, deux octaves plus bas.",
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Les deux mains font sonner le même motif, à deux octaves d’écart, comme une grosse cloche et une petite.",
        "La main gauche poursuit le motif de quatre notes sous la mélodie. Ainsi, les cloches ne s’arrêtent jamais.",
        "Les deux mains montent ensemble. Le pouce droit passe dessous, et le doigt 3 de la main gauche passe par-dessus.",
      ],
      tricky: {
        6: "La main droite fait sonner son mi grave entre les notes de la mélodie, pendant que la main gauche saute pour la basse stride.",
        15: "Garde l’accord sur sol léger, puis joue mi et ré avec les doigts 5 et 4. Lève ensuite la main pour l’accord suivant.",
        16: "La main droite répète un même accord pendant que la main gauche saute. Laisse sonner le la du haut.",
      },
    },
  },
};

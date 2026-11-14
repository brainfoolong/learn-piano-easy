/** The guide of *Habanera* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Carmen chante cet air à sa première apparition dans « Carmen », l’opéra de Georges Bizet créé à Paris en 1875. " +
    "Bizet a pris la mélodie dans une chanson de Sebastián Iradier, qu’il croyait traditionnelle. " +
    "Le film « La Chouette Équipe » (1976) utilise la musique de « Carmen » d’un bout à l’autre.",
  funFact:
    "La habanera est une danse de Cuba. Elle tire son nom de La Havane, la capitale.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 5 à la main droite seule. Le morceau attend chaque note.",
        "Joue la main droite seule de la mesure 5 à la mesure 9, plus bas, dans la nouvelle position.",
        "Maintenant, la main gauche seule. Elle garde une position par mesure et ne se déplace jamais.",
        "Joue les dix premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Chaque doigt joue une touche, du doigt 5 jusqu’au pouce. La mélodie descend en glissant, pas à pas.",
        "Lève la main un instant après le si bémol, et pose le doigt 5 sur le la.",
        "Joue la descente lentement et en souplesse, comme un chat qui s’étire.",
      ],
      tricky: {
        5: "Ici, la main descend. Lève-la après le si bémol, puis pose le doigt 5 sur le la.",
        15: "Le même déplacement qu’à la mesure 5 : lève la main après le si bémol, puis pose le doigt 5 sur le la.",
        20: "Après le silence, le doigt 5 joue le la et le doigt 3 joue le sol. Le doigt 4 attend.",
      },
    },
    rare: {
      practice: [
        "Joue les mesures 2 à 6 à la main droite seule, lentement, et compte trois temps par mesure.",
        "Joue les mesures 7 à 9 à la main droite seule, là où arrive le petit gruppetto.",
        "Joue la main gauche seule. Elle garde ses cinq doigts sur ré, mi, fa, sol et la.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Un la long, puis deux courts. Pense « ta-a, ta-ta ».",
        "Le gruppetto fa, sol, fa se joue avec les doigts 2, 3 et 2. Garde-les près des touches.",
        "Lève la main après le si bémol, et pose le doigt 5 sur le la.",
      ],
      tricky: {
        5: "Le doigt 5 arrive sur le la après le déplacement, puis le rejoue deux fois, court et rapide.",
        15: "Comme à la mesure 5 : pose le doigt 5 sur le la, puis joue les deux la courts.",
        20: "Après le silence, le doigt 5 joue le la et le doigt 3 joue le sol. Le doigt 4 attend.",
      },
    },
    epic: {
      practice: [
        "Joue le rythme de habanera à la main gauche seule : long, court, puis deux notes égales.",
        "Joue seules les tierces de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les mesures 1 à 6 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La note courte de la main gauche mène à la mesure suivante. Laisse-la rebondir.",
        "La mélodie est la note du haut de chaque tierce : laisse le doigt du haut mener.",
        "Garde la basse douce et légère, comme des pas de danse sous la voix.",
      ],
      tricky: {
        5: "La main droite descend jusqu’au la pendant que la main gauche commence son long ré. Travaille-les ensemble, lentement.",
        17: "Ici, les tierces tournent vite. Alterne entre le pouce et le doigt 3, et les doigts 2 et 4.",
        20: "Après le silence, les doigts 2 et 4 prennent fa et la. Puis les tierces descendent pas à pas.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : l’octave grave, le la court, puis deux accords.",
        "Joue seules les octaves de la main droite. Garde la main ouverte et déplace-la d’un seul bloc.",
        "Joue le deuxième passage à deux mains, là où la mélodie monte d’une octave.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Regarde l’octave grave, et laisse la main trouver les accords au toucher.",
        "Le pouce et l’auriculaire prennent chaque octave. Fais-les glisser ensemble vers le bas, une touche à la fois.",
        "Joue la note du haut de chaque octave un peu plus fort, pour que la mélodie chante.",
      ],
      tricky: {
        12: "La main droite saute jusqu’à l’octave de ré. Profite du silence de la mesure 11 pour y arriver.",
        17: "Ici, les octaves tournent vite. Garde le poignet souple, et laisse le bras guider la main.",
        21: "Le pouce et l’auriculaire atteignent les touches noires pour le do dièse. Avance un peu la main.",
      },
    },
  },
};

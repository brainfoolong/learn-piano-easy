/** The guide of *Night on Bald Mountain* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Moussorgski a achevé son tableau musical d’un sabbat de sorcières sur le mont Chauve la nuit de la Saint-Jean, le 23 juin 1867. " +
    "Cinq ans après la mort de Moussorgski, Rimski-Korsakov a publié en 1886 son propre arrangement de l’œuvre. " +
    "Le film Fantasia de Walt Disney (1940) l’a rendu célèbre, dans l’arrangement de Leopold Stokowski d’après la version de Rimski-Korsakov.",
  funFact:
    "Avec Sadko de Rimski-Korsakov, qui date lui aussi de 1867, c’est l’un des premiers poèmes symphoniques d’un compositeur russe.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. La main commence un pas plus bas, sur le sol.",
        "Maintenant, la main gauche seule. Elle tient une note pendant toute une mesure.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Joue la mélodie fort et lourd, comme des cuivres qui appellent dans la nuit.",
        "Profite du long silence pour monter la main droite jusqu’au sol.",
        "Pendant que le la sonne, prépare-toi à descendre la main. Le doigt 3 arrive alors sur le fa.",
      ],
      tricky: {
        5: "La main est montée. Le doigt 2 joue le la, et le doigt 3 joue le si bémol.",
        13: "Descends la main droite pour que le pouce se pose sur le ré. Le doigt 3 commence sur le fa.",
        23: "Descends la main droite pendant le silence. Le doigt 3 joue le fa, et le pouce finit sur le ré.",
      },
    },
    rare: {
      practice: [
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main gauche seule. Elle joue sur les temps 1, 3 et 4 de chaque mesure.",
        "Joue les mesures 9 à 16 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Joue la mélodie fort et lourd, comme des cuivres qui appellent dans la nuit.",
        "Compte quatre temps dans chaque mesure. La basse joue sur les temps 1, 3 et 4.",
        "La main gauche ne bouge jamais. Chaque doigt garde sa propre touche.",
      ],
      tricky: {
        5: "La main est montée pendant le silence. Le doigt 2 joue le la, et le doigt 3 joue le si bémol.",
        15: "Descends la main droite pour que le doigt 2 joue le mi. Le doigt 4 joue ensuite le sol.",
        31: "Descends la main droite pour que le pouce arrive sur le ré à la fin de la mesure.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule. Sous la mélodie, elle saute entre deux notes à une octave l’une de l’autre.",
        "Joue le trait de la mesure 4 à la main droite seule. Passe le pouce dessous jusqu’au sol.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Garde la pédale relevée sous la mélodie, pour que chaque octave de la basse reste nette.",
        "Dans le trait, passe le pouce dessous jusqu’au sol, puis monte avec les doigts 2 à 5.",
        "Change de pédale à chaque nouvelle note de basse, deux fois par mesure.",
      ],
      tricky: {
        4: "Passe le pouce dessous jusqu’au sol, puis laisse les doigts 2, 3, 4 et 5 monter jusqu’au ré.",
        17: "La mélodie saute d’une octave vers le haut. Profite du silence juste avant pour déplacer la main.",
        25: "Descends la main d’une octave pendant le silence. Les doigts 3 et 5 prennent la première tierce.",
      },
    },
    legendary: {
      practice: [
        "Joue le trait des mesures 4 et 5 à la main droite seule, très lentement.",
        "Joue la main gauche seule : l’octave, puis deux notes plus rapides.",
        "Joue seules les octaves de la main droite. Garde la main ouverte, le pouce et l’auriculaire prêts.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Le trait tourbillonne vers le haut et vers le bas, comme le vent. Joue-le léger et régulier.",
        "Laisse l’auriculaire chanter un peu plus fort la note du haut de chaque octave.",
        "Joue le dernier accord fort, et tiens-le jusqu’à ce que le son s’éteigne.",
      ],
      tricky: {
        13: "La main gauche saute du ré du bas jusqu’au la et au fa. Profite du court silence pour redescendre d’un saut.",
        14: "La main gauche s’ouvre grand, du sol du bas jusqu’au si bémol. Garde le poignet souple.",
        17: "Les octaves commencent. Ouvre la main, le pouce sur le la et l’auriculaire sur le la du dessus.",
      },
    },
  },
};

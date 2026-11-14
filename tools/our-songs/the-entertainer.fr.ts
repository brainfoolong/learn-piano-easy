/** The guide of *The Entertainer* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Scott Joplin, le roi du ragtime, a publié ce rag à Saint-Louis en 1902. " +
    "Un rag pose une mélodie bondissante et à contretemps sur une basse régulière qui fait « poum-tcha ». " +
    "Voici la première partie, celle que tout le monde fredonne. " +
    "Le film « L’Arnaque » l’a rendu célèbre dans le monde entier en 1973.",
  funFact:
    "Joplin a reçu un prix Pulitzer spécial en 1976, près de soixante ans après sa mort.",
  versions: {
    common: {
      practice: [
        "Joue les deux premières mesures à la main droite seule, jusqu’à ce que le saut du mi au do te paraisse facile.",
        "Joue toute la phrase à la main droite seule.",
        "Joue les huit premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le pouce sur le mi, le doigt 3 sur le do aigu. Garde la main ouverte et laisse-la basculer de l’un à l’autre.",
        "Joue chaque mi court et sautillant. Ce petit silence, c’est le bond du rag.",
        "Les doigts 2 à 5 se posent sur le si, le do, le ré et le mi, côte à côte.",
      ],
      tricky: {
        2: "La main bascule du do jusqu’au mi plus bas, puis revient. Lâche vite chaque touche, pour laisser le temps au saut.",
        9: "Depuis le si, le pouce retombe sur le mi. Garde la main ouverte, et la mélodie recommence.",
        10: "La même mesure à bascule qu’avant : le doigt 3 sur le do, le pouce sur le mi, et des notes courtes.",
      },
    },
    rare: {
      practice: [
        "Joue l’anacrouse et les deux premières mesures à la main droite seule.",
        "Joue la main gauche seule : une note grave, puis un accord, comme une petite marche.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Le ré dièse et le mi se partagent le doigt 2. Fais-le glisser d’une touche vers le haut, dans la mélodie.",
        "La main gauche fait « poum » sur le premier temps et « tcha » sur le troisième, à chaque mesure.",
        "Joue la montée do, ré, ré dièse, mi un peu plus fort à chaque pas.",
      ],
      tricky: {
        2: "Le doigt 2 glisse du ré dièse jusqu’au mi, et l’auriculaire va chercher le do aigu.",
        3: "Garde l’auriculaire au-dessus du do et le doigt 2 au-dessus du mi. Seul le poignet bascule.",
        10: "Après le silence, le doigt 2 saute en bas sur le mi. Regarde la touche avant d’arriver dessus.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule : saute en bas pour la note de basse, puis remonte pour l’accord.",
        "Joue seule la main droite de la deuxième phrase. Un fa dièse y mène la mélodie jusqu’au sol.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Appuie sur la pédale avec chaque note de basse et relève-la pour l’accord, pour que l’accord reste net.",
        "La basse glisse d’une touche vers le bas, du mi au mi bémol. Fais-la bien entendre.",
        "La dernière phrase répète trois fois un petit groupe de notes. Compte les répétitions, pour savoir laquelle tu joues.",
      ],
      tricky: {
        4: "La main gauche saute du fa grave jusqu’à l’accord, pendant que la main droite tient le la et le do.",
        5: "Après le silence, monte la main droite pour que le doigt 2 arrive sur le do, au début de la montée.",
        21: "La montée de la mesure 5 revient. Monte la main pendant le silence, et le doigt 2 prend le do.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : une octave en bas, puis l’accord en haut.",
        "Joue seules les sixtes de la main droite. Le pouce et l’auriculaire bougent ensemble.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Joue la note du haut de chaque sixte un peu plus fort, pour que la mélodie chante.",
        "Les octaves de la basse glissent du mi au mi bémol, puis jusqu’au ré.",
      ],
      tricky: {
        4: "La main gauche saute de l’octave de fa grave jusqu’à l’accord, pendant que la main droite s’ouvre sur le fa, le la et le do.",
        12: "L’accord sur fa revient. Pose d’abord l’octave grave, puis laisse la main rebondir vers le haut.",
        20: "L’accord sur fa revient une troisième fois, avec les mêmes sauts qu’à la mesure 4. Garde une pulsation régulière.",
      },
    },
  },
};

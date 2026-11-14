/** The guide of *Jolly Old Saint Nicholas* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Jolly Old Saint Nicholas est une chanson de Noël née d’un poème d’Emily Huntington Miller. " +
    "Ce poème a paru sous le titre Lilly’s Secret dans le magazine The Little Corporal, en décembre 1865. " +
    "On attribue en général la musique à James R. Murray. " +
    "Elle a été imprimée pour la première fois en 1874, dans un recueil de chansons pour l’école intitulé School Chimes.",
  funFact:
    "Le chef d’orchestre Ray Conniff a enregistré la chanson en 1962, pour son album We Wish You a Merry Christmas.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. Là, la mélodie descend jusqu’au la, puis remonte.",
        "Maintenant, la main gauche seule. Elle garde une position par mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Quatre notes égales sur une même touche. Joue-les légères, comme des pas sur un toit.",
        "Le doigt 2 joue le la à la mesure 5 et le si à la mesure 7. Le reste de la main ne bouge jamais.",
        "Tiens le dernier do pendant les quatre temps, puis lève les deux mains ensemble.",
      ],
      tricky: {
        2: "Le doigt 5 quitte le mi, et le doigt 4 joue trois fois le ré. Tiens le dernier ré deux temps.",
        10: "Comme à la mesure 2. En dessous, la main gauche passe à ré et sol.",
        15: "Les doigts 4, 3, 4 et 5 jouent ré, do, ré et mi. Puis le doigt 3 descend sur le dernier do.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les notes de chaque accord.",
        "Joue la main gauche du deuxième passage seule : une note de basse, puis son accord.",
        "Joue le premier passage à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Tiens chaque accord en jouant doux, pour que les notes répétées de la mélodie restent claires au-dessus.",
        "La main gauche lâche le fa au milieu de la mesure. Au-dessus, la main droite monte jusqu’au mi.",
        "La note de basse tombe sur le premier temps, et l’accord sur le troisième. Compte jusqu’à quatre dans chaque mesure.",
      ],
      tricky: {
        2: "Le doigt 4 joue trois fois le ré, pendant que la main gauche tient un accord de septième sur sol, sans le si.",
        10: "Comme à la mesure 2. Garde les ré répétés égaux et légers.",
        15: "Les doigts 4, 3, 4 et 5 jouent ré, do, ré et mi. Au milieu de la mesure, la main gauche lâche le fa.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seuls les accords brisés du deuxième passage, et lève la main à chaque silence.",
        "Joue le premier passage à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie sonne au-dessus comme un grelot de traîneau.",
        "Les deux mains se lèvent pendant le silence. La main droite saute d’une octave vers le haut, et la main gauche descend sur un do grave.",
        "Change de pédale à chaque demi-mesure, quand la main gauche reprend sa formule.",
      ],
      tricky: {
        17: "La main droite arrive une octave plus haut, sur le mi, et la main gauche commence ses accords brisés sur le do grave.",
        19: "Le doigt 3 joue quatre fois le do aigu, pendant que la main gauche se lève sur le silence et retombe sur le do.",
        25: "Comme à la mesure 17, cette fois après le long ré. Pose le doigt 5 sur le mi aigu.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave grave, puis remonte pour l’accord.",
        "Joue les mesures 4 et 5 à la main droite seule, et garde le trait rapide léger.",
        "Joue les arpèges du deuxième passage à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Après le long mi, le trait rapide descend comme le père Noël dans la cheminée. Joue-le plus léger que la mélodie.",
        "Garde le pouce et l’auriculaire écartés d’une octave, et laisse le poignet rebondir.",
      ],
      tricky: {
        21: "Lève la main un instant, puis descends en octaves de mi à la. Garde la main en position d’octave pendant le trajet.",
        29: "La même descente vers le la qu’à la mesure 21, pendant que la main gauche monte un arpège de fa en dessous.",
        31: "Les octaves avancent sur ré, do, ré et mi. Puis la main se lève et arrive sur l’accord de quatre notes.",
      },
    },
  },
};

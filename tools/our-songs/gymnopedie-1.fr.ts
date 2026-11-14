/** The guide of *Gymnopédie No. 1* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Erik Satie a terminé ses trois « Gymnopédies » en 1888. " +
    "La première a paru dans une revue l’été de la même année. " +
    "Elle porte l’indication « Lent et douloureux ». " +
    "Le film « La Famille Tenenbaum » (2001) l’utilise.",
  funFact:
    "Claude Debussy, un ami de Satie, a plus tard orchestré la première et la troisième Gymnopédie.",
  versions: {
    common: {
      practice: [
        "Joue la main gauche seule. Elle tient une quinte à vide dans chaque mesure.",
        "Joue les mesures 5 à 8 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Joue les quintes doux et laisse-les sonner. Elles se balancent comme une barque lente.",
        "Lève le pouce du si un peu plus tôt. Il descend alors au la à temps.",
        "Ralentis un peu à la fin, et laisse le dernier do s’éteindre.",
      ],
      tricky: {
        7: "Le pouce descend du si au la. Puis les doigts 2 et 3 montent jusqu’au si et au do.",
        11: "Comme à la mesure 7, le pouce descend au la après le court silence.",
        12: "Tiens le ré avec le doigt 4 pendant deux temps. En même temps, la main gauche descend au sol grave.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Une note grave arrive sur le premier temps, et deux notes ensemble sur le deuxième.",
        "Joue les mesures 5 à 8 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à deux mains, lentement, avec la pédale.",
        "Joue la fin, où la mélodie retrouve le chemin de la maison, jusqu’au do.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Garde la pédale enfoncée toute la mesure, et change-la pile sur la barre de mesure.",
        "Le pouce joue le si, puis descend d’un pas jusqu’au la. Garde les autres doigts souples.",
        "Laisse les deux dernières mesures sonner doux, comme la fin d’une berceuse.",
      ],
      tricky: {
        7: "Le pouce descend du si au la. Garde la main près des touches.",
        11: "Le même pas qu’à la mesure 7. Le pouce descend du si au la.",
        15: "La main gauche descend au do grave. Profite du silence à la fin de la mesure 14.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule. Saute de la note grave jusqu’à l’accord pendant le court silence.",
        "Joue les mesures 5 à 8 à deux mains, lentement.",
        "Joue seules les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "La pédale tient la note grave pendant que la main saute jusqu’à l’accord.",
        "À la main gauche, le do dièse frotte contre le ré. Ce doux frottement est la couleur qu’aimait Satie.",
        "Le pouce prend la note du bas de chaque sixte. Le doigt 4 ou 5 porte la mélodie au-dessus.",
      ],
      tricky: {
        6: "Le pouce descend jusqu’au do dièse pendant que le doigt 3 lâche le fa dièse.",
        10: "Les sixtes descendent pas à pas, puis sautent plus bas, sur mi et do dièse. Garde le pouce et le doigt 4 dans la même position.",
        12: "Tiens fa dièse et la pendant toute la mesure. Puis monte jusqu’à sol et mi pour la mesure suivante.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule. Saute de l’octave grave jusqu’à l’accord pendant le court silence.",
        "Joue les mesures 5 à 8 à deux mains, lentement.",
        "Joue seuls les accords de la main droite, et lève la main entre eux.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Regarde l’accord suivant pendant que la pédale tient l’octave grave. Les yeux guident la main.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
        "Les premières notes de la mélodie reviennent seules. Joue-les doux, comme un souvenir.",
      ],
      tricky: {
        9: "Lève la main après chaque accord, et garde sa position pendant qu’elle monte.",
        11: "Trois accords montent pas à pas. Garde le pouce et les doigts 2 et 4 dans la même position.",
        15: "La mélodie revient seule. Le doigt 3 joue le fa dièse, et le doigt 5 joue le la.",
      },
    },
  },
};

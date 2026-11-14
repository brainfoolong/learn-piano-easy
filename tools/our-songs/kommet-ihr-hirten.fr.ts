/** The guide of *Kommet, ihr Hirten* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Le titre allemand Kommet, ihr Hirten veut dire « Venez, bergers ». " +
    "Cette chanson vient de Bohême, où son titre tchèque est Nesem vám noviny. " +
    "L’air a été imprimé pour la première fois en 1847, dans un recueil de cantiques catholique d’Olomouc. " +
    "Carl Riedel, chef d’orchestre à Leipzig, a écrit librement les paroles allemandes d’après l’original. " +
    "Il les a imprimées pour la première fois en 1870.",
  funFact:
    "Le musicologue Konrad Ameln a situé l’air vers 1700, d’après son seul style.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 9 à 12 à la main droite seule. Le pouce descend jusqu’au sol grave.",
        "Maintenant, la main gauche seule. Elle garde une position par mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Chaque mesure commence par un long sol de deux temps. Puis viennent quatre notes courtes, d’un temps chacune.",
        "La main gauche tient do et sol comme le bourdon d’une cornemuse. Laisse-le sonner sous la mélodie.",
        "Ici, le doigt 2 joue le do. Le pouce reste ainsi libre pour le sol grave de la mesure 10.",
      ],
      tricky: {
        9: "Le doigt 2 prend le do à la place du pouce. Puis les doigts 4 et 5 jouent mi et sol.",
        11: "Comme à la mesure 9 : le doigt 2 sur do, le doigt 4 sur mi et le doigt 5 sur sol.",
        13: "Le doigt 5 arrive sur le sol aigu. Puis les doigts 2 et 4 jouent mi et sol, et le pouce joue ré.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : un do grave, puis deux accords dans chaque mesure.",
        "Joue les mesures 9 à 14 à la main gauche seule. Là, les accords changent plus souvent.",
        "Joue le premier passage à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Dans la plupart des mesures, la main gauche joue do sur le premier temps, puis un accord sur chacun des deux autres.",
        "Joue le do grave un peu plus fort que les accords, comme le bourdon d’une cornemuse.",
        "La mélodie saute du sol grave au sol aigu. Le doigt 4 s’étire sur toute l’octave.",
      ],
      tricky: {
        13: "Le pouce quitte le sol grave, et le doigt 4 monte d’une octave jusqu’au sol aigu.",
        27: "Le même écart d’octave qu’à la mesure 13. Garde le poignet souple pendant que la main s’ouvre.",
        28: "Pour le dernier accord, le pouce descend sur le sol, et le doigt 2 joue do en même temps.",
      },
    },
    epic: {
      practice: [
        "Joue les accords brisés seuls, jusqu’à ce qu’ils roulent tout seuls : grave, milieu, aigu, milieu.",
        "Joue la mélodie à la main gauche seule, à partir de la mesure 15.",
        "Joue le premier passage à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue les accords brisés tout en douceur, pour que la mélodie chante au-dessus.",
        "Maintenant, c’est la main gauche qui a la mélodie. Joue-la bien nettement, et joue les accords de la main droite tout en douceur.",
        "Change de pédale à chaque temps.",
      ],
      tricky: {
        9: "La main gauche saute au la pour l’accord de la mineur, pendant que le doigt 2 de la main droite prend le do.",
        11: "Deux temps de la mineur, puis la main gauche se lève et retombe sur le do grave.",
        15: "Les mains échangent leurs rôles. La main gauche commence la mélodie sur sol, et la main droite joue des accords.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave grave, puis remonte pour l’accord.",
        "Joue les mesures 1 à 9 à la main droite seule, et garde les traits rapides légers.",
        "Joue les arpèges du deuxième passage à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Le trait monte ré, mi et fa. Puis la main se lève et pose le doigt 4 sur le sol.",
        "Garde le pouce et l’auriculaire écartés d’une octave. Les courts silences laissent à la main le temps de sauter.",
      ],
      tricky: {
        19: "Les octaves sautent jusqu’au la, puis redescendent au fa. Lève la main à chaque court silence.",
        24: "Les octaves avancent sur do, mi, do et ré, puis descendent au sol grave. Laisse le poignet rebondir.",
        26: "Comme à la mesure 24. Puis la main saute d’une octave entière jusqu’au sol aigu.",
      },
    },
  },
};

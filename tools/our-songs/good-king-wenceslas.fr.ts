/** The guide of *Good King Wenceslas* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "La mélodie est Tempus adest floridum, un chant de printemps du XIIIe siècle. " +
    "Elle a été publiée pour la première fois en 1582 dans Piae Cantiones, un recueil de chants finlandais. " +
    "En 1853, l’auteur de cantiques anglais John Mason Neale lui a donné de nouvelles paroles, avec son éditeur musical Thomas Helmore. " +
    "Le chant raconte l’histoire d’un roi de Bohême qui brave l’hiver pour faire l’aumône à un pauvre paysan.",
  funFact:
    "De son vivant, Venceslas n’était que duc. La légende en a fait plus tard un roi.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 8 à 11 à la main droite seule, jusqu’au sol aigu, puis en redescendant jusqu’au la.",
        "Maintenant, la main gauche seule. Elle ne change de position que sur le premier et le troisième temps.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le pouce commence sur le sol, et le doigt 4 joue le do répété.",
        "Joue le deuxième do avec le pouce. L’auriculaire monte ensuite jusqu’au sol aigu.",
        "Lève la main après le do, et pose le doigt 2 sur le la.",
      ],
      tricky: {
        1: "Le doigt 4 joue trois fois le do, puis le doigt 5 joue le ré. Le pouce attend au-dessus du sol.",
        5: "Les mêmes notes qu’à la mesure 1. Joue les trois do bien égaux et le ré léger.",
        11: "Quand tu lèves la main, le doigt 2 arrive sur le la et le pouce prend le sol. Puis les doigts 2 et 3 montent jusqu’au la et au si.",
      },
    },
    rare: {
      practice: [
        "Joue les huit premières mesures à la main gauche seule, et enfonce ensemble les notes de chaque accord.",
        "Joue la main gauche seule à partir de la mesure 9 : une note grave puis l’accord, un sur chaque temps.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Tiens chaque accord doux pendant ses deux temps, pour que la mélodie sonne au-dessus.",
        "Joue le deuxième do avec le pouce. L’auriculaire monte ensuite jusqu’au sol aigu.",
        "Joue la note grave un peu plus fort que l’accord qui suit.",
      ],
      tricky: {
        1: "Le doigt 4 joue trois fois le do, puis le doigt 5 joue le ré. La main gauche joue deux fois l’accord de do majeur.",
        5: "Les mêmes notes qu’à la mesure 1. Joue les trois do bien égaux et le ré léger.",
        11: "Après avoir levé la main, pose le doigt 2 sur le la. La main gauche joue fa, puis do, puis sol, puis son accord.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seuls les accords brisés du deuxième couplet à la main gauche.",
        "Joue le premier couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "Après le dernier do, la main droite saute d’une octave vers le haut, et la main gauche descend sur un do grave.",
        "Change de pédale à chaque demi-mesure, quand la main gauche commence un nouvel accord.",
      ],
      tricky: {
        18: "La main droite recommence une octave plus haut, et la main gauche descend sur le do grave.",
        28: "La main gauche fait une pause après l’accord sur fa, puis saute jusqu’au sol grave.",
        33: "La mélodie saute du do au fa, pendant que la main gauche fait une pause et descend sur le fa grave.",
      },
    },
    legendary: {
      practice: [
        "Joue seules les octaves de la main droite, le pouce et le doigt 5 gardés dans la même position.",
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seuls les accords du deuxième couplet à la main droite.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "En basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Garde le pouce et le doigt 5 écartés d’une octave, et laisse le poignet porter le trait descendant.",
        "Lâche chaque accord un peu plus tôt pour déplacer la main. La pédale garde le son.",
      ],
      tricky: {
        3: "Les octaves jouent la, sol, la et si, pendant que la main gauche saute du fa grave à son accord, puis au sol.",
        7: "Comme à la mesure 3. Garde les octaves égales et le poignet souple.",
        11: "Les mêmes pas encore une fois, après le trait descendant. Garde la basse stride légère sous les octaves.",
      },
    },
  },
};

/** The guide of *Ihr Kinderlein, kommet* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Le titre allemand Ihr Kinderlein, kommet signifie « Venez, petits enfants ». " +
    "Le prêtre Christoph von Schmid en a écrit les paroles, et il a appelé son poème « Les Enfants à la crèche ». " +
    "Johann Abraham Peter Schulz a écrit la mélodie en 1794 pour un poème sur le printemps de Wilhelm Gottlieb Becker. " +
    "Plus tard, on a chanté les paroles de Schmid sur cet air de printemps, et les deux réunis sont devenus un chant de Noël.",
  funFact:
    "Christoph von Schmid a aussi écrit des histoires pour enfants, comme Das Blumenkörbchen, « La Corbeille de fleurs ».",
  versions: {
    common: {
      practice: [
        "Joue les cinq premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les quatre dernières mesures à la main droite seule. C’est là que la mélodie monte jusqu’au do aigu.",
        "Maintenant, la main gauche seule. Elle garde une position par mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Chaque mesure commence par une note longue et finit par deux courtes, comme un berceau qui se balance.",
        "À la mesure 13, il y a un silence après le premier la. Lève le doigt, compte le silence, et rejoue le la.",
        "Le doigt 5 joue le do aigu. Ensuite, la main descend pas à pas, et le pouce finit sur le si.",
      ],
      tricky: {
        2: "Le doigt 4 joue le sol, et le doigt 2 descend sur le mi. Garde la main immobile au-dessus des touches de ré à la.",
        15: "Le doigt 5 s’étire jusqu’au do aigu, puis les doigts 3 et 2 jouent sol et mi.",
        16: "Les doigts 3 et 2 jouent fa et ré, et le pouce descend chercher le si.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les trois notes de chaque accord.",
        "Joue les mesures 10 à 17 à la main gauche seule, avec deux accords par mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Tiens chaque accord tout en douceur, pour que la mélodie qui berce reste claire au-dessus.",
        "Le pouce gauche monte sur le la pour l’accord sur fa à la mesure 13, puis revient sur le sol à la mesure 14.",
        "Maintenant, la main gauche joue un accord sur chaque moitié de mesure. " +
          "Compte un, deux, et enfonce l’accord à chaque temps.",
      ],
      tricky: {
        14: "Le doigt 3 joue trois fois le sol, pendant que le pouce gauche glisse du la au sol.",
        15: "Le doigt 5 monte chercher le do aigu, puis le doigt 3 revient sur le sol.",
        16: "Les doigts 3, 2 et 1 descendent par fa, ré et si, sur un accord de septième sur sol.",
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
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "Les deux mains se lèvent pendant un silence. La main droite saute jusqu’au sol aigu, et la gauche descend sur un do grave.",
        "Change de pédale à chaque demi-mesure, quand la main gauche recommence sa formule.",
      ],
      tricky: {
        17: "Tiens le do, lève la main pendant le silence, et pose le doigt 4 sur le sol aigu.",
        18: "La mélodie recommence une octave plus haut, et la main gauche commence ses accords brisés sur le do grave.",
        21: "La mélodie s’arrête après le long mi. Compte le silence, puis le doigt 4 joue le sol.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave grave, puis remonte pour l’accord.",
        "Joue les mesures 2 à 9 à la main droite seule, et garde légers les petits groupes de notes rapides.",
        "Joue seuls les arpèges de la main gauche dans le deuxième passage.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Le petit groupe de notes rapides après le long mi est comme un petit saut. Joue-le plus doux que la mélodie.",
        "Garde le pouce et l’auriculaire à une octave l’un de l’autre, et laisse le poignet rebondir.",
      ],
      tricky: {
        20: "Les octaves vont pas à pas sur fa, ré et fa, au-dessus d’un arpège sur sol. Garde la main dans sa position d’octave.",
        24: "Les mêmes pas qu’à la mesure 20. Laisse l’arpège continuer sous les octaves.",
        29: "Lève un peu la main avant l’octave de la. Compte le silence, puis rejoue le la.",
      },
    },
  },
};

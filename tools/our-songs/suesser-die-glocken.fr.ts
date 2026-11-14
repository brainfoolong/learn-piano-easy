/** The guide of *Süßer die Glocken nie klingen* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Süßer die Glocken nie klingen signifie « Jamais les cloches ne sonnent plus doux » en allemand. " +
    "Le théologien et enseignant Friedrich Wilhelm Kritzinger en a écrit les paroles. " +
    "Bernhard Brähmig a imprimé le chant pour la première fois en 1860, dans son recueil Liederstrauß, " +
    "sous le titre Die Weihnachtsglocken. " +
    "La mélodie est celle de la chanson populaire Seht, wie die Sonne dort sinket, connue en Thuringe.",
  funFact:
    "Avant de sonner pour Noël, la mélodie chantait le soir : " +
    "le titre de sa chanson populaire signifie « Vois comme le soleil se couche là-bas ».",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. La main y saute jusqu’au do aigu.",
        "Maintenant, la main gauche seule. Elle garde une ou deux positions dans chaque mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Chaque paire pointée est une note longue suivie d’une note rapide, comme une cloche qui se balance et sonne.",
        "Quand le pouce a joué le do, toute la main saute d’une octave vers le haut, et le doigt 5 arrive sur le do aigu.",
        "Les mesures 11 et 12 répètent les mesures 9 et 10. Joue-les un peu plus doux, comme un écho.",
      ],
      tricky: {
        6: "Le pouce lâche tôt le do, et le doigt 5 arrive sur le do aigu. Puis le doigt 4 joue le la.",
        8: "Le pouce descend du ré au do et le tient. Compte la note longue jusqu’au bout.",
        16: "Le même mouvement qu’à la mesure 8 : le pouce descend du ré au do, et le morceau se termine.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les trois notes de chaque accord.",
        "Joue les mesures 9 à 16 à la main gauche seule, avec un accord à chaque demi-mesure.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Tiens chaque accord tout en douceur, pour que la mélodie qui sonne reste claire au-dessus.",
        "Maintenant, la main gauche joue un accord à chaque demi-mesure. " +
          "Compte « un, deux », et enfonce l’accord sur chaque temps.",
        "Le pouce gauche monte jusqu’au la pour l’accord de fa majeur, pendant que la main droite saute jusqu’au do aigu.",
      ],
      tricky: {
        8: "Le pouce droit descend du ré au do, pendant que la main gauche revient à l’accord de do majeur.",
        14: "Le doigt 5 saute jusqu’au do aigu, et le pouce gauche monte jusqu’au la pour l’accord de fa majeur.",
        16: "Le pouce descend jusqu’au do, et les deux mains tiennent le dernier accord de do majeur jusqu’à la fin.",
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
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie sonne au-dessus comme une cloche.",
        "Les deux mains se lèvent pendant le silence. " +
          "La main droite saute d’une octave vers le haut, et la gauche descend sur un do grave.",
        "Change de pédale à chaque demi-mesure, quand la main gauche commence un nouvel accord.",
      ],
      tricky: {
        17: "La mélodie recommence une octave plus haut, pendant que la main gauche commence ses accords brisés sur le do grave.",
        24: "Tiens le long do pendant que l’accord brisé continue de rouler. Lève la main gauche pendant le silence de la fin.",
        32: "Le pouce lâche tôt le ré. Puis la main tombe sur le dernier accord, avec le doigt 5 sur le do.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave grave, puis remonte pour l’accord.",
        "Joue les mesures 1 à 8 à la main droite seule, et garde le trait rapide léger.",
        "Joue seuls les arpèges de la main gauche dans le deuxième passage.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Le trait rapide après le long mi est un petit carillon. Joue-le plus doux que la mélodie.",
        "Garde le pouce et l’auriculaire à une octave l’un de l’autre, et laisse le poignet rebondir.",
      ],
      tricky: {
        6: "La main droite saute jusqu’au do aigu, pendant que la basse stride descend d’un bond jusqu’à un fa grave.",
        7: "Le la rapide se glisse entre les deux sol. Garde le doigt 4 léger, pendant que la basse stride passe sur sol.",
        14: "Le même saut qu’à la mesure 6. Lâche le do à temps, pour que la main arrive calmement sur le do aigu.",
      },
    },
  },
};

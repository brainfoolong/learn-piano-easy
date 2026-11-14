/** The guide of *Symphony No. 7: Allegretto* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven a écrit sa Septième Symphonie en 1811 et 1812. " +
    "À sa création à Vienne, en décembre 1813, le public a réclamé l’Allegretto une seconde fois. " +
    "Le film « Le Discours d’un roi » (2010) le fait entendre sous le discours radiophonique du roi en temps de guerre.",
  funFact: "La mélodie sonne d’abord dans le grave, aux altos et aux violoncelles.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 4 à la main droite seule. Le pouce joue tous les mi.",
        "Joue les mesures 5 à 8 à la main droite seule. Là, la mélodie monte jusqu’au sol.",
        "Maintenant, la main gauche seule. Elle garde une position par mesure.",
        "Joue à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Dis « long, bref, bref » en jouant la première mesure. Tout le morceau tient dans ce rythme.",
        "La main ne bouge jamais. Le pouce et les doigts 2 et 3 jouent mi, fa dièse et sol.",
        "Commence très doux, et joue chaque mesure un peu plus fort que la précédente.",
      ],
      tricky: {
        10: "Ici, le doigt 4 joue la. Garde la main immobile, et laisse seulement le doigt monter.",
        11: "Le doigt 5 joue trois fois si. Garde-le arrondi, pour que l’auriculaire reste solide.",
        12: "Le doigt 4 revient sur la pour la dernière note. Tiens-la quatre temps.",
      },
    },
    rare: {
      practice: [
        "Joue les huit premières mesures à la main droite seule, et compte « long, bref, bref ».",
        "Joue la main gauche seule. Chaque mesure tient un accord de trois notes.",
        "Joue les huit premières mesures à deux mains, avec la pédale.",
        "Joue la seconde moitié. La main gauche y alterne une note grave et un accord.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Ici, la main gauche descend un peu. Le doigt 5 passe du sol dièse au sol.",
        "Garde la pédale enfoncée toute la mesure, et change-la pile sur la barre de mesure.",
        "La main gauche joue maintenant sur chaque temps. Garde-la régulière, comme une marche lente.",
      ],
      tricky: {
        10: "La main gauche joue sol dièse avec le doigt 5, puis si et mi ensemble. Garde la main immobile.",
        15: "La main gauche se balance entre sol et ré avec les doigts 5 et 2.",
        16: "Joue mi et sol ensemble avec le pouce et le doigt 3. Puis lève la main droite pendant le silence.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule, jusqu’à ce que les accords brisés roulent tout seuls : grave, aigu, milieu, aigu.",
        "Joue seules les paires de notes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue les accords brisés tout en douceur, pour que le mi répété chante au-dessus.",
        "Change de pédale sur le dernier temps, là où l’accord passe à ré majeur.",
        "Change de pédale trois fois dans cette mesure, une fois pour chaque nouvel accord.",
      ],
      tricky: {
        17: "Le pouce et les doigts 2 et 5 prennent do, fa et la. En dessous, la main gauche déroule un accord de fa majeur.",
        19: "L’accord change au milieu de la mesure. Change de pédale avec lui.",
        20: "Ouvre la main gauche sur l’octave : le doigt 5 sur la, le doigt 2 sur mi et le pouce sur le la aigu.",
      },
    },
    legendary: {
      practice: [
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue seuls les arpèges de la main gauche. Le pouce passe dessous, et le doigt 3 passe par-dessus.",
        "Joue les mesures 9 à 16 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Joue la note du haut de chaque octave un peu plus fort, pour faire ressortir la mélodie.",
        "Pour chaque accord, ouvre la main droite sur toute une octave, le pouce et le doigt 5 aux extrémités.",
        "Pour finir, la mélodie monte jusqu’au la. Laisse sonner le dernier accord avec la pédale.",
      ],
      tricky: {
        10: "La main gauche commence sur un mi grave. Profite du silence à la fin de la mesure 9 pour sauter vers le bas.",
        15: "Le doigt 3 passe par-dessus le pouce jusqu’au si. Garde le poignet à plat pendant que la main monte.",
        17: "Le pouce et les doigts 2, 4 et 5 prennent la, do, fa et la. Lève la main gauche à chaque court silence.",
      },
    },
  },
};

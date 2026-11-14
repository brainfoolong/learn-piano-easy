/** The guide of *Clair de lune* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "« Clair de lune » est le troisième mouvement de la « Suite bergamasque » de Debussy. " +
    "Il l’a commencée vers 1890 et publiée en 1905. " +
    "Son titre vient d’un poème de Paul Verlaine. " +
    "Le film « Ocean’s Eleven » (2001) se termine sur ce morceau, pendant que les voleurs regardent les fontaines du Bellagio.",
  funFact:
    "La partition commence pianissimo et « con sordina ». " +
    "Le pianiste joue donc avec la pédale douce enfoncée dès la première note.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 4 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. Ici, la mélodie descend pas à pas.",
        "Maintenant, la main gauche seule. Dans chaque mesure, elle tient une note longue ou une quinte à vide.",
        "Joue à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Relâche tout de suite le sol joué par le pouce. Le silence te laisse le temps de sauter jusqu’au sol aigu.",
        "Joue doux, et laisse chaque note longue s’éteindre, comme un clair de lune sur l’eau.",
        "Ici, les doigts 2 et 3 font presque tout. Le doigt 5 monte chercher la note la plus aiguë.",
      ],
      tricky: {
        1: "Joue le sol avec le pouce, puis saute d’une octave vers le sol aigu avec le doigt 5.",
        5: "La main descend pendant le silence de la mesure 4. Le doigt 3 arrive sur le la.",
        7: "Joue le premier mi avec le doigt 3, pas avec le pouce. Le doigt 5 reste ainsi libre pour le la.",
      },
    },
    rare: {
      practice: [
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main gauche seule. La note grave tombe sur le premier temps, et la quinte au-dessus sur le quatrième.",
        "Joue les huit premières mesures à deux mains, lentement, avec la pédale.",
        "Joue la seconde moitié, où la mélodie revient une octave plus haut.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Garde la pédale enfoncée toute la mesure, et change-la pile sur la barre de mesure.",
        "Compte cette mesure en croches. Le mi commence au milieu du quatrième temps.",
        "Dans l’aigu, joue encore plus doux. La mélodie doit flotter comme un clair de lune.",
      ],
      tricky: {
        5: "La main descend pendant le silence de la mesure 4. Le doigt 3 arrive sur le la.",
        9: "Profite du silence après le si grave pour sauter très haut. Le pouce arrive sur le sol.",
        13: "Comme à la mesure 5, descends la main pendant le silence qui précède. Le doigt 3 arrive sur le la.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule. Chaque accord monte et redescend, une note par croche.",
        "Joue seules les tierces de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue les accords qui roulent doux et réguliers, pour que la mélodie flotte au-dessus.",
        "Ici, change trois fois de pédale, une fois pour chaque nouvelle note de basse.",
        "La mélodie est la note du haut de chaque tierce : laisse le doigt du haut mener.",
      ],
      tricky: {
        3: "Do et mi commencent entre les temps. Compte cette mesure en croches : le mi commence au milieu du quatrième temps.",
        11: "Le même rythme qu’à la mesure 3, maintenant en tierces. Monte ensemble les doigts 3 et 5 vers do et mi.",
        16: "Joue la et do avec les doigts 1 et 3, puis si et ré avec les doigts 2 et 4.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule. Le pouce passe dessous et le doigt 3 passe par-dessus. Chaque arpège couvre ainsi deux octaves.",
        "Joue seuls les accords de quatre notes de la main droite, et lève la main entre deux accords.",
        "Joue la fin lentement. La main gauche passe par-dessus la droite pour trois notes aiguës.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans chaque arpège, le pouce passe dessous en descendant, et le doigt 3 passe par-dessus en montant.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
        "Pendant que la main droite tient son accord, fais passer la main gauche par-dessus, comme un sonneur de cloches.",
      ],
      tricky: {
        13: "Ici, un accord tombe sur chaque temps. Lève un peu la main après chacun, et laisse la pédale les lier.",
        17: "Tiens l’accord de la main droite, et passe la main gauche par-dessus pour jouer si, ré et sol.",
        18: "Lève la main droite de son accord, puis ouvre-la sur do, mi, sol et do.",
      },
    },
  },
};

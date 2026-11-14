/** The guide of *Silent Night* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Franz Xaver Gruber a écrit cette mélodie pour la veille de Noël 1818, à Oberndorf, près de Salzbourg. " +
    "Le jeune prêtre Joseph Mohr avait écrit les paroles, et Gruber les a mises en musique. " +
    "Mohr jouait de la guitare lors de la première interprétation. Ensuite, le chant a voyagé bien au-delà de l’Autriche.",
  funFact:
    "En 2011, la Commission autrichienne pour l’UNESCO a inscrit « Douce nuit » " +
    "sur la liste autrichienne du patrimoine culturel immatériel.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 17 à 23 à la main droite seule. La mélodie y monte haut, puis redescend jusqu’au do central.",
        "Joue à deux mains. Dans chaque mesure, la main gauche tient une note grave ou une quinte.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le premier sol est long et le la est court. Cela se balance comme un berceau.",
        "Lève la main pendant le court silence après le mi, et monte chercher le ré aigu.",
        "Joue doux du début à la fin. Ce morceau est une berceuse.",
      ],
      tricky: {
        6: "Après les deux ré, le doigt 4 prend le si. En bas, la main gauche tient le sol avec le doigt 4.",
        17: "Après le silence, la main s’ouvre vers le haut depuis le mi, et le doigt 3 arrive sur le ré aigu.",
        21: "Le doigt 5 descend du mi au do. Puis la mélodie descend jusqu’au pouce, sur le do central.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une note grave, puis deux accords doux, comme une valse lente.",
        "Joue les mesures 17 à 23 à la main droite seule. La mélodie y monte haut, puis redescend jusqu’au do central.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Joue les accords de la main gauche plus doux que sa note grave.",
        "Change de pédale à chaque barre de mesure. Relève-la au moment où sonne la nouvelle note de basse.",
        "Les doigts 3 et 5 prennent le do et le mi ensemble. Laisse le mi chanter au-dessus du do.",
      ],
      tricky: {
        17: "La main droite s’ouvre vers le haut depuis le mi, et le doigt 3 arrive sur le ré aigu.",
        21: "Le doigt 5 descend du mi au do. Puis la mélodie descend par le sol et le mi.",
        22: "Les doigts 4, 3 et 2 descendent sur sol, fa et ré, pendant que la main gauche joue son accord de septième sur sol.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue le trait de la mesure 4 à la main droite seule, et passe le pouce dessous jusqu’au la.",
        "Joue les paires de notes et les accords des mesures 13 à 20 à la main droite seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "Les doigts 1, 2 et 3 jouent mi, fa et sol. Puis le pouce passe dessous jusqu’au la.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        4: "Le trait monte du fa au do. Passe le pouce sous le doigt 3 pour prendre le la.",
        16: "Le même trait qu’à la mesure 4, à partir de la tierce do et mi. Passe le pouce dessous jusqu’au la.",
        21: "La main tombe de l’accord jusqu’au do avec le doigt 5, puis descend jusqu’au sol et au mi.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seuls les accords de la main droite, et laisse l’auriculaire chanter la mélodie.",
        "Joue les octaves brisées des mesures 13 à 16 à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde la note de basse et laisse la main trouver l’accord au toucher.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
        "Laisse les octaves brisées rouler tout en douceur sous la mélodie, comme un berceau qui se balance.",
      ],
      tricky: {
        5: "Après le trait, arrive sur sol, si et ré avec les doigts 1, 3 et 5.",
        9: "La main s’ouvre sur do, fa et la, et l’auriculaire chante la mélodie.",
        10: "Le doigt 4 prend seul le si entre les accords. Garde le pouce près du fa.",
      },
    },
  },
};

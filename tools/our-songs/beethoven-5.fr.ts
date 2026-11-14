/** The guide of *Symphony No. 5* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "La Cinquième Symphonie de Beethoven commence par quatre notes, trois brèves et une longue. " +
    "Sa première édition imprimée a paru en avril 1809. " +
    "Le film « Fantasia 2000 » (1999) s’ouvre sur cette symphonie.",
  funFact:
    "Beethoven a dédié la symphonie à deux de ses mécènes, le prince Joseph Franz von Lobkowitz et le comte Razoumovski.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 12 à la main droite seule. La main reste au même endroit.",
        "Maintenant, la main gauche seule. Elle tient une note pendant toute une mesure.",
        "Joue les quatre premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le premier temps est un silence. Puis joue le mi sur les deuxième, troisième et quatrième temps.",
        "Joue les trois notes courtes avec force, et laisse la note longue sonner toute la mesure.",
        "Le pouce reste sur le si, et chaque doigt garde sa propre touche.",
      ],
      tricky: {
        1: "Le premier temps est un silence. Puis joue trois fois le mi avec le doigt 4. Garde le doigt souple pour chaque nouvelle note.",
        7: "Le doigt 5 joue trois fois le fa. Lève-le un peu entre les notes, pour que chacune sonne.",
        9: "Les doigts 4 et 5 se balancent entre mi et fa. Garde les deux doigts près des touches.",
      },
    },
    rare: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Les notes courtes sont des croches.",
        "Joue la main gauche seule. Une longue note de basse vient d’abord, puis deux accords courts.",
        "Joue les mesures 5 à 8 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Chaque motif commence par un court silence. Puis trois notes rapides mènent à la note longue.",
        "Chaque mesure reprend l’idée du début : trois notes courtes et une longue.",
        "Termine sur do et mi ensemble. Les doigts 2 et 4 les enfoncent d’un seul geste.",
      ],
      tricky: {
        1: "Trois mi rapides suivent le court silence. Joue-les avec le doigt 4, légers et réguliers.",
        5: "Joue trois mi rapides avec le doigt 4. Puis le doigt 2 tient le do une demi-mesure.",
        13: "Après les trois mi rapides, les doigts 2 et 4 enfoncent ensemble do et mi.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les octaves des quatre premières mesures. Garde la main ouverte du pouce à l’auriculaire.",
        "Joue la gamme de la mesure 12 à la main droite seule. Passe le pouce dessous pour le si bémol.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue les octaves fort et net, puis laisse sonner chaque note longue.",
        "Change de pédale au début de chaque mesure, quand l’accord change.",
        "Passe le pouce dessous pour le si bémol, puis monte avec les doigts 2 à 5.",
      ],
      tricky: {
        5: "Joue trois fois le mi bémol avec le doigt 3. Puis ouvre grand la main pour do et sol.",
        10: "Commence en haut sur le do avec le doigt 5, et descends jusqu’au la bémol. Puis le pouce tombe sur le mi bémol.",
        12: "Après le la bémol, passe le pouce dessous pour le si bémol. Puis les doigts 2 à 5 montent jusqu’au fa.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : une octave sur le temps, puis un accord, chacun suivi d’un court silence pour sauter.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue le trait de la mesure 12 à la main droite seule. Le pouce passe dessous deux fois.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Enfonce les quatre notes de chaque accord d’un seul geste, la note du haut un peu plus fort.",
        "La main gauche monte de deux octaves à chaque mesure. Le doigt 3 passe par-dessus le pouce.",
        "Passe le pouce dessous pour le si bémol, puis encore pour le fa. Ensuite, le doigt 5 atteint le do.",
      ],
      tricky: {
        3: "La main gauche saute du sol grave jusqu’à l’accord. Profite du court silence après chaque octave pour sauter.",
        4: "La main droite tient son accord. Laisse la main gauche sauter entre le sol grave et l’accord au-dessus.",
        19: "Joue trois fois le fa en octaves, la main ouverte. La main gauche saute depuis le sol grave, comme avant.",
      },
    },
  },
};

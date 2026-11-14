/** The guide of *Air on the G String* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Bach a écrit cet air comme mouvement lent de sa troisième Suite pour orchestre. " +
    "En 1871, le violoniste August Wilhelmj l’a arrangé pour qu’un violon joue toute la mélodie sur sa corde la plus grave, la corde de sol. " +
    "Le film « Seven » (1995) le fait entendre pendant que deux détectives examinent des photos de scènes de crime.",
  funFact:
    "Wilhelmj a écrit « auf der G-Saite », sur la corde de sol, au-dessus de la partie de violon. " +
    "C’est de là que vient le surnom du morceau.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 4 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. La mélodie saute vers le bas, puis remonte.",
        "Maintenant, la main gauche seule. Elle tient à chaque fois une note de basse ou une quinte à vide.",
        "Joue à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Tiens le premier mi pendant une mesure entière, et écoute. Un violon chante cette note d’un seul long coup d’archet.",
        "Lève un instant le pouce du do. Puis le doigt 2 arrive sur le si, et la main reste là.",
        "Chaque note longue remplit une mesure entière. Compte huit temps lents, puis attends encore un temps avant la note suivante.",
      ],
      tricky: {
        3: "Lève un instant le pouce du do, puis joue le si avec le doigt 2.",
        8: "Après le silence, le doigt 4 joue le ré. Puis le pouce descend jusqu’au sol.",
        9: "La main gauche s’ouvre vers le bas jusqu’au fa avec le doigt 5, pendant que le doigt 2 reste sur le do.",
      },
    },
    rare: {
      practice: [
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main gauche seule. La note de basse vient d’abord, et l’accord de deux notes lui répond.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit. La mélodie passe deux fois.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Sous le long mi, la basse descend pas à pas. Garde-la douce et liée.",
        "Lève un instant le pouce du do, pour que le doigt 2 puisse arriver sur le si.",
        "Les trois dernières mesures sont notre ajout. Elles ramènent la mélodie chez elle, en do majeur.",
      ],
      tricky: {
        6: "Après le silence, le doigt 5 prend le mi. Puis les doigts 2 et 1 jouent si bémol et la.",
        14: "Le même geste qu’à la mesure 6 : le doigt 5 sur le mi, puis si bémol avec le doigt 2.",
        19: "La main droite joue do et mi ensemble. La main gauche s’ouvre sur do, mi et sol avec les doigts 5, 3 et 1.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces et les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Garde la basse d’Alberti douce et régulière, pour que les notes longues flottent au-dessus.",
        "Le sol de la basse frotte contre le fa dièse au-dessus. Ce frottement est de Bach, alors laisse-le sonner.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        5: "Profite du silence à la fin de la mesure 4 pour monter la main gauche jusqu’au fa dièse.",
        13: "La main gauche remonte après son silence. Puis la main droite s’ouvre sur une sixte, do et la.",
        14: "Joue chaque paire d’un seul geste, et laisse le doigt du haut chanter la mélodie. Le pouce prend la plupart des notes du bas.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule. Elle saute de chaque note de basse à son octave, puis revient.",
        "Joue seuls les accords de la main droite aux mesures 9 et 10, et laisse le doigt du haut chanter.",
        "Joue la seconde moitié à deux mains, lentement. La mélodie y est une octave plus haut.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Garde le doigt 5 sur la note de basse grave et le pouce sur son octave. Le doigt 2 joue la note entre les deux.",
        "Le sol de la basse frotte contre le fa dièse au-dessus. Ce frottement est de Bach, alors laisse-le sonner.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
      ],
      tricky: {
        9: "Profite du silence du début pour monter la main d’une octave. Puis prends quatre notes avec les doigts 1, 2, 3 et 5.",
        16: "Après le silence, les doigts 3 et 5 prennent do dièse et mi. Puis le pouce descend jusqu’au sol et remonte.",
        17: "Le doigt 5 monte jusqu’au si du haut. La main gauche profite de son silence pour sauter jusqu’au sol du bas.",
      },
    },
  },
};

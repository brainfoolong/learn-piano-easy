/** The guide of *Moonlight Sonata* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven a écrit cette sonate en 1801 et l’a publiée en 1802, avec une dédicace à la comtesse Giulietta Guicciardi. " +
    "Le surnom « Clair de lune » vient du critique Ludwig Rellstab, après la mort de Beethoven. " +
    "On l’entend dans le film « Ludwig van B. » (1994), sur la vie de Beethoven.",
  funFact:
    "Beethoven demande de jouer tout le mouvement très délicatement, avec les étouffoirs levés : « senza sordino ».",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 4 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. Là, la mélodie monte puis redescend.",
        "Maintenant, la main gauche seule. Elle tient une note ou une quinte à vide dans chaque mesure.",
        "Joue à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Tiens longtemps le premier la, puis joue le la court juste avant le prochain la long.",
        "Joue très doux. Cette musique doit sonner comme un clair de lune sur un lac tranquille.",
        "Ici, la main droite se repose. Écoute la main gauche et compte quatre temps lents.",
      ],
      tricky: {
        2: "La main gauche descend de ré et la vers la et mi. Le doigt 5 prend le la grave.",
        5: "La main gauche descend jusqu’au sol avec le doigt 5, et le pouce reste sur le ré.",
        10: "La main gauche monte du fa au sol. La main droite revient avec le doigt 2 sur le sol.",
      },
    },
    rare: {
      practice: [
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main gauche seule. La note grave vient d’abord, puis l’accord de deux notes lui répond.",
        "Joue les huit premières mesures à deux mains, lentement, avec la pédale.",
        "Joue la deuxième moitié, où la mélodie revient une octave plus haut.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Garde la pédale enfoncée toute la mesure, et change-la pile sur la barre de mesure.",
        "Le la pointé dure trois fois plus longtemps que le la court qui le suit.",
        "Dans l’aigu, joue encore plus doux. La mélodie doit briller comme la lune.",
      ],
      tricky: {
        4: "Joue le ré avec le doigt 5 de la main gauche, puis fa et la ensemble avec les doigts 2 et 1.",
        10: "Profite du silence de la mesure 9 pour monter la main droite d’une octave. Le doigt 3 arrive sur le la aigu.",
        19: "Ouvre la main gauche sur ré, fa et la, avec les doigts 5, 3 et 1. La main droite joue fa et la ensemble.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule. Chaque accord se déroule vers le haut par groupes de trois : grave, milieu, aigu.",
        "Joue seules les tierces et les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue les groupes de trois doux et réguliers, pour que la mélodie flotte au-dessus.",
        "Le la court dure un groupe de trois. Compte les groupes, et il tombe tout seul à sa place.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        17: "Ouvre la main droite sur une sixte, le pouce sur le la et l’auriculaire sur le fa.",
        18: "L’accord change au milieu de cette mesure. Change aussi de pédale à cet endroit.",
        19: "Ouvre la main gauche sur toute une octave : le doigt 5 sur le ré grave, le pouce sur le ré au-dessus.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule. Le pouce passe dessous et le doigt 3 passe par-dessus, si bien que chaque arpège couvre deux octaves.",
        "Joue seules les octaves de la main droite. Garde la main ouverte, le pouce et l’auriculaire prêts.",
        "Joue la fin lentement. La main gauche passe par-dessus la droite pour trois notes aiguës.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner les dernières notes.",
      ],
      tips: [
        "Dans chaque arpège, le pouce passe dessous en descendant, et le doigt 3 passe par-dessus en montant.",
        "Laisse l’auriculaire chanter un peu plus fort la note du haut de chaque octave.",
        "Pendant que la main droite tient son accord, fais flotter la main gauche au-dessus, comme un rayon de lune.",
      ],
      tricky: {
        10: "À partir d’ici, la main droite joue des octaves. Le pouce et l’auriculaire arrivent ensemble sur les deux sol dièse.",
        17: "La main gauche commence son arpège sur un mi grave. Profite du silence à la fin de la mesure 16 pour y arriver.",
        19: "Tiens l’accord de la main droite, et passe la main gauche par-dessus pour jouer sol dièse, do dièse et mi.",
      },
    },
  },
};

/** The guide of *Sarabande in D minor* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Haendel a écrit cette suite pour clavecin peu après ses vingt ans, et elle a été publiée pour la première fois en 1733. " +
    "Sa sarabande est une danse lente et solennelle à trois temps. " +
    "Le film « Barry Lyndon » de Stanley Kubrick (1975) l’utilise dans un arrangement pour orchestre.",
  funFact:
    "Le numéro de catalogue de la suite, HWV 437, vient du Händel-Werke-Verzeichnis, la liste de toutes les œuvres de Haendel.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 4 à 8 à la main droite seule. À la mesure 4, le pouce monte sur le la.",
        "Maintenant, la main gauche seule. Elle tient une note grave dans chaque mesure.",
        "Joue les huit premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Compte trois temps lents dans chaque mesure. La note courte arrive juste avant la mesure suivante.",
        "C’est une danse lente et fière. Joue chaque note longue calmement, avec un son plein.",
        "Garde le pouce près du la et du do dièse. Les doigts 2 à 4 montent pas à pas jusqu’au fa, puis reviennent.",
      ],
      tricky: {
        4: "Profite du silence pour monter le pouce droit sur le la. Il y reste jusqu’à la mesure 8.",
        9: "Après le silence, la main droite redescend. Le doigt 2 arrive sur le fa.",
        12: "Comme à la mesure 4, profite du silence pour monter le pouce droit sur le la.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Une note grave vient d’abord, et un accord de deux notes lui répond.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les huit premières mesures à deux mains, lentement, avec la pédale.",
        "Joue la fin, où la main gauche change d’accord à chaque temps.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Garde la pédale enfoncée toute la mesure, et change-la pile sur la barre de mesure.",
        "Joue la note grave un peu plus fort que l’accord qui la suit. C’est elle qui porte la danse.",
        "Pas de pédale dans ces deux mesures, pour que les accords restent nets. Tiens chacun avec les doigts.",
      ],
      tricky: {
        3: "Profite du court silence pour descendre la main gauche d’un saut jusqu’au fa. Le doigt 5 le joue.",
        6: "Profite du silence pour remonter la main gauche. Le doigt 4 joue le ré.",
        9: "La main gauche monte jusqu’au ré, et la main droite redescend jusqu’au fa.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les quatre premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur et bien régulière, pour que la mélodie lente chante au-dessus.",
        "À la fin de cette mesure, la basse passe en ré majeur. Change de pédale à cet endroit.",
        "La mélodie est la note du haut de chaque tierce : laisse le doigt du haut mener.",
      ],
      tricky: {
        11: "Joue fa et la avec les doigts 2 et 4. Ainsi, les doigts 3 et 5 sont prêts pour sol et si bémol.",
        15: "Joue d’abord les notes de cette mesure lentement. Les doigts changent à chaque note.",
        16: "Ouvre la main droite sur fa, la et ré, avec les doigts 1, 2 et 5.",
      },
    },
    legendary: {
      practice: [
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue les huit premières mesures à la main gauche seule. Lève-la avant chaque saut.",
        "Joue seuls les arpèges de la main gauche. Le pouce passe dessous, et le doigt 3 passe par-dessus.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
        "Le la frotte exprès contre le si bémol de la basse. Laisse ce frottement faire un peu mal, puis continue.",
        "Lève la main droite un peu en avance sur chaque nouvel accord, pour qu’elle arrive à temps.",
      ],
      tricky: {
        9: "Ici, la mélodie saute d’une octave vers le haut. Arrive sur les quatre notes ensemble.",
        14: "Après le grand accord, le doigt 2 prend le la aigu, et le doigt 5 monte jusqu’au ré.",
        15: "Les doigts changent à chaque note de cette mesure. Travaille-la lentement, toute seule.",
      },
    },
  },
};

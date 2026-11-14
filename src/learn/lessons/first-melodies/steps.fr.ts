/** *Steps* in French. */
import type { Translation } from "../../../i18n/translation";
import type { StepsTexts } from "./steps.en";

export const stepsFr: Translation<StepsTexts> = {
  title: "Les pas",
  steps: {
    "steps-demo": {
      text: "Regarde une petite mélodie. Chaque note passe à la touche juste à côté de la précédente.",
    },
    "what-a-step-is": {
      text: "Passer à la touche blanche voisine, c’est faire un pas. Un pas peut monter ou descendre. En position de do, c’est le doigt voisin qui le joue.",
    },
    "which-is-a-step": {
      text: "Lequel de ces mouvements est un pas ?",
      answers: ["De do à ré", "De do à mi", "De do à sol"],
    },
    "hear-steps": {
      text: "Un pas vers le haut sonne un peu plus aigu, et un pas vers le bas un peu plus grave. Écoute deux notes. La deuxième est-elle plus aiguë, plus grave ou pareille ?",
    },
    "step-up": {
      text: "Pose la main droite en position de do. Monte pas à pas, du pouce jusqu’à l’auriculaire.",
    },
    "step-down": {
      text: "Maintenant, redescends pas à pas, de l’auriculaire jusqu’au pouce.",
    },
    "next-finger-quiz": {
      text: "Le doigt 3 est sur mi. Quel doigt joue un pas vers le haut à partir de là ?",
      answers: ["Doigt 2", "Doigt 4", "Doigt 5"],
    },
    "step-up-and-down": {
      text: "Monte pas à pas jusqu’en haut, puis redescends jusqu’en bas. Suis la touche marquée.",
    },
    "stepping-tune": {
      text: "Pose la main droite en position de do. Cette mélodie n’est faite que de pas : do ré mi ré mi fa mi ré do.",
    },
    recap: {
      text: "Bravo. Tu sais jouer une mélodie faite de pas.",
      points: ["Un pas passe à la touche blanche voisine.", "Un pas monte ou descend.", "En position de do, c’est le doigt voisin qui joue un pas."],
    },
  },
};

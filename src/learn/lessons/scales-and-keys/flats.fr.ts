/** *Flats* in French. */
import type { Translation } from "../../../i18n/translation";
import type { FlatsTexts } from "./flats.en";

export const flatsFr: Translation<FlatsTexts> = {
  title: "Les bémols",
  steps: {
    "flat-sound": {
      text: "Écoute si, puis la touche noire juste à sa gauche. Puis écoute mi, et la touche noire juste à gauche de mi.",
    },
    "what-a-flat-is": {
      text: "Ce signe est un bémol : ♭. Un bémol baisse une note d’un demi-ton. Tu joues la touche juste à sa gauche.",
    },
    "find-b-flat": {
      text: "Trouve si bémol, qui s’écrit si♭. Pars de si et va une touche vers la gauche.",
    },
    "find-e-flat": {
      text: "Maintenant, trouve mi bémol, qui s’écrit mi♭. C’est la touche noire juste à gauche de mi.",
    },
    "which-is-e-flat": {
      text: "Quelle touche est mi bémol ?",
      answers: ["La touche blanche du ré", "La touche noire à droite de mi", "La touche noire à gauche de mi"],
    },
    "hear-flats": {
      text: "Un bémol sonne un peu plus grave. Écoute deux notes. La deuxième est-elle plus aiguë, plus grave ou pareille ?",
    },
    "two-names": {
      text: "Do dièse hausse do jusqu’à la touche noire à sa droite. Ré bémol baisse ré jusqu’à la touche noire à sa gauche. C’est la même touche, qui a donc deux noms.",
    },
    "other-name-quiz": {
      text: "Do dièse porte aussi un nom avec un bémol. Lequel ?",
      answers: ["Ré bémol", "Si bémol", "Mi bémol"],
    },
    "half-steps-down": {
      text: "À toi. Joue si, si bémol et la, puis mi, mi bémol et ré. Chaque note est un demi-ton sous la précédente.",
    },
    recap: {
      text: "Bravo. Tu sais ce qu’est un bémol.",
      points: [
        "Un bémol ♭ baisse une note d’un demi-ton.",
        "Si bémol est la touche noire à gauche de si, et mi bémol celle à gauche de mi.",
        "Une touche noire peut avoir deux noms : do dièse est aussi ré bémol.",
      ],
    },
  },
};

/** *Finger numbers* in French. */
import type { Translation } from "../../../i18n/translation";
import type { FingerNumbersTexts } from "./finger-numbers.en";

export const fingerNumbersFr: Translation<FingerNumbersTexts> = {
  title: "Les numéros des doigts",
  steps: {
    "right-hand-numbers": {
      text: "Chaque doigt a un numéro. À la main droite, le pouce est le 1 et l’auriculaire est le 5. Les doigts entre les deux sont le 2, le 3 et le 4.",
    },
    "finger-three-quiz": {
      text: "Quel doigt est le 3 ?",
      answers: ["Le pouce", "Le majeur", "L’auriculaire"],
    },
    "left-hand-numbers": {
      text: "La main gauche compte de la même façon : le pouce est le 1 et l’auriculaire est le 5. Les deux pouces sont le 1, donc les numéros se répondent comme dans un miroir.",
    },
    "left-thumb-quiz": {
      text: "Quel est le numéro du pouce gauche ?",
      answers: ["1", "3", "5"],
    },
    "five-fingers-demo": {
      text: "Regarde le piano jouer cinq touches à la suite, une pour chaque doigt de la main droite. Le pouce joue la première touche, puis viennent les doigts 2, 3, 4 et 5.",
    },
    "right-hand-five": {
      text: "À toi de les jouer. Pose le pouce droit sur le do central, et un doigt sur chaque touche blanche à sa droite. Joue avec les doigts 1, 2, 3, 4 et 5.",
    },
    "finger-pattern": {
      text: "Garde la main où elle est. Joue avec les doigts 1, 3, 5, 3, 1.",
    },
    "left-hand-five": {
      text: "Maintenant, la main gauche. Pose l’auriculaire, le doigt 5, sur le do indiqué. Joue en remontant jusqu’au pouce : 5, 4, 3, 2, 1.",
    },
    recap: {
      text: "Bravo. Chaque doigt a maintenant son numéro.",
      points: [
        "Le pouce est le 1 et l’auriculaire est le 5.",
        "Les deux mains comptent de la même façon, à partir du pouce.",
        "Dans une leçon, un numéro te dit quel doigt joue.",
      ],
    },
  },
};

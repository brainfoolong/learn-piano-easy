/** *Right hand in C position* in French. */
import type { Translation } from "../../../i18n/translation";
import type { RightHandCPositionTexts } from "./right-hand-c-position.en";

export const rightHandCPositionFr: Translation<RightHandCPositionTexts> = {
  title: "Main droite en position de do",
  steps: {
    "position-demo": {
      text: "Regarde cinq touches, du do central jusqu’au sol. Un doigt de la main droite repose sur chacune d’elles.",
    },
    "c-position": {
      text: "Voici la position de do. Le pouce droit repose sur le do central, et les doigts 2 à 5 sur ré, mi, fa et sol. Chaque doigt a sa touche et y reste.",
    },
    "finger-g-quiz": {
      text: "En position de do, quel doigt joue le sol ?",
      answers: ["Doigt 1", "Doigt 3", "Doigt 5"],
    },
    "finger-four-key": {
      text: "Pose la main droite en position de do. Joue la touche sous le doigt 4.",
    },
    "finger-two-key": {
      text: "Garde la main où elle est. Maintenant, joue la touche sous le doigt 2.",
    },
    "finger-three-quiz": {
      text: "En position de do, quelle touche appartient au doigt 3 ?",
      answers: ["Ré", "Mi", "Fa"],
    },
    "finger-pattern": {
      text: "Tes doigts connaissent maintenant leurs touches. Joue avec les doigts 1, 3, 2, 4, 5. La touche marquée t’indique chaque fois la suivante.",
    },
    "finger-walk-down": {
      text: "Maintenant, redescends depuis l’auriculaire. Joue avec les doigts 5, 4, 3, 2, 1.",
    },
    recap: {
      text: "Bravo. La main droite a maintenant sa place sur les touches.",
      points: [
        "En position de do, le pouce droit repose sur le do central.",
        "Les doigts 1 à 5 reposent sur do, ré, mi, fa et sol.",
        "Chaque doigt a sa touche : un numéro de doigt désigne donc une touche.",
      ],
    },
  },
};

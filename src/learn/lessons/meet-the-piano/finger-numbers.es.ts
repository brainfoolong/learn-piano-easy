/** *Finger numbers* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { FingerNumbersTexts } from "./finger-numbers.en";

export const fingerNumbersEs: Translation<FingerNumbersTexts> = {
  title: "Los números de los dedos",
  steps: {
    "right-hand-numbers": {
      text: "Cada dedo tiene un número. En la mano derecha, el pulgar es el 1 y el meñique es el 5. Los dedos que hay entre ellos son el 2, el 3 y el 4.",
    },
    "finger-three-quiz": {
      text: "¿Qué dedo es el 3?",
      answers: ["El pulgar", "El dedo medio", "El meñique"],
    },
    "left-hand-numbers": {
      text: "La mano izquierda cuenta igual: el pulgar es el 1 y el meñique es el 5. Los dos pulgares son el 1, así que los números de una mano son el reflejo de los de la otra.",
    },
    "left-thumb-quiz": {
      text: "¿Qué número es tu pulgar izquierdo?",
    },
    "five-fingers-demo": {
      text: "Mira cinco teclas seguidas, una para cada dedo de la mano derecha. El pulgar toca la primera tecla, y luego los dedos 2, 3, 4 y 5.",
    },
    "right-hand-five": {
      text: "Ahora tócalas tú. Pon el pulgar derecho en el do central y un dedo en cada tecla blanca a su derecha. Toca con los dedos 1, 2, 3, 4 y 5.",
    },
    "finger-pattern": {
      text: "Deja la mano donde está. Toca con los dedos 1, 3, 5, 3, 1.",
    },
    "left-hand-five": {
      text: "Ahora la mano izquierda. Pon el meñique, el dedo 5, en el do marcado. Toca subiendo hasta el pulgar: 5, 4, 3, 2, 1.",
    },
    recap: {
      text: "Bien hecho. Ahora tus dedos tienen número.",
      points: ["El pulgar es el 1 y el meñique es el 5.", "Las dos manos cuentan igual, desde el pulgar.", "Un número en una lección te dice qué dedo toca."],
    },
  },
};

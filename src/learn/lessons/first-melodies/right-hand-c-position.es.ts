/** *Right hand in C position* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { RightHandCPositionTexts } from "./right-hand-c-position.en";

export const rightHandCPositionEs: Translation<RightHandCPositionTexts> = {
  title: "Mano derecha en posición de do",
  steps: {
    "position-demo": {
      text: "Mira cinco teclas, desde el do central hasta sol. Sobre cada una descansa un dedo de la mano derecha.",
    },
    "c-position": {
      text: "Esta es la posición de do. El pulgar derecho descansa en el do central, y los dedos 2 a 5 en re, mi, fa y sol. Cada dedo tiene su propia tecla y se queda en ella.",
    },
    "finger-g-quiz": {
      text: "En la posición de do, ¿qué dedo toca sol?",
      answers: ["Dedo 1", "Dedo 3", "Dedo 5"],
    },
    "finger-four-key": {
      text: "Pon la mano derecha en la posición de do. Presiona la tecla que está bajo el dedo 4.",
    },
    "finger-two-key": {
      text: "Deja la mano donde está. Ahora presiona la tecla que está bajo el dedo 2.",
    },
    "finger-three-quiz": {
      text: "En la posición de do, ¿qué tecla le corresponde al dedo 3?",
      answers: ["Re", "Mi", "Fa"],
    },
    "finger-pattern": {
      text: "Tus dedos ya conocen sus teclas. Toca con los dedos 1, 3, 2, 4, 5. La tecla marcada te muestra cada vez la siguiente.",
    },
    "finger-walk-down": {
      text: "Ahora baja de nuevo desde el meñique. Toca con los dedos 5, 4, 3, 2, 1.",
    },
    recap: {
      text: "¡Bien hecho! Tu mano derecha tiene su lugar en el teclado.",
      points: [
        "En la posición de do, el pulgar derecho descansa en el do central.",
        "Los dedos 1 a 5 descansan en do, re, mi, fa y sol.",
        "Cada dedo tiene su tecla, así que el número de un dedo nombra una tecla.",
      ],
    },
  },
};

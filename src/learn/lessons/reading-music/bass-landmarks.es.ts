/** *Bass landmarks* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { BassLandmarksTexts } from "./bass-landmarks.en";

export const bassLandmarksEs: Translation<BassLandmarksTexts> = {
  title: "Notas guía en clave de fa",
  steps: {
    "landmarks-demo": {
      text: "Mira y escucha. El piano toca tres notas guía de la clave de fa: el do grave, el fa y el do central. Una nota guía es una nota que reconoces de un vistazo.",
    },
    "low-c": {
      text: "El do grave está en el segundo espacio desde abajo del pentagrama en clave de fa. Es el do debajo del do central. En la posición de do, lo toca el meñique de tu mano izquierda.",
    },
    "play-low-c": {
      text: "Este es el do grave, en el segundo espacio. Tócalo en el teclado.",
    },
    "middle-c-above": {
      text: "El do central está en su propia línea adicional, justo encima del pentagrama en clave de fa. Es el mismo do central que viste debajo del pentagrama en clave de sol.",
    },
    "middle-c-quiz": {
      text: "¿Dónde está el do central en clave de fa?",
      answers: ["En una línea adicional justo debajo del pentagrama", "En una línea adicional justo encima del pentagrama", "En la línea del medio"],
    },
    "fourth-line-quiz": {
      text: "¿Qué nota guía está en la cuarta línea desde abajo?",
      answers: ["El do grave", "El fa", "El do central"],
    },
    "count-from-a-landmark": {
      text: "De una línea al espacio siguiente hay un paso, y cambia el nombre de la nota. Para leer una nota, parte de la nota guía más cercana. Luego cuenta los pasos hacia arriba o hacia abajo.",
    },
    "count-quiz": {
      text: "Una nota está en la línea del medio, un paso por encima del do grave. ¿Qué nota es?",
      answers: ["Si", "Re", "Mi"],
    },
    "play-bass-landmarks": {
      text: "Toca cada nota que veas en el pentagrama en clave de fa. Algunas son notas guía, y las demás están a uno o dos pasos de una nota guía.",
    },
    "name-by-counting": {
      text: "Nombra cada nota. Selecciona su nombre. Cuenta desde la nota guía más cercana: el do grave, el fa o el do central.",
    },
    recap: {
      text: "¡Bien hecho! Ya sabes moverte por el pentagrama en clave de fa.",
      points: ["El do grave está en el segundo espacio.", "Fa está en la cuarta línea, entre los dos puntos de la clave.", "El do central está en una línea adicional justo encima del pentagrama.", "Para leer cualquier nota, cuenta desde la nota guía más cercana."],
    },
  },
};

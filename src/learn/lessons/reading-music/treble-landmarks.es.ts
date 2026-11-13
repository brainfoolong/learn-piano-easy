/** *Treble landmarks* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { TrebleLandmarksTexts } from "./treble-landmarks.en";

export const trebleLandmarksEs: Translation<TrebleLandmarksTexts> = {
  title: "Notas guía en clave de sol",
  steps: {
    "landmarks-demo": {
      text: "Mira y escucha. El piano toca el do central, luego sol y luego el do de arriba. Estas tres notas son tus notas guía.",
    },
    "three-landmarks": {
      text: "Una nota guía es una nota que reconoces de un vistazo. El do central está en su línea adicional, y sol está en la segunda línea. El do agudo está en el tercer espacio desde abajo.",
    },
    "high-c-quiz": {
      text: "¿Dónde está el do agudo en el pentagrama en clave de sol?",
      answers: ["En la segunda línea", "En una línea adicional debajo del pentagrama", "En el tercer espacio desde abajo"],
    },
    "name-landmarks": {
      text: "Nombra cada nota guía: do o sol.",
    },
    "count-from-a-landmark": {
      text: "Cualquier otra nota está a pocos pasos de una nota guía. De una línea al espacio siguiente hay un paso, y de un espacio a la línea siguiente, también. Cada paso hacia arriba es la nota siguiente.",
    },
    "count-quiz": {
      text: "Una nota está un paso por encima de sol, en el espacio sobre la segunda línea. ¿Qué nota es?",
      answers: ["Fa", "La", "Si"],
    },
    "name-neighbours": {
      text: "Nombra cada nota. Busca la nota guía más cercana y luego cuenta los pasos hacia arriba o hacia abajo.",
    },
    "read-treble-landmarks": {
      text: "Toca cada nota que veas en el pentagrama en clave de sol. Algunas son notas guía, y las demás están a un paso de una nota guía.",
    },
    recap: {
      text: "¡Bien hecho! Ya tienes tres notas guía en clave de sol.",
      points: ["El do central está en una línea adicional debajo del pentagrama.", "Sol está en la segunda línea, y el do agudo en el tercer espacio.", "Para encontrar cualquier nota, cuenta los pasos desde la nota guía más cercana."],
    },
  },
};

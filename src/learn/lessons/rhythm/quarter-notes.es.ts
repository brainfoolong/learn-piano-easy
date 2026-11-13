/** *Quarter notes* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { QuarterNotesTexts } from "./quarter-notes.en";

export const quarterNotesEs: Translation<QuarterNotesTexts> = {
  title: "Negras",
  steps: {
    "quarter-demo": {
      text: "Mira y escucha. El do central suena una vez en cada tiempo, y cada nota dura lo mismo que la siguiente.",
    },
    "what-a-quarter-note-is": {
      text: "Cada nota que escuchaste era una negra. Una negra dura un tiempo. Así que tocas una nota en cada tiempo.",
    },
    "quarter-beats-quiz": {
      text: "¿Cuánto dura una negra?",
      answers: ["Un tiempo", "Dos tiempos", "Cuatro tiempos"],
    },
    "quarter-taps": {
      text: "Cada toque es una negra. Selecciona Empezar y escucha cuatro clics. Después toca una tecla cualquiera una vez en cada clic.",
    },
    "phrase-demo": {
      text: "Este es el comienzo de una melodía famosa. Cada nota es una negra, una en cada tiempo.",
    },
    "quarter-phrase": {
      text: "Pon la mano derecha en la posición de do. Toca la melodía y cuenta un tiempo por cada nota.",
    },
    recap: {
      text: "¡Bien hecho! Ya conoces tu primera duración de nota.",
      points: ["Una negra dura un tiempo.", "Tocas una negra en cada tiempo.", "Muchas melodías están hechas sobre todo de negras."],
    },
  },
};

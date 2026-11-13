/** *Counting to four* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { CountingToFourTexts } from "./counting-to-four.en";

export const countingToFourEs: Translation<CountingToFourTexts> = {
  title: "Contar hasta cuatro",
  steps: {
    "bars-demo": {
      text: "Mira y escucha. Un do grave abre cada grupo de cuatro tiempos, y un sol suena en los otros tres.",
    },
    "what-a-bar-is": {
      text: "Los tiempos se agrupan en compases, y una línea divisoria cierra cada compás. Aquí cada compás tiene cuatro tiempos, que se cuentan 1, 2, 3, 4. Es un compás de cuatro por cuatro (4/4), y el tiempo 1 es el más fuerte.",
    },
    "beats-in-a-bar-quiz": {
      text: "¿Cuántos tiempos tiene un compás de 4/4?",
      answers: ["Tres tiempos", "Cuatro tiempos", "Ocho tiempos"],
    },
    "strongest-beat-quiz": {
      text: "¿Qué tiempo del compás se siente más fuerte?",
      answers: ["El tiempo 1", "El tiempo 2", "El tiempo 4"],
    },
    "count-aloud-tap": {
      text: "Selecciona Empezar y toca una tecla cualquiera en cada clic. Cuenta en voz alta mientras tocas: «1, 2, 3, 4». Di el tiempo 1 un poco más fuerte.",
    },
    "fill-a-bar-quiz": {
      text: "¿Cuál de estas opciones llena un compás de 4/4?",
      answers: ["Dos blancas", "Tres negras", "Una redonda y una negra"],
    },
    recap: {
      text: "¡Bien hecho! Ya sabes contar compases de cuatro.",
      points: ["Los tiempos se agrupan en compases, y una línea divisoria cierra cada compás.", "En el compás de 4/4 cuentas 1, 2, 3, 4.", "El tiempo 1 es el más fuerte del compás."],
    },
  },
};

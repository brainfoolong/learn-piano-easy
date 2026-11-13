/** *Three-four time* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { ThreeFourTimeTexts } from "./three-four-time.en";

export const threeFourTimeEs: Translation<ThreeFourTimeTexts> = {
  title: "Compás de tres por cuatro",
  steps: {
    "waltz-demo": {
      text: "Mira y escucha. Una nota grave suena en el primer tiempo, y notas más agudas en los dos siguientes. El patrón se repite.",
    },
    "beats-in-threes": {
      text: "Hay música que agrupa sus tiempos de tres en tres. Cuentas 1, 2, 3, 1, 2, 3, y el tiempo 1 es el más fuerte. Es el compás de tres por cuatro (3/4), el compás del vals.",
    },
    "beats-in-a-bar-quiz": {
      text: "¿Cuántos tiempos tiene un compás de 3/4?",
      answers: ["Dos", "Tres", "Cuatro"],
    },
    "which-is-a-waltz-quiz": {
      text: "Un vals está en compás de 3/4. ¿Cómo lo cuentas?",
    },
    "tap-in-threes": {
      text: "Selecciona Empezar y escucha primero cuatro clics. Después toca una tecla cualquiera en cada clic y cuenta en voz alta: «1, 2, 3». Di cada 1 un poco más fuerte.",
    },
    recap: {
      text: "¡Bien hecho! Ya sabes contar de tres en tres.",
      points: ["Hay música que agrupa sus tiempos de tres en tres.", "Un compás de 3/4 tiene tres tiempos, que se cuentan 1, 2, 3.", "El tiempo 1 es el más fuerte, como en un vals."],
    },
  },
};

/** *The treble clef* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { TheTrebleClefTexts } from "./the-treble-clef.en";

export const theTrebleClefEs: Translation<TheTrebleClefTexts> = {
  title: "La clave de sol",
  steps: {
    "a-clef-starts-the-staff": {
      text: "Cada pentagrama empieza con una clave. La clave te dice qué nota es cada línea y cada espacio. Tu mano derecha lee sobre todo la clave de sol.",
    },
    "the-g-line": {
      text: "La clave de sol se enrosca alrededor de la segunda línea desde abajo. Esa línea es sol, y por eso se llama clave de sol. Es el primer sol por encima del do central.",
    },
    "g-line-quiz": {
      text: "¿Alrededor de qué línea se enrosca la clave de sol?",
      answers: ["La línea de abajo", "La segunda línea desde abajo", "La línea de arriba"],
    },
    "hear-g-demo": {
      text: "Escucha. Este es el sol de la segunda línea, tocado dos veces.",
    },
    "play-g": {
      text: "Esta nota está en la línea de sol. Tócala en el piano.",
    },
    "g-neighbours": {
      text: "Desde sol puedes encontrar sus vecinas. Un paso hacia arriba, en el espacio de encima, está la nota la. Un paso hacia abajo, en el espacio de debajo, está fa.",
    },
    "neighbours-demo": {
      text: "Mira y escucha: sol, un paso arriba hasta la nota la, de vuelta a sol, un paso abajo hasta fa y de vuelta a sol.",
    },
    "space-above-g-quiz": {
      text: "Una nota está en el espacio justo encima de la línea de sol. ¿Qué nota es?",
      answers: ["Fa", "La", "Si"],
    },
    "one-more-step": {
      text: "Sigue avanzando nota por nota. Después de la nota la viene si, en la línea del medio. Antes de fa viene mi, en la línea de abajo.",
    },
    "middle-line-quiz": {
      text: "¿Qué nota está en la línea del medio en clave de sol?",
      answers: ["Sol", "La", "Si"],
    },
    "play-treble-notes": {
      text: "Toca cada nota que veas. Busca primero la línea de sol y luego cuenta los pasos hacia arriba o hacia abajo.",
    },
    "name-treble-notes": {
      text: "Ahora nombra cada nota. Parte de la línea de sol y avanza paso a paso hacia arriba o hacia abajo hasta llegar a ella.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes leer tus primeras notas en clave de sol.",
      points: ["La clave de sol se enrosca alrededor de la segunda línea, que es sol.", "Un paso hacia arriba o hacia abajo lleva a la siguiente línea o espacio, y a la nota siguiente.", "Alrededor de sol están mi, fa, la y si."],
    },
  },
};

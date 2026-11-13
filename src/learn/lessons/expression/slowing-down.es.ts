/** *Slowing down* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { SlowingDownTexts } from "./slowing-down.en";

export const slowingDownEs: Translation<SlowingDownTexts> = {
  title: "Ir más despacio",
  steps: {
    "slowing-demo": {
      text: "Escucha esta frase. Sube a una velocidad constante. De vuelta hacia abajo, cada nota dura un poco más.",
    },
    "what-ritardando-is": {
      text: "La música fue más despacio a propósito. La indicación rit., abreviatura de ritardando, te pide ir más despacio poco a poco. Suele aparecer al final de una pieza.",
    },
    "rit-means": {
      text: "Ves rit. encima de unos compases. ¿Qué haces?",
      answers: ["Ir más despacio poco a poco", "Tocar más fuerte", "Parar de golpe", "Ir más rápido"],
    },
    "steady-tap": {
      text: "Ir más despacio solo tiene sentido después de un pulso constante. Toca al ritmo de los clics y síguelos con exactitud.",
    },
    "play-the-ending": {
      text: "Toca el final de la frase: sol, fa, mi, re y do, desde el sol encima del do central. Tómate un poco más de tiempo en cada nota y descansa en el último do.",
    },
    "what-a-fermata-is": {
      text: "Este signo parece un ojo: una curva con un punto debajo. Es un calderón, el signo de pausa. La nota que está debajo se mantiene más de lo escrito.",
    },
    "fermata-demo": {
      text: "Escucha el calderón sobre el sol. El pulso se detiene mientras suena el sol, y luego la música sigue.",
    },
    "fermata-means": {
      text: "Hay un calderón sobre una nota. ¿Qué te pide?",
      answers: ["Tocarla corta", "Tocarla más fuerte", "Omitirla", "Mantenerla más de lo escrito"],
    },
    "back-in-tempo": {
      text: "Después de un rit., las palabras a tempo devuelven la velocidad que tenías antes. En italiano significan «a tiempo».",
    },
    "a-tempo-demo": {
      text: "Escucha. La frase va más despacio en el medio, y luego a tempo le devuelve su velocidad inicial.",
    },
    "a-tempo-means": {
      text: "Fuiste más despacio por un rit. Ahora ves a tempo. ¿Qué haces?",
      answers: ["Ir todavía más despacio", "Volver a la velocidad inicial", "Mantener la nota siguiente", "Tocar suave"],
    },
    "where-rit-goes": {
      text: "¿Dónde encuentras rit. con más frecuencia?",
      answers: ["En la primera nota de todas", "En cada compás", "Cerca del final de una pieza", "Solo en la mano izquierda"],
    },
    "ending-with-fermata": {
      text: "Toca mi, re, do, re, mi, mi desde el mi encima del do central, cada vez más despacio. Termina en un acorde: el do debajo del do central y el sol encima de él con la mano izquierda, y un mi más con la derecha. Deja sonar el acorde un poco más, como pide un calderón.",
    },
    "rall-means": {
      text: "Algunas piezas escriben en su lugar rall., abreviatura de rallentando. ¿Qué indicación significa lo mismo?",
      answers: ["La indicación rit.", "La indicación a tempo", "El calderón", "La indicación mf"],
    },
    recap: {
      text: "¡Bien hecho! Ya sabes cambiar el tempo a propósito.",
      points: [
        "rit. y rall. hacen ir más despacio poco a poco, sobre todo en un final.",
        "Un calderón mantiene su nota más de lo escrito.",
        "a tempo devuelve la velocidad inicial.",
      ],
    },
  },
};

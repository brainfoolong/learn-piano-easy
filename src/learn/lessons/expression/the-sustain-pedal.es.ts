/** *The sustain pedal* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { TheSustainPedalTexts } from "./the-sustain-pedal.en";

export const theSustainPedalEs: Translation<TheSustainPedalTexts> = {
  title: "El pedal de resonancia",
  steps: {
    "pedal-demo": {
      text: "Escucha do, mi, sol y do dos veces. La primera vez, cada nota se apaga cuando su tecla sube. La segunda vez, todas siguen sonando juntas.",
    },
    "what-the-pedal-does": {
      text: "El pedal derecho es el pedal de resonancia. Mientras lo pisas, cada nota sigue sonando aunque sueltes su tecla.",
    },
    "pedal-keeps": {
      text: "¿Qué hace el pedal derecho?",
      answers: ["Hace que cada nota suene más fuerte", "Hace que las notas sean más cortas", "Hace que las notas sigan sonando al soltarlas", "Sube las teclas una octava"],
    },
    "foot-on-pedal": {
      text: "Usa el pie derecho. Deja el talón en el suelo y pisa el pedal con la parte delantera del pie. Suéltalo de la misma forma, con suavidad.",
    },
    "which-foot": {
      text: "¿Cómo va tu pie en el pedal de resonancia?",
      answers: ["Pie izquierdo, talón en el aire", "Pie derecho, dedos fuera del pedal", "Pie izquierdo, talón en el suelo", "Pie derecho, talón en el suelo"],
    },
    "pedal-down-c": {
      text: "Pisa el pedal derecho y mantenlo pisado. Con la mano izquierda, toca el do debajo del do central, luego mi y luego sol. Suelta cada tecla.",
    },
    "hear-pedal-hold": {
      text: "Escucha do, mi y sol tocadas una tras otra con el pedal pisado. Cada nota sigue sonando mientras empieza la siguiente.",
    },
    "what-pedal-did": {
      text: "En la demostración, cada nota siguió sonando después de que empezó la siguiente. ¿Qué las mantuvo?",
      answers: ["El pedal de resonancia", "Presionar las teclas más fuerte", "Tocar las notas más rápido", "La mano derecha"],
    },
    "pedal-marks": {
      text: "Bajo el pentagrama, Ped. significa pisar el pedal, y un asterisco significa soltarlo. Algunas partituras dibujan en su lugar una línea en forma de corchete, desde que se pisa hasta que se suelta.",
    },
    "star-means": {
      text: "Bajo el pentagrama ves un asterisco. ¿Qué le dice a tu pie?",
      answers: ["Pisar el pedal", "Soltar el pedal", "Pisar el pedal dos veces", "Mantener el pedal pisado hasta el final"],
    },
    "chords-without-pedal": {
      text: "Primero aprende cuatro acordes arpegiados con la mano izquierda, sin el pedal. Empieza en el do debajo del do central: do-mi-sol, luego do-fa-la, luego si-re-sol y otra vez do-mi-sol.",
    },
    "chords-blur": {
      text: "Si el pedal sigue pisado de un acorde al siguiente, los dos acordes suenan a la vez y se mezclan. Por eso, cambia el pedal con cada acorde nuevo.",
    },
    "change-the-pedal": {
      text: "Toca los mismos acordes. Antes de cada acorde, suelta el pedal y toca su primera nota. Luego pisa el pedal y toca sus otras dos notas.",
    },
    "hear-pedal-change": {
      text: "Escucha los cuatro acordes con un cambio de pedal en cada uno. Cada acorde sigue sonando y se corta limpiamente cuando empieza el siguiente.",
    },
    "why-change": {
      text: "¿Por qué cambias el pedal con cada acorde nuevo?",
      answers: ["Para tocar más fuerte", "Para descansar el pie", "Para que los acordes no se mezclen", "Para que las notas suenen más cortas"],
    },
    recap: {
      text: "¡Bien hecho! Ahora tu pie derecho también toca.",
      points: [
        "El pedal derecho hace que las notas sigan sonando aunque sueltes las teclas.",
        "Písalo con el pie derecho, con el talón en el suelo.",
        "Ped. significa pisar el pedal, y un asterisco significa soltarlo.",
        "Cambia el pedal con cada acorde nuevo para que los acordes no se mezclen.",
      ],
    },
  },
};

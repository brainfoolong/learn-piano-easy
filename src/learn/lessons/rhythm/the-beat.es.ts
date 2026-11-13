/** *The beat* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { TheBeatTexts } from "./the-beat.en";

export const theBeatEs: Translation<TheBeatTexts> = {
  title: "El pulso",
  steps: {
    "beat-demo": {
      text: "Mira y escucha. Debajo de la melodía suena una nota grave una y otra vez, siempre a la misma velocidad.",
    },
    "what-the-beat-is": {
      text: "La música tiene un pulso constante, como los latidos de tu corazón o tus pasos al caminar. La nota grave que escuchaste marcaba el pulso. Puedes seguirlo con la cabeza o con golpecitos.",
    },
    "tap-the-beat": {
      text: "Selecciona Empezar y escucha primero cuatro clics. Después toca una tecla cualquiera una vez en cada clic.",
    },
    "steady-beat-quiz": {
      text: "Una canción suena de principio a fin. ¿Qué hace su pulso?",
      answers: ["Se acelera y se frena", "Se mantiene constante"],
    },
    "tap-a-longer-beat": {
      text: "Ahora una ronda más larga, un poco más rápida. Sigue tocando con los clics, una vez en cada uno.",
    },
    recap: {
      text: "¡Bien hecho! Ya sientes el pulso y puedes tocar a la par.",
      points: ["La música tiene un pulso constante.", "El pulso es como los latidos del corazón o los pasos al caminar.", "Tocas una vez en cada tiempo."],
    },
  },
};

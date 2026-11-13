/** *Tempo and the metronome* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { TempoAndTheMetronomeTexts } from "./tempo-and-the-metronome.en";

export const tempoAndTheMetronomeEs: Translation<TempoAndTheMetronomeTexts> = {
  title: "El tempo y el metrónomo",
  steps: {
    "slow-demo": {
      text: "Mira y escucha. Esta melodía sube despacio desde el do central hasta sol y vuelve a bajar.",
    },
    "fast-demo": {
      text: "Ahora la misma melodía otra vez. Las notas son las mismas, pero el pulso va más rápido.",
    },
    "what-tempo-is": {
      text: "El tempo es la velocidad del pulso. Se mide en pulsos por minuto, o BPM. A 60 BPM llega un pulso por segundo, y a 120 BPM llegan dos por segundo.",
    },
    "faster-tempo-quiz": {
      text: "¿Qué tempo es más rápido?",
      answers: ["60 pulsos por minuto", "120 pulsos por minuto"],
    },
    "slow-first": {
      text: "Un metrónomo marca el pulso con clics al tempo que elijas. Practica una pieza nueva primero despacio. Cuando te resulte fácil, pon el metrónomo un poco más rápido.",
    },
    "slow-first-quiz": {
      text: "Una pieza nueva te resulta difícil. ¿Cómo la practicas?",
      answers: ["Primero despacio y luego un poco más rápido", "A toda velocidad desde el principio"],
    },
    "slow-tap": {
      text: "El metrónomo marca 60 BPM. Selecciona Empezar y toca una tecla cualquiera en cada clic.",
    },
    "faster-tap": {
      text: "El metrónomo marca 104 BPM. Selecciona Empezar y toca una tecla cualquiera una vez en cada clic.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes mantener el pulso a dos tempos distintos. Ahora viene Ode to Joy, primero despacio.",
      points: ["El tempo es la velocidad del pulso, contada en pulsos por minuto.", "Un metrónomo marca el pulso al tempo que elijas.", "Practica primero despacio y luego un poco más rápido."],
    },
  },
};

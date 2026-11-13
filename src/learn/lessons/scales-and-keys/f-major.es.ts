/** *F major* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { FMajorTexts } from "./f-major.en";

export const fMajorEs: Translation<FMajorTexts> = {
  title: "Fa mayor",
  steps: {
    "f-major-sound": {
      text: "Escucha una escala nueva. Empieza y termina en fa. ¿Oyes una tecla negra en ella?",
    },
    "pattern-on-f": {
      text: "Empieza el patrón de la escala en fa: tono, tono, semitono, tono, tono, tono, semitono. Del fa al sol hay un tono, y del sol al la también.",
    },
    "after-a": {
      text: "Lo siguiente es un semitono por encima del la. ¿Qué tecla es?",
      answers: ["Si", "Si♭", "Do"],
    },
    "find-b-flat": {
      text: "Busca si♭. Es la tecla negra justo a la izquierda de si.",
    },
    "f-fingering": {
      text: "Pon el pulgar derecho en fa. Toca fa, sol, la y si♭ con los dedos 1, 2, 3 y 4. Luego pasa el pulgar por debajo hasta do y sigue con 1, 2, 3, 4.",
    },
    "where-thumb-under": {
      text: "En fa mayor, ¿después de qué tecla pasa el pulgar por debajo?",
      answers: ["Si♭", "La", "Do"],
    },
    "f-scale-up": {
      text: "Ahora tú. Toca la escala de fa mayor hacia arriba, del fa que está encima del do central hasta el fa siguiente. Acuérdate del si♭.",
    },
    "f-scale-down": {
      text: "Ahora tócala hacia abajo. Después de do, cruza el dedo 4 por encima del pulgar hasta si♭.",
    },
    "tune-in-f": {
      text: "Aquí tienes una melodía corta en fa mayor. Debajo, tu mano izquierda mantiene la quinta fa-do.",
    },
    "tune-and-fifth": {
      text: "Tu mano izquierda toca la quinta grave: el do debajo del do central y el fa que está debajo de él. Tu mano derecha empieza en el fa que está encima del do central. Toca la quinta junto con la primera nota de cada compás.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes tocar en fa mayor.",
      points: [
        "El patrón de la escala empezado en fa necesita una tecla negra: si♭.",
        "La mano derecha toca 1-2-3-4, pasa el pulgar por debajo hasta do, y luego 1-2-3-4.",
        "Al bajar, el dedo 4 cruza por encima del pulgar hasta si♭.",
      ],
    },
  },
};

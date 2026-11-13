/** *The C major scale* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { TheCMajorScaleTexts } from "./the-c-major-scale.en";

export const theCMajorScaleEs: Translation<TheCMajorScaleTexts> = {
  title: "La escala de do mayor",
  steps: {
    "scale-demo": {
      text: "Escucha ocho notas que suben del do central al do siguiente. Todas las teclas son blancas.",
    },
    "what-a-scale-is": {
      text: "Una escala es una fila de notas que sube paso a paso. La escala de do mayor empieza en do y termina en el do siguiente.",
    },
    "scale-pattern": {
      text: "Sus pasos siguen un patrón: tono, tono, semitono, tono, tono, tono, semitono. Los semitonos son de mi a fa y de si a do.",
    },
    "first-half-step": {
      text: "¿Dónde está el primer semitono de la escala de do mayor?",
      answers: ["Del do al re", "Del sol al la", "Del mi al fa"],
    },
    "first-three": {
      text: "Pon el pulgar derecho en el do central. Toca do, re y mi con los dedos 1, 2 y 3.",
    },
    "thumb-under": {
      text: "Tu mano tiene solo cinco dedos para ocho notas. Después de mi, pasa el pulgar por debajo de la mano y toca fa con él.",
    },
    "which-finger-on-f": {
      text: "Tocas do, re y mi con los dedos 1, 2 y 3. ¿Qué dedo toca fa?",
      answers: ["El dedo 4", "El dedo 1, el pulgar", "El dedo 5"],
    },
    "tuck-to-f": {
      text: "Toca otra vez do, re y mi. Luego pasa el pulgar por debajo y toca fa. Mantén la muñeca tranquila y nivelada.",
    },
    "last-five": {
      text: "Ahora tu pulgar está en fa. Toca fa, sol, la, si y do con los dedos 1, 2, 3, 4 y 5.",
    },
    "scale-up": {
      text: "Toca la escala de do mayor hacia arriba con la mano derecha, del do central al do siguiente. Dedos 1, 2, 3, luego el pulgar pasa por debajo, y después 1, 2, 3, 4, 5.",
    },
    "scale-down": {
      text: "Ahora baja otra vez con los dedos 5, 4, 3, 2, 1. Después de fa, el dedo 3 cruza por encima del pulgar hasta mi.",
    },
    recap: {
      text: "¡Bien hecho! Tocaste tu primera escala.",
      points: [
        "La escala de do mayor son ocho teclas blancas de do a do.",
        "Su patrón es tono, tono, semitono, tono, tono, tono, semitono.",
        "Al subir, el pulgar pasa por debajo hasta fa.",
        "Al bajar, el dedo 3 cruza por encima del pulgar hasta mi.",
      ],
    },
  },
};

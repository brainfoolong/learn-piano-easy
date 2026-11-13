/** *Finger over the thumb* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { FingerOverTheThumbTexts } from "./finger-over-the-thumb.en";

export const fingerOverTheThumbEs: Translation<FingerOverTheThumbTexts> = {
  title: "Cruce de dedos",
  steps: {
    "down-demo": {
      text: "Escucha la escala de do mayor hacia abajo, del do agudo al do central. La mano nunca se detiene, y las notas fluyen sin cortes.",
    },
    "finger-over": {
      text: "Al bajar, toca do, si, la, sol y fa con los dedos 5, 4, 3, 2 y 1. Luego el dedo 3 cruza por encima del pulgar hasta mi. Los dedos 2 y 1 tocan re y do.",
    },
    "which-finger-crosses": {
      text: "Al bajar, tu pulgar tocó fa. ¿Qué dedo cruza por encima de él hasta mi?",
      answers: ["El dedo 2", "El dedo 3", "El dedo 5"],
    },
    "top-five-down": {
      text: "Pon el meñique en el do que está encima del do central. Baja tocando hasta fa, un dedo para cada tecla.",
    },
    "cross-onto-e": {
      text: "Empieza en fa con el pulgar. Cruza el dedo 3 por encima del pulgar hasta mi, y luego toca re y do.",
    },
    "right-hand-down": {
      text: "Ahora toca la escala entera hacia abajo, del do agudo al do central. Mantén la mano suelta cuando el dedo 3 cruza por encima.",
    },
    "left-hand-up": {
      text: "Tu mano izquierda hace lo mismo al subir. Toca do, re, mi, fa y sol con los dedos 5, 4, 3, 2 y 1. Luego el dedo 3 cruza por encima del pulgar hasta el la.",
    },
    "left-hand-demo": {
      text: "Mira cómo la mano izquierda toca do mayor hacia arriba, del do debajo del do central hasta el do central.",
    },
    "left-cross-key": {
      text: "Tu pulgar izquierdo está en sol. El dedo 3 cruza por encima de él. ¿En qué tecla cae?",
      answers: ["La", "Fa", "Si"],
    },
    "left-scale-up": {
      text: "Ahora tú. Toca la escala hacia arriba con la mano izquierda, del do debajo del do central hasta el do central.",
    },
    "scale-up-and-down": {
      text: "Toca la escala de do mayor con la mano derecha, del do central hasta el do siguiente y de vuelta abajo. Al subir, el pulgar pasa por debajo. Al bajar, el dedo 3 cruza por encima del pulgar.",
    },
    recap: {
      text: "¡Bien hecho! Ahora tus dedos cruzan en los dos sentidos.",
      points: [
        "Al bajar, tu mano derecha toca 5, 4, 3, 2, 1, y luego el 3 cruza por encima del pulgar.",
        "Al subir, tu mano izquierda hace lo mismo, y el 3 cruza hasta el la.",
        "En la mano derecha, el pulgar pasa por debajo al subir, y el dedo 3 cruza por encima al bajar.",
      ],
    },
  },
};

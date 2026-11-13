/** *Skips* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { SkipsTexts } from "./skips.en";

export const skipsEs: Translation<SkipsTexts> = {
  title: "Saltos",
  steps: {
    "skip-demo": {
      text: "Mira y escucha. Cada nota salta por encima de una tecla blanca, primero hacia arriba y luego de vuelta hacia abajo.",
    },
    "what-a-skip-is": {
      text: "Un salto pasa por encima de una tecla blanca. De do a mi, dejas fuera el re. El pulgar toca do, el dedo 3 toca mi y el dedo 2 descansa.",
    },
    "skip-from-c-quiz": {
      text: "Tu pulgar está en do. ¿Qué tecla está a un salto?",
      answers: ["Re", "Mi", "Fa"],
    },
    "skips-up": {
      text: "Pon la mano derecha en la posición de do. Toca los saltos hacia arriba: dedos 1 y 3, luego 2 y 4, luego 3 y 5.",
    },
    "skips-down": {
      text: "Ahora los mismos saltos hacia abajo. Empieza con el dedo 5 y sigue la tecla marcada.",
    },
    "step-or-skip-quiz": {
      text: "El dedo 4 toca fa y luego el dedo 5 toca sol. ¿Es un paso o un salto?",
      answers: ["Un paso", "Un salto"],
    },
    "mixed-phrase": {
      text: "Pon la mano derecha en la posición de do. Esta melodía mezcla pasos y un salto: do re mi, un salto hacia arriba hasta sol, luego fa mi re do.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes tocar saltos.",
      points: [
        "Un salto pasa por encima de una tecla blanca.",
        "En la posición de do, un salto deja fuera un dedo.",
        "Una melodía puede mezclar pasos y saltos.",
      ],
    },
  },
};

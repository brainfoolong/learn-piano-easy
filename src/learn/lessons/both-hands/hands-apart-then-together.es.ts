/** *Hands apart, then together* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { HandsApartThenTogetherTexts } from "./hands-apart-then-together.en";

export const handsApartThenTogetherEs: Translation<HandsApartThenTogetherTexts> = {
  title: "Primero separadas, luego juntas",
  steps: {
    "three-passes": {
      text: "Escucha una melodía corta tres veces. Primero la toca la mano derecha, luego la izquierda y al final las dos manos juntas.",
    },
    "why-apart": {
      text: "Con cada mano por separado se aprende más fácil. Cuando las dos manos saben sus notas, las juntas.",
    },
    "first-step-quiz": {
      text: "Empiezas una pieza nueva para las dos manos. ¿Qué practicas primero?",
      answers: ["Cada mano por separado", "Las dos manos juntas, a toda velocidad", "Solo la mano izquierda, nunca la derecha"],
    },
    "right-alone": {
      text: "Primero la mano derecha. Empieza en el do central y toca do, re, mi, re, do.",
    },
    "left-alone": {
      text: "Ahora la mano izquierda sola. Empieza en el do una octava más abajo y toca lo mismo: do, re, mi, re, do.",
    },
    "together-steps": {
      text: "Ahora las dos manos juntas. Presiona cada par de teclas al mismo tiempo. Para empezar, un do con cada mano.",
    },
    "slow-together": {
      text: "Tocar con las dos manos a la vez es nuevo, así que ve despacio. La velocidad llega después, cuando las dos manos se sientan seguras juntas.",
    },
    "mirror-tune": {
      text: "Aquí tienes una melodía nueva. Tus manos se separan y vuelven, como en un espejo.",
    },
    "mirror-right": {
      text: "Mano derecha sola. Toca mi, fa, sol, fa, mi.",
    },
    "mirror-left": {
      text: "Mano izquierda sola. Toca mi, re, do, re, mi, empezando en el mi debajo del do central. Así bajas, mientras la mano derecha subía.",
    },
    "mirror-together": {
      text: "Ahora júntalas. Tómate tu tiempo y presiona cada par de teclas a la vez.",
    },
    recap: {
      text: "¡Bien hecho! Tocaste por primera vez con las dos manos a la vez.",
      points: [
        "Aprende una pieza nueva primero con cada mano por separado.",
        "Luego junta las manos, despacio.",
        "Tus manos pueden moverse en la misma dirección o en direcciones opuestas.",
      ],
    },
  },
};

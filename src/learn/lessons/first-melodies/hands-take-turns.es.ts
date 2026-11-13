/** *Hands take turns* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { HandsTakeTurnsTexts } from "./hands-take-turns.en";

export const handsTakeTurnsEs: Translation<HandsTakeTurnsTexts> = {
  title: "Las manos se turnan",
  steps: {
    "call-and-answer": {
      text: "Escucha una pregunta y su respuesta. La mano derecha toca tres notas, y luego la mano izquierda las repite una octava más abajo.",
    },
    "both-positions": {
      text: "Pon las dos manos en la posición de do a la vez. El pulgar derecho descansa en el do central, y el meñique izquierdo en el do una octava más abajo.",
    },
    "low-hand-quiz": {
      text: "Las dos manos están en la posición de do. ¿Qué mano toca las notas graves?",
      answers: ["La mano izquierda", "La mano derecha", "Las dos manos juntas"],
    },
    "echo-listen": {
      text: "Cada vez escucha dos notas. ¿La segunda es más aguda, más grave o igual?",
    },
    "first-turn": {
      text: "Ahora tú. Toca do re mi con la mano derecha y luego do re mi con la mano izquierda.",
    },
    "second-turn": {
      text: "Ahora empieza con el meñique derecho y baja hasta mi. La mano izquierda responde, desde el pulgar hasta mi.",
    },
    "one-waits": {
      text: "Mientras una mano toca, la otra descansa sobre sus teclas y espera. Se queda en su lugar, así está lista para su turno.",
    },
    "long-phrase": {
      text: "Mantén las dos manos en la posición de do. Esta melodía más larga tiene cuatro turnos: mano derecha, mano izquierda, derecha y luego izquierda. Sigue la tecla marcada de una mano a la otra.",
    },
    recap: {
      text: "¡Bien hecho! Tus manos ya comparten una melodía.",
      points: [
        "Las dos manos pueden descansar a la vez en la posición de do, a una octava de distancia.",
        "La mano izquierda toca las notas graves, y la derecha, las agudas.",
        "Una mano toca mientras la otra espera su turno en su lugar.",
      ],
    },
  },
};

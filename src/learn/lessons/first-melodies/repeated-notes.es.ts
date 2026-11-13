/** *Repeated notes* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { RepeatedNotesTexts } from "./repeated-notes.en";

export const repeatedNotesEs: Translation<RepeatedNotesTexts> = {
  title: "Notas repetidas",
  steps: {
    "repeat-demo": {
      text: "Mira y escucha. Algunas notas suenan una y otra vez, y la mano no se mueve.",
    },
    "what-a-repeat-is": {
      text: "Una nota se puede repetir. El dedo se queda en su tecla y la toca otra vez. Deja que la tecla suba entre las dos notas.",
    },
    "same-or-not": {
      text: "Cada vez oyes dos notas. ¿La segunda es más aguda, más grave o igual que la primera?",
    },
    "repeat-e-d": {
      text: "Pon la mano derecha en la posición de do. Toca mi tres veces con el dedo 3 y luego re tres veces con el dedo 2.",
    },
    "repeat-after-skip": {
      text: "Ahora un salto y luego una repetición. Toca mi con el dedo 3 y luego sol dos veces con el dedo 5.",
    },
    "how-many-keys-quiz": {
      text: "Tocas do, do, do. ¿Cuántas teclas presionas?",
      answers: ["Una tecla, tres veces", "Tres teclas distintas"],
    },
    "mixed-phrase": {
      text: "Esta melodía tiene pasos, saltos y notas repetidas. Mantén la mano en la posición de do y sigue la tecla marcada.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes tocar notas repetidas.",
      points: [
        "Una nota repetida vuelve a tocar la misma tecla.",
        "El dedo se queda en su tecla y la deja subir.",
        "Una melodía puede mezclar pasos, saltos y notas repetidas.",
      ],
    },
  },
};

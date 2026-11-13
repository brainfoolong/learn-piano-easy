/** *High and low* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { HighAndLowTexts } from "./high-and-low.en";

export const highAndLowEs: Translation<HighAndLowTexts> = {
  title: "Agudo y grave",
  steps: {
    "low-to-high": {
      text: "Escucha y mira. El piano toca teclas desde el lado izquierdo hasta el lado derecho.",
    },
    "left-is-low": {
      text: "¿Oíste cómo subía el sonido? Las teclas de la izquierda suenan más graves, y las de la derecha, más agudas.",
    },
    "wide-listen": {
      text: "Oyes dos notas. ¿La segunda es más aguda, más grave o igual que la primera?",
    },
    "climb-up": {
      text: "Ahora subes tú. Toca las teclas marcadas de izquierda a derecha y escucha cómo sube el sonido.",
    },
    "climb-down": {
      text: "Y ahora de bajada. Toca las teclas marcadas de derecha a izquierda y escucha cómo baja el sonido.",
    },
    "low-then-high": {
      text: "Saltos grandes: toca las tres teclas marcadas, de grave a agudo.",
    },
    "which-way": {
      text: "Mueves la mano hacia la derecha sobre las teclas. ¿Qué pasa con el sonido?",
      answers: ["Se vuelve más grave", "Se vuelve más agudo", "Sigue igual"],
    },
    "close-listen": {
      text: "Escucha con atención: las dos notas están muy cerca, o son la misma nota. ¿La segunda es más aguda, más grave o igual?",
    },
    recap: {
      text: "Bien hecho. Ya puedes oír y tocar lo agudo y lo grave.",
      points: ["Las teclas de la izquierda suenan más graves.", "Las teclas de la derecha suenan más agudas.", "Dos notas también pueden sonar igual."],
    },
  },
};

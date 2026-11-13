/** *A held bass note* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { AHeldBassNoteTexts } from "./a-held-bass-note.en";

export const aHeldBassNoteEs: Translation<AHeldBassNoteTexts> = {
  title: "Una nota larga en el bajo",
  steps: {
    "bass-under-tune": {
      text: "Escucha y mira. La mano izquierda toca una nota grave y larga, y la mano derecha toca una melodía por encima.",
    },
    "hold-it": {
      text: "Esta nota grave y larga es una nota del bajo. La mano izquierda la toca como redonda y mantiene la tecla presionada durante cuatro tiempos.",
    },
    "let-go-quiz": {
      text: "Tu mano izquierda mantiene una redonda debajo de cuatro negras de la mano derecha. ¿Cuándo la suelta?",
      answers: ["Después de la cuarta negra", "Después de la primera negra", "De inmediato"],
    },
    "first-bar": {
      text: "Presiona el do debajo del do central con la mano izquierda y el do central con la derecha. Mantén el do grave mientras la mano derecha toca re, mi, fa.",
    },
    "both-bars": {
      text: "Toca dos compases y mantén cada nota del bajo. Presiona el do debajo del do central con la mano izquierda y el do central con la derecha, y luego toca re, mi, fa. Después presiona igual el sol debajo del do central y el sol encima del do central, y luego toca fa, mi, re.",
    },
    "half-bass": {
      text: "Una nota del bajo también puede ser una blanca. Dura dos tiempos, así que el bajo cambia dos veces en cada compás.",
    },
    "half-note-bass": {
      text: "Escucha un bajo de blancas. Cada nota del bajo suena debajo de dos tiempos de la melodía.",
    },
    "half-bass-quiz": {
      text: "Tu mano izquierda mantiene una blanca. ¿Cuántas negras toca la mano derecha encima?",
      answers: ["Una", "Dos", "Cuatro"],
    },
    "half-bass-tune": {
      text: "Ahora tú. Toca cada nota del bajo junto con la nota de la melodía que está encima, y mantenla mientras suena la siguiente nota de la melodía.",
    },
    recap: {
      text: "¡Bien hecho! Ahora tu mano izquierda mantiene un bajo debajo de la melodía.",
      points: [
        "Tu mano izquierda puede tocar una nota larga del bajo debajo de una melodía que se mueve.",
        "Presiona el bajo con la nota de la melodía y luego mantenlo.",
        "Un bajo de redondas dura cuatro tiempos, y uno de blancas, dos.",
      ],
    },
  },
};

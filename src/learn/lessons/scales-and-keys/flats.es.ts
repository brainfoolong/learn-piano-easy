/** *Flats* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { FlatsTexts } from "./flats.en";

export const flatsEs: Translation<FlatsTexts> = {
  title: "Bemoles",
  steps: {
    "flat-sound": {
      text: "Escucha si, y luego la tecla negra justo a su izquierda. Después escucha mi, y la tecla negra justo a la izquierda de mi.",
    },
    "what-a-flat-is": {
      text: "Este signo es un bemol: ♭. Un bemol baja una nota un semitono. Tocas la tecla que está justo a su izquierda.",
    },
    "find-b-flat": {
      text: "Busca si bemol, que se escribe si♭. Empieza en si y muévete una tecla a la izquierda.",
    },
    "find-e-flat": {
      text: "Ahora busca mi bemol, que se escribe mi♭. Es la tecla negra justo a la izquierda de mi.",
    },
    "which-is-e-flat": {
      text: "¿Qué tecla es mi♭?",
      answers: ["El re, una tecla blanca", "La tecla negra a la derecha de mi", "La tecla negra a la izquierda de mi"],
    },
    "hear-flats": {
      text: "Un bemol suena un poco más grave. Escucha dos notas. ¿La segunda es más aguda, más grave o igual?",
    },
    "two-names": {
      text: "Do sostenido sube do hasta la tecla negra de su derecha. Re bemol baja re hasta la tecla negra de su izquierda. Es la misma tecla, así que tiene dos nombres.",
    },
    "other-name-quiz": {
      text: "Do♯ y un bemol son la misma tecla negra. ¿Qué bemol es?",
      answers: ["Re♭", "Si♭", "Mi♭"],
    },
    "half-steps-down": {
      text: "Ahora tú. Toca si, si♭ y el la, y luego mi, mi♭ y re. Cada nota está un semitono por debajo de la anterior.",
    },
    recap: {
      text: "¡Bien hecho! Ya sabes qué es un bemol.",
      points: [
        "Un bemol ♭ baja una nota un semitono.",
        "Si♭ es la tecla negra a la izquierda de si, y mi♭ la tecla negra a la izquierda de mi.",
        "Una tecla negra puede tener dos nombres: do♯ también es re♭.",
      ],
    },
  },
};

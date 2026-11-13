/** *Eighth notes* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { EighthNotesTexts } from "./eighth-notes.en";

export const eighthNotesEs: Translation<EighthNotesTexts> = {
  title: "Corcheas",
  steps: {
    "eighth-demo": {
      text: "Mira y escucha. Primero el do central suena una vez en cada tiempo. Luego suena dos veces en cada tiempo.",
    },
    "what-an-eighth-note-is": {
      text: "Las notas rápidas eran corcheas. Una corchea dura medio tiempo. Así que dos corcheas llenan un tiempo.",
    },
    "eighths-per-beat-quiz": {
      text: "¿Cuántas corcheas llenan un tiempo?",
      answers: ["Una", "Dos", "Cuatro"],
    },
    "count-and": {
      text: "Para contar corcheas, di «y» entre los tiempos: «1 y 2 y 3 y 4 y». Los números caen en los tiempos, y cada «y» cae justo en medio.",
    },
    "counting-demo": {
      text: "Cuenta con la música: «1, 2, 3 y, 4». Los dos mi rápidos caen en el «3» y en su «y».",
    },
    "eighth-taps": {
      text: "Ahora el pulso es lento, a 60 por minuto, y los clics llegan el doble de rápido. Cada clic es una corchea. Cuenta «1 y 2 y» y toca cualquier tecla en cada clic.",
    },
    "eighths-per-bar-quiz": {
      text: "Un compás tiene cuatro tiempos. ¿Cuántas corcheas lo llenan?",
      answers: ["Cuatro", "Seis", "Ocho"],
    },
    "phrase-demo": {
      text: "Ahora tocan las dos manos. La mano izquierda mantiene un do grave, mientras la derecha sube hasta sol en corcheas. Luego baja de nuevo hasta do.",
    },
    "eighth-phrase": {
      text: "Pon las dos manos en la posición de do. La mano derecha toca do, re, mi, fa, sol, sol, fa, mi, re, do, empezando en el do central. El meñique izquierdo presiona el do debajo del do central con el primer do, y otra vez con el segundo sol.",
    },
    recap: {
      text: "¡Bien hecho! Ahora tus notas pueden ir el doble de rápido.",
      points: ["Una corchea dura medio tiempo.", "Dos corcheas llenan un tiempo.", "Las corcheas se cuentan «1 y 2 y»."],
    },
  },
};

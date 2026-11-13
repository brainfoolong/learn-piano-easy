/** *Inversions* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { InversionsTexts } from "./inversions.en";

export const inversionsEs: Translation<InversionsTexts> = {
  title: "Inversiones",
  steps: {
    "inversions-demo": {
      text: "Escucha tres acordes. Cada uno tiene las notas do, mi y sol. Solo cambia su orden.",
    },
    "same-three-notes": {
      text: "Do-mi-sol con do abajo es el estado fundamental. Una inversión toca las mismas tres notas en otro orden. Sigue siendo do mayor.",
    },
    "root-position": {
      text: "Toca do mayor en estado fundamental: do, mi y sol desde el do central, todas a la vez. Usa los dedos 1, 3 y 5.",
    },
    "first-inversion": {
      text: "Ahora sube una octava la nota de abajo. Do-mi-sol se vuelve mi-sol-do. Esta es la primera inversión.",
    },
    "play-first-inversion": {
      text: "Toca la primera inversión: mi y sol arriba del do central, y el do que está encima de ellas. Presiona las tres a la vez.",
    },
    "which-chord-is-e-g-c": {
      text: "Mi-sol-do suena un poco distinto de do-mi-sol. ¿Qué acorde es?",
      answers: ["La menor", "Mi menor", "Do mayor"],
    },
    "second-inversion": {
      text: "Sube otra vez la nota de abajo. Mi-sol-do se vuelve sol-do-mi. Esta es la segunda inversión.",
    },
    "play-second-inversion": {
      text: "Toca la segunda inversión: el sol de arriba del do central, y luego el do y el mi siguientes, encima. Presiona las tres a la vez.",
    },
    "climb-the-inversions": {
      text: "Sube por el teclado con do mayor: estado fundamental, primera inversión, segunda inversión y estado fundamental una octava más arriba.",
    },
    "move-less": {
      text: "Las inversiones hacen que tu mano se mueva menos entre acordes. Fa mayor como do-fa-la y sol mayor como si-re-sol quedan justo al lado de do-mi-sol.",
    },
    "close-chords-demo": {
      text: "Escucha otra vez do, fa, sol y do, tocados muy juntos. Cada dedo se mueve solo una o dos teclas.",
    },
    "which-chord-is-c-f-a": {
      text: "Do-fa-la tiene fa, la y do en otro orden. ¿Qué acorde es?",
      answers: ["Do mayor", "Fa mayor", "La menor"],
    },
    "close-chords": {
      text: "Toca do-mi-sol, do-fa-la, si-re-sol y do-mi-sol, empezando en el do central. Mantén la mano en un solo lugar y deja que los dedos se muevan.",
    },
    "close-chords-with-bass": {
      text: "Ahora agrega la fundamental con la mano izquierda debajo de cada acorde: do, fa, sol y do, debajo del do central.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes tocar un acorde en tres posiciones.",
      points: [
        "Una inversión toca las tres notas de un acorde en otro orden.",
        "Sube una octava la nota de abajo: do-mi-sol se vuelve mi-sol-do, y luego sol-do-mi.",
        "El acorde sigue siendo el mismo: mi-sol-do y sol-do-mi siguen siendo do mayor.",
        "Las inversiones mantienen los acordes cerca, así que la mano se mueve menos.",
      ],
    },
  },
};

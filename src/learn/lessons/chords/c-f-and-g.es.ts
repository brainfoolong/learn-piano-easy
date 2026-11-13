/** *C, F and G* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { CFAndGTexts } from "./c-f-and-g.en";

export const cFAndGEs: Translation<CFAndGTexts> = {
  title: "Do, fa y sol",
  steps: {
    "progression-demo": {
      text: "Escucha cuatro acordes: do, fa, sol y de vuelta a do. Suenan como una canción corta que descansa en do.",
    },
    "three-main-chords": {
      text: "Construye una tríada sobre los grados 1.º, 4.º y 5.º de la escala de do mayor. Obtienes do, fa y sol, los tres acordes principales de do mayor.",
    },
    "fourth-step": {
      text: "Sube por la escala de do mayor contando desde do. ¿Qué nota es su 4.º grado?",
      answers: ["Mi", "Sol", "Re", "Fa"],
    },
    "the-f-triad": {
      text: "La tríada de fa es fa, la y do. Es una tríada mayor, como do mayor, así que tus dedos mantienen la misma forma.",
    },
    "c-and-f": {
      text: "Ahora tú. Toca do mayor desde el do central con los dedos 1, 3 y 5. Luego lleva el pulgar al fa de arriba del do central para la tríada de fa, y vuelve a do.",
    },
    "g-triad-notes": {
      text: "La tríada de sol se apoya en el 5.º grado de la escala. ¿Qué notas la forman?",
      answers: ["Sol, si♭ y re", "Sol, si y re", "Sol, la y si", "Fa, la y do"],
    },
    "c-and-g": {
      text: "Toca do mayor desde el do central. Luego lleva el pulgar al sol de arriba del do central para la tríada de sol, y vuelve a do.",
    },
    "move-the-hand": {
      text: "Levanta la mano entera de un acorde al siguiente. Mantén los dedos 1, 3 y 5 en su forma, y deja que el pulgar encuentre la nueva fundamental.",
    },
    "c-f-g-c": {
      text: "Toca cuatro acordes con la mano derecha: do-mi-sol desde el do central, luego fa-la-do, sol-si-re y do-mi-sol. Tómate tu tiempo entre ellos.",
    },
    "left-hand-chords": {
      text: "Tu mano izquierda toca los mismos acordes más abajo, con los dedos 5, 3 y 1. El dedo 5 va sobre la fundamental.",
    },
    "left-c-f-g-c": {
      text: "Pon el dedo 5 izquierdo en el do debajo del do central. Toca do, fa, sol y do, llevando el dedo 5 a cada fundamental.",
    },
    "tune-demo": {
      text: "Aquí tienes una melodía corta sobre los tres acordes. Tu mano izquierda toca cada acorde, y tu mano derecha toca dos notas encima.",
    },
    tune: {
      text: "Pon el pulgar derecho en el sol de arriba del do central. Toca cada acorde junto con la primera nota de su compás, y luego la segunda nota sola. El último compás no tiene segunda nota.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes tocar los tres acordes principales de do mayor.",
      points: [
        "Do, fa y sol son las tríadas sobre los grados 1.º, 4.º y 5.º de do mayor.",
        "La tríada de fa es fa, la y do, y la tríada de sol es sol, si y re.",
        "Para pasar de un acorde a otro, levanta la mano entera y mantén su forma.",
        "Pasar del acorde de sol al de do suena a final.",
      ],
    },
  },
};

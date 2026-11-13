/** *Whole notes* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { WholeNotesTexts } from "./whole-notes.en";

export const wholeNotesEs: Translation<WholeNotesTexts> = {
  title: "Redondas",
  steps: {
    "halves-then-whole-demo": {
      text: "Mira y escucha. Primero vienen dos blancas. Después suena una sola nota que dura lo mismo que las dos juntas.",
    },
    "what-a-whole-note-is": {
      text: "Una redonda dura cuatro tiempos. La tocas en el primer tiempo y la mantienes durante los otros tres. Cuenta «1-2-3-4» en cada redonda.",
    },
    "whole-beats-quiz": {
      text: "¿Cuántos tiempos dura una redonda?",
      answers: ["Dos tiempos", "Tres tiempos", "Cuatro tiempos"],
    },
    "four-beats-three-ways-demo": {
      text: "Escucha cuatro tiempos llenos de tres maneras. Primero una redonda, después dos blancas y al final cuatro negras. Cada grupo dura lo mismo.",
    },
    "same-as-whole-quiz": {
      text: "¿Qué dura lo mismo que una redonda?",
      answers: ["Una blanca", "Dos blancas", "Dos negras"],
    },
    "quarters-in-whole-quiz": {
      text: "¿Cuántas negras duran lo mismo que una redonda?",
      answers: ["Dos", "Cuatro", "Ocho"],
    },
    "play-and-hold": {
      text: "Pon la mano derecha en la posición de do. Toca do, mi y sol, y mantén cada tecla presionada mientras cuentas «1-2-3-4». Este paso espera cada nota, así que ve sin prisa.",
    },
    "count-to-four": {
      text: "Toca una tecla cualquiera en cada clic. Cuenta «1-2-3-4» dos veces mientras tocas. Cada «1-2-3-4» es lo que dura una redonda.",
    },
    recap: {
      text: "¡Bien hecho! Ya conoces la redonda.",
      points: ["Una redonda dura cuatro tiempos.", "La tocas y la mantienes durante tres tiempos más.", "Una redonda dura lo mismo que dos blancas o cuatro negras."],
    },
  },
};

/** *Half notes* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { HalfNotesTexts } from "./half-notes.en";

export const halfNotesEs: Translation<HalfNotesTexts> = {
  title: "Blancas",
  steps: {
    "quarters-then-halves-demo": {
      text: "Mira y escucha. Primero vienen cuatro notas cortas, una en cada tiempo. Después cada nota suena el doble de larga.",
    },
    "what-a-half-note-is": {
      text: "Una blanca dura dos tiempos. La tocas en el primer tiempo y la mantienes durante el segundo. Cuenta «1-2» en cada blanca.",
    },
    "half-beats-quiz": {
      text: "¿Cuántos tiempos dura una blanca?",
      answers: ["Un tiempo", "Dos tiempos", "Cuatro tiempos"],
    },
    "play-and-hold": {
      text: "Pon la mano derecha en la posición de do. Toca do, re, mi, re, do, y mantén cada tecla presionada mientras cuentas «1-2». Este paso espera cada nota, así que ve sin prisa.",
    },
    "count-one-two": {
      text: "Toca una tecla cualquiera en cada clic. Cuenta «1-2, 1-2» mientras tocas. Cada «1-2» es lo que dura una blanca.",
    },
    "which-is-longer-quiz": {
      text: "¿Qué nota dura más?",
      answers: ["Una negra", "Una blanca"],
    },
    "halves-in-four-quiz": {
      text: "¿Cuántas blancas llenan cuatro tiempos?",
      answers: ["Una", "Dos", "Cuatro"],
    },
    recap: {
      text: "¡Bien hecho! Ya conoces la blanca.",
      points: ["Una blanca dura dos tiempos.", "La tocas y la mantienes durante el tiempo siguiente.", "Dos blancas llenan cuatro tiempos."],
    },
  },
};

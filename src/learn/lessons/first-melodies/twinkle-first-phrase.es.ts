/** *Twinkle's first phrase* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { TwinkleFirstPhraseTexts } from "./twinkle-first-phrase.en";

export const twinkleFirstPhraseEs: Translation<TwinkleFirstPhraseTexts> = {
  title: "La primera frase de Twinkle",
  steps: {
    "phrase-demo": {
      text: "Escucha la primera frase de Twinkle Twinkle Little Star. Una de sus notas queda fuera de la posición de do.",
    },
    "one-key-past": {
      text: "Esa nota es el la, la tecla blanca justo después de sol. La mano se queda en la posición de do. El meñique se estira una tecla a la derecha para tocar el la.",
    },
    "find-a": {
      text: "Pon la mano derecha en la posición de do. Estira el meñique más allá de sol y presiona el la.",
    },
    "leap-quiz": {
      text: "La melodía empieza en do y luego da un gran salto hacia arriba. ¿A qué nota salta?",
      answers: ["Re", "Mi", "Sol"],
    },
    "climb-up": {
      text: "Toca la primera parte: do dos veces, sol dos veces, la dos veces, y luego sol. El pulgar toca los dos do, y el meñique toca el resto, estirándose hasta el la y volviendo.",
    },
    "walk-down": {
      text: "Ahora la segunda parte baja paso a paso: fa, mi, re y do, cada una dos veces. Tus dedos van 4, 3, 2 y 1.",
    },
    "whole-phrase": {
      text: "Junta las dos partes. Toca la frase entera sin parar.",
    },
    recap: {
      text: "¡Bien hecho! Por primera vez llegaste más allá de tus cinco dedos.",
      points: [
        "Una melodía puede salir de la posición de do para una nota.",
        "El meñique se estira del sol al la.",
        "Una melodía puede dar un gran salto, como de do hasta sol.",
      ],
    },
  },
};

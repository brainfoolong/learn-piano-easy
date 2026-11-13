/** *Mary's first phrase* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { MaryFirstPhraseTexts } from "./mary-first-phrase.en";

export const maryFirstPhraseEs: Translation<MaryFirstPhraseTexts> = {
  title: "La primera frase de Mary",
  steps: {
    "phrase-demo": {
      text: "Escucha la primera mitad de Mary Had a Little Lamb. Tiene pasos, notas repetidas y un salto, y ya conoces todo eso.",
    },
    "first-note-quiz": {
      text: "¿En qué nota empieza la melodía?",
      answers: ["Do", "Mi", "Sol"],
    },
    "the-fingers": {
      text: "Mantén la mano derecha en la posición de do, con el pulgar en el do central. La melodía usa cuatro dedos: el 1 en do, el 2 en re, el 3 en mi y el 5 en sol.",
    },
    "g-finger-quiz": {
      text: "¿Qué dedo toca sol?",
      answers: ["Dedo 2", "Dedo 3", "Dedo 5"],
    },
    "bars-one-two": {
      text: "Toca el comienzo: mi, re, do, re, y luego mi tres veces. Tus dedos van 3, 2, 1, 2, y luego 3, 3, 3.",
    },
    "bars-three-four": {
      text: "Ahora la parte siguiente: re tres veces, luego mi, y luego sol dos veces. Tus dedos van 2, 2, 2, y luego 3, 5, 5.",
    },
    "whole-phrase": {
      text: "Ahora toca la frase entera sin parar: mi re do re mi mi mi, re re re, mi sol sol.",
    },
    recap: {
      text: "¡Bien hecho! Tocaste la primera mitad de una canción de verdad.",
      points: [
        "Esta melodía está hecha de pasos, notas repetidas y un salto.",
        "Una melodía se aprende en trozos pequeños, que luego se juntan.",
        "Los números de los dedos le dicen a tu mano adónde ir.",
      ],
    },
  },
};

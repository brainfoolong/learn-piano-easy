/** *The bass clef* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { TheBassClefTexts } from "./the-bass-clef.en";

export const theBassClefEs: Translation<TheBassClefTexts> = {
  title: "La clave de fa",
  steps: {
    "low-notes-demo": {
      text: "Mira y escucha. El piano toca do, re, mi, fa y sol debajo del do central. Son las teclas de la posición de do de tu mano izquierda.",
    },
    "what-the-bass-clef-is": {
      text: "La clave de sol escribe las notas agudas, sobre todo para la mano derecha. La clave de fa escribe las notas graves, sobre todo para la mano izquierda. Parece una curva con dos puntos al lado.",
    },
    "low-notes-clef-quiz": {
      text: "¿Qué clave escribe las notas graves?",
      answers: ["La clave de sol", "La clave de fa"],
    },
    "the-f-line": {
      text: "Los dos puntos de la clave de fa están encima y debajo de la cuarta línea desde abajo. Esa línea es fa, el fa debajo del do central. Por eso se llama clave de fa.",
    },
    "f-line-quiz": {
      text: "¿Alrededor de qué línea están los dos puntos de la clave de fa?",
      answers: ["La segunda línea desde abajo", "La cuarta línea desde abajo", "La línea del medio"],
    },
    "play-bass-f": {
      text: "Este es el fa de la cuarta línea. Tócalo en el teclado. En la posición de do de tu mano izquierda, el dedo 2 descansa sobre él.",
    },
    "neighbours-of-f": {
      text: "El espacio justo encima de fa es sol. El espacio justo debajo de fa es mi. Un paso más abajo, en la línea del medio, está re.",
    },
    "name-bass-notes": {
      text: "Nombra cada nota en clave de fa. Selecciona su nombre. Parte de fa en la cuarta línea y cuenta hacia arriba o hacia abajo.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes leer tus primeras notas en clave de fa.",
      points: ["La clave de fa escribe las notas graves, sobre todo para la mano izquierda.", "Sus dos puntos rodean la cuarta línea, que es fa.", "Desde fa, cuenta hacia arriba o hacia abajo para encontrar sus vecinas."],
    },
  },
};

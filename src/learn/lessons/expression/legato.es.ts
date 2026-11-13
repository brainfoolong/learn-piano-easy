/** *Legato* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { LegatoTexts } from "./legato.en";

export const legatoEs: Translation<LegatoTexts> = {
  steps: {
    "legato-demo": {
      text: "Escucha de do a sol y de vuelta hacia abajo. Cada nota fluye hacia la siguiente, sin ningún hueco entre ellas.",
    },
    "smooth-and-connected": {
      text: "Tocar de forma suave y ligada se llama legato. Las notas se unen como las palabras de una canción cantada en un solo aliento.",
    },
    "what-legato-means": {
      text: "¿Qué significa legato?",
      answers: ["Muy fuerte", "Muy rápido", "Con un silencio después de cada nota", "Suave y ligado"],
    },
    "hand-over": {
      text: "Para tocar legato, suelta una tecla justo cuando baja la siguiente. Un dedo sube mientras el siguiente se hunde.",
    },
    "five-notes-legato": {
      text: "Toca do, re, mi, fa y sol con los dedos 1 a 5, empezando en el do central. Pasa cada nota a la siguiente, sin hueco.",
    },
    "when-to-let-go": {
      text: "Tocas legato. ¿Cuándo deja un dedo su tecla?",
      answers: ["Antes de que baje la tecla siguiente", "Justo cuando baja la tecla siguiente", "Mucho después de la tecla siguiente", "Solo al final de la pieza"],
    },
    "the-slur": {
      text: "Una línea curva encima o debajo de un grupo de notas es una ligadura de expresión. Te pide tocar esas notas legato.",
    },
    "what-a-slur-asks": {
      text: "Una línea curva une cinco notas. ¿Cómo las tocas?",
      answers: ["Cada una corta", "Cada vez más fuerte", "Suaves y ligadas", "Todas a la vez"],
    },
    "slurred-phrase": {
      text: "Una ligadura une esta frase: sol, fa, mi, re, do, y luego re y mi. Tócala legato, con cada dedo pasando la nota al siguiente.",
    },
    "fingers-make-it": {
      text: "El legato necesita un dedo libre para cada nota siguiente. En una escala, el pulgar pasa por debajo, así la línea nunca se corta.",
    },
    "scale-legato": {
      text: "Toca la escala de do mayor hacia arriba desde el do central con los dedos 1, 2 y 3, y luego pasa el pulgar por debajo hasta fa. Mantén cada nota unida a la siguiente.",
    },
    "which-move-keeps-it-smooth": {
      text: "Tocas la escala de do mayor hacia arriba en legato. Después de mi con el dedo 3, ¿cómo llegas a fa?",
      answers: ["El pulgar pasa por debajo hasta fa", "Levantas la mano y saltas a fa", "Tocas fa otra vez con el dedo 3", "Omites fa"],
    },
    "both-hands-legato": {
      text: "Toca de do a sol con las dos manos a la vez, la izquierda una octava más abajo. Mantén las dos manos suaves y ligadas.",
    },
    "which-is-legato": {
      text: "¿Qué notas tocas legato?",
      answers: ["Notas con un silencio después de cada una", "Todas las notas en una sola tecla", "Notas lejanas que piden un salto", "Notas bajo una ligadura"],
    },
    recap: {
      text: "¡Bien hecho! Ya sabes tocar de forma suave y ligada.",
      points: [
        "Legato significa suave y ligado.",
        "Suelta una tecla justo cuando baja la siguiente.",
        "Una ligadura, la línea curva, marca las notas que se tocan legato.",
        "Una buena digitación, como el paso del pulgar, mantiene la línea unida.",
      ],
    },
  },
};

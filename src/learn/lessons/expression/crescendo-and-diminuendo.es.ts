/** *Crescendo and diminuendo* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { CrescendoAndDiminuendoTexts } from "./crescendo-and-diminuendo.en";

export const crescendoAndDiminuendoEs: Translation<CrescendoAndDiminuendoTexts> = {
  title: "Crescendo y diminuendo",
  steps: {
    "crescendo-demo": {
      text: "Escucha do, re, mi, fa y sol. Cada nota suena un poco más fuerte que la anterior.",
    },
    "getting-louder": {
      text: "Subir el volumen poco a poco es un crescendo. La partitura lo marca con cresc. o con un regulador que se abre <, que se ensancha a medida que crece el sonido.",
    },
    "what-cresc-asks": {
      text: "Ves cresc. bajo el pentagrama. ¿Qué te pide?",
      answers: ["Tocar cada vez más suave", "Tocar cada vez más fuerte", "Tocar más rápido", "Tocar las notas más agudas"],
    },
    "play-crescendo": {
      text: "Toca do, re, mi, fa y sol en crescendo, empezando en el do central. Presiona do, re y mi con suavidad y despacio, y luego fa y sol rápido y con firmeza.",
    },
    "hear-crescendo": {
      text: "Escucha do, re, mi, fa y sol tocadas en crescendo. Cada tecla baja un poco más rápido que la anterior.",
    },
    "how-crescendo-changed": {
      text: "¿Cómo cambió el sonido de la primera nota a la última?",
      answers: ["Siguió suave", "Se hizo más suave", "Siguió fuerte", "Se hizo más fuerte"],
    },
    "diminuendo-demo": {
      text: "Ahora escucha sol, fa, mi, re y do. Cada nota suena un poco más suave que la anterior.",
    },
    "getting-softer": {
      text: "Bajar el volumen poco a poco es un diminuendo, marcado dim. También se llama decrescendo, marcado decresc. Un regulador que se cierra > pide lo mismo.",
    },
    "which-hairpin-softer": {
      text: "¿Qué indicación te pide tocar cada vez más suave?",
      answers: ["El regulador que se cierra >", "El regulador que se abre <", "La indicación f", "La indicación mf"],
    },
    "play-diminuendo": {
      text: "Toca sol, fa, mi, re y do en diminuendo, empezando en el sol encima del do central. Presiona sol, fa y mi rápido y con firmeza, y luego re y do con suavidad y despacio.",
    },
    "hear-diminuendo": {
      text: "Escucha sol, fa, mi, re y do tocadas en diminuendo. Cada tecla baja un poco más despacio que la anterior.",
    },
    "how-diminuendo-changed": {
      text: "¿Cómo cambió el sonido de la primera nota a la última?",
      answers: ["Se hizo más fuerte", "Siguió fuerte", "Se hizo más suave", "Siguió suave"],
    },
    "swell-and-fade": {
      text: "Una frase suele crecer al subir y apagarse al bajar. Crece y se desvanece como una ola.",
    },
    "play-swell": {
      text: "Toca desde el do central hasta sol y vuelve a bajar hasta do. Sube el volumen al subir y bájalo al bajar. Este paso revisa las notas, así que deja que tu oído juzgue el volumen.",
    },
    "how-it-ends": {
      text: "Una frase empieza con p y tiene debajo un regulador que se abre <. ¿Cómo debería terminar?",
      answers: ["Más suave que p", "Tan suave como empezó", "Más rápido que al principio", "Más fuerte que al principio"],
    },
    recap: {
      text: "¡Bien hecho! Ya sabes hacer que la música suene más fuerte y más suave.",
      points: [
        "Un crescendo sube el volumen. Se marca con cresc. o con un regulador que se abre <.",
        "Un diminuendo baja el volumen. Se marca con dim., decresc. o un regulador que se cierra >.",
        "Una frase suele crecer al subir y apagarse al bajar.",
      ],
    },
  },
};

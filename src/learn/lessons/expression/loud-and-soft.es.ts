/** *Loud and soft* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { LoudAndSoftTexts } from "./loud-and-soft.en";

export const loudAndSoftEs: Translation<LoudAndSoftTexts> = {
  title: "Fuerte y suave",
  steps: {
    "soft-and-loud-demo": {
      text: "Escucha do, re, mi, fa y sol dos veces. La primera vez suenan suave, y la segunda, fuerte.",
    },
    "key-speed": {
      text: "Qué tan fuerte suena una nota depende de qué tan rápido baja su tecla. Una tecla presionada con suavidad y despacio suena suave. Una tecla presionada rápido suena fuerte.",
    },
    "what-makes-loud": {
      text: "¿Qué hace que una nota suene más fuerte?",
      answers: ["Mantener la tecla más tiempo", "Presionar una tecla más a la izquierda", "Presionar la tecla más rápido", "Presionar una tecla negra"],
    },
    "play-softly": {
      text: "Toca do, re, mi, fa y sol suave, empezando en el do central. Presiona cada tecla con suavidad y despacio.",
    },
    "hear-softly": {
      text: "Escucha do, re, mi, fa y sol tocadas suave. Cada tecla bajó con suavidad y despacio.",
    },
    "how-softly-sounded": {
      text: "¿Cómo sonaron esas cinco notas?",
      answers: ["Suave", "Fuerte", "Suave y luego fuerte", "Fuerte y luego suave"],
    },
    "play-loudly": {
      text: "Ahora toca las mismas cinco notas fuerte. Presiona cada tecla rápido y con firmeza, pero nunca la golpees.",
    },
    "hear-loudly": {
      text: "Escucha do, re, mi, fa y sol tocadas fuerte. Cada tecla bajó rápido y con firmeza.",
    },
    "how-loudly-sounded": {
      text: "¿Cómo sonaron esas cinco notas?",
      answers: ["Suave", "Suave y luego fuerte", "Fuerte y luego suave", "Fuerte"],
    },
    "piano-and-forte": {
      text: "La partitura indica con letras bajo el pentagrama qué tan fuerte tocar. La indicación p significa piano, que en italiano es suave. La indicación f significa forte, fuerte en italiano.",
    },
    "what-f-asks": {
      text: "Ves la indicación f bajo el pentagrama. ¿Qué te pide?",
      answers: ["Tocar suave", "Tocar fuerte", "Tocar rápido", "Tocar despacio"],
    },
    "mezzo-marks": {
      text: "Hay dos indicaciones intermedias. La indicación mp significa mezzo piano, algo suave, y mf significa mezzo forte, algo fuerte.",
    },
    "softest-to-loudest": {
      text: "¿Qué orden va de la indicación más suave a la más fuerte?",
    },
    "echo-demo": {
      text: "Escucha una frase marcada f y luego su eco marcado p. Las notas son las mismas, y solo cambia el volumen.",
    },
    "play-the-echo": {
      text: "Toca do, mi y sol fuerte y luego tócalas otra vez suave, como un eco. Este paso revisa las notas, así que deja que tu oído juzgue el volumen.",
    },
    recap: {
      text: "¡Bien hecho! Ya sabes tocar fuerte y suave.",
      points: [
        "Qué tan rápido baja una tecla decide qué tan fuerte suena.",
        "La indicación p significa suave, y f significa fuerte.",
        "Las indicaciones mp y mf están en medio.",
      ],
    },
  },
};

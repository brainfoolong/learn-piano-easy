/** *Half and whole steps* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { HalfAndWholeStepsTexts } from "./half-and-whole-steps.en";

export const halfAndWholeStepsEs: Translation<HalfAndWholeStepsTexts> = {
  title: "Semitonos y tonos",
  steps: {
    "key-by-key": {
      text: "Escucha cómo el piano sube de do a mi. Suena cada tecla del camino, también las negras.",
    },
    "half-step": {
      text: "Cada paso de esa subida fue un semitono. Un semitono va a la tecla que sigue justo después, negra o blanca, sin ninguna tecla en medio.",
    },
    "half-step-from-c": {
      text: "Ahora tú. Toca el do central y luego la tecla negra justo a su derecha. Toca la pareja dos veces. Cada paso es un semitono.",
    },
    "no-black-key-between": {
      text: "Mira las teclas mi y fa. Entre ellas no hay ninguna tecla negra. Así que de mi a fa hay un semitono, y de si a do también.",
    },
    "white-half-step": {
      text: "¿Qué dos teclas blancas están a un semitono?",
      answers: ["Do y re", "Mi y fa", "Fa y sol"],
    },
    "e-f-and-b-c": {
      text: "Toca el mi y el fa que están encima del do central. Luego toca si y el do de arriba. Los dos son semitonos entre dos teclas blancas.",
    },
    "whole-step": {
      text: "Dos semitonos forman un tono. Un tono salta una tecla. De do a re hay un tono, porque en medio hay una tecla negra.",
    },
    "whole-and-half": {
      text: "Escucha: de do a re hay un tono, y de re a mi hay otro tono. Pero de mi a fa hay solo un semitono.",
    },
    "whole-steps-from-c": {
      text: "Ahora tú. Toca el do central, re y mi. Cada paso es un tono, por encima de una tecla negra.",
    },
    "f-to-g": {
      text: "De fa a sol, subiendo, ¿hay un semitono o un tono?",
      answers: ["Un tono", "Un semitono"],
    },
    "whole-step-above-e": {
      text: "Presiona la tecla que está un tono por encima de mi. Cuenta dos semitonos hacia arriba, y ten cuidado: el primero cae en fa.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes medir la distancia entre dos teclas.",
      points: [
        "Un semitono va a la tecla que sigue justo después, negra o blanca.",
        "De mi a fa y de si a do hay semitonos entre teclas blancas.",
        "Un tono son dos semitonos, con una tecla en medio.",
      ],
    },
  },
};

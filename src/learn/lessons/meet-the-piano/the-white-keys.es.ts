/** *The white keys* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { TheWhiteKeysTexts } from "./the-white-keys.en";

export const theWhiteKeysEs: Translation<TheWhiteKeysTexts> = {
  title: "Las teclas blancas",
  steps: {
    "c-to-c": {
      text: "Escucha y mira. El piano toca todas las teclas blancas desde el do central hasta el siguiente do.",
    },
    "seven-letters": {
      text: "Las teclas blancas tienen siete nombres: do re mi fa sol la si. Después de si, los nombres vuelven a empezar en do. Las teclas negras te muestran dónde está cada nota.",
    },
    "find-d": {
      text: "El re está entre las dos teclas negras de un grupo de dos. Encuentra un re.",
    },
    "find-e": {
      text: "El mi es la tecla blanca justo a la derecha de un grupo de dos teclas negras. Encuentra un mi.",
    },
    "find-f": {
      text: "El fa es la tecla blanca justo a la izquierda de un grupo de tres teclas negras. Encuentra un fa.",
    },
    "find-g": {
      text: "El sol está entre la primera y la segunda tecla negra de un grupo de tres. Encuentra un sol.",
    },
    "find-a": {
      text: "El la está entre la segunda y la tercera tecla negra de un grupo de tres. Encuentra un la.",
    },
    "find-b": {
      text: "El si es la tecla blanca justo a la derecha de un grupo de tres teclas negras. Encuentra un si.",
    },
    "play-c-to-c": {
      text: "Ahora toca todas las teclas blancas desde el do central hasta el siguiente do. Di el nombre de cada nota mientras la tocas.",
    },
    "letters-quiz": {
      text: "En las teclas blancas, ¿qué nota viene después de si?",
      answers: ["La", "Do", "Re"],
    },
    recap: {
      text: "Bien hecho. Ya conoces el nombre de cada tecla blanca.",
      points: [
        "Las teclas blancas se llaman do re mi fa sol la si.",
        "Después de si, los nombres vuelven a empezar en do.",
        "Los grupos de dos y de tres teclas negras te muestran dónde está cada nota.",
      ],
    },
  },
};

/** *Find C* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { FindCTexts } from "./find-c.en";

export const findCEs: Translation<FindCTexts> = {
  title: "Encuentra el do",
  steps: {
    "hear-cs": {
      text: "Escucha y mira. El piano toca cuatro teclas, de grave a agudo. Todas tienen el mismo nombre: do.",
    },
    "c-rule": {
      text: "Busca un grupo de dos teclas negras. La tecla blanca justo a su izquierda es un do. Cada grupo de dos tiene un do al lado.",
    },
    "find-any-c": {
      text: "Encuentra un do en cualquier parte del piano. Busca dos teclas negras y elige la tecla blanca a su izquierda.",
    },
    "middle-c": {
      text: "El do que está cerca del centro del piano tiene su propio nombre: el do central. Muchas canciones empiezan en él, así que lo vas a ver a menudo.",
    },
    "find-middle-c": {
      text: "Ahora presiona el do central, el do más cercano al centro del piano.",
    },
    "find-high-c": {
      text: "Encuentra el siguiente do a la derecha del do central. Suena más agudo.",
    },
    "find-low-c": {
      text: "Ahora encuentra el do justo a la izquierda del do central. Suena más grave.",
    },
    "cs-low-to-high": {
      text: "Toca cuatro teclas do, de grave a agudo, empezando por el do justo debajo del do central. Cada vez, busca el siguiente grupo de dos teclas negras hacia la derecha.",
    },
    "c-quiz": {
      text: "¿Dónde está el do?",
      answers: [
        "Justo a la derecha de un grupo de dos teclas negras",
        "Justo a la izquierda de un grupo de dos teclas negras",
        "Justo a la izquierda de un grupo de tres teclas negras",
      ],
    },
    recap: {
      text: "Bien hecho. Ya puedes encontrar el do en cualquier parte del piano.",
      points: [
        "El do es la tecla blanca justo a la izquierda de cada grupo de dos teclas negras.",
        "El piano tiene un do en cada parte, de grave a agudo.",
        "El do que está cerca del centro se llama do central.",
      ],
    },
  },
};

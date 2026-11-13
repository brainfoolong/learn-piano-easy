/** *Middle C* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { MiddleCTexts } from "./middle-c.en";

export const middleCEs: Translation<MiddleCTexts> = {
  title: "El do central",
  steps: {
    "c-d-e-demo": {
      text: "Mira y escucha. El piano toca do, re y mi, y luego baja de nuevo a do. Pronto vas a leer estas tres notas en el pentagrama.",
    },
    "the-ledger-line": {
      text: "El do central está debajo del pentagrama en clave de sol. Tiene su propia línea corta, que le pasa por el centro. Esta línea corta se llama línea adicional.",
    },
    "where-quiz": {
      text: "¿Dónde se escribe el do central?",
      answers: ["En la línea de abajo del pentagrama", "En una línea adicional corta, justo debajo del pentagrama", "En el centro del pentagrama"],
    },
    "the-c-you-know": {
      text: "Este es el do que ya conoces. Está cerca del centro del piano, justo a la izquierda de dos teclas negras. Ahora también puedes leerlo.",
    },
    "press-middle-c": {
      text: "Toca el do central en el piano.",
    },
    "name-middle-c": {
      text: "Nombra cada nota del pentagrama. Busca la línea adicional corta.",
    },
    "the-neighbours": {
      text: "El do central tiene dos vecinas cercanas. Re cuelga justo debajo de la línea de abajo. Mi está justo en la línea de abajo.",
    },
    "neighbour-quiz": {
      text: "¿Qué nota está en la línea de abajo del pentagrama en clave de sol?",
      answers: ["Do", "Re", "Mi"],
    },
    "name-c-d-e": {
      text: "Nombra cada nota: do, re o mi. Parte de la línea adicional y cuenta hacia arriba.",
    },
    "play-c-d-e": {
      text: "Ahora toca cada nota que veas. Cada una es el do central o una vecina cercana.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes leer el do central.",
      points: ["El do central está en una línea adicional corta, debajo del pentagrama en clave de sol.", "Es el do cerca del centro del piano.", "Re cuelga debajo de la línea de abajo, y mi está en ella."],
    },
  },
};

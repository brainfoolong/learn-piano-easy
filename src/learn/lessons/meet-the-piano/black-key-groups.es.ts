/** *Black key groups* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { BlackKeyGroupsTexts } from "./black-key-groups.en";

export const blackKeyGroupsEs: Translation<BlackKeyGroupsTexts> = {
  title: "Los grupos de teclas negras",
  steps: {
    "see-the-groups": {
      text: "Mira las teclas negras. Vienen en grupos: primero un grupo de dos, luego un grupo de tres. Este patrón se repite a lo largo de todo el piano.",
    },
    "smaller-group-quiz": {
      text: "¿Cuántas teclas negras hay en el grupo más pequeño?",
      answers: ["Una", "Dos", "Tres", "Cuatro"],
    },
    "two-left": {
      text: "Encuentra un grupo de dos teclas negras. Presiona su tecla izquierda.",
    },
    "two-right": {
      text: "Ahora presiona la tecla derecha de un grupo de dos teclas negras.",
    },
    "group-of-three": {
      text: "Junto a cada grupo de dos hay un grupo de tres teclas negras. Es un poco más ancho, así que lo reconoces rápido.",
    },
    "three-left": {
      text: "Encuentra un grupo de tres teclas negras. Presiona su tecla izquierda.",
    },
    "three-middle": {
      text: "Ahora presiona la tecla del medio de un grupo de tres teclas negras.",
    },
    "all-five": {
      text: "Toca cada tecla negra de un grupo de dos y luego las del grupo de tres que está a su lado, de izquierda a derecha.",
    },
    "find-your-way": {
      text: "Todas las teclas blancas se parecen. ¿Qué te ayuda a orientarte en el piano?",
      answers: ["El color de las teclas blancas", "Los grupos de dos y de tres teclas negras", "El tamaño de cada tecla"],
    },
    "three-right": {
      text: "Una última búsqueda: presiona la tecla derecha de un grupo de tres teclas negras.",
    },
    recap: {
      text: "Bien hecho. Ya sabes orientarte con las teclas negras.",
      points: [
        "Las teclas negras vienen en grupos de dos y de tres.",
        "Los dos grupos se alternan a lo largo de todo el piano.",
        "Los grupos te muestran dónde estás en el teclado.",
      ],
    },
  },
};

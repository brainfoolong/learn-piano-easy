/** *Major triads* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { MajorTriadsTexts } from "./major-triads.en";

export const majorTriadsEs: Translation<MajorTriadsTexts> = {
  title: "Tríadas mayores",
  steps: {
    "major-demo": {
      text: "Escucha cuatro tríadas: do, fa, sol y otra vez do. Cada una suena brillante y alegre. Son tríadas mayores.",
    },
    "count-the-steps": {
      text: "Cuenta los semitonos en do, mi y sol. Cada tecla cuenta, también las negras. De mi a sol hay tres semitonos.",
    },
    "half-steps-c-to-e": {
      text: "Ahora cuenta desde do hasta mi. ¿Cuántos semitonos hay?",
      answers: ["Dos", "Tres", "Cuatro"],
    },
    "major-recipe": {
      text: "Esa es la receta de una tríada mayor. Empieza en su fundamental, la tecla que da nombre a la tríada. Sube cuatro semitonos y luego tres más.",
    },
    "right-hand-fingers": {
      text: "Tu mano derecha toca una tríada con los dedos 1, 3 y 5. El pulgar toca la fundamental.",
    },
    "c-major-triad": {
      text: "Pon el pulgar derecho en el do central. Toca do, mi y sol una por una, y luego las tres a la vez.",
    },
    "f-major-triad": {
      text: "Sube el pulgar a fa. Cuatro semitonos más arriba está la nota la, y tres más allá, do. Tócalas una por una, y luego a la vez.",
    },
    "g-major-triad": {
      text: "Ahora lleva el pulgar a sol. La receta da sol, si y re. Tócalas una por una, y luego a la vez.",
    },
    "four-up-from-d": {
      text: "Empieza en re y sube cuatro semitonos. ¿En qué tecla terminas?",
      answers: ["Fa♯", "Fa", "Sol"],
    },
    "find-f-sharp": {
      text: "Entonces re mayor necesita una tecla negra. Busca fa♯, la tecla negra justo a la derecha de fa.",
    },
    "d-major-triad": {
      text: "Pon el pulgar derecho en el re de arriba del do central, y el dedo 3 queda sobre fa♯. Toca re, fa♯ y la, una por una, y luego a la vez.",
    },
    "left-hand-fingers": {
      text: "Tu mano izquierda toca una tríada con los dedos 5, 3 y 1. El dedo 5 toca la fundamental, y el pulgar toca la tecla de arriba.",
    },
    "left-c-major": {
      text: "Pon el dedo 5 izquierdo en el do debajo del do central. Toca do, mi y sol una por una, y luego a la vez.",
    },
    "chord-walk-demo": {
      text: "Aquí tienes do, fa, sol y do mayor seguidos. La mano mantiene su forma y se mueve entera.",
    },
    "chord-walk": {
      text: "Ahora tú. Toca las cuatro tríadas con la mano derecha. Mantén la forma y muévela de fundamental en fundamental.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes construir una tríada mayor sobre cualquier tecla.",
      points: [
        "Una tríada mayor empieza en su fundamental.",
        "Su tecla del medio está cuatro semitonos más arriba, y la de arriba, tres más.",
        "Do, fa y sol mayor usan solo teclas blancas, y re mayor necesita fa♯.",
        "La mano derecha toca con 1, 3 y 5, y la mano izquierda con 5, 3 y 1.",
      ],
    },
  },
};

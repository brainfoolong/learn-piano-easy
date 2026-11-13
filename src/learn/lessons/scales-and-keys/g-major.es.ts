/** *G major* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { GMajorTexts } from "./g-major.en";

export const gMajorEs: Translation<GMajorTexts> = {
  title: "Sol mayor",
  steps: {
    "g-scale-demo": {
      text: "Escucha una escala que empieza en sol. Suena tan brillante como do mayor. Una de sus teclas es negra.",
    },
    "pattern-from-g": {
      text: "Empieza el patrón de la escala en sol: tono, tono, semitono, tono, tono. Eso da sol, la, si, do, re y mi. Hasta aquí, todas las teclas son blancas.",
    },
    "whole-step-above-e": {
      text: "Desde mi, el patrón pide un tono. ¿Qué tecla está un tono por encima de mi?",
      answers: ["Fa♯", "Fa", "Sol"],
    },
    "one-sharp": {
      text: "Por eso la escala de sol mayor toca fa♯ en lugar de fa. Desde fa♯, un semitono te lleva al sol de arriba. Sol mayor tiene un sostenido: fa♯.",
    },
    "find-f-sharp": {
      text: "Busca fa♯ en el teclado. Es la tecla negra justo a la derecha de fa.",
    },
    "same-fingering": {
      text: "Tu mano derecha toca sol mayor igual que do mayor. Los dedos 1, 2 y 3 tocan sol, la y si. El pulgar pasa por debajo hasta do, y luego 1, 2, 3, 4, 5 tocan do, re, mi, fa♯ y sol.",
    },
    "g-scale-up": {
      text: "Ahora tú. Pon el pulgar derecho en el sol que está encima del do central y toca la escala de sol mayor hacia arriba, hasta el sol siguiente. El dedo 4 toca fa♯.",
    },
    "g-scale-down": {
      text: "Ahora tócala hacia abajo, del sol agudo hasta el sol donde empezaste. El dedo 3 cruza por encima del pulgar hasta si.",
    },
    "hear-f-and-f-sharp": {
      text: "Fa♯ está solo un semitono por encima de fa, así que escucha con atención. ¿La segunda tecla suena más aguda, más grave o igual?",
    },
    "g-tune-demo": {
      text: "Aquí tienes una melodía corta en sol mayor. Tu mano izquierda mantiene la quinta sol-re, y tu mano derecha toca fa♯.",
    },
    "g-tune": {
      text: "Pon el pulgar derecho en el re que está encima del do central, para que el dedo 3 quede sobre fa♯. Tu mano izquierda toca la quinta grave: el sol que está debajo del do que queda bajo el do central, y el re que está encima de ese sol. Toca la quinta junto con el primer sol, y otra vez con el segundo.",
    },
    recap: {
      text: "¡Bien hecho! Tocaste tu segunda escala.",
      points: [
        "El patrón de la escala mayor puede empezar en cualquier tecla.",
        "Si empieza en sol, necesita fa♯ para que el semitono quede justo debajo del sol de arriba.",
        "Sol mayor tiene un sostenido: fa♯.",
        "Su digitación es la misma que la de do mayor.",
      ],
    },
  },
};

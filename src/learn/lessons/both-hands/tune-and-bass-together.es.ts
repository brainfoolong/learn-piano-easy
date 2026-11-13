/** *Tune and bass together* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { TuneAndBassTogetherTexts } from "./tune-and-bass-together.en";

export const tuneAndBassTogetherEs: Translation<TuneAndBassTogetherTexts> = {
  title: "Melodía y bajo juntos",
  steps: {
    "whole-tune": {
      text: "Escucha una melodía corta de cuatro compases. La mano derecha toca la melodía, y la izquierda agrega una nota grave en cada compás.",
    },
    "two-layers": {
      text: "La melodía se mueve en cada tiempo. El bajo entra solo en el tiempo uno y suena debajo de la melodía durante todo el compás.",
    },
    "tune-alone": {
      text: "Primero la melodía sola, en la posición de do. Toca do, re, mi, fa; sol, fa, mi, re; re, mi, fa, re, y termina en el do central.",
    },
    "bass-beat-quiz": {
      text: "¿En qué tiempo de cada compás entra la nota del bajo?",
      answers: ["En el tiempo uno", "En el tiempo tres", "En cada tiempo"],
    },
    "bass-demo": {
      text: "Ahora escucha el bajo solo. Cada nota dura un compás entero: do, luego sol dos veces y otra vez do.",
    },
    "bass-alone": {
      text: "Toca el bajo con la mano izquierda en la posición de do. El meñique toca do, y el pulgar, sol.",
    },
    "press-together": {
      text: "En el tiempo uno, las dos manos presionan sus teclas al mismo tiempo. Luego la mano izquierda mantiene su nota mientras la derecha sigue tocando.",
    },
    "first-half": {
      text: "Toca los dos primeros compases con las dos manos. Presiona el bajo y la primera nota de la melodía juntos.",
    },
    "held-bass-quiz": {
      text: "En el segundo compás, la mano derecha toca sol, fa, mi, re. ¿Qué hace mientras tanto la mano izquierda?",
      answers: ["Toca sol, fa, mi, re una octava más abajo", "Mantiene su sol", "Se levanta y descansa"],
    },
    "whole-tune-together": {
      text: "Ahora toda la melodía con las dos manos. Ve con calma en cada tiempo uno, donde tocan las dos manos.",
    },
    recap: {
      text: "¡Bien hecho! Tocaste una melodía con su bajo.",
      points: [
        "Aprende primero la melodía sola, luego el bajo solo, y después júntalos.",
        "El bajo entra en el tiempo uno, junto con la nota de la melodía.",
        "La mano izquierda mantiene el bajo mientras la derecha sigue tocando.",
      ],
    },
  },
};

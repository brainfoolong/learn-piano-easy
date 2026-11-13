/** *What a chord is* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { WhatAChordIsTexts } from "./what-a-chord-is.en";

export const whatAChordIsEs: Translation<WhatAChordIsTexts> = {
  title: "Qué es un acorde",
  steps: {
    "chord-demo": {
      text: "Escucha do, mi y sol, una tras otra. Luego escucha las tres a la vez. Se funden en un solo sonido lleno.",
    },
    "several-keys": {
      text: "Varias teclas presionadas a la vez forman un acorde. Ya tocaste uno: la quinta abierta de tu mano izquierda. Ahora vas a construir más.",
    },
    "a-third": {
      text: "Presiona do y mi a la vez. Están a una tercera de distancia, así que entre ellas hay una tecla blanca. Los dedos 1 y 3 tocan la tercera.",
    },
    "thirds-up": {
      text: "Ahora tú. Pon el pulgar derecho en el do central y toca do y mi a la vez. Luego sube la mano a re y fa, y a mi y sol.",
    },
    "skipped-key": {
      text: "Mira una tercera en las teclas blancas. ¿Cuántas teclas blancas hay entre sus dos teclas?",
      answers: ["Ninguna", "Una", "Dos"],
    },
    "thirds-and-fifths": {
      text: "Una quinta abarca cinco teclas blancas, como do y sol. La tocan el pulgar y el dedo 5. La tercera suena dulce, y la quinta suena abierta.",
    },
    "third-then-fifth": {
      text: "Deja el pulgar en do. Toca la tercera do y mi, y luego la quinta do y sol. Tócalas dos veces.",
    },
    "stack-thirds": {
      text: "Ahora pon una tercera sobre otra. Do y mi forman una tercera, y mi y sol la siguiente. Juntas, do, mi y sol forman una tríada.",
    },
    "triad-demo": {
      text: "Primero escucha la tercera do y mi. Luego se suma sol arriba, y la tríada suena llena.",
    },
    "first-triad": {
      text: "Toca do, mi y sol a la vez con los dedos 1, 3 y 5. Presiona las tres teclas juntas y toca la tríada dos veces.",
    },
    "which-is-a-triad": {
      text: "Una tríada apila dos terceras. ¿Qué tres teclas forman una tríada que empieza en re?",
      answers: ["Re, mi y fa", "Re, sol y la", "Re, fa y la"],
    },
    "triads-up": {
      text: "Mantén la forma de tu mano derecha. Toca do-mi-sol desde el do central y luego sube a re-fa-la y mi-sol-si, todo en teclas blancas. Termina en do-mi-sol.",
    },
    recap: {
      text: "¡Bien hecho! Tocaste tus primeros acordes.",
      points: [
        "Un acorde son varias teclas presionadas a la vez.",
        "Una tercera salta una tecla blanca, y la tocan los dedos 1 y 3.",
        "Dos terceras apiladas forman una tríada, como do, mi y sol.",
        "En la mano derecha, los dedos 1, 3 y 5 tocan una tríada.",
      ],
    },
  },
};

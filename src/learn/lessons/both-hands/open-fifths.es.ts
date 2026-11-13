/** *Open fifths* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { OpenFifthsTexts } from "./open-fifths.en";

export const openFifthsEs: Translation<OpenFifthsTexts> = {
  title: "Quintas abiertas",
  steps: {
    "fifth-sound": {
      text: "Escucha cómo la mano izquierda toca dos teclas a la vez. Este sonido se llama quinta abierta. Suena abierto, fuerte y tranquilo.",
    },
    "little-finger-and-thumb": {
      text: "Pon la mano izquierda en la posición de do. Presiona do con el meñique y sol con el pulgar, las dos a la vez. Eso es una quinta.",
    },
    "count-the-fifth": {
      text: "Cuenta las teclas blancas de do a sol, contando do y sol. ¿Cuántas teclas son?",
      answers: ["Cinco", "Tres", "Ocho"],
    },
    "first-fifth": {
      text: "Ahora tú. Toca la quinta do y sol tres veces. Presiona las dos teclas juntas cada vez.",
    },
    "move-the-fifth": {
      text: "Una quinta es una forma que puedes mover. Mantén el meñique y el pulgar a la misma distancia y desliza toda la mano.",
    },
    "fifth-from-g": {
      text: "Tu meñique izquierdo está en sol. ¿Qué tecla toca el pulgar para formar una quinta?",
      answers: ["Re", "Do", "Mi"],
    },
    "three-fifths": {
      text: "Con la mano izquierda, toca la quinta del do debajo del do central hasta sol. Luego toca la quinta en el sol debajo de ese do, después en el fa debajo de él, y vuelve a do. Mantén la misma forma cada vez.",
    },
    "fifth-under-tune": {
      text: "Ahora la mano derecha toca una melodía sobre la quinta. La mano izquierda presiona la quinta con la primera nota y la mantiene.",
    },
    "fifth-and-tune": {
      text: "Ahora tú. Toca la quinta do y sol junto con mi en la mano derecha, y luego re y do. Toca otra vez la quinta con mi, y luego dos mi más.",
    },
    recap: {
      text: "¡Bien hecho! Ahora tu mano izquierda toca quintas.",
      points: [
        "Una quinta abarca cinco teclas blancas, contando las dos de los extremos, y sus dos teclas se tocan juntas.",
        "El meñique izquierdo toca la tecla grave, y el pulgar, la aguda.",
        "La forma se mueve: do y sol, sol y re, fa y do.",
        "Una quinta debajo de una melodía suena abierta y fuerte.",
      ],
    },
  },
};

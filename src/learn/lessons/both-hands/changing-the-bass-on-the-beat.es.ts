/** *Changing the bass on the beat* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { ChangingTheBassOnTheBeatTexts } from "./changing-the-bass-on-the-beat.en";

export const changingTheBassOnTheBeatEs: Translation<ChangingTheBassOnTheBeatTexts> = {
  title: "Cambiar el bajo con el pulso",
  steps: {
    "bass-changes": {
      text: "Escucha la mano izquierda. Mantiene una quinta durante un compás entero y luego pasa a otra. La mano derecha nunca se detiene.",
    },
    "beat-one": {
      text: "El bajo cambia en el tiempo uno, el primer tiempo de un compás nuevo. Llega junto con la nota de la mano derecha en ese tiempo.",
    },
    "when-it-changes": {
      text: "¿En qué tiempo pasa la mano izquierda a su nueva quinta?",
      answers: ["En el tiempo uno del compás nuevo", "En el tiempo cuatro, un poco antes", "Cada vez que la mano derecha descansa"],
    },
    "count-the-bars": {
      text: "Marca cada tiempo durante dos compases y cuenta en voz alta: «uno, dos, tres, cuatro». Siente cómo cada compás empieza en el uno.",
    },
    "land-on-one": {
      text: "Mantén la quinta anterior hasta el final del tiempo cuatro. Luego suéltala y cae en la nueva quinta justo en el uno.",
    },
    "c-to-g": {
      text: "Solo la mano izquierda. Toca la quinta en el do debajo del do central, baja a la quinta en el sol que está debajo y luego vuelve a do.",
    },
    "change-under-tune": {
      text: "Ahora con las dos manos. Las quintas están en do, luego en el sol que está debajo y otra vez en do. Cada compás empieza con una quinta nueva y una nota de la melodía a la vez.",
    },
    "four-basses": {
      text: "Escucha cuatro compases, cada uno con su propia quinta: do, fa, sol y otra vez do. Cada cambio cae en el uno.",
    },
    "four-bars": {
      text: "Ahora tú. Toca los cuatro compases con quintas en do, luego en el fa y el sol que están debajo, y otra vez en do. Cambia la quinta junto con la primera nota de cada compás.",
    },
    recap: {
      text: "¡Bien hecho! Ahora tu mano izquierda cambia con el pulso.",
      points: [
        "El bajo cambia en el tiempo uno de un compás nuevo.",
        "La nueva quinta llega junto con la nota de la mano derecha.",
        "Mantén la quinta anterior hasta que termine el compás, y luego muévete.",
      ],
    },
  },
};

/** *Minor triads* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { MinorTriadsTexts } from "./minor-triads.en";

export const minorTriadsEs: Translation<MinorTriadsTexts> = {
  title: "Tríadas menores",
  steps: {
    "major-then-minor": {
      text: "Escucha dos acordes sobre do. El primero es do mayor y suena brillante. El segundo es do menor y suena más oscuro.",
    },
    "thirds-swap": {
      text: "En una tríada mayor, la tercera de abajo es una tercera mayor: cuatro semitonos. La de arriba es una tercera menor. Una tríada menor las intercambia, así que la tercera menor va primero.",
    },
    "minor-third-size": {
      text: "Una tercera mayor tiene cuatro semitonos. ¿Cuántos semitonos tiene una tercera menor?",
      answers: ["Cuatro", "Tres", "Dos"],
    },
    "lower-the-middle": {
      text: "Así, con un solo cambio conviertes una tríada mayor en menor. Baja un semitono su nota del medio. Do, mi y sol se vuelven do, mi♭ y sol.",
    },
    "find-e-flat": {
      text: "Busca mi♭ en el teclado. Es la tecla negra justo a la izquierda de mi.",
    },
    "c-major-to-minor": {
      text: "Ahora tú. Toca do mayor con los dedos 1, 3 y 5 desde el do central. Luego desliza el dedo 3 hacia abajo hasta mi♭ para tocar do menor, y toca ambos acordes dos veces.",
    },
    "hear-the-middle-drop": {
      text: "Entre mayor y menor, solo la nota del medio se mueve un semitono. ¿La segunda tecla suena más aguda, más grave o igual?",
    },
    "white-key-minors": {
      text: "Tres tríadas menores usan solo teclas blancas. El acorde de la menor es la-do-mi, re menor es re-fa-la y mi menor es mi-sol-si.",
    },
    "a-minor": {
      text: "Pon el pulgar derecho en el la debajo del do central. Toca el acorde de la menor dos veces: la, do y mi a la vez.",
    },
    "d-and-e-minor": {
      text: "Ahora mueve la mano. Toca re menor desde el re de arriba del do central, luego mi menor una tecla blanca más arriba y otra vez re menor.",
    },
    "g-major-to-minor": {
      text: "Sol mayor es sol, si y re. ¿Qué nota bajas para tocar sol menor?",
      answers: ["Si", "Sol", "Re"],
    },
    "major-minor-pairs": {
      text: "Toca re mayor con fa♯, y luego re menor con fa. Después toca sol mayor con si, y sol menor con si♭.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes tocar tríadas mayores y menores.",
      points: [
        "Una tríada menor apila una tercera menor y luego una tercera mayor.",
        "Baja la nota del medio de una tríada mayor para volverla menor.",
        "Mayor suena brillante, y menor suena más oscuro.",
        "Los acordes de la, re y mi menor usan solo teclas blancas.",
      ],
    },
  },
};

/** *Right hand in C position* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { RightHandCPositionTexts } from "./right-hand-c-position.en";

export const rightHandCPositionPt: Translation<RightHandCPositionTexts> = {
  title: "Mão direita na posição de Dó",
  steps: {
    "position-demo": {
      text: "Observe cinco teclas, do Dó central até o Sol. Um dedo da mão direita fica apoiado em cada uma delas.",
    },
    "c-position": {
      text: "Esta é a posição de Dó. O polegar direito fica no Dó central, e os dedos 2 a 5 ficam em Ré, Mi, Fá e Sol. Cada dedo tem a sua tecla e fica nela.",
    },
    "finger-g-quiz": {
      text: "Na posição de Dó, qual dedo toca o Sol?",
      answers: ["Dedo 1", "Dedo 3", "Dedo 5"],
    },
    "finger-four-key": {
      text: "Coloque a mão direita na posição de Dó. Pressione a tecla que está sob o dedo 4.",
    },
    "finger-two-key": {
      text: "Deixe a mão onde está. Agora pressione a tecla que está sob o dedo 2.",
    },
    "finger-three-quiz": {
      text: "Na posição de Dó, qual tecla é do dedo 3?",
      answers: ["Ré", "Mi", "Fá"],
    },
    "finger-pattern": {
      text: "Seus dedos já conhecem as teclas deles. Toque com os dedos 1, 3, 2, 4, 5. A tecla marcada mostra qual vem a seguir.",
    },
    "finger-walk-down": {
      text: "Agora desça de volta a partir do dedo mínimo. Toque com os dedos 5, 4, 3, 2, 1.",
    },
    recap: {
      text: "Muito bem. Sua mão direita tem um lugar só dela no teclado.",
      points: [
        "Na posição de Dó, o polegar direito fica no Dó central.",
        "Os dedos 1 a 5 ficam em Dó, Ré, Mi, Fá e Sol.",
        "Cada dedo tem a sua tecla, então o número de um dedo indica uma tecla.",
      ],
    },
  },
};

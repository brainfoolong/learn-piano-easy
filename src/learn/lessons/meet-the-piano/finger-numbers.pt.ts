/** *Finger numbers* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { FingerNumbersTexts } from "./finger-numbers.en";

export const fingerNumbersPt: Translation<FingerNumbersTexts> = {
  title: "Números dos dedos",
  steps: {
    "right-hand-numbers": {
      text: "Cada dedo tem um número. Na mão direita, o polegar é o 1 e o mínimo é o 5. Os dedos entre eles são o 2, o 3 e o 4.",
    },
    "finger-three-quiz": {
      text: "Qual dedo é o 3?",
      answers: ["O polegar", "O médio", "O mínimo"],
    },
    "left-hand-numbers": {
      text: "A mão esquerda conta do mesmo jeito: o polegar é o 1 e o mínimo é o 5. Os dois polegares são o 1, então os números se espelham.",
    },
    "left-thumb-quiz": {
      text: "Qual é o número do seu polegar esquerdo?",
      answers: ["1", "3", "5"],
    },
    "five-fingers-demo": {
      text: "Observe cinco teclas seguidas, uma para cada dedo da sua mão direita. O polegar toca a primeira tecla, depois vêm os dedos 2, 3, 4 e 5.",
    },
    "right-hand-five": {
      text: "Agora é sua vez. Coloque o polegar direito no Dó central e um dedo em cada tecla branca à direita dele. Toque com os dedos 1, 2, 3, 4 e 5.",
    },
    "finger-pattern": {
      text: "Deixe a mão onde está. Toque com os dedos 1, 3, 5, 3, 1.",
    },
    "left-hand-five": {
      text: "Agora, a mão esquerda. Coloque o dedo mínimo, o dedo 5, no Dó marcado. Toque até o polegar: 5, 4, 3, 2, 1.",
    },
    recap: {
      text: "Muito bem. Agora seus dedos têm números.",
      points: [
        "O polegar é o 1 e o mínimo é o 5.",
        "As duas mãos contam do mesmo jeito, a partir do polegar.",
        "Um número numa lição diz qual dedo toca.",
      ],
    },
  },
};

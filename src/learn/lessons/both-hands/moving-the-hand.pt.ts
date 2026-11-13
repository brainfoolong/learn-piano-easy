/** *Moving the hand* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { MovingTheHandTexts } from "./moving-the-hand.en";

export const movingTheHandPt: Translation<MovingTheHandTexts> = {
  title: "Mover a mão",
  steps: {
    "phrase-then-move": {
      text: "Observe a mão direita. Ela toca cinco notas na posição de Dó, sobe durante a pausa e toca o mesmo formato de novo, mais acima.",
    },
    "new-position": {
      text: "Uma posição de cinco dedos também pode começar em outras teclas. Na posição de Sol, o polegar direito fica no Sol acima do Dó central. Seus dedos cobrem Sol, Lá, Si, Dó, Ré.",
    },
    "new-thumb": {
      text: "Encontre a tecla do polegar direito na posição de Sol: o Sol logo acima do Dó central.",
    },
    "little-finger-quiz": {
      text: "Sua mão direita está na posição de Sol. Que tecla o dedo mínimo toca?",
      answers: ["Ré", "Dó", "Sol", "Mi"],
    },
    "middle-finger-quiz": {
      text: "Ainda na posição de Sol. Que tecla o dedo médio toca?",
      answers: ["Mi", "Si", "Lá"],
    },
    "read-g-position": {
      text: "Estas são as notas da posição de Sol na pauta com clave de Sol. Diga o nome de cada uma.",
    },
    "c-position-phrase": {
      text: "Comece na posição de Dó. Toque do polegar até o quarto dedo e volte descendo até o Dó central.",
    },
    "g-position-phrase": {
      text: "Agora leve a mão para a posição de Sol e toque o mesmo formato. Polegar no Sol, suba até o Dó e volte.",
    },
    "move-in-a-rest": {
      text: "Mude a mão de lugar durante uma pausa ou no fim de uma nota longa. Levante a mão inteira, mantenha o formato e pouse o polegar na nova tecla.",
    },
    "move-and-play": {
      text: "Toque duas frases seguidas com a mão direita. Comece no Dó central e toque Dó, Ré, Mi, Fá, Mi, Ré, Dó. Depois leve o polegar para o Sol acima do Dó central e toque Sol, Lá, Si, Dó, Si, Lá, Sol.",
    },
    recap: {
      text: "Muito bem. Agora sua mão pode mudar de lugar.",
      points: [
        "Na posição de Sol, o polegar direito fica no Sol acima do Dó central.",
        "Seus dedos tocam então Sol, Lá, Si, Dó, Ré.",
        "Mova a mão inteira durante uma pausa ou uma nota longa, e mantenha o formato.",
      ],
    },
  },
};

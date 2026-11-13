/** *Skips* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { SkipsTexts } from "./skips.en";

export const skipsPt: Translation<SkipsTexts> = {
  title: "Pulos",
  steps: {
    "skip-demo": {
      text: "Observe e ouça. Cada nota pula uma tecla branca, primeiro para cima e depois de volta para baixo.",
    },
    "what-a-skip-is": {
      text: "Um pulo passa por cima de uma tecla branca. De Dó a Mi, você deixa o Ré de fora. O polegar toca o Dó, o dedo 3 toca o Mi e o dedo 2 descansa.",
    },
    "skip-from-c-quiz": {
      text: "Seu polegar está no Dó. Qual tecla fica a um pulo dele?",
      answers: ["Ré", "Mi", "Fá"],
    },
    "skips-up": {
      text: "Coloque a mão direita na posição de Dó. Toque os pulos para cima: dedos 1 e 3, depois 2 e 4, depois 3 e 5.",
    },
    "skips-down": {
      text: "Agora os mesmos pulos de volta para baixo. Comece com o dedo 5 e siga a tecla marcada.",
    },
    "step-or-skip-quiz": {
      text: "O dedo 4 toca o Fá, depois o dedo 5 toca o Sol. Isso é um grau vizinho ou um pulo?",
      answers: ["Um grau vizinho", "Um pulo"],
    },
    "mixed-phrase": {
      text: "Coloque a mão direita na posição de Dó. Esta melodia mistura graus vizinhos e um pulo: Dó Ré Mi, um pulo até o Sol, depois Fá Mi Ré Dó.",
    },
    recap: {
      text: "Muito bem. Agora você já pode tocar pulos.",
      points: [
        "Um pulo passa por cima de uma tecla branca.",
        "Na posição de Dó, um pulo deixa um dedo de fora.",
        "Uma melodia pode misturar graus vizinhos e pulos.",
      ],
    },
  },
};

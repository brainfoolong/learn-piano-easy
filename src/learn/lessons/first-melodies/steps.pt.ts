/** *Steps* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { StepsTexts } from "./steps.en";

export const stepsPt: Translation<StepsTexts> = {
  title: "Graus vizinhos",
  steps: {
    "steps-demo": {
      text: "Observe uma pequena melodia. Cada nota vai para a tecla bem ao lado da anterior.",
    },
    "what-a-step-is": {
      text: "Ir para a tecla branca logo ao lado se chama grau vizinho. Um grau vizinho pode subir ou descer. Na posição de Dó, quem toca é o dedo ao lado.",
    },
    "which-is-a-step": {
      text: "Qual destes movimentos é um grau vizinho?",
      answers: ["De Dó a Ré", "De Dó a Mi", "De Dó a Sol"],
    },
    "hear-steps": {
      text: "Um grau vizinho para cima soa um pouco mais agudo, e um para baixo, um pouco mais grave. Ouça duas notas. A segunda é mais aguda, mais grave ou igual?",
    },
    "step-up": {
      text: "Coloque a mão direita na posição de Dó. Suba de grau em grau, do polegar até o dedo mínimo.",
    },
    "step-down": {
      text: "Agora desça de grau em grau, do dedo mínimo até o polegar.",
    },
    "next-finger-quiz": {
      text: "O dedo 3 está no Mi. Qual dedo toca um grau vizinho acima dele?",
      answers: ["Dedo 2", "Dedo 4", "Dedo 5"],
    },
    "step-up-and-down": {
      text: "Suba de grau em grau até o fim e desça de novo até o começo. Siga a tecla marcada.",
    },
    "stepping-tune": {
      text: "Coloque a mão direita na posição de Dó. Esta melodia só tem graus vizinhos: Dó Ré Mi Ré Mi Fá Mi Ré Dó.",
    },
    recap: {
      text: "Muito bem. Agora você já pode tocar uma melodia feita de graus vizinhos.",
      points: [
        "Um grau vizinho vai para a tecla branca logo ao lado.",
        "Um grau vizinho sobe ou desce.",
        "Na posição de Dó, o dedo ao lado toca o grau vizinho.",
      ],
    },
  },
};

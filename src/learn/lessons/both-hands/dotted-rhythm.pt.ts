/** *The dotted rhythm* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { DottedRhythmTexts } from "./dotted-rhythm.en";

export const dottedRhythmPt: Translation<DottedRhythmTexts> = {
  title: "O ritmo pontuado",
  steps: {
    "even-and-dotted-demo": {
      text: "Ouça Mi e Ré em dois ritmos. Primeiro vêm semínimas iguais: Mi, Mi, Ré, Ré. Depois vem um Mi longo, seguido de um Ré rápido, e um Ré longo fecha o trecho.",
    },
    "what-a-dot-does": {
      text: "Aquela nota longa tinha um ponto ao lado. O ponto acrescenta metade da duração da própria nota. Assim, uma nota pontuada dura uma vez e meia o seu valor.",
    },
    "dotted-half-demo": {
      text: "Uma mínima dura dois tempos, e o ponto acrescenta mais um. Conte “1, 2, 3” em cada uma destas mínimas pontuadas.",
    },
    "dotted-half-quiz": {
      text: "Quantos tempos dura uma mínima pontuada?",
      answers: ["Dois tempos", "Três tempos", "Quatro tempos"],
    },
    "dotted-quarter": {
      text: "Uma semínima dura um tempo, e o ponto acrescenta meio tempo. Uma semínima pontuada começa no “1” e dura até o “2 e”. Uma colcheia no “2 e” completa o resto.",
    },
    "dotted-quarter-quiz": {
      text: "Quantos tempos dura uma semínima pontuada?",
      answers: ["Um tempo", "Um tempo e meio", "Dois tempos"],
    },
    "partner-quiz": {
      text: "Uma semínima pontuada e mais uma nota preenchem juntas dois tempos. Que nota é essa?",
      answers: ["Uma semínima", "Uma colcheia", "Uma mínima"],
    },
    "ode-demo": {
      text: "Aqui está o começo de Ode to Joy. O último compasso tem o ritmo pontuado: um Mi longo, um Ré rápido e depois um Ré longo.",
    },
    "ode-phrase": {
      text: "Coloque o polegar direito no Dó central e toque a melodia. Segure o último Mi um pouco mais e toque o Ré seguinte rápido.",
    },
    "fourth-demo": {
      text: "Ouça a mão esquerda do desafio final. Ela alterna entre Dó com Sol, a quinta que você já conhece, e Ré com Sol. Ré com Sol é uma quarta: ela abrange quatro teclas brancas, contando as duas pontas.",
    },
    "fifth-and-fourth": {
      text: "Sua vez. Coloque o dedo 5 no Dó abaixo do Dó central e o polegar no Sol. Toque Dó e Sol juntos, depois Ré e Sol com o dedo 4 no Ré, e repita os dois.",
    },
    recap: {
      text: "Muito bem. Agora você sabe tocar o ritmo de uma melodia famosa.",
      points: [
        "Um ponto acrescenta metade da duração de uma nota.",
        "Uma mínima pontuada dura três tempos.",
        "Uma semínima pontuada dura um tempo e meio.",
        "Uma colcheia muitas vezes vem depois de uma semínima pontuada.",
      ],
    },
  },
};

/** *Hands take turns* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { HandsTakeTurnsTexts } from "./hands-take-turns.en";

export const handsTakeTurnsPt: Translation<HandsTakeTurnsTexts> = {
  title: "As mãos se revezam",
  steps: {
    "call-and-answer": {
      text: "Ouça uma pergunta e a sua resposta. A mão direita toca três notas, e depois a mão esquerda toca as mesmas notas, uma oitava abaixo.",
    },
    "both-positions": {
      text: "Coloque as duas mãos na posição de Dó ao mesmo tempo. O polegar direito fica no Dó central, e o dedo mínimo esquerdo fica no Dó uma oitava abaixo.",
    },
    "low-hand-quiz": {
      text: "As duas mãos estão na posição de Dó. Qual mão toca as notas graves?",
      answers: ["A mão esquerda", "A mão direita", "As duas mãos juntas"],
    },
    "echo-listen": {
      text: "Ouça duas notas de cada vez. A segunda é mais aguda, mais grave ou igual?",
    },
    "first-turn": {
      text: "Sua vez. Toque Dó Ré Mi com a mão direita, depois Dó Ré Mi com a mão esquerda.",
    },
    "second-turn": {
      text: "Agora comece pelo dedo mínimo direito e desça até o Mi. A mão esquerda responde, do polegar descendo até o Mi.",
    },
    "one-waits": {
      text: "Enquanto uma mão toca, a outra descansa sobre as teclas dela e espera. Ela fica no lugar, pronta para a vez dela.",
    },
    "long-phrase": {
      text: "Mantenha as duas mãos na posição de Dó. Nesta melodia mais longa, as mãos se revezam em quatro partes: mão direita, mão esquerda, direita e depois esquerda. Siga a tecla marcada de uma mão para a outra.",
    },
    recap: {
      text: "Muito bem. Agora suas mãos dividem uma melodia.",
      points: [
        "As duas mãos podem ficar na posição de Dó ao mesmo tempo, a uma oitava de distância.",
        "A mão esquerda toca as notas graves, e a direita, as agudas.",
        "Uma mão toca enquanto a outra espera no lugar pela vez dela.",
      ],
    },
  },
};

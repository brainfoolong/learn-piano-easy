/** *The treble clef* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { TheTrebleClefTexts } from "./the-treble-clef.en";

export const theTrebleClefPt: Translation<TheTrebleClefTexts> = {
  title: "A clave de Sol",
  steps: {
    "a-clef-starts-the-staff": {
      text: "Toda pauta começa com uma clave. A clave diz qual nota é cada linha e cada espaço. Sua mão direita lê principalmente a clave de Sol.",
    },
    "the-g-line": {
      text: "A clave de Sol se enrola em volta da segunda linha de baixo para cima. Essa linha é Sol, por isso a clave se chama clave de Sol. É o primeiro Sol acima do Dó central.",
    },
    "g-line-quiz": {
      text: "Em volta de qual linha a clave de Sol se enrola?",
      answers: ["A linha de baixo", "A segunda linha de baixo para cima", "A linha de cima"],
    },
    "hear-g-demo": {
      text: "Ouça. Este é o Sol da segunda linha, tocado duas vezes.",
    },
    "play-g": {
      text: "Esta nota fica na linha do Sol. Toque-a no piano.",
    },
    "g-neighbours": {
      text: "A partir do Sol, você encontra as notas vizinhas. Um grau acima, no espaço logo acima, fica o Lá. Um grau abaixo, no espaço logo abaixo, fica o Fá.",
    },
    "neighbours-demo": {
      text: "Observe e ouça: Sol, um grau acima até o Lá, de volta ao Sol, um grau abaixo até o Fá, e de volta ao Sol.",
    },
    "space-above-g-quiz": {
      text: "Uma nota fica no espaço logo acima da linha do Sol. Que nota é?",
      answers: ["Fá", "Lá", "Si"],
    },
    "one-more-step": {
      text: "Continue nota por nota. Acima do Lá vem o Si, na linha do meio. Abaixo do Fá vem o Mi, na linha de baixo.",
    },
    "middle-line-quiz": {
      text: "Que nota fica na linha do meio da clave de Sol?",
      answers: ["Sol", "Lá", "Si"],
    },
    "play-treble-notes": {
      text: "Toque cada nota que você vê. Encontre primeiro a linha do Sol, depois conte os graus para cima ou para baixo.",
    },
    "name-treble-notes": {
      text: "Agora diga o nome de cada nota. Parta da linha do Sol e suba ou desça grau por grau até ela.",
    },
    recap: {
      text: "Muito bem. Você já lê suas primeiras notas na clave de Sol.",
      points: [
        "A clave de Sol se enrola em volta da segunda linha, que é Sol.",
        "Um grau acima ou abaixo leva à próxima linha ou ao próximo espaço, e à próxima nota.",
        "Em volta do Sol ficam Mi, Fá, Lá e Si.",
      ],
    },
  },
};

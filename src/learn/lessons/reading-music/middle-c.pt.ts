/** *Middle C* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { MiddleCTexts } from "./middle-c.en";

export const middleCPt: Translation<MiddleCTexts> = {
  title: "O Dó central",
  steps: {
    "c-d-e-demo": {
      text: "Observe e ouça. O piano toca Dó, Ré e Mi, e depois volta ao Dó. Logo você vai ler essas três notas na pauta.",
    },
    "the-ledger-line": {
      text: "O Dó central fica abaixo da pauta da clave de Sol. Ele tem uma linha curta só dele, que passa pelo seu meio. Essa linha curta se chama linha suplementar.",
    },
    "where-quiz": {
      text: "Onde se escreve o Dó central?",
      answers: ["Na linha de baixo da pauta", "Numa linha suplementar curta, logo abaixo da pauta", "No meio da pauta"],
    },
    "the-c-you-know": {
      text: "Este é o Dó que você já conhece. Ele fica perto do meio do piano, logo à esquerda de duas teclas pretas. Agora você também consegue lê-lo.",
    },
    "press-middle-c": {
      text: "Toque o Dó central no piano.",
    },
    "name-middle-c": {
      text: "Diga o nome de cada nota na pauta. Procure a linha suplementar curta.",
    },
    "the-neighbours": {
      text: "O Dó central tem duas vizinhas próximas. O Ré fica pendurado logo abaixo da linha de baixo. O Mi fica bem na linha de baixo.",
    },
    "neighbour-quiz": {
      text: "Que nota fica na linha de baixo da pauta da clave de Sol?",
      answers: ["Dó", "Ré", "Mi"],
    },
    "name-c-d-e": {
      text: "Diga o nome de cada nota: Dó, Ré ou Mi. Comece na linha suplementar e conte para cima.",
    },
    "play-c-d-e": {
      text: "Agora toque cada nota que você vê. Cada uma é o Dó central ou uma vizinha próxima.",
    },
    recap: {
      text: "Muito bem. Agora você consegue ler o Dó central.",
      points: [
        "O Dó central fica numa linha suplementar curta, abaixo da pauta da clave de Sol.",
        "É o Dó perto do meio do piano.",
        "O Ré fica pendurado abaixo da linha de baixo, e o Mi fica sobre ela.",
      ],
    },
  },
};

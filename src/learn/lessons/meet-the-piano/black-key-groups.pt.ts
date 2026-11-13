/** *Black key groups* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { BlackKeyGroupsTexts } from "./black-key-groups.en";

export const blackKeyGroupsPt: Translation<BlackKeyGroupsTexts> = {
  title: "Grupos de teclas pretas",
  steps: {
    "see-the-groups": {
      text: "Olhe as teclas pretas. Elas vêm em grupos: primeiro um grupo de duas, depois um grupo de três. Esse padrão se repete pelo piano inteiro.",
    },
    "smaller-group-quiz": {
      text: "Quantas teclas pretas há no grupo menor?",
      answers: ["Uma", "Duas", "Três", "Quatro"],
    },
    "two-left": {
      text: "Encontre um grupo de duas teclas pretas. Toque a tecla da esquerda.",
    },
    "two-right": {
      text: "Agora toque a tecla da direita de um grupo de duas teclas pretas.",
    },
    "group-of-three": {
      text: "Ao lado de cada grupo de duas fica um grupo de três teclas pretas. Ele é um pouco mais largo, então você o encontra rápido.",
    },
    "three-left": {
      text: "Encontre um grupo de três teclas pretas. Toque a tecla da esquerda.",
    },
    "three-middle": {
      text: "Agora toque a tecla do meio de um grupo de três teclas pretas.",
    },
    "all-five": {
      text: "Toque todas as teclas pretas de um grupo de duas, depois as do grupo de três ao lado, da esquerda para a direita.",
    },
    "find-your-way": {
      text: "As teclas brancas parecem todas iguais. O que ajuda você a se localizar no piano?",
      answers: ["A cor das teclas brancas", "Os grupos de duas e de três teclas pretas", "O tamanho de cada tecla"],
    },
    "three-right": {
      text: "Uma última busca: toque a tecla da direita de um grupo de três teclas pretas.",
    },
    recap: {
      text: "Muito bem. Agora você se localiza pelas teclas pretas.",
      points: [
        "As teclas pretas vêm em grupos de duas e de três.",
        "Os dois grupos se alternam pelo piano inteiro.",
        "Os grupos mostram onde você está no teclado.",
      ],
    },
  },
};

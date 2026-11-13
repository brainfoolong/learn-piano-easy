/** *The white keys* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { TheWhiteKeysTexts } from "./the-white-keys.en";

export const theWhiteKeysPt: Translation<TheWhiteKeysTexts> = {
  title: "As teclas brancas",
  steps: {
    "c-to-c": {
      text: "Ouça e observe. O piano toca todas as teclas brancas do Dó central até o próximo Dó.",
    },
    "seven-letters": {
      text: "As teclas brancas têm sete nomes: Dó Ré Mi Fá Sol Lá Si. Depois do Si, os nomes recomeçam no Dó. As teclas pretas mostram onde fica cada nota.",
    },
    "find-d": {
      text: "O Ré fica entre as duas teclas pretas de um grupo de duas. Encontre um Ré.",
    },
    "find-e": {
      text: "O Mi é a tecla branca logo à direita de um grupo de duas teclas pretas. Encontre um Mi.",
    },
    "find-f": {
      text: "O Fá é a tecla branca logo à esquerda de um grupo de três teclas pretas. Encontre um Fá.",
    },
    "find-g": {
      text: "O Sol fica entre a primeira e a segunda tecla preta de um grupo de três. Encontre um Sol.",
    },
    "find-a": {
      text: "O Lá fica entre a segunda e a terceira tecla preta de um grupo de três. Encontre um Lá.",
    },
    "find-b": {
      text: "O Si é a tecla branca logo à direita de um grupo de três teclas pretas. Encontre um Si.",
    },
    "play-c-to-c": {
      text: "Agora toque todas as teclas brancas do Dó central até o próximo Dó. Diga o nome de cada nota enquanto toca.",
    },
    "letters-quiz": {
      text: "Nas teclas brancas, que nota vem depois do Si?",
      answers: ["Lá", "Dó", "Ré"],
    },
    recap: {
      text: "Muito bem. Você conhece o nome de cada tecla branca.",
      points: [
        "As teclas brancas se chamam Dó Ré Mi Fá Sol Lá Si.",
        "Depois do Si, os nomes recomeçam no Dó.",
        "Os grupos de duas e de três teclas pretas mostram onde fica cada nota.",
      ],
    },
  },
};

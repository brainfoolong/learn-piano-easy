/** *Find C* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { FindCTexts } from "./find-c.en";

export const findCPt: Translation<FindCTexts> = {
  title: "Encontre o Dó",
  steps: {
    "hear-cs": {
      text: "Ouça e observe. O piano toca quatro teclas, do grave ao agudo. Todas têm o mesmo nome: Dó.",
    },
    "c-rule": {
      text: "Procure um grupo de duas teclas pretas. A tecla branca logo à esquerda dele é um Dó. Todo grupo de duas tem um Dó ao lado.",
    },
    "find-any-c": {
      text: "Encontre um Dó em qualquer lugar do piano. Procure duas teclas pretas e toque a tecla branca à esquerda delas.",
    },
    "middle-c": {
      text: "O Dó perto do meio do piano tem um nome só dele: o Dó central. Muitas músicas começam nele, então você vai encontrá-lo com frequência.",
    },
    "find-middle-c": {
      text: "Agora toque o Dó central, o Dó mais perto do meio do piano.",
    },
    "find-high-c": {
      text: "Encontre o próximo Dó à direita do Dó central. Ele soa mais agudo.",
    },
    "find-low-c": {
      text: "Agora encontre o Dó logo à esquerda do Dó central. Ele soa mais grave.",
    },
    "cs-low-to-high": {
      text: "Toque quatro Dós, do grave ao agudo, começando pelo Dó logo abaixo do Dó central. A cada vez, procure o próximo grupo de duas teclas pretas à direita.",
    },
    "c-quiz": {
      text: "Onde fica o Dó?",
      answers: [
        "Logo à direita de um grupo de duas teclas pretas",
        "Logo à esquerda de um grupo de duas teclas pretas",
        "Logo à esquerda de um grupo de três teclas pretas",
      ],
    },
    recap: {
      text: "Muito bem. Agora você encontra o Dó em qualquer lugar do piano.",
      points: [
        "O Dó é a tecla branca logo à esquerda de cada grupo de duas teclas pretas.",
        "O piano tem um Dó em cada região, do grave ao agudo.",
        "O Dó perto do meio se chama Dó central.",
      ],
    },
  },
};

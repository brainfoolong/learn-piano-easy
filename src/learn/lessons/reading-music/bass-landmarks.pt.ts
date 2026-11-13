/** *Bass landmarks* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { BassLandmarksTexts } from "./bass-landmarks.en";

export const bassLandmarksPt: Translation<BassLandmarksTexts> = {
  title: "Referências na clave de Fá",
  steps: {
    "landmarks-demo": {
      text: "Observe e ouça. O piano toca três notas de referência da clave de Fá: o Dó grave, o Fá e o Dó central. Uma nota de referência é uma nota que você reconhece de relance.",
    },
    "low-c": {
      text: "O Dó grave fica no segundo espaço da pauta da clave de Fá, contando de baixo para cima. É o Dó abaixo do Dó central. Na posição de Dó, o mínimo da mão esquerda toca essa nota.",
    },
    "play-low-c": {
      text: "Aqui está o Dó grave, no segundo espaço. Toque-o nas teclas.",
    },
    "middle-c-above": {
      text: "O Dó central fica na sua própria linha suplementar, logo acima da pauta da clave de Fá. É o mesmo Dó central que você viu abaixo da pauta da clave de Sol.",
    },
    "middle-c-quiz": {
      text: "Onde fica o Dó central na clave de Fá?",
      answers: ["Numa linha suplementar logo abaixo da pauta", "Numa linha suplementar logo acima da pauta", "Na linha do meio"],
    },
    "fourth-line-quiz": {
      text: "Qual nota de referência fica na quarta linha de baixo para cima?",
      answers: ["O Dó grave", "O Fá", "O Dó central"],
    },
    "count-from-a-landmark": {
      text: "De uma linha ao espaço seguinte é um grau, e um nome de nota. Para ler uma nota, comece na nota de referência mais próxima. Depois conte os graus para cima ou para baixo.",
    },
    "count-quiz": {
      text: "Uma nota fica na linha do meio, um grau acima do Dó grave. Que nota é?",
      answers: ["Si", "Ré", "Mi"],
    },
    "play-bass-landmarks": {
      text: "Toque cada nota que você vê na pauta da clave de Fá. Algumas são notas de referência, e as outras ficam a um ou dois graus de uma nota de referência.",
    },
    "name-by-counting": {
      text: "Selecione o nome de cada nota. Conte a partir da nota de referência mais próxima: o Dó grave, o Fá ou o Dó central.",
    },
    recap: {
      text: "Muito bem. Agora você se localiza na pauta da clave de Fá.",
      points: [
        "O Dó grave fica no segundo espaço.",
        "O Fá fica na quarta linha, entre os dois pontos da clave.",
        "O Dó central fica numa linha suplementar logo acima da pauta.",
        "Conte a partir da nota de referência mais próxima para ler qualquer nota.",
      ],
    },
  },
};

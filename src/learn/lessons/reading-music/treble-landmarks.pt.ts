/** *Treble landmarks* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { TrebleLandmarksTexts } from "./treble-landmarks.en";

export const trebleLandmarksPt: Translation<TrebleLandmarksTexts> = {
  title: "Referências na clave de Sol",
  steps: {
    "landmarks-demo": {
      text: "Observe e ouça. O piano toca o Dó central, depois o Sol, depois o Dó acima. Essas três notas são suas notas de referência.",
    },
    "three-landmarks": {
      text: "Uma nota de referência é uma nota que você reconhece de relance. O Dó central fica na linha suplementar dele, e o Sol fica na segunda linha. O Dó agudo fica no terceiro espaço de baixo para cima.",
    },
    "high-c-quiz": {
      text: "Onde fica o Dó agudo na pauta da clave de Sol?",
      answers: ["Na segunda linha", "Numa linha suplementar abaixo da pauta", "No terceiro espaço de baixo para cima"],
    },
    "name-landmarks": {
      text: "Diga o nome de cada nota de referência: Dó ou Sol.",
    },
    "count-from-a-landmark": {
      text: "Qualquer outra nota fica a poucos graus de uma nota de referência. De uma linha ao espaço seguinte é um grau, e de um espaço à linha seguinte também. Cada grau acima leva ao próximo nome de nota.",
    },
    "count-quiz": {
      text: "Uma nota fica um grau acima do Sol, no espaço acima da segunda linha. Que nota é?",
      answers: ["Fá", "Lá", "Si"],
    },
    "name-neighbours": {
      text: "Diga o nome de cada nota. Encontre a nota de referência mais próxima, depois conte os graus para cima ou para baixo.",
    },
    "read-treble-landmarks": {
      text: "Toque cada nota que você vê na pauta da clave de Sol. Algumas são notas de referência, e as outras ficam a um grau de uma nota de referência.",
    },
    recap: {
      text: "Muito bem. Você já tem três notas de referência na clave de Sol.",
      points: [
        "O Dó central fica numa linha suplementar abaixo da pauta.",
        "O Sol fica na segunda linha, e o Dó agudo no terceiro espaço.",
        "Conte os graus a partir da nota de referência mais próxima para encontrar qualquer nota.",
      ],
    },
  },
};

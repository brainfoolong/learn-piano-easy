/** *Broken chords* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { BrokenChordsTexts } from "./broken-chords.en";

export const brokenChordsPt: Translation<BrokenChordsTexts> = {
  title: "Acordes quebrados",
  steps: {
    "broken-demo": {
      text: "Ouça Dó maior tocado uma nota de cada vez. Ele sobe e depois desce. Você continua ouvindo o acorde.",
    },
    "one-after-another": {
      text: "Um acorde quebrado toca as notas de um acorde uma depois da outra, e não juntas. As notas são as mesmas, então o acorde também é.",
    },
    "chord-together": {
      text: "Primeiro toque Dó maior com as notas juntas: Dó, Mi e Sol a partir do Dó central, com os dedos 1, 3 e 5.",
    },
    "broken-up": {
      text: "Agora quebre o acorde. Deixe a mão no lugar e toque Dó, depois Mi, depois Sol.",
    },
    "which-chord-broken": {
      text: "Você tocou Dó, Mi e Sol um de cada vez. Que acorde você tocou?",
      answers: ["Fá maior", "Dó maior", "Lá menor", "Sol maior"],
    },
    "up-and-down": {
      text: "Um acorde quebrado muitas vezes sobe e desce de volta: Dó, Mi, Sol, Mi. Tocado várias vezes seguidas, ele balança como uma onda.",
    },
    "broken-up-and-down": {
      text: "Toque Dó, Mi, Sol, Mi duas vezes e termine no Dó. Deixe a mão parada enquanto os dedos balançam.",
    },
    "three-chords-broken": {
      text: "Quebre três acordes com a mão direita, começando no Dó central: Dó-Mi-Sol-Mi, Fá-Lá-Dó-Lá e Sol-Si-Ré-Si. Termine em Dó, Mi e Sol. Mova a mão a cada acorde.",
    },
    "which-is-broken": {
      text: "Qual destes é um acorde de Dó maior quebrado?",
      answers: ["Dó-Ré-Mi-Fá", "Dó-Ré-Dó-Ré", "Mi-Fá-Sol-Lá", "Dó-Mi-Sol-Mi"],
    },
    "left-hand-broken": {
      text: "A mão esquerda muitas vezes toca um acorde quebrado embaixo da melodia. Ela mantém o acorde soando enquanto a mão direita canta.",
    },
    "left-hand-demo": {
      text: "Ouça uma pequena melodia. A mão esquerda quebra Dó maior, depois Sol maior, depois Dó maior de novo.",
    },
    "left-hand-alone": {
      text: "Toque só a mão esquerda, começando no Dó abaixo do Dó central: Dó-Mi-Sol-Mi, depois Sol-Si-Ré-Si a partir do Sol logo abaixo, depois Dó-Mi-Sol-Mi.",
    },
    "tune-over-broken-chords": {
      text: "Agora acrescente a melodia na mão direita, na posição de Dó. Cada nota da melodia começa junto com uma nota da mão esquerda.",
    },
    recap: {
      text: "Muito bem. Agora você já quebra acordes com as duas mãos.",
      points: [
        "Um acorde quebrado toca suas notas uma depois da outra.",
        "As notas são as mesmas, então o acorde soa igual.",
        "Um padrão comum sobe e desce de volta: Dó, Mi, Sol, Mi.",
        "A mão esquerda muitas vezes quebra acordes embaixo da melodia.",
      ],
    },
  },
};

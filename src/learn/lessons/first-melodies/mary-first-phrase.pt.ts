/** *Mary's first phrase* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { MaryFirstPhraseTexts } from "./mary-first-phrase.en";

export const maryFirstPhrasePt: Translation<MaryFirstPhraseTexts> = {
  title: "A primeira frase de Mary",
  steps: {
    "phrase-demo": {
      text: "Ouça a primeira metade de Mary Had a Little Lamb. Ela tem graus vizinhos, notas repetidas e um pulo, e você já conhece tudo isso.",
    },
    "first-note-quiz": {
      text: "Em qual nota a melodia começa?",
      answers: ["Dó", "Mi", "Sol"],
    },
    "the-fingers": {
      text: "Mantenha a mão direita na posição de Dó, com o polegar no Dó central. A melodia usa quatro dedos: o 1 no Dó, o 2 no Ré, o 3 no Mi e o 5 no Sol.",
    },
    "g-finger-quiz": {
      text: "Qual dedo toca o Sol?",
      answers: ["Dedo 2", "Dedo 3", "Dedo 5"],
    },
    "bars-one-two": {
      text: "Toque o começo: Mi, Ré, Dó, Ré, depois Mi três vezes. Os dedos são 3, 2, 1, 2, depois 3, 3, 3.",
    },
    "bars-three-four": {
      text: "Agora a parte seguinte: Ré três vezes, depois Mi, depois Sol duas vezes. Os dedos são 2, 2, 2, depois 3, 5, 5.",
    },
    "whole-phrase": {
      text: "Agora toque a frase inteira sem parar: Mi Ré Dó Ré Mi Mi Mi, Ré Ré Ré, Mi Sol Sol.",
    },
    recap: {
      text: "Muito bem. Você tocou a primeira metade de uma música de verdade.",
      points: [
        "Esta melodia é feita de graus vizinhos, notas repetidas e um pulo.",
        "Uma melodia se aprende em pequenos pedaços, que depois se juntam.",
        "Os números dos dedos mostram à sua mão para onde ir.",
      ],
    },
  },
};

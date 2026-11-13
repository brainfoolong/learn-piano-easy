/** *Half and whole steps* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { HalfAndWholeStepsTexts } from "./half-and-whole-steps.en";

export const halfAndWholeStepsPt: Translation<HalfAndWholeStepsTexts> = {
  title: "Semitom e tom",
  steps: {
    "key-by-key": {
      text: "Ouça o piano subir de Dó a Mi. Ele toca cada tecla do caminho, as pretas também.",
    },
    "half-step": {
      text: "Cada movimento dessa subida foi um semitom. Um semitom vai para a tecla seguinte, preta ou branca, sem nenhuma tecla no meio.",
    },
    "half-step-from-c": {
      text: "Sua vez. Toque o Dó central, depois a tecla preta logo à direita dele, e toque esse par duas vezes. Cada movimento é um semitom.",
    },
    "no-black-key-between": {
      text: "Olhe para o Mi e o Fá. Não há tecla preta entre eles. Então de Mi a Fá é um semitom, e de Si a Dó também.",
    },
    "white-half-step": {
      text: "Quais duas teclas brancas estão a um semitom de distância?",
      answers: ["Dó e Ré", "Mi e Fá", "Fá e Sol"],
    },
    "e-f-and-b-c": {
      text: "Toque o Mi e o Fá acima do Dó central. Depois toque o Si e o Dó acima dele. Os dois são semitons entre duas teclas brancas.",
    },
    "whole-step": {
      text: "Dois semitons formam um tom. Um tom pula uma tecla. De Dó a Ré é um tom, porque há uma tecla preta no meio.",
    },
    "whole-and-half": {
      text: "Ouça: de Dó a Ré é um tom, e de Ré a Mi é um tom. Depois, de Mi a Fá é só um semitom.",
    },
    "whole-steps-from-c": {
      text: "Sua vez. Toque o Dó central, o Ré e o Mi. Cada movimento é um tom, por cima de uma tecla preta.",
    },
    "f-to-g": {
      text: "Subindo de Fá a Sol, isso é um semitom ou um tom?",
      answers: ["Um tom", "Um semitom"],
    },
    "whole-step-above-e": {
      text: "Pressione a tecla que fica um tom acima do Mi. Conte dois semitons para cima, e atenção: o primeiro cai no Fá.",
    },
    recap: {
      text: "Muito bem. Agora você já pode medir a distância entre duas teclas.",
      points: [
        "Um semitom vai para a tecla seguinte, preta ou branca.",
        "De Mi a Fá e de Si a Dó são semitons entre teclas brancas.",
        "Um tom são dois semitons, com uma tecla no meio.",
      ],
    },
  },
};

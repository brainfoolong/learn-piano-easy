/** *Twinkle's first phrase* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { TwinkleFirstPhraseTexts } from "./twinkle-first-phrase.en";

export const twinkleFirstPhrasePt: Translation<TwinkleFirstPhraseTexts> = {
  title: "A primeira frase de Twinkle",
  steps: {
    "phrase-demo": {
      text: "Ouça a primeira frase de Twinkle Twinkle Little Star. Uma das notas fica fora da posição de Dó.",
    },
    "one-key-past": {
      text: "Essa nota é o Lá, a tecla branca logo depois do Sol. Sua mão fica na posição de Dó. O dedo mínimo se estica uma tecla para a direita para tocar o Lá.",
    },
    "find-a": {
      text: "Coloque a mão direita na posição de Dó. Estique o dedo mínimo além do Sol e pressione o Lá.",
    },
    "leap-quiz": {
      text: "A melodia começa no Dó e depois dá um salto grande para cima. Para qual nota ela salta?",
      answers: ["Ré", "Mi", "Sol"],
    },
    "climb-up": {
      text: "Toque a primeira parte: Dó duas vezes, Sol duas vezes, Lá duas vezes, depois Sol. O polegar toca os dois Dós, e o dedo mínimo toca o resto, esticando até o Lá e voltando.",
    },
    "walk-down": {
      text: "Agora a segunda parte desce de grau em grau: Fá, Mi, Ré e Dó, cada uma duas vezes. Os dedos são 4, 3, 2 e 1.",
    },
    "whole-phrase": {
      text: "Junte as duas partes. Toque a frase inteira sem parar.",
    },
    recap: {
      text: "Muito bem. Pela primeira vez, você foi além dos seus cinco dedos.",
      points: [
        "Uma melodia pode sair da posição de Dó por uma nota.",
        "O dedo mínimo se estica do Sol até o Lá.",
        "Uma melodia pode dar um salto, como do Dó até o Sol.",
      ],
    },
  },
};

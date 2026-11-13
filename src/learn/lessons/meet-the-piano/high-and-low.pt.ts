/** *High and low* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { HighAndLowTexts } from "./high-and-low.en";

export const highAndLowPt: Translation<HighAndLowTexts> = {
  title: "Agudo e grave",
  steps: {
    "low-to-high": {
      text: "Ouça e observe. O piano toca teclas do lado esquerdo até o lado direito.",
    },
    "left-is-low": {
      text: "Ouviu o som subir? As teclas à esquerda soam mais graves, e as teclas à direita soam mais agudas.",
    },
    "wide-listen": {
      text: "Você ouve duas notas. A segunda é mais aguda, mais grave ou igual à primeira?",
    },
    "climb-up": {
      text: "Agora é sua vez de subir. Toque as teclas marcadas da esquerda para a direita, e ouça o som subir.",
    },
    "climb-down": {
      text: "E agora de volta para baixo. Toque as teclas marcadas da direita para a esquerda, e ouça o som descer.",
    },
    "low-then-high": {
      text: "Saltos grandes: toque as três teclas marcadas, do grave ao agudo.",
    },
    "which-way": {
      text: "Você move a mão para a direita sobre as teclas. O que acontece com o som?",
      answers: ["Fica mais grave", "Fica mais agudo", "Continua igual"],
    },
    "close-listen": {
      text: "Ouça com atenção: as duas notas ficam bem próximas, ou são a mesma nota. A segunda é mais aguda, mais grave ou igual?",
    },
    recap: {
      text: "Muito bem. Agora você consegue ouvir e tocar notas agudas e graves.",
      points: [
        "As teclas à esquerda soam mais graves.",
        "As teclas à direita soam mais agudas.",
        "Duas notas também podem soar iguais.",
      ],
    },
  },
};

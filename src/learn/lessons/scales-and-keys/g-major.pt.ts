/** *G major* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { GMajorTexts } from "./g-major.en";

export const gMajorPt: Translation<GMajorTexts> = {
  title: "Sol maior",
  steps: {
    "g-scale-demo": {
      text: "Ouça uma escala que começa no Sol. Ela soa tão brilhante quanto Dó maior. Uma das teclas no caminho é preta.",
    },
    "pattern-from-g": {
      text: "Comece o padrão da escala no Sol: tom, tom, semitom, tom, tom. Isso dá Sol, Lá, Si, Dó, Ré e Mi. Até aqui, todas as teclas são brancas.",
    },
    "whole-step-above-e": {
      text: "A partir do Mi, o padrão pede um tom. Qual tecla fica um tom acima do Mi?",
      answers: ["Fá♯", "Fá", "Sol"],
    },
    "one-sharp": {
      text: "Então a escala de Sol maior toca Fá sustenido no lugar de Fá. Do Fá sustenido, um semitom leva você ao Sol de cima. Sol maior tem um sustenido: Fá♯.",
    },
    "find-f-sharp": {
      text: "Encontre o Fá♯ no teclado. É a tecla preta logo à direita do Fá.",
    },
    "same-fingering": {
      text: "Sua mão direita toca Sol maior como Dó maior. Os dedos 1, 2 e 3 tocam Sol, Lá e Si. O polegar passa por baixo até o Dó, depois 1, 2, 3, 4, 5 tocam Dó, Ré, Mi, Fá♯ e Sol.",
    },
    "g-scale-up": {
      text: "Sua vez. Coloque o polegar direito no Sol acima do Dó central e toque a escala de Sol maior subindo até o Sol seguinte. O dedo 4 toca o Fá♯.",
    },
    "g-scale-down": {
      text: "Agora toque descendo, do Sol agudo de volta ao Sol onde você começou. O dedo 3 cruza por cima do polegar até o Si.",
    },
    "hear-f-and-f-sharp": {
      text: "O Fá♯ fica só um semitom acima do Fá, então ouça com atenção. A segunda tecla é mais aguda, mais grave ou igual?",
    },
    "g-tune-demo": {
      text: "Aqui está uma melodia curta em Sol maior. Sua mão esquerda segura a quinta Sol e Ré, e sua mão direita toca o Fá♯.",
    },
    "g-tune": {
      text: "Coloque o polegar direito no Ré acima do Dó central, para o dedo 3 ficar no Fá♯. Sua mão esquerda toca a quinta grave: o Sol abaixo do Dó que fica abaixo do Dó central, e o Ré acima dele. Toque a quinta com o primeiro Sol, e de novo com o segundo.",
    },
    recap: {
      text: "Muito bem. Você tocou a sua segunda escala.",
      points: [
        "O padrão da escala maior pode começar em qualquer tecla.",
        "Começando no Sol, ele precisa do Fá♯ para manter o semitom logo abaixo do Sol de cima.",
        "Sol maior tem um sustenido: Fá♯.",
        "O dedilhado é o mesmo de Dó maior.",
      ],
    },
  },
};

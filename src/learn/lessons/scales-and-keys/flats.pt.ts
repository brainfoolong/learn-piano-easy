/** *Flats* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { FlatsTexts } from "./flats.en";

export const flatsPt: Translation<FlatsTexts> = {
  title: "Bemóis",
  steps: {
    "flat-sound": {
      text: "Ouça o Si, depois a tecla preta logo à esquerda dele. Depois ouça o Mi, e a tecla preta logo à esquerda do Mi.",
    },
    "what-a-flat-is": {
      text: "Este sinal é um bemol: ♭. Um bemol abaixa uma nota um semitom. Você toca a tecla logo à esquerda dela.",
    },
    "find-b-flat": {
      text: "Encontre o Si bemol, escrito Si♭. Comece no Si e vá uma tecla para a esquerda.",
    },
    "find-e-flat": {
      text: "Agora encontre o Mi bemol, escrito Mi♭. É a tecla preta logo à esquerda do Mi.",
    },
    "which-is-e-flat": {
      text: "Qual tecla é o Mi♭?",
      answers: ["A tecla branca Ré", "A tecla preta à direita do Mi", "A tecla preta à esquerda do Mi"],
    },
    "hear-flats": {
      text: "Um bemol soa um pouco mais grave. Ouça duas notas. A segunda é mais aguda, mais grave ou igual?",
    },
    "two-names": {
      text: "O Dó sustenido sobe o Dó até a tecla preta à direita dele. O Ré bemol abaixa o Ré até a tecla preta à esquerda dele. É a mesma tecla, então ela tem dois nomes.",
    },
    "other-name-quiz": {
      text: "O Dó♯ e um bemol são a mesma tecla preta. Qual é esse bemol?",
      answers: ["Ré♭", "Si♭", "Mi♭"],
    },
    "half-steps-down": {
      text: "Sua vez. Toque Si, Si♭ e Lá, depois Mi, Mi♭ e Ré. Cada nota fica um semitom abaixo da anterior.",
    },
    recap: {
      text: "Muito bem. Agora você sabe o que é um bemol.",
      points: [
        "Um bemol ♭ abaixa uma nota um semitom.",
        "Si♭ é a tecla preta à esquerda do Si, e Mi♭ é a tecla preta à esquerda do Mi.",
        "Uma tecla preta pode ter dois nomes: Dó♯ também é Ré♭.",
      ],
    },
  },
};

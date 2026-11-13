/** *Major triads* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { MajorTriadsTexts } from "./major-triads.en";

export const majorTriadsPt: Translation<MajorTriadsTexts> = {
  title: "Tríades maiores",
  steps: {
    "major-demo": {
      text: "Ouça quatro tríades: Dó, Fá, Sol e Dó de novo. Cada uma soa brilhante e alegre. São tríades maiores.",
    },
    "count-the-steps": {
      text: "Conte os semitons em Dó, Mi e Sol. Toda tecla conta, as pretas também. Do Mi até o Sol são três semitons.",
    },
    "half-steps-c-to-e": {
      text: "Agora conte do Dó até o Mi. Quantos semitons são?",
      answers: ["Dois", "Três", "Quatro"],
    },
    "major-recipe": {
      text: "Essa é a receita de uma tríade maior. Comece na fundamental, a tecla que dá nome à tríade. Suba quatro semitons, depois mais três.",
    },
    "right-hand-fingers": {
      text: "A mão direita toca uma tríade com os dedos 1, 3 e 5. O polegar toca a fundamental.",
    },
    "c-major-triad": {
      text: "Coloque o polegar direito no Dó central. Toque Dó, Mi e Sol um por um, depois os três juntos.",
    },
    "f-major-triad": {
      text: "Suba o polegar até o Fá. Quatro semitons acima fica o Lá, e mais três dão o Dó. Toque as notas uma por uma, depois juntas.",
    },
    "g-major-triad": {
      text: "Agora leve o polegar até o Sol. A receita dá Sol, Si e Ré. Toque as notas uma por uma, depois juntas.",
    },
    "four-up-from-d": {
      text: "Comece no Ré e suba quatro semitons. Em que tecla você chega?",
      answers: ["Fá♯", "Fá", "Sol"],
    },
    "find-f-sharp": {
      text: "Então Ré maior precisa de uma tecla preta. Encontre o Fá sustenido, a tecla preta logo à direita do Fá.",
    },
    "d-major-triad": {
      text: "Coloque o polegar direito no Ré acima do Dó central, e o dedo 3 fica no Fá sustenido. Toque Ré, Fá sustenido e Lá um por um, depois juntos.",
    },
    "left-hand-fingers": {
      text: "A mão esquerda toca uma tríade com os dedos 5, 3 e 1. O dedo 5 toca a fundamental, e o polegar toca a tecla de cima.",
    },
    "left-c-major": {
      text: "Coloque o dedo 5 da mão esquerda no Dó abaixo do Dó central. Toque Dó, Mi e Sol um por um, depois juntos.",
    },
    "chord-walk-demo": {
      text: "Aqui estão Dó, Fá, Sol e Dó maior em sequência. A mão mantém o formato e se move inteira.",
    },
    "chord-walk": {
      text: "Sua vez. Toque as quatro tríades com a mão direita. Mantenha o formato e leve a mão de uma fundamental à outra.",
    },
    recap: {
      text: "Muito bem. Agora você já sabe montar uma tríade maior em qualquer tecla.",
      points: [
        "Uma tríade maior começa na fundamental.",
        "A tecla do meio fica quatro semitons acima, e a de cima mais três.",
        "Dó, Fá e Sol maior usam só teclas brancas, e Ré maior precisa do Fá sustenido.",
        "A mão direita toca 1, 3 e 5, e a mão esquerda toca 5, 3 e 1.",
      ],
    },
  },
};

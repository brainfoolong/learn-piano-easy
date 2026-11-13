/** *F major* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { FMajorTexts } from "./f-major.en";

export const fMajorPt: Translation<FMajorTexts> = {
  title: "Fá maior",
  steps: {
    "f-major-sound": {
      text: "Ouça uma escala nova. Ela começa e termina no Fá. Você consegue ouvir uma tecla preta nela?",
    },
    "pattern-on-f": {
      text: "Comece o padrão da escala no Fá: tom, tom, semitom, tom, tom, tom, semitom. De Fá a Sol é um tom, e de Sol a Lá também.",
    },
    "after-a": {
      text: "Em seguida vem um semitom acima do Lá. Qual tecla é essa?",
      answers: ["Si", "Si♭", "Dó"],
    },
    "find-b-flat": {
      text: "Encontre o Si♭. É a tecla preta logo à esquerda do Si.",
    },
    "f-fingering": {
      text: "Coloque o polegar direito no Fá. Toque Fá, Sol, Lá e Si♭ com os dedos 1, 2, 3 e 4. Depois passe o polegar por baixo até o Dó e continue com 1, 2, 3, 4.",
    },
    "where-thumb-under": {
      text: "Em Fá maior, depois de qual tecla o polegar passa por baixo?",
      answers: ["Si♭", "Lá", "Dó"],
    },
    "f-scale-up": {
      text: "Sua vez. Toque a escala de Fá maior subindo, do Fá acima do Dó central até o Fá seguinte. Lembre-se do Si♭.",
    },
    "f-scale-down": {
      text: "Agora toque descendo. Depois do Dó, cruze o dedo 4 por cima do polegar até o Si♭.",
    },
    "tune-in-f": {
      text: "Aqui está uma melodia curta em Fá maior. Embaixo dela, sua mão esquerda segura a quinta Fá e Dó.",
    },
    "tune-and-fifth": {
      text: "Sua mão esquerda toca a quinta grave: o Dó abaixo do Dó central e o Fá abaixo dele. Sua mão direita começa no Fá acima do Dó central. Toque a quinta junto com a primeira nota de cada compasso.",
    },
    recap: {
      text: "Muito bem. Agora você já pode tocar em Fá maior.",
      points: [
        "O padrão da escala começando no Fá precisa de uma tecla preta: Si♭.",
        "A mão direita toca 1-2-3-4, passa o polegar até o Dó, depois 1-2-3-4.",
        "Descendo, o dedo 4 cruza por cima do polegar até o Si♭.",
      ],
    },
  },
};

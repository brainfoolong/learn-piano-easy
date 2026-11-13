/** *Finger over the thumb* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { FingerOverTheThumbTexts } from "./finger-over-the-thumb.en";

export const fingerOverTheThumbPt: Translation<FingerOverTheThumbTexts> = {
  title: "Dedo sobre o polegar",
  steps: {
    "down-demo": {
      text: "Ouça a escala de Dó maior descendo, do Dó agudo até o Dó central. A mão nunca para, e as notas fluem sem cortes.",
    },
    "finger-over": {
      text: "Descendo, toque Dó, Si, Lá, Sol e Fá com os dedos 5, 4, 3, 2 e 1. Depois o dedo 3 cruza por cima do polegar até o Mi. Os dedos 2 e 1 tocam Ré e Dó.",
    },
    "which-finger-crosses": {
      text: "Descendo, seu polegar acabou de tocar o Fá. Qual dedo cruza por cima dele até o Mi?",
      answers: ["Dedo 2", "Dedo 3", "Dedo 5"],
    },
    "top-five-down": {
      text: "Coloque o dedo mínimo no Dó acima do Dó central. Toque descendo até o Fá, um dedo para cada tecla.",
    },
    "cross-onto-e": {
      text: "Comece no Fá com o polegar. Cruze o dedo 3 por cima do polegar até o Mi, depois toque Ré e Dó.",
    },
    "right-hand-down": {
      text: "Agora toque a escala inteira descendo, do Dó agudo até o Dó central. Deixe a mão solta quando o dedo 3 cruzar por cima.",
    },
    "left-hand-up": {
      text: "Sua mão esquerda faz o mesmo subindo. Toque Dó, Ré, Mi, Fá e Sol com os dedos 5, 4, 3, 2 e 1. Depois o dedo 3 cruza por cima do polegar até o Lá.",
    },
    "left-hand-demo": {
      text: "Observe a mão esquerda tocar Dó maior subindo, do Dó abaixo do Dó central até o Dó central.",
    },
    "left-cross-key": {
      text: "Seu polegar esquerdo está no Sol. O dedo 3 cruza por cima dele. Em qual tecla ele cai?",
      answers: ["Lá", "Fá", "Si"],
    },
    "left-scale-up": {
      text: "Sua vez. Toque a escala subindo com a mão esquerda, do Dó abaixo do Dó central até o Dó central.",
    },
    "scale-up-and-down": {
      text: "Toque a escala de Dó maior com a mão direita, do Dó central até o Dó seguinte e de volta. Suba com a passagem do polegar e desça com o cruzamento do dedo 3 sobre o polegar.",
    },
    recap: {
      text: "Muito bem. Agora seus dedos cruzam nos dois sentidos.",
      points: [
        "Descendo, a mão direita toca 5, 4, 3, 2, 1, depois o 3 cruza por cima do polegar.",
        "Subindo, a mão esquerda faz o mesmo, com o 3 cruzando até o Lá.",
        "Na mão direita, o polegar passa por baixo na subida, e o dedo 3 cruza por cima na descida.",
      ],
    },
  },
};

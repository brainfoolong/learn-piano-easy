/** *Tune and bass together* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { TuneAndBassTogetherTexts } from "./tune-and-bass-together.en";

export const tuneAndBassTogetherPt: Translation<TuneAndBassTogetherTexts> = {
  title: "Melodia e baixo juntos",
  steps: {
    "whole-tune": {
      text: "Ouça uma melodia curta de quatro compassos. A mão direita toca a melodia, e a mão esquerda acrescenta uma nota grave em cada compasso.",
    },
    "two-layers": {
      text: "A melodia se move a cada tempo. O baixo entra só no tempo 1 e soa sob a melodia durante o compasso inteiro.",
    },
    "tune-alone": {
      text: "Primeiro só a melodia, na posição de Dó. Toque Dó, Ré, Mi, Fá; Sol, Fá, Mi, Ré; Ré, Mi, Fá, Ré e termine no Dó central.",
    },
    "bass-beat-quiz": {
      text: "Em que tempo de cada compasso entra a nota do baixo?",
      answers: ["No tempo 1", "No tempo 3", "Em cada tempo"],
    },
    "bass-demo": {
      text: "Agora ouça só o baixo. Cada nota dura um compasso inteiro: Dó, depois Sol duas vezes e Dó de novo.",
    },
    "bass-alone": {
      text: "Toque o baixo com a mão esquerda na posição de Dó. O dedo mínimo toca o Dó, e o polegar toca o Sol.",
    },
    "press-together": {
      text: "No tempo 1, as duas mãos tocam suas teclas no mesmo instante. Depois a mão esquerda segura sua nota enquanto a mão direita continua tocando.",
    },
    "first-half": {
      text: "Toque os dois primeiros compassos com as duas mãos. Toque o baixo e a primeira nota da melodia juntos.",
    },
    "held-bass-quiz": {
      text: "No compasso 2, a mão direita toca Sol, Fá, Mi, Ré. O que a mão esquerda faz enquanto isso?",
      answers: ["Toca Sol, Fá, Mi, Ré uma oitava abaixo", "Segura o seu Sol", "Sai das teclas e descansa"],
    },
    "whole-tune-together": {
      text: "Agora a melodia inteira com as duas mãos. Vá com calma em cada tempo 1, onde as duas mãos tocam.",
    },
    recap: {
      text: "Muito bem. Você tocou uma melodia com o seu baixo.",
      points: [
        "Aprenda primeiro só a melodia, depois só o baixo e então junte os dois.",
        "O baixo entra no tempo 1, junto com a nota da melodia.",
        "A mão esquerda segura o baixo enquanto a mão direita continua tocando.",
      ],
    },
  },
};

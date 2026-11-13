/** *What a chord is* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { WhatAChordIsTexts } from "./what-a-chord-is.en";

export const whatAChordIsPt: Translation<WhatAChordIsTexts> = {
  title: "O que é um acorde",
  steps: {
    "chord-demo": {
      text: "Ouça Dó, Mi e Sol, uma nota depois da outra. Depois ouça as três juntas. Elas se misturam em um só som cheio.",
    },
    "several-keys": {
      text: "Teclas tocadas juntas formam um acorde. Você já tocou um: a quinta aberta da mão esquerda. Agora você vai montar outros.",
    },
    "a-third": {
      text: "Pressione Dó e Mi juntos. Eles estão a uma terça de distância, então há uma tecla branca entre eles. Os dedos 1 e 3 tocam essa terça.",
    },
    "thirds-up": {
      text: "Sua vez. Coloque o polegar direito no Dó central e toque Dó e Mi juntos. Depois suba a mão para Ré e Fá, e para Mi e Sol.",
    },
    "skipped-key": {
      text: "Olhe uma terça nas teclas brancas. Quantas teclas brancas há entre as duas teclas dela?",
      answers: ["Nenhuma", "Uma", "Duas"],
    },
    "thirds-and-fifths": {
      text: "Uma quinta abrange cinco teclas brancas, como Dó e Sol. O polegar e o dedo 5 tocam a quinta. A terça soa doce, e a quinta soa aberta.",
    },
    "third-then-fifth": {
      text: "Deixe o polegar no Dó. Toque a terça Dó e Mi, depois a quinta Dó e Sol. Faça isso duas vezes.",
    },
    "stack-thirds": {
      text: "Agora empilhe uma terça sobre outra. Dó e Mi formam uma terça, e Mi e Sol formam a seguinte. Juntos, Dó, Mi e Sol formam uma tríade.",
    },
    "triad-demo": {
      text: "Primeiro ouça a terça Dó e Mi. Depois o Sol entra por cima, e a tríade soa cheia.",
    },
    "first-triad": {
      text: "Toque Dó, Mi e Sol juntos com os dedos 1, 3 e 5. Pressione as três teclas ao mesmo tempo e toque a tríade duas vezes.",
    },
    "which-is-a-triad": {
      text: "Uma tríade empilha duas terças. Quais três teclas formam uma tríade que começa no Ré?",
      answers: ["Ré, Mi e Fá", "Ré, Sol e Lá", "Ré, Fá e Lá"],
    },
    "triads-up": {
      text: "Mantenha a posição da mão direita. Toque Dó-Mi-Sol a partir do Dó central, depois suba para Ré-Fá-Lá e Mi-Sol-Si, tudo em teclas brancas. Termine em Dó-Mi-Sol.",
    },
    recap: {
      text: "Muito bem. Você tocou seus primeiros acordes.",
      points: [
        "Um acorde é um grupo de teclas tocadas juntas.",
        "Uma terça pula uma tecla branca, e os dedos 1 e 3 a tocam.",
        "Duas terças empilhadas formam uma tríade, como Dó, Mi e Sol.",
        "Na mão direita, os dedos 1, 3 e 5 tocam uma tríade.",
      ],
    },
  },
};

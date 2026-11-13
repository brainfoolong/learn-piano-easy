/** *Minor triads* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { MinorTriadsTexts } from "./minor-triads.en";

export const minorTriadsPt: Translation<MinorTriadsTexts> = {
  title: "Tríades menores",
  steps: {
    "major-then-minor": {
      text: "Ouça dois acordes em Dó. O primeiro é Dó maior e soa brilhante. O segundo é Dó menor e soa mais escuro.",
    },
    "thirds-swap": {
      text: "Numa tríade maior, a terça de baixo é uma terça maior: quatro semitons. A de cima é uma terça menor. A tríade menor troca as duas, então a terça menor vem primeiro.",
    },
    "minor-third-size": {
      text: "Uma terça maior tem quatro semitons. Quantos semitons formam uma terça menor?",
      answers: ["Quatro", "Três", "Dois"],
    },
    "lower-the-middle": {
      text: "Então um só movimento transforma uma tríade maior em menor. Abaixe a nota do meio um semitom. Dó, Mi e Sol viram Dó, Mi bemol e Sol.",
    },
    "find-e-flat": {
      text: "Encontre o Mi bemol no teclado. É a tecla preta logo à esquerda do Mi.",
    },
    "c-major-to-minor": {
      text: "Sua vez. Toque Dó maior com os dedos 1, 3 e 5 a partir do Dó central. Depois deslize o dedo 3 para o Mi bemol e toque Dó menor. Toque os dois acordes duas vezes.",
    },
    "hear-the-middle-drop": {
      text: "Entre o maior e o menor, só a nota do meio se move um semitom. A segunda tecla é mais aguda, mais grave ou igual?",
    },
    "white-key-minors": {
      text: "Três tríades menores usam só teclas brancas. Lá menor é Lá-Dó-Mi, Ré menor é Ré-Fá-Lá, e Mi menor é Mi-Sol-Si.",
    },
    "a-minor": {
      text: "Coloque o polegar direito no Lá abaixo do Dó central. Toque Lá menor duas vezes: Lá, Dó e Mi juntos.",
    },
    "d-and-e-minor": {
      text: "Agora mude a mão de lugar. Toque Ré menor a partir do Ré acima do Dó central, depois Mi menor uma tecla branca acima, depois Ré menor de novo.",
    },
    "g-major-to-minor": {
      text: "Sol maior é Sol, Si e Ré. Que nota você abaixa para tocar Sol menor?",
      answers: ["Si", "Sol", "Ré"],
    },
    "major-minor-pairs": {
      text: "Toque Ré maior com Fá sustenido, depois Ré menor com Fá. Depois toque Sol maior com Si, e Sol menor com Si bemol.",
    },
    recap: {
      text: "Muito bem. Agora você já toca tríades maiores e menores.",
      points: [
        "Uma tríade menor empilha uma terça menor e depois uma terça maior.",
        "Abaixe a nota do meio de uma tríade maior para ela ficar menor.",
        "O maior soa brilhante, e o menor soa mais escuro.",
        "Lá, Ré e Mi menor usam só teclas brancas.",
      ],
    },
  },
};

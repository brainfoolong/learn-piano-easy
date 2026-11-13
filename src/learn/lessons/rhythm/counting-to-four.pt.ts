/** *Counting to four* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { CountingToFourTexts } from "./counting-to-four.en";

export const countingToFourPt: Translation<CountingToFourTexts> = {
  title: "Contando até quatro",
  steps: {
    "bars-demo": {
      text: "Olhe e ouça. Um Dó grave abre cada grupo de quatro tempos, e um Sol soa nos outros três.",
    },
    "what-a-bar-is": {
      text: "Os tempos se agrupam em compassos, e uma barra de compasso fecha cada compasso. Aqui cada compasso tem quatro tempos, contados 1, 2, 3, 4. Isso é o compasso 4/4, e o tempo 1 é o mais forte.",
    },
    "beats-in-a-bar-quiz": {
      text: "Quantos tempos cabem em um compasso 4/4?",
      answers: ["Três tempos", "Quatro tempos", "Oito tempos"],
    },
    "strongest-beat-quiz": {
      text: "Qual tempo do compasso soa mais forte?",
      answers: ["Tempo 1", "Tempo 2", "Tempo 4"],
    },
    "count-aloud-tap": {
      text: "Selecione “Começar” e toque qualquer tecla a cada clique. Conte em voz alta enquanto toca: 1, 2, 3, 4. Diga o tempo 1 um pouco mais forte.",
    },
    "fill-a-bar-quiz": {
      text: "Qual destas opções preenche um compasso 4/4?",
      answers: ["Duas mínimas", "Três semínimas", "Uma semibreve e uma semínima"],
    },
    recap: {
      text: "Muito bem. Agora você já conta compassos de quatro tempos.",
      points: [
        "Os tempos se agrupam em compassos, e uma barra de compasso fecha cada compasso.",
        "No compasso 4/4, você conta 1, 2, 3, 4.",
        "O tempo 1 é o tempo mais forte do compasso.",
      ],
    },
  },
};

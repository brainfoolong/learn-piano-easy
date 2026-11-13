/** *Quarter notes* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { QuarterNotesTexts } from "./quarter-notes.en";

export const quarterNotesPt: Translation<QuarterNotesTexts> = {
  title: "Semínimas",
  steps: {
    "quarter-demo": {
      text: "Olhe e ouça. O Dó central soa uma vez em cada tempo, e todas as notas têm a mesma duração.",
    },
    "what-a-quarter-note-is": {
      text: "Cada nota que você ouviu era uma semínima. A semínima dura um tempo. Então você toca uma nota em cada tempo.",
    },
    "quarter-beats-quiz": {
      text: "Quanto dura uma semínima?",
      answers: ["Um tempo", "Dois tempos", "Quatro tempos"],
    },
    "quarter-taps": {
      text: "Cada toque é uma semínima. Selecione “Começar”, ouça quatro cliques e depois toque qualquer tecla uma vez a cada clique.",
    },
    "phrase-demo": {
      text: "Aqui está o começo de uma melodia famosa. Todas as notas são semínimas, uma em cada tempo.",
    },
    "quarter-phrase": {
      text: "Coloque a mão direita na posição de Dó. Toque a melodia e conte um tempo para cada nota.",
    },
    recap: {
      text: "Muito bem. Agora você já conhece sua primeira duração de nota.",
      points: [
        "A semínima dura um tempo.",
        "Você toca uma semínima em cada tempo.",
        "Muitas melodias são feitas quase só de semínimas.",
      ],
    },
  },
};

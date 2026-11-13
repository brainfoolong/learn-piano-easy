/** *Whole notes* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { WholeNotesTexts } from "./whole-notes.en";

export const wholeNotesPt: Translation<WholeNotesTexts> = {
  title: "Semibreves",
  steps: {
    "halves-then-whole-demo": {
      text: "Olhe e ouça. Primeiro vêm duas mínimas. Depois uma nota soa tanto quanto as duas juntas.",
    },
    "what-a-whole-note-is": {
      text: "A semibreve dura quatro tempos. Você toca no primeiro tempo e segura a tecla durante os outros três. Conte “1-2-3-4” em cada semibreve.",
    },
    "whole-beats-quiz": {
      text: "Quantos tempos dura uma semibreve?",
      answers: ["Dois tempos", "Três tempos", "Quatro tempos"],
    },
    "four-beats-three-ways-demo": {
      text: "Ouça quatro tempos preenchidos de três jeitos. Primeiro uma semibreve, depois duas mínimas, depois quatro semínimas. Cada grupo tem a mesma duração.",
    },
    "same-as-whole-quiz": {
      text: "O que dura tanto quanto uma semibreve?",
      answers: ["Uma mínima", "Duas mínimas", "Duas semínimas"],
    },
    "quarters-in-whole-quiz": {
      text: "Quantas semínimas duram tanto quanto uma semibreve?",
      answers: ["Duas", "Quatro", "Oito"],
    },
    "play-and-hold": {
      text: "Coloque a mão direita na posição de Dó. Toque Dó, Mi e Sol, e segure cada tecla enquanto conta “1-2-3-4”. O passo espera cada nota, então não tenha pressa.",
    },
    "count-to-four": {
      text: "Toque qualquer tecla a cada clique. Conte “1-2-3-4” enquanto toca, duas vezes. Cada “1-2-3-4” é a duração de uma semibreve.",
    },
    recap: {
      text: "Muito bem. Agora você já conhece a semibreve.",
      points: [
        "A semibreve dura quatro tempos.",
        "Você toca a nota e a segura durante mais três tempos.",
        "Uma semibreve dura tanto quanto duas mínimas ou quatro semínimas.",
      ],
    },
  },
};

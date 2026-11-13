/** *Half notes* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { HalfNotesTexts } from "./half-notes.en";

export const halfNotesPt: Translation<HalfNotesTexts> = {
  title: "Mínimas",
  steps: {
    "quarters-then-halves-demo": {
      text: "Olhe e ouça. Primeiro vêm quatro notas curtas, uma em cada tempo. Depois cada nota dura o dobro.",
    },
    "what-a-half-note-is": {
      text: "A mínima dura dois tempos. Você toca no primeiro tempo e segura a tecla durante o segundo. Conte “1-2” em cada mínima.",
    },
    "half-beats-quiz": {
      text: "Quantos tempos dura uma mínima?",
      answers: ["Um tempo", "Dois tempos", "Quatro tempos"],
    },
    "play-and-hold": {
      text: "Coloque a mão direita na posição de Dó. Toque Dó, Ré, Mi, Ré, Dó, e segure cada tecla enquanto conta “1-2”. O passo espera cada nota, então não tenha pressa.",
    },
    "count-one-two": {
      text: "Toque qualquer tecla a cada clique. Conte “1-2, 1-2” enquanto toca. Cada “1-2” é a duração de uma mínima.",
    },
    "which-is-longer-quiz": {
      text: "Qual nota dura mais?",
      answers: ["A semínima", "A mínima"],
    },
    "halves-in-four-quiz": {
      text: "Quantas mínimas preenchem quatro tempos?",
      answers: ["Uma", "Duas", "Quatro"],
    },
    recap: {
      text: "Muito bem. Agora você já conhece a mínima.",
      points: [
        "A mínima dura dois tempos.",
        "Você toca a nota e a segura durante o tempo seguinte.",
        "Duas mínimas preenchem quatro tempos.",
      ],
    },
  },
};

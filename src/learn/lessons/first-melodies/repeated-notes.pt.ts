/** *Repeated notes* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { RepeatedNotesTexts } from "./repeated-notes.en";

export const repeatedNotesPt: Translation<RepeatedNotesTexts> = {
  title: "Notas repetidas",
  steps: {
    "repeat-demo": {
      text: "Observe e ouça. Algumas notas soam várias vezes seguidas, e a mão não se move.",
    },
    "what-a-repeat-is": {
      text: "Uma nota pode se repetir. Seu dedo fica na tecla e toca de novo. Deixe a tecla subir entre as duas notas.",
    },
    "same-or-not": {
      text: "Você ouve duas notas de cada vez. A segunda é mais aguda, mais grave ou igual à primeira?",
    },
    "repeat-e-d": {
      text: "Coloque a mão direita na posição de Dó. Toque o Mi três vezes com o dedo 3, depois o Ré três vezes com o dedo 2.",
    },
    "repeat-after-skip": {
      text: "Agora um pulo e depois uma repetição. Toque o Mi com o dedo 3, depois o Sol duas vezes com o dedo 5.",
    },
    "how-many-keys-quiz": {
      text: "Você toca Dó, Dó, Dó. Quantas teclas você pressiona?",
      answers: ["Uma tecla, três vezes", "Três teclas diferentes"],
    },
    "mixed-phrase": {
      text: "Esta melodia tem graus vizinhos, pulos e notas repetidas. Mantenha a mão na posição de Dó e siga a tecla marcada.",
    },
    recap: {
      text: "Muito bem. Agora você já pode tocar notas repetidas.",
      points: [
        "Uma nota repetida toca a mesma tecla de novo.",
        "Seu dedo fica na tecla e a deixa subir.",
        "Uma melodia pode misturar graus vizinhos, pulos e notas repetidas.",
      ],
    },
  },
};

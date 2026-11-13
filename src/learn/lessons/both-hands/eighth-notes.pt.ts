/** *Eighth notes* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { EighthNotesTexts } from "./eighth-notes.en";

export const eighthNotesPt: Translation<EighthNotesTexts> = {
  title: "Colcheias",
  steps: {
    "eighth-demo": {
      text: "Observe e ouça. Primeiro o Dó central soa uma vez em cada tempo. Depois ele soa duas vezes em cada tempo.",
    },
    "what-an-eighth-note-is": {
      text: "As notas rápidas eram colcheias. Uma colcheia dura meio tempo. Então duas colcheias preenchem um tempo.",
    },
    "eighths-per-beat-quiz": {
      text: "Quantas colcheias preenchem um tempo?",
      answers: ["Uma", "Duas", "Quatro"],
    },
    "count-and": {
      text: "Para contar colcheias, diga “e” entre os tempos: “1 e 2 e 3 e 4 e”. Os números caem nos tempos, e cada “e” cai bem no meio, entre eles.",
    },
    "counting-demo": {
      text: "Conte junto: “1, 2, 3 e, 4”. Os dois Mis rápidos ficam no “3” e no “e” que vem depois dele.",
    },
    "eighth-taps": {
      text: "Agora a pulsação está lenta, 60 por minuto, e os cliques vêm duas vezes mais rápido. Cada clique é uma colcheia. Conte “1 e 2 e” e toque qualquer tecla a cada clique.",
    },
    "eighths-per-bar-quiz": {
      text: "Um compasso tem quatro tempos. Quantas colcheias cabem nele?",
      answers: ["Quatro", "Seis", "Oito"],
    },
    "phrase-demo": {
      text: "Agora as duas mãos tocam. A mão esquerda segura um Dó grave, enquanto a mão direita sobe em colcheias até o Sol. Depois ela desce de volta até o Dó.",
    },
    "eighth-phrase": {
      text: "Coloque as duas mãos na posição de Dó. A mão direita toca Dó, Ré, Mi, Fá, Sol, Sol, Fá, Mi, Ré, Dó, começando no Dó central. O dedo mínimo esquerdo toca o Dó abaixo do Dó central junto com o primeiro Dó e de novo com o segundo Sol.",
    },
    recap: {
      text: "Muito bem. Agora suas notas podem andar duas vezes mais rápido.",
      points: [
        "Uma colcheia dura meio tempo.",
        "Duas colcheias preenchem um tempo.",
        "Você conta colcheias assim: “1 e 2 e”.",
      ],
    },
  },
};

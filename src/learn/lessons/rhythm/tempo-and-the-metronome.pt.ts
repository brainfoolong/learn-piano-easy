/** *Tempo and the metronome* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { TempoAndTheMetronomeTexts } from "./tempo-and-the-metronome.en";

export const tempoAndTheMetronomePt: Translation<TempoAndTheMetronomeTexts> = {
  title: "Andamento e metrônomo",
  steps: {
    "slow-demo": {
      text: "Olhe e ouça. Esta melodia sobe do Dó central até o Sol e desce de volta, devagar.",
    },
    "fast-demo": {
      text: "Agora a mesma melodia de novo. As notas são as mesmas, mas a pulsação fica mais rápida.",
    },
    "what-tempo-is": {
      text: "O andamento é a velocidade da pulsação. Ele é medido em batidas por minuto, ou BPM. A 60 BPM vem uma batida por segundo, e a 120 BPM vêm duas.",
    },
    "faster-tempo-quiz": {
      text: "Qual andamento é mais rápido?",
      answers: ["60 batidas por minuto", "120 batidas por minuto"],
    },
    "slow-first": {
      text: "O metrônomo marca a pulsação com cliques, no andamento que você escolher. Pratique uma peça nova primeiro devagar. Quando ficar fácil, ajuste o metrônomo um pouco mais rápido.",
    },
    "slow-first-quiz": {
      text: "Uma peça nova parece difícil. Como você pratica?",
      answers: ["Primeiro devagar, depois um pouco mais rápido", "Na velocidade normal desde o começo"],
    },
    "slow-tap": {
      text: "O metrônomo marca 60 BPM. Selecione “Começar” e toque qualquer tecla a cada clique.",
    },
    "faster-tap": {
      text: "O metrônomo marca 104 BPM. Selecione “Começar” e toque qualquer tecla uma vez a cada clique.",
    },
    recap: {
      text: "Muito bem. Agora você já mantém a pulsação em dois andamentos. Depois vem Ode to Joy, primeiro devagar.",
      points: [
        "O andamento é a velocidade da pulsação, contada em batidas por minuto.",
        "O metrônomo marca a pulsação no andamento que você escolher.",
        "Pratique primeiro devagar, depois um pouco mais rápido.",
      ],
    },
  },
};

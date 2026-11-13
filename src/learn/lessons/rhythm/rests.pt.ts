/** *Rests* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { RestsTexts } from "./rests.en";

export const restsPt: Translation<RestsTexts> = {
  title: "Pausas",
  steps: {
    "rests-demo": {
      text: "Olhe e ouça. Em alguns tempos o piano fica em silêncio, mas a pulsação continua.",
    },
    "what-a-rest-is": {
      text: "A pausa é um silêncio na música. Você não toca nada, mas continua contando. A pausa de semínima dura um tempo, como a semínima.",
    },
    "quarter-rest-quiz": {
      text: "Você toca Dó, Dó, uma pausa de semínima e depois Dó. Quantos tempos de silêncio há?",
      answers: ["Um tempo", "Dois tempos", "Nenhum tempo"],
    },
    "half-rest": {
      text: "A pausa de mínima dura dois tempos, como a mínima. Você fica em silêncio e conta dois tempos antes de tocar de novo.",
    },
    "half-rest-quiz": {
      text: "Quantos tempos de silêncio dura uma pausa de mínima?",
      answers: ["Um tempo", "Dois tempos", "Quatro tempos"],
    },
    "fill-a-bar-quiz": {
      text: "Você toca uma semínima, depois uma pausa de semínima, depois uma mínima. Quantos tempos são?",
      answers: ["Dois tempos", "Três tempos", "Quatro tempos"],
    },
    "phrase-with-rests": {
      text: "Olhe e ouça. O piano toca Dó Ré Mi, faz uma pausa de um tempo e depois toca Mi Ré. Ele faz uma pausa de dois tempos e termina no Dó.",
    },
    "play-with-rests": {
      text: "Sua vez, depois de um compasso de contagem inicial. Toque Dó Ré Mi nos cliques e depois levante o dedo por um tempo de silêncio. Toque Mi Ré, fique em silêncio por dois tempos e termine no Dó.",
    },
    recap: {
      text: "Muito bem. Agora você já conhece suas primeiras pausas.",
      points: [
        "A pausa é um silêncio que também conta.",
        "A pausa de semínima dura um tempo.",
        "A pausa de mínima dura dois tempos.",
      ],
    },
  },
};

/** *The beat* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { TheBeatTexts } from "./the-beat.en";

export const theBeatPt: Translation<TheBeatTexts> = {
  title: "A pulsação",
  steps: {
    "beat-demo": {
      text: "Olhe e ouça. Uma nota grave soa várias vezes embaixo da melodia, sempre na mesma velocidade.",
    },
    "what-the-beat-is": {
      text: "A música tem uma pulsação constante, como as batidas do coração ou os passos quando você anda. A nota grave que você ouviu marcava a pulsação. Você pode acompanhá-la balançando a cabeça ou dando batidinhas junto com ela.",
    },
    "tap-the-beat": {
      text: "Selecione “Começar” e primeiro ouça quatro cliques. Depois toque qualquer tecla uma vez a cada clique.",
    },
    "steady-beat-quiz": {
      text: "Uma música toca do começo ao fim. O que a pulsação dela faz?",
      answers: ["Acelera e desacelera", "Fica constante"],
    },
    "tap-a-longer-beat": {
      text: "Agora uma rodada mais longa, um pouco mais rápida. Continue tocando junto com os cliques, uma vez em cada.",
    },
    recap: {
      text: "Muito bem. Agora você sente a pulsação e consegue acompanhá-la.",
      points: [
        "A música tem uma pulsação constante.",
        "A pulsação é como as batidas do coração ou os passos de quem anda.",
        "Você toca uma vez em cada tempo.",
      ],
    },
  },
};

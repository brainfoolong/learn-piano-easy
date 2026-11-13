/** *Three-four time* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { ThreeFourTimeTexts } from "./three-four-time.en";

export const threeFourTimePt: Translation<ThreeFourTimeTexts> = {
  title: "Compasso 3/4",
  steps: {
    "waltz-demo": {
      text: "Olhe e ouça. Uma nota grave soa no primeiro tempo, e notas mais agudas nos dois seguintes. O padrão se repete.",
    },
    "beats-in-threes": {
      text: "Algumas músicas agrupam os tempos de três em três. Você conta 1, 2, 3, 1, 2, 3, e o tempo 1 é o mais forte. Isso é o compasso 3/4, ou compasso ternário, o compasso da valsa.",
    },
    "beats-in-a-bar-quiz": {
      text: "Quantos tempos tem um compasso 3/4?",
      answers: ["Dois", "Três", "Quatro"],
    },
    "which-is-a-waltz-quiz": {
      text: "A valsa é em compasso 3/4. Como você conta?",
      answers: ["1, 2, 3, 1, 2, 3", "1, 2, 3, 4, 1, 2, 3, 4"],
    },
    "tap-in-threes": {
      text: "Selecione “Começar” e primeiro ouça quatro cliques. Depois toque qualquer tecla a cada clique e conte 1, 2, 3 em voz alta. Diga cada 1 um pouco mais forte.",
    },
    recap: {
      text: "Muito bem. Agora você já conta de três em três.",
      points: [
        "Algumas músicas agrupam os tempos de três em três.",
        "Um compasso 3/4 tem três tempos, contados 1, 2, 3.",
        "O tempo 1 é o mais forte, como numa valsa.",
      ],
    },
  },
};

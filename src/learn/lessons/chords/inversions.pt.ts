/** *Inversions* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { InversionsTexts } from "./inversions.en";

export const inversionsPt: Translation<InversionsTexts> = {
  title: "Inversões",
  steps: {
    "inversions-demo": {
      text: "Ouça três acordes. Cada um tem as notas Dó, Mi e Sol. Só a ordem delas muda.",
    },
    "same-three-notes": {
      text: "Dó-Mi-Sol com o Dó embaixo é a posição fundamental. Uma inversão toca as mesmas três notas em outra ordem. Continua sendo Dó maior.",
    },
    "root-position": {
      text: "Toque Dó maior na posição fundamental: Dó, Mi e Sol a partir do Dó central, todos juntos. Use os dedos 1, 3 e 5.",
    },
    "first-inversion": {
      text: "Agora suba a nota de baixo uma oitava. Dó-Mi-Sol vira Mi-Sol-Dó. Essa é a primeira inversão.",
    },
    "play-first-inversion": {
      text: "Toque a primeira inversão: Mi e Sol acima do Dó central, e o Dó logo acima deles. Pressione as três teclas juntas.",
    },
    "which-chord-is-e-g-c": {
      text: "Mi-Sol-Dó soa um pouco diferente de Dó-Mi-Sol. Que acorde é esse?",
      answers: ["Lá menor", "Mi menor", "Dó maior"],
    },
    "second-inversion": {
      text: "Suba a nota de baixo mais uma vez. Mi-Sol-Dó vira Sol-Dó-Mi. Essa é a segunda inversão.",
    },
    "play-second-inversion": {
      text: "Toque a segunda inversão: o Sol acima do Dó central, depois o próximo Dó e o Mi acima dele. Pressione as três teclas juntas.",
    },
    "climb-the-inversions": {
      text: "Suba pelo teclado com Dó maior: posição fundamental, primeira inversão, segunda inversão e a posição fundamental uma oitava acima.",
    },
    "move-less": {
      text: "Com as inversões, a mão se move menos entre os acordes. Fá maior como Dó-Fá-Lá e Sol maior como Si-Ré-Sol ficam bem ao lado de Dó-Mi-Sol.",
    },
    "close-chords-demo": {
      text: "Ouça Dó, Fá, Sol e Dó de novo, tocados bem próximos. Cada dedo se move só uma ou duas teclas.",
    },
    "which-chord-is-c-f-a": {
      text: "Dó-Fá-Lá tem Fá, Lá e Dó em outra ordem. Que acorde é esse?",
      answers: ["Dó maior", "Fá maior", "Lá menor"],
    },
    "close-chords": {
      text: "Toque Dó-Mi-Sol, Dó-Fá-Lá, Si-Ré-Sol e Dó-Mi-Sol, começando no Dó central. Deixe a mão no lugar e mova só os dedos.",
    },
    "close-chords-with-bass": {
      text: "Agora acrescente a fundamental na mão esquerda, embaixo de cada acorde: Dó, Fá, Sol e Dó abaixo do Dó central.",
    },
    recap: {
      text: "Muito bem. Agora você já toca um acorde em três posições.",
      points: [
        "Uma inversão toca as três notas de um acorde em outra ordem.",
        "Suba a nota de baixo uma oitava: Dó-Mi-Sol vira Mi-Sol-Dó, depois Sol-Dó-Mi.",
        "O acorde continua o mesmo: Mi-Sol-Dó e Sol-Dó-Mi ainda são Dó maior.",
        "As inversões deixam os acordes próximos, então a mão se move menos.",
      ],
    },
  },
};

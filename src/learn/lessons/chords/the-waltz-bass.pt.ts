/** *The waltz bass* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { TheWaltzBassTexts } from "./the-waltz-bass.en";

export const theWaltzBassPt: Translation<TheWaltzBassTexts> = {
  title: "O baixo de valsa",
  steps: {
    "waltz-demo": {
      text: "Ouça só a mão esquerda. Ela balança de três em três, como numa dança. Isso é um baixo de valsa.",
    },
    "three-beats": {
      text: "A valsa é em compasso 3/4. Cada compasso tem três tempos: um, dois, três. O tempo um é o forte.",
    },
    "oom-pah-pah": {
      text: "No tempo um, a mão esquerda toca a fundamental do acorde, grave. Nos tempos dois e três, ela toca as duas notas de cima juntas. Soa como tum-tá-tá.",
    },
    "root-on-one": {
      text: "No baixo de valsa, em que tempo soa a fundamental grave?",
      answers: ["Tempo 2", "Tempo 1", "Tempo 3"],
    },
    "c-waltz": {
      text: "Sua vez, em Dó. O dedo 5 toca o Dó abaixo do Dó central, depois os dedos 3 e 1 tocam Mi e Sol juntos, duas vezes. Toque dois compassos.",
    },
    "g-and-f-shapes": {
      text: "O mesmo padrão funciona em qualquer acorde. Para Sol, toque o Sol grave, depois Si e Ré. Para Fá, toque o Fá grave, depois Lá e Dó.",
    },
    "g-waltz": {
      text: "Desça a mão até o Sol abaixo do Dó que fica embaixo do Dó central. O dedo 5 toca Sol, depois os dedos 3 e 1 tocam Si e Ré juntos, duas vezes.",
    },
    "f-beats-two-and-three": {
      text: "Num compasso em Fá, o que a mão esquerda toca nos tempos dois e três?",
      answers: ["Só o Fá", "Fá, Lá e Dó, uma nota depois da outra", "Lá e Dó juntos"],
    },
    "f-waltz": {
      text: "Agora vá para o Fá, uma tecla branca abaixo desse Sol. O dedo 5 toca Fá, depois os dedos 3 e 1 tocam Lá e Dó juntos, duas vezes.",
    },
    "chord-walk": {
      text: "Toque um compasso de cada acorde: Dó, Fá, Sol e Dó. Mude a mão de posição no tempo um, e continue contando até três.",
    },
    "waltz-tune-demo": {
      text: "Aqui está uma pequena melodia sobre o baixo de valsa. A mão direita toca notas longas enquanto a mão esquerda mantém o tum-tá-tá.",
    },
    "waltz-tune": {
      text: "Coloque o polegar direito no Dó central. Pressione cada nota da melodia junto com as teclas da mão esquerda embaixo dela, e mantenha o baixo de valsa entre elas.",
    },
    recap: {
      text: "Muito bem. Agora a sua mão esquerda já toca um baixo de valsa.",
      points: [
        "A valsa é em compasso 3/4, com três tempos por compasso.",
        "A mão esquerda toca a fundamental grave no tempo um.",
        "Nos tempos dois e três, ela toca as notas de cima juntas.",
        "O padrão acompanha o acorde: Dó, Fá e Sol.",
      ],
    },
  },
};

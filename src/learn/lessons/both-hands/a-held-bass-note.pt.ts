/** *A held bass note* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { AHeldBassNoteTexts } from "./a-held-bass-note.en";

export const aHeldBassNotePt: Translation<AHeldBassNoteTexts> = {
  title: "Um baixo sustentado",
  steps: {
    "bass-under-tune": {
      text: "Ouça e observe. A mão esquerda toca uma nota grave e longa, e a mão direita toca uma melodia por cima.",
    },
    "hold-it": {
      text: "Essa nota grave e longa é uma nota do baixo. A mão esquerda a toca como semibreve e mantém a tecla pressionada por quatro tempos.",
    },
    "let-go-quiz": {
      text: "A mão esquerda segura uma semibreve enquanto a mão direita toca quatro semínimas. Quando a mão esquerda solta a tecla?",
      answers: ["Depois da quarta semínima", "Depois da primeira semínima", "Imediatamente"],
    },
    "first-bar": {
      text: "Com a mão esquerda, toque o Dó abaixo do Dó central e, com a direita, o Dó central. Segure o Dó grave enquanto a mão direita toca Ré, Mi, Fá.",
    },
    "both-bars": {
      text: "Toque dois compassos e segure cada nota do baixo. Com a mão esquerda, toque o Dó abaixo do Dó central e, com a direita, o Dó central. Depois toque Ré, Mi, Fá. Em seguida, toque do mesmo jeito o Sol abaixo e o Sol acima do Dó central. Depois toque Fá, Mi, Ré.",
    },
    "half-bass": {
      text: "Uma nota do baixo também pode ser uma mínima. Ela dura dois tempos, então o baixo muda duas vezes em cada compasso.",
    },
    "half-note-bass": {
      text: "Ouça um baixo de mínimas. Cada nota do baixo soa durante dois tempos da melodia.",
    },
    "half-bass-quiz": {
      text: "A mão esquerda segura uma mínima. Quantas semínimas a mão direita toca por cima dela?",
      answers: ["Uma", "Duas", "Quatro"],
    },
    "half-bass-tune": {
      text: "Sua vez. Toque cada nota do baixo junto com a nota da melodia acima dela. Segure a nota do baixo enquanto soa a próxima nota da melodia.",
    },
    recap: {
      text: "Muito bem. Agora sua mão esquerda segura um baixo sob a melodia.",
      points: [
        "A mão esquerda pode tocar uma nota longa no baixo sob uma melodia que se move.",
        "Toque o baixo junto com a nota da melodia e depois segure a tecla.",
        "Um baixo em semibreve dura quatro tempos, e um baixo em mínima, dois.",
      ],
    },
  },
};

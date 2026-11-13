/** *Octaves* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { OctavesTexts } from "./octaves.en";

export const octavesPt: Translation<OctavesTexts> = {
  title: "Oitavas",
  steps: {
    "three-cs": {
      text: "Ouça três teclas Dó, do grave ao agudo. Observe onde cada uma fica no piano.",
    },
    "same-letter": {
      text: "Conte as teclas brancas para cima a partir do Dó: Dó Ré Mi Fá Sol Lá Si, e Dó outra vez. O mesmo nome volta na oitava tecla branca, contando a tecla em que você começou. Essa distância se chama oitava.",
    },
    "count-quiz": {
      text: "Quantas teclas brancas há de um Dó até o próximo Dó, contando os dois?",
      answers: ["Cinco", "Oito", "Doze"],
    },
    "sound-alike": {
      text: "Duas notas a uma oitava de distância soam parecidas, como se fossem a mesma nota. Uma delas é mais aguda que a outra.",
    },
    "octave-listen": {
      text: "A cada vez, você ouve duas notas. A segunda é mais aguda, mais grave ou igual à primeira?",
    },
    "e-above": {
      text: "O primeiro Mi acima do Dó central fica duas teclas brancas à direita dele. Toque o Mi uma oitava acima desse Mi.",
    },
    "c-below": {
      text: "Agora vá para o outro lado. Toque o Dó uma oitava abaixo do Dó central.",
    },
    "octave-pair": {
      text: "Sua vez de tocar uma oitava: o primeiro Mi acima do Dó central, depois o Mi uma oitava acima. Ouça como os dois soam parecidos.",
    },
    "octave-quiz": {
      text: "O que é uma oitava?",
      answers: [
        "Duas teclas bem ao lado uma da outra",
        "As duas teclas pretas de um grupo",
        "A distância de uma nota até a próxima com o mesmo nome: oito teclas brancas, contando as duas",
      ],
    },
    recap: {
      text: "Muito bem. Você sabe o que é uma oitava.",
      points: [
        "O mesmo nome volta na oitava tecla branca, contando a primeira.",
        "Essa distância é uma oitava.",
        "Duas notas a uma oitava de distância soam parecidas, e uma é mais aguda.",
      ],
    },
  },
};

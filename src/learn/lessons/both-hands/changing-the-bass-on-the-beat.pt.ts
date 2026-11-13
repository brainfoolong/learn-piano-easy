/** *Changing the bass on the beat* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { ChangingTheBassOnTheBeatTexts } from "./changing-the-bass-on-the-beat.en";

export const changingTheBassOnTheBeatPt: Translation<ChangingTheBassOnTheBeatTexts> = {
  title: "Mudar o baixo no tempo certo",
  steps: {
    "bass-changes": {
      text: "Ouça a mão esquerda. Ela segura uma quinta durante um compasso inteiro e então passa para uma nova. A mão direita nunca para.",
    },
    "beat-one": {
      text: "O baixo muda no tempo 1, o primeiro tempo de um novo compasso. Ele entra junto com a nota que a mão direita toca nesse tempo.",
    },
    "when-it-changes": {
      text: "Em que tempo a mão esquerda passa para a nova quinta?",
      answers: ["No tempo 1 do novo compasso", "No tempo 4, um pouco antes", "Quando a mão direita faz pausa"],
    },
    "count-the-bars": {
      text: "Toque qualquer tecla em cada tempo durante dois compassos e conte junto: “um, dois, três, quatro”. Sinta como cada compasso começa no um.",
    },
    "land-on-one": {
      text: "Segure a quinta anterior até o fim do tempo 4. Depois solte e toque a nova quinta exatamente no 1.",
    },
    "c-to-g": {
      text: "Só a mão esquerda. Toque a quinta no Dó abaixo do Dó central, desça para a quinta no Sol abaixo dele e depois volte ao Dó.",
    },
    "change-under-tune": {
      text: "Agora as duas mãos. As quintas ficam no Dó, depois no Sol abaixo dele e de novo no Dó. Cada compasso começa com uma nova quinta e uma nota da melodia juntas.",
    },
    "four-basses": {
      text: "Ouça quatro compassos, cada um com sua própria quinta: Dó, Fá, Sol e Dó de novo. Cada troca cai no tempo 1.",
    },
    "four-bars": {
      text: "Sua vez. Toque os quatro compassos com quintas no Dó, depois no Fá e no Sol abaixo dele e de novo no Dó. Troque a quinta junto com a primeira nota de cada compasso.",
    },
    recap: {
      text: "Muito bem. Agora sua mão esquerda muda no tempo certo.",
      points: [
        "O baixo muda no tempo 1 de um novo compasso.",
        "A nova quinta entra junto com a nota da mão direita.",
        "Segure a quinta anterior até o fim do compasso e depois mude.",
      ],
    },
  },
};

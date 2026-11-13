/** *The grand staff* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { TheGrandStaffTexts } from "./the-grand-staff.en";

export const theGrandStaffPt: Translation<TheGrandStaffTexts> = {
  title: "A pauta dupla",
  steps: {
    "climb-demo": {
      text: "Ouça. O piano sobe do Dó grave, passando pelo Dó central, até o Dó agudo. Esse caminho atravessa as duas pautas que você conhece.",
    },
    "two-staves": {
      text: "A partitura de piano tem duas pautas, uma sobre a outra, unidas à esquerda por uma chave. Juntas, elas formam a pauta dupla. A pauta da clave de Sol fica em cima, e a da clave de Fá embaixo.",
    },
    "which-hand-quiz": {
      text: "Qual mão costuma ler a pauta da clave de Sol, em cima?",
      answers: ["A mão direita", "A mão esquerda"],
    },
    "middle-c-between": {
      text: "O Dó central fica numa linha suplementar curta, entre as duas pautas. Ele pertence às duas. Qualquer uma das pautas pode mostrá-lo, e é a mesma tecla.",
    },
    "middle-c-quiz": {
      text: "Onde fica o Dó central na pauta dupla?",
      answers: [
        "Na linha de cima da pauta da clave de Sol",
        "Numa linha suplementar entre as duas pautas",
        "Na linha de baixo da pauta da clave de Fá",
      ],
    },
    "treble-names": {
      text: "Esta é a pauta da clave de Sol. Diga o nome de cada nota.",
    },
    "bass-names": {
      text: "Agora, a pauta da clave de Fá. Diga o nome de cada nota.",
    },
    "low-c-staff-quiz": {
      text: "Sua mão esquerda toca o Dó grave. Em qual pauta você o encontra?",
      answers: ["Na pauta da clave de Sol", "Na pauta da clave de Fá"],
    },
    "bass-play": {
      text: "Leia cada nota na pauta da clave de Fá e toque-a com a mão esquerda.",
    },
    "treble-play": {
      text: "Leia cada nota na pauta da clave de Sol e toque-a com a mão direita.",
    },
    recap: {
      text: "Muito bem. Agora você consegue ler a pauta dupla.",
      points: [
        "A pauta dupla une uma pauta da clave de Sol e uma da clave de Fá com uma chave.",
        "A mão direita lê principalmente a pauta da clave de Sol, e a esquerda a da clave de Fá.",
        "O Dó central fica numa linha suplementar entre as duas e pertence a ambas.",
      ],
    },
  },
};

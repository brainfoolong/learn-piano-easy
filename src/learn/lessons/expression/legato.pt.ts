/** *Legato* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { LegatoTexts } from "./legato.en";

export const legatoPt: Translation<LegatoTexts> = {
  steps: {
    "legato-demo": {
      text: "Ouça as notas de Dó a Sol, subindo e descendo. Cada nota flui para a seguinte, sem nenhum espaço entre elas.",
    },
    "smooth-and-connected": {
      text: "Tocar de forma fluida e ligada se chama legato. As notas se unem como as palavras de uma canção cantada num só fôlego.",
    },
    "what-legato-means": {
      text: "O que quer dizer legato?",
      answers: ["Muito forte", "Muito rápido", "Com uma pausa depois de cada nota", "Fluido e ligado"],
    },
    "hand-over": {
      text: "No legato, solte uma tecla no momento em que a seguinte desce. Um dedo sobe enquanto o próximo afunda.",
    },
    "five-notes-legato": {
      text: "Toque Dó, Ré, Mi, Fá e Sol com os dedos 1 a 5, começando no Dó central. Passe cada nota para a seguinte, sem espaço.",
    },
    "when-to-let-go": {
      text: "Você toca legato. Quando um dedo deixa a sua tecla?",
      answers: ["Antes de a tecla seguinte descer", "No momento em que a tecla seguinte desce", "Muito depois da tecla seguinte", "Só no fim da peça"],
    },
    "the-slur": {
      text: "Uma linha curva sobre ou sob um grupo de notas é uma ligadura de expressão. Ela pede que você toque essas notas legato.",
    },
    "what-a-slur-asks": {
      text: "Uma linha curva une cinco notas. Como você as toca?",
      answers: ["Cada uma curta", "Cada vez mais forte", "Fluidas e ligadas", "Todas ao mesmo tempo"],
    },
    "slurred-phrase": {
      text: "Uma ligadura une esta frase: Sol, Fá, Mi, Ré, Dó, e depois Ré e Mi. Toque legato, com cada dedo passando a nota para o próximo.",
    },
    "fingers-make-it": {
      text: "O legato precisa de um dedo livre para cada nota seguinte. Numa escala, o polegar passa por baixo, e assim a linha nunca se quebra.",
    },
    "scale-legato": {
      text: "Toque a escala de Dó maior subindo a partir do Dó central, com os dedos 1, 2 e 3. Depois passe o polegar por baixo até o Fá. Mantenha cada nota ligada à seguinte.",
    },
    "which-move-keeps-it-smooth": {
      text: "Você toca a escala de Dó maior subindo, em legato. Depois do Mi com o dedo 3, como você chega ao Fá?",
      answers: ["Passar o polegar por baixo até o Fá", "Levantar a mão e saltar até o Fá", "Tocar o Fá de novo com o dedo 3", "Deixar o Fá de fora"],
    },
    "both-hands-legato": {
      text: "Toque de Dó até Sol com as duas mãos juntas, a mão esquerda uma oitava abaixo. Mantenha as duas mãos fluidas.",
    },
    "which-is-legato": {
      text: "Quais notas você toca legato?",
      answers: ["Notas com uma pausa depois de cada uma", "Notas todas numa só tecla", "Notas distantes que pedem um salto", "Notas sob uma ligadura"],
    },
    recap: {
      text: "Muito bem. Agora você já sabe tocar de forma fluida e ligada.",
      points: [
        "Legato quer dizer fluido e ligado.",
        "Solte uma tecla no momento em que a seguinte desce.",
        "Uma ligadura, a linha curva, marca as notas que se tocam legato.",
        "Um bom dedilhado, como a passagem do polegar, mantém a linha ligada.",
      ],
    },
  },
};

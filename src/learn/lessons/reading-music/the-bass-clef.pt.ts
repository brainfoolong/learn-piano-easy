/** *The bass clef* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { TheBassClefTexts } from "./the-bass-clef.en";

export const theBassClefPt: Translation<TheBassClefTexts> = {
  title: "A clave de Fá",
  steps: {
    "low-notes-demo": {
      text: "Observe e ouça. O piano toca Dó, Ré, Mi, Fá e Sol abaixo do Dó central. Essas são as teclas da posição de Dó da sua mão esquerda.",
    },
    "what-the-bass-clef-is": {
      text: "A clave de Sol serve para as notas agudas, principalmente da mão direita. A clave de Fá serve para as notas graves, principalmente da mão esquerda. Ela parece uma curva com dois pontos ao lado.",
    },
    "low-notes-clef-quiz": {
      text: "Qual clave é usada para as notas graves?",
      answers: ["A clave de Sol", "A clave de Fá"],
    },
    "the-f-line": {
      text: "Os dois pontos da clave de Fá ficam acima e abaixo da quarta linha de baixo para cima. Essa linha é Fá, o Fá abaixo do Dó central. Por isso essa clave se chama clave de Fá.",
    },
    "f-line-quiz": {
      text: "Em volta de qual linha ficam os dois pontos da clave de Fá?",
      answers: ["A segunda linha de baixo para cima", "A quarta linha de baixo para cima", "A linha do meio"],
    },
    "play-bass-f": {
      text: "Aqui está o Fá na quarta linha. Toque-o nas teclas. Na posição de Dó da mão esquerda, o dedo 2 fica sobre ele.",
    },
    "neighbours-of-f": {
      text: "O espaço logo acima do Fá é Sol. O espaço logo abaixo do Fá é Mi. Um grau mais abaixo, na linha do meio, fica o Ré.",
    },
    "name-bass-notes": {
      text: "Diga o nome de cada nota na clave de Fá: selecione o nome certo. Comece no Fá da quarta linha e conte para cima ou para baixo.",
    },
    recap: {
      text: "Muito bem. Você já lê suas primeiras notas na clave de Fá.",
      points: [
        "A clave de Fá serve para as notas graves, principalmente da mão esquerda.",
        "Os dois pontos da clave ficam em volta da quarta linha, que é Fá.",
        "A partir do Fá, conte para cima ou para baixo para encontrar as vizinhas.",
      ],
    },
  },
};

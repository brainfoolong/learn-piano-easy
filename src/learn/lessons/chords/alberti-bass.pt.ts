/** *The Alberti bass* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { AlbertiBassTexts } from "./alberti-bass.en";

export const albertiBassPt: Translation<AlbertiBassTexts> = {
  title: "O baixo Alberti",
  steps: {
    "alberti-demo": {
      text: "Ouça só a mão esquerda. Ela quebra cada acorde num padrão rápido, que corre como água. Mozart usava muito esse padrão.",
    },
    "what-alberti-is": {
      text: "Esse acorde quebrado se chama baixo Alberti. Ele toca as notas do acorde na ordem grave, aguda, do meio, aguda, em colcheias.",
    },
    "pattern-order": {
      text: "Em que ordem o baixo Alberti toca as notas de um acorde?",
      answers: ["Grave, do meio, aguda, do meio", "Aguda, do meio, grave, do meio", "Grave, aguda, do meio, aguda"],
    },
    "five-one-three-one": {
      text: "A mão esquerda toca o padrão com os dedos 5, 1, 3, 1. O dedo 5 toca a nota grave, o polegar a aguda e o dedo 3 a do meio.",
    },
    "c-alberti": {
      text: "Sua vez, em Dó. Coloque o dedo 5 no Dó abaixo do Dó central. Toque Dó, Sol, Mi, Sol duas vezes, por igual.",
    },
    "g7-shape": {
      text: "Para Sol, use Sol7, o acorde de Sol com sétima: Sol maior com um Fá a mais em cima. Deixe de fora o Sol e toque Si, Ré e Fá. Essas notas ficam perto de Dó, Mi e Sol, então a mão quase não se move.",
    },
    "g7-alberti": {
      text: "Desça o dedo 5 até o Si. Toque Si, Fá, Ré, Fá duas vezes com os dedos 5, 1, 3, 1.",
    },
    "f-second-inversion": {
      text: "Para Fá, toque o acorde na segunda inversão: Dó, Fá e Lá. O dedo 5 fica no Dó. O padrão é Dó, Lá, Fá, Lá.",
    },
    "thumb-on-f": {
      text: "No baixo Alberti em Fá, que tecla o polegar toca?",
      answers: ["Dó", "Lá", "Fá"],
    },
    "f-alberti": {
      text: "Deixe o dedo 5 no Dó. Toque Dó, Lá, Fá, Lá duas vezes com os dedos 5, 1, 3, 1.",
    },
    "change-chords": {
      text: "Toque o padrão uma vez em cada acorde: Dó, Fá, Sol7 e Dó. Mantenha as colcheias iguais ao mudar de acorde.",
    },
    "alberti-tune-demo": {
      text: "Aqui está uma pequena melodia sobre o baixo Alberti. A mão direita toca mínimas enquanto a mão esquerda segue correndo.",
    },
    "alberti-tune": {
      text: "Coloque o polegar direito no Dó central. Toque cada nota da melodia junto com a nota grave do baixo embaixo dela.",
    },
    "d-major-demo": {
      text: "O desafio final, Canon in D, está em Ré maior. A armadura de clave tem dois sustenidos, no Fá e no Dó, então todo Fá é Fá sustenido e todo Dó é Dó sustenido. Ouça a escala de Ré maior.",
    },
    "two-sharps": {
      text: "A armadura de clave mostra dois sustenidos, no Fá e no Dó. Que teclas você toca para Fá e Dó?",
      answers: ["Fá♯ e Dó♯, as teclas pretas", "Fá e Dó, as teclas brancas", "Só Fá♯, e o Dó continua na tecla branca"],
    },
    "d-major-scale": {
      text: "Sua vez. Coloque o polegar direito no Ré acima do Dó central e toque a escala subindo e descendo, com o dedilhado de Dó maior.",
    },
    "canon-bass-demo": {
      text: "Ouça a mão esquerda do desafio final: o dedo 5 toca uma nota grave, e o polegar uma mais aguda. Depois a mão salta para o próximo par, por exemplo do Lá para o Lá uma oitava abaixo. Ela termina num acorde de Ré maior.",
    },
    "canon-bass": {
      text: "Sua vez. Coloque o dedo 5 no Ré abaixo do Dó central, toque cada par e leve a mão ao próximo. A nota mais grave é o segundo Ré abaixo do Dó central.",
    },
    "left-d-major": {
      text: "O desafio final termina em Ré maior na mão esquerda. Coloque o dedo 5 no Ré abaixo do Dó central e toque Ré, Fá sustenido e Lá um por um, depois juntos.",
    },
    "black-key-thirds-demo": {
      text: "Perto do fim do desafio final, a mão direita toca a melodia em terças. Três dessas quatro terças têm uma tecla preta: Fá sustenido ou Dó sustenido.",
    },
    "black-key-thirds": {
      text: "Sua vez. Coloque o dedo 3 no segundo Ré acima do Dó central, e o dedo 5 no Fá sustenido acima dele. Pressione as duas teclas de cada terça como uma só, e vá descendo.",
    },
    recap: {
      text: "Muito bem. Agora você já toca o baixo Alberti.",
      points: [
        "O baixo Alberti quebra um acorde na ordem grave, aguda, do meio, aguda.",
        "Ele corre em colcheias, com os dedos 5, 1, 3, 1.",
        "Sol7 e Fá na segunda inversão deixam a mão perto do Dó.",
        "Ré maior tem dois sustenidos na armadura de clave: Fá sustenido e Dó sustenido.",
      ],
    },
  },
};

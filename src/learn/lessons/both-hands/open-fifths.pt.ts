/** *Open fifths* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { OpenFifthsTexts } from "./open-fifths.en";

export const openFifthsPt: Translation<OpenFifthsTexts> = {
  title: "Quintas abertas",
  steps: {
    "fifth-sound": {
      text: "Ouça a mão esquerda tocar duas teclas ao mesmo tempo. Esse som se chama quinta aberta. Ele soa aberto, firme e calmo.",
    },
    "little-finger-and-thumb": {
      text: "Coloque a mão esquerda na posição de Dó. Toque o Dó com o dedo mínimo e o Sol com o polegar, os dois juntos. Isso é uma quinta.",
    },
    "count-the-fifth": {
      text: "Conte as teclas brancas do Dó até o Sol, contando também o Dó e o Sol. Quantas teclas são?",
      answers: ["Cinco", "Três", "Oito"],
    },
    "first-fifth": {
      text: "Sua vez. Toque a quinta Dó e Sol três vezes. Pressione as duas teclas juntas toda vez.",
    },
    "move-the-fifth": {
      text: "Uma quinta é uma abertura que você pode mover. Mantenha o dedo mínimo e o polegar sempre à mesma distância um do outro e deslize a mão inteira.",
    },
    "fifth-from-g": {
      text: "Seu dedo mínimo esquerdo está no Sol. Que tecla o polegar toca para formar uma quinta?",
      answers: ["Ré", "Dó", "Mi"],
    },
    "three-fifths": {
      text: "Com a mão esquerda, toque a quinta do Dó abaixo do Dó central até o Sol. Depois toque a quinta no Sol abaixo desse Dó, depois no Fá abaixo dele e volte ao Dó. Mantenha a mesma abertura toda vez.",
    },
    "fifth-under-tune": {
      text: "Agora a mão direita toca uma melodia sobre a quinta. A mão esquerda toca a quinta junto com a primeira nota e a segura.",
    },
    "fifth-and-tune": {
      text: "Sua vez. Toque a quinta Dó e Sol junto com o Mi da mão direita, depois Ré e Dó. Toque a quinta de novo com o Mi e depois mais dois Mis.",
    },
    recap: {
      text: "Muito bem. Agora sua mão esquerda toca quintas.",
      points: [
        "Uma quinta abrange cinco teclas brancas, contando as duas pontas, e você toca suas duas teclas juntas.",
        "O dedo mínimo esquerdo toca a tecla grave, e o polegar, a aguda.",
        "A abertura se move: Dó e Sol, Sol e Ré, Fá e Dó.",
        "Uma quinta sob uma melodia soa aberta e firme.",
      ],
    },
  },
};

/** The guide of *Deck the Halls* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Deck the Halls é cantada com a melodia de Nos Galan, uma antiga canção galesa para a véspera de Ano-Novo. " +
    "Essa melodia foi impressa pela primeira vez em 1794, e mais tarde Joseph Haydn fez um arranjo dela. " +
    "Thomas Oliphant escreveu a letra de Natal em inglês em 1862, e é com essa letra que ela é cantada hoje.",
  funFact:
    "A letra de Oliphant começava com Deck the hall, com hall no singular, um salão só. Cancioneiros posteriores mudaram para o plural que cantamos hoje.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita, devagar, e deixe a música esperar cada nota.",
        "Toque os compassos 9 a 12 só com a mão direita. Ali a melodia sobe até o Dó agudo.",
        "Junte as mãos. A mão esquerda segura cada nota grave por meio compasso ou mais.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Longo, curto: o primeiro Sol é longo, e o Fá é curto e vem logo depois.",
        "Os compassos 13 e 14 repetem o começo, então sua mão já conhece esse trecho.",
        "Diminua um pouco o andamento nas últimas notas, e deixe o Dó grave soar.",
      ],
      tricky: {
        3: "Os dedos 3, 4 e 5 sobem por Ré, Mi e Fá, e depois o dedo 3 volta para o Ré.",
        9: "O dedo 5 toca o Fá, e depois o polegar se estica para baixo até o Ré, com a mão parada.",
        11: "O polegar desliza do Ré para o Mi. Depois os dedos 2 a 5 sobem por Sol, Lá, Si e o Dó agudo.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita, devagar, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda: uma nota grave e depois um acorde, em cada compasso.",
        "Toque os compassos 17 a 24 só com a mão direita. Ali a melodia sobe até o Dó agudo.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "O Fá sustenido é a tecla preta entre Fá e Sol. Ele leva a melodia para cima, rumo ao Dó agudo.",
        "Toque a nota grave da mão esquerda um pouco mais forte que o acorde que vem depois.",
        "Quatro Lás rápidos: toque todos por igual, como quatro passos no mesmo degrau.",
      ],
      tricky: {
        21: "O polegar sobe do Ré para o Mi, e o dedo 2 pega o Fá sustenido, que é uma tecla preta.",
        22: "Depois do Sol, o dedo 3 desliza uma tecla acima até o Lá, para os dedos 4 e 5 alcançarem Si e Dó.",
        32: "O polegar desliza do Ré para baixo até o último Dó, enquanto a mão esquerda toca o acorde completo.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele fluir sozinho: grave, agudo, meio, agudo.",
        "Toque só as terças da mão direita, e mantenha juntas as duas notas de cada par.",
        "Junte as mãos nos 4 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
        "Troque o pedal no meio de cada compasso, quando a mão esquerda começa um novo acorde.",
      ],
      tricky: {
        11: "Depois do Sol, o polegar passa por baixo do dedo 3 até o Lá. Depois os dedos 2 e 3 terminam em Si e Dó.",
        12: "Do Lá, o polegar desce para o Ré, enquanto o dedo 4 cai no Sol logo acima.",
        16: "O polegar se estica para baixo até o Sol para o último acorde, e a mão esquerda desce para uma oitava grave.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava grave, e depois volte para cima até o acorde.",
        "Toque os compassos 1 a 4 só com a mão direita, e toque leve as notas rápidas de preenchimento.",
        "Toque a passagem rápida dos compassos 11 e 12 só com a mão direita.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No baixo stride, olhe para a oitava grave e deixe a mão encontrar o acorde pelo tato.",
        "Toque as notas rápidas de preenchimento mais suave que as notas da melodia, como um pequeno eco.",
        "Levante a mão depois do último Ré, e depois caia com as duas mãos no grande acorde.",
      ],
      tricky: {
        4: "O dedo 2 desliza do Ré para baixo até o Dó, e o polegar entra por baixo para o Si. A mão esquerda salta para o Sol grave.",
        5: "O preenchimento do compasso 4 corre direto para o Sol agudo, então deixe o dedo 5 pronto para ele.",
        8: "O dedo 2 desliza de novo para baixo até o Dó, enquanto a mão esquerda salta para a oitava de Sol grave.",
      },
    },
  },
};

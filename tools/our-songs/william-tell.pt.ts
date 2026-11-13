/** The guide of *William Tell Overture* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "A ópera Guilherme Tell estreou em 1829 e foi a última das 39 óperas de Rossini. " +
    "A abertura termina com um galope rápido, muitas vezes chamado de Marcha dos Soldados Suíços. " +
    "Esse final virou o tema de The Lone Ranger no rádio, na televisão e no cinema.",
  funFact:
    "Alguns escritores já definiram um intelectual como um homem capaz de ouvir a abertura de Guilherme Tell sem pensar no Lone Ranger.",
  versions: {
    common: {
      practice: [
        "Toque os 5 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 6 a 9 só com a mão direita. Eles respondem à melodia com o mesmo ritmo.",
        "Agora só a mão esquerda. Ela mantém uma posição por meio compasso ou por um compasso inteiro.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Diga “longa, curta, curta” enquanto toca. Esse ritmo é o galope de um cavalo.",
        "Tire o dedo 5 do Mi um pouco antes. Assim o polegar cai no Sol grave na hora certa.",
        "Cada dedo tem sua própria tecla. O polegar toca todos os Sóis.",
      ],
      tricky: {
        7: "O dedo 4 toca o Ré três vezes. Depois os dedos 2 e 1 descem até o Si e o Sol.",
        8: "O dedo 3 toca o Dó, e depois o dedo 5 pula até o Mi. No meio do compasso, a mão esquerda passa para Ré e Sol.",
        15: "Os dedos 5, 4 e 3 descem do Mi até o Dó. A mão esquerda passa para Ré e Sol nas duas últimas notas.",
      },
    },
    rare: {
      practice: [
        "Toque os 5 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda. Ela toca um acorde em cada meio compasso.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal, como um cavalo a galope.",
      ],
      tips: [
        "Conte quatro tempos em cada compasso, duas semínimas por tempo. A mão esquerda toca em todos os tempos.",
        "Os acordes de duas notas usam os dedos 1 e 3, 2 e 4 ou 3 e 5.",
        "Toque as notas repetidas com leveza e o pulso solto, como cascos numa estrada.",
      ],
      tricky: {
        7: "Os dedos 2 e 4 tocam Fá sustenido e Lá juntos. Depois o dedo 4 repete o Lá sozinho.",
        8: "Os pares vão de Sol e Si para Fá sustenido e Lá. Mantenha a mão no lugar, e troque só os dedos.",
        15: "O dedo 4 repete o Lá, e o dedo 5 pega o Si. No meio do compasso, a mão esquerda volta para Sol, Si e Ré.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda. Cada meio compasso balança da nota grave para as duas notas de cima.",
        "Toque só as sextas da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada meio compasso, quando a nota do baixo volta.",
        "A passagem rápida sobe do Lá ao Mi com os dedos 1 a 5. Mantenha o pulso nivelado.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        9: "O dedo 2 segura o Lá depois do Sol sustenido do polegar. Depois a mão desce para Dó sustenido e Mi, no próximo compasso.",
        14: "O dedo 3 repete o Dó sustenido, e depois os dedos 4 e 5 alcançam Ré e Fá sustenido.",
        17: "Use a pausa depois do Lá longo para subir o polegar até o Mi agudo.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: uma oitava grave, um acorde, outra oitava, um acorde.",
        "Toque só as oitavas da mão direita. Mantenha a mão aberta, com o polegar e o dedo mínimo prontos.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Na mão esquerda, deixe o braço balançar entre a oitava grave e o acorde.",
        "Deixe o dedo mínimo cantar a nota de cima de cada oitava um pouco mais forte.",
        "A melodia é a nota de cima de cada acorde. O dedo 5 a toca todas as vezes.",
      ],
      tricky: {
        13: "As oitavas descem do Fá sustenido ao Si. Mantenha a mão aberta, e deixe-a quicar em cada uma.",
        21: "Os acordes descem. Mantenha o dedo 5 na nota de cima, e deixe a mão quicar.",
        22: "O polegar fica no Lá. Os dedos 2, 3 e 5 passam de Dó sustenido, Mi e Lá para Si, Ré sustenido e Fá sustenido.",
      },
    },
  },
};

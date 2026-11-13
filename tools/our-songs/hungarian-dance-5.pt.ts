/** The guide of *Hungarian Dance No. 5* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Brahms escreveu suas Danças Húngaras para piano a quatro mãos, e a primeira série foi publicada em 1869. " +
    "A Dança n.º 5 virou a mais famosa de todas. " +
    "No filme The Great Dictator (1940), Charlie Chaplin faz a barba de um cliente no ritmo desta música.",
  funFact: "Brahms baseou esta dança numa csárdás de Béla Kéler, mas achava que era uma melodia folclórica.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 5 a 8. Aqui o final é novo.",
        "Agora só a mão esquerda. Ela segura uma quinta aberta, e nos compassos 3 e 7 só o polegar toca.",
        "Junte as mãos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Cada nota longa dura seis tempos, e a curta, dois. Conte, e a dança ganha balanço.",
        "O dedo 2 segura o Sol sustenido, e depois os dedos 3 e 4 sobem depressa para Lá e Si.",
        "O Sol sustenido puxa forte para o Lá. Deixe a nota se demorar um pouco antes de seguir.",
      ],
      tricky: {
        2: "O dedo 5 se estica até o Dó, e depois o dedo 3 volta para o Lá.",
        3: "O dedo 2 segura o Sol sustenido por seis tempos. Depois os dedos 3 e 4 tocam Lá e Si, depressa.",
        6: "Como no compasso 2, o dedo 5 toca o Dó e o dedo 3 toca o Lá.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Primeiro vem uma nota grave, e depois um acorde no tempo 2.",
        "Toque só a mão direita nos 8 primeiros compassos, onde ela sobe uma oitava.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Toque a nota grave um pouco mais forte que o acorde depois dela. É o “pum-pá” da dança.",
        "Enquanto segura o Lá longo, leve a mão direita uma oitava acima. O polegar cai no Mi.",
        "A pausa curta no fim do compasso 12 dá tempo para você saltar de volta para baixo.",
      ],
      tricky: {
        5: "Agora a mão direita toca uma oitava acima. Seu polegar cai no Mi agudo.",
        9: "A resposta começa no Dó agudo, com o dedo 5. Depois o dedo 3 toca o Lá, e o dedo 4 toca o Si.",
        13: "Use a pausa do compasso 12 para saltar uma oitava para baixo. Seu polegar cai no Mi.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só as sextas da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti leve e ágil, para a melodia dançar por cima.",
        "O Mi sustenido é a tecla branca Fá. O dedo 2 toca essa nota, e a mão fica onde está.",
        "A melodia é a nota de cima de cada par. Por isso, deixe o dedo de cima conduzir.",
      ],
      tricky: {
        5: "Seu polegar fica no Lá, enquanto os dedos 3 e 5 tocam Dó sustenido e Fá sustenido por cima.",
        7: "Os dedos 1 e 4 tocam Sol sustenido e Mi sustenido. Depois a mão sobe duas vezes, depressa.",
        15: "São as mesmas sextas do compasso 7. Mantenha o polegar perto do Lá e do Si.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: salte para baixo até a oitava, e depois volte para cima até o acorde.",
        "Toque só as oitavas da mão direita, com o polegar e o dedo mínimo numa só posição.",
        "Toque só os desenhos rápidos da mão direita nos compassos 5 a 7, devagar.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Toque as oitavas com garra. É uma dança rápida, e cada nota longa deve soar.",
        "Nos desenhos rápidos, o polegar passa por baixo, e assim a passagem rápida corre por igual.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
      ],
      tricky: {
        4: "Segure a oitava de Fá sustenido, e deixe a mão esquerda saltar entre a oitava e o acorde dela.",
        8: "Abra a mão sobre Fá sustenido, Lá, Dó sustenido e Fá sustenido, com os dedos 1, 2, 3 e 5.",
        12: "O acorde de quatro notas volta. Primeiro solte o Sol sustenido grave, e depois caia na oitava inteira.",
      },
    },
  },
};

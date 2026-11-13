/** The guide of *Night on Bald Mountain* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mussorgsky terminou seu retrato musical de um sabá de bruxas no Monte Calvo na noite de São João, 23 de junho de 1867. " +
    "Cinco anos depois da morte dele, Rimsky-Korsakov publicou seu próprio arranjo da obra, em 1886. " +
    "O filme Fantasia (1940), de Walt Disney, a tornou famosa, no arranjo de Leopold Stokowski baseado na versão de Rimsky-Korsakov.",
  funFact: "Junto com Sadko, de Rimsky-Korsakov, também de 1867, é um dos primeiros poemas sinfônicos de um compositor russo.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. A mão começa um grau abaixo, no Sol.",
        "Agora só a mão esquerda. Ela segura uma nota durante um compasso inteiro.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Toque a melodia forte e pesada, como metais chamando na noite.",
        "Use a pausa longa para levar a mão direita para cima, até o Sol.",
        "Enquanto o Lá soa, prepare-se para descer a mão. Depois o dedo 3 cai no Fá.",
      ],
      tricky: {
        5: "A mão subiu. O dedo 2 toca o Lá, e o dedo 3 toca o Si bemol.",
        13: "Desça a mão direita até o polegar ficar sobre o Ré. O dedo 3 começa no Fá.",
        23: "Desça a mão direita durante a pausa. O dedo 3 toca o Fá, e o polegar termina no Ré.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda. Ela toca nos tempos 1, 3 e 4 de cada compasso.",
        "Junte as mãos nos compassos 9 a 16, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Toque a melodia forte e pesada, como metais chamando na noite.",
        "Conte quatro tempos em cada compasso. O baixo toca nos tempos 1, 3 e 4.",
        "A mão esquerda nunca se move. Cada dedo fica com sua própria tecla.",
      ],
      tricky: {
        5: "A mão subiu durante a pausa. O dedo 2 toca o Lá, e o dedo 3 toca o Si bemol.",
        15: "Desça a mão direita para o dedo 2 tocar o Mi. Depois o dedo 4 toca o Sol.",
        31: "Desça a mão direita para o polegar cair no Ré no fim do compasso.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda. Sob a melodia, ela salta entre duas notas a uma oitava de distância.",
        "Toque só a passagem rápida do compasso 4 com a mão direita. Passe o polegar por baixo até o Sol.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Não use o pedal sob a melodia, para cada oitava do baixo soar nítida.",
        "Na passagem rápida, passe o polegar por baixo até o Sol, e depois suba com os dedos 2 a 5.",
        "Troque o pedal a cada nova nota do baixo, duas vezes por compasso.",
      ],
      tricky: {
        4: "Passe o polegar por baixo até o Sol, e depois deixe os dedos 2, 3, 4 e 5 subirem até o Ré.",
        17: "A melodia salta uma oitava acima. Use a pausa antes dela para mover a mão.",
        25: "Desça a mão uma oitava durante a pausa. Os dedos 3 e 5 pegam a primeira terça.",
      },
    },
    legendary: {
      practice: [
        "Toque só a passagem rápida dos compassos 4 e 5 com a mão direita, bem devagar.",
        "Toque só a mão esquerda: a oitava, depois duas notas mais rápidas.",
        "Toque só as oitavas da mão direita. Mantenha a mão aberta, com o polegar e o dedo mínimo prontos.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "A passagem rápida gira para cima e para baixo como o vento. Toque leve e por igual.",
        "Deixe o dedo mínimo cantar a nota de cima de cada oitava um pouco mais forte.",
        "Toque o último acorde forte, e segure até o som sumir.",
      ],
      tricky: {
        13: "A mão esquerda salta do Ré grave até Lá e Fá. Use a pausa curta para saltar de volta para baixo.",
        14: "A mão esquerda abre bem, do Sol grave até o Si bemol. Mantenha o pulso solto.",
        17: "As oitavas começam. Abra a mão, com o polegar no Lá e o dedo mínimo no Lá de cima.",
      },
    },
  },
};

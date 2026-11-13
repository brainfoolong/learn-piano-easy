/** The guide of *Haul Away Joe* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Haul Away Joe é uma canção de marinheiro curta, para puxar uma corda. " +
    "R. R. Terry a publicou em 1921 como canção para puxar a escota da vela de proa.",
  funFact: "Uma estrofe da edição de Terry fala do rei Luís da França, que perdeu a cabeça na Revolução.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos compassos 1 a 4, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 5 a 8, onde o refrão desce até o Ré grave.",
        "Agora só a mão esquerda. Ela segura duas teclas e as troca no máximo duas vezes por compasso.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "O dedo 5 pega o Ré e o Dó, em cima. O polegar só toca o Fá sustenido do compasso 3.",
        "Conte seis tempos em cada compasso: longo, curto, longo, curto. É assim que se puxa a corda.",
        "O Ré grave do compasso 8 é do polegar. A partir daí, a mão fica sobre as teclas de Ré a Lá até o fim.",
      ],
      tricky: {
        2: "O dedo 5 toca o Dó três vezes. Depois o dedo 3 pega o Lá, e o dedo 2 espera sobre o Sol.",
        11: "Os dedos descem do Sol ao Ré, uma tecla de cada vez. A mão esquerda segura Ré e Sol.",
        14: "Os dedos 4 e 5 balançam entre Sol e Lá. Depois o dedo 3 desce para o Fá.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave longa, e depois um acorde curto.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Cada meio compasso da mão esquerda tem uma nota longa e um acorde curto. Sinta o puxão: longo, curto.",
        "Os dedos 1 e 5 pressionam as sextas como uma nota só. Depois o dedo 5 fica na nota de cima.",
        "Termine com Ré e Fá juntos. Os dedos 1 e 3 pressionam os dois como uma nota só.",
      ],
      tricky: {
        4: "Os dedos 3, 4 e 5 sobem por Lá, Si e Dó. Este Si é a tecla branca, não o Si bemol.",
        5: "Abra os dedos 1 e 5 sobre Fá e Ré para a sexta. Depois o dedo 5 toca o Ré de novo, sozinho.",
        9: "A melodia sobe por Ré, Fá e Lá. Sol e Fá são colcheias rápidas, então conte as duas por igual.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda até os acordes quebrados fluírem sozinhos.",
        "Toque só a mão direita nos compassos 9 a 16, e passe o polegar por baixo na subida.",
        "Toque só as terças e sextas da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada nova nota do baixo, duas vezes por compasso.",
        "Depois do Fá, passe o polegar por baixo até o Sol. Em seguida, os dedos 2, 3 e 4 alcançam Lá, Si e Dó.",
        "A melodia é a nota de cima de cada par. Por isso, deixe o dedo de cima conduzir.",
      ],
      tricky: {
        13: "Desça a partir do Ré com os dedos 5 a 1. Depois o dedo 3 cruza por cima do polegar até o Fá.",
        16: "Suba pelo acorde de Ré menor com os dedos 1, 2, 3 e 5. A mão se abre bem para o Ré agudo.",
        20: "Os dedos 1 e 5 seguram cada sexta e deslizam para cima, uma tecla de cada vez. Mantenha a mesma posição da mão.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: uma oitava no tempo, e depois um acorde duas vezes, cada um com uma pausa curta para saltar.",
        "Toque só os arpejos da mão esquerda. O polegar passa por baixo, e o dedo 3 cruza por cima.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Use a pausa curta depois de cada oitava e de cada acorde para saltar para o próximo.",
        "Deixe os arpejos rolarem como ondas por baixo da melodia.",
        "Toque a nota de cima de cada acorde um pouco mais forte, para a melodia soar clara.",
      ],
      tricky: {
        4: "A mão esquerda salta de uma oitava de Lá grave para um acorde de Lá, Mi e Lá. A mão direita sobe por Lá, Si e Dó.",
        20: "Cada acorde leva a mão inteira uma tecla para cima ou para baixo. Mantenha a posição da mão, e deixe o dedo de cima conduzir.",
        23: "A mão passa de Sol maior para Lá maior num só movimento. O polegar cai no Dó sustenido, uma tecla preta.",
      },
    },
  },
};

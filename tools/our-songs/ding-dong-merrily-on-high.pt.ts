/** The guide of *Ding Dong Merrily on High* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Esta canção de Natal nasceu como uma melodia de dança chamada Branle de l'Official. " +
    "Ela foi impressa em 1589 em Orchésographie, um livro de danças do clérigo francês Thoinot Arbeau. " +
    "O compositor inglês George Ratcliffe Woodward escreveu a letra da canção, publicada em 1924. " +
    "Charles Wood fez a harmonização.",
  funFact: "Thoinot Arbeau era um pseudônimo. Por trás dele estava Jehan Tabourot.",
  versions: {
    common: {
      practice: [
        "Toque os 2 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 7 só com a mão direita. Ali a melodia desce correndo desde o Sol agudo.",
        "Agora só a mão esquerda. Ela mantém uma posição em cada meio compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "O polegar começa no Sol abaixo da melodia, e o dedo 4 toca o primeiro Dó.",
        "Toque o último Dó com o polegar. Depois o dedo mínimo sobe até o Sol agudo.",
        "A passagem rápida desce uma tecla a cada nota longa. Os dedos 5, 4 e 3 tocam as três primeiras, e depois a mão desce tecla por tecla.",
      ],
      tricky: {
        1: "O dedo 4 toca o Dó duas vezes, e depois os dedos 5, 4, 3 e 2 descem de Ré a Lá. O polegar segura o Sol longo.",
        5: "A passagem rápida começa no Sol agudo, com o dedo mínimo. Cada nota longa começa o mesmo padrão uma tecla abaixo.",
        7: "Os dedos 3, 2 e 1 tocam Dó, Si e Lá, e depois Si, Dó e Lá. Em seguida descem por Si, Lá e Sol.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as notas de cada acorde.",
        "Toque os compassos 5 a 7 só com a mão direita. Ali a melodia desce correndo desde o Sol agudo.",
        "Junte as mãos na primeira estrofe, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A passagem rápida anda em grupos de uma nota longa e cinco rápidas. Segure cada nota longa o tempo de três rápidas.",
        "Segure cada acorde com suavidade, para os sinos da melodia soarem por cima.",
        "Na segunda estrofe, toque a nota grave um pouco mais forte que o acorde que vem depois.",
      ],
      tricky: {
        5: "A passagem rápida começa no Sol agudo, com o dedo mínimo. Cada nota longa começa o mesmo padrão uma tecla abaixo.",
        7: "Os dedos 3, 2 e 1 tocam Dó, Si e Lá, e depois Si, Dó e Lá. Em seguida descem por Si, Lá e Sol.",
        15: "As mesmas notas do compasso 7, agora sobre uma nota do baixo e um acorde, alternados.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque a passagem rápida dos compassos 5 a 7 só com a mão direita.",
        "Junte as mãos na primeira estrofe, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia soar por cima como um sino.",
        "Depois do último Dó, a mão direita salta uma oitava acima, e a mão esquerda desce para um Dó grave.",
        "Troque o pedal a cada meio compasso, quando a mão esquerda começa um novo acorde.",
      ],
      tricky: {
        9: "A mão direita toca o começo uma oitava acima. A mão esquerda desce até o Dó grave para o seu acorde quebrado.",
        10: "A mão esquerda toca Fá, depois Sol com uma pausa, e salta para baixo até o Dó grave.",
        12: "O mesmo salto para baixo até o Dó, como no compasso 10. Depois o polegar direito pega o último Dó, pronto para o Sol agudo.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava grave, e depois volte para cima até o acorde.",
        "Toque a passagem rápida dos compassos 5 a 7 só com a mão direita, e toque leve os balanços rápidos.",
        "Toque só os arpejos da segunda estrofe, com a mão esquerda.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No baixo stride, olhe para a oitava grave e deixe a mão encontrar o acorde pelo tato.",
        "Cada nota longa balança uma vez de um lado para o outro, como um sino. Toque o balanço mais leve que a melodia.",
        "Mantenha o polegar e o dedo mínimo abertos à distância de uma oitava, e deixe o pulso quicar de leve.",
      ],
      tricky: {
        9: "As oitavas de Dó, Ré, Si e Lá vêm rápido. Mantenha a posição de oitava e mova a mão a partir do pulso.",
        11: "O começo volta em oitavas. Toque todas por igual enquanto os arpejos correm por baixo.",
        14: "A passagem rápida balança para baixo até o Si, enquanto, mais abaixo, a mão esquerda sobe por um arpejo de Dó e depois por um de Sol.",
      },
    },
  },
};

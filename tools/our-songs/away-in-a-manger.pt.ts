/** The guide of *Away in a Manger* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "A letra de Away in a Manger é americana, e ninguém sabe quem a escreveu. " +
    "Muitas melodias foram feitas para ela, e esta é Cradle Song, escrita por William J. Kirkpatrick em 1895. " +
    "É a melodia cantada na Grã-Bretanha e na Irlanda.",
  funFact:
    "Por muito tempo, a letra foi chamada de Luther's Cradle Hymn, mas Martinho Lutero nunca a escreveu.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 5 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 9 só com a mão direita. Ali a melodia desce até o Sol grave.",
        "Agora só a mão esquerda. Ela mantém uma posição em cada compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "O polegar toca o Sol grave, e o dedo 2 pega o Dó central.",
        "Duas notas longas, depois duas rápidas que puxam para o compasso seguinte.",
        "O polegar se estica para baixo até o Lá, e a mão o acompanha até o Sol grave.",
      ],
      tricky: {
        6: "O dedo 3 toca o Fá duas vezes, depois o dedo mínimo se estica para cima até o Sol.",
        7: "O dedo 4 toca o Mi, o dedo 2 se estica para baixo até o Dó, e o dedo 4 volta para o Mi.",
        15: "As mesmas notas do compasso 7: Mi duas vezes com o dedo 4, depois Dó com o dedo 2.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as três notas de cada acorde.",
        "Toque só o baixo de valsa: nota grave, acorde, acorde.",
        "Junte as mãos na primeira metade, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "No acorde de Fá, o polegar sobe do Sol para o Lá. Ele volta para o próximo acorde.",
        "No baixo de valsa, toque a nota grave um pouco mais forte que os acordes que vêm depois.",
        "Segure cada acorde pelo compasso inteiro, suave, como uma canção de ninar.",
      ],
      tricky: {
        6: "O polegar esquerdo volta do Lá para o Sol enquanto a mão direita sobe até o Sol.",
        7: "O dedo 4 toca o Mi, o dedo 2 se estica para baixo até o Dó, e o dedo 4 volta para o Mi.",
        15: "As mesmas notas do compasso 7, agora sobre um baixo de valsa. Toque o baixo suave.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só as terças e sextas da mão direita, e mantenha juntas as duas notas de cada par.",
        "Junte as mãos na primeira estrofe, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "Levante a mão depois do Dó, e pouse-a no Sol uma oitava acima.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        17: "Levante a mão direita depois do Dó, e coloque o polegar no Sol uma oitava acima.",
        19: "O polegar solta o Mi grave, e os dedos 2, 3 e 4 sobem até o Fá.",
        32: "Abra a mão para a sexta, depois feche-a para a última terça, em Sol e Si.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: desça num salto até a oitava e suba de volta para o acorde.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque só os arpejos da mão esquerda, na segunda estrofe.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No baixo stride, olhe para a oitava e deixe a mão achar o acorde pelo tato.",
        "Bem no agudo, as oitavas devem soar como sinos. Mantenha o pulso solto.",
        "Em cada arpejo, o dedo 3 cruza por cima do polegar na subida.",
      ],
      tricky: {
        6: "A mão esquerda salta para a oitava de Sol grave enquanto a mão direita toca o acorde de Si, Ré e Fá.",
        22: "As oitavas tocam Fá duas vezes, depois Sol, enquanto a mão esquerda sobe pelo acorde de Sol com sétima e desce de volta.",
        30: "Igual ao compasso 22. Mantenha as oitavas regulares enquanto o arpejo corre por baixo.",
      },
    },
  },
};

/** The guide of *Row Row Row Your Boat* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Esta é uma das canções infantis mais conhecidas do mundo de língua inglesa. " +
    "Em 1881, Eliphalet Oram Lyte publicou a melodia que cantamos hoje, em The Franklin Square Song Collection. " +
    "Ela sobe pelas cinco primeiras notas da escala, e depois despenca uma oitava inteira.",
  funFact: "A canção é um cânone: uma segunda voz começa a mesma melodia dois compassos depois, e as duas partes se encaixam.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita, devagar, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. Ali a melodia desce correndo.",
        "Junte as mãos. A mão esquerda só segura uma nota grave e longa.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Aqui cada dedo tem sua própria tecla: o polegar no Dó, o mínimo no Sol.",
        "O Sol dura o compasso inteiro, então conte os seis tempos antes de seguir.",
        "Aqui cada nota dura três tempos, então conte até três em cada tecla.",
      ],
      tricky: {
        5: "Leve a mão para cima durante o Sol longo, para o mínimo cair no Dó agudo.",
        6: "Segure o Mi com o dedo 2, depois o Dó com o polegar, três tempos cada. Mantenha a mão parada.",
        7: "O mínimo encontra o Sol de novo, e a melodia desce: 5, 4, 3, 2.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as três notas de cada acorde.",
        "Toque só a mão esquerda da segunda metade, onde uma nota do baixo vem antes de cada acorde.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "O acorde muda para Sol. O polegar fica no Sol, e os outros dois dedos descem uma tecla cada.",
        "A nota do baixo cai no tempo 1, e as notas de cima no tempo 4.",
        "Deixe as notas que descem ficarem um pouco mais suaves, como um barco que se afasta à deriva.",
      ],
      tricky: {
        5: "Leve a mão direita para cima durante o Sol longo, para o mínimo cair no Dó agudo.",
        7: "Na mão esquerda, o mínimo desliza do Dó para o Si, e o dedo 3 do Mi para o Ré.",
        13: "O Dó agudo volta. Leve a mão direita para cima durante o Sol longo do compasso 12.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só a melodia da mão esquerda, a partir do compasso 9.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "Solte o pedal e pise de novo nos tempos 1 e 4.",
        "A melodia passa para a mão esquerda. Toque-a mais forte que os acordes quebrados da mão direita.",
      ],
      tricky: {
        5: "Leve a mão direita para cima durante o Sol longo, para o mínimo ficar pronto no Dó agudo.",
        9: "Aqui as mãos trocam de papel: a esquerda pega a melodia, e a direita pega os acordes.",
        13: "Seu polegar esquerdo se estica para cima até o Dó central, e depois a mão desce com 2, 3 e 5.",
      },
    },
    legendary: {
      practice: [
        "Toque só os acordes da mão direita, e deixe o mínimo cantar a melodia.",
        "Toque só a mão esquerda a partir do compasso 9, onde ela começa o cânone.",
        "Junte as mãos no cânone, devagar, e escute as duas vozes.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
        "A mão esquerda começa o cânone sozinha. A mão direita espera dois compassos.",
        "Cada mão toca a melodia inteira. Faça as duas vozes soarem claras.",
      ],
      tricky: {
        5: "Tire a mão do acorde do compasso 4, e caia com o mínimo no Dó agudo.",
        17: "A mão direita termina a melodia sobre um Sol grave. Levante-a depois do Ré, pronta para o último acorde.",
        18: "Abra a mão direita sobre uma oitava inteira para o último acorde: Dó, Mi, Sol e Dó.",
      },
    },
  },
};

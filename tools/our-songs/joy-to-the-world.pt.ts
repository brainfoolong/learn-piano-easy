/** The guide of *Joy to the World* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Lowell Mason publicou esta melodia em Boston, com o nome de Antioch. " +
    "Ela é cantada com uma letra que Isaac Watts escreveu em 1719. " +
    "As quatro primeiras notas dela são iguais ao início do coro Lift up your heads, do Messias de Handel.",
  funFact: "Isaac Watts escreveu a letra como uma releitura do Salmo 98, e nunca pensou nela como canção de Natal.",
  versions: {
    common: {
      practice: [
        "Toque os 2 primeiros compassos só com a mão direita, um dedo para cada tecla, descendo do Dó até o Fá.",
        "Toque os compassos 1 a 5 com as duas mãos. A mão esquerda termina a escala descendente nos compassos 3 e 4.",
        "Toque os compassos 13 a 16 só com a mão direita. Ali as notas repetidas sobem e descem.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Cada dedo desce uma tecla: 5, 4, 3, 2 e depois o polegar.",
        "A melodia pula para a mão esquerda por duas notas. Deixe a mão esquerda cantar essas notas, forte e claro.",
        "Conte as notas repetidas por igual, como sinos que tocam um depois do outro.",
      ],
      tricky: {
        3: "O polegar desliza do Fá para o Mi. Depois a mão esquerda toca Ré e Dó.",
        17: "Levante a mão depois do Mi, e coloque o mínimo no Dó agudo.",
        20: "O polegar desliza do Ré para o último Dó. Segure até o fim.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda. Ela segura um acorde em cada metade do compasso.",
        "Junte as mãos nos compassos 13 a 16, onde estão as notas repetidas.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Longa, longa, curta: o Lá é rápido, e leva ao Sol longo.",
        "Toque o Fá curto e levante a mão. O dedo 3 cai no Mi, pronto para descer até o Dó.",
        "A melodia sobe um grau de cada vez, do Lá ao Si e ao Dó. Deixe a música ficar um pouco mais forte a cada nota.",
      ],
      tricky: {
        3: "A mão desceu: o dedo 3 toca o Mi, o dedo 2 toca o Ré, e o polegar espera o Dó.",
        19: "O polegar toca o Mi, e depois desliza para o Ré.",
        20: "O polegar desliza para baixo mais uma vez, até o último Dó. Segure até o fim.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque os 4 primeiros compassos só com a mão direita. No compasso 3, o dedo 3 cruza por cima do polegar.",
        "Toque as terças dos compassos 13 a 16 só com a mão direita, e pressione as duas notas como se fossem uma.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a escala descendente soar clara por cima.",
        "A melodia é a nota de cima de cada terça, então deixe o dedo de cima conduzir.",
        "Troque o pedal no início e no meio de cada compasso, quando a mão esquerda recomeça o padrão.",
      ],
      tricky: {
        17: "O polegar passa por baixo do dedo 3 até o Mi. Depois o mínimo se estica até o Dó agudo.",
        18: "Depois que o polegar toca o Fá, o dedo 3 cruza por cima dele até o Mi.",
        20: "Levante as duas mãos depois do Si e do Ré. Depois caia no último acorde, com a mão esquerda em oitavas.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava, e volte para cima até o acorde.",
        "Toque só os acordes da mão direita, e deixe o mínimo cantar a melodia.",
        "Toque as oitavas dos compassos 13 a 19 só com a mão direita. Mantenha a mão aberta e leve.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a nota do baixo e deixe a mão achar o acorde pelo tato.",
        "A passagem rápida do Dó até o Sol é um enfeite. Deixe que ela brilhe, e então caia no Sol.",
        "Nas oitavas, toque o mínimo um pouco mais forte, para a melodia brilhar em cima.",
      ],
      tricky: {
        5: "Do Sol agudo, a mão cai em Dó, Fá e Lá. O mínimo sobe uma tecla, até o Lá.",
        6: "O acorde inteiro sobe uma tecla: Dó, Fá e Lá viram Ré, Sol e Si. Mantenha a posição da mão.",
        9: "O polegar desce do Mi para o Dó, enquanto o dedo de cima cai do Dó agudo para o Sol.",
      },
    },
  },
};

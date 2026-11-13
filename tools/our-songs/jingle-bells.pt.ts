/** The guide of *Jingle Bells* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "James Lord Pierpont publicou esta canção em Boston em 1857, com o título One Horse Open Sleigh. " +
    "Ela conta um passeio rápido pela neve, num trenó puxado por um só cavalo. " +
    "A canção nunca fala do Natal, mas se tornou uma das canções de Natal mais conhecidas do mundo.",
  funFact: "Em 1965, dois astronautas tocaram Jingle Bells no espaço, com uma pequena gaita e um punhado de sininhos.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita, devagar, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. Ali a melodia sobe até o Fá.",
        "Junte as mãos. A mão esquerda segura uma nota grave ou uma quinta em cada compasso.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Curta, curta, longa: o terceiro Mi dura dois tempos, como o tilintar de um sino.",
        "Aqui cada dedo tem sua própria tecla: o polegar no Dó, o mínimo no Sol.",
        "Vá um pouco mais devagar nas últimas notas, e deixe o Dó grave soar.",
      ],
      tricky: {
        5: "O dedo 4 toca o Fá três vezes, enquanto o mínimo esquerdo desce até o Fá grave.",
        13: "Os Fás voltam. Mantenha o dedo 4 no Fá, e desça de novo o mínimo esquerdo até o Fá grave.",
        15: "O dedo 5 toca o Sol duas vezes. Depois os dedos 4 e 2 descem, prontos para o último Dó do polegar.",
      },
    },
    rare: {
      practice: [
        "Bata palmas no ritmo do compasso 3. Depois toque só a mão direita.",
        "Toque só a mão esquerda, e segure cada acorde até o próximo.",
        "Junte as mãos nos compassos 5 a 8, onde estão as notas rápidas.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Longa, curta: o Dó dura um tempo e meio, e o Ré vem logo depois.",
        "Os dois últimos Mis são colcheias. Pense em um tempo dividido em dois.",
        "Toque a nota do baixo da mão esquerda um pouco mais forte que o acorde que vem depois.",
      ],
      tricky: {
        5: "Quatro Fás com o dedo 4: o último é rápido, e leva direto ao compasso 6.",
        9: "Seu mínimo esquerdo desliza de volta, subindo do Si para o Dó, quando a melodia recomeça.",
        13: "Os Fás voltam. Deixe o dedo 4 quicar no Fá, e conte o último, que é curto.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só as terças e sextas da mão direita, e mantenha juntas as duas notas de cada par.",
        "Junte as mãos nos 4 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para os sinos da melodia soarem por cima.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
        "Troque o pedal no início e no meio de cada compasso, quando a mão esquerda recomeça o padrão.",
      ],
      tricky: {
        12: "Depois da terça, a mão desce por Sol, Fá, Mi e Ré com os dedos 5, 4, 3 e 2.",
        14: "No tempo 2, a sexta vira terça: o polegar deixa o Lá, e os dedos 2 e 4 pegam Dó e Mi.",
        16: "Levante as duas mãos depois do Ré. Depois caia no último acorde, com a mão esquerda em oitavas.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a nota do baixo, e volte para cima até o acorde.",
        "Toque só os acordes da mão direita, e deixe o mínimo cantar a melodia.",
        "Toque só as passagens rápidas de semicolcheias da mão direita, nos compassos 9 a 12.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a nota do baixo e deixe a mão achar o acorde pelo tato.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
        "Cada passagem cabe em um tempo: quatro notas rápidas, e o sino toca de novo.",
      ],
      tricky: {
        6: "No tempo 2, o polegar e o mínimo descem uma tecla, enquanto o dedo 2 fica no Dó.",
        7: "A melodia desce do Mi para o Ré sobre um Sol e um Si segurados. O dedo 4 pega o Ré.",
        8: "Abra a mão para quatro notas de uma vez: Sol, Si, Fá e Sol. Deixe o mínimo cantar.",
      },
    },
  },
};

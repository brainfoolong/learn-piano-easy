/** The guide of *O du fröhliche* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "O du fröhliche quer dizer “Ó alegre”, e é uma das canções de Natal alemãs mais conhecidas. " +
    "Johannes Daniel Falk, de Weimar, escreveu a primeira estrofe para as crianças abandonadas que acolheu em sua casa. " +
    "Falk a adaptou à melodia de O sanctissima, uma canção à Virgem Maria impressa pela primeira vez em Londres em 1792.",
  funFact: "No início, Falk escreveu a canção para as três grandes festas cristãs, com uma estrofe para o Natal, uma para a Páscoa e uma para Pentecostes.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 9 a 16 só com a mão direita. Ali a melodia sobe grau a grau.",
        "Agora só a mão esquerda. Ela segura uma quinta ou um Fá sozinho.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Longa, curta: segure o Sol, e depois deixe o Fá rápido cair no Mi.",
        "Toque o segundo Sol com o dedo 2, e não com o 3. Assim a mão fica pronta para subir até o Dó.",
        "Tire o polegar do Fá um pouco antes, e deixe o dedo 3 cair no Mi abaixo.",
      ],
      tricky: {
        7: "Os dedos 4 e 3 descem de volta do Si para o Lá. Mantenha a mão parada sobre suas cinco teclas.",
        12: "O dedo 4 toca o Sol, o dedo 5 o Lá rápido, e depois o dedo 2 pega o Sol, pronto para o Dó agudo.",
        15: "Depois do Fá curto, o dedo 3 cai no Mi, e o dedo 2 no Ré.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as notas de cada acorde.",
        "Toque só a mão direita na música inteira.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A mão esquerda quase não se move. O dedo 5 no Dó e o dedo 4 no Ré se revezam, e o polegar fica no Sol.",
        "Aqui a frase descansa no Sol. Deixe as duas notas soarem pelo compasso inteiro.",
        "A melodia desce a partir do Dó duas vezes. Na segunda vez, toque um pouco mais forte.",
      ],
      tricky: {
        6: "A mão direita sobe por Lá, Si e Dó com os dedos 3, 4 e 5, enquanto a mão esquerda passa do Fá para o Sol.",
        12: "O dedo 4 toca o Sol, o dedo 5 o Lá rápido, e depois o dedo 2 pega o Sol, pronto para o Dó agudo.",
        15: "Depois do Fá curto, o dedo 3 cai no Mi, e o dedo 2 no Ré.",
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
        "Troque o pedal a cada meio compasso, quando soa a nova nota do baixo.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        17: "A mão salta uma oitava acima. Caia em Mi e Sol com os dedos 3 e 5, e depois abra para a sexta Dó e Lá.",
        22: "Os dedos 2 e 4 pegam Fá e Lá, a mão abre para a sexta Ré e Si, e o dedo 5 alcança o Dó.",
        32: "Levante a mão na pausa curta, e depois abra-a sobre Mi, Sol e Dó para o último acorde.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava, e volte para cima até o acorde.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque só os arpejos da mão esquerda, na segunda estrofe.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava e deixe a mão achar o acorde pelo tato.",
        "As oitavas devem soar como sinos de igreja. Mantenha o pulso solto.",
        "Em cada arpejo, o dedo 3 cruza por cima do polegar na subida.",
      ],
      tricky: {
        6: "O acorde sobe do Fá para o Sol, e o dedo mínimo sobe do Si para o Dó agudo.",
        8: "O acorde se acomoda no Sol. O polegar desce até o Si, e o dedo mínimo desce do Lá para o Sol.",
        14: "Solte o Lá um pouco antes, para a mão ter tempo de descer até o acorde de Sol.",
      },
    },
  },
};

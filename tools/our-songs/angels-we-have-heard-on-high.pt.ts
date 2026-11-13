/** The guide of *Angels We Have Heard on High* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Angels We Have Heard on High é uma canção de Natal tradicional francesa. " +
    "Em francês ela se chama Les Anges dans nos campagnes, que quer dizer “Os anjos nos nossos campos”. " +
    "A impressão mais antiga que se conhece, com letra e notas, é de 1842, numa coleção de Louis Lambillotte. " +
    "A letra em inglês é uma paráfrase de 1862 feita por James Chadwick, o bispo católico de Hexham e Newcastle.",
  funFact:
    "No refrão Gloria in excelsis Deo, o “o” de Gloria é sustentado por uma longa passagem de notas que sobem e descem.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque o Gloria, compassos 5 a 7, só com a mão direita. Deixe as notas rápidas subirem e descerem por igual.",
        "Agora só a mão esquerda. Ela mantém uma posição em cada meio compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Comece com o dedo 3 no Mi. O polegar fica no Dó central, e o dedo 5 no Sol.",
        "Cada nota longa é seguida por quatro rápidas. Conte-as como “um, dois, três, quatro”.",
        "Deixe o último Dó soar pelo compasso inteiro, e levante as duas mãos juntas.",
      ],
      tricky: {
        6: "O dedo 2 toca o Ré, depois o polegar se estica para baixo até o Sol grave. A mão fica onde está.",
        7: "A partir do Sol grave, os dedos 2 a 5 sobem por Dó, Ré, Mi e Fá, uma tecla cada.",
        10: "A mesma subida do compasso 7: os dedos 2 a 5 em Dó, Ré, Mi e Fá.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as notas de cada acorde.",
        "Toque o Gloria, compassos 5 a 7, só com a mão direita. Mantenha as notas rápidas regulares.",
        "Junte as mãos na primeira vez, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A mão esquerda não se move: dedo 5 no Dó, 4 no Ré, 3 no Mi, 2 no Fá e o polegar no Sol.",
        "A mão direita descansa enquanto a mão esquerda toca um acorde de Sol com sétima. Ele leva você de volta ao início.",
        "Na segunda vez, toque a nota grave um pouco mais forte que o acorde que vem depois.",
      ],
      tricky: {
        6: "O dedo 2 toca o Ré, depois o polegar se estica até o Sol grave, enquanto a mão esquerda segura Ré e Fá.",
        9: "As mesmas notas do compasso 6. Mantenha a mão direita parada e deixe o polegar se esticar para baixo.",
        17: "O compasso 6 de novo, agora na segunda vez. Mantenha os acordes suaves sob a melodia.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só os acordes quebrados da mão esquerda, na segunda vez.",
        "Toque o Gloria agudo, compassos 16 a 18, só com a mão direita.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "Levante a mão depois de Sol, Lá e Si, e coloque o dedo 3 no Mi uma oitava acima.",
        "Troque o pedal cada vez que a mão esquerda começa um acorde novo.",
      ],
      tricky: {
        17: "O dedo 2 toca o Ré agudo, e o polegar se estica para baixo até o Sol enquanto a mão esquerda sobe.",
        19: "Agora o Gloria corre no agudo. Deixe os dedos 5, 4, 3 e 2 descerem rolando do Lá até o Mi.",
        20: "O polegar pega o Dó, depois o dedo 2 cai no Ré. Mantenha regulares os acordes quebrados por baixo.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: desça num salto até a oitava grave e suba de volta para o acorde.",
        "Toque só as oitavas da mão direita, e deixe o dedo 5 cantar a melodia.",
        "Toque só o baixo em oitavas quebradas da mão esquerda, na segunda vez.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No baixo stride, olhe para a oitava grave e deixe a mão achar o acorde pelo tato.",
        "Depois de cada oitava, o dedo 5 fica no agudo e conduz as notas rápidas para baixo.",
        "A passagem rápida até o Sol é uma pequena fanfarra. Toque leve e brilhante.",
      ],
      tricky: {
        2: "Levante a mão depois de cada nota isolada, antes da próxima oitava, para ela cair sem se esticar.",
        3: "O início de novo. Mantenha as oitavas regulares enquanto a mão esquerda salta.",
        11: "Quatro notas rápidas correm do Dó até o Fá, e o dedo 5 cai no Sol. Embaixo, o baixo stride continua.",
      },
    },
  },
};

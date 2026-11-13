/** The guide of *Happy Birthday to You* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mildred J. Hill escreveu esta melodia para Good Morning to All, uma canção de bom-dia para turmas do jardim de infância. " +
    "Ela a publicou em 1893 em Song Stories for the Kindergarten, um livro que fez com a irmã, Patty. " +
    "A versão de aniversário cantada hoje acrescenta duas notas à terceira frase, com um salto de uma oitava.",
  funFact:
    "Em 2015, um tribunal dos Estados Unidos decidiu que a empresa que cobrava pela canção de aniversário não tinha direitos autorais válidos sobre a letra.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita, devagar, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 5 a 9, onde a melodia salta para o agudo.",
        "Junte as mãos. A mão esquerda só segura uma quinta ou uma única nota.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Dos dois Sóis do começo, o primeiro é longo e o segundo é curto. O curto leva ao compasso seguinte.",
        "Seu polegar fica no Sol, e cada dedo tem a sua própria tecla, até o Ré.",
        "Levante a mão depois do segundo Sol, e caia com o dedo mínimo no Sol agudo.",
      ],
      tricky: {
        2: "O dedo 2 toca o Lá, o polegar volta para o Sol, e o dedo 4 se estica até o Dó.",
        6: "Caia com o dedo mínimo no Sol agudo, e depois desça para Mi e Dó com os dedos 4 e 2.",
        7: "Seu polegar toca o Si e depois escorrega para baixo, até o Lá. Levante a mão antes dos dois Fás.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as três notas de cada acorde.",
        "Toque só o baixo de valsa da segunda estrofe: nota grave, acorde, acorde.",
        "Junte as mãos na primeira estrofe, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "O dedo mínimo se estica uma oitava inteira acima do polegar. A mão se abre e depois se fecha de novo.",
        "Depois do Dó longo, leve o polegar até o Sol. A segunda estrofe começa uma oitava acima.",
        "No baixo de valsa, toque a nota grave um pouco mais forte que os acordes depois dela.",
      ],
      tricky: {
        7: "Seu polegar toca o Si e depois escorrega para baixo, até o Lá, e o dedo 4 se estica para cima, até o Fá.",
        9: "Segure o Dó, e depois leve o polegar para cima, até o próximo Sol, para a segunda estrofe.",
        15: "O polegar escorrega de novo do Si para o Lá, agora uma oitava acima.",
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
        "A melodia é a nota de cima de cada par. Por isso, deixe o dedo de cima conduzir.",
        "O baixo de valsa solta cada nota. O pedal une as notas, então troque o pedal no começo de cada compasso.",
      ],
      tricky: {
        12: "Os pares descem grau a grau, e depois os dedos 3 e 5 saltam para cima, até Si e Ré.",
        15: "Depois dos dois pares graves, estique os dedos 3 e 5 para cima, até o Ré e o Fá agudos.",
        17: "Desça a mão para o último acorde: polegar no Mi, dedo 2 no Sol e dedo mínimo no Dó.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava, e depois volte para cima até o acorde.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque só os arpejos da mão esquerda, na segunda estrofe.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava e deixe a mão encontrar o acorde pelo tato.",
        "Toque as oitavas um pouco separadas, como sinos, e deixe o pedal uni-las.",
        "Em cada arpejo, o dedo 3 cruza por cima do polegar na subida.",
      ],
      tricky: {
        7: "Levante a mão depois do Lá, para ela poder se abrir no acorde com o Fá em cima.",
        10: "As oitavas começam enquanto a mão esquerda faz o primeiro arpejo. Pratique primeiro cada mão sozinha.",
        15: "Mantenha a posição de oitava enquanto a mão salta até o Fá, e deixe o baixo fluir sob ela.",
      },
    },
  },
};

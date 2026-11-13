/** The guide of *O Christmas Tree* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "O título alemão O Tannenbaum quer dizer “Ó pinheiro”. " +
    "A melodia vem de uma antiga canção popular alemã, e ninguém sabe quem a escreveu. " +
    "O professor Ernst Anschütz, de Leipzig, escreveu em 1824 a letra que se canta hoje. " +
    "A canção dele elogia o pinheiro por ficar verde o inverno inteiro.",
  funFact: "A mesma melodia é a do hino oficial do estado de Iowa, e o hino do estado de Maryland a usou até 2021.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 5 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 9 só com a mão direita. Ali a melodia sobe até o Lá.",
        "Agora só a mão esquerda. Ela mantém só duas posições, uma em cada compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Longa, curta, longa: a segunda nota, rápida, se apoia na terceira, como um pulinho.",
        "Seu polegar começa no Sol abaixo do Dó central, e o dedo 2 fica com o Dó central.",
        "Levante a mão antes do Sol grave, e deixe o polegar descer até ele.",
      ],
      tricky: {
        3: "O dedo 4 toca o Mi quatro vezes. Toque leve, para o segundo Mi, que é rápido, ainda soar.",
        4: "Os dedos 3, 4 e 5 sobem até o Fá, e depois o polegar se estica para baixo até o Si.",
        6: "O dedo mínimo toca o Sol, o dedo 3 pega o Mi, e o dedo mínimo se estica para cima até o Lá.",
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
        "Depois do último Dó, o polegar sobe até o próximo Sol. A segunda estrofe começa uma oitava acima.",
        "No baixo de valsa, toque a nota grave um pouco mais forte que os acordes que vêm depois dela.",
        "A frase do meio aparece duas vezes, na segunda vez um grau abaixo. Toque esse eco um pouco mais suave.",
      ],
      tricky: {
        13: "Os dedos 2 e 1 tocam Ré e Dó, e depois o polegar salta para cima até o próximo Sol.",
        16: "Uma oitava acima, os dedos 3, 4 e 5 sobem até o Fá, e o polegar se estica de volta até o Si.",
        24: "A mesma abertura do compasso 16: suba até o Fá, e depois traga o polegar de volta, para baixo, até o Si.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só as sextas da mão direita, e mantenha juntas as duas notas de cada par.",
        "Junte as mãos na primeira estrofe, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
        "Troque o pedal no segundo tempo, quando o acorde passa de Sol para Dó.",
      ],
      tricky: {
        16: "A mão se abre numa sétima, Sol e Fá. Depois o polegar desce do Sol para o Ré, no último par.",
        17: "Depois dos dois pares, o dedo mínimo se estica para cima até o Sol agudo.",
        25: "Abra a mão para os dois últimos acordes, e deixe soar o Dó de cima.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava, e volte para cima até o acorde.",
        "Toque só os acordes da mão direita, e deixe o dedo mínimo cantar a melodia.",
        "Toque só os arpejos da mão esquerda, na segunda estrofe.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava e deixe a mão achar o acorde pelo tato.",
        "No agudo, as oitavas devem soar como sinos. Mantenha o pulso solto.",
        "Em cada arpejo, o dedo 3 cruza por cima do polegar na subida.",
      ],
      tricky: {
        4: "O dedo mínimo toca Ré, Mi e Fá em cima. Depois a mão desce para o acorde de Sol, com o dedo mínimo no Si.",
        5: "Levante a mão depois do acorde de Dó, e estique o dedo mínimo para cima até o Sol agudo.",
        12: "Os mesmos acordes do compasso 4. Mantenha o dedo mínimo na melodia enquanto o polegar desce um grau.",
      },
    },
  },
};

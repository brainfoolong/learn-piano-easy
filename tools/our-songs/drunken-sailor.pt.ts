/** The guide of *Drunken Sailor* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Drunken Sailor é uma canção de marinheiro que as tripulações cantavam enquanto puxavam cordas ou giravam o cabrestante. " +
    "Ninguém sabe quem a escreveu, e sua melodia está no modo dórico.",
  funFact: "O primeiro registro escrito desta canção de marinheiro vem de uma viagem baleeira de 1839, que partiu de New London, em Connecticut.",
  versions: {
    common: {
      practice: [
        "Toque os 4 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. A melodia sobe até o Ré e volta para casa.",
        "Agora só a mão esquerda. Ela segura uma nota grave em cada compasso ou meio compasso.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Cada metade do compasso tem uma nota longa e duas curtas. Marque o ritmo como um marinheiro batendo o pé no convés.",
        "O dedo 5 toca o Lá, e depois o polegar se estica para baixo até o Ré. A mão fica onde está.",
        "Toque o último Lá do compasso 5 com o dedo 2. Assim os dedos 3, 4 e 5 ficam prontos para Si, Dó e Ré.",
      ],
      tricky: {
        3: "O dedo 4 toca o Sol seis vezes: longa, curta, curta, longa, curta, curta. Toque leve as notas curtas.",
        5: "O dedo 5 toca o Lá cinco vezes. Depois o dedo 2 pega o último Lá, para a mão ficar pronta para subir.",
        7: "O dedo 5 desce do Ré para o Dó. Depois os dedos 4, 3 e 2 descem para Lá, Sol e Mi.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave, e depois duas notas no tempo seguinte.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos compassos 9 a 16, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A mão esquerda balança grave, agudo, grave, agudo, como uma tripulação puxando uma corda ao mesmo tempo.",
        "Depois do Ré agudo longo, o dedo 5 desliza para baixo até o Dó. É o único movimento da mão.",
        "Termine com Ré e Fá juntos, e deixe as duas notas soarem.",
      ],
      tricky: {
        3: "O dedo 4 toca o Sol seis vezes, enquanto a mão esquerda toca Dó e depois Sol. Mantenha o ritmo regular nas duas mãos.",
        4: "O polegar se estica para baixo até o Dó, e o dedo 2 toca o Mi. A mão esquerda fica em Dó e Sol.",
        7: "Depois do Ré longo, o dedo 5 desce para o Dó. A mão esquerda toca Dó, depois Fá e Lá, e depois Dó e Sol.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele fluir sozinho: grave, agudo, meio, agudo.",
        "Toque os compassos 9 a 16 só com a mão direita, e passe o polegar por baixo na subida.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada nova nota do baixo, duas vezes por compasso.",
        "Passe o polegar por baixo até o Sol depois que o dedo 3 tocar o Fá.",
        "Agora a melodia é a nota de cima de cada par. Deixe o dedo de cima cantar a melodia.",
      ],
      tricky: {
        7: "O dedo 5 desce do Ré para o Dó, e os dedos 4, 3 e 2 continuam descendo. A mão esquerda toca o acorde quebrado de Fá maior, e depois o de Dó maior.",
        17: "Os dedos 2 e 4 pressionam Fá e Lá juntos. Depois o dedo 4 toca o Lá sozinho, duas vezes.",
        24: "A mão esquerda toca Ré, Fá e Lá juntos, com os dedos 5, 3 e 1. A mão direita segura Fá, Lá e Ré.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: uma oitava no tempo e depois um acorde, cada um com uma pausa curta para saltar.",
        "Toque só as oitavas da mão direita. Mantenha o polegar e o dedo 5 abertos, como uma moldura fixa.",
        "Toque só os arpejos da mão esquerda, e deixe o polegar passar por baixo na descida.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Levante a mão em cada pausa curta, e depois caia na oitava seguinte.",
        "Deixe os arpejos rolarem suaves, como ondas debaixo do navio.",
        "Toque os acordes curtos e firmes, como botas no convés. A nota de cima é a melodia.",
      ],
      tricky: {
        9: "Depois do Fá, o polegar passa por baixo até o Sol. A mão esquerda começa o arpejo no Ré grave.",
        12: "A mão esquerda se estica para baixo até o Lá grave, com o dedo 5. A mão direita começa no Mi, com o polegar.",
        15: "A mão esquerda começa no Fá grave, e depois no Dó. Na mão direita, o polegar toca Fá e depois Mi.",
      },
    },
  },
};

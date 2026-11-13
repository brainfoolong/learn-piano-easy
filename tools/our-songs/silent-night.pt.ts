/** The guide of *Silent Night* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Franz Xaver Gruber escreveu esta melodia para a véspera de Natal de 1818, em Oberndorf, perto de Salzburgo. " +
    "O jovem padre Joseph Mohr tinha escrito a letra, e Gruber a musicou. " +
    "Mohr tocou violão na primeira apresentação, e mais tarde a canção viajou para muito além da Áustria.",
  funFact: "Em 2011, a Comissão Austríaca para a UNESCO incluiu Silent Night na lista do patrimônio cultural imaterial da Áustria.",
  versions: {
    common: {
      practice: [
        "Toque os 4 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 17 a 23 só com a mão direita. Ali a melodia sobe bem alto e desce até o Dó central.",
        "Junte as mãos. A mão esquerda segura uma nota grave ou uma quinta em cada compasso.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "O primeiro Sol é longo, e o Lá é curto. A melodia balança como um berço.",
        "Levante a mão na pausa curta depois do Mi, e alcance o Ré agudo.",
        "Toque suave do começo ao fim. Esta música é uma canção de ninar.",
      ],
      tricky: {
        6: "Depois dos dois Rés, o dedo 4 pega o Si. Mais abaixo, a mão esquerda segura o Sol com o dedo 4.",
        17: "Depois da pausa, a mão se estica para cima a partir do Mi, e o dedo 3 cai no Ré agudo.",
        21: "O dedo 5 desce do Mi para o Dó. Depois a melodia desce até o polegar, no Dó central.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave, depois dois acordes suaves, como uma valsa lenta.",
        "Toque os compassos 17 a 23 só com a mão direita. Ali a melodia sobe bem alto e desce até o Dó central.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Toque os acordes da mão esquerda mais suaves que a nota grave.",
        "Troque o pedal em cada barra de compasso. Solte-o quando a nova nota do baixo soar.",
        "Os dedos 3 e 5 pegam Dó e Mi juntos. Deixe o Mi cantar por cima do Dó.",
      ],
      tricky: {
        17: "A mão direita se estica para cima a partir do Mi, e o dedo 3 cai no Ré agudo.",
        21: "O dedo 5 desce do Mi para o Dó. Depois a melodia desce por Sol e Mi.",
        22: "Os dedos 4, 3 e 2 descem por Sol, Fá e Ré, enquanto a mão esquerda toca seu acorde de Sol com sétima.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque a passagem rápida do compasso 4 só com a mão direita, e passe o polegar por baixo até o Lá.",
        "Toque os pares e os acordes dos compassos 13 a 20 só com a mão direita.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "Os dedos 1, 2 e 3 tocam Mi, Fá e Sol. Depois o polegar passa por baixo até o Lá.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        4: "A passagem sobe do Fá até o Dó. Passe o polegar por baixo do dedo 3 para pegar o Lá.",
        16: "A mesma passagem do compasso 4, agora a partir da terça Dó e Mi. Passe o polegar por baixo até o Lá.",
        21: "A mão cai do acorde para o Dó com o dedo 5, e depois desce até Sol e Mi.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava, e volte para cima até o acorde.",
        "Toque só os acordes da mão direita, e deixe o dedo mínimocantar a melodia.",
        "Toque só as oitavas quebradas da mão esquerda, nos compassos 13 a 16.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a nota do baixo e deixe a mão achar o acorde pelo tato.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
        "Deixe as oitavas quebradas rolarem suaves por baixo da melodia, como um berço que balança.",
      ],
      tricky: {
        5: "Depois da passagem rápida, caia em Sol, Si e Ré com os dedos 1, 3 e 5.",
        9: "A mão se abre sobre Dó, Fá e Lá, e o dedo mínimocanta a melodia.",
        10: "Só o dedo 4 pega o Si entre os acordes. Mantenha o polegar perto do Fá.",
      },
    },
  },
};

/** The guide of *Tochter Zion, freue dich* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Tochter Zion, freue dich significa “Filha de Sião, alegra-te” em alemão. " +
    "George Frideric Handel escreveu o coro See, the conqu'ring hero comes em 1747 para o seu oratório Josué. " +
    "Em 1751, ele o incluiu no seu oratório Judas Macabeu. " +
    "Mais tarde, em Erlangen, Friedrich Heinrich Ranke escreveu uma letra em alemão para a melodia.",
  funFact:
    "Em 1905, Henry Wood usou a melodia na sua Fantasia on British Sea Songs, uma peça que se ouve muitas vezes na Last Night of the Proms.",
  versions: {
    common: {
      practice: [
        "Toque os 4 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 9 a 16 só com a mão direita. Ali a melodia desce até o Si.",
        "Agora só a mão esquerda. Ela mantém cada posição por meio compasso ou mais.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "O compasso 3 sobe por Ré, Mi, Fá e Sol, e depois desce de volta. Toque por igual as quatro notas que sobem.",
        "Levante a mão depois do Sol do compasso 6. O dedo 5 cai no Fá, e a mão desce até o Dó.",
        "O último Dó do compasso 13 é curto. Use a pausa para subir a mão, com o dedo 4 no Lá.",
      ],
      tricky: {
        7: "O dedo 5 cai no Fá depois de levantar a mão, e depois os dedos 4 e 3 tocam Mi e Ré.",
        14: "O dedo 4 toca o Lá, e o dedo 2 toca o Fá sustenido, a tecla preta entre Fá e Sol.",
        19: "O mesmo movimento do compasso 7: levante a mão depois do Sol, e deixe o dedo 5 cair no Fá.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as notas de cada acorde.",
        "Toque os compassos 9 a 16 só com a mão direita. A melodia se volta para o Sol, com dois Fás sustenidos.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Toque os acordes mais suaves que a melodia, para ela se destacar como um toque de trompete.",
        "Aqui a mão esquerda troca de acorde no meio do compasso. Conte até quatro, e troque no três.",
        "No compasso 14, o dedo 2 da mão esquerda pega o Fá sustenido, e no compasso 15 volta para o Fá.",
      ],
      tricky: {
        7: "Levante a mão depois do Sol, deixe o dedo 5 cair no Fá, e pressione o acorde de Sol com a mão esquerda.",
        14: "As duas mãos tocam um Fá sustenido. O dedo 2 de cada mão pega a tecla preta.",
        19: "O mesmo movimento do compasso 7: levante a mão depois do Sol, e deixe o dedo 5 cair no Fá.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só os acordes quebrados da última parte, e levante a mão em cada pausa.",
        "Junte as mãos nos compassos 1 a 16, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "As duas mãos se levantam no fim do compasso 16. A mão direita salta uma oitava para cima, e a esquerda desce até um Dó grave.",
        "Troque o pedal a cada tempo, quando a mão esquerda começa um novo grupo de quatro.",
      ],
      tricky: {
        7: "Levante a mão depois do Sol, e deixe o dedo 5 cair no Fá, enquanto o baixo Alberti passa para o Sol.",
        17: "A melodia recomeça uma oitava acima, enquanto a mão esquerda começa seus acordes quebrados no Dó grave.",
        23: "Os dedos 5, 4 e 3 descem por Fá, Mi e Ré. Levante a mão no último Ré para chegar ao acorde final.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava grave, e depois volte para cima até o acorde.",
        "Toque os compassos 1 a 8 só com a mão direita, e mantenha leves os grupos rápidos de notas.",
        "Toque só os arpejos da última parte, com a mão esquerda.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava grave e deixe a mão achar o acorde pelo tato.",
        "O grupeto no fim do compasso 4 enfeita o Ré longo. Toque-o mais suave que a melodia.",
        "Mantenha o polegar e o dedo mínimo a uma oitava de distância, e deixe o pulso quicar.",
      ],
      tricky: {
        3: "A melodia sobe por Ré, Mi, Fá e Sol uma oitava acima, enquanto o baixo stride salta por baixo.",
        7: "Levante a mão depois do Sol, deixe o dedo 5 cair no Fá, e desça enquanto o baixo stride passa para o Sol.",
        11: "A mão esquerda passa de Dó para Sol no meio do compasso. Mantenha o stride regular.",
      },
    },
  },
};

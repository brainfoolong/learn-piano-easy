/** The guide of *Air on the G String* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Bach escreveu esta ária como o movimento lento da sua Terceira Suíte para Orquestra. " +
    "Em 1871, o violinista August Wilhelmj fez um arranjo para que um violino tocasse a melodia inteira na sua corda mais grave, a corda Sol. " +
    "O filme Se7en (1995) usa a música enquanto dois detetives olham fotos de um crime.",
  funFact:
    "Wilhelmj escreveu “auf der G-Saite”, ou seja, “na corda Sol”, acima da parte do violino, e daí veio o apelido da peça.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 4 só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. A melodia salta para baixo e sobe de novo.",
        "Agora só a mão esquerda. Ela segura uma nota do baixo ou uma quinta aberta de cada vez.",
        "Junte as mãos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Segure o primeiro Mi por um compasso inteiro e escute. Um violino canta esta nota numa só arcada longa.",
        "Tire o polegar do Dó por um instante. Aí o dedo 2 cai no Si, e a mão fica ali.",
        "Cada nota longa ocupa um compasso inteiro. Conte oito tempos lentos e espere mais um antes da próxima nota.",
      ],
      tricky: {
        3: "Tire o polegar do Dó por um instante e depois toque o Si com o dedo 2.",
        8: "Depois da pausa, o dedo 4 toca o Ré. Em seguida, o polegar desce até o Sol.",
        9: "A mão esquerda se estica para baixo até o Fá com o dedo 5, enquanto o dedo 2 fica no Dó.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda. A nota do baixo vem primeiro, e o acorde de duas notas responde.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito. A melodia vem duas vezes.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "O baixo desce um grau de cada vez sob o Mi longo. Toque-o suave e ligado.",
        "Tire o polegar do Dó por um instante, para o dedo 2 poder cair no Si.",
        "Os três últimos compassos são nossos. Eles levam a melodia de volta para casa, em Dó maior.",
      ],
      tricky: {
        6: "Depois da pausa, o dedo 5 pega o Mi. Em seguida, os dedos 2 e 1 tocam Si bemol e Lá.",
        14: "O mesmo movimento do compasso 6: o dedo 5 no Mi, depois o Si bemol com o dedo 2.",
        19: "A mão direita toca Dó e Mi juntos. A mão esquerda se abre sobre Dó, Mi e Sol com os dedos 5, 3 e 1.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só as terças e sextas da mão direita, e pressione as duas notas de cada par como uma só.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave e regular, para as notas longas flutuarem por cima.",
        "O Sol do baixo faz atrito com o Fá sustenido logo acima. Bach escreveu esse atrito, então deixe soar.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        5: "Aproveite a pausa no fim do compasso 4 para subir a mão esquerda até o Fá sustenido.",
        13: "A mão esquerda sobe de novo depois da pausa. Depois a mão direita se abre numa sexta, Dó e Lá.",
        14: "Toque cada par como uma só nota, e deixe o dedo de cima cantar a melodia. O polegar pega a maioria das notas mais graves.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda. Ela salta de cada nota do baixo até a oitava acima e volta.",
        "Toque só os acordes da mão direita nos compassos 9 e 10, e deixe o dedo de cima cantar.",
        "Toque a segunda metade com as duas mãos, devagar. Ali a melodia está uma oitava acima.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Mantenha o dedo 5 na nota grave do baixo e o polegar na oitava dela. O dedo 2 preenche a nota do meio.",
        "O Sol do baixo faz atrito com o Fá sustenido logo acima. Bach escreveu esse atrito, então deixe soar.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
      ],
      tricky: {
        9: "Aproveite a pausa do início para subir a mão uma oitava. Depois pegue quatro notas com os dedos 1, 2, 3 e 5.",
        16: "Depois da pausa, os dedos 3 e 5 pegam Dó sustenido e Mi. Em seguida, o polegar desce até o Sol e sobe de novo.",
        17: "O dedo 5 sobe até o Si agudo. A mão esquerda aproveita a pausa para saltar até o Sol grave.",
      },
    },
  },
};

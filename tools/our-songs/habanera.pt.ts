/** The guide of *Habanera* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Carmen canta esta ária quando aparece pela primeira vez na ópera Carmen, de Georges Bizet, estreada em Paris em 1875. " +
    "Bizet tirou a melodia de uma canção de Sebastián Iradier, achando que era uma canção folclórica. " +
    "O filme The Bad News Bears (1976) usa a música de Carmen do começo ao fim.",
  funFact: "A habanera é uma dança de Cuba, e o seu nome vem de Havana, a capital.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos compassos 1 a 5, e deixe a música esperar cada nota.",
        "Toque só a mão direita do compasso 5 ao 9, mais embaixo, na nova posição.",
        "Agora só a mão esquerda. Ela mantém uma posição por compasso e nunca sai do lugar.",
        "Junte as mãos nos 10 primeiros compassos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Cada dedo toca uma tecla, do 5 até o polegar. A melodia desliza para baixo, grau a grau.",
        "Levante a mão por um instante depois do Si bemol, e pouse o dedo 5 no Lá.",
        "Toque a descida lenta e macia, como um gato se espreguiçando.",
      ],
      tricky: {
        5: "Aqui a mão desce. Levante-a depois do Si bemol, e depois pouse o dedo 5 no Lá.",
        15: "O mesmo movimento do compasso 5: levante a mão depois do Si bemol, e depois pouse o dedo 5 no Lá.",
        20: "Depois da pausa, o dedo 5 toca o Lá e o dedo 3 toca o Sol. O dedo 4 espera.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita nos compassos 2 a 6, devagar, e conte três tempos em cada compasso.",
        "Toque só a mão direita nos compassos 7 a 9, onde vem o pequeno grupeto.",
        "Toque só a mão esquerda. Os seus cinco dedos ficam em Ré, Mi, Fá, Sol e Lá.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Um Lá longo, depois dois curtos. Pense “taa, ta-ta”.",
        "O grupeto Fá, Sol, Fá usa os dedos 2, 3 e 2. Mantenha-os perto das teclas.",
        "Levante a mão depois do Si bemol, e pouse o dedo 5 no Lá.",
      ],
      tricky: {
        5: "Depois do movimento, o dedo 5 pousa no Lá e o toca mais duas vezes, curto e rápido.",
        15: "Igual ao compasso 5: pouse o dedo 5 no Lá, e depois toque os dois Lás curtos.",
        20: "Depois da pausa, o dedo 5 toca o Lá e o dedo 3 toca o Sol. O dedo 4 espera.",
      },
    },
    epic: {
      practice: [
        "Toque só o ritmo de habanera na mão esquerda: longo, curto e depois duas notas regulares.",
        "Toque só as terças da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Junte as mãos nos compassos 1 a 6, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A nota curta da mão esquerda leva ao próximo compasso. Deixe-a quicar.",
        "A melodia é a nota de cima de cada terça, então deixe o dedo de cima conduzir.",
        "Toque o baixo suave e leve, como os passos de quem dança por baixo da voz.",
      ],
      tricky: {
        5: "A mão direita desce até o Lá enquanto a mão esquerda começa o seu Ré longo. Pratique as duas juntas, devagar.",
        17: "Aqui as terças giram rápido. Alterne entre os dedos 1 e 3 e os dedos 2 e 4.",
        20: "Depois da pausa, os dedos 2 e 4 pegam Fá e Lá. Depois as terças descem.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: a oitava grave, o Lá curto e depois dois acordes.",
        "Toque só as oitavas da mão direita. Mantenha a mão aberta e mova-a como uma peça só.",
        "Junte as mãos na segunda vez, onde a melodia sobe uma oitava.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Olhe para a oitava grave, e deixe a mão achar os acordes pelo tato.",
        "O polegar e o dedo mínimo pegam cada oitava. Deslize os dois juntos para baixo, uma tecla de cada vez.",
        "Toque a nota de cima de cada oitava um pouco mais forte, para a melodia cantar.",
      ],
      tricky: {
        12: "A mão direita salta para cima, até a oitava de Ré. Use a pausa do compasso 11 para chegar até ela.",
        17: "Aqui as oitavas giram rápido. Deixe o pulso solto, e deixe o braço guiar a mão.",
        21: "O polegar e o dedo mínimo alcançam as teclas pretas para o Dó sustenido. Leve a mão um pouco para a frente.",
      },
    },
  },
};

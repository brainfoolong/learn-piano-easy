/** The guide of *Lacrimosa* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart morreu em 1791, enquanto escrevia o seu Réquiem. " +
    "O aluno dele, Franz Xaver Süssmayr, terminou a obra, e a Breitkopf & Härtel imprimiu a partitura em 1800. " +
    "O filme Amadeus conta como Mozart escreveu este Réquiem.",
  funFact: "O rascunho que o próprio Mozart fez do Lacrimosa se interrompe depois dos oito primeiros compassos.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. Eles respondem à melodia com uma frase nova.",
        "Agora só a mão esquerda. Ela mantém uma posição por meio compasso de cada vez.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Levante a mão logo antes do Fá agudo. Depois o dedo 5 cai nele com suavidade.",
        "Cada par de notas que desce é um suspiro. Toque a primeira nota um pouco mais forte que a segunda.",
        "Cada dedo fica na sua própria tecla. O dedo 2 sempre toca o Dó sustenido.",
      ],
      tricky: {
        1: "Abra a mão direita do Lá até o Fá. Levante a mão por um instante antes de o dedo 5 tocar o Fá.",
        7: "No meio do compasso, a mão esquerda passa do Lá para o Sol. O dedo 5 pega o Sol grave.",
        15: "Os dedos 5, 4 e 2 descem do Fá até o Dó sustenido. Na nota longa, a mão esquerda passa para o Lá.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda. Cada acorde vem duas vezes: longo, depois curto.",
        "Junte as mãos nos 12 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Conte seis tempos em cada compasso. A mão esquerda toca nos tempos 1, 3, 4 e 6.",
        "Deixe a mão esquerda balançar de leve, como um barco lento, e mantenha-a mais suave que a melodia.",
        "O dedo 5 se estica até o Sol por uma nota, e depois a mão volta.",
      ],
      tricky: {
        11: "Toque o Mi duas vezes com o dedo 4. Levante um pouco o dedo entre as duas notas.",
        12: "Estique o dedo 5 até o Sol. Depois deixe os dedos 4 e 2 voltarem para Mi e Dó sustenido.",
        17: "O Lá grave fica. O polegar deixa o Ré, e o dedo 2 toca o Dó sustenido logo abaixo dele.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda. Cada tempo começa na nota do baixo, e depois balança entre duas notas mais agudas.",
        "Toque só as sextas da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Junte as mãos nos 12 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada nova nota do baixo, duas vezes por compasso.",
        "O Si bemol do baixo faz atrito com o Lá segurado. Esse atrito triste é de propósito.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        13: "Os pares se abrem de uma terça para uma sexta. Os dedos 2 e 5 pegam Lá e Fá juntos.",
        25: "A melodia salta uma oitava acima. Leve o polegar do Lá grave ao Lá agudo, num arco suave.",
        29: "No meio deste compasso, o dedo 2 fica no Si bemol, e o polegar acrescenta o Sol logo abaixo.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: a oitava, duas notas rápidas e depois uma pausa curta para saltar.",
        "Toque só as oitavas da mão direita. Mantenha a mão aberta, com o polegar e o mínimo prontos.",
        "Junte as mãos nos 12 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Use a pausa curta no fim de cada tempo para saltar até a próxima oitava.",
        "Deixe o mínimo cantar um pouco mais forte a nota de cima de cada oitava.",
        "Toque o último acorde suave, e segure até o som sumir.",
      ],
      tricky: {
        13: "Os pares se abrem de uma terça para uma sexta. Os dedos 2 e 5 pegam Lá e Fá juntos.",
        25: "Começam as oitavas. Abra a mão, com o polegar no Lá grave e o mínimo no Lá de cima.",
        27: "Use a pausa curta depois do Lá para saltar até a oitava de Fá.",
      },
    },
  },
};

/** The guide of *Süßer die Glocken nie klingen* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Süßer die Glocken nie klingen quer dizer, em alemão, “Os sinos nunca soam mais doces”. " +
    "O teólogo e professor Friedrich Wilhelm Kritzinger escreveu a letra. " +
    "Bernhard Brähmig imprimiu a canção pela primeira vez em 1860, na sua coletânea Liederstrauß, com o título Die Weihnachtsglocken. " +
    "A melodia é a canção folclórica Seht, wie die Sonne dort sinket, conhecida na Turíngia.",
  funFact: "Antes de tocar no Natal, a melodia cantava o entardecer: o título da canção folclórica quer dizer “Veja como o sol se põe ali”.",
  versions: {
    common: {
      practice: [
        "Toque os 4 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. Ali a mão salta até o Dó agudo.",
        "Agora só a mão esquerda. Ela mantém uma ou duas posições em cada compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Cada dupla pontuada é uma nota longa e uma rápida, como um sino que balança e toca.",
        "Depois que o polegar toca o Dó, a mão inteira salta uma oitava para cima, e o dedo 5 cai no Dó agudo.",
        "Os compassos 11 e 12 repetem os compassos 9 e 10. Toque-os um pouco mais suaves, como um eco.",
      ],
      tricky: {
        6: "O polegar solta o Dó cedo, e o dedo 5 cai no Dó agudo. Depois o dedo 4 toca o Lá.",
        8: "O polegar desce do Ré para o Dó e o segura. Conte a nota longa até o fim.",
        16: "O mesmo movimento do compasso 8: o polegar desce do Ré para o Dó, e a música termina.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as três notas de cada acorde.",
        "Toque os compassos 9 a 16 só com a mão esquerda, com um acorde em cada metade do compasso.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Segure cada acorde suave, para a melodia ressoar clara por cima.",
        "Agora a mão esquerda toca um acorde em cada metade do compasso. Conte “um, dois”, e pressione em cada tempo.",
        "O polegar esquerdo sobe até o Lá para o acorde de Fá, enquanto a mão direita salta até o Dó agudo.",
      ],
      tricky: {
        8: "O polegar direito desce do Ré para o Dó, enquanto a mão esquerda volta para o acorde de Dó.",
        14: "O dedo 5 salta até o Dó agudo, e o polegar esquerdo sobe até o Lá para o acorde de Fá.",
        16: "O polegar desce até o Dó, e as duas mãos seguram o último acorde de Dó até o fim.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só os acordes quebrados, na segunda vez, e levante a mão em cada pausa.",
        "Junte as mãos na primeira vez, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia soar por cima como um sino.",
        "As duas mãos se levantam na pausa. A mão direita salta uma oitava para cima, e a esquerda desce até um Dó grave.",
        "Troque o pedal a cada meio compasso, quando a mão esquerda começa um novo acorde.",
      ],
      tricky: {
        17: "A melodia recomeça uma oitava acima, enquanto a mão esquerda começa seus acordes quebrados no Dó grave.",
        24: "Segure o Dó longo enquanto o acorde quebrado continua rolando. Levante a mão esquerda na pausa do final.",
        32: "O polegar solta o Ré cedo. Depois a mão cai no último acorde, com o dedo 5 no Dó.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava grave, e volte para cima até o acorde.",
        "Toque os compassos 1 a 8 só com a mão direita, e mantenha leve a passagem rápida.",
        "Toque só os arpejos da mão esquerda, na segunda vez.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava grave e deixe a mão achar o acorde pelo tato.",
        "A passagem rápida depois do Mi longo é um pequeno repique de sinos. Toque-a mais suave que a melodia.",
        "Mantenha o polegar e o mínimo a uma oitava de distância, e deixe o pulso quicar.",
      ],
      tricky: {
        6: "A mão direita salta até o Dó agudo, enquanto o baixo stride salta para baixo até um Fá grave.",
        7: "O Lá rápido fica entre os dois Sóis. Mantenha o dedo 4 leve, enquanto o baixo stride muda para Sol.",
        14: "O mesmo salto do compasso 6. Solte o Dó na hora certa, para a mão cair com calma no Dó agudo.",
      },
    },
  },
};

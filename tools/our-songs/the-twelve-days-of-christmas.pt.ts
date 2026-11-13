/** The guide of *The Twelve Days of Christmas* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The Twelve Days of Christmas é uma canção de Natal inglesa e também uma cantiga infantil. " +
    "A letra foi impressa pela primeira vez em Londres em 1780, num livro infantil chamado Mirth Without Mischief. " +
    "A melodia que se canta hoje vem do cantor inglês Frederic Austin, e o arranjo dele foi publicado em 1909.",
  funFact:
    "Antigamente, as pessoas usavam a canção como jogo de memória. Cada jogador repetia os presentes, e cada erro custava uma prenda, como um beijo ou um doce.",
  versions: {
    common: {
      practice: [
        "Toque os 3 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 4 a 7 só com a mão direita, dos anéis de ouro até o Lá grave.",
        "Agora só a mão esquerda. Ela só troca de posição no começo e no meio de cada compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "O polegar toca os três Sóis graves, e o dedo 2 pega cada Dó do compasso 2.",
        "Segure o Sol longo pelo compasso inteiro, enquanto conta até oito. É o anel de ouro.",
        "Depois da pausa curta, o polegar cai no Lá grave. O dedo 5 já soltou o Fá um instante antes.",
      ],
      tricky: {
        3: "Os dedos 3, 4 e 5 sobem até o Fá. Depois o polegar desliza para cima até o Ré, e o dedo 2 segura o Mi longo.",
        4: "O dedo 3 segura o Sol, e depois o dedo 5 alcança o Lá mais acima. A mão esquerda passa da quinta para um Ré sozinho.",
        6: "Toque o Sol de novo com o dedo 5, e depois desça até o Dó, que fica com o polegar. Levante a mão antes do Lá grave.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda na primeira estrofe, e pressione juntas as notas de cada acorde.",
        "Toque os compassos 3 a 5 só com a mão direita, onde os anéis de ouro sobem até Lá e Fá sustenido.",
        "Junte as mãos na primeira estrofe, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "O dedo 4 toca o Fá sustenido, uma tecla preta. Depois o dedo 5 cai no Sol longo.",
        "Depois do Sol grave, a mão sobe para o dedo 2 tocar o Mi. O Sol é longo, então há tempo.",
        "Na segunda estrofe, toque a nota grave um pouco mais forte que o acorde depois dela.",
      ],
      tricky: {
        3: "Os dedos 3, 4 e 5 sobem até o Fá. Depois o polegar desliza para cima até o Ré, e o dedo 2 segura o Mi longo.",
        10: "O polegar deixa o último Dó e cai no Sol grave para a próxima estrofe. A mão esquerda toca Dó, depois Ré e Fá.",
        12: "As mesmas notas do compasso 3, agora sobre um baixo e um acorde que se alternam.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só os acordes quebrados da mão esquerda, na segunda estrofe.",
        "Junte as mãos na primeira estrofe, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia soar por cima.",
        "Aqui as duas mãos descem. O polegar direito cai no Sol grave, e a mão esquerda também cai num Sol grave.",
        "Troque o pedal a cada meio compasso, quando a mão esquerda começa um novo acorde.",
      ],
      tricky: {
        12: "Os dedos 3, 4 e 5 sobem até o Fá, e o polegar desliza para cima até o Ré. A mão esquerda passa de Sol para Dó.",
        15: "A mão direita desce do Sol até o Dó, e depois o dedo 5 alcança o Fá mais acima. Levante a mão esquerda depois de cada acorde.",
        17: "A mão direita sobe a partir do Sol grave, para o dedo 2 tocar o Mi. A mão esquerda passa de Dó para Fá.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava grave, e depois volte para cima até o acorde.",
        "Toque só os arpejos da mão esquerda, na segunda estrofe.",
        "Toque os compassos 13 a 15 com as duas mãos, devagar, onde os arpejos correm sob os anéis de ouro.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava grave e deixe a mão achar o acorde pelo tato.",
        "Em cada arpejo, o dedo 3 cruza por cima do polegar na subida.",
        "Deixe a oitava de Sol soar pelo compasso inteiro, como um anel de ouro erguido contra a luz.",
      ],
      tricky: {
        14: "A mão direita segura a oitava de Sol, enquanto a mão esquerda toca arpejos de Sol mais abaixo.",
        15: "O dedo 5 toca o Sol de novo, e a mão desce até o Dó. Por baixo, os arpejos passam de Sol para Dó, e depois para Fá.",
        17: "A mão direita sobe a partir do Sol, para o dedo 2 tocar o Mi. A mão esquerda passa de Dó para Fá.",
      },
    },
  },
};

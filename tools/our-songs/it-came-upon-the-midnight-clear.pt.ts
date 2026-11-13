/** The guide of *It Came Upon the Midnight Clear* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Edmund Sears escreveu o poema em 1849. " +
    "Ele foi publicado pela primeira vez no jornal The Christian Register, em Boston, em 29 de dezembro de 1849. " +
    "Richard Storrs Willis publicou a melodia um ano depois, como um estudo para coros. " +
    "Hinários dos Estados Unidos juntaram o poema a esta melodia, que chamaram de Carol, e ele virou uma canção de Natal muito querida.",
  funFact:
    "Na Grã-Bretanha, a mesma letra costuma ser cantada com outra melodia, Noel, que Arthur Sullivan arranjou a partir de uma melodia folclórica inglesa.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 3 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 9 a 13, onde a melodia desce e volta a subir.",
        "Agora só a mão esquerda. Ela segura uma quinta ou uma nota por vez, e fica num só lugar.",
        "Junte as mãos nos 5 primeiros compassos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Solte o polegar do Sol um instante antes. Assim o dedo mínimo tem tempo de chegar ao Mi agudo.",
        "Aqui a melodia desce uma oitava inteira. Levante a mão do Mi agudo, e caia com o polegar no Mi grave.",
        "Conte seis tempos em cada compasso: longo, curto, longo, curto. A melodia balança como uma canção de ninar.",
      ],
      tricky: {
        6: "Depois da pausa curta, o dedo 5 cai no Mi agudo. Depois os dedos 4, 3 e 2 descem até o Lá.",
        8: "O dedo 2 toca o Lá duas vezes, e o dedo 3 sobe para o Si. Depois os dedos 2 e 1 descem até o Sol.",
        14: "O mesmo desenho do compasso 6: o dedo 5 no Mi agudo, e depois 4, 3 e 2 descendo até o Lá.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Primeiro vem uma nota do baixo, e depois o resto do acorde.",
        "Toque só a mão direita nos 5 primeiros compassos, devagar.",
        "Toque só a mão direita nos compassos 9 a 13, onde a melodia desce e sobe.",
        "Junte as mãos nos compassos 1 a 5.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "No segundo Dó, troque o dedo 4 pelo polegar. Assim os dedos 2 e 3 alcançam Ré e Mi.",
        "Use o acorde longo do compasso 5 para preparar a mão para o Mi agudo.",
        "A melodia sobe por Fá sustenido e Sol sustenido. Deixe o som crescer um pouco até o Mi agudo.",
      ],
      tricky: {
        10: "A melodia desce do Mi agudo para o Mi grave. Depois o polegar desliza para cima, até o Fá sustenido, e o dedo 2 pega o Sol sustenido.",
        11: "Os dedos 3, 4 e 5 sobem para Lá, Si e Dó. Depois o dedo 5 continua subindo, até o Mi agudo.",
        12: "Os dedos 4, 3, 2 e 1 descem do Ré ao Lá. Depois o dedo 3 pega o Si, para o dedo 2 cair no Lá.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só a mão direita nos compassos 9 a 13, e passe o polegar por baixo na subida.",
        "Toque só as terças e sextas da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia flutuar por cima.",
        "Suba por Mi, Fá sustenido e Sol sustenido com os dedos 1, 2 e 3, e depois passe o polegar por baixo até o Lá.",
        "A melodia é a nota de cima de cada par. Por isso, deixe o dedo de cima conduzir.",
      ],
      tricky: {
        4: "O polegar sobe do Sol para o Lá. Depois os dedos 2 a 5 sobem até o Mi, com o dedo 3 nos dois Dós.",
        15: "A posição da mão muda a cada par: 1 e 3 para uma terça, 1 e 5 para uma sexta. O polegar desce até o Si, e depois sobe até o Ré.",
        16: "Terças em Fá e Lá, e depois os dedos 2 e 4 sobem para Sol e Si e voltam. No fim, o polegar se estica para baixo, até o Si.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava, e depois volte para cima até o acorde.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Junte as mãos na terceira frase, nos compassos 9 a 13, onde a melodia desce e sobe.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a nota do baixo e deixe a mão encontrar o acorde pelo tato.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
        "Antes de cada anacruse vem uma pausa curta. Use essa pausa para levar a mão ao próximo acorde.",
      ],
      tricky: {
        3: "O dedo 3 canta o Lá depois de Mi e Sol. Depois o polegar desce para o Si, por baixo de Fá e Sol, e o dedo 3 segura o Sol da melodia.",
        5: "Abra a mão sobre quatro notas: Ré, Sol, Si e Ré. Depois levante a mão e caia com o polegar no Sol.",
        13: "Outro acorde de quatro notas, Sol, Si, Ré e Sol, com o dedo mínimo em cima. Levante a mão na pausa antes da anacruse.",
      },
    },
  },
};

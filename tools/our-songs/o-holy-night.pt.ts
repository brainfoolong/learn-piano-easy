/** The guide of *O Holy Night* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "O compositor francês Adolphe Adam musicou o poema Minuit, chrétiens, de Placide Cappeau, com o título Cantique de Noël. " +
    "A canção foi cantada pela primeira vez na Missa do Galo em Roquemaure, no sul da França, em 1847. " +
    "A versão em inglês mais conhecida, O Holy Night, foi escrita em 1855 pelo crítico e pastor americano John Sullivan Dwight.",
  funFact: "Hoje, Adolphe Adam é mais conhecido pelo seu balé Giselle.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 7 só com a mão direita, e deixe a música esperar cada nota.",
        "Toque só a subida, do compasso 8 até o fim, com a mão direita.",
        "Agora só a mão esquerda. Ela mantém uma posição e a troca no meio de cada compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Segure a nota longa de cada par pontuado. Assim a nota curta leva direto à seguinte.",
        "Use a pausa no fim do compasso 7 para subir a mão. O dedo 3 cai no Dó agudo.",
        "Esta é a subida que deixou a música famosa. Deixe o som crescer até o Mi agudo.",
      ],
      tricky: {
        2: "O dedo mínimo toca o Dó agudo, e a mão desce até o Dó central com os dedos 3, 2 e 1.",
        4: "Depois do Lá, o polegar se estica para baixo até o Fá, e então o dedo mínimo se estica para cima até o Dó agudo.",
        8: "A mão sobe depois da pausa, com o dedo 3 no Dó agudo. Depois o polegar toca o Lá.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita nos 7 primeiros compassos, e dê a cada nota curta o lugar dela.",
        "Toque só a mão esquerda. Segure cada acorde até chegar o próximo.",
        "Junte as mãos na subida dos compassos 8 a 10.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Toque o segundo Sol com o dedo 5. Depois os dedos 3, 2 e 1 descem até o Dó.",
        "Os Fás sustenidos deixam a melodia triste por um momento. Toque essas notas suave.",
        "Os seis últimos compassos voltam mais uma vez. Toque um pouco mais suave, como um eco.",
      ],
      tricky: {
        2: "No Sol repetido, troque do dedo 3 para o dedo 5, para a mão poder descer até o Dó.",
        4: "O dedo 2 toca os dois Fás sustenidos, e o polegar pega o Mi logo depois deles.",
        8: "A mão sobe depois da pausa, com o dedo 3 no Dó agudo. Depois o polegar toca o Lá.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só o refrão com a mão direita, uma oitava acima.",
        "Junte as mãos nos 7 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave e por igual, para a melodia cantar por cima.",
        "Troque o pedal a cada novo acorde, para o baixo nunca soar confuso.",
        "Depois do último Dó, salte com a mão direita uma oitava acima para o refrão.",
      ],
      tricky: {
        4: "A mão direita toca seus Fás sustenidos enquanto a mão esquerda rola sobre o Mi. Mantenha as duas mãos leves.",
        13: "A melodia volta para casa no Dó, enquanto a mão esquerda passa de Dó para Sol e volta.",
        19: "O mesmo final do compasso 13, uma oitava acima. Segure o último Dó até o fim.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava, e depois para cima até o acorde.",
        "Toque só a subida em oitavas com a mão direita. Mantenha a mão na posição de oitava.",
        "Toque só as oitavas quebradas do refrão com a mão esquerda.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava grave e deixe a mão achar o acorde pelo tato.",
        "Toque cada oitava com o polegar e o dedo mínimo, e mantenha a mão nessa posição.",
        "Sobre as oitavas quebradas, deixe a mão direita cantar com força. A mão esquerda fica suave.",
      ],
      tricky: {
        6: "As oitavas balançam entre Sol e Lá, e depois descem até o Ré. Mantenha a mão na posição de oitava.",
        7: "O mesmo balanço do compasso 6, e depois uma subida até o Dó agudo. Deixe o stride manter a pulsação.",
        12: "As oitavas saltam do Sol para cima, até o Mi agudo. Use o breve silêncio antes dele para saltar.",
      },
    },
  },
};

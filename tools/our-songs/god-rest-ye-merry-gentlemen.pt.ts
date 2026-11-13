/** The guide of *God Rest Ye Merry, Gentlemen* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "God Rest Ye Merry, Gentlemen é uma das canções de Natal inglesas mais antigas que ainda se cantam hoje. " +
    "A partir de cerca de 1760, a letra era vendida em Londres em folhetos impressos baratos. " +
    "William Sandys imprimiu a melodia no seu livro de canções de Natal em 1833. " +
    "O primeiro verso queria dizer, na época: que Deus lhes dê paz e alegria.",
  funFact: "Em Um Conto de Natal, de Charles Dickens, um menino canta esta canção pelo buraco da fechadura de Scrooge. Scrooge o expulsa com uma régua.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 5 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 10 a 14, onde a melodia sobe até o Lá agudo.",
        "Agora só a mão esquerda. Ela mantém uma nota grave ou uma quinta aberta de cada vez.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "O seu polegar começa no Lá abaixo do Dó central, e o dedo mínimo fica no Mi.",
        "Levante a mão um instante depois do Lá, e deixe o polegar cair no Sol logo abaixo.",
        "Este é o refrão. Deixe-o soar um pouco mais forte que a estrofe.",
      ],
      tricky: {
        3: "Os dedos 3, 2 e 1 descem até o Lá. Levante a mão, e o polegar cai no Sol.",
        11: "Os dedos 4 e 5 sobem até o Lá agudo. Levante a mão, e o dedo mínimo pousa no Mi logo abaixo.",
        19: "Os dedos 3, 2 e 1 descem até o Dó. Levante a mão, e o dedo 2 pousa no Si.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave e depois as notas acima dela, duas vezes por compasso.",
        "Toque só a mão direita nos compassos 2 a 5. No caminho, a mão muda de lugar duas vezes.",
        "Toque só a mão direita nos compassos 7 e 8, onde uma nota repetida ajuda a mão a mudar de lugar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "O dedo 4 desliza do Ré para o Dó. No compasso seguinte, o polegar desliza do Sol para o Lá.",
        "Troque de dedo no segundo dos dois Lás rápidos, e também no segundo dos dois Rés. Assim a mão anda sem saltar.",
        "Dó e Si dividem um tempo. Conte “um e”, e toque os dois como passos rápidos e regulares.",
      ],
      tricky: {
        11: "Os dedos 4 e 5 sobem até o Lá agudo. Depois o dedo mínimo salta para baixo até o Mi, e o dedo 4 pega o Ré.",
        18: "O dedo 2 desliza do Ré para o Mi. Depois cada dedo pega a tecla seguinte, até o Lá agudo.",
        19: "O dedo mínimo salta do Lá agudo para o Mi. Depois a mão desce até o Si.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda até os acordes quebrados rolarem sozinhos: grave, agudo, meio, agudo.",
        "Toque só a mão direita nos compassos 3 e 4, onde os dedos cruzam nos dois sentidos.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Toque os acordes quebrados suaves, para a melodia cantar por cima.",
        "Na descida, o dedo 3 cruza por cima do polegar até o Si. Na subida, o polegar passa por baixo até o Dó.",
        "O polegar passa por baixo até o Mi, e a mão sobe até o Lá agudo.",
      ],
      tricky: {
        12: "O dedo 2 cruza por cima do polegar até o Dó. No fim do compasso, o polegar passa por baixo até o Dó.",
        18: "O polegar passa por baixo até o Mi. Os dedos 2 e 3 sobem, e o dedo mínimo alcança o Lá agudo.",
        19: "O dedo 3 cai no Mi e desce até o Dó. Depois o dedo 2 cruza por cima do polegar até o Si.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava grave, e depois volte para cima até o acorde.",
        "Toque só a mão direita nos compassos 4 a 6, e deixe o grupeto leve.",
        "Junte as mãos nos 9 primeiros compassos, na metade da velocidade.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava grave e deixe a mão achar o acorde pelo tato.",
        "O grupeto em volta do Mi é um enfeite. Toque-o mais suave que a melodia.",
        "Levante a mão depois do Si, e pouse no último acorde com as duas mãos juntas.",
      ],
      tricky: {
        9: "Uma passagem rápida começa no Sol agudo. Os dedos 5, 4, 3 e o polegar descem correndo, e depois o dedo 2 pega o Mi.",
        15: "Troque para o dedo mínimo no Mi repetido, e desça com um dedo por tecla. A mão esquerda salta para o Mi grave.",
        19: "O dedo 2 cruza por cima do polegar para tocar o Si. Toque-o curto, e leve a mão para baixo até o último acorde.",
      },
    },
  },
};

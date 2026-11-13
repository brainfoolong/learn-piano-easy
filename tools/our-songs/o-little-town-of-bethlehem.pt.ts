/** The guide of *O Little Town of Bethlehem* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Phillips Brooks, pastor da Igreja Episcopal na Filadélfia, escreveu a letra em 1868 para a sua igreja. " +
    "Uma visita à aldeia de Belém, três anos antes, tinha sido a inspiração dele. " +
    "Para essa letra, o organista dele, Lewis Redner, escreveu esta melodia, chamada St. Louis. " +
    "Os Estados Unidos e o Canadá cantam a canção com esta melodia, e o Reino Unido e a Irlanda, com outra.",
  funFact: "Redner contou que acordou de noite ouvindo um canto de anjos sussurrando no seu ouvido, e anotou a melodia.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 5 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 6 a 9 só com a mão direita. Ali a melodia sobe até o Lá agudo.",
        "Agora só a mão esquerda. Ela só troca de posição no início ou no meio de um compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "O Ré sustenido é a tecla preta entre Ré e Mi. O dedo 2 desce até ela, e o dedo 3 volta para o Mi.",
        "Levante a mão por um momento antes do Lá grave, e de novo depois do Sol grave. O polegar toca os dois.",
        "As duas notas rápidas, Si e Dó, dividem um tempo entre si.",
      ],
      tricky: {
        6: "O dedo 3 toca o Mi duas vezes, depois o dedo 5 se estica para cima até o Lá, e o dedo 4 pega o Sol.",
        10: "O dedo 5 assume o Mi, e depois os dedos 5, 4 e 3 descem até o Dó.",
        15: "Levante a mão depois do Fá, e caia com o polegar no Lá grave. Depois levante de novo, para o dedo 5 cair no Lá agudo.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as notas de cada acorde.",
        "Toque só a mão direita nos 5 primeiros compassos, o início da música.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Sob o Ré sustenido, a mão esquerda toca só Dó e Sol, para nenhum Mi soar contra ele.",
        "Segure cada acorde suave durante toda a sua duração, como um órgão tocando de leve.",
        "Levante a mão direita depois do Lá, e caia com o dedo 5 no Lá uma oitava acima.",
      ],
      tricky: {
        6: "O dedo 3 toca o Mi duas vezes, depois o dedo 5 se estica para cima até o Lá. No meio do compasso, a mão esquerda passa do Dó para o Fá.",
        10: "O dedo 5 assume o Mi, e a melodia desce até o Dó. No meio do compasso, a mão esquerda passa para o acorde de Sol com sétima.",
        15: "Levante a mão direita duas vezes: uma para o Lá grave, e outra para o Lá uma oitava acima.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só o baixo Alberti mais rápido da segunda estrofe.",
        "Junte as mãos na primeira estrofe, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "Levante a mão direita depois do Dó longo, e caia com o dedo 3 no Mi uma oitava acima.",
        "Troque o pedal a cada meio compasso, quando a mão esquerda começa um novo acorde.",
      ],
      tricky: {
        17: "Segure o Dó longo com o polegar, depois levante a mão e caia com o dedo 3 no Mi uma oitava acima.",
        19: "A melodia desce do Fá para o Lá, enquanto a mão esquerda toca seu baixo Alberti duas vezes mais rápido.",
        33: "Levante a mão depois do Ré curto, e depois toque Mi, Sol e Dó juntos, com os dedos 1, 2 e 5.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava grave, e volte para cima até o acorde.",
        "Toque só as oitavas da mão direita, com o polegar e o dedo 5 numa só posição.",
        "Toque só os arpejos da mão esquerda, na segunda estrofe.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava grave e deixe a mão achar o acorde pelo tato.",
        "Mantenha o polegar e o dedo 5 a uma oitava de distância, e levante a mão antes de cada salto maior.",
        "Deixe as oitavas soarem como sinos, e mantenha suaves os arpejos abaixo delas.",
      ],
      tricky: {
        20: "As oitavas passam por Dó, Si, Dó e Ré, e depois a mão se levanta e desce até o Sol. Mantenha o polegar e o dedo 5 numa só posição.",
        22: "Depois do segundo Mi, levante a oitava e caia no Lá, uma quarta acima.",
        31: "Levante a oitava duas vezes: para baixo até o Lá grave, e depois uma oitava inteira acima, até o Lá agudo.",
      },
    },
  },
};

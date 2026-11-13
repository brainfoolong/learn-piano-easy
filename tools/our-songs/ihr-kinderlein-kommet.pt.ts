/** The guide of *Ihr Kinderlein, kommet* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "O título alemão Ihr Kinderlein, kommet quer dizer “Venham, criancinhas”. " +
    "O padre Christoph von Schmid escreveu a letra e chamou seu poema de “As crianças junto à manjedoura”. " +
    "Johann Abraham Peter Schulz escreveu a melodia em 1794 para um poema de primavera de Wilhelm Gottlieb Becker. " +
    "Mais tarde, a letra de Schmid passou a ser cantada com essa melodia de primavera, e as duas juntas viraram uma canção de Natal.",
  funFact: "Christoph von Schmid também escreveu histórias para crianças, como Das Blumenkörbchen, “A cesta de flores”.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 5 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos 4 últimos compassos, onde a melodia sobe até o Dó agudo.",
        "Agora só a mão esquerda. Ela mantém uma posição em cada compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Cada compasso começa com uma nota longa e termina com duas curtas, como um berço balançando.",
        "O compasso 13 tem uma pausa depois do primeiro Lá. Levante o dedo, conte a pausa e toque o Lá de novo.",
        "O dedo 5 toca o Dó agudo. Depois a mão desce grau a grau, e o polegar termina no Si.",
      ],
      tricky: {
        2: "O dedo 4 toca o Sol, e o dedo 2 desce para o Mi. Mantenha a mão parada sobre as teclas de Ré a Lá.",
        15: "O dedo 5 se estica até o Dó agudo, e depois os dedos 3 e 2 tocam Sol e Mi.",
        16: "Os dedos 3 e 2 tocam Fá e Ré, e o polegar se estica para baixo, até o Si.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as três notas de cada acorde.",
        "Toque só a mão esquerda nos compassos 10 a 17, com dois acordes em cada compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Segure cada acorde com suavidade, para a melodia que balança soar clara por cima.",
        "O polegar esquerdo sobe para o Lá no acorde de Fá do compasso 13, e volta para o Sol no compasso 14.",
        "Agora a mão esquerda toca um acorde em cada metade do compasso. Conte “um, dois”, e pressione em cada tempo.",
      ],
      tricky: {
        14: "O dedo 3 toca o Sol três vezes, enquanto o polegar esquerdo desliza de volta do Lá para o Sol.",
        15: "O dedo 5 se estica até o Dó agudo, e depois o dedo 3 volta para o Sol.",
        16: "Os dedos 3, 2 e 1 descem por Fá, Ré e Si, sobre um acorde de Sol com sétima.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele fluir sozinho: grave, agudo, meio, agudo.",
        "Toque só os acordes quebrados, na segunda vez, e levante a mão em cada pausa.",
        "Junte as mãos na primeira vez, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "As duas mãos se levantam numa pausa. A direita salta para cima, até o Sol agudo, e a esquerda desce para um Dó grave.",
        "Troque o pedal a cada meio compasso, quando a mão esquerda recomeça o padrão.",
      ],
      tricky: {
        17: "Segure o Dó, levante a mão na pausa e caia com o dedo 4 no Sol agudo.",
        18: "A melodia recomeça uma oitava acima, enquanto a mão esquerda começa os acordes quebrados no Dó grave.",
        21: "A melodia descansa depois do Mi longo. Conte a pausa, e depois o dedo 4 toca o Sol.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava grave, e depois volte para cima até o acorde.",
        "Toque só a mão direita nos compassos 2 a 9, com leveza nos grupos rápidos de notas.",
        "Toque só os arpejos da mão esquerda na segunda vez.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava grave e deixe a mão encontrar o acorde pelo tato.",
        "O grupo rápido de notas depois do Mi longo é um pulinho. Toque esse grupo mais suave que a melodia.",
        "Mantenha o polegar e o dedo mínimo a uma oitava de distância, e deixe o pulso quicar.",
      ],
      tricky: {
        20: "As oitavas passam por Fá, Ré e Fá, sobre um arpejo de Sol. Mantenha a mão na posição de oitava.",
        24: "O mesmo desenho do compasso 20. Deixe o arpejo continuar correndo por baixo das oitavas.",
        29: "Levante a mão um instante antes da oitava de Lá. Conte a pausa, e depois toque o Lá de novo.",
      },
    },
  },
};

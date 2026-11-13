/** The guide of *Hark! The Herald Angels Sing* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Felix Mendelssohn escreveu esta melodia em 1840 para uma festa em Leipzig. " +
    "A festa celebrava os quatrocentos anos da impressão com tipos móveis. " +
    "Em 1855, William H. Cummings adaptou a melodia a uma letra de Natal que Charles Wesley escreveu em 1739.",
  funFact:
    "A melodia foi cantada pela primeira vez em 24 de junho de 1840, na praça do mercado de Leipzig, por um coro masculino com duas orquestras de metais.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 2 primeiros compassos. O polegar começa no Sol.",
        "Toque só a mão direita nos compassos 1 a 8. A mão nunca precisa se mover.",
        "Toque só a mão direita nos compassos 13 a 20, onde a melodia sobe até o Lá agudo.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Longo, curto: o segundo Dó dura o triplo do Si depois dele.",
        "Toque o Si do compasso 7 com o dedo 2, e o Si do compasso 8 com o dedo 3. Depois os dedos 2 e 1 tocam Lá e Sol.",
        "Os compassos 11 e 12 repetem os compassos 9 e 10. Na segunda vez, toque um pouco mais forte.",
      ],
      tricky: {
        3: "O dedo 3 toca o Ré, e depois o dedo mínimo se estica até o Sol. Mantenha a mão parada e aberta.",
        7: "O dedo mínimo toca o Sol. Depois o dedo 3 desce para o Ré, e o dedo 2 para o Si.",
        13: "O dedo 2 toca o Ré, e depois o dedo mínimo se estica até o Lá agudo.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda. Ela segura um acorde em cada metade do compasso.",
        "Junte as mãos nos compassos 13 a 20, onde a mão direita toca duas notas ao mesmo tempo.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Toque suave os acordes da mão esquerda, para a melodia soar por cima.",
        "Pressione Ré e Fá juntos, com o polegar e o dedo 3. O Fá é a melodia, então deixe o Fá cantar.",
        "Longo, curto e depois por igual: o primeiro Lá dura o triplo do segundo.",
      ],
      tricky: {
        3: "O dedo 3 toca o Ré, e depois o dedo mínimo se estica até o Sol. Mantenha a mão parada e aberta.",
        7: "O dedo mínimo toca o Sol. Depois o dedo 3 desce para o Ré, e o dedo 2 para o Si.",
        13: "O dedo 2 toca o Ré, e depois o dedo mínimo se estica até o Lá agudo.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele fluir sozinho: grave, agudo, meio, agudo.",
        "Toque só a mão direita nos compassos 8 e 9. O polegar passa por baixo do dedo 3 até o Dó.",
        "Toque só as terças da mão direita nos compassos 9 a 12, e pressione as duas notas como se fossem uma.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "A melodia é a nota de cima de cada terça. Por isso, deixe o dedo de cima conduzir.",
        "Troque o pedal no começo e no meio de cada compasso, quando a mão esquerda recomeça o padrão.",
      ],
      tricky: {
        8: "Depois do Sol grave, os dedos 2 e 3 sobem por Lá e Si. Depois o polegar passa por baixo até o Dó.",
        18: "As terças descem e sobem de novo: dedos 2 e 4, depois polegar e 3, e outra vez 2 e 4.",
        20: "O dedo 2 toca o Dó e o dedo 3 toca o Ré. Depois o polegar desce até o Mi, por baixo do último Dó.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava grave, e depois volte para cima até o acorde.",
        "Toque só os acordes da mão direita. Levante a mão depois de cada um, e deixe o dedo de cima cantar.",
        "Toque só as oitavas da mão direita nos compassos 9 a 20. Mantenha a mão aberta e leve.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava grave e deixe a mão encontrar o acorde pelo tato.",
        "Cada acorde é curto, e o pedal une os acordes. Troque o pedal no começo e no meio de cada compasso.",
        "Nas oitavas, toque a nota do dedo mínimo um pouco mais forte, para a melodia brilhar em cima.",
      ],
      tricky: {
        2: "Do grande acorde de Dó, a mão salta para cima, até Sol, Dó e Mi. Antes, levante a mão na pausa curta.",
        6: "O compasso 6 repete o compasso 2. Levante a mão na pausa, e depois salte para cima, até Sol, Dó e Mi.",
        7: "A mão desce do acorde de Sol agudo para Sol, Si e Ré. O polegar desce do Si para o Sol.",
      },
    },
  },
};

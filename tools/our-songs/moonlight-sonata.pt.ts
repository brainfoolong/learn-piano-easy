/** The guide of *Moonlight Sonata* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven escreveu esta sonata em 1801 e a publicou em 1802, com uma dedicatória à condessa Giulietta Guicciardi. " +
    "O nome “Ao luar” veio do crítico Ludwig Rellstab, depois da morte de Beethoven. " +
    "O filme Immortal Beloved (1994), sobre a vida de Beethoven, usa essa música.",
  funFact:
    "Beethoven pede que o movimento inteiro seja tocado com muita delicadeza, com os abafadores levantados: “senza sordino”.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos compassos 1 a 4, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 5 a 8, onde a melodia sobe e desce.",
        "Agora só a mão esquerda. Em cada compasso, ela segura uma nota ou uma quinta aberta.",
        "Junte as mãos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Segure o primeiro Lá por bastante tempo, e depois toque o Lá curto logo antes do próximo Lá longo.",
        "Toque bem suave. Esta música deve soar como o luar sobre um lago tranquilo.",
        "Aqui a mão direita descansa. Ouça a mão esquerda e conte quatro tempos lentos.",
      ],
      tricky: {
        2: "A mão esquerda desce de Ré e Lá para Lá e Mi. O dedo 5 toca o Lá grave.",
        5: "A mão esquerda desce até o Sol com o dedo 5, e o polegar fica no Ré.",
        10: "A mão esquerda sobe de Fá para Sol. A mão direita volta com o dedo 2 no Sol.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda. A nota grave vem primeiro, e o acorde de duas notas responde a ela.",
        "Junte as mãos nos 8 primeiros compassos, devagar, com o pedal.",
        "Toque a segunda metade, onde a melodia volta uma oitava acima.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Mantenha o pedal pisado durante cada compasso inteiro, e troque-o bem na barra de compasso.",
        "O Lá pontuado dura o triplo do Lá curto que vem depois dele.",
        "No agudo, toque ainda mais suave. A melodia deve brilhar como a lua.",
      ],
      tricky: {
        4: "Toque o Ré com o dedo 5 da mão esquerda, e depois Fá e Lá juntos com os dedos 2 e 1.",
        10: "Use a pausa do compasso 9 para levar a mão direita uma oitava acima. O dedo 3 cai no Lá agudo.",
        19: "Abra a mão esquerda sobre Ré, Fá e Lá, com os dedos 5, 3 e 1. A mão direita toca Fá e Lá juntos.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda. Cada acorde sobe em grupos de três notas: grave, meio, agudo.",
        "Toque só as terças e sextas da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque os grupos de três suaves e regulares, para a melodia flutuar por cima.",
        "O Lá curto dura um grupo de três. Conte os grupos de três, e ele cai no lugar sozinho.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        17: "Abra a mão direita numa sexta, com o polegar no Lá e o dedo mínimo no Fá.",
        18: "O acorde muda no meio deste compasso. Troque o pedal ali também.",
        19: "Abra a mão esquerda sobre uma oitava inteira: o dedo 5 no Ré grave, o polegar no Ré de cima.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda. O polegar passa por baixo e o dedo 3 cruza por cima, para cada arpejo cobrir duas oitavas.",
        "Toque só as oitavas da mão direita. Mantenha a mão aberta, com o polegar e o dedo mínimo prontos.",
        "Toque o final devagar. A mão esquerda cruza por cima da direita para três notas agudas.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe as últimas notas soarem.",
      ],
      tips: [
        "Em cada arpejo, o polegar passa por baixo na descida, e o dedo 3 cruza por cima na subida.",
        "Deixe o dedo mínimo cantar a nota de cima de cada oitava um pouco mais forte.",
        "Enquanto a mão direita segura o acorde, passe a mão esquerda por cima dele, leve como um raio de luar.",
      ],
      tricky: {
        10: "A partir daqui, a mão direita toca oitavas. O polegar e o dedo mínimo caem juntos nas duas teclas Sol sustenido.",
        17: "A mão esquerda começa o arpejo num Mi grave. Use a pausa no fim do compasso 16 para chegar até ele.",
        19: "Segure o acorde da mão direita, e cruze a mão esquerda por cima dele para tocar Sol sustenido, Dó sustenido e Mi.",
      },
    },
  },
};

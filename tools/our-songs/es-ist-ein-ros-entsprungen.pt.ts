/** The guide of *Es ist ein Ros entsprungen* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Es ist ein Ros entsprungen quer dizer “Uma rosa brotou” em alemão. " +
    "É uma canção de Natal religiosa do século XVI. " +
    "A melodia foi impressa pela primeira vez no hinário de Espira, em Colônia, em 1599, e não se sabe quem a compôs. " +
    "Michael Praetorius fez um arranjo para quatro vozes em 1609, e esse arranjo se espalhou muito.",
  funFact: "Johannes Brahms escreveu sobre esta melodia um prelúdio coral para órgão, o oitavo do seu Op. 122.",
  versions: {
    common: {
      practice: [
        "Toque os 2 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 3 a 6 só com a mão direita. A melodia desce até o Sol no compasso 5.",
        "Agora só a mão esquerda. Ela mantém uma posição por meio compasso ou por um compasso inteiro.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Cada Sol longo começa com o dedo 5. Troque para o dedo 4 no Sol seguinte, e a mão fica parada.",
        "Cada compasso reúne três compassos da partitura antiga. Conte seis tempos lentos, com duas semínimas em cada tempo.",
        "Depois do Sol grave, faça uma pausa breve, e depois deixe o dedo 5 subir uma oitava até o Sol agudo.",
      ],
      tricky: {
        3: "O dedo 2 segura o Dó, e depois o dedo 5 se estica até o Sol. Troque para o dedo 4 no Sol seguinte.",
        5: "Os dedos 4, 2, 3 e 2 tocam Ré, Si, Dó e Lá, e depois o polegar cai no Sol grave. Faça uma pausa e suba com o dedo 5.",
        9: "A mesma abertura do compasso 3: o dedo 5 sobe do Dó para o Sol, e o dedo 4 pega o Sol seguinte.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as notas de cada acorde. O polegar fica no Sol.",
        "Toque os compassos 7 a 13 só com a mão direita. A melodia sobe uma oitava e volta.",
        "Junte as mãos na primeira vez, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Debaixo do Fá da melodia, o acorde fica só com Ré e Sol. Mantenha o polegar no Sol e deixe o Fá soar.",
        "Use a pausa depois do Dó para levar a mão direita uma oitava acima.",
        "A mesma pausa traz a mão direita de volta para baixo, para tocar a melodia na última vez.",
      ],
      tricky: {
        3: "O dedo 5 se estica do Dó até o Sol, enquanto a mão esquerda segura o acorde de Dó.",
        7: "Segure o Dó, levante a mão direita na pausa e coloque o dedo 5 no Sol uma oitava acima.",
        13: "Segure o Dó agudo, levante a mão na pausa e coloque o dedo 5 de volta no Sol abaixo.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele fluir sozinho: grave, agudo, meio, agudo.",
        "Toque só os acordes quebrados, na segunda vez, e levante a mão em cada pausa.",
        "Junte as mãos na primeira vez, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal na parte do meio.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "Troque o pedal a cada tempo, quando a mão esquerda começa um novo acorde.",
        "As duas mãos se levantam na pausa. A mão direita desce uma oitava, e a esquerda volta para o baixo Alberti.",
      ],
      tricky: {
        7: "Na pausa, a mão direita salta uma oitava acima. O baixo Alberti termina numa pausa, para a mão esquerda poder descer.",
        8: "A mão esquerda começa os acordes quebrados no Dó grave. Levante a mão em cada pausa, e troque o pedal a cada tempo.",
        13: "A mão direita volta para baixo na pausa, enquanto os acordes quebrados terminam no Fá.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava grave, e depois volte para cima até o acorde.",
        "Toque só as oitavas da mão direita, e mantenha o polegar e o dedo 5 à distância de uma oitava.",
        "Toque só os arpejos da mão esquerda, na segunda vez.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No baixo stride, olhe para a oitava grave e deixe a mão encontrar o acorde pelo tato.",
        "Os arpejos sobem duas oitavas a cada tempo. Toque-os suave, para as oitavas de cima soarem claras.",
        "Mantenha o polegar e o dedo 5 à distância de uma oitava, e deixe o pulso quicar de leve.",
      ],
      tricky: {
        9: "Solte a oitava de Dó uma colcheia antes, para a mão cair a tempo na oitava de Sol.",
        11: "As oitavas descem grau a grau até o Sol grave, e depois da pausa saltam uma oitava acima.",
        13: "Segure a oitava de Dó, e depois caia na oitava de Sol quando os arpejos terminarem no Fá.",
      },
    },
  },
};

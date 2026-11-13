/** The guide of *Adagietto* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "O Adagietto é o quarto movimento, lento, da Quinta Sinfonia de Mahler, estreada em Colônia em 1904. " +
    "O filme Death in Venice (1971), de Luchino Visconti, deixou a peça famosa muito além das salas de concerto.",
  funFact: "Desde esse filme, ela se tornou a música mais conhecida que Mahler escreveu.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 5 a 8. O compasso 5 tem um Si, e os compassos 6 e 7 têm um Fá sustenido.",
        "Agora só a mão esquerda. Ela segura cada nota por meio compasso ou por um compasso inteiro.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Conte cinco semínimas de pausa. Depois, Dó, Ré e Mi levam suavemente à melodia.",
        "Toque o segundo Fá com o polegar. Depois, os dedos 4 e 3 alcançam Si bemol e Lá.",
        "Esta música é lenta e terna. Deixe cada nota longa cantar, e nunca se apresse.",
      ],
      tricky: {
        4: "Toque o primeiro Dó com o dedo 5 e repita-o com o dedo 4. Depois, o dedo 5 toca o Ré.",
        5: "O Si é uma tecla branca, e o Si bemol logo depois é uma tecla preta. Os dedos 3 e 2 tocam essas notas.",
        11: "Os dedos 4, 3 e 2 descem de Si bemol a Sol. Depois, o polegar toca o Mi.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Uma nota grave cai no tempo, e um acorde responde a ela.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A mão esquerda toca em todos os tempos: uma nota grave, depois um acorde. Conte “um, dois”.",
        "Toque a mão esquerda bem suave, para a melodia flutuar por cima.",
        "Os dedos 3 e 5 pressionam Si bemol e Ré juntos. Deixe o Ré cantar um pouco mais.",
      ],
      tricky: {
        5: "O Si é uma tecla branca, e o Si bemol logo depois é uma tecla preta. No começo, a mão esquerda toca só Sol e Ré.",
        7: "O polegar toca primeiro o Fá sustenido e, no fim, o Fá. A mão esquerda passa de Si bemol para Dó no meio do compasso.",
        14: "O dedo 4 toca Si bemol duas vezes neste compasso. A mão esquerda passa de Fá para Sol no meio do compasso.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar por conta própria: grave, agudo, meio, agudo.",
        "Toque só as terças e sextas da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada nova nota do baixo, duas vezes por compasso.",
        "Toque o baixo Alberti suave e regular, como uma harpa sob os violinos.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        18: "O polegar desce de Dó para Lá na sexta. Depois, ele sobe até o Fá para as notas isoladas.",
        23: "Abra a mão de Ré até Si bemol para a sexta. Depois, os dedos 4, 3 e 2 descem até o Fá.",
        24: "O polegar desce de Mi para Si bemol, enquanto os dedos 3 e 5 tocam Mi e Sol.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: uma oitava no tempo, depois um acorde, cada um com uma pausa curta para saltar.",
        "Toque só os arpejos da mão esquerda. O polegar passa por baixo, e o dedo 3 cruza por cima.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Use a pausa curta depois de cada oitava e de cada acorde para saltar até o próximo.",
        "Deixe os arpejos fluírem suaves sob a melodia, e troque o pedal a cada novo acorde.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
      ],
      tricky: {
        14: "A mão esquerda sobe duas oitavas a partir de Si bemol, e depois a partir de Sol. A cada vez, o dedo 3 cruza por cima do polegar.",
        16: "A mão direita segura o Fá durante o compasso inteiro, enquanto a mão esquerda sobe duas vezes a partir de Fá.",
        17: "Depois do Fá, o polegar salta para cima até o Dó. Em seguida, os dedos 2 e 3 sobem até Ré e Mi.",
      },
    },
  },
};

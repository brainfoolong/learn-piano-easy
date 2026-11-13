/** The guide of *Kommet, ihr Hirten* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "O título alemão Kommet, ihr Hirten quer dizer “Venham, pastores”. " +
    "A canção vem da Boêmia, onde o seu título tcheco é Nesem vám noviny. " +
    "A melodia foi impressa pela primeira vez em 1847, num hinário católico de Olomouc. " +
    "O maestro Carl Riedel, de Leipzig, escreveu a letra alemã livremente a partir do original, e a publicou pela primeira vez em 1870.",
  funFact: "O musicólogo Konrad Ameln datou a melodia de cerca de 1700, só pelo estilo.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 9 a 12 só com a mão direita. O polegar desce até o Sol grave.",
        "Agora só a mão esquerda. Ela mantém uma posição em cada compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Cada compasso começa com um Sol longo de dois tempos. Depois vêm quatro notas curtas, de um tempo cada.",
        "A mão esquerda segura Dó e Sol como o bordão de uma gaita de foles. Deixe as duas notas soarem por baixo da melodia.",
        "Aqui o dedo 2 toca o Dó, para o polegar ficar livre para o Sol grave do compasso 10.",
      ],
      tricky: {
        9: "O dedo 2 assume o Dó no lugar do polegar. Depois os dedos 4 e 5 tocam Mi e Sol.",
        11: "Igual ao compasso 9: dedo 2 no Dó, dedo 4 no Mi e dedo 5 no Sol.",
        13: "O dedo 5 cai no Sol agudo. Depois os dedos 2 e 4 tocam Mi e Sol, e o polegar toca o Ré.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: um Dó grave, depois dois acordes em cada compasso.",
        "Toque os compassos 9 a 14 só com a mão esquerda. Ali os acordes mudam com mais frequência.",
        "Junte as mãos na primeira vez, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Na maioria dos compassos, a mão esquerda toca o Dó no tempo 1, e um acorde em cada um dos outros dois.",
        "Toque o Dó grave um pouco mais forte que os acordes, como o bordão de uma gaita de foles.",
        "A melodia salta do Sol grave até o Sol agudo. O dedo 4 se estica por uma oitava inteira.",
      ],
      tricky: {
        13: "O polegar deixa o Sol grave, e o dedo 4 se estica uma oitava acima, até o Sol agudo.",
        27: "A mesma abertura de oitava do compasso 13. Mantenha o pulso solto enquanto a mão se abre.",
        28: "Para o último acorde, o polegar cai no Sol e o dedo 2 toca o Dó, juntos.",
      },
    },
    epic: {
      practice: [
        "Toque só os acordes quebrados até eles rolarem sozinhos: grave, meio, agudo, meio.",
        "Toque a melodia só com a mão esquerda, a partir do compasso 15.",
        "Junte as mãos na primeira vez, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque os acordes quebrados suaves, para a melodia cantar por cima.",
        "Agora a melodia está na mão esquerda. Toque com clareza, e deixe os acordes da mão direita suaves.",
        "Troque o pedal a cada tempo.",
      ],
      tricky: {
        9: "A mão esquerda salta para o Lá, para o acorde de Lá menor, enquanto o dedo 2 da mão direita pega o Dó.",
        11: "Dois tempos de Lá menor. Depois a mão esquerda se levanta e cai de volta no Dó grave.",
        15: "As mãos trocam de papel. A mão esquerda começa a melodia no Sol, e a mão direita toca acordes.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava grave, e volte para cima até o acorde.",
        "Toque os compassos 1 a 9 só com a mão direita, e deixe as passagens rápidas leves.",
        "Toque só os arpejos da mão esquerda, na segunda vez.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava grave e deixe a mão achar o acorde pelo tato.",
        "A passagem sobe por Ré, Mi e Fá. Depois a mão se levanta e coloca o dedo 4 no Sol.",
        "Mantenha o polegar e o mínimo a uma oitava de distância. As pausas curtas dão tempo para a mão saltar.",
      ],
      tricky: {
        19: "As oitavas saltam até o Lá e voltam para o Fá. Levante a mão em cada pausa curta.",
        24: "As oitavas andam por Dó, Mi, Dó e Ré, e depois caem no Sol grave. Deixe o pulso quicar.",
        26: "Igual ao compasso 24. Depois a mão salta uma oitava inteira, até o Sol agudo.",
      },
    },
  },
};

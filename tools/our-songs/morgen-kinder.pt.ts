/** The guide of *Morgen, Kinder, wird's was geben* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "O título alemão Morgen, Kinder, wird's was geben quer dizer “Amanhã, crianças, vai ter alguma coisa”. " +
    "A letra de Karl Friedrich Splittegarb foi impressa pela primeira vez em 1795. " +
    "Carl Gottlieb Hering a musicou com esta melodia em 1809, numa escola de canto para crianças. " +
    "A canção fala de crianças esperando ansiosas pelos presentes, e nunca menciona o nascimento de Jesus.",
  funFact:
    "Em 1927, Erich Kästner escreveu uma paródia sobre crianças pobres, que começa assim: Morgen, Kinder, wird's nichts geben, ou seja, “não vai ter nada”.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos 4 últimos compassos, onde a melodia sobe até o Lá agudo.",
        "Agora só a mão esquerda. Ela segura uma quinta ou só um Fá.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "As quatro notas rápidas do compasso 2 são as mais curtas da música. Conte-as por igual: “um, dois, três, quatro”.",
        "O compasso 2 termina com um Sol curto e uma pausa. Use a pausa para abrir a mão até o Mi.",
        "O polegar toca o primeiro Dó e o dedo 2 toca o segundo, para o dedo 5 alcançar o Fá.",
      ],
      tricky: {
        3: "Depois da pausa, o dedo 3 toca o Mi duas vezes. Os dedos 4 e 5 sobem até Fá e Sol, e o dedo 4 volta para o Mi.",
        7: "Igual ao compasso 3: o dedo 3 no Mi, e depois os dedos 4 e 5 sobem até Fá e Sol.",
        8: "Os dedos 5 e 4 tocam Fá e Mi, e o dedo 2 toca o Ré. Assim, o dedo 3 fica pronto para o Fá do compasso 9.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as notas de cada acorde.",
        "Toque só a mão direita nos 8 primeiros compassos, a frase de abertura.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Segure cada acorde suave durante o compasso inteiro, para a melodia ficar por cima.",
        "O compasso 4 termina num Sol grave, e o compasso 5 começa no Mi agudo. Olhe para o Mi antes de tocar o Sol.",
        "O polegar toca o primeiro Dó e o dedo 2 toca o segundo, para o dedo 5 alcançar o Fá.",
      ],
      tricky: {
        5: "Depois do Sol do polegar, o dedo 3 salta até o Mi sem pausa. Mantenha o polegar leve, para a mão se abrir.",
        6: "O dedo 5 toca o Sol agudo, e o dedo 4 volta para o Mi sobre o acorde de Dó.",
        14: "Igual ao compasso 6: o dedo 5 no Sol agudo, e depois o dedo 4 no Mi.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar por conta própria: grave, agudo, meio, agudo.",
        "Toque só os acordes quebrados, na segunda vez, subindo e descendo.",
        "Junte as mãos na primeira vez, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "A mão direita descansa uma semínima no fim do compasso 12, e depois salta uma oitava acima.",
        "Troque o pedal a cada meio compasso, quando a mão esquerda começa um novo acorde.",
      ],
      tricky: {
        13: "A melodia recomeça uma oitava acima. O dedo 2 toca o Dó agudo, e o polegar desce para o Sol.",
        23: "O polegar toca o primeiro Dó e o dedo 2 toca o segundo, para o dedo 5 alcançar o Fá agudo.",
        24: "Os dedos 4, 3, 2 e 1 descem até o Si, e o dedo 2 termina no Dó, sobre o último acorde.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava, e depois volte para cima até o acorde.",
        "Toque só as oitavas da mão direita, e levante a mão em cada pausa curta.",
        "Toque só os arpejos da mão esquerda, na segunda vez.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava grave e deixe a mão encontrar o acorde pelo tato.",
        "Mantenha o polegar e o dedo mínimo a uma oitava de distância. As pausas curtas dão tempo para a mão saltar.",
        "Abra a mão sobre Dó, Mi, Sol e Dó para o último acorde, e deixe-o soar.",
      ],
      tricky: {
        4: "O dedo 3 segura o Ré longo, enquanto a mão esquerda salta do Sol grave até o acorde e volta.",
        8: "Desta vez, o dedo 2 toca o Ré longo, para o dedo 3 ficar pronto para o Fá do compasso 9.",
        9: "O dedo 3 toca o Fá duas vezes e o dedo 5 toca o Lá duas vezes, enquanto o baixo stride desce até um Fá grave.",
      },
    },
  },
};

/** The guide of *Also sprach Zarathustra* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Richard Strauss escreveu este poema sinfônico em 1896, inspirado num livro do filósofo Friedrich Nietzsche. " +
    "A fanfarra de abertura pinta um nascer do sol, que se ergue sobre um Dó grave e sustentado. " +
    "O filme 2001: A Space Odyssey (1968), de Stanley Kubrick, começa com ela.",
  funFact:
    "As três notas que sobem, Dó, Sol e Dó, são a segunda, a terceira e a quarta notas da série harmônica de um Dó grave.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 2 primeiros compassos, e deixe a música esperar cada nota.",
        "Agora toque os compassos 3 a 8 com a mão direita. O polegar fica perto do Sol.",
        "Toque só a mão esquerda. Ela segura uma quinta aberta em cada compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Isto é um nascer do sol. Toque cada nota longa por inteiro, e deixe soar até o fim.",
        "Aqui o Mi vira Mi bemol, e o som claro fica escuro. Escute a mudança.",
        "O compasso 3 deixa de fora o Dó grave, para o polegar poder esperar no Sol.",
      ],
      tricky: {
        1: "O polegar toca o Dó central e depois sobe para o Sol. Mova-o durante a nota longa.",
        7: "A mão esquerda desce para Sol e Ré. A mão direita desce do Ré até o Sol.",
        8: "As duas mãos voltam para casa. A esquerda volta para Dó e Sol, e a direita termina no Mi.",
      },
    },
    rare: {
      practice: [
        "Toque os compassos 3 a 6 só com a mão direita. Esta é a melodia do nascer do sol.",
        "Toque só os acordes de duas notas da mão direita, nos compassos 9 a 16.",
        "Toque só a mão esquerda. Nos compassos 7 e 8, ela bate Dó e Sol como um tímpano.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A mão esquerda começa sozinha, como uma nota grave de órgão antes do amanhecer. Segure essa nota pelos dois compassos.",
        "Toque as notas do tímpano por igual, uma em cada tempo, e um pouco mais forte a cada vez.",
        "A nota de cima de cada acorde leva a melodia. Toque-a um pouco mais forte.",
      ],
      tricky: {
        3: "O polegar toca o Dó central e depois sobe para o Sol durante a nota longa.",
        10: "Mantenha o dedo 2 no Dó, e deixe o dedo 5 no Mi passar a vez para o dedo 4 no Mi bemol.",
        15: "Aqui a mão esquerda toca um acorde de Dó completo. Abra os dedos 5, 3 e 1 sobre Dó, Mi e Sol.",
      },
    },
    epic: {
      practice: [
        "Toque só os acordes quebrados da mão esquerda, nos compassos 9 a 12: Dó grave, Sol, Dó e Sol.",
        "Toque só a mão direita nos compassos 9 a 12, e pressione as duas notas de cada par como uma só.",
        "Junte as mãos nos compassos 9 a 12, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Segure a oitava grave com o pedal pisado. Ela deve retumbar como um grande órgão.",
        "O Mi claro vira um Mi bemol escuro. Toque o Mi bemol um pouco mais suave.",
        "Bata Dó e Sol como um tímpano, cada vez mais forte até o compasso 9.",
      ],
      tricky: {
        3: "A mão direita entra no Dó central enquanto a mão esquerda sobe uma oitava. A pausa do compasso 2 dá tempo para isso.",
        15: "Abra a mão direita sobre Mi, Sol e o Dó agudo. A mão esquerda segura uma oitava de Dó por baixo.",
        16: "As duas mãos descem num salto até o último acorde. Aproveite a pausa curta no fim do compasso 15.",
      },
    },
    legendary: {
      practice: [
        "Toque só as oitavas da mão direita, nos compassos 9 a 12. Mantenha a posição da mão e mova o braço inteiro.",
        "Toque só a mão esquerda. Ela alterna entre oitavas graves e rufos de tímpano.",
        "Junte as mãos no clímax, os compassos 13 a 16.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Trave a mão na posição de oitava, do polegar ao dedo mínimo. O braço leva a mão de tecla em tecla.",
        "Nos acordes de quatro notas, use os dedos 1, 2, 3 e 5. O dedo 4 descansa.",
        "Cada acorde sobe mais e soa mais forte. Guarde o som mais forte para o último acorde de Dó.",
      ],
      tricky: {
        11: "A mão direita salta do acorde agudo para a oitava no Dó central. Aproveite a pausa antes dela.",
        13: "A subida começa aqui. Levante a mão depois de cada acorde, e deixe o pedal unir o som.",
        14: "No tempo 4, a mão esquerda desce para uma oitava de Fá grave enquanto a mão direita toca o acorde de Fá.",
      },
    },
  },
};

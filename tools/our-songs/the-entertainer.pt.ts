/** The guide of *The Entertainer* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Scott Joplin, o Rei do Ragtime, publicou este rag em St. Louis em 1902. " +
    "Um rag põe uma melodia saltitante, em contratempo, sobre um baixo firme que faz “pum-pá”. " +
    "Esta é a primeira parte, a que todo mundo cantarola. " +
    "O filme The Sting tornou o rag famoso no mundo inteiro em 1973.",
  funFact: "Joplin recebeu um Prêmio Pulitzer especial em 1976, quase sessenta anos depois da morte dele.",
  versions: {
    common: {
      practice: [
        "Toque os 2 primeiros compassos só com a mão direita, até o salto do Mi ao Dó ficar fácil.",
        "Toque só a mão direita na frase inteira.",
        "Junte as mãos nos 8 primeiros compassos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "O polegar no Mi, o dedo médio no Dó agudo. Mantenha a mão aberta e deixe-a balançar entre os dois.",
        "Toque cada Mi curto e saltitante. Esse pequeno silêncio é o pulinho do rag.",
        "Os dedos 2 a 5 ficam em Si, Dó, Ré e Mi, um ao lado do outro.",
      ],
      tricky: {
        2: "A mão balança do Dó para baixo até o Mi, e volta. Solte cada tecla depressa, para o salto ter tempo.",
        9: "Do Si, o polegar desce de volta para o Mi. Mantenha a mão aberta, e a melodia recomeça.",
        10: "O mesmo balanço do compasso de antes: o dedo médio no Dó, o polegar no Mi, e notas curtas.",
      },
    },
    rare: {
      practice: [
        "Toque a anacruse e os 2 primeiros compassos só com a mão direita.",
        "Toque só a mão esquerda: uma nota grave, depois um acorde, como uma pequena marcha.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Ré sustenido e Mi usam o mesmo dedo 2. Deslize-o uma tecla acima para entrar na melodia.",
        "A mão esquerda faz “pum” no tempo 1 e “pá” no tempo 3, em todo compasso.",
        "Deixe a subida Dó, Ré, Ré sustenido, Mi ficar um pouco mais forte a cada nota.",
      ],
      tricky: {
        2: "O dedo 2 desliza do Ré sustenido até o Mi, e o dedo mínimo vai buscar o Dó agudo.",
        3: "Mantenha o dedo mínimo sobre o Dó e o dedo 2 sobre o Mi. Só o pulso balança.",
        10: "Depois da pausa, o dedo 2 salta para baixo até o Mi. Olhe para a tecla antes de cair nela.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda: salte para baixo até a nota do baixo, e depois para cima até o acorde.",
        "Toque só a mão direita da segunda frase, onde um Fá sustenido leva a melodia até o Sol.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Pise no pedal com cada nota do baixo e solte-o no acorde, para o acorde soar nítido.",
        "O baixo desliza uma tecla para baixo, do Mi ao Mi bemol. Deixe essa descida bem clara.",
        "A última frase repete três vezes um pequeno grupo de notas. Conte, para saber em qual delas você está.",
      ],
      tricky: {
        4: "A mão esquerda salta do Fá grave até o acorde, enquanto a mão direita segura Lá e Dó.",
        5: "Depois da pausa, leve a mão direita para cima, para o dedo 2 cair no Dó e começar a subida.",
        21: "A subida do compasso 5 volta. Suba a mão durante a pausa, e o dedo 2 pega o Dó.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: uma oitava no grave, depois o acorde no agudo.",
        "Toque só as sextas da mão direita, com o polegar e o dedo mínimo se movendo juntos.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava grave e deixe a mão achar o acorde pelo tato.",
        "Toque a nota de cima de cada sexta um pouco mais forte, para a melodia cantar.",
        "As oitavas do baixo deslizam do Mi para o Mi bemol, e depois seguem até o Ré.",
      ],
      tricky: {
        4: "A mão esquerda salta da oitava grave de Fá até o acorde, enquanto a mão direita se abre sobre Fá, Lá e Dó.",
        12: "O acorde de Fá volta. Pouse primeiro a oitava grave, e depois deixe a mão saltar para cima.",
        20: "O acorde de Fá vem pela terceira vez, com os mesmos saltos do compasso 4. Mantenha a pulsação firme.",
      },
    },
  },
};

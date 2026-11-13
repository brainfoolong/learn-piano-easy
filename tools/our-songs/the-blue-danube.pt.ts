/** The guide of *The Blue Danube* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Johann Strauss II escreveu esta valsa em 1866 e 1867 para um coro masculino de Viena. " +
    "A versão só para orquestra fez sucesso na Exposição Universal de Paris, em 1867. " +
    "No filme 2001: A Space Odyssey (1968), naves espaciais se acoplam ao som desta valsa.",
  funFact: "Por tradição, a Filarmônica de Viena toca esta valsa todos os anos, perto do fim do Concerto de Ano-Novo.",
  versions: {
    common: {
      practice: [
        "Toque os 3 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Pratique os saltos de oitava: o polegar na nota grave, depois levante a mão na pausa curta e caia com o dedo 5 uma oitava acima.",
        "Agora só a mão esquerda. Ela segura uma quinta aberta ou uma nota do baixo a cada “um, dois, três”.",
        "Junte as mãos nos 8 primeiros compassos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Comece com o polegar no Dó central. Para subir por Dó, Mi e Sol, use os dedos 1, 2 e 3.",
        "No Sol repetido, troque do dedo 3 para o polegar, para o dedo 5 alcançar o Sol agudo.",
        "Dê peso ao primeiro tempo de cada três, e toque os outros dois de leve. É isso que faz a valsa.",
      ],
      tricky: {
        6: "Coloque o polegar no Lá, depois levante a mão na pausa curta e caia com o dedo 5 no Lá de cima.",
        12: "Aqui a melodia chega ao Dó agudo. Na mão esquerda, o dedo 2 segura só o Dó, para o dedo 5 pegar o Fá grave.",
        13: "Levante o dedo 4 do Lá agudo, e caia com o polegar no Lá uma oitava abaixo. A mão esquerda sobe para Ré e Lá.",
      },
    },
    rare: {
      practice: [
        "Toque os 8 primeiros compassos só com a mão direita, devagar.",
        "Toque só a mão esquerda: uma nota do baixo, depois o acorde duas vezes. Onde a mão direita faz pausa, a esquerda sobe pelas notas graves.",
        "Junte as mãos nos 4 primeiros compassos, onde a melodia passa da mão direita para a esquerda e volta.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Conte “um, dois, três” em cada metade do compasso. O baixo cai em cada “um”.",
        "A mão direita faz pausa enquanto a esquerda sobe. Depois o polegar cai no Ré, e o dedo 5 alcança o Ré uma oitava acima.",
        "O Sol sustenido é uma tecla preta. Pegue-o com o polegar, e depois o dedo 2 toca o Lá.",
      ],
      tricky: {
        12: "A mão direita abre a oitava do Ré ao Ré agudo. A mão esquerda desce até o Si para o acorde de Sol.",
        15: "Levante a mão depois do Lá, e caia com o dedo 5 no Fá sustenido agudo. A mão esquerda salta para baixo até o Lá.",
        16: "O polegar toca o Fá sustenido, depois desce para o Mi. A mão esquerda salta de novo para baixo até o Lá.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo de valsa: a nota grave, depois o acorde duas vezes, leve e curto.",
        "Toque só as terças e sextas da mão direita. Pressione juntas as duas notas de cada par.",
        "Junte as mãos nos compassos 1 a 9, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque os acordes suaves e curtos, para a melodia flutuar por cima.",
        "Troque o pedal em cada barra de compasso, quando a nova nota do baixo soar.",
        "A mão se levanta depois do Lá, e o polegar cai no Ré acima dele.",
      ],
      tricky: {
        21: "Solte o par de notas um pouco antes, e deixe o polegar cair no Ré grave.",
        26: "Suba por Mi, Sol e Si com os dedos 1, 2 e 4. Depois o polegar e o dedo 3 seguram Sol e Si.",
        34: "Abra a mão para o último acorde: o polegar no Fá sustenido, o dedo 2 no Lá e o dedo 5 no Ré.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo em oitavas: salte para baixo até a oitava, e depois volte para cima até o acorde.",
        "Toque só as oitavas da mão direita. Mantenha a mão aberta, com o polegar e o dedo 5 prontos.",
        "Junte as mãos nos compassos 18 a 25, onde a melodia chega às notas mais agudas.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No baixo em oitavas, olhe para a nota grave e deixe a mão achar o acorde pelo tato.",
        "O polegar e o dedo 5 pegam todas as oitavas. Mantenha a mão nessa posição enquanto ela se move.",
        "Deixe a nota de cima de cada oitava cantar, e mantenha o polegar mais leve.",
      ],
      tricky: {
        8: "A oitava desce do Lá para o Sol. Mantenha a posição da mão, e mova a mão inteira de uma vez.",
        24: "Solte a oitava de Ré um pouco antes, e caia na oitava de Si com a mesma posição.",
        29: "A mão se abre do Lá até a oitava de Fá sustenido. Levante a mão, e depois caia nas duas notas juntas.",
      },
    },
  },
};

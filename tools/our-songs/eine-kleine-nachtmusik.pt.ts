/** The guide of *Eine kleine Nachtmusik* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart terminou esta serenata para cordas em Viena, em 1787. " +
    "Ela só foi publicada em 1827, mais de trinta anos depois da morte dele. " +
    "No filme Amadeus (1984), o velho Salieri toca a peça, e um padre reconhece a melodia na hora.",
  funFact: "O título quer dizer “uma pequena serenata”, e o próprio Mozart a anotou na lista das suas obras.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 4 só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita, depois que a mão muda para o novo lugar.",
        "Agora só a mão esquerda. Ela segura Sol e Ré, ou só o Ré, por compassos inteiros.",
        "Junte as mãos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Polegar no Ré, dedo 2 no Sol, dedo 4 no Si e dedo 5 no Ré agudo.",
        "Toque o Sol curto e brilhante, como se as cordas o soltassem num estalo.",
        "Aproveite a pausa depois do Ré agudo para levar os dedos 2, 3 e 5 até Fá sustenido, Lá e Dó.",
      ],
      tricky: {
        5: "Sua mão mudou de lugar na pausa. Agora o dedo 5 toca o Dó, e o dedo 3 toca o Lá.",
        7: "Desça por Dó, Lá e Fá sustenido com os dedos 5, 3 e 2, e depois volte para o Lá.",
        13: "Suba a mão na pausa do compasso 12. O dedo 3 cai no Si, e o polegar no Sol.",
      },
    },
    rare: {
      practice: [
        "Toque a melodia só com a mão direita, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda. Ela balança entre a fundamental e a quinta, a cada tempo.",
        "Junte as mãos na melodia, devagar.",
        "Toque a resposta com as duas mãos. O compasso 11 corre em colcheias.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Conte a mão esquerda em semínimas. Cada nota da melodia cai num tempo junto com ela.",
        "Suba por Ré, Fá sustenido, Lá e Dó com os dedos 1, 2, 3 e 5, e depois desça de novo.",
        "A resposta volta para casa no Sol. Deixe a última nota soar durante o compasso inteiro.",
      ],
      tricky: {
        5: "Mude a mão de lugar na pausa do compasso 4. O dedo 5 cai no Dó, e o dedo 3 no Lá.",
        7: "Desça por Dó, Lá e Fá sustenido com os dedos 5, 3 e 2, e depois volte para o Lá.",
        13: "Suba a mão na pausa do compasso 12. O dedo 3 cai no Si, e o polegar no Sol.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele fluir sozinho: grave, agudo, meio, agudo.",
        "Toque só as terças e sextas da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave e regular, para a melodia cantar por cima.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
        "Troque o pedal em cada barra de compasso, quando a nova nota do baixo soar.",
      ],
      tricky: {
        16: "Levante a mão depois da última terça, e depois desça para Lá e Ré com os dedos 1 e 4.",
        17: "A resposta começa no agudo, no Lá, com o dedo 3. Use a pausa antes dela para subir a mão.",
        24: "Solte o Lá na pausa, e depois caia em Si, Ré e Sol com os dedos 1, 2 e 5.",
      },
    },
    legendary: {
      practice: [
        "Toque só as oitavas da mão direita. Mantenha o polegar e o dedo 5 abertos, e mova a mão inteira.",
        "Toque só as passagens rápidas dos compassos 11 e 15, devagar, até elas fluírem.",
        "Toque só a mão esquerda. Ela salta entre oitavas na fundamental e na quinta.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Oitavas nas duas mãos soam como uma orquestra de cordas inteira. Toque com firmeza.",
        "Na subida, o polegar passa por baixo depois do Fá sustenido. Na descida, o dedo 3 cruza por cima do Sol.",
        "Depois da passagem rápida, levante a mão na pausa e caia nas quatro notas do acorde de Sol maior.",
      ],
      tricky: {
        2: "Solte a oitava de Sol, e depois salte para baixo até a oitava de Ré. Mantenha a mão aberta.",
        3: "Quatro oitavas seguidas: Sol, Ré, Sol e Si. Levante um pouco a mão depois de cada uma.",
        14: "Salte para baixo da oitava de Si até a oitava de Sol, e depois prepare a mão para a passagem rápida.",
      },
    },
  },
};

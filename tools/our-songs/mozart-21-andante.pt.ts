/** The guide of *Piano Concerto No. 21: Andante* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart concluiu este concerto em 9 de março de 1785, quatro semanas depois do anterior. " +
    "O movimento lento, o Andante, canta uma melodia longa sobre acordes suaves e repetidos. " +
    "O filme Elvira Madigan (1967) usa essa música, e hoje muita gente conhece o concerto por esse nome.",
  funFact: "Mozart terminou o concerto só quatro semanas depois do seu Concerto para Piano n.º 20.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos compassos 1 a 3, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 4 a 8.",
        "Agora só a mão esquerda. Ela segura uma nota ou uma quinta aberta por bastante tempo.",
        "Junte as mãos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Segure o primeiro Fá por sete tempos. O Dó curto vem logo antes da próxima nota longa.",
        "O dedo 4 segura o Dó agudo. Depois, os dedos 5, 4, 3 e 2 tocam quatro notas rápidas.",
        "Toque suave e ligado, como se cantarolasse uma canção de ninar.",
      ],
      tricky: {
        1: "Solte o Dó curto um pouco antes. Depois, suba com o dedo 5 até o Lá.",
        4: "Depois da pausa, o polegar direito cai no Dó. No meio do compasso, a mão esquerda desce para o Sol.",
        5: "O dedo 3 sobe de Sol para Si bemol. Depois, os dedos 5, 4 e 3 tocam Ré, Dó e Si bemol.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita nos 6 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda. Primeiro vem uma nota grave, e depois o acorde responde três vezes.",
        "Junte as mãos nos compassos 1 a 6, devagar.",
        "Toque o final a partir do compasso 13, onde a mão esquerda encontra dois acordes novos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Toque os acordes suaves, para a melodia cantar por cima como uma voz.",
        "O Fá sustenido se inclina para cima, rumo ao Sol. Dê quatro tempos a cada um, e depois faça a pausa.",
        "Levante a mão esquerda um instante antes de cada acorde novo. Assim, ela cai no seu novo lugar.",
      ],
      tricky: {
        5: "O dedo 3 sobe de Sol para Si bemol. Depois, os dedos 5, 4 e 3 tocam Ré, Dó e Si bemol.",
        14: "A mão esquerda vai para o Si bemol com o dedo 5. Ré e Fá ficam acima dele.",
        15: "A mão esquerda volta para o Dó com o dedo 2. Use a pausa curta antes dele.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda. Cada acorde sobe em grupos de três notas: grave, meio, agudo.",
        "Toque só a mão direita nos compassos 7 a 12, onde sextas e terças se juntam à melodia.",
        "Junte as mãos nos 6 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Conte três notas regulares na mão esquerda a cada tempo. Elas devem ondular de leve.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
        "Troque o pedal em cada barra de compasso, quando soa a nova nota do baixo.",
      ],
      tricky: {
        5: "O dedo 3 sobe de Sol para Si bemol. Por baixo, a mão esquerda continua rolando Dó, Mi e Si bemol.",
        7: "Coloque o polegar no Lá, por baixo do Fá. Depois, o polegar sobe até o Dó, e os dedos 2 e 5 tocam Fá e Lá.",
        9: "Depois do Fá sustenido, o polegar desliza para baixo até o Mi, e o dedo 2 toca o Sol junto com ele.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda nos compassos 1 a 6. Salte para baixo até a oitava grave, e depois volte para cima até os acordes.",
        "Toque só os arpejos longos da mão esquerda nos compassos 7 a 12.",
        "Toque só a mão direita a partir do compasso 7, onde a melodia sobe uma oitava.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Levante a mão esquerda depois de cada oitava grave. A pausa curta dá tempo para você alcançar o acorde.",
        "Em cada arpejo, o polegar passa por baixo na descida, e o dedo 3 cruza por cima na subida.",
        "Abra a mão direita sobre o último acorde, e deixe-o soar com o pedal.",
      ],
      tricky: {
        2: "O dedo 4 segura o Dó agudo sobre o baixo pinçado. Depois, os dedos 5, 4, 3 e 2 tocam quatro notas rápidas.",
        5: "O dedo 3 sobe de Sol para Si bemol, enquanto a mão esquerda continua pinçando o Dó grave.",
        6: "Toque Sol sustenido com o dedo 2 e Lá com o dedo 4. A mão esquerda salta para baixo até a oitava de Fá grave.",
      },
    },
  },
};

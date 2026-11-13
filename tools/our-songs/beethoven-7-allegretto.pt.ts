/** The guide of *Symphony No. 7: Allegretto* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven escreveu sua Sétima Sinfonia em 1811 e 1812. " +
    "Na estreia em Viena, em dezembro de 1813, o público exigiu ouvir o Allegretto de novo. " +
    "O filme The King's Speech (2010) usa a peça como fundo do discurso do rei no rádio, em tempo de guerra.",
  funFact: "A melodia soa primeiro no grave, nas violas e nos violoncelos.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 4 só com a mão direita. Seu polegar toca cada Mi.",
        "Toque os compassos 5 a 8 só com a mão direita. Ali a melodia sobe até o Sol.",
        "Agora só a mão esquerda. Ela mantém uma posição em cada compasso.",
        "Junte as mãos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Diga “longa, curta, curta” enquanto toca o primeiro compasso. Esse ritmo é a peça inteira.",
        "Sua mão nunca se move. Os dedos 1, 2 e 3 tocam Mi, Fá sustenido e Sol.",
        "Comece bem suave, e deixe cada compasso soar um pouco mais forte.",
      ],
      tricky: {
        10: "Aqui o dedo 4 toca o Lá. Mantenha a mão parada, e deixe só o dedo se esticar para cima.",
        11: "O dedo 5 toca o Si três vezes. Mantenha-o curvado, para o dedo mínimo continuar firme.",
        12: "O dedo 4 volta para o Lá na última nota. Segure por quatro tempos.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita nos 8 primeiros compassos, e conte “longa, curta, curta”.",
        "Toque só a mão esquerda. Em cada compasso, ela segura um acorde de três notas.",
        "Junte as mãos nos 8 primeiros compassos, com o pedal.",
        "Toque a segunda metade, onde a mão esquerda alterna entre uma nota grave e um acorde.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Aqui a mão esquerda desce um pouco. O dedo 5 vai do Sol sustenido para o Sol.",
        "Mantenha o pedal pisado durante cada compasso inteiro, e troque bem na barra de compasso.",
        "Agora a mão esquerda toca em cada tempo. Mantenha tudo regular, como uma marcha lenta.",
      ],
      tricky: {
        10: "A mão esquerda toca Sol sustenido com o dedo 5, depois Si e Mi juntos. Mantenha a mão parada.",
        15: "A mão esquerda balança entre Sol e Ré com os dedos 5 e 2.",
        16: "Toque Mi e Sol juntos com os dedos 1 e 3. Depois levante a mão direita na pausa.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda até os acordes quebrados rolarem sozinhos: grave, agudo, meio, agudo.",
        "Toque só os pares da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque os acordes quebrados suaves, para o Mi repetido cantar por cima.",
        "Troque o pedal no último tempo, onde o acorde vira Ré maior.",
        "Troque o pedal três vezes neste compasso, uma para cada acorde novo.",
      ],
      tricky: {
        17: "Os dedos 1, 2 e 5 pegam Dó, Fá e Lá. Por baixo, a mão esquerda toca um acorde quebrado de Fá maior.",
        19: "O acorde muda no meio do compasso. Troque o pedal junto com ele.",
        20: "Abra a mão esquerda sobre a oitava: o dedo 5 no Lá, o dedo 2 no Mi e o polegar no Lá agudo.",
      },
    },
    legendary: {
      practice: [
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque só os arpejos da mão esquerda. O polegar passa por baixo, e o dedo 3 cruza por cima.",
        "Junte as mãos nos compassos 9 a 16, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Toque a nota de cima de cada oitava um pouco mais forte, para a melodia se destacar.",
        "Abra a mão direita sobre uma oitava inteira em cada acorde, com o polegar e o dedo 5 nas extremidades.",
        "No final, a melodia sobe até o Lá. Deixe o último acorde soar com o pedal.",
      ],
      tricky: {
        10: "A mão esquerda começa num Mi grave. Use a pausa no fim do compasso 9 para saltar para baixo.",
        15: "O dedo 3 cruza por cima do polegar até o Si. Mantenha o pulso nivelado enquanto a mão sobe.",
        17: "Os dedos 1, 2, 4 e 5 pegam Lá, Dó, Fá e Lá. Levante a mão esquerda em cada pausa curta.",
      },
    },
  },
};

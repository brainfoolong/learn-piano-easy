/** The guide of *Spanish Ladies* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Spanish Ladies é uma canção de marinheiro tradicional, sobre uma tripulação que volta da Espanha para a Inglaterra. " +
    "Uma versão de 1769 ficou registrada no diário de bordo de um navio.",
  funFact: "No filme Jaws, de 1975, o caçador de tubarões Quint canta uma versão desta canção que os baleeiros cantavam.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 5 só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 9 só com a mão direita, e leve a mão para cima na pausa curta.",
        "Agora só a mão esquerda. Ela mantém uma posição por um compasso inteiro.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Comece com o polegar no Si grave. Depois o dedo 3 toca o Mi.",
        "Solte o segundo Si um pouco antes. Nesse breve silêncio, leve o polegar para cima até o Mi.",
        "Conte três tempos lentos em cada compasso, como um navio balançando nas ondas.",
      ],
      tricky: {
        4: "O dedo 5 toca o Sol, e depois os dedos 4 e 3 descem até o Mi. A mão esquerda segura Mi e Si.",
        6: "Agora o polegar toca o Mi duas vezes, e o dedo 2 toca o Fá sustenido. A mão subiu até o Mi.",
        16: "O dedo 4 toca o Lá, e o dedo 5 toca o Si. Depois o dedo 2 cai no Fá sustenido, sobre o Si da mão esquerda.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave, depois uma nota ou um acorde mais leve, duas vezes.",
        "Toque só a mão direita nos 9 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Toque a nota grave do baixo de valsa um pouco mais forte que os dois acordes depois dela.",
        "Solte o segundo Si um pouco antes. Nesse breve silêncio, leve o polegar para cima até o Mi.",
        "Termine com Mi e Sol juntos. Os dedos 1 e 3 pressionam as duas notas como uma só.",
      ],
      tricky: {
        6: "Agora o polegar toca o Mi duas vezes, e o dedo 2 toca o Fá sustenido. A mão esquerda toca um Mi grave, depois o Si duas vezes.",
        10: "Os dedos 5, 4, 3 e 2 descem do Si até o Fá sustenido. Depois o dedo 3 sobe de volta até o Sol.",
        16: "Os dedos 4, 3 e 2 descem até o Fá sustenido. Depois os dedos 2 e 4 pressionam juntos Fá sustenido e Lá.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só a mão direita nos compassos 10 a 17, e passe o polegar por baixo na subida.",
        "Toque só as terças e sextas da mão direita, e pressione as duas notas de cada par como uma só.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada nova nota do baixo, uma vez por compasso.",
        "Depois que o dedo 3 toca o Sol, passe o polegar por baixo até o Lá.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        16: "Os dedos 5, 4, 3 e 2 descem a partir do Si. Depois o polegar pega o Ré sustenido, que leva de volta ao Mi, a nota de casa.",
        22: "O dedo 5 toca o Mi duas vezes em cima, enquanto a nota mais grave vai do Sol para o Si. Depois o polegar alcança o Lá.",
        26: "Levante as duas mãos depois do acorde de Si maior, e pouse as duas juntas no último acorde de Mi menor.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: uma oitava no tempo 1, depois um acorde duas vezes, cada um com uma pausa curta para saltar.",
        "Toque só os arpejos da mão esquerda. O polegar passa por baixo, e o dedo 3 cruza por cima.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Use a pausa curta depois de cada oitava e de cada acorde para saltar até o próximo.",
        "Deixe os arpejos rolarem suaves, como ondas sob o navio.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
      ],
      tricky: {
        11: "Depois do Sol, passe o polegar direito por baixo até o Lá. Enquanto isso, a mão esquerda sobe duas oitavas a partir do Lá grave.",
        21: "Mantenha o polegar no Sol durante o compasso inteiro. Só a nota de cima se move: do Mi para o Ré, e depois para o Si.",
        26: "Levante as duas mãos na pausa curta do compasso 25. Depois caia no último acorde, sobre a oitava de Mi grave.",
      },
    },
  },
};

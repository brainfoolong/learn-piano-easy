/** The guide of *Morning Mood* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Grieg escreveu Morning Mood em 1875 para a peça de teatro Peer Gynt, de Ibsen, e a publicou em 1888 na sua primeira Suíte Peer Gynt. " +
    "A melodia usa só cinco notas da escala e alterna entre a flauta e o oboé. " +
    "O filme Soylent Green, de 1973, usa a peça na cena em que um homem morre ouvindo a música que escolheu.",
  funFact:
    "A música pinta um nascer do sol no deserto do Marrocos, e não num fiorde norueguês, como a maioria das pessoas imagina.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 9 a 16. A mão fica sempre no mesmo lugar.",
        "Agora só a mão esquerda. Ela mantém cada posição por um compasso inteiro.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Seu polegar direito fica no Dó central, e o dedo 5 começa no Sol. Os dedos 2 e 3 descansam no Ré e no Mi.",
        "Depois do primeiro Dó, quatro notas curtas balançam entre Ré e Mi. Conte-as por igual.",
        "Toque suave, como o sol nascendo devagar. Cada nota deve fluir para a próxima.",
      ],
      tricky: {
        5: "Aqui o dedo 2 toca o Mi, e o dedo 4 toca o Sol. Assim, o dedo 5 fica livre para o Lá agudo do compasso 6.",
        6: "O dedo 5 toca o Lá, e o dedo 2 toca o Mi. Mantenha a mão aberta entre eles.",
        7: "O dedo 5 volta do Lá para o Sol. A mão esquerda passa para Ré e Sol no meio do compasso.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave, e depois duas vezes um acorde de duas notas. A mão fica parada.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A mão esquerda toca em todos os tempos. Conte “um, dois, três” duas vezes em cada compasso.",
        "Toque suave os acordes da mão esquerda, para a melodia flutuar por cima como a luz da manhã.",
        "Termine com Sol e Si juntos. Os dedos 1 e 3 pressionam as duas notas como se fossem uma.",
      ],
      tricky: {
        5: "Aqui o dedo 2 toca o Si, e o dedo 4 toca o Ré. Assim, o dedo 5 fica livre para o Mi agudo do compasso 6.",
        7: "O dedo 5 volta do Mi para o Ré. A mão esquerda passa para Lá e Ré no meio do compasso.",
        9: "A mão esquerda mantém o dedo 5 no Sol. Os dedos 4 e 2 vão para Lá e Dó no novo acorde.",
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
        "Nos compassos que nós mesmos escrevemos, a mão muda de lugar. Olhe adiante, para o primeiro dedo de cada compasso.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        7: "No meio do compasso, a mão esquerda passa para o baixo Alberti em Lá maior, com o dedo 5 no Lá grave.",
        11: "Cinco notas descem de Si até Ré, um dedo para cada uma. Depois, o dedo 2 sobe de volta para o Mi.",
        24: "Use a pausa curta para abrir a mão direita sobre Fá sustenido, Lá e Ré para o último acorde.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: uma oitava no tempo, e depois um acorde duas vezes, cada um com uma pausa curta para saltar.",
        "Toque só os arpejos da mão esquerda. Eles sobem duas oitavas e descem de volta.",
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
        6: "A mão esquerda salta para o Dó sustenido e fica nele o compasso inteiro. A mão direita toca Dó sustenido com o dedo 5 e Sol sustenido com o dedo 2.",
        22: "Os dois Dós sustenidos formam uma oitava, com Mi e Sol sustenido entre eles. Mantenha a mão aberta durante o compasso inteiro.",
        23: "Três posições vêm uma depois da outra: Mi maior, depois Si e Sol sustenido, depois Si maior. A mão esquerda passa para o Si no meio do compasso.",
      },
    },
  },
};

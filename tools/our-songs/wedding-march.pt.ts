/** The guide of *Wedding March* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mendelssohn escreveu esta marcha em 1842, como parte da sua música para Sonho de uma Noite de Verão, de Shakespeare. " +
    "Ela passou a ser uma das preferidas nos casamentos depois que Vitória, a Princesa Real, a escolheu para o próprio casamento, em 1858. " +
    "Os filmes ainda a tocam sempre que um casal sai do altar.",
  funFact:
    "O primeiro casamento conhecido a usá-la foi em Tiverton, na Inglaterra, em 2 de junho de 1847, tocada pelo organista Samuel Reay.",
  versions: {
    common: {
      practice: [
        "Toque os 4 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 4 a 8 só com a mão direita. Durante o Sol longo, a mão desce até o Dó.",
        "Agora só a mão esquerda. Ela segura uma nota ou uma quinta aberta por um compasso inteiro ou por meio compasso.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Comece com o polegar no Fá sustenido e o dedo 5 no Dó agudo. A melodia fica sob a sua mão.",
        "Levante a mão logo antes de o Sol terminar, e desça-a. Depois o dedo 4 cai no Fá.",
        "Toque com brilho e orgulho, como as portas de uma igreja se abrindo.",
      ],
      tricky: {
        2: "Segure o Si com o dedo 4 enquanto conta até seis. Depois o polegar toca o Fá sustenido.",
        4: "A mão desceu. O dedo 4 toca o Fá, e o dedo 2 toca o Ré.",
        11: "Quatro notas regulares: Mi, Fá, Sol e Mi de novo. Os dedos 3, 4 e 5 sobem, e o dedo 3 volta.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Ela toca um acorde em cada tempo, como uma banda marcial.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos compassos 9 a 16, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Do acorde de Fá ao acorde de Ré, o dedo 5 fica no Lá. Só as notas de cima se movem.",
        "Toque os acordes curtos e regulares, para a melodia soar por cima deles.",
        "Termine com Dó e Mi juntos. Os dedos 1 e 3 pressionam as duas notas como uma só.",
      ],
      tricky: {
        1: "Segure o Dó agudo com o dedo 5. A mão esquerda toca Lá, Dó e Fá em cada tempo.",
        2: "A mão esquerda toca Lá e Ré. Segure o Si na mão direita enquanto o acorde se repete.",
        4: "O dedo 4 toca o Fá, e o dedo 2 toca o Ré. A mão esquerda fica em Si, Ré e Sol.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque o compasso 9 só com a mão direita. Passe o polegar por baixo até o Fá.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada nova nota do baixo, duas vezes por compasso.",
        "Passe o polegar por baixo até o Fá depois que o dedo 3 tocar o Mi.",
        "Agora a melodia está em cima de cada par. Deixe o dedo de cima cantá-la.",
      ],
      tricky: {
        4: "Levante a mão no fim do compasso 3. Depois o dedo 4 cai no Fá, enquanto a mão esquerda percorre Sol, Ré e Si.",
        21: "Abra a mão sobre Mi e Dó, a uma sexta de distância. Levante-a logo antes do próximo compasso.",
        22: "Toque Dó e Mi, depois Si e Ré, depois Dó e Mi rápidos. O polegar se move uma tecla de cada vez.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: uma oitava no tempo, depois um acorde, cada um com uma pausa curta para saltar.",
        "Toque só os arpejos da mão esquerda. Na subida, o dedo 3 cruza por cima do polegar.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Toque as oitavas como trompetes num casamento real. Deixe o dedo mínimo conduzir.",
        "Nos arpejos, o dedo 3 cruza por cima do polegar, e o polegar passa por baixo na descida.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
      ],
      tricky: {
        10: "A mão esquerda sobe duas oitavas a partir do Sol grave. A mão direita sobe a partir do Ré com os dedos 1 a 4.",
        12: "A mão esquerda sobe de novo a partir do Sol. A mão direita salta do Ré até o Sol com o dedo 4.",
        17: "Abra a mão direita sobre Dó, Fá, Lá e Dó. A mão esquerda salta da oitava grave de Fá até o acorde de Fá.",
      },
    },
  },
};

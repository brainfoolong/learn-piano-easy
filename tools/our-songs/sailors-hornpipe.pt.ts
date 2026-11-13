/** The guide of *The Sailor's Hornpipe* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The Sailor's Hornpipe é uma melodia de dança animada, muito ligada à Marinha Real britânica. " +
    "As primeiras coletâneas a imprimiram como The College Hornpipe.",
  funFact: "Os desenhos animados do Popeye, de Max Fleischer, começavam com este hornpipe, por isso muita gente o conhece como a música do Popeye.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 5 só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 9 só com a mão direita. A melodia salta do Lá agudo até o Lá grave.",
        "Agora só a mão esquerda. Ela mantém uma posição por um compasso inteiro, e nunca se move.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Comece com o dedo 5 no Sol agudo e o dedo 4 no Fá sustenido. Depois o polegar se estica para baixo até o Sol grave.",
        "Solte o Sol agudo um pouco antes. Nesse breve silêncio, estique o polegar uma oitava para baixo.",
        "Conte quatro tempos regulares em cada compasso. Um hornpipe é uma dança, então deixe a música quicar.",
      ],
      tricky: {
        4: "Depois do Dó, o polegar passa por baixo até o Si. Em seguida os dedos 2 e 4 sobem até Ré e Sol.",
        6: "Solte cedo o Lá agudo. Depois o polegar desce uma oitava até o Lá grave.",
        8: "O polegar toca o Fá sustenido, e o dedo 2 toca o Lá. Depois o dedo 4 se estica para cima até o Ré.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave, depois um par de notas ou uma segunda nota.",
        "Toque só a mão direita nos 9 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 10 a 16, onde vêm as colcheias e os pares de notas.",
        "Junte as mãos na música inteira, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "O dedo 5 toca o Sol agudo, e o polegar desce até o Sol grave. Mantenha a mão aberta na largura de uma oitava.",
        "Duas colcheias preenchem um tempo. Conte-as como “um e”, e toque-as por igual.",
        "Termine com Si e Sol juntos. O polegar e o dedo 5 pressionam as duas notas como uma só.",
      ],
      tricky: {
        4: "Depois do Dó, o polegar passa por baixo até o Si. Em seguida os dedos 2 e 4 sobem até Ré e Sol.",
        12: "Os dedos 3, 2 e 3 tocam Ré, Si e Ré rapidamente. Depois o dedo 5 se estica para cima até o Sol.",
        15: "Os dedos 2, 3, 4 e 5 sobem do Ré até o Lá. Depois o dedo 4 desce de volta até o Fá sustenido.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda, até os acordes quebrados rolarem sozinhos.",
        "Toque só a mão direita nos compassos 10 a 16, e passe o polegar por baixo na subida.",
        "Toque os 9 primeiros compassos com as duas mãos, e troque o pedal a cada novo acorde.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal quando o baixo passa para um novo acorde. Solte-o, e pise de novo logo depois da nota do baixo.",
        "Depois do Si, passe o polegar por baixo até o Dó. Em seguida o dedo 2 pega o Ré.",
        "Deixe as passagens rápidas cantarem suaves sobre os acordes quebrados, como um violino num baile.",
      ],
      tricky: {
        10: "Os dedos 5, 3, 2 e 1 descem pelo acorde de Sol. Depois sobem de volta pelo mesmo caminho.",
        14: "O polegar salta para baixo até o Si. Depois os dedos 2, 3 e 5 sobem pelo acorde de Sol até o Si agudo.",
        17: "Toque o último acorde com as duas mãos ao mesmo tempo. Deixe o pedal segurá-lo até o fim.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: uma oitava no tempo, depois um acorde, cada um com uma pausa curta para saltar.",
        "Toque só os arpejos da mão esquerda. O polegar passa por baixo, e o dedo 3 cruza por cima.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Use a pausa curta depois de cada oitava e de cada acorde para saltar até o próximo.",
        "Deixe os arpejos rolarem suaves por baixo das passagens rápidas da mão direita.",
        "Cada acorde termina um pouco antes. Use esse breve silêncio para levar a mão inteira até o próximo acorde.",
      ],
      tricky: {
        17: "Abra a mão sobre Sol, Si, Ré e Sol. Depois desça-a uma oitava até Si, Ré e Sol.",
        18: "A mão sobe de um acorde de Sol grave até o Ré no alto. Depois os dedos 1 e 4 pegam Sol e Dó.",
        19: "Três acordes sobem até o Sol agudo. Mantenha o pulso solto, e conduza com o dedo 5.",
      },
    },
  },
};

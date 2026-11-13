/** The guide of *Swan Lake* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Tchaikovsky escreveu a música do balé O Lago dos Cisnes em 1875 e 1876, e o Balé Bolshoi fez a estreia em 1877. " +
    "Este tema é a melodia do oboé no segundo ato. " +
    "O filme Black Swan (2010) tem cenas de O Lago dos Cisnes.",
  funFact: "Vladimir Begichev encomendou a partitura em maio de 1875, e Tchaikovsky recebeu 800 rublos por ela.",
  versions: {
    common: {
      practice: [
        "Toque os 4 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 9 a 16 só com a mão direita. A mão fica num só lugar.",
        "Agora só a mão esquerda. Ela mantém uma posição por um compasso inteiro ou por meio compasso.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Segure o primeiro Mi enquanto conta até quatro. Depois, quatro notas curtas sobem do Lá ao Ré.",
        "É uma melodia triste e orgulhosa. Deixe cada nota longa e aguda cantar.",
        "Neste compasso, o dedo 2 toca o Lá, para o polegar alcançar o Fá mais abaixo.",
      ],
      tricky: {
        1: "Depois do Mi longo, pouse o polegar no Lá. Em seguida, os dedos 2, 3 e 4 sobem até o Ré.",
        3: "Aqui, toque o Lá com o dedo 2. Depois o polegar desce até o Fá, e o dedo 3 pega o Dó.",
        7: "Como no compasso 3, o dedo 2 toca o Lá, e o polegar desce até o Fá.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Uma nota grave vem no tempo, e um acorde de duas notas responde.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A mão esquerda toca em todos os tempos: uma nota grave, depois um acorde. Conte “um, dois”.",
        "Toque suave com a mão esquerda, para a melodia cantar por cima.",
        "Termine com Lá e Dó juntos. Os dedos 1 e 3 pressionam os dois como se fossem uma nota só.",
      ],
      tricky: {
        3: "Neste compasso, o dedo 2 toca o Lá, para o polegar alcançar o Fá mais abaixo.",
        7: "Como no compasso 3, o dedo 2 toca o Lá, e o polegar desce até o Fá.",
        12: "A mão esquerda toca o Mi com o dedo 1, e depois acrescenta o Si abaixo dele com o dedo 4.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só as terças da mão direita, e pressione juntas as duas notas de cada par, como se fossem uma.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada nova nota do baixo, duas vezes por compasso.",
        "O Sol grave faz atrito com o Fá sustenido que você segura. Esse som áspero e triste é de propósito.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        8: "A mão esquerda toca Lá sustenido na primeira metade. Depois volta para Si menor no final.",
        21: "Os dedos 3 e 5 seguram Ré e Fá sustenido. Depois o polegar começa a subida do Si ao Mi.",
        24: "Use a pausa curta para abrir a mão direita sobre Ré, Fá sustenido e Si.",
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
        "Deixe os arpejos fluírem suaves sob a melodia, e troque o pedal a cada novo acorde.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
      ],
      tricky: {
        12: "A mão esquerda sobe duas oitavas a partir do Fá sustenido, duas vezes. O dedo 3 cruza por cima do polegar até o Lá sustenido.",
        19: "O dedo 2 pega o Si depois do acorde. Depois o polegar desce até o Sol, e o dedo 5 pega o Ré.",
        23: "Como no compasso 19, o polegar desce até o Sol, e o dedo 5 pega o Ré.",
      },
    },
  },
};

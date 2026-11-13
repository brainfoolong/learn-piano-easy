/** The guide of *Toccata and Fugue in D minor* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "A Tocata e Fuga em Ré menor, de Bach, foi publicada pela primeira vez em 1833, quando a música de Bach estava sendo redescoberta. " +
    "Felix Mendelssohn defendeu a obra e a tocou com grande sucesso em 1840. " +
    "O filme Fantasia (1940), de Walt Disney, começa com ela.",
  funFact: "A peça ficou quase desconhecida até a primeira edição, mais de oitenta anos depois da morte de Bach.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 3 só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 4 a 6 só com a mão direita. A mesma ideia volta uma oitava abaixo.",
        "Agora só a mão esquerda. Nos compassos 7 e 8, ela sobe por um acorde sombrio, uma nota de cada vez.",
        "Junte as mãos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal, forte e com ousadia.",
      ],
      tips: [
        "Toque o primeiro Lá forte e segure-o pelo compasso inteiro, como um grande órgão.",
        "Depois da pausa, o dedo 5 desce para o Sol. Em seguida, cada dedo toca um grau abaixo.",
        "Este acorde soa sombrio e tenso. Deixe-o pairar no ar, e depois aproveite o acorde luminoso do compasso 9.",
      ],
      tricky: {
        2: "Use a pausa para levar o dedo 5 do Lá para baixo até o Sol. A passagem rápida então desce dedo por dedo.",
        4: "Use a pausa do compasso 3 para levar a mão uma oitava abaixo. O dedo 5 cai no Lá.",
        11: "Depois da pausa curta, a mão esquerda salta para baixo até o Lá com o dedo 5. O polegar direito pega o Dó sustenido.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita nos 6 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda. Mantenha cada tríade numa só posição da mão, e mova-a só um grau.",
        "Junte as mãos nos compassos 7 a 9, com o pedal pisado durante cada compasso inteiro.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal, forte e com orgulho.",
      ],
      tips: [
        "Toque o Lá longo com força, e depois deixe a passagem rápida descer rolando até o Ré.",
        "O pedal mantém cada nota da subida soando, e assim o acorde cresce uma nota de cada vez.",
        "O Fá sustenido deixa este acorde luminoso. Ele é a resposta a toda a tensão que veio antes.",
      ],
      tricky: {
        2: "Use a pausa para levar o dedo 5 do Lá para baixo até o Sol. Depois a passagem rápida desce dedo por dedo.",
        4: "Use a pausa do compasso 3 para levar a mão direita uma oitava abaixo. O dedo 5 cai no Lá.",
        16: "Use a pausa curta do compasso 15 para saltar com a mão esquerda até o Ré e o Lá graves.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só a mão direita nos 6 primeiros compassos. Faça um Lá, Sol, Lá rápido no começo de cada Lá longo.",
        "Toque só a mão esquerda no compasso 10, onde o baixo ecoa a passagem rápida do início.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal, e capriche no drama.",
      ],
      tips: [
        "O Lá, Sol, Lá rápido é um mordente. Toque-o como um tremor bem pequeno, e depois segure o Lá.",
        "Nesta passagem, o dedo 2 cruza por cima do polegar, e o polegar volta. Mantenha o pulso nivelado.",
        "Troque o pedal no meio de cada compasso, bem quando o novo acorde soa.",
      ],
      tricky: {
        4: "Use a pausa do compasso 3 para levar a mão direita uma oitava abaixo. Depois faça Lá, Sol, Lá rápido e segure o Lá.",
        11: "A passagem sobe por Lá, Dó sustenido, Mi e Sol com os dedos 1, 2, 3 e 5, e depois volta a descer.",
        14: "Use a pausa curta para saltar com a mão esquerda do Ré até o Lá grave. Troque o pedal nesse ponto também.",
      },
    },
    legendary: {
      practice: [
        "Toque só as oitavas da mão direita nos 6 primeiros compassos. Mantenha a mão aberta, com o polegar e o dedo mínimo prontos.",
        "Toque só a mão esquerda. Cada arpejo cobre duas oitavas, e o baixo stride salta entre a nota do baixo e o acorde.",
        "Junte as mãos nos compassos 7 a 9, onde as mãos se revezam para subir pelo acorde sombrio.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde trovejar.",
      ],
      tips: [
        "As oitavas fazem a melodia soar como um órgão. Deixe a nota de cima soar um pouco mais forte.",
        "A mão esquerda começa a subida, e a mão direita a termina. Deve soar como uma única passagem longa.",
        "O baixo repete em oitavas a passagem do início. Faça-o roncar como os tubos mais graves do órgão.",
      ],
      tricky: {
        11: "O arpejo sobe duas oitavas. O polegar passa por baixo no Lá, e o dedo 4 cruza de volta por cima.",
        12: "Mantenha a mão aberta sobre a oitava, com o dedo 5 no Ré agudo e o polegar no Ré grave.",
        13: "O dedo 2 cruza por cima do polegar até o Dó sustenido, e o polegar volta para o Ré.",
      },
    },
  },
};

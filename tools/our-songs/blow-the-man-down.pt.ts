/** The guide of *Blow the Man Down* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Blow the Man Down é uma canção de marinheiro para puxar as adriças, cantada enquanto a tripulação içava uma vela pesada pelo mastro. " +
    "Nossa melodia segue a edição impressa de R. R. Terry, de 1921.",
  funFact: "Um jornal de Syracuse, em Nova York, citou um verso da canção em 1867. Marinheiros a tinham cantado num navio a vapor de Nova York a Glasgow.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 7 só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 8 a 17 só com a mão direita. A mão se desloca duas vezes, sempre depois de uma nota longa.",
        "Agora só a mão esquerda. Ela segura uma ou duas notas por um compasso inteiro.",
        "Junte as mãos nos 7 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Comece com o polegar no Sol. O dedo 2 pega o Si, o dedo 4 pega o Ré e o dedo 5 pega o Mi.",
        "Segure o primeiro Ré por três tempos, depois toque o Mi por um. O Mi curto puxa como uma corda.",
        "Os marinheiros cantavam isto enquanto puxavam uma vela. Dê um pouco mais de peso à primeira nota de cada compasso, como um puxão.",
      ],
      tricky: {
        8: "Depois do Mi longo, a mão desce. O dedo 4 cai no Dó, e o polegar espera sobre o Fá sustenido.",
        13: "O dedo 4 sobe do Lá até o Mi, e o dedo 5 toca o Sol agudo.",
        14: "Depois do Sol agudo, o dedo 5 desce até o Ré. Ele toca o Ré três vezes: curto, longo e depois médio.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave longa, depois um acorde curto.",
        "Toque só a mão direita nos 7 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos compassos 8 a 17, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A mão esquerda toca longa, curta, longa, curta em cada compasso. Deixe a melodia navegar por cima, como um barco nas ondas.",
        "Pressione as duas notas de cada acorde como se fossem uma. A nota de cima é a melodia, então deixe que ela soe um pouco mais forte.",
        "Duas colcheias rápidas preenchem um tempo. Diga “pu-xa” em cada par.",
      ],
      tricky: {
        8: "Depois do acorde de Dó e Mi, a mão desce. O dedo 4 cai no Dó. A mão esquerda toca Ré, depois Lá e Ré juntos.",
        13: "O dedo 4 sobe do Lá até o Mi, e o dedo 5 toca o Sol agudo. A mão esquerda toca Dó, depois Sol e Dó juntos.",
        14: "O dedo 5 desce do Sol agudo até o Ré e toca o Ré três vezes. Mantenha o pulso solto.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda até os acordes quebrados rolarem sozinhos.",
        "Toque os compassos 18 a 24 só com a mão direita. Passe o polegar por baixo na subida.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada nova nota do baixo, duas vezes por compasso.",
        "Depois do Sol com o dedo 3, passe o polegar por baixo até o Lá bemol. Os dedos 2 e 3 então alcançam Si bemol e Dó.",
        "Na descida, o dedo 3 cruza por cima do polegar até o Fá.",
      ],
      tricky: {
        14: "Depois do Mi bemol agudo, o dedo 5 desce até o Si bemol e toca a nota três vezes.",
        18: "Passe o polegar por baixo até o Lá bemol, e mantenha a passagem rápida fluindo. A mão esquerda continua rolando sem parar.",
        21: "A mão se abre sobre uma oitava, de Mi bemol a Mi bemol. Depois os dedos 4 e 3 descem para Ré e Dó.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: uma oitava no tempo, depois um acorde duas vezes, cada um com uma pausa curta para saltar.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque só os arpejos da mão esquerda. Na subida, o dedo 3 cruza por cima do polegar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Use a pausa curta depois de cada oitava e de cada acorde para saltar para o próximo.",
        "Toque a nota de cima de cada acorde grande um pouco mais forte. Ela leva a melodia.",
        "Deixe os arpejos rolarem suaves, como ondas debaixo do navio.",
      ],
      tricky: {
        19: "A mão esquerda começa no Lá bemol grave, e o dedo 3 cruza por cima do polegar até o Dó.",
        22: "O polegar direito fica perto do Lá bemol, e o dedo 5 se estica até o Mi bemol no final.",
        24: "Use a pausa para saltar até o Si bemol grave. A mão direita sobe do Fá ao Ré e volta até o Lá bemol.",
      },
    },
  },
};

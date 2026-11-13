/** The guide of *Can-can* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Offenbach escreveu o Galop infernal para a festa desenfreada dos deuses que fecha sua opereta Orfeu no Inferno, estreada em 1858. " +
    "Nos anos 1890, os cabarés parisienses Moulin Rouge e Folies Bergère passaram a usar a peça para acompanhar o cancã. " +
    "O filme Moulin Rouge!, de 2001, usa a peça na trilha sonora.",
  funFact: "A melodia tem as mesmas notas principais de duas canções bem mais lentas do mesmo ato, mas não se parece nada com elas.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 7 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 8 a 16 só com a mão direita. A mão fica no mesmo lugar.",
        "Agora só a mão esquerda. Ela mantém uma posição por um compasso inteiro ou por meio compasso.",
        "Junte as mãos nos 7 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Segure o primeiro Sol por quatro tempos. As dançarinas esperam a música começar.",
        "O dedo 5 toca os dois primeiros Rés. Depois o dedo 4 pega o Ré, para o dedo 5 alcançar o Mi.",
        "Toque as semínimas curtas e saltitantes, como dançarinas levantando as pernas.",
      ],
      tricky: {
        4: "No Ré, troque do dedo 5 para o dedo 4. Depois o dedo 5 alcança o Mi, e o dedo 2 cai no Si.",
        5: "O dedo 3 sai do Dó, e o dedo 2 toca o Lá duas vezes. Segure cada Lá por dois tempos.",
        10: "O dedo 5 toca o Ré, depois o dedo 3 cai no Si. O polegar fica sobre o Sol.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Uma nota do baixo vem no tempo, e um acorde de duas notas responde.",
        "Toque só a mão direita nos 7 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 7 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal, como num salão de baile à meia-noite.",
      ],
      tips: [
        "A mão esquerda toca em cada tempo: uma nota grave, depois um acorde. Conte “um, dois”.",
        "Os acordes de duas notas usam os dedos 1 e 2, 2 e 4, ou 3 e 5.",
        "Toque a mão esquerda leve e curta, para a melodia dançar por cima.",
      ],
      tricky: {
        4: "No Ré, troque do dedo 5 para o dedo 4. Depois o dedo 5 alcança o Mi, e o dedo 2 cai no Si.",
        11: "Depois do par Sol e Si, o dedo 4 pega o Dó e o dedo 2 pega o Lá. A mão esquerda toca Ré, depois Lá e Dó.",
        15: "A mão direita toca Dó, Lá, Si e Dó. A mão esquerda toca Ré, depois Lá e Dó juntos.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só a escala do compasso 8. O polegar passa por baixo do dedo 3 no Dó.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada acorde novo. No compasso 4, a troca vem no meio.",
        "A escala sobe a partir do Sol com os dedos 1, 2 e 3. Depois o polegar passa por baixo até o Dó.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        11: "O polegar cai no Dó, e o dedo 3 cruza por cima dele, descendo até o Lá.",
        18: "Solte a sexta um pouco antes. Depois o dedo 2 cai no Lá, e o dedo 4 alcança o Dó.",
        23: "Toque a sexta curta. Depois o polegar pega o Ré, e o dedo 3 pega o Fá sustenido.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: uma oitava no tempo, depois um acorde, cada um com uma pausa curta para saltar.",
        "Toque só as oitavas da mão direita. Mantenha os dedos 1 e 5 firmes, e deixe o pulso quicar.",
        "Toque só os arpejos da mão esquerda. O dedo 3 cruza por cima do polegar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Use a pausa curta depois de cada oitava para saltar para a próxima.",
        "A escala percorre duas oitavas. O polegar passa por baixo em cada Dó e em cada Sol.",
        "Deixe os arpejos fluírem suaves por baixo das passagens rápidas, e troque o pedal a cada compasso.",
      ],
      tricky: {
        17: "Abra a mão sobre Sol, Si, Ré e Sol. Depois, na pausa, a mão salta uma oitava acima, até o Lá.",
        21: "Toque Lá, Ré e Lá com os dedos 1, 2 e 5. Na pausa anterior, salte de volta do Dó agudo.",
        23: "Depois do acorde, a passagem rápida sobe a partir do Ré. O polegar passa por baixo no Sol.",
      },
    },
  },
};

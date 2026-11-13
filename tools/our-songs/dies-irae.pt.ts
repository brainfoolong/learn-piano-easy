/** The guide of *Dies irae* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Dies irae é um canto medieval em latim sobre o Juízo Final, cantado por séculos na missa de réquiem. " +
    "Desde Berlioz, os compositores citam esse canto sempre que a música deles fala da morte. " +
    "Os créditos de abertura do filme The Shining (1980), de Stanley Kubrick, são construídos sobre ele.",
  funFact: "Suas primeiras palavras querem dizer “dia de ira, aquele dia”, e o primeiro verso termina com o mundo reduzido a cinzas.",
  versions: {
    common: {
      practice: [
        "Toque os 3 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque só a mão direita a partir do compasso 8. Ali o polegar desce para o Lá.",
        "Agora só a mão esquerda. Ela fica num lugar só, com o dedo mínimo no Ré.",
        "Junte as mãos nos 7 primeiros compassos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Toque devagar e por igual, como monges cantando numa igreja de pedra.",
        "Seu polegar direito fica no Dó. Cada nota até o Sol está debaixo de um dedo.",
        "Enquanto o Ré soa, deslize o polegar para baixo até o Lá, pronto para a última frase.",
      ],
      tricky: {
        1: "Balance a mão entre os dedos 4 e 3 para Fá, Mi e Fá. Mantenha o pulso parado.",
        4: "O dedo 4 toca o Fá duas vezes, e depois o dedo 5 alcança o Sol. Não mova a mão.",
        10: "Balance a mão entre os dedos 4 e 5 para Mi, Fá e Mi. O dedo mínimo toca o Fá.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Ela fica num lugar só, com o dedo mínimo no Ré.",
        "Toque só a mão direita na primeira vez.",
        "Junte as mãos na primeira frase, e pressione juntas as três notas de cada acorde, como se fossem uma.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "No tempo 2, o acorde fica só com duas notas, para o Mi da melodia soar claro.",
        "Na segunda vez, a mão esquerda toca Ré e depois Lá. Sinta o balanço lento de três tempos.",
        "Deixe o último acorde de Ré menor soar até sumir.",
      ],
      tricky: {
        1: "Pressione Ré, Fá e Lá juntos. Depois solte o Fá no tempo 2 e mantenha Ré e Lá pressionados.",
        4: "A mão esquerda toca Fá e Lá com os dedos 3 e 1. O dedo 5 da mão direita alcança o Sol.",
        12: "Aproveite o Ré longo do compasso 11 para levar o polegar direito de volta para cima, até o Dó.",
      },
    },
    epic: {
      practice: [
        "Toque só os acordes quebrados até eles fluírem sozinhos: grave, meio, agudo, meio.",
        "Toque só os acordes de duas notas da mão direita, e pressione as duas notas como se fossem uma.",
        "Junte as mãos na primeira frase, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal em cada barra de compasso. Solte o pedal assim que a nova nota do baixo soar.",
        "Quartas e quintas abertas soam ocas e antigas. Era assim que os cantores harmonizavam o canto há mil anos.",
        "Mantenha os dedos 1 e 5 numa só posição, e mova a mão inteira de nota em nota.",
      ],
      tricky: {
        13: "O polegar fica no Lá por dois acordes e depois desce para o Fá. No começo, só o dedo mínimo se move.",
        16: "O polegar desce do Si bemol para o Lá, e o dedo mínimo desce por Fá, Mi e Ré.",
        17: "A mão sobe a cada tempo: Fá e Dó, Lá e Mi, e depois Si bemol e Fá.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo de sino: bata a oitava grave, depois levante a mão e caia no acorde.",
        "Toque só as oitavas da mão direita, e mantenha a mão numa só posição.",
        "Na segunda metade, toque só a melodia da mão esquerda, bem no grave.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe a última oitava soar.",
      ],
      tips: [
        "Bata cada oitava grave como um sino de igreja, e depois deixe o pedal levar o som.",
        "Agora a melodia canta no grave. Toque os acordes agudos suave, como sinos ao longe.",
        "Levante a mão depois do acorde, e deixe o polegar cair no Lá grave.",
      ],
      tricky: {
        2: "Solte cedo a oitava de Mi, para a mão ter tempo de descer até o Dó.",
        5: "As oitavas descem por Fá, Mi e Ré. Mantenha os dedos 1 e 5 firmes numa só posição.",
        11: "Aqui as duas mãos tocam acordes. Levante cada mão antes de a melodia descer para o grave.",
      },
    },
  },
};

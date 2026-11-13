/** The guide of *Vltava* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Smetana escreveu Vltava em 1874, o segundo dos seis poemas sinfônicos do seu ciclo Má vlast, “Minha Pátria”. " +
    "A música pinta o rio que atravessa Praga. " +
    "Terrence Malick a usa no seu filme The Tree of Life, de 2011.",
  funFact:
    "A famosa melodia de Vltava é uma adaptação de La Mantovana, uma melodia atribuída a Giuseppe Cenci, tenor italiano do Renascimento.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 5 só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 9 só com a mão direita. Ali a melodia desce até o Mi.",
        "Agora só a mão esquerda. Ela mantém uma posição por um compasso inteiro, e nunca sai do lugar.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Comece com o polegar no Si. Depois os dedos 2 a 5 sobem do Mi até o Lá.",
        "Solte o Lá um pouco antes. Aproveite esse instante para subir a mão uma tecla, com o dedo 4 no Si.",
        "Conte seis tempos por compasso: longa, curta, longa, curta. O rio segue fluindo e nunca tem pressa.",
      ],
      tricky: {
        3: "O dedo 4 toca o Si três vezes. A mão acabou de subir uma tecla, então o dedo 5 espera sobre o Dó.",
        5: "Depois dos dois Dós agudos, o dedo 4 toca o Si de novo. Mantenha a mão parada, e deixe os dedos descerem.",
        8: "Toque os dois primeiros Fás sustenidos com o polegar, e o terceiro com o dedo 2. Assim o polegar fica livre para o Mi.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave longa, depois uma nota curta ou um acorde.",
        "Toque só a mão direita nos 9 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Cada meio compasso tem uma nota longa e uma curta, nas duas mãos. Sinta o balanço: longa, curta.",
        "Solte o Lá um pouco antes. Aproveite esse instante para subir a mão uma tecla, com o dedo 4 no Si.",
        "Termine com Mi e Sol juntos. Os dedos 1 e 3 pressionam as duas notas como uma só.",
      ],
      tricky: {
        3: "O dedo 4 toca o Si três vezes depois que a mão sobe. A mão esquerda toca um Mi longo, depois um Si curto.",
        5: "O dedo 4 toca o Si três vezes de novo, e o dedo 3 espera sobre o Lá para o próximo compasso.",
        12: "Os dedos 3, 4 e 5 sobem do Sol ao Si. Depois Lá e Sol voltam rapidamente antes do Si longo.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda até os acordes quebrados fluírem sozinhos.",
        "Toque os compassos 10 a 17 só com a mão direita, e passe o polegar por baixo na subida.",
        "Toque só as terças e sextas da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada nova nota do baixo, duas vezes por compasso.",
        "Passe o polegar por baixo até o Sol depois do Fá sustenido. Depois os dedos 2, 3 e 4 alcançam Lá, Si e Dó.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        16: "O polegar pega o Ré sustenido, e a mão esquerda toca um Ré sustenido grave por baixo. Os dois levam de volta para casa, ao Mi.",
        17: "Os dedos 3, 2 e 1 descem até o Mi. Depois o polegar salta para baixo até o Si, a anacruse da melodia.",
        24: "Os dedos 1 e 3 seguram Ré sustenido e Fá sustenido. Depois o polegar se estica para baixo até o Lá, para a sexta.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: uma oitava no tempo, e depois um acorde duas vezes, cada um com uma pausa curta para saltar.",
        "Toque só os arpejos da mão esquerda. O polegar passa por baixo, e o dedo 3 cruza por cima.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Use a pausa curta depois de cada oitava e de cada acorde para saltar para o próximo.",
        "Deixe os arpejos fluírem suaves, como o rio sob a melodia.",
        "Alguns acordes fazem atrito com o baixo de propósito. Toque a nota de cima de cada acorde um pouco mais forte.",
      ],
      tricky: {
        20: "Abra a mão sobre Dó, Mi, Lá e Dó para o primeiro acorde. Depois o polegar sobe até o Mi para o segundo.",
        22: "O acorde de Lá menor soa três vezes. Mantenha a mão solta, e toque o último com os dedos 2 e 5.",
        24: "Segure os acordes de Si maior, e depois use a pausa curta para abrir a mão sobre Mi, Sol, Si e Mi.",
      },
    },
  },
};

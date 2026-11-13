/** The guide of *Black Flag Jig* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Black Flag Jig é uma melodia nossa, no estilo da trilha sonora de um filme de aventura de capa e espada. " +
    "Ela dança num compasso 6/8 ligeiro, como a giga de um marinheiro no convés.",
  funFact: "A giga é uma dança animada, contada em dois grupos de três. Ela veio das Ilhas Britânicas no século XVI.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 4 só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. No compasso 7, o polegar desce até o Dó sustenido.",
        "Agora só a mão esquerda. Ela segura duas teclas e as troca no máximo duas vezes por compasso.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Conte seis tempos em cada compasso: longa, curta, longa, curta. É assim que a giga pula.",
        "O dedo 5 pega o Si bemol, uma tecla preta. Depois ele toca o Lá no começo do compasso 3, e os dedos descem.",
        "O polegar toca o Dó sustenido, a tecla preta logo abaixo do Ré. Depois a mão se abre até o Lá.",
      ],
      tricky: {
        2: "Os dedos 3, 4 e 5 sobem por Sol, Lá e Si bemol. Depois o dedo 3 volta para o Sol.",
        6: "A mão desce do Sol até o Ré com os dedos 5, 4, 3 e 2. O polegar espera sobre o Dó sustenido.",
        10: "Os dedos 4 e 5 balançam entre Sol e Lá. Depois o dedo 2 cai no Mi.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave longa, depois um acorde curto.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Cada meio compasso da mão esquerda tem uma nota longa e um acorde curto. Sinta o balanço: longa, curta.",
        "Os pares rápidos de colcheias são duas vezes mais rápidos que as notas curtas. Conte-os por igual.",
        "Termine com Ré e Fá juntos. Os dedos 1 e 3 pressionam as duas como se fossem uma.",
      ],
      tricky: {
        4: "O polegar segura o Ré por três tempos, depois o dedo 4 segura o Lá. A mão esquerda quica por baixo dos dois.",
        6: "Os dedos 5, 4, 3 e 2 descem do Sol até o Ré. A mão esquerda passa de Sol menor para Dó maior.",
        13: "O dedo 5 alcança o Lá, depois o polegar cai no Ré. Mi e Fá são colcheias rápidas antes do próximo Lá.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda até os acordes quebrados rolarem sozinhos.",
        "Toque só a mão direita nos compassos 9 a 16, e passe o polegar por baixo na subida.",
        "Toque só as terças e sextas da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada nova nota do baixo, duas vezes por compasso.",
        "Depois do Fá, passe o polegar por baixo até o Sol. Os dedos 2 e 3 então alcançam Lá e Si bemol.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        14: "A mão salta entre Si bemol, Sol e Ré, depois se abre até o Dó. O dedo 2 fica sobre o Sol o compasso inteiro.",
        19: "O polegar segura o Dó sustenido, depois escorrega para o Dó. O dedo de cima desce por Lá, Sol, Fá e Mi.",
        21: "Os dedos 1 e 5 seguram cada sexta e deslizam para baixo, uma tecla de cada vez. O dedo 4 pega o último Fá.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: uma oitava, depois um acorde duas vezes, cada um com uma pausa curta para saltar.",
        "Toque só os arpejos da mão esquerda. Eles sobem duas oitavas e rolam de volta para baixo.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Use a pausa curta depois de cada oitava e de cada acorde para saltar para o próximo.",
        "Deixe os arpejos rolarem para cima e para baixo, como um navio nas ondas.",
        "Toque a nota de cima de cada acorde um pouco mais forte, para a melodia soar clara.",
      ],
      tricky: {
        2: "A mão esquerda salta de uma oitava grave de Sol para um acorde de Sol, Ré e Sol. A mão direita sobe por Sol, Lá e Si bemol.",
        18: "Levante a mão depois de cada acorde, e caia no próximo. O polegar vai do Si bemol até o Ré e volta.",
        21: "O polegar fica no Ré por dois acordes, depois cai no Si bemol. O dedo de cima canta Si bemol, Lá, Sol e Fá.",
      },
    },
  },
};

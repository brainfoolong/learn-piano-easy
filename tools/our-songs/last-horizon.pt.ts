/** The guide of *Last Horizon* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Last Horizon é uma melodia nossa, no estilo de uma trilha sonora de filme moderna. " +
    "Uma figura lenta se repete sob acordes longos e segurados, como no fim de uma longa viagem.",
  funFact: "Uma figura que se repete sem parar sob uma melodia se chama ostinato, palavra italiana que quer dizer “teimoso”.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 4 só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. O dedo 5 sobe uma tecla, até o Si bemol.",
        "Agora só a mão esquerda. Ela segura uma nota grave ou uma quinta durante cada compasso inteiro.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Comece com o dedo 4 no Lá. O polegar espera sobre o Ré, e o dedo 5 sobre o Si bemol.",
        "Conte quatro tempos lentos em cada compasso. A mão esquerda segura cada nota até o fim do compasso.",
        "Toque suave e por igual, como a música no fim de um filme longo.",
      ],
      tricky: {
        4: "Segure o Lá com o dedo 5 por quatro tempos. A mão esquerda toca Fá e Dó juntos, com os dedos 5 e 2.",
        5: "O dedo 5 sobe uma tecla, até o Si bemol. Depois os dedos 4 e 3 descem para Lá e Sol.",
        15: "Quatro notas descem por igual do Fá até o Dó sustenido. O polegar toca o Dó sustenido, e depois o dedo 2 pega o Ré.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave, depois a quinta acima dela, sem parar.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A mão esquerda toca as mesmas duas notas em cada tempo, grave e aguda. Mantenha o ritmo regular e calmo.",
        "Solte o último Sol do compasso 3 um pouco antes. Assim a mão esquerda tem tempo de descer até o Fá.",
        "Pressione Dó sustenido e Mi juntos, com o polegar e o dedo 3.",
      ],
      tricky: {
        5: "O dedo 5 sobe uma tecla, até o Si bemol. A mão esquerda balança entre Sol e Ré.",
        6: "O dedo 3 desce do Sol para o Fá. Depois os dedos 2 e 1 tocam Mi e Ré.",
        16: "Termine com Ré e Fá juntos, com os dedos 2 e 4. A mão esquerda segura Ré e Lá por baixo.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda até os acordes quebrados rolarem sozinhos.",
        "Toque os compassos 9 a 12 só com a mão direita, e passe o polegar por baixo na subida.",
        "Toque só os acordes da mão direita nos compassos 17 a 24, e deixe a nota de cima cantar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal no início de cada compasso, onde o acorde muda.",
        "Mantenha a mão esquerda suave. A figura dela se repete como um motor silencioso sob a melodia.",
        "Depois do Mi bemol, passe o polegar por baixo até o Fá. Em seguida, os dedos 2 e 4 alcançam Sol e Dó.",
      ],
      tricky: {
        6: "O dedo 3 desce do Fá para o Mi bemol. Depois os dedos 2 e 1 descem até o Dó.",
        15: "A mão sobe por Sol, Si e Ré, e depois desce de volta. O polegar termina no Fá.",
        22: "Segure Sol, Dó e Mi bemol com os dedos 1, 2 e 3. Depois os dedos 2 e 1 tocam Ré e Dó.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda nos compassos 9 a 12. Ela repete a mesma figura em cada tempo.",
        "Toque só a mão direita nos 8 primeiros compassos, uma oitava acima da melodia.",
        "Toque só os acordes grandes da mão direita nos compassos 17 a 24, e deixe o dedo de cima cantar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Aqui a mão esquerda toca colcheias em ondas. No compasso 9 elas viram semicolcheias, e a música cresce.",
        "Conte quatro semicolcheias em cada tempo: fundamental, quinta, oitava, quinta. Nunca deixe a figura correr.",
        "Esta é a última aparição do tema, e a mais cheia. Toque a nota de cima de cada acorde um pouco mais forte.",
      ],
      tricky: {
        17: "Abra a mão sobre quatro notas em cada acorde. Levante a mão cedo no fim do compasso, para saltar para baixo.",
        18: "Segure Mi bemol, Lá bemol, Dó e Mi bemol por três tempos. Depois o dedo 4 pega o Dó.",
        23: "Levante a mão depois do primeiro acorde. Depois o dedo 5 cai no Si, com Fá e Ré abaixo dele.",
      },
    },
  },
};

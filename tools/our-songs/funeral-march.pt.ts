/** The guide of *Funeral March* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Esta marcha fúnebre é o terceiro movimento da Sonata para piano n.º 2 de Chopin, publicada em 1840. " +
    "Ela foi tocada no próprio funeral de Chopin, e também no funeral de Estado de John F. Kennedy. " +
    "Filmes e desenhos animados costumam citar o seu começo numa cena de funeral.",
  funFact: "Muitos estudiosos datam a marcha de 1837, dois anos antes de Chopin terminar o resto da sonata.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 5 a 8. Enfim a melodia sai do Ré.",
        "Agora só a mão esquerda. Ela balança entre Ré e Si bemol, como um sino lento.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Conte até quatro no primeiro Ré. Depois, um Ré longo e um Ré curto levam ao próximo compasso.",
        "Toque suave e pesado, como passos lentos atrás de um caixão.",
        "O polegar fica o tempo todo sobre o Dó sustenido. Ele só toca nos compassos 7, 12 e 15.",
      ],
      tricky: {
        7: "Segure o Mi por três tempos e depois toque o Ré por um. Segure o Ré por três tempos, e por último o polegar toca o Dó sustenido.",
        12: "O dedo 3 segura o Mi por quatro tempos. Depois o polegar toca o Dó sustenido, e a mão esquerda fica no Lá.",
        15: "Quatro notas regulares: Mi, Fá, Mi e depois o Dó sustenido com o polegar. Mantenha cada dedo na sua própria tecla.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Ela toca um acorde em cada tempo, como um sino que dobra.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos compassos 9 a 16, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Toque os acordes da mão esquerda suaves e regulares, para a melodia ficar por cima.",
        "Entre os dois acordes, só a nota grave se move. Os dedos 2 e 1 ficam no Ré e no Fá.",
        "Termine com Ré e Fá juntos, e deixe o som sumir devagar.",
      ],
      tricky: {
        10: "Pressione Ré e Fá juntos com os dedos 2 e 4. Depois o dedo 5 toca o Sol, e o dedo 4 toca o Fá.",
        11: "A mão esquerda toca Sol, Si bemol e Ré com os dedos 5, 4 e 2. A mão direita desce a partir do Sol.",
        12: "O polegar e o dedo 3 pressionam Dó sustenido e Mi juntos. A mão esquerda toca só o Lá, com o dedo 5.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só a mão direita no compasso 11. Passe o polegar por baixo até o Fá.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada nova nota do baixo, duas vezes por compasso.",
        "Passe o polegar por baixo até o Fá depois que o dedo 3 tocar o Mi bemol.",
        "Agora a melodia está em cima de cada par. Deixe o dedo 5 cantá-la.",
      ],
      tricky: {
        19: "Mantenha a mão aberta, com o polegar no Mi bemol e o dedo 5 no Dó. Tire o polegar da tecla quando vier o Dó curto.",
        21: "Como no compasso 19, o polegar e o dedo 5 tocam uma sexta. Depois o dedo 5 toca o Dó sozinho.",
        22: "O dedo 4 pega o Dó da sexta, assim o dedo 5 fica livre para subir até o Mi bemol.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: uma oitava no tempo e depois um acorde, cada um com uma pausa curta para saltar.",
        "Toque só os arpejos da mão esquerda. Na subida, o dedo 3 cruza por cima do polegar.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Toque as oitavas pesadas e lentas, como um grande sino. Deixe o dedo mínimo conduzir.",
        "Nos arpejos, o dedo 3 cruza por cima do polegar, e na descida o polegar passa por baixo.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
      ],
      tricky: {
        9: "Começam os arpejos. O dedo 3 cruza por cima do polegar até o Mi bemol, enquanto a mão direita desce a partir do Sol.",
        14: "A mão esquerda começa no Fá grave com o dedo 5. O dedo 3 cruza por cima do polegar até o Lá bemol.",
        22: "Levante a mão na pausa curta e depois pouse em Mi bemol, Lá bemol, Dó e Mi bemol.",
      },
    },
  },
};

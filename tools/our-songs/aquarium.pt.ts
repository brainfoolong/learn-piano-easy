/** The guide of *Aquarium* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Aquarium é o sétimo movimento de O Carnaval dos Animais, uma brincadeira musical que Saint-Saëns escreveu em 1886. " +
    "A suíte foi publicada em 1922, um ano depois da morte dele. " +
    "O filme Days of Heaven (1978), de Terrence Malick, usa esta música nos créditos de abertura.",
  funFact:
    "Saint-Saëns proibiu apresentações públicas da suíte enquanto viveu, com medo de que as brincadeiras prejudicassem sua reputação de compositor sério.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. Agora o polegar começa no Si.",
        "Agora só a mão esquerda. Ela mantém uma posição por um compasso inteiro.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Os dedos 5 e 4 balançam entre Mi e Ré sustenido, como água batendo de leve no vidro.",
        "Toque suave e ligado, como peixes deslizando na água parada.",
        "Aqui a mão sobe uma tecla. Agora o dedo 4 toca o Mi, e o polegar espera sobre o Si.",
      ],
      tricky: {
        1: "Balance entre Mi e Ré sustenido com os dedos 5 e 4. Depois o dedo 4 desliza para o Ré, na tecla branca.",
        3: "O compasso 3 é o compasso 1 de novo. Mantenha o dedo 4 perto da tecla preta, para o Ré sustenido vir fácil.",
        9: "Durante o Si longo, leve a mão de volta para baixo. O polegar volta para o Lá, e o dedo 5 pega o Mi.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Ela alterna entre uma nota grave e uma mais aguda, em cada tempo.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "As duas mãos tocam em cada tempo. Mantenha os tempos regulares como ondas lentas.",
        "Toque a mão esquerda suave, para a melodia flutuar por cima.",
        "Termine com Lá e Dó juntos. Os dedos 1 e 3 pressionam as duas notas como uma só.",
      ],
      tricky: {
        1: "Balance entre Mi e Ré sustenido com os dedos 5 e 4, enquanto a mão esquerda alterna entre Lá e Dó.",
        3: "Como no compasso 1, os dedos 5 e 4 balançam entre Mi e Ré sustenido. Depois o dedo 4 pega o Ré, na tecla branca.",
        9: "Durante o Si longo, leve a mão direita de volta para baixo, para o polegar ficar no Lá de novo.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só os pares da mão direita a partir do compasso 17, e pressione as duas notas de cada par como uma só.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada compasso novo, para a água continuar limpa.",
        "O dedo de baixo da mão esquerda fica perto do Lá. Ele só passa para o Sol sustenido no acorde de Mi.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        9: "Leve a mão direita de volta para baixo durante o Si longo. Depois ela desce do Mi até o Lá com os dedos 5 a 1.",
        15: "A mão esquerda se estica para baixo até o Sol sustenido. A mão direita toca Si, Ré, Dó e Si com os dedos 2, 4, 3 e 2.",
        24: "Segure Sol sustenido e Si com os dedos 1 e 3. Depois abra a mão sobre Lá, Dó e Mi para o último acorde.",
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
        "Use a pausa curta depois de cada oitava e de cada acorde para saltar para o próximo.",
        "Deixe os arpejos ondularem suaves, como a luz passando pela água.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
      ],
      tricky: {
        8: "A mão esquerda salta da oitava de Mi grave até Sol sustenido, Si e Mi. Use cada pausa curta para chegar.",
        18: "Depois do acorde agudo, a mão direita desce para Dó, Mi e Lá. Mantenha a mão na posição do acorde.",
        24: "Levante a mão direita na pausa curta depois de Mi, Sol sustenido e Si. Ela cai em Lá, Dó, Mi e Lá.",
      },
    },
  },
};

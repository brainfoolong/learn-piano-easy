/** The guide of *Old MacDonald Had a Farm* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Old MacDonald Had a Farm é uma canção infantil sobre um fazendeiro e os animais dele. " +
    "Uma versão antiga, chamada Ohio, foi impressa em 1917, num livro de canções cantadas por soldados britânicos. " +
    "Cada estrofe acrescenta um animal e o som dele, então a música dura o quanto quem canta quiser.",
  funFact: "Na canção de 1917, o fazendeiro se chamava Old Macdougal, e sua fazenda ficava em Ohio.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita, devagar, e deixe a música esperar cada nota.",
        "Agora só a mão esquerda. Ela segura cada nota por dois ou quatro tempos.",
        "Junte as mãos nos 8 primeiros compassos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Seu polegar fica no Ré, e o dedo 3 no Sol. Cada dedo mantém sua própria tecla.",
        "Levante um pouco a mão antes do Si agudo, para chegar nele na hora certa.",
        "Estes são os sons dos animais. Faça-os quicar, e sorria se quiser.",
      ],
      tricky: {
        3: "Seu dedo mínimo se estica para cima até o Si agudo, enquanto o polegar fica perto do Ré.",
        7: "A mesma abertura de novo: o dedo mínimono Si, depois o dedo 4 no Lá.",
        15: "Uma última abertura até o Si. Use a pausa curta antes dele para preparar a mão.",
      },
    },
    rare: {
      practice: [
        "Bata palmas nas notas rápidas dos compassos 11 e 12. Depois toque só a mão direita.",
        "Toque só a mão esquerda, e segure cada acorde até o próximo.",
        "Junte as mãos nos 4 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Os dois Rés rápidos são colcheias. Pense neles como um tempo dividido em dois.",
        "Aqui se repete um padrão de curta, curta, longa. Diga o som do animal na cabeça enquanto toca.",
        "O acorde da mão esquerda muda no meio do compasso. Deixe cada um soar por dois tempos.",
      ],
      tricky: {
        3: "O polegar deixa o Ré, e o dedo mínimopega logo o Si agudo. Mantenha a mão aberta.",
        7: "O mesmo salto até o Si. No meio do compasso, o dedo 4 da mão esquerda pega o Lá.",
        15: "O último salto até o Si. Depois dele, só falta o acorde final para as duas mãos.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só as terças da mão direita, e mantenha juntas as duas notas de cada par.",
        "Junte as mãos nos 4 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
        "Troque o pedal a cada meio compasso, quando o baixo Alberti recomeça.",
      ],
      tricky: {
        7: "As terças saltam do Ré até Sol e Si. Mova a mão inteira, e mantenha a posição.",
        15: "Depois da passagem rápida, seu dedo mínimo cai no Si. Deixe a passagem levar a mão até ele.",
        16: "Sua mão cai do Lá para o último acorde. Polegar no Si, dedo 3 no Sol.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a nota do baixo, e volte para cima até o acorde.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque só as passagens rápidas da mão direita, devagar no começo.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a nota do baixo e deixe a mão achar o acorde pelo tato.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
        "As notas rápidas sobem grau a grau, um dedo por tecla, até o dedo mínimono Si.",
      ],
      tricky: {
        4: "Segure o acorde longo por três tempos. Depois desça o polegar até o Sol para o acorde do tempo 4.",
        8: "Seu polegar toca os dois Rés rápidos, e fica pronto para as notas isoladas do compasso 9.",
        13: "A passagem termina com o polegar no Ré. Deslize-o para baixo até o Si para o acorde, com o dedo 2 no Ré.",
      },
    },
  },
};

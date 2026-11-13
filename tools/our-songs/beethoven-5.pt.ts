/** The guide of *Symphony No. 5* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "A Quinta Sinfonia de Beethoven começa com quatro notas, três curtas e uma longa. " +
    "A primeira edição impressa saiu em abril de 1809. " +
    "O filme Fantasia 2000 (1999) começa com esta sinfonia.",
  funFact:
    "Beethoven dedicou a sinfonia a dois de seus mecenas, o príncipe Joseph Franz von Lobkowitz e o conde Razumovsky.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 12 só com a mão direita. A mão fica num só lugar.",
        "Agora só a mão esquerda. Ela segura uma nota por um compasso inteiro.",
        "Junte as mãos nos 4 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "No tempo 1, não toque nada. Depois toque o Mi nos tempos 2, 3 e 4.",
        "Toque as três notas curtas com força, e deixe a nota longa soar pelo compasso inteiro.",
        "O polegar fica no Si, e cada dedo fica na sua própria tecla.",
      ],
      tricky: {
        1: "No tempo 1, não toque nada. Depois toque o Mi três vezes com o dedo 4. Deixe o dedo solto para cada nota nova.",
        7: "O dedo 5 toca o Fá três vezes. Levante-o um pouco entre as notas, para cada uma soar.",
        9: "Os dedos 4 e 5 balançam entre Mi e Fá. Mantenha os dois dedos perto das teclas.",
      },
    },
    rare: {
      practice: [
        "Toque os 4 primeiros compassos só com a mão direita. As notas curtas são colcheias.",
        "Toque só a mão esquerda. Uma nota longa do baixo vem primeiro, depois dois acordes curtos.",
        "Junte as mãos nos compassos 5 a 8, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Cada motivo começa com uma pausa curta. Depois três notas rápidas levam até a nota longa.",
        "Cada compasso repete a ideia do início: três notas curtas e uma longa.",
        "Termine com Dó e Mi juntos. Os dedos 2 e 4 pressionam as duas notas como uma só.",
      ],
      tricky: {
        1: "Três Mis rápidos vêm depois da pausa curta. Toque-os com o dedo 4, leves e regulares.",
        5: "Toque três Mis rápidos com o dedo 4. Depois o dedo 2 segura o Dó por meio compasso.",
        13: "Depois dos três Mis rápidos, os dedos 2 e 4 pressionam Dó e Mi juntos.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só as oitavas dos 4 primeiros compassos. Mantenha a mão aberta do polegar ao dedo mínimo.",
        "Toque a escala do compasso 12 só com a mão direita. Passe o polegar por baixo até o Si bemol.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque as oitavas forte e bem marcadas, depois deixe cada nota longa soar.",
        "Troque o pedal no início de cada compasso, quando o acorde muda.",
        "Passe o polegar por baixo até o Si bemol, depois suba com os dedos 2 a 5.",
      ],
      tricky: {
        5: "Toque o Mi bemol três vezes com o dedo 3. Depois abra bem a mão para Dó e Sol.",
        10: "Comece no Dó agudo com o dedo 5, e desça até o Lá bemol. Depois o polegar cai no Mi bemol.",
        12: "Depois do Lá bemol, passe o polegar por baixo até o Si bemol. Depois os dedos 2 a 5 sobem até o Fá.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: uma oitava no tempo, depois um acorde, cada um com uma pausa curta para saltar.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque a passagem rápida do compasso 12 só com a mão direita. O polegar passa por baixo duas vezes.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Pressione as quatro notas de cada acorde como uma só, com a nota de cima um pouco mais forte.",
        "A mão esquerda sobe duas oitavas em cada compasso. O dedo 3 cruza por cima do polegar.",
        "Passe o polegar por baixo até o Si bemol, e de novo até o Fá. Depois o dedo 5 alcança o Dó.",
      ],
      tricky: {
        3: "A mão esquerda salta do Sol grave até o acorde. Use a pausa curta depois de cada oitava para saltar.",
        4: "A mão direita segura o acorde dela. Deixe a mão esquerda saltar entre o Sol grave e o acorde acima.",
        19: "Toque o Fá em oitavas três vezes, com a mão aberta. A mão esquerda salta do Sol grave como antes.",
      },
    },
  },
};

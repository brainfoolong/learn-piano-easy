/** The guide of *Alle Jahre wieder* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Alle Jahre wieder quer dizer “Todo ano outra vez” em alemão. " +
    "É uma das canções de Natal alemãs mais conhecidas. " +
    "Wilhelm Hey escreveu suas três estrofes em 1837, e elas falam do Menino Jesus, que desce à terra todo ano. " +
    "Friedrich Silcher escreveu a melodia e a publicou em 1842, numa coleção de doze canções para crianças.",
  funFact:
    "A mesma letra também é cantada com uma melodia de Christian Heinrich Rinck. " +
    "Hoje essa melodia quase sempre leva outro poema, Abend wird es wieder.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. Ali a melodia sobe até o Dó agudo.",
        "Agora só a mão esquerda. Ela mantém uma posição e a troca no máximo uma vez por compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "O primeiro Sol é longo e o Lá é curto, como um pequeno impulso antes de o Sol voltar.",
        "Depois do Ré longo, levante a mão e coloque o polegar no Dó central.",
        "Enquanto o Dó agudo soa, deslize o dedo mínimo para baixo até o Si.",
      ],
      tricky: {
        3: "O polegar pega o Dó central. Depois os dedos 2, 3 e 4 sobem até o Fá e voltam para o Mi.",
        6: "O dedo mínimo toca o Dó agudo e depois desliza até o Si. Os dedos 4 e 3 pegam Lá e Sol.",
        14: "O mesmo deslize do compasso 6: segure o Dó agudo e depois leve o dedo mínimo até o Si.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as notas de cada acorde.",
        "Toque só o baixo da segunda estrofe: nota grave, nota aguda, uma em cada tempo.",
        "Junte as mãos na primeira estrofe, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "No acorde de Fá, o polegar sobe do Sol para o Lá, e volta para o próximo acorde.",
        "Na segunda estrofe, toque as notas graves um pouco mais forte que as agudas.",
        "Ré e Mi são rápidos, e o Fá cai no meio do compasso, junto com o acorde.",
      ],
      tricky: {
        3: "O polegar direito desce até o Dó central, enquanto a mão esquerda solta o Mi para o segundo acorde.",
        6: "Aqui as duas mãos se movem. O polegar esquerdo sobe até o Lá, e o dedo mínimo direito desliza até o Si.",
        14: "Sobre o Fá e o Dó graves, o dedo mínimo direito segura o Dó agudo e depois desliza até o Si.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só as terças e sextas da mão direita, e mantenha juntas as duas notas de cada par.",
        "Junte as mãos na primeira estrofe, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
        "Troque o pedal no meio do compasso, onde o acorde muda.",
      ],
      tricky: {
        6: "No meio do compasso, o baixo Alberti passa do acorde de Fá para o de Sol com sétima. Troque o pedal junto.",
        9: "A mão direita salta uma oitava acima e toca pares. Encontre o primeiro par antes de o compasso começar.",
        14: "Lá e Dó, depois Sol e Si, depois Fá e Lá: os pares descem enquanto o dedo mínimo conduz.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: desça num salto até a oitava e suba de volta para o acorde.",
        "Toque só os acordes da mão direita, e deixe o dedo mínimo cantar a melodia.",
        "Toque só os arpejos da mão esquerda, na segunda estrofe.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No baixo stride, olhe para a oitava e deixe a mão achar o acorde pelo tato.",
        "Bem no agudo, as oitavas devem soar como sinos. Mantenha o pulso solto.",
        "Em cada arpejo, o dedo 3 cruza por cima do polegar na subida.",
      ],
      tricky: {
        10: "Depois do arpejo de Dó, a mão esquerda desce até o Sol grave na pausa curta.",
        12: "A mão direita segura a oitava dela, então preste atenção na mão esquerda durante os dois arpejos de Sol.",
        14: "As oitavas saltam até o Dó agudo, enquanto a mão esquerda sobe pelo arpejo de Fá e depois pelo de Sol com sétima.",
      },
    },
  },
};

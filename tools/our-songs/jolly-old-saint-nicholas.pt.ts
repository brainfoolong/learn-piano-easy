/** The guide of *Jolly Old Saint Nicholas* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Jolly Old Saint Nicholas é uma canção de Natal que nasceu como um poema de Emily Huntington Miller. " +
    "O poema saiu com o título Lilly's Secret na revista The Little Corporal, em dezembro de 1865. " +
    "Em geral, acredita-se que a música seja de James R. Murray. " +
    "Ela foi impressa pela primeira vez em 1874, num livro escolar de música chamado School Chimes.",
  funFact: "O maestro Ray Conniff gravou a canção em 1962, para o seu álbum We Wish You a Merry Christmas.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. Ali a melodia desce até o Lá e sobe de novo.",
        "Agora só a mão esquerda. Ela mantém uma posição em cada compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Quatro notas regulares na mesma tecla. Toque leve, como passos num telhado.",
        "O dedo 2 toca o Lá no compasso 5 e o Si no compasso 7. O resto da mão nunca se move.",
        "Segure o último Dó pelos quatro tempos, e levante as duas mãos juntas.",
      ],
      tricky: {
        2: "O dedo 5 deixa o Mi, e o dedo 4 toca o Ré três vezes. Segure o último Ré por dois tempos.",
        10: "Igual ao compasso 2. Por baixo, a mão esquerda passa para Ré e Sol.",
        15: "Os dedos 4, 3, 4 e 5 tocam Ré, Dó, Ré e Mi. Depois o dedo 3 cai no último Dó.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as notas de cada acorde.",
        "Toque só a mão esquerda, na segunda vez: uma nota do baixo, depois o acorde.",
        "Junte as mãos na primeira vez, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Toque cada acorde suave e segure-o, para as notas repetidas da melodia soarem claras por cima.",
        "A mão esquerda solta o Fá no meio do compasso. Por cima, a mão direita sobe até o Mi.",
        "A nota do baixo cai no tempo 1, e o acorde no tempo 3. Conte até quatro em cada compasso.",
      ],
      tricky: {
        2: "O dedo 4 toca o Ré três vezes, enquanto a mão esquerda segura um acorde de Sol com sétima sem o Si.",
        10: "Igual ao compasso 2. Toque o Ré repetido por igual e leve.",
        15: "Os dedos 4, 3, 4 e 5 tocam Ré, Dó, Ré e Mi. No meio do compasso, a mão esquerda solta o Fá.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só os acordes quebrados, na segunda vez, e levante a mão em cada pausa.",
        "Junte as mãos na primeira vez, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia soar por cima como um sino de trenó.",
        "As duas mãos se levantam na pausa. A mão direita salta uma oitava acima, e a esquerda desce até um Dó grave.",
        "Troque o pedal a cada meio compasso, quando a mão esquerda recomeça o padrão.",
      ],
      tricky: {
        17: "A mão direita cai uma oitava acima, no Mi. A mão esquerda começa os acordes quebrados no Dó grave.",
        19: "O dedo 3 toca o Dó agudo quatro vezes, enquanto a mão esquerda se levanta na pausa e cai de novo no Dó.",
        25: "Igual ao compasso 17, agora depois do Ré longo. Coloque o dedo 5 no Mi agudo.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava grave, e volte para cima até o acorde.",
        "Toque os compassos 4 e 5 só com a mão direita, e deixe a passagem rápida leve.",
        "Toque só os arpejos da mão esquerda, na segunda vez.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava grave e deixe a mão achar o acorde pelo tato.",
        "A passagem rápida depois do Mi longo escorrega para baixo, como o Papai Noel pela chaminé. Toque mais leve que a melodia.",
        "Mantenha o polegar e o mínimo abertos a uma oitava de distância, e deixe o pulso quicar.",
      ],
      tricky: {
        21: "Levante a mão por um instante, e as oitavas descem do Mi para o Lá. Mantenha a mão na posição de oitava pelo caminho.",
        29: "A mesma descida para o Lá do compasso 21, enquanto a mão esquerda sobe um arpejo de Fá por baixo.",
        31: "As oitavas andam por Ré, Dó, Ré e Mi. Depois a mão se levanta e cai no acorde de quatro notas.",
      },
    },
  },
};

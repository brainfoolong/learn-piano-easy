/** The guide of *O Come, All Ye Faithful* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "John Francis Wade copiou esta melodia à mão por volta de 1751, com uma letra em latim que começa com Adeste fideles. " +
    "Wade era um católico inglês que vivia de copiar música na França. " +
    "Frederick Oakeley escreveu em 1841 a letra em inglês que a maioria das pessoas canta hoje.",
  funFact: "Em Londres, a canção já foi chamada de “Hino Português”, porque as pessoas a ouviam na capela da embaixada de Portugal.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 3 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 1 a 9 só com a mão direita, até o Sol grave longo.",
        "Agora só a mão esquerda. Ela mantém uma posição em cada metade de compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "O dedo 2 começa no Dó central, e o polegar espera no Sol abaixo dele.",
        "Longa, curta: segure o Lá, e depois deixe o Sol rápido cair no compasso seguinte.",
        "O refrão repete o mesmo chamado três vezes. Toque cada chamado um pouco mais forte que o anterior.",
      ],
      tricky: {
        4: "O dedo 3 cai no Mi depois da pausa curta. Depois os dedos 2, 3 e 4 balançam entre Ré, Mi e Fá.",
        10: "Levante a mão durante a pausa, e caia com o dedo mínimo no Sol agudo. Os dedos 4 e 3 descem até Fá e Mi.",
        11: "Desta vez o dedo mínimo pega o Fá, para o dedo 4 ficar pronto para o Mi.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as notas de cada acorde.",
        "Toque só a mão direita nos 9 primeiros compassos, e sinta o par “longa, curta” do compasso 8.",
        "Junte as mãos no refrão, nos compassos 14 a 17.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Aqui o polegar esquerdo fica no Sol em todos os acordes, então a mão quase não se move.",
        "Longa, curta: o Lá dura o triplo do Sol.",
        "A última linha é a maior. Deixe a música crescer, e depois descanse no último Dó.",
      ],
      tricky: {
        4: "Abra bem a mão: o polegar deixa o Sol grave enquanto o dedo 3 se estica para cima até o Mi.",
        11: "Desta vez o dedo mínimo pega o Fá, para o dedo 4 ficar pronto para o Mi.",
        12: "O dedo 2 volta para o Dó entre o Mi e o Ré. Mantenha a mão parada e deixe os dedos se moverem.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só a mão direita nos 9 primeiros compassos, uma oitava acima do Dó central.",
        "Toque só as terças e sextas da mão direita nos compassos 14 a 17. Pressione as duas notas como uma só.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
        "Troque o pedal no meio de cada compasso, quando a mão esquerda começa um novo acorde.",
      ],
      tricky: {
        7: "A mão direita sobe do Si até o Mi, um dedo por tecla, enquanto a mão esquerda troca de acorde.",
        16: "Os pares passam de terças para sextas e voltam. Olhe para o próximo par antes de tocá-lo.",
        21: "Levante a mão esquerda depois do último Ré, e caia na oitava de Dó grave junto com o acorde final.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava, e volte para cima até o acorde.",
        "Toque só os acordes da mão direita, e deixe o dedo mínimo cantar a melodia.",
        "Toque só as oitavas da mão direita nos compassos 14 a 21. Mantenha a mão aberta e leve.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a nota do baixo e deixe a mão achar o acorde pelo tato.",
        "Nas oitavas, toque com o dedo mínimo um pouco mais forte, para a melodia brilhar em cima.",
        "O baixo em oitavas quebradas rola do dedo mínimo até o polegar, e volta.",
      ],
      tricky: {
        3: "Abra a mão para o acorde de Sol de quatro notas. Depois deixe a mão se fechar em Ré e Sol.",
        8: "O acorde desliza de Sol e Si para baixo, até Fá e Lá. Depois o dedo 2 se acomoda no Sol.",
        12: "O dedo mínimo se estica para cima até o Mi entre os acordes. Depois a mão desce para Lá e Dó.",
      },
    },
  },
};

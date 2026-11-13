/** The guide of *We Three Kings* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "O clérigo americano John Henry Hopkins Jr. escreveu esta canção de Natal em 1857, para um auto de Natal no seminário onde ensinava. " +
    "Ela fala dos Reis Magos e dos presentes deles, e foi publicada em 1863 com o título Three Kings of Orient. " +
    "A estrofe está numa tonalidade menor, e o refrão passa para o modo maior.",
  funFact: "Hopkins planejou a canção para que três homens cantassem uma estrofe cada, sozinhos, um para cada rei.",
  versions: {
    common: {
      practice: [
        "Toque os 2 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. Ali a melodia sobe até o Sol e desce até o Lá.",
        "Agora só a mão esquerda. Ela só troca de posição no primeiro e no quarto tempo.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Cada compasso tem dois grupos de três tempos. Conte “um, dois, três” duas vezes.",
        "No segundo Dó, troque do dedo 3 para o polegar. Assim a mão fica pronta para subir até o Sol.",
        "Depois do Dó longo, a mão inteira desce uma tecla, para o dedo 2 tocar o Si.",
      ],
      tricky: {
        1: "O dedo 5 toca o Mi, o dedo 4 toca o Ré, o dedo 3 toca o Dó, e depois o polegar desce até o Lá.",
        3: "As mesmas notas do compasso 1. Toque as notas longas cheias, e as curtas leves.",
        7: "Segure o Dó longo com o dedo 2, e depois desça a mão para o dedo 2 tocar o Si.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda nos 8 primeiros compassos, e pressione juntas as três notas de cada acorde.",
        "Toque só o baixo de valsa do refrão: nota grave, acorde, acorde.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A estrofe está numa tonalidade menor. Toque suave e por igual, e mantenha cada acorde pressionado o compasso inteiro.",
        "Segure o Dó com o dedo 2, e depois desça a mão uma tecla para o dedo 2 tocar o Si.",
        "O refrão passa para o modo maior. Deixe-o soar mais brilhante, e mantenha leve o baixo de valsa.",
      ],
      tricky: {
        1: "O dedo 5 toca o Mi, o dedo 4 toca o Ré, o dedo 3 toca o Dó, e depois o polegar desce até o Lá.",
        5: "As mesmas notas do compasso 1, depois de uma pausa. Coloque o dedo 5 no Mi antes de começar.",
        14: "Segure o Dó com o dedo 2, e depois desça a mão para o dedo 2 tocar o Si. A mão esquerda passa para o acorde de Mi.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só as terças e sextas da mão direita, e mantenha juntas as duas notas de cada par.",
        "Junte as mãos na estrofe, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "Levante a mão depois do Ré curto, e deixe o polegar cair no Mi logo abaixo, para o refrão.",
        "O polegar e o dedo 5 seguram a sexta, e a mão desliza como um bloco só, de tecla em tecla.",
      ],
      tricky: {
        17: "Levante a mão depois do Ré, e deixe o polegar cair no Mi e o dedo 5 no Dó.",
        27: "Deslize a sexta para cima até Lá e Fá, e depois de volta para Sol e Mi. Mantenha o pulso solto.",
        28: "A sexta desliza de Fá e Ré para cima, até Sol e Mi. O dedo 5 toca a melodia.",
      },
    },
    legendary: {
      practice: [
        "Toque só as oitavas da mão direita, com o polegar e o dedo 5 numa só posição.",
        "Toque só o baixo stride: salte para baixo até a oitava, e depois volte para cima até o acorde.",
        "Toque só os arpejos dos compassos 9 a 16, com a mão esquerda.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Nas oitavas, olhe para o dedo 5 na melodia. O polegar o segue pelo tato.",
        "Em cada arpejo, o dedo 3 cruza por cima do polegar na subida.",
        "Nos acordes, toque o dedo de cima um pouco mais forte, para a melodia cantar.",
      ],
      tricky: {
        3: "As oitavas vão do Si ao Dó e voltam, enquanto a mão esquerda salta entre o Mi grave e o acorde de Mi.",
        7: "O mesmo do compasso 3. Mantenha as oitavas regulares e a mão leve.",
        9: "A mão esquerda começa seu primeiro arpejo, que sobe duas oitavas a partir do Dó e volta, sob o Dó repetido.",
      },
    },
  },
};

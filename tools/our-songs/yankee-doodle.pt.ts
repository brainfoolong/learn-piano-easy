/** The guide of *Yankee Doodle* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Yankee Doodle é uma melodia tradicional que os soldados britânicos cantavam para zombar dos colonos americanos. " +
    "Durante a Revolução Americana, os americanos adotaram a canção e passaram a cantá-la com orgulho. " +
    "Uma das primeiras versões impressas dela está num livro de melodias que James Aird publicou em Glasgow, em 1782.",
  funFact: "Yankee Doodle é a canção oficial do estado de Connecticut.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita, devagar, e deixe a música esperar cada nota.",
        "Agora só a mão esquerda. Cada nota dela dura dois tempos ou mais.",
        "Junte as mãos nos 4 primeiros compassos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "O dedo 2 fica no Dó, e o seu polegar desce até o Sol grave no fim do compasso 2.",
        "As duas notas do compasso 4 duram dois tempos, então conte-os.",
        "Levante a mão por um instante depois do Dó do compasso 6. Ela cai uma tecla mais abaixo.",
      ],
      tricky: {
        6: "Desça por Fá, Mi, Ré e Dó com os dedos 5, 4, 3 e 2, e depois levante a mão.",
        7: "Deixe o dedo 2 cair no Si, e o polegar pega o Sol grave.",
        8: "O dedo 4 toca os dois Dós. Segure cada um por dois tempos.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita em toda a estrofe, devagar.",
        "Toque só a mão esquerda. Mantenha cada acorde até a próxima nota.",
        "Junte as mãos no refrão, que fica mais acima no teclado.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A nota do baixo vem primeiro, e o acorde responde. Toque o acorde um pouco mais suave.",
        "Troque para o polegar no segundo Sol, para a mão poder subir até o refrão.",
        "Aqui a melodia sobe até sua nota mais aguda. Deixe-a soar, e depois pouse com suavidade no Sol.",
      ],
      tricky: {
        7: "Desça o dedo 2 do Sol para o Fá sustenido, e o polegar cai no Ré logo abaixo.",
        12: "Seu polegar toca o Si, e depois desce para o Sol. Primeiro segure o Si durante os dois tempos.",
        15: "O polegar pega o Ré, e depois o dedo 4 alcança o Sol. Mantenha a mão aberta.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só a passagem rápida do compasso 8, e passe o polegar por baixo até o Dó.",
        "Toque só o refrão em terças, e mantenha juntas as duas notas de cada par.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "O polegar passa por baixo do dedo 3 para alcançar o Dó, e a passagem continua subindo até o refrão.",
        "Os Fás sustenidos fazem atrito com o baixo por um instante, de propósito.",
      ],
      tricky: {
        7: "Desça o dedo 2 do Sol para o Fá sustenido. O resto da mão vai junto.",
        11: "O refrão volta para o Ré. O dedo 3 o pega, e a mão fica pronta para o Dó.",
        15: "A mão se abre numa sexta, sobre Si e Sol, e depois sobe até Fá sustenido e Lá.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava, e depois volte para cima até o acorde.",
        "Toque só as sextas e terças da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque só as oitavas do refrão, com a mão esquerda.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava e deixe a mão achar o acorde pelo tato.",
        "O polegar toca todas as notas mais graves, e os dedos 4 e 5 levam a melodia.",
        "Toque as oitavas curtas, e deixe o pedal ligá-las.",
      ],
      tricky: {
        3: "A melodia sobe enquanto o baixo salta. Mantenha os olhos na mão esquerda.",
        5: "As sextas se movem numa só posição. Deixe o polegar conduzir cada passo para cima.",
        8: "Levante a mão depois do segundo acorde, e depois salte até o Mi para o refrão.",
      },
    },
  },
};

/** The guide of *Up on the Housetop* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Benjamin Hanby escreveu esta canção de Natal em 1864, quando dirigia uma escola de canto em New Paris, Ohio. " +
    "Ela foi publicada primeiro pela Root & Cady, na revista Our Song Birds. " +
    "É considerada a primeira canção de Natal que fala principalmente do Papai Noel. " +
    "Hanby escreveu umas 80 canções antes de morrer de tuberculose em 1867.",
  funFact:
    "Um livro a considera a segunda canção de Natal não religiosa mais antiga. Só Jingle Bells, publicada em 1857, é mais antiga.",
  versions: {
    common: {
      practice: [
        "Toque os 4 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque o refrão só com a mão direita. Agora o dedo 3 também entra, no Fá.",
        "Agora só a mão esquerda. Ela mantém uma posição por meio compasso ou por um compasso inteiro.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Apoie o polegar no Ré, e os dedos 2 a 5 em Mi, Fá, Sol e Lá.",
        "Levante um pouco a mão depois do Ré, para o polegar cair no Dó no compasso 2.",
        "O refrão começa aqui. Toque-o um pouco mais brilhante que a estrofe.",
      ],
      tricky: {
        1: "Os dedos 4 e 5 balançam entre Sol e Lá. Depois o dedo 2 toca o Mi, e o polegar toca o Ré.",
        2: "Levante a mão depois do Ré, e deixe o polegar cair no Dó. O dedo 2 toca o Mi, e o dedo 4 segura o Sol.",
        5: "O início volta. Desta vez o dedo 2 segura o Mi por mais tempo, e nenhum Ré vem antes do Dó.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda na estrofe, e pressione juntas as notas de cada acorde.",
        "Toque só a mão esquerda no refrão: a fundamental de cada acorde, e depois a quinta.",
        "Toque os compassos 5 a 8 só com a mão direita. Ali vêm as notas curtas.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Segure cada acorde suave até o fim, para a melodia cantar por cima.",
        "Depois do primeiro Lá, os dois Lás seguintes e os dois Sóis são duas vezes mais rápidos. Toque-os por igual.",
        "No refrão, toque cada fundamental um pouco mais forte que a quinta que vem depois.",
      ],
      tricky: {
        2: "O polegar desliza do Ré para o Dó. O dedo 2 toca o Mi, e o dedo 4 segura o Sol.",
        6: "O mesmo movimento do compasso 2: o polegar desliza do Ré para o Dó, quando começa o próximo acorde.",
        7: "O dedo 5 toca o Lá três vezes, depois o dedo 4 toca o Sol duas vezes. Depois o dedo 2 toca o Mi.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só as terças da mão direita, e mantenha juntas as duas notas de cada par.",
        "Junte as mãos na estrofe, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia soar por cima.",
        "Pressione as duas notas de cada terça ao mesmo tempo, e deixe o dedo de cima cantar.",
        "Troque o pedal a cada meio compasso, quando a mão esquerda começa um novo acorde.",
      ],
      tricky: {
        2: "O polegar desliza do Ré para o Dó, enquanto o baixo Alberti continua rolando embaixo.",
        6: "O mesmo movimento do compasso 2. Mantenha a mão esquerda firme enquanto o polegar desliza.",
        13: "As terças sobem de Mi e Sol para Fá e Lá, e voltam. Os dedos 2 e 4 passam a vez para o 3 e o 5.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava grave, e depois volte para cima até o acorde.",
        "Toque a estrofe só com a mão direita, e mantenha leves os preenchimentos rápidos.",
        "Toque só os arpejos do refrão, com a mão esquerda.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava grave e deixe a mão achar o acorde pelo tato.",
        "No preenchimento rápido, os dedos 5, 4, 3 e 2 descem do Lá até o Mi.",
        "Levante a mão depois do Sol, e caia no acorde de quatro notas com o pedal pisado.",
      ],
      tricky: {
        3: "O dedo 5 toca o Lá duas vezes, depois a mão rola para baixo até o Mi. A mão esquerda salta do Fá para o Dó.",
        4: "Depois do Sol longo, os dedos 3, 2 e 3 tocam Fá, Mi e Fá rapidamente, e a melodia volta para o Sol.",
        7: "O dedo 5 repete o Lá, depois o dedo 4 repete o Sol. Mantenha leves as notas rápidas sobre o stride.",
      },
    },
  },
};

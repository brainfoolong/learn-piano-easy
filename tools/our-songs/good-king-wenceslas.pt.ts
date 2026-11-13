/** The guide of *Good King Wenceslas* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "A melodia é Tempus adest floridum, uma canção de primavera do século XIII. " +
    "Ela foi publicada pela primeira vez em 1582, em Piae Cantiones, um livro de canções finlandês. " +
    "Em 1853, o inglês John Mason Neale, autor de hinos, escreveu uma nova letra para ela, com o seu editor musical Thomas Helmore. " +
    "A canção conta a história de um rei da Boêmia que enfrenta o frio do inverno para dar esmola a um camponês pobre.",
  funFact: "Em vida, Venceslau foi apenas um duque. Só a lenda, mais tarde, fez dele um rei.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 8 a 11, subindo até o Sol agudo e descendo de volta até o Lá.",
        "Agora só a mão esquerda. Ela muda de posição apenas nos tempos 1 e 3.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "O polegar começa no Sol, e o dedo 4 toca o Dó repetido.",
        "Toque o segundo Dó com o polegar. Depois o dedo mínimo alcança o Sol agudo.",
        "Levante a mão depois do Dó, e pouse o dedo 2 no Lá.",
      ],
      tricky: {
        1: "O dedo 4 toca o Dó três vezes, e depois o dedo 5 toca o Ré. O polegar espera sobre o Sol.",
        5: "As mesmas notas do compasso 1. Toque os três Dós por igual, e o Ré leve.",
        11: "Depois de levantar a mão, o dedo 2 pousa no Lá e o polegar pega o Sol. Depois os dedos 2 e 3 sobem até Lá e Si.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda nos 8 primeiros compassos, e pressione juntas as notas de cada acorde.",
        "Toque só a mão esquerda a partir do compasso 9: uma nota grave e depois o acorde, um em cada tempo.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Segure cada acorde suave pelos seus dois tempos, para a melodia soar por cima.",
        "Toque o segundo Dó com o polegar. Depois o dedo mínimo alcança o Sol agudo.",
        "Toque a nota grave um pouco mais forte que o acorde que vem depois.",
      ],
      tricky: {
        1: "O dedo 4 toca o Dó três vezes, e depois o dedo 5 toca o Ré. A mão esquerda toca o acorde de Dó duas vezes.",
        5: "As mesmas notas do compasso 1. Toque os três Dós por igual, e o Ré leve.",
        11: "Depois de levantar a mão, o dedo 2 pousa no Lá. A mão esquerda toca Fá, depois Dó, depois Sol e depois o seu acorde.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só a mão esquerda nos acordes quebrados da segunda estrofe.",
        "Junte as mãos na primeira estrofe, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "Depois do último Dó, a mão direita salta uma oitava para cima, e a mão esquerda desce até um Dó grave.",
        "Troque o pedal a cada meio compasso, quando a mão esquerda começa um novo acorde.",
      ],
      tricky: {
        18: "A mão direita recomeça uma oitava acima, e a mão esquerda desce até o Dó grave.",
        28: "A mão esquerda faz uma pausa depois do acorde de Fá, e depois salta para o Sol grave.",
        33: "A melodia salta do Dó para o Fá, enquanto a mão esquerda faz uma pausa e desce até o Fá grave.",
      },
    },
    legendary: {
      practice: [
        "Toque só as oitavas da mão direita, com o polegar e o dedo 5 numa só posição.",
        "Toque só o baixo stride: salte para baixo até a oitava, e depois volte para cima até o acorde.",
        "Toque só a mão direita nos acordes da segunda estrofe.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava grave e deixe a mão achar o acorde pelo tato.",
        "Mantenha o polegar e o dedo 5 abertos numa oitava, e deixe o pulso levar a passagem rápida para baixo.",
        "Solte cada acorde um pouco antes para mudar a mão de lugar. O pedal segura o som.",
      ],
      tricky: {
        3: "As oitavas andam por Lá, Sol, Lá e Si, enquanto a mão esquerda salta do Fá grave para o seu acorde, e depois para o Sol.",
        7: "Igual ao compasso 3. Toque as oitavas por igual, e deixe o pulso solto.",
        11: "Os mesmos passos mais uma vez, depois da passagem rápida para baixo. Toque o baixo stride leve, por baixo das oitavas.",
      },
    },
  },
};

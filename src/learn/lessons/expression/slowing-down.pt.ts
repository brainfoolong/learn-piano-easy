/** *Slowing down* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { SlowingDownTexts } from "./slowing-down.en";

export const slowingDownPt: Translation<SlowingDownTexts> = {
  title: "Mais devagar",
  steps: {
    "slowing-demo": {
      text: "Ouça esta frase. Ela sobe com velocidade constante. Na descida, cada nota demora um pouco mais.",
    },
    "what-ritardando-is": {
      text: "A música ficou mais lenta de propósito. A indicação rit., abreviação de ritardando, pede que você vá mais devagar aos poucos. Ela costuma aparecer no fim de uma peça.",
    },
    "rit-means": {
      text: "Você vê rit. sobre alguns compassos. O que você faz?",
      answers: ["Ir mais devagar aos poucos", "Tocar mais forte", "Parar de repente", "Acelerar"],
    },
    "steady-tap": {
      text: "Ir mais devagar só faz sentido depois de uma pulsação regular. Toque junto com os cliques e acompanhe-os com exatidão.",
    },
    "play-the-ending": {
      text: "Toque o fim da frase: Sol, Fá, Mi, Ré e Dó, a partir do Sol acima do Dó central. Demore um pouco mais em cada nota e descanse no último Dó.",
    },
    "what-a-fermata-is": {
      text: "Este sinal parece um olho: uma curva com um ponto embaixo. É a fermata, o sinal de suspensão. A nota sob ela dura mais do que está escrito.",
    },
    "fermata-demo": {
      text: "Ouça a fermata sobre o Sol. A pulsação para enquanto o Sol soa, e depois a música continua.",
    },
    "fermata-means": {
      text: "Há uma fermata sobre uma nota. O que ela pede?",
      answers: ["Tocar a nota curta", "Tocar a nota mais forte", "Deixar a nota de fora", "Segurar a nota mais do que está escrito"],
    },
    "back-in-tempo": {
      text: "Depois de um rit., as palavras a tempo trazem de volta a velocidade de antes. Em italiano, elas querem dizer “no tempo”.",
    },
    "a-tempo-demo": {
      text: "Ouça. A frase fica mais lenta no meio, e depois a indicação a tempo traz de volta a primeira velocidade.",
    },
    "a-tempo-means": {
      text: "Você foi mais devagar por causa de um rit. Agora você vê a indicação a tempo. O que você faz?",
      answers: ["Ir ainda mais devagar", "Voltar à primeira velocidade", "Segurar a próxima nota", "Tocar suave"],
    },
    "where-rit-goes": {
      text: "Onde você encontra rit. com mais frequência?",
      answers: ["Logo na primeira nota", "Em todos os compassos", "Perto do fim de uma peça", "Só na mão esquerda"],
    },
    "ending-with-fermata": {
      text: "Toque Mi, Ré, Dó, Ré, Mi, Mi a partir do Mi acima do Dó central, indo mais devagar aos poucos. Termine num acorde: com a mão esquerda, o Dó abaixo do Dó central e o Sol acima dele, e com a direita mais um Mi. Deixe o acorde soar um pouco mais, como pede uma fermata.",
    },
    "rall-means": {
      text: "Algumas peças escrevem rall., abreviação de rallentando, em vez disso. Qual indicação quer dizer o mesmo?",
      answers: ["A indicação rit.", "A indicação a tempo", "A fermata", "A indicação mf"],
    },
    recap: {
      text: "Muito bem. Agora você já sabe mudar o andamento de propósito.",
      points: [
        "rit. e rall. pedem ir mais devagar aos poucos, em geral perto do fim.",
        "A fermata segura a nota mais do que está escrito.",
        "A indicação a tempo traz de volta a primeira velocidade.",
      ],
    },
  },
};

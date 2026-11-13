/** *Phrases* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { PhrasesTexts } from "./phrases.en";

export const phrasesPt: Translation<PhrasesTexts> = {
  title: "Frases",
  steps: {
    "phrase-demo": {
      text: "Ouça duas melodias curtas, uma depois da outra. A primeira parece perguntar algo, e a segunda responde. Repare na pequena respiração entre elas.",
    },
    "musical-sentences": {
      text: "A música fala em frases, assim como você. Uma frase musical funciona como uma frase falada e muitas vezes tem quatro compassos.",
    },
    "what-is-a-phrase": {
      text: "O que é uma frase?",
      answers: ["Uma única nota forte", "Um trecho como uma frase falada, muitas vezes de quatro compassos", "Um acorde tocado quebrado", "Um sinal que pede para tocar rápido"],
    },
    "the-long-slur": {
      text: "Uma ligadura curta une algumas notas em legato. Uma ligadura longa sobre vários compassos marca uma frase inteira. Toque as notas dela como uma só linha ligada.",
    },
    "slur-shows": {
      text: "Uma ligadura longa se estende por quatro compassos. O que ela mostra?",
      answers: ["Uma frase, tocada como uma só linha ligada", "Quatro notas fortes", "Levantar a mão depois de cada nota", "Manter o pedal pisado"],
    },
    "play-question": {
      text: "Toque a primeira frase com a mão direita na posição de Dó: Dó-Ré-Mi-Fá, Sol, Mi, Fá-Mi-Ré-Mi, e termine no Ré. Mantenha a frase fluida.",
    },
    breathe: {
      text: "No fim de uma frase, levante um pouco a mão, como quem canta e toma fôlego. Depois comece a frase seguinte.",
    },
    "question-and-answer": {
      text: "Toque a primeira frase e levante a mão depois do último Ré. Depois toque a segunda: Dó-Ré-Mi-Fá, Sol, Mi, Fá-Mi-Ré-Ré, e termine no Dó.",
    },
    "open-and-home": {
      text: "A primeira frase termina no Ré, então soa aberta, como uma pergunta. A segunda termina no Dó, a nota onde Dó maior repousa, como uma resposta.",
    },
    "which-ends-answer": {
      text: "Em Dó maior, qual última nota faz uma frase soar concluída, como uma resposta?",
      answers: ["Ré", "Fá", "Si", "Dó"],
    },
    "rise-and-fall-demo": {
      text: "Ouça uma frase. Ela começa suave, fica mais forte até o Sol e volta a ficar mais suave perto do fim.",
    },
    "where-loudest": {
      text: "Onde uma frase costuma ser mais forte?",
      answers: ["Na primeira nota", "Na última nota", "Perto do meio ou na nota mais aguda", "Em nenhum lugar, ela não muda"],
    },
    "shape-both-phrases": {
      text: "Toque duas frases com a mão direita, começando no Dó central, e respire entre elas. Primeiro toque Dó Ré Mi Fá Sol, Mi Fá Mi Ré, Mi Ré. Depois toque Dó Ré Mi Fá Sol, Mi Fá Mi Ré, Ré Dó. Só as notas são conferidas, então use seus ouvidos para deixar cada frase mais forte até o Sol e mais suave no fim.",
    },
    "when-to-breathe": {
      text: "Quando você levanta a mão para respirar?",
      answers: ["Depois de cada nota", "Entre duas frases", "No meio de uma frase", "Nunca"],
    },
    recap: {
      text: "Muito bem. Agora você já sabe tocar música em frases.",
      points: [
        "Uma frase musical é como uma frase falada e muitas vezes tem quatro compassos.",
        "Uma ligadura longa mostra uma frase. Toque a frase como uma só linha ligada.",
        "Levante a mão para respirar entre duas frases.",
        "Uma frase muitas vezes pergunta ou responde, e fica mais forte, depois mais suave.",
      ],
    },
  },
};

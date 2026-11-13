/** *Crescendo and diminuendo* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { CrescendoAndDiminuendoTexts } from "./crescendo-and-diminuendo.en";

export const crescendoAndDiminuendoPt: Translation<CrescendoAndDiminuendoTexts> = {
  title: "Crescendo e diminuendo",
  steps: {
    "crescendo-demo": {
      text: "Ouça Dó, Ré, Mi, Fá e Sol. Cada nota soa um pouco mais forte que a anterior.",
    },
    "getting-louder": {
      text: "Ficar mais forte aos poucos é um crescendo. A partitura o indica com cresc. ou com o sinal de crescendo <, que se abre à medida que o som cresce.",
    },
    "what-cresc-asks": {
      text: "Você vê cresc. sob a pauta. O que essa indicação pede?",
      answers: ["Ficar mais suave aos poucos", "Ficar mais forte aos poucos", "Tocar mais rápido", "Tocar as notas mais agudas"],
    },
    "play-crescendo": {
      text: "Toque Dó, Ré, Mi, Fá e Sol em crescendo, começando no Dó central. Pressione Dó, Ré e Mi com delicadeza e devagar, e depois Fá e Sol depressa e com firmeza.",
    },
    "hear-crescendo": {
      text: "Ouça Dó, Ré, Mi, Fá e Sol tocados em crescendo. Cada tecla desce um pouco mais depressa que a anterior.",
    },
    "how-crescendo-changed": {
      text: "Como o som mudou da primeira nota até a última?",
      answers: ["Continuou suave", "Ficou mais suave", "Continuou forte", "Ficou mais forte"],
    },
    "diminuendo-demo": {
      text: "Agora ouça Sol, Fá, Mi, Ré e Dó. Cada nota soa um pouco mais suave que a anterior.",
    },
    "getting-softer": {
      text: "Ficar mais suave aos poucos é um diminuendo, indicado com dim. Ele também se chama decrescendo, indicado com decresc. O sinal de diminuendo >, que se fecha, pede o mesmo.",
    },
    "which-hairpin-softer": {
      text: "Qual indicação pede para ficar mais suave aos poucos?",
      answers: ["O sinal de diminuendo >", "O sinal de crescendo <", "A indicação f", "A indicação mf"],
    },
    "play-diminuendo": {
      text: "Toque Sol, Fá, Mi, Ré e Dó em diminuendo, começando no Sol acima do Dó central. Pressione Sol, Fá e Mi depressa e com firmeza, e depois Ré e Dó com delicadeza e devagar.",
    },
    "hear-diminuendo": {
      text: "Ouça Sol, Fá, Mi, Ré e Dó tocados em diminuendo. Cada tecla desce um pouco mais devagar que a anterior.",
    },
    "how-diminuendo-changed": {
      text: "Como o som mudou da primeira nota até a última?",
      answers: ["Ficou mais forte", "Continuou forte", "Ficou mais suave", "Continuou suave"],
    },
    "swell-and-fade": {
      text: "Muitas vezes, uma frase fica mais forte quando sobe e mais suave quando desce. Ela cresce e se desfaz como uma onda.",
    },
    "play-swell": {
      text: "Toque do Dó central até o Sol e volte até o Dó. Fique mais forte na subida e mais suave na descida. Este passo confere só as notas, então deixe seus ouvidos julgarem o volume.",
    },
    "how-it-ends": {
      text: "Uma frase começa com p e tem um sinal de crescendo < embaixo. Como ela deve terminar?",
      answers: ["Mais suave que p", "Tão suave quanto começou", "Mais rápida do que começou", "Mais forte do que começou"],
    },
    recap: {
      text: "Muito bem. Agora você já sabe deixar a música mais forte e mais suave.",
      points: [
        "Um crescendo fica mais forte. Ele é indicado com cresc. ou com o sinal de crescendo <.",
        "Um diminuendo fica mais suave. Ele é indicado com dim., decresc. ou com o sinal de diminuendo >.",
        "Muitas vezes, uma frase cresce na subida e se desfaz na descida.",
      ],
    },
  },
};

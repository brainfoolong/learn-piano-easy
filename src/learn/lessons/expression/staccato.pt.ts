/** *Staccato* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { StaccatoTexts } from "./staccato.en";

export const staccatoPt: Translation<StaccatoTexts> = {
  steps: {
    "staccato-demo": {
      text: "Ouça as notas de Dó a Sol, subindo e descendo. Cada nota é curta, com um pequeno silêncio depois dela.",
    },
    "short-and-detached": {
      text: "Tocar de forma curta e destacada se chama staccato. Cada nota fica separada, como gotas de chuva batendo numa janela.",
    },
    "what-staccato-means": {
      text: "O que quer dizer staccato?",
      answers: ["Curto e destacado", "Fluido e ligado", "Lento e suave", "Cada vez mais forte"],
    },
    "the-dot": {
      text: "Um pequeno ponto acima ou abaixo da cabeça da nota pede staccato. O ponto de uma nota pontuada fica ao lado da cabeça e deixa a nota mais longa.",
    },
    "where-the-dot-sits": {
      text: "Onde fica o ponto de staccato?",
      answers: ["Ao lado da cabeça da nota, à direita", "No fim do compasso", "Acima ou abaixo da cabeça da nota", "Em cima da haste"],
    },
    bounce: {
      text: "No staccato, quique na tecla como uma bola quica no chão. Toque de leve, a partir do pulso, e deixe a tecla voltar logo.",
    },
    "both-hands-bounce": {
      text: "Toque Dó, Mi, Sol, Mi, Dó com as duas mãos juntas, a direita a partir do Dó central e a esquerda uma oitava abaixo. Quique em cada nota.",
    },
    "contrast-demo": {
      text: "Ouça as mesmas cinco notas duas vezes. Uma vez elas soam em legato, e a outra, em staccato.",
    },
    "which-came-first": {
      text: "Como soaram as duas frases?",
      answers: ["As duas curtas", "Primeiro ligada, depois curta", "Primeiro curta, depois ligada", "As duas ligadas"],
    },
    "mixing-both": {
      text: "A música muitas vezes mistura os dois. Uma ligadura une algumas notas, e pontos deixam outras curtas.",
    },
    "mixed-phrase": {
      text: "Toque Dó, Ré, Mi, Fá e Sol em legato, sob uma ligadura, começando no Dó central. Depois quique em mais três Sóis curtos.",
    },
    "dot-above-quiz": {
      text: "Uma nota tem um pequeno ponto acima dela. Como você a toca?",
      answers: ["Ligada à nota seguinte", "Duas vezes mais longa", "Segurada com o pedal", "Curta, quicando na tecla"],
    },
    "bounced-chords": {
      text: "Quique acordes com a mão direita a partir do Dó central. Toque Dó maior duas vezes, depois Fá maior como Dó-Fá-Lá, Sol maior como Si-Ré-Sol e Dó maior de novo.",
    },
    "which-lets-go-early": {
      text: "Em qual estilo o dedo deixa a tecla bem antes da nota seguinte?",
      answers: ["Em staccato", "Em legato", "Sob uma ligadura", "Numa semibreve"],
    },
    recap: {
      text: "Muito bem. Agora você já sabe tocar de forma curta e destacada.",
      points: [
        "Staccato quer dizer curto e destacado.",
        "Um ponto acima ou abaixo da cabeça da nota indica o staccato.",
        "Quique de leve na tecla, a partir do pulso.",
        "O legato une as notas, e o staccato as separa.",
      ],
    },
  },
};

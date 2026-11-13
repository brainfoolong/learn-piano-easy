/** *Loud and soft* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { LoudAndSoftTexts } from "./loud-and-soft.en";

export const loudAndSoftPt: Translation<LoudAndSoftTexts> = {
  title: "Forte e suave",
  steps: {
    "soft-and-loud-demo": {
      text: "Ouça Dó, Ré, Mi, Fá e Sol tocados duas vezes. Na primeira vez, eles soam suaves. Na segunda, soam fortes.",
    },
    "key-speed": {
      text: "O volume de uma nota depende da velocidade com que a tecla desce. Uma tecla pressionada com delicadeza e devagar soa suave. Uma tecla pressionada depressa soa forte.",
    },
    "what-makes-loud": {
      text: "O que faz uma nota soar mais forte?",
      answers: ["Segurar a tecla por mais tempo", "Pressionar uma tecla mais à esquerda", "Pressionar a tecla mais depressa", "Pressionar uma tecla preta"],
    },
    "play-softly": {
      text: "Toque Dó, Ré, Mi, Fá e Sol suavemente, começando no Dó central. Pressione cada tecla com delicadeza e devagar.",
    },
    "hear-softly": {
      text: "Ouça Dó, Ré, Mi, Fá e Sol tocados suavemente. Cada tecla desceu com delicadeza e devagar.",
    },
    "how-softly-sounded": {
      text: "Como soaram essas cinco notas?",
      answers: ["Suaves", "Fortes", "Suaves, depois fortes", "Fortes, depois suaves"],
    },
    "play-loudly": {
      text: "Agora toque forte as mesmas cinco notas. Pressione cada tecla depressa e com firmeza, mas nunca bata nela com força.",
    },
    "hear-loudly": {
      text: "Ouça Dó, Ré, Mi, Fá e Sol tocados forte. Cada tecla desceu depressa e com firmeza.",
    },
    "how-loudly-sounded": {
      text: "Como soaram essas cinco notas?",
      answers: ["Suaves", "Suaves, depois fortes", "Fortes, depois suaves", "Fortes"],
    },
    "piano-and-forte": {
      text: "Na partitura, letras sob a pauta indicam o volume. A indicação p quer dizer piano, que em italiano significa suave. A indicação f quer dizer forte, que em italiano também significa forte.",
    },
    "what-f-asks": {
      text: "Você vê a indicação f sob a pauta. O que ela pede?",
      answers: ["Tocar suave", "Tocar forte", "Tocar rápido", "Tocar devagar"],
    },
    "mezzo-marks": {
      text: "Duas indicações ficam no meio. A indicação mp quer dizer mezzo-piano, um pouco suave, e mf quer dizer mezzo-forte, um pouco forte.",
    },
    "softest-to-loudest": {
      text: "Qual ordem vai da indicação mais suave à mais forte?",
    },
    "echo-demo": {
      text: "Ouça uma frase com a indicação f e depois o seu eco, com a indicação p. As notas são as mesmas. Só o volume muda.",
    },
    "play-the-echo": {
      text: "Toque Dó, Mi e Sol forte e depois toque de novo suavemente, como um eco. Este passo confere só as notas, então deixe seus ouvidos julgarem o volume.",
    },
    recap: {
      text: "Muito bem. Agora você já sabe tocar forte e suave.",
      points: [
        "A velocidade com que a tecla desce define o volume da nota.",
        "A indicação p quer dizer suave, e f quer dizer forte.",
        "As indicações mp e mf ficam no meio.",
      ],
    },
  },
};

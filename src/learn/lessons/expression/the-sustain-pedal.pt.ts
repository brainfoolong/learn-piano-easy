/** *The sustain pedal* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { TheSustainPedalTexts } from "./the-sustain-pedal.en";

export const theSustainPedalPt: Translation<TheSustainPedalTexts> = {
  title: "O pedal de sustentação",
  steps: {
    "pedal-demo": {
      text: "Ouça Dó, Mi, Sol e Dó tocados duas vezes. Na primeira vez, cada nota para quando a tecla sobe. Na segunda, todas continuam soando juntas.",
    },
    "what-the-pedal-does": {
      text: "O pedal direito é o pedal de sustentação. Enquanto você pisa nele, cada nota continua soando mesmo depois de soltar a tecla.",
    },
    "pedal-keeps": {
      text: "O que faz o pedal direito?",
      answers: ["Deixa cada nota mais forte", "Deixa as notas mais curtas", "Mantém as notas soando depois que você solta", "Leva as teclas uma oitava acima"],
    },
    "foot-on-pedal": {
      text: "Use o pé direito. Mantenha o calcanhar no chão e pise no pedal com a parte da frente do pé. Solte o pedal do mesmo jeito, com delicadeza.",
    },
    "which-foot": {
      text: "Como o pé fica no pedal de sustentação?",
      answers: ["Pé esquerdo, calcanhar no ar", "Pé direito, dedos fora do pedal", "Pé esquerdo, calcanhar no chão", "Pé direito, calcanhar no chão"],
    },
    "pedal-down-c": {
      text: "Pise no pedal direito e mantenha-o pisado. Com a mão esquerda, toque o Dó abaixo do Dó central, depois Mi, depois Sol. Solte cada tecla.",
    },
    "hear-pedal-hold": {
      text: "Ouça Dó, Mi e Sol tocados um depois do outro, com o pedal pisado. Cada nota continua soando enquanto a seguinte começa.",
    },
    "what-pedal-did": {
      text: "Na demonstração, cada nota continuou soando depois que a seguinte começou. O que as segurou?",
      answers: ["O pedal de sustentação", "Pressionar as teclas com mais força", "Tocar as notas mais rápido", "A mão direita"],
    },
    "pedal-marks": {
      text: "Sob a pauta, Ped. quer dizer pisar no pedal, e uma estrela quer dizer soltar o pedal. Algumas partituras desenham, em vez disso, uma linha de colchete, de onde se pisa até onde se solta.",
    },
    "star-means": {
      text: "Sob a pauta, você vê uma estrela. O que ela diz ao seu pé?",
      answers: ["Pisar no pedal", "Soltar o pedal", "Pisar no pedal duas vezes", "Manter o pedal pisado até o fim"],
    },
    "chords-without-pedal": {
      text: "Primeiro aprenda quatro acordes quebrados com a mão esquerda, sem o pedal. Comece no Dó abaixo do Dó central: Dó-Mi-Sol, depois Dó-Fá-Lá, depois Si-Ré-Sol e de novo Dó-Mi-Sol.",
    },
    "chords-blur": {
      text: "Se o pedal continua pisado de um acorde para o seguinte, os dois acordes soam juntos e se misturam. Por isso, troque o pedal a cada novo acorde.",
    },
    "change-the-pedal": {
      text: "Toque os mesmos acordes. Antes de cada acorde, solte o pedal e toque a primeira nota. Depois pise no pedal e toque as outras duas notas.",
    },
    "hear-pedal-change": {
      text: "Ouça os quatro acordes com uma troca de pedal em cada um. Cada acorde continua soando e depois para de forma limpa quando o seguinte começa.",
    },
    "why-change": {
      text: "Por que você troca o pedal a cada novo acorde?",
      answers: ["Para tocar mais forte", "Para descansar o pé", "Para os acordes não se misturarem", "Para as notas soarem mais curtas"],
    },
    recap: {
      text: "Muito bem. Agora o seu pé direito também toca junto.",
      points: [
        "O pedal direito mantém as notas soando depois que você solta as teclas.",
        "Pise nele com o pé direito, com o calcanhar no chão.",
        "Ped. quer dizer pisar no pedal, e uma estrela quer dizer soltar o pedal.",
        "Troque o pedal a cada novo acorde, para os acordes não se misturarem.",
      ],
    },
  },
};

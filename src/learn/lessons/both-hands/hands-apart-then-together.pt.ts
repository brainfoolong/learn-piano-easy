/** *Hands apart, then together* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { HandsApartThenTogetherTexts } from "./hands-apart-then-together.en";

export const handsApartThenTogetherPt: Translation<HandsApartThenTogetherTexts> = {
  title: "Mãos separadas, depois juntas",
  steps: {
    "three-passes": {
      text: "Ouça uma melodia curta três vezes. Primeiro a mão direita toca, depois a esquerda e, por fim, as duas mãos juntas.",
    },
    "why-apart": {
      text: "É mais fácil aprender com uma mão de cada vez. Quando as duas mãos já sabem suas notas, você junta as duas.",
    },
    "first-step-quiz": {
      text: "Você vai começar uma peça nova para as duas mãos. O que pratica primeiro?",
      answers: ["Cada mão sozinha", "As duas mãos juntas, na velocidade normal", "Só a mão esquerda, nunca a direita"],
    },
    "right-alone": {
      text: "Primeiro a mão direita. Comece no Dó central e toque Dó, Ré, Mi, Ré, Dó.",
    },
    "left-alone": {
      text: "Agora só a mão esquerda. Comece no Dó uma oitava abaixo e toque o mesmo Dó, Ré, Mi, Ré, Dó.",
    },
    "together-steps": {
      text: "Agora as duas mãos juntas. Toque cada par de teclas no mesmo instante. Para começar, um Dó com cada mão.",
    },
    "slow-together": {
      text: "Tocar com as duas mãos juntas é novidade, então vá devagar. A velocidade vem depois, quando as duas mãos tocarem juntas com segurança.",
    },
    "mirror-tune": {
      text: "Aqui está uma melodia nova. Suas mãos se afastam e voltam, como num espelho.",
    },
    "mirror-right": {
      text: "Só a mão direita. Toque Mi, Fá, Sol, Fá, Mi.",
    },
    "mirror-left": {
      text: "Só a mão esquerda. Toque Mi, Ré, Dó, Ré, Mi, começando no Mi abaixo do Dó central. Assim a mão esquerda desce, ao contrário da direita, que subiu.",
    },
    "mirror-together": {
      text: "Agora junte as duas. Vá com calma e toque cada par de teclas ao mesmo tempo.",
    },
    recap: {
      text: "Muito bem. Você tocou com as duas mãos ao mesmo tempo pela primeira vez.",
      points: [
        "Aprenda uma peça nova primeiro com cada mão sozinha.",
        "Depois junte as mãos, devagar.",
        "Suas mãos podem se mover na mesma direção ou em direções opostas.",
      ],
    },
  },
};

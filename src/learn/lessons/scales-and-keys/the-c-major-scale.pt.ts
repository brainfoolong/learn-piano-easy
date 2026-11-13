/** *The C major scale* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { TheCMajorScaleTexts } from "./the-c-major-scale.en";

export const theCMajorScalePt: Translation<TheCMajorScaleTexts> = {
  title: "A escala de Dó maior",
  steps: {
    "scale-demo": {
      text: "Ouça oito notas subirem do Dó central até o Dó seguinte. Todas as teclas são brancas.",
    },
    "what-a-scale-is": {
      text: "Uma escala é uma sequência de notas que sobe um grau de cada vez. A escala de Dó maior começa no Dó e termina no Dó seguinte.",
    },
    "scale-pattern": {
      text: "Seus graus seguem um padrão: tom, tom, semitom, tom, tom, tom, semitom. Os semitons são de Mi a Fá e de Si a Dó.",
    },
    "first-half-step": {
      text: "Onde fica o primeiro semitom da escala de Dó maior?",
      answers: ["De Dó a Ré", "De Sol a Lá", "De Mi a Fá"],
    },
    "first-three": {
      text: "Coloque o polegar direito no Dó central. Toque Dó, Ré e Mi com os dedos 1, 2 e 3.",
    },
    "thumb-under": {
      text: "Sua mão só tem cinco dedos para oito notas. Depois do Mi, passe o polegar por baixo da mão e toque o Fá com ele.",
    },
    "which-finger-on-f": {
      text: "Você toca Dó, Ré e Mi com os dedos 1, 2 e 3. Qual dedo toca o Fá?",
      answers: ["Dedo 4", "Dedo 1, o polegar", "Dedo 5"],
    },
    "tuck-to-f": {
      text: "Toque Dó, Ré e Mi de novo. Depois passe o polegar por baixo e toque o Fá. Mantenha o pulso estável e reto.",
    },
    "last-five": {
      text: "Seu polegar agora está no Fá. Toque Fá, Sol, Lá, Si e Dó com os dedos 1, 2, 3, 4 e 5.",
    },
    "scale-up": {
      text: "Toque a escala de Dó maior subindo com a mão direita, do Dó central até o Dó seguinte. Dedos 1, 2, 3, depois o polegar passa por baixo, e então 1, 2, 3, 4, 5.",
    },
    "scale-down": {
      text: "Agora desça de volta com os dedos 5, 4, 3, 2, 1. Depois do Fá, o dedo 3 cruza por cima do polegar até o Mi.",
    },
    recap: {
      text: "Muito bem. Você tocou a sua primeira escala.",
      points: [
        "A escala de Dó maior tem oito teclas brancas, de Dó a Dó.",
        "Seu padrão é tom, tom, semitom, tom, tom, tom, semitom.",
        "Subindo, o polegar passa por baixo até o Fá.",
        "Descendo, o dedo 3 cruza por cima do polegar até o Mi.",
      ],
    },
  },
};

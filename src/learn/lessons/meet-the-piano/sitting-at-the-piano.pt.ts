/** *Sitting at the piano* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { SittingAtThePianoTexts } from "./sitting-at-the-piano.en";

export const sittingAtThePianoPt: Translation<SittingAtThePianoTexts> = {
  title: "Postura ao piano",
  steps: {
    "face-middle-c": {
      text: "Tocar bem começa pelo jeito de sentar. Sente-se no meio do piano, com o Dó central bem à sua frente. Assim as duas mãos alcançam suas teclas com facilidade.",
    },
    "find-middle-c": {
      text: "Toque o Dó central, a tecla bem à sua frente.",
    },
    "bench-and-feet": {
      text: "Sente-se na metade da frente do banco, não bem no fundo. Mantenha as costas retas e relaxadas. Apoie os dois pés no chão, com a sola inteira.",
    },
    "bench-quiz": {
      text: "Em que parte do banco você se senta?",
      answers: [
        "Na metade da frente, com os dois pés apoiados no chão",
        "No fundo do banco, com as costas encostadas em algo",
        "Bem na beirada, com os pés fora do chão",
      ],
    },
    forearms: {
      text: "Seus antebraços devem ficar na altura das teclas, sem inclinar para cima nem para baixo. Suba ou desça o banco até ficarem assim. Mantenha os ombros soltos.",
    },
    "forearms-quiz": {
      text: "Quando o banco está na altura certa para você?",
      answers: [
        "Quando seus cotovelos ficam bem abaixo das teclas",
        "Quando seus antebraços ficam na altura das teclas",
        "Quando suas mãos caem de cima sobre as teclas",
      ],
    },
    "curved-fingers": {
      text: "Curve os dedos de leve, como se segurasse uma bolinha. Toque as teclas com as pontas dos dedos, não com os dedos retos. Sua mão fica relaxada o tempo todo.",
    },
    "fingers-quiz": {
      text: "Como seus dedos ficam sobre as teclas?",
      answers: ["Retos e esticados", "Tensos, bem apertados uns contra os outros", "Relaxados e curvados, tocando com as pontas"],
    },
    "relaxed-play": {
      text: "Imagine uma bolinha na sua mão e toque as teclas marcadas com as pontas dos dedos. Mantenha tudo solto, dos ombros até os dedos.",
    },
    "posture-quiz": {
      text: "Qual destas é uma boa forma de sentar ao piano?",
      answers: [
        "No fundo do banco, com os dedos retos",
        "De frente para o Dó central, na parte da frente do banco, antebraços na altura das teclas, dedos curvados",
        "Bem baixo, com os braços subindo até as teclas",
      ],
    },
    recap: {
      text: "Muito bem. Você sabe como sentar ao piano.",
      points: [
        "Sente-se de frente para o Dó central, na metade da frente do banco, com os pés apoiados no chão.",
        "Seus antebraços ficam na altura das teclas.",
        "Seus dedos ficam relaxados e curvados, e você toca com as pontas.",
      ],
    },
  },
};

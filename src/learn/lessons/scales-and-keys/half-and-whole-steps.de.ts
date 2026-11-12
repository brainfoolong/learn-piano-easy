/** *Half and whole steps* in German. */
import type { HalfAndWholeStepsTexts } from "./half-and-whole-steps.en";

export const halfAndWholeStepsDe: HalfAndWholeStepsTexts = {
  title: "Halbton und Ganzton",
  steps: {
    "key-by-key": {
      text: "Hör zu, wie das Klavier vom C zum E hinaufsteigt. Es spielt jede Taste auf dem Weg, auch die schwarzen.",
    },
    "half-step": {
      text: "Jeder Schritt war dabei ein Halbton. Ein Halbton führt zur allernächsten Taste, schwarz oder weiß, ohne Taste dazwischen.",
    },
    "half-step-from-c": {
      text: "Jetzt du. Spiel das mittlere C, dann die schwarze Taste direkt rechts daneben, und spiel das Paar zweimal. Jeder Schritt ist ein Halbton.",
    },
    "no-black-key-between": {
      text: "Schau dir E und F an. Zwischen ihnen liegt keine schwarze Taste. Von E zu F ist also ein Halbton, und von H zu C auch.",
    },
    "white-half-step": {
      text: "Welche zwei weißen Tasten liegen einen Halbton auseinander?",
      answers: ["C und D", "E und F", "F und G"],
    },
    "e-f-and-b-c": {
      text: "Spiel das E und das F über dem mittleren C. Spiel danach H und das C darüber. Beides sind Halbtöne zwischen zwei weißen Tasten.",
    },
    "whole-step": {
      text: "Zwei Halbtöne ergeben einen Ganzton. Ein Ganzton überspringt eine Taste. Von C zu D ist ein Ganzton, denn dazwischen liegt eine schwarze Taste.",
    },
    "whole-and-half": {
      text: "Hör zu: Von C zu D ist ein Ganzton, von D zu E auch. Von E zu F ist es nur ein Halbton.",
    },
    "whole-steps-from-c": {
      text: "Jetzt du. Spiel das mittlere C, dann D und E. Jeder Schritt ist ein Ganzton über eine schwarze Taste hinweg.",
    },
    "f-to-g": {
      text: "Von F hinauf zu G: Ist das ein Halbton oder ein Ganzton?",
      answers: ["Ein Ganzton", "Ein Halbton"],
    },
    "whole-step-above-e": {
      text: "Drück die Taste einen Ganzton über dem E. Zähl zwei Halbtöne hinauf. Pass auf: Der erste landet schon auf dem F.",
    },
    recap: {
      text: "Gut gemacht. Jetzt kannst du den Abstand zwischen zwei Tasten messen.",
      points: [
        "Ein Halbton führt zur allernächsten Taste, schwarz oder weiß.",
        "E und F sowie H und C liegen einen Halbton auseinander.",
        "Ein Ganzton sind zwei Halbtöne, mit einer Taste dazwischen.",
      ],
    },
  },
};

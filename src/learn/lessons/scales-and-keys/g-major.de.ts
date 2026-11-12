/** *G major* in German. */
import type { GMajorTexts } from "./g-major.en";

export const gMajorDe: GMajorTexts = {
  title: "G-Dur",
  steps: {
    "g-scale-demo": {
      text: "Hör dir eine Tonleiter an, die auf G beginnt. Sie klingt genauso hell wie C-Dur. Eine Taste auf dem Weg ist schwarz.",
    },
    "pattern-from-g": {
      text: "Beginn das Muster der Tonleiter auf G: Ganzton, Ganzton, Halbton, Ganzton, Ganzton. Das ergibt G, A, H, C, D und E. Bis hier sind alle Tasten weiß.",
    },
    "whole-step-above-e": {
      text: "Vom E aus verlangt das Muster einen Ganzton. Welche Taste liegt einen Ganzton über dem E?",
      answers: ["Fis", "F", "G"],
    },
    "one-sharp": {
      text: "Die G-Dur-Tonleiter spielt also Fis statt F. Vom Fis führt ein Halbton zum hohen G. G-Dur hat ein Kreuz: Fis.",
    },
    "find-f-sharp": {
      text: "Such das Fis auf den Tasten. Es ist die schwarze Taste direkt rechts neben dem F.",
    },
    "same-fingering": {
      text: "Die rechte Hand spielt G-Dur wie C-Dur. Die Finger 1, 2 und 3 spielen G, A und H. Nach dem Daumenuntersatz aufs C spielen 1, 2, 3, 4, 5 dann C, D, E, Fis und G.",
    },
    "g-scale-up": {
      text: "Jetzt du. Leg den rechten Daumen auf das G über dem mittleren C und spiel die G-Dur-Tonleiter aufwärts bis zum nächsten G. Der vierte Finger spielt das Fis.",
    },
    "g-scale-down": {
      text: "Jetzt spielst du sie abwärts, vom hohen G bis zum G. Der dritte Finger setzt über den Daumen aufs H.",
    },
    "hear-f-and-f-sharp": {
      text: "Fis liegt nur einen Halbton über F, also hör genau hin. Ist die zweite Taste höher, tiefer oder gleich?",
    },
    "g-tune-demo": {
      text: "Hier ist eine kleine Melodie in G-Dur. Die linke Hand hält die Quinte G und D, und die rechte Hand spielt Fis.",
    },
    "g-tune": {
      text: "Leg den rechten Daumen auf das D über dem mittleren C, dann liegt der dritte Finger auf dem Fis. Die linke Hand spielt die tiefe Quinte: das G unterhalb des C, das unter dem mittleren C liegt, und das D darüber. Spiel die Quinte mit dem ersten G und noch einmal mit dem zweiten.",
    },
    recap: {
      text: "Gut gemacht. Du spielst deine zweite Tonleiter.",
      points: [
        "Das Muster der Dur-Tonleiter kann auf jeder Taste beginnen.",
        "Auf G begonnen, braucht es Fis, damit der Halbton direkt unter dem hohen G bleibt.",
        "G-Dur hat ein Kreuz: Fis.",
        "Der Fingersatz ist derselbe wie bei C-Dur.",
      ],
    },
  },
};

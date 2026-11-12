/** *F major* in German. */
import type { FMajorTexts } from "./f-major.en";

export const fMajorDe: FMajorTexts = {
  title: "F-Dur",
  steps: {
    "f-major-sound": {
      text: "Hör dir eine neue Tonleiter an. Sie beginnt und endet auf F. Hörst du die eine schwarze Taste darin?",
    },
    "pattern-on-f": {
      text: "Beginn das Muster der Tonleiter auf F: Ganzton, Ganzton, Halbton, Ganzton, Ganzton, Ganzton, Halbton. Von F zu G ist ein Ganzton, von G zu A auch.",
    },
    "after-a": {
      text: "Jetzt kommt ein Halbton aufwärts vom A. Welche Taste ist das?",
      answers: ["H", "B", "C"],
    },
    "find-b-flat": {
      text: "Such das B. Es ist die schwarze Taste direkt links vom H.",
    },
    "f-fingering": {
      text: "Leg den rechten Daumen auf das F. Spiel F, G, A und B mit den Fingern 1, 2, 3 und 4. Dann setzt du den Daumen unter zum C und spielst mit 1, 2, 3, 4 weiter.",
    },
    "where-thumb-under": {
      text: "Nach welcher Taste kommt in F-Dur der Daumenuntersatz?",
      answers: ["B", "A", "C"],
    },
    "f-scale-up": {
      text: "Jetzt du. Spiel die F-Dur-Tonleiter aufwärts, vom F über dem mittleren C bis zum nächsten F. Denk an das B.",
    },
    "f-scale-down": {
      text: "Jetzt spiel sie abwärts. Nach dem C setzt der vierte Finger über den Daumen aufs B.",
    },
    "tune-in-f": {
      text: "Hier ist eine kleine Melodie in F-Dur. Deine linke Hand hält darunter die Quinte F und C.",
    },
    "tune-and-fifth": {
      text: "Die linke Hand spielt die tiefe Quinte: das C unter dem mittleren C und das F darunter. Die rechte Hand beginnt auf dem F über dem mittleren C. Schlag die Quinte zusammen mit dem ersten Ton jedes Takts an.",
    },
    recap: {
      text: "Gut gemacht. Du kannst jetzt in F-Dur spielen.",
      points: [
        "Das Muster der Tonleiter auf F braucht eine schwarze Taste: das B.",
        "Die rechte Hand spielt 1-2-3-4, Daumenuntersatz zum C, dann 1-2-3-4.",
        "Abwärts setzt der vierte Finger über den Daumen aufs B.",
      ],
    },
  },
};

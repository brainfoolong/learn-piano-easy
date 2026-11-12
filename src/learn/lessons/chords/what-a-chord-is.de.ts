/** *What a chord is* in German. */
import type { WhatAChordIsTexts } from "./what-a-chord-is.en";

export const whatAChordIsDe: WhatAChordIsTexts = {
  title: "Was ein Akkord ist",
  steps: {
    "chord-demo": {
      text: "Hör dir C, E und G nacheinander an. Dann erklingen alle drei zusammen. Sie verschmelzen zu einem vollen Klang.",
    },
    "several-keys": {
      text: "Tasten, die du zusammen drückst, bilden einen Akkord. Einen hast du schon gespielt: die leere Quinte in der linken Hand. Jetzt baust du weitere.",
    },
    "a-third": {
      text: "Drück C und E zusammen. Sie liegen eine Terz auseinander, also liegt eine weiße Taste dazwischen. Die Finger 1 und 3 spielen sie.",
    },
    "thirds-up": {
      text: "Jetzt du. Leg den rechten Daumen auf das mittlere C. Spiel C und E zusammen. Dann rückst du die Hand hoch zu D und F und zu E und G.",
    },
    "skipped-key": {
      text: "Eine Terz auf den weißen Tasten überspringt Tasten. Wie viele weiße Tasten liegen zwischen ihren beiden Tasten?",
      answers: ["Keine", "Eine", "Zwei"],
    },
    "thirds-and-fifths": {
      text: "Eine Quinte reicht über fünf weiße Tasten, etwa von C bis G. Daumen und fünfter Finger spielen sie. Die Terz klingt süß, die Quinte klingt leer.",
    },
    "third-then-fifth": {
      text: "Lass den Daumen auf dem C. Spiel die Terz C und E, dann die Quinte C und G. Spiel beide zweimal.",
    },
    "stack-thirds": {
      text: "Jetzt setzt du eine Terz auf eine Terz. C und E ist die erste Terz, E und G die nächste. Zusammen bilden C, E und G einen Dreiklang.",
    },
    "triad-demo": {
      text: "Hör zuerst die Terz C und E. Dann kommt das G oben dazu, und der Dreiklang klingt voll.",
    },
    "first-triad": {
      text: "Spiel C, E und G zusammen mit den Fingern 1, 3 und 5. Drück alle drei auf einmal, und spiel den Dreiklang zweimal.",
    },
    "which-is-a-triad": {
      text: "Ein Dreiklang stapelt zwei Terzen. Welche drei Tasten bilden einen Dreiklang, der auf D beginnt?",
      answers: ["D, E und F", "D, G und A", "D, F und A"],
    },
    "triads-up": {
      text: "Behalte die Form deiner rechten Hand. Spiel C-E-G ab dem mittleren C, dann rück hoch zu D-F-A und E-G-H, alles auf weißen Tasten. Zum Schluss spielst du C-E-G.",
    },
    recap: {
      text: "Gut gemacht. Du spielst deine ersten Akkorde.",
      points: [
        "Ein Akkord sind mehrere Tasten, die du zusammen drückst.",
        "Eine Terz überspringt eine weiße Taste, und die Finger 1 und 3 spielen sie.",
        "Zwei gestapelte Terzen bilden einen Dreiklang, etwa C, E und G.",
        "In der rechten Hand spielen die Finger 1, 3 und 5 einen Dreiklang.",
      ],
    },
  },
};

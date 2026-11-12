/** *The grand staff* in German. */
import type { TheGrandStaffTexts } from "./the-grand-staff.en";

export const theGrandStaffDe: TheGrandStaffTexts = {
  title: "Das Klaviersystem",
  steps: {
    "climb-demo": {
      text: "Hör zu. Das Klavier steigt vom tiefen C über das mittlere C bis zum hohen C. Dieser Weg führt durch beide Notensysteme, die du kennst.",
    },
    "two-staves": {
      text: "Klaviernoten stehen in zwei Notensystemen übereinander. Links hält sie eine geschweifte Klammer zusammen. So entsteht das Klaviersystem: oben das Notensystem mit dem Violinschlüssel, unten das mit dem Bassschlüssel.",
    },
    "which-hand-quiz": {
      text: "Welche Hand liest meistens das obere System im Violinschlüssel?",
      answers: ["Die rechte Hand", "Die linke Hand"],
    },
    "middle-c-between": {
      text: "Das mittlere C steht auf einer kurzen Hilfslinie zwischen den beiden Systemen. Es gehört zu beiden. Oben oder unten notiert, ist es dieselbe Taste.",
    },
    "middle-c-quiz": {
      text: "Wo steht das mittlere C im Klaviersystem?",
      answers: ["Auf der obersten Notenlinie im Violinschlüssel", "Auf einer Hilfslinie zwischen den beiden Systemen", "Auf der untersten Notenlinie im Bassschlüssel"],
    },
    "treble-names": {
      text: "Hier siehst du den Violinschlüssel. Wie heißt jeder Ton?",
    },
    "bass-names": {
      text: "Jetzt der Bassschlüssel. Wie heißt jeder Ton?",
    },
    "low-c-staff-quiz": {
      text: "Deine linke Hand spielt das tiefe C. In welchem System findest du es?",
      answers: ["Im Violinschlüssel", "Im Bassschlüssel"],
    },
    "bass-play": {
      text: "Lies jeden Ton im Bassschlüssel und spiel ihn mit der linken Hand.",
    },
    "treble-play": {
      text: "Lies jeden Ton im Violinschlüssel und spiel ihn mit der rechten Hand.",
    },
    recap: {
      text: "Gut gemacht. Jetzt kannst du das Klaviersystem lesen.",
      points: ["Das Klaviersystem verbindet Violin- und Bassschlüssel mit einer Klammer.", "Die rechte Hand liest den Violinschlüssel, die linke Hand den Bassschlüssel.", "Das mittlere C steht auf einer Hilfslinie dazwischen und gehört zu beiden."],
    },
  },
};

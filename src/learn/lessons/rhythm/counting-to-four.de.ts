/** *Counting to four* in German. */
import type { CountingToFourTexts } from "./counting-to-four.en";

export const countingToFourDe: CountingToFourTexts = {
  title: "Bis vier zählen",
  steps: {
    "bars-demo": {
      text: "Schau zu und hör hin. Ein tiefes C beginnt jede Gruppe aus vier Schlägen, und G spielt die anderen drei.",
    },
    "what-a-bar-is": {
      text: "Die Schläge bilden Gruppen aus vier, die Takte. Du zählst jeden Takt „eins, zwei, drei, vier“, und ein Taktstrich schließt ihn ab. Das ist der Viervierteltakt, und die Eins ist der stärkste Schlag.",
    },
    "beats-in-a-bar-quiz": {
      text: "Wie viele Schläge hat ein Takt im Viervierteltakt?",
      answers: ["Drei Schläge", "Vier Schläge", "Acht Schläge"],
    },
    "strongest-beat-quiz": {
      text: "Welcher Schlag eines Taktes ist der stärkste?",
      answers: ["Die Eins", "Die Zwei", "Die Vier"],
    },
    "count-aloud-tap": {
      text: "Drück auf Start und tippe bei jedem Klick auf eine beliebige Taste. Zähl dabei laut „eins, zwei, drei, vier“ mit. Sag die Eins etwas lauter.",
    },
    "fill-a-bar-quiz": {
      text: "Was füllt genau einen Takt im Viervierteltakt?",
      answers: ["Zwei halbe Noten", "Drei Viertelnoten", "Eine ganze Note und eine Viertelnote"],
    },
    recap: {
      text: "Gut gemacht. Jetzt kannst du Takte bis vier zählen.",
      points: ["Schläge bilden Takte, und ein Taktstrich schließt jeden Takt ab.", "Im Viervierteltakt zählst du „eins, zwei, drei, vier“.", "Die Eins ist der stärkste Schlag im Takt."],
    },
  },
};

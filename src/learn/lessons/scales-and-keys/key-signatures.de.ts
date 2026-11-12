/** *Key signatures* in German. */
import type { KeySignaturesTexts } from "./key-signatures.en";

export const keySignaturesDe: KeySignaturesTexts = {
  title: "Vorzeichen",
  steps: {
    "signs-at-the-start": {
      text: "In G-Dur wird jedes F als Fis gespielt. Die Noten markieren nicht jedes einzelne. Ein Kreuz steht einmal am Anfang jeder Zeile.",
    },
    "every-octave": {
      text: "Diese Zeichen heißen die Vorzeichen am Zeilenanfang. Ein Kreuz auf der F-Linie heißt: Jedes F ist ein Fis, hoch oder tief. Ein b auf der H-Linie macht jedes H zum B.",
    },
    "one-sharp": {
      text: "Am Zeilenanfang steht ein Kreuz auf der F-Linie. In welcher Tonart ist das Stück?",
      answers: ["G-Dur", "F-Dur", "C-Dur"],
    },
    "one-flat": {
      text: "Am Zeilenanfang steht ein b auf der H-Linie. In welcher Tonart ist das Stück?",
      answers: ["C-Dur", "F-Dur", "G-Dur"],
    },
    "no-signs": {
      text: "Am Zeilenanfang steht kein Kreuz und kein b. In welcher Tonart ist das Stück?",
      answers: ["F-Dur", "G-Dur", "C-Dur"],
    },
    "letter-stays": {
      text: "Nenn jede Note mit ihrem Buchstaben. Die Vorzeichen ändern die Taste, die du drückst, aber die Note behält ihren Platz.",
    },
    "f-in-g-major": {
      text: "Am Zeilenanfang steht ein Kreuz. Auf dem Notenblatt steht ein F. Welche Taste spielst du?",
      answers: ["Fis, die schwarze Taste", "F, die weiße Taste"],
    },
    "phrase-in-g": {
      text: "Hier ist eine Phrase in G-Dur. Dein rechter Daumen beginnt auf dem zweiten D über dem mittleren C. Hör auf das Fis ganz oben.",
    },
    "play-in-g": {
      text: "Jetzt du. Am Zeilenanfang steht ein Kreuz, also ist jedes F ein Fis.",
    },
    "b-in-f-major": {
      text: "Am Zeilenanfang steht ein b. Auf dem Notenblatt steht ein H. Welche Taste spielst du?",
      answers: ["H, die weiße Taste", "B, die schwarze Taste"],
    },
    "play-in-f": {
      text: "Jetzt eine Phrase in F-Dur. Leg den rechten Daumen auf das F über dem mittleren C. Am Zeilenanfang steht ein b, also ist jedes H ein B.",
    },
    recap: {
      text: "Gut gemacht. Jetzt kannst du Vorzeichen lesen. Als Nächstes kommt ein Lied in C-Dur, ganz ohne Kreuz und b.",
      points: [
        "Die Vorzeichen stehen am Anfang jeder Zeile.",
        "Ein Kreuz oder b gilt für jede Note mit diesem Namen, in jeder Oktave.",
        "Ein Kreuz auf F heißt G-Dur, ein b auf H heißt F-Dur.",
        "Kein Kreuz und kein b heißt C-Dur.",
      ],
    },
  },
};

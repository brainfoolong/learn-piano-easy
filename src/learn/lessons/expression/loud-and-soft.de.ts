/** *Loud and soft* in German. */
import type { LoudAndSoftTexts } from "./loud-and-soft.en";

export const loudAndSoftDe: LoudAndSoftTexts = {
  title: "Laut und leise",
  steps: {
    "soft-and-loud-demo": {
      text: "Hör dir C, D, E, F und G zweimal an. Beim ersten Mal klingen sie leise, beim zweiten Mal laut.",
    },
    "key-speed": {
      text: "Wie laut ein Ton klingt, hängt davon ab, wie schnell seine Taste hinuntergeht. Sanft und langsam gedrückt, klingt sie leise. Schnell gedrückt, klingt sie laut.",
    },
    "what-makes-loud": {
      text: "Was lässt einen Ton lauter klingen?",
      answers: ["Die Taste länger halten", "Eine Taste weiter links drücken", "Die Taste schneller hinunterdrücken", "Eine schwarze Taste drücken"],
    },
    "play-softly": {
      text: "Spiel C, D, E, F und G ab dem mittleren C leise. Drück jede Taste sanft und langsam.",
    },
    "hear-softly": {
      text: "Hör dir C, D, E, F und G leise gespielt an. Jede Taste ging sanft und langsam hinunter.",
    },
    "how-softly-sounded": {
      text: "Wie haben diese fünf Töne geklungen?",
      answers: ["Leise", "Laut", "Erst leise, dann laut", "Erst laut, dann leise"],
    },
    "play-loudly": {
      text: "Spiel jetzt dieselben fünf Töne laut. Drück jede Taste schnell und kräftig, aber schlag nie darauf.",
    },
    "hear-loudly": {
      text: "Hör dir C, D, E, F und G laut gespielt an. Jede Taste ging schnell und kräftig hinunter.",
    },
    "how-loudly-sounded": {
      text: "Wie haben diese fünf Töne geklungen?",
      answers: ["Leise", "Erst leise, dann laut", "Erst laut, dann leise", "Laut"],
    },
    "piano-and-forte": {
      text: "In den Noten steht unter dem System, wie laut du spielst. Das p heißt piano, italienisch für leise. Das f heißt forte, also laut.",
    },
    "what-f-asks": {
      text: "Unter dem System steht ein f. Was sollst du tun?",
      answers: ["Leise spielen", "Laut spielen", "Schnell spielen", "Langsam spielen"],
    },
    "mezzo-marks": {
      text: "Dazwischen gibt es zwei Zeichen. Das mp heißt mezzopiano, also etwas leise, und das mf heißt mezzoforte, also etwas laut.",
    },
    "softest-to-loudest": {
      text: "Welche Reihenfolge geht vom leisesten Zeichen zum lautesten?",
      answers: ["f, mf, mp, p", "mp, p, mf, f", "p, mp, mf, f", "p, f, mp, mf"],
    },
    "echo-demo": {
      text: "Hör dir eine Phrase mit f an und danach ihr Echo mit p. Die Töne bleiben gleich, nur die Lautstärke ändert sich.",
    },
    "play-the-echo": {
      text: "Spiel C, E und G laut und dann noch einmal leise als Echo. Hier zählen nur die Töne, also achte selbst mit den Ohren auf die Lautstärke.",
    },
    recap: {
      text: "Gut gemacht. Du spielst laut und leise.",
      points: [
        "Wie schnell eine Taste hinuntergeht, bestimmt, wie laut sie klingt.",
        "Das p heißt leise, das f heißt laut.",
        "Die Zeichen mp und mf liegen dazwischen.",
      ],
    },
  },
};

/** *Minor triads* in German. */
import type { MinorTriadsTexts } from "./minor-triads.en";

export const minorTriadsDe: MinorTriadsTexts = {
  title: "Moll-Dreiklänge",
  steps: {
    "major-then-minor": {
      text: "Hör dir zwei Akkorde auf C an. Der erste ist C-Dur und klingt hell. Der zweite ist c-Moll und klingt dunkler.",
    },
    "thirds-swap": {
      text: "Im Dur-Dreiklang ist die untere Terz eine große Terz: vier Halbtöne. Die obere ist eine kleine Terz. Ein Moll-Dreiklang tauscht sie, also kommt die kleine Terz zuerst.",
    },
    "minor-third-size": {
      text: "Eine große Terz hat vier Halbtöne. Wie viele Halbtöne hat eine kleine Terz?",
      answers: ["Vier", "Drei", "Zwei"],
    },
    "lower-the-middle": {
      text: "Aus Dur wird also mit einem Griff Moll. Senk den mittleren Ton um einen Halbton. Aus C, E und G wird C, Es und G.",
    },
    "find-e-flat": {
      text: "Such das Es auf den Tasten. Es ist die schwarze Taste direkt links neben dem E.",
    },
    "c-major-to-minor": {
      text: "Jetzt du. Spiel C-Dur mit den Fingern 1, 3 und 5 ab dem mittleren C. Dann rutscht der dritte Finger für c-Moll aufs Es, und du spielst beide zweimal.",
    },
    "hear-the-middle-drop": {
      text: "Zwischen Dur und Moll bewegt sich nur der mittlere Ton um einen Halbton. Ist die zweite Taste höher, tiefer oder gleich?",
    },
    "white-key-minors": {
      text: "Drei Moll-Dreiklänge liegen nur auf weißen Tasten: a-Moll ist A-C-E, d-Moll ist D-F-A und e-Moll ist E-G-H.",
    },
    "a-minor": {
      text: "Leg den rechten Daumen auf das A unter dem mittleren C. Spiel zweimal a-Moll: A, C und E zusammen.",
    },
    "d-and-e-minor": {
      text: "Jetzt wandert deine Hand. Spiel d-Moll ab dem D über dem mittleren C, dann e-Moll eine weiße Taste höher, dann wieder d-Moll.",
    },
    "g-major-to-minor": {
      text: "G-Dur ist G, H und D. Welchen Ton senkst du für g-Moll?",
      answers: ["H", "G", "D"],
    },
    "major-minor-pairs": {
      text: "Spiel D-Dur mit Fis, dann d-Moll mit F. Dann spiel G-Dur mit H und g-Moll mit B.",
    },
    recap: {
      text: "Gut gemacht. Jetzt kannst du Dur- und Moll-Dreiklänge spielen.",
      points: [
        "Ein Moll-Dreiklang schichtet eine kleine Terz und darüber eine große Terz.",
        "Senkst du den mittleren Ton eines Dur-Dreiklangs, wird daraus Moll.",
        "Dur klingt hell, Moll klingt dunkler.",
        "a-Moll, d-Moll und e-Moll liegen nur auf weißen Tasten.",
      ],
    },
  },
};

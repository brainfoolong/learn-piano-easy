/**
 * *Playing with feeling*, the last lesson of *Expression* and of the first year before its boss: a
 * piece's marks and its key tell you how to play it, and you choose how it should feel.
 *
 * The learner first reads the marks of a short piece in a quiz. Two demos play the same tune with every
 * note equal, then shaped by hairpins and a *rit.*, and a quiz names what changed. Two more demos play a
 * bright tune in C major and its sad twin in A minor. After a quiz on which suits a sad tune, the learner
 * plays both. A demo then plays the opening of *Für Elise* softly over a broken chord. The learner plays
 * it softly, judged on touch, or on another input hears it loud and soft and picks the fitting one. The
 * boss's left hand breaks A minor and E major from fingers 5, 2 and 1, and E major spans E2 to G♯3,
 * wider than any shape before. A demo plays both shapes, and the learner plays them. A quiz on how to
 * play the boss and a recap close the year. The texts are `playing-with-feeling.en.ts`
 * and `playing-with-feeling.de.ts` beside it.
 */
import type { Lesson, PhraseNote } from "../../model";
import { playingWithFeelingDe } from "./playing-with-feeling.de";
import { playingWithFeelingEn } from "./playing-with-feeling.en";

/** The tune both shaping demos play: up from E above middle C to A, and back down to C. */
const TUNE = [64, 65, 67, 69, 67, 65, 64, 62, 60];

/** The bright tune in C major: a broken C chord up to the next C and back. */
const BRIGHT = [60, 64, 67, 72, 67, 64, 60];

/** The sad tune in A minor: a broken A minor chord from the A below middle C, up and back. */
const SAD = [57, 60, 64, 69, 64, 60, 57];

/** The first notes of *Für Elise*: E, D sharp, E, D sharp, E, B, D, C, A. */
const ELISE = [76, 75, 76, 75, 76, 71, 74, 72, 69];

/** The boss's left hand: A minor as A2, E3 and A3, then E major as E2, B2 and G♯3, then A minor again. */
const ELISE_LEFT = [45, 52, 57, 40, 47, 56, 45, 52, 57];

/** *Für Elise*'s first notes, a half beat each and the last A longer, at `velocity`, starting at `from`. */
function elise(velocity: number, from: number): PhraseNote[] {
  return ELISE.map((note, index) => ({ note, at: from + index * 0.5, beats: index === 8 ? 1.5 : 0.5, velocity }));
}

export const playingWithFeeling: Lesson = {
  id: "playing-with-feeling",
  steps: [
    { id: "all-the-marks", kind: "explain" },
    { id: "read-the-marks", kind: "quiz", right: 3 },
    {
      id: "flat-demo",
      kind: "demo",
      bpm: 84,
      notes: TUNE.map((note, index) => ({ note, at: index, beats: index === 8 ? 2 : 1, velocity: 80 })),
    },
    {
      id: "shaped-demo",
      kind: "demo",
      bpm: 84,
      notes: [
        { note: 64, at: 0, beats: 1, velocity: 45 },
        { note: 65, at: 1, beats: 1, velocity: 58 },
        { note: 67, at: 2, beats: 1, velocity: 74 },
        { note: 69, at: 3, beats: 1, velocity: 96 },
        { note: 67, at: 4, beats: 1, velocity: 80 },
        { note: 65, at: 5, beats: 1, velocity: 66 },
        { note: 64, at: 6, beats: 1.25, velocity: 54 },
        { note: 62, at: 7.25, beats: 1.5, velocity: 46 },
        { note: 60, at: 8.75, beats: 3, velocity: 40 },
      ],
    },
    { id: "what-changed", kind: "quiz", right: 2 },
    {
      id: "bright-demo",
      kind: "demo",
      bpm: 112,
      notes: BRIGHT.map((note, index) => ({ note, at: index, beats: index === 6 ? 2 : 0.5, velocity: 100 })),
    },
    {
      id: "sad-demo",
      kind: "demo",
      bpm: 66,
      notes: SAD.map((note, index) => ({ note, at: index, beats: index === 6 ? 3 : 1, velocity: 42 })),
    },
    { id: "major-and-minor", kind: "explain" },
    { id: "which-sounds-sad", kind: "quiz", right: 1 },
    { id: "play-bright", kind: "play-notes", notes: BRIGHT },
    { id: "play-sad", kind: "play-notes", notes: SAD },
    {
      id: "elise-demo",
      kind: "demo",
      bpm: 72,
      notes: [...elise(40, 0), { note: 45, at: 4, beats: 0.5, velocity: 34 }, { note: 52, at: 4.5, beats: 0.5, velocity: 34 }, { note: 57, at: 5, beats: 1, velocity: 34 }],
    },
    {
      id: "play-softly",
      kind: "play-notes",
      notes: ELISE,
      touch: ["soft", "soft", "soft", "soft", "soft", "soft", "soft", "soft", "soft"],
      needs: "touch",
      instead: [
        { id: "hear-loud-and-soft", kind: "demo", bpm: 72, notes: [...elise(110, 0), ...elise(40, 7)] },
        { id: "which-fits-elise", kind: "quiz", right: 0 },
      ],
    },
    {
      id: "elise-left-demo",
      kind: "demo",
      bpm: 72,
      notes: ELISE_LEFT.map((note, i) => ({ note, at: Math.floor(i / 3) * 3 + (i % 3) * 0.5, beats: i % 3 === 2 ? 2 : 0.5, velocity: 40 })),
    },
    { id: "elise-left-hand", kind: "play-notes", notes: ELISE_LEFT },
    { id: "how-to-play-the-boss", kind: "quiz", right: 2 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: playingWithFeelingEn, de: playingWithFeelingDe },
};

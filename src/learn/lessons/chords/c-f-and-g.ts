/**
 * *C, F and G*, a lesson of *Chords*: the three main chords of C major are the triads on its 1st, 4th
 * and 5th steps, and the hand moves between them in root position.
 *
 * A demo plays C, F, G and C first. An explain names the three chords, and a quiz asks the scale's 4th
 * step. The learner plays C to F and back, a quiz checks the notes of the G triad, and they play C to G
 * and back. After an explain on moving the whole hand, they play C, F, G and C with the right hand, then
 * with the left. A demo and a play-notes end on a short tune over the left hand's chords. The texts are
 * `c-f-and-g.en.ts` and `c-f-and-g.de.ts` beside it.
 */
import type { Hand } from "../../../theory/fingering";
import type { Lesson, PhraseNote } from "../../model";
import { cFAndGDe } from "./c-f-and-g.de";
import { cFAndGEn } from "./c-f-and-g.en";

const C_RIGHT = [60, 64, 67];
const F_RIGHT = [65, 69, 72];
const G_RIGHT = [67, 71, 74];
const C_LEFT = [48, 52, 55];
const F_LEFT = [53, 57, 60];
const G_LEFT = [55, 59, 62];

/** A root-position triad's notes from the bottom up, played by `hand` with 1 3 5 on the right and 5 3 1 on the left. */
function triad(chord: readonly number[], hand: Hand, at: number, beats: number): PhraseNote[] {
  const fingers = hand === "right" ? ([1, 3, 5] as const) : ([5, 3, 1] as const);
  return chord.map((note, i) => ({ note, at, beats, finger: fingers[i]!, hand }));
}

export const cFAndG: Lesson = {
  id: "c-f-and-g",
  skills: ["triads", "position-change"],
  steps: [
    {
      id: "progression-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        ...triad(C_RIGHT, "right", 0, 2),
        ...triad(F_RIGHT, "right", 2, 2),
        ...triad(G_RIGHT, "right", 4, 2),
        ...triad(C_RIGHT, "right", 6, 4),
      ],
    },
    { id: "three-main-chords", kind: "explain" },
    { id: "fourth-step", kind: "quiz", right: 3 },
    { id: "the-f-triad", kind: "explain" },
    { id: "c-and-f", kind: "play-notes", notes: [C_RIGHT, F_RIGHT, C_RIGHT] },
    { id: "g-triad-notes", kind: "quiz", right: 1 },
    { id: "c-and-g", kind: "play-notes", notes: [C_RIGHT, G_RIGHT, C_RIGHT] },
    { id: "move-the-hand", kind: "explain" },
    { id: "c-f-g-c", kind: "play-notes", notes: [C_RIGHT, F_RIGHT, G_RIGHT, C_RIGHT] },
    { id: "left-hand-chords", kind: "explain" },
    { id: "left-c-f-g-c", kind: "play-notes", notes: [C_LEFT, F_LEFT, G_LEFT, C_LEFT] },
    {
      id: "tune-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        ...triad(C_LEFT, "left", 0, 4),
        { note: 72, at: 0, beats: 2, finger: 4 },
        { note: 67, at: 2, beats: 2, finger: 1 },
        ...triad(F_LEFT, "left", 4, 4),
        { note: 69, at: 4, beats: 2, finger: 2 },
        { note: 72, at: 6, beats: 2, finger: 4 },
        ...triad(G_LEFT, "left", 8, 4),
        { note: 71, at: 8, beats: 2, finger: 3 },
        { note: 74, at: 10, beats: 2, finger: 5 },
        ...triad(C_LEFT, "left", 12, 4),
        { note: 72, at: 12, beats: 4, finger: 4 },
      ],
    },
    {
      id: "tune",
      kind: "play-notes",
      notes: [[...C_LEFT, 72], 67, [...F_LEFT, 69], 72, [...G_LEFT, 71], 74, [...C_LEFT, 72]],
    },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: cFAndGEn, de: cFAndGDe },
};

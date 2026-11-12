/**
 * *The Alberti bass*, a lesson of *Chords*: the left hand breaks a chord low, high, middle, high in
 * eighths, with fingers 5, 1, 3 and 1.
 *
 * A demo plays the pattern over C, F, G7 and C first. An explain names the order, and a quiz checks it.
 * After the fingering, the learner plays the pattern on C. Explains show the G7 shape B, F and D, and F
 * in second inversion as C, F and A, so the hand barely moves. A quiz checks the thumb's key on F. The
 * learner plays each shape, changes chords in a row, hears a short tune over the bass and plays it. The
 * texts are `alberti-bass.en.ts` and `alberti-bass.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { albertiBassDe } from "./alberti-bass.de";
import { albertiBassEn } from "./alberti-bass.en";

/** One bar of eighths: low, high, middle, high, twice, starting at beat `at`. */
function bar(low: number, middle: number, high: number, at: number) {
  return [low, high, middle, high, low, high, middle, high].map((note, i) => ({ note, at: at + i / 2, beats: 0.5 }));
}

export const albertiBass: Lesson = {
  id: "alberti-bass",
  skills: ["alberti-bass", "broken-chords"],
  steps: [
    {
      id: "alberti-demo",
      kind: "demo",
      bpm: 80,
      notes: [...bar(48, 52, 55, 0), ...bar(48, 53, 57, 4), ...bar(47, 50, 53, 8), { note: 48, at: 12, beats: 2 }, { note: 52, at: 12, beats: 2 }, { note: 55, at: 12, beats: 2 }],
    },
    { id: "what-alberti-is", kind: "explain" },
    { id: "pattern-order", kind: "quiz", right: 2 },
    { id: "five-one-three-one", kind: "explain" },
    { id: "c-alberti", kind: "play-notes", notes: [48, 55, 52, 55, 48, 55, 52, 55] },
    { id: "g7-shape", kind: "explain" },
    { id: "g7-alberti", kind: "play-notes", notes: [47, 53, 50, 53, 47, 53, 50, 53] },
    { id: "f-second-inversion", kind: "explain" },
    { id: "thumb-on-f", kind: "quiz", right: 1 },
    { id: "f-alberti", kind: "play-notes", notes: [48, 57, 53, 57, 48, 57, 53, 57] },
    { id: "change-chords", kind: "play-notes", notes: [48, 55, 52, 55, 48, 57, 53, 57, 47, 53, 50, 53, 48, 55, 52, 55] },
    {
      id: "alberti-tune-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        ...bar(48, 52, 55, 0),
        { note: 64, at: 0, beats: 2 },
        { note: 67, at: 2, beats: 2 },
        ...bar(47, 50, 53, 4),
        { note: 62, at: 4, beats: 2 },
        { note: 65, at: 6, beats: 2 },
        { note: 48, at: 8, beats: 2 },
        { note: 60, at: 8, beats: 2 },
      ],
    },
    {
      id: "alberti-tune",
      kind: "play-notes",
      notes: [[48, 64], 55, 52, 55, [48, 67], 55, 52, 55, [47, 62], 53, 50, 53, [47, 65], 53, 50, 53, [48, 60]],
    },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: albertiBassEn, de: albertiBassDe },
};

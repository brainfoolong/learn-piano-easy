/**
 * *Sharps*, a lesson of *Scales and keys*: a sharp ♯ raises a note a half step, to the key just right
 * of it.
 *
 * A demo plays C and C♯, then F and F♯, first. The learner finds C♯ and F♯ in any octave, learns that
 * E♯ is F because no black key sits there, then reads sharps on the staff and plays them. The staff of
 * a `read-note` step has no key signature, so it spells each black key as a sharp. The lesson ends on a
 * short phrase through F♯. The texts are `sharps.en.ts` and `sharps.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { sharpsDe } from "./sharps.de";
import { sharpsEn } from "./sharps.en";

export const sharps: Lesson = {
  id: "sharps",
  steps: [
    {
      id: "raised-by-a-half-step",
      kind: "demo",
      bpm: 66,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 61, at: 1, beats: 1 },
        { note: 65, at: 2, beats: 1 },
        { note: 66, at: 3, beats: 1 },
      ],
    },
    { id: "the-sharp-sign", kind: "explain" },
    { id: "find-c-sharp", kind: "find-key", key: 61, anyOctave: true },
    { id: "find-f-sharp", kind: "find-key", key: 66, anyOctave: true },
    { id: "where-is-g-sharp", kind: "quiz", right: 1 },
    { id: "e-sharp", kind: "explain" },
    { id: "e-sharp-is", kind: "quiz", right: 0 },
    { id: "sharp-on-the-staff", kind: "explain" },
    { id: "play-sharps", kind: "read-note", clef: "treble", answer: "play", notes: [66, 61, 68, 66, 63], pass: 0.6 },
    { id: "through-f-sharp", kind: "play-notes", notes: [62, 64, 66, 67, 66, 64, 62] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: sharpsEn, de: sharpsDe },
};

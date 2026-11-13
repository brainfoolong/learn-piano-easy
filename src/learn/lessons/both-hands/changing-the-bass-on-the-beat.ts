/**
 * *Changing the bass on the beat*, a lesson of *Both hands*: the left hand moves to a new fifth exactly
 * on beat one of a new bar, while the right hand keeps its tune going.
 *
 * A demo plays a tune over a C fifth, a G fifth and the C fifth again first. The learner then names
 * the beat the bass changes on, taps two bars with the metronome, and changes fifths alone. It ends on
 * the tune over changing fifths, first C, G and C, then C, F, G and C. Each change is a chord entry
 * with the tune's note, so both hands land together. The texts are `changing-the-bass-on-the-beat.en.ts`
 * and `changing-the-bass-on-the-beat.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { changingTheBassOnTheBeatEn } from "./changing-the-bass-on-the-beat.en";

export const changingTheBassOnTheBeat: Lesson = {
  id: "changing-the-bass-on-the-beat",
  steps: [
    {
      id: "bass-changes",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 48, at: 0, beats: 4 },
        { note: 55, at: 0, beats: 4 },
        { note: 64, at: 0, beats: 1 },
        { note: 62, at: 1, beats: 1 },
        { note: 60, at: 2, beats: 1 },
        { note: 64, at: 3, beats: 1 },
        { note: 43, at: 4, beats: 4 },
        { note: 50, at: 4, beats: 4 },
        { note: 62, at: 4, beats: 1 },
        { note: 62, at: 5, beats: 1 },
        { note: 67, at: 6, beats: 2 },
        { note: 48, at: 8, beats: 4 },
        { note: 55, at: 8, beats: 4 },
        { note: 64, at: 8, beats: 1 },
        { note: 62, at: 9, beats: 1 },
        { note: 60, at: 10, beats: 2 },
      ],
    },
    { id: "beat-one", kind: "explain" },
    { id: "when-it-changes", kind: "quiz", right: 0 },
    { id: "count-the-bars", kind: "rhythm-tap", bpm: 80, taps: 8, pass: 0.75 },
    { id: "land-on-one", kind: "explain" },
    { id: "c-to-g", kind: "play-notes", notes: [[48, 55], [43, 50], [48, 55]] },
    { id: "change-under-tune", kind: "play-notes", notes: [[48, 55, 64], 62, 60, 64, [43, 50, 62], 62, 67, [48, 55, 64], 62, 60] },
    {
      id: "four-basses",
      kind: "demo",
      bpm: 70,
      notes: [
        { note: 48, at: 0, beats: 4 },
        { note: 55, at: 0, beats: 4 },
        { note: 60, at: 0, beats: 2 },
        { note: 64, at: 2, beats: 2 },
        { note: 41, at: 4, beats: 4 },
        { note: 48, at: 4, beats: 4 },
        { note: 65, at: 4, beats: 2 },
        { note: 64, at: 6, beats: 2 },
        { note: 43, at: 8, beats: 4 },
        { note: 50, at: 8, beats: 4 },
        { note: 62, at: 8, beats: 2 },
        { note: 67, at: 10, beats: 2 },
        { note: 48, at: 12, beats: 4 },
        { note: 55, at: 12, beats: 4 },
        { note: 60, at: 12, beats: 4 },
      ],
    },
    { id: "four-bars", kind: "play-notes", notes: [[48, 55, 60], 64, [41, 48, 65], 64, [43, 50, 62], 67, [48, 55, 60]] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: changingTheBassOnTheBeatEn },
};

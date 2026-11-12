/**
 * *Bass landmarks*, the sixth lesson of *Reading music*: three landmark notes let the learner find any
 * note of the bass staff by counting from the nearest one. They are low C in the second space, F on the
 * fourth line, and middle C on its ledger line just above the staff.
 *
 * A demo plays the three landmarks first. The learner then plays low C, answers where middle C sits, and
 * answers which landmark sits on the fourth line. Next the learner counts a note from a landmark, plays
 * the landmarks and their neighbours, and names notes by counting. The texts are `bass-landmarks.en.ts`
 * and `bass-landmarks.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { bassLandmarksDe } from "./bass-landmarks.de";
import { bassLandmarksEn } from "./bass-landmarks.en";

export const bassLandmarks: Lesson = {
  id: "bass-landmarks",
  steps: [
    {
      id: "landmarks-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 48, at: 0, beats: 2 },
        { note: 53, at: 2, beats: 2 },
        { note: 60, at: 4, beats: 2 },
      ],
    },
    { id: "low-c", kind: "explain" },
    { id: "play-low-c", kind: "read-note", clef: "bass", answer: "play", notes: [48], pass: 1 },
    { id: "middle-c-above", kind: "explain" },
    { id: "middle-c-quiz", kind: "quiz", right: 1 },
    { id: "fourth-line-quiz", kind: "quiz", right: 1 },
    { id: "count-from-a-landmark", kind: "explain" },
    { id: "count-quiz", kind: "quiz", right: 1 },
    { id: "play-bass-landmarks", kind: "read-note", clef: "bass", answer: "play", notes: [48, 53, 60, 50, 55, 57], pass: 0.66 },
    { id: "name-by-counting", kind: "read-note", clef: "bass", answer: "name", notes: [50, 59, 52, 47, 57, 55], pass: 0.66 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: bassLandmarksEn, de: bassLandmarksDe },
};

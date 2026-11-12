/**
 * *Treble landmarks*, the fourth lesson of *Reading music*: three landmark notes in the treble clef let
 * the learner find any note by counting steps from the nearest one.
 *
 * A demo plays the three landmarks: middle C, treble G and high C. The learner learns where each is
 * written, answers a quiz on it, and names the landmarks on the staff. Then the learner counts steps from
 * a landmark, answers a quiz, and names notes near the landmarks. Last, the learner plays a mix of
 * landmarks and their neighbours, which is the step the world's skip test picks. The texts are
 * `treble-landmarks.en.ts` and `treble-landmarks.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { trebleLandmarksDe } from "./treble-landmarks.de";
import { trebleLandmarksEn } from "./treble-landmarks.en";

export const trebleLandmarks: Lesson = {
  id: "treble-landmarks",
  steps: [
    {
      id: "landmarks-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 60, at: 0, beats: 2 },
        { note: 67, at: 2, beats: 2 },
        { note: 72, at: 4, beats: 2 },
      ],
    },
    { id: "three-landmarks", kind: "explain" },
    { id: "high-c-quiz", kind: "quiz", right: 2 },
    { id: "name-landmarks", kind: "read-note", clef: "treble", answer: "name", notes: [60, 67, 72, 67, 60, 72], pass: 0.66 },
    { id: "count-from-a-landmark", kind: "explain" },
    { id: "count-quiz", kind: "quiz", right: 1 },
    { id: "name-neighbours", kind: "read-note", clef: "treble", answer: "name", notes: [69, 65, 71, 74, 62, 64], pass: 0.66 },
    { id: "read-treble-landmarks", kind: "read-note", clef: "treble", answer: "play", notes: [60, 67, 72, 65, 69, 74], pass: 0.66 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: trebleLandmarksEn, de: trebleLandmarksDe },
};

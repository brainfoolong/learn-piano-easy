/**
 * *Sitting at the piano*, a lesson of *Meet the piano*: how you sit and hold your hands. You sit facing
 * middle C at the front of the bench, with your forearms level with the keys and your feet flat. Your
 * fingers stay relaxed and curved, and you play with their tips.
 *
 * A keyboard cannot see posture, so each idea is checked by a quiz. It follows *Octaves* and leads to
 * *Finger numbers*. The texts are `sitting-at-the-piano.en.ts` and `sitting-at-the-piano.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { sittingAtThePianoEn } from "./sitting-at-the-piano.en";

export const sittingAtThePiano: Lesson = {
  id: "sitting-at-the-piano",
  steps: [
    { id: "face-middle-c", kind: "explain" },
    { id: "find-middle-c", kind: "find-key", key: 60, anyOctave: false },
    { id: "bench-and-feet", kind: "explain" },
    { id: "bench-quiz", kind: "quiz", right: 0 },
    { id: "forearms", kind: "explain" },
    { id: "forearms-quiz", kind: "quiz", right: 1 },
    { id: "curved-fingers", kind: "explain" },
    { id: "fingers-quiz", kind: "quiz", right: 2 },
    { id: "relaxed-play", kind: "play-notes", notes: [60, 62, 64, 62, 60] },
    { id: "posture-quiz", kind: "quiz", right: 1 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: sittingAtThePianoEn },
};

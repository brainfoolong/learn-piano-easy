/**
 * *Welcome to the piano*, the first lesson of *Meet the piano*: the sound check, the ways to play, and
 * the first keys.
 *
 * It is the template every lesson follows. The structure is here, and the texts are `welcome.en.ts` and
 * `welcome.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { welcomeEn } from "./welcome.en";

export const welcome: Lesson = {
  id: "welcome",
  steps: [
    { id: "hello", kind: "explain" },
    {
      id: "sound-check",
      kind: "demo",
      bpm: 90,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 64, at: 1, beats: 1 },
        { note: 67, at: 2, beats: 1 },
        { note: 72, at: 3, beats: 2 },
      ],
    },
    { id: "ways-to-play", kind: "explain" },
    { id: "ways-quiz", kind: "quiz", right: 2 },
    { id: "first-key", kind: "play-notes", notes: [60] },
    { id: "three-keys", kind: "play-notes", notes: [60, 62, 64] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: welcomeEn },
};

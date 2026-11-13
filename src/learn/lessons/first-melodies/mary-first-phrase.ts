/**
 * *Mary's first phrase*, the lesson of *First melodies* after *Hands take turns*: the steps, repeated
 * notes and skip the learner knows already make a real tune.
 *
 * The learner hears the first half of *Mary Had a Little Lamb*, names the note it starts on, and learns
 * which finger plays each of its four notes. They then play it in two chunks, bars 1 and 2, then bars 3
 * and 4, and the whole half at the end. The texts are `mary-first-phrase.en.ts` and
 * `mary-first-phrase.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { maryFirstPhraseEn } from "./mary-first-phrase.en";

export const maryFirstPhrase: Lesson = {
  id: "mary-first-phrase",
  steps: [
    {
      id: "phrase-demo",
      kind: "demo",
      bpm: 90,
      notes: [
        { note: 64, at: 0, beats: 1 },
        { note: 62, at: 1, beats: 1 },
        { note: 60, at: 2, beats: 1 },
        { note: 62, at: 3, beats: 1 },
        { note: 64, at: 4, beats: 1 },
        { note: 64, at: 5, beats: 1 },
        { note: 64, at: 6, beats: 2 },
        { note: 62, at: 8, beats: 1 },
        { note: 62, at: 9, beats: 1 },
        { note: 62, at: 10, beats: 2 },
        { note: 64, at: 12, beats: 1 },
        { note: 67, at: 13, beats: 1 },
        { note: 67, at: 14, beats: 2 },
      ],
    },
    { id: "first-note-quiz", kind: "quiz", right: 1 },
    { id: "the-fingers", kind: "explain" },
    { id: "g-finger-quiz", kind: "quiz", right: 2 },
    { id: "bars-one-two", kind: "play-notes", notes: [64, 62, 60, 62, 64, 64, 64] },
    { id: "bars-three-four", kind: "play-notes", notes: [62, 62, 62, 64, 67, 67] },
    { id: "whole-phrase", kind: "play-notes", notes: [64, 62, 60, 62, 64, 64, 64, 62, 62, 62, 64, 67, 67] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: maryFirstPhraseEn },
};

/**
 * *Open fifths*, a lesson of *Both hands*: the left hand plays two keys at once, its little finger and
 * its thumb, five white keys apart.
 *
 * A demo plays fifths on C, G and F first. The learner then counts the five keys of a fifth, plays the
 * C fifth, moves the shape to G and F, and ends on a fifth under a short tune in the right hand. Every
 * fifth is a chord entry, so both keys must be pressed. The texts are `open-fifths.en.ts` and
 * `open-fifths.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { openFifthsEn } from "./open-fifths.en";

export const openFifths: Lesson = {
  id: "open-fifths",
  skills: ["open-fifths"],
  steps: [
    {
      id: "fifth-sound",
      kind: "demo",
      bpm: 60,
      notes: [
        { note: 48, at: 0, beats: 2, finger: 5, hand: "left" },
        { note: 55, at: 0, beats: 2, finger: 1, hand: "left" },
        { note: 43, at: 2, beats: 2, finger: 5, hand: "left" },
        { note: 50, at: 2, beats: 2, finger: 1, hand: "left" },
        { note: 41, at: 4, beats: 2, finger: 5, hand: "left" },
        { note: 48, at: 4, beats: 2, finger: 1, hand: "left" },
        { note: 48, at: 6, beats: 4, finger: 5, hand: "left" },
        { note: 55, at: 6, beats: 4, finger: 1, hand: "left" },
      ],
    },
    { id: "little-finger-and-thumb", kind: "explain" },
    { id: "count-the-fifth", kind: "quiz", right: 0 },
    { id: "first-fifth", kind: "play-notes", notes: [[48, 55], [48, 55], [48, 55]] },
    { id: "move-the-fifth", kind: "explain" },
    { id: "fifth-from-g", kind: "quiz", right: 0 },
    { id: "three-fifths", kind: "play-notes", notes: [[48, 55], [43, 50], [41, 48], [48, 55]] },
    {
      id: "fifth-under-tune",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 48, at: 0, beats: 4, finger: 5, hand: "left" },
        { note: 55, at: 0, beats: 4, finger: 1, hand: "left" },
        { note: 64, at: 0, beats: 1, finger: 3 },
        { note: 62, at: 1, beats: 1, finger: 2 },
        { note: 60, at: 2, beats: 2, finger: 1 },
        { note: 48, at: 4, beats: 4, finger: 5, hand: "left" },
        { note: 55, at: 4, beats: 4, finger: 1, hand: "left" },
        { note: 64, at: 4, beats: 1, finger: 3 },
        { note: 64, at: 5, beats: 1, finger: 3 },
        { note: 64, at: 6, beats: 2, finger: 3 },
      ],
    },
    { id: "fifth-and-tune", kind: "play-notes", notes: [[48, 55, 64], 62, 60, [48, 55, 64], 64, 64] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: openFifthsEn },
};

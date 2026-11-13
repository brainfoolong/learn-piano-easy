/**
 * *The waltz bass*, a lesson of *Chords*: in three-four time the left hand plays a chord's root low on
 * beat 1, then its upper two notes together on beats 2 and 3.
 *
 * A demo plays the waltz bass alone first. Two explains count the three beats and name the oom-pah-pah,
 * and a quiz checks which beat the root takes. The learner plays the pattern on C, then on G and F after
 * an explain shows their shapes and a quiz checks the F bar. They walk C, F, G and C in a row, hear a
 * short tune over the bass, and play it with both hands. The texts are `the-waltz-bass.en.ts` and
 * `the-waltz-bass.de.ts` beside it.
 */
import type { Lesson, PhraseNote } from "../../model";
import { theWaltzBassDe } from "./the-waltz-bass.de";
import { theWaltzBassEn } from "./the-waltz-bass.en";

/** One bar of waltz bass from beat `at`: finger 5 plays the root, then fingers 3 and 1 play the upper two notes twice. */
function waltzBar(root: number, middle: number, top: number, at: number): PhraseNote[] {
  return [
    { note: root, at, beats: 1, finger: 5, hand: "left" },
    ...[1, 2].flatMap((beat): PhraseNote[] => [
      { note: middle, at: at + beat, beats: 1, finger: 3, hand: "left" },
      { note: top, at: at + beat, beats: 1, finger: 1, hand: "left" },
    ]),
  ];
}

export const theWaltzBass: Lesson = {
  id: "the-waltz-bass",
  skills: ["waltz-bass"],
  steps: [
    {
      id: "waltz-demo",
      kind: "demo",
      bpm: 100,
      notes: [...waltzBar(48, 52, 55, 0), ...waltzBar(41, 45, 48, 3), ...waltzBar(43, 47, 50, 6), ...waltzBar(48, 52, 55, 9)],
    },
    { id: "three-beats", kind: "explain" },
    { id: "oom-pah-pah", kind: "explain" },
    { id: "root-on-one", kind: "quiz", right: 1 },
    { id: "c-waltz", kind: "play-notes", notes: [48, [52, 55], [52, 55], 48, [52, 55], [52, 55]] },
    { id: "g-and-f-shapes", kind: "explain" },
    { id: "g-waltz", kind: "play-notes", notes: [43, [47, 50], [47, 50], 43, [47, 50], [47, 50]] },
    { id: "f-beats-two-and-three", kind: "quiz", right: 2 },
    { id: "f-waltz", kind: "play-notes", notes: [41, [45, 48], [45, 48], 41, [45, 48], [45, 48]] },
    {
      id: "chord-walk",
      kind: "play-notes",
      notes: [48, [52, 55], [52, 55], 41, [45, 48], [45, 48], 43, [47, 50], [47, 50], 48, [52, 55], [52, 55]],
    },
    {
      id: "waltz-tune-demo",
      kind: "demo",
      bpm: 92,
      notes: [
        ...waltzBar(48, 52, 55, 0),
        { note: 64, at: 0, beats: 2, finger: 3 },
        { note: 67, at: 2, beats: 1, finger: 5 },
        ...waltzBar(43, 47, 50, 3),
        { note: 62, at: 3, beats: 3, finger: 2 },
        ...waltzBar(48, 52, 55, 6),
        { note: 64, at: 6, beats: 2, finger: 3 },
        { note: 62, at: 8, beats: 1, finger: 2 },
        ...waltzBar(48, 52, 55, 9),
        { note: 60, at: 9, beats: 3, finger: 1 },
      ],
    },
    {
      id: "waltz-tune",
      kind: "play-notes",
      notes: [
        [48, 64],
        [52, 55],
        [52, 55, 67],
        [43, 62],
        [47, 50],
        [47, 50],
        [48, 64],
        [52, 55],
        [52, 55, 62],
        [48, 60],
        [52, 55],
        [52, 55],
      ],
    },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: theWaltzBassEn, de: theWaltzBassDe },
};

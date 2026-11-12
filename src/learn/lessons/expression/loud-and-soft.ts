/**
 * *Loud and soft*, a lesson of *Expression*: how fast a key goes down sets how loud it sounds, and the
 * marks *p*, *mp*, *mf* and *f* ask for a loudness.
 *
 * A demo plays C to G softly, then loudly. The learner reads that key speed sets loudness and names
 * what makes a note louder. They play C to G softly, then loudly. Each of these two steps judges touch,
 * so without a MIDI keyboard a demo and a quiz replace it. The learner meets *p* and *f* and names what
 * *f* asks, then *mp* and *mf*, and orders the four marks. A demo plays a loud phrase and its soft echo,
 * and the learner plays it, with only the notes judged.
 * The texts are `loud-and-soft.en.ts` and `loud-and-soft.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { loudAndSoftDe } from "./loud-and-soft.de";
import { loudAndSoftEn } from "./loud-and-soft.en";

export const loudAndSoft: Lesson = {
  id: "loud-and-soft",
  steps: [
    {
      id: "soft-and-loud-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1, velocity: 40 },
        { note: 62, at: 1, beats: 1, velocity: 40 },
        { note: 64, at: 2, beats: 1, velocity: 40 },
        { note: 65, at: 3, beats: 1, velocity: 40 },
        { note: 67, at: 4, beats: 2, velocity: 40 },
        { note: 60, at: 7, beats: 1, velocity: 110 },
        { note: 62, at: 8, beats: 1, velocity: 110 },
        { note: 64, at: 9, beats: 1, velocity: 110 },
        { note: 65, at: 10, beats: 1, velocity: 110 },
        { note: 67, at: 11, beats: 2, velocity: 110 },
      ],
    },
    { id: "key-speed", kind: "explain" },
    { id: "what-makes-loud", kind: "quiz", right: 2 },
    {
      id: "play-softly",
      kind: "play-notes",
      notes: [60, 62, 64, 65, 67],
      touch: ["soft", "soft", "soft", "soft", "soft"],
      needs: "touch",
      instead: [
        {
          id: "hear-softly",
          kind: "demo",
          bpm: 80,
          notes: [
            { note: 60, at: 0, beats: 1, velocity: 40 },
            { note: 62, at: 1, beats: 1, velocity: 40 },
            { note: 64, at: 2, beats: 1, velocity: 40 },
            { note: 65, at: 3, beats: 1, velocity: 40 },
            { note: 67, at: 4, beats: 2, velocity: 40 },
          ],
        },
        { id: "how-softly-sounded", kind: "quiz", right: 0 },
      ],
    },
    {
      id: "play-loudly",
      kind: "play-notes",
      notes: [60, 62, 64, 65, 67],
      touch: ["loud", "loud", "loud", "loud", "loud"],
      needs: "touch",
      instead: [
        {
          id: "hear-loudly",
          kind: "demo",
          bpm: 80,
          notes: [
            { note: 60, at: 0, beats: 1, velocity: 110 },
            { note: 62, at: 1, beats: 1, velocity: 110 },
            { note: 64, at: 2, beats: 1, velocity: 110 },
            { note: 65, at: 3, beats: 1, velocity: 110 },
            { note: 67, at: 4, beats: 2, velocity: 110 },
          ],
        },
        { id: "how-loudly-sounded", kind: "quiz", right: 3 },
      ],
    },
    { id: "piano-and-forte", kind: "explain" },
    { id: "what-f-asks", kind: "quiz", right: 1 },
    { id: "mezzo-marks", kind: "explain" },
    { id: "softest-to-loudest", kind: "quiz", right: 2 },
    {
      id: "echo-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1, velocity: 110 },
        { note: 64, at: 1, beats: 1, velocity: 110 },
        { note: 67, at: 2, beats: 2, velocity: 110 },
        { note: 60, at: 4, beats: 1, velocity: 40 },
        { note: 64, at: 5, beats: 1, velocity: 40 },
        { note: 67, at: 6, beats: 2, velocity: 40 },
      ],
    },
    { id: "play-the-echo", kind: "play-notes", notes: [60, 64, 67, 60, 64, 67] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: loudAndSoftEn, de: loudAndSoftDe },
};

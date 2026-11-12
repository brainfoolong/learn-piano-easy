/**
 * *Crescendo and diminuendo*, a lesson of *Expression*: music can grow louder bit by bit, marked cresc.
 * or an opening hairpin, and softer bit by bit, marked dim., decresc. or a closing hairpin.
 *
 * A demo plays C to G growing louder. The learner reads about cresc. and the opening hairpin and names
 * what cresc. asks. They play C to G soft, then loud. A demo plays G down to C growing softer, and the
 * learner reads about dim., decresc. and the closing hairpin and picks the hairpin that gets softer.
 * They play G down to C loud, then soft. Each of these two playing steps judges touch, so without a
 * MIDI keyboard a demo and a quiz replace it. The learner reads that the two make a phrase swell and
 * fade, plays such a phrase with only the notes judged, and names how a phrase under a hairpin ends.
 * The texts are `crescendo-and-diminuendo.en.ts` and `crescendo-and-diminuendo.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { crescendoAndDiminuendoDe } from "./crescendo-and-diminuendo.de";
import { crescendoAndDiminuendoEn } from "./crescendo-and-diminuendo.en";

export const crescendoAndDiminuendo: Lesson = {
  id: "crescendo-and-diminuendo",
  steps: [
    {
      id: "crescendo-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1, velocity: 35 },
        { note: 62, at: 1, beats: 1, velocity: 55 },
        { note: 64, at: 2, beats: 1, velocity: 75 },
        { note: 65, at: 3, beats: 1, velocity: 95 },
        { note: 67, at: 4, beats: 2, velocity: 115 },
      ],
    },
    { id: "getting-louder", kind: "explain" },
    { id: "what-cresc-asks", kind: "quiz", right: 1 },
    {
      id: "play-crescendo",
      kind: "play-notes",
      notes: [60, 62, 64, 65, 67],
      touch: ["soft", "soft", "soft", "loud", "loud"],
      needs: "touch",
      instead: [
        {
          id: "hear-crescendo",
          kind: "demo",
          bpm: 80,
          notes: [
            { note: 60, at: 0, beats: 1, velocity: 35 },
            { note: 62, at: 1, beats: 1, velocity: 55 },
            { note: 64, at: 2, beats: 1, velocity: 75 },
            { note: 65, at: 3, beats: 1, velocity: 95 },
            { note: 67, at: 4, beats: 2, velocity: 115 },
          ],
        },
        { id: "how-crescendo-changed", kind: "quiz", right: 3 },
      ],
    },
    {
      id: "diminuendo-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 67, at: 0, beats: 1, velocity: 115 },
        { note: 65, at: 1, beats: 1, velocity: 95 },
        { note: 64, at: 2, beats: 1, velocity: 75 },
        { note: 62, at: 3, beats: 1, velocity: 55 },
        { note: 60, at: 4, beats: 2, velocity: 35 },
      ],
    },
    { id: "getting-softer", kind: "explain" },
    { id: "which-hairpin-softer", kind: "quiz", right: 0 },
    {
      id: "play-diminuendo",
      kind: "play-notes",
      notes: [67, 65, 64, 62, 60],
      touch: ["loud", "loud", "loud", "soft", "soft"],
      needs: "touch",
      instead: [
        {
          id: "hear-diminuendo",
          kind: "demo",
          bpm: 80,
          notes: [
            { note: 67, at: 0, beats: 1, velocity: 115 },
            { note: 65, at: 1, beats: 1, velocity: 95 },
            { note: 64, at: 2, beats: 1, velocity: 75 },
            { note: 62, at: 3, beats: 1, velocity: 55 },
            { note: 60, at: 4, beats: 2, velocity: 35 },
          ],
        },
        { id: "how-diminuendo-changed", kind: "quiz", right: 2 },
      ],
    },
    { id: "swell-and-fade", kind: "explain" },
    { id: "play-swell", kind: "play-notes", notes: [60, 62, 64, 65, 67, 65, 64, 62, 60] },
    { id: "how-it-ends", kind: "quiz", right: 3 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: crescendoAndDiminuendoEn, de: crescendoAndDiminuendoDe },
};

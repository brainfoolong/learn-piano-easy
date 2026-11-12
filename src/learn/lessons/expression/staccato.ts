/**
 * *Staccato*, a lesson of *Expression*: notes played short and detached, with a little silence after
 * each.
 *
 * A demo plays C to G and back staccato. The learner names what staccato means, learns the dot above or
 * below a note and how it differs from a dotted note's dot. They learn to bounce off the key and play a
 * bounced C major chord, broken, in both hands. A second demo plays one phrase legato, then
 * staccato, and the learner names the order. They play a phrase that mixes legato and staccato, name
 * how a note with a dot above is played, bounce C, F and G chords, and pick which style lets go early. How
 * long a key is held is never judged, so the texts say how to play and the steps check the notes. The
 * texts are `staccato.en.ts` and `staccato.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { staccatoDe } from "./staccato.de";
import { staccatoEn } from "./staccato.en";

export const staccato: Lesson = {
  id: "staccato",
  steps: [
    {
      id: "staccato-demo",
      kind: "demo",
      bpm: 88,
      notes: [
        { note: 60, at: 0, beats: 0.25 },
        { note: 62, at: 1, beats: 0.25 },
        { note: 64, at: 2, beats: 0.25 },
        { note: 65, at: 3, beats: 0.25 },
        { note: 67, at: 4, beats: 0.25 },
        { note: 65, at: 5, beats: 0.25 },
        { note: 64, at: 6, beats: 0.25 },
        { note: 62, at: 7, beats: 0.25 },
        { note: 60, at: 8, beats: 0.25 },
      ],
    },
    { id: "short-and-detached", kind: "explain" },
    { id: "what-staccato-means", kind: "quiz", right: 0 },
    { id: "the-dot", kind: "explain" },
    { id: "where-the-dot-sits", kind: "quiz", right: 2 },
    { id: "bounce", kind: "explain" },
    { id: "both-hands-bounce", kind: "play-notes", notes: [[48, 60], [52, 64], [55, 67], [52, 64], [48, 60]] },
    {
      id: "contrast-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 62, at: 1, beats: 1 },
        { note: 64, at: 2, beats: 1 },
        { note: 65, at: 3, beats: 1 },
        { note: 67, at: 4, beats: 2 },
        { note: 60, at: 6, beats: 0.25 },
        { note: 62, at: 7, beats: 0.25 },
        { note: 64, at: 8, beats: 0.25 },
        { note: 65, at: 9, beats: 0.25 },
        { note: 67, at: 10, beats: 0.25 },
      ],
    },
    { id: "which-came-first", kind: "quiz", right: 1 },
    { id: "mixing-both", kind: "explain" },
    { id: "mixed-phrase", kind: "play-notes", notes: [60, 62, 64, 65, 67, 67, 67, 67] },
    { id: "dot-above-quiz", kind: "quiz", right: 3 },
    { id: "bounced-chords", kind: "play-notes", notes: [[60, 64, 67], [60, 64, 67], [60, 65, 69], [59, 62, 67], [60, 64, 67]] },
    { id: "which-lets-go-early", kind: "quiz", right: 0 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: staccatoEn, de: staccatoDe },
};

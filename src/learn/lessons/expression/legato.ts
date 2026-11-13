/**
 * *Legato*, a lesson of *Expression*: notes played smooth and connected, with no gap between them.
 *
 * A demo plays C to G and back legato, with fingers 1 to 5 and back. The learner names what legato means, learns to let go of one key just as
 * the next goes down, and plays C to G that way. They learn the slur as the mark for legato and play a
 * slurred phrase down and back up. They learn that the fingering makes legato possible and play the C
 * major scale with the thumb passing under, then pick the move that keeps it smooth. They play C to G in
 * both hands together and pick the notes that are played legato. How long a key is held is never judged,
 * so the texts say how to play and the steps check the notes. The texts are `legato.en.ts` and
 * `legato.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { legatoEn } from "./legato.en";

export const legato: Lesson = {
  id: "legato",
  steps: [
    {
      id: "legato-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 60, at: 0, beats: 1, finger: 1 },
        { note: 62, at: 1, beats: 1, finger: 2 },
        { note: 64, at: 2, beats: 1, finger: 3 },
        { note: 65, at: 3, beats: 1, finger: 4 },
        { note: 67, at: 4, beats: 1, finger: 5 },
        { note: 65, at: 5, beats: 1, finger: 4 },
        { note: 64, at: 6, beats: 1, finger: 3 },
        { note: 62, at: 7, beats: 1, finger: 2 },
        { note: 60, at: 8, beats: 3, finger: 1 },
      ],
    },
    { id: "smooth-and-connected", kind: "explain" },
    { id: "what-legato-means", kind: "quiz", right: 3 },
    { id: "hand-over", kind: "explain" },
    { id: "five-notes-legato", kind: "play-notes", notes: [60, 62, 64, 65, 67] },
    { id: "when-to-let-go", kind: "quiz", right: 1 },
    { id: "the-slur", kind: "explain" },
    { id: "what-a-slur-asks", kind: "quiz", right: 2 },
    { id: "slurred-phrase", kind: "play-notes", notes: [67, 65, 64, 62, 60, 62, 64] },
    { id: "fingers-make-it", kind: "explain" },
    { id: "scale-legato", kind: "play-notes", notes: [60, 62, 64, 65, 67, 69, 71, 72] },
    { id: "which-move-keeps-it-smooth", kind: "quiz", right: 0 },
    { id: "both-hands-legato", kind: "play-notes", notes: [[48, 60], [50, 62], [52, 64], [53, 65], [55, 67]] },
    { id: "which-is-legato", kind: "quiz", right: 3 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: legatoEn },
};

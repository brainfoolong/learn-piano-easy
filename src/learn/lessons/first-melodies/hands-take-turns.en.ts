/** *Hands take turns* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const handsTakeTurnsEn = {
  title: "Hands take turns",
  steps: {
    "call-and-answer": {
      text: "Listen to a call and its answer. The right hand plays three notes, then the left hand plays them again, one octave lower.",
    },
    "both-positions": {
      text: "Put both hands in C position at once. Your right thumb rests on middle C, and your left little finger rests on the C one octave below.",
    },
    "low-hand-quiz": {
      text: "Both hands are in C position. Which hand plays the low notes?",
      answers: ["Your left hand", "Your right hand", "Both hands together"],
    },
    "echo-listen": {
      text: "Listen to two notes each time. Is the second one higher, lower or the same?",
    },
    "first-turn": {
      text: "Your turn. Play C D E with your right hand, then C D E with your left hand.",
    },
    "second-turn": {
      text: "Now start on your right little finger and walk down to E. Your left hand answers, from its thumb down to E.",
    },
    "one-waits": {
      text: "While one hand plays, the other rests on its keys and waits. It stays in place, so it is ready for its turn.",
    },
    "long-phrase": {
      text: "Keep both hands in C position. This longer tune takes four turns: right hand, left hand, right, then left. Follow the marked key from hand to hand.",
    },
    recap: {
      text: "Well done. Your hands now share a tune.",
      points: [
        "Both hands can rest in C position at once, one octave apart.",
        "Your left hand plays the low notes, and your right hand the high ones.",
        "One hand plays while the other waits in place for its turn.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type HandsTakeTurnsTexts = typeof handsTakeTurnsEn;

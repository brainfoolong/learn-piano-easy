/** *Reading steps and skips* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const readingStepsAndSkipsEn = {
  title: "Reading steps and skips",
  steps: {
    "moves-demo": {
      text: "Listen. First the notes climb by steps, then by skips. On the staff, each move has its own look.",
    },
    "step-on-the-staff": {
      text: "A step on the staff goes from a line to the next space, or from a space to the next line. On the keys, it goes to the next white key.",
    },
    "step-from-line-quiz": {
      text: "A note sits on a line. Where is the note one step up?",
      answers: ["In the space just above", "On the next line up", "Two lines up"],
    },
    "skip-on-the-staff": {
      text: "A skip on the staff goes from a line to the next line, or from a space to the next space. On the keys, it leaves out one white key.",
    },
    "step-or-skip-quiz": {
      text: "A note moves from a line to the next line up. Is that a step or a skip?",
      answers: ["A step", "A skip"],
    },
    "space-to-line-quiz": {
      text: "A note moves from a space to the line just above. Is that a step or a skip?",
      answers: ["A step", "A skip"],
    },
    "read-by-moves": {
      text: "You need not name every note. Name the first one, then read each move: up or down, a step or a skip.",
    },
    "skip-from-e-quiz": {
      text: "A note is E, on the bottom line of the treble staff. The next note sits on the next line up. Which note is it?",
      answers: ["D", "F", "G"],
    },
    "first-note": {
      text: "The next song starts on this note. Name it.",
    },
    "hand-on-d": {
      text: "Watch the right hand move up from C position. The thumb sits on D, and fingers 2 to 5 cover E, G, A and B. F is left out, so fingers 2 and 3 open a little wider.",
    },
    "d-position": {
      text: "Your turn. Put your right thumb on D and play D E G A B with fingers 1 to 5. Then walk back down to D.",
    },
    "song-notes": {
      text: "The next song uses these five notes. Read each one and play it with your right hand.",
    },
    "song-opening": {
      text: "Here is the start of the next song. Keep your right hand on D, E, G, A and B, and follow the marked key.",
    },
    "opening-move-quiz": {
      text: "In that tune, E moves down to D. E sits on the bottom line. Where is D?",
      answers: ["In the space just below", "On the line below", "On the same line"],
    },
    "dotted-demo": {
      text: "Listen to two bars of the song. A dot makes a note half as long again: a dotted half note lasts three beats. The dotted quarter D lasts one and a half beats, and an eighth rest fills the last half beat.",
    },
    "dotted-half-quiz": {
      text: "A half note lasts two beats. How many beats does a dotted half note last?",
      answers: ["Two beats", "Three beats", "Four beats"],
    },
    "dotted-tap": {
      text: "Your turn, after one bar of count-in. Play E, E and D on the clicks, and lift D after one and a half beats. Hold G for three beats, then play D.",
    },
    recap: {
      text: "Well done. You can read a tune by its moves now.",
      points: [
        "A step goes from a line to the next space, or a space to the next line.",
        "A skip goes from line to line, or space to space.",
        "Name the first note, then read each move: its direction and its size.",
        "A dot makes a note half as long again.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type ReadingStepsAndSkipsTexts = typeof readingStepsAndSkipsEn;

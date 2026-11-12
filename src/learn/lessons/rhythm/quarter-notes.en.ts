/** *Quarter notes* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const quarterNotesEn = {
  title: "Quarter notes",
  steps: {
    "quarter-demo": {
      text: "Watch and listen. Middle C sounds once on every beat, each note as long as the next.",
    },
    "what-a-quarter-note-is": {
      text: "Each note you heard was a quarter note. A quarter note lasts one beat. So you play one note on each beat.",
    },
    "quarter-beats-quiz": {
      text: "How long does a quarter note last?",
      answers: ["One beat", "Two beats", "Four beats"],
    },
    "quarter-taps": {
      text: "Each tap is one quarter note. Press Start, listen to four clicks, then tap any key once on every click.",
    },
    "phrase-demo": {
      text: "Here is the start of a famous tune. Every note is a quarter note, one on each beat.",
    },
    "quarter-phrase": {
      text: "Put your right hand in C position. Play the tune and count one beat for each note.",
    },
    recap: {
      text: "Well done. You know your first note length now.",
      points: ["A quarter note lasts one beat.", "You play one quarter note on each beat.", "Many tunes are made mostly of quarter notes."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type QuarterNotesTexts = typeof quarterNotesEn;

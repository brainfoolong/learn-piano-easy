/** *Sharps* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const sharpsEn = {
  title: "Sharps",
  steps: {
    "raised-by-a-half-step": {
      text: "Listen: C, then the black key just right of it. Then F, and the black key just right of F.",
    },
    "the-sharp-sign": {
      text: "This sign ♯ is a sharp. It raises a note a half step, to the key just right. So C♯ is the black key right of C.",
    },
    "find-c-sharp": {
      text: "Find C♯. Start on any C and take one half step up.",
    },
    "find-f-sharp": {
      text: "Now find F♯. It is the first black key of the group of three.",
    },
    "where-is-g-sharp": {
      text: "Where is G♯?",
      answers: ["The black key just left of G", "The black key just right of G", "The white key A"],
    },
    "e-sharp": {
      text: "No black key sits right of E. A half step up from E lands on F. So E♯ is F, and B♯ is C.",
    },
    "e-sharp-is": {
      text: "Which key do you press for E♯?",
      answers: ["F", "E", "F♯"],
    },
    "sharp-on-the-staff": {
      text: "On the staff, the ♯ stands just left of the note, on the same line or space. You read the note, then go a half step up.",
    },
    "play-sharps": {
      text: "Read each note with its sharp and play it. Find the white key first, then take one half step up.",
    },
    "through-f-sharp": {
      text: "Play D, E, F♯ and G, then back down to D. Put your right thumb on D and your middle finger on F♯.",
    },
    recap: {
      text: "Well done. You can read and play sharps.",
      points: [
        "A sharp ♯ raises a note a half step, to the key just right.",
        "Most sharps are black keys, such as C♯ and F♯.",
        "E♯ is F, and B♯ is C, because no black key sits between.",
        "On the staff, the ♯ stands just left of its note.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type SharpsTexts = typeof sharpsEn;

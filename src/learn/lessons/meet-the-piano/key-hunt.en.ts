/** *The key hunt* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const keyHuntEn = {
  title: "The key hunt",
  steps: {
    ready: {
      text: "Time for the key hunt! Each key has eight seconds on the clock. Find your way by the groups of black keys.",
    },
    "any-c": { text: "Find any C." },
    "middle-c": { text: "Now find middle C, the C in the middle of the piano." },
    "any-f": { text: "Find any F." },
    "any-g": { text: "Find any G." },
    "any-d": { text: "Find any D." },
    "any-b": { text: "Find any B." },
    "three-middle": { text: "Find the middle black key of a group of three." },
    "any-e": { text: "Find any E." },
    "any-a": { text: "Find any A." },
    "high-c": { text: "Last one! Find the C one octave above middle C." },
    recap: {
      text: "You beat the key hunt. You know your way around the piano.",
      points: ["The black keys guide you, in groups of two and three.", "Seven letters name the white keys, from C to B.", "The same letter comes back one octave higher."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type KeyHuntTexts = typeof keyHuntEn;

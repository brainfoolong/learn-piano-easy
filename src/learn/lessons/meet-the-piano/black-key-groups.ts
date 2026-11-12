/**
 * *Black key groups*, the third lesson of *Meet the piano*: the black keys come in groups of two and of
 * three, and the groups are how you find your way on the keys.
 *
 * Every `find-key` step passes in any octave, since any group of its kind is right. No key is named by
 * a letter, because `find-c` teaches the first letter name. The last steps mix both groups, so they use
 * the whole idea. The texts are `black-key-groups.en.ts` and `black-key-groups.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { blackKeyGroupsDe } from "./black-key-groups.de";
import { blackKeyGroupsEn } from "./black-key-groups.en";

export const blackKeyGroups: Lesson = {
  id: "black-key-groups",
  steps: [
    { id: "see-the-groups", kind: "explain", illustration: "black-key-groups" },
    { id: "smaller-group-quiz", kind: "quiz", right: 1 },
    { id: "two-left", kind: "find-key", key: 61, anyOctave: true },
    { id: "two-right", kind: "find-key", key: 63, anyOctave: true },
    { id: "group-of-three", kind: "explain" },
    { id: "three-left", kind: "find-key", key: 66, anyOctave: true },
    { id: "three-middle", kind: "find-key", key: 68, anyOctave: true },
    { id: "all-five", kind: "play-notes", notes: [61, 63, 66, 68, 70] },
    { id: "find-your-way", kind: "quiz", right: 1 },
    { id: "three-right", kind: "find-key", key: 70, anyOctave: true },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: blackKeyGroupsEn, de: blackKeyGroupsDe },
};

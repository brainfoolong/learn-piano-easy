/**
 * The boss of *Scales and keys*: the Beginner version of *Jingle Bells* in the player, with both hands
 * at full speed. The version's id is `common`. It plays the tune in C major, with no sharps or flats,
 * and its tune walks the steps of the scale the world taught.
 *
 * It asks only what the course taught by then. The right hand stays in C position. The left hand holds
 * one low note, or a fifth on F, under each bar. It never plays the `rare` version, whose left hand
 * plays chords, which the *Chords* world teaches later.
 */
import type { Lesson } from "../../model";
import { jingleBellsDe } from "./jingle-bells.de";
import { jingleBellsEn } from "./jingle-bells.en";

export const jingleBells: Lesson = {
  id: "jingle-bells",
  steps: [
    { id: "intro", kind: "explain" },
    { id: "song", kind: "song", file: "ours/jingle-bells/common.mid", practice: 3, accuracy: 0.8 },
  ],
  texts: { en: jingleBellsEn, de: jingleBellsDe },
};

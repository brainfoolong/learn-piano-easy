/**
 * The boss of *Both hands*: the Beginner version of *Ode to Joy* in the player, at its practice step
 * for both hands on the first eight bars, which waits for each note. The version's id is `common`, the
 * one the boss of *Rhythm* plays with the right hand alone.
 *
 * It asks only what the course taught by then. Both hands stay in C position, with no black key. The
 * left hand holds two keys at once, C with G or D with G, as *Open fifths* taught. It never plays the
 * `rare` version, which is in D major with F sharp and left-hand chords.
 */
import type { Lesson } from "../../model";
import { odeToJoyBothHandsDe } from "./ode-to-joy.de";
import { odeToJoyBothHandsEn } from "./ode-to-joy.en";

export const odeToJoyBothHands: Lesson = {
  id: "ode-to-joy",
  steps: [
    { id: "intro", kind: "explain" },
    { id: "song", kind: "song", file: "ours/ode-to-joy/common.mid", practice: 2, accuracy: 0.8 },
  ],
  texts: { en: odeToJoyBothHandsEn, de: odeToJoyBothHandsDe },
};

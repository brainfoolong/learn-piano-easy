/**
 * The boss of *Chords*: the Easy version of *Canon in D* in the player, with both hands a little
 * slower than written. The version's id is `rare`. It plays the falling line over a left hand that
 * breaks each chord of the ground into a low note and a higher one. The right hand ends on thirds, two
 * keys of a chord pressed as one.
 */
import type { Lesson } from "../../model";
import { canonInDRareDe } from "./canon-in-d.de";
import { canonInDRareEn } from "./canon-in-d.en";

export const canonInDRare: Lesson = {
  id: "canon-in-d",
  steps: [
    { id: "intro", kind: "explain" },
    { id: "song", kind: "song", file: "ours/canon-in-d/rare.mid", practice: 3, accuracy: 0.8 },
  ],
  texts: { en: canonInDRareEn, de: canonInDRareDe },
};

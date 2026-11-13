/**
 * The boss of *Expression*: the Easy version of *Für Elise* in the player, with both hands a little
 * slower than written. The version's id is `rare`, and it is in A minor. The left hand climbs each
 * chord as a broken chord, and the right hand carries on climbing, so the two hands take turns. The
 * right thumb moves down to middle C in the rests.
 */
import type { Lesson } from "../../model";
import { furEliseRareEn } from "./fur-elise.en";

export const furEliseRare: Lesson = {
  id: "fur-elise",
  steps: [
    { id: "intro", kind: "explain" },
    { id: "song", kind: "song", file: "ours/fur-elise/rare.mid", practice: 3, accuracy: 0.8 },
  ],
  texts: { en: furEliseRareEn },
};

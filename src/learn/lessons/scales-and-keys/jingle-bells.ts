/**
 * The boss of *Scales and keys*: the Easy version of *Jingle Bells* in the player, with both hands a
 * little slower than written. The version's id is `rare`. It plays the tune in C major, with no sharps
 * or flats, in eighths with a dotted rhythm over left-hand chords. Its tune walks the steps of the
 * scale the world taught.
 */
import type { Lesson } from "../../model";
import { jingleBellsRareDe } from "./jingle-bells.de";
import { jingleBellsRareEn } from "./jingle-bells.en";

export const jingleBellsRare: Lesson = {
  id: "jingle-bells",
  steps: [
    { id: "intro", kind: "explain" },
    { id: "song", kind: "song", file: "ours/jingle-bells/rare.mid", practice: 3, accuracy: 0.8 },
  ],
  texts: { en: jingleBellsRareEn, de: jingleBellsRareDe },
};

/**
 * The boss of *Both hands*: the Easy version of *Ode to Joy* in the player, with both hands a little
 * slower than written. The version's id is `rare`. It plays the tune in D major with its dotted rhythm,
 * over a left hand of held notes and chords, so it asks for all the world taught.
 */
import type { Lesson } from "../../model";
import { odeToJoyRareDe } from "./ode-to-joy.de";
import { odeToJoyRareEn } from "./ode-to-joy.en";

export const odeToJoyRare: Lesson = {
  id: "ode-to-joy",
  steps: [
    { id: "intro", kind: "explain" },
    { id: "song", kind: "song", file: "ours/ode-to-joy/rare.mid", practice: 3, accuracy: 0.8 },
  ],
  texts: { en: odeToJoyRareEn, de: odeToJoyRareDe },
};

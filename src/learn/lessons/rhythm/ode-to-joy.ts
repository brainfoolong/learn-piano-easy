/** The boss of *Rhythm*: the Beginner version of *Ode to Joy* in the player, with its right hand alone. Its id is `common`. */
import type { Lesson } from "../../model";
import { odeToJoyEn } from "./ode-to-joy.en";

export const odeToJoy: Lesson = {
  id: "ode-to-joy",
  steps: [
    { id: "intro", kind: "explain" },
    { id: "song", kind: "song", file: "ours/ode-to-joy/common.mid", practice: 0, accuracy: 0.8 },
  ],
  texts: { en: odeToJoyEn },
};

/** The boss of *First melodies*: the Beginner version of *Mary Had a Little Lamb* in the player. Its id is `common`. */
import type { Lesson } from "../../model";
import { maryDe } from "./mary.de";
import { maryEn } from "./mary.en";

export const mary: Lesson = {
  id: "mary-had-a-little-lamb",
  steps: [
    { id: "intro", kind: "explain" },
    { id: "song", kind: "song", file: "ours/mary-had-a-little-lamb/common.mid", practice: 0, accuracy: 0.8 },
  ],
  texts: { en: maryEn, de: maryDe },
};

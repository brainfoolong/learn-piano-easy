/**
 * The boss of *Reading music*: the Beginner version of *Old MacDonald Had a Farm* in the player, with
 * its right hand alone. The version's id is `common`. Its song step shows the sheet music and hides the
 * falling notes, so the learner reads.
 */
import type { Lesson } from "../../model";
import { oldMacDonaldEn } from "./old-macdonald.en";

export const oldMacDonald: Lesson = {
  id: "old-macdonald",
  steps: [
    { id: "intro", kind: "explain" },
    { id: "song", kind: "song", file: "ours/old-macdonald-had-a-farm/common.mid", practice: 0, accuracy: 0.8, view: "sheet" },
  ],
  texts: { en: oldMacDonaldEn },
};

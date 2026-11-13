/** The Chinese texts of *Chords*' lessons, by lesson id. `World.loadTexts("zh")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { albertiBassZh } from "./alberti-bass.zh";
import { brokenChordsZh } from "./broken-chords.zh";
import { cFAndGZh } from "./c-f-and-g.zh";
import { canonInDRareZh } from "./canon-in-d.zh";
import { inversionsZh } from "./inversions.zh";
import { majorTriadsZh } from "./major-triads.zh";
import { minorTriadsZh } from "./minor-triads.zh";
import { theWaltzBassZh } from "./the-waltz-bass.zh";
import { whatAChordIsZh } from "./what-a-chord-is.zh";

export const texts: WorldTexts = {
  "alberti-bass": albertiBassZh,
  "broken-chords": brokenChordsZh,
  "c-f-and-g": cFAndGZh,
  "canon-in-d": canonInDRareZh,
  inversions: inversionsZh,
  "major-triads": majorTriadsZh,
  "minor-triads": minorTriadsZh,
  "the-waltz-bass": theWaltzBassZh,
  "what-a-chord-is": whatAChordIsZh,
};

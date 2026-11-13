/** The Hindi texts of *Chords*' lessons, by lesson id. `World.loadTexts("hi")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { albertiBassHi } from "./alberti-bass.hi";
import { brokenChordsHi } from "./broken-chords.hi";
import { cFAndGHi } from "./c-f-and-g.hi";
import { canonInDRareHi } from "./canon-in-d.hi";
import { inversionsHi } from "./inversions.hi";
import { majorTriadsHi } from "./major-triads.hi";
import { minorTriadsHi } from "./minor-triads.hi";
import { theWaltzBassHi } from "./the-waltz-bass.hi";
import { whatAChordIsHi } from "./what-a-chord-is.hi";

export const texts: WorldTexts = {
  "alberti-bass": albertiBassHi,
  "broken-chords": brokenChordsHi,
  "c-f-and-g": cFAndGHi,
  "canon-in-d": canonInDRareHi,
  inversions: inversionsHi,
  "major-triads": majorTriadsHi,
  "minor-triads": minorTriadsHi,
  "the-waltz-bass": theWaltzBassHi,
  "what-a-chord-is": whatAChordIsHi,
};

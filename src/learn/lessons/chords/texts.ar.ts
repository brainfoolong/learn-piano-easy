/** The Arabic texts of *Chords*' lessons, by lesson id. `World.loadTexts("ar")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { albertiBassAr } from "./alberti-bass.ar";
import { brokenChordsAr } from "./broken-chords.ar";
import { cFAndGAr } from "./c-f-and-g.ar";
import { canonInDRareAr } from "./canon-in-d.ar";
import { inversionsAr } from "./inversions.ar";
import { majorTriadsAr } from "./major-triads.ar";
import { minorTriadsAr } from "./minor-triads.ar";
import { theWaltzBassAr } from "./the-waltz-bass.ar";
import { whatAChordIsAr } from "./what-a-chord-is.ar";

export const texts: WorldTexts = {
  "alberti-bass": albertiBassAr,
  "broken-chords": brokenChordsAr,
  "c-f-and-g": cFAndGAr,
  "canon-in-d": canonInDRareAr,
  inversions: inversionsAr,
  "major-triads": majorTriadsAr,
  "minor-triads": minorTriadsAr,
  "the-waltz-bass": theWaltzBassAr,
  "what-a-chord-is": whatAChordIsAr,
};

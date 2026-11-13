/** The Spanish texts of *Chords*' lessons, by lesson id. `World.loadTexts("es")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { albertiBassEs } from "./alberti-bass.es";
import { brokenChordsEs } from "./broken-chords.es";
import { cFAndGEs } from "./c-f-and-g.es";
import { canonInDRareEs } from "./canon-in-d.es";
import { inversionsEs } from "./inversions.es";
import { majorTriadsEs } from "./major-triads.es";
import { minorTriadsEs } from "./minor-triads.es";
import { theWaltzBassEs } from "./the-waltz-bass.es";
import { whatAChordIsEs } from "./what-a-chord-is.es";

export const texts: WorldTexts = {
  "alberti-bass": albertiBassEs,
  "broken-chords": brokenChordsEs,
  "c-f-and-g": cFAndGEs,
  "canon-in-d": canonInDRareEs,
  inversions: inversionsEs,
  "major-triads": majorTriadsEs,
  "minor-triads": minorTriadsEs,
  "the-waltz-bass": theWaltzBassEs,
  "what-a-chord-is": whatAChordIsEs,
};

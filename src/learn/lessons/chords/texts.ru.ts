/** The Russian texts of *Chords*' lessons, by lesson id. `World.loadTexts("ru")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { albertiBassRu } from "./alberti-bass.ru";
import { brokenChordsRu } from "./broken-chords.ru";
import { cFAndGRu } from "./c-f-and-g.ru";
import { canonInDRareRu } from "./canon-in-d.ru";
import { inversionsRu } from "./inversions.ru";
import { majorTriadsRu } from "./major-triads.ru";
import { minorTriadsRu } from "./minor-triads.ru";
import { theWaltzBassRu } from "./the-waltz-bass.ru";
import { whatAChordIsRu } from "./what-a-chord-is.ru";

export const texts: WorldTexts = {
  "alberti-bass": albertiBassRu,
  "broken-chords": brokenChordsRu,
  "c-f-and-g": cFAndGRu,
  "canon-in-d": canonInDRareRu,
  inversions: inversionsRu,
  "major-triads": majorTriadsRu,
  "minor-triads": minorTriadsRu,
  "the-waltz-bass": theWaltzBassRu,
  "what-a-chord-is": whatAChordIsRu,
};

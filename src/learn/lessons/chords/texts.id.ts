/** The Indonesian texts of *Chords*' lessons, by lesson id. `World.loadTexts("id")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { albertiBassId } from "./alberti-bass.id";
import { brokenChordsId } from "./broken-chords.id";
import { cFAndGId } from "./c-f-and-g.id";
import { canonInDRareId } from "./canon-in-d.id";
import { inversionsId } from "./inversions.id";
import { majorTriadsId } from "./major-triads.id";
import { minorTriadsId } from "./minor-triads.id";
import { theWaltzBassId } from "./the-waltz-bass.id";
import { whatAChordIsId } from "./what-a-chord-is.id";

export const texts: WorldTexts = {
  "alberti-bass": albertiBassId,
  "broken-chords": brokenChordsId,
  "c-f-and-g": cFAndGId,
  "canon-in-d": canonInDRareId,
  inversions: inversionsId,
  "major-triads": majorTriadsId,
  "minor-triads": minorTriadsId,
  "the-waltz-bass": theWaltzBassId,
  "what-a-chord-is": whatAChordIsId,
};

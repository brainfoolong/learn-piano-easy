/** The Portuguese texts of *Chords*' lessons, by lesson id. `World.loadTexts("pt")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { albertiBassPt } from "./alberti-bass.pt";
import { brokenChordsPt } from "./broken-chords.pt";
import { cFAndGPt } from "./c-f-and-g.pt";
import { canonInDRarePt } from "./canon-in-d.pt";
import { inversionsPt } from "./inversions.pt";
import { majorTriadsPt } from "./major-triads.pt";
import { minorTriadsPt } from "./minor-triads.pt";
import { theWaltzBassPt } from "./the-waltz-bass.pt";
import { whatAChordIsPt } from "./what-a-chord-is.pt";

export const texts: WorldTexts = {
  "alberti-bass": albertiBassPt,
  "broken-chords": brokenChordsPt,
  "c-f-and-g": cFAndGPt,
  "canon-in-d": canonInDRarePt,
  inversions: inversionsPt,
  "major-triads": majorTriadsPt,
  "minor-triads": minorTriadsPt,
  "the-waltz-bass": theWaltzBassPt,
  "what-a-chord-is": whatAChordIsPt,
};

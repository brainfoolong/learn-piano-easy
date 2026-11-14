/** The French texts of *Chords*' lessons, by lesson id. `World.loadTexts("fr")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { albertiBassFr } from "./alberti-bass.fr";
import { brokenChordsFr } from "./broken-chords.fr";
import { cFAndGFr } from "./c-f-and-g.fr";
import { canonInDRareFr } from "./canon-in-d.fr";
import { inversionsFr } from "./inversions.fr";
import { majorTriadsFr } from "./major-triads.fr";
import { minorTriadsFr } from "./minor-triads.fr";
import { theWaltzBassFr } from "./the-waltz-bass.fr";
import { whatAChordIsFr } from "./what-a-chord-is.fr";

export const texts: WorldTexts = {
  "alberti-bass": albertiBassFr,
  "broken-chords": brokenChordsFr,
  "c-f-and-g": cFAndGFr,
  "canon-in-d": canonInDRareFr,
  inversions: inversionsFr,
  "major-triads": majorTriadsFr,
  "minor-triads": minorTriadsFr,
  "the-waltz-bass": theWaltzBassFr,
  "what-a-chord-is": whatAChordIsFr,
};

/** The German texts of *Chords*' lessons, by lesson id. `World.loadTexts("de")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { albertiBassDe } from "./alberti-bass.de";
import { brokenChordsDe } from "./broken-chords.de";
import { cFAndGDe } from "./c-f-and-g.de";
import { canonInDRareDe } from "./canon-in-d.de";
import { inversionsDe } from "./inversions.de";
import { majorTriadsDe } from "./major-triads.de";
import { minorTriadsDe } from "./minor-triads.de";
import { theWaltzBassDe } from "./the-waltz-bass.de";
import { whatAChordIsDe } from "./what-a-chord-is.de";

export const texts: WorldTexts = {
  "alberti-bass": albertiBassDe,
  "broken-chords": brokenChordsDe,
  "c-f-and-g": cFAndGDe,
  "canon-in-d": canonInDRareDe,
  inversions: inversionsDe,
  "major-triads": majorTriadsDe,
  "minor-triads": minorTriadsDe,
  "the-waltz-bass": theWaltzBassDe,
  "what-a-chord-is": whatAChordIsDe,
};

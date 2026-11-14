/** The Bengali texts of *Chords*' lessons, by lesson id. `World.loadTexts("bn")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { albertiBassBn } from "./alberti-bass.bn";
import { brokenChordsBn } from "./broken-chords.bn";
import { cFAndGBn } from "./c-f-and-g.bn";
import { canonInDRareBn } from "./canon-in-d.bn";
import { inversionsBn } from "./inversions.bn";
import { majorTriadsBn } from "./major-triads.bn";
import { minorTriadsBn } from "./minor-triads.bn";
import { theWaltzBassBn } from "./the-waltz-bass.bn";
import { whatAChordIsBn } from "./what-a-chord-is.bn";

export const texts: WorldTexts = {
  "alberti-bass": albertiBassBn,
  "broken-chords": brokenChordsBn,
  "c-f-and-g": cFAndGBn,
  "canon-in-d": canonInDRareBn,
  inversions: inversionsBn,
  "major-triads": majorTriadsBn,
  "minor-triads": minorTriadsBn,
  "the-waltz-bass": theWaltzBassBn,
  "what-a-chord-is": whatAChordIsBn,
};

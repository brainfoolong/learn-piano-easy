import { Color } from "three";

import type { Note } from "../midi/song";
import { expect, test } from "../testing";
import { layoutKeys } from "./key-layout";
import { createNoteBars } from "./notes";

/** A note on track 0 from `start` to `end` seconds. Ticks are left at 0, which the bars never read. */
function note(pitch: number, start: number, end: number): Note {
  return { track: 0, channel: 0, pitch, velocity: 90, startTick: 0, endTick: 0, start, end };
}

const layout = layoutKeys();
/** A key's centre in the bars' own space, where the range is centred on x = 0. */
const centreOf = (pitch: number) => layout.key(pitch)!.center - layout.width / 2;

test("hover_finds_the_note_under_the_pointer", () => {
  const bars = createNoteBars({ speed: 8, shrink: true });
  const middleC = note(60, 1, 2);
  bars.setSong([middleC], layout, () => new Color(0xffffff));
  bars.update(0);

  // At time 0 the bar runs from z = -16 to z = -8, eight units per second ahead of the hit line.
  expect(bars.noteAt(centreOf(60), -12)).toBe(middleC);
  expect(bars.noteAt(centreOf(60), -4)).toBeUndefined();
  expect(bars.noteAt(centreOf(62), -12)).toBeUndefined();
  bars.dispose();
});

test("a_cycle_shows_its_start_past_its_end", () => {
  const bars = createNoteBars({ speed: 8, far: 60 });
  const first = note(60, 0, 1);
  const across = note(62, 3, 5);
  const after = note(64, 4, 5);
  bars.setSong([first, across, after], layout, () => new Color(0xffffff));
  bars.setCycle({ from: 0, to: 4 });
  bars.update(3.5);

  // Each bar as pitch, front z and back z. The look-ahead reaches 7.5 s, to song time 11 s.
  const shown: string[] = [];
  bars.forEachShown((n, _x, frontZ, _width, _top, backZ) => shown.push(`${n.pitch} ${frontZ} ${backZ}`));
  expect(shown).toEqual([
    // The first pass: the note held over the cycle's end is cut there, and the note after it never shows.
    "62 0 -4",
    // The second pass, 4 s later: the cycle's notes arrive as the wrapped clock reaches them.
    "60 -4 -12",
    "62 -28 -36",
    // The third pass, 8 s later, up to the look-ahead's end.
    "60 -36 -44",
  ]);
  // A copy of a later pass is the real note.
  expect(bars.noteAt(centreOf(60), -8)).toBe(first);
  bars.dispose();
});

test("hover_prefers_a_black_key_bar_over_the_white_one_beneath", () => {
  const bars = createNoteBars({ speed: 8, width: 0.86 });
  const white = note(60, 1, 2);
  const black = note(61, 1, 2);
  // The black note comes first in the list, so a hit on it must survive the white note after it.
  bars.setSong([black, white], layout, () => new Color(0xffffff));
  bars.update(0);

  const whiteHalf = (layout.key(60)!.width * 0.86) / 2;
  const blackHalf = (layout.key(61)!.width * 0.86) / 2;
  const low = Math.max(centreOf(60) - whiteHalf, centreOf(61) - blackHalf);
  const high = Math.min(centreOf(60) + whiteHalf, centreOf(61) + blackHalf);
  expect(high).toBeGreaterThan(low);
  expect(bars.noteAt((low + high) / 2, -12)).toBe(black);
  expect(bars.noteAt(centreOf(60) - whiteHalf + 0.01, -12)).toBe(white);
  bars.dispose();
});

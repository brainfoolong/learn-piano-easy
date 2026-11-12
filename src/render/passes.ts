/**
 * The passes: how the picture shows a cycle that repeats, as pieces of song time each drawn later by a
 * shift. Drawn time is the time a thing reaches the hit line on the wrapped clock.
 *
 * Decisions, and what each costs:
 * - Without a cycle, one pass draws the whole song at its own time.
 * - With a cycle, the first pass draws the song up to the cycle's end, unshifted. Each pass after it
 *   draws the cycle again, one cycle length later than the one before. A learner reading ahead then
 *   sees the next pass arrive exactly when the wrapped clock reaches it.
 * - A pass draws only what starts inside it, and cuts what runs past its end. That matches the sound:
 *   after a wrap the scheduler starts no note from before the cycle's start, and releases every
 *   note at its end.
 * - No pass comes before the first, so the stretch behind the hit line shows the song itself. With
 *   `shrink` off, the bars that ran past the keys then change at the wrap. The scene's time source
 *   carries no lap, so it cannot tell a first pass from a later one.
 * - A frame walks one pass, plus one more for each cycle length the look-ahead spans. A very short
 *   cycle then costs many passes, each a binary search of the song.
 *
 * Bounds: it keeps nothing between calls.
 */
import type { Cycle } from "../audio/scheduler";
import type { NoteWindow, TimeSpan } from "./note-window";

/**
 * Calls `visit` with each pass that reaches into drawn time `[start, end)`, in drawn order. A pass draws
 * song time `[from, to)`, `shift` seconds later.
 */
export function forEachPass(
  cycle: Cycle | undefined,
  start: number,
  end: number,
  visit: (from: number, to: number, shift: number) => void,
): void {
  const length = cycle === undefined ? 0 : cycle.to - cycle.from;
  if (cycle === undefined || !(length > 0)) {
    visit(-Infinity, Infinity, 0);
    return;
  }
  if (start < cycle.to) visit(-Infinity, cycle.to, 0);
  // Pass k draws the cycle over drawn time `[from + k * length, to + k * length)`.
  for (let k = Math.max(1, Math.floor((start - cycle.from) / length)); cycle.from + k * length < end; k++) {
    visit(cycle.from, cycle.to, k * length);
  }
}

/**
 * Calls `visit` with each note of `window` that some pass draws in drawn time `[start, end)`. It hands
 * over the note's index, its pass's shift, and the song time its pass cuts it at.
 */
export function forEachDrawn<T extends TimeSpan>(
  window: NoteWindow<T>,
  cycle: Cycle | undefined,
  start: number,
  end: number,
  visit: (note: T, index: number, shift: number, cut: number) => void,
): void {
  forEachPass(cycle, start, end, (from, to, shift) => {
    window.forEachVisible(start - shift, Math.min(end - shift, to), (note, i) => {
      if (note.start >= from) visit(note, i, shift, to);
    });
  });
}

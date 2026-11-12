/**
 * The note window: which notes of a song overlap a span of time, found without scanning the song.
 *
 * Decisions, and what each costs:
 * - It is built once per song, from spans sorted by start, as `Song.notes` is. Building copies the
 *   starts and a running maximum of the ends into two typed arrays, so a song costs 16 bytes a note.
 * - A note overlaps the window `[from, to)` when it starts before `to` and ends after `from`. A note of
 *   no length counts when its start lies in `[from, to)`, so it shows for exactly one window edge.
 * - A binary search over the starts finds the first note that starts at or after `to`. A second one over
 *   the running maximum finds the first note that can still be sounding at `from`. Every note between
 *   the two is tested, so a query costs a log of the song plus the notes between those two indices.
 *   That span holds the overlapping notes and the short notes that ended inside a long one.
 *
 * Bounds: the window holds two numbers per note and keeps no reference to a query's result.
 */

/** A span of time in seconds. `end` is never before `start`. */
export interface TimeSpan {
  start: number;
  end: number;
}

export class NoteWindow<T extends TimeSpan> {
  /** The spans, in start order, as they were given. */
  readonly notes: readonly T[];
  private readonly starts: Float64Array;
  /** `maxEnds[i]` is the latest end of the notes `0..i`. It never decreases. */
  private readonly maxEnds: Float64Array;

  /** The window over `notes`, which must be sorted by start. */
  constructor(notes: readonly T[]) {
    this.notes = notes;
    this.starts = new Float64Array(notes.length);
    this.maxEnds = new Float64Array(notes.length);
    let maxEnd = -Infinity;
    notes.forEach((note, i) => {
      if (i > 0 && note.start < notes[i - 1]!.start) throw new RangeError("notes must be sorted by start");
      this.starts[i] = note.start;
      maxEnd = Math.max(maxEnd, note.end);
      this.maxEnds[i] = maxEnd;
    });
  }

  /** Calls `visit` with each note that overlaps `[from, to)` and its index, in start order. */
  forEachVisible(from: number, to: number, visit: (note: T, index: number) => void): void {
    if (!(from < to)) return;
    const stop = firstAtOrAbove(this.starts, to);
    // A note ending exactly at `from` can still count when it has no length, so the search keeps it.
    for (let i = firstAtOrAbove(this.maxEnds, from); i < stop; i++) {
      const note = this.notes[i]!;
      if (note.end > from || (note.end === note.start && note.start >= from)) visit(note, i);
    }
  }

  /** The notes that overlap `[from, to)`, in start order. */
  visible(from: number, to: number): T[] {
    const found: T[] = [];
    this.forEachVisible(from, to, (note) => found.push(note));
    return found;
  }
}

/** The first index of ascending `sorted` whose value is at or above `value`, or its length without one. */
export function firstAtOrAbove(sorted: Float64Array, value: number): number {
  let low = 0;
  let high = sorted.length;
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (sorted[mid]! < value) low = mid + 1;
    else high = mid;
  }
  return low;
}

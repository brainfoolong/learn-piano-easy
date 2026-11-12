import { expect, test } from "../testing";
import { NoteWindow, type TimeSpan } from "./note-window";

/** The overlap rule of the window, written out plainly. */
function overlaps(note: TimeSpan, from: number, to: number): boolean {
  if (note.start === note.end) return note.start >= from && note.start < to;
  return note.start < to && note.end > from;
}

/** A small deterministic random source, so a failure repeats. */
function random(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 1_103_515_245 + 12_345) % 2_147_483_648;
    return state / 2_147_483_648;
  };
}

test("window_holds_exactly_the_notes_that_overlap_it", () => {
  const next = random(7);
  const notes: (TimeSpan & { id: number })[] = [];
  for (let id = 0; id < 600; id++) {
    // Starts land on a quarter-second grid, so many notes share a start and edges meet exactly.
    const start = Math.floor(next() * 240) / 4;
    const length = next() < 0.15 ? 0 : Math.floor(next() * 16) / 4;
    notes.push({ id, start, end: start + length });
  }
  notes.sort((a, b) => a.start - b.start);
  const window = new NoteWindow(notes);

  const windows: [number, number][] = [[-5, 0], [0, 0.25], [10, 10.5], [59.75, 80], [-1, 100], [3, 3]];
  for (let i = 0; i < 200; i++) {
    const from = Math.floor(next() * 260) / 4 - 2;
    windows.push([from, from + Math.floor(next() * 24) / 4]);
  }
  for (const [from, to] of windows) {
    const expected = notes.filter((note) => from < to && overlaps(note, from, to)).map((n) => n.id);
    expect(window.visible(from, to).map((n) => n.id)).toEqual(expected);
  }

  // A note of no length shows at the window's start edge and not at its end edge.
  const points = new NoteWindow([{ start: 2, end: 2 }]);
  expect(points.visible(2, 3).length).toBe(1);
  expect(points.visible(1, 2).length).toBe(0);
});

test("long_notes_starting_before_the_window_are_kept", () => {
  const notes: (TimeSpan & { id: string })[] = [{ id: "long", start: 0, end: 100 }];
  for (let i = 0; i < 1000; i++) notes.push({ id: `short${i}`, start: 0.05 + i * 0.05, end: 0.09 + i * 0.05 });
  const window = new NoteWindow(notes);

  const found = window.visible(80, 82).map((n) => n.id);
  expect(found[0]).toBe("long");
  expect(found).not.toContain("short0");
  // Only the long note sounds past every short one.
  expect(window.visible(99, 101).map((n) => n.id)).toEqual(["long"]);
  expect(window.visible(100, 101)).toEqual([]);
});

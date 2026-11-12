import type { Note } from "../midi/song";
import { keySections } from "../theory/key";
import { expect, test } from "../testing";
import { blockText, chordMarks, chordText, markAt, placementZ } from "./chord-labels";
import { demoSong } from "./scene";

/** The demo song, with each right-hand note held to the end of its measure as its pedal holds it. */
function pedalledDemo() {
  const song = demoSong();
  const measure = 1920;
  const held = (note: Note) => (note.track === 1 ? song.tempoMap.ticksToSeconds(Math.floor(note.startTick / measure) * measure + measure - 20) : note.end);
  return { song, marks: chordMarks(song, held, keySections(song)) };
}

test("a_pedalled_broken_chord_is_named_in_its_key", () => {
  const { marks } = pedalledDemo();
  const names = marks.slice(0, 8).map((mark) => chordText(mark, { roman: true, system: "letters" }));
  expect(names).toEqual(["C (I)", "C/G (I)", "Am (vi)", "Am/E (vi)", "F (IV)", "F/C (IV)", "G (V)", "G/D (V)"]);
  // The first chord holds C2 and the broken chord up to C5, which joins it before G2 does.
  expect(marks[0]!.low).toBe(36);
  expect(marks[0]!.high).toBe(72);
  expect(markAt(marks, 0)).toBeUndefined();
  expect(markAt(marks, marks[2]!.start)).toBe(marks[2]);
});

test("note_blocks_name_chord_tones_and_degrees", () => {
  const { marks } = pedalledDemo();
  const am = marks[2]!;
  const tone = { blocks: "tone", notation: "simple", markRoot: false } as const;
  expect(blockText(60, am, tone)).toEqual({ text: "♭3", root: false });
  expect(blockText(60, am, { ...tone, notation: "full" })).toEqual({ text: "♭3rd", root: false });
  expect(blockText(57, am, { ...tone, notation: "full", markRoot: true })).toEqual({ text: "Root", root: true });
  // In C major, A is the sixth degree.
  expect(blockText(57, am, { ...tone, blocks: "degree" })).toEqual({ text: "6", root: false });
  // With no blocks, only a marked root shows one.
  expect(blockText(60, am, { ...tone, blocks: "none", markRoot: true })).toBeUndefined();
  expect(blockText(69, am, { ...tone, blocks: "none", markRoot: true })).toEqual({ text: "R", root: true });
});

test("the_five_placements_run_from_beyond_the_end_to_before_the_start", () => {
  const zs = (["above", "top", "middle", "bottom", "below"] as const).map((placement) => placementZ(placement, 0, -10, 1));
  expect([...zs].sort((a, b) => a - b)).toEqual(zs);
  expect(zs[2]).toBe(-5);
});

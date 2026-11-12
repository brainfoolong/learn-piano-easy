import type { SongTrack } from "../midi/song";
import { TempoMap } from "../midi/tempo-map";
import { expect, test } from "../testing";
import { engraveMeasure, type EngravedStaff } from "./engrave";
import { quantize } from "./quantize";

/** 480 ticks per quarter, in 4/4. */
const TPQ = 480;
const Q = TPQ;
const E = TPQ / 2;

/** A track of `notes`, each `[pitch, startTick, endTick]`. */
function track(notes: [number, number, number][]): SongTrack {
  return {
    index: 0,
    name: "",
    program: 0,
    percussion: false,
    channels: [0],
    notes: notes.map(([pitch, startTick, endTick]) => ({ track: 0, channel: 0, pitch, velocity: 80, startTick, endTick, start: 0, end: 0 })),
    pedals: [],
  };
}

/** The sheet of one track playing `notes` back to back, each `[pitch, ticks]`. */
function sheetOf(notes: [number, number][]) {
  let tick = 0;
  const timed = notes.map(([pitch, ticks]): [number, number, number] => [pitch, tick, (tick += ticks)]);
  return sheetOfTimed(timed);
}

function sheetOfTimed(notes: [number, number, number][]) {
  return quantize({ tempoMap: new TempoMap({ kind: "ticks", ticksPerBeat: TPQ }, [], []), tracks: [track(notes)] });
}

/** Each chord's accidentals, `-` for none. */
function accidentals(staff: EngravedStaff): string[] {
  return staff.chords.map((chord) => chord.notes.map((n) => n.accidental ?? "-").join(","));
}

test("stems_point_away_from_the_middle_line", () => {
  // E5 above the middle line, E4 below it, B4 on it, and C4 with G5, whose C4 lies farther out.
  const lone = sheetOfTimed([
    [76, 0, Q],
    [64, Q, 2 * Q],
    [71, 2 * Q, 3 * Q],
    [60, 3 * Q, 4 * Q],
    [79, 3 * Q, 4 * Q],
  ]);
  const staff = engraveMeasure(lone, 0).staves[0]!;
  expect(staff.chords.map((c) => c.stem)).toEqual(["down", "up", "down", "up"]);
  const middle = staff.top + 2 * 10;
  for (const chord of staff.chords) {
    const reachesPastMiddle = chord.stem === "up" ? chord.stemTip <= middle : chord.stemTip >= middle;
    expect(reachesPastMiddle).toBe(true);
  }

  // Two voices override that: the upper stems up although it sits high, the lower down although low.
  const two = sheetOfTimed([
    [76, 0, Q],
    [77, Q, 2 * Q],
    [76, 2 * Q, 3 * Q],
    [77, 3 * Q, 4 * Q],
    [64, 0, 2 * Q],
    [65, 2 * Q, 4 * Q],
  ]);
  const both = engraveMeasure(two, 0).staves[0]!;
  expect(both.chords.map((c) => [c.voice, c.stem])).toEqual([
    [0, "up"],
    [0, "up"],
    [0, "up"],
    [0, "up"],
    [1, "down"],
    [1, "down"],
  ]);
});

test("eighths_in_one_beat_share_a_beam", () => {
  const sheet = sheetOf([
    [60, E],
    [62, E],
    [64, E],
    [65, E],
    [67, E],
    [69, E],
    [71, E],
    [72, E],
  ]);
  const staff = engraveMeasure(sheet, 0).staves[0]!;
  expect(staff.beams).toEqual([
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
  ]);
  for (const beam of staff.beams) {
    const chords = beam.map((c) => staff.chords[c]!);
    expect(new Set(chords.map((c) => c.stem)).size).toBe(1);
    expect(chords.every((c, i) => c.beam === staff.beams.indexOf(beam) && i >= 0)).toBe(true);
  }

  // A beat of an eighth and two sixteenths is one beam, a rest breaks one, and a quarter has none.
  const mixed = sheetOfTimed([
    [67, 0, E],
    [69, E, E + E / 2],
    [71, E + E / 2, Q],
    [72, Q, Q + E],
    [74, 2 * Q, 3 * Q],
    [76, 3 * Q, 4 * Q],
  ]);
  const second = engraveMeasure(mixed, 0).staves[0]!;
  expect(second.beams).toEqual([[0, 1, 2]]);
  expect(second.chords.map((c) => c.beam)).toEqual([0, 0, 0, null, null, null]);
  expect(second.rests.map((r) => r.base)).toEqual([8]);
});

test("accidentals_follow_the_key_signature", () => {
  // F♯4, F4, F4 and G4, then F4 again in the next measure.
  const notes: [number, number][] = [
    [66, Q],
    [65, Q],
    [65, Q],
    [67, Q],
    [65, 4 * Q],
  ];
  const sheet = sheetOf(notes);
  const gMajor = { tonic: 7, mode: "major" } as const;
  expect(accidentals(engraveMeasure(sheet, 0, { key: gMajor }).staves[0]!)).toEqual(["-", "natural", "-", "-"]);
  expect(accidentals(engraveMeasure(sheet, 1, { key: gMajor }).staves[0]!)).toEqual(["natural"]);
  expect(accidentals(engraveMeasure(sheet, 0).staves[0]!)).toEqual(["sharp", "natural", "-", "-"]);
  expect(accidentals(engraveMeasure(sheet, 1).staves[0]!)).toEqual(["-"]);

  // F major spells the black key a flat, and its B♭ needs no sign while B needs a natural.
  const fMajor = { tonic: 5, mode: "major" } as const;
  const flats = sheetOf([
    [70, Q],
    [71, Q],
    [66, Q],
    [70, Q],
  ]);
  const staff = engraveMeasure(flats, 0, { key: fMajor, clef: true, keySignature: true, timeSignature: true }).staves[0]!;
  expect(accidentals(staff)).toEqual(["-", "natural", "flat", "flat"]);
  expect(staff.chords[2]!.notes[0]!.step).toBe(32);

  // A note tied in from the last measure shows no accidental there.
  const tied = sheetOfTimed([[66, 3 * Q, 5 * Q]]);
  expect(accidentals(engraveMeasure(tied, 0).staves[0]!)).toEqual(["sharp"]);
  expect(accidentals(engraveMeasure(tied, 1).staves[0]!)).toEqual(["-"]);
});

test("a_measure_engraves_one_svg_group_per_chord", () => {
  const sheet = sheetOf([
    [60, Q],
    [64, E],
    [67, E],
    [72, 2 * Q],
  ]);
  const measure = engraveMeasure(sheet, 0, { clef: true, timeSignature: true, width: 400 });
  expect(measure.width).toBeCloseTo(400);
  expect(measure.svg.startsWith("<svg")).toBe(true);
  expect(measure.svg.match(/class="chord"/g)?.length).toBe(4);
  expect(measure.columns.map((c) => c.tick)).toEqual([0, Q, Q + E, 2 * Q]);
  const xs = measure.columns.map((c) => c.x);
  expect(xs.every((x, i) => i === 0 || x > xs[i - 1]!)).toBe(true);
});

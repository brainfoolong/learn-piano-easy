import type { SongTrack } from "../midi/song";
import { TempoMap } from "../midi/tempo-map";
import { expect, test } from "../testing";
import { quantize, type SheetEvent } from "./quantize";

/** 480 ticks per quarter, in 4/4 unless `signature` says otherwise. */
const TPQ = 480;

/** A track of `notes`, each `[pitch, startTick, endTick]`. */
function track(index: number, notes: [number, number, number][]): SongTrack {
  return {
    index,
    name: "",
    program: 0,
    percussion: false,
    channels: [0],
    notes: notes.map(([pitch, startTick, endTick]) => ({
      track: index,
      channel: 0,
      pitch,
      velocity: 80,
      startTick,
      endTick,
      start: 0,
      end: 0,
    })),
    pedals: [],
  };
}

function song(...tracks: SongTrack[]) {
  return { tempoMap: new TempoMap({ kind: "ticks", ticksPerBeat: TPQ }, [], []), tracks };
}

/** An event as `kind base[.][t] [pitches] [~ when tied | h when hidden]`, for short assertions. */
function show(event: SheetEvent): string {
  const value = `${event.value.base}${event.value.dotted ? "." : ""}${event.value.triplet ? "t" : ""}`;
  if (event.kind === "rest") return `rest ${value}${event.hidden ? " h" : ""}`;
  return `${value} ${event.pitches.join(",")}${event.tied ? " ~" : ""}`;
}

test("a_note_across_a_barline_is_tied", () => {
  const sheet = quantize(song(track(0, [[64, 3 * TPQ, 5 * TPQ]])));
  expect(sheet.measures.map((m) => [m.tick, m.ticks])).toEqual([
    [0, 4 * TPQ],
    [4 * TPQ, 4 * TPQ],
  ]);
  const [first, second] = sheet.staves[0]!.measures;
  expect(first!.map((voice) => voice.map(show))).toEqual([["rest 2.", "4 64 ~"]]);
  expect(second!.map((voice) => voice.map(show))).toEqual([["4 64", "rest 2."]]);
  expect(second![0]![0]!.tick).toBe(4 * TPQ);
});

test("rests_below_the_minimum_value_are_hidden", () => {
  // A dotted eighth and a 32nd, then a 32nd of silence before the next beat.
  const notes: [number, number, number][] = [
    [67, 0, TPQ - TPQ / 8],
    [67, TPQ, 4 * TPQ],
  ];
  const shown = quantize(song(track(0, notes)));
  expect(shown.staves[0]!.measures[0]![0]!.map(show)).toEqual(["8. 67 ~", "32 67", "rest 32", "2. 67"]);
  const hidden = quantize(song(track(0, notes)), { hideRestsBelow: 16 });
  expect(hidden.staves[0]!.measures[0]![0]!.map(show)).toEqual(["8. 67 ~", "32 67", "rest 32 h", "2. 67"]);
});

test("low_tracks_get_a_bass_clef", () => {
  const high = track(0, [[72, 0, TPQ], [76, TPQ, 2 * TPQ], [55, 2 * TPQ, 3 * TPQ]]);
  const low = track(1, [[43, 0, TPQ], [48, TPQ, 2 * TPQ], [62, 2 * TPQ, 3 * TPQ]]);
  expect(quantize(song(high, low)).staves.map((s) => [s.track, s.clef])).toEqual([
    [0, "treble"],
    [1, "bass"],
  ]);
  expect(quantize(song(high, low), { tracks: [1] }).staves.map((s) => s.clef)).toEqual(["bass"]);
  const manual = quantize(song(track(0, [[40, 0, TPQ]]), track(1, [[80, 0, TPQ]])), { autoClef: false });
  expect(manual.staves.map((s) => s.clef)).toEqual(["treble", "bass"]);
});

test("three_notes_filling_a_beat_evenly_are_a_triplet", () => {
  const third = TPQ / 3;
  const sheet = quantize(
    song(track(0, [[60, 0, third], [62, third + 3, 2 * third], [64, 2 * third, TPQ - 2], [65, TPQ, 4 * TPQ]])),
  );
  expect(sheet.staves[0]!.measures[0]![0]!.map(show)).toEqual(["8t 60", "8t 62", "8t 64", "2. 65"]);
});

test("a_held_note_under_a_melody_takes_a_second_voice", () => {
  const sheet = quantize(song(track(0, [[48, 0, 4 * TPQ], [72, 0, 2 * TPQ], [74, 2 * TPQ, 4 * TPQ]])));
  expect(sheet.staves[0]!.measures[0]!.map((voice) => voice.map(show))).toEqual([["2 72", "2 74"], ["1 48"]]);
});

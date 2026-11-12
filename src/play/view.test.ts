import type { Note, Song } from "../midi/song";
import { TempoMap } from "../midi/tempo-map";
import { expect, test } from "../testing";
import { formatClock, formatPosition, measureStarts } from "./timeline";
import { transposeSong } from "./transport";
import { measureCount, secondsShown } from "./view";

/** 4/4 at 120 BPM, so a measure lasts 2 s, until measure 4, which runs at 60 BPM and lasts 4 s. */
const tempoMap = new TempoMap(
  { kind: "ticks", ticksPerBeat: 480 },
  [
    { tick: 0, microsecondsPerBeat: 500_000 },
    { tick: 4 * 1920, microsecondsPerBeat: 1_000_000 },
  ],
  [{ tick: 0, numerator: 4, denominator: 4 }],
);

/** A song of `measures` measures on `tempoMap`, with the given notes. */
function song(measures: number, notes: Note[] = []): Song {
  const endTick = measures * 1920;
  return {
    tempoMap,
    tracks: [{ index: 0, name: "", program: 0, percussion: false, channels: [0], notes, pedals: [] }],
    notes,
    keySignatures: [],
    markers: [],
    lyrics: [],
    endTick,
    duration: tempoMap.ticksToSeconds(endTick),
    problems: [],
  };
}

function note(pitch: number, start: number): Note {
  return { track: 0, channel: 0, pitch, velocity: 80, startTick: start * 960, endTick: start * 960 + 480, start, end: start + 0.5 };
}

test("zoom_by_seconds_shows_its_seconds", () => {
  expect(secondsShown({ zoomByMeasures: false, noteToHeightConst: 5, measuresShownOnScreen: 4 }, tempoMap, 3)).toBe(5);
});

test("zoom_by_measures_spans_whole_measures_from_the_current_one", () => {
  const zoom = { zoomByMeasures: true, noteToHeightConst: 5, measuresShownOnScreen: 2 };
  expect(secondsShown(zoom, tempoMap, 0)).toBeCloseTo(4);
  expect(secondsShown(zoom, tempoMap, 1.9)).toBeCloseTo(4);
  // Measures 3 and 4: one at 2 s and one at 4 s.
  expect(secondsShown(zoom, tempoMap, 6.5)).toBeCloseTo(6);
});

test("a_song_counts_a_cut_short_last_measure", () => {
  expect(measureCount(song(5))).toBe(5);
  expect(measureCount({ ...song(5), endTick: 5 * 1920 + 480 })).toBe(6);
});

test("timeline_labels_show_time_and_measure_dot_beat", () => {
  expect(formatClock(65.25, false)).toBe("1:05");
  expect(formatClock(65.25, true)).toBe("1:05.250");
  expect(formatClock(-1, false)).toBe("0:00");
  expect(formatPosition(tempoMap, 0)).toBe("1.1");
  expect(formatPosition(tempoMap, 2.5)).toBe("2.2");
  expect(measureStarts(song(5))).toEqual([0, 2, 4, 6, 8]);
});

test("transpose_moves_pitched_notes_and_drops_those_out_of_range", () => {
  const original = song(1, [note(60, 0), note(125, 0.5)]);
  const up = transposeSong(original, 3);
  expect(up.notes.map((n) => n.pitch)).toEqual([63]);
  expect(up.tracks[0]!.notes.map((n) => n.pitch)).toEqual([63]);
  expect(original.notes.map((n) => n.pitch)).toEqual([60, 125]);
  expect(transposeSong(original, 0)).toBe(original);
});

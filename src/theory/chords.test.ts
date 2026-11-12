import { expect, test } from "../testing";
import { chordName, chordSpans, chordTone, detectChord, romanNumeral, scaleDegree } from "./chords";
import type { Key } from "./key";

const C_MAJOR: Key = { tonic: 0, mode: "major" };
const C_MINOR: Key = { tonic: 0, mode: "minor" };
const F_MAJOR: Key = { tonic: 5, mode: "major" };

test("inverted_triads_keep_their_root", () => {
  const firstInversion = detectChord([64, 67, 72]);
  expect(firstInversion).toEqual({ root: 0, bass: 4, quality: "major" });
  expect(chordName(firstInversion!)).toBe("C/E");
  expect(romanNumeral(firstInversion!, C_MAJOR)).toBe("I");

  const secondInversion = detectChord([55, 60, 64, 72]);
  expect(secondInversion).toEqual({ root: 0, bass: 7, quality: "major" });
  expect(chordName(secondInversion!)).toBe("C/G");

  const minor = detectChord([60, 64, 69]);
  expect(chordName(minor!)).toBe("Am/C");
  expect(romanNumeral(minor!, C_MAJOR)).toBe("vi");
});

test("dominant_seventh_in_c_is_v7", () => {
  const root = detectChord([43, 59, 62, 65]);
  expect(chordName(root!)).toBe("G7");
  expect(romanNumeral(root!, C_MAJOR)).toBe("V7");

  const inverted = detectChord([59, 62, 65, 67]);
  expect(chordName(inverted!)).toBe("G7/B");
  expect(romanNumeral(inverted!, C_MAJOR)).toBe("V7");
  expect([59, 62, 65].map((pitch) => chordTone(pitch, inverted!))).toEqual(["3", "5", "♭7"]);
});

test("unclear_note_sets_get_no_name", () => {
  expect(detectChord([])).toBeUndefined();
  expect(detectChord([60, 67, 72])).toBeUndefined();
  expect(detectChord([60, 61, 62])).toBeUndefined();
  expect(detectChord([60, 64, 67, 74])).toBeUndefined();
  expect(detectChord([62, 67, 72])).toBeUndefined();
  expect(chordName(detectChord([60, 62, 67])!)).toBe("Csus2");
  expect(chordName(detectChord([55, 60, 62])!)).toBe("Gsus4");
});

test("numerals_and_degrees_follow_the_key", () => {
  expect(romanNumeral(detectChord([67, 71, 74])!, C_MINOR)).toBe("V");
  expect(romanNumeral(detectChord([59, 62, 65])!, C_MINOR)).toBe("♯vii°");
  expect(romanNumeral(detectChord([58, 62, 65])!, C_MAJOR)).toBe("♭VII");
  expect(romanNumeral(detectChord([62, 65, 69, 72])!, C_MAJOR)).toBe("ii7");
  expect(scaleDegree(3, C_MAJOR)).toBe("♭3");
  expect(scaleDegree(3, C_MINOR)).toBe("3");
  expect(chordName(detectChord([58, 62, 65])!, { accidentals: "flats" })).toBe("B♭");
  expect(romanNumeral(detectChord([60, 64, 67, 70])!, F_MAJOR)).toBe("V7");
});

test("spans_join_a_held_chord_and_skip_unclear_stretches", () => {
  const note = (pitch: number, startTick: number, endTick: number) => ({ pitch, startTick, endTick });
  const spans = chordSpans([
    note(48, 0, 960), note(64, 0, 480), note(67, 0, 960), note(64, 480, 960),
    note(60, 960, 1440),
    note(55, 1440, 1920), note(59, 1440, 1920), note(62, 1440, 1920),
  ]);
  expect(spans.map((span) => [span.startTick, span.endTick, chordName(span.chord)])).toEqual([
    [0, 960, "C"],
    [1440, 1920, "G"],
  ]);
});

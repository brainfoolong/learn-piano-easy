import { isBlack } from "../render/key-layout";
import { expect, test } from "../testing";
import { noteName } from "../theory/note-names";
import {
  DEFAULT_RANGE,
  KEYBOARD_PRESETS,
  MIN_KEYS,
  foldIntoRange,
  keyCount,
  normalizeRange,
  parsePitch,
  presetLabel,
  presetOf,
  shiftOctaves,
} from "./range";

test("every_preset_spans_its_named_number_of_keys_on_white_ends", () => {
  expect(KEYBOARD_PRESETS.map((p) => p.keys)).toEqual([88, 76, 73, 61, 49, 44, 37, 32, 25]);
  for (const p of KEYBOARD_PRESETS) {
    expect(keyCount(p.range)).toBe(p.keys);
    expect([isBlack(p.range.first), isBlack(p.range.last)]).toEqual([false, false]);
    expect(normalizeRange(p.range.first, p.range.last)).toEqual(p.range);
  }
  expect(KEYBOARD_PRESETS.map(presetLabel).slice(0, 4)).toEqual([
    "88 keys, A0 to C8",
    "76 keys, E1 to G7",
    "73 keys, E1 to E7",
    "61 keys, C2 to C7",
  ]);
  expect(presetOf(DEFAULT_RANGE)?.keys).toBe(88);
});

test("a_preset_moved_by_octaves_is_still_that_preset", () => {
  const small = { first: 48, last: 72 };
  expect(presetOf(small)?.keys).toBe(25);
  expect(presetOf(shiftOctaves(small, 2))?.keys).toBe(25);
  expect(presetOf(shiftOctaves(small, -2))?.keys).toBe(25);
  // The same number of keys, starting on another note, is a custom range.
  expect(presetOf({ first: 50, last: 74 })).toBeUndefined();
});

test("shifting_stops_at_the_ends_of_the_88_keys", () => {
  const sixtyOne = { first: 36, last: 96 };
  expect(shiftOctaves(sixtyOne, -1)).toEqual({ first: 24, last: 84 });
  expect(shiftOctaves(sixtyOne, 1)).toEqual({ first: 48, last: 108 });
  expect(shiftOctaves(sixtyOne, 2)).toEqual(sixtyOne);
  expect(shiftOctaves(sixtyOne, -2)).toEqual(sixtyOne);
  expect(shiftOctaves(DEFAULT_RANGE, 1)).toEqual(DEFAULT_RANGE);
});

test("a_typed_range_is_ordered_clamped_and_widened_to_white_keys", () => {
  expect(normalizeRange(72, 48)).toEqual({ first: 48, last: 72 });
  expect(normalizeRange(0, 127)).toEqual(DEFAULT_RANGE);
  expect(normalizeRange(49, 73)).toEqual({ first: 48, last: 74 });
  const tiny = normalizeRange(60, 62);
  expect(keyCount(tiny)).toBeGreaterThanOrEqual(MIN_KEYS);
  expect(tiny.first).toBe(60);
  const top = normalizeRange(108, 108);
  expect(top.last).toBe(108);
  expect(keyCount(top)).toBeGreaterThanOrEqual(MIN_KEYS);
});

test("a_note_outside_the_range_folds_in_by_octaves", () => {
  const range = { first: 48, last: 72 };
  expect(foldIntoRange(36, range)).toBe(48);
  expect(foldIntoRange(37, range)).toBe(49);
  expect(foldIntoRange(84, range)).toBe(72);
  expect(foldIntoRange(85, range)).toBe(61);
  expect(foldIntoRange(60, range)).toBe(60);
});

test("note_names_read_back_to_the_same_pitch", () => {
  expect([noteName(21), noteName(60), noteName(61), noteName(108)]).toEqual(["A0", "C4", "C♯4", "C8"]);
  for (let pitch = 0; pitch <= 127; pitch++) expect(parsePitch(noteName(pitch))).toBe(pitch);
  expect([parsePitch("bb0"), parsePitch("C♯4"), parsePitch(" 60 "), parsePitch("Cb4")]).toEqual([22, 61, 60, 59]);
  // The German H reads as B, so a range the German locale names reads back.
  expect([parsePitch("H2"), parsePitch("h2"), parsePitch("B2")]).toEqual([47, 47, 47]);
  expect([parsePitch("J2"), parsePitch("128"), parsePitch("C10"), parsePitch("")]).toEqual([
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
});

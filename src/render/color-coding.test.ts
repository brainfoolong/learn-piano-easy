import type { Note } from "../midi/song";
import { expect, test } from "../testing";
import { codedColor, type ColorCoding, NO_CODING } from "./color-coding";

const note = (pitch: number): Note => ({ track: 0, channel: 0, pitch, velocity: 80, startTick: 0, endTick: 1, start: 0, end: 1 });

const BOTH: ColorCoding = {
  pitchNotes: true,
  pitchKeys: false,
  pitch: Array.from({ length: 12 }, (_, i) => 0x100 + i),
  fingerNotes: true,
  fingerKeys: false,
  right: [0x200, 0x201, 0x202, 0x203, 0x204, 0x205],
  left: [0x300, 0x301, 0x302, 0x303, 0x304, 0x305],
};

test("a_finger_colour_wins_over_a_pitch_colour", () => {
  expect(codedColor(BOTH, "notes", note(62), { hand: "right", finger: 3 })).toBe(0x203);
  expect(codedColor(BOTH, "notes", note(62), { hand: "left", finger: undefined })).toBe(0x300);
  // A note no hand plays falls back to its pitch, D.
  expect(codedColor(BOTH, "notes", note(62), undefined)).toBe(0x102);
});

test("keys_and_notes_are_coded_apart", () => {
  expect(codedColor(BOTH, "keys", note(61), { hand: "right", finger: 1 })).toBeUndefined();
  expect(codedColor({ ...NO_CODING, pitchKeys: true, pitch: BOTH.pitch }, "keys", note(-1), undefined)).toBe(0x10b);
});

import { expect, test } from "../testing";
import { type Finger, type FingerNote, fingerHand, type Hand } from "./fingering";

/** `pitches` as a melody, one note per tick. */
function melody(pitches: readonly number[]): FingerNote[] {
  return pitches.map((pitch, startTick) => ({ pitch, startTick }));
}

const C_MAJOR_UP = [0, 2, 4, 5, 7, 9, 11, 12];

/** A random walk of `count` moments from `seed`, some of them chords, within two octaves of `centre`. */
function walk(seed: number, count: number, centre: number): FingerNote[] {
  let state = seed;
  const next = () => {
    state = (state * 1103515245 + 12345) % 2147483648;
    return state / 2147483648;
  };
  const notes: FingerNote[] = [];
  let pitch = centre;
  for (let tick = 0; tick < count; tick++) {
    pitch = Math.max(centre - 12, Math.min(centre + 12, pitch + Math.round((next() - 0.5) * 10)));
    notes.push({ pitch, startTick: tick });
    if (next() < 0.2) notes.push({ pitch: pitch + 3 + Math.floor(next() * 3), startTick: tick });
  }
  return notes.sort((a, b) => a.startTick - b.startTick || a.pitch - b.pitch);
}

test("c_major_scale_gets_the_standard_fingering", () => {
  expect(fingerHand(melody(C_MAJOR_UP.map((step) => 60 + step)), "right")).toEqual([1, 2, 3, 1, 2, 3, 4, 5]);
  expect(fingerHand(melody(C_MAJOR_UP.map((step) => 72 - step)), "right")).toEqual([5, 4, 3, 2, 1, 3, 2, 1]);
  expect(fingerHand(melody(C_MAJOR_UP.map((step) => 48 + step)), "left")).toEqual([5, 4, 3, 2, 1, 3, 2, 1]);
  expect(fingerHand(melody(C_MAJOR_UP.map((step) => 60 - step)), "left")).toEqual([1, 2, 3, 1, 2, 3, 4, 5]);
});

test("no_finger_crosses_without_the_thumb", () => {
  for (const [hand, centre] of [["right", 67], ["left", 48]] as [Hand, number][]) {
    const sign = hand === "right" ? 1 : -1;
    for (let seed = 1; seed <= 20; seed++) {
      const notes = walk(seed, 120, centre);
      const fingers = fingerHand(notes, hand);
      expect(fingers.every((finger) => finger !== undefined)).toBe(true);
      // Each pair of notes in a row, or at once, is played without crossing two fingers past each other.
      for (let i = 0; i < notes.length; i++) {
        for (let j = i + 1; j < notes.length && notes[j]!.startTick <= notes[i]!.startTick + 1; j++) {
          const [a, b] = [fingers[i]!, fingers[j]!];
          if (a === 1 || b === 1 || a === b || notes[i]!.pitch === notes[j]!.pitch) continue;
          expect(sign * (b - a) * (notes[j]!.pitch - notes[i]!.pitch)).toBeGreaterThan(0);
        }
      }
    }
  }
});

test("fixed_fingers_are_kept_and_their_neighbours_follow", () => {
  const scale = melody(C_MAJOR_UP.map((step) => 60 + step));
  const fingers = fingerHand(scale, "right", new Map<number, Finger>([[0, 2], [5, 5]]));
  expect(fingers[0]).toBe(2);
  expect(fingers[5]).toBe(5);
  expect(fingers).not.toEqual([1, 2, 3, 1, 2, 3, 4, 5]);

  const chord = [
    { pitch: 60, startTick: 0 },
    { pitch: 64, startTick: 0 },
    { pitch: 67, startTick: 0 },
  ];
  expect(fingerHand(chord, "right")).toEqual([1, 3, 5]);
  expect(fingerHand(chord, "left")).toEqual([5, 3, 1]);
  expect(fingerHand(chord, "right", new Map<number, Finger>([[1, 2]]))[1]).toBe(2);
});

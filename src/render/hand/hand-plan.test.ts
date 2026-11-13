import type { Vector3 } from "three";

import type { Finger } from "../../theory/fingering";
import { expect, test } from "../../testing";
import { layoutKeys } from "../key-layout";
import { BLACK_KEY_LENGTH, BLACK_KEY_TOP, WHITE_KEY_LENGTH } from "../piano-geometry";
import { BLACK_INSET, contactPoint, HOVER, type HandPose, INSET, type PhraseNote, planHands } from "./hand-plan";

const LAYOUT = layoutKeys({ first: 48, last: 84 });

/** A right-hand phrase of `[pitch, finger]` pairs, one every half second, each held for 0.4 s. */
function phrase(notes: [number, Finger][]): PhraseNote[] {
  return notes.map(([pitch, finger], i) => ({ pitch, at: i * 0.5, seconds: 0.4, finger, hand: "right" }));
}

function right(notes: [number, Finger][], seconds: number): HandPose {
  return planHands(phrase(notes), LAYOUT).poseAt(seconds).right!;
}

/** A key's centre in world space. */
const keyX = (pitch: number) => LAYOUT.key(pitch)!.center - LAYOUT.width / 2;

const near = (a: Vector3, b: Vector3) => a.distanceTo(b) < 1e-6;

test("a_press_puts_the_pad_on_its_key_at_its_time", () => {
  const notes: [number, Finger][] = [
    [60, 1],
    [62, 2],
    [64, 3],
  ];
  const strike = right(notes, 0.5);
  expect(near(strike.digits.index!, contactPoint(LAYOUT, 62, "index"))).toBe(true);
  expect(strike.down).toEqual([62]);
  // Before its down-stroke the finger waits over its key, and while held it follows the key down.
  const before = right(notes, 0.3);
  expect(before.digits.index!.y).toBeCloseTo(contactPoint(LAYOUT, 62, "index").y + HOVER, 6);
  expect(before.down).toEqual([60]);
  const held = right(notes, 0.7);
  expect(held.digits.index!.y).toBeLessThan(contactPoint(LAYOUT, 62, "index").y - 0.1);
  expect(held.digits.index!.x).toBeCloseTo(keyX(62), 6);
  expect(right(notes, 0.95).down).toEqual([]);
});

test("the_hand_moves_only_when_a_finger_cannot_reach", () => {
  // C, E and G lie under the thumb, middle and little fingers. The thumb's C an octave up does not.
  const notes: [number, Finger][] = [
    [60, 1],
    [64, 3],
    [67, 5],
    [65, 4],
    [72, 1],
  ];
  // The ring finger's F holds until 1.9 s, which leaves the move too little time, so it starts at 1.85 s.
  const wrists = [0, 0.5, 1, 1.5, 1.8].map((t) => right(notes, t).wrist.x);
  expect(wrists.map((x) => x === wrists[0])).toEqual([true, true, true, true, true]);
  expect(wrists[0]).toBeCloseTo(keyX(64), 6);
  expect(right(notes, 2).wrist.x).toBeCloseTo(keyX(76), 6);
  const halfway = right(notes, 1.98).wrist.x;
  expect(halfway > keyX(64) && halfway < keyX(76)).toBe(true);
  // The wrist sits behind the middle finger's pad, at the resting height.
  expect(right(notes, 0).wrist.z).toBeCloseTo(WHITE_KEY_LENGTH - INSET.middle + 5, 6);
  expect(right(notes, 0).wrist.y).toBeCloseTo(2.6, 6);
});

test("a_black_key_is_played_further_in", () => {
  const notes: [number, Finger][] = [
    [64, 3],
    [63, 3],
  ];
  const white = right(notes, 0).digits.middle!;
  const black = right(notes, 0.5).digits.middle!;
  expect(white.z).toBeCloseTo(WHITE_KEY_LENGTH - INSET.middle, 6);
  expect(black.z).toBeCloseTo(BLACK_KEY_LENGTH - BLACK_INSET, 6);
  expect(black.y).toBeGreaterThan(BLACK_KEY_TOP);
  expect(black.x).toBeCloseTo(keyX(63), 6);
});

test("a_free_finger_hovers_over_its_key", () => {
  const pose = right(
    [
      [60, 1],
      [62, 2],
    ],
    0.1,
  );
  // With the thumb on C, the ring finger waits over F, never on E or G.
  const ring = pose.digits.ring!;
  expect(ring.x).toBeCloseTo(keyX(65), 6);
  expect(ring.y).toBeCloseTo(contactPoint(LAYOUT, 65, "ring").y + HOVER, 6);
  expect(ring.z).toBeCloseTo(WHITE_KEY_LENGTH - INSET.ring, 6);
  expect(pose.down).toEqual([60]);
});

test("a_seek_gives_the_same_pose_as_playing", () => {
  const notes = phrase([
    [60, 1],
    [62, 2],
    [64, 3],
    [65, 1],
    [67, 2],
    [69, 3],
    [71, 4],
    [72, 5],
  ]);
  const plan = planHands(notes, LAYOUT);
  const times = Array.from({ length: Math.ceil(plan.end * 60) }, (_, i) => i / 60);
  const played = times.map((t) => plan.poseAt(t));
  // A fresh plan, asked in reverse order, gives every pose again.
  const seeking = planHands(notes, LAYOUT);
  const sought = [...times].reverse().map((t) => seeking.poseAt(t)).reverse();
  expect(sought).toEqual(played);
  // The digits never jump from one frame to the next.
  let jump = 0;
  for (let i = 1; i < played.length; i++) {
    for (const digit of ["thumb", "index", "middle", "ring", "little"] as const) {
      jump = Math.max(jump, played[i]!.right!.digits[digit]!.distanceTo(played[i - 1]!.right!.digits[digit]!));
    }
  }
  expect(jump).toBeLessThan(0.5);
});

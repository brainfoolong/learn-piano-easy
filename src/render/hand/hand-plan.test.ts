import { Vector3 } from "three";

import type { Finger } from "../../theory/fingering";
import { expect, test } from "../../testing";
import { layoutKeys } from "../key-layout";
import { BLACK_KEY_LENGTH, BLACK_KEY_TOP, WHITE_KEY_LENGTH } from "../piano-geometry";
import {
  BLACK_INSET,
  contactPoint,
  HOVER,
  type HandPose,
  INSET,
  OVER_LIFT,
  type PhraseNote,
  planHands,
  UNDER,
} from "./hand-plan";

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

/** Where the fingertips point once `pose`'s turn is applied, as a unit vector on the keys' plane. */
const pointing = (pose: HandPose) => new Vector3(0, 0, -1).applyQuaternion(pose.turn);

test("the_thumb_passes_under_the_palm", () => {
  // C, D and E under the first three fingers, then the thumb passes under to F.
  const notes: [number, Finger][] = [
    [60, 1],
    [62, 2],
    [64, 3],
    [65, 1],
  ];
  const plan = planHands(phrase(notes), LAYOUT);
  const hover = contactPoint(LAYOUT, 65, "thumb").y + HOVER;
  // Find the thumb's lowest point on its way, after the E strikes and before the thumb's down-stroke.
  let lowest = { t: 0, y: Infinity };
  for (let t = 1; t < 1.4; t += 0.005) {
    const y = plan.poseAt(t).right!.digits.thumb!.y;
    if (y < lowest.y) lowest = { t, y };
  }
  const under = plan.poseAt(lowest.t).right!;
  expect(lowest.y).toBeLessThan(hover - UNDER.drop / 2);
  expect(lowest.y).toBeGreaterThan(contactPoint(LAYOUT, 65, "thumb").y);
  // It travels between C and F, tucked back towards the palm, while the middle finger holds E.
  expect(under.digits.thumb!.x > keyX(60) && under.digits.thumb!.x < keyX(65)).toBe(true);
  expect(under.digits.thumb!.z).toBeGreaterThan(contactPoint(LAYOUT, 65, "thumb").z + UNDER.tuck / 2);
  expect(under.down).toEqual([64]);
  // The hand turns towards the thumb on its way, and is straight again as the thumb strikes F.
  expect(pointing(under).x).toBeGreaterThan(0.05);
  expect(pointing(plan.poseAt(0.6).right!).x).toBeCloseTo(0, 6);
  const strike = plan.poseAt(1.5).right!;
  expect(near(strike.digits.thumb!, contactPoint(LAYOUT, 65, "thumb"))).toBe(true);
  expect(pointing(strike).x).toBeCloseTo(0, 6);
});

test("a_finger_crosses_over_the_thumb", () => {
  // Down from G to F with the thumb on F, then the middle finger crosses over to E.
  const notes: [number, Finger][] = [
    [67, 2],
    [65, 1],
    [64, 3],
  ];
  const plan = planHands(phrase(notes), LAYOUT);
  const hover = contactPoint(LAYOUT, 64, "middle").y + HOVER;
  let highest = { t: 0, y: -Infinity };
  for (let t = 0.5; t < 1; t += 0.005) {
    const y = plan.poseAt(t).right!.digits.middle!.y;
    if (y > highest.y) highest = { t, y };
  }
  expect(highest.y).toBeGreaterThan(hover + OVER_LIFT / 2);
  // The arc is over the thumb, which holds F meanwhile, and the hand does not turn.
  const over = plan.poseAt(highest.t).right!;
  expect(over.down).toEqual([65]);
  expect(over.digits.middle!.y).toBeGreaterThan(over.digits.thumb!.y);
  expect(pointing(over).x).toBeCloseTo(0, 6);
  expect(near(plan.poseAt(1).right!.digits.middle!, contactPoint(LAYOUT, 64, "middle"))).toBe(true);
  // A plain step from finger to finger keeps its straight path at hover height.
  const plain = planHands(phrase([[60, 1], [62, 2]]), LAYOUT);
  for (let t = 0.2; t < 0.4; t += 0.01) {
    expect(plain.poseAt(t).right!.digits.index!.y).toBeLessThanOrEqual(contactPoint(LAYOUT, 62, "index").y + HOVER + 1e-9);
  }
});

test("a_chord_lands_its_fingers_together", () => {
  // A C major chord with the thumb, middle and little fingers, after a D with the index finger.
  const chord: PhraseNote[] = [
    { pitch: 62, at: 0, seconds: 0.4, finger: 2, hand: "right" },
    ...([
      [60, 1],
      [64, 3],
      [67, 5],
    ] as const).map(([pitch, finger]) => ({ pitch, at: 0.5, seconds: 0.4, finger, hand: "right" as const })),
  ];
  const plan = planHands(chord, LAYOUT);
  // On the way down all three pads stay level with each other, and they meet their keys at once.
  for (const t of [0.3, 0.4, 0.45, 0.48]) {
    const pose = plan.poseAt(t).right!;
    expect(pose.digits.middle!.y).toBeCloseTo(pose.digits.little!.y, 6);
    expect(pose.digits.thumb!.y).toBeGreaterThan(contactPoint(LAYOUT, 60, "thumb").y);
  }
  const struck = plan.poseAt(0.5).right!;
  expect(near(struck.digits.thumb!, contactPoint(LAYOUT, 60, "thumb"))).toBe(true);
  expect(near(struck.digits.middle!, contactPoint(LAYOUT, 64, "middle"))).toBe(true);
  expect(near(struck.digits.little!, contactPoint(LAYOUT, 67, "little"))).toBe(true);
  expect(struck.down).toEqual([60, 64, 67]);
  // A broken chord rocks between thumb, little and middle finger, and the hand stays where it is.
  const broken = planHands(
    phrase([
      [60, 1],
      [67, 5],
      [64, 3],
      [67, 5],
      [60, 1],
      [67, 5],
      [64, 3],
      [67, 5],
    ]),
    LAYOUT,
  );
  for (let t = 0; t < broken.end; t += 0.05) expect(broken.poseAt(t).right!.wrist.x).toBeCloseTo(keyX(64), 6);
});

test("a_stretch_keeps_the_hand_in_place", () => {
  // Twinkle's first bars in the C position: the little finger stretches from G up to A.
  const notes: [number, Finger][] = [
    [60, 1],
    [60, 1],
    [67, 5],
    [67, 5],
    [69, 5],
    [69, 5],
    [67, 5],
  ];
  const plan = planHands(phrase(notes), LAYOUT);
  for (let t = 0; t < plan.end; t += 0.05) expect(plan.poseAt(t).right!.wrist.x).toBeCloseTo(keyX(64), 6);
  expect(near(plan.poseAt(2).right!.digits.little!, contactPoint(LAYOUT, 69, "little"))).toBe(true);
  // The thumb stretches one key down the same way, but two keys past the little finger move the hand.
  const down = planHands(phrase([[62, 2], [59, 1]]), LAYOUT);
  expect(down.poseAt(0.5).right!.wrist.x).toBeCloseTo(down.poseAt(0).right!.wrist.x, 6);
  const far = planHands(phrase([[67, 5], [71, 5]]), LAYOUT);
  expect(far.poseAt(0.5).right!.wrist.x).toBeGreaterThan(far.poseAt(0).right!.wrist.x + 1);
});

/**
 * The C position on the hand lab's piano: the right thumb on middle C, and a finger on each white key
 * up to G, each resting on its key. The lab shows it, and the rig's tests check the same pose.
 *
 * The keys are those of `LAB_RANGE`, centred on x = 0 as the 3D piano lays them out. The fingertips
 * meet their keys on an arc, as a real hand's do, and the wrist sits behind the middle finger's key.
 */
import { Euler, Quaternion, Vector3 } from "three";

import { DIGITS, type Digit, type HandRig } from "../../src/render/hand/hand-rig";
import type { KeyLayout, KeyRange } from "../../src/render/key-layout";
import { WHITE_KEY_LENGTH } from "../../src/render/piano-geometry";

/** The lab's piano: the two octaves and a half around middle C. */
export const LAB_RANGE: KeyRange = { first: 48, last: 79 };

/** The key each digit rests on. */
const KEYS: Record<Digit, number> = { thumb: 60, index: 62, middle: 64, ring: 65, little: 67 };

/** How far in from a white key's front edge each digit plays. */
const INSET: Record<Digit, number> = { thumb: 0.8, index: 1.3, middle: 1.5, ring: 1.35, little: 0.95 };

/** Where the wrist and the hand sit, which the lab can change to try another pose. */
export interface Placement {
  /** The hand's turn about the vertical, in radians. */
  yaw: number;
  /** The hand's roll towards its little finger, which is short and needs the height. */
  roll: number;
  /** The wrist's height above the keys. */
  lift: number;
  /** How far the wrist sits behind the middle finger's pad. */
  back: number;
  /** How far the wrist moves sideways from above the middle finger's key. */
  shift: number;
}

export const PLACEMENT: Placement = { yaw: 0, roll: -0.12, lift: 2.6, back: 5.0, shift: 0 };

/** The point on its key that each digit's pad meets, in world space. */
export function cPositionTargets(layout: KeyLayout): Map<Digit, Vector3> {
  const keyX = (pitch: number) => layout.key(pitch)!.center - layout.width / 2;
  return new Map(DIGITS.map((d) => [d, new Vector3(keyX(KEYS[d]), 0.02, WHITE_KEY_LENGTH - INSET[d])]));
}

/** Places `hand` over the C position and bends every digit onto its key. Returns the targets. */
export function poseCPosition(hand: HandRig, layout: KeyLayout, placement: Placement = PLACEMENT): Map<Digit, Vector3> {
  const targets = cPositionTargets(layout);
  const turn = new Quaternion().setFromEuler(new Euler(0, placement.yaw, placement.roll));
  hand.place(new Vector3(0, 0, 0), turn);
  const middle = targets.get("middle")!;
  const middleRest = hand.pad("middle");
  hand.place(new Vector3(middle.x - middleRest.x + placement.shift, placement.lift, middle.z + placement.back), turn);
  for (let i = 0; i < 4; i++) for (const d of DIGITS) hand.reach(d, targets.get(d));
  return targets;
}

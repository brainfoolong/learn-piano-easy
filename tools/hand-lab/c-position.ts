/**
 * The C position on the hand lab's piano: the right thumb on middle C, and a finger on each white key
 * up to G, each resting on its key. The lab shows it, and the rig's tests check the same pose.
 *
 * The keys are those of `LAB_RANGE`, centred on x = 0 as the 3D piano lays them out. The fingertips
 * meet their keys on an arc, as a real hand's do, and the wrist sits behind the middle finger's key.
 */
import { Euler, Quaternion, Vector3 } from "three";

import { contactPoint, REST } from "../../src/render/hand/hand-plan";
import { DIGITS, type Digit, type HandRig } from "../../src/render/hand/hand-rig";
import type { KeyLayout, KeyRange } from "../../src/render/key-layout";

/** The lab's piano: the two octaves and a half around middle C. */
export const LAB_RANGE: KeyRange = { first: 48, last: 79 };

/** The key each digit rests on. */
const KEYS: Record<Digit, number> = { thumb: 60, index: 62, middle: 64, ring: 65, little: 67 };

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

/** The plan's resting hand, rolled the right hand's way. */
export const PLACEMENT: Placement = { yaw: 0, roll: -REST.roll, lift: REST.lift, back: REST.back, shift: 0 };

/** The point on its key that each digit's pad meets, in world space. */
export function cPositionTargets(layout: KeyLayout): Map<Digit, Vector3> {
  return new Map(DIGITS.map((d) => [d, contactPoint(layout, KEYS[d], d)]));
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

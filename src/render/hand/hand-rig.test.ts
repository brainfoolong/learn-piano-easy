import { join } from "node:path";

import { Bone, Euler, Quaternion, Vector3 } from "three";
import { type GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { cPositionTargets, LAB_RANGE, poseCPosition } from "../../../tools/hand-lab/c-position";
import { expect, test } from "../../testing";
import { layoutKeys } from "../key-layout";
import { createHand, DIGITS, type HandRig } from "./hand-rig";

const MODEL = join(import.meta.dir, "..", "..", "..", "public", "models", "hand.glb");

/** How close a pad must come to its target, in key widths. */
const REACH = 0.005;

/** The shipped `hand.glb`, parsed from its bytes. */
async function loadHand(): Promise<GLTF> {
  const bytes = await Bun.file(MODEL).arrayBuffer();
  return new Promise((resolve, reject) => new GLTFLoader().parse(bytes, "", resolve, reject));
}

/** The world position of `hand`'s bone `name`. */
function boneAt(hand: HandRig, name: string): Vector3 {
  const bone = hand.root.getObjectByName(name);
  if (!(bone instanceof Bone)) throw new Error(`no bone ${name}`);
  return bone.getWorldPosition(new Vector3());
}

test("pads_reach_the_c_position_keys", async () => {
  const hand = createHand(await loadHand(), "right");
  const targets = poseCPosition(hand, layoutKeys(LAB_RANGE));
  const misses = DIGITS.map((d) => ({ digit: d, near: hand.pad(d).distanceTo(targets.get(d)!) < REACH }));
  expect(misses).toEqual(DIGITS.map((d) => ({ digit: d, near: true })));
});

test("a_left_hand_mirrors_the_right", async () => {
  const gltf = await loadHand();
  const right = createHand(gltf, "right");
  const left = createHand(gltf, "left");
  const turn = new Quaternion().setFromEuler(new Euler(0, 0.1, -0.12));
  // A turn mirrored across the plane x = 0 keeps its x and negates its y and z.
  const mirroredTurn = new Quaternion(turn.x, -turn.y, -turn.z, turn.w);
  right.place(new Vector3(2, 2.6, 9), turn);
  left.place(new Vector3(-2, 2.6, 9), mirroredTurn);
  const mirror = (v: Vector3) => new Vector3(-v.x, v.y, v.z);
  for (const d of DIGITS) {
    expect(left.pad(d).distanceTo(mirror(right.pad(d)))).toBeLessThan(1e-4);
  }
  const targets = cPositionTargets(layoutKeys(LAB_RANGE));
  for (let i = 0; i < 4; i++) {
    for (const d of DIGITS) {
      right.reach(d, targets.get(d));
      left.reach(d, mirror(targets.get(d)!));
    }
  }
  for (const d of DIGITS) {
    expect(left.pad(d).distanceTo(mirror(right.pad(d)))).toBeLessThan(1e-3);
    const [l, r] = [left.angles(d), right.angles(d)];
    expect(l.map((a, i) => Math.abs(a - r[i]!) < 1e-3)).toEqual([true, true, true]);
  }
});

test("a_relaxed_digit_returns_to_rest", async () => {
  const hand = createHand(await loadHand(), "right");
  const relaxed = hand.angles("index");
  poseCPosition(hand, layoutKeys(LAB_RANGE));
  const reached = hand.angles("index");
  expect(reached.some((a, i) => Math.abs(a - relaxed[i]!) > 0.05)).toBe(true);
  for (let i = 0; i < 60; i++) hand.reach("index", undefined);
  expect(hand.angles("index").map((a, i) => Math.abs(a - relaxed[i]!) < 1e-4)).toEqual([true, true, true]);
});

test("a_far_target_is_reached_in_one_frame", async () => {
  const hand = createHand(await loadHand(), "right");
  const targets = poseCPosition(hand, layoutKeys(LAB_RANGE));
  for (let i = 0; i < 60; i++) hand.reach("index", undefined);
  const target = targets.get("index")!;
  expect(hand.pad("index").distanceTo(target)).toBeGreaterThan(0.5);
  hand.reach("index", target);
  expect(hand.pad("index").distanceTo(target)).toBeLessThan(REACH);
});

test("every_nail_lies_on_its_fingertip", async () => {
  const hand = createHand(await loadHand(), "right");
  poseCPosition(hand, layoutKeys(LAB_RANGE));
  for (const d of DIGITS) {
    // The last phalanx runs from its joint to the tip. The nail sits over its outer part, on the back.
    const joint = boneAt(hand, `${d}_3`);
    const tip = boneAt(hand, `${d}_tip`);
    const nail = boneAt(hand, `${d}_nail`);
    const pad = hand.pad(d);
    const nailtip = boneAt(hand, `${d}_nailtip`);
    const axis = tip.clone().sub(joint);
    const along = (p: Vector3) => p.clone().sub(joint).dot(axis) / axis.lengthSq();
    const t = along(nail);
    expect({ digit: d, outer: t > 0.3 && t < 1.05 }).toEqual({ digit: d, outer: true });
    expect({ digit: d, free: along(nailtip) > t }).toEqual({ digit: d, free: true });
    // The nail's normal, as the material builds it, points away from the pad.
    const normal = new Vector3().crossVectors(boneAt(hand, `${d}_nailside`).sub(nail), nailtip.clone().sub(nail));
    expect({ digit: d, back: pad.clone().sub(nail).dot(normal) < 0 }).toEqual({ digit: d, back: true });
  }
});

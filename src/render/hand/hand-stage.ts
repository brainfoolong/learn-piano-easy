/**
 * The hand on the piano view: the model of `models/hand.glb`, dressed as both hands, playing a phrase.
 *
 * The piano view loads this module with `import()` the first time a step shows a hand. A lesson without
 * one never fetches the loader, the rig or the model.
 *
 * - **The model loads once per page.** Every view shares the parsed file, and dresses its own rigs from
 *   it. A failed load is forgotten, so the next view tries again.
 * - **A pose is a pure function of time,** read from `planHands`, so a slowed or replayed phrase poses
 *   the same at the same moment. A jump in time, as at a fresh plan or a replay, solves each digit
 *   `JUMP_PASSES` times, so every finger lands in that one frame.
 *
 * Bounds: two rigs per view. A frame costs one plan lookup and one solve per hand that plays.
 */
import { Group } from "three";
import { type GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import type { Hand } from "../../theory/fingering";
import type { KeyLayout } from "../key-layout";
import { type HandPlan, type PhraseNote, planHands } from "./hand-plan";
import { applyPose, createHand } from "./hand-rig";

/** The hand's model, relative to the site's root. */
export const HAND_MODEL_URL = "models/hand.glb";
/** How many solver passes a frame takes after a jump in time. */
const JUMP_PASSES = 4;
/** A step in time longer than this, in seconds, is a jump rather than a frame. */
const JUMP = 0.25;

let model: Promise<GLTF> | undefined;

/** Both hands, which a piano view adds to its scene and poses each frame. */
export interface HandStage {
  /** The two rigs' roots. A hand without notes in the phrase is hidden. */
  readonly group: Group;
  /** Plans `notes` on the keys of `layout`, in place of the last phrase. */
  plan(notes: readonly PhraseNote[], layout: KeyLayout): void;
  /** When the planned phrase has ended and its fingers have returned, in seconds. */
  readonly end: number;
  /** Poses the hands at `seconds`, and returns each pitch they hold down with the hand that holds it. */
  pose(seconds: number): ReadonlyMap<number, Hand>;
  dispose(): void;
}

/** Loads the model, once per page, and dresses both hands from it. */
export async function loadHandStage(): Promise<HandStage> {
  model ??= new GLTFLoader().loadAsync(HAND_MODEL_URL).catch((error: unknown) => {
    model = undefined;
    throw error;
  });
  const gltf = await model;
  const rigs = { right: createHand(gltf, "right"), left: createHand(gltf, "left") };
  const group = new Group();
  group.add(rigs.right.root, rigs.left.root);
  let plan: HandPlan | undefined;
  let last: number | undefined;
  return {
    group,
    plan(notes, layout) {
      plan = planHands(notes, layout);
      last = undefined;
    },
    get end() {
      return plan?.end ?? 0;
    },
    pose(seconds) {
      const held = new Map<number, Hand>();
      const pose = plan?.poseAt(seconds) ?? {};
      const passes = last === undefined || Math.abs(seconds - last) > JUMP ? JUMP_PASSES : 1;
      last = seconds;
      for (const hand of ["right", "left"] as const) {
        const p = pose[hand];
        rigs[hand].root.visible = p !== undefined;
        if (!p) continue;
        for (let i = 0; i < passes; i++) applyPose(rigs[hand], p);
        for (const pitch of p.down) held.set(pitch, hand);
      }
      return held;
    },
    dispose() {
      rigs.right.dispose();
      rigs.left.dispose();
    },
  };
}

/**
 * The mascot's hand in the scene: the rigged model of `public/models/hand.glb`, in its skin material,
 * posed so each fingertip meets the point it is given.
 *
 * Decisions, and what each costs:
 * - **One file holds the right hand, and a left hand is its mirror.** The rig's root is scaled by -1 on
 *   x, and three.js flips the faces' winding for a mirrored mesh. Every target is a world point, so the
 *   solver never needs to know which hand it poses.
 * - **The model carries its own measurements as marker bones:** each digit's tip, its pad and its nail.
 *   The pad is the point the solver puts on a key, and the nail markers place the nail in the shader.
 * - **Each digit is solved on its own,** by damped least squares over three joint angles, from the
 *   previous frame's answer. A finger bends at its knuckle, swings sideways there and bends at its
 *   middle joint, and its last joint follows its middle joint, as a real finger's does. The thumb bends
 *   and swings at its base and bends at its middle joint, and its last joint follows. A soft pull
 *   towards a relaxed pose picks the natural answer where several fit.
 *
 * Bounds: `SOLVER_STEPS` steps per digit per frame, each with four forward passes of three bones.
 */
import { Bone, Group, Matrix4, type Mesh, Quaternion, SkinnedMesh, Vector3 } from "three";
import type { GLTF } from "three/addons/loaders/GLTFLoader.js";
import { clone as cloneSkinned } from "three/addons/utils/SkeletonUtils.js";

import { type NailFrame, skinMaterial } from "./hand-materials";

/** The digits, in finger-number order: the thumb is finger 1. */
export const DIGITS = ["thumb", "index", "middle", "ring", "little"] as const;
export type Digit = (typeof DIGITS)[number];

/** Which hand a rig is. */
export type Side = "left" | "right";

/** A digit's joint angles: the base bend, the base swing and the middle bend, in radians. */
type Angles = [number, number, number];

interface Limits {
  min: Angles;
  max: Angles;
  relaxed: Angles;
  /** How much the last joint bends for each radian of the middle joint. */
  last: number;
}

/** How many solver steps each digit takes per frame. */
const SOLVER_STEPS = 6;
const FINGER: Limits = { min: [-0.35, -0.5, 0], max: [1.5, 0.5, 1.85], relaxed: [0.35, 0, 0.6], last: 0.72 };
const THUMB: Limits = { min: [-0.6, -0.9, -0.2], max: [1.3, 0.9, 1.3], relaxed: [0.2, 0, 0.3], last: 0.85 };
/** How strongly the solver leans towards the relaxed pose. */
const RELAX = 0.004;
/** The damping that keeps a step small where the digit can barely move its pad. */
const DAMPING = 0.02;

const X = new Vector3(1, 0, 0);
const Z = new Vector3(0, 0, 1);

interface Chain {
  limits: Limits;
  joints: [Bone, Bone, Bone];
  rest: [Quaternion, Quaternion, Quaternion];
  pad: Bone;
  angles: Angles;
}

export interface HandRig {
  readonly side: Side;
  /** The rig's root. Its transform places the arm and the hand; its x scale mirrors a left hand. */
  readonly root: Group;
  /** Puts the wrist at `wrist` and turns the hand by `turn` from its rest, in world space. */
  place(wrist: Vector3, turn: Quaternion): void;
  /** Bends `digit` so its pad meets `target` in world space, or lets it relax when `target` is undefined. */
  reach(digit: Digit, target: Vector3 | undefined): void;
  /** Where `digit`'s pad is now, in world space. */
  pad(digit: Digit, out?: Vector3): Vector3;
  /** `digit`'s joint angles now: its base bend, base swing and middle bend, in radians. */
  angles(digit: Digit): readonly number[];
  dispose(): void;
}

/** Dresses a copy of the loaded hand as `side`. */
export function createHand(gltf: GLTF, side: Side): HandRig {
  const model = cloneSkinned(gltf.scene) as Group;
  const root = new Group();
  root.name = `hand-${side}`;
  root.add(model);
  if (side === "left") root.scale.x = -1;
  root.updateMatrixWorld(true);

  const bones = new Map<string, Bone>();
  model.traverse((object) => {
    if (object instanceof Bone) bones.set(object.name, object);
  });
  const bone = (name: string): Bone => {
    const found = bones.get(name);
    if (!found) throw new Error(`The hand model has no bone ${name}.`);
    return found;
  };
  const wristRest = bone("hand").getWorldPosition(new Vector3());

  const chains = new Map<Digit, Chain>();
  for (const digit of DIGITS) {
    const joints: [Bone, Bone, Bone] = [bone(`${digit}_1`), bone(`${digit}_2`), bone(`${digit}_3`)];
    const limits = digit === "thumb" ? THUMB : FINGER;
    chains.set(digit, {
      limits,
      joints,
      rest: [joints[0].quaternion.clone(), joints[1].quaternion.clone(), joints[2].quaternion.clone()],
      pad: bone(`${digit}_pad`),
      angles: [...limits.relaxed],
    });
  }
  const chain = (digit: Digit): Chain => chains.get(digit)!;

  let skin: SkinnedMesh | undefined;
  model.traverse((object) => {
    if (object instanceof SkinnedMesh) skin = object;
    const mesh = object as Mesh;
    if (mesh.isMesh) {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    }
  });
  if (!skin) throw new Error("The hand model has no skin mesh.");
  const skinMesh = skin;
  // A faceted model carries no normals, and is lit flat face by face.
  skinMesh.material = skinMaterial(nailFrames(skinMesh, bone), !skinMesh.geometry.hasAttribute("normal"));

  const swing = new Quaternion();
  const bend = new Quaternion();
  const offset = new Vector3();

  function setAngles(c: Chain, angles: Angles): void {
    const [j1, j2, j3] = c.joints;
    // A bend towards the palm is a negative turn about the bone's x; a swing is a turn about its z.
    j1.quaternion.copy(c.rest[0]).multiply(bend.setFromAxisAngle(X, -angles[0])).multiply(swing.setFromAxisAngle(Z, -angles[1]));
    j2.quaternion.copy(c.rest[1]).multiply(bend.setFromAxisAngle(X, -angles[2]));
    j3.quaternion.copy(c.rest[2]).multiply(bend.setFromAxisAngle(X, -angles[2] * c.limits.last));
    j1.updateMatrixWorld(true);
  }

  function padAt(c: Chain, angles: Angles, out: Vector3): Vector3 {
    setAngles(c, angles);
    return c.pad.getWorldPosition(out);
  }

  return {
    side,
    root,
    place(wrist, turn) {
      // The whole arm moves and turns about the wrist's rest position.
      root.quaternion.copy(turn);
      offset.copy(wristRest).multiply(root.scale).applyQuaternion(turn);
      root.position.copy(wrist).sub(offset);
      root.updateMatrixWorld(true);
    },
    reach(digit, target) {
      const c = chain(digit);
      if (target) solve(c, target, padAt);
      else for (let i = 0; i < 3; i++) c.angles[i] = c.angles[i]! + (c.limits.relaxed[i]! - c.angles[i]!) * 0.25;
      setAngles(c, c.angles);
    },
    pad(digit, out = new Vector3()) {
      return chain(digit).pad.getWorldPosition(out);
    },
    angles(digit) {
      return [...chain(digit).angles];
    },
    dispose() {
      (skinMesh.material as MeshMaterial).dispose();
    },
  };
}

type MeshMaterial = { dispose(): void };

/** Damped least squares on a digit's three angles, so its pad meets `target`. */
function solve(c: Chain, target: Vector3, padAt: (c: Chain, angles: Angles, out: Vector3) => Vector3): void {
  const p = c.angles;
  const at = new Vector3();
  const moved = new Vector3();
  const r = new Vector3();
  const J = [new Vector3(), new Vector3(), new Vector3()] as const;
  const eps = 1e-3;
  for (let step = 0; step < SOLVER_STEPS; step++) {
    padAt(c, p, at);
    r.copy(at).sub(target);
    if (r.lengthSq() < 1e-6) break;
    for (let i = 0; i < 3; i++) {
      const q: Angles = [p[0], p[1], p[2]];
      q[i] = q[i]! + eps;
      padAt(c, q, moved);
      J[i]!.copy(moved).sub(at).divideScalar(eps);
    }
    // (JᵀJ + λI) Δ = -(Jᵀr + w (p - relaxed))
    const A = new Matrix4();
    const b: Angles = [0, 0, 0];
    const e = A.elements;
    for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 3; k++) e[k * 4 + i] = J[i]!.dot(J[k]!) + (i === k ? DAMPING + RELAX : 0);
      b[i] = -(J[i]!.dot(r) + RELAX * (p[i]! - c.limits.relaxed[i]!));
    }
    e[15] = 1;
    const d = new Vector3(...b).applyMatrix4(A.invert());
    const step3 = [d.x, d.y, d.z];
    for (let i = 0; i < 3; i++) p[i] = Math.min(c.limits.max[i]!, Math.max(c.limits.min[i]!, p[i]! + step3[i]!));
  }
}

/** Each nail's centre, axes and size in the skin's rest space, read from the nail markers. */
function nailFrames(skin: SkinnedMesh, bone: (name: string) => Bone): NailFrame[] {
  const toSkin = new Matrix4().copy(skin.matrixWorld).invert();
  return DIGITS.map((digit) => {
    const at = (name: string) => bone(`${digit}_${name}`).getWorldPosition(new Vector3()).applyMatrix4(toSkin);
    const centre = at("nail");
    const along = at("nailtip").sub(centre);
    const lateral = at("nailside").sub(centre);
    const normal = new Vector3().crossVectors(lateral, along).normalize();
    return { centre, along: along.clone().normalize(), normal, halfLength: along.length(), halfWidth: lateral.length() };
  });
}

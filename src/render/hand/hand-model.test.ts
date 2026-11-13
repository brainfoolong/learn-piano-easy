import { join } from "node:path";

import { expect, test } from "../../testing";
import { DIGITS } from "./hand-rig";

const MODEL = join(import.meta.dir, "..", "..", "..", "public", "models", "hand.glb");

/** The byte budget of `hand.glb`, which every visitor downloads once with the app shell. */
const BUDGET = 64 * 1024;

/** The markers that end each digit, which the runtime reads as its only measures of the model. */
const MARKERS = ["tip", "pad", "nail", "nailside", "nailtip"];

interface Gltf {
  nodes: { name?: string }[];
  skins: { joints: number[] }[];
  meshes: { primitives: { attributes: Record<string, number> }[] }[];
}

/** The JSON chunk of the glb at `MODEL`, which follows the 12-byte header and its own 8-byte head. */
async function gltf(): Promise<Gltf> {
  const bytes = new Uint8Array(await Bun.file(MODEL).arrayBuffer());
  const view = new DataView(bytes.buffer);
  expect(new TextDecoder().decode(bytes.subarray(0, 4))).toBe("glTF");
  const length = view.getUint32(12, true);
  return JSON.parse(new TextDecoder().decode(bytes.subarray(20, 20 + length))) as Gltf;
}

test("the_hand_model_fits_its_byte_budget", async () => {
  expect(Bun.file(MODEL).size).toBeLessThanOrEqual(BUDGET);
  const { meshes } = await gltf();
  // A faceted hand carries positions and skin weights alone: no normals, colours or UVs.
  const attributes = meshes.flatMap((m) => m.primitives.map((p) => Object.keys(p.attributes).sort()));
  expect(attributes).toEqual([["JOINTS_0", "POSITION", "WEIGHTS_0"]]);
});

test("the_hand_model_has_every_bone_and_marker", async () => {
  const { nodes, skins } = await gltf();
  expect(skins).toHaveLength(1);
  const joints = new Set(skins[0]!.joints.map((i) => nodes[i]?.name));
  const expected = ["forearm", "hand"];
  for (const digit of DIGITS) {
    // MakeHuman's thumb has no metacarpal of its own: `thumb_1` is its first bone.
    const first = digit === "thumb" ? 1 : 0;
    for (let i = first; i <= 3; i++) expected.push(`${digit}_${i}`);
    for (const marker of MARKERS) expected.push(`${digit}_${marker}`);
  }
  expect(expected.filter((name) => !joints.has(name))).toEqual([]);
});

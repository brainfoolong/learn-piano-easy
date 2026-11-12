import { Color, PerspectiveCamera } from "three";

import { expect, test } from "../testing";
import { createFlames, EXTINGUISH, type FlameSource, IGNITE, noiseVolume } from "./flames";

const FRAME = 1 / 60;
const camera = new PerspectiveCamera();
camera.position.set(0, 20, 20);

/** The key of `pitch` burning in `color`, with a bar on its lane when `bar` is given. */
function source(pitch: number, color: Color, bar?: object): FlameSource {
  return {
    pitch,
    x: pitch - 60,
    width: 1,
    top: 0,
    length: 6.2,
    color,
    bar: bar && { id: bar, x: pitch - 60, width: 0.9, top: 0.4, backZ: -4, frontZ: 0 },
  };
}

/** Runs `frames` frames of the flames over the same sources. */
function run(flames: ReturnType<typeof createFlames>, frames: number, sources: FlameSource[]): void {
  for (let i = 0; i < frames; i++) flames.update(FRAME, sources, 0.1, camera);
}

test("a_held_key_and_its_bar_burn_in_the_note_colour", () => {
  const flames = createFlames();
  flames.setOn(true);
  const note = {};
  const color = new Color(0x3388ff);
  run(flames, Math.ceil(IGNITE / FRAME) + 1, [source(60, color, note)]);

  expect(flames.live()).toBe(2);
  for (const id of [60, note]) {
    const flame = flames.flameOf(id)!;
    expect(flame.intensity).toBe(1);
    expect(flame.burning).toBe(true);
    expect(flame.color.getHex()).toBe(0x3388ff);
  }
  flames.dispose();
});

test("a_released_key_and_its_bar_die_down_and_go_out", () => {
  const flames = createFlames();
  flames.setOn(true);
  const note = {};
  run(flames, 20, [source(64, new Color(0xff4400), note)]);

  // The key and its bar burn on while they die.
  run(flames, 1, []);
  expect(flames.live()).toBe(2);
  expect(flames.flameOf(64)!.burning).toBe(false);

  run(flames, Math.ceil(EXTINGUISH / FRAME) + 1, []);
  expect(flames.live()).toBe(0);
  flames.dispose();
});

test("a_key_struck_again_while_dying_burns_up_from_where_it_was", () => {
  const flames = createFlames();
  flames.setOn(true);
  const red = new Color(0xff0000);
  run(flames, 20, [source(62, red)]);
  run(flames, 6, []);
  const dying = flames.flameOf(62)!.intensity;
  expect(dying).toBeGreaterThan(0);
  expect(dying).toBeLessThan(1);

  run(flames, 1, [source(62, red)]);
  expect(flames.flameOf(62)!.intensity).toBeGreaterThan(dying);
  expect(flames.live()).toBe(1);
  flames.dispose();
});

test("turning_the_flames_off_puts_out_every_flame", () => {
  const flames = createFlames();
  flames.setOn(true);
  run(flames, 10, [source(60, new Color(0xffffff)), source(67, new Color(0xffffff))]);
  run(flames, 1, []);
  expect(flames.live()).toBe(2);

  flames.setOn(false);
  expect(flames.live()).toBe(0);
  // Off ignores every source.
  run(flames, 5, [source(60, new Color(0xffffff))]);
  expect(flames.live()).toBe(0);
  flames.dispose();
});

test("the_noise_volume_tiles_without_a_seam", () => {
  const texture = noiseVolume();
  const { data, width } = texture.image as { data: Uint8Array; width: number };
  const at = (x: number, y: number, z: number) => data[(z * width + y) * width + x]!;
  // The lattice wraps, so the gradient noise is 0, the byte's middle, on every lattice point.
  expect(Math.abs(at(0, 0, 0) - 127.5)).toBeLessThanOrEqual(1);
  // Its last texel and its first differ about as much as two neighbours inside do.
  let seam = 0;
  let inside = 0;
  for (let i = 0; i < width; i++) {
    seam += Math.abs(at(width - 1, i, 3) - at(0, i, 3));
    inside += Math.abs(at(20, i, 3) - at(21, i, 3));
  }
  expect(seam).toBeLessThan(inside * 2 + width);
  // The noise uses the byte's range, both sides of the middle.
  const values = [...data];
  expect(Math.min(...values.slice(0, 50_000))).toBeLessThan(90);
  expect(Math.max(...values.slice(0, 50_000))).toBeGreaterThan(165);
  texture.dispose();
});

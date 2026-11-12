import { Color, Texture } from "three";

import { expect, test } from "../testing";
import { layoutKeys } from "./key-layout";
import { createParticles, PARTICLE_BUDGET, type ParticleSource, PRESETS } from "./particles";

const FRAME = 1 / 60;
const blank = new Texture();
const preset = (toggle: string) => PRESETS.find((p) => p.toggle === toggle)!.types;

/** A pressed key of `pitch` on the full keyboard, as the scene hands it over. */
function source(pitch: number): ParticleSource {
  const layout = layoutKeys();
  const key = layout.key(pitch)!;
  return { pitch, x: key.center - layout.width / 2, top: 0, length: 6, width: key.width, color: new Color(0xff8800) };
}

test("two_active_presets_both_spawn", () => {
  const particles = createParticles(() => blank);
  const types = [...preset("particlesSparks"), ...preset("particlesEmbers")];
  particles.setTypes(types);
  expect(particles.emitters.length).toBe(2);
  expect(particles.emitters.map((e) => e.type)).toEqual(types);

  const keys = [source(60), source(64)];
  for (let frame = 0; frame < 30; frame++) particles.update(FRAME, keys);

  // Sparks emit 0.6 a frame per key and embers 0.5, and both live longer than half a second. A
  // frame's share lands on a whole particle a frame early or late, so each count may miss by one a key.
  const [sparks, embers] = particles.emitters.map((e) => e.live());
  expect(Math.abs(sparks! - 36)).toBeLessThanOrEqual(2);
  expect(Math.abs(embers! - 30)).toBeLessThanOrEqual(2);
  particles.dispose();
});

test("the_pool_never_exceeds_its_budget", () => {
  const particles = createParticles(() => blank);
  const greedy = { ...preset("particlesEmbers")[0]!, amount: 10, life: 10 };
  particles.setTypes([greedy, greedy, greedy]);

  const capacities = particles.emitters.map((e) => e.capacity);
  expect(capacities.reduce((a, b) => a + b, 0)).toBeLessThanOrEqual(PARTICLE_BUDGET);

  // 88 keys at 10 a frame ask for 8,800 particles a frame each, far past every emitter's share.
  const keys = layoutKeys().keys.map((key) => source(key.pitch));
  for (let frame = 0; frame < 60; frame++) {
    particles.update(FRAME, keys);
    const live = particles.emitters.map((e) => e.live());
    expect(live.reduce((a, b) => a + b, 0)).toBeLessThanOrEqual(PARTICLE_BUDGET);
  }
  // Each ring is full, so it overwrites its oldest rather than growing.
  expect(particles.emitters.map((e) => e.live())).toEqual(capacities);

  // A fourth type splits the same budget four ways.
  particles.setTypes([greedy, greedy, greedy, greedy]);
  expect(particles.emitters.map((e) => e.capacity)).toEqual([5000, 5000, 5000, 5000]);
  particles.dispose();
});

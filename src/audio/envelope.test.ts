import { expect, test } from "../testing";
import { SettingsStore } from "../settings/store";
import { attackRamp, envelopeFromSettings, levelAt, releaseRamp, velocityGain, type Envelope } from "./envelope";

const ENV: Envelope = { attack: 0.1, decay: 0.2, sustain: 0.5, releaseKey: 0.3, releasePedal: 1.5 };

test("release_after_pedal_uses_the_pedal_release", () => {
  expect(releaseRamp(ENV, 1, 0, 2, "key")).toEqual([
    { time: 2, value: 0.5 },
    { time: 2.3, value: 0 },
  ]);
  expect(releaseRamp(ENV, 1, 0, 2, "pedal")).toEqual([
    { time: 2, value: 0.5 },
    { time: 3.5, value: 0 },
  ]);
});

test("velocity_strength_shapes_the_gain", () => {
  expect(velocityGain(127, 1)).toBe(1);
  expect(velocityGain(0, 1)).toBe(0);
  expect(velocityGain(63.5, 0)).toBe(1);
  expect(velocityGain(63.5, 1)).toBeCloseTo(0.5);
  expect(velocityGain(63.5, 2)).toBeCloseTo(0.25);
  expect(velocityGain(200, 1)).toBe(1);
});

test("a_release_mid_attack_starts_from_the_level_reached", () => {
  expect(levelAt(ENV, 1, 0.05)).toBeCloseTo(0.5);
  expect(levelAt(ENV, 1, 0.2)).toBeCloseTo(0.75);
  expect(releaseRamp(ENV, 0.8, 1, 1.05, "key")[0]!.value).toBeCloseTo(0.4);
});

test("an_envelope_without_attack_starts_at_its_peak", () => {
  const env = envelopeFromSettings(new SettingsStore(null));
  expect(env.sustain).toBe(1);
  expect(attackRamp(env, 0.7, 3)).toEqual([
    { time: 3, value: 0.7 },
    { time: 3, value: 0.7 },
    { time: 3, value: 0.7 },
  ]);
  expect(levelAt(env, 0.7, 0)).toBe(0.7);
});

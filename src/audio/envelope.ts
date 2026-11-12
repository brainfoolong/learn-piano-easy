/**
 * The envelope and velocity maths of a voice: how loud a note starts, how its gain moves over time, and
 * how it fades once its key or the pedal lets it go.
 *
 * Decisions, and what each costs:
 * - The maths is pure and returns ramp points, never touching an `AudioParam`. It tests in Bun, and the
 *   sampler applies the points with `setValueAtTime` and `linearRampToValueAtTime`.
 * - Every segment is a linear ramp. A release ends at exactly zero gain when its source stops, so a
 *   stop never clicks. An exponential curve would sound a little smoother but never reaches zero.
 * - A release that starts mid-attack or mid-decay starts from the level the envelope has reached then,
 *   which `levelAt` computes. The gain never jumps.
 * - Velocity maps to gain as `(velocity / 127) ^ strength`. Strength 0 plays every note at full gain,
 *   1 is linear, and 2 makes soft notes much softer.
 */

import type { SettingsStore } from "../settings/store";

/** The shape of a note's gain over time, in seconds, with `sustain` from 0 to 1. */
export interface Envelope {
  readonly attack: number;
  readonly decay: number;
  readonly sustain: number;
  readonly releaseKey: number;
  readonly releasePedal: number;
}

/** One point of a gain curve: the curve reaches `value` at `time`. */
export interface RampPoint {
  readonly time: number;
  readonly value: number;
}

/** What let a voice go: its key, or the pedal after its key was already up. */
export type ReleaseCause = "key" | "pedal";

/** The envelope the `adsr*` settings describe. */
export function envelopeFromSettings(settings: Pick<SettingsStore, "get">): Envelope {
  return {
    attack: settings.get("adsrAttack"),
    decay: settings.get("adsrDecay"),
    sustain: settings.get("adsrSustain") / 100,
    releaseKey: settings.get("adsrReleaseKey"),
    releasePedal: settings.get("adsrReleasePedal"),
  };
}

/** The peak gain of a note of `velocity` from 0 to 127, at velocity strength `strength`. */
export function velocityGain(velocity: number, strength: number): number {
  const v = Math.min(Math.max(velocity / 127, 0), 1);
  return v ** Math.max(strength, 0);
}

/** The points of attack and decay of a note that starts at `start` and peaks at `peak`. */
export function attackRamp(env: Envelope, peak: number, start: number): RampPoint[] {
  const top = start + env.attack;
  return [
    { time: start, value: env.attack > 0 ? 0 : peak },
    { time: top, value: peak },
    { time: top + env.decay, value: peak * env.sustain },
  ];
}

/** The gain of a note that peaks at `peak`, `elapsed` seconds after it started. */
export function levelAt(env: Envelope, peak: number, elapsed: number): number {
  if (elapsed < env.attack) return (peak * Math.max(elapsed, 0)) / env.attack;
  const intoDecay = elapsed - env.attack;
  if (intoDecay < env.decay) return peak + (peak * env.sustain - peak) * (intoDecay / env.decay);
  return peak * env.sustain;
}

/** How long the release that `cause` starts lasts. */
export function releaseTime(env: Envelope, cause: ReleaseCause): number {
  return cause === "pedal" ? env.releasePedal : env.releaseKey;
}

/** The points of the release at `at` of a note that started at `start` and peaks at `peak`. */
export function releaseRamp(env: Envelope, peak: number, start: number, at: number, cause: ReleaseCause): RampPoint[] {
  return [
    { time: at, value: levelAt(env, peak, at - start) },
    { time: at + releaseTime(env, cause), value: 0 },
  ];
}

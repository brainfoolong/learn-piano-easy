import { expect, test } from "../testing";
import { END_LEVEL, impulseResponse, ROOM_PRESETS } from "./impulse";

/** A repeatable stand-in for `Math.random`. */
function seeded(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

/** The loudest sample of `samples` from `from` to `to`. */
function peak(samples: Float32Array, from: number, to: number): number {
  let max = 0;
  for (let i = from; i < to; i++) max = Math.max(max, Math.abs(samples[i]!));
  return max;
}

test("impulse_decays_to_silence_within_its_length", () => {
  const rate = 8000;
  for (const preset of Object.values(ROOM_PRESETS)) {
    const channels = impulseResponse(preset, rate, seeded(7));
    expect(channels).toHaveLength(2);
    for (const channel of channels) {
      const length = channel.length;
      expect(length).toBe(Math.round(preset.seconds * rate));
      expect(peak(channel, 0, 100)).toBeGreaterThan(0.5);
      expect(peak(channel, Math.floor(length / 2), length)).toBeLessThanOrEqual(Math.sqrt(END_LEVEL) + 1e-6);
      expect(peak(channel, length - 10, length)).toBeLessThanOrEqual(END_LEVEL * 1.01);
    }
    expect(channels[0]).not.toEqual(channels[1]);
  }
});

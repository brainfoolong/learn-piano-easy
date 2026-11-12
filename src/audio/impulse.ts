/**
 * Impulse responses for the reverb, generated in code: stereo noise under an exponential decay.
 *
 * A room preset gives the time its sound takes to fall by 60 dB, which acousticians call RT60. The
 * response lasts exactly that long, so it ends at a thousandth of its first loudness, which is silence.
 *
 * Decisions, and what each costs:
 * - The two channels hold different noise, so the reverb sounds wide. A real room's early reflections
 *   are not modelled. A longer preset only sounds bigger.
 * - The response is pure maths over numbers, so it tests in Bun. The effects chain copies it into an
 *   `AudioBuffer`.
 *
 * Bounds: a response holds `seconds` times the sample rate numbers per channel, so a 3 s church at
 * 48 kHz holds about 1.1 MB.
 */

/** A room the reverb can sound like. */
export interface RoomPreset {
  readonly label: string;
  /** The seconds its sound takes to fall by 60 dB, and the length of its response. */
  readonly seconds: number;
}

/** The rooms, by the id the `reverbImpulseResponse` setting stores. Its options list the same ids. */
export const ROOM_PRESETS = {
  room: { label: "Room", seconds: 0.8 },
  hall: { label: "Concert hall", seconds: 1.8 },
  church: { label: "Church", seconds: 3 },
} as const satisfies Record<string, RoomPreset>;

export type RoomId = keyof typeof ROOM_PRESETS;

/** The level a response falls to by its end: 60 dB down. */
export const END_LEVEL = 1e-3;

/** The two channels of `preset`'s response at `sampleRate`. `random` gives numbers from 0 to 1. */
export function impulseResponse(
  preset: RoomPreset,
  sampleRate: number,
  random: () => number = Math.random,
): Float32Array<ArrayBuffer>[] {
  const length = Math.max(1, Math.round(preset.seconds * sampleRate));
  // The level falls as END_LEVEL ** (t / seconds), which is exp(t * rate).
  const rate = Math.log(END_LEVEL) / length;
  const channels = [new Float32Array(length), new Float32Array(length)];
  for (const channel of channels) {
    for (let i = 0; i < length; i++) channel[i] = (random() * 2 - 1) * Math.exp(i * rate);
  }
  return channels;
}

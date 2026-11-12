/**
 * The sampler: it plays notes from a `Soundfont`, one voice per note, with envelope, velocity, pedal,
 * detune and a voice limit.
 *
 * A voice is a buffer source with its own gain node, connected to the sampler's output. A note the set
 * lacks plays from the nearest sample, shifted by the difference through the source's `detune`.
 *
 * Decisions, and what each costs:
 * - The sampler talks to Web Audio through `SamplerContext` and its small node interfaces, which an
 *   `AudioContext` satisfies. It then tests in Bun with fakes.
 * - A voice exists from `noteOn` on, before its sample has decoded. A `noteOff` or pedal release that
 *   comes first is kept on the voice and applied once the source starts. A voice whose release has
 *   already ended by then never starts.
 * - A key let go while the pedal is down keeps sounding until the pedal comes up. It then fades with the
 *   pedal release, not the key release.
 * - A note struck again releases its earlier voices with the key release. Held notes then never pile
 *   up under the pedal.
 * - Every time is on the audio clock, so a caller can schedule a note, its release and the pedal ahead.
 *
 * Bounds:
 * - At most `MAX_VOICES` voices sound at once. A new voice past the limit stops the oldest released
 *   voice, or the oldest voice when none is released, with a fade of `QUICK_FADE` seconds.
 */

import { attackRamp, releaseRamp, velocityGain, type Envelope, type RampPoint, type ReleaseCause } from "./envelope";
import type { Soundfont } from "./soundfont";

/** The most voices that sound at once. */
export const MAX_VOICES = 64;

/** The fade, in seconds, of a voice stopped by the voice limit or by `stopAll`. */
export const QUICK_FADE = 0.02;

/** An automatable value, such as an `AudioParam`. */
export interface ParamLike {
  value: number;
  setValueAtTime(value: number, time: number): unknown;
  linearRampToValueAtTime(value: number, time: number): unknown;
  cancelScheduledValues(time: number): unknown;
}

/** A node another node connects to, such as an `AudioNode`. */
export interface NodeLike {
  connect(destination: NodeLike): unknown;
  disconnect(): void;
}

/** A gain node, such as a `GainNode`. */
export interface GainLike extends NodeLike {
  readonly gain: ParamLike;
}

/** A buffer source of samples `S`, such as an `AudioBufferSourceNode`. */
export interface SourceLike<S> extends NodeLike {
  buffer: S | null;
  readonly detune: ParamLike;
  onended: ((this: never, event: never) => unknown) | null;
  start(when: number): void;
  stop(when: number): void;
}

/** What the sampler needs of an audio context. An `AudioContext` is one, with `S` as `AudioBuffer`. */
export interface SamplerContext<S> {
  readonly currentTime: number;
  createGain(): GainLike;
  createBufferSource(): SourceLike<S>;
}

/** How the sampler plays: the values of the audio settings it reads. */
export interface SamplerOptions {
  readonly envelope: Envelope;
  readonly velocityStrength: number;
  /** In cents, added to every voice. */
  readonly detune: number;
  readonly sustainEnabled: boolean;
}

interface Voice<S> {
  readonly note: number;
  readonly start: number;
  readonly peak: number;
  /** Its shape, fixed at `noteOn`. A cut swaps in a quick release. */
  env: Envelope;
  /** The time and cause of its release, once it has one. */
  release: { at: number; cause: ReleaseCause } | null;
  /** Its key is up and the pedal holds it. */
  sustained: boolean;
  /** When its gain reaches zero. */
  end: number;
  nodes: { source: SourceLike<S>; gain: GainLike } | null;
}

/** Plays notes from a sound set into `output`. */
export class Sampler<S> {
  readonly #ctx: SamplerContext<S>;
  readonly #output: NodeLike;
  #options: SamplerOptions;
  #font: Soundfont<S> | null = null;
  #voices: Voice<S>[] = [];
  #pedalDown = false;

  constructor(ctx: SamplerContext<S>, output: NodeLike, options: SamplerOptions) {
    this.#ctx = ctx;
    this.#output = output;
    this.#options = options;
  }

  /** The sound set notes play from. Until there is one, a note is silent. */
  set font(font: Soundfont<S> | null) {
    this.#font = font;
  }

  /** Changes how the next notes play. Notes already sounding keep their shape. */
  configure(options: Partial<SamplerOptions>): void {
    this.#options = { ...this.#options, ...options };
    if (!this.#options.sustainEnabled && this.#pedalDown) this.pedal(false, this.#ctx.currentTime);
  }

  /** The number of voices that still sound or wait for their sample. */
  get voiceCount(): number {
    this.#prune();
    return this.#voices.length;
  }

  /**
   * Starts `note` at `velocity` from 0 to 127, at `time` or now, scaled by `gain` from 0 to 1. Resolves
   * once its sample has decoded.
   */
  async noteOn(note: number, velocity: number, time = this.#ctx.currentTime, gain = 1): Promise<void> {
    const font = this.#font;
    if (font === null) return;
    const peak = velocityGain(velocity, this.#options.velocityStrength) * gain;
    for (const old of this.#voices) if (old.note === note && old.release === null) this.#release(old, time, "key");
    this.#makeRoom();
    const env = this.#options.envelope;
    const cents = (note - font.nearest(note)) * 100 + this.#options.detune;
    const voice: Voice<S> = { note, start: time, peak, env, release: null, sustained: false, end: Infinity, nodes: null };
    this.#voices.push(voice);
    const sample = await font.sample(note);
    if (voice.end <= this.#ctx.currentTime) return this.#forget(voice);
    this.#sound(voice, sample, cents);
  }

  /** Lets `note` go at `time` or now. Its voice fades, or the pedal holds it while it is down. */
  noteOff(note: number, time = this.#ctx.currentTime): void {
    const voice = this.#voices.find((v) => v.note === note && v.release === null && !v.sustained);
    if (voice === undefined) return;
    if (this.#pedalDown) voice.sustained = true;
    else this.#release(voice, time, "key");
  }

  /** Puts the sustain pedal down or up at `time` or now. Up releases every voice it held. */
  pedal(down: boolean, time = this.#ctx.currentTime): void {
    this.#pedalDown = down && this.#options.sustainEnabled;
    if (this.#pedalDown) return;
    for (const voice of this.#voices) {
      if (voice.sustained && voice.release === null) this.#release(voice, time, "pedal");
    }
  }

  /** Fades every voice out now and lifts the pedal, as a pause or a seek needs. */
  stopAll(): void {
    this.#pedalDown = false;
    for (const voice of this.#voices) this.#cut(voice);
  }

  #sound(voice: Voice<S>, sample: S, cents: number): void {
    const source = this.#ctx.createBufferSource();
    const gain = this.#ctx.createGain();
    source.buffer = sample;
    source.detune.value = cents;
    source.connect(gain);
    gain.connect(this.#output);
    source.onended = () => this.#forget(voice);
    voice.nodes = { source, gain };
    const start = Math.max(voice.start, this.#ctx.currentTime);
    apply(gain.gain, attackRamp(voice.env, voice.peak, voice.start), voice.start);
    source.start(start);
    if (voice.release !== null) this.#applyRelease(voice);
  }

  #release(voice: Voice<S>, at: number, cause: ReleaseCause): void {
    voice.release = { at: Math.max(at, voice.start), cause };
    voice.end = releaseRamp(voice.env, voice.peak, voice.start, voice.release.at, cause)[1]!.time;
    if (voice.nodes !== null) this.#applyRelease(voice);
  }

  #applyRelease(voice: Voice<S>): void {
    const { at, cause } = voice.release!;
    const points = releaseRamp(voice.env, voice.peak, voice.start, at, cause);
    const gain = voice.nodes!.gain.gain;
    gain.cancelScheduledValues(at);
    apply(gain, points, at);
    voice.nodes!.source.stop(voice.end);
  }

  /** Fades `voice` out over `QUICK_FADE` from now. A voice queued to start later never sounds. */
  #cut(voice: Voice<S>): void {
    const now = this.#ctx.currentTime;
    if (voice.start > now) {
      voice.release = { at: now, cause: "key" };
      voice.end = now;
      voice.nodes?.source.stop(now);
      return;
    }
    if (voice.end <= now + QUICK_FADE) return;
    voice.env = { ...voice.env, releaseKey: QUICK_FADE };
    this.#release(voice, now, "key");
  }

  /** Stops voices past the limit, the oldest released first. */
  #makeRoom(): void {
    this.#prune();
    const now = this.#ctx.currentTime;
    const live = this.#voices.filter((v) => v.end > now + QUICK_FADE);
    while (live.length >= MAX_VOICES) {
      const released = live.filter((v) => v.release !== null);
      const pool = released.length > 0 ? released : live;
      const oldest = pool.reduce((a, b) => (b.start < a.start ? b : a));
      this.#cut(oldest);
      live.splice(live.indexOf(oldest), 1);
    }
  }

  /** Drops voices whose release has ended and that never got a source. */
  #prune(): void {
    const now = this.#ctx.currentTime;
    this.#voices = this.#voices.filter((v) => v.nodes !== null || v.end > now);
  }

  #forget(voice: Voice<S>): void {
    if (voice.nodes !== null) {
      voice.nodes.source.disconnect();
      voice.nodes.gain.disconnect();
    }
    this.#voices = this.#voices.filter((v) => v !== voice);
  }
}

/** Sets `param` to the curve through `points`, the first held from `from`. */
function apply(param: ParamLike, points: readonly RampPoint[], from: number): void {
  const [first, ...rest] = points;
  param.setValueAtTime(first!.value, Math.max(first!.time, from));
  for (const p of rest) param.linearRampToValueAtTime(p.value, p.time);
}

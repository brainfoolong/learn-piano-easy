/**
 * The effects chain between the engine's bus and the speakers: a five-band equaliser, then reverb.
 *
 * `input` feeds the five filters in a row. The last filter feeds the speakers directly, and also a
 * convolver through a wet gain when reverb is on. The convolver plays a generated room response from
 * `impulse.ts`.
 *
 * Decisions, and what each costs:
 * - The bands sit at `EQ_BANDS`: a low shelf, three peaks and a high shelf. With the equaliser off,
 *   every band is set to 0 dB rather than taken out, so the chain never rewires.
 * - With reverb off, the convolver is disconnected, so it costs no work.
 * - The wet signal is mixed in at `REVERB_WET` under the dry one. No setting sets it.
 * - A room response is generated once per change of room, at the context's sample rate.
 * - A gain change glides over `GAIN_GLIDE` seconds, so a slider never clicks.
 */

import { impulseResponse, ROOM_PRESETS, type RoomId } from "./impulse";

/** The equaliser's bands: centre frequency in hertz and filter type, from low to high. */
export const EQ_BANDS = [
  { hz: 60, type: "lowshelf" },
  { hz: 250, type: "peaking" },
  { hz: 1000, type: "peaking" },
  { hz: 4000, type: "peaking" },
  { hz: 12000, type: "highshelf" },
] as const satisfies readonly { hz: number; type: BiquadFilterType }[];

/** The gain of the reverb's wet signal, under a dry signal of 1. */
export const REVERB_WET = 0.3;

/** The time constant, in seconds, of a gain change. */
const GAIN_GLIDE = 0.015;

/** The values of the effect settings. */
export interface EffectsOptions {
  readonly reverb: boolean;
  readonly room: RoomId;
  readonly equalizer: boolean;
  /** One gain per band of `EQ_BANDS`, in dB. */
  readonly bandGains: readonly number[];
}

/** The equaliser and reverb, from `input` to `output`. */
export class Effects {
  /** The node the chain starts at. */
  readonly input: GainNode;

  readonly #context: BaseAudioContext;
  readonly #bands: BiquadFilterNode[];
  readonly #convolver: ConvolverNode;
  readonly #wet: GainNode;
  #options: EffectsOptions;
  #room: RoomId | null = null;
  #reverbOn = false;

  constructor(context: BaseAudioContext, output: AudioNode, options: EffectsOptions) {
    this.#context = context;
    this.#options = options;
    this.input = context.createGain();
    this.#bands = EQ_BANDS.map((band) => {
      const filter = context.createBiquadFilter();
      filter.type = band.type;
      filter.frequency.value = band.hz;
      return filter;
    });
    let previous: AudioNode = this.input;
    for (const filter of this.#bands) {
      previous.connect(filter);
      previous = filter;
    }
    previous.connect(output);
    this.#convolver = context.createConvolver();
    this.#wet = context.createGain();
    this.#wet.gain.value = REVERB_WET;
    this.#convolver.connect(this.#wet);
    this.#wet.connect(output);
    this.#apply(true);
  }

  /** Changes the effects now. */
  configure(options: Partial<EffectsOptions>): void {
    this.#options = { ...this.#options, ...options };
    this.#apply(false);
  }

  #apply(first: boolean): void {
    const { reverb, room, equalizer, bandGains } = this.#options;
    const now = this.#context.currentTime;
    this.#bands.forEach((filter, i) => {
      const gain = equalizer ? (bandGains[i] ?? 0) : 0;
      if (first) filter.gain.value = gain;
      else filter.gain.setTargetAtTime(gain, now, GAIN_GLIDE);
    });
    if (reverb && room !== this.#room) {
      this.#convolver.buffer = this.#buffer(room);
      this.#room = room;
    }
    if (reverb === this.#reverbOn) return;
    const last = this.#bands[this.#bands.length - 1]!;
    if (reverb) last.connect(this.#convolver);
    else last.disconnect(this.#convolver);
    this.#reverbOn = reverb;
  }

  #buffer(room: RoomId): AudioBuffer {
    const rate = this.#context.sampleRate;
    const channels = impulseResponse(ROOM_PRESETS[room], rate);
    const buffer = this.#context.createBuffer(channels.length, channels[0]!.length, rate);
    channels.forEach((samples, i) => buffer.copyToChannel(samples, i));
    return buffer;
  }
}

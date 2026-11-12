/**
 * The background track: an audio file the learner picks, such as a backing band, played in time with
 * the song.
 *
 * It is a `ScheduledPart` of the scheduler, so it starts, stops, seeks and loops with the song. The
 * track's second 0 sounds at song second `offset`, and the track runs at `speed` times the song, so a
 * recording at another tempo can be matched. A negative offset skips the track's start.
 *
 * Decisions, and what each costs:
 * - The file decodes once into an `AudioBuffer` with Web Audio, and one buffer source plays it. A source
 *   plays once, so every start makes a new one, which costs nothing beside the shared buffer.
 * - The scheduler's windows tell it everything. A window that goes on from where the last one ended
 *   keeps the source playing. Any other window, as after a loop's wrap, stops the source where the
 *   window starts and starts a new one there. The song's speed is the windows' ratio of song time to
 *   audio time, and a new speed retunes the playing source at the window's start.
 * - The track feeds its own `gain`, which the engine sets and leads to the speakers past the effects,
 *   because reverb and the equaliser suit the piano and not a finished recording.
 * - The track lives in memory only. A reload forgets it, and the learner picks it again. Simplicity
 *   buys that, at the cost of storing nothing for a file that may be large.
 *
 * Bounds: one decoded buffer and at most one playing source.
 */
import type { ScheduledPart } from "./scheduler";

export interface BackgroundOptions {
  enabled: boolean;
  /** How fast the track runs against the song: 1 is as recorded. */
  speed: number;
  /** The song second the track's start sounds at. */
  offset: number;
  loop: boolean;
}

/** Where a source starts in a window: at `when` on the audio clock, `position` seconds into the track. */
export interface TrackStart {
  when: number;
  position: number;
  /** The source's playback rate. */
  rate: number;
}

/** The song's speed in `[from, to)`: song seconds per audio second. */
export function songRate(from: number, to: number, at: (songTime: number) => number): number {
  const audio = at(to) - at(from);
  return audio > 0 ? (to - from) / audio : 1;
}

/**
 * Where a source starts in the window `[from, to)` of song time, for a track of `duration` seconds, or
 * undefined when the track is silent through the whole window.
 */
export function trackStart(
  from: number,
  to: number,
  at: (songTime: number) => number,
  options: BackgroundOptions,
  duration: number,
): TrackStart | undefined {
  const start = Math.max(from, options.offset);
  if (start >= to || duration <= 0) return undefined;
  let position = (start - options.offset) * options.speed;
  if (options.loop) position %= duration;
  else if (position >= duration) return undefined;
  return { when: at(start), position, rate: options.speed * songRate(from, to, at) };
}

/** How near two song times or rates must be to count as the same. */
const SAME = 1e-6;
const SAME_RATE = 1e-4;

/** The background track, fed to `destination`, silent until it has a buffer and is enabled. */
export class BackgroundTrack implements ScheduledPart {
  readonly #context: BaseAudioContext;
  /** The track's volume, which feeds `destination`. */
  readonly gain: GainNode;
  #options: BackgroundOptions;
  #buffer: AudioBuffer | undefined;
  #source: AudioBufferSourceNode | undefined;
  /** The song time the last window ended, which the next must start from to go on playing. */
  #until = Number.NaN;
  #rate = 1;

  constructor(context: BaseAudioContext, destination: AudioNode, options: BackgroundOptions) {
    this.#context = context;
    this.#options = options;
    this.gain = context.createGain();
    this.gain.connect(destination);
  }

  /** Whether a track is loaded. */
  get loaded(): boolean {
    return this.#buffer !== undefined;
  }

  /** Decodes `file` and takes it as the track. It rejects when the browser cannot decode the file. */
  async loadFile(file: Blob): Promise<void> {
    const buffer = await this.#context.decodeAudioData(await file.arrayBuffer());
    this.stop();
    this.#buffer = buffer;
  }

  configure(options: BackgroundOptions): void {
    const restart =
      options.speed !== this.#options.speed || options.offset !== this.#options.offset || options.loop !== this.#options.loop;
    this.#options = options;
    if (!options.enabled) this.stop();
    // A new speed, offset or loop starts the track anew at the next window.
    else if (restart) this.#until = Number.NaN;
  }

  load(): void {
    this.stop();
  }

  schedule(from: number, to: number, at: (songTime: number) => number): void {
    if (!this.#options.enabled || this.#buffer === undefined || to <= from) return;
    const goesOn = Math.abs(from - this.#until) < SAME;
    this.#until = to;
    if (this.#source && goesOn) {
      const rate = this.#options.speed * songRate(from, to, at);
      if (Math.abs(rate - this.#rate) > SAME_RATE) {
        this.#source.playbackRate.setValueAtTime(rate, at(from));
        this.#rate = rate;
      }
      return;
    }
    if (this.#source) {
      this.#source.stop(at(from));
      this.#source = undefined;
    }
    const start = trackStart(from, to, at, this.#options, this.#buffer.duration);
    if (!start) return;
    const source = this.#context.createBufferSource();
    source.buffer = this.#buffer;
    source.loop = this.#options.loop;
    source.playbackRate.value = start.rate;
    source.connect(this.gain);
    source.start(start.when, start.position);
    this.#source = source;
    this.#rate = start.rate;
  }

  stop(): void {
    this.#source?.stop();
    this.#source = undefined;
    this.#until = Number.NaN;
  }
}

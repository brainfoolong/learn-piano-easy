/**
 * The piano samples: `loadSoundfont` fetches a sound set's note map, and a `Soundfont` decodes each
 * note's sample the first time it is asked for.
 *
 * The app has one sound set, the Salamander grand that `tools/import-sounds.ts` writes. It is one JSON
 * file that maps note names such as `A0`, `Eb1` and `C8` to MP3s as `data:audio/mp3;base64,` URLs. It
 * holds one note every three semitones. Every instrument plays this piano.
 *
 * Decisions, and what each costs:
 * - Decoding sits behind `SampleDecoder`, which an `AudioContext` satisfies. The loader then tests in
 *   Bun with a fake decoder.
 * - A note decodes on its first `sample` call, never on load. A set loads in one fetch, and only the
 *   notes a song plays cost decoding time and memory.
 * - The decode is cached as a promise, so two calls for one note decode it once. A decode that fails
 *   leaves the cache, so the next call tries again.
 * - A note the set lacks plays from the nearest note it has, and `nearest` says which. The sampler
 *   shifts the pitch by the difference.
 * - The URL is relative, so the app loads its sounds from any base path.
 */

/** Decodes an encoded audio file. An `AudioContext` is one, with `S` as `AudioBuffer`. */
export interface SampleDecoder<S> {
  decodeAudioData(data: ArrayBuffer): Promise<S>;
}

/** The relative URL of the note map of the app's one sound set. */
export const SOUNDFONT_URL = "sounds/salamander/acoustic_grand_piano-mp3.json";

const PITCHES: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** The MIDI note number of a note name such as `C4`, `Bb0` or `F#3`, or `undefined` for another text. */
export function noteNumber(name: string): number | undefined {
  const m = /^([A-G])(b|#)?(-?\d+)$/.exec(name);
  if (!m) return undefined;
  const shift = m[2] === "b" ? -1 : m[2] === "#" ? 1 : 0;
  return (Number(m[3]) + 1) * 12 + PITCHES[m[1]!]! + shift;
}

/** The bytes of a `data:` URL in base64, or of bare base64 text. */
export function base64Bytes(text: string): Uint8Array {
  const binary = atob(text.slice(text.indexOf(",") + 1));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

/** One sound set: its encoded samples by note number, decoded on demand. */
export class Soundfont<S> {
  /** The note numbers that have a sample, from low to high. */
  readonly notes: readonly number[];
  readonly #encoded: Map<number, string>;
  readonly #decoded = new Map<number, Promise<S>>();
  readonly #decoder: SampleDecoder<S>;

  /** A set of the samples in `map`, note names to base64 MP3s. An entry of another name is skipped. */
  constructor(map: Record<string, string>, decoder: SampleDecoder<S>) {
    this.#encoded = new Map();
    for (const [name, data] of Object.entries(map)) {
      const note = noteNumber(name);
      if (note !== undefined && typeof data === "string") this.#encoded.set(note, data);
    }
    if (this.#encoded.size === 0) throw new Error("the sound set holds no notes");
    this.notes = [...this.#encoded.keys()].sort((a, b) => a - b);
    this.#decoder = decoder;
  }

  /** The note with a sample nearest to `note`, the lower one of two as near. */
  nearest(note: number): number {
    let best = this.notes[0]!;
    for (const n of this.notes) if (Math.abs(n - note) < Math.abs(best - note)) best = n;
    return best;
  }

  /** The decoded sample of `nearest(note)`. */
  sample(note: number): Promise<S> {
    const key = this.nearest(note);
    let decoded = this.#decoded.get(key);
    if (!decoded) {
      const bytes = base64Bytes(this.#encoded.get(key)!);
      decoded = this.#decoder.decodeAudioData(bytes.buffer as ArrayBuffer);
      decoded.catch(() => this.#decoded.delete(key));
      this.#decoded.set(key, decoded);
    }
    return decoded;
  }
}

/** Fetches the sound set and returns it, ready to decode with `decoder`. */
export async function loadSoundfont<S>(
  decoder: SampleDecoder<S>,
  fetcher: (url: string) => Promise<Response> = fetch,
): Promise<Soundfont<S>> {
  const res = await fetcher(SOUNDFONT_URL);
  if (!res.ok) throw new Error(`${SOUNDFONT_URL}: HTTP ${res.status}`);
  return new Soundfont((await res.json()) as Record<string, string>, decoder);
}

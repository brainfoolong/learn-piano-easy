/**
 * The input bus: where every note the learner plays meets, whatever played it.
 *
 * Web MIDI, the computer keyboard and the on-screen piano each call `noteOn` and `noteOff` with their
 * source. Every listener hears each event in the order it came, and the bus keeps which keys are down.
 *
 * Decisions, and what each costs:
 * - The bus passes every note, inside the learner's range or not. A reader that judges notes, such as a
 *   mode, filters them by the range. Learning the range needs the notes outside it.
 * - A key counts as down while any source holds it. The listeners hear a note-on only when the key goes
 *   down and a note-off only when the last source lets it go. A sound never stops while one source
 *   still holds the key.
 * - The sustain pedal travels on the bus too, because a MIDI keyboard's pedal shapes the learner's sound.
 *   The bus keeps whether it is down, so a step that checks the pedal reads it at any press.
 * - The bus is pure. It plays no sound and draws nothing, so its tests and the modes' run without a browser.
 */

/** What played a note. */
export type InputSource = "midi" | "keyboard" | "pointer";

/** One thing the learner did, with the time it came on `performance.now()`'s clock, in milliseconds. */
export type InputEvent =
  | { type: "noteOn"; pitch: number; velocity: number; source: InputSource; time: number }
  | { type: "noteOff"; pitch: number; source: InputSource; time: number }
  | { type: "pedal"; down: boolean; source: InputSource; time: number };

export type InputListener = (event: InputEvent) => void;

/** The bus every input device feeds and every reader of the learner's playing listens to. */
export class InputBus {
  readonly #listeners = new Set<InputListener>();
  /** The sources holding each key down, by pitch. */
  readonly #holders = new Map<number, Set<InputSource>>();
  readonly #now: () => number;
  #pedalDown = false;

  /** `now` reads the clock events carry, `performance.now()` by default. */
  constructor(now: () => number = () => performance.now()) {
    this.#now = now;
  }

  /** The pitches held down now, by any source. */
  get held(): ReadonlySet<number> {
    return new Set(this.#holders.keys());
  }

  /** Whether any source holds `pitch` down. */
  isDown(pitch: number): boolean {
    return this.#holders.has(pitch);
  }

  /** Hears every event from now on. Returns what stops it. */
  subscribe(listener: InputListener): () => void {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  }

  /** `source` presses `pitch` at `velocity` from 1 to 127. A key another source holds sends nothing. */
  noteOn(pitch: number, velocity: number, source: InputSource): void {
    const holders = this.#holders.get(pitch);
    if (holders !== undefined) {
      holders.add(source);
      return;
    }
    this.#holders.set(pitch, new Set([source]));
    const clamped = Math.min(127, Math.max(1, Math.round(velocity)));
    this.#emit({ type: "noteOn", pitch, velocity: clamped, source, time: this.#now() });
  }

  /** `source` lets `pitch` go. The note ends once no source holds it. */
  noteOff(pitch: number, source: InputSource): void {
    const holders = this.#holders.get(pitch);
    if (holders === undefined || !holders.delete(source) || holders.size > 0) return;
    this.#holders.delete(pitch);
    this.#emit({ type: "noteOff", pitch, source, time: this.#now() });
  }

  /** Lets go every key `source` holds, as when a device goes away or the window loses focus. */
  releaseAll(source: InputSource): void {
    for (const [pitch, holders] of [...this.#holders]) if (holders.has(source)) this.noteOff(pitch, source);
  }

  /** Whether the sustain pedal is down, as the last pedal event of any source left it. */
  get pedalDown(): boolean {
    return this.#pedalDown;
  }

  /** `source` puts the sustain pedal down or up. */
  pedal(down: boolean, source: InputSource): void {
    this.#pedalDown = down;
    this.#emit({ type: "pedal", down, source, time: this.#now() });
  }

  #emit(event: InputEvent): void {
    for (const listener of [...this.#listeners]) listener(event);
  }
}

/**
 * Key lighting: the keys of the learner's next notes light up on a MIDI keyboard that has key lights.
 *
 * Such a keyboard lights a key for each note it receives. Key lighting sends the learner's next moment
 * to the chosen MIDI output as note-ons at velocity 1, so they barely sound, on the channel the
 * `playalongSilentNotesChannel` setting names. A key goes dark once its note starts, and the next
 * moment lights.
 *
 * Decisions, and what each costs:
 * - The lit keys are those of the learner's notes that start next, at or after the song time. With wait
 *   mode holding the clock there, they stay lit until the learner plays them.
 * - Lighting runs while a song is the mode, for the hands and keys `transport.required` holds. Free
 *   play and pitch practice light nothing, so a set-aside song gives no hint there.
 * - It checks once a frame and sends only the changes. A change of output or channel first darkens
 *   every key it lit on the old one.
 * - A port that has gone away throws on send, and lighting forgets the keys it lit there.
 * - `litKeys` and `KeyLights` are pure, so their tests need no browser.
 */
import type { Note } from "../midi/song";
import type { Transport } from "../play/transport";
import type { SettingsStore } from "../settings/store";
import { keyOf, learnerPart, type LearnerPart } from "./wait-mode";

/** The velocity a lit key's note-on carries. */
export const LIGHT_VELOCITY = 1;

/** Song times closer than this are one time, in seconds. */
const EPSILON = 1e-6;

/** A MIDI output, such as a `MIDIOutput`. `timestamp` is on `performance.now()`'s clock. */
export interface MidiSender {
  send(data: number[], timestamp?: number): void;
}

/** The keys of the first notes of `notes`, in start order, that start at or after `time`. */
export function litKeys(notes: readonly Note[], time: number, part: LearnerPart): Set<number> {
  let low = 0;
  let high = notes.length;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (notes[mid]!.start < time - EPSILON) low = mid + 1;
    else high = mid;
  }
  const keys = new Set<number>();
  const first = notes[low];
  for (let i = low; first !== undefined && i < notes.length && notes[i]!.startTick === first.startTick; i++) {
    const key = keyOf(notes[i]!, part);
    if (key !== undefined) keys.add(key);
  }
  return keys;
}

/** The keys lit on one MIDI output and channel. */
export class KeyLights {
  #port: MidiSender | undefined;
  #channel = 0;
  readonly #lit = new Set<number>();

  /** The keys lit now. */
  get lit(): ReadonlySet<number> {
    return this.#lit;
  }

  /** Lights `keys` on `port`, on `channel` from 0 to 15, and darkens every other key it lit. */
  show(port: MidiSender | undefined, channel: number, keys: ReadonlySet<number>): void {
    if (port !== this.#port || channel !== this.#channel) {
      this.#darkenAll();
      this.#port = port;
      this.#channel = channel;
    }
    if (port === undefined) return;
    try {
      for (const key of [...this.#lit]) {
        if (keys.has(key)) continue;
        port.send([0x80 | channel, key, 0]);
        this.#lit.delete(key);
      }
      for (const key of keys) {
        if (this.#lit.has(key)) continue;
        port.send([0x90 | channel, key, LIGHT_VELOCITY]);
        this.#lit.add(key);
      }
    } catch {
      this.#lit.clear();
      this.#port = undefined;
    }
  }

  #darkenAll(): void {
    const port = this.#port;
    if (port !== undefined) {
      try {
        for (const key of this.#lit) port.send([0x80 | this.#channel, key, 0]);
      } catch {
        // The port has gone away, and its keys with it.
      }
    }
    this.#lit.clear();
  }
}

/** Lights the learner's next keys on `output()` every frame while `playalongSilentNotes` is on. Returns what stops it. */
export function attachKeyLighting(transport: Transport, settings: SettingsStore, output: () => MidiSender | undefined): () => void {
  const lights = new KeyLights();
  const none = new Set<number>();
  let frame = requestAnimationFrame(function each() {
    const on = settings.get("playalongSilentNotes") && settings.get("playMode") === "player";
    const port = on ? output() : undefined;
    const keys = port === undefined ? none : litKeys(transport.required, transport.time, learnerPart(settings));
    lights.show(port, settings.get("playalongSilentNotesChannel") - 1, keys);
    frame = requestAnimationFrame(each);
  });
  return () => {
    cancelAnimationFrame(frame);
    lights.show(undefined, 0, none);
  };
}

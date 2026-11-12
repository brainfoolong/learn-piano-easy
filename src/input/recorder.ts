/**
 * The recorder: the notes and pedal the learner plays on the input bus become a Standard MIDI File.
 *
 * `start` begins a take and `take` keeps each bus event while it runs. `stop` ends the take and builds
 * the file, which `writeMidi` turns into bytes.
 *
 * Decisions, and what each costs:
 * - The file is format 0, one track on channel 1, at 120 beats a minute and 480 ticks a beat. A tick is
 *   then 1/960 of a second, so the played timing keeps a precision of about 1 ms.
 * - The file starts at the first note or pedal played, so the wait after Record is not in it.
 * - A key held when the take starts sends only its note-off, which the take drops. A key still held at
 *   `stop` ends there, and so does a pedal still down.
 * - The sustain pedal is controller 64, at 127 down and 0 up.
 * - The recorder is pure. It reads the event times the bus gives and builds no bytes itself, so its
 *   tests need no browser.
 *
 * Bounds: a take keeps every event in memory, a few dozen bytes each, until the next take starts.
 */
import type { MidiEvent, MidiFile } from "../midi/smf-read";
import type { InputEvent } from "./input-bus";

/** The ticks of one beat in a recording. */
export const TICKS_PER_BEAT = 480;
/** The tempo of a recording, in microseconds a beat: 120 beats a minute. */
export const MICROSECONDS_PER_BEAT = 500_000;
/** The ticks of one millisecond at that tempo. */
const TICKS_PER_MS = (TICKS_PER_BEAT * 1000) / MICROSECONDS_PER_BEAT;

/** An event of a take, with its tick and no delta yet. */
type Timed = MidiEvent extends infer E ? (E extends MidiEvent ? Omit<E, "delta"> : never) : never;

/** Records the learner's playing, one take at a time. */
export class Recorder {
  #events: InputEvent[] | undefined;

  /** Whether a take is running. */
  get recording(): boolean {
    return this.#events !== undefined;
  }

  /** Starts a new take. Any take running is dropped. */
  start(): void {
    this.#events = [];
  }

  /** Keeps `event` in the take, when one is running. */
  take(event: InputEvent): void {
    this.#events?.push(event);
  }

  /**
   * Ends the take at `time`, on the clock the events carry, and returns it as a MIDI file. It returns
   * nothing when no take ran or the take holds no note.
   */
  stop(time: number): MidiFile | undefined {
    const events = this.#events;
    this.#events = undefined;
    if (events === undefined) return undefined;
    return recordingToMidi(events, time);
  }
}

/** The MIDI file of the bus `events`, in the order they came, with every held key and pedal let go at `end`. */
export function recordingToMidi(events: readonly InputEvent[], end: number): MidiFile | undefined {
  const first = events.find((event) => event.type !== "noteOff");
  if (first === undefined || !events.some((event) => event.type === "noteOn")) return undefined;
  const tick = (time: number) => Math.max(0, Math.round((time - first.time) * TICKS_PER_MS));
  const held = new Set<number>();
  let pedal = false;
  const timed: Timed[] = [
    { tick: 0, kind: "meta", type: 0x51, meta: "tempo", microsecondsPerBeat: MICROSECONDS_PER_BEAT, data: tempoBytes(MICROSECONDS_PER_BEAT) },
  ];
  for (const event of events) {
    if (event.type === "noteOn") {
      held.add(event.pitch);
      timed.push({ tick: tick(event.time), kind: "noteOn", channel: 0, note: event.pitch, velocity: event.velocity });
    } else if (event.type === "noteOff") {
      if (!held.delete(event.pitch)) continue;
      timed.push({ tick: tick(event.time), kind: "noteOff", channel: 0, note: event.pitch, velocity: 64 });
    } else {
      pedal = event.down;
      timed.push({ tick: tick(event.time), kind: "controller", channel: 0, controller: 64, value: event.down ? 127 : 0 });
    }
  }
  const last = tick(end);
  for (const pitch of held) timed.push({ tick: last, kind: "noteOff", channel: 0, note: pitch, velocity: 64 });
  if (pedal) timed.push({ tick: last, kind: "controller", channel: 0, controller: 64, value: 0 });
  // Each event keeps a tick at or after the one before, so no delta is negative.
  let previous = 0;
  const track: MidiEvent[] = timed.map((event) => {
    const at = Math.max(previous, event.tick);
    const delta = at - previous;
    previous = at;
    return { ...event, tick: at, delta } as MidiEvent;
  });
  return { format: 0, division: { kind: "ticks", ticksPerBeat: TICKS_PER_BEAT }, tracks: [{ events: track }], problems: [] };
}

/** The three data bytes of a tempo meta event. */
function tempoBytes(microseconds: number): Uint8Array {
  return new Uint8Array([(microseconds >> 16) & 0xff, (microseconds >> 8) & 0xff, microseconds & 0xff]);
}

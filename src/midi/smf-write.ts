/**
 * The Standard MIDI File writer: a `MidiFile` becomes the bytes of a `.mid` file, the inverse of
 * `readMidi`.
 *
 * Decisions, and what each costs:
 * - Each event is written with its own `delta`, and each meta event with its raw `data`. Nothing decoded
 *   is encoded again, so a read file writes back with the same events. A caller that builds events
 *   itself sets `delta` to the ticks since the track's event before.
 * - Every event gets its full status byte, so the output never relies on running status. A file that
 *   used running status writes back a few bytes longer, and reads back to the same events.
 * - A track whose last event is not an end-of-track gets one at its last event's tick, as the spec
 *   requires. Reading that file back shows the added event.
 * - A value that does not fit its field throws a `RangeError` naming the event. Masking it would write
 *   a different event than the one asked for.
 * - The file's `problems` are not written, and unknown chunks were already skipped by the reader.
 *
 * Bounds: the output is one byte array, about as long as the file that was read.
 */

import type { ChannelEvent, MidiEvent, MidiFile, MidiTrack, TimeDivision } from "./smf-read";

/** The largest number a variable-length quantity of 4 bytes holds. */
const MAX_VLQ = 0x0fff_ffff;

/** The bytes of `file` as a Standard MIDI File. */
export function writeMidi(file: MidiFile): Uint8Array<ArrayBuffer> {
  const out = new ByteWriter();
  out.ascii("MThd");
  out.u32(6);
  out.u16(file.format);
  out.u16(file.tracks.length);
  out.u16(divisionWord(file.division));
  for (const track of file.tracks) writeTrack(out, track);
  return out.bytes();
}

function divisionWord(division: TimeDivision): number {
  if (division.kind === "ticks") return fit(division.ticksPerBeat, 1, 0x7fff, "the ticks per beat");
  const frames = division.framesPerSecond === 29.97 ? 29 : division.framesPerSecond;
  return ((256 - frames) << 8) | fit(division.ticksPerFrame, 1, 0xff, "the ticks per frame");
}

function writeTrack(out: ByteWriter, track: MidiTrack): void {
  const body = new ByteWriter();
  for (const event of track.events) writeEvent(body, event);
  const last = track.events[track.events.length - 1];
  if (!(last?.kind === "meta" && last.meta === "endOfTrack")) body.push(0x00, 0xff, 0x2f, 0x00);
  const bytes = body.bytes();
  out.ascii("MTrk");
  out.u32(bytes.length);
  out.append(bytes);
}

function writeEvent(out: ByteWriter, event: MidiEvent): void {
  out.vlq(event.delta, "an event's delta time");
  switch (event.kind) {
    case "meta":
      out.push(0xff, fit(event.type, 0, 0x7f, "a meta event's type"));
      out.vlq(event.data.length, "a meta event's length");
      out.append(event.data);
      return;
    case "sysex":
    case "escape":
      out.push(event.kind === "sysex" ? 0xf0 : 0xf7);
      out.vlq(event.data.length, "a sysex event's length");
      out.append(event.data);
      return;
    default:
      out.push(...channelBytes(event));
  }
}

function channelBytes(event: ChannelEvent): number[] {
  const status = (code: number): number => code | fit(event.channel, 0, 15, `a ${event.kind} event's channel`);
  const data = (value: number, what: string): number => fit(value, 0, 0x7f, `a ${event.kind} event's ${what}`);
  switch (event.kind) {
    case "noteOff":
      return [status(0x80), data(event.note, "note"), data(event.velocity, "velocity")];
    case "noteOn":
      return [status(0x90), data(event.note, "note"), data(event.velocity, "velocity")];
    case "polyAftertouch":
      return [status(0xa0), data(event.note, "note"), data(event.pressure, "pressure")];
    case "controller":
      return [status(0xb0), data(event.controller, "controller"), data(event.value, "value")];
    case "program":
      return [status(0xc0), data(event.program, "program")];
    case "channelAftertouch":
      return [status(0xd0), data(event.pressure, "pressure")];
    case "pitchBend": {
      const value = fit(event.value, -8192, 8191, "a pitchBend event's value") + 8192;
      return [status(0xe0), value & 0x7f, value >> 7];
    }
  }
}

/** `value` when it is a whole number from `min` to `max`. Throws a `RangeError` otherwise. */
function fit(value: number, min: number, max: number, what: string): number {
  if (!Number.isInteger(value) || value < min || value > max) {
    throw new RangeError(`${what} is ${value}, outside ${min} to ${max}`);
  }
  return value;
}

/** A growing list of bytes, written big-endian. */
class ByteWriter {
  private readonly chunks: Uint8Array[] = [];
  private pending: number[] = [];

  push(...values: number[]): void {
    for (const value of values) this.pending.push(value);
  }

  append(bytes: Uint8Array): void {
    this.flush();
    this.chunks.push(bytes);
  }

  ascii(text: string): void {
    for (let i = 0; i < text.length; i++) this.pending.push(text.charCodeAt(i));
  }

  u16(value: number): void {
    this.push((value >> 8) & 0xff, value & 0xff);
  }

  u32(value: number): void {
    this.push((value >>> 24) & 0xff, (value >>> 16) & 0xff, (value >>> 8) & 0xff, value & 0xff);
  }

  /** A variable-length quantity: 7 bits per byte, high bit set on every byte but the last. */
  vlq(value: number, what: string): void {
    fit(value, 0, MAX_VLQ, what);
    const groups = [value & 0x7f];
    for (let rest = value >> 7; rest > 0; rest >>= 7) groups.unshift((rest & 0x7f) | 0x80);
    this.push(...groups);
  }

  bytes(): Uint8Array<ArrayBuffer> {
    this.flush();
    let length = 0;
    for (const chunk of this.chunks) length += chunk.length;
    const out = new Uint8Array(length);
    let at = 0;
    for (const chunk of this.chunks) {
      out.set(chunk, at);
      at += chunk.length;
    }
    return out;
  }

  private flush(): void {
    if (this.pending.length === 0) return;
    this.chunks.push(Uint8Array.from(this.pending));
    this.pending = [];
  }
}

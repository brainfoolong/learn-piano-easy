/**
 * The Standard MIDI File reader: the bytes of a `.mid` file become its header and a list of tracks of
 * timed events, written from the Standard MIDI File 1.0 spec.
 *
 * Decisions, and what each costs:
 * - It reads formats 0, 1 and 2, ticks-per-beat and SMPTE time division, running status, every meta
 *   event, and both sysex forms. Unknown chunks are skipped, as the spec asks.
 * - Events are kept as the file has them, so the writer can write them back losslessly. A note-on with
 *   velocity 0 stays a note-on here, and the song model reads it as a note-off. Every meta event keeps
 *   its raw `data` beside the fields decoded from it.
 * - Running status survives meta and sysex events. The spec cancels it there, but a file that follows
 *   the spec never relies on that, and some real files do rely on it surviving.
 * - A broken header throws a `MidiReadError` naming the byte offset, because nothing is left to read.
 *   A broken track keeps the events read before the break and ends there. The file's `problems` name
 *   each break and its byte offset, so a cut-off download still plays up to where it stops.
 * - Text meta events decode as UTF-8 when they are valid UTF-8, and as Latin-1 otherwise.
 *
 * Bounds: every read is bounds-checked by `ByteReader`, and every loop moves forward by at least one
 * byte, so no input can hang the reader.
 */

import { ByteReader, MidiReadError } from "./byte-reader";

export { MidiReadError } from "./byte-reader";

/** How the file counts time: ticks per quarter note, or SMPTE frames per second and ticks per frame. */
export type TimeDivision =
  | { kind: "ticks"; ticksPerBeat: number }
  | { kind: "smpte"; framesPerSecond: 24 | 25 | 29.97 | 30; ticksPerFrame: number };

/** The event kinds sent on one of the 16 channels. `channel` is 0 to 15. */
export type ChannelEvent =
  | { kind: "noteOff"; channel: number; note: number; velocity: number }
  | { kind: "noteOn"; channel: number; note: number; velocity: number }
  | { kind: "polyAftertouch"; channel: number; note: number; pressure: number }
  | { kind: "controller"; channel: number; controller: number; value: number }
  | { kind: "program"; channel: number; program: number }
  | { kind: "channelAftertouch"; channel: number; pressure: number }
  /** `value` is -8192 to 8191, 0 being the centre. */
  | { kind: "pitchBend"; channel: number; value: number };

/** The meta events types 0x01 to 0x07 carry, in their order. */
export const TEXT_KINDS = ["text", "copyright", "trackName", "instrument", "lyric", "marker", "cuePoint"] as const;
export type TextKind = (typeof TEXT_KINDS)[number];

/** A meta event's decoded fields. Every meta event also keeps its `type` and raw `data`. */
export type MetaFields =
  | { meta: "sequenceNumber"; number: number }
  | { meta: TextKind; text: string }
  | { meta: "channelPrefix"; channel: number }
  | { meta: "port"; port: number }
  | { meta: "endOfTrack" }
  | { meta: "tempo"; microsecondsPerBeat: number }
  | { meta: "smpteOffset"; hours: number; minutes: number; seconds: number; frames: number; subframes: number }
  /** `denominator` is the note value itself, such as 4 for a quarter note. */
  | { meta: "timeSignature"; numerator: number; denominator: number; clocksPerClick: number; thirtySecondsPerBeat: number }
  /** `sharps` is negative for flats, from -7 to 7. */
  | { meta: "keySignature"; sharps: number; minor: boolean }
  | { meta: "sequencerSpecific" }
  /** A meta event of an unknown type, or a known type whose data is too short to decode. */
  | { meta: "unknown" };

export type MetaEvent = { kind: "meta"; type: number; data: Uint8Array } & MetaFields;

/**
 * A sysex event. `sysex` is the `F0` form, and `data` holds the bytes after `F0`, with the closing `F7`
 * when the file has it. `escape` is the `F7` form, and `data` is sent as it is.
 */
export type SysexEvent = { kind: "sysex" | "escape"; data: Uint8Array };

/** One event with its absolute `tick` from the track's start and its `delta` from the event before. */
export type MidiEvent = { tick: number; delta: number } & (ChannelEvent | MetaEvent | SysexEvent);

export interface MidiTrack {
  events: MidiEvent[];
}

/** A place where the file breaks, with the byte offset where reading stopped. */
export interface MidiProblem {
  offset: number;
  message: string;
}

export interface MidiFile {
  format: 0 | 1 | 2;
  division: TimeDivision;
  tracks: MidiTrack[];
  /** Each break in the file. The track it breaks ends at the break. Empty for a sound file. */
  problems: MidiProblem[];
}

/** Reads a Standard MIDI File. Throws a `MidiReadError` only when its header cannot be read. */
export function readMidi(bytes: Uint8Array): MidiFile {
  const reader = new ByteReader(bytes);
  if (reader.remaining < 4 || reader.ascii(4) !== "MThd") {
    throw new MidiReadError("This is not a MIDI file: it does not start with MThd", 0);
  }
  const headerLength = reader.u32("the header's length");
  if (headerLength < 6) throw new MidiReadError("The MIDI header is shorter than 6 bytes", 4);
  const headerStart = reader.pos;
  const format = reader.u16("the header");
  if (format > 2) throw new MidiReadError(`The MIDI format ${format} is unknown`, headerStart);
  reader.u16("the header");
  const division = readDivision(reader.u16("the header"), headerStart + 4);
  reader.pos = Math.min(headerStart + headerLength, reader.end);

  const tracks: MidiTrack[] = [];
  const problems: MidiProblem[] = [];
  while (reader.remaining >= 8) {
    const chunkStart = reader.pos;
    const id = reader.ascii(4);
    const length = reader.u32();
    const bodyStart = reader.pos;
    const bodyEnd = bodyStart + length;
    if (id === "MTrk") {
      if (bodyEnd > reader.end) {
        const error = new MidiReadError("The track is longer than the rest of the file", chunkStart);
        problems.push({ offset: error.offset, message: error.message });
      }
      tracks.push(readTrack(new ByteReader(bytes, bodyStart, bodyEnd), problems));
    }
    if (bodyEnd >= reader.end) break;
    reader.pos = bodyEnd;
  }
  return { format: format as 0 | 1 | 2, division, tracks, problems };
}

function readDivision(word: number, offset: number): TimeDivision {
  if ((word & 0x8000) === 0) {
    if (word === 0) throw new MidiReadError("The file has 0 ticks per beat", offset);
    return { kind: "ticks", ticksPerBeat: word };
  }
  const frames = 256 - (word >> 8);
  const ticksPerFrame = word & 0xff;
  const fps = frames === 29 ? 29.97 : frames;
  if ((fps !== 24 && fps !== 25 && fps !== 29.97 && fps !== 30) || ticksPerFrame === 0) {
    throw new MidiReadError("The file's SMPTE time division is invalid", offset);
  }
  return { kind: "smpte", framesPerSecond: fps, ticksPerFrame };
}

/** Reads one track chunk. A break ends the track there and is added to `problems`. */
function readTrack(reader: ByteReader, problems: MidiProblem[]): MidiTrack {
  const events: MidiEvent[] = [];
  let tick = 0;
  let runningStatus = 0;
  try {
    while (!reader.atEnd) {
      const delta = reader.vlq("an event's delta time");
      tick += delta;
      let status = reader.peek();
      if (status >= 0x80) {
        reader.pos++;
      } else if (runningStatus !== 0) {
        status = runningStatus;
      } else {
        throw new MidiReadError("A data byte comes before any status byte", reader.pos);
      }

      if (status === 0xff) {
        const event = readMeta(reader);
        events.push({ tick, delta, ...event });
        if (event.meta === "endOfTrack") break;
      } else if (status === 0xf0 || status === 0xf7) {
        const length = reader.vlq("a sysex event's length");
        const data = reader.take(length, "a sysex event");
        events.push({ tick, delta, kind: status === 0xf0 ? "sysex" : "escape", data });
      } else if (status >= 0xf0) {
        throw new MidiReadError(`The status byte 0x${status.toString(16)} cannot appear in a file`, reader.pos - 1);
      } else {
        runningStatus = status;
        events.push({ tick, delta, ...readChannel(reader, status) });
      }
    }
  } catch (error) {
    if (!(error instanceof MidiReadError)) throw error;
    problems.push({ offset: error.offset, message: error.message });
  }
  return { events };
}

function dataByte(reader: ByteReader): number {
  const offset = reader.pos;
  const byte = reader.u8("a channel event");
  if (byte >= 0x80) throw new MidiReadError("A channel event is missing a data byte", offset);
  return byte;
}

function readChannel(reader: ByteReader, status: number): ChannelEvent {
  const channel = status & 0x0f;
  switch (status & 0xf0) {
    case 0x80:
      return { kind: "noteOff", channel, note: dataByte(reader), velocity: dataByte(reader) };
    case 0x90:
      return { kind: "noteOn", channel, note: dataByte(reader), velocity: dataByte(reader) };
    case 0xa0:
      return { kind: "polyAftertouch", channel, note: dataByte(reader), pressure: dataByte(reader) };
    case 0xb0:
      return { kind: "controller", channel, controller: dataByte(reader), value: dataByte(reader) };
    case 0xc0:
      return { kind: "program", channel, program: dataByte(reader) };
    case 0xd0:
      return { kind: "channelAftertouch", channel, pressure: dataByte(reader) };
    default: {
      const lsb = dataByte(reader);
      const msb = dataByte(reader);
      return { kind: "pitchBend", channel, value: ((msb << 7) | lsb) - 8192 };
    }
  }
}

function readMeta(reader: ByteReader): MetaEvent {
  const type = reader.u8("a meta event");
  const length = reader.vlq("a meta event's length");
  const data = reader.take(length, "a meta event");
  return { kind: "meta", type, data, ...decodeMeta(type, data) };
}

/** The fields of a meta event of `type`, decoded from its `data`. */
export function decodeMeta(type: number, data: Uint8Array): MetaFields {
  const at = (i: number): number => data[i] ?? 0;
  if (type >= 0x01 && type <= 0x07) return { meta: TEXT_KINDS[type - 1]!, text: decodeText(data) };
  switch (type) {
    case 0x00:
      return data.length >= 2 ? { meta: "sequenceNumber", number: (at(0) << 8) | at(1) } : { meta: "unknown" };
    case 0x20:
      return data.length >= 1 ? { meta: "channelPrefix", channel: at(0) & 0x0f } : { meta: "unknown" };
    case 0x21:
      return data.length >= 1 ? { meta: "port", port: at(0) } : { meta: "unknown" };
    case 0x2f:
      return { meta: "endOfTrack" };
    case 0x51:
      if (data.length < 3) return { meta: "unknown" };
      return { meta: "tempo", microsecondsPerBeat: (at(0) << 16) | (at(1) << 8) | at(2) };
    case 0x54:
      if (data.length < 5) return { meta: "unknown" };
      return { meta: "smpteOffset", hours: at(0) & 0x1f, minutes: at(1), seconds: at(2), frames: at(3), subframes: at(4) };
    case 0x58:
      if (data.length < 2) return { meta: "unknown" };
      return {
        meta: "timeSignature",
        numerator: at(0),
        denominator: 2 ** Math.min(at(1), 6),
        clocksPerClick: data.length >= 3 ? at(2) : 24,
        thirtySecondsPerBeat: data.length >= 4 ? at(3) : 8,
      };
    case 0x59:
      if (data.length < 2) return { meta: "unknown" };
      return { meta: "keySignature", sharps: Math.max(-7, Math.min(7, (at(0) << 24) >> 24)), minor: at(1) === 1 };
    case 0x7f:
      return { meta: "sequencerSpecific" };
    default:
      return { meta: "unknown" };
  }
}

const utf8 = new TextDecoder("utf-8", { fatal: true });
const latin1 = new TextDecoder("latin1");

function decodeText(data: Uint8Array): string {
  try {
    return utf8.decode(data);
  } catch {
    return latin1.decode(data);
  }
}

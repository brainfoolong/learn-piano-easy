/**
 * A bounds-checked cursor over the bytes of a MIDI file: big-endian integers, variable-length
 * quantities, and raw byte runs.
 *
 * Every read checks its bounds first and throws a `MidiReadError` naming the byte offset where it
 * failed, so a broken file can never read past its end or loop forever. A cursor can be narrowed to a
 * window of the file, such as one chunk, and then never reads beyond that window.
 *
 * Bounds: a variable-length quantity is at most 4 bytes, so its value is below 2^28.
 */

/** A file that cannot be read, with the byte offset where reading failed. */
export class MidiReadError extends Error {
  readonly offset: number;

  constructor(message: string, offset: number) {
    super(`${message} (at byte ${offset})`);
    this.name = "MidiReadError";
    this.offset = offset;
  }
}

/** A cursor over `bytes` from `start` up to, but not including, `end`. */
export class ByteReader {
  readonly bytes: Uint8Array;
  readonly end: number;
  pos: number;

  constructor(bytes: Uint8Array, start = 0, end = bytes.length) {
    this.bytes = bytes;
    this.pos = Math.max(0, Math.min(start, bytes.length));
    this.end = Math.max(this.pos, Math.min(end, bytes.length));
  }

  /** The bytes left before the end of the window. */
  get remaining(): number {
    return this.end - this.pos;
  }

  get atEnd(): boolean {
    return this.pos >= this.end;
  }

  /** Throws unless `count` more bytes are left. */
  need(count: number, what: string): void {
    if (count > this.remaining) {
      throw new MidiReadError(`The file ends inside ${what}`, this.pos);
    }
  }

  /** The next byte, without moving past it. */
  peek(what = "an event"): number {
    this.need(1, what);
    return this.bytes[this.pos]!;
  }

  u8(what = "a byte"): number {
    this.need(1, what);
    return this.bytes[this.pos++]!;
  }

  u16(what = "a 16-bit number"): number {
    this.need(2, what);
    const b = this.bytes;
    const value = (b[this.pos]! << 8) | b[this.pos + 1]!;
    this.pos += 2;
    return value;
  }

  u24(what = "a 24-bit number"): number {
    this.need(3, what);
    const b = this.bytes;
    const value = (b[this.pos]! << 16) | (b[this.pos + 1]! << 8) | b[this.pos + 2]!;
    this.pos += 3;
    return value;
  }

  u32(what = "a 32-bit number"): number {
    this.need(4, what);
    const b = this.bytes;
    const value = b[this.pos]! * 0x1000000 + ((b[this.pos + 1]! << 16) | (b[this.pos + 2]! << 8) | b[this.pos + 3]!);
    this.pos += 4;
    return value;
  }

  /** A variable-length quantity: 7 bits per byte, high bit set on every byte but the last. */
  vlq(what = "a variable-length number"): number {
    const start = this.pos;
    let value = 0;
    for (let i = 0; i < 4; i++) {
      const byte = this.u8(what);
      value = (value << 7) | (byte & 0x7f);
      if ((byte & 0x80) === 0) return value;
    }
    throw new MidiReadError(`${what} is longer than 4 bytes`, start);
  }

  /** A copy of the next `count` bytes. */
  take(count: number, what = "a block of data"): Uint8Array {
    this.need(count, what);
    const out = this.bytes.slice(this.pos, this.pos + count);
    this.pos += count;
    return out;
  }

  /** The next `count` bytes as ASCII, such as a chunk's 4-letter id. */
  ascii(count: number, what = "a chunk id"): string {
    this.need(count, what);
    let text = "";
    for (let i = 0; i < count; i++) text += String.fromCharCode(this.bytes[this.pos + i]!);
    this.pos += count;
    return text;
  }

  skip(count: number, what = "a block of data"): void {
    this.need(count, what);
    this.pos += count;
  }
}

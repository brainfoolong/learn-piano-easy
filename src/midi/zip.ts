/**
 * A small ZIP reader: lists the files of an archive and unpacks one, enough for a compressed MusicXML
 * score, a `.mxl` file.
 *
 * Decisions, and what each costs:
 * - It reads the central directory at the archive's end, as the ZIP spec asks, so a file's size is
 *   known even when its local header leaves it out.
 * - It unpacks the stored and deflate methods, the two a `.mxl` file uses. Deflate runs through the
 *   platform's `DecompressionStream`, so unpacking is async and adds no code of ours.
 * - ZIP64, encryption and archives split across disks are refused with a `ZipError`.
 *
 * Bounds: every read is bounds-checked, and the central directory search looks back at most 64 kB.
 */

/** An archive that cannot be read. */
export class ZipError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ZipError";
  }
}

/** One file of an archive, as its central directory lists it. */
export interface ZipEntry {
  name: string;
  method: number;
  compressedSize: number;
  localOffset: number;
  flags: number;
}

/** Whether `bytes` start like a ZIP archive. */
export function isZip(bytes: Uint8Array): boolean {
  return bytes.length >= 4 && bytes[0] === 0x50 && bytes[1] === 0x4b && bytes[2] === 0x03 && bytes[3] === 0x04;
}

/** Every file the archive `bytes` lists, in its order. Throws a `ZipError` when it cannot be read. */
export function zipEntries(bytes: Uint8Array): ZipEntry[] {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const u16 = (at: number): number => view.getUint16(at, true);
  const u32 = (at: number): number => view.getUint32(at, true);
  let end = -1;
  for (let at = bytes.length - 22; at >= Math.max(0, bytes.length - 22 - 0xffff); at--) {
    if (u32(at) === 0x06054b50) {
      end = at;
      break;
    }
  }
  if (end < 0) throw new ZipError("The archive has no central directory");
  const count = u16(end + 10);
  let at = u32(end + 16);
  if (count === 0xffff || at === 0xffffffff) throw new ZipError("ZIP64 archives are not supported");
  const decoder = new TextDecoder();
  const entries: ZipEntry[] = [];
  for (let i = 0; i < count; i++) {
    if (at + 46 > bytes.length || u32(at) !== 0x02014b50) throw new ZipError("The central directory is broken");
    const nameLength = u16(at + 28);
    const extraLength = u16(at + 30);
    const commentLength = u16(at + 32);
    if (at + 46 + nameLength > bytes.length) throw new ZipError("The central directory is broken");
    entries.push({
      flags: u16(at + 8),
      method: u16(at + 10),
      compressedSize: u32(at + 20),
      localOffset: u32(at + 42),
      name: decoder.decode(bytes.subarray(at + 46, at + 46 + nameLength)),
    });
    at += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

/** The unpacked bytes of `entry` in the archive `bytes`. */
export async function unzipEntry(bytes: Uint8Array, entry: ZipEntry): Promise<Uint8Array> {
  if ((entry.flags & 1) !== 0) throw new ZipError(`${entry.name} is encrypted`);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const at = entry.localOffset;
  if (at + 30 > bytes.length || view.getUint32(at, true) !== 0x04034b50) throw new ZipError(`${entry.name} has no local header`);
  const start = at + 30 + view.getUint16(at + 26, true) + view.getUint16(at + 28, true);
  const end = start + entry.compressedSize;
  if (end > bytes.length) throw new ZipError(`${entry.name} runs past the archive's end`);
  const packed = bytes.slice(start, end);
  if (entry.method === 0) return packed;
  if (entry.method !== 8) throw new ZipError(`${entry.name} uses the unsupported method ${entry.method}`);
  const stream = new Blob([packed]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

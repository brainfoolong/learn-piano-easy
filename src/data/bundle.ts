/**
 * The backup file of the learner's data: one JSON file of every part, written and read back here.
 *
 * Decisions, and what each costs:
 * - The file is `{ format, version, written, parts }`, and `parts` holds one entry per `DataPart`.
 *   `written` is in ms since the epoch.
 * - The settings part is the settings file of `src/settings/export.ts`, and the progress part is the
 *   backup of `src/learn/progress/backup.ts`. Each restores through its own reader, which checks it.
 * - The old files still read. A settings file, known by its `app` field, reads as the settings part
 *   alone. A progress backup, known by its `format`, reads as the progress part alone.
 * - A song's bytes are base64 in the file, so the file stays plain JSON. That costs a third more bytes.
 * - A song or a take of the wrong shape is left out, and the rest of its part still reads.
 * - The `localStorage` parts hold each key's value as JSON. `src/data/parts.ts` restores only the keys
 *   each part owns, so a file can never set a key of another part.
 * - A part this build does not know is kept in `others` as it is, so a newer build's part survives a
 *   trip through this build. A known part of the same name wins on write.
 * - The module is pure: it reads no store, so a test runs it without a browser.
 *
 * Bounds: the whole file is built in memory. A few hundred songs make tens of megabytes.
 */
import type { Take } from "../input/history";
import { BACKUP_FORMAT } from "../learn/progress/backup";
import type { Upload } from "../library/uploads";
import { SETTINGS_FILE_APP } from "../settings/export";
import type { DataPart } from "./changes";

/** The marker every backup file of the whole site carries. */
export const DATA_FORMAT = "learn-piano-easy-data";

/** The version of the file's shape. */
export const DATA_VERSION = 1;

/** The parts kept as `localStorage` keys, each a record of its keys' values. */
export type StoragePart = "tracks" | "fingers" | "memory";

/** What a backup file holds, as this build reads it. A part the file lacks is undefined. */
export interface DataContents {
  /** The settings file of `src/settings/export.ts`. */
  settings?: Record<string, unknown>;
  /** The progress backup of `src/learn/progress/backup.ts`. */
  progress?: Record<string, unknown>;
  songs?: Upload[];
  history?: Take[];
  storage: Partial<Record<StoragePart, Record<string, unknown>>>;
  /** Parts this build does not know, by name, kept as they are. */
  others: Record<string, unknown>;
}

const STORAGE_PARTS: readonly StoragePart[] = ["tracks", "fingers", "memory"];
const KNOWN_PARTS: ReadonlySet<string> = new Set<DataPart>(["settings", "progress", "songs", "history", ...STORAGE_PARTS]);

/** The backup file of `contents`, written at `written`. */
export function writeBundle(contents: DataContents, written: number): string {
  const parts: Record<string, unknown> = { ...contents.others };
  if (contents.settings !== undefined) parts.settings = contents.settings;
  if (contents.progress !== undefined) parts.progress = contents.progress;
  if (contents.songs !== undefined) {
    parts.songs = contents.songs.map((song) => ({ id: song.id, name: song.name, added: song.added, bytes: toBase64(song.bytes) }));
  }
  if (contents.history !== undefined) parts.history = contents.history;
  for (const part of STORAGE_PARTS) if (contents.storage[part] !== undefined) parts[part] = contents.storage[part];
  return JSON.stringify({ format: DATA_FORMAT, version: DATA_VERSION, written, parts });
}

/** The contents of the file `text`: a backup of the site, a settings file or a progress backup. Undefined when it is none of ours. */
export function readBundle(text: string): DataContents | undefined {
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return undefined;
  }
  return readBundleValue(raw);
}

/** The contents of the parsed file `raw`, as `readBundle` reads its text. Undefined when it is none of ours. */
export function readBundleValue(raw: unknown): DataContents | undefined {
  if (!isObject(raw)) return undefined;
  if (raw.app === SETTINGS_FILE_APP) return { settings: raw, storage: {}, others: {} };
  if (raw.format === BACKUP_FORMAT) return { progress: raw, storage: {}, others: {} };
  if (raw.format !== DATA_FORMAT || !isObject(raw.parts)) return undefined;

  const parts = raw.parts;
  const contents: DataContents = { storage: {}, others: {} };
  if (isObject(parts.settings)) contents.settings = parts.settings;
  if (isObject(parts.progress)) contents.progress = parts.progress;
  if (Array.isArray(parts.songs)) contents.songs = parts.songs.flatMap((entry) => songOf(entry) ?? []);
  if (Array.isArray(parts.history)) contents.history = parts.history.filter(isTake);
  for (const part of STORAGE_PARTS) if (isObject(parts[part])) contents.storage[part] = parts[part];
  for (const [name, part] of Object.entries(parts)) if (!KNOWN_PARTS.has(name)) contents.others[name] = part;
  return contents;
}

/** `entry` as an upload, or undefined when its shape is wrong. */
function songOf(entry: unknown): Upload | undefined {
  if (!isObject(entry)) return undefined;
  const { id, name, added, bytes } = entry;
  if (typeof id !== "string" || id === "" || typeof name !== "string" || typeof added !== "number" || typeof bytes !== "string") return undefined;
  const decoded = fromBase64(bytes);
  return decoded === undefined ? undefined : { id, name, added, bytes: decoded };
}

/** Whether `entry` has every field of a take. */
function isTake(entry: unknown): entry is Take {
  if (!isObject(entry) || typeof entry.song !== "string") return false;
  const numbers = [entry.date, entry.speed, entry.hits, entry.perfect, entry.misses, entry.mistakes];
  return numbers.every((value) => typeof value === "number" && Number.isFinite(value)) && typeof entry.hands === "string";
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** `bytes` as base64, built in chunks so a large song never overflows the call stack. */
export function toBase64(bytes: Uint8Array): string {
  let binary = "";
  for (let at = 0; at < bytes.length; at += 0x8000) binary += String.fromCharCode(...bytes.subarray(at, at + 0x8000));
  return btoa(binary);
}

/** The bytes of the base64 `text`, or undefined when it is not base64. */
export function fromBase64(text: string): Uint8Array | undefined {
  let binary: string;
  try {
    binary = atob(text);
  } catch {
    return undefined;
  }
  const bytes = new Uint8Array(binary.length);
  for (let at = 0; at < binary.length; at += 1) bytes[at] = binary.charCodeAt(at);
  return bytes;
}

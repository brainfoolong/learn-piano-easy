/**
 * Each part of the learner's data, read from its store and written back from a backup file.
 *
 * Decisions, and what each costs:
 * - The stores come in as `DataStores`, so a test passes stores in memory and the page passes the
 *   browser's own.
 * - A restore writes the settings first. `saveIndexedDb` then decides where the restored songs go, as
 *   it does for a song the learner adds.
 * - Settings and the `localStorage` keys take the file's values. A key the file lacks keeps its value.
 * - Progress, songs and takes only merge, so a restore never removes newer work.
 * - A part this build does not know is kept under `KEPT_KEY`, and goes into every later backup. A
 *   storage that refuses it costs only that part, which the file it came from still holds.
 * - Each store calls `noteChange` for its own writes. The `localStorage` keys written here have no
 *   store in this module, so the restore calls it for their parts.
 * - The page reloads after a restore, since the settings, tracks, memory and fingers keep their state in
 *   memory. This module writes the stores and leaves the reload to its caller.
 */
import type { Take } from "../input/history";
import { STORAGE_KEY as MIDI_DEVICES_KEY } from "../input/web-midi";
import type { ProgressStore } from "../learn/progress/store";
import { LAST_SONG_KEY } from "../library/open-song";
import { SONG_MEMORY_KEY } from "../library/song-memory";
import { SONG_KEYS_KEY, SONG_TRACKS_KEY, TRACK_DEFAULTS_KEY } from "../library/track-settings";
import type { Upload } from "../library/uploads";
import { exportSettings, importSettings } from "../settings/export";
import type { SettingsStore, StorageLike } from "../settings/store";
import { FINGERS_KEY } from "../theory/fingering-editor";
import { type DataContents, type StoragePart, readBundle, writeBundle } from "./bundle";
import { noteChange } from "./changes";

/** The `localStorage` key that keeps the parts of a newer build's file. */
export const KEPT_KEY = "learn-piano-easy.dataKept";

/** The `localStorage` keys each part owns. */
export const STORAGE_KEYS: Readonly<Record<StoragePart, readonly string[]>> = {
  tracks: [SONG_TRACKS_KEY, SONG_KEYS_KEY, TRACK_DEFAULTS_KEY],
  fingers: [FINGERS_KEY],
  memory: [SONG_MEMORY_KEY, LAST_SONG_KEY, MIDI_DEVICES_KEY],
};

/** The stores a backup reads and a restore writes. */
export interface DataStores {
  settings: SettingsStore;
  progress: ProgressStore;
  uploads: { all(): Promise<Upload[]>; putMany(uploads: readonly Upload[]): Promise<number> };
  history: { all(): Promise<Take[]>; putMany(takes: readonly Take[]): Promise<number> };
  /** The page's `localStorage`, or null without one. */
  storage: StorageLike | null;
}

/** What a restore wrote: whether it set the settings, and how many records, songs, takes and keys it added. */
export interface RestoreResult {
  settings: boolean;
  progress: number;
  songs: number;
  takes: number;
  keys: number;
}

/** Every part of `stores`, as a backup file holds it. */
export async function readData(stores: DataStores): Promise<DataContents> {
  const storage: DataContents["storage"] = {};
  for (const [part, keys] of Object.entries(STORAGE_KEYS) as [StoragePart, readonly string[]][]) {
    const values: Record<string, unknown> = {};
    for (const key of keys) {
      const value = readJson(stores.storage, key);
      if (value !== undefined) values[key] = value;
    }
    storage[part] = values;
  }
  const kept = readJson(stores.storage, KEPT_KEY);
  return {
    settings: JSON.parse(exportSettings(stores.settings)),
    progress: JSON.parse(stores.progress.backup()),
    songs: await stores.uploads.all(),
    history: await stores.history.all(),
    storage,
    others: typeof kept === "object" && kept !== null && !Array.isArray(kept) ? (kept as Record<string, unknown>) : {},
  };
}

/** The backup file of every part of `stores`, written at `now`. */
export async function saveData(stores: DataStores, now = Date.now()): Promise<string> {
  return writeBundle(await readData(stores), now);
}

/** Writes `contents` into `stores` as each part restores. Rejects when a store refuses a write. */
export async function restoreData(stores: DataStores, contents: DataContents): Promise<RestoreResult> {
  const result: RestoreResult = { settings: false, progress: 0, songs: 0, takes: 0, keys: 0 };
  if (contents.settings !== undefined) result.settings = importSettings(stores.settings, JSON.stringify(contents.settings)).ok;
  for (const [part, keys] of Object.entries(STORAGE_KEYS) as [StoragePart, readonly string[]][]) {
    const values = contents.storage[part];
    if (values === undefined || stores.storage === null) continue;
    const written = keys.filter((key) => Object.hasOwn(values, key) && writeJson(stores.storage, key, values[key]));
    result.keys += written.length;
    if (written.length > 0) noteChange(part);
  }
  if (Object.keys(contents.others).length > 0) {
    const kept = readJson(stores.storage, KEPT_KEY);
    const merged = { ...(typeof kept === "object" && kept !== null ? kept : {}), ...contents.others };
    writeJson(stores.storage, KEPT_KEY, merged);
  }
  if (contents.progress !== undefined) result.progress = (await stores.progress.restore(JSON.stringify(contents.progress))) ?? 0;
  if (contents.songs !== undefined) result.songs = await stores.uploads.putMany(contents.songs);
  if (contents.history !== undefined) result.takes = await stores.history.putMany(contents.history);
  return result;
}

/** Restores the file `text` into `stores`, or resolves undefined and writes nothing when it is none of ours. */
export async function restoreFile(stores: DataStores, text: string): Promise<RestoreResult | undefined> {
  const contents = readBundle(text);
  return contents === undefined ? undefined : restoreData(stores, contents);
}

/** The JSON value under `key`, or undefined when there is none or it does not parse. */
function readJson(storage: StorageLike | null, key: string): unknown {
  try {
    const text = storage?.getItem(key) ?? null;
    return text === null ? undefined : JSON.parse(text);
  } catch {
    return undefined;
  }
}

/** Writes `value` under `key` as JSON, and says whether the storage kept it. */
function writeJson(storage: StorageLike | null, key: string, value: unknown): boolean {
  try {
    storage?.setItem(key, JSON.stringify(value));
    return storage !== null;
  } catch {
    return false;
  }
}

/**
 * The backup file in the browser: this browser's stores as `DataStores`, and the download of their
 * backup. The Data page saves and restores through it, and the profile's reset saves through it first.
 *
 * - **A save notes its time** in `localStorage` under `LAST_BACKUP_KEY`, so the Data page shows how old
 *   the learner's copy is.
 * - **A save asks for persistent storage.** The browser is then much less likely to evict the data on
 *   its own. A browser that refuses or lacks it costs nothing.
 * - **The stores open on each call,** so a page that never saves opens no database.
 */
import { openHistory } from "../input/history";
import { openProgress, type ProgressStore } from "../learn/progress/store";
import { Uploads } from "../library/uploads";
import type { SettingsStore, StorageLike } from "../settings/store";
import { saveFile } from "../ui/files";
import { type DataStores, saveData } from "./parts";

/** The `localStorage` key that holds the time of the last saved backup, in milliseconds. */
export const LAST_BACKUP_KEY = "learn-piano-easy.lastBackup";

/** The page's `localStorage`, or null where the browser refuses it. */
export function pageStorage(): StorageLike | null {
  try {
    return localStorage;
  } catch {
    return null;
  }
}

/** This browser's stores, with `settings` as the settings, and `progress` as the progress when given. */
export async function browserStores(settings: SettingsStore, progress?: ProgressStore): Promise<DataStores> {
  return { settings, progress: progress ?? (await openProgress()), uploads: new Uploads(settings), history: openHistory(), storage: pageStorage() };
}

/** The backup file's name for a save at `now`, dated by the learner's own day. */
export function backupName(now: number): string {
  const date = new Date(now);
  const two = (value: number) => String(value).padStart(2, "0");
  return `learn-piano-easy-data-${date.getFullYear()}-${two(date.getMonth() + 1)}-${two(date.getDate())}.json`;
}

/** Saves the backup of `stores` through the browser's download, and notes when. Rejects when a store cannot be read. */
export async function saveBackup(stores: DataStores, now = Date.now()): Promise<void> {
  saveFile(await saveData(stores, now), backupName(now), "application/json");
  try {
    stores.storage?.setItem(LAST_BACKUP_KEY, String(now));
  } catch {
    // A storage that refuses the note costs only the age line.
  }
  void navigator.storage?.persist?.().catch(() => false);
}

/** The time of the last saved backup, or undefined when none is noted. */
export function lastBackup(storage: StorageLike | null): number | undefined {
  try {
    const value = Number(storage?.getItem(LAST_BACKUP_KEY) ?? Number.NaN);
    return Number.isFinite(value) && value > 0 ? value : undefined;
  } catch {
    return undefined;
  }
}

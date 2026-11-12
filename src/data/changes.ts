/**
 * The change signal of the learner's data: every store calls `noteChange` after each write it kept.
 *
 * Decisions, and what each costs:
 * - The module imports nothing and holds one set of listeners, so every page can import it at no cost.
 * - A store calls `noteChange` only once its write succeeded. A refused write changes no data, so it
 *   tells nobody.
 * - A listener that throws is skipped, so a bug in a listener can never fail a store's write.
 * - The folder sync of `src/data/folder-sync.ts` is the only listener. Without it, a call does nothing.
 * - The flag that a folder is connected lives here too, so the site reads it at no cost.
 */

/** The `localStorage` key that is `on` while a folder is connected. It lives here, so the site reads it without loading the sync. */
export const FOLDER_SYNC_KEY = "learn-piano-easy.folderSync";

/** Whether a folder is connected, so the site loads the sync of `src/data/folder-sync.ts`. */
export function folderSyncOn(): boolean {
  try {
    return localStorage.getItem(FOLDER_SYNC_KEY) === "on";
  } catch {
    return false;
  }
}

/** The parts of the learner's data, one per row of a backup file. */
export type DataPart = "settings" | "progress" | "songs" | "history" | "tracks" | "fingers" | "memory";

/** Hears that `part` changed. */
export type DataListener = (part: DataPart) => void;

const listeners = new Set<DataListener>();

/** Tells every listener that `part` changed. A store calls it after each write it kept. */
export function noteChange(part: DataPart): void {
  for (const listener of [...listeners]) {
    try {
      listener(part);
    } catch {
      // A listener's bug never fails the write that called it.
    }
  }
}

/** Calls `listener` on each change, until the returned function is called. */
export function onDataChange(listener: DataListener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * Moved songs: the catalog files that left the library, the version of ours each became, and the
 * one-time move of a learner's stored work from the old song id to the new one.
 *
 * The five beginner tunes of `beginner/` became songs of ours in four rarities. Each maps to its Common
 * version, the one closest to the old arrangement. `moveStoredSongs` runs on start, before the stores
 * read the storage, and moves the fingers set by hand, the track settings, the key and the last song.
 *
 * Decisions, and what each costs:
 * - The move works on the stored JSON, and never through `FingerStore` or `TrackStore`. Those check
 *   each entry against a song, and the move has no song to load.
 * - An entry moves only when the new id holds none, so work saved on the new version is never
 *   overwritten. An entry that cannot move stays under its old id.
 * - A moved entry leaves its old id. The move then finds nothing on the next start, so it needs no
 *   flag of its own.
 * - Takes stay where they are. The history keys a take by its notes, and the new versions have other
 *   notes.
 * - A storage that refuses a write keeps everything under the old ids, so the move tries again on
 *   the next start.
 */
import type { StorageLike } from "../settings/store";
import { FINGERS_KEY } from "../theory/fingering-editor";
import { LAST_SONG_KEY } from "./open-song";
import { SONG_KEYS_KEY, SONG_TRACKS_KEY } from "./track-settings";

/** The beginner tunes that became songs of ours, by slug. Each kept its slug as its file name. */
const MOVED_SLUGS = ["mary-had-a-little-lamb", "twinkle-twinkle-little-star", "old-macdonald-had-a-farm", "row-row-row-your-boat", "yankee-doodle"];

/** The catalog file each moved song had, from `songs/`, to the file it moved to. */
export const MOVED_FILES: ReadonlyMap<string, string> = new Map(MOVED_SLUGS.map((slug) => [`beginner/${slug}.mid`, `ours/${slug}/common.mid`]));

/** The stored values kept by song id: fingers, track settings and keys. */
const BY_SONG_KEYS = [FINGERS_KEY, SONG_TRACKS_KEY, SONG_KEYS_KEY];

/** The value under `key` in `storage`, parsed, or undefined when it is missing or not JSON. */
function read(storage: StorageLike, key: string): unknown {
  try {
    return JSON.parse(storage.getItem(key) ?? "null") ?? undefined;
  } catch {
    return undefined;
  }
}

/** Writes `value` under `key`, and tells whether the storage took it. */
function write(storage: StorageLike, key: string, value: unknown): boolean {
  try {
    storage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/** Moves the stored work of every moved song in `storage` from its old song id to its new one. */
export function moveStoredSongs(storage: StorageLike | null): void {
  if (storage === null) return;
  for (const key of BY_SONG_KEYS) {
    const raw = read(storage, key);
    if (typeof raw !== "object" || raw === null || Array.isArray(raw)) continue;
    const songs = { ...(raw as Record<string, unknown>) };
    let moved = false;
    for (const [from, to] of MOVED_FILES) {
      const [oldId, newId] = [`catalog:${from}`, `catalog:${to}`];
      if (!(oldId in songs) || newId in songs) continue;
      songs[newId] = songs[oldId];
      delete songs[oldId];
      moved = true;
    }
    if (moved) write(storage, key, songs);
  }
  const last = read(storage, LAST_SONG_KEY);
  if (typeof last !== "object" || last === null) return;
  const { source, file } = last as Record<string, unknown>;
  const to = source === "catalog" && typeof file === "string" ? MOVED_FILES.get(file) : undefined;
  if (to !== undefined) write(storage, LAST_SONG_KEY, { source, file: to });
}

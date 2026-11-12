/**
 * Opening a song: the catalog's fetch, a song's fetch and parse, the remembered last song, and the
 * offer to fold a song that reaches past the learner's keyboard.
 *
 * Decisions, and what each costs:
 * - Every URL is relative to the page, `./songs/…`, so the app opens songs under any base path. The
 *   service worker caches each song on its first fetch, so a song once opened opens offline.
 * - A song parses in the worker of `src/midi/parse.ts`, so a large file never stalls the scene.
 * - The last song is remembered in `localStorage` under `LAST_SONG_KEY`: a catalog song by its file,
 *   an upload by its id. With `startWithLastSong` on, it reopens on start. A last song that fails to
 *   open, or an upload no longer kept, is forgotten, so one broken file never fails every start.
 * - Each open checks the song's span against the keyboard range. When notes fall outside it and
 *   folding is off, a toast offers to fold them, and its button turns `foldOutsideNotes` on. Nothing
 *   folds without the learner's word, because folding changes which keys the song asks for.
 * - Two opens in a row load only the later song, so a slow fetch never replaces a newer pick.
 * - Each toast and error reads the live locale's catalog when it is raised.
 */
import { noteChange } from "../data/changes";
import { t } from "../i18n/live";
import type { SongParser } from "../midi/parse";
import type { Song } from "../midi/song";
import { songSpan } from "../keyboard/song-fit";
import { inRange, normalizeRange } from "../keyboard/range";
import type { SettingsStore, StorageLike } from "../settings/store";
import { type CatalogSong, songTitle } from "./search";
import { titleOf, type Upload, type Uploads } from "./uploads";

/** The `localStorage` key the last opened song lives under. */
export const LAST_SONG_KEY = "learn-piano-easy.lastSong";

/** A remembered song: a catalog file by its path from `songs/`, or an upload by its id. */
export type LastSong = { source: "catalog"; file: string } | { source: "upload"; id: string };

/** The id a song's track settings are kept under: `catalog:` and its file, or the upload's id. */
export function songIdOf(last: LastSong): string {
  return last.source === "catalog" ? `catalog:${last.file}` : last.id;
}

/** What the opener needs from the app. */
export interface OpenerHost {
  settings: SettingsStore;
  parser: Pick<SongParser, "parse">;
  uploads: Pick<Uploads, "get">;
  /** Loads `song`, titled `title` and known as `id`, into the transport and the scene. */
  load(song: Song, title: string, id: string): void;
  toast(message: string, action?: { label: string; run: () => void }): void;
  /** Where the last song is kept. Null keeps nothing. */
  storage: StorageLike | null;
}

export interface SongOpener {
  /** Fetches, parses and loads `song`. Resolves false and says why in a toast when it fails. */
  open(song: CatalogSong): Promise<boolean>;
  /** Parses and loads `upload`. Resolves false and says why in a toast when it fails. */
  openUpload(upload: Upload): Promise<boolean>;
  /** Opens the last song when `startWithLastSong` is on and one is remembered. */
  reopenLast(catalog: readonly CatalogSong[]): Promise<void>;
}

/** The catalog of `public/songs/catalog.json`. Rejects when it cannot be fetched. */
export async function loadCatalog(): Promise<CatalogSong[]> {
  const response = await fetch("./songs/catalog.json");
  if (!response.ok) throw new Error(t().player.library.openSong.catalogFailed(response.status));
  return (await response.json()) as CatalogSong[];
}

/** The song remembered in `storage`, or undefined when none is or its shape is wrong. */
export function readLastSong(storage: StorageLike | null): LastSong | undefined {
  try {
    const raw: unknown = JSON.parse(storage?.getItem(LAST_SONG_KEY) ?? "null");
    if (typeof raw !== "object" || raw === null) return undefined;
    const { source, file, id } = raw as Record<string, unknown>;
    if (source === "catalog" && typeof file === "string") return { source, file };
    if (source === "upload" && typeof id === "string") return { source, id };
    return undefined;
  } catch {
    return undefined;
  }
}

/** An opener that loads songs through `host`. */
export function createSongOpener(host: OpenerHost): SongOpener {
  let latest = 0;
  const remember = (last: LastSong | null) => {
    try {
      host.storage?.setItem(LAST_SONG_KEY, JSON.stringify(last));
    } catch {
      return; // A storage that refuses only costs the reopen on the next start.
    }
    noteChange("memory");
  };

  const offerFold = (song: Song) => {
    const { settings } = host;
    if (settings.get("foldOutsideNotes")) return;
    const span = songSpan(song);
    const range = normalizeRange(settings.get("keyboardFirstNote"), settings.get("keyboardLastNote"));
    if (span === undefined || (inRange(span.low, range) && inRange(span.high, range))) return;
    const m = t().player.library.openSong;
    host.toast(m.outside, {
      label: m.fold,
      run: () => settings.set("foldOutsideNotes", true),
    });
  };

  /** Parses the bytes `read` gives, and loads them as `title`, unless a later open has begun. */
  const openBytes = async (read: () => Promise<Uint8Array>, title: string, last: LastSong) => {
    const ticket = ++latest;
    try {
      const song = await host.parser.parse(await read());
      if (ticket !== latest) return false;
      host.load(song, title, songIdOf(last));
      remember(last);
      offerFold(song);
      return true;
    } catch (error) {
      if (ticket !== latest) return false;
      const reason = error instanceof Error ? error.message : String(error);
      host.toast(t().player.library.openSong.failed(title, reason));
      return false;
    }
  };

  const opener: SongOpener = {
    open(entry) {
      const read = async () => {
        const response = await fetch(`./songs/${entry.file}`);
        if (!response.ok) throw new Error(t().player.library.openSong.fileFailed(response.status));
        return new Uint8Array(await response.arrayBuffer());
      };
      return openBytes(read, songTitle(entry), { source: "catalog", file: entry.file });
    },
    openUpload(upload) {
      return openBytes(async () => upload.bytes, titleOf(upload.name), { source: "upload", id: upload.id });
    },
    async reopenLast(catalog) {
      if (!host.settings.get("startWithLastSong")) return;
      const last = readLastSong(host.storage);
      if (last === undefined) return;
      let opened: boolean;
      if (last.source === "catalog") {
        const entry = catalog.find((song) => song.file === last.file);
        opened = entry !== undefined && (await opener.open(entry));
      } else {
        const upload = await host.uploads.get(last.id).catch(() => undefined);
        opened = upload !== undefined && (await opener.openUpload(upload));
      }
      if (!opened) remember(null);
    },
  };
  return opener;
}

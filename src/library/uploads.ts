/**
 * The learner's own songs: MIDI and MusicXML files dropped, picked or read from a folder, kept in this
 * browser.
 *
 * Decisions, and what each costs:
 * - An upload is its id, file name, bytes and the date it was added. Its id is a hash of its bytes, so
 *   the same file added twice is one song, and a renamed copy keeps its history.
 * - With `saveIndexedDb` on, each upload is written to the `uploads` store of our own database. With it
 *   off, or without IndexedDB, uploads live in memory and are gone on reload. Turning it off leaves
 *   the kept songs in place, and they show again once it is back on.
 * - `all` reads the kept songs even while `saveIndexedDb` is off, so a backup never leaves one out.
 *   `putMany` merges a backup's songs by id, and skips an id it has, so a restore never renames a song.
 * - Each change calls `noteChange("songs")` of `src/data/changes.ts`.
 * - Only files whose name ends in `.mid`, `.midi`, `.musicxml`, `.mxl` or `.xml` are taken. A folder is
 *   read with all its subfolders. An `.xml` file is taken only when it holds a MusicXML score, so a
 *   folder's other XML files stay out of the list.
 * - A folder opens through the File System Access API where the browser has it, and through a folder
 *   file input elsewhere. Both hand back plain `File` objects, so the rest never knows which ran.
 * - The list is read whole. A MIDI file is rarely over 100 kB, so a few hundred uploads fit in memory.
 */
import { noteChange } from "../data/changes";
import { collator } from "../i18n/format";
import { liveLocale } from "../i18n/live";
import { looksLikeMusicXml } from "../midi/musicxml";
import type { SettingsStore } from "../settings/store";
import { el } from "../ui/dom";
import { openDatabase, requestDone, transactionDone } from "./idb";

/** One song the learner added. */
export interface Upload {
  id: string;
  /** The file's name, such as `waltz.mid`. */
  name: string;
  bytes: Uint8Array;
  /** When it was added, in ms since the epoch. */
  added: number;
}

const DATABASE = "learn-piano-easy-library";
const STORE = "uploads";

/** The endings of the song files we take: MIDI, and MusicXML plain or compressed. */
const SONG_ENDING = /\.(midi?|musicxml|xml|mxl)$/i;

/** The file picker's `accept` list for the song files we take. */
export const SONG_ACCEPT = ".mid,.midi,audio/midi,.musicxml,.xml,.mxl,application/vnd.recordare.musicxml+xml,application/vnd.recordare.musicxml";

/** Whether a file named `name` is a song file we take. */
export function isSongName(name: string): boolean {
  return SONG_ENDING.test(name);
}

/** The id of a file of `bytes`: its length and its 32-bit FNV-1a hash, in hex. */
export function uploadId(bytes: Uint8Array): string {
  let hash = 0x811c9dc5;
  for (const byte of bytes) hash = Math.imul(hash ^ byte, 0x01000193);
  return `upload-${bytes.length.toString(16)}-${(hash >>> 0).toString(16).padStart(8, "0")}`;
}

/** `name` without its song file ending, such as `.mid`, as a song's title. */
export function titleOf(name: string): string {
  return name.replace(SONG_ENDING, "");
}

/** The learner's uploads, kept in IndexedDB when the setting allows it. */
export class Uploads {
  readonly #settings: SettingsStore;
  readonly #db: Promise<IDBDatabase | undefined>;
  readonly #session = new Map<string, Upload>();

  constructor(settings: SettingsStore) {
    this.#settings = settings;
    this.#db = openDatabase(DATABASE, 1, (db) => db.createObjectStore(STORE, { keyPath: "id" }));
  }

  /** Every upload, oldest first. */
  async list(): Promise<Upload[]> {
    const kept = new Map(this.#session);
    const db = await this.#kept();
    if (db !== undefined) {
      const stored = await requestDone(db.transaction(STORE, "readonly").objectStore(STORE).getAll() as IDBRequest<Upload[]>);
      for (const upload of stored) kept.set(upload.id, upload);
    }
    return [...kept.values()].sort((a, b) => a.added - b.added);
  }

  /** The upload of `id`, or undefined when there is none. */
  async get(id: string): Promise<Upload | undefined> {
    const own = this.#session.get(id);
    if (own !== undefined) return own;
    const db = await this.#kept();
    if (db === undefined) return undefined;
    return requestDone(db.transaction(STORE, "readonly").objectStore(STORE).get(id) as IDBRequest<Upload | undefined>);
  }

  /** Adds the song files among `files`, and returns them as uploads in the order given. */
  async add(files: readonly File[]): Promise<Upload[]> {
    const added: Upload[] = [];
    for (const file of files) {
      if (!isSongName(file.name)) continue;
      const bytes = new Uint8Array(await file.arrayBuffer());
      if (/\.xml$/i.test(file.name) && !looksLikeMusicXml(bytes)) continue;
      added.push({ id: uploadId(bytes), name: file.name, bytes, added: Date.now() + added.length });
    }
    for (const upload of added) this.#session.set(upload.id, upload);
    const db = await this.#kept();
    if (db !== undefined && added.length > 0) {
      const transaction = db.transaction(STORE, "readwrite");
      for (const upload of added) transaction.objectStore(STORE).put(upload);
      await transactionDone(transaction);
    }
    if (added.length > 0) noteChange("songs");
    return added;
  }

  /** Every upload of the session and of the browser, oldest first, whatever `saveIndexedDb` says. */
  async all(): Promise<Upload[]> {
    const every = new Map(this.#session);
    for (const upload of await this.#stored()) every.set(upload.id, upload);
    return [...every.values()].sort((a, b) => a.added - b.added);
  }

  /** Keeps the uploads of `uploads` whose id it lacks, as `add` keeps a file, and resolves how many it kept. */
  async putMany(uploads: readonly Upload[]): Promise<number> {
    const known = new Set((await this.all()).map((upload) => upload.id));
    const fresh: Upload[] = [];
    for (const upload of uploads) {
      if (known.has(upload.id)) continue;
      known.add(upload.id);
      fresh.push(upload);
    }
    if (fresh.length === 0) return 0;
    for (const upload of fresh) this.#session.set(upload.id, upload);
    const db = await this.#kept();
    if (db !== undefined) {
      const transaction = db.transaction(STORE, "readwrite");
      for (const upload of fresh) transaction.objectStore(STORE).put(upload);
      await transactionDone(transaction);
    }
    noteChange("songs");
    return fresh.length;
  }

  /** Removes the upload of `id` from the session and from the browser. */
  async remove(id: string): Promise<void> {
    this.#session.delete(id);
    const db = await this.#db;
    if (db === undefined) return noteChange("songs");
    const transaction = db.transaction(STORE, "readwrite");
    transaction.objectStore(STORE).delete(id);
    await transactionDone(transaction);
    noteChange("songs");
  }

  /** Every upload kept in the browser's database, or none without it. */
  async #stored(): Promise<Upload[]> {
    const db = await this.#db;
    if (db === undefined) return [];
    return requestDone(db.transaction(STORE, "readonly").objectStore(STORE).getAll() as IDBRequest<Upload[]>);
  }

  /** The database while `saveIndexedDb` is on, else undefined. */
  async #kept(): Promise<IDBDatabase | undefined> {
    return this.#settings.get("saveIndexedDb") ? this.#db : undefined;
  }
}

/** Asks for song files through the browser's file picker. Resolves empty when none is picked. */
export function pickFiles(): Promise<File[]> {
  return pickThrough(el("input", { attrs: { type: "file", accept: SONG_ACCEPT, multiple: "" } }));
}

/** The part of the File System Access API that reading a folder needs. */
interface DirectoryHandle {
  kind: "directory";
  values(): AsyncIterable<DirectoryHandle | { kind: "file"; getFile(): Promise<File> }>;
}

/** Asks for a folder and returns every MIDI file in it and its subfolders. */
export async function pickFolder(): Promise<File[]> {
  const picker = (window as { showDirectoryPicker?: () => Promise<DirectoryHandle> }).showDirectoryPicker;
  if (picker === undefined) {
    const input = el("input", { attrs: { type: "file", webkitdirectory: "", multiple: "" } });
    return (await pickThrough(input)).filter((file) => isSongName(file.name));
  }
  let root: DirectoryHandle;
  try {
    root = await picker.call(window);
  } catch {
    return []; // The learner closed the picker.
  }
  const files: File[] = [];
  const walk = async (dir: DirectoryHandle): Promise<void> => {
    for await (const entry of dir.values()) {
      if (entry.kind === "directory") await walk(entry);
      else {
        const file = await entry.getFile();
        if (isSongName(file.name)) files.push(file);
      }
    }
  };
  await walk(root);
  const byName = collator(liveLocale());
  return files.sort((a, b) => byName.compare(a.name, b.name));
}

/** The files the learner picks through `input`. Resolves empty when the picker closes without a pick. */
function pickThrough(input: HTMLInputElement): Promise<File[]> {
  return new Promise((resolve) => {
    input.addEventListener("change", () => resolve([...(input.files ?? [])]));
    input.addEventListener("cancel", () => resolve([]));
    input.click();
  });
}

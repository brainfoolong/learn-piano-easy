/**
 * The folder sync: in Chromium browsers, every change of the learner's data reaches a folder they
 * picked, so a cleared browser gets its data back by picking that folder again.
 *
 * The folder holds `learn-piano-easy-data.json`, a `songs/` folder and a `backups/` folder. The JSON is
 * a backup file of `src/data/bundle.ts` whose songs part lists each song's file in `songs/` in place of
 * its bytes. It also names its `writer`, a random id this browser keeps under `WRITER_KEY`.
 *
 * - **A burst of changes is written once,** `delay` ms after its last `noteChange`. A page that hides
 *   writes at once, as a best effort, since a write can still be cut off as the page closes.
 * - **Each write goes through `createWritable()`,** which writes a temporary file and swaps it in on
 *   close. A crash during a write leaves the last good file in place.
 * - **A song's file is written once and never rewritten or removed,** so a sync stays small beside a
 *   large library, and a song the learner removed can still come back.
 * - **`backups/` keeps one dated copy a day,** the first write of that day, and the last seven days.
 *   A bad write can then cost at most one day.
 * - **A sync never writes over a file it did not write.** A file from another writer, a file newer than
 *   this browser's last write and a file that does not read all make the sync stop and ask. The page
 *   then offers the folder's restore first, or the replacement of the file with this browser's data.
 * - **A restore from the folder writes the folder at once.** Its data then holds both sides, and the
 *   file names this browser as its writer, so the next start does not ask again.
 * - **A replacement keeps the file it replaces** in `backups/` under the time it was written. Such a
 *   copy is never pruned, so a replacement never loses another browser's work.
 * - **The handle is kept in IndexedDB** `learn-piano-easy-data`. Each start checks its permission. When
 *   Chrome granted it on every visit, the sync runs at once. Otherwise the page offers *Reconnect*,
 *   which asks the browser on the learner's click.
 * - **The site loads this module only where `FOLDER_SYNC_KEY` is `on`,** through a dynamic import, so a
 *   page without a folder loads none of it.
 *
 * Bounds: each write reads every store once, songs included, as a backup does. A few hundred songs
 * hold tens of megabytes in memory for the length of one write.
 */
import { openDatabase, requestDone, transactionDone } from "../library/idb";
import type { SettingsStore, StorageLike } from "../settings/store";
import { backupName, browserStores, pageStorage } from "./backup-file";
import { type DataContents, readBundleValue, writeBundle } from "./bundle";
import { FOLDER_SYNC_KEY, folderSyncOn, onDataChange } from "./changes";
import { type DataStores, readData, restoreData } from "./parts";

/** The `localStorage` key of this browser's writer id. */
export const WRITER_KEY = "learn-piano-easy.dataWriter";

/** The `localStorage` key of the time this browser last wrote the folder, in ms since the epoch. */
export const WRITTEN_KEY = "learn-piano-easy.folderWritten";

/** The folder's backup file. */
export const FOLDER_FILE = "learn-piano-easy-data.json";

/** How many dated copies `backups/` keeps. */
export const DAILY_COPIES = 7;

/** The ms after a burst's last change before the sync writes. */
const DELAY_MS = 2000;

/** The name of a dated copy, as `backupName` of `src/data/backup-file.ts` writes it. */
const DAILY = /^learn-piano-easy-data-\d{4}-\d{2}-\d{2}\.json$/;

/** A file being written. The new content shows only once it closes. */
export interface FolderWritable {
  write(data: string | Uint8Array): Promise<void>;
  close(): Promise<void>;
}

/** A file in a folder, as the File System Access API hands it out. */
export interface FolderFile {
  getFile(): Promise<{ text(): Promise<string>; arrayBuffer(): Promise<ArrayBuffer> }>;
  createWritable(): Promise<FolderWritable>;
}

/** The part of a `FileSystemDirectoryHandle` the sync uses, so a test can pass a folder in memory. */
export interface Folder {
  readonly name: string;
  getFileHandle(name: string, options?: { create?: boolean }): Promise<FolderFile>;
  getDirectoryHandle(name: string, options?: { create?: boolean }): Promise<Folder>;
  removeEntry(name: string): Promise<void>;
  keys(): AsyncIterable<string>;
}

/** What the sync of one folder is doing. */
export type SyncState =
  /** Connected, and nothing written in this visit yet. */
  | { kind: "ready" }
  /** The last write in this visit ended at `written`. */
  | { kind: "synced"; written: number }
  /** The folder holds a file this browser did not write, written at `written` when it reads. Nothing is written until the learner picks. */
  | { kind: "asking"; written: number | undefined }
  /** A write failed, such as when the browser took the permission back. */
  | { kind: "failed" };

/** What the page shows about the folder. */
export type FolderState =
  /** No folder is connected. */
  | { kind: "off" }
  /** A folder is connected, and its handle and permission are still being read. */
  | { kind: "starting" }
  /** The folder `name` is connected, but the browser asks before the sync may write it. */
  | { kind: "reconnect"; name: string }
  /** The folder `name` is connected, and its sync is in `sync`. */
  | { kind: "on"; name: string; sync: SyncState };

/** How a `FolderSync` reaches its folder, its stores and the clock. */
export interface SyncOptions {
  folder: Folder;
  /** Opens the stores. Called on each write, so each write reads what other pages wrote. */
  stores: () => Promise<DataStores>;
  /** The page's `localStorage`, which keeps the writer id and the last write's time. */
  storage: StorageLike | null;
  /** The ms after a burst's last change before the sync writes. */
  delay?: number;
  now?: () => number;
}

/** The sync of one folder: it writes the stores into it after each burst of changes. */
export class FolderSync {
  private state: SyncState = { kind: "ready" };
  private readonly listeners = new Set<(state: SyncState) => void>();
  private queue: Promise<unknown> = Promise.resolve();
  private timer: ReturnType<typeof setTimeout> | undefined;
  private readonly delay: number;
  private readonly now: () => number;

  constructor(private readonly options: SyncOptions) {
    this.delay = options.delay ?? DELAY_MS;
    this.now = options.now ?? Date.now;
  }

  /** The sync's state now. */
  get current(): SyncState {
    return this.state;
  }

  /** Calls `listener` on each new state, until the returned function is called. */
  onState(listener: (state: SyncState) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /** Writes after each burst of changes, and at once when the page hides, until the returned function is called. */
  start(): () => void {
    const off = onDataChange(() => this.schedule());
    const hide = () => {
      if (document.visibilityState === "hidden") this.flush();
    };
    globalThis.document?.addEventListener("visibilitychange", hide);
    return () => {
      off();
      globalThis.document?.removeEventListener("visibilitychange", hide);
      clearTimeout(this.timer);
      this.timer = undefined;
    };
  }

  /** Writes the folder `delay` ms from now, unless another change moves the write on. */
  schedule(): void {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.flush(), this.delay);
  }

  /** Writes a scheduled write now. */
  flush(): void {
    if (this.timer === undefined) return;
    clearTimeout(this.timer);
    this.timer = undefined;
    void this.write().catch(() => undefined);
  }

  /**
   * Writes the stores into the folder, and resolves whether it wrote. It writes nothing while the folder
   * holds a file this browser did not write, and asks instead. Rejects, with the state `failed`, when the
   * folder refuses a write.
   */
  write(): Promise<boolean> {
    return this.queued(async () => {
      if (this.state.kind === "asking") return false;
      const found = await this.foundFile();
      if (found !== undefined && !this.wrote(found)) {
        this.set({ kind: "asking", written: writtenOf(found) });
        return false;
      }
      await this.writeNow();
      return true;
    });
  }

  /** Restores the folder's data into the stores, then writes the folder from them. Resolves false when the folder's file does not read. */
  restore(): Promise<boolean> {
    return this.queued(async () => {
      const contents = await readFolder(this.options.folder);
      if (contents === undefined) return false;
      await restoreData(await this.options.stores(), contents);
      await this.writeNow();
      return true;
    });
  }

  /** Writes the folder from the stores, over a file this browser did not write. That file is kept in `backups/` first. */
  replace(): Promise<void> {
    return this.queued(async () => {
      const text = await readText(this.options.folder, FOLDER_FILE);
      if (text !== undefined) {
        const backups = await this.options.folder.getDirectoryHandle("backups", { create: true });
        const at = writtenOf(parse(text)) ?? this.now();
        await writeFile(backups, `learn-piano-easy-data-replaced-${at}.json`, text);
      }
      await this.writeNow();
    });
  }

  /** Runs `work` after every earlier write, and sets the state `failed` when it rejects. */
  private queued<T>(work: () => Promise<T>): Promise<T> {
    const run = this.queue.then(work).catch((error: unknown) => {
      this.set({ kind: "failed" });
      throw error;
    });
    this.queue = run.catch(() => undefined);
    return run;
  }

  /** Writes the songs, the file and today's copy, without asking. */
  private async writeNow(): Promise<void> {
    const { folder, storage } = this.options;
    const contents = await readData(await this.options.stores());
    const now = this.now();
    const songs = contents.songs ?? [];
    await writeSongs(folder, songs);
    const { songs: _songs, ...rest } = contents;
    const file = JSON.parse(writeBundle(rest, now)) as { writer?: string; parts: Record<string, unknown> };
    file.writer = writerOf(storage);
    file.parts.songs = songs.map((song) => ({ id: song.id, name: song.name, added: song.added, file: songFile(song) }));
    const text = JSON.stringify(file);
    await writeFile(folder, FOLDER_FILE, text);
    try {
      storage?.setItem(WRITTEN_KEY, String(now));
    } catch {
      // Without the note, the next start asks before it writes, which loses nothing.
    }
    await keepDaily(folder, text, now);
    this.set({ kind: "synced", written: now });
  }

  /** The folder's file, parsed, or null when it does not parse. Undefined when the folder holds none. */
  private async foundFile(): Promise<unknown> {
    const text = await readText(this.options.folder, FOLDER_FILE);
    return text === undefined ? undefined : parse(text);
  }

  /** Whether this browser wrote the file `found`, and nothing wrote it since. */
  private wrote(found: unknown): boolean {
    const { storage } = this.options;
    const written = writtenOf(found);
    const last = Number(read(storage, WRITTEN_KEY) ?? Number.NaN);
    return isObject(found) && found.writer === writerOf(storage) && written !== undefined && written <= last;
  }

  private set(state: SyncState): void {
    this.state = state;
    for (const listener of [...this.listeners]) listener(state);
  }
}

/** The contents of the folder's file with each song's bytes from `songs/`, or undefined when it does not read. A song whose file is gone is left out. */
export async function readFolder(folder: Folder): Promise<DataContents | undefined> {
  const text = await readText(folder, FOLDER_FILE);
  const raw = text === undefined ? undefined : parse(text);
  if (!isObject(raw) || !isObject(raw.parts)) return undefined;
  const listed = Array.isArray(raw.parts.songs) ? raw.parts.songs : [];
  const contents = readBundleValue({ ...raw, parts: { ...raw.parts, songs: undefined } });
  if (contents === undefined) return undefined;
  const dir = await folder.getDirectoryHandle("songs").catch(() => undefined);
  const songs: NonNullable<DataContents["songs"]> = [];
  for (const entry of listed) {
    if (!isObject(entry) || dir === undefined) continue;
    const { id, name, added, file } = entry;
    if (typeof id !== "string" || typeof name !== "string" || typeof added !== "number" || typeof file !== "string") continue;
    const bytes = await dir
      .getFileHandle(file)
      .then((handle) => handle.getFile())
      .then((blob) => blob.arrayBuffer())
      .catch(() => undefined);
    if (bytes !== undefined) songs.push({ id, name, added, bytes: new Uint8Array(bytes) });
  }
  contents.songs = songs;
  return contents;
}

/** The name of `song`'s file in `songs/`: its id, with the ending of its own name. */
function songFile(song: { id: string; name: string }): string {
  const ending = /\.(midi?|kar|rmi)$/i.exec(song.name)?.[0].toLowerCase() ?? ".mid";
  return `${song.id}${ending}`;
}

/** Writes each of `songs` that `songs/` lacks. A song's file is never rewritten. */
async function writeSongs(folder: Folder, songs: readonly { id: string; name: string; bytes: Uint8Array }[]): Promise<void> {
  if (songs.length === 0) return;
  const dir = await folder.getDirectoryHandle("songs", { create: true });
  const there = new Set<string>();
  for await (const name of dir.keys()) there.add(name);
  for (const song of songs) {
    const name = songFile(song);
    if (!there.has(name)) await writeFile(dir, name, song.bytes);
  }
}

/** Writes `text` as the dated copy of `now`'s day when `backups/` lacks it, and keeps the last `DAILY_COPIES`. */
async function keepDaily(folder: Folder, text: string, now: number): Promise<void> {
  const dir = await folder.getDirectoryHandle("backups", { create: true });
  const names: string[] = [];
  for await (const name of dir.keys()) if (DAILY.test(name)) names.push(name);
  const today = backupName(now);
  if (!names.includes(today)) {
    await writeFile(dir, today, text);
    names.push(today);
  }
  names.sort();
  for (const old of names.slice(0, -DAILY_COPIES)) await dir.removeEntry(old);
}

/** Writes `data` as the file `name` in `folder`, through a temporary file that is swapped in on close. */
async function writeFile(folder: Folder, name: string, data: string | Uint8Array): Promise<void> {
  const writable = await (await folder.getFileHandle(name, { create: true })).createWritable();
  await writable.write(data);
  await writable.close();
}

/** The text of the file `name` in `folder`, or undefined when there is none. */
async function readText(folder: Folder, name: string): Promise<string | undefined> {
  let handle: FolderFile;
  try {
    handle = await folder.getFileHandle(name);
  } catch {
    return undefined;
  }
  return (await handle.getFile()).text();
}

/** This browser's writer id, made and kept on first use. */
function writerOf(storage: StorageLike | null): string {
  const kept = read(storage, WRITER_KEY);
  if (kept !== null && kept !== "") return kept;
  const made = crypto.randomUUID();
  try {
    storage?.setItem(WRITER_KEY, made);
  } catch {
    // Without a kept id, each visit asks before it writes, which loses nothing.
  }
  return made;
}

function read(storage: StorageLike | null, key: string): string | null {
  try {
    return storage?.getItem(key) ?? null;
  } catch {
    return null;
  }
}

function parse(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/** The `written` time of the parsed file `found`, or undefined when it has none. */
function writtenOf(found: unknown): number | undefined {
  return isObject(found) && typeof found.written === "number" ? found.written : undefined;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// The sync of this page: the stored handle, its permission, and the one running `FolderSync`.

/** The browser's permission calls on a handle, which only Chromium has. */
interface PermissionHandle {
  queryPermission?(descriptor: { mode: "readwrite" }): Promise<PermissionState>;
  requestPermission?(descriptor: { mode: "readwrite" }): Promise<PermissionState>;
}

type Handle = FileSystemDirectoryHandle & PermissionHandle;

const DATABASE = "learn-piano-easy-data";
const HANDLES = "folder";
const HANDLE_KEY = "handle";

let state: FolderState = { kind: "off" };
const listeners = new Set<(state: FolderState) => void>();
let running: { sync: FolderSync; stop: () => void } | undefined;
let started: Promise<void> | undefined;

/** Whether this browser can connect a folder. Only Chromium browsers have `showDirectoryPicker`. */
export function folderSupported(): boolean {
  return typeof window !== "undefined" && "showDirectoryPicker" in window;
}

/** What the page shows about the folder now. */
export function folderState(): FolderState {
  if (state.kind === "off" && started === undefined && folderSyncOn()) return { kind: "starting" };
  return state;
}

/** Calls `listener` on each new folder state, until the returned function is called. */
export function onFolderState(listener: (state: FolderState) => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Starts the sync of the stored folder, once per page load. A later call returns the first one's promise. */
export function startFolderSync(settings: SettingsStore): Promise<void> {
  started ??= (async () => {
    if (!folderSyncOn()) return;
    publish({ kind: "starting" });
    const handle = await loadHandle().catch(() => undefined);
    if (handle === undefined) return publish({ kind: "off" });
    const permission = (await handle.queryPermission?.({ mode: "readwrite" }).catch(() => "prompt" as const)) ?? "granted";
    if (permission === "granted") await begin(handle, settings);
    else publish({ kind: "reconnect", name: handle.name });
  })();
  return started;
}

/** Lets the learner pick a folder, and syncs into it. A folder that holds a file asks before any write. Rejects when the learner cancels. */
export async function connectFolder(settings: SettingsStore): Promise<void> {
  const picking = window as unknown as { showDirectoryPicker(options: { mode: "readwrite"; id: string }): Promise<Handle> };
  const handle = await picking.showDirectoryPicker({ mode: "readwrite", id: "learn-piano-easy-data" });
  stopRunning();
  await saveHandle(handle).catch(() => undefined);
  try {
    localStorage.setItem(FOLDER_SYNC_KEY, "on");
  } catch {
    // Without the flag, the folder syncs for this visit only.
  }
  void navigator.storage?.persist?.().catch(() => false);
  await begin(handle, settings);
}

/** Asks the browser again for the stored folder, on the learner's click, and syncs into it once allowed. */
export async function reconnectFolder(settings: SettingsStore): Promise<void> {
  const handle = await loadHandle();
  if (handle === undefined) return publish({ kind: "off" });
  stopRunning();
  const permission = (await handle.requestPermission?.({ mode: "readwrite" })) ?? "granted";
  if (permission === "granted") await begin(handle, settings);
  else publish({ kind: "reconnect", name: handle.name });
}

/** Stops the sync and forgets the folder. The folder's files stay where they are. */
export async function disconnectFolder(): Promise<void> {
  stopRunning();
  try {
    localStorage.removeItem(FOLDER_SYNC_KEY);
  } catch {
    // A storage that refuses the removal never held the flag.
  }
  await clearHandle().catch(() => undefined);
  publish({ kind: "off" });
}

/** Restores the folder's data into this browser, and writes the folder from the result. Resolves false when there is no sync or no file to read. */
export async function restoreFromFolder(): Promise<boolean> {
  return running === undefined ? false : running.sync.restore();
}

/** Writes this browser's data over the folder's file, which is kept in `backups/` first. */
export async function replaceFolder(): Promise<void> {
  await running?.sync.replace();
}

/** Starts the sync of `handle`, and writes it once unless it holds a file this browser did not write. */
async function begin(handle: Handle, settings: SettingsStore): Promise<void> {
  const sync = new FolderSync({ folder: handle as unknown as Folder, stores: () => browserStores(settings), storage: pageStorage() });
  const stop = sync.start();
  const off = sync.onState((now) => publish({ kind: "on", name: handle.name, sync: now }));
  running = {
    sync,
    stop: () => {
      stop();
      off();
    },
  };
  publish({ kind: "on", name: handle.name, sync: sync.current });
  await sync.write().catch(() => undefined);
}

function stopRunning(): void {
  running?.stop();
  running = undefined;
}

function publish(next: FolderState): void {
  state = next;
  for (const listener of [...listeners]) listener(next);
}

async function handles(): Promise<IDBDatabase> {
  const db = await openDatabase(DATABASE, 1, (opened) => opened.createObjectStore(HANDLES));
  if (db === undefined) throw new Error("IndexedDB is refused");
  return db;
}

async function loadHandle(): Promise<Handle | undefined> {
  const db = await handles();
  try {
    return (await requestDone(db.transaction(HANDLES, "readonly").objectStore(HANDLES).get(HANDLE_KEY))) as Handle | undefined;
  } finally {
    db.close();
  }
}

async function saveHandle(handle: Handle): Promise<void> {
  const db = await handles();
  try {
    const transaction = db.transaction(HANDLES, "readwrite");
    transaction.objectStore(HANDLES).put(handle, HANDLE_KEY);
    await transactionDone(transaction);
  } finally {
    db.close();
  }
}

async function clearHandle(): Promise<void> {
  const db = await handles();
  try {
    const transaction = db.transaction(HANDLES, "readwrite");
    transaction.objectStore(HANDLES).delete(HANDLE_KEY);
    await transactionDone(transaction);
  } finally {
    db.close();
  }
}

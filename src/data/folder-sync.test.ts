import { MemoryHistory } from "../input/history";
import { memoryBackend, ProgressStore } from "../learn/progress/store";
import { type Upload, Uploads } from "../library/uploads";
import { SettingsStore, type StorageLike } from "../settings/store";
import { expect, test } from "../testing";
import { noteChange } from "./changes";
import { FOLDER_FILE, type Folder, type FolderFile, FolderSync, WRITER_KEY, WRITTEN_KEY } from "./folder-sync";
import type { DataStores } from "./parts";

/** A `localStorage` in memory. */
class MemoryStorage implements StorageLike {
  readonly items = new Map<string, string>();
  getItem(key: string): string | null {
    return this.items.get(key) ?? null;
  }
  setItem(key: string, value: string): void {
    this.items.set(key, value);
  }
}

/** A folder in memory, which counts the writes of each file. */
class MemoryFolder implements Folder {
  readonly files = new Map<string, Uint8Array>();
  readonly folders = new Map<string, MemoryFolder>();
  readonly writes = new Map<string, number>();
  constructor(readonly name: string) {}

  async getFileHandle(name: string, options?: { create?: boolean }): Promise<FolderFile> {
    if (!this.files.has(name)) {
      if (options?.create !== true) throw new DOMException("missing", "NotFoundError");
      this.files.set(name, new Uint8Array());
    }
    return {
      getFile: async () => {
        const bytes = this.files.get(name) ?? new Uint8Array();
        return { text: async () => new TextDecoder().decode(bytes), arrayBuffer: async () => bytes.slice().buffer };
      },
      createWritable: async () => {
        let pending = new Uint8Array();
        return {
          write: async (data) => {
            pending = typeof data === "string" ? new TextEncoder().encode(data) : data.slice();
          },
          close: async () => {
            this.files.set(name, pending);
            this.writes.set(name, (this.writes.get(name) ?? 0) + 1);
          },
        };
      },
    };
  }

  async getDirectoryHandle(name: string, options?: { create?: boolean }): Promise<MemoryFolder> {
    let folder = this.folders.get(name);
    if (folder === undefined) {
      if (options?.create !== true) throw new DOMException("missing", "NotFoundError");
      folder = new MemoryFolder(name);
      this.folders.set(name, folder);
    }
    return folder;
  }

  async removeEntry(name: string): Promise<void> {
    this.files.delete(name);
    this.folders.delete(name);
  }

  async *keys(): AsyncIterable<string> {
    yield* this.files.keys();
    yield* this.folders.keys();
  }

  /** The parsed file `name`. */
  json(name: string): Record<string, unknown> {
    return JSON.parse(new TextDecoder().decode(this.files.get(name)));
  }

  put(name: string, text: string): void {
    this.files.set(name, new TextEncoder().encode(text));
  }
}

/** A browser's stores in memory, with one song and one take. */
async function browser(): Promise<DataStores & { storage: MemoryStorage }> {
  const storage = new MemoryStorage();
  const settings = new SettingsStore(storage);
  const uploads = new Uploads(settings);
  await uploads.putMany([song("waltz")]);
  const history = new MemoryHistory();
  await history.putMany([{ song: "upload-waltz", date: 100, speed: 1, hands: "both", hits: 9, perfect: 5, misses: 1, mistakes: 0 }]);
  return { settings, progress: await ProgressStore.open(memoryBackend()), uploads, history, storage };
}

function song(text: string): Upload {
  return { id: `upload-${text}`, name: `${text}.MID`, bytes: new TextEncoder().encode(`MThd ${text}`), added: 10 };
}

function syncOf(folder: Folder, stores: DataStores & { storage: MemoryStorage }, options: { delay?: number; now?: () => number } = {}): FolderSync {
  return new FolderSync({ folder, stores: async () => stores, storage: stores.storage, ...options });
}

const DAY = 86_400_000;
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

test("a_file_another_browser_wrote_is_never_overwritten_unasked", async () => {
  // Another browser wrote the folder, with a song of its own.
  const other = await browser();
  await other.uploads.putMany([song("etude")]);
  const folder = new MemoryFolder("piano");
  expect(await syncOf(folder, other, { now: () => 500 }).write()).toBe(true);
  const theirs = new TextDecoder().decode(folder.files.get(FOLDER_FILE));
  expect(folder.json(FOLDER_FILE).written).toBe(500);
  expect([...(folder.folders.get("songs")?.files.keys() ?? [])].sort()).toEqual(["upload-etude.mid", "upload-waltz.mid"]);

  // This browser asks, and writes nothing, however many changes it makes.
  const mine = await browser();
  const sync = syncOf(folder, mine, { now: () => 900 });
  expect(await sync.write()).toBe(false);
  expect(sync.current).toEqual({ kind: "asking", written: 500 });
  mine.settings.set("showFps", !mine.settings.get("showFps"));
  expect(await sync.write()).toBe(false);
  expect(new TextDecoder().decode(folder.files.get(FOLDER_FILE))).toBe(theirs);

  // A file of this browser's own writer asks too, once something newer than its last write wrote it.
  const again = await browser();
  again.storage.setItem(WRITER_KEY, String(folder.json(FOLDER_FILE).writer));
  again.storage.setItem(WRITTEN_KEY, "400");
  expect(await syncOf(folder, again).write()).toBe(false);

  // The restore comes first: it brings the folder's songs, and the file then names this browser.
  expect(await sync.restore()).toBe(true);
  expect((await mine.uploads.all()).map((upload) => upload.id).sort()).toEqual(["upload-etude", "upload-waltz"]);
  expect(new TextDecoder().decode((await mine.uploads.all()).find((upload) => upload.id === "upload-etude")?.bytes)).toBe("MThd etude");
  expect(folder.json(FOLDER_FILE).writer).toBe(mine.storage.getItem(WRITER_KEY));
  expect(sync.current).toEqual({ kind: "synced", written: 900 });

  // A replacement keeps the file it replaces.
  const third = await browser();
  const replacing = syncOf(folder, third, { now: () => 1_000 });
  expect(await replacing.write()).toBe(false);
  const replaced = new TextDecoder().decode(folder.files.get(FOLDER_FILE));
  await replacing.replace();
  expect(folder.json(FOLDER_FILE).writer).toBe(third.storage.getItem(WRITER_KEY));
  expect(new TextDecoder().decode(folder.folders.get("backups")?.files.get("learn-piano-easy-data-replaced-900.json"))).toBe(replaced);
});

test("one_dated_copy_a_day_and_the_last_seven_are_kept", async () => {
  const stores = await browser();
  const folder = new MemoryFolder("piano");
  const start = new Date(2026, 0, 1, 12).getTime();
  let now = start;
  const sync = syncOf(folder, stores, { now: () => now });

  // Two writes on the first day keep the day's first.
  await sync.write();
  now += 1_000;
  await sync.write();
  const backups = folder.folders.get("backups")!;
  expect(JSON.parse(new TextDecoder().decode(backups.files.get("learn-piano-easy-data-2026-01-01.json"))).written).toBe(start);
  expect(folder.json(FOLDER_FILE).written).toBe(start + 1_000);

  // Nine days later, the last seven days are left.
  for (let day = 1; day < 9; day += 1) {
    now = start + day * DAY;
    await sync.write();
  }
  expect([...backups.files.keys()].sort()).toEqual([3, 4, 5, 6, 7, 8, 9].map((day) => `learn-piano-easy-data-2026-01-0${day}.json`));
});

test("changes_in_a_burst_are_written_once", async () => {
  const stores = await browser();
  const folder = new MemoryFolder("piano");
  const sync = syncOf(folder, stores, { delay: 40 });
  const stop = sync.start();
  try {
    for (let change = 0; change < 5; change += 1) {
      noteChange("settings");
      await wait(5);
    }
    expect(folder.writes.get(FOLDER_FILE)).toBeUndefined();
    await wait(150);
    expect(folder.writes.get(FOLDER_FILE)).toBe(1);

    // A second burst writes the file again, and the song it already holds never again.
    noteChange("history");
    noteChange("progress");
    await wait(150);
    expect(folder.writes.get(FOLDER_FILE)).toBe(2);
    expect(folder.folders.get("songs")?.writes.get("upload-waltz.mid")).toBe(1);
  } finally {
    stop();
  }
});

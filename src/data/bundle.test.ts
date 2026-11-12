import { MemoryHistory, type Take } from "../input/history";
import { memoryBackend, ProgressStore } from "../learn/progress/store";
import { SONG_MEMORY_KEY } from "../library/song-memory";
import { SONG_TRACKS_KEY } from "../library/track-settings";
import { type Upload, Uploads } from "../library/uploads";
import { exportSettings } from "../settings/export";
import { SettingsStore, type StorageLike } from "../settings/store";
import { expect, test } from "../testing";
import { FINGERS_KEY } from "../theory/fingering-editor";
import { DATA_FORMAT, readBundle } from "./bundle";
import { type DataStores, KEPT_KEY, restoreFile, saveData } from "./parts";

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

/** A fresh browser's stores, all in memory. */
async function freshStores(): Promise<DataStores & { storage: MemoryStorage }> {
  const storage = new MemoryStorage();
  const settings = new SettingsStore(storage);
  return {
    settings,
    progress: await ProgressStore.open(memoryBackend()),
    uploads: new Uploads(settings),
    history: new MemoryHistory(),
    storage,
  };
}

function song(text: string, added: number): Upload {
  return { id: `upload-${text}`, name: `${text}.mid`, bytes: new TextEncoder().encode(`MThd ${text}`), added };
}

function take(song: string, date: number): Take {
  return { song, date, speed: 1, hands: "both", hits: 9, perfect: 5, misses: 1, mistakes: 0 };
}

/** A browser with something in every part. */
async function fullStores(): Promise<DataStores & { storage: MemoryStorage }> {
  const stores = await freshStores();
  stores.settings.set("showFps", !stores.settings.get("showFps"));
  await stores.progress.record({ kind: "lesson", lesson: "w1/l1", stars: 3 });
  await stores.uploads.putMany([song("waltz", 10), song("étude", 20)]);
  await stores.history.putMany([take("upload-waltz", 100), take("upload-waltz", 200)]);
  stores.storage.setItem(SONG_TRACKS_KEY, JSON.stringify({ "upload-waltz": [{ hand: "right" }] }));
  stores.storage.setItem(FINGERS_KEY, JSON.stringify({ "upload-waltz": { "0:60": 1 } }));
  stores.storage.setItem(SONG_MEMORY_KEY, JSON.stringify({ favourites: ["upload-waltz"] }));
  return stores;
}

test("a_bundle_restores_every_part", async () => {
  const source = await fullStores();
  const file = await saveData(source, 1234);
  expect(JSON.parse(file)).toMatchObject({ format: DATA_FORMAT, version: 1, written: 1234 });

  const target = await freshStores();
  const result = await restoreFile(target, file);
  expect(result).toEqual({ settings: true, progress: 1, songs: 2, takes: 2, keys: 3 });
  expect(target.settings.values()).toEqual(source.settings.values());
  expect(target.progress.events()).toEqual(source.progress.events());
  expect(await target.uploads.all()).toEqual(await source.uploads.all());
  expect(await target.history.all()).toEqual(await source.history.all());
  for (const key of [SONG_TRACKS_KEY, FINGERS_KEY, SONG_MEMORY_KEY]) expect(target.storage.getItem(key)).toBe(source.storage.getItem(key));

  // A part of a newer build is kept, and goes into the next backup.
  const newer = JSON.parse(file);
  newer.parts.metronomePresets = [{ bpm: 90 }];
  await restoreFile(target, JSON.stringify(newer));
  expect(JSON.parse(target.storage.getItem(KEPT_KEY) ?? "null")).toEqual({ metronomePresets: [{ bpm: 90 }] });
  expect(readBundle(await saveData(target))?.others).toEqual({ metronomePresets: [{ bpm: 90 }] });
});

test("a_restore_never_removes_newer_progress_or_songs", async () => {
  const old = await saveData(await fullStores());
  const browser = await freshStores();
  await browser.progress.record({ kind: "lesson", lesson: "w1/l2", stars: 2 });
  await browser.uploads.putMany([{ ...song("waltz", 99), name: "renamed.mid" }, song("newer", 30)]);
  await browser.history.putMany([take("upload-newer", 300)]);
  const before = {
    events: browser.progress.events().length,
    songs: await browser.uploads.all(),
    takes: await browser.history.all(),
  };

  const result = await restoreFile(browser, old);
  // The old file's own lesson, songs and takes are new to this browser; nothing it has goes.
  expect(browser.progress.events().length).toBe(before.events + (result?.progress ?? 0));
  for (const kept of before.songs) expect(await browser.uploads.all()).toContainEqual(kept);
  for (const kept of before.takes) expect(await browser.history.all()).toContainEqual(kept);
  expect(result?.songs).toBe(1);
  expect(result?.takes).toBe(2);

  // Restoring the same file again adds nothing.
  expect(await restoreFile(browser, old)).toMatchObject({ progress: 0, songs: 0, takes: 0 });
});

test("an_old_settings_or_progress_file_still_restores", async () => {
  const source = await fullStores();
  const target = await freshStores();

  expect(await restoreFile(target, exportSettings(source.settings))).toEqual({ settings: true, progress: 0, songs: 0, takes: 0, keys: 0 });
  expect(target.settings.values()).toEqual(source.settings.values());

  expect(await restoreFile(target, source.progress.backup())).toEqual({ settings: false, progress: 1, songs: 0, takes: 0, keys: 0 });
  expect(target.progress.events()).toEqual(source.progress.events());
  expect(await target.uploads.all()).toEqual([]);
});

test("a_file_not_ours_changes_nothing", async () => {
  const stores = await fullStores();
  const before = await saveData(stores, 1);
  for (const text of ["not json", "[]", "null", JSON.stringify({ format: "someone-else", parts: {} }), JSON.stringify({ app: "other", values: {} })]) {
    expect(readBundle(text)).toBeUndefined();
    expect(await restoreFile(stores, text)).toBeUndefined();
  }
  expect(await saveData(stores, 1)).toBe(before);

  // A song or take of the wrong shape is left out, and the rest of its part still reads.
  const odd = { format: DATA_FORMAT, version: 1, written: 1, parts: { songs: [{ id: "x" }, 7], history: [{ song: "s" }] } };
  expect(readBundle(JSON.stringify(odd))).toMatchObject({ songs: [], history: [] });
});

/**
 * The Data page in a real browser: a backup it saves restores every part into a cleared browser, the
 * player and the profile lead to it, and it passes the layout checks.
 *
 * The first backup is built here from the app's own writers, so the test needs no lesson played. The
 * page restores it, saves its own backup, and a fresh browser context, which holds no data at all,
 * restores that one. A snapshot of every store must match across the two browsers.
 */
import { readFile } from "node:fs/promises";
import { expect, test, type Page } from "@playwright/test";
import { writeBundle } from "../src/data/bundle";
import { memoryBackend, ProgressStore } from "../src/learn/progress/store";
import { exportSettings } from "../src/settings/export";
import { SettingsStore, type StorageLike } from "../src/settings/store";
import { checkLayout, pastSetup } from "./layout-check";

/** The `localStorage` keys a backup holds besides the settings, one value each in the seed. */
const KEYS = {
  "learn-piano-easy.tracks": { song: [{ hand: "right" }] },
  "learn-piano-easy.songKeys": { song: "D" },
  "learn-piano-easy.trackDefaults": { hand: "left" },
  "learn-piano-easy.fingers": { song: { "0:60": 1 } },
  "learn-piano-easy.songMemory": { favourites: ["upload-waltz"] },
  "learn-piano-easy.lastSong": { id: "upload-waltz" },
  "learn-piano-easy.midi-devices": { input: "Piano" },
};

/** A backup with something in every part, written by the app's own code. */
async function seedFile(): Promise<string> {
  const items = new Map<string, string>();
  const storage: StorageLike = { getItem: (key) => items.get(key) ?? null, setItem: (key, value) => void items.set(key, value) };
  const settings = new SettingsStore(storage);
  settings.set("showFps", true);
  const progress = await ProgressStore.open(memoryBackend());
  await progress.record({ kind: "lesson", lesson: "w1/l1", stars: 3 });
  await progress.record({ kind: "lesson", lesson: "w1/l2", stars: 2 });
  return writeBundle(
    {
      settings: JSON.parse(exportSettings(settings)),
      progress: JSON.parse(progress.backup()),
      songs: [
        { id: "upload-waltz", name: "waltz.mid", added: 10, bytes: new TextEncoder().encode("MThd waltz") },
        { id: "upload-etude", name: "étude.mid", added: 20, bytes: new TextEncoder().encode("MThd étude") },
      ],
      history: [
        { song: "upload-waltz", date: 100, speed: 1, hands: "both", hits: 9, perfect: 5, misses: 1, mistakes: 0 },
        { song: "upload-waltz", date: 200, speed: 0.5, hands: "right", hits: 4, perfect: 2, misses: 3, mistakes: 1 },
      ],
      storage: {
        tracks: pick("learn-piano-easy.tracks", "learn-piano-easy.songKeys", "learn-piano-easy.trackDefaults"),
        fingers: pick("learn-piano-easy.fingers"),
        memory: pick("learn-piano-easy.songMemory", "learn-piano-easy.lastSong", "learn-piano-easy.midi-devices"),
      },
      others: {},
    },
    1_000,
  );
}

/** The entries of `KEYS` named by `keys`. */
function pick(...keys: (keyof typeof KEYS)[]): Record<string, unknown> {
  return Object.fromEntries(keys.map((key) => [key, KEYS[key]]));
}

/** Every store of the page, as plain values: the settings' `showFps`, each key, each record, song and take. */
function snapshot(page: Page) {
  return page.evaluate(async (keys) => {
    const all = (name: string, store: string) =>
      new Promise<Record<string, unknown>[]>((resolve, reject) => {
        const open = indexedDB.open(name);
        open.onerror = () => reject(open.error);
        open.onsuccess = () => {
          const db = open.result;
          const request = db.transaction(store, "readonly").objectStore(store).getAll();
          request.onerror = () => reject(request.error);
          request.onsuccess = () => {
            db.close();
            resolve(request.result);
          };
        };
      });
    const settings = JSON.parse(localStorage.getItem("learn-piano-easy.settings") ?? "{}");
    const progress = await all("learn-piano-easy-progress", "events");
    const songs = await all("learn-piano-easy-library", "uploads");
    const takes = await all("learn-piano-easy-history", "takes");
    return {
      showFps: settings.values?.showFps,
      keys: Object.fromEntries(keys.map((key) => [key, JSON.parse(localStorage.getItem(key) ?? "null")])),
      progress: progress.map((record) => record.id).sort(),
      songs: songs.map(({ id, name, bytes }) => ({ id, name, size: (bytes as Uint8Array).byteLength })).sort((a, b) => String(a.id).localeCompare(String(b.id))),
      takes: takes.map(({ song, date }) => `${song}@${date}`).sort(),
    };
  }, Object.keys(KEYS));
}

/** The Data page's own status line. The site's toasts are a status region too. */
const status = (page: Page) => page.locator(".data__status");

/** Restores the file `text` through the page's own button and its question, and waits out the reload. */
async function restore(page: Page, text: string): Promise<void> {
  const chooser = page.waitForEvent("filechooser");
  await page.getByRole("button", { name: "Restore a backup" }).click();
  await (await chooser).setFiles({ name: "backup.json", mimeType: "application/json", buffer: Buffer.from(text) });
  const ask = page.getByRole("dialog", { name: "Restore this backup?" });
  await expect(ask).toBeVisible();
  await ask.getByRole("button", { name: "Restore", exact: true }).click();
  await expect(status(page)).toHaveText("The backup is restored.");
}

test("a_backup_restores_everything_after_the_browser_storage_is_cleared", async ({ page, browser, baseURL }) => {
  await page.goto("./data/");
  await expect(page.getByText("This browser has not saved a backup yet.")).toBeVisible();

  // A file that is none of ours changes nothing.
  const refused = page.waitForEvent("filechooser");
  await page.getByRole("button", { name: "Restore a backup" }).click();
  await (await refused).setFiles({ name: "notes.json", mimeType: "application/json", buffer: Buffer.from('{"hello":1}') });
  await page.getByRole("dialog", { name: "Restore this backup?" }).getByRole("button", { name: "Restore", exact: true }).click();
  await expect(status(page)).toHaveText("That file is not a backup of Learn Piano Easy. Nothing changed.");

  // The seed restores every part, after the question.
  await restore(page, await seedFile());
  const before = await snapshot(page);
  expect(before.showFps).toBe(true);
  expect(before.keys).toEqual(KEYS);
  expect(before.progress).toHaveLength(2);
  expect(before.songs.map((song) => song.id)).toEqual(["upload-etude", "upload-waltz"]);
  expect(before.takes).toEqual(["upload-waltz@100", "upload-waltz@200"]);

  // The page saves a backup of every part, and says it was saved today.
  const saving = page.waitForEvent("download");
  await page.getByRole("button", { name: "Save a backup" }).click();
  const download = await saving;
  expect(download.suggestedFilename()).toMatch(/^learn-piano-easy-data-\d{4}-\d{2}-\d{2}\.json$/);
  const saved = await readFile(await download.path(), "utf8");
  await expect(page.getByText("The last backup was saved today.")).toBeVisible();
  await expect(status(page)).toHaveText("The backup file is saved.");

  // A fresh browser holds nothing, and the saved backup brings back every part.
  const fresh = await browser.newContext({ baseURL: baseURL! });
  try {
    const cleared = await fresh.newPage();
    await cleared.goto("./data/");
    expect(await cleared.evaluate(() => localStorage.getItem("learn-piano-easy.fingers"))).toBeNull();
    await restore(cleared, saved);
    expect(await snapshot(cleared)).toEqual(before);
  } finally {
    await fresh.close();
  }
});

test("the_player_and_the_profile_lead_to_the_data_page", async ({ page }) => {
  await pastSetup(page);
  const heading = page.locator("main > :not([hidden]) h1");

  // The player's settings panel opens the page, and the player stays behind it.
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings", exact: true }).click();
  await page.getByRole("complementary", { name: "Settings" }).getByRole("button", { name: "Back up or restore your data" }).click();
  await expect(page).toHaveURL(/\/data\/$/);
  await expect(heading).toHaveText("Your data");

  // The footer links it.
  await page.goto("./about/");
  await page.locator(".site-footer").getByRole("link", { name: "Your data" }).click();
  await expect(page).toHaveURL(/\/data\/$/);

  // The profile's data card links it, in the profile's own locale.
  await page.goto("./de/learn/profile/");
  await page.getByRole("link", { name: "Sichern oder wiederherstellen" }).click();
  await expect(page).toHaveURL(/\/de\/data\/$/);
  await expect(heading).toHaveText("Deine Daten");

  // The profile's reset still saves a file first, and now it is the whole backup.
  await page.goto("./learn/profile/");
  await page.getByRole("button", { name: "Reset all progress" }).click();
  await page.getByRole("dialog", { name: "Reset all progress?" }).getByRole("button", { name: "Continue" }).click();
  const saving = page.waitForEvent("download");
  await page.getByRole("dialog", { name: "Are you sure?" }).getByRole("button", { name: "Reset my progress" }).click();
  const file = JSON.parse(await readFile(await (await saving).path(), "utf8"));
  expect(file).toMatchObject({ format: "learn-piano-easy-data", version: 1 });
  expect(Object.keys(file.parts)).toEqual(expect.arrayContaining(["settings", "progress", "songs", "history"]));
});

test("the_data_page_passes_the_layout_checks", async ({ browser, baseURL }) => {
  test.setTimeout(16 * 20_000);
  const flaws = await checkLayout(browser, new URL("data/", baseURL).href, { reducedMotion: true, ready: ".data__cards" });
  expect(flaws).toEqual([]);
});

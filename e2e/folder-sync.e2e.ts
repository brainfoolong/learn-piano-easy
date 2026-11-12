/**
 * The folder sync in a real browser: a change reaches the folder, a folder that holds another
 * browser's data is offered for restore before anything is written, and a browser without folders
 * shows only the backup file.
 *
 * The folder is a directory of the origin private file system. An init script makes
 * `showDirectoryPicker` resolve it, since a test cannot click through the browser's own picker. Its
 * handle is a real one, so IndexedDB keeps it and the sync writes it through `createWritable`.
 */
import { expect, test, type Page } from "@playwright/test";
import { writeBundle } from "../src/data/bundle";
import { exportSettings } from "../src/settings/export";
import { SettingsStore, type StorageLike } from "../src/settings/store";

/** Makes `showDirectoryPicker` resolve the folder `picked` of the origin private file system. */
async function givePicker(page: Page): Promise<void> {
  await page.addInitScript(() => {
    const scope = window as unknown as { showDirectoryPicker: () => Promise<FileSystemDirectoryHandle> };
    scope.showDirectoryPicker = async () => (await navigator.storage.getDirectory()).getDirectoryHandle("picked", { create: true });
  });
}

/** The text of the file at `path` in the picked folder, or null when it is missing. */
function folderFile(page: Page, path: string[]): Promise<string | null> {
  return page.evaluate(async (path) => {
    try {
      let folder = await (await navigator.storage.getDirectory()).getDirectoryHandle("picked");
      for (const name of path.slice(0, -1)) folder = await folder.getDirectoryHandle(name);
      return await (await (await folder.getFileHandle(path.at(-1)!)).getFile()).text();
    } catch {
      return null;
    }
  }, path);
}

/** Writes `files`, each a path and its text, into the picked folder. */
function seedFolder(page: Page, files: [string[], string][]): Promise<void> {
  return page.evaluate(async (files) => {
    const root = await (await navigator.storage.getDirectory()).getDirectoryHandle("picked", { create: true });
    for (const [path, text] of files) {
      let folder = root;
      for (const name of path.slice(0, -1)) folder = await folder.getDirectoryHandle(name, { create: true });
      const writable = await (await folder.getFileHandle(path.at(-1)!, { create: true })).createWritable();
      await writable.write(text);
      await writable.close();
    }
  }, files);
}

/** Another browser's folder file: `showFps` set, and one song listed by its file. */
function anotherBrowsersFile(): string {
  const items = new Map<string, string>();
  const storage: StorageLike = { getItem: (key) => items.get(key) ?? null, setItem: (key, value) => void items.set(key, value) };
  const settings = new SettingsStore(storage);
  settings.set("showFps", true);
  const file = JSON.parse(writeBundle({ settings: JSON.parse(exportSettings(settings)), storage: {}, others: {} }, Date.UTC(2026, 0, 5, 9)));
  file.writer = "another-browser";
  file.parts.songs = [{ id: "upload-waltz", name: "waltz.mid", added: 10, file: "upload-waltz.mid" }];
  return JSON.stringify(file);
}

/** Today's dated copy, named by the page's own day, as `backupName` of `src/data/backup-file.ts` names it. */
function todaysCopy(page: Page): Promise<string> {
  return page.evaluate(() => {
    const now = new Date();
    const two = (value: number) => String(value).padStart(2, "0");
    return `learn-piano-easy-data-${now.getFullYear()}-${two(now.getMonth() + 1)}-${two(now.getDate())}.json`;
  });
}

const card = (page: Page) => page.getByRole("region", { name: "Keep a folder in step" });

test("a_change_reaches_the_folder", async ({ page }) => {
  await givePicker(page);
  await page.goto("./data/");
  await card(page).getByRole("button", { name: "Connect a folder" }).click();
  await expect(card(page)).toContainText("Your data is kept in the folder “picked”.");
  await expect(card(page)).toContainText("The folder was last written at");
  await expect.poll(() => folderFile(page, ["learn-piano-easy-data.json"])).toContain('"format":"learn-piano-easy-data"');
  expect(await folderFile(page, ["backups", await todaysCopy(page)])).not.toBeNull();

  // A setting the learner changes reaches the folder a moment later.
  await page.locator(".site-bar-host").getByRole("combobox", { name: "Theme" }).selectOption({ label: "Dark" });
  await expect.poll(() => folderFile(page, ["learn-piano-easy-data.json"]), { timeout: 10_000 }).toContain('"siteTheme":"dark"');

  // A later visit syncs on without asking, since this browser wrote the file.
  await page.reload();
  await expect(card(page)).toContainText("Your data is kept in the folder “picked”.");
  await page.locator(".site-bar-host").getByRole("combobox", { name: "Theme" }).selectOption({ label: "Light" });
  await expect.poll(() => folderFile(page, ["learn-piano-easy-data.json"]), { timeout: 10_000 }).toContain('"siteTheme":"light"');
});

test("a_folder_that_holds_a_backup_offers_its_restore_before_any_write", async ({ page }) => {
  await givePicker(page);
  await page.goto("./data/");
  const theirs = anotherBrowsersFile();
  await seedFolder(page, [
    [["learn-piano-easy-data.json"], theirs],
    [["songs", "upload-waltz.mid"], "MThd waltz"],
  ]);

  // Connecting asks first, and the restore is the first choice.
  await card(page).getByRole("button", { name: "Connect a folder" }).click();
  await expect(card(page)).toContainText("The folder “picked” holds data that this browser did not write.");
  const choices = card(page).getByRole("button");
  await expect(choices.first()).toHaveText("Restore from the folder");
  await expect(card(page).getByRole("button", { name: "Replace it with this browser's data" })).toBeVisible();
  expect(await folderFile(page, ["learn-piano-easy-data.json"])).toBe(theirs);
  expect(await folderFile(page, ["backups", await todaysCopy(page)])).toBeNull();

  // The restore brings the folder's settings and song, and the folder then names this browser.
  await card(page).getByRole("button", { name: "Restore from the folder" }).click();
  await expect(page.locator(".data__status")).toHaveText("The backup is restored.");
  await expect(card(page)).toContainText("Your data is kept in the folder “picked”.");
  const restored = await page.evaluate(() => JSON.parse(localStorage.getItem("learn-piano-easy.settings") ?? "{}").values?.showFps);
  expect(restored).toBe(true);
  const songs = await page.evaluate(
    () =>
      new Promise<string[]>((resolve, reject) => {
        const open = indexedDB.open("learn-piano-easy-library");
        open.onerror = () => reject(open.error);
        open.onsuccess = () => {
          const request = open.result.transaction("uploads", "readonly").objectStore("uploads").getAllKeys();
          request.onsuccess = () => resolve(request.result.map(String));
          request.onerror = () => reject(request.error);
        };
      }),
  );
  expect(songs).toEqual(["upload-waltz"]);
  const written = JSON.parse((await folderFile(page, ["learn-piano-easy-data.json"]))!);
  expect(written.writer).not.toBe("another-browser");
  expect(written.parts.songs).toEqual([expect.objectContaining({ id: "upload-waltz", file: "upload-waltz.mid" })]);
});

test("a_browser_without_folders_shows_only_the_backup_file", async ({ page }) => {
  await page.addInitScript(() => {
    delete (Window.prototype as unknown as Record<string, unknown>).showDirectoryPicker;
    delete (window as unknown as Record<string, unknown>).showDirectoryPicker;
  });
  await page.goto("./data/");
  await expect(page.getByRole("button", { name: "Save a backup" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Restore a backup" })).toBeVisible();
  await expect(page.locator(".data__card")).toHaveCount(2);
  await expect(card(page)).toHaveCount(0);
});

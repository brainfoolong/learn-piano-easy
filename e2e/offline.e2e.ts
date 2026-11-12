/** The offline cache manager in a real browser: it saves the songs, which then open offline, and removes them. */
import { expect, test } from "@playwright/test";

test("the_cache_manager_saves_and_removes_the_songs", async ({ page, context }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("./play/");
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("button", { name: "Manage offline files" }).click();

  const dialog = page.getByRole("dialog", { name: "Offline files" });
  const songs = dialog.locator(".cache-group").filter({ has: page.getByRole("heading", { name: "Songs" }) });
  const status = songs.getByRole("status");
  await expect(dialog.locator(".cache-group").first().getByRole("status")).toContainText("all saved");
  await expect(status).toContainText(/MB, \d+ files, not saved\./);

  await songs.getByRole("button", { name: "Save Songs" }).click();
  await expect(status).toContainText("all saved", { timeout: 30_000 });

  await context.setOffline(true);
  const ok = await page.evaluate(async () => (await fetch("./songs/ours/yankee-doodle/common.mid")).ok);
  expect(ok).toBe(true);
  await context.setOffline(false);

  await songs.getByRole("button", { name: "Remove Songs" }).click();
  await expect(status).toContainText("not saved");
  expect(errors).toEqual([]);
});

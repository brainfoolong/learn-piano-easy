/** The app shell in a real browser: it starts without errors, shows the scene, and works offline. */
import { expect, test, type Page } from "@playwright/test";

/** Collects every uncaught error and console error the page reports from now on. */
function watchErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
}

test("app_shell_starts_without_errors_and_draws_the_scene", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto("./play/");
  await expect(page.locator("[data-top-bar]").getByRole("button", { name: "Songs" })).toBeVisible();
  const canvas = page.locator(".stage canvas");
  await expect(canvas).toBeVisible();
  const size = await canvas.boundingBox();
  expect(size?.width ?? 0).toBeGreaterThan(100);
  expect(size?.height ?? 0).toBeGreaterThan(100);
  expect(errors).toEqual([]);
});

test("about_dialog_shows_the_license_and_the_notices", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "About" }).click();
  const dialog = page.getByRole("dialog", { name: "About Learn Piano Easy" });
  await expect(dialog).toContainText("MIT License");
  await dialog.getByText("Third-party notices", { exact: true }).click();
  await expect(dialog.getByText(/three\.js/).first()).toBeVisible();
  await dialog.getByText("three license", { exact: true }).click();
  await expect(dialog.getByText(/Copyright © 2010-\d+ three\.js authors/)).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
});

test("a_phone_shows_the_whole_song_title_and_one_row_of_setting_sections", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto("./play/");
  const title = page.getByLabel("Open song");
  await expect(title).toHaveText("Demo song");
  expect(await title.evaluate((node) => node.scrollWidth <= node.clientWidth)).toBe(true);

  // On a phone the player's Settings sit in the top bar's menu.
  await page.setViewportSize({ width: 740, height: 360 });
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  await page.getByRole("button", { name: "Settings", exact: true }).click();
  const nav = page.locator(".settings-nav");
  const height = (await nav.boundingBox())?.height ?? 0;
  expect(height).toBeLessThan(60);
  await expect(page.getByRole("combobox", { name: "Scene theme" })).toBeInViewport();
});

test("a_changed_setting_survives_a_reload", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();
  const toggle = page.getByRole("switch", { name: "Restart the song when it ends" });
  await expect(toggle).not.toBeChecked();
  await toggle.click();
  await expect(toggle).toBeChecked();
  await page.reload();
  await page.getByRole("button", { name: "Settings" }).click();
  await expect(page.getByRole("switch", { name: "Restart the song when it ends" })).toBeChecked();
});

test("first_visit_is_not_reloaded_when_the_worker_takes_control", async ({ page }) => {
  await page.goto("./play/");
  await page.evaluate(() => Object.assign(window, { firstLoadMarker: true }));
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
  await page.waitForTimeout(500);
  expect(await page.evaluate(() => "firstLoadMarker" in window)).toBe(true);
});

test("app_reloads_offline_from_the_service_worker", async ({ page, context }) => {
  await page.goto("./play/");
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
  await context.setOffline(true);
  const errors = watchErrors(page);
  await page.reload();
  await expect(page.locator("[data-top-bar]").getByRole("button", { name: "Songs" })).toBeVisible();
  await expect(page.locator(".stage canvas")).toBeVisible();
  expect(errors).toEqual([]);
});

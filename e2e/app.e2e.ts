/** The app shell in a real browser: it starts without errors, shows the scene, and works offline. */
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import type { AddressInfo } from "node:net";
import { extname, join } from "node:path";
import { expect, test, type Page } from "@playwright/test";
import { GROUP_INDEX, shellCacheName, type GroupIndex } from "../src/pwa/cache-groups";
import { contentHash } from "../src/pwa/current";
import { openParts } from "./save-parts";

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

/** The types of the files a page of the build loads. Any other file is served as bytes. */
const TYPES: Record<string, string> = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json",
};

/** The line the next version adds to `app.css`. */
const NEXT_CSS = "\n/* The next version. */\n";

/** The player's file that a stale next version renames, which no code loads, and its new name. */
const RENAMED = { from: "/models/LICENSE.md", to: "/models/LICENSE-next.md" };

/** How long the server holds back the renamed file, so the install of the next version shows its bar. */
const RENAMED_DELAY = 1_500;

/**
 * A server of this run's build that the test can move to a next version. Playwright never sees the
 * request for a worker's script, so only a server can change it. The next version changes `app.css`,
 * and its `sw.js` names the new version and the stylesheet's new hash. The server is the test's own, so
 * no other test's browser finds the update. `fetched` lists the paths asked for since the start, or
 * since `next` once it has run. `index` is the run's index of the cache groups.
 *
 * `next({ stale: true })` also renames a file of the player, as a new build renames a chunk. The old
 * name then answers 404, so a page of the old version finds itself stale. The next version's index and
 * worker list the new name, and the worker the index's new hash.
 */
async function updatableSite() {
  const dist = join(".agent-tmp/e2e/runs", process.env.E2E_RUN!, "dist");
  const indexText = await readFile(join(dist, GROUP_INDEX), "utf8");
  const index = JSON.parse(indexText) as GroupIndex;
  const css = await readFile(join(dist, "app.css"), "utf8");
  const oldCss = index.groups.app.hashes[index.groups.app.files.indexOf("./app.css")]!;
  const newCss = await contentHash(new TextEncoder().encode(css + NEXT_CSS));
  const newVersion = await contentHash(new TextEncoder().encode(`next ${index.version}`));
  const staleIndex = indexText.replaceAll(`.${RENAMED.from}`, `.${RENAMED.to}`).replaceAll(oldCss, newCss).replaceAll(index.version, newVersion);
  const oldIndexHash = await contentHash(new TextEncoder().encode(indexText));
  const staleIndexHash = await contentHash(new TextEncoder().encode(staleIndex));
  let next = false;
  let stale = false;
  const fetched: string[] = [];
  const server = createServer(async (request, response) => {
    let path = decodeURIComponent(new URL(request.url!, "http://localhost").pathname);
    fetched.push(path);
    if (path.endsWith("/")) path += "index.html";
    if (stale && path === RENAMED.from) {
      response.writeHead(404).end();
      return;
    }
    if (stale && path === RENAMED.to) {
      await new Promise((resolve) => setTimeout(resolve, RENAMED_DELAY));
      path = RENAMED.from;
    }
    try {
      let body: Buffer | string = await readFile(join(dist, path));
      if (next && path === "/app.css") body = css + NEXT_CSS;
      if (next && path === "/sw.js") body = body.toString().replaceAll(oldCss, newCss).replaceAll(index.version, newVersion);
      if (stale && path === "/sw.js") body = body.toString().replaceAll(`.${RENAMED.from}`, `.${RENAMED.to}`).replaceAll(oldIndexHash, staleIndexHash);
      if (stale && path === `/${GROUP_INDEX}`) body = staleIndex;
      const type = TYPES[extname(path)] ?? "application/octet-stream";
      response.writeHead(200, { "content-type": type, "cache-control": "no-cache" }).end(body);
    } catch {
      response.writeHead(404).end();
    }
  });
  await new Promise<void>((resolve) => server.listen(0, "localhost", resolve));
  return {
    url: `http://localhost:${(server.address() as AddressInfo).port}/`,
    next: (options: { stale?: boolean } = {}) => {
      next = true;
      stale = options.stale ?? false;
      fetched.length = 0;
    },
    fetched,
    index,
    close: () => {
      server.closeAllConnections();
      server.close();
    },
  };
}

test("an_update_fetches_only_the_shell_files_that_changed", async ({ page }) => {
  const site = await updatableSite();
  try {
    await page.goto(site.url);
    await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
    const errors = watchErrors(page);
    site.next();
    await page.evaluate(() => navigator.serviceWorker.getRegistration().then((r) => r?.update()));
    await expect(page.getByRole("status").getByText("A new version is ready.")).toBeVisible({ timeout: 30_000 });
    expect(site.fetched.filter((path) => path !== "/sw.js")).toEqual(["/app.css"]);

    await Promise.all([page.waitForEvent("load"), page.getByRole("status").getByRole("button", { name: "Reload" }).click()]);
    expect(await page.evaluate(() => fetch("./app.css").then((r) => r.text()))).toContain(NEXT_CSS);
    await page.goto(`${site.url}play/`);
    await expect(page.locator(".stage canvas")).toBeVisible();
    expect(errors).toEqual([]);
  } finally {
    site.close();
  }
});

test("an_update_keeps_every_marked_locale", async ({ page }) => {
  const site = await updatableSite();
  try {
    // A first visit in German marks German, so its install caches German beside English.
    await page.goto(`${site.url}de/`);
    await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
    site.next();
    await page.evaluate(() => navigator.serviceWorker.getRegistration().then((r) => r?.update()));
    await expect.poll(() => page.evaluate(async () => (await navigator.serviceWorker.getRegistration())?.waiting !== null), { timeout: 30_000 }).toBe(true);
    const held = await page.evaluate(async (old) => {
      const name = (await caches.keys()).find((key) => key.startsWith("shell-") && key !== old);
      if (name === undefined) return [];
      return (await (await caches.open(name)).keys()).map((request) => new URL(request.url).pathname);
    }, shellCacheName(site.index.version));
    const { app } = site.index.groups;
    const inLocale = (locale: string) => app.files.filter((_, i) => app.locales[i] === locale).map((file) => file.slice(1));
    expect(inLocale("de").filter((path) => !held.includes(path))).toEqual([]);
    expect(inLocale("en").filter((path) => !held.includes(path))).toEqual([]);
    expect(inLocale("fr").filter((path) => held.includes(path))).toEqual([]);
    // The new version copies the German files, since their bytes are the same.
    expect(site.fetched.filter((path) => inLocale("de").includes(path))).toEqual([]);
  } finally {
    site.close();
  }
});

test("the_offer_of_a_new_version_stays_until_the_learner_answers_it", async ({ page }) => {
  const site = await updatableSite();
  try {
    await page.goto(site.url);
    await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
    const errors = watchErrors(page);
    site.next();
    await page.evaluate(() => navigator.serviceWorker.getRegistration().then((r) => r?.update()));

    const offer = page.getByRole("status").getByText("A new version is ready.");
    await expect(offer).toBeVisible({ timeout: 30_000 });
    // A toast without an action leaves after 5 seconds, and the offer outlasts that.
    await page.waitForTimeout(6_000);
    await expect(offer).toBeVisible();
    await expect(page.getByRole("status").getByRole("button", { name: "Dismiss" })).toBeVisible();

    await Promise.all([page.waitForEvent("load"), page.getByRole("status").getByRole("button", { name: "Reload" }).click()]);
    await expect(offer).toBeHidden();
    expect(errors).toEqual([]);
  } finally {
    site.close();
  }
});

test("a_stale_page_gets_the_newest_version_and_opens_the_player_in_it", async ({ page }) => {
  test.setTimeout(120_000);
  const site = await updatableSite();
  try {
    await page.goto(site.url);
    await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
    site.next({ stale: true });
    // The player's files of this version are gone from the server, so the page installs the next one.
    await page.locator("[data-top-bar]").getByRole("link", { name: "Just Play Piano" }).click();
    await expect(page.getByRole("progressbar", { name: "Getting the newest version" })).toBeVisible({ timeout: 30_000 });
    // The page reloads into the next version, whose install saved the player, so it opens at once.
    await expect(page.locator(".stage canvas")).toBeVisible({ timeout: 60_000 });
    expect(await page.evaluate(() => fetch("./app.css").then((r) => r.text()))).toContain(NEXT_CSS);
    expect(site.fetched).toContain(RENAMED.to);
  } finally {
    site.close();
  }
});

test("a_first_visit_to_the_landing_page_fetches_and_caches_no_part_of_the_shell", async ({ page }) => {
  const site = await updatableSite();
  try {
    await page.goto(site.url);
    await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
    const { player, learn } = site.index.groups;
    // A file `./x` of the index is the path `/x` on this server, which serves the build at its root.
    const parts = new Set([...player.files, ...learn.files].map((file) => file.slice(1)));
    expect(parts.size).toBeGreaterThan(0);
    expect(site.fetched.filter((path) => parts.has(path))).toEqual([]);
    const cached = await page.evaluate(async () => {
      const shell = (await caches.keys()).filter((name) => name.startsWith("shell-"));
      const keys = await Promise.all(shell.map(async (name) => (await caches.open(name)).keys()));
      return keys.flat().map((request) => new URL(request.url).pathname);
    });
    expect(cached).toContain("/app.js");
    expect(cached.filter((path) => parts.has(path))).toEqual([]);
  } finally {
    site.close();
  }
});

test("app_reloads_offline_from_the_service_worker", async ({ page, context }) => {
  await openParts(page, ["player"]);
  await context.setOffline(true);
  const errors = watchErrors(page);
  await page.reload();
  await expect(page.locator("[data-top-bar]").getByRole("button", { name: "Songs" })).toBeVisible();
  await expect(page.locator(".stage canvas")).toBeVisible();
  expect(errors).toEqual([]);
});

test("a_page_with_a_query_opens_offline_as_its_own_page", async ({ page, context }) => {
  await openParts(page, ["player"]);
  await context.setOffline(true);
  const errors = watchErrors(page);
  const response = await page.goto("./play/?from=link");
  await expect(page.locator(".stage canvas")).toBeVisible();
  // The play page is served with its own relative `<base>`. The root page, the fallback, carries the
  // scope's absolute URL. The router makes the live element absolute at boot, so the served HTML is read.
  expect(await response?.text()).toContain('<base href="../"');
  expect(errors).toEqual([]);
});

test("a_fetch_of_a_page_folder_is_answered_offline_with_its_page", async ({ page, context }) => {
  await openParts(page, ["player"]);
  await context.setOffline(true);
  const html = await page.evaluate(async () => (await fetch("./play/")).text());
  expect(html).toContain('<base href="../"');
});

/** The player inside the site: its layout at each size, its German, its theme, and its song across pages. */
import { expect, test, type Locator, type Page } from "@playwright/test";

import { CATALOGS } from "../src/i18n/all-catalogs";
import { checkLayout, englishShown, LOCALES, pastSetup, THEMES, WIDTHS } from "./layout-check";

/** The site's top bar. */
const bar = (page: Page) => page.locator(".site-bar-host");

/** The relative luminance of the CSS colour `colour`, from 0 for black to 1 for white. */
function luminance(colour: string): number {
  const numbers = [...colour.matchAll(/[\d.]+/g)].map((m) => Number(m[0]));
  const scale = colour.startsWith("color(") ? 1 : 255;
  const [r, g, b] = numbers.slice(0, 3).map((n) => {
    const c = n / scale;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
}

/** The luminance of `locator`'s background colour. */
async function backgroundOf(locator: Locator): Promise<number> {
  return luminance(await locator.evaluate((node) => getComputedStyle(node).backgroundColor));
}

test("the_player_passes_the_layout_checks", async ({ browser, baseURL }) => {
  // Each width, theme and locale opens the player in a context of its own, and a phone held sideways too.
  test.setTimeout((WIDTHS.length + 1) * THEMES.length * LOCALES.length * 30_000);
  const url = new URL("play/", baseURL).href;
  const flaws = [
    ...(await checkLayout(browser, url, { reducedMotion: true })),
    ...(await checkLayout(browser, url, { widths: [844], height: 390, reducedMotion: true })),
  ];
  expect(flaws).toEqual([]);
});

test("no_english_text_shows_in_german", async ({ page }) => {
  const de = CATALOGS.de.player.shell;
  await page.goto("./de/play/");
  await expect(page.getByLabel(de.topbar.openSong)).toHaveText(de.topbar.demoSong);
  expect(await englishShown(page, "de")).toEqual([]);

  // Each dialog of the bar, and each section of the settings.
  for (const [name, title] of [
    [de.topbar.songs, de.dialog.songs],
    [de.topbar.tracks, de.dialog.tracks],
    [de.topbar.about, de.dialog.about],
  ] as const) {
    await page.getByRole("button", { name, exact: true }).click();
    const dialog = page.getByRole("dialog", { name: title });
    await expect(dialog).toBeVisible();
    expect({ name, english: await englishShown(page, "de") }).toEqual({ name, english: [] });
    await dialog.getByRole("button", { name: de.dialog.close }).click();
    await expect(dialog).toBeHidden();
  }

  await page.getByRole("button", { name: de.topbar.settings, exact: true }).click();
  const sections = page.locator(".settings-nav button");
  const count = await sections.count();
  expect(count).toBeGreaterThan(1);
  for (let i = 0; i < count; i++) {
    await sections.nth(i).click();
    const name = await sections.nth(i).textContent();
    expect({ name, english: await englishShown(page, "de") }).toEqual({ name, english: [] });
  }
});

test("the_player_has_one_bar_opposite_the_piano", async ({ page }) => {
  await page.goto("./play/");
  const canvas = page.locator(".stage canvas");
  await expect(canvas).toBeVisible();
  // The scene fills the window, and the control bar is a part of the site's one floating bar.
  const size = page.viewportSize()!;
  expect(await canvas.boundingBox()).toEqual({ x: 0, y: 0, width: size.width, height: size.height });
  await expect(page.locator(".control-bar")).toHaveCount(1);
  await expect(bar(page).locator(".control-bar")).toBeVisible();
  /** The half of the window that holds the bar's middle. */
  const edge = async () => {
    const box = (await bar(page).boundingBox())!;
    return box.y + box.height / 2 < size.height / 2 ? "top" : "bottom";
  };
  await expect.poll(edge).toBe("top");

  // Reversed, the piano is at the top, so the bar moves to the bottom, and the panel ends above it.
  await page.getByRole("button", { name: "Settings", exact: true }).click();
  const panel = page.locator(".settings-panel");
  const search = panel.getByRole("searchbox", { name: "Search settings" });
  await search.fill("reverse");
  await panel.getByRole("switch", { name: "Reverse the note direction" }).click();
  await expect.poll(edge).toBe("bottom");
  const panelBox = (await panel.boundingBox())!;
  expect(panelBox.y + panelBox.height).toBeLessThanOrEqual((await bar(page).boundingBox())!.y);

  // Raised past the middle, the reversed piano is in the lower half again, so the bar goes back to the top.
  await search.fill("piano height");
  await panel.getByRole("slider", { name: "Piano height on screen (%)" }).fill("80");
  await expect.poll(edge).toBe("top");
});

test("the_player_bar_puts_the_title_beside_the_brand_and_songs_before_the_menu", async ({ page }) => {
  await page.goto("./play/");
  await expect(page.locator(".stage canvas")).toBeVisible();
  await expect(bar(page).getByRole("navigation", { name: "Main" })).toHaveCount(0);
  const x = async (locator: Locator) => (await locator.boundingBox())!.x;
  const brand = await x(bar(page).getByRole("link", { name: "Learn Piano Easy" }));
  const title = await x(page.getByLabel("Open song"));
  const songs = await x(page.getByRole("button", { name: "Songs", exact: true }));
  const settings = await x(page.getByRole("button", { name: "Settings", exact: true }));
  expect(brand).toBeLessThan(title);
  expect(title).toBeLessThan(songs);
  expect(songs).toBeLessThan(settings);
});

test("the_player_keeps_its_song_across_a_visit_to_learn", async ({ page }) => {
  // The setup's modal dialog would cover the bar on `learn/`.
  await pastSetup(page);
  await page.goto("./play/");
  const title = page.getByLabel("Open song");
  await expect(title).toHaveText("Demo song");
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Songs" });
  await dialog.getByRole("searchbox", { name: "Search songs" }).fill("albeniz tango");
  await dialog.getByRole("button", { name: "Tango Andantino" }).click();
  await expect(title).toHaveText("Tango Andantino");

  // The player's bar has no site links, so the way to Learn Piano leads through the home page.
  await bar(page).getByRole("link", { name: "Learn Piano Easy" }).click();
  await expect(page).toHaveURL(/\/$/);
  const nav = bar(page).getByRole("navigation", { name: "Main" });
  await nav.getByRole("link", { name: "Learn Piano" }).click();
  await expect(page).toHaveURL(/\/learn\/$/);
  await expect(page.locator(".stage canvas")).toBeHidden();

  await nav.getByRole("link", { name: "Just Play Piano" }).click();
  await expect(page).toHaveURL(/\/play\/$/);
  await expect(page.getByLabel("Open song")).toHaveText("Tango Andantino");
  await expect(page.locator(".stage canvas")).toBeVisible();
});

test("the_player_follows_the_site_theme", async ({ page }) => {
  await page.goto("./play/");
  await expect(page.locator(".stage canvas")).toBeVisible();
  await page.getByRole("button", { name: "Settings", exact: true }).click();
  const panel = page.locator(".settings-panel");
  await expect(panel).toBeVisible();
  // The control bar draws on the floating bar's glass.
  const controls = bar(page);
  const switchTo = (theme: "Light" | "Dark") => bar(page).getByRole("combobox", { name: "Theme" }).selectOption({ label: theme });

  await switchTo("Light");
  await expect(page.locator("html")).toHaveAttribute("data-site-theme", "light");
  expect(await backgroundOf(panel)).toBeGreaterThan(0.6);
  expect(await backgroundOf(controls)).toBeGreaterThan(0.6);

  await switchTo("Dark");
  await expect(page.locator("html")).toHaveAttribute("data-site-theme", "dark");
  expect(await backgroundOf(panel)).toBeLessThan(0.1);
  expect(await backgroundOf(controls)).toBeLessThan(0.1);

  // The scene keeps its own theme, which the player's setting picks.
  await expect(panel.getByRole("combobox", { name: "Scene theme" })).toHaveValue("dark");
});

test("a_control_shows_the_apps_own_tooltip_and_no_native_one", async ({ page }) => {
  const words = CATALOGS.en.player.bar;
  await page.goto("./play/");
  const tip = page.locator("#tip-float");
  const stop = page.getByRole("button", { name: words.controls.stop, exact: true });
  await stop.hover();
  await expect(tip).toBeVisible();
  await expect(tip).toHaveText(words.actions.stop);
  await expect(stop).toHaveAccessibleDescription(words.actions.stop);
  await page.keyboard.press("Escape");
  await expect(tip).toBeHidden();

  // The tip shows above a modal dialog too, and no element anywhere carries a native tooltip.
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const license = page.getByRole("dialog", { name: "Songs" }).locator(".library-license").first();
  await license.hover();
  await expect(tip).toBeVisible();
  await expect(tip).toHaveText((await license.getAttribute("data-tip"))!);
  expect(await page.locator("body [title]").count()).toBe(0);
});

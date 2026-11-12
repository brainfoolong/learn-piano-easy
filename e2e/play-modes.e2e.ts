/** The play modes at `modes/` in a real browser: a card sets the player up, and its toast undoes the settings. */
import { expect, test, type Page } from "@playwright/test";
import { checkLayout } from "./layout-check";

/** The settings this browser keeps, by id: only those that differ from their defaults. */
function storedSettings(page: Page): Promise<Record<string, unknown>> {
  return page.evaluate(() => JSON.parse(localStorage.getItem("learn-piano-easy.settings") ?? "{}").values ?? {});
}

test("a_mode_card_opens_its_song_with_its_settings_and_undo_restores_them", async ({ page }) => {
  await page.goto("./modes/");
  await page.getByRole("link", { name: "Game mode" }).click();
  await expect(page).toHaveURL(/\/play\/$/);
  await expect(page.getByText("Game mode is on.")).toBeVisible();
  await expect(page.locator(".song-title")).toContainText("In the Hall of the Mountain King");
  expect(await storedSettings(page)).toMatchObject({ enableGameMode: true, showParticles: true, enableKeyFlare: true });

  await page.getByRole("button", { name: "Undo" }).click();
  await expect(page.getByText("Your own settings are back.")).toBeVisible();
  const restored = await storedSettings(page);
  expect(restored.enableGameMode).toBeUndefined();
  expect(restored.showParticles).toBeUndefined();
});

test("play_along_turns_on_wait_mode_and_the_labels", async ({ page }) => {
  await page.goto("./modes/");
  await page.getByRole("link", { name: "Play along" }).click();
  await expect(page.getByText("Play along is on.")).toBeVisible();
  expect(await storedSettings(page)).toMatchObject({
    waitForNotes: true,
    noteLabel: "name,fingering",
    showKeyNamesOnPianoWhite: true,
    showKeyNamesOnPianoBlack: true,
  });
});

test("a_mode_without_a_song_keeps_the_open_one_and_switches_the_player_mode", async ({ page }) => {
  await page.goto("./modes/");
  await page.getByRole("link", { name: "Free jam" }).click();
  await expect(page.getByText("Free jam is on.")).toBeVisible();
  await expect(page.getByRole("group", { name: "Free play" })).toBeVisible();
  expect(await storedSettings(page)).toMatchObject({ playMode: "freePlay", showParticles: true });
});

test("the_page_shows_every_mode_in_its_group", async ({ page }) => {
  await page.goto("./modes/");
  for (const [group, modes] of [
    ["Play for fun", ["Game mode", "Challenge", "Concert"]],
    ["Learn a song", ["Play along", "One hand at a time", "Read the music", "Slow and steady", "Rhythm keeper", "Colour by finger"]],
    ["Train a skill", ["Note trainer", "Free jam", "Chord explorer"]],
  ] as const) {
    const section = page.getByRole("region", { name: group });
    for (const name of modes) await expect(section.getByRole("link", { name })).toBeVisible();
  }
});

test("the_play_modes_page_passes_the_layout_checks", async ({ browser, baseURL }) => {
  test.setTimeout(16 * 20_000);
  const flaws = await checkLayout(browser, new URL("modes/", baseURL).href, { reducedMotion: true, ready: ".play-modes__grid" });
  expect(flaws).toEqual([]);
});

/** The sheet music in a real browser: the learner turns it on, reads its measures, and picks its staves. */
import { expect, test, type Page } from "@playwright/test";

/** Opens the catalog song titled `title` through the Songs dialog. */
async function openSong(page: Page, title: string): Promise<void> {
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const songs = page.getByRole("dialog", { name: "Songs" });
  await songs.getByRole("searchbox", { name: "Search songs" }).fill(title);
  await songs.getByRole("button", { name: title }).click();
  await expect(page.getByLabel("Open song")).toHaveText(title);
}

/** Sets the settings switch named `name`, with the settings panel opened and closed around it. */
async function setSwitch(page: Page, name: string, on: boolean): Promise<void> {
  const settings = page.getByRole("button", { name: "Settings", exact: true });
  await settings.click();
  await page.getByRole("switch", { name }).setChecked(on);
  await settings.click();
}

/** The staves drawn in the sheet's measures, as their track numbers. */
async function stavesShown(page: Page): Promise<string[]> {
  const tracks = await page.locator(".sheet g.chord").evaluateAll((groups) => groups.map((g) => g.getAttribute("data-staff") ?? ""));
  return [...new Set(tracks)].sort();
}

test("the_sheet_shows_the_song_in_measures", async ({ page }) => {
  await page.goto("./play/");
  await openSong(page, "Tango Andantino");
  const sheet = page.getByRole("region", { name: "Sheet music" });
  await expect(sheet).toBeHidden();

  await setSwitch(page, "Show the sheet music", true);
  await expect(sheet).toBeVisible();
  const measures = sheet.locator(".sheet-measure");
  await expect(measures.first()).toBeVisible();
  await expect(sheet.locator(".sheet-number").first()).toHaveText("1");
  expect(await stavesShown(page)).toHaveLength(2);

  // A note under the pointer is named. A ledger line of the same chord may lie over its head.
  await sheet.locator("g.chord").first().locator("g").first().hover({ force: true });
  await expect(page.getByRole("tooltip")).toHaveText(/^[A-G]/);

  // Lines of measures fill the width, and the next line shows below.
  const scrolling = await measures.count();
  await setSwitch(page, "Scroll the sheet with the song", false);
  await expect(sheet.locator(".sheet-page.lines")).toBeAttached();
  await expect.poll(() => measures.count()).toBeGreaterThan(scrolling);

  // A track switched off in the Tracks panel leaves the sheet.
  await page.getByRole("button", { name: "Tracks", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Tracks" });
  await dialog.getByRole("region").first().getByRole("switch", { name: /in the sheet music$/ }).uncheck();
  await page.keyboard.press("Escape");
  await expect.poll(() => stavesShown(page)).toHaveLength(1);

  // Alone, the sheet covers the scene. It fills the window below the floating bar, and the bar stays clear.
  await setSwitch(page, "Sheet music alone", true);
  const box = await sheet.boundingBox();
  const player = await page.locator(".player-view__app").boundingBox();
  const bar = await page.locator(".control-bar").boundingBox();
  if (!box || !player || !bar) throw new Error("The sheet, the player or the bar has no box.");
  const barEnd = bar.y + bar.height;
  expect(box.y).toBeGreaterThanOrEqual(barEnd);
  expect(box.height).toBeGreaterThan((player.y + player.height - barEnd) * 0.9);
});

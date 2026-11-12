/** The tracks panel in a real browser: the learner sets up a song's tracks, and the setup stays with the song. */
import { expect, test, type Page } from "@playwright/test";

/** Opens the catalog song titled `title` through the Songs dialog. */
async function openSong(page: Page, title: string): Promise<void> {
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const songs = page.getByRole("dialog", { name: "Songs" });
  await songs.getByRole("searchbox", { name: "Search songs" }).fill(title);
  await songs.getByRole("button", { name: title }).click();
  await expect(page.getByLabel("Open song")).toHaveText(title);
}

test("a_track_setup_stays_with_its_song", async ({ page }) => {
  await page.goto("./play/");
  await openSong(page, "Tango Andantino");

  await page.getByRole("button", { name: "Tracks", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Tracks" });
  const first = dialog.getByRole("region").first();
  await first.getByRole("switch", { name: /^Mute / }).check();
  await first.getByRole("switch", { name: /^Show / }).uncheck();
  await first.getByRole("combobox", { name: /^Hand of / }).selectOption("none");

  // After a reload the song reopens with its setup.
  await page.reload();
  await expect(page.getByLabel("Open song")).toHaveText("Tango Andantino");
  await page.getByRole("button", { name: "Tracks", exact: true }).click();
  const kept = dialog.getByRole("region").first();
  await expect(kept.getByRole("switch", { name: /^Mute / })).toBeChecked();
  await expect(kept.getByRole("switch", { name: /^Show / })).not.toBeChecked();
  await expect(kept.getByRole("combobox", { name: /^Hand of / })).toHaveValue("none");

  // Another song opens with the defaults.
  await page.keyboard.press("Escape");
  await openSong(page, "Prélude Andantino");
  await page.getByRole("button", { name: "Tracks", exact: true }).click();
  const other = dialog.getByRole("region").first();
  await expect(other.getByRole("switch", { name: /^Mute / })).not.toBeChecked();
  await expect(other.getByRole("switch", { name: /^Show / })).toBeChecked();
});

test("a_key_set_by_the_learner_stays_with_its_song", async ({ page }) => {
  await page.goto("./play/");
  await openSong(page, "Tango Andantino");
  await page.getByRole("button", { name: "Tracks", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Tracks" });
  const key = dialog.getByRole("combobox", { name: "Key of the song" });
  // The first choice names the key found in the notes.
  await expect(key.locator("option").first()).toHaveText(/^From the notes: \S+ (major|minor)$/);
  await key.selectOption({ label: "B♭ major" });

  await page.reload();
  await expect(page.getByLabel("Open song")).toHaveText("Tango Andantino");
  await page.getByRole("button", { name: "Tracks", exact: true }).click();
  await expect(dialog.getByRole("combobox", { name: "Key of the song" })).toHaveValue("10-major");
});

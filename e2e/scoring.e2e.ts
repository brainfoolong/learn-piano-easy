/** Scored mode in a real browser: the panel counts the notes the learner lets pass and the keys they strike. */
import { expect, test } from "@playwright/test";

test("scored_mode_counts_misses_and_strikes", async ({ page }) => {
  await page.goto("./play/");
  const panel = page.getByRole("group", { name: "Score" });
  await expect(panel).toBeHidden();
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("switch", { name: "Score each note" }).check();
  await expect(panel).toBeVisible();
  await expect(panel).toContainText("Misses 0");

  // Nobody plays, so the demo song's notes pass as misses.
  await page.getByRole("button", { name: "Play" }).click();
  await expect(panel).toContainText(/Misses [1-9]/, { timeout: 5000 });

  // A computer key is judged: a hit when a note of its key is due, a mistake otherwise.
  await page.keyboard.press("KeyS");
  await expect(panel).toContainText(/Hits [1-9]|Mistakes [1-9]/);

  await page.getByRole("button", { name: "Pause" }).click();
  await panel.getByRole("button", { name: "Your takes of this song" }).click();
  await expect(page.getByRole("dialog", { name: "Your takes of this song" })).toContainText("No finished takes");
});

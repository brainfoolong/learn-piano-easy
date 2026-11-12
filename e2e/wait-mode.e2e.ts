/** Wait mode in a real browser: the song stops at the learner's first note, and runs once it is off. */
import { expect, test } from "@playwright/test";

test("wait_mode_holds_the_song_at_the_first_note", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();
  const wait = page.getByRole("switch", { name: "Wait for your notes" });
  await wait.check();
  await page.getByRole("button", { name: "Play" }).click();
  await expect(page.getByRole("button", { name: "Pause" })).toBeVisible();

  // The demo song's first notes start at 0, so the song time stays there while nobody plays.
  const time = page.locator(".control-bar .timeline-time").first();
  await page.waitForTimeout(1500);
  await expect(time).toHaveText("0:00");

  await wait.uncheck();
  await expect(time).not.toHaveText("0:00", { timeout: 5000 });
});

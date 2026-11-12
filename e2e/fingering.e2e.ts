/** Fingering in a real browser: a clicked note takes the finger of the digit pressed, and keeps it after a reload. */
import { expect, test, type Locator, type Page } from "@playwright/test";

/**
 * A point in the middle of the demo song's first left-hand note, C2, in the default 1280 by 720 view,
 * with the scene filling the window under the floating bar. With no lead-in the song rests at its first
 * note until Play, so the note stays there, sounding and lit.
 */
const NOTE = { x: 268, y: 440 };

/**
 * Clicks the note and waits for `status` to show. The camera glides into its frame for about a second
 * after a load, so the click waits for it to settle on the note.
 */
async function selectNote(page: Page, status: Locator): Promise<void> {
  await page.waitForTimeout(CAMERA_SETTLE_MS);
  await page.mouse.click(NOTE.x, NOTE.y);
  await expect(status).toBeVisible();
}

/** How long the camera takes to settle after a load, with room to spare, in milliseconds. */
const CAMERA_SETTLE_MS = 2000;

test("a_clicked_note_takes_the_finger_of_the_digit_pressed", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("group", { name: "Note labels" }).getByRole("button", { name: "Finger" }).click();
  // No lead-in, so the song rests with its first note on the keys. The setting survives the reload.
  await page.getByRole("spinbutton", { name: "Time before the first note (s)" }).fill("0");
  await page.keyboard.press("Tab");
  await page.getByRole("button", { name: "Close settings" }).click();

  const status = page.getByRole("status", { name: "Selected note" });
  await expect(status).toBeHidden();
  await selectNote(page, status);
  await expect(status).toContainText("C2:");

  await page.keyboard.press("Digit2");
  await expect(status).toContainText("finger 2, set by you");

  // The finger is stored with the song, so it is there again after a reload.
  await page.reload();
  await selectNote(page, status);
  await expect(status).toContainText("C2: finger 2, set by you");

  await page.keyboard.press("Escape");
  await expect(status).toBeHidden();
});

/** Free play and pitch practice in a real browser: a take saves as a MIDI file, and a round ends in its results. */
import { expect, test } from "@playwright/test";

test("free_play_records_and_saves_a_midi_file", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("combobox", { name: "Mode", exact: true }).selectOption("freePlay");
  await page.getByRole("button", { name: "Close settings" }).click();

  const panel = page.getByRole("group", { name: "Free play" });
  await expect(panel).toBeVisible();
  // The song is set aside, so its controls hide.
  await expect(page.getByRole("button", { name: "Play" })).toBeHidden();
  await expect(panel.getByRole("button", { name: "Save as a MIDI file" })).toBeDisabled();

  await panel.getByRole("button", { name: "Record" }).click();
  await expect(panel).toContainText("Recording");
  await page.keyboard.press("KeyQ");
  await page.keyboard.press("KeyW");
  await panel.getByRole("button", { name: "Stop recording" }).click();
  await expect(panel).toContainText("Recorded 2 notes");

  const download = page.waitForEvent("download");
  await panel.getByRole("button", { name: "Save as a MIDI file" }).click();
  expect((await download).suggestedFilename()).toBe("learn-piano-easy-recording.mid");
});

test("pitch_practice_ends_with_the_mistakes_per_note", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("combobox", { name: "Mode", exact: true }).selectOption("pitchPractice");
  // One note to ask, C4, so the test knows each question.
  await page.getByRole("textbox", { name: "Pitch practice highest note" }).fill("C4");
  await page.keyboard.press("Tab");
  await page.getByRole("button", { name: "Close settings" }).click();

  const panel = page.getByRole("group", { name: "Pitch practice" });
  await expect(panel).toContainText("Play C4");
  await expect(panel).toContainText("Note 1 of 10");

  // W plays D4, a wrong key, and Q plays C4.
  await page.keyboard.press("KeyW");
  await expect(panel).toContainText("Not D4");
  for (let i = 0; i < 10; i++) await page.keyboard.press("KeyQ");

  const results = page.getByRole("dialog", { name: "Pitch practice results" });
  await expect(results).toContainText("1 mistake in 10 notes");
  await expect(results).toContainText("D4");
  await expect(results).toContainText("9 of 10 found at the first try");
});

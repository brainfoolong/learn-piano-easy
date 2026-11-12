/** Chords in a real browser: with chord names on, the canvas names the chord the demo song sounds. */
import { expect, test } from "@playwright/test";

test("chord_names_name_the_sounding_chord", async ({ page }) => {
  await page.goto("./play/");
  const piano = page.getByRole("img", { name: /^Piano, / });
  await expect(piano).not.toHaveAccessibleName(/chord/);

  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("switch", { name: "Chord names" }).check();
  await page.getByRole("button", { name: "Close settings" }).click();

  // The demo song rests at 0, before its first chord, so it plays. It plays C, Am, F and G, each under
  // the pedal for a measure.
  await page.getByRole("button", { name: "Play" }).click();
  await expect(piano).toHaveAccessibleName(/, chord (C|Am|F|G)(\/[A-G])?$/);
});

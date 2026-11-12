/** The learner's input in a real browser: the computer keyboard plays notes, teaches the range, and rebinds. */
import { expect, test } from "@playwright/test";

test("two_computer_keys_teach_the_keyboard_range", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();
  const learn = page.getByRole("button", { name: "Learn the range from your keyboard" });
  await learn.click();
  await expect(learn).toHaveText("Press your lowest key…");

  // I plays C5 and Z plays C3, so the range runs from C3 to C5 whichever came first.
  await page.keyboard.press("KeyI");
  await expect(learn).toHaveText("Now your highest key…");
  await page.keyboard.press("KeyZ");
  await expect(learn).toHaveText("Learn from your keyboard");
  await expect(page.getByRole("img", { name: "Piano, 25 keys, C3 to C5", exact: true })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "First key" })).toHaveValue("C3");
});

test("two_clicks_on_the_piano_teach_the_range", async ({ page }) => {
  // At this size the classic camera puts the white keys' fronts at y = 720, below the black keys.
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("./play/");
  await expect(page.getByRole("img", { name: "Piano, 88 keys, A0 to C8", exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Settings" }).click();
  const learn = page.getByRole("button", { name: "Learn the range from your keyboard" });
  await learn.click();

  // The panel covers the right of the scene, so both clicks land on white keys left of it.
  await page.mouse.click(150, 720);
  await expect(learn).toHaveText("Now your highest key…");
  await page.mouse.click(650, 720);
  await expect(learn).toHaveText("Learn from your keyboard");
  await expect(page.getByRole("textbox", { name: "First key" })).not.toHaveValue("A0");
  await expect(page.getByRole("textbox", { name: "Last key" })).not.toHaveValue("C8");
});

test("a_rebound_key_shows_in_the_key_dialog", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("button", { name: "Change keys" }).click();
  const dialog = page.getByRole("dialog", { name: "Computer keyboard keys" });
  const c2 = dialog.getByRole("button", { name: "Key for C2", exact: true });
  await expect(c2).toHaveText("None");
  await expect(dialog.getByRole("button", { name: "Key for C3", exact: true })).toHaveText("Z");

  await c2.click();
  await expect(c2).toHaveText("Press a key…");
  await page.keyboard.press("KeyZ");
  await expect(c2).toHaveText("Z");
  await expect(dialog.getByRole("button", { name: "Key for C3", exact: true })).toHaveText("None");
});

test("the_midi_devices_wait_for_the_connect_button", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();
  await expect(page.getByRole("button", { name: "Connect MIDI devices" })).toBeVisible();
});

/** The learner's keyboard in a real browser: the piano on screen follows the range the settings hold. */
import { expect, test, type Page } from "@playwright/test";

/** The piano canvas, found by the range its accessible name states. */
function piano(page: Page, label: string) {
  return page.getByRole("img", { name: `Piano, ${label}`, exact: true });
}

async function openSettings(page: Page): Promise<void> {
  await page.getByRole("button", { name: "Settings" }).click();
}

test("choosing_a_preset_redraws_the_piano_with_its_keys", async ({ page }) => {
  await page.goto("./play/");
  await expect(piano(page, "88 keys, A0 to C8")).toBeVisible();

  await openSettings(page);
  const size = page.getByRole("combobox", { name: "Keyboard size" });
  await size.selectOption("61");
  await expect(piano(page, "61 keys, C2 to C7")).toBeVisible();
  await expect(page.getByRole("textbox", { name: "First key" })).toHaveValue("C2");
  await expect(page.getByRole("textbox", { name: "Last key" })).toHaveValue("C7");

  await size.selectOption("25");
  await expect(piano(page, "25 keys, C3 to C5")).toBeVisible();
});

test("a_typed_first_and_last_note_survive_a_reload", async ({ page }) => {
  await page.goto("./play/");
  await openSettings(page);
  const first = page.getByRole("textbox", { name: "First key" });
  const last = page.getByRole("textbox", { name: "Last key" });

  await first.fill("C3");
  await first.press("Enter");
  await last.fill("76");
  await last.press("Enter");
  await expect(piano(page, "29 keys, C3 to E5")).toBeVisible();
  await expect(last).toHaveValue("E5");
  // A range that matches no preset shows as custom.
  await expect(page.getByRole("combobox", { name: "Keyboard size" })).toHaveValue("custom");

  // Text that is no note puts the last value back.
  await first.fill("J2");
  await first.press("Enter");
  await expect(first).toHaveValue("C3");

  await page.reload();
  await expect(piano(page, "29 keys, C3 to E5")).toBeVisible();
  await openSettings(page);
  await expect(page.getByRole("textbox", { name: "First key" })).toHaveValue("C3");
  await expect(page.getByRole("textbox", { name: "Last key" })).toHaveValue("E5");
});

test("octave_buttons_move_the_range", async ({ page }) => {
  await page.goto("./play/");
  await openSettings(page);
  await page.getByRole("combobox", { name: "Keyboard size" }).selectOption("49");
  await expect(piano(page, "49 keys, C2 to C6")).toBeVisible();

  const up = page.getByRole("button", { name: "Octave up" });
  const down = page.getByRole("button", { name: "Octave down" });
  await up.click();
  await expect(piano(page, "49 keys, C3 to C7")).toBeVisible();
  await up.click();
  await expect(piano(page, "49 keys, C4 to C8")).toBeVisible();
  // One more octave would leave the 88 keys.
  await expect(up).toBeDisabled();
  // A shifted preset is still that preset.
  await expect(page.getByRole("combobox", { name: "Keyboard size" })).toHaveValue("49");

  await down.click();
  await expect(piano(page, "49 keys, C3 to C7")).toBeVisible();
  await expect(up).toBeEnabled();
});

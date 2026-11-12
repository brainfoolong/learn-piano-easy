/** Game mode in a real browser: its panel shows, notes played over the song pop up, and turning it off hides it. */
import { expect, test, type Page } from "@playwright/test";

/** Collects every uncaught error and console error the page reports from now on. */
function watchErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
}

test("game_mode_pops_up_judgements_and_hides_when_off", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto("./play/");
  const hud = page.getByRole("group", { name: "Game", exact: true });
  await expect(hud).toBeHidden();

  await page.getByRole("button", { name: "Settings" }).click();
  const toggle = page.getByRole("switch", { name: "Game mode", exact: true });
  await toggle.click();
  await expect(toggle).toBeChecked();
  await page.keyboard.press("Escape");
  await expect(hud).toBeVisible();

  await page.getByRole("button", { name: "Play" }).click();
  await expect(page.getByRole("button", { name: "Pause" })).toBeVisible();
  // Whether each key lands as a hit or a wrong note depends on timing, and either one pops up.
  for (const key of ["q", "e", "t", "q", "e", "t"]) {
    await page.keyboard.down(key);
    await page.waitForTimeout(120);
    await page.keyboard.up(key);
  }
  await expect(page.locator(".game-pop").first()).toBeAttached();

  await page.getByRole("button", { name: "Settings" }).click();
  await toggle.click();
  await expect(toggle).not.toBeChecked();
  await page.keyboard.press("Escape");
  await expect(hud).toBeHidden();
  expect(errors).toEqual([]);
});

test("a_note_wait_mode_waits_long_for_scores_late", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("switch", { name: "Game mode", exact: true }).check();
  await page.getByRole("switch", { name: "Wait for your notes" }).check();
  await page.keyboard.press("Escape");

  await page.getByRole("button", { name: "Play" }).click();
  await expect(page.getByRole("button", { name: "Pause" })).toBeVisible();
  // The demo song's first right-hand note is C4, on the key Q, 2 s in. The song then waits there for over a second.
  await page.waitForTimeout(3500);
  await page.keyboard.down("q");
  await page.keyboard.up("q");
  await expect(page.locator('.game-pop[data-kind="late"]')).toBeAttached();
  await expect(page.locator('.game-pop[data-kind="perfect"]')).toHaveCount(0);
  expect(errors).toEqual([]);
});

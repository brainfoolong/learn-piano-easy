/** The 3D scene in a real browser: its overlays show on request, and its cameras, labels and glow switch cleanly. */
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

test("fps_and_bpm_overlays_show_when_turned_on", async ({ page }) => {
  await page.goto("./play/");
  const stats = page.locator(".overlay-stat");
  await expect(stats.filter({ visible: true })).toHaveCount(0);

  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("switch", { name: "Show frames per second" }).click();
  await page.getByRole("switch", { name: "Show the tempo in BPM" }).click();

  // The demo song plays at 120 BPM, and the frame rate replaces its placeholder within a second.
  await expect(stats.filter({ hasText: "120 BPM" })).toBeVisible();
  await expect(stats.filter({ hasText: /^\d+ FPS$/ })).toBeVisible();
});

test("camera_presets_and_glow_switch_without_errors", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();

  const camera = page.getByRole("combobox", { name: "Camera" });
  for (const preset of ["player", "cinematic", "flat", "classic"]) {
    await camera.selectOption(preset);
    await page.waitForTimeout(300);
  }
  // Every note label at once puts stacked texts in the scene, which the glow draws into its text mask.
  const labels = page.getByRole("group", { name: "Note labels" });
  for (const name of ["Note name", "Computer key", "Finger"]) {
    const chip = labels.getByRole("button", { name });
    await chip.click();
    await expect(chip).toHaveAttribute("aria-pressed", "true");
  }
  // Switching glow off frees the bloom composer, and on builds it again.
  const glow = page.getByRole("combobox", { name: "Glow", exact: true });
  await glow.selectOption("off");
  await page.waitForTimeout(300);
  await glow.selectOption("on");
  await page.waitForTimeout(300);
  await page.getByRole("button", { name: "Return to the camera" }).click();

  await expect(page.locator(".stage canvas")).toBeVisible();
  expect(errors).toEqual([]);
});

test("every_particle_preset_and_the_wave_line_run_without_errors", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();
  for (const name of ["Particles", "Embers", "Stars", "Your own particles", "Wave line above the keys", "Light the lanes of the keys you hold"]) {
    const toggle = page.getByRole("switch", { name, exact: true });
    await toggle.click();
    await expect(toggle).toBeChecked();
  }
  // Sparks are on by default, so all four particle presets now run together.
  await expect(page.getByRole("switch", { name: "Sparks", exact: true })).toBeChecked();
  await page.keyboard.press("Escape");

  // Held keys emit, swell the wave and light their lanes, frame after frame.
  for (const key of ["q", "e", "t"]) await page.keyboard.down(key);
  await page.waitForTimeout(1000);
  for (const key of ["q", "e", "t"]) await page.keyboard.up(key);
  await page.waitForTimeout(300);

  await expect(page.locator(".stage canvas")).toBeVisible();
  expect(errors).toEqual([]);
});

test("flames_burn_under_every_camera_without_errors", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();
  const flames = page.getByRole("switch", { name: "Flames", exact: true });
  await expect(flames).not.toBeChecked();
  await page.getByRole("switch", { name: "Particles", exact: true }).click();
  await flames.click();
  await expect(flames).toBeChecked();
  await page.keyboard.press("Escape");

  // Held keys burn, and let go they die down. A shader that fails to compile logs an error here.
  for (const key of ["q", "e", "t"]) await page.keyboard.down(key);
  await page.waitForTimeout(800);
  for (const key of ["q", "e", "t"]) await page.keyboard.up(key);
  await page.waitForTimeout(500);

  // The demo song burns its own keys, seen through the perspective cameras and the flat one.
  await page.getByRole("button", { name: "Settings" }).click();
  const camera = page.getByRole("combobox", { name: "Camera" });
  for (const preset of ["player", "flat", "classic"]) {
    await camera.selectOption(preset);
    await page.waitForTimeout(400);
  }
  await page.getByRole("switch", { name: "Reverse the note direction" }).click();
  await page.waitForTimeout(400);
  await flames.click();
  await page.waitForTimeout(200);

  await expect(page.locator(".stage canvas")).toBeVisible();
  expect(errors).toEqual([]);
});

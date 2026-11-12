/** The note scroll in a real browser: a drag on the lanes moves the song, and a drag back returns it. */
import { expect, test } from "@playwright/test";

test("dragging_the_lanes_scrolls_the_song_and_back", async ({ page }) => {
  await page.goto("./play/");
  // The song waits its lead-in below 0, where the label reads 0:00 throughout, so the slider's value counts.
  const position = page.getByRole("slider", { name: "Song position" });
  await expect(position).toHaveAttribute("aria-valuenow", "-2");
  // The camera glides into its frame for about a second after a load.
  await page.waitForTimeout(1500);
  const box = await page.locator(".stage canvas").boundingBox();
  if (!box) throw new Error("The scene's canvas has no box.");
  // The canvas fills the window under the floating bar, so the drag starts below the bar's edge.
  const bar = await page.locator(".control-bar").boundingBox();
  if (!bar) throw new Error("The control bar has no box.");
  const x = box.x + box.width / 2;
  const far = bar.y + bar.height + box.height * 0.08;
  const near = far + box.height * 0.35;

  // Pulling the notes down towards the keys moves the song on.
  await page.mouse.move(x, far);
  await page.mouse.down();
  await page.mouse.move(x, near, { steps: 8 });
  await page.mouse.up();
  await expect(position).not.toHaveAttribute("aria-valuenow", "-2");

  // Pushing them back up to where the drag began returns the song to its start.
  await page.mouse.move(x, near);
  await page.mouse.down();
  await page.mouse.move(x, far, { steps: 8 });
  await page.mouse.up();
  await expect(position).toHaveAttribute("aria-valuenow", "-2");
});

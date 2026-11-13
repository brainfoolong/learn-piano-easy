/** The control bar in a real browser: play moves the song, and speed and transpose step as labelled. */
import { expect, type Locator, type Page, test } from "@playwright/test";

/**
 * Clicks `button` in the playing song's bar, which fades after IDLE_MS without a pointer move.
 * Each try moves the pointer to wake the bar, as a learner's would, and a slow page that lets it
 * fade again before the click lands gets another try.
 */
async function clickInPlayingBar(page: Page, button: Locator): Promise<void> {
  let corner = 1;
  await expect(async () => {
    corner = 3 - corner;
    await page.mouse.move(corner, corner);
    await button.click({ timeout: 2000 });
  }).toPass({ timeout: 30_000 });
}

test("pressing_play_moves_the_song_time", async ({ page }) => {
  await page.goto("./play/");
  const bar = page.locator(".control-bar");
  const time = bar.locator(".timeline-time").first();
  await expect(time).toHaveText("0:00");
  await page.getByRole("button", { name: "Play" }).click();
  await expect(page.getByRole("button", { name: "Pause" })).toBeVisible();
  await expect(time).not.toHaveText("0:00", { timeout: 5000 });
  await clickInPlayingBar(page, page.getByRole("button", { name: "Pause" }));
  const paused = await time.textContent();
  await page.waitForTimeout(1200);
  await expect(time).toHaveText(paused ?? "");
});

test("a_song_waits_the_lead_in_before_its_first_note", async ({ page }) => {
  await page.goto("./play/");
  // The demo song's first notes start at 0, so it starts two seconds before them, below 0.
  const position = page.getByRole("slider", { name: "Song position" });
  await expect(position).toHaveAttribute("aria-valuenow", "-2");

  // A new lead-in moves the song still waiting at its start.
  await page.getByRole("button", { name: "Settings" }).click();
  const leadIn = page.getByRole("spinbutton", { name: "Time before the first note (s)" });
  await leadIn.fill("4");
  await page.keyboard.press("Tab");
  await expect(position).toHaveAttribute("aria-valuenow", "-4");
  await page.keyboard.press("Escape");

  // Home returns there after a seek to the end.
  await position.focus();
  await page.keyboard.press("End");
  await page.keyboard.press("Home");
  await expect(position).toHaveAttribute("aria-valuenow", "-4");
});

test("the_expert_button_shows_the_expert_tools_and_a_reload_keeps_it", async ({ page }) => {
  await page.goto("./play/");
  const expert = page.getByRole("button", { name: "Expert", exact: true });
  const speed = page.getByRole("group", { name: "Speed" });
  const fit = page.getByRole("button", { name: "Fit to song" });
  // Off, the bar keeps play, the Loop button and the zoom.
  await expect(expert).toHaveAttribute("aria-pressed", "false");
  await expect(speed).toBeHidden();
  await expect(fit).toBeHidden();
  await expect(page.getByRole("button", { name: "Loop", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Zoom in" })).toBeVisible();

  await expert.click();
  await expect(expert).toHaveAttribute("aria-pressed", "true");
  await expect(speed).toBeVisible();
  await expect(fit).toBeVisible();
  await page.reload();
  await expect(page.getByRole("group", { name: "Speed" })).toBeVisible();

  // Off again, a speed off its default stays in the bar, so the song never plays slower unseen.
  await page.getByRole("button", { name: "Slower" }).click();
  await page.getByRole("button", { name: "Expert", exact: true }).click();
  await expect(page.getByRole("group", { name: "Speed" }).locator("output")).toHaveText("95%");
  await expect(page.getByRole("group", { name: "Transpose" })).toBeHidden();
});

test("the_view_arrows_hide_under_the_flat_camera", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Expert", exact: true }).click();
  const left = page.getByRole("button", { name: "Move view left" });
  await expect(left).toBeVisible();
  await page.getByRole("button", { name: "Settings", exact: true }).click();
  const camera = page.getByRole("combobox", { name: "Camera" });
  await camera.selectOption("flat");
  await expect(left).toBeHidden();
  await expect(page.getByRole("button", { name: "Move view right" })).toBeHidden();
  await camera.selectOption("classic");
  await expect(left).toBeVisible();
});

test("speed_and_transpose_step_from_the_control_bar", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Expert", exact: true }).click();
  const speed = page.getByRole("group", { name: "Speed" }).locator("output");
  await expect(speed).toHaveText("100%");
  await page.getByRole("button", { name: "Slower" }).click();
  await expect(speed).toHaveText("95%");
  const transpose = page.getByRole("group", { name: "Transpose" }).locator("output");
  await page.getByRole("button", { name: "Transpose up" }).click();
  await expect(transpose).toHaveText("+1");
});

test("the_loop_buttons_set_a_loop_shown_on_the_timeline", async ({ page }) => {
  await page.goto("./play/");
  const loop = page.getByRole("button", { name: "Loop", exact: true });
  await expect(loop).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator(".timeline-loop")).toHaveCount(0);
  await loop.click();
  await expect(loop).toHaveAttribute("aria-pressed", "true");
  // The default loop is measures 1 and 2, so the song time waits in the count-in, below 0.
  await expect(page.locator(".timeline-loop")).toHaveCount(1);
  await expect(page.locator(".control-bar .timeline-time").first()).toHaveText("0:00");
  // The loop's measure buttons are expert tools.
  await page.getByRole("button", { name: "Expert", exact: true }).click();
  await page.getByRole("button", { name: "Loop to this bar" }).click();
  await expect(page.locator(".timeline-loop")).toHaveCount(1);
  // A second click repeats the whole song instead, so the loop's mark goes.
  await loop.click();
  const all = page.getByRole("button", { name: "Repeat all", exact: true });
  await expect(all).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".timeline-loop")).toHaveCount(0);
  // A third click stops repeating.
  await all.click();
  await expect(loop).toHaveAttribute("aria-pressed", "false");
  await page.getByRole("button", { name: "Settings" }).click();
  await expect(page.getByRole("switch", { name: "Loop a passage" })).not.toBeChecked();
  await expect(page.getByRole("switch", { name: "Restart the song when it ends" })).not.toBeChecked();
});

test("a_loop_without_a_count_in_repeats_without_stopping", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("spinbutton", { name: "Count-in (beats)" }).fill("0");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Escape");
  // The default loop is measures 1 and 2 of the demo song at 120 BPM, from 0 s to 4 s.
  await page.getByRole("button", { name: "Loop", exact: true }).click();
  await page.getByRole("button", { name: "Play" }).click();

  const position = page.getByRole("slider", { name: "Song position" });
  const seen: number[] = [];
  for (let i = 0; i < 24; i++) {
    seen.push(Number(await position.getAttribute("aria-valuenow")));
    await page.waitForTimeout(250);
  }
  // Six seconds of play stay inside the loop and wrap back at least once, still playing.
  expect(Math.max(...seen)).toBeLessThanOrEqual(4);
  expect(Math.max(...seen)).toBeGreaterThanOrEqual(3);
  expect(seen.some((value, i) => i > 0 && value < seen[i - 1]!)).toBe(true);
  await expect(page.getByRole("button", { name: "Pause" })).toHaveCount(1);
  expect(errors).toEqual([]);
});

test("a_hotkey_plays_and_the_dialog_rebinds_it", async ({ page }) => {
  await page.goto("./play/");
  // A hotkey works once the player is on screen, which its Play button shows.
  await expect(page.getByRole("button", { name: "Play" })).toBeVisible();
  await page.keyboard.press("Space");
  await expect(page.getByRole("button", { name: "Pause" })).toBeVisible();
  await page.keyboard.press("Space");
  await expect(page.getByRole("button", { name: "Play" })).toBeVisible();

  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("button", { name: "Change hotkeys" }).click();
  const dialog = page.getByRole("dialog", { name: "Hotkeys" });
  const key = dialog.getByRole("button", { name: "Key for Play or pause", exact: true });
  await expect(key).toHaveText("Space");
  await key.click();
  await expect(key).toHaveText("Press a key…");
  await page.keyboard.press("p");
  await expect(key).toHaveText("P");
  // Escape never binds, and closes the dialog.
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);

  await page.locator("body").press("p");
  await expect(page.getByRole("button", { name: "Pause" })).toBeVisible();
});

test("closing_a_player_panel_gives_play_the_focus", async ({ page }) => {
  await page.goto("./play/");
  // The Play button reads Pause while the song plays, so the test finds it by its class.
  const play = page.locator(".control-bar .control-play");
  await expect(play).toHaveAccessibleName("Play");

  // The settings panel and a dialog of the top bar each give Play the focus as they close.
  await page.getByRole("button", { name: "Settings", exact: true }).click();
  await expect(play).not.toBeFocused();
  await page.keyboard.press("Escape");
  await expect(play).toBeFocused();
  await page.getByRole("button", { name: "Tracks", exact: true }).click();
  const tracks = page.getByRole("dialog", { name: "Tracks" });
  await tracks.getByRole("button", { name: "Close", exact: true }).click();
  await expect(tracks).toHaveCount(0);
  await expect(play).toBeFocused();

  // Space then plays and pauses, as it did before the panel opened.
  await page.keyboard.press("Space");
  await expect(play).toHaveAccessibleName("Pause");
  await page.keyboard.press("Space");
  await expect(play).toHaveAccessibleName("Play");

  // Picking a song closes the explorer the same way, and Space plays the new song.
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const songs = page.getByRole("dialog", { name: "Songs" });
  await songs.locator(".song-card__open").first().click();
  await expect(songs).toHaveCount(0);
  await expect(page.getByLabel("Open song")).not.toHaveText("Demo song");
  await expect(play).toBeFocused();
  await page.keyboard.press("Space");
  await expect(play).toHaveAccessibleName("Pause");
});

test("stop_returns_the_song_to_its_start", async ({ page }) => {
  await page.goto("./play/");
  // The demo song's first notes start at 0, so a loaded song rests two seconds before them, below 0.
  const position = page.getByRole("slider", { name: "Song position" });
  await expect(position).toHaveAttribute("aria-valuenow", "-2");
  await page.getByRole("button", { name: "Play" }).click();
  await expect.poll(async () => Number(await position.getAttribute("aria-valuenow")), { timeout: 10_000 }).toBeGreaterThan(0);

  await clickInPlayingBar(page, page.getByRole("button", { name: "Stop", exact: true }));
  await expect(page.getByRole("button", { name: "Play" })).toBeVisible();
  await expect(position).toHaveAttribute("aria-valuenow", "-2");
  // The song stays stopped there.
  await page.waitForTimeout(600);
  await expect(position).toHaveAttribute("aria-valuenow", "-2");
});

test("clicking_the_timeline_seeks", async ({ page }) => {
  await page.goto("./play/");
  const track = page.getByRole("slider", { name: "Song position" });
  const box = await track.boundingBox();
  if (box === null) throw new Error("The timeline has no box.");
  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  // The demo song lasts 64 s, so its middle is at about 0:32.
  await expect(page.locator(".control-bar .timeline-time").first()).toHaveText(/^0:3[0-3]$/);
});

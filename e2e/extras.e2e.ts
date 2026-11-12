/** The extras in a real browser: lyrics, markers and the pedal on the lanes, and a background track. */
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

/** A WAV file of `seconds` of a quiet 220 Hz tone, mono 16-bit at 8 kHz. */
function toneWav(seconds: number): Buffer {
  const rate = 8000;
  const samples = Math.round(seconds * rate);
  const wav = Buffer.alloc(44 + samples * 2);
  wav.write("RIFF", 0);
  wav.writeUInt32LE(36 + samples * 2, 4);
  wav.write("WAVEfmt ", 8);
  wav.writeUInt32LE(16, 16);
  wav.writeUInt16LE(1, 20);
  wav.writeUInt16LE(1, 22);
  wav.writeUInt32LE(rate, 24);
  wav.writeUInt32LE(rate * 2, 28);
  wav.writeUInt16LE(2, 32);
  wav.writeUInt16LE(16, 34);
  wav.write("data", 36);
  wav.writeUInt32LE(samples * 2, 40);
  for (let i = 0; i < samples; i++) wav.writeInt16LE(Math.round(Math.sin((2 * Math.PI * 220 * i) / rate) * 3000), 44 + i * 2);
  return wav;
}

test("lyrics_markers_and_the_pedal_show_without_errors", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();
  for (const name of ["Lyrics", "Markers", "Pedal periods", "Pedal down and up", "Pedal channels"]) {
    const toggle = page.getByRole("switch", { name, exact: true });
    await toggle.click();
    await expect(toggle).toBeChecked();
  }
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Play", exact: true }).click();

  // The demo song's first line shows, and its syllables take the sung colour as it plays.
  const lyrics = page.locator(".lyrics");
  await expect(lyrics).toBeVisible();
  await expect(lyrics).toContainText("Watch the falling lights come down");
  await expect(lyrics.locator(".active")).toHaveCount(1);
  await page.waitForTimeout(1000);
  expect(errors).toEqual([]);
});

test("a_background_track_plays_along_without_errors", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();
  const chooser = page.waitForEvent("filechooser");
  await page.getByRole("button", { name: "Choose an audio file" }).click();
  await (await chooser).setFiles({ name: "band.wav", mimeType: "audio/wav", buffer: toneWav(3) });

  await expect(page.getByRole("status").filter({ hasText: "band.wav plays along with the song." })).toBeVisible();
  await expect(page.getByRole("switch", { name: "Play the background track" })).toBeChecked();
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Play", exact: true }).click();
  await page.waitForTimeout(1500);
  await page.getByRole("button", { name: "Pause", exact: true }).click();
  expect(errors).toEqual([]);
});

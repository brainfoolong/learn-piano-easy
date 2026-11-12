/** The piano sounds in a real browser: Play loads the Salamander set, and each note decodes to start on time. */
import { expect, test } from "@playwright/test";

test("play_loads_the_salamander_piano_and_its_notes_start_on_time", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("./play/");
  const loaded = page.waitForResponse((res) => res.url().endsWith("sounds/salamander/acoustic_grand_piano-mp3.json"));
  await page.getByRole("button", { name: "Play" }).click();
  expect((await loaded).ok()).toBe(true);

  // Every note decodes, and its first sound within 40 dB of its peak comes in its first 10 ms. A decoder
  // that kept the MP3 encoder's padding would put it about 26 ms in.
  const notes = await page.evaluate(async () => {
    const map = (await (await fetch("./sounds/salamander/acoustic_grand_piano-mp3.json")).json()) as Record<string, string>;
    const ctx = new OfflineAudioContext(2, 1, 44100);
    const out: { name: string; onsetMs: number; seconds: number }[] = [];
    for (const [name, url] of Object.entries(map)) {
      const bytes = Uint8Array.from(atob(url.slice(url.indexOf(",") + 1)), (c) => c.charCodeAt(0));
      const buffer = await ctx.decodeAudioData(bytes.buffer);
      const left = buffer.getChannelData(0);
      let peak = 0;
      for (const x of left) peak = Math.max(peak, Math.abs(x));
      const onset = left.findIndex((x) => Math.abs(x) >= peak * 0.01);
      out.push({ name, onsetMs: (onset / buffer.sampleRate) * 1000, seconds: buffer.duration });
    }
    return out;
  });
  expect(notes.length).toBe(30);
  for (const note of notes) {
    expect(note.onsetMs, note.name).toBeLessThan(10);
    expect(note.seconds, note.name).toBeGreaterThan(1);
  }
  expect(errors).toEqual([]);
});

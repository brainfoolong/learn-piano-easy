import { join, resolve } from "node:path";

import { readMidi } from "../midi/smf-read";
import { songFromMidi, type Note } from "../midi/song";
import { expect, test } from "../testing";
import { fitPitch, fitSong, songSpan } from "./song-fit";

const songsDir = resolve(import.meta.dir, "..", "..", "public", "songs");

/** A 61-key keyboard, C2 to C7. */
const range = { first: 36, last: 96 };

function note(pitch: number, start: number): Note {
  return { track: 0, channel: 0, pitch, velocity: 80, startTick: start * 480, endTick: start * 480 + 240, start, end: start + 0.5 };
}

test("notes_outside_the_keyboard_are_left_to_the_app", () => {
  const notes = [note(24, 0), note(36, 0), note(60, 1), note(96, 2), note(97, 2), note(108, 3)];
  const fit = fitSong(notes, range, false);
  expect(fit.learner.map((n) => [n.note.pitch, n.key])).toEqual([
    [36, 36],
    [60, 60],
    [96, 96],
  ]);
  expect(fit.app.map((n) => n.pitch)).toEqual([24, 97, 108]);
  expect(fit.app[0]).toBe(notes[0]!);
  expect([fitPitch(35, range, false), fitPitch(97, range, false)]).toEqual([undefined, undefined]);
});

test("folded_notes_land_on_the_nearest_octave_in_range", () => {
  const notes = [note(21, 0), note(35, 0), note(60, 1), note(97, 2), note(108, 3)];
  const fit = fitSong(notes, range, true);
  expect(fit.app).toEqual([]);
  // A0 lands on A2, B1 on B2, C#7 on C#6 and C8 on C7: each one octave step past the nearest edge.
  expect(fit.learner.map((n) => [n.note.pitch, n.key])).toEqual([
    [21, 45],
    [35, 47],
    [60, 60],
    [97, 85],
    [108, 96],
  ]);
  for (const { note: n, key } of fit.learner) {
    expect(Math.abs(n.pitch - key) % 12).toBe(0);
    expect(key >= range.first && key <= range.last).toBe(true);
    // No octave nearer the original pitch is still on the keyboard.
    const nearer = key < n.pitch ? key + 12 : key - 12;
    if (n.pitch !== key) expect(nearer >= range.first && nearer <= range.last).toBe(false);
  }
});

interface CatalogSong {
  file: string;
  low: number;
  high: number;
}

test("every_catalog_song_names_its_lowest_and_highest_note", async () => {
  const catalog = (await Bun.file(join(songsDir, "catalog.json")).json()) as CatalogSong[];
  expect(catalog.length).toBeGreaterThan(0);
  for (const entry of catalog) {
    const bytes = new Uint8Array(await Bun.file(join(songsDir, entry.file)).arrayBuffer());
    const span = songSpan(songFromMidi(readMidi(bytes)));
    expect({ file: entry.file, low: entry.low, high: entry.high }).toEqual({ file: entry.file, low: span!.low, high: span!.high });
  }
}, 60_000);

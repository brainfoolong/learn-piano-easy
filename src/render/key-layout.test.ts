import { join, resolve } from "node:path";

import { readMidi } from "../midi/smf-read";
import { songFromMidi } from "../midi/song";
import { expect, test } from "../testing";
import { FIRST_NOTE, fitRange, isBlack, LAST_NOTE, layoutKeys, MIN_FIT_WHITE_KEYS } from "./key-layout";

const songsDir = resolve(import.meta.dir, "..", "..", "public", "songs");

test("eighty_eight_keys_span_fifty_two_white_keys", () => {
  const layout = layoutKeys();
  expect(layout.keys.length).toBe(88);
  expect(layout.whiteCount).toBe(52);
  expect(layout.width).toBe(52);
  expect(layout.keys.filter((k) => k.black).length).toBe(36);
  expect(layout.key(FIRST_NOTE)).toMatchObject({ x: 0, width: 1 });
  expect(layout.key(LAST_NOTE)).toMatchObject({ x: 51, width: 1 });
  // Middle C is the 24th white key from A0.
  expect(layout.key(60)!.x).toBe(23);
  expect(layout.key(FIRST_NOTE - 1)).toBeUndefined();

  // A black edge widens to its white neighbour.
  expect(layoutKeys({ first: 61, last: 66 }).range).toEqual({ first: 60, last: 67 });
});

test("black_keys_sit_between_their_white_neighbours", () => {
  for (const range of [{ first: FIRST_NOTE, last: LAST_NOTE }, { first: 48, last: 72 }, { first: 65, last: 71 }]) {
    const layout = layoutKeys(range);
    for (const key of layout.keys.filter((k) => k.black)) {
      const below = layout.key(key.pitch - 1)!;
      const above = layout.key(key.pitch + 1)!;
      expect({ pitch: key.pitch, whites: !below.black && !above.black }).toEqual({ pitch: key.pitch, whites: true });
      // It covers the gap between them and stays within their outer edges.
      const gap = below.x + below.width;
      expect(above.x).toBe(gap);
      expect(key.x).toBeLessThan(gap);
      expect(key.x + key.width).toBeGreaterThan(gap);
      expect(key.x).toBeGreaterThan(below.x);
      expect(key.x + key.width).toBeLessThan(above.x + above.width);
      expect(key.center).toBeCloseTo(key.x + key.width / 2, 9);
    }
  }
});

test("fit_range_covers_every_note_of_a_song", async () => {
  expect(fitRange([])).toEqual({ first: FIRST_NOTE, last: LAST_NOTE });

  // A narrow tune widens to two octaves, and its black edges widen to white keys.
  const narrow = fitRange([{ pitch: 61 }, { pitch: 63 }, { pitch: 66 }]);
  expect(isBlack(narrow.first) || isBlack(narrow.last)).toBe(false);
  expect(layoutKeys(narrow).whiteCount).toBe(MIN_FIT_WHITE_KEYS);
  expect(narrow.first).toBeLessThanOrEqual(61);
  expect(narrow.last).toBeGreaterThanOrEqual(66);

  // Near an end of the keyboard, the range widens away from it.
  expect(fitRange([{ pitch: FIRST_NOTE }]).first).toBe(FIRST_NOTE);
  expect(layoutKeys(fitRange([{ pitch: LAST_NOTE }])).whiteCount).toBe(MIN_FIT_WHITE_KEYS);

  // Every library song's playable notes land on a key of its fit range.
  const catalog = (await Bun.file(join(songsDir, "catalog.json")).json()) as { file: string }[];
  for (const entry of catalog) {
    const song = songFromMidi(readMidi(new Uint8Array(await Bun.file(join(songsDir, entry.file)).arrayBuffer())));
    const layout = layoutKeys(fitRange(song.notes));
    const missed = song.notes.filter((n) => n.pitch >= FIRST_NOTE && n.pitch <= LAST_NOTE && !layout.key(n.pitch));
    expect({ file: entry.file, missed: missed.length }).toEqual({ file: entry.file, missed: 0 });
  }
  // It reads every library song, as `src/midi/library-songs.test.ts` does, so a busy suite needs the time.
}, 60_000);

import { join } from "node:path";

import { autoHands } from "../src/input/wait-mode";
import { readMidi } from "../src/midi/smf-read";
import { writeMidi } from "../src/midi/smf-write";
import { songFromMidi } from "../src/midi/song";
import { expect, test } from "../src/testing";
import { readCatalog, songsDir } from "./catalog";
import { originalRow, originalSongs, originalsFolder } from "./make-original-songs";
import { twoHandMidi } from "./song-notation";

test("every_original_piece_parses_with_two_hands", async () => {
  expect(originalSongs.length).toBe(10);
  const catalog = await readCatalog();
  const license = await Bun.file(join(songsDir, originalsFolder, "LICENSE.md")).text();
  for (const song of originalSongs) {
    const bytes = writeMidi(twoHandMidi(song));
    // The file in the tree is the one the generator writes now.
    const stored = new Uint8Array(await Bun.file(join(songsDir, originalsFolder, song.file)).arrayBuffer());
    expect({ file: song.file, same: Buffer.from(stored).equals(Buffer.from(bytes)) }).toEqual({ file: song.file, same: true });

    const file = readMidi(stored);
    expect(file.problems).toEqual([]);
    const parsed = songFromMidi(file);
    expect(parsed.tracks.length).toBe(2);
    expect(parsed.tracks.every((track) => track.notes.length > 0)).toBe(true);
    expect({ file: song.file, hands: autoHands(parsed) }).toEqual({ file: song.file, hands: ["right", "left"] });
    expect(catalog).toContainEqual(originalRow(song, bytes));
    expect(license).toContain(`| \`${song.file}\` |`);
  }
});

test("a_chord_and_split_beats_write_their_notes", () => {
  const song = { title: "a song", file: "a.mid", difficulty: 1, bpm: 120, numerator: 2, denominator: 4, steps: 2 };
  const parsed = songFromMidi(readMidi(writeMidi(twoHandMidi({ ...song, right: "C5+E5:2 G5:1 r:1", left: "C3:4" }))));
  const right = parsed.tracks[0]!.notes.map((note) => [note.pitch, note.startTick]);
  expect(right).toEqual([
    [72, 0],
    [76, 0],
    [79, 480],
  ]);
});

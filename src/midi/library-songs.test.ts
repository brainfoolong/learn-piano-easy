import { join, resolve } from "node:path";

import { expect, test } from "../testing";
import { readMidi } from "./smf-read";
import { songFromMidi } from "./song";

const songsDir = resolve(import.meta.dir, "..", "..", "public", "songs");

interface CatalogSong {
  composer: string;
  piece: string | null;
  title: string;
  file: string;
  difficulty: number;
  license: string;
}

test("every_library_song_parses_with_notes_and_a_duration", async () => {
  const catalog = (await Bun.file(join(songsDir, "catalog.json")).json()) as CatalogSong[];
  expect(catalog.length).toBe(657);
  for (const entry of catalog) {
    expect({ file: entry.file, difficulty: entry.difficulty >= 1 && entry.difficulty <= 10 }).toEqual({
      file: entry.file,
      difficulty: true,
    });
    const bytes = new Uint8Array(await Bun.file(join(songsDir, entry.file)).arrayBuffer());
    const song = songFromMidi(readMidi(bytes));
    expect({
      file: entry.file,
      problems: song.problems,
      notes: song.notes.length > 0,
      duration: song.duration > 0 && Number.isFinite(song.duration),
      measures: song.tempoMap.positionAtTick(song.endTick).measure > 0,
    }).toEqual({ file: entry.file, problems: [], notes: true, duration: true, measures: true });
  }
}, 60_000);

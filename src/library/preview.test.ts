import { expect, test } from "../testing";
import { type Note, type Song, type SongTrack, songLength } from "../midi/song";
import { createMeasurer, excerpt } from "./preview";

function note(track: number, pitch: number, start: number, end: number): Note {
  return { track, channel: track === 9 ? 9 : 0, pitch, velocity: 80, startTick: 0, endTick: 0, start, end };
}

function track(index: number, notes: Note[], percussion = false): SongTrack {
  return { index, name: "", program: 0, percussion, channels: [0], notes, pedals: [] };
}

function songOf(tracks: SongTrack[]): Song {
  const notes = tracks.flatMap((entry) => entry.notes).sort((a, b) => a.start - b.start);
  return { tracks, notes, keySignatures: [], markers: [], lyrics: [], endTick: 0, duration: 99, problems: [] } as unknown as Song;
}

test("an_excerpt_starts_at_the_first_note_and_cuts_what_runs_past_its_end", () => {
  const melody = track(0, [note(0, 60, 4, 5), note(0, 62, 9, 30), note(0, 64, 24, 25)]);
  melody.pedals.push({ track: 0, channel: 0, startTick: 0, endTick: 0, start: 2, end: 40 });
  const drums = track(1, [note(1, 36, 0, 1)], true);
  const opening = excerpt(songOf([melody, drums]), 10);
  expect(opening.song.tracks).toHaveLength(1);
  expect(opening.song.notes.map((n) => [n.pitch, n.start, n.end])).toEqual([
    [60, 0, 1],
    [62, 5, 10],
  ]);
  expect(opening.song.tracks[0]!.pedals.map((p) => [p.start, p.end])).toEqual([[0, 10]]);
  expect(opening.seconds).toBe(10);
});

test("an_excerpt_of_a_short_or_an_empty_song_is_as_long_as_its_notes", () => {
  expect(excerpt(songOf([track(0, [note(0, 60, 1, 3)])]), 20).seconds).toBe(2);
  expect(excerpt(songOf([track(0, [])]), 20).seconds).toBe(0);
});

test("a_songs_length_is_the_end_of_its_last_note", () => {
  expect(songLength(songOf([track(0, [note(0, 60, 0, 7), note(0, 62, 3, 5)])]))).toBe(7);
});

test("the_measurer_reads_each_song_once_and_skips_a_file_that_fails", async () => {
  const reads: string[] = [];
  let idle: () => void = () => {};
  const done = new Promise<void>((resolve) => (idle = resolve));
  const measurer = createMeasurer(() => {}, idle);
  const failing = (id: string) => () => {
    reads.push(id);
    return Promise.reject(new Error("offline"));
  };
  measurer.want("a", failing("a"));
  measurer.want("a", failing("a"));
  measurer.want("b", failing("b"));
  expect(measurer.waiting).toBe(2);
  await done;
  expect(reads).toEqual(["a", "b"]);
  expect(measurer.waiting).toBe(0);
  // A file that failed may be asked for again.
  measurer.want("a", failing("a"));
  expect(reads).toEqual(["a", "b", "a"]);
});

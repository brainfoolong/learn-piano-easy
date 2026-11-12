import { expect, test } from "../testing";
import { MAX_PLAYED, SONG_MEMORY_KEY, SongMemory } from "./song-memory";

function storage(initial: Record<string, string> = {}) {
  const values = new Map(Object.entries(initial));
  return { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => void values.set(key, value) };
}

test("the_memory_comes_back_from_its_storage", () => {
  const kept = storage();
  const memory = new SongMemory(kept);
  memory.setFavourite("catalog:a.mid", true);
  memory.setFavourite("catalog:b.mid", true);
  memory.setFavourite("catalog:b.mid", false);
  memory.play("catalog:a.mid", 100);
  memory.play("upload-1", 200);
  memory.setLength("catalog:a.mid", 61.4);
  memory.setSkills("a.mid", ["pedal"]);
  memory.flush();

  const again = new SongMemory(kept);
  expect(again.favourites).toEqual(["catalog:a.mid"]);
  expect(again.isFavourite("catalog:b.mid")).toBe(false);
  expect(again.played).toEqual(["upload-1", "catalog:a.mid"]);
  expect(again.playedAt("catalog:a.mid")).toBe(100);
  expect(again.length("catalog:a.mid")).toBe(61);
  expect(again.length("upload-1")).toBeUndefined();
  expect(again.skills("a.mid")).toEqual(["pedal"]);
});

test("only_the_latest_plays_are_kept", () => {
  const memory = new SongMemory(null);
  for (let i = 0; i < MAX_PLAYED + 5; i++) memory.play(`song-${i}`, i);
  expect(memory.played).toHaveLength(MAX_PLAYED);
  expect(memory.played[0]).toBe(`song-${MAX_PLAYED + 4}`);
  expect(memory.playedAt("song-0")).toBeUndefined();
});

test("a_stored_value_of_the_wrong_shape_is_dropped", () => {
  const broken = storage({ [SONG_MEMORY_KEY]: JSON.stringify({ favourites: "all", played: { a: "soon" }, lengths: { a: 30 } }) });
  const memory = new SongMemory(broken);
  expect(memory.favourites).toEqual([]);
  expect(memory.played).toEqual([]);
  expect(memory.length("a")).toBe(30);
  expect(new SongMemory(storage({ [SONG_MEMORY_KEY]: "not json" })).favourites).toEqual([]);
});

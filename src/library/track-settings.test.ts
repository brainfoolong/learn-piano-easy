import type { Note, Song } from "../midi/song";
import type { StorageLike } from "../settings/store";
import { expect, test } from "../testing";
import { builtInDefault, TrackState, TrackStore } from "./track-settings";

function note(track: number, pitch: number, beat: number): Note {
  return { track, channel: track, pitch, velocity: 80, startTick: beat * 480, endTick: beat * 480 + 240, start: beat, end: beat + 0.5 };
}

/** A song of one pitched track per entry of `pitches`, each track playing its pitches one beat apart. */
function song(...pitches: number[][]): Song {
  const tracks = pitches.map((list, index) => ({
    index,
    name: "",
    program: 0,
    percussion: false,
    channels: [index],
    notes: list.map((pitch, beat) => note(index, pitch, beat)),
    pedals: [],
  }));
  const notes = tracks.flatMap((track) => track.notes).sort((a, b) => a.start - b.start || a.pitch - b.pitch);
  return { tempoMap: undefined as never, tracks, notes, keySignatures: [], markers: [], lyrics: [], endTick: 4 * 480, duration: 4, problems: [] };
}

/** A `localStorage` stand-in that keeps its items in a map. */
function memoryStorage(): StorageLike {
  const items = new Map<string, string>();
  return { getItem: (key) => items.get(key) ?? null, setItem: (key, value) => void items.set(key, value) };
}

test("a_new_song_takes_the_track_defaults", () => {
  const storage = memoryStorage();
  const fresh = new TrackStore(storage).tracksFor("catalog:a.mid", song([48, 50], [72, 74]));
  expect(fresh).toEqual([
    { ...builtInDefault(0), hand: "left" },
    { ...builtInDefault(1), hand: "right" },
  ]);

  // The learner makes one song's look the defaults, and a new song takes it by track index.
  const state = new TrackState(new TrackStore(storage));
  state.load("catalog:a.mid", song([48, 50], [72, 74]));
  state.set(1, { color: "#ff0000ff", volume: 0.5, hand: "none" });
  state.makeDefaults();

  // The hands still follow the new song's notes, and a track past the defaults takes the built-in one.
  const next = new TrackStore(storage).tracksFor("upload-1", song([80], [40], [60]));
  expect(next).toEqual([
    { ...builtInDefault(0), hand: "right" },
    { ...builtInDefault(1), color: "#ff0000ff", volume: 0.5, hand: "left" },
    { ...builtInDefault(2), hand: "none" },
  ]);
});

test("a_changed_track_keeps_its_setting_on_reopen", () => {
  const storage = memoryStorage();
  const piece = song([48, 50], [72, 74]);
  const first = new TrackState(new TrackStore(storage));
  first.load("upload-1", piece);
  first.set(0, { muted: true, visible: false, hand: "split" });

  // After a reload, the song opens with its changes, and another song keeps the defaults.
  const store = new TrackStore(storage);
  const reopened = new TrackState(store);
  reopened.load("upload-1", piece);
  expect(reopened.tracks[0]).toEqual({ ...builtInDefault(0), muted: true, visible: false, hand: "split" });
  expect(reopened.tracks[1]).toEqual({ ...builtInDefault(1), hand: "right" });
  expect(reopened.hands()).toEqual(["split", "right"]);
  expect(store.tracksFor("catalog:other.mid", piece)[0]).toEqual({ ...builtInDefault(0), hand: "left" });

  // A malformed field falls back to its default, and a reset forgets the song's changes.
  storage.setItem("learn-piano-easy.tracks", JSON.stringify({ "upload-1": [{ muted: "yes", hand: "feet", volume: 3 }] }));
  expect(new TrackStore(storage).tracksFor("upload-1", piece)[0]).toEqual({ ...builtInDefault(0), hand: "left" });
  reopened.reset();
  expect(reopened.tracks[0]).toEqual({ ...builtInDefault(0), hand: "left" });
});

test("a_song_keeps_the_key_the_learner_set", () => {
  const storage = memoryStorage();
  const piece = song([48, 50], [72, 74]);
  const state = new TrackState(new TrackStore(storage));
  state.load("upload-1", piece);
  expect(state.key).toBeUndefined();
  state.setKey({ tonic: 10, mode: "major" });

  // After a reload the song keeps its key, and another song has none.
  const store = new TrackStore(storage);
  const reopened = new TrackState(store);
  reopened.load("upload-1", piece);
  expect(reopened.key).toEqual({ tonic: 10, mode: "major" });
  expect(store.keyFor("upload-2")).toBeUndefined();

  // A malformed key reads as none, and a reset hands the key back to detection.
  storage.setItem("learn-piano-easy.songKeys", JSON.stringify({ "upload-1": { tonic: 12, mode: "major" } }));
  expect(new TrackStore(storage).keyFor("upload-1")).toBeUndefined();
  reopened.reset();
  expect(reopened.key).toBeUndefined();
});

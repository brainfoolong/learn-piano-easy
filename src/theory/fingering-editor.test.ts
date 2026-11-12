import type { TrackHand } from "../input/wait-mode";
import type { KeyPress } from "../play/hotkeys";
import type { Note, Song } from "../midi/song";
import type { StorageLike } from "../settings/store";
import { expect, test } from "../testing";
import { FingerStore, FingeringEditor } from "./fingering-editor";

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
  return { tempoMap: undefined as never, tracks, notes, keySignatures: [], markers: [], lyrics: [], endTick: 8 * 480, duration: 8, problems: [] };
}

function memoryStorage(): StorageLike {
  const items = new Map<string, string>();
  return { getItem: (key) => items.get(key) ?? null, setItem: (key, value) => void items.set(key, value) };
}

function key(code: string): KeyPress {
  return { code, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, target: null };
}

const SCALE = [60, 62, 64, 65, 67, 69, 71, 72];

test("a_finger_set_by_hand_is_kept_and_survives_a_reload", () => {
  const storage = memoryStorage();
  const hands = { hands: (): TrackHand[] => ["right", "none"] };
  const piece = song(SCALE, [36, 38]);
  const editor = new FingeringEditor(new FingerStore(storage), hands);
  editor.load("catalog:scale.mid", piece);
  const right = piece.tracks[0]!.notes;
  expect(right.map((each) => editor.fingerOf(each))).toEqual([1, 2, 3, 1, 2, 3, 4, 5]);
  expect(editor.fingerOf(piece.tracks[1]!.notes[0]!)).toBeUndefined();

  expect(editor.press(key("Digit3"))).toBe(false);
  editor.select(right[0]);
  expect(editor.press(key("Digit2"))).toBe(true);
  expect(editor.fingerOf(right[0]!)).toBe(2);
  expect(editor.isSet(right[0]!)).toBe(true);

  const reopened = new FingeringEditor(new FingerStore(storage), hands);
  reopened.load("catalog:scale.mid", piece);
  expect(reopened.fingerOf(right[0]!)).toBe(2);
  expect(reopened.isSet(right[0]!)).toBe(true);

  reopened.select(right[0]);
  expect(reopened.press(key("Backspace"))).toBe(true);
  expect(reopened.fingerOf(right[0]!)).toBe(1);
  expect(reopened.press(key("Escape"))).toBe(true);
  expect(reopened.selected).toBeUndefined();
  expect(storage.getItem("learn-piano-easy.fingers")).toBe("{}");
});

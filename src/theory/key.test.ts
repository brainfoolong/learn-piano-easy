import { parsePitch } from "../keyboard/range";
import type { Note, Song } from "../midi/song";
import { TempoMap } from "../midi/tempo-map";
import { expect, test } from "../testing";
import { detectKey, type Key, keyAt, keyName, keySections, readKey, songKey } from "./key";
import { noteName, pitchClassName } from "./note-names";

const BEAT = 480;

/** Notes played one after another, each `beats[i]` beats long, on track `track`, from beat `from`. */
function melody(pitches: number[], beats: number[], from = 0, track = 0): Note[] {
  let tick = from * BEAT;
  return pitches.map((pitch, i) => {
    const length = (beats[i % beats.length] ?? 1) * BEAT;
    const note = { track, channel: track, pitch, velocity: 80, startTick: tick, endTick: tick + length, start: tick / BEAT / 2, end: (tick + length) / BEAT / 2 };
    tick += length;
    return note;
  });
}

/** A song in 4/4 of `notes`, with track 1 a percussion track when `drums` holds notes. */
function song(notes: Note[], drums: Note[] = []): Song {
  const all = [...notes, ...drums].sort((a, b) => a.startTick - b.startTick || a.pitch - b.pitch);
  const endTick = Math.max(...all.map((note) => note.endTick));
  const track = (index: number, list: Note[], percussion: boolean) => ({ index, name: "", program: 0, percussion, channels: [percussion ? 9 : 0], notes: list, pedals: [] });
  return {
    tempoMap: TempoMap.fromInputs({ division: { kind: "ticks", ticksPerBeat: BEAT }, tempos: [], signatures: [] }),
    tracks: [track(0, notes, false), track(1, drums, true)],
    notes: all,
    keySignatures: [],
    markers: [],
    lyrics: [],
    endTick,
    duration: endTick / BEAT / 2,
    problems: [],
  };
}

const C_MAJOR_SCALE = [60, 62, 64, 65, 67, 69, 71, 72, 71, 69, 67, 65, 64, 62, 60];
const C_MAJOR: Key = { tonic: 0, mode: "major" };
const A_MINOR: Key = { tonic: 9, mode: "minor" };

test("c_major_scale_is_found_as_c_major", () => {
  // The tonic is held at both ends, as a scale exercise does.
  expect(detectKey(melody(C_MAJOR_SCALE, [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2]))?.key).toEqual(C_MAJOR);
  expect(songKey(song(melody(C_MAJOR_SCALE, [1])))).toEqual(C_MAJOR);
});

test("a_minor_melody_is_found_as_a_minor", () => {
  // A, C and E lead, and G♯ leans on the tonic, as a melody in A minor does.
  const tune = [69, 72, 76, 74, 72, 71, 68, 69, 64, 69, 71, 72, 74, 71, 68, 69];
  const beats = [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 3];
  expect(detectKey(melody(tune, beats))?.key).toEqual(A_MINOR);
  expect(keyName(A_MINOR)).toBe("A minor");
});

test("solfege_names_follow_the_letters", () => {
  const solfege = { system: "solfege" } as const;
  expect([60, 62, 64, 65, 67, 69, 71].map((pitch) => noteName(pitch, solfege))).toEqual(["Do4", "Re4", "Mi4", "Fa4", "Sol4", "La4", "Si4"]);
  for (let pitch = 0; pitch < 128; pitch++) {
    for (const accidentals of ["sharps", "flats"] as const) {
      const letters = noteName(pitch, { accidentals });
      const syllable = noteName(pitch, { ...solfege, accidentals });
      const letterOf: Record<string, string> = { C: "Do", D: "Re", E: "Mi", F: "Fa", G: "Sol", A: "La", B: "Si" };
      expect(syllable).toBe(letterOf[letters[0]!] + letters.slice(1));
    }
  }
  expect([noteName(61), noteName(61, { accidentals: "flats" }), noteName(70, { ...solfege, accidentals: "flats", octave: false })]).toEqual(["C♯4", "D♭4", "Si♭"]);
  expect([noteName(21), noteName(108), noteName(0)]).toEqual(["A0", "C8", "C-1"]);
});

test("german_names_call_b_an_h", () => {
  const de = { locale: "de" } as const;
  expect([60, 62, 64, 65, 67, 69, 71].map((pitch) => noteName(pitch, de))).toEqual(["C4", "D4", "E4", "F4", "G4", "A4", "H4"]);
  expect([noteName(70, { ...de, accidentals: "flats" }), noteName(70, de), noteName(72, de)]).toEqual(["B4", "A♯4", "C5"]);
  expect([pitchClassName(11, de), pitchClassName(11, { locale: "en" }), pitchClassName(11, { ...de, system: "solfege" })]).toEqual(["H", "B", "Si"]);
  expect(parsePitch("H3")).toBe(parsePitch("B3"));
});

test("a_key_spells_its_tonic_as_its_signature_does", () => {
  expect(keyName({ tonic: 10, mode: "major" })).toBe("B♭ major");
  expect(keyName({ tonic: 6, mode: "minor" })).toBe("F♯ minor");
  expect(keyName({ tonic: 2, mode: "minor" }, { system: "solfege" })).toBe("Re minor");
  expect(pitchClassName(-1)).toBe("B");
});

test("each_section_of_eight_measures_finds_its_own_key_and_drums_are_ignored", () => {
  // Eight measures of C major, then eight of the same scale moved up a fourth to F major.
  const c = melody([...C_MAJOR_SCALE, 60], [2], 0);
  const f = melody([...C_MAJOR_SCALE, 60].map((pitch) => pitch + 5), [2], 32);
  const drums = melody(new Array(64).fill(42), [1], 0, 1);
  const sections = keySections(song([...c, ...f], drums));
  expect(sections.map((section) => [section.startTick, section.endTick])).toEqual([[0, 32 * BEAT], [32 * BEAT, 64 * BEAT]]);
  expect(sections.map((section) => section.key)).toEqual([C_MAJOR, { tonic: 5, mode: "major" }]);
  expect(keyAt(sections, 40 * BEAT)).toEqual({ tonic: 5, mode: "major" });
});

test("an_override_replaces_the_song_key_and_every_section", () => {
  const tune = song(melody(C_MAJOR_SCALE, [4]));
  expect(songKey(tune, A_MINOR)).toEqual(A_MINOR);
  expect(keySections(tune, A_MINOR)).toEqual([{ startTick: 0, endTick: tune.endTick, key: A_MINOR }]);
  expect([readKey({ tonic: 9, mode: "minor" }), readKey({ tonic: 12, mode: "major" }), readKey("Am")]).toEqual([A_MINOR, undefined, undefined]);
});

test("a_song_without_notes_has_no_key", () => {
  expect(detectKey([])).toBeUndefined();
});

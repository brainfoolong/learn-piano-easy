import type { Note, Song } from "../midi/song";
import { TempoMap } from "../midi/tempo-map";
import { expect, test } from "../testing";
import { notePages, notesPdf, type NotePagesOptions } from "./pdf";

/** A song of one piano track holding `notes`, each given as pitch, start and end in seconds. */
function song(...notes: [number, number, number][]): Song {
  const tempoMap = new TempoMap({ kind: "ticks", ticksPerBeat: 480 }, [], []);
  const full: Note[] = notes.map(([pitch, start, end]) => ({
    track: 0,
    channel: 0,
    pitch,
    velocity: 100,
    startTick: start * 960,
    endTick: end * 960,
    start,
    end,
  }));
  const track = { index: 0, name: "", program: 0, percussion: false, channels: [0], notes: full, pedals: [] };
  const endTick = Math.max(0, ...full.map((n) => n.endTick));
  return {
    tempoMap,
    tracks: [track],
    notes: full,
    keySignatures: [],
    markers: [],
    lyrics: [],
    endTick,
    duration: tempoMap.ticksToSeconds(endTick),
    problems: [],
  };
}

const OPTIONS: NotePagesOptions = {
  title: "Test (song) \\ é ♪",
  secondsPerPage: 5,
  background: false,
  tracks: [{ visible: true, color: "#4fc3f7ff" }],
  colors: { lane: "#101624ff", blackLane: "#0a0e18ff", divider: "#2a3550ff", whiteKey: "#f4f4f0ff", blackKey: "#161616ff" },
};

/** The file's bytes as text, one character per byte. */
function latin1(bytes: Uint8Array): string {
  return String.fromCharCode(...bytes);
}

test("pdf_has_a_valid_cross_reference_table", () => {
  for (const background of [false, true]) {
    const text = latin1(notesPdf(song([60, 0, 1], [61, 4, 7], [72, 8, 9]), { ...OPTIONS, background }));
    expect(text.startsWith("%PDF-1.4\n")).toBe(true);
    expect(text.endsWith("%%EOF\n")).toBe(true);

    // startxref points at the table, and the table lists every object at its byte offset.
    const xref = Number(/startxref\n(\d+)\n%%EOF\n$/.exec(text)?.[1]);
    expect(text.slice(xref, xref + 5)).toBe("xref\n");
    const [, first, size] = /^xref\n(\d+) (\d+)\n/.exec(text.slice(xref)) ?? [];
    expect(first).toBe("0");
    expect(Number(/\/Size (\d+)/.exec(text)?.[1])).toBe(Number(size));
    const entries = text.slice(xref).split("\n").slice(2, 2 + Number(size));
    expect(entries[0]).toBe("0000000000 65535 f ");
    for (const [id, entry] of entries.entries()) {
      expect(entry).toHaveLength(19);
      if (id === 0) continue;
      const offset = Number(entry.slice(0, 10));
      expect(text.slice(offset, offset + `${id} 0 obj\n`.length)).toBe(`${id} 0 obj\n`);
    }

    // Each stream's length is its byte count, and the title's brackets are escaped.
    for (const match of text.matchAll(/<< \/Length (\d+) >>\nstream\n/g)) {
      const start = match.index + match[0].length;
      expect(text.slice(start + Number(match[1]), start + Number(match[1]) + 10)).toBe("\nendstream");
    }
    expect(text).toContain("/Title (Test \\(song\\) \\\\ \xe9 ?)");
  }
});

test("pdf_holds_one_page_per_screen", () => {
  // 12 s at 5 s a page is three pages, and the note across 4 s to 7 s shows on the first two.
  const twelve = song([60, 0, 1], [61, 4, 7], [72, 11, 12]);
  const text = latin1(notesPdf(twelve, OPTIONS));
  expect(text.match(/\/Type \/Page /g)).toHaveLength(3);
  expect(text).toContain("/Count 3");

  const pages = notePages(twelve, OPTIONS);
  expect(pages).toHaveLength(3);
  const notes = pages.map((page) => page.rects.filter((r) => r.fill[0] === 0x4f / 255).length);
  expect(notes).toEqual([2, 1, 1]);
  expect(pages[1]!.texts[0]!.text).toContain("0:05 to 0:10   page 2 of 3");

  // A hidden track draws no note, and a song of exactly one screen takes one page.
  const hidden = notePages(twelve, { ...OPTIONS, tracks: [{ visible: false, color: "#4fc3f7ff" }] });
  expect(hidden.every((page) => page.rects.every((r) => r.fill[0] !== 0x4f / 255))).toBe(true);
  expect(notePages(song([60, 0, 5]), OPTIONS)).toHaveLength(1);
});

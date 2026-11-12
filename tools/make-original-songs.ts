/**
 * Our own modern pieces: writes ten original piano pieces into `public/songs/originals/`, and their
 * rows at the head of `public/songs/catalog.json`.
 *
 * Each piece is written in the notation of `tools/song-notation.ts` and goes through its
 * `twoHandMidi`, so a bar that does not fill its time throws here too. The helpers below spell out the
 * accompaniment patterns a piece repeats, such as a broken chord or a stride bar.
 *
 * Decisions, and what each costs:
 * - The pieces are our own compositions under the MIT License. OpenGameArt's `robots.txt` refuses AI
 *   agents by name, so no tool of ours fetches it, and these pieces fill the modern side instead.
 * - They are styles a learner meets in modern music: a pop ballad, a waltz, a twelve-bar blues, a
 *   minimalist study, a toccata and a stride. Each is short, from 16 to 24 bars.
 * - The difficulties are our judgement, from 2 to 5.5, between our first songs and the classics.
 * - The rows replace every catalog row under `originals/` and come first, so the library lists them
 *   first. The other rows keep their order, and every song tool keeps this one.
 *
 * `bun tools/make-original-songs.ts`. It needs no network, and the app never runs it.
 */
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

import { writeMidi } from "../src/midi/smf-write";
import { readCatalog, songsDir, withSpan, writeCatalog, type CatalogSong } from "./catalog";
import { twoHandMidi, type TwoHandSong } from "./song-notation";

/** The folder of our own pieces, relative to `public/songs/`. */
export const originalsFolder = "originals";

/** The license of every original piece. */
export const originalsLicense = "MIT";

/** Who every original piece is credited to. */
export const originalsCredit = "Composed by the learn-piano-easy authors";

/** The composer every original piece is listed under. */
export const originalsComposer = "learn-piano-easy";

/** The work every original piece is grouped in. */
export const originalsPiece = "Modern pieces";

/** Each name of `names` as a token `length` units long, so `run("C3 G3", 1)` is `"C3:1 G3:1"`. */
function run(names: string, length: number): string {
  return names
    .split(" ")
    .map((name) => `${name}:${length}`)
    .join(" ");
}

/** A broken chord of eight units: low, mid, high, top, high, mid, high, mid. */
function flow(low: string, mid: string, high: string, top: string): string {
  return run(`${low} ${mid} ${high} ${top} ${high} ${mid} ${high} ${mid}`, 1);
}

/** Eight units of root, fifth, octave and fifth, played twice. */
function rocking(root: string, fifth: string, octave: string): string {
  return run(`${root} ${fifth} ${octave} ${fifth} ${root} ${fifth} ${octave} ${fifth}`, 1);
}

/** A waltz bar of three units: the bass, then the chord twice. */
function waltz(bass: string, chord: string): string {
  return `${bass}:1 ${chord}:1 ${chord}:1`;
}

/** A stride bar of eight units: the bass, the chord, the second bass, the chord. */
function stride(bass: string, second: string, chord: string): string {
  return `${bass}:2 ${chord}:2 ${second}:2 ${chord}:2`;
}

/** Eight sixteenths that circle a chord from `low`. */
function circle(low: string, mid: string, high: string): string {
  return run(`${low} ${high} ${mid} ${high} ${low} ${high} ${mid} ${high}`, 1);
}

/** Eight sixteenths that fall from `top` and circle the chord. */
function fall(low: string, mid: string, high: string, top: string): string {
  return run(`${top} ${high} ${mid} ${high} ${low} ${high} ${mid} ${high}`, 1);
}

/** The bars of `bars`, joined into one hand. */
function bars(...bars: string[]): string {
  return bars.join(" | ");
}

const ballad = {
  C: rocking("C3", "G3", "C4"),
  G: rocking("G2", "D3", "G3"),
  Am: rocking("A2", "E3", "A3"),
  F: rocking("F2", "C3", "F3"),
};

const rain = {
  Am: flow("A2", "E3", "A3", "C4"),
  F: flow("F2", "C3", "F3", "A3"),
  C: flow("C3", "E3", "G3", "C4"),
  G: flow("G2", "D3", "G3", "B3"),
  E: flow("E2", "B2", "E3", "G#3"),
};

const waltzBars = {
  G: waltz("G2", "G3+B3"),
  Em: waltz("E2", "G3+B3"),
  C: waltz("C3", "E3+G3"),
  D: waltz("D3", "F#3+A3"),
  Am: waltz("A2", "A3+C4"),
  D7: waltz("D3", "F#3+C4"),
};

const boogie = {
  C: run("C3 E3 G3 A3 Bb3 A3 G3 E3", 1),
  F: run("F2 A2 C3 D3 Eb3 D3 C3 A2", 1),
  G: run("G2 B2 D3 E3 F3 E3 D3 B2", 1),
};

const blues = {
  C1: "C5:1 Eb5:1 E5:2 G5:2 r:2",
  C2: "Bb4:1 C5:1 r:2 E5+G5:2 r:2",
  F1: "C5:1 Eb5:1 F5:2 A5:2 r:2",
  F2: "A4:1 C5:1 r:2 Eb5+A5:2 r:2",
  G1: "D5:1 F5:1 G5:2 B5:2 r:2",
  turn: "G4:1 A4:1 Bb4:1 B4:1 D5:2 r:2",
};

/** The right hand of one twelve-bar chorus, ending on `last`. */
function bluesChorus(last: string): string {
  const b = blues;
  return bars(b.C1, b.C2, b.C1, b.C2, b.F1, b.F2, b.C1, b.C2, b.G1, b.F1, b.C1, last);
}

/** The left hand of one twelve-bar chorus, ending on `last`. */
function boogieChorus(last: string): string {
  const b = boogie;
  return bars(b.C, b.C, b.C, b.C, b.F, b.F, b.C, b.C, b.G, b.F, b.C, last);
}

const pulse = {
  Em: ["G4", "B4", "E5", "G5"],
  C: ["G4", "C5", "E5", "G5"],
  G: ["G4", "B4", "D5", "G5"],
  D: ["F#4", "A4", "D5", "F#5"],
} as const;

/** Eight units that turn on a chord's three lower notes. */
function pulseA(chord: readonly string[]): string {
  const [a, b, c] = chord;
  return run(`${c} ${b} ${a} ${b} ${c} ${b} ${a} ${b}`, 1);
}

/** Eight units that climb a chord's four notes and fall back. */
function pulseB(chord: readonly string[]): string {
  const [a, b, c, d] = chord;
  return run(`${a} ${b} ${c} ${d} ${c} ${b} ${a} ${b}`, 1);
}

/** Eight units of a bass note held as an octave. */
function held(low: string, high: string): string {
  return `${low}+${high}:8`;
}

/** Eight units of a bass note rocking between its octaves. */
function octaves(low: string, high: string): string {
  return run(`${low} ${high} ${low} ${high}`, 2);
}

const lullaby = {
  F: run("F2 C3 F3 A3 F3 C3", 1),
  C: run("C2 G2 C3 E3 C3 G2", 1),
  Bb: run("Bb2 F3 Bb3 D4 Bb3 F3", 1),
  Dm: run("D2 A2 D3 F3 D3 A2", 1),
  Gm: run("G2 D3 G3 Bb3 G3 D3", 1),
  C7: run("C3 G3 Bb3 G3 E3 G3", 1),
};

const road = {
  D: rocking("D2", "A2", "D3"),
  A: rocking("A2", "E3", "A3"),
  Bm: rocking("B2", "F#3", "B3"),
  G: rocking("G2", "D3", "G3"),
};

const tocc = {
  Am: ["A4", "C5", "E5", "A5"],
  F: ["A4", "C5", "F5", "A5"],
  G: ["B4", "D5", "G5", "B5"],
  E: ["G#4", "B4", "E5", "G#5"],
  C: ["G4", "C5", "E5", "G5"],
  Dm: ["A4", "D5", "F5", "A5"],
} as const;

const toccLeft = {
  Am: run("A2 E3 A3 E3", 2),
  F: run("F2 C3 F3 C3", 2),
  G: run("G2 D3 G3 D3", 2),
  E: run("E2 B2 E3 B2", 2),
  C: run("C3 G3 C4 G3", 2),
  Dm: run("D2 A2 D3 A2", 2),
};

/** Two toccata bars on `chord`: one circling, one falling from its top. */
function toccPair(chord: readonly string[]): string {
  const [a, b, c, d] = chord as [string, string, string, string];
  return bars(circle(a, b, c), fall(a, b, c, d));
}

const strideBars = {
  C: stride("C2", "G2", "E3+G3+C4"),
  A7: stride("A1", "E2", "E3+G3+C#4"),
  Dm: stride("D2", "A2", "F3+A3+D4"),
  G7: stride("G1", "D2", "F3+B3+D4"),
  D7: stride("D2", "A2", "F#3+A3+C4"),
  C7: stride("C2", "G2", "E3+G3+Bb3"),
  F: stride("F2", "C2", "F3+A3+C4"),
  Fm: stride("F2", "C2", "F3+Ab3+C4"),
};

export const originalSongs: readonly TwoHandSong[] = [
  {
    title: "Morning Light",
    file: "morning-light.mid",
    difficulty: 2,
    bpm: 80,
    numerator: 4,
    denominator: 4,
    steps: 2,
    right: bars(
      "E4:2 G4:2 G4:3 E4:1",
      "D4:2 G4:2 B4:4",
      "C5:2 B4:2 A4:2 E4:2",
      "F4:2 A4:2 C5:4",
      "E5:2 D5:2 C5:2 G4:2",
      "B4:2 A4:2 G4:2 D4:2",
      "A4:3 G4:1 F4:2 A4:2",
      "G4:8",
      "A4:2 C5:2 E5:4",
      "D5:2 C5:2 A4:4",
      "G4:2 C5:2 E5:4",
      "D5:3 C5:1 B4:4",
      "C5:2 B4:2 A4:2 E5:2",
      "F5:2 E5:2 C5:2 A4:2",
      "D5:2 B4:2 G4:2 B4:2",
      "C5:8",
    ),
    left: bars(
      ...[ballad.C, ballad.G, ballad.Am, ballad.F, ballad.C, ballad.G, ballad.F, ballad.C],
      ...[ballad.Am, ballad.F, ballad.C, ballad.G, ballad.Am, ballad.F, ballad.G, "C3+G3+C4:8"],
    ),
  },
  {
    title: "Night Lullaby",
    file: "night-lullaby.mid",
    difficulty: 2.5,
    bpm: 76,
    numerator: 6,
    denominator: 8,
    right: bars(
      "A4:3 C5:3",
      "Bb4:2 A4:1 G4:3",
      "A4:2 C5:1 F5:3",
      "F5:2 D5:1 Bb4:3",
      "A4:3 C5:2 A4:1",
      "D5:3 A4:3",
      "Bb4:2 A4:1 G4:2 Bb4:1",
      "C5:3 G4:3",
      "A4:3 C5:3",
      "E5:2 D5:1 C5:3",
      "D5:2 E5:1 F5:3",
      "D5:3 Bb4:3",
      "C5:3 A4:3",
      "Bb4:2 G4:1 E4:3",
      "A4:3 G4:3",
      "F4:6",
    ),
    left: bars(
      ...[lullaby.F, lullaby.C, lullaby.F, lullaby.Bb, lullaby.F, lullaby.Dm, lullaby.Gm, lullaby.C],
      ...[lullaby.F, lullaby.C, lullaby.Dm, lullaby.Bb, lullaby.F, lullaby.C7, lullaby.F, "F2+C3:6"],
    ),
  },
  {
    title: "Little Waltz in G",
    file: "little-waltz-in-g.mid",
    difficulty: 2.5,
    bpm: 138,
    numerator: 3,
    denominator: 4,
    right: bars(
      "B4:1 D5:1 G5:1",
      "G5:2 E5:1",
      "E5:2 C5:1",
      "A4:1 D5:1 F#5:1",
      "G5:2 D5:1",
      "E5:2 B4:1",
      "A4:1 C5:1 E5:1",
      "D5:3",
      "B4:1 D5:1 G5:1",
      "B5:2 G5:1",
      "G5:1 E5:1 C5:1",
      "D5:1 F#5:1 A5:1",
      "G5:2 E5:1",
      "A5:1 F#5:1 C5:1",
      "B4:3",
      "G4:3",
    ),
    left: bars(
      ...[waltzBars.G, waltzBars.Em, waltzBars.C, waltzBars.D, waltzBars.G, waltzBars.Em, waltzBars.Am, waltzBars.D],
      ...[waltzBars.G, waltzBars.Em, waltzBars.C, waltzBars.D, waltzBars.C, waltzBars.D7, waltzBars.G, "G2+D3+G3:3"],
    ),
  },
  {
    title: "Rainy Window",
    file: "rainy-window.mid",
    difficulty: 3,
    bpm: 72,
    numerator: 4,
    denominator: 4,
    steps: 2,
    right: bars(
      "r:4 E4:2 A4:2",
      "C5:6 B4:1 A4:1",
      "G4:4 E4:2 G4:2",
      "D5:6 r:2",
      "r:4 E4:2 A4:2",
      "C5:3 D5:1 C5:2 A4:2",
      "B4:4 G#4:2 B4:2",
      "E5:6 r:2",
      "F5:2 E5:2 C5:2 A4:2",
      "D5:2 B4:2 G4:2 D5:2",
      "E5:4 G5:2 E5:2",
      "E5:2 C5:2 A4:4",
      "A4:2 C5:2 F5:4",
      "D5:2 B4:2 G4:4",
      "G#4:2 B4:2 E5:2 D5:2",
      "C5:2 B4:2 A4:4",
    ),
    left: bars(
      ...[rain.Am, rain.F, rain.C, rain.G, rain.Am, rain.F, rain.E, rain.E],
      ...[rain.F, rain.G, rain.C, rain.Am, rain.F, rain.G, rain.E, "A2+E3+A3:8"],
    ),
  },
  {
    title: "Snow Prelude",
    file: "snow-prelude.mid",
    difficulty: 3,
    bpm: 66,
    numerator: 4,
    denominator: 4,
    right: bars(
      "D4+F4+A4:2 F4+A4+D5:2",
      "D4+F4+Bb4:2 F4+Bb4+D5:2",
      "D4+G4+Bb4:2 G4+Bb4+D5:2",
      "C#4+E4+A4:2 E4+A4+C#5:2",
      "F4+A4+D5:2 A4+D5+F5:2",
      "F4+A4+C5:2 A4+C5+F5:2",
      "G4+Bb4+D5:2 A4+C#5+E5:2",
      "F4+A4+D5:4",
      "Bb4+D5+F5:3 D5:1",
      "A4+C5+F5:3 C5:1",
      "Bb4+D5+G5:3 D5:1",
      "A4+D5+F5:4",
      "D5+F5:2 Bb4+D5:2",
      "Bb4+D5:2 G4+Bb4:2",
      "C#5+E5:2 A4+C#5+E5:2",
      "D4+F4+A4+D5:4",
    ),
    left: bars(
      ...["D2+D3:4", "Bb1+Bb2:4", "G1+G2:4", "A1+A2:4", "D2+D3:4", "F1+F2:4", "G1+G2:2 A1+A2:2", "D2+D3:4"],
      ...["Bb1+Bb2:4", "F1+F2:4", "G1+G2:4", "D2+D3:4", "Bb1+Bb2:4", "G1+G2:4", "A1+A2:4", "D2+D3:4"],
    ),
  },
  {
    title: "Minimal Pulse",
    file: "minimal-pulse.mid",
    difficulty: 3.5,
    bpm: 96,
    numerator: 4,
    denominator: 4,
    steps: 2,
    right: bars(
      ...[pulse.Em, pulse.Em, pulse.C, pulse.C, pulse.G, pulse.G, pulse.D, pulse.D].map(pulseA),
      ...[pulse.Em, pulse.C, pulse.G, pulse.D, pulse.Em, pulse.C, pulse.D].map(pulseB),
      "E5+G5+B5:8",
    ),
    left: bars(
      held("E2", "E3"),
      held("E2", "E3"),
      held("C2", "C3"),
      held("C2", "C3"),
      held("G2", "G3"),
      held("G2", "G3"),
      held("D2", "D3"),
      held("D2", "D3"),
      octaves("E2", "E3"),
      octaves("C2", "C3"),
      octaves("G2", "G3"),
      octaves("D2", "D3"),
      octaves("E2", "E3"),
      octaves("C2", "C3"),
      octaves("D2", "D3"),
      held("E2", "E3"),
    ),
  },
  {
    title: "Mountain Road",
    file: "mountain-road.mid",
    difficulty: 4,
    bpm: 104,
    numerator: 4,
    denominator: 4,
    steps: 2,
    right: bars(
      "F#4:2 A4:2 D5:3 E5:1",
      "E5:2 C#5:2 A4:4",
      "B4:2 D5:2 F#5:3 E5:1",
      "D5:2 B4:2 G4:4",
      "F#5:2 A5:2 F#5:2 D5:2",
      "E5:3 C#5:1 A4:4",
      "B4:2 D5:2 G5:3 F#5:1",
      "E5:4 C#5+E5:4",
      "D5:2 B4:2 F#4:2 B4:2",
      "G5:2 D5:2 B4:4",
      "A4:2 D5:2 F#5:4",
      "E5:2 G5:2 C#5:4",
      "B4:2 D5:2 G5:2 B5:2",
      "A5:3 G5:1 E5:2 C#5:2",
      "F#5:2 E5:2 D5:4",
      "D5+F#5+A5:6 r:2",
    ),
    left: bars(
      ...[road.D, road.A, road.Bm, road.G, road.D, road.A, road.G, road.A],
      ...[road.Bm, road.G, road.D, road.A, road.G, road.A, road.D, "D2+A2+D3:8"],
    ),
  },
  {
    title: "Twelve-Bar Walk",
    file: "twelve-bar-walk.mid",
    difficulty: 4.5,
    bpm: 112,
    numerator: 4,
    denominator: 4,
    steps: 2,
    right: bars(bluesChorus(blues.turn), bluesChorus("C5+E5+G5:6 r:2")),
    left: bars(boogieChorus(boogie.G), boogieChorus("C3:1 E3:1 G3:1 A3:1 C3+G3:4")),
  },
  {
    title: "Sunday Stride",
    file: "sunday-stride.mid",
    difficulty: 5,
    bpm: 116,
    numerator: 4,
    denominator: 4,
    steps: 2,
    right: bars(
      "r:1 E5:1 G5:2 E5:1 C5:3",
      "r:1 E5:1 G5:2 E5:1 C#5:3",
      "r:1 D5:1 F5:2 A5:1 F5:3",
      "G5:2 F5:1 D5:2 B4:3",
      "r:1 E5:1 G5:2 E5:1 C5:3",
      "C#5:1 E5:1 A5:2 G5:1 E5:3",
      "D5:1 F#5:1 A5:2 C6:1 A5:3",
      "G5:2 F5:1 D5:2 B4:3",
      "r:1 E5:1 G5:2 E5:1 C5:3",
      "r:1 E5:1 G5:2 Bb5:1 G5:3",
      "A5:2 F5:1 C5:2 A4:3",
      "Ab5:2 F5:1 C5:2 Ab4:3",
      "G4:1 C5:1 E5:2 G5:1 E5:3",
      "F5:1 D5:1 B4:2 D5:1 G5:3",
      "C6:2 G5:1 E5:2 C5:3",
      "C5+E5+G5+C6:4 r:4",
    ),
    left: bars(
      ...[strideBars.C, strideBars.A7, strideBars.Dm, strideBars.G7, strideBars.C, strideBars.A7, strideBars.D7, strideBars.G7],
      ...[strideBars.C, strideBars.C7, strideBars.F, strideBars.Fm, strideBars.C, strideBars.G7, strideBars.C],
      "C2:2 E3+G3+C4:2 C2+C3:4",
    ),
  },
  {
    title: "Clockwork Toccata",
    file: "clockwork-toccata.mid",
    difficulty: 5.5,
    bpm: 100,
    numerator: 2,
    denominator: 4,
    steps: 4,
    right: bars(
      ...[tocc.Am, tocc.F, tocc.G, tocc.E, tocc.C, tocc.G, tocc.Am, tocc.E, tocc.Am, tocc.Dm, tocc.E].map(toccPair),
      circle("A4", "C5", "E5"),
      "A4+C5+E5+A5:4 r:4",
    ),
    left: bars(
      ...[toccLeft.Am, toccLeft.F, toccLeft.G, toccLeft.E, toccLeft.C, toccLeft.G, toccLeft.Am, toccLeft.E].flatMap((b) => [b, b]),
      ...[toccLeft.Am, toccLeft.Dm, toccLeft.E].flatMap((b) => [b, b]),
      toccLeft.Am,
      "A1+A2:4 r:4",
    ),
  },
];

/** The catalog row of `song`, whose file holds `bytes`. */
export function originalRow(song: TwoHandSong, bytes: Uint8Array): CatalogSong {
  const row = {
    composer: originalsComposer,
    piece: originalsPiece,
    title: song.title,
    file: `${originalsFolder}/${song.file}`,
    difficulty: song.difficulty,
    license: originalsLicense,
    credit: originalsCredit,
  };
  return withSpan(row, bytes);
}

const licenseText = `# Our own modern pieces

The MIDI files in this folder are original compositions by the learn-piano-easy authors.
They are under the MIT License, the same as the app: see \`LICENSE\` at the repository root.

\`tools/make-original-songs.ts\` writes them, so a change goes there, never into a file here.

| File | Title | Author | License |
|---|---|---|---|
${originalSongs.map((song) => `| \`${song.file}\` | ${song.title} | The learn-piano-easy authors | MIT |`).join("\n")}
`;

/** Writes every original piece, their license and their catalog rows. Returns the rows. */
export async function makeOriginalSongs(): Promise<CatalogSong[]> {
  const dir = join(songsDir, originalsFolder);
  await mkdir(dir, { recursive: true });
  const rows: CatalogSong[] = [];
  for (const song of originalSongs) {
    const bytes = writeMidi(twoHandMidi(song));
    await Bun.write(join(dir, song.file), bytes);
    rows.push(originalRow(song, bytes));
  }
  await Bun.write(join(dir, "LICENSE.md"), licenseText);
  const others = (await readCatalog()).filter((row) => !row.file.startsWith(`${originalsFolder}/`));
  await writeCatalog([...rows, ...others]);
  return rows;
}

if (import.meta.main) {
  const rows = await makeOriginalSongs();
  console.log(`${rows.length} original pieces in public/songs/${originalsFolder}/`);
}

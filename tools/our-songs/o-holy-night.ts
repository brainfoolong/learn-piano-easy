/**
 * *O Holy Night*: Adolphe Adam's *Cantique de Noël*, in four versions of ours.
 *
 * The tune is the verse as G. Schirmer's print of 1871 has it, in C major, at the print's own octave.
 * Its rhythm is dotted throughout, so every length here is four times the print's. A sixteenth becomes
 * a quarter, and Common plays even the short note of each dotted pair at its place.
 *
 * The tune is written in 4/1, one bar of the print per bar. The hook is bars 15 to 19, the climb to the
 * high E. A version must play the hook within its first 8 bars, so every version is in 8/1. Each of its
 * bars holds two bars of the print, and the hook starts in bar 8.
 *
 * Common plays the tune over held fifths, merges repeated notes, and leaves out eight short notes,
 * among them the two F sharps. Rare plays every note over block triads, and repeats the last six bars
 * of the print. Epic puts a sixteenth Alberti bass with the pedal under the tune, then plays the
 * refrain an octave up. Legendary plays the tune in octaves over a stride bass, then the refrain again
 * over broken octaves, and ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 4/1, in quarters: each quarter is a sixteenth of the print, and each bar one bar of it. */
const tune = [
  "r:8 E4:4 E4:3 G4:1 | G4:7 G4:1 A4:3 A4:1 F4:3 A4:1 | C5:8 G4:2 r:1 G4:1 E4:3 D4:1",
  "C4:3 C4:1 E4:3 F4:1 G4:4 F4:3 D4:1 | C4:8 r:8 | r:8 E4:4 E4:3 E4:1",
  "G4:7 G4:1 A4:3 A4:1 F4:3 A4:1 | C5:8 G4:2 r:1 F#4:1 F#4:3 E4:1 | B4:4 G4:3 A4:1 B4:3 B4:1 C5:3 B4:1",
  "E4:8 r:7 G4:1 | G4:4 A4:4 D4:4 G4:3 G4:1 | A4:3 G4:1 C5:3 E4:1 A4:4 G4:2 r:1 G4:1",
  "G4:4 A4:4 D4:4 G4:3 G4:1 | A4:3 G4:1 C5:3 E4:1 G4:6 r:2 | C5:12 B4:3 A4:1 | B4:14 r:2",
  "D5:8 D5:3 A4:1 A4:3 A4:1 | C5:12 r:3 C5:1 | E5:8 D5:7 G4:1 | C5:12 B4:3 A4:1",
  "G4:11 G4:1 A4:3 G4:1 | G4:12 r:3 C5:1 | E5:8 D5:7 G4:1 | E5:12 D5:3 D5:1 | C5:8 B4:3 B4:1 C5:3 D5:1 | C5:16",
].join(" | ");

/** The whole tune in the right hand, one bar of the print per entry, in quarters, with every note fingered. */
const RIGHT = [
  "r:8 E4/1:4 E4/1:3 G4/2:1",
  "G4/2:7 G4/2:1 A4/3:3 A4/3:1 F4/1:3 A4/3:1",
  "C5/5:8 G4/3:2 r:1 G4/5:1 E4/3:3 D4/2:1",
  "C4/1:3 C4/1:1 E4/2:3 F4/3:1 G4/4:4 F4/3:3 D4/2:1",
  "C4/1:8 r:8",
  "r:8 E4/2:4 E4/2:3 E4/2:1",
  "G4/3:7 G4/3:1 A4/4:3 A4/4:1 F4/1:3 A4/3:1",
  "C5/5:8 G4/3:2 r:1 F#4/2:1 F#4/2:3 E4/1:1",
  "B4/4:4 G4/2:3 A4/3:1 B4/4:3 B4/4:1 C5/5:3 B4/4:1",
  "E4/1:8 r:7 G4/2:1",
  "G4/2:4 A4/3:4 D4/1:4 G4/2:3 G4/2:1",
  "A4/3:3 G4/2:1 C5/5:3 E4/1:1 A4/3:4 G4/2:2 r:1 G4/2:1",
  "G4/2:4 A4/3:4 D4/1:4 G4/2:3 G4/2:1",
  "A4/3:3 G4/2:1 C5/5:3 E4/1:1 G4/2:6 r:2",
  "C5/3:12 B4/2:3 A4/1:1",
  "B4/2:14 r:2",
  "D5/4:8 D5/4:3 A4/1:1 A4/1:3 A4/1:1",
  "C5/3:12 r:3 C5/3:1",
  "E5/5:8 D5/4:7 G4/1:1",
  "C5/4:12 B4/3:3 A4/2:1",
  "G4/1:11 G4/1:1 A4/2:3 G4/1:1",
  "G4/1:12 r:3 C5/3:1",
  "E5/5:8 D5/4:7 G4/1:1",
  "E5/5:12 D5/4:3 D5/4:1",
  "C5/3:8 B4/2:3 B4/2:1 C5/3:3 D5/4:1",
  "C5/3:16",
];

/**
 * Common's right hand in 8/1, in quarters, two bars of the print per bar. A repeated note is held, and
 * eight short notes are left out, among them the two F sharps.
 */
const COMMON_RIGHT = [
  "r:8 E4/1:7 G4/2:9 A4/3:4 F4/1:3 A4/3:1",
  "C5/5:8 G4/3:4 E4/2:4 C4/1:4 E4/2:4 G4/4:4 F4/3:3 D4/2:1",
  "C4/1:8 r:16 E4/2:8",
  "G4/3:8 A4/4:4 F4/1:3 A4/3:1 C5/5:8 G4/3:7 E4/1:1",
  "B4/4:4 G4/2:4 B4/4:4 C5/5:3 B4/4:1 E4/1:8 r:7 G4/2:1",
  "G4/2:4 A4/3:4 D4/1:4 G4/2:4 A4/3:3 G4/2:1 C5/5:4 A4/3:4 G4/2:4",
  "G4/2:4 A4/3:4 D4/1:4 G4/2:4 A4/3:3 G4/2:1 C5/5:4 G4/2:6 r:2",
  "C5/3:12 B4/2:3 A4/1:1 B4/2:14 r:2",
  "D5/4:8 D5/4:3 A4/1:1 A4/1:3 A4/1:1 C5/3:12 r:3 C5/3:1",
  "E5/5:8 D5/4:7 G4/1:1 C5/4:12 B4/3:3 A4/2:1",
  "G4/1:12 A4/2:3 G4/1:13 r:3 C5/3:1",
  "E5/5:8 D5/4:8 E5/5:12 D5/4:4",
  "C5/3:8 B4/2:4 C5/3:3 D5/4:1 C5/3:16",
].join(" | ");

/**
 * The chords of the print's 26 bars, a letter per beat. C, F and G are the triads, S is G seventh,
 * a is A minor, d is D minor, and e is E minor. E stands under the F sharps, where the bass is E alone.
 */
const CHORDS = [
  "CCCC", "CCFF", "CCCC", "CCSS", "CCCC", "CCCC", "CCFF", "aaEE", "eeee", "eeee", "GGGG", "CCCC", "GGGG",
  "CCGG", "aaae", "eeee", "dddd", "CCCC", "CCGG", "CCGG", "SSSS", "CCCC", "CCGG", "CCGG", "CCGG", "CCCC",
];

/** Common's bass, a letter per bar of the print: the chord the tune leans on longest. */
const COMMON_CHORDS = "CFCGCCFAEEGCGCeEDCGFGCCCGC";

/** Bars of 8/1 from bars of the print, two to a bar. */
function inPairs(bars: readonly string[]): string {
  const pairs: string[] = [];
  for (let at = 0; at < bars.length; at += 2) pairs.push(bars.slice(at, at + 2).join(" "));
  return pairs.join(" | ");
}

/** The runs of one letter in `letters`, such as `["CC", "FF"]` from `"CCFF"`. */
function runs(letters: string): string[] {
  return letters.match(/(.)\1*/g) ?? [];
}

/** One bar of the print held in `shapes`, a chord per run of letters, each beat `beat` units long. */
function heldBar(shapes: Record<string, string>, letters: string, beat: number): string {
  return runs(letters)
    .map((run) => `${shapes[run[0]!]}:${run.length * beat}`)
    .join(" ");
}

/** One bar of the print with a pattern of `patterns` on each beat. */
function beatBar(patterns: Record<string, string>, letters: string): string {
  return [...letters].map((chord) => patterns[chord]).join(" ");
}

/** One bar of the print's pedal: pressed again at each change of chord, each beat `beat` units long. */
function pedalBar(letters: string, beat: number): string {
  return runs(letters)
    .map((run) => `P:${run.length * beat}`)
    .join(" ");
}

/** `bar` an octave up. */
function octaveUp(bar: string): string {
  return bar.replace(/([A-G][#b]?)(\d)/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/**
 * `bar` in eighths, each note doubled an octave up and played by the thumb and the little finger. Each
 * octave lets go an eighth early, so the hand can jump to the next one.
 */
function inOctaves(bar: string): string {
  return bar
    .split(" ")
    .map((token) => {
      const [sound, units] = token.split(":") as [string, string];
      const length = 2 * Number(units);
      if (sound === "r") return `r:${length}`;
      const note = sound.split("/")[0]!;
      return `${note}+${octaveUp(note)}/1+5:${length - 1} r:1`;
    })
    .join(" ");
}

/** Common's held bass in quarters: an open fifth or one note, the hand kept on C to G. */
const COMMON_SHAPES: Record<string, string> = {
  C: "C3+G3/5+1",
  F: "F3/2",
  G: "D3+G3/4+1",
  A: "C3+E3/5+3",
  E: "E3+G3/3+1",
  e: "E3/3",
  D: "D3+F3/4+2",
};

/** Rare's block chords in quarters, the hand kept on C to G, each finger on its own key. */
const BLOCK: Record<string, string> = {
  C: "C3+E3+G3/5+3+1",
  F: "C3+F3/5+2",
  S: "D3+F3+G3/4+2+1",
  G: "D3+G3/4+1",
  a: "C3+E3/5+3",
  e: "E3+G3/3+1",
  E: "E3/3",
  d: "D3+F3/4+2",
};

/** One beat of Alberti bass in quarters: bass, top, middle, top. D minor stands on F. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  F: "F2/5:1 C3/1:1 A2/3:1 C3/1:1",
  S: "G2/5:1 F3/1:1 D3/2:1 F3/1:1",
  G: "G2/5:1 D3/1:1 B2/3:1 D3/1:1",
  a: "A2/5:1 E3/1:1 C3/3:1 E3/1:1",
  e: "E2/5:1 B2/1:1 G2/3:1 B2/1:1",
  E: "E2/5:1 B2/1:1 G2/3:1 B2/1:1",
  d: "F2/5:1 D3/1:1 A2/3:1 D3/1:1",
};

/** One beat of stride in eighths: the root in octaves, then the chord, each with a rest for the jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:3 r:1 C3+E3+G3/5+3+1:3 r:1",
  F: "F2+F3/5+1:3 r:1 C3+F3+A3/5+2+1:3 r:1",
  S: "G1+G2/5+1:3 r:1 B2+F3+G3/5+2+1:3 r:1",
  G: "G1+G2/5+1:3 r:1 B2+D3+G3/5+3+1:3 r:1",
  a: "A1+A2/5+1:3 r:1 C3+E3+A3/5+3+1:3 r:1",
  e: "E2+E3/5+1:3 r:1 B2+E3+G3/5+3+1:3 r:1",
  E: "E2+E3/5+1:3 r:1 B2+E3+G3/5+3+1:3 r:1",
  d: "D2+D3/5+1:3 r:1 D3+F3+A3/5+3+1:3 r:1",
};

/** One beat of broken octave in eighths: the root, its fifth and the root an octave up, then a rest. */
const BROKEN: Record<string, string> = {
  C: "C2/5:2 G2/2:2 C3/1:2 r:2",
  F: "F2/5:2 C3/2:2 F3/1:2 r:2",
  S: "G1/5:2 D2/2:2 G2/1:2 r:2",
  G: "G1/5:2 D2/2:2 G2/1:2 r:2",
  a: "A1/5:2 E2/2:2 A2/1:2 r:2",
  e: "E2/5:2 B2/2:2 E3/1:2 r:2",
  E: "E2/5:2 B2/2:2 E3/1:2 r:2",
  d: "D2/5:2 A2/2:2 D3/1:2 r:2",
};

/** The refrain: bars 15 to 26 of the print, which Epic and Legendary play a second time. */
const REFRAIN = 14;

/** The last six bars of the print, which Rare plays a second time. */
const CODA = 20;

export const oHolyNight: OurSong = {
  slug: "o-holy-night",
  title: "O Holy Night",
  source: {
    composer: "Adolphe Adam",
    died: 1856,
    published: 1855,
    edition: "Cantique de Noël, read from G. Schirmer's print of 1871",
  },
  about:
    "The French composer Adolphe Adam set Placide Cappeau's poem Minuit, chrétiens to music, as Cantique de Noël. " +
    "It was first sung at Midnight Mass in Roquemaure, in the south of France, in 1847. " +
    "The best-known English version, O Holy Night, was written in 1855 by the American critic and minister John Sullivan Dwight.",
  funFact: "Adolphe Adam is best known today for his ballet Giselle.",
  mythic: null,
  collection: "christmas",
  aka: ["Cantique de Noël", "Minuit, chrétiens"],
  tune: { text: tune, numerator: 4, denominator: 1, steps: 4, key: C_MAJOR, hookBars: [15, 19] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 420,
      numerator: 8,
      denominator: 1,
      steps: 4,
      right: COMMON_RIGHT,
      left: inPairs([...COMMON_CHORDS].map((chord) => `${COMMON_SHAPES[chord]}:16`)),
      skills: ["dotted-rhythm", "open-fifths", "position-change"],
      practice: [
        { text: "Play bars 1 to 7 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Play the climb from bar 8 to the end with the right hand alone.", hands: "right", speed: 0.6, loop: [8, 13], wait: true },
        { text: "Now the left hand alone. It holds one shape, then changes in the middle of each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "rhythm", text: "Hold the long note of each dotted pair. The short note then leads straight into the next one." },
        { fromBar: 7, toBar: 8, kind: "trick", text: "Use the rest at the end of bar 7 to move up. Finger 3 lands on the high C." },
        { fromBar: 8, toBar: 10, kind: "sound", text: "This is the climb the song is known for. Let it grow louder up to the high E." },
      ],
      tricky: {
        2: "The little finger plays the high C, and the hand walks down to middle C on fingers 3, 2 and 1.",
        4: "The thumb reaches down to F after A, then the little finger stretches up to the high C.",
        8: "The hand moves up after the rest, with finger 3 on the high C. Then the thumb plays A.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 360,
      numerator: 8,
      denominator: 1,
      steps: 4,
      right: inPairs([...RIGHT, ...RIGHT.slice(CODA)]),
      left: inPairs([...CHORDS, ...CHORDS.slice(CODA)].map((letters) => heldBar(BLOCK, letters, 4))),
      skills: ["triads", "dotted-rhythm"],
      practice: [
        { text: "Play the first seven bars with the right hand alone, and give every short note its place.", hands: "right", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Play the left hand alone. Hold each chord until the next one comes.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Join the hands on the climb in bars 8 to 10.", hands: "both", speed: 0.6, loop: [8, 10], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 2, kind: "fingering", text: "Play the second G with finger 5. Then fingers 3, 2 and 1 walk down to C." },
        { fromBar: 4, toBar: 4, kind: "sound", text: "The F sharps make the tune sad for a moment. Play them softly." },
        { fromBar: 14, toBar: 16, kind: "trick", text: "The last six bars come back once more. Play them a little softer, like an echo." },
      ],
      tricky: {
        2: "Change from finger 3 to finger 5 on the repeated G, so the hand can walk down to C.",
        4: "Finger 2 plays both F sharps, and the thumb takes E right after them.",
        8: "The hand moves up after the rest, with finger 3 on the high C. Then the thumb plays A.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 390,
      numerator: 8,
      denominator: 1,
      steps: 4,
      right: inPairs([...RIGHT, ...RIGHT.slice(REFRAIN).map(octaveUp)]),
      left: inPairs([...CHORDS, ...CHORDS.slice(REFRAIN)].map((letters) => beatBar(ALBERTI, letters))),
      pedal: inPairs([...CHORDS, ...CHORDS.slice(REFRAIN)].map((letters) => pedalBar(letters, 4))),
      skills: ["alberti-bass", "sixteenth-notes", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 3], wait: false },
        { text: "Play the refrain an octave up with the right hand alone.", hands: "right", speed: 0.6, loop: [14, 19], wait: true },
        { text: "Join the hands on the first seven bars, slowly.", hands: "both", speed: 0.5, loop: [1, 7], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 13, kind: "sound", text: "Keep the Alberti bass soft and even, so the tune sings above it." },
        { fromBar: 8, toBar: 10, kind: "sound", text: "Change the pedal with each new chord, so the bass never blurs." },
        { fromBar: 13, toBar: 14, kind: "trick", text: "After the last C, jump the right hand up an octave for the refrain." },
      ],
      tricky: {
        4: "The right hand plays its F sharps while the left hand rolls on E. Keep both hands light.",
        13: "The tune comes home to C while the left hand turns from C to G and back.",
        19: "The same ending as bar 13, an octave up. Hold the last C to the end.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 400,
      numerator: 8,
      denominator: 1,
      steps: 8,
      right: inPairs([...RIGHT, ...RIGHT.slice(REFRAIN, -1)].map(inOctaves).concat("C5+E5+G5+C6/1+2+3+5:32")),
      left: inPairs([
        ...CHORDS.map((letters) => beatBar(STRIDE, letters)),
        ...CHORDS.slice(REFRAIN, -1).map((letters) => beatBar(BROKEN, letters)),
        "C2+G2+C3/5+2+1:32",
      ]),
      pedal: inPairs([...CHORDS, ...CHORDS.slice(REFRAIN)].map((letters) => pedalBar(letters, 8))),
      skills: ["stride", "octave-bass"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then up for the chord.", hands: "left", speed: 0.5, loop: [1, 3], wait: false },
        { text: "Play the climb in octaves with the right hand alone. Keep the hand in the shape of an octave.", hands: "right", speed: 0.5, loop: [8, 10], wait: true },
        { text: "Play the broken octaves of the refrain with the left hand alone.", hands: "left", speed: 0.5, loop: [14, 19], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 13, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 1, toBar: 19, kind: "fingering", text: "Play every octave with the thumb and the little finger, and keep the hand in that shape." },
        { fromBar: 14, toBar: 19, kind: "sound", text: "Over the broken octaves, let the right hand sing out. The left hand stays soft." },
      ],
      tricky: {
        6: "The octaves rock between G and A, then drop to D. Keep the hand in its octave shape.",
        7: "The same rocking as bar 6, then a climb to the high C. Let the stride keep its beat.",
        12: "The octaves leap from G up to the high E. Use the short gap before it to jump.",
      },
    },
  },
  de: {
    about:
      "Der französische Komponist Adolphe Adam vertonte Placide Cappeaus Gedicht Minuit, chrétiens als Cantique de Noël. " +
      "Es erklang zuerst 1847 in der Christmette in Roquemaure, im Süden Frankreichs. " +
      "Die bekannteste englische Fassung, O Holy Night, schrieb 1855 der amerikanische Kritiker und Geistliche John Sullivan Dwight.",
    funFact: "Adolphe Adam ist heute vor allem für sein Ballett Giselle bekannt.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 7 nur mit der rechten Hand, und lass das Lied auf jeden Ton warten.",
          "Spiel den Aufstieg von Takt 8 bis zum Schluss nur mit der rechten Hand.",
          "Jetzt die linke Hand allein. Sie hält eine Handform und wechselt in der Mitte jedes Takts.",
          "Spiel das ganze Lied langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt den langen Ton jedes punktierten Paars. Der kurze Ton führt dann direkt in den nächsten.",
          "Nutz die Pause am Ende von Takt 7, um nach oben zu rücken. Finger 3 landet auf dem hohen C.",
          "Das ist der Aufstieg, für den das Lied bekannt ist. Lass ihn bis zum hohen E lauter werden.",
        ],
        tricky: {
          2: "Der kleine Finger spielt das hohe C, und die Hand wandert mit Finger 3, 2 und 1 hinab zum mittleren C.",
          4: "Nach dem A greift der Daumen hinunter zum F, dann streckt sich der kleine Finger hinauf zum hohen C.",
          8: "Nach der Pause rückt die Hand nach oben, mit Finger 3 auf dem hohen C. Dann spielt der Daumen das A.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten sieben Takte nur mit der rechten Hand, und gib jedem kurzen Ton seinen Platz.",
          "Spiel die linke Hand allein. Halt jeden Akkord, bis der nächste kommt.",
          "Spiel den Aufstieg in den Takten 8 bis 10 mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Spiel das zweite G mit Finger 5. Dann wandern Finger 3, 2 und 1 hinab zum C.",
          "Die Fis machen die Melodie für einen Moment traurig. Spiel sie leise.",
          "Die letzten sechs Takte kommen noch einmal. Spiel sie etwas leiser, wie ein Echo.",
        ],
        tricky: {
          2: "Wechsle beim wiederholten G von Finger 3 auf Finger 5, damit die Hand hinab zum C wandern kann.",
          4: "Finger 2 spielt beide Fis, und der Daumen nimmt gleich danach das E.",
          8: "Nach der Pause rückt die Hand nach oben, mit Finger 3 auf dem hohen C. Dann spielt der Daumen das A.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel den Refrain eine Oktave höher nur mit der rechten Hand.",
          "Spiel die ersten sieben Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise und gleichmäßig, damit die Melodie darüber singt.",
          "Wechsle das Pedal mit jedem neuen Akkord, damit der Bass nie verschwimmt.",
          "Spring nach dem letzten C mit der rechten Hand eine Oktave hinauf zum Refrain.",
        ],
        tricky: {
          4: "Die rechte Hand spielt ihre Fis, während die linke Hand auf E rollt. Halt beide Hände leicht.",
          13: "Die Melodie kehrt heim zum C, während die linke Hand von C zu G und zurück wechselt.",
          19: "Derselbe Schluss wie in Takt 13, eine Oktave höher. Halt das letzte C bis zum Ende.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Stride-Bass allein: Spring hinunter zur Oktave, dann hinauf zum Akkord.",
          "Spiel den Aufstieg in Oktaven nur mit der rechten Hand. Halt die Hand in Oktavform.",
          "Spiel die gebrochenen Oktaven des Refrains nur mit der linken Hand.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau beim Stride auf die tiefe Oktave, und lass die Hand den Akkord nach Gefühl finden.",
          "Spiel jede Oktave mit Daumen und kleinem Finger, und halt die Hand in dieser Form.",
          "Über den gebrochenen Oktaven soll die rechte Hand singen. Die linke Hand bleibt leise.",
        ],
        tricky: {
          6: "Die Oktaven schaukeln zwischen G und A, dann fallen sie zum D. Halt die Hand in ihrer Oktavform.",
          7: "Dasselbe Schaukeln wie in Takt 6, dann ein Aufstieg zum hohen C. Lass den Stride im Takt bleiben.",
          12: "Die Oktaven springen vom G hinauf zum hohen E. Nutz die kurze Lücke davor für den Sprung.",
        },
      },
    },
  },
};

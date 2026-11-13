/**
 * *Boléro*: the first flute solo of Ravel's piece for orchestra, in four versions of ours.
 *
 * The tune is the flute's solo in bars 5 to 12 of the full score. The print is in 3/4 with sixteenths,
 * and the tune writes every sixteenth as a quarter, so each print bar is a bar of 3/1. Ties inside a bar
 * are merged. A tie over a bar line cannot be written, so the tune strikes that note again in bars 4, 5
 * and 8. Its key is C major, and the hook is bars 1 to 4.
 *
 * Every version writes the tune in 3/1 quarters, one bar per print bar. It plays the 8 tune bars over C
 * major and G major, then bars of our own over F major, C major, A minor and G major, and closes on C
 * major. Epic and Legendary then play the tune again in another setting.
 *
 * Common plays the tune over held open fifths and single bass notes. It leaves out the last D of bar 5,
 * so the hand never moves in the tune. Rare plays the root, the fifth, then both on the three beats of
 * each bar, and adds eighths and a two-note chord in its own bars. Epic plays the snare drum's bolero
 * rhythm, with its triplets, on the root and the fifth below. Its own bars run over an Alberti bass, and it
 * plays the tune again with a sixth or a chord under its long notes. Legendary plays the bolero rhythm
 * in bass octaves, runs of eighths over a stride bass, and the tune again in octaves. It ends on a
 * four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 3/1, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune =
  "C5:6 B4:1 C5:1 D5:1 C5:1 B4:1 A4:1 | C5:2 C5:1 A4:1 C5:6 B4:1 C5:1 | A4:1 G4:1 E4:1 F4:1 G4:8 | " +
  "G4:1 F4:1 E4:1 D4:1 E4:1 F4:1 G4:1 A4:1 G4:4 | G4:5 A4:1 B4:1 A4:1 G4:1 F4:1 E4:1 D4:1 | " +
  "E4:1 D4:1 C4:4 C4:1 D4:1 E4:2 F4:2 | D4:4 G4:8 | G4:10 r:2";

/**
 * The tune's first four bars in quarters, fingered in one place. Finger 5 takes the long C in bar 2, so
 * finger 2 can reach E in bar 3.
 */
const TUNE_HOOK = [
  "C5/4:6 B4/3:1 C5/4:1 D5/5:1 C5/4:1 B4/3:1 A4/2:1",
  "C5/4:2 C5/4:1 A4/2:1 C5/5:6 B4/4:1 C5/5:1",
  "A4/4:1 G4/3:1 E4/2:1 F4/3:1 G4/4:8",
  "G4/4:1 F4/3:1 E4/2:1 D4/1:1 E4/2:1 F4/3:1 G4/4:1 A4/5:1 G4/4:4",
].join(" | ");

/** The tune's bars 5 and 6 in quarters: the thumb steps down to D, then to C. */
const TUNE_FALL = "G4/3:5 A4/4:1 B4/5:1 A4/4:1 G4/3:1 F4/2:1 E4/1:1 D4/1:1 | E4/2:1 D4/1:1 C4/1:4 C4/1:1 D4/2:1 E4/3:2 F4/4:2";

/** The tune's last two bars in quarters. */
const TUNE_END = "D4/2:4 G4/5:8 | G4/5:10 r:2";

/** The whole tune in quarters, as Rare, Epic and Legendary finger it. */
const TUNE_RIGHT = `${TUNE_HOOK} | ${TUNE_FALL} | ${TUNE_END}`;

/** Common's tune in quarters: bar 5 holds E in place of its last D, so the hand stays in one place. */
const COMMON_TUNE = [
  TUNE_HOOK,
  "G4/3:5 A4/4:1 B4/5:1 A4/4:1 G4/3:1 F4/2:1 E4/1:2",
  "E4/3:1 D4/2:1 C4/1:4 C4/1:1 D4/2:1 E4/3:2 F4/4:2",
  TUNE_END,
].join(" | ");

/** Common's four bars after the tune, in quarters, over F major, A minor, G major and C major. */
const COMMON_OWN = [
  "F4/4:6 E4/3:1 F4/4:1 G4/5:1 F4/4:1 E4/3:1 D4/2:1",
  "C4/1:1 D4/2:1 E4/3:1 D4/2:1 C4/1:4 E4/3:2 A4/5:2",
  "G4/4:6 F4/3:1 E4/2:1 D4/1:4",
  "C4/1:6 r:6",
].join(" | ");

/** Rare's eight bars after the tune, in eighths, one chord a bar: F, C, A minor, G, F, C, G and C. */
const RARE_OWN = [
  "F4/4:12 E4/3:2 F4/4:2 G4/5:2 F4/4:1 E4/3:1 D4/2:4",
  "E4/3:4 E4/3:2 F4/4:2 G4/5:12 F4/4:2 E4/3:2",
  "C4/1:2 D4/2:2 E4/3:2 D4/2:2 C4/1:8 E4/3:4 A4/5:4",
  "G4/4:12 F4/3:1 E4/2:1 F4/3:2 D4/1:8",
  "A4/5:12 G4/4:2 F4/3:2 G4/4:2 A4/5:2 G4/4:2 F4/3:2",
  "E4/2:8 G4/4:4 E4/2:4 C4/1:8",
  "D4/2:4 E4/3:2 F4/4:2 G4/5:8 F4/4:4 D4/2:4",
  "C4+E4/1+3:24",
].join(" | ");

/** Epic's eight bars after the tune, in eighths, by bar, over the same chords as Rare's. */
const EPIC_OWN = [
  "F4+A4/1+3:12 G4/2:2 A4/3:2 C5/5:2 A4/3:1 G4/2:1 F4/1:4",
  "E4+G4/1+3:4 E4/1:2 F4/2:2 G4/3:12 A4/4:1 G4/3:1 F4/2:1 E4/1:1",
  "C4/1:1 D4/2:1 E4/3:1 F4/1:1 G4/2:1 A4/3:1 B4/4:1 C5/5:1 A4/3:8 E4/1:4 A4/4:4",
  "G4/3:12 F4/2:1 E4/1:1 F4/2:1 G4/3:1 A4/4:2 B4/5:2 G4/3:4",
  "A4+C5/3+5:12 G4/2:2 F4/1:2 G4/2:2 A4/3:2 G4/2:2 F4/1:2",
  "E4+G4/1+3:8 C5/5:2 B4/4:1 A4/3:1 G4/2:4 E4/1:8",
  "D4/1:1 E4/2:1 F4/3:1 G4/1:1 A4/2:1 B4/3:1 C5/4:1 D5/5:1 B4/3:4 G4/1:4 D4+F4/1+3:8",
  "E4+G4/1+3:16 r:8",
];

/** Legendary's bars 3 and 4 after the tune, in eighths: a run of sixteen eighths over A minor, then one over G. */
const LEGENDARY_RUN = [
  "A4/1:1 B4/2:1 C5/3:1 D5/1:1 E5/2:1 F5/3:1 E5/2:1 D5/1:1 C5/3:1 B4/2:1 A4/1:1 B4/2:1 C5/3:1 D5/4:1 E5/5:1 C5/3:1 A4/1:8",
  "B4/3:1 A4/2:1 G4/1:1 A4/2:1 B4/3:1 C5/4:1 D5/5:1 B4/3:1 G4/1:8 D5/5:8",
];

/** Legendary's eight bars after the tune, in eighths: Epic's, with the run in its bars 3 and 4. */
const LEGENDARY_OWN = [...EPIC_OWN.slice(0, 2), ...LEGENDARY_RUN, ...EPIC_OWN.slice(4)];

/** Epic's tune again in quarters, with a sixth or a chord under its long notes. */
const EPIC_AGAIN = [
  "E4+C5/1+4:6 B4/3:1 C5/4:1 D5/5:1 C5/4:1 B4/3:1 A4/2:1",
  "C5/4:2 C5/4:1 A4/2:1 E4+C5/1+5:6 B4/4:1 C5/5:1",
  "A4/4:1 G4/3:1 E4/2:1 F4/3:1 C4+E4+G4/1+2+4:8",
  "G4/4:1 F4/3:1 E4/2:1 D4/1:1 E4/2:1 F4/3:1 G4/4:1 A4/5:1 D4+G4/1+4:4",
  "D4+G4/1+3:5 A4/4:1 B4/5:1 A4/4:1 G4/3:1 F4/2:1 E4/1:1 D4/1:1",
  "E4/2:1 D4/1:1 C4/1:4 C4/1:1 D4/2:1 E4/3:2 F4/4:2",
  "D4/2:4 B3+D4+G4/1+2+5:8",
  "C4+E4+G4/1+2+5:10 r:2",
].join(" | ");

/** `text` with every note doubled an octave up, played by the thumb and the little finger. */
function inOctaves(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)\/\d(?=:)/g, (_, name: string, octave: string) => `${name}${octave}+${name}${Number(octave) + 1}/1+5`);
}

/** `text` with every length times `factor`, so a line in quarters reads in sixths of a quarter for 6. */
function scaled(text: string, factor: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${factor * Number(units)}`);
}

/**
 * Legendary's tune again in octaves, in sixths of a quarter. The octave D in bar 7 ends an eighth early,
 * so the hand can jump up to G.
 */
const LEGENDARY_AGAIN = [
  scaled(inOctaves(`${TUNE_HOOK} | ${TUNE_FALL}`), 6),
  "D4+D5/1+5:21 r:3 G4+G5/1+5:48",
  "G4+G5/1+5:60 r:12",
].join(" | ");

/** Bars of `patterns` from `chords`, such as `"CCG"`: one letter per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  return [...chords]
    .map((chord) => {
      const pattern = patterns[chord];
      if (pattern === undefined) throw new Error(`No pattern for chord ${chord}`);
      return pattern;
    })
    .join(" | ");
}

/** `pattern` three times, once per beat of a bar. */
function perBeat(pattern: string): string {
  return `${pattern} ${pattern} ${pattern}`;
}

/** Common's bass for each bar, in quarters: an open fifth or one note, held. `c` and `g` end in a rest to move. */
const HELD: Record<string, string> = {
  C: "C3+G3/5+1:12",
  G: "G3/1:12",
  c: "C3+G3/5+1:10 r:2",
  F: "F2+C3/5+1:12",
  a: "A2/3:12",
  g: "G2/4:10 r:2",
  E: "C3+G3/5+1:6 r:6",
};

/**
 * Rare's bass for each bar, in eighths: the root, the fifth, then both, one on each beat. The upper case
 * shapes sit under the tune, and the lower case ones under our own bars. `e` ends the tune in a rest.
 */
const ROOT_FIFTH: Record<string, string> = {
  C: "C3/3:8 G3/1:8 C3+G3/3+1:8",
  G: "G2/5:8 D3/2:8 G2+D3/5+2:8",
  e: "C3/3:8 G3/1:8 C3+G3/3+1:6 r:2",
  f: "F2/5:8 C3/2:8 F2+C3/5+2:8",
  c: "C3/2:8 G3/1:8 C3+G3/2+1:8",
  a: "A2/3:8 E3/1:8 A2+E3/3+1:8",
  g: "G2/4:8 D3/1:8 G2+D3/4+1:8",
  E: "C3+G3/2+1:24",
};

/** Epic's bar, in sixths of a quarter: the snare drum's bolero rhythm on the root and the fifth below. */
const BOLERO: Record<string, string> = {
  C: "C3/1:12 G2/5:4 C3/1:4 G2/5:4 C3/1:12 G2/5:4 C3/1:4 G2/5:4 C3/1:12 G2/5:12",
  G: "G2/5:12 D3/1:4 G2/5:4 D3/1:4 G2/5:12 D3/1:4 G2/5:4 D3/1:4 G2/5:12 D3/1:12",
};

/** Epic's bar in sixths of a quarter: an Alberti bass in quarters, low, high, middle, high, on each beat. */
const ALBERTI: Record<string, string> = {
  F: perBeat("F2/5:6 C3/1:6 A2/3:6 C3/1:6"),
  C: perBeat("C3/5:6 G3/1:6 E3/3:6 G3/1:6"),
  a: perBeat("A2/5:6 E3/1:6 C3/3:6 E3/1:6"),
  G: perBeat("G2/5:6 D3/1:6 B2/3:6 D3/1:6"),
};

/** Legendary's bar in sixths of a quarter: the bolero rhythm with a bass octave on each beat, and a rest to jump at its end. */
const BOLERO_OCTAVES: Record<string, string> = {
  C: "C2+C3/5+1:12 G2/2:4 C3/1:4 G2/2:4 C2+C3/5+1:12 G2/2:4 C3/1:4 G2/2:4 C2+C3/5+1:12 G2/2:9 r:3",
  G: "G1+G2/5+1:12 D2/2:4 G2/1:4 D2/2:4 G1+G2/5+1:12 D2/2:4 G2/1:4 D2/2:4 G1+G2/5+1:12 D2/2:9 r:3",
};

/** Legendary's bar in sixths of a quarter: a stride bass, the octave, then the chord twice, each with a rest to jump. */
const STRIDE: Record<string, string> = {
  F: "F1+F2/5+1:21 r:3 A2+C3+F3/5+3+1:21 r:3 A2+C3+F3/5+3+1:21 r:3",
  C: "C2+C3/5+1:21 r:3 E3+G3+C4/5+3+1:21 r:3 E3+G3+C4/5+3+1:21 r:3",
  a: "A1+A2/5+1:21 r:3 A2+C3+E3/5+3+1:21 r:3 A2+C3+E3/5+3+1:21 r:3",
  G: "G1+G2/5+1:21 r:3 G2+B2+D3/5+3+1:21 r:3 G2+B2+D3/5+3+1:21 r:3",
};

/** The chords of the tune, one a bar. */
const TUNE_CHORDS = "CCCGGCGC";

/** The chords of our eight bars after the tune, one a bar. */
const OWN_CHORDS = "FCaGFCGC";

/** Epic's and Legendary's pedal: up under the tune, down for each bar of our own and for the last chord. */
const PEDAL = [...Array(8).fill("r:72"), ...Array(8).fill("P:72"), ...Array(8).fill("r:72"), "P:72"].join(" | ");

export const bolero: OurSong = {
  slug: "bolero",
  title: "Boléro",
  aka: ["Bolero", "Ravel's Boléro", "Ravel Bolero"],
  source: {
    composer: "Maurice Ravel",
    died: 1937,
    published: 1929,
    edition:
      "Boléro, the first flute solo in bars 5 to 12, as Nicolas Sceaux's CC0 typeset of the full score on Wikimedia Commons prints it; Durand first published the score in 1929",
  },
  about:
    "Ravel wrote Boléro for orchestra in 1928, and Durand first published it in 1929. " +
    "Two melodies take turns over one snare drum rhythm, which grows from soft to loud. " +
    "The 1979 film 10 featured it prominently, and its sales soared.",
  funFact: "Ravel first played the melody with one finger to his friend Gustave Samazeuilh, and asked whether it had an insistent quality.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 3, denominator: 1, steps: 4, key: C_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 144,
      numerator: 3,
      denominator: 1,
      steps: 4,
      right: `${COMMON_TUNE} | ${COMMON_OWN}`,
      left: bars(HELD, "CCCGGCGcFagE"),
      skills: ["five-finger-position", "open-fifths", "held-bass"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. The tune sinks slowly down to C.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds one note or a fifth for a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play softly and evenly, like a flute far away. The tune should hardly change in volume." },
        { fromBar: 2, toBar: 3, kind: "fingering", text: "Take the long C with finger 5. Then finger 2 can reach down to E without moving the hand." },
        { fromBar: 5, toBar: 6, kind: "trick", text: "Play E again with finger 3 at the start of bar 6. The thumb is then ready for C." },
      ],
      tricky: {
        2: "Finger 2 plays A, then finger 5 takes the long C. Fingers 4 and 5 then play B and C.",
        9: "Use the short rest to move the left hand down to F and C. The right hand starts on F with finger 4.",
        12: "Move the right thumb from D down to C. The left hand lands on C and G after its rest.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 160,
      numerator: 3,
      denominator: 1,
      steps: 8,
      right: `${scaled(TUNE_RIGHT, 2)} | ${RARE_OWN}`,
      left: bars(ROOT_FIFTH, "CCCGGCGefcagfcgE"),
      skills: ["waltz-bass", "eighth-notes", "position-change"],
      practice: [
        { text: "Play the left hand alone: the root, the fifth, then both, one on each beat.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 and 6 with the right hand alone. The thumb steps down twice.", hands: "right", speed: 0.6, loop: [5, 6], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "Count three slow beats in each bar. The left hand plays once on each beat, like a quiet drum." },
        { fromBar: 5, toBar: 6, kind: "fingering", text: "After E, the thumb steps down to D. In the next bar it steps down again to C." },
        { fromBar: 16, toBar: 16, kind: "sound", text: "Press C and E together, and let them ring to the end." },
      ],
      tricky: {
        5: "After the long G, fingers 4 and 5 climb to B. At the end, the thumb plays E, then steps down to D.",
        6: "Finger 2 plays E, and the thumb plays D. Then the thumb steps down to C and stays there.",
        9: "Use the short rest to move the left hand down to F. The right hand starts on F with finger 4.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 200,
      numerator: 3,
      denominator: 1,
      steps: 24,
      right: [scaled(TUNE_RIGHT, 6), scaled(EPIC_OWN.join(" | "), 3), scaled(EPIC_AGAIN, 6), "E4+G4+C5/1+2+5:72"].join(" | "),
      left: [bars(BOLERO, TUNE_CHORDS), bars(ALBERTI, OWN_CHORDS), bars(BOLERO, TUNE_CHORDS), "C2+G2+C3/5+2+1:72"].join(" | "),
      pedal: PEDAL,
      skills: ["alberti-bass", "thumb-under", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone. A long note comes first, then three quick notes, like a snare drum.", hands: "left", speed: 0.5, loop: [1, 2], wait: false },
        { text: "Play the right hand alone on bars 9 to 16. Pass the thumb under in the runs.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal in bars 9 to 16.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "The three quick notes fit into the time of two tune notes. Keep them light and even." },
        { fromBar: 11, toBar: 11, kind: "fingering", text: "Pass the thumb under to F, then climb with fingers 2 to 5 up to C." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "The tune comes back fuller. Let its top note sing over the lower notes." },
      ],
      tricky: {
        6: "The thumb steps down from D to C, while the left hand keeps the drum rhythm going.",
        9: "The left hand starts the Alberti bass on F. Play the right hand's F and A together with fingers 1 and 3.",
        17: "Play E and C together with fingers 1 and 4. The left hand plays the drum rhythm again.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 240,
      numerator: 3,
      denominator: 1,
      steps: 24,
      right: [scaled(TUNE_RIGHT, 6), scaled(LEGENDARY_OWN.join(" | "), 3), LEGENDARY_AGAIN, "C4+E4+G4+C5/1+2+3+5:72"].join(" | "),
      left: [bars(BOLERO_OCTAVES, TUNE_CHORDS), bars(STRIDE, OWN_CHORDS), bars(BOLERO_OCTAVES, TUNE_CHORDS), "C1+C2/5+1:72"].join(" | "),
      pedal: PEDAL,
      skills: ["stride", "octave-bass", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone on the first two bars. Land each octave firmly, then play the quick notes lightly.", hands: "left", speed: 0.5, loop: [1, 2], wait: false },
        { text: "Play the run in bars 11 and 12 with the right hand alone, very slowly.", hands: "right", speed: 0.4, loop: [11, 12], wait: true },
        { text: "Play the right hand's octaves alone in bars 17 to 24. Keep the hand open, with the thumb and little finger ready.", hands: "right", speed: 0.5, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let it grow louder to the last chord.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 9, toBar: 16, kind: "trick", text: "In the stride bass, use each short rest to jump between the low octave and the chord." },
        { fromBar: 11, toBar: 11, kind: "fingering", text: "The thumb passes under to D, and finger 3 crosses back over to C. Keep the wrist level." },
        { fromBar: 17, toBar: 25, kind: "sound", text: "Start the octaves softly and grow louder, as the whole orchestra does in the piece." },
      ],
      tricky: {
        9: "The left hand jumps from the low F octave up to the chord. Use each short rest for the jump.",
        15: "Pass the thumb under to G and climb to D. The left hand jumps between G and its chord.",
        17: "The octaves begin. Open the hand with the thumb on C and the little finger on the C above.",
      },
    },
  },
  de: {
    about:
      "Ravel schrieb den Boléro 1928 für Orchester, und Durand veröffentlichte ihn erstmals 1929. " +
      "Zwei Melodien wechseln sich über einem einzigen Rhythmus der kleinen Trommel ab, der von leise zu laut wächst. " +
      "Der Film 10 von 1979 stellte ihn deutlich heraus, und seine Verkaufszahlen schnellten in die Höhe.",
    funFact: "Ravel spielte die Melodie zuerst mit einem Finger seinem Freund Gustave Samazeuilh vor und fragte, ob sie etwas Eindringliches habe.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Die Melodie sinkt langsam hinab zum C.",
          "Jetzt die linke Hand allein. Sie hält einen Ton oder eine Quinte einen ganzen Takt lang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Spiel leise und gleichmäßig, wie eine Flöte in der Ferne. Die Lautstärke soll sich kaum ändern.",
          "Nimm das lange C mit Finger 5. Dann erreicht Finger 2 das E, ohne dass die Hand sich bewegt.",
          "Spiel das E am Anfang von Takt 6 noch einmal mit Finger 3. Dann ist der Daumen bereit für das C.",
        ],
        tricky: {
          2: "Finger 2 spielt das A, dann nimmt Finger 5 das lange C. Danach spielen Finger 4 und 5 das H und das C.",
          9: "Nutz die kurze Pause, um die linke Hand hinab zu F und C zu setzen. Die rechte Hand beginnt mit Finger 4 auf dem F.",
          12: "Setz den rechten Daumen vom D hinab zum C. Die linke Hand landet nach ihrer Pause auf C und G.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: den Grundton, die Quinte, dann beide, einen auf jedem Schlag.",
          "Spiel die Takte 5 und 6 nur mit der rechten Hand. Der Daumen rückt zweimal nach unten.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Zähl in jedem Takt drei langsame Schläge. Die linke Hand spielt einmal auf jedem Schlag, wie eine leise Trommel.",
          "Nach dem E rückt der Daumen hinab zum D. Im nächsten Takt rückt er wieder hinab zum C.",
          "Drück C und E zusammen, und lass sie bis zum Ende klingen.",
        ],
        tricky: {
          5: "Nach dem langen G steigen Finger 4 und 5 hinauf zum H. Am Ende spielt der Daumen das E und rückt dann hinab zum D.",
          6: "Finger 2 spielt das E, und der Daumen spielt das D. Dann rückt der Daumen hinab zum C und bleibt dort.",
          9: "Nutz die kurze Pause, um die linke Hand hinab zum F zu setzen. Die rechte Hand beginnt mit Finger 4 auf dem F.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Zuerst kommt ein langer Ton, dann drei schnelle Töne, wie eine kleine Trommel.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand. Führ in den Läufen den Daumen unter.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal in den Takten 9 bis 16.",
        ],
        tips: [
          "Die drei schnellen Töne passen in die Zeit von zwei Melodietönen. Spiel sie leicht und gleichmäßig.",
          "Führ den Daumen unter zum F, dann steig mit Finger 2 bis 5 hinauf zum C.",
          "Die Melodie kehrt voller zurück. Lass ihren oberen Ton über den tieferen Tönen singen.",
        ],
        tricky: {
          6: "Der Daumen rückt vom D hinab zum C, während die linke Hand den Trommelrhythmus weiterspielt.",
          9: "Die linke Hand beginnt den Alberti-Bass auf dem F. Spiel F und A der rechten Hand zusammen mit Finger 1 und 3.",
          17: "Spiel E und C zusammen mit Finger 1 und 4. Die linke Hand spielt wieder den Trommelrhythmus.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein in den ersten zwei Takten. Setz jede Oktave fest auf, dann spiel die schnellen Töne leicht.",
          "Spiel den Lauf in Takt 11 und 12 nur mit der rechten Hand, ganz langsam.",
          "Spiel die Oktaven der rechten Hand allein in den Takten 17 bis 24. Halt die Hand offen, mit Daumen und kleinem Finger bereit.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass es bis zum letzten Akkord lauter werden.",
        ],
        tips: [
          "Nutz im Stride-Bass jede kurze Pause, um zwischen der tiefen Oktave und dem Akkord zu springen.",
          "Der Daumen geht unter zum D, und Finger 3 kreuzt zurück darüber zum C. Halt das Handgelenk ruhig.",
          "Beginn die Oktaven leise und werde lauter, wie das ganze Orchester im Stück.",
        ],
        tricky: {
          9: "Die linke Hand springt von der tiefen F-Oktave hinauf zum Akkord. Nutz jede kurze Pause für den Sprung.",
          15: "Führ den Daumen unter zum G, und steig hinauf zum D. Die linke Hand springt zwischen G und seinem Akkord.",
          17: "Die Oktaven beginnen. Öffne die Hand, mit dem Daumen auf dem C und dem kleinen Finger auf dem C darüber.",
        },
      },
    },
  },
};

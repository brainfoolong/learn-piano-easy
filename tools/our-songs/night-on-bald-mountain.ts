/**
 * *Night on Bald Mountain*: the brass theme of Mussorgsky's tone poem, in four versions of ours.
 *
 * The tune is the brass theme's first two statements, from Chernov's piano arrangement. The print is in
 * 2/2 and D minor, Allegro feroce. The tune writes every eighth as a quarter, so each print bar is a bar
 * of 4/2. The print ends its bars 2 and 4 with a quick run, which the tune leaves out as rests. The second
 * statement is the first a fourth higher. The hook is all four bars.
 *
 * Every version writes the tune in 4/4 quarters, two bars per print bar. The print holds A under the
 * first statement and D under the second. Every version plays the tune twice, with bars of our own
 * between, over A major, D minor, G minor and B-flat major. Epic and Legendary add A7. Every version
 * closes on D minor.
 *
 * Common plays the tune over held single bass notes. Rare pulses the bass on the beat, and its own bars
 * add eighths and two-note chords in the left hand. Epic pounds broken octaves under the tune and an
 * Alberti bass under our own bars. It fills the first rest with a run of eighths, and plays the tune again
 * an octave up. Legendary fills that rest with a run of sixteenths over an octave bass. It plays the tune
 * again in octaves, and ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 4/2, in quarters, which are the print's eighths: one bar per print bar. */
const tune = "A4:1 E4:2 F4:1 E4:1 D4:1 E4:1 F4:1 | G4:2 A4:2 E4:1 r:3 | r:1 A4:2 Bb4:1 A4:1 G4:1 A4:1 Bb4:1 | C5:2 D5:2 A4:1 r:3";

/** The tune in 4/4 quarters, fingered from D up to A, then from G up to D. */
const TUNE_RIGHT = [
  "A4/5:1 E4/2:2 F4/3:1 | E4/2:1 D4/1:1 E4/2:1 F4/3:1 | G4/4:2 A4/5:2 | E4/2:1 r:3",
  "r:1 A4/2:2 Bb4/3:1 | A4/2:1 G4/1:1 A4/2:1 Bb4/3:1 | C5/4:2 D5/5:2 | A4/2:1 r:3",
].join(" | ");

/** The tune in 4/4 eighths, with a run of our own in eighths through its first rest. */
const TUNE_RUN_EIGHTHS = [
  "A4/5:2 E4/2:4 F4/3:2 | E4/2:2 D4/1:2 E4/2:2 F4/3:2 | G4/4:4 A4/5:4",
  "E4/2:2 F4/3:1 G4/1:1 A4/2:1 Bb4/3:1 C#5/4:1 D5/5:1 | C5/4:1 Bb4/3:1 A4/2:4 Bb4/3:2",
  "A4/2:2 G4/1:2 A4/2:2 Bb4/3:2 | C5/4:4 D5/5:4 | A4/2:2 r:6",
].join(" | ");

/** The tune in 4/4 sixteenths, with a run of our own in sixteenths through its first rest. */
const TUNE_RUN_SIXTEENTHS = [
  "A4/5:4 E4/2:8 F4/3:4 | E4/2:4 D4/1:4 E4/2:4 F4/3:4 | G4/4:8 A4/5:8",
  "E4/2:4 F4/3:1 G4/1:1 A4/2:1 Bb4/3:1 C#5/4:1 D5/5:1 C#5/4:1 Bb4/3:1 A4/2:1 G4/1:1 F4/3:1 E4/2:1",
  "D4/1:1 E4/2:1 F4/3:1 G4/1:1 A4/2:8 Bb4/3:4 | A4/2:4 G4/1:4 A4/2:4 Bb4/3:4 | C5/4:8 D5/5:8 | A4/2:4 r:12",
].join(" | ");

/** The tune in 4/4 sixteenths, in octaves an octave up. */
const TUNE_OCTAVES = [
  "A4+A5/1+5:2 r:2 E4+E5/1+5:8 F4+F5/1+5:4 | E4+E5/1+5:4 D4+D5/1+5:4 E4+E5/1+5:4 F4+F5/1+5:4",
  "G4+G5/1+5:8 A4+A5/1+5:6 r:2 | E4+E5/1+5:4 r:12 | r:4 A4+A5/1+5:8 Bb4+Bb5/1+5:4",
  "A4+A5/1+5:4 G4+G5/1+5:4 A4+A5/1+5:4 Bb4+Bb5/1+5:4 | C5+C6/1+5:8 D5+D6/1+5:6 r:2 | A4+A5/1+5:4 r:12",
].join(" | ");

/** Common's six bars after the tune, in quarters, over G minor, B flat, A and D minor. */
const COMMON_OWN = "D5/5:2 Bb4/3:1 G4/1:1 | Bb4/3:2 C5/4:1 D5/5:1 | C5/4:1 Bb4/3:1 A4/2:1 G4/1:1 | A4/2:3 r:1 | F4/3:2 E4/2:1 D4/1:1 | E4/2:4";

/** Our first eight bars after the tune, in 4/4 eighths, one chord a bar: `OWN_A_CHORDS`. */
const OWN_A = [
  "D5/5:3 C5/4:1 Bb4/3:2 G4/1:2 | Bb4/3:2 C5/4:1 D5/5:1 C5/4:2 Bb4/3:2 | C5/4:2 Bb4/3:1 A4/2:1 G4/1:2 Bb4/3:2",
  "A4/2:6 G4/1:2 | A4/2:4 D5/5:2 C5/4:2 | Bb4/3:2 A4/2:2 G4/1:2 r:2 | E4/2:2 G4/4:2 A4/5:4 | A4/5:2 G4/4:1 F4/3:1 E4/2:4",
].join(" | ");

/** Our second eight bars after the tune, in 4/4 eighths, one chord a bar: `OWN_B_CHORDS`. */
const OWN_B = [
  "D5/5:2 C5/4:2 Bb4/3:4 | C5/4:2 Bb4/3:2 A4/2:2 G4/1:2 | A4/2:2 C5/4:2 D5/5:4 | A4/2:4 G4/1:4",
  "Bb4/3:2 A4/2:2 G4/1:4 | A4/2:6 r:2 | F4/3:2 E4/2:2 D4/1:4",
].join(" | ");

/** Epic's and Legendary's first eight bars after the tune, in 4/4 eighths, with thirds and sixths. */
const OWN_A_BIG = [
  "Bb4+D5/3+5:3 C5/4:1 Bb4/3:2 G4/1:2 | Bb4/3:2 C5/4:1 D5/5:1 C5/4:2 Bb4/3:2 | C5/4:2 Bb4/3:1 A4/2:1 G4/1:2 Bb4/3:2",
  "A4+C#5/2+4:6 G4/1:2 | A4/2:4 D5/5:2 C5/4:2 | Bb4/3:3 A4/2:1 G4/1:4",
  "C#4+E4/1+2:2 E4+G4/2+4:2 C#4+A4/1+5:4 | A4/5:2 G4/4:1 F4/3:1 E4/2:3 r:1",
].join(" | ");

/** Epic's and Legendary's second eight bars after the tune, in 4/4 eighths, before the last bar. */
const OWN_B_BIG = [
  "Bb4+D5/3+5:2 A4+C5/2+4:2 F4+Bb4/1+3:4 | C5/4:2 Bb4/3:2 A4/2:2 G4/1:2 | A4/2:2 C5/4:2 D5/5:4",
  "E4+A4/1+4:4 E4+G4/1+3:4 | Bb4/3:3 A4/2:1 G4/1:4 | A4/5:2 G4/4:1 F4/3:1 E4/2:4 | F4/3:2 E4/2:2 D4/1:4",
].join(" | ");

/** The chords under `OWN_A`, one a bar. */
const OWN_A_CHORDS = "gbgadgaa";

/** The chords under `OWN_B` and the last bar, one a bar. */
const OWN_B_CHORDS = "bgdagadd";

/** `text` an octave up: every note name's octave plus one. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** `text` with every length times `factor`, so a line in quarters reads in eighths for 2. */
function scaled(text: string, factor: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${factor * Number(units)}`);
}

/** Bars of `patterns` from `chords`, such as `"gbda"`: one letter per pattern, `perBar` patterns per bar. */
function bars(patterns: Record<string, string>, chords: string, perBar: number): string {
  const parts = [...chords].map((chord) => {
    const pattern = patterns[chord];
    if (pattern === undefined) throw new Error(`No pattern for chord ${chord}`);
    return pattern;
  });
  const lines: string[] = [];
  for (let at = 0; at < parts.length; at += perBar) lines.push(parts.slice(at, at + perBar).join(" "));
  return lines.join(" | ");
}

/** `pattern` repeated `count` times, one bar each. */
function repeat(pattern: string, count: number): string {
  return Array(count).fill(pattern).join(" | ");
}

/** Common's bass for each bar, in quarters: a whole note, or an open fifth for G minor. */
const HELD: Record<string, string> = {
  A: "A2/4:4",
  D: "D3/1:4",
  g: "G2+D3/5+1:4",
  b: "Bb2/3:4",
  a: "A2/4:4",
  d: "D3/1:4",
};

/** Rare's bass for each bar, in eighths: a half note, then two quarters, all in one hand position. */
const PULSE: Record<string, string> = {
  A: "A2/4:4 A2/4:2 A2/4:2",
  D: "D3/1:4 D3/1:2 D3/1:2",
  g: "G2+D3/5+1:4 G2+D3/5+1:2 G2+D3/5+1:2",
  b: "Bb2+D3/3+1:4 Bb2+D3/3+1:2 Bb2+D3/3+1:2",
  a: "A2+C#3/4+2:4 A2+C#3/4+2:2 A2+C#3/4+2:2",
  d: "A2+D3/4+1:4 A2+D3/4+1:2 A2+D3/4+1:2",
};

/** Epic's bass for each half bar, in eighths: broken octaves under the tune, an Alberti bass elsewhere. */
const BROKEN: Record<string, string> = {
  A: "A2/5:1 A3/1:1 A2/5:1 A3/1:1",
  D: "D3/1:1 D2/5:1 D3/1:1 D2/5:1",
  g: "G2/5:1 D3/1:1 Bb2/3:1 D3/1:1",
  b: "Bb2/5:1 F3/1:1 D3/3:1 F3/1:1",
  a: "A2/5:1 E3/1:1 C#3/3:1 E3/1:1",
  "7": "A2/5:1 G3/1:1 C#3/3:1 G3/1:1",
  d: "D3/5:1 A3/1:1 F3/3:1 A3/1:1",
  e: "D3/1:1 A2/2:1 D2/5:1 A2/2:1",
};

/**
 * Legendary's bass for each half bar, in sixteenths: an octave, then the fifth and the third together.
 * Each half bar ends with an eighth's rest, so the hand jumps to the next octave.
 */
const OCTAVE: Record<string, string> = {
  A: "A1+A2/5+1:2 r:2 A1+A2/5+1:2 r:2",
  D: "D2+D3/5+1:2 r:2 D2+D3/5+1:2 r:2",
  g: "G1+G2/5+1:4 D2+Bb2/3+1:2 r:2",
  b: "Bb1+Bb2/5+1:4 D2+F2/3+1:2 r:2",
  a: "A1+A2/5+1:4 C#2+E2/3+1:2 r:2",
  "7": "A1+A2/5+1:4 E2+G2/3+1:2 r:2",
  d: "D2+D3/5+1:4 A2+F3/3+1:2 r:2",
  e: "D2+D3/5+1:4 A2+D3/3+1:2 r:2",
};

/** The chords of the tune for Epic and Legendary, two per bar. */
const TUNE_HALVES = "AAAAAAAADDDDDDDD";

/** The chords of `OWN_A_BIG`, two per bar. */
const OWN_A_HALVES = "ggbbggaaddggaaa7";

/** The chords of `OWN_B_BIG`, two per bar. */
const OWN_B_HALVES = "bbggddaagga7ee";

/** Epic's and Legendary's pedal: up under the tune, changed at each chord in our own bars. */
function pedal(unitsPerBar: number): string {
  const up = repeat(`r:${unitsPerBar}`, 8);
  const changed = repeat(`P:${unitsPerBar / 2} P:${unitsPerBar / 2}`, 8);
  const changedB = repeat(`P:${unitsPerBar / 2} P:${unitsPerBar / 2}`, 7);
  return [up, changed, up, changedB, `P:${unitsPerBar}`].join(" | ");
}

export const nightOnBaldMountain: OurSong = {
  slug: "night-on-bald-mountain",
  title: "Night on Bald Mountain",
  aka: ["Night on the Bare Mountain", "Eine Nacht auf dem Kahlen Berge", "St. John's Eve on Bald Mountain"],
  source: {
    composer: "Modest Mussorgsky",
    died: 1881,
    published: 1886,
    edition:
      "Night on Bald Mountain, the brass theme's first two statements without their quick runs, from Konstantin Chernov's piano arrangement as the Mutopia Project's typeset prints it",
  },
  about:
    "Mussorgsky finished his musical picture of a witches' sabbath on Bald Mountain on St. John's Eve, 23 June 1867. " +
    "Five years after his death, Rimsky-Korsakov published his own arrangement of it in 1886. " +
    "Walt Disney's film Fantasia (1940) made it famous, in Leopold Stokowski's arrangement based on Rimsky-Korsakov's version.",
  funFact: "Together with Rimsky-Korsakov's Sadko, also from 1867, it is one of the first tone poems by a Russian composer.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: D_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      right: [TUNE_RIGHT, COMMON_OWN, TUNE_RIGHT, "F4/3:2 E4/2:2 | D4/1:4"].join(" | "),
      left: [bars(HELD, "AAAADDDD", 1), bars(HELD, "gbgada", 1), bars(HELD, "AAAADDDD", 1), "D3/1:2 A2/4:2 | A2+D3/4+1:4"].join(" | "),
      skills: ["five-finger-position", "held-bass", "position-change"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. The hand starts one step lower, on G.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds one note for a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the tune loud and heavy, like brass instruments calling in the night." },
        { fromBar: 4, toBar: 5, kind: "trick", text: "Use the long rest to move the right hand up to G." },
        { fromBar: 12, toBar: 13, kind: "fingering", text: "While A sounds, get ready to move the hand down. Finger 3 then lands on F." },
      ],
      tricky: {
        5: "The hand has moved up. Finger 2 plays A, and finger 3 plays B flat.",
        13: "Move the right hand down so the thumb sits on D. Finger 3 starts on F.",
        23: "Move the right hand down in the rest. Finger 3 plays F, and the thumb ends on D.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [scaled(TUNE_RIGHT, 2), OWN_A, scaled(TUNE_RIGHT, 2), OWN_B, "D4+A4/1+5:8"].join(" | "),
      left: bars(PULSE, `AAAADDDD${OWN_A_CHORDS}AAAADDDD${OWN_B_CHORDS}`, 1),
      skills: ["two-note-chords", "eighth-notes"],
      practice: [
        { text: "Play the first eight bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone. It plays on beats 1, 3 and 4 of every bar.", hands: "left", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on bars 9 to 16, slowly.", hands: "both", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the tune loud and heavy, like brass instruments calling in the night." },
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "Count four beats in each bar. The bass plays on beats 1, 3 and 4." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "The left hand never moves. Each finger keeps its own key." },
      ],
      tricky: {
        5: "The hand has moved up in the rest. Finger 2 plays A, and finger 3 plays B flat.",
        15: "Move the right hand down so finger 2 plays E. Finger 4 then plays G.",
        31: "Move the right hand down so the thumb lands on D at the end of the bar.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [TUNE_RUN_EIGHTHS, OWN_A_BIG, octaveUp(TUNE_RUN_EIGHTHS), OWN_B_BIG, "D4+F4+A4/1+3+5:8"].join(" | "),
      left: `${bars(BROKEN, `${TUNE_HALVES}${OWN_A_HALVES}${TUNE_HALVES}${OWN_B_HALVES}`, 2)} | D2+A2+D3/5+2+1:8`,
      pedal: pedal(8),
      skills: ["alberti-bass", "thumb-under", "pedal"],
      practice: [
        { text: "Play the left hand alone. Under the tune it jumps between two notes an octave apart.", hands: "left", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the run in bar 4 with the right hand alone. Pass the thumb under to G.", hands: "right", speed: 0.5, loop: [4, 5], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the pedal up under the tune, so every octave in the bass stays sharp." },
        { fromBar: 4, toBar: 5, kind: "fingering", text: "In the run, pass the thumb under to G, then climb with fingers 2 to 5." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
      ],
      tricky: {
        4: "Pass the thumb under to G, then let fingers 2, 3, 4 and 5 climb to D.",
        17: "The tune jumps up an octave. Use the rest before it to move the hand.",
        25: "Bring the hand down an octave in the rest. Fingers 3 and 5 take the first third.",
      },
    },
    legendary: {
      key: D_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [TUNE_RUN_SIXTEENTHS, scaled(OWN_A_BIG, 2), TUNE_OCTAVES, scaled(OWN_B_BIG, 2), "D4+F4+A4+D5/1+2+3+5:16"].join(" | "),
      left: `${bars(OCTAVE, `${TUNE_HALVES}${OWN_A_HALVES}${TUNE_HALVES}${OWN_B_HALVES}`, 2)} | D2+A2+D3/5+2+1:16`,
      pedal: pedal(16),
      skills: ["sixteenth-notes", "octave-bass", "melody-in-chords"],
      practice: [
        { text: "Play the run in bars 4 and 5 with the right hand alone, very slowly.", hands: "right", speed: 0.4, loop: [4, 5], wait: true },
        { text: "Play the left hand alone: the octave, then two quicker notes.", hands: "left", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the right hand's octaves alone. Keep the hand open, with the thumb and little finger ready.", hands: "right", speed: 0.5, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 4, toBar: 5, kind: "trick", text: "The run swirls up and down like the wind. Keep it light and even." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "Let the little finger sing the top note of each octave a little louder." },
        { fromBar: 32, toBar: 32, kind: "sound", text: "Play the last chord loud, and hold it until the sound fades." },
      ],
      tricky: {
        13: "The left hand jumps from the low D up to A and F. Use the short rest to jump back down.",
        14: "The left hand opens wide, from the low G up to B flat. Keep the wrist loose.",
        17: "The octaves begin. Open the hand with the thumb on A and the little finger on the A above.",
      },
    },
  },
  de: {
    about:
      "Mussorgski vollendete sein musikalisches Bild eines Hexensabbats auf dem Kahlen Berg in der Johannisnacht, am 23. Juni 1867. " +
      "Fünf Jahre nach seinem Tod veröffentlichte Rimski-Korsakow 1886 seine eigene Bearbeitung. " +
      "Walt Disneys Film Fantasia (1940) machte sie berühmt, in Leopold Stokowskis Bearbeitung nach Rimski-Korsakows Fassung.",
    funFact: "Zusammen mit Rimski-Korsakows Sadko, ebenfalls von 1867, ist es eine der ersten sinfonischen Dichtungen eines russischen Komponisten.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Die Hand beginnt einen Schritt tiefer, auf dem G.",
          "Jetzt die linke Hand allein. Sie hält einen Ton einen ganzen Takt lang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Spiel die Melodie laut und schwer, wie Blechbläser, die in die Nacht rufen.",
          "Nutz die lange Pause, um die rechte Hand hinauf zum G zu setzen.",
          "Mach dich bereit, die Hand nach unten zu setzen, während das A klingt. Dann landet Finger 3 auf dem F.",
        ],
        tricky: {
          5: "Die Hand ist nach oben gerückt. Finger 2 spielt das A, und Finger 3 spielt das B.",
          13: "Setz die rechte Hand nach unten, sodass der Daumen auf dem D liegt. Finger 3 beginnt auf dem F.",
          23: "Setz die rechte Hand in der Pause nach unten. Finger 3 spielt das F, und der Daumen endet auf dem D.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Sie spielt in jedem Takt auf den Schlägen 1, 3 und 4.",
          "Spiel die Takte 9 bis 16 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Spiel die Melodie laut und schwer, wie Blechbläser, die in die Nacht rufen.",
          "Zähl in jedem Takt vier Schläge. Der Bass spielt auf den Schlägen 1, 3 und 4.",
          "Die linke Hand bewegt sich nie. Jeder Finger bleibt auf seiner eigenen Taste.",
        ],
        tricky: {
          5: "Die Hand ist in der Pause nach oben gerückt. Finger 2 spielt das A, und Finger 3 spielt das B.",
          15: "Setz die rechte Hand nach unten, sodass Finger 2 das E spielt. Dann spielt Finger 4 das G.",
          31: "Setz die rechte Hand nach unten, sodass der Daumen am Ende des Takts auf dem D landet.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Unter der Melodie springt sie zwischen zwei Tönen hin und her, die eine Oktave auseinander liegen.",
          "Spiel den Lauf in Takt 4 nur mit der rechten Hand. Führ den Daumen unter zum G.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Lass das Pedal unter der Melodie oben, damit jede Oktave im Bass klar bleibt.",
          "Führ im Lauf den Daumen unter zum G, dann steig mit Finger 2 bis 5 weiter.",
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
        ],
        tricky: {
          4: "Führ den Daumen unter zum G, dann lass Finger 2, 3, 4 und 5 hinauf zum D steigen.",
          17: "Die Melodie springt eine Oktave höher. Nutz die Pause davor, um die Hand zu versetzen.",
          25: "Führ die Hand in der Pause eine Oktave tiefer. Finger 3 und 5 nehmen die erste Terz.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Lauf in Takt 4 und 5 nur mit der rechten Hand, ganz langsam.",
          "Spiel die linke Hand allein: die Oktave, dann zwei schnellere Töne.",
          "Spiel die Oktaven der rechten Hand allein. Halt die Hand offen, mit Daumen und kleinem Finger bereit.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Der Lauf wirbelt auf und ab wie der Wind. Spiel ihn leicht und gleichmäßig.",
          "Lass den kleinen Finger den oberen Ton jeder Oktave etwas lauter singen.",
          "Spiel den letzten Akkord laut, und halt ihn, bis der Klang verklingt.",
        ],
        tricky: {
          13: "Die linke Hand springt vom tiefen D hinauf zu A und F. Nutz die kurze Pause, um zurückzuspringen.",
          14: "Die linke Hand öffnet sich weit, vom tiefen G hinauf zum B. Halt das Handgelenk locker.",
          17: "Die Oktaven beginnen. Öffne die Hand, mit dem Daumen auf dem A und dem kleinen Finger auf dem A darüber.",
        },
      },
    },
  },
};

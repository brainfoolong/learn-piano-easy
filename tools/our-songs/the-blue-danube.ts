/**
 * *The Blue Danube*: the first waltz of Johann Strauss II's Op. 314, in four versions of ours.
 *
 * The tune is the waltz's opening phrase in D major, in 3/4 with eighths, read from a piano reduction.
 * It runs from the quarter upbeat after a half rest to the first high F sharp, and all five bars are
 * the hook. Every version goes on to play the whole first waltz. After bar 5 that is the arrangement's
 * own, and the meter does not match it against the tune.
 *
 * Every phrase of the waltz climbs from a low arpeggio to a high pair an octave up, then drops back. A
 * drop of 15 to 19 semitones every four bars is too many moves for one hand in the first weeks. So in
 * Common and Rare, after the hook, the right hand stays high and plays the octave leaps and the high
 * pairs. The low upbeat arpeggios pass to the left hand, as a pianist plays this waltz.
 *
 * Common moves the waltz to C major, in bars of 6/4 that join two bars of 3/4, so it stays short enough.
 * Its left hand only holds open fifths and single bass notes, so it leaves the low upbeats out. Its
 * fingers change with each chord, so the left hand moves only once. It drops two notes of the close and
 * holds the last C. Rare keeps D major and the 6/4 bars over a slow waltz bass. Its left hand plays the
 * low upbeats an octave down, and its A bars swap the bass between A and C sharp. Epic plays every note
 * of the waltz over a waltz bass with three-note chords and the pedal. It adds a third or a sixth under
 * the long high notes. Legendary plays an octave bass with chords, doubles the high notes in octaves and
 * ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const D_MAJOR: Key = { tonic: 2, mode: "major" };

/** The key Common moves the tune to. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 3/4, in eighths: the waltz's opening phrase, from the upbeat to the first high F sharp. */
const tune = "r:4 D4:2 | D4:2 F#4:2 A4:2 | A4:4 A5:2 | A5:4 F#5:2 | F#5:4 r:2";

/** Bars of 3/4 joined two by two into bars of 6/4. */
function inSixFour(bars: readonly string[]): string {
  const joined: string[] = [];
  for (let at = 0; at < bars.length; at += 2) joined.push(bars.slice(at, at + 2).join(" "));
  return joined.join(" | ");
}

/**
 * Bars of 3/4 from `chords`, one letter per bar, each bar the pattern of its letter in `patterns`. A
 * bar before another chord ends `last` instead, so the hand lifts before it moves.
 */
function chordBars(patterns: Record<string, [string, string]>, chords: string): string[] {
  return [...chords].map((chord, at) => {
    const [same, last] = patterns[chord]!;
    return chords[at + 1] === undefined || chords[at + 1] === chord ? same : last;
  });
}

/** The tune's chords from bar 2, one letter per bar, in D major: D, A7, G, E minor, E7, D over A. */
const CHORDS = "DDDDDDAAAAAAAADDDDDDDDGGeeEaDEADD";

/** A bar of rest in 3/4, in eighths. */
const REST = "r:6";

/** Epic's waltz: the bass, then a three-note chord twice, lifted at the end of every bar. */
const FULL_WALTZ: Record<string, [string, string]> = {
  D: ["D3/5:2 F#3+A3+D4/3+2+1:2 F#3+A3+D4/3+2+1:1 r:1", "D3/5:2 F#3+A3+D4/3+2+1:2 F#3+A3+D4/3+2+1:1 r:1"],
  A: ["A2/5:2 C#3+E3+G3/3+2+1:2 C#3+E3+G3/3+2+1:1 r:1", "A2/5:2 C#3+E3+G3/3+2+1:2 C#3+E3+G3/3+2+1:1 r:1"],
  G: ["G2/5:2 B2+D3+G3/3+2+1:2 B2+D3+G3/3+2+1:1 r:1", "G2/5:2 B2+D3+G3/3+2+1:2 B2+D3+G3/3+2+1:1 r:1"],
  e: ["E3/5:2 G3+B3+E4/4+2+1:2 G3+B3+E4/4+2+1:1 r:1", "E3/5:2 G3+B3+E4/4+2+1:2 G3+B3+E4/4+2+1:1 r:1"],
  E: ["E3/5:2 B3+D4/2+1:2 B3+D4/2+1:1 r:1", "E3/5:2 B3+D4/2+1:2 B3+D4/2+1:1 r:1"],
  a: ["A2/5:2 D3+F#3/2+1:2 D3+F#3/2+1:1 r:1", "A2/5:2 D3+F#3/2+1:2 D3+F#3/2+1:1 r:1"],
};

/** Legendary's waltz: the root in octaves, a jump up, then the chord twice. */
const OCTAVE_WALTZ: Record<string, [string, string]> = {
  D: ["D2+D3/5+1:1 r:1 F#3+A3+D4/3+2+1:2 F#3+A3+D4/3+2+1:1 r:1", ""],
  A: ["A1+A2/5+1:1 r:1 C#3+E3+G3/3+2+1:2 C#3+E3+G3/3+2+1:1 r:1", ""],
  G: ["G1+G2/5+1:1 r:1 B2+D3+G3/3+2+1:2 B2+D3+G3/3+2+1:1 r:1", ""],
  e: ["E2+E3/5+1:1 r:1 G3+B3+E4/4+2+1:2 G3+B3+E4/4+2+1:1 r:1", ""],
  E: ["E2+E3/5+1:1 r:1 B3+D4/2+1:2 B3+D4/2+1:1 r:1", ""],
  a: ["A1+A2/5+1:1 r:1 D3+F#3+A3/3+2+1:2 D3+F#3+A3/3+2+1:1 r:1", ""],
};
for (const pattern of Object.values(OCTAVE_WALTZ)) pattern[1] = pattern[0];

/**
 * Common's right hand in C major, one bar of 3/4 per entry. After the hook it plays only the octave
 * leaps and the high pairs, so the hand stays up and leaves out the low upbeats.
 */
const COMMON_RIGHT = [
  "r:4 C4/1:2",
  "C4/1:2 E4/2:2 G4/3:2",
  "G4/1:3 r:1 G5/5:2",
  "G5/5:4 E5/3:2",
  "E5/3:4 r:2",
  "r:6",
  "G4/1:3 r:1 G5/5:2",
  "G5/5:4 F5/4:2",
  "F5/4:4 r:2",
  "r:6",
  "A4/1:3 r:1 A5/5:2",
  "A5/5:4 F5/3:2",
  "F5/3:4 r:2",
  "r:6",
  "A4/1:3 r:1 A5/5:2",
  "A5/5:4 E5/2:2",
  "E5/2:4 r:2",
  "r:6",
  "C5/1:3 r:1 C6/5:2",
  "C6/5:4 G5/2:2",
  "G5/2:4 r:2",
  "r:6",
  "C5/1:3 r:1 C6/5:2",
  "C6/5:4 A5/4:2",
  "A5/4:4 r:2",
  "r:4 A4/1:2",
  "A4/2:6",
  "A4/2:4 G4/1:1 r:1",
  "E5/5:6",
  "E5/5:2 C5/3:1 r:1 E4/1:2",
  "E4/1:6",
  "A4/4:4 G4/3:2",
  "C4/1:1 r:1 C5/5:4",
  "C5/5:6",
];

/**
 * Common's left hand: one open fifth or bass note held through each bar of 3/4. The fingers change
 * with the chord so the hand never has to move.
 */
const COMMON_LEFT = [
  REST,
  ...Array.from({ length: 5 }, () => "C3+G3/3+1:6"),
  "C3+G3/3+1:5 r:1",
  ...Array.from({ length: 7 }, () => "G2+D3/5+2:6"),
  "G2+D3/5+2:5 r:1",
  ...Array.from({ length: 6 }, () => "C3+G3/3+1:6"),
  "C3+G3/5+1:6",
  "C3/2:5 r:1",
  "F2+C3/5+2:6",
  "F2+C3/5+2:5 r:1",
  "D3+A3/4+1:6",
  "D3+A3/4+1:5 r:1",
  "D3+A3/4+1:5 r:1",
  "C3+G3/5+2:5 r:1",
  "C3+G3/5+1:5 r:1",
  "D3/2:5 r:1",
  "G2+D3/5+2:5 r:1",
  "C3+G3/3+1:6",
  "C3+G3/3+1:6",
];

/**
 * Rare's right hand in D major, one bar of 3/4 per entry. After the hook it plays the octave leaps and
 * the high pairs, and the left hand takes the low upbeats.
 */
const RARE_RIGHT = [
  "r:4 D4/1:2",
  "D4/1:2 F#4/2:2 A4/3:2",
  "A4/1:4 A5/5:2",
  "A5/5:4 F#5/3:2",
  "F#5/3:4 r:2",
  "r:6",
  "A4/1:4 A5/5:2",
  "A5/5:4 G5/4:2",
  "G5/4:4 r:2",
  "r:6",
  "B4/1:4 B5/5:2",
  "B5/5:4 G5/3:2",
  "G5/3:4 r:2",
  "r:6",
  "B4/1:4 B5/5:2",
  "B5/5:4 F#5/2:2",
  "F#5/2:4 r:2",
  "r:6",
  "D5/1:4 D6/5:2",
  "D6/5:4 A5/2:2",
  "A5/2:4 r:2",
  "r:6",
  "D5/1:4 D6/5:2",
  "D6/5:4 B5/4:2",
  "B5/4:4 r:2",
  "r:4 B4/1:2",
  "B4/1:6",
  "B4/3:2 G#4/1:2 A4/2:1 r:1",
  "F#5/5:6",
  "F#5/5:2 D5/3:2 F#4/1:2",
  "F#4/1:4 E4/1:2",
  "B4/4:4 A4/3:2",
  "D4/1:3 D5/5:1 D5/5:2",
  "A4+D5/2+5:6",
];

/**
 * Rare's left hand: a slow waltz bass, one bar of 3/4 per entry. It plays the low upbeats an octave
 * down, and the A bars swap their bass between A and C sharp, so the hand stays in place.
 */
const RARE_LEFT = [
  REST,
  "D3/4:2 F#3+A3/2+1:2 F#3+A3/2+1:2",
  "D3/4:2 F#3+A3/2+1:2 F#3+A3/2+1:2",
  "D3/4:2 F#3+A3/2+1:2 F#3+A3/2+1:2",
  "D3/4:2 F#3+A3/2+1:2 D3/4:2",
  "D3/4:2 F#3/2:2 A3/1:2",
  "D3/4:2 F#3+A3/2+1:2 F#3+A3/2+1:1 r:1",
  "C#3/4:2 E3+G3/2+1:2 E3+G3/2+1:2",
  "A2/5:2 E3+G3/2+1:2 C#3/4:2",
  "C#3/5:2 E3/3:2 B3/1:2",
  "C#3/4:2 E3+G3/2+1:2 E3+G3/2+1:2",
  "A2/5:2 E3+G3/2+1:2 E3+G3/2+1:2",
  "A2/5:2 E3+G3/2+1:2 C#3/4:2",
  "C#3/5:2 E3/3:2 B3/1:2",
  "C#3/4:2 E3+G3/2+1:2 E3+G3/2+1:1 r:1",
  "D3/4:2 F#3+A3/2+1:2 F#3+A3/2+1:2",
  "D3/4:2 F#3+A3/2+1:2 D3/4:2",
  "D3/4:2 F#3/2:2 A3/1:2",
  "D3/4:2 F#3+A3/2+1:2 F#3+A3/2+1:2",
  "D3/4:2 F#3+A3/2+1:2 F#3+A3/2+1:2",
  "D3/4:2 F#3+A3/2+1:2 D3/4:2",
  "D3/4:2 F#3/2:2 A3/1:2",
  "D3/4:2 F#3+A3/2+1:2 F#3+A3/2+1:1 r:1",
  "B2/5:2 D3+G3/2+1:2 D3+G3/2+1:2",
  "G2/5:2 B2+D3/3+2:2 E3/1:2",
  "E3/5:2 G3/3:2 G3+B3/3+1:2",
  "E3/5:2 G3+B3/3+1:2 G3+B3/3+1:1 r:1",
  "E3/5:2 B3+D4/2+1:2 B3+D4/2+1:1 r:1",
  "A2/5:2 D3+F#3/2+1:2 D3+F#3/2+1:1 r:1",
  "D3/4:2 F#3+A3/2+1:2 F#3+A3/2+1:1 r:1",
  "E3/5:2 B3+D4/2+1:2 B3+D4/2+1:1 r:1",
  "A2/5:2 E3+G3/2+1:2 E3+G3/2+1:1 r:1",
  "D3/4:2 F#3+A3/2+1:2 F#3+A3/2+1:2",
  "D3+A3/4+1:6",
];

/** Epic's right hand: the tune, with a third or a sixth under the long high notes. */
const EPIC_RIGHT = [
  "r:4 D4/1:2",
  "D4/1:2 F#4/2:2 A4/3:2",
  "A4/1:4 F#5+A5/3+5:2",
  "F#5+A5/3+5:4 D5+F#5/1+3:2",
  "D5+F#5/1+3:3 r:1 D4/1:2",
  "D4/1:2 F#4/2:2 A4/3:2",
  "A4/1:4 F#5+A5/3+5:2",
  "C#5+A5/1+5:4 E5+G5/2+4:2",
  "E5+G5/2+4:3 r:1 C#4/1:2",
  "C#4/1:2 E4/2:2 B4/5:2",
  "B4/1:4 G5+B5/3+5:2",
  "G5+B5/3+5:4 E5+G5/1+3:2",
  "E5+G5/1+3:3 r:1 C#4/1:2",
  "C#4/1:2 E4/2:2 B4/5:2",
  "B4/1:4 G5+B5/3+5:2",
  "D5+B5/1+5:4 D5+F#5/1+3:2",
  "D5+F#5/1+3:3 r:1 D4/1:2",
  "D4/1:2 F#4/2:2 A4/3:1 r:1",
  "D5/1:4 F#5+D6/2+5:2",
  "F#5+D6/2+5:4 F#5+A5/2+4:2",
  "F#5+A5/2+4:3 r:1 D4/1:2",
  "D4/1:2 F#4/2:2 A4/3:1 r:1",
  "D5/1:4 F#5+D6/2+5:2",
  "B5+D6/3+5:4 G5+B5/1+3:2",
  "G5+B5/1+3:3 r:1 E4/1:2",
  "E4/1:2 G4/2:2 B4/4:2",
  "G4+B4/1+3:6",
  "B4/3:2 G#4/1:2 A4/2:2",
  "D5+F#5/3+5:6",
  "F#5/5:2 D5/3:2 F#4/1:2",
  "F#4/2:4 E4/1:2",
  "B4/5:4 A4/4:2",
  "D4/1:3 D5/5:1 D5/5:2",
  "F#4+A4+D5/1+2+5:6",
];

/** Legendary's right hand: the tune, with its high notes doubled an octave below. */
const LEGENDARY_RIGHT = [
  "r:4 D4/1:2",
  "D4/1:2 F#4/2:2 A4/3:2",
  "A4/1:4 A4+A5/1+5:2",
  "A4+A5/1+5:4 F#4+F#5/1+5:2",
  "F#4+F#5/1+5:3 r:1 D4/1:2",
  "D4/1:2 F#4/2:2 A4/3:2",
  "A4/1:4 A4+A5/1+5:2",
  "A4+A5/1+5:4 G4+G5/1+5:2",
  "G4+G5/1+5:3 r:1 C#4/1:2",
  "C#4/1:2 E4/2:2 B4/5:2",
  "B4/1:4 B4+B5/1+5:2",
  "B4+B5/1+5:3 r:1 G4+G5/1+5:2",
  "G4+G5/1+5:3 r:1 C#4/1:2",
  "C#4/1:2 E4/2:2 B4/5:2",
  "B4/1:4 B4+B5/1+5:2",
  "B4+B5/1+5:3 r:1 F#4+F#5/1+5:2",
  "F#4+F#5/1+5:3 r:1 D4/1:2",
  "D4/1:2 F#4/2:2 A4/3:1 r:1",
  "D5/1:4 D5+D6/1+5:2",
  "D5+D6/1+5:3 r:1 A4+A5/1+5:2",
  "A4+A5/1+5:3 r:1 D4/1:2",
  "D4/1:2 F#4/2:2 A4/3:1 r:1",
  "D5/1:4 D5+D6/1+5:2",
  "D5+D6/1+5:4 B4+B5/1+5:2",
  "B4+B5/1+5:3 r:1 E4/1:2",
  "E4/1:2 G4/2:2 B4/4:2",
  "E4+G4+B4/1+2+4:6",
  "B4/3:2 G#4/2:2 A4/1:2",
  "F#4+F#5/1+5:6",
  "F#4+F#5/1+5:1 r:1 D4+D5/1+5:2 F#4/1:2",
  "F#4/2:4 E4/1:2",
  "B4/5:4 A4/4:2",
  "D4/1:3 D5/5:1 D5/5:2",
  "D4+F#4+A4+D5/1+2+3+5:6",
];

/** The pedal of Epic and Legendary: none in the upbeat bar, then changed on every bar line. */
const PEDAL = [REST, ...Array.from({ length: 33 }, () => "P:6")].join(" | ");

export const theBlueDanube: OurSong = {
  slug: "the-blue-danube",
  title: "The Blue Danube",
  aka: ["An der schönen blauen Donau"],
  collection: "film",
  source: {
    composer: "Johann Strauss II",
    died: 1899,
    published: 1867,
    edition:
      "An der schönen blauen Donau, Op. 314 (1867), its first waltz, read from Nikos Kouremenos's piano reduction for the Mutopia Project after Christian Mondrup's four-hand edition, moved back to D major",
  },
  about:
    "Johann Strauss II wrote this waltz in 1866 and 1867 for a men's choir in Vienna. " +
    "Its version for orchestra alone became a hit at the World's Fair in Paris in 1867. " +
    "In the film *2001: A Space Odyssey* (1968), spaceships dock to its music.",
  funFact: "By tradition, the Vienna Philharmonic plays it near the end of its New Year's Concert every year.",
  mythic: null,
  tune: { text: tune, numerator: 3, denominator: 4, steps: 2, key: D_MAJOR, hookBars: [1, 5] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 112,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: inSixFour(COMMON_RIGHT),
      left: inSixFour(COMMON_LEFT),
      skills: ["position-change", "open-fifths"],
      practice: [
        { text: "Play the first three bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 3], wait: true },
        { text: "Practise the octave leaps: thumb on the low note, then lift the hand in the short rest and land finger 5 an octave up.", hands: "right", speed: 0.6, loop: [3, 7], wait: true },
        { text: "Now the left hand alone. It holds one open fifth or one bass note for each count of three.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Start with the thumb on middle C. The rising C, E and G take fingers 1, 2 and 3." },
        { fromBar: 2, toBar: 2, kind: "trick", text: "The repeated G changes from finger 3 to the thumb, so finger 5 reaches the high G." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Lean on the first beat of each three, and play the other two lightly. That is the waltz." },
      ],
      tricky: {
        6: "Put the thumb on A, then lift the hand in the short rest and land finger 5 on the A above.",
        12: "Here the tune reaches the high C. In the left hand, finger 2 holds C alone, so finger 5 can take the low F.",
        13: "Lift finger 4 off the high A, and land with the thumb on the A an octave down. The left hand moves up to D and A.",
      },
    },
    rare: {
      key: D_MAJOR,
      bpm: 120,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: inSixFour(RARE_RIGHT),
      left: inSixFour(RARE_LEFT),
      skills: ["waltz-bass", "position-change"],
      practice: [
        { text: "Play the first eight bars with the right hand alone, slowly.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone: a bass note, then the chord twice. Where the right hand rests, it climbs through the low notes.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first four bars, where the tune passes from the right hand to the left and back.", hands: "both", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "rhythm", text: "Count one, two, three in each half of a bar. The bass falls on every one." },
        { fromBar: 9, toBar: 10, kind: "trick", text: "The right hand rests while the left climbs. Then the thumb lands on D, and finger 5 reaches the D an octave up." },
        { fromBar: 14, toBar: 14, kind: "fingering", text: "The G sharp is a black key. Take it with the thumb, then finger 2 plays A." },
      ],
      tricky: {
        12: "The right hand spans the octave from D to the high D. The left hand drops to B for the G chord.",
        15: "Lift the hand after A, and land with finger 5 on the high F sharp. The left hand jumps down to A.",
        16: "The thumb plays F sharp, then moves down to E. The left hand jumps down to A again.",
      },
    },
    epic: {
      key: D_MAJOR,
      bpm: 152,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: EPIC_RIGHT.join(" | "),
      left: [REST, ...chordBars(FULL_WALTZ, CHORDS).slice(0, -1), "D2+A2+D3/5+2+1:6"].join(" | "),
      pedal: PEDAL,
      skills: ["waltz-bass", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the waltz bass alone: the low note, then the chord twice, light and short.", hands: "left", speed: 0.5, loop: [2, 9], wait: false },
        { text: "Play the right hand's thirds and sixths alone. Press both notes of each pair together.", hands: "right", speed: 0.6, loop: [2, 9], wait: true },
        { text: "Join the hands on bars 1 to 9, slowly.", hands: "both", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "sound", text: "Keep the chords soft and short, so the tune floats above them." },
        { fromBar: 2, toBar: 9, kind: "sound", text: "Change the pedal on every bar line, as the new bass note sounds." },
        { fromBar: 18, toBar: 19, kind: "trick", text: "The hand lifts after A, then the thumb lands on the D above it." },
      ],
      tricky: {
        21: "Lift the pair of notes a little early, then drop the thumb onto the low D.",
        26: "Climb E, G and B with fingers 1, 2 and 4. Then thumb and finger 3 hold G and B.",
        34: "Spread the hand for the last chord: thumb on F sharp, finger 2 on A and finger 5 on D.",
      },
    },
    legendary: {
      key: D_MAJOR,
      bpm: 176,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: LEGENDARY_RIGHT.join(" | "),
      left: [REST, ...chordBars(OCTAVE_WALTZ, CHORDS).slice(0, -1), "D1+D2/5+1:6"].join(" | "),
      pedal: PEDAL,
      skills: ["octave-bass", "melody-in-chords", "waltz-bass"],
      practice: [
        { text: "Play the octave bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [2, 9], wait: false },
        { text: "Play the right hand's octaves alone. Keep the hand open, with thumb and finger 5 ready.", hands: "right", speed: 0.5, loop: [3, 9], wait: true },
        { text: "Join the hands on bars 18 to 25, where the tune reaches its highest notes.", hands: "both", speed: 0.6, loop: [18, 25], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "trick", text: "In the octave bass, look at the low note and let the hand find the chord by feel." },
        { fromBar: 3, toBar: 4, kind: "fingering", text: "Thumb and finger 5 take every octave. Keep the hand in that shape as it moves." },
        { fromBar: 19, toBar: 24, kind: "sound", text: "Let the top note of each octave sing, and keep the thumb lighter." },
      ],
      tricky: {
        8: "The octave steps down from A to G. Keep the hand's shape, and move it as one.",
        24: "Lift the octave D a little early, then land on the octave B in the same shape.",
        29: "The hand opens from A to the octave F sharp. Lift it, then land on both notes together.",
      },
    },
  },
  de: {
    about:
      "Johann Strauss II schrieb diesen Walzer 1866 und 1867 für einen Männerchor in Wien. " +
      "Seine Fassung nur für Orchester wurde 1867 auf der Weltausstellung in Paris ein Erfolg. " +
      "Im Film *2001: Odyssee im Weltraum* (1968) docken Raumschiffe zu seiner Musik an.",
    funFact: "Die Wiener Philharmoniker spielen ihn nach alter Tradition jedes Jahr gegen Ende ihres Neujahrskonzerts.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten drei Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Übe die Oktavsprünge: Daumen auf den tiefen Ton, dann heb die Hand in der kurzen Pause und lande mit Finger 5 eine Oktave höher.",
          "Jetzt die linke Hand allein. Sie hält eine leere Quinte oder einen Basston für jedes Zählen bis drei.",
          "Spiel die ersten acht Takte mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Fang mit dem Daumen auf dem mittleren C an. Das steigende C, E und G nehmen Finger 1, 2 und 3.",
          "Beim wiederholten G wechselst du von Finger 3 zum Daumen, damit Finger 5 das hohe G erreicht.",
          "Betone den ersten Schlag jeder Drei, und spiel die anderen zwei leicht. Das ist der Walzer.",
        ],
        tricky: {
          6: "Setz den Daumen auf das A, dann heb die Hand in der kurzen Pause und lande mit Finger 5 auf dem A darüber.",
          12: "Hier erreicht die Melodie das hohe C. Links hält Finger 2 das C allein, damit Finger 5 das tiefe F nehmen kann.",
          13: "Heb Finger 4 vom hohen A, und lande mit dem Daumen auf dem A eine Oktave tiefer. Die linke Hand geht hinauf zu D und A.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten acht Takte langsam nur mit der rechten Hand.",
          "Spiel die linke Hand allein: einen Basston, dann zweimal den Akkord. Wo die rechte Hand pausiert, steigt sie durch die tiefen Töne.",
          "Spiel die ersten vier Takte mit beiden Händen zusammen. Dort wandert die Melodie von der rechten Hand zur linken und zurück.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Zähl eins, zwei, drei in jeder Hälfte eines Takts. Der Bass kommt auf jede Eins.",
          "Die rechte Hand pausiert, während die linke steigt. Dann landet der Daumen auf dem D, und Finger 5 greift das D eine Oktave höher.",
          "Das Gis ist eine schwarze Taste. Nimm es mit dem Daumen, dann spielt Finger 2 das A.",
        ],
        tricky: {
          12: "Die rechte Hand spannt die Oktave vom D zum hohen D. Die linke Hand geht für den G-Akkord hinab zum H.",
          15: "Heb die Hand nach dem A, und lande mit Finger 5 auf dem hohen Fis. Die linke Hand springt hinab zum A.",
          16: "Der Daumen spielt Fis, dann rückt er hinab zum E. Die linke Hand springt wieder hinab zum A.",
        },
      },
      epic: {
        practice: [
          "Spiel den Walzerbass allein: den tiefen Ton, dann zweimal den Akkord, leicht und kurz.",
          "Spiel die Terzen und Sexten der rechten Hand allein. Drück beide Töne jedes Paars zusammen.",
          "Spiel die Takte 1 bis 9 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Spiel die Akkorde leise und kurz, damit die Melodie über ihnen schwebt.",
          "Wechsle das Pedal an jedem Taktstrich, sobald der neue Basston klingt.",
          "Die Hand hebt sich nach dem A, dann landet der Daumen auf dem D darüber.",
        ],
        tricky: {
          21: "Heb das Tonpaar etwas früher ab, dann lass den Daumen auf das tiefe D fallen.",
          26: "Steig E, G und H mit Finger 1, 2 und 4 hinauf. Dann halten Daumen und Finger 3 das G und das H.",
          34: "Spreiz die Hand für den letzten Akkord: Daumen auf Fis, Finger 2 auf A und Finger 5 auf D.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Oktavbass allein: Spring hinunter zur Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Oktaven der rechten Hand allein. Halt die Hand offen, mit Daumen und Finger 5 bereit.",
          "Spiel die Takte 18 bis 25 mit beiden Händen zusammen. Dort erreicht die Melodie ihre höchsten Töne.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau beim Oktavbass auf den tiefen Ton, und lass die Hand den Akkord nach Gefühl finden.",
          "Daumen und Finger 5 nehmen jede Oktave. Halt die Hand in dieser Form, während sie wandert.",
          "Lass den oberen Ton jeder Oktave singen, und spiel den Daumen leiser.",
        ],
        tricky: {
          8: "Die Oktave geht von A hinab zu G. Halt die Form der Hand, und beweg sie als Ganzes.",
          24: "Heb die Oktave D etwas früher ab, dann lande in derselben Form auf der Oktave H.",
          29: "Die Hand öffnet sich vom A zur Oktave Fis. Heb sie, dann lande auf beiden Tönen zugleich.",
        },
      },
    },
  },
};

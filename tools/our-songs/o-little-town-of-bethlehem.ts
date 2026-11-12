/**
 * *O Little Town of Bethlehem*: Lewis Redner's tune *St. Louis*, in four versions of ours.
 *
 * The tune is *St. Louis*, sung in the United States and Canada. It is not *Forest Green*, the tune
 * sung in the United Kingdom. The score is in G major, and the tune here is a fourth higher, in C major.
 * A bar holding the one-beat pickup comes first.
 *
 * The score is in 4/4, and every length here is twice as long, in 4/2. A half note is one beat, so the
 * score's eighths are quarters, and Common plays them. The hook is the pickup bar and the next four, the
 * opening phrase the song is known by. The D sharp of bars 2 and 14 is a neighbour note of E.
 *
 * Common plays the tune once over held fifths and bass notes, and Rare plays it over block chords. Both
 * keep each hand in one place. The right hand lifts for an eighth before each leap wider than a fifth.
 * Epic puts an Alberti bass under the first verse and plays the second an octave up, with the pedal.
 * Legendary sets the first verse over a stride bass, then the tune in octaves over arpeggios, and ends
 * on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, a fourth above the score's G major. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 4/2, in quarters: the pickup bar, then four phrases of four bars. */
const tune = [
  "r:6 E5:2",
  "E5:2 E5:2 D#5:2 E5:2 | G5:2 F5:2 A4:2 D5:2 | C5:2 B4:1 C5:1 D5:2 G4:2 | E5:6 E5:2",
  "E5:2 E5:2 A5:2 G5:2 | G5:2 F5:2 A4:2 D5:2 | C5:2 B4:1 C5:1 E5:2 D5:2 | C5:6 E5:2",
  "E5:2 E5:2 D5:2 C5:2 | B4:4 B4:2 B4:2 | A4:2 B4:2 C5:2 D5:2 | E5:6 E5:2",
  "E5:2 E5:2 D#5:2 E5:2 | G5:2 F5:2 A4:2 A5:2 | G5:2 C5:2 E5:3 D5:1 | C5:6 r:2",
].join(" | ");

/** The pickup bar in the right hand, in eighths: finger 3 on E. */
const PICKUP = "r:12 E5/3:4";

/**
 * The tune's bars 1 to 15 in the right hand, in eighths. The hand never leaves its place, and it lifts
 * for an eighth before each leap wider than a fifth.
 */
const VERSE = [
  "E5/3:4 E5/3:4 D#5/2:4 E5/3:4 | G5/5:4 F5/4:3 r:1 A4/1:4 D5/3:4 | C5/2:4 B4/1:2 C5/2:2 D5/3:4 G4/1:3 r:1 | E5/3:12 E5/3:4",
  "E5/3:4 E5/3:4 A5/5:4 G5/4:4 | G5/4:4 F5/3:3 r:1 A4/1:4 D5/3:4 | C5/2:4 B4/1:2 C5/2:2 E5/4:4 D5/3:4 | C5/2:12 E5/4:4",
  "E5/5:4 E5/5:4 D5/4:4 C5/3:4 | B4/2:8 B4/2:4 B4/2:4 | A4/1:4 B4/2:4 C5/3:4 D5/4:4 | E5/5:12 E5/3:4",
  "E5/3:4 E5/3:4 D#5/2:4 E5/3:4 | G5/5:4 F5/4:3 r:1 A4/1:3 r:1 A5/5:4 | G5/4:4 C5/1:4 E5/3:6 D5/2:2",
].join(" | ");

/** The whole tune in the right hand, in eighths, for Common and Rare. */
const RIGHT = [PICKUP, VERSE, "C5/1:16"].join(" | ");

/**
 * The tune's bars 1 to 15 in octaves, in eighths, the tune on top. The hand lifts for an eighth before
 * each move wider than a minor third, so the octave never has to stretch.
 */
const OCTAVES = [
  "E5+E6/1+5:4 E5+E6/1+5:4 D#5+D#6/1+5:4 E5+E6/1+5:4 | G5+G6/1+5:4 F5+F6/1+5:3 r:1 A4+A5/1+5:3 r:1 D5+D6/1+5:4",
  "C5+C6/1+5:4 B4+B5/1+5:2 C5+C6/1+5:2 D5+D6/1+5:3 r:1 G4+G5/1+5:3 r:1 | E5+E6/1+5:12 E5+E6/1+5:4",
  "E5+E6/1+5:4 E5+E6/1+5:3 r:1 A5+A6/1+5:4 G5+G6/1+5:4 | G5+G6/1+5:4 F5+F6/1+5:3 r:1 A4+A5/1+5:3 r:1 D5+D6/1+5:4",
  "C5+C6/1+5:4 B4+B5/1+5:2 C5+C6/1+5:1 r:1 E5+E6/1+5:4 D5+D6/1+5:4 | C5+C6/1+5:11 r:1 E5+E6/1+5:4",
  "E5+E6/1+5:4 E5+E6/1+5:4 D5+D6/1+5:4 C5+C6/1+5:4 | B4+B5/1+5:8 B4+B5/1+5:4 B4+B5/1+5:4",
  "A4+A5/1+5:4 B4+B5/1+5:4 C5+C6/1+5:4 D5+D6/1+5:4 | E5+E6/1+5:12 E5+E6/1+5:4",
  "E5+E6/1+5:4 E5+E6/1+5:4 D#5+D#6/1+5:4 E5+E6/1+5:4 | G5+G6/1+5:4 F5+F6/1+5:3 r:1 A4+A5/1+5:3 r:1 A5+A6/1+5:4",
  "G5+G6/1+5:3 r:1 C5+C6/1+5:3 r:1 E5+E6/1+5:6 D5+D6/1+5:1 r:1",
].join(" | ");

/** `text` an octave higher. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** The chords of the tune's bars 1 to 15, one letter per half bar of 4/2: C, G seventh, D minor, A minor, G and F. */
const CHORDS = "CC SD AS CC CF SD AG CC CS GG DS CC CC SF CG";

/**
 * Bars of held shapes from `halves`, such as `"CC GD"`: one letter per half bar of 4/2 in eighths. Two
 * equal letters hold one shape for the whole bar.
 */
function heldBars(shapes: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map(([first, second]) => (first === second ? `${shapes[first!]}:16` : `${shapes[first!]}:8 ${shapes[second!]}:8`))
    .join(" | ");
}

/** Bars of `patterns` from `halves`, such as `"CC SD"`: one letter per half bar of 4/2, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** A held fifth or bass note, the hand kept on C to G: C, G, F, D minor, and E for C over E. */
const HELD: Record<string, string> = {
  C: "C3+G3/5+1",
  G: "D3+G3/4+1",
  F: "F3/2",
  D: "D3/4",
  E: "E3/3",
};

/**
 * A block chord or fifth, the hand kept on C to G: C as `T`, the fifth C and G as `c`, G seventh as `S`,
 * D minor as `d`, E and G as `e`, the fifth D and G as `g`, and F over C as `f`.
 */
const BLOCK: Record<string, string> = {
  T: "C3+E3+G3/5+3+1",
  c: "C3+G3/5+1",
  S: "D3+F3+G3/4+2+1",
  d: "D3+F3/4+2",
  e: "E3+G3/3+1",
  g: "D3+G3/4+1",
  f: "C3+F3/5+2",
};

/** The four notes of each Alberti bass: low, high, middle, high. */
const ALBERTI_NOTES: Record<string, string[]> = {
  C: ["C3/5", "G3/1", "E3/3", "G3/1"],
  S: ["D3/5", "G3/1", "F3/2", "G3/1"],
  D: ["D3/5", "A3/1", "F3/3", "A3/1"],
  A: ["C3/5", "A3/1", "E3/3", "A3/1"],
  G: ["B2/5", "G3/1", "D3/3", "G3/1"],
  F: ["C3/5", "A3/1", "F3/2", "A3/1"],
};

/** Half a bar of Alberti bass in quarters, for Epic's first verse. */
const ALBERTI_QUARTERS: Record<string, string> = Object.fromEntries(
  Object.entries(ALBERTI_NOTES).map(([chord, notes]) => [chord, notes.map((note) => `${note}:2`).join(" ")]),
);

/**
 * Half a bar of Alberti bass in eighths, played twice, for Epic's second verse. A minor turns its second
 * time around, so no C sounds under the tune's B on the second beat.
 */
const ALBERTI_EIGHTHS: Record<string, string> = Object.fromEntries(
  Object.entries(ALBERTI_NOTES).map(([chord, notes]) => {
    const second = chord === "A" ? ["E3/3", "A3/1", "C3/5", "A3/1"] : notes;
    return [chord, [...notes, ...second].map((note) => `${note}:1`).join(" ")];
  }),
);

/** Half a bar of stride in eighths: the root in octaves, then the chord, each with a rest for the jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:3 r:1 E3+G3+C4/3+2+1:3 r:1",
  G: "G1+G2/5+1:3 r:1 B2+D3+G3/5+3+1:3 r:1",
  S: "G1+G2/5+1:3 r:1 D3+F3+G3/4+2+1:3 r:1",
  F: "F1+F2/5+1:3 r:1 A2+C3+F3/5+3+1:3 r:1",
  D: "D2+D3/5+1:3 r:1 D3+F3+A3/5+3+1:3 r:1",
  A: "A1+A2/5+1:3 r:1 A2+E3+A3/5+2+1:3 r:1",
};

/** Half a bar of arpeggio in eighths, two octaves up from the root, then a rest for the jump back down. */
const ARPEGGIO: Record<string, string> = {
  C: "C2/5:1 G2/3:1 C3/2:1 E3/1:1 G3/3:1 C4/2:1 E4/1:1 r:1",
  G: "G1/5:1 D2/3:1 G2/2:1 B2/1:1 D3/3:1 G3/2:1 B3/1:1 r:1",
  S: "G1/5:1 D2/3:1 G2/2:1 D3/1:1 F3/3:1 G3/2:1 D4/1:1 r:1",
  F: "F1/5:1 C2/3:1 F2/2:1 A2/1:1 C3/3:1 F3/2:1 A3/1:1 r:1",
  D: "D2/5:1 A2/3:1 D3/2:1 F3/1:1 A3/3:1 D4/2:1 F4/1:1 r:1",
  A: "A1/5:1 E2/3:1 A2/2:1 C3/1:1 E3/3:1 A3/2:1 C4/1:1 r:1",
};

/** The pedal of Epic and Legendary: up in the pickup bar, changed every half bar, then held through the last chord. */
const PEDAL = ["r:16", ...Array(31).fill("P:8 P:8"), "P:16"].join(" | ");

export const oLittleTownOfBethlehem: OurSong = {
  slug: "o-little-town-of-bethlehem",
  title: "O Little Town of Bethlehem",
  source: {
    composer: "Lewis Redner",
    died: 1908,
    published: 1868,
    edition: "Lewis Redner's St. Louis (1868), as Wikipedia engraves it in G major",
  },
  about:
    "Phillips Brooks, an Episcopal priest in Philadelphia, wrote the words in 1868 for his church. " +
    "A visit to the village of Bethlehem three years before had inspired him. " +
    "His organist, Lewis Redner, wrote this tune for it, called St. Louis. " +
    "The United States and Canada sing the carol to this tune, and the United Kingdom and Ireland sing it to another.",
  funFact: "Redner said he woke in the night hearing an angel-strain whispering in his ear, and jotted the tune down.",
  mythic: null,
  collection: "christmas",
  aka: ["St. Louis"],
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 5] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 144,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: RIGHT,
      left: ["r:16", heldBars(HELD, "CC GD EG CC CF GD EG CC CG GG DG CC CC GF CG CC")].join(" | "),
      skills: ["held-bass", "open-fifths"],
      practice: [
        { text: "Play the first five bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play bars 6 to 9 with the right hand alone, where the tune climbs to the high A.", hands: "right", speed: 0.6, loop: [6, 9], wait: true },
        { text: "Now the left hand alone. It changes its shape only at the start or the middle of a bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 2, kind: "fingering", text: "The D sharp is the black key just below E. Finger 2 dips onto it and back." },
        { fromBar: 3, toBar: 4, kind: "trick", text: "Lift the hand for a moment before each low note, and land the thumb on it." },
        { fromBar: 4, toBar: 4, kind: "rhythm", text: "The two quick notes, B and C, share one beat between them." },
      ],
      tricky: {
        6: "Finger 3 plays E twice, then finger 5 reaches up to A, and finger 4 takes G.",
        10: "Finger 5 takes over the E, then fingers 5, 4 and 3 walk down to C.",
        15: "Lift after the F and land the thumb on the low A. Then lift again, so finger 5 lands on the high A.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 152,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: RIGHT,
      left: ["r:16", heldBars(BLOCK, "Tc Sd eS TT Tf Sd eg TT TS gg dS TT Tc Sf Tg TT")].join(" | "),
      skills: ["triads", "two-note-chords"],
      practice: [
        { text: "Play the left hand alone, and press the notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the right hand alone on the first five bars, the song's opening.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Join the hands on the first nine bars, slowly.", hands: "both", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 2, kind: "sound", text: "Under the D sharp, the left hand plays only C and G, so the two hands never rub." },
        { fromBar: 2, toBar: 17, kind: "sound", text: "Hold each chord softly for its whole length, like a quiet organ." },
        { fromBar: 15, toBar: 15, kind: "trick", text: "Lift the right hand after the A, and land finger 5 on the A an octave up." },
      ],
      tricky: {
        6: "Finger 3 plays E twice, then finger 5 reaches up to A. The left hand moves from C to F halfway through.",
        10: "Finger 5 takes over the E, and the tune walks down to C. The left hand changes to the G chord halfway.",
        15: "Lift the right hand twice: once for the low A, and once for the A an octave above it.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [
        PICKUP,
        VERSE,
        "C5/1:11 r:1 E6/3:4",
        octaveUp(VERSE.replace(/D5\/2:2$/, "D5/2:1 r:1")),
        "E5+G5+C6/1+2+5:16",
      ].join(" | "),
      left: ["r:16", halfBars(ALBERTI_QUARTERS, CHORDS), halfBars(ALBERTI_QUARTERS, "CC"), halfBars(ALBERTI_EIGHTHS, CHORDS), "C3+E3+G3/5+3+1:16"].join(" | "),
      pedal: PEDAL,
      skills: ["alberti-bass", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the quicker Alberti bass of the second verse alone.", hands: "left", speed: 0.5, loop: [18, 21], wait: false },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.5, loop: [1, 17], wait: true },
        { text: "Play the whole song with both hands at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 17, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 17, toBar: 18, kind: "trick", text: "Lift the right hand after the long C, and land finger 3 on the E an octave up." },
        { fromBar: 18, toBar: 33, kind: "sound", text: "Change the pedal each half bar, as the left hand starts a new chord." },
      ],
      tricky: {
        17: "Hold the long C with the thumb, then lift the hand and land finger 3 on the E an octave up.",
        19: "The tune drops from F to A, while the left hand plays its Alberti bass twice as fast.",
        33: "Lift after the short D, then play E, G and C together with fingers 1, 2 and 5.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 144,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [PICKUP, VERSE, "C5/1:11 r:1 E5+E6/1+5:4", OCTAVES, "C5+E5+G5+C6/1+2+3+5:16"].join(" | "),
      left: ["r:16", halfBars(STRIDE, CHORDS), halfBars(STRIDE, "CC"), halfBars(ARPEGGIO, CHORDS), "C2+G2+C3/5+2+1:16"].join(" | "),
      pedal: PEDAL,
      skills: ["stride", "arpeggios"],
      practice: [
        { text: "Play the stride bass alone: jump down for the low octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand's octaves alone, with the thumb and finger 5 kept in one shape.", hands: "right", speed: 0.5, loop: [18, 21], wait: true },
        { text: "Play the arpeggios of the second verse in the left hand alone.", hands: "left", speed: 0.5, loop: [18, 21], wait: false },
        { text: "Join the hands on the whole song at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 17, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 18, toBar: 32, kind: "fingering", text: "Keep the thumb and finger 5 an octave apart, and lift the hand before each wider move." },
        { fromBar: 18, toBar: 32, kind: "sound", text: "Let the octaves ring like bells, and keep the arpeggios below them soft." },
      ],
      tricky: {
        20: "The octaves step C, B, C and D, then lift and drop to G. Keep the thumb and finger 5 in one shape.",
        22: "After the second E, lift the octave and land it on A, a fourth higher.",
        31: "Lift the octave twice: down to the low A, then up a whole octave to the high A.",
      },
    },
  },
};

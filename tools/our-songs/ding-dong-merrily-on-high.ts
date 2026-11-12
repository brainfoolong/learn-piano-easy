/**
 * *Ding Dong Merrily on High*: the dance tune *Branle de l'Official*, in four versions of ours.
 *
 * The tune is the whole verse: the opening phrase twice, then the refrain and its long falling run. The
 * score is in B-flat major, and the tune here is a whole step higher, in C major, at the score's own
 * octave. The score is in 4/4, and every length here is twice as long, in 4/2, so its eighths are quarters
 * and Common plays them. The hook is bars 9 to 12, the falling run of the refrain.
 *
 * Each version writes two bars of the tune as one bar of 4/1. The hook then starts in the version's fifth
 * bar, inside the first 8 bars where the meter looks for it.
 *
 * Common plays the tune once over held fifths and bass notes. Its right hand holds still for the first
 * three steps of the run, then creeps down one key at a time, so it never jumps. Rare plays it twice, over block chords and then a bass and
 * chord in turns. Epic puts an Alberti bass under the first verse and plays the second an octave up over
 * broken chords, with the pedal. Legendary adds quick fills over a stride bass, then plays the tune in
 * octaves over arpeggios, and ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, a whole step above the score's B-flat major. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The opening phrase in 4/2, in quarters, which the verse plays twice. */
const OPENING = "C5:2 C5:2 D5:1 C5:1 B4:1 A4:1 | G4:6 G4:2 | A4:2 C5:2 C5:2 B4:2 | C5:4 C5:4";

/** The tune in 4/2, in quarters: the opening phrase twice, then the refrain. */
const tune = [
  OPENING,
  OPENING,
  "G5:3 F5:1 E5:1 F5:1 G5:1 E5:1 | F5:3 E5:1 D5:1 E5:1 F5:1 D5:1 | E5:3 D5:1 C5:1 D5:1 E5:1 C5:1",
  "D5:3 C5:1 B4:1 C5:1 D5:1 B4:1 | C5:3 B4:1 A4:1 B4:1 C5:1 A4:1 | B4:3 A4:1 G4:2 G4:2",
  "A4:2 C5:2 C5:2 B4:2 | C5:4 C5:4",
].join(" | ");

/** The opening phrase's first three bars in the right hand, in quarters, fingered from the thumb on G. */
const OPENING_RIGHT = "C5/4:2 C5/4:2 D5/5:1 C5/4:1 B4/3:1 A4/2:1 | G4/1:6 G4/1:2 | A4/2:2 C5/4:2 C5/4:2 B4/3:2";

/**
 * The refrain in the right hand, in quarters. Each bar starts one key lower with the same fingers, so
 * the hand creeps down the run and never jumps.
 */
const REFRAIN_RIGHT = [
  "G5/5:3 F5/4:1 E5/3:1 F5/4:1 G5/5:1 E5/3:1 | F5/4:3 E5/3:1 D5/2:1 E5/3:1 F5/4:1 D5/2:1",
  "E5/3:3 D5/2:1 C5/1:1 D5/2:1 E5/3:1 C5/1:1 | D5/3:3 C5/2:1 B4/1:1 C5/2:1 D5/3:1 B4/1:1",
  "C5/3:3 B4/2:1 A4/1:1 B4/2:1 C5/3:1 A4/1:1 | B4/3:3 A4/2:1 G4/1:2 G4/1:2",
  "A4/2:2 C5/4:2 C5/4:2 B4/3:2 | C5/4:4 C5/4:4",
].join(" | ");

/** The whole tune in the right hand, in quarters, bar by bar of 4/2. The thumb takes the last C before the run. */
const TUNE_RIGHT = [OPENING_RIGHT, "C5/4:4 C5/4:4", OPENING_RIGHT, "C5/4:4 C5/1:4", REFRAIN_RIGHT].join(" | ");

/** `text`, written in bars of 4/2, with every two bars joined into one bar of 4/1. */
function twoPerBar(text: string): string {
  const bars = text.split(" | ");
  const joined: string[] = [];
  for (let at = 0; at < bars.length; at += 2) joined.push(bars.slice(at, at + 2).join(" "));
  return joined.join(" | ");
}

/** Bars of `patterns` from `halves`, such as `"CC GG"`: one letter per half bar of 4/2, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** `text` an octave higher. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** The chords of the verse, one letter per half bar of 4/2: C, G, F, G seventh without its B, D minor and A minor. */
const CHORDS = "CC GG FS CC CC GG FS CC CC DD CC GG AA GG FS CC";

/** One bar of 4/2 of a held fifth or bass note in quarters, the hand kept on C to G. */
const HELD: Record<string, string> = {
  C: "C3+G3/5+1:8",
  G: "D3+G3/4+1:8",
  F: "F3/2:8",
  D: "D3/4:8",
};

/** Half a bar of a block chord in quarters, the hand kept on C to G: C, G seventh, F over C or D minor. */
const BLOCK: Record<string, string> = {
  C: "C3+E3+G3/5+3+1:4",
  S: "D3+F3+G3/4+2+1:4",
  F: "C3+F3/5+2:4",
  D: "D3+F3/4+2:4",
};

/** Half a bar in quarters: a capital is the root, and a small letter the rest of its chord, the hand kept on C to G. */
const TURNS: Record<string, string> = {
  C: "C3/5:4",
  c: "E3+G3/3+1:4",
  G: "G3/1:4",
  g: "D3+F3/4+2:4",
  F: "F3/2:4",
  f: "C3/5:4",
  D: "D3/4:4",
  d: "F3/2:4",
  S: "D3+F3+G3/4+2+1:4",
};

/** Half a bar of Alberti bass in quarters: low, high, middle, high. `R` is C with a rest for the jump. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1",
  S: "D3/5:1 G3/1:1 F3/2:1 G3/1:1",
  F: "C3/5:1 A3/1:1 F3/2:1 A3/1:1",
  D: "D3/5:1 A3/1:1 F3/3:1 A3/1:1",
  A: "C3/5:1 A3/1:1 E3/3:1 A3/1:1",
  R: "C3/5:1 G3/1:1 E3/3:1 r:1",
};

/** Half a bar of broken chord in quarters: root, fifth, octave, fifth. `S` ends on a rest for the jump down to C. */
const BROKEN: Record<string, string> = {
  C: "C2/5:1 G2/2:1 C3/1:1 G2/2:1",
  G: "G2/5:1 D3/2:1 G3/1:1 D3/2:1",
  S: "G2/5:1 D3/2:1 G3/1:1 r:1",
  F: "F2/5:1 C3/2:1 F3/1:1 C3/2:1",
  D: "D2/5:1 A2/2:1 D3/1:1 A2/2:1",
  A: "A2/5:1 E3/2:1 A3/1:1 E3/2:1",
};

/** Half a bar of stride in eighths: the root in octaves, then the chord, each with a rest for the jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:3 r:1 E3+G3+C4/3+2+1:3 r:1",
  G: "G1+G2/5+1:3 r:1 B2+D3+G3/5+3+1:3 r:1",
  S: "G1+G2/5+1:3 r:1 D3+F3+G3/4+2+1:3 r:1",
  F: "F1+F2/5+1:3 r:1 A2+C3+F3/5+3+1:3 r:1",
  D: "D2+D3/5+1:3 r:1 D3+F3+A3/5+3+1:3 r:1",
  A: "A1+A2/5+1:3 r:1 A2+C3+E3/5+3+1:3 r:1",
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

/** The opening phrase's first three bars for Legendary, in eighths, with quick fills between the tune's notes. */
const OPENING_FILLS =
  "C5/4:4 C5/4:2 B4/3:1 C5/4:1 D5/5:2 C5/4:2 B4/3:2 A4/2:2 | G4/1:8 A4/2:1 B4/3:1 A4/2:2 G4/1:4 | " +
  "A4/2:4 C5/4:4 C5/4:2 D5/5:1 C5/4:1 B4/3:4";

/** The refrain for Legendary without its last bar, in eighths. Each long note rings like a bell, with a quick swing back. */
const REFRAIN_FILLS = [
  "G5/5:4 F5/4:1 G5/5:1 F5/4:2 E5/3:2 F5/4:2 G5/5:2 E5/3:2",
  "F5/4:4 E5/3:1 F5/4:1 E5/3:2 D5/2:2 E5/3:2 F5/4:2 D5/2:2",
  "E5/3:4 D5/2:1 E5/3:1 D5/2:2 C5/1:2 D5/2:2 E5/3:2 C5/1:2",
  "D5/3:4 C5/2:1 D5/3:1 C5/2:2 B4/1:2 C5/2:2 D5/3:2 B4/1:2",
  "C5/3:4 B4/2:1 C5/3:1 B4/2:2 A4/1:2 B4/2:2 C5/3:2 A4/1:2",
  "B4/3:4 A4/2:1 B4/3:1 A4/2:2 G4/1:4 G4/1:4",
  "A4/2:4 C5/4:4 C5/4:2 D5/5:1 C5/4:1 B4/3:4",
].join(" | ");

/** The opening phrase's first three bars in octaves, in eighths. */
const OPENING_OCTAVES =
  "C5+C6/1+5:4 C5+C6/1+5:4 D5+D6/1+5:2 C5+C6/1+5:2 B4+B5/1+5:2 A4+A5/1+5:2 | G4+G5/1+5:12 G4+G5/1+5:4 | " +
  "A4+A5/1+5:4 C5+C6/1+5:4 C5+C6/1+5:4 B4+B5/1+5:4";

export const dingDongMerrilyOnHigh: OurSong = {
  slug: "ding-dong-merrily-on-high",
  title: "Ding Dong Merrily on High",
  source: {
    composer: "Traditional",
    died: null,
    published: 1589,
    edition: "The dance tune Branle de l'Official from Thoinot Arbeau's Orchésographie (1589), as George Ratcliffe Woodward set it in 1924",
  },
  about:
    "This carol began as a dance tune called Branle de l'Official. " +
    "It was printed in 1589 in Orchésographie, a dance book by the French cleric Thoinot Arbeau. " +
    "The English composer George Ratcliffe Woodward wrote the carol's words, and it was published in 1924. " +
    "Charles Wood harmonised it.",
  funFact:
    "Thoinot Arbeau was a pen name. The man behind it was Jehan Tabourot.",
  mythic: null,
  collection: "christmas",
  aka: ["Branle de l'Official"],
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [9, 12] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 1,
      steps: 4,
      right: twoPerBar(TUNE_RIGHT),
      left: twoPerBar(halfBars(HELD, "C G F C C G F C C D C G F G F C")),
      skills: ["held-bass", "open-fifths"],
      practice: [
        { text: "Play the first two bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 2], wait: true },
        { text: "Play bars 5 to 7 with the right hand alone, where the tune runs down from the high G.", hands: "right", speed: 0.6, loop: [5, 7], wait: true },
        { text: "Now the left hand alone. It holds one shape for each half bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "The thumb starts on the G below the tune, and finger 4 plays the first C." },
        { fromBar: 4, toBar: 5, kind: "trick", text: "Play the last C with the thumb. The little finger then reaches up to the high G." },
        { fromBar: 5, toBar: 7, kind: "fingering", text: "The run falls one key with each long note. Fingers 5, 4 and 3 take the first three, then the hand moves down a key at a time." },
      ],
      tricky: {
        1: "Finger 4 plays C twice, then fingers 5, 4, 3 and 2 step down from D to A. The thumb holds the long G.",
        5: "The run starts on the high G with the little finger. Each long note starts the same pattern one key lower.",
        7: "Fingers 3, 2 and 1 play C, B and A, then B, C and A. Then they walk down B, A and G.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 180,
      numerator: 4,
      denominator: 1,
      steps: 4,
      right: [twoPerBar(TUNE_RIGHT), twoPerBar(TUNE_RIGHT)].join(" | "),
      left: [
        twoPerBar(halfBars(BLOCK, "CC SS FS CC CC SS FS CC CC DD CC SS FF SS FS CC")),
        twoPerBar(`${halfBars(TURNS, "Cc Gg FS Cc Cc Gg FS Cc Cc Dd Cc Gg Ff Gg FS")} | C3+E3+G3/5+3+1:8`),
      ].join(" | "),
      skills: ["triads", "dotted-rhythm"],
      practice: [
        { text: "Play the left hand alone, and press the notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 7 with the right hand alone, where the tune runs down from the high G.", hands: "right", speed: 0.6, loop: [5, 7], wait: true },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 5, toBar: 7, kind: "rhythm", text: "The run moves in groups of a long note and five quick ones. Hold each long note as long as three quick ones." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Hold each chord softly, so the bells of the tune ring above it." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "In the second verse, play the low note a little louder than the chord after it." },
      ],
      tricky: {
        5: "The run starts on the high G with the little finger. Each long note starts the same pattern one key lower.",
        7: "Fingers 3, 2 and 1 play C, B and A, then B, C and A. Then they walk down B, A and G.",
        15: "The same notes as bar 7, now over a bass note and a chord in turns.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 200,
      numerator: 4,
      denominator: 1,
      steps: 4,
      right: [
        twoPerBar(TUNE_RIGHT),
        twoPerBar(`${octaveUp(TUNE_RIGHT.slice(0, TUNE_RIGHT.lastIndexOf(" | ")))} | C6/4:4 E5+G5+C6/1+2+5:4`),
      ].join(" | "),
      left: [
        twoPerBar(halfBars(ALBERTI, "CC GG FS CC CC GG FS CC CC DD CC GG AA GG FS CR")),
        twoPerBar(`${halfBars(BROKEN, "CC GG FS CC CC GG FS CC CC DD CC GG AA GG FS")} | ${BROKEN.C} C2+G2+C3/5+2+1:4`),
      ].join(" | "),
      pedal: Array(16).fill("P:4 P:4 P:4 P:4").join(" | "),
      skills: ["alberti-bass", "broken-chords", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the run of bars 5 to 7 with the right hand alone.", hands: "right", speed: 0.6, loop: [5, 7], wait: true },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the Alberti bass soft, so the tune rings above it like a bell." },
        { fromBar: 8, toBar: 9, kind: "trick", text: "After the last C, the right hand jumps up an octave, and the left hand drops to a low C." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Change the pedal each half bar, as the left hand starts a new chord." },
      ],
      tricky: {
        9: "The right hand plays the opening an octave up. The left hand drops to the low C for its broken chord.",
        10: "The left hand plays F, then G with a rest, and jumps down to the low C.",
        12: "The same jump down to C as bar 10. Then the right thumb takes the last C, ready for the high G.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 192,
      numerator: 4,
      denominator: 1,
      steps: 8,
      right: [
        twoPerBar(
          [
            OPENING_FILLS,
            "C5/4:8 C5/4:4 D5/5:2 B4/3:2",
            OPENING_FILLS,
            "C5/4:8 C5/1:4 E5/3:2 F5/4:2",
            REFRAIN_FILLS,
            "C5/4:8 C5/1:4 E5/3:2 G5/5:2",
          ].join(" | "),
        ),
        twoPerBar(
          [
            OPENING_OCTAVES,
            "C5+C6/1+5:8 C5+C6/1+5:8",
            OPENING_OCTAVES,
            "C5+C6/1+5:8 C6/1:4 E6/3:2 F6/4:2",
            octaveUp(REFRAIN_FILLS),
            "C6/5:8 C5+E5+G5+C6/1+2+3+5:8",
          ].join(" | "),
        ),
      ].join(" | "),
      left: [
        twoPerBar(halfBars(STRIDE, CHORDS)),
        twoPerBar(`${halfBars(ARPEGGIO, "CC GG FS CC CC GG FS CC CC DD CC GG AA GG FS")} | ${ARPEGGIO.C} C2+G2+C3/5+2+1:8`),
      ].join(" | "),
      pedal: Array(16).fill("P:8 P:8 P:8 P:8").join(" | "),
      skills: ["stride", "arpeggios", "pedal"],
      practice: [
        { text: "Play the stride bass alone: jump down for the low octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the run of bars 5 to 7 with the right hand alone, and keep the quick swings light.", hands: "right", speed: 0.5, loop: [5, 7], wait: true },
        { text: "Play the arpeggios of the second verse in the left hand alone.", hands: "left", speed: 0.5, loop: [9, 12], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 5, toBar: 7, kind: "sound", text: "Each long note swings back and forth once, like a bell. Play the swing lighter than the tune." },
        { fromBar: 9, toBar: 12, kind: "fingering", text: "Keep the thumb and little finger stretched an octave apart, and let the wrist bounce." },
      ],
      tricky: {
        9: "The octaves on C, D, B and A come quickly. Keep the hand in its octave shape and move it from the wrist.",
        11: "The opening comes back in octaves. Keep them even while the arpeggios run below.",
        14: "The run swings down to B, while the left hand climbs a C and then a G arpeggio below it.",
      },
    },
  },
};

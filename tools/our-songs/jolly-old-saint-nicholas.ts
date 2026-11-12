/**
 * *Jolly Old Saint Nicholas*: James R. Murray's tune, in four versions of ours.
 *
 * The tune is the whole song of 16 bars, the opening phrase twice with two endings. The first printing
 * is in A major, and the tune here is a minor third higher, in C major, at the print's own octave. The
 * print is in 2/4, and every length here is twice as long, in 2/2, so its eighths are quarters and
 * Common plays them. The hook is bars 1 to 4, the repeated notes the song is known by.
 *
 * Common plays the tune once over held fifths and bass notes. Its right hand keeps one place from G to E,
 * with finger 2 on A and on B, which never follow each other. Rare plays it twice, over block chords and
 * then a bass and chord in turns. Epic puts an Alberti bass under the first time and plays the second an
 * octave up over broken chords, with the pedal. Legendary adds quick fills over a stride bass, then plays
 * the tune in octaves over arpeggios, and ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, a minor third above the print's A major. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The first six bars in 2/2, in quarters, which the song plays twice. */
const OPENING = "E5:1 E5:1 E5:1 E5:1 | D5:1 D5:1 D5:2 | C5:1 C5:1 C5:1 C5:1 | E5:4 | A4:1 A4:1 A4:1 A4:1 | G4:1 G4:1 C5:2";

/** The tune in 2/2, in quarters: the opening with its first ending, then with its last. */
const tune = [OPENING, "B4:1 C5:1 D5:1 E5:1 | D5:4", OPENING, "D5:1 C5:1 D5:1 E5:1 | C5:4"].join(" | ");

/** The first six bars in the right hand, in quarters. The hand stays on G to E, finger 2 on A and on B. */
const OPENING_RIGHT =
  "E5/5:1 E5/5:1 E5/5:1 E5/5:1 | D5/4:1 D5/4:1 D5/4:2 | C5/3:1 C5/3:1 C5/3:1 C5/3:1 | E5/5:4 | " +
  "A4/2:1 A4/2:1 A4/2:1 A4/2:1 | G4/1:1 G4/1:1 C5/3:2";

/** The first ending in the right hand, in quarters. */
const FIRST_ENDING = "B4/2:1 C5/3:1 D5/4:1 E5/5:1 | D5/4:4";

/** The last ending in the right hand, in quarters, without its last bar. */
const LAST_ENDING = "D5/4:1 C5/3:1 D5/4:1 E5/5:1";

/** The whole tune in the right hand, in quarters, without its last bar. */
const TUNE_RIGHT = [OPENING_RIGHT, FIRST_ENDING, OPENING_RIGHT, LAST_ENDING].join(" | ");

/** The whole tune in the right hand, in quarters, ending on the long C. */
const RIGHT = `${TUNE_RIGHT} | C5/3:4`;

/** `text` with every length multiplied by `times`, so a line in quarters reads in eighths or sixteenths. */
function scaled(text: string, times: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${times * Number(units)}`);
}

/** `text` an octave higher. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** The tune `text` in quarters, as octaves in sixteenths: each note with the octave above it on top. */
function octaves(text: string): string {
  return text.replace(
    /([A-G][#b]?)(\d):(\d+)/g,
    (_, name: string, octave: string, units: string) => `${name}${octave}+${name}${Number(octave) + 1}/1+5:${4 * Number(units)}`,
  );
}

/**
 * The first six bars in octaves, in sixteenths. The hand lifts for an eighth before each jump of a
 * third or more, so the octave shape travels in the air.
 */
const OPENING_OCTAVES = octaves(OPENING)
  .replace("C5+C6/1+5:4 | E5+E6/1+5:16", "C5+C6/1+5:2 r:2 | E5+E6/1+5:14 r:2")
  .replace("G4+G5/1+5:4 C5+C6", "G4+G5/1+5:2 r:2 C5+C6");

/** Bars of `patterns` from `halves`, such as `"CC GG"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** The chord of each bar of the tune: C, G and F. */
const CHORDS = "CGCCFCGG CGCCFCGC";

/** The chords of the first 15 bars, one letter per half bar. */
const HALVES = "CC GG CC CC FF CC GG GG CC GG CC CC FF CC GG";

/** One bar of a held fifth or bass note in quarters, the hand kept on C to G. */
const HELD: Record<string, string> = {
  C: "C3+G3/5+1:4",
  G: "D3+G3/4+1:4",
  F: "F3/2:4",
};

/** Half a bar of a block chord in quarters, the hand kept on C to G: C, G seventh without its B, G, or F over C. */
const BLOCK: Record<string, string> = {
  C: "C3+E3+G3/5+3+1:2",
  S: "D3+F3+G3/4+2+1:2",
  G: "D3+G3/4+1:2",
  F: "C3+F3/5+2:2",
};

/** Half a bar in quarters: a capital is the bass, and a small letter the rest of its chord, the hand kept on C to G. */
const TURNS: Record<string, string> = {
  C: "C3/5:2",
  c: "E3+G3/3+1:2",
  G: "G3/1:2",
  g: "D3+F3/4+2:2",
  d: "D3+G3/4+1:2",
  F: "F3/2:2",
  f: "C3/5:2",
};

/** Half a bar of Alberti bass in eighths: low, high, middle, high. `R` is C with a rest for the jump. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1",
  F: "C3/5:1 A3/1:1 F3/2:1 A3/1:1",
  R: "C3/5:1 G3/1:1 E3/3:1 r:1",
};

/** Half a bar of broken chord in eighths: root, fifth, octave, fifth. A small letter ends on a rest for the jump. */
const BROKEN: Record<string, string> = {
  C: "C2/5:1 G2/2:1 C3/1:1 G2/2:1",
  c: "C2/5:1 G2/2:1 C3/1:1 r:1",
  G: "G2/5:1 D3/2:1 G3/1:1 D3/2:1",
  g: "G2/5:1 D3/2:1 G3/1:1 r:1",
  F: "F2/5:1 C3/2:1 F3/1:1 C3/2:1",
  f: "F2/5:1 C3/2:1 F3/1:1 r:1",
};

/** Half a bar of stride in sixteenths: the root in octaves, then the chord, each an eighth with an eighth's rest. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:2 r:2 E3+G3+C4/3+2+1:2 r:2",
  G: "G1+G2/5+1:2 r:2 B2+D3+G3/5+3+1:2 r:2",
  F: "F1+F2/5+1:2 r:2 A2+C3+F3/5+3+1:2 r:2",
};

/** Half a bar of arpeggio in sixteenths, two octaves up from the root, then an eighth's rest for the jump. */
const ARPEGGIO: Record<string, string> = {
  C: "C2/5:1 G2/3:1 C3/2:1 E3/1:1 G3/3:1 C4/2:1 r:2",
  G: "G1/5:1 D2/3:1 G2/2:1 B2/1:1 D3/3:1 G3/2:1 r:2",
  F: "F1/5:1 C2/3:1 F2/2:1 A2/1:1 C3/3:1 F3/2:1 r:2",
};

/** The long E of bar 4 or 12 for Legendary, in sixteenths, with a quick run down to C. */
const E_FILL = "E5/5:8 D5/4:2 C5/3:2 B4/2:2 C5/3:2";

/** The long D of bar 8 for Legendary, in sixteenths, with a quick turn up to the next E. */
const D_FILL = "D5/4:8 E5/5:2 D5/4:2 C5/3:2 D5/4:2";

/** The first six bars for Legendary, in sixteenths, with the run after the long E. */
const OPENING_FILLS = scaled(OPENING_RIGHT, 4).replace("E5/5:16", E_FILL);

export const jollyOldSaintNicholas: OurSong = {
  slug: "jolly-old-saint-nicholas",
  title: "Jolly Old Saint Nicholas",
  source: {
    composer: "James R. Murray",
    died: 1905,
    published: 1874,
    edition: "The first printing of the tune, in School Chimes, A New School Music Book (S. Brainard's Sons, 1874), page 43",
  },
  about:
    "Jolly Old Saint Nicholas is a Christmas song that began as a poem by Emily Huntington Miller. " +
    "Her poem was published as Lilly's Secret in The Little Corporal Magazine in December 1865. " +
    "The music is generally believed to be by James R. Murray. " +
    "It was first printed in 1874, in a school music book called School Chimes.",
  funFact: "Ray Conniff recorded the song for his 1962 album We Wish You a Merry Christmas, and it helped the album go platinum.",
  mythic: null,
  collection: "christmas",
  aka: ["Jolly Old St. Nicholas"],
  tune: { text: tune, numerator: 2, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 120,
      numerator: 2,
      denominator: 2,
      steps: 2,
      right: RIGHT,
      left: [...CHORDS.replace(" ", "")].map((chord) => HELD[chord]).join(" | "),
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, where the tune drops to A and climbs back.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds one shape for each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 3, kind: "rhythm", text: "Four even notes on one key. Keep them light, like footsteps on a roof." },
        { fromBar: 5, toBar: 7, kind: "fingering", text: "Finger 2 plays A in bar 5 and B in bar 7. The rest of the hand never moves." },
        { fromBar: 16, toBar: 16, kind: "sound", text: "Hold the last C for all four counts, and let both hands lift together." },
      ],
      tricky: {
        2: "Finger 5 leaves E, and finger 4 plays D three times. Hold the last D for two counts.",
        10: "The same as bar 2. The left hand moves to D and G under it.",
        15: "Fingers 4, 3, 4 and 5 play D, C, D and E. Then finger 3 drops to the last C.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 144,
      numerator: 2,
      denominator: 2,
      steps: 2,
      right: [RIGHT, RIGHT].join(" | "),
      left: [
        halfBars(BLOCK, "CC SS CC CC FF CC SG SS CC SS CC CC FF CC SG CC"),
        halfBars(TURNS, "Cc Gg Cc Cc Ff Cc Gd Gg Cc Gg Cc Cc Ff Cc Gd"),
        "C3+E3+G3/5+3+1:4",
      ].join(" | "),
      skills: ["triads", "five-finger-position"],
      practice: [
        { text: "Play the left hand alone, and press the notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the bass and chord in turns of the second time alone.", hands: "left", speed: 0.6, loop: [17, 20], wait: true },
        { text: "Join the hands on the first time through, slowly.", hands: "both", speed: 0.6, loop: [1, 16], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "sound", text: "Hold each chord softly, so the repeated notes of the tune stay clear above it." },
        { fromBar: 7, toBar: 7, kind: "fingering", text: "The left hand lets go of F in the middle of the bar. The right hand climbs to E over it." },
        { fromBar: 17, toBar: 32, kind: "rhythm", text: "The bass note falls on the first count and the chord on the third. Count four in each bar." },
      ],
      tricky: {
        2: "Finger 4 plays D three times, while the left hand holds a G seventh chord without its B.",
        10: "The same as bar 2. Keep the repeated D even and light.",
        15: "Fingers 4, 3, 4 and 5 play D, C, D and E. In the middle of the bar, the left hand lets go of F.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 2,
      denominator: 2,
      steps: 4,
      right: [
        scaled(TUNE_RIGHT, 2),
        "C5/3:6 r:2",
        octaveUp(scaled(TUNE_RIGHT, 2)),
        "E5+G5+C6/1+2+5:8",
      ].join(" | "),
      left: [
        halfBars(ALBERTI, `${HALVES} CR`),
        halfBars(BROKEN, "Cc Gg Cc Cc Ff Cc Gg Gg Cc Gg Cc Cc Ff Cc Gg"),
        "C2+G2+C3/5+2+1:8",
      ].join(" | "),
      pedal: [...Array(31).fill("P:4 P:4"), "P:8"].join(" | "),
      skills: ["alberti-bass", "broken-chords", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the broken chords of the second time alone, and lift the hand on each rest.", hands: "left", speed: 0.5, loop: [17, 20], wait: false },
        { text: "Join the hands on the first time through, slowly.", hands: "both", speed: 0.5, loop: [1, 16], wait: true },
        { text: "Play the whole song with both hands at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the Alberti bass soft, so the tune rings above it like a sleigh bell." },
        { fromBar: 16, toBar: 17, kind: "trick", text: "Both hands lift on the rest. The right hand jumps up an octave, and the left hand drops to a low C." },
        { fromBar: 1, toBar: 32, kind: "sound", text: "Change the pedal each half bar, as the left hand starts a new chord." },
      ],
      tricky: {
        17: "The right hand lands an octave up on E, and the left hand starts its broken chords on the low C.",
        19: "Finger 3 plays the high C four times, while the left hand lifts on the rest and lands on C again.",
        25: "The same as bar 17, now after the long D. Land finger 5 on the high E.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 112,
      numerator: 2,
      denominator: 2,
      steps: 8,
      right: [
        OPENING_FILLS,
        "B4/2:4 C5/3:4 D5/4:4 E5/5:4",
        D_FILL,
        OPENING_FILLS,
        scaled(LAST_ENDING, 4),
        "C5/3:12 r:4",
        OPENING_OCTAVES,
        octaves("B4:1 C5:1 D5:1 E5:1 | D5:4"),
        OPENING_OCTAVES,
        "D5+D6/1+5:4 C5+C6/1+5:4 D5+D6/1+5:4 E5+E6/1+5:2 r:2",
        "C5+E5+G5+C6/1+2+3+5:16",
      ].join(" | "),
      left: [
        halfBars(STRIDE, `${HALVES} CC`),
        halfBars(ARPEGGIO, HALVES),
        "C2+G2+C3/5+2+1:16",
      ].join(" | "),
      pedal: [...Array(31).fill("P:8 P:8"), "P:16"].join(" | "),
      skills: ["stride", "arpeggios", "sixteenth-notes"],
      practice: [
        { text: "Play the stride bass alone: jump down for the low octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play bars 4 and 5 with the right hand alone, and keep the quick run light.", hands: "right", speed: 0.5, loop: [4, 5], wait: true },
        { text: "Play the arpeggios of the second time in the left hand alone.", hands: "left", speed: 0.5, loop: [17, 20], wait: false },
        { text: "Join the hands on the whole song at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 4, toBar: 4, kind: "sound", text: "The quick run after the long E slides down like Santa down the chimney. Play it lighter than the tune." },
        { fromBar: 17, toBar: 32, kind: "fingering", text: "Keep the thumb and little finger stretched an octave apart, and let the wrist bounce." },
      ],
      tricky: {
        21: "The octaves drop from E to A after a short lift. Keep the hand in its octave shape as it travels.",
        29: "The same drop to A as bar 21, while the left hand climbs an F arpeggio below.",
        31: "The octaves step D, C, D and E. Then the hand lifts and lands on the four-note chord.",
      },
    },
  },
};

/**
 * *Silent Night*: Franz Xaver Gruber's carol *Stille Nacht*, in four versions of ours.
 *
 * The tune is the whole verse as it is sung today, in C major. The edition writes it in 6/8 with a dotted
 * eighth, a sixteenth and an eighth. The tune here makes every sixteenth a quarter, so Common needs nothing
 * faster. Each bar of 3/2 is half a bar of the edition, so the verse takes 23 bars. The hook is its first
 * four bars, "Silent night, holy night".
 *
 * Common plays the tune over held bass notes, with a rest before each leap up to D. Rare plays it over a
 * slow waltz bass with the pedal. Epic puts an Alberti bass under it, adds runs with the thumb under, and
 * plays bars 13 to 20 in thirds and chords. Legendary sets the tune an octave up in chords over a stride
 * bass, then over a broken octave bass.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 3/2, in quarters. */
const tune = [
  "G4:3 A4:1 G4:2 | E4:6 | G4:3 A4:1 G4:2 | E4:6 | D5:4 D5:2 | B4:6 | C5:4 C5:2 | G4:6",
  "A4:4 A4:2 | C5:3 B4:1 A4:2 | G4:3 A4:1 G4:2 | E4:6 | A4:4 A4:2 | C5:3 B4:1 A4:2 | G4:3 A4:1 G4:2 | E4:6",
  "D5:4 D5:2 | F5:3 D5:1 B4:2 | C5:6 | E5:6 | C5:3 G4:1 E4:2 | G4:3 F4:1 D4:2 | C4:6",
].join(" | ");

/** The chord of each bar: C major, G major, G seventh as `g`, and F major. */
const CHORDS = "CCCCGGCCFFCCFFCCggCCCgC";

/** "Silent night" in the right hand, in quarters. */
const SILENT = "G4/2:3 A4/3:1 G4/2:2";

/** "Round yon Virgin" in the right hand, in quarters, which comes back as "Holy infant so". */
const ROUND = "A4/3:4 A4/3:2 | C5/5:3 B4/4:1 A4/3:2";

/** The tune in the right hand, in quarters, for Common. Rare changes a few bars of it. */
const RIGHT_QUARTERS = [
  `${SILENT} | E4/1:6 | ${SILENT} | E4/1:5 r:1 | D5/5:4 D5/5:2 | B4/4:6 | C5/5:4 C5/5:2 | G4/2:6`,
  `${ROUND} | ${SILENT} | E4/1:6 | ${ROUND} | ${SILENT} | E4/1:5 r:1`,
  "D5/3:4 D5/3:2 | F5/5:3 D5/3:1 B4/2:2 | C5/3:6 | E5/5:6 | C5/5:3 G4/3:1 E4/2:2 | G4/4:3 F4/3:1 D4/2:2 | C4/1:6",
].join(" | ");

/** A bar of held bass in quarters, for Common. */
const HELD: Record<string, string> = {
  C: "C3/1:6",
  G: "G2/4:6",
  g: "G2/4:6",
  F: "F2+C3/5+1:6",
};

/** A bar of slow waltz bass in quarters: the bass on beat one, then two chords. */
const WALTZ: Record<string, string> = {
  C: "C3/5:2 E3+G3/3+1:2 E3+G3/3+1:2",
  G: "B2/5:2 D3+G3/3+1:2 D3+G3/3+1:2",
  g: "B2/5:2 F3+G3/2+1:2 F3+G3/2+1:2",
  F: "C3/5:2 F3+A3/2+1:2 F3+A3/2+1:2",
};

/** Half a bar of Alberti bass in eighths. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1",
  g: "B2/5:1 G3/1:1 F3/2:1 G3/1:1",
  F: "A2/5:1 F3/1:1 C3/3:1 F3/1:1",
};

/** A bar of stride in eighths: the root in octaves, then the chord twice, with a rest before each jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:3 r:1 E3+G3+C4/3+2+1:3 r:1 E3+G3+C4/3+2+1:3 r:1",
  G: "G1+G2/5+1:3 r:1 D3+G3+B3/3+2+1:3 r:1 D3+G3+B3/3+2+1:3 r:1",
  g: "G1+G2/5+1:3 r:1 F3+G3+B3/3+2+1:3 r:1 F3+G3+B3/3+2+1:3 r:1",
  F: "F1+F2/5+1:3 r:1 F3+A3+C4/3+2+1:3 r:1 F3+A3+C4/3+2+1:3 r:1",
};

/** A bar of broken octave in eighths: root, fifth, octave and fifth, with a rest before the next bar. */
const BROKEN_OCTAVE: Record<string, string> = {
  C: "C2/5:1 G2/2:1 C3/1:1 G2/2:1 C2/5:1 G2/2:1 C3/1:1 G2/2:1 C2/5:1 G2/2:1 C3/1:1 r:1",
  G: "G1/5:1 D2/2:1 G2/1:1 D2/2:1 G1/5:1 D2/2:1 G2/1:1 D2/2:1 G1/5:1 D2/2:1 G2/1:1 r:1",
  g: "G1/5:1 D2/2:1 F2/1:1 D2/2:1 G1/5:1 D2/2:1 F2/1:1 D2/2:1 G1/5:1 D2/2:1 F2/1:1 r:1",
  F: "F1/5:1 C2/2:1 F2/1:1 C2/2:1 F1/5:1 C2/2:1 F2/1:1 C2/2:1 F1/5:1 C2/2:1 F2/1:1 r:1",
};

/** Bars of `patterns` from `chords`, such as `"CCG"`: one letter per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  return [...chords].map((chord) => patterns[chord]).join(" | ");
}

/** Bars of Alberti bass from `chords`: one letter per bar, three halves of the pattern each. */
function albertiBars(chords: string): string {
  return [...chords].map((chord) => [1, 2, 3].map(() => ALBERTI[chord]).join(" ")).join(" | ");
}

/** The pedal line of `count` bars of `units` each, pressed again on every bar line. */
function pedalBars(count: number, units: number): string {
  return Array.from({ length: count }, () => `P:${units}`).join(" | ");
}

/** "Silent night" in chords an octave up, in eighths, for Legendary. */
const SILENT_CHORDS = "C5+E5+G5/1+2+4:6 A5/5:2 C5+E5+G5/1+2+4:4";

/** "Round yon Virgin" in chords an octave up, in eighths, for Legendary. */
const ROUND_CHORDS = "C5+F5+A5/1+3+5:8 C5+F5+A5/1+3+5:4 | F5+A5+C6/1+3+5:6 B5/4:2 F5+A5/1+4:4";

/** The end of a long E, then a run of five fingers up to C, an octave up, in eighths. */
const RUN_UP = "G4+C5+E5/1+2+4:6 F5/1:1 G5/2:1 A5/3:1 B5/4:1 C6/5:1 r:1";

export const silentNight: OurSong = {
  slug: "silent-night",
  title: "Silent Night",
  source: {
    composer: "Franz Xaver Gruber",
    died: 1863,
    published: 1833,
    edition:
      "The first edition by Friese, Dresden and Leipzig (1833), in Four Genuine Tyrolean Songs, checked against the melody as it is sung today",
  },
  about:
    "Franz Xaver Gruber wrote this tune for Christmas Eve 1818, in Oberndorf near Salzburg. " +
    "The young priest Joseph Mohr had written the words, and Gruber set them to music. " +
    "Mohr played the guitar at the first performance, and the song later travelled far beyond Austria.",
  funFact: "In 2011, the Austrian Commission for UNESCO added Silent Night to Austria's list of intangible cultural heritage.",
  mythic: null,
  collection: "christmas",
  aka: ["Stille Nacht"],
  tune: { text: tune, numerator: 3, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 200,
      numerator: 3,
      denominator: 2,
      steps: 2,
      right: RIGHT_QUARTERS,
      left: bars(HELD, CHORDS),
      skills: ["held-bass", "dotted-rhythm"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 17 to 23 with the right hand alone, where the tune climbs high and walks down to middle C.", hands: "right", speed: 0.6, loop: [17, 23], wait: true },
        { text: "Put both hands together. The left hand holds one low note or a fifth in each bar.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "The first G is long and the A is short. It rocks like a cradle." },
        { fromBar: 4, toBar: 5, kind: "trick", text: "Lift the hand in the short rest after E, and reach up for the high D." },
        { fromBar: 1, toBar: 23, kind: "sound", text: "Play softly all the way through. This song is a lullaby." },
      ],
      tricky: {
        6: "Finger 4 takes B after the two Ds. Down below, the left hand holds G with finger 4.",
        17: "After the rest, the hand stretches up from E, and finger 3 lands on the high D.",
        21: "Finger 5 moves down from E to C. Then the tune walks down to the thumb on middle C.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 220,
      numerator: 3,
      denominator: 2,
      steps: 2,
      right: [
        `${SILENT} | E4/1:6 | ${SILENT} | E4/1:6 | D5/5:4 D5/5:2 | B4/4:6 | C5/5:4 C5/5:2 | E4+G4/1+2:6`,
        `${ROUND} | ${SILENT} | E4/1:6 | ${ROUND} | ${SILENT} | E4/1:6`,
        "D5/3:4 D5/3:2 | F5/5:3 D5/3:1 B4/2:2 | C5/3:6 | C5+E5/3+5:6 | C5/5:3 G4/3:1 E4/2:2 | G4/4:3 F4/3:1 D4/2:2 | C4/1:6",
      ].join(" | "),
      left: `${bars(WALTZ, CHORDS.slice(0, -1))} | C3+E3+G3/5+3+1:6`,
      pedal: pedalBars(23, 6),
      skills: ["waltz-bass", "two-note-chords", "pedal"],
      practice: [
        { text: "Play the left hand alone: a low note, then two soft chords, like a slow waltz.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play bars 17 to 23 with the right hand alone, where the tune climbs high and walks down to middle C.", hands: "right", speed: 0.6, loop: [17, 23], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the left hand's chords softer than its low note." },
        { fromBar: 1, toBar: 23, kind: "sound", text: "Change the pedal on every bar line. Lift it as the new bass note sounds." },
        { fromBar: 20, toBar: 20, kind: "fingering", text: "Fingers 3 and 5 take C and E together. Let the E sing above the C." },
      ],
      tricky: {
        17: "The right hand stretches up from E, and finger 3 lands on the high D.",
        21: "Finger 5 moves down from E to C. Then the tune walks down G and E.",
        22: "Fingers 4, 3 and 2 walk down G, F and D, while the left hand plays its G seventh chord.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 200,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: [
        "G4/2:6 A4/3:2 G4/2:4 | E4/1:12 | G4/2:6 A4/3:2 G4/2:4 | E4/1:6 F4/2:1 G4/3:1 A4/1:1 B4/2:1 C5/3:1 r:1",
        "D5/4:8 D5/4:4 | B4/2:12 | C5/3:8 C5/3:4 | E4+G4/1+2:12",
        "A4/3:8 A4/3:4 | C5/5:6 B4/4:2 A4/3:4 | G4/2:6 A4/3:2 G4/2:4 | E4/1:12",
        "F4+A4/1+3:8 F4+A4/1+3:4 | F4+C5/1+5:6 B4/4:2 A4/3:4 | E4+G4/1+2:6 A4/3:2 G4/2:4",
        "C4+E4/1+2:6 F4/3:1 G4/4:1 A4/1:1 B4/2:1 C5/3:1 r:1",
        "B4+D5/2+4:8 B4+D5/2+4:4 | D5+F5/3+5:6 D5/3:2 B4/2:4 | E4+G4+C5/1+2+4:12 | G4+C5+E5/1+2+5:12",
        "C5/5:6 G4/3:2 E4/2:4 | G4/4:6 F4/3:2 D4/2:4 | C4/1:12",
      ].join(" | "),
      left: `${albertiBars(CHORDS.slice(0, -1))} | C3+E3+G3/5+3+1:12`,
      pedal: pedalBars(23, 12),
      skills: ["alberti-bass", "thumb-under", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the run of bar 4 with the right hand alone, and pass the thumb under to A.", hands: "right", speed: 0.5, loop: [3, 5], wait: true },
        { text: "Play the pairs and chords of bars 13 to 20 with the right hand alone.", hands: "right", speed: 0.6, loop: [13, 20], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 4, toBar: 4, kind: "fingering", text: "Fingers 1, 2 and 3 play E, F and G. Then the thumb passes under to A." },
        { fromBar: 13, toBar: 20, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        4: "The run climbs from F to C. Pass the thumb under finger 3 to take the A.",
        16: "The same run as bar 4, from a third on C and E. Pass the thumb under to A.",
        21: "The hand drops from the chord to C with finger 5, then walks down to G and E.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 240,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: [
        `${SILENT_CHORDS} | G4+C5+E5/1+2+4:11 r:1 | ${SILENT_CHORDS} | ${RUN_UP}`,
        "G5+B5+D6/1+3+5:8 G5+B5+D6/1+3+5:4 | D5+G5+B5/1+3+5:12 | E5+G5+C6/1+3+5:8 E5+G5+C6/1+3+5:3 r:1 | G4+C5+E5+G5/1+2+3+5:12",
        `${ROUND_CHORDS} | ${SILENT_CHORDS} | G4+C5+E5/1+2+4:11 r:1`,
        `${ROUND_CHORDS} | ${SILENT_CHORDS} | ${RUN_UP}`,
        "F5+B5+D6/1+3+5:8 F5+B5+D6/1+3+5:4 | B5+D6+F6/1+3+5:6 D6/3:2 G5+B5/1+2:3 r:1",
        "C5+E5+G5+C6/1+2+3+5:11 r:1 | E5+G5+C6+E6/1+2+3+5:12",
        "E5+G5+C6/1+2+5:6 G5/2:2 E5/1:4 | B4+D5+G5/1+2+5:6 F5/4:2 B4+D5/1+2:3 r:1 | C4+E4+G4+C5/1+2+3+5:12",
      ].join(" | "),
      left: `${bars(STRIDE, CHORDS.slice(0, 12))} | ${bars(BROKEN_OCTAVE, CHORDS.slice(12, -1))} | C2+C3/5+1:12`,
      pedal: pedalBars(23, 12),
      skills: ["stride", "melody-in-chords", "octave-bass"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's chords alone, and let the little finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the broken octaves of bars 13 to 16 with the left hand alone.", hands: "left", speed: 0.6, loop: [13, 16], wait: false },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 12, kind: "trick", text: "In stride, look at the bass note and let the hand find the chord by feel." },
        { fromBar: 1, toBar: 12, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
        { fromBar: 13, toBar: 22, kind: "sound", text: "Let the broken octaves roll gently under the tune, like a rocking cradle." },
      ],
      tricky: {
        5: "After the run, land on G, B and D with fingers 1, 3 and 5.",
        9: "The hand opens to C, F and A, and the little finger sings the tune.",
        10: "Finger 4 alone takes B between the chords. Keep the thumb close to F.",
      },
    },
  },
};

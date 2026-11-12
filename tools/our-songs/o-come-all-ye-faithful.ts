/**
 * *O Come, All Ye Faithful*: John Francis Wade's hymn tune *Adeste Fideles*, in four versions of ours.
 *
 * The tune is the whole verse as hymnals print it, moved from G major down a fifth to C major. Hymnals
 * write it in 4/4 with a one-beat pickup. Every length here is twice as long, in 4/2, so the eighth of
 * each dotted pair is a quarter and Common plays it at its place. Bar 1 holds the pickup after a rest,
 * and each later bar is one bar of the hymnal, 21 in all.
 *
 * The hook is the pickup bar and the next two, the opening call the song is known by.
 *
 * Common plays the tune over held fifths, and lifts the hand before three wide leaps. Rare plays every
 * note over triads. Epic plays the tune an octave up over an Alberti bass, with the refrain in thirds
 * and sixths. Legendary sets the tune an octave up in chords over a stride bass, then plays the refrain
 * in octaves over a broken octave bass.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 4/2, in quarters: the pickup bar, then the hymnal's 20 bars, each twice as long. */
const tune = [
  "r:6 C4:2 | C4:4 G3:2 C4:2 | D4:4 G3:4 | E4:2 D4:2 E4:2 F4:2 | E4:4 D4:2 C4:2",
  "C4:4 B3:2 A3:2 | B3:2 C4:2 D4:2 E4:2 | B3:4 A3:3 G3:1 | G3:8",
  "G4:4 F4:2 E4:2 | F4:4 E4:4 | D4:2 E4:2 C4:2 D4:2 | B3:4 G3:2 C4:2",
  "C4:2 B3:2 C4:2 D4:2 | C4:4 G3:2 E4:2 | E4:2 D4:2 E4:2 F4:2 | E4:4 D4:2 E4:2",
  "F4:2 E4:2 D4:2 C4:2 | B3:4 C4:2 F4:2 | E4:4 D4:3 C4:1 | C4:8",
].join(" | ");

/**
 * The chords of bars 2 to 20, a letter per half bar. C, G and F are the triads. A small letter leaves out
 * the note a semitone from the tune: g has no B, c has no E, and e stands on E, with no C on the beat.
 */
const CHORDS = "CC GG CG CC CG gC GG GG Cg GC GF GC eC CC CG CG cg GF CG";

/** The chords of bars 2 to 13, and of bars 14 to 20. */
const VERSE_CHORDS = CHORDS.split(" ").slice(0, 12).join(" ");
const REFRAIN_CHORDS = CHORDS.split(" ").slice(12).join(" ");

/** Bars of `patterns` from `halves`, such as `"CG CC"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** Half a bar of the left hand in quarters, for Common: an open fifth, or two notes that keep the hand still. */
const FIFTH: Record<string, string> = {
  C: "C3+G3/5+1:4",
  c: "C3+G3/5+1:4",
  G: "D3+G3/4+1:4",
  g: "D3+G3/4+1:4",
  F: "C3+F3/5+2:4",
  e: "E3+G3/3+1:4",
};

/** Half a bar of the left hand in quarters, for Rare: a triad, or the two notes of it that suit the tune. */
const TRIAD: Record<string, string> = {
  C: "C3+E3+G3/4+2+1:4",
  c: "C3+G3/4+1:4",
  G: "B2+D3+G3/5+3+1:4",
  g: "D3+G3/3+1:4",
  F: "C3+F3/4+2:4",
  e: "E3+G3/2+1:4",
};

/** Half a bar of Alberti bass in eighths: low, high, middle, high, twice. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  c: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1 B2/5:1 G3/1:1 D3/3:1 G3/1:1",
  g: "G2/5:1 D3/2:1 G3/1:1 D3/2:1 G2/5:1 D3/2:1 G3/1:1 D3/2:1",
  F: "A2/5:1 F3/1:1 C3/3:1 F3/1:1 A2/5:1 F3/1:1 C3/3:1 F3/1:1",
  e: "E3/3:1 G3/1:1 C3/5:1 G3/1:1 E3/3:1 G3/1:1 C3/5:1 G3/1:1",
  /** The last G, which lifts the hand for the low C. */
  h: "B2/5:1 G3/1:1 D3/3:1 G3/1:1 B2/5:1 G3/1:1 D3/3:1 r:1",
};

/** Half a bar of stride in eighths: the root in octaves, then the chord, each with a rest for the jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:3 r:1 E3+G3+C4/3+2+1:3 r:1",
  G: "G1+G2/5+1:3 r:1 D3+G3+B3/4+2+1:3 r:1",
  g: "G1+G2/5+1:3 r:1 D3+G3/2+1:3 r:1",
  F: "F1+F2/5+1:3 r:1 F3+A3+C4/3+2+1:3 r:1",
};

/** Half a bar of broken octave in eighths: root, fifth, octave and fifth, twice, with a rest at the end. */
const BROKEN_OCTAVE: Record<string, string> = {
  C: "C2/5:1 G2/2:1 C3/1:1 G2/2:1 C2/5:1 G2/2:1 C3/1:1 r:1",
  c: "C2/5:1 G2/2:1 C3/1:1 G2/2:1 C2/5:1 G2/2:1 C3/1:1 r:1",
  G: "G1/5:1 D2/2:1 G2/1:1 D2/2:1 G1/5:1 D2/2:1 G2/1:1 r:1",
  g: "G1/5:1 D2/2:1 G2/1:1 D2/2:1 G1/5:1 D2/2:1 G2/1:1 r:1",
  F: "F1/5:1 C2/2:1 F2/1:1 C2/2:1 F1/5:1 C2/2:1 F2/1:1 r:1",
  e: "E2/5:1 B2/2:1 E3/1:1 B2/2:1 E2/5:1 B2/2:1 E3/1:1 r:1",
};

export const oComeAllYeFaithful: OurSong = {
  slug: "o-come-all-ye-faithful",
  title: "O Come, All Ye Faithful",
  source: {
    composer: "John Francis Wade",
    died: 1786,
    published: 1751,
    edition: "Wade's Adeste Fideles (1751), from his manuscript, as hymnals print the tune today",
  },
  about:
    "John Francis Wade copied this tune by hand around 1751, with Latin words that begin Adeste fideles. " +
    "Wade was an English Catholic who copied music for a living in France. " +
    "Frederick Oakeley wrote the English words most people sing today in 1841.",
  funFact: "In London it was once called the Portuguese Hymn, because people heard it at the Portuguese embassy's chapel.",
  mythic: null,
  collection: "christmas",
  aka: ["Adeste Fideles"],
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 3] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 184,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: [
        "r:6 C4/2:2 | C4/2:4 G3/1:2 C4/2:2 | D4/3:4 G3/1:3 r:1 | E4/3:2 D4/2:2 E4/3:2 F4/4:2 | E4/3:4 D4/2:2 C4/1:2",
        "C4/3:4 B3/2:2 A3/1:2 | B3/2:2 C4/3:2 D4/4:2 E4/5:2 | B3/3:4 A3/2:3 G3/1:1 | G3/1:6 r:2",
        "G4/5:4 F4/4:2 E4/3:2 | F4/5:4 E4/4:4 | D4/3:2 E4/4:2 C4/2:2 D4/3:2 | B3/2:4 G3/1:2 C4/2:2",
        "C4/3:2 B3/2:2 C4/3:2 D4/4:2 | C4/3:4 G3/1:1 r:1 E4/4:2 | E4/4:2 D4/3:2 E4/4:2 F4/5:2 | E4/4:4 D4/3:2 E4/4:2",
        "F4/5:2 E4/4:2 D4/3:2 C4/2:2 | B3/1:4 C4/2:2 F4/5:2 | E4/4:4 D4/3:3 C4/2:1 | C4/2:8",
      ].join(" | "),
      left: `r:8 | ${halfBars(FIFTH, CHORDS)} | C3+G3/5+1:8`,
      skills: ["open-fifths", "dotted-rhythm"],
      practice: [
        { text: "Play the first three bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 3], wait: true },
        { text: "Play bars 1 to 9 with the right hand alone, down to the long low G.", hands: "right", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Now the left hand alone. It holds one shape for each half of a bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 3, kind: "fingering", text: "Finger 2 starts on middle C, and the thumb waits on the G below it." },
        { fromBar: 8, toBar: 8, kind: "rhythm", text: "Long, short: hold the A, then let the quick G fall into the next bar." },
        { fromBar: 14, toBar: 17, kind: "sound", text: "This is the refrain. Each time it comes, play it a little louder." },
      ],
      tricky: {
        4: "Finger 3 lands on E after the short rest. Then fingers 2, 3 and 4 rock between D, E and F.",
        10: "Lift the hand during the rest, and land with the little finger on the high G. Fingers 4 and 3 step down to F and E.",
        11: "The little finger takes F this time, so finger 4 is ready for E.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 192,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: [
        "r:6 C4/2:2 | C4/2:4 G3/1:2 C4/2:2 | D4/3:4 G3/1:4 | E4/3:2 D4/2:2 E4/3:2 F4/4:2 | E4/3:4 D4/2:2 C4/1:2",
        "C4/3:4 B3/2:2 A3/1:2 | B3/2:2 C4/3:2 D4/4:2 E4/5:2 | B3/3:4 A3/2:3 G3/1:1 | G3/1:8",
        "G4/5:4 F4/4:2 E4/3:2 | F4/5:4 E4/4:4 | D4/3:2 E4/4:2 C4/2:2 D4/3:2 | B3/2:4 G3/1:2 C4/2:2",
        "C4/3:2 B3/2:2 C4/3:2 D4/4:2 | C4/3:4 G3/1:2 E4/4:2 | E4/4:2 D4/3:2 E4/4:2 F4/5:2 | E4/4:4 D4/3:2 E4/4:2",
        "F4/5:2 E4/4:2 D4/3:2 C4/2:2 | B3/1:4 C4/2:2 F4/5:2 | E4/4:4 D4/3:3 C4/2:1 | C4/2:8",
      ].join(" | "),
      left: `r:8 | ${halfBars(TRIAD, CHORDS)} | C3+E3+G3/4+2+1:8`,
      skills: ["triads", "dotted-rhythm"],
      practice: [
        { text: "Play the left hand alone, and press the notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the right hand alone on the first nine bars, and feel the long, short pair in bar 8.", hands: "right", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Join the hands on the refrain, bars 14 to 17.", hands: "both", speed: 0.6, loop: [14, 17], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "fingering", text: "The left hand keeps its thumb on G for nearly every chord, so the hand hardly moves." },
        { fromBar: 8, toBar: 8, kind: "rhythm", text: "Long, short: hold the A for three counts, and give the G just one." },
        { fromBar: 18, toBar: 21, kind: "sound", text: "The last line is the biggest. Let it swell, then rest on the last C." },
      ],
      tricky: {
        4: "Open the hand wide: the thumb leaves the low G as finger 3 reaches up to E.",
        11: "The little finger takes F this time, so finger 4 is ready for E.",
        12: "Finger 2 tucks back to C between E and D. Keep the hand still and let the fingers move.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 200,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [
        "r:12 C5/2:4 | C5/2:8 G4/1:4 C5/2:4 | D5/3:8 G4/1:8 | E5/3:4 D5/2:4 E5/3:4 F5/4:4 | E5/3:8 D5/2:4 C5/1:4",
        "C5/3:8 B4/2:4 A4/1:4 | B4/2:4 C5/3:4 D5/4:4 E5/5:4 | B4/3:8 A4/2:6 G4/1:2 | G4/1:16",
        "G5/5:8 F5/4:4 E5/3:4 | F5/5:8 E5/4:8 | D5/3:4 E5/4:4 C5/2:4 D5/3:4 | B4/2:8 G4/1:4 C5/2:4",
        "E4+C5/1+5:4 G4+B4/2+4:4 E4+C5/1+5:4 F4+D5/1+5:4 | E4+C5/1+5:8 G4/1:4 C5+E5/3+5:4",
        "C5+E5/2+4:4 F4+D5/1+4:4 G4+E5/1+4:4 D5+F5/3+5:4 | C5+E5/2+4:8 B4+D5/1+3:4 G4+E5/1+5:4",
        "F5/5:4 E5/4:4 D5/3:4 C5/2:4 | B4/1:8 C5/2:4 F5/5:4 | E5/4:8 D5/3:6 C5/2:2 | E4+G4+C5/1+2+5:16",
      ].join(" | "),
      left: `r:16 | ${halfBars(ALBERTI, CHORDS.replace(/CG$/, "Ch"))} | C2+C3/5+1:16`,
      pedal: "r:16 | " + "P:8 P:8 | ".repeat(19) + "P:16",
      skills: ["alberti-bass", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand alone on the first nine bars, an octave above middle C.", hands: "right", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the thirds and sixths of bars 14 to 17 with the right hand alone. Press both notes as one.", hands: "right", speed: 0.6, loop: [14, 17], wait: true },
        { text: "Play the whole song with both hands at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 13, kind: "sound", text: "Keep the Alberti bass soft, so the tune rings out above it." },
        { fromBar: 14, toBar: 17, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
        { fromBar: 2, toBar: 20, kind: "sound", text: "Change the pedal in the middle of each bar, as the left hand starts a new chord." },
      ],
      tricky: {
        7: "The right hand climbs from B to E, one finger per key, while the left hand changes chord.",
        16: "The pairs change from thirds to sixths and back. Look at the next pair before you play it.",
        21: "Lift the left hand after the last D, then land on the low C octave with the final chord.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 224,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [
        "r:12 E4+G4+C5/1+2+5:4",
        "C4+E4+G4+C5/1+2+3+5:8 G4/3:4 E4+G4+C5/1+2+5:4",
        "D4+G4+B4+D5/1+2+3+5:8 D4+G4/1+2:7 r:1",
        "G4+C5+E5/1+2+4:4 D5/3:4 G4+B4+E5/1+2+4:4 B4+D5+F5/2+3+5:3 r:1",
        "E4+G4+C5+E5/1+2+3+5:8 D5/4:4 E4+G4+C5/1+2+3:4",
        "E4+G4+C5/1+2+5:8 D4+G4+B4/1+2+5:4 A4/3:4",
        "D4+G4+B4/1+2+3:4 C5/4:4 D5/5:4 G4+C5+E5/1+2+5:3 r:1",
        "D4+G4+B4/1+2+4:8 F4+A4/1+3:6 G4/2:2",
        "D4+G4/1+4:15 r:1",
        "C5+E5+G5/1+3+5:8 B4+D5+F5/1+2+4:4 C5+E5/1+3:4",
        "G4+B4+D5+F5/1+2+3+5:8 G4+C5+E5/1+2+4:8",
        "G4+B4+D5/1+2+4:4 E5/5:4 A4+C5/1+3:4 D5/4:4",
        "D4+G4+B4/1+2+4:8 E4+G4/1+2:4 E4+G4+C5/1+2+4:4",
        "C4+C5/1+5:4 B3+B4/1+5:4 C4+C5/1+5:4 D4+D5/1+5:4",
        "C4+C5/1+5:7 r:1 G3+G4/1+5:3 r:1 E4+E5/1+5:4",
        "E4+E5/1+5:4 D4+D5/1+5:4 E4+E5/1+5:4 F4+F5/1+5:4",
        "E4+E5/1+5:8 D4+D5/1+5:4 E4+E5/1+5:4",
        "F4+F5/1+5:4 E4+E5/1+5:4 D4+D5/1+5:4 C4+C5/1+5:4",
        "B3+B4/1+5:8 C4+C5/1+5:3 r:1 F4+F5/1+5:4",
        "E4+E5/1+5:8 D4+D5/1+5:6 C4+C5/1+5:2",
        "C4+E4+G4+C5/1+2+3+5:16",
      ].join(" | "),
      left: `r:16 | ${halfBars(STRIDE, VERSE_CHORDS)} | ${halfBars(BROKEN_OCTAVE, REFRAIN_CHORDS)} | C2+G2+C3/5+2+1:16`,
      pedal: "r:16 | " + "P:8 P:8 | ".repeat(19) + "P:16",
      skills: ["stride", "melody-in-chords", "octave-bass"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand's chords alone, and let the little finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 13], wait: true },
        { text: "Play the octaves of bars 14 to 21 with the right hand alone. Keep the hand open and light.", hands: "right", speed: 0.5, loop: [14, 21], wait: true },
        { text: "Join the hands on the whole song at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and make the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 13, kind: "trick", text: "In stride, look at the bass note and let the hand find the chord by feel." },
        { fromBar: 14, toBar: 21, kind: "sound", text: "In octaves, play the little finger a bit louder, so the tune shines on top." },
        { fromBar: 14, toBar: 20, kind: "fingering", text: "The broken octave bass rolls from the little finger to the thumb and back." },
      ],
      tricky: {
        3: "Spread the hand for the four-note G chord. Then let it close onto D and G.",
        8: "The chord slides from G and B down to F and A. Then finger 2 settles on G.",
        12: "The little finger reaches up to E between the chords. Then the hand drops onto A and C.",
      },
    },
  },
};

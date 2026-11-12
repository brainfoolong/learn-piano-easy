/**
 * *Joy to the World*: Lowell Mason's hymn tune *Antioch*, in four versions of ours.
 *
 * The tune is the whole verse as hymnals print it, in C major. Hymnals write it in 2/4 with sixteenths.
 * Every length here is four times as long, in 2/1, so a sixteenth is a quarter and Common plays it at
 * its place. Each bar of 2/1 is one bar of the hymnal, and the verse has 20 of them.
 *
 * The hook is its first two bars, the top of the falling scale from C down to F, which one hand plays
 * without moving. Neither Common nor Rare may cross a finger over the thumb for the rest of the scale.
 *
 * Common plays the tune over held fifths, and the left hand takes the D and C of bars 3 and 4. Rare plays
 * every note over triads, and lifts the hand after the F of bar 2 to land on E. Epic puts an Alberti
 * bass under the tune, with a finger over the thumb, and plays the refrain in thirds. Legendary sets the
 * tune an octave up in chords over a stride bass, then in octaves over a broken octave bass.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 2/1, in quarters: the hymnal's 20 bars, each four times as long. */
const tune = [
  "C5:4 B4:3 A4:1 | G4:6 F4:2 | E4:4 D4:4 | C4:6 G4:2 | A4:6 A4:2 | B4:6 B4:2 | C5:8 | C5:6 C5:2",
  "C5:2 B4:2 A4:2 G4:2 | G4:3 F4:1 E4:2 C5:2 | C5:2 B4:2 A4:2 G4:2 | G4:3 F4:1 E4:2 E4:2",
  "E4:2 E4:2 E4:2 E4:1 F4:1 | G4:6 F4:1 E4:1 | D4:2 D4:2 D4:2 D4:1 E4:1 | F4:6 E4:1 D4:1",
  "E4:2 C5:4 A4:2 | G4:3 F4:1 E4:2 F4:2 | E4:4 D4:4 | C4:8",
].join(" | ");

/** The middle of the tune in the right hand, bars 4 to 16, in quarters, as Rare fingers it. */
const RIGHT_MIDDLE = [
  "C4/1:6 G4/2:2 | A4/3:6 A4/3:2 | B4/4:6 B4/4:2 | C5/5:8 | C5/5:6 C5/5:2 | C5/5:2 B4/4:2 A4/3:2 G4/2:2",
  "G4/3:3 F4/2:1 E4/1:2 C5/5:2 | C5/5:2 B4/4:2 A4/3:2 G4/2:2 | G4/3:3 F4/2:1 E4/1:2 E4/1:2",
  "E4/1:2 E4/1:2 E4/1:2 E4/2:1 F4/3:1 | G4/4:6 F4/3:1 E4/2:1 | D4/1:2 D4/1:2 D4/1:2 D4/2:1 E4/3:1 | F4/4:6 E4/2:1 D4/1:1",
].join(" | ");

/** Half a bar of the left hand in quarters, by chord: an open fifth for Common, a triad for Rare. */
const FIFTH: Record<string, string> = {
  C: "C3+G3/5+1:4",
  G: "D3+G3/4+1:4",
  F: "C3+F3/5+2:4",
};
const TRIAD: Record<string, string> = {
  C: "C3+E3+G3/5+3+1:4",
  7: "D3+F3+G3/4+2+1:4",
  G: "D3+G3/4+1:4",
  F: "C3+F3/5+2:4",
};

/** Half a bar of Alberti bass in quarters, on C major, G major over B, G seventh over B, or F major over A. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1",
  7: "B2/5:1 G3/1:1 F3/2:1 G3/1:1",
  g: "B2/5:1 G3/1:1 D3/3:1 r:1",
  F: "A2/5:1 F3/1:1 C3/3:1 F3/1:1",
};

/** Half a bar of stride in eighths: the root in octaves, then the chord, each with a rest for the jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:3 r:1 E3+G3+C4/3+2+1:3 r:1",
  G: "G1+G2/5+1:3 r:1 D3+G3+B3/3+2+1:3 r:1",
  F: "F1+F2/5+1:3 r:1 F3+A3+C4/3+2+1:3 r:1",
};

/** Half a bar of broken octave in eighths: root, fifth, octave and fifth, twice. */
const BROKEN_OCTAVE: Record<string, string> = {
  C: "C2/5:1 G2/2:1 C3/1:1 G2/2:1 C2/5:1 G2/2:1 C3/1:1 r:1",
  G: "G1/5:1 D2/2:1 G2/1:1 D2/2:1 G1/5:1 D2/2:1 G2/1:1 r:1",
  F: "F1/5:1 C2/2:1 F2/1:1 C2/2:1 F1/5:1 C2/2:1 F2/1:1 r:1",
};

/** Bars of `patterns` from `halves`, such as `"CG CC"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** The chords of bars 1 to 19, a letter per half bar, with G for G major and 7 for G seventh. */
const CHORDS = "CG CC CG CC FF 77 CC CC CF 7C CF 7C CC CC 77 77 CF CG C7";

export const joyToTheWorld: OurSong = {
  slug: "joy-to-the-world",
  title: "Joy to the World",
  source: {
    composer: "Lowell Mason",
    died: 1872,
    published: 1839,
    edition:
      "Antioch, in Lowell Mason's The Modern Psalmist, Boston (1839), in the form of his National Psalmist (1848) that hymnals print today",
  },
  about:
    "Lowell Mason published this tune in Boston in 1839, under the name Antioch. " +
    "It carries words that Isaac Watts wrote in 1719. " +
    "Its first four notes match the start of the chorus Lift up your heads, from Handel's Messiah.",
  funFact: "Isaac Watts wrote the words as a retelling of Psalm 98, and he never meant them as a Christmas song.",
  mythic: null,
  collection: "christmas",
  tune: { text: tune, numerator: 2, denominator: 1, steps: 4, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 168,
      numerator: 2,
      denominator: 1,
      steps: 4,
      right: [
        "C5/5:4 B4/4:3 A4/3:1 | G4/2:6 F4/1:2 | E4/1:4 r:4 | r:6 G4/2:2 | A4/3:6 A4/3:2 | B4/4:6 B4/4:2 | C5/5:8 | C5/5:6 C5/5:2",
        "C5/5:2 B4/4:2 A4/3:2 G4/2:2 | G4/3:3 F4/2:1 E4/1:1 r:1 C5/5:2 | C5/5:2 B4/4:2 A4/3:2 G4/2:2 | G4/3:3 F4/2:1 E4/1:2 E4/1:2",
        "E4/1:2 E4/1:2 E4/1:2 E4/2:1 F4/3:1 | G4/4:6 F4/3:1 E4/2:1 | D4/1:2 D4/1:2 D4/1:2 D4/2:1 E4/3:1 | F4/4:6 E4/2:1 D4/1:1",
        "E4/2:1 r:1 C5/5:4 A4/4:2 | G4/3:4 E4/2:2 F4/3:2 | E4/2:4 D4/1:4 | C4/1:8",
      ].join(" | "),
      left: [
        `${halfBars(FIFTH, "CG CC")} | C3+G3/5+1:4 D3/4:4 | C3/5:8`,
        halfBars(FIFTH, "FF GG CC CC CF GC CF GC CC CC GG GG CF CG CG CC"),
      ].join(" | "),
      skills: ["position-change", "open-fifths"],
      practice: [
        { text: "Play the first two bars with the right hand alone, one finger for each key from C down to F.", hands: "right", speed: 0.6, loop: [1, 2], wait: true },
        { text: "Play bars 1 to 5 with both hands. The left hand finishes the falling scale in bars 3 and 4.", hands: "both", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play bars 13 to 16 with the right hand alone, where the repeated notes climb and fall.", hands: "right", speed: 0.6, loop: [13, 16], wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.75, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Each finger walks down one key: 5, 4, 3, 2 and then the thumb." },
        { fromBar: 3, toBar: 4, kind: "trick", text: "The tune hops to the left hand for two notes. Let it sing them out." },
        { fromBar: 13, toBar: 15, kind: "rhythm", text: "Count the repeated notes evenly, like bells ringing one after another." },
      ],
      tricky: {
        3: "The thumb slides from F down to E, then the left hand plays D and C.",
        17: "Lift the hand after the E, and land with the little finger on the high C.",
        20: "The thumb slides from D down to the last C. Hold it to the end.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 192,
      numerator: 2,
      denominator: 1,
      steps: 4,
      right: [
        "C5/5:4 B4/4:3 A4/3:1 | G4/2:6 F4/1:1 r:1 | E4/3:4 D4/2:4",
        RIGHT_MIDDLE,
        "E4/2:2 C5/5:4 A4/4:2 | G4/3:3 F4/2:1 E4/1:2 F4/2:2 | E4/1:4 D4/1:4 | C4/1:8",
      ].join(" | "),
      left: `${halfBars(TRIAD, CHORDS.replace("CG C7", "CG"))} | C3+E3+G3/5+3+1:4 D3+F3+G3/4+2+1:4 | C3+E3+G3/5+3+1:8`,
      skills: ["triads", "dotted-rhythm", "position-change"],
      practice: [
        { text: "Play the right hand alone on the first four bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the left hand alone. It holds one chord for each half of a bar.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on bars 13 to 16, where the repeated notes are.", hands: "both", speed: 0.6, loop: [13, 16], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "rhythm", text: "Long, long, short: the A is quick, and it leads into the long G." },
        { fromBar: 2, toBar: 3, kind: "trick", text: "Play the F short and lift the hand. Finger 3 lands on E, ready to walk down to C." },
        { fromBar: 5, toBar: 8, kind: "sound", text: "The tune climbs one step at a time, from A to B to C. Let the music grow a little louder each time." },
      ],
      tricky: {
        3: "The hand has moved down: finger 3 plays E, finger 2 plays D, and the thumb waits for C.",
        19: "The thumb plays E, then slides down to D.",
        20: "The thumb slides down once more to the last C. Hold it to the end.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 216,
      numerator: 2,
      denominator: 1,
      steps: 4,
      right: [
        "C5/5:4 B4/4:3 A4/3:1 | G4/2:6 F4/1:2 | E4/3:4 D4/2:4 | C4/1:6 G4/2:2",
        "F4+A4/1+3:6 F4+A4/1+3:2 | G4+B4/2+4:6 G4+B4/2+4:2 | E4+G4+C5/1+2+5:8 | E4+G4+C5/1+2+5:6 E4+G4+C5/1+2+5:2",
        "C5/5:2 B4/4:2 A4/3:2 G4/2:2 | G4/3:3 F4/2:1 E4/1:2 C5/5:2 | C5/5:2 B4/4:2 A4/3:2 G4/2:2 | G4/3:3 F4/2:1 E4/1:2 E4/1:2",
        "C4+E4/1+3:2 C4+E4/1+3:2 C4+E4/1+3:2 C4+E4/1+3:1 D4+F4/2+4:1 | E4+G4/3+5:6 D4+F4/2+4:1 C4+E4/1+3:1",
        "B3+D4/1+3:2 B3+D4/1+3:2 B3+D4/1+3:2 B3+D4/1+3:1 C4+E4/2+4:1 | D4+F4/3+5:6 C4+E4/2+4:1 B3+D4/1+3:1",
        "E4/1:2 C5/5:4 A4/3:2 | G4/2:3 F4/1:1 E4/3:2 F4/4:2 | C4+E4/1+3:4 B3+D4/1+2:3 r:1 | E3+G3+C4/1+2+4:8",
      ].join(" | "),
      left: `${halfBars(ALBERTI, CHORDS.replace("77 CC", "GG CC").replace("CG C7", "CG Cg"))} | C2+C3/5+1:8`,
      pedal: "P:4 P:4 | ".repeat(19) + "P:8",
      skills: ["alberti-bass", "finger-over", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the first four bars with the right hand alone. Finger 3 crosses over the thumb in bar 3.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the thirds of bars 13 to 16 with the right hand alone, and press both notes as one.", hands: "right", speed: 0.6, loop: [13, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Keep the Alberti bass soft, so the falling scale rings out above it." },
        { fromBar: 13, toBar: 16, kind: "fingering", text: "The tune is the top note of each third, so let the upper finger lead." },
        { fromBar: 1, toBar: 19, kind: "sound", text: "Change the pedal at the start and the middle of each bar, as the left hand starts its pattern again." },
      ],
      tricky: {
        17: "The thumb passes under finger 3 onto E. Then the little finger reaches up to the high C.",
        18: "After the thumb plays F, finger 3 crosses over it onto E.",
        20: "Lift both hands after B and D, then land on the last chord with the left hand in octaves.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 240,
      numerator: 2,
      denominator: 1,
      steps: 8,
      right: [
        "C5+E5+G5+C6/1+2+3+5:8 D5+G5+B5/1+3+5:6 D5+F5+A5/1+2+4:2 | C5+E5+G5/1+2+4:12 C5+F5/1+4:4",
        "G4+C5+E5/1+2+4:8 G4+B4+D5/1+2+4:8 |E4+G4+C5/1+2+3:8 C5/1:1 D5/2:1 E5/3:1 F5/4:1 G5/5:4",
        "C5+F5+A5/1+3+5:12 C5+F5+A5/1+3+5:4 | D5+G5+B5/1+3+5:12 D5+G5+B5/1+3+5:4",
        "C5+E5+G5+C6/1+2+3+5:16 | C5+E5+G5+C6/1+2+3+5:12 C5+E5+G5+C6/1+2+3+5:4",
        "E5+C6/1+5:4 D5+B5/1+4:4 C5+A5/1+3:4 C5+G5/1+2:4",
        "B4+D5+G5/1+2+5:6 B4+D5+F5/1+2+4:2 C5+E5/1+2:4 E5+G5+C6/1+3+5:4",
        "E5+C6/1+5:4 D5+B5/1+4:4 C5+A5/1+3:4 C5+G5/1+2:4",
        "B4+D5+G5/1+2+5:6 B4+D5+F5/1+2+4:2 C5+E5/1+2:4 G4+C5+E5/1+2+4:4",
        "E4+E5/1+5:4 E4+E5/1+5:4 E4+E5/1+5:4 E4+E5/1+5:2 F4+F5/1+5:2 | G4+G5/1+5:12 F4+F5/1+5:2 E4+E5/1+5:2",
        "D4+D5/1+5:4 D4+D5/1+5:4 D4+D5/1+5:4 D4+D5/1+5:2 E4+E5/1+5:2 | F4+F5/1+5:12 E4+E5/1+5:2 D4+D5/1+5:2",
        "E4+E5/1+5:3 r:1 C5+C6/1+5:8 A4+A5/1+5:4 | G4+G5/1+5:6 F4+F5/1+5:2 E4+E5/1+5:4 F4+F5/1+5:4",
        "E4+E5/1+5:8 D4+D5/1+5:7 r:1 | C4+E4+G4+C5/1+2+3+5:16",
      ].join(" | "),
      left: [
        halfBars(STRIDE, "CG CC CG CC FF GG CC CC CF GC CF GC"),
        halfBars(BROKEN_OCTAVE, "CC CC GG GG CF CG CG"),
        "C2+C3/5+1:16",
      ].join(" | "),
      pedal: "P:8 P:8 | ".repeat(19) + "P:16",
      skills: ["stride", "melody-in-chords", "octave-bass"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's chords alone, and let the little finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 12], wait: true },
        { text: "Play the octaves of bars 13 to 19 with the right hand alone. Keep the hand open and light.", hands: "right", speed: 0.5, loop: [13, 19], wait: true },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 12, kind: "trick", text: "In stride, look at the bass note and let the hand find the chord by feel." },
        { fromBar: 4, toBar: 4, kind: "sound", text: "The quick run from C up to G is a flourish. Let it sparkle, then land on G." },
        { fromBar: 13, toBar: 19, kind: "sound", text: "In octaves, play the little finger a little louder, so the tune shines on top." },
      ],
      tricky: {
        5: "From the high G, the hand drops onto C, F and A. The little finger moves up one key to A.",
        6: "The whole chord moves up one key, from C, F and A to D, G and B. Keep the hand's shape.",
        9: "The thumb steps down from E to C, while the top finger falls from the high C to G.",
      },
    },
  },
};

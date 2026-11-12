/**
 * *Ode to Joy*: the tune of the finale of Beethoven's Ninth Symphony, in four versions of ours.
 *
 * The tune is the sixteen bars the baritone first sings, in D major. Bar 12 ends on the low A, and the
 * last phrase starts on the beat, as the tune is usually played on its own. The hook is its first two
 * bars, eight quarter notes.
 *
 * Common moves the tune to C major and keeps the right hand in one place. Rare plays it in D with its
 * real rhythm over a bass and chords. Epic puts an Alberti bass under it with the pedal and plays the
 * returning phrase in thirds. Legendary sets the tune an octave up over a stride bass, plays the
 * returning phrase in chords with arpeggios under the middle part, and ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const D_MAJOR: Key = { tonic: 2, mode: "major" };

/** The tune in D major, in eighths: phrase A, A again with its home ending, the middle, and A. */
const A = "F#4:2 F#4:2 G4:2 A4:2 | A4:2 G4:2 F#4:2 E4:2 | D4:2 D4:2 E4:2 F#4:2";
const B = "E4:2 E4:2 F#4:2 D4:2 | E4:2 F#4:1 G4:1 F#4:2 D4:2 | E4:2 F#4:1 G4:1 F#4:2 E4:2 | D4:2 E4:2 A3:4";
const tune = [A, "F#4:3 E4:1 E4:4", A, "E4:3 D4:1 D4:4", B, A, "E4:3 D4:1 D4:4"].join(" | ");

/** Half a bar of Alberti bass in eighths, on D major or on A major. */
const ALBERTI: Record<string, string> = { D: "D3/5:1 A3/1:1 F#3/3:1 A3/1:1", A: "C#3/5:1 A3/1:1 E3/3:1 A3/1:1" };

/** Half a bar of stride: the root in octaves, then the chord, each an eighth with a rest for the jump. */
const STRIDE: Record<string, string> = {
  D: "D2+D3/5+1:1 r:1 F#3+A3+D4/3+2+1:1 r:1",
  A: "A1+A2/5+1:1 r:1 E3+A3+C#4/3+2+1:1 r:1",
};

/** Half a bar of broken chord in eighths: A major rising, D major falling. */
const ARPEGGIO: Record<string, string> = { a: "A1/5:1 E2/3:1 A2/2:1 C#3/1:1", d: "D3/1:1 A2/2:1 F#2/3:1 D2/5:1" };

/** Bars of `patterns` from `halves`, such as `"DD AD"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

export const odeToJoy: OurSong = {
  slug: "ode-to-joy",
  title: "Ode to Joy",
  source: {
    composer: "Ludwig van Beethoven",
    died: 1827,
    published: 1826,
    edition: "Symphony No. 9, Op. 125, fourth movement, in the Breitkopf & Härtel complete edition, series 1 no. 9 (1863)",
  },
  about:
    "Beethoven wrote this tune for the last movement of his Ninth Symphony, first played in Vienna in 1824. " +
    "A choir sings it to Friedrich Schiller's poem about joy and friendship. " +
    "Today it is the anthem of the European Union, played without words.",
  funFact: "Beethoven was almost completely deaf when the Ninth was first played, and he had to be turned round to see the applause.",
  mythic: null,
  tune: { text: tune, numerator: 4, denominator: 4, steps: 2, key: D_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: { tonic: 0, mode: "major" },
      bpm: 100,
      numerator: 4,
      denominator: 4,
      right: [
        "E4/3:1 E4/3:1 F4/4:1 G4/5:1 | G4/5:1 F4/4:1 E4/3:1 D4/2:1 | C4/1:1 C4/1:1 D4/2:1 E4/3:1 | E4/3:1 D4/2:1 D4/2:2",
        "E4/3:1 E4/3:1 F4/4:1 G4/5:1 | G4/5:1 F4/4:1 E4/3:1 D4/2:1 | C4/1:1 C4/1:1 D4/2:1 E4/3:1 | D4/2:1 C4/1:1 C4/1:2",
        "D4/2:1 D4/2:1 E4/3:1 C4/1:1 | D4/2:1 E4/3:2 C4/1:1 | D4/2:1 E4/3:2 D4/2:1 | C4/1:1 D4/2:1 G3/1:1 r:1",
        "E4/3:1 E4/3:1 F4/4:1 G4/5:1 | G4/5:1 F4/4:1 E4/3:1 D4/2:1 | C4/1:1 C4/1:1 D4/2:1 E4/3:1 | D4/2:1 C4/1:1 C4/1:2",
      ].join(" | "),
      left: [
        "C3+G3/5+1:4 | D3+G3/4+1:4 | C3+G3/5+1:4 | D3+G3/4+1:4",
        "C3+G3/5+1:4 | D3+G3/4+1:4 | C3+G3/5+1:4 | D3+G3/4+1:2 C3+G3/5+1:2",
        "D3+G3/4+1:2 C3+G3/5+1:2 | D3+G3/4+1:2 C3+G3/5+1:2 | D3+G3/4+1:4 | C3/5:2 D3/4:2",
        "C3+G3/5+1:4 | D3+G3/4+1:4 | C3+G3/5+1:4 | D3+G3/4+1:2 C3+G3/5+1:2",
      ].join(" | "),
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play the right hand alone, slowly, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Now the left hand alone. It only changes between two shapes.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Put both hands together on the first eight bars.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Each finger has its own key here: thumb on C, little finger on G." },
        { fromBar: 4, toBar: 4, kind: "rhythm", text: "The last D is twice as long as the notes before it, so count two beats." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "The middle part is the quiet one. Play it softly, then come back strong in bar 13." },
      ],
      tricky: {
        2: "Walk down from the little finger, one finger per key: 5, 4, 3, 2.",
        12: "Your thumb stretches down to the low G, while the other fingers stay where they are.",
        13: "After the rest, find E with your third finger, and the tune starts again.",
      },
    },
    rare: {
      key: D_MAJOR,
      bpm: 100,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "F#4/3:2 F#4/3:2 G4/4:2 A4/5:2 | A4/5:2 G4/4:2 F#4/3:2 E4/2:2 | D4/1:2 D4/1:2 E4/2:2 F#4/3:2 | F#4/3:3 E4/2:1 E4/2:4",
        "F#4/3:2 F#4/3:2 G4/4:2 A4/5:2 | A4/5:2 G4/4:2 F#4/3:2 E4/2:2 | D4/1:2 D4/1:2 E4/2:2 F#4/3:2 | E4/2:3 D4/1:1 D4/1:4",
        "E4/2:2 E4/2:2 F#4/3:2 D4/1:2 | E4/2:2 F#4/3:1 G4/4:1 F#4/3:2 D4/1:2 | E4/2:2 F#4/3:1 G4/4:1 F#4/3:2 E4/2:2 | D4/1:2 E4/2:2 A3/1:4",
        "F#4/3:2 F#4/3:2 G4/4:2 A4/5:2 | A4/5:2 G4/4:2 F#4/3:2 E4/2:2 | D4/1:2 D4/1:2 E4/2:2 F#4/3:2 | E4/2:3 D4/1:1 D4/1:4",
      ].join(" | "),
      left: [
        "D3/4:4 A3/1:4 | C#3/5:4 E3+A3/3+1:4 | D3/4:4 F#3+A3/2+1:4 | C#3/5:4 E3+A3/3+1:4",
        "D3/4:4 A3/1:4 | C#3/5:4 E3+A3/3+1:4 | D3/4:4 F#3+A3/2+1:4 | C#3/5:4 D3+F#3+A3/4+2+1:4",
        "C#3+E3+A3/5+3+1:4 D3+F#3+A3/4+2+1:4 | C#3+E3+A3/5+3+1:4 D3+F#3+A3/4+2+1:4 | C#3+E3+A3/5+3+1:4 D3+F#3+A3/4+2+1:4 | D3+F#3/4+2:4 C#3+E3/5+3:4",
        "D3/4:4 A3/1:4 | C#3/5:4 E3+A3/3+1:4 | D3/4:4 F#3+A3/2+1:4 | C#3/5:4 D3+F#3+A3/4+2+1:4",
      ].join(" | "),
      skills: ["eighth-notes", "dotted-rhythm", "triads"],
      practice: [
        { text: "Clap or tap the dotted rhythm of bar 4, then play the right hand alone.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the left hand alone, and keep each chord until the next one.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the middle part, where the chords change every two beats.", hands: "both", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 4, toBar: 4, kind: "rhythm", text: "Long, short, long: the F sharp lasts a beat and a half, and the E half a beat." },
        { fromBar: 10, toBar: 11, kind: "rhythm", text: "The two quick notes are eighths. Think of them as one beat split in two." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "Each chord of the middle part lasts two beats. Let it ring until the next one." },
      ],
      tricky: {
        10: "The F sharp and G go by quickly. Keep fingers 3 and 4 close to their keys.",
        12: "Your thumb slides from D down to the low A, and the hand follows it.",
        13: "From the low A, your third finger reaches up for F sharp. Look before you jump.",
      },
    },
    epic: {
      key: D_MAJOR,
      bpm: 104,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "F#4/3:2 F#4/3:2 G4/4:2 A4/5:2 | A4/5:2 G4/4:2 F#4/3:2 E4/2:2 | D4/1:2 D4/1:2 E4/2:2 F#4/3:2 | F#4/3:3 E4/2:1 E4/2:2 C#4/1:1 D4/2:1",
        "D4+F#4/1+3:2 D4+F#4/1+3:2 E4+G4/2+4:2 F#4+A4/3+5:2 | F#4+A4/3+5:2 E4+G4/2+4:2 F#4/3:2 C#4+E4/1+2:2 | A3+D4/1+2:2 A3+D4/1+2:2 E4/3:2 D4+F#4/2+4:2 | C#4+E4/2+3:3 D4/3:1 D4/1:4",
        "E4/2:2 E4/2:2 F#4/3:2 D4/1:2 | E4/2:2 F#4/3:1 G4/4:1 F#4/3:2 D4/1:2 | E4/2:2 F#4/3:1 G4/4:1 F#4/3:2 E4/2:2 | D4/1:2 E4/2:2 A3/1:2 C#4/2:1 E4/3:1",
        "D4+F#4/1+3:2 D4+F#4/1+3:2 E4+G4/2+4:2 F#4+A4/3+5:2 | F#4+A4/3+5:2 E4+G4/2+4:2 F#4/3:2 C#4+E4/1+2:2 | A3+D4/1+2:2 A3+D4/1+2:2 E4/3:2 D4+F#4/2+4:2 | C#4+E4/2+3:3 D4/3:1 A3+D4/1+3:4",
      ].join(" | "),
      left: `${halfBars(ALBERTI, "DD AA DD AA DD AA DD AD AD AD AD DA DD AA DD A")} D3+F#3/5+3:4`,
      pedal: "P:8 | P:8 | P:8 | P:8 | P:8 | P:8 | P:8 | P:4 P:4 | P:4 P:4 | P:4 P:4 | P:4 P:4 | P:4 P:4 | P:8 | P:8 | P:8 | P:4 P:4",
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Join the hands on the first four bars, slowly.", hands: "both", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 5, toBar: 8, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
        { fromBar: 8, toBar: 12, kind: "sound", text: "The pedal changes in the middle of each bar here. Lift it as the new chord starts." },
      ],
      tricky: {
        8: "Change from finger 3 to 1 on the repeated D, so the hand is ready for bar 9.",
        13: "The thirds come back here. Press the two notes of each pair as one.",
        16: "Your thumb drops to the low A for the last chord, under the third finger's D.",
      },
    },
    legendary: {
      key: D_MAJOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "F#5/3:2 F#5/3:2 G5/4:2 A5/5:2 | A5/5:2 G5/4:2 F#5/3:2 E5/2:2 | D5/1:2 D5/1:2 E5/2:2 F#5/3:2 | F#5/3:3 E5/2:1 E5/3:4",
        "A4+D5+F#5/1+2+4:2 A4+D5+F#5/1+2+4:2 B4+D5+G5/1+2+5:2 A4+D5+A5/1+2+5:2 | A4+C#5+A5/1+2+5:2 A4+C#5+G5/1+2+5:2 A4+D5+F#5/1+3+5:2 A4+C#5+E5/1+3+5:2 | F#4+A4+D5/1+2+5:2 F#4+A4+D5/1+2+5:2 G4+B4+E5/1+2+5:2 A4+D5+F#5/1+3+5:2 | G4+C#5+E5/1+2+4:3 F#4+D5/1+2:1 F#4+D5/1+2:4",
        "E5/2:2 E5/2:2 F#5/3:2 D5/1:2 | E5/2:2 F#5/3:1 G5/4:1 F#5/3:2 D5/1:2 | E5/2:2 F#5/3:1 G5/4:1 F#5/3:2 E5/2:2 | D5/1:2 E5/2:2 A4/1:2 C#5/2:1 E5/3:1",
        "D5+F#5/1+3:2 D5+F#5/1+3:2 D5+G5/1+4:2 D5+A5/1+5:2 | C#5+A5/1+5:2 C#5+G5/1+4:2 D5+F#5/2+3:2 C#5+E5/1+2:2 | A4+D5/1+2:2 A4+D5/1+2:2 G4+B4+E5/1+2+4:2 A4+D5+F#5/1+3+5:2 | G4+C#5+E5/1+3+5:3 F#4+A4+D5/1+2+5:1 D4+F#4+A4+D5/1+2+3+5:4",
      ].join(" | "),
      left: `${halfBars(STRIDE, "DD AA DD AA DD AA DD AD")} | ${halfBars(ARPEGGIO, "ad ad ad da")} | ${halfBars(STRIDE, "DD AA DD A")} D2+A2+D3/5+2+1:4`,
      pedal: "P:4 P:4 | ".repeat(15) + "P:8",
      skills: ["stride", "melody-in-chords", "arpeggios"],
      practice: [
        { text: "Play the stride bass alone: jump down for the bass note, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [5, 8], wait: true },
        { text: "Play the middle part's arpeggios in the left hand alone.", hands: "left", speed: 0.6, loop: [9, 12], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "trick", text: "In stride, look at the bass note and let the hand find the chord by feel." },
        { fromBar: 5, toBar: 8, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
        { fromBar: 9, toBar: 12, kind: "fingering", text: "The arpeggio climbs with 5, 3, 2, 1, so the thumb lands on the top note." },
      ],
      tricky: {
        2: "The tune walks down while the bass jumps. Keep your eyes on the left hand.",
        6: "The chords change on every beat. Keep the thumb on A and move only the upper fingers.",
        14: "The tune falls from A to E while the thumb stays near C sharp. Let the top finger carry it.",
      },
    },
  },
};

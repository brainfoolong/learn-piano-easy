/**
 * *Canon in D*: the first violin of Pachelbel's canon over its ground bass, in four versions of ours.
 *
 * The tune is the first violin's entry in D major, with the ground at two notes a bar. It is eight bars
 * of half notes falling from F sharp, then four bars of the quarter-note variation, as the canon is
 * usually heard on piano. The hook is its first two bars, four half notes. The ground bass of eight
 * notes is the left hand of every version.
 *
 * Common moves the tune to C major over the ground in held notes, drops one note to keep the hand in
 * two places, and ends on C. Rare plays it in D over a root and fifth on each chord, and plays the
 * opening line again in thirds. Epic puts an Alberti bass under it with the pedal, sets one phrase in
 * sixths and adds the canon's eighth-note run. Legendary sets the tune in chords over octaves in the
 * bass, runs the left hand in sixteenths and ends on a four-note chord. Every version past Common ends
 * with one bar on the home chord after the tune and its added bars.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const D_MAJOR: Key = { tonic: 2, mode: "major" };

/** The tune in D major, in quarters: the falling line in half notes, then the quarter-note variation. */
const tune = [
  "F#5:2 E5:2 | D5:2 C#5:2 | B4:2 A4:2 | B4:2 C#5:2 | D5:2 C#5:2 | B4:2 A4:2 | G4:2 F#4:2 | G4:2 E4:2",
  "D4:1 F#4:1 A4:1 G4:1 | F#4:1 D4:1 F#4:1 E4:1 | D4:1 B3:1 D4:1 A4:1 | G4:1 B4:1 A4:1 G4:1",
].join(" | ");

/** The ground bass in D, in letters of half bars: D, A, B minor, F sharp minor, G, low D, G, A. */
const GROUND = "DA Bf Gd GA";

/** The quarter-note variation in D as Rare and Epic finger it, in eighths. */
const VARIATION =
  "D4/1:2 F#4/2:2 A4/4:2 G4/3:2 | F#4/2:2 D4/1:2 F#4/4:2 E4/3:2 | D4/2:2 B3/1:2 D4/2:2 A4/5:2";

/** The canon's eighth-note run over one turn of the ground, in eighths. */
const RUN = [
  "D5/5:1 C#5/4:1 D5/5:1 D4/1:1 C#4/2:1 A3/1:1 E4/2:1 F#4/3:1",
  "D4/1:1 D5/4:1 C#5/3:1 B4/2:1 C#5/1:1 F#5/2:1 A5/4:1 B5/5:1",
  "G5/3:1 F#5/2:1 E5/1:1 G5/3:1 F#5/2:1 E5/1:1 D5/3:1 C#5/2:1",
  "B4/1:1 A4/3:1 G4/2:1 F#4/1:1 E4/2:1 G4/4:1 F#4/3:1 E4/2:1",
].join(" | ");

/** Half a bar of Alberti bass in eighths, on each chord of the ground. */
const ALBERTI: Record<string, string> = {
  D: "D3/5:1 A3/1:1 F#3/3:1 A3/1:1",
  A: "A2/5:1 E3/1:1 C#3/3:1 E3/1:1",
  B: "B2/5:1 F#3/1:1 D3/3:1 F#3/1:1",
  f: "F#2/5:1 C#3/1:1 A2/3:1 C#3/1:1",
  G: "G2/5:1 D3/1:1 B2/3:1 D3/1:1",
  d: "D2/5:1 A2/1:1 F#2/3:1 A2/1:1",
};

/** Half a bar of Alberti bass in sixteenths: the eighth pattern played twice as fast, twice. */
const ALBERTI_16: Record<string, string> = Object.fromEntries(
  Object.entries(ALBERTI).map(([chord, half]) => [chord, `${half} ${half}`]),
);

/** Half a bar of octave bass in sixteenths: the root in octaves for a dotted quarter, and an eighth's rest for the jump. */
const OCTAVES: Record<string, string> = {
  D: "D2+D3/5+1:6 r:2",
  A: "A1+A2/5+1:6 r:2",
  B: "B1+B2/5+1:6 r:2",
  f: "F#1+F#2/5+1:6 r:2",
  G: "G1+G2/5+1:6 r:2",
  d: "D1+D2/5+1:6 r:2",
};

/** Bars of `patterns` from `halves`, such as `"DA Bf"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** `GROUND` played `times` times in a row. */
function grounds(times: number): string {
  return Array.from({ length: times }, () => GROUND).join(" ");
}

export const canonInD: OurSong = {
  slug: "canon-in-d",
  title: "Canon in D",
  source: {
    composer: "Johann Pachelbel",
    died: 1706,
    published: 1919,
    edition: "Canon and Gigue in D major, in Gustav Beckmann's first edition (1919) of the score from about 1700",
  },
  about:
    "Johann Pachelbel wrote this canon around 1700, for three violins over a bass line. " +
    "The bass plays the same eight notes again and again, while each violin enters with the same tune. " +
    "The piece lay forgotten until Gustav Beckmann first printed it in 1919.",
  funFact: "The canon was almost unknown until the late 1960s, and today it is one of the most played pieces at weddings.",
  mythic: null,
  tune: { text: tune, numerator: 4, denominator: 4, key: D_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: { tonic: 0, mode: "major" },
      bpm: 72,
      numerator: 4,
      denominator: 4,
      right: [
        "E5/5:2 D5/4:2 | C5/3:2 B4/2:2 | A4/1:4 | A4/1:2 B4/3:2",
        "C5/5:2 B4/4:2 | A4/3:2 G4/2:2 | F4/2:2 E4/1:2 | F4/3:2 D4/2:2",
        "C4/1:1 E4/2:1 G4/4:1 F4/3:1 | E4/2:1 C4/1:1 E4/4:1 D4/3:1 | C4/2:1 A3/1:1 C4/2:1 G4/5:1 | F4/3:1 A4/5:1 G4/4:1 F4/3:1",
        "C4/1:4",
      ].join(" | "),
      left: [
        "C3/1:2 G2/3:2 | A2/2:2 E2/5:2 | F2/4:2 C3/1:2 | F2/4:2 G2/3:2",
        "C3/1:2 G2/3:2 | A2/2:2 E2/5:2 | F2/4:2 C3/1:2 | F2/4:2 G2/3:2",
        "C3/1:2 G2/3:2 | A2/2:2 E2/5:2 | F2/4:2 C3/1:2 | F2/4:2 G2/3:2",
        "C3/1:4",
      ].join(" | "),
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the right hand alone, slowly, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Now the left hand alone. The same eight notes come back three times.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Put both hands together on the first four bars.", hands: "both", speed: 0.7, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 3, kind: "fingering", text: "The tune walks down one key at a time, from finger 5 to the thumb." },
        { fromBar: 1, toBar: 4, kind: "sound", text: "Each bass note lasts two beats. Let it ring under the tune." },
        { fromBar: 9, toBar: 12, kind: "rhythm", text: "The tune now moves in quarter notes, twice as fast as before. Count four in each bar." },
      ],
      tricky: {
        5: "Finger 5 comes back to C at the top, and the tune walks down again.",
        7: "Move the hand one key lower: finger 2 goes from G to F, and the thumb takes E.",
        8: "Finger 3 plays F and finger 2 plays D, so the thumb is ready for C.",
      },
    },
    rare: {
      key: D_MAJOR,
      bpm: 76,
      numerator: 4,
      denominator: 4,
      right: [
        "F#5/5:2 E5/4:2 | D5/3:2 C#5/2:2 | B4/1:2 A4/1:2 | B4/2:2 C#5/3:2",
        "D5/5:2 C#5/4:2 | B4/4:2 A4/3:2 | G4/2:2 F#4/1:2 | G4/3:2 E4/2:2",
        "D4/1:1 F#4/2:1 A4/4:1 G4/3:1 | F#4/2:1 D4/1:1 F#4/4:1 E4/3:1 | D4/2:1 B3/1:1 D4/2:1 A4/5:1 | G4/2:1 B4/4:1 A4/2:1 G4/1:1",
        "D5+F#5/3+5:2 C#5+E5/2+4:2 | B4+D5/1+3:2 A4+C#5/1+3:2 | B4/2:2 A4/1:2 | B4/2:2 C#5/3:2",
        "A4+D5/1+4:4",
      ].join(" | "),
      left: [
        "D3/5:1 A3/1:1 A2/5:1 E3/1:1 | B2/5:1 F#3/1:1 F#2/5:1 C#3/1:1 | G2/5:1 D3/1:1 D2/5:1 A2/1:1 | G2/5:1 D3/1:1 A2/5:1 E3/1:1",
        "D3/5:1 A3/1:1 A2/5:1 E3/1:1 | B2/5:1 F#3/1:1 F#2/5:1 C#3/1:1 | G2/5:1 D3/1:1 D2/5:1 A2/1:1 | G2/5:1 D3/1:1 A2/5:1 E3/1:1",
        "D3/5:1 A3/1:1 A2/5:1 E3/1:1 | B2/5:1 F#3/1:1 F#2/5:1 C#3/1:1 | G2/5:1 D3/1:1 D2/5:1 A2/1:1 | G2/5:1 D3/1:1 A2/5:1 E3/1:1",
        "D3/5:1 A3/1:1 A2/5:1 E3/1:1 | B2/5:1 F#3/1:1 F#2/5:1 C#3/1:1 | G2/5:1 D3/1:1 D2/5:1 A2/1:1 | G2/5:1 D3/1:1 A2/5:2",
        "D3+F#3+A3/5+2+1:4",
      ].join(" | "),
      skills: ["two-note-chords", "position-change"],
      practice: [
        { text: "Play the right hand alone through the falling line, slowly.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone: a low note with finger 5, then a higher one with the thumb.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the thirds of bars 13 and 14 alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [13, 16], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "The bass walks the same eight notes all through the piece. Keep it soft and even." },
        { fromBar: 9, toBar: 12, kind: "rhythm", text: "The tune now moves on every beat, while the bass keeps its steady pace." },
        { fromBar: 13, toBar: 14, kind: "trick", text: "In the canon, the violins play the same tune at different times. Here two of them sound together, a third apart." },
      ],
      tricky: {
        6: "Finger 4 moves from C sharp down to B, and the hand slides one key lower.",
        8: "Finger 3 takes G and finger 2 takes E, so the thumb is ready for D.",
        12: "End the bar with the thumb on G. Finger 5 then reaches up to F sharp.",
      },
    },
    epic: {
      key: D_MAJOR,
      bpm: 80,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "F#5/5:4 E5/4:4 | D5/3:4 C#5/2:4 | B4/1:4 A4/1:4 | B4/2:4 C#5/3:4",
        "F#4+D5/1+4:4 E4+C#5/1+4:4 | D4+B4/1+4:4 C#4+A4/1+4:4 | B3+G4/1+4:4 A3+F#4/1+4:4 | B3+G4/1+4:4 E4/2:4",
        VARIATION,
        "G4/2:2 B4/4:2 A4/3:2 G4/1:1 C#5/4:1",
        RUN,
        "D4+F#4+D5/1+3+5:8",
      ].join(" | "),
      left: `${halfBars(ALBERTI, grounds(4))} | D2+A2+D3/5+2+1:8`,
      pedal: `${"P:4 P:4 | ".repeat(12)}r:8 | r:8 | r:8 | r:8 | P:8`,
      markedClashBars: [14],
      skills: ["alberti-bass", "thirds-and-sixths", "thumb-under"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's sixths alone. Keep the hand in one shape and move it as a block.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play the run of bars 13 to 16 alone, slowly, with the fingers written.", hands: "right", speed: 0.5, loop: [13, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Keep the Alberti bass soft, so the long notes of the tune sing above it." },
        { fromBar: 5, toBar: 8, kind: "fingering", text: "Thumb and finger 4 play every sixth. The tune is the top note." },
        { fromBar: 13, toBar: 16, kind: "sound", text: "Lift the pedal for the run, so each quick note stays clear." },
      ],
      tricky: {
        6: "Slide the sixth down one key at a time. Thumb and finger 4 keep their shape.",
        16: "Fingers 3 and 2 cross over the thumb as the run falls. Keep the wrist still.",
        17: "From the last E, open the hand to D, F sharp and the high D in one move.",
      },
    },
    legendary: {
      key: D_MAJOR,
      bpm: 72,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [
        "A4+D5+F#5/1+3+5:8 A4+C#5+E5/1+3+5:8 | F#4+B4+D5/1+3+5:8 F#4+A4+C#5/1+3+5:8 | D4+G4+B4/1+3+5:8 D4+F#4+A4/1+3+5:8 | D4+G4+B4/1+3+5:8 E4+A4+C#5/1+3+5:8",
        "F#4+A4+D5/1+2+5:8 E4+A4+C#5/1+3+5:8 | D4+F#4+B4/1+2+5:8 C#4+F#4+A4/1+3+5:8 | B3+D4+G4/1+2+5:8 A3+D4+F#4/1+3+5:8 | B3+D4+G4/1+2+5:8 A3+C#4+E4/1+2+4:8",
        "D4/1:4 F#4/2:4 A4/4:4 G4/3:4 | F#4/2:4 D4/1:4 F#4/4:4 E4/3:4 | D4/2:4 B3/1:4 D4/2:4 A4/5:4",
        "G4/2:4 B4/4:4 A4/3:4 G4/1:1 A4/2:1 B4/3:1 C#5/4:1",
        RUN.replace(/:1/g, ":2"),
        "D4+F#4+A4+D5/1+2+3+5:16",
      ].join(" | "),
      left: `${halfBars(OCTAVES, grounds(2))} | ${halfBars(ALBERTI_16, grounds(2))} | D2+A2+D3/5+2+1:16`,
      pedal: `${"P:8 P:8 | ".repeat(12)}r:16 | r:16 | r:16 | r:16 | P:16`,
      skills: ["octave-bass", "melody-in-chords", "sixteenth-notes"],
      practice: [
        { text: "Play the octave bass alone: hold each octave, then lift the hand for the next one.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the sixteenths of the left hand alone until they flow.", hands: "left", speed: 0.5, loop: [9, 12], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "trick", text: "In the left hand, keep the thumb and little finger an octave apart, and move the hand as one shape." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Keep the left hand's sixteenths soft, light and even, under the tune." },
      ],
      tricky: {
        2: "The thumb stays on F sharp for both chords. Move only fingers 3 and 5.",
        5: "The left hand jumps up to the D octave, while the right thumb steps from E to F sharp.",
        9: "The left hand starts its sixteenths here. Begin slowly, and let the tune walk on top.",
      },
    },
  },
};

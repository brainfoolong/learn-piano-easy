/**
 * *Twinkle Twinkle Little Star*: the French tune "Ah! vous dirai-je, maman", in four versions of ours.
 *
 * The tune is twelve bars in C major, the theme Mozart wrote his variations on, with two of its bars
 * to one of ours. The hook is its first two bars, seven notes.
 *
 * Common plays the tune as it is, with a finger on each note. Rare plays the tune with a few
 * eighth notes over held chords, and ends with a four-bar coda. Epic puts an Alberti bass under it with
 * the pedal, plays the returning phrase in thirds and runs up a scale in the coda. Legendary plays the
 * tune in chords over a stride bass, breaks it into sixteenths, then plays it in octaves.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in C major, in quarters: the opening phrase, the middle phrase twice, and the opening again. */
const OPENING = "C4:1 C4:1 G4:1 G4:1 | A4:1 A4:1 G4:2 | F4:1 F4:1 E4:1 E4:1 | D4:1 D4:1 C4:2";
const MIDDLE = "G4:1 G4:1 F4:1 F4:1 | E4:1 E4:1 D4:2";
const tune = [OPENING, MIDDLE, MIDDLE, OPENING].join(" | ");

/**
 * Half a bar of held chord in eighths. C keeps only C and E, so the hand reaches both F major below it
 * and G major without leaving its place.
 */
const HELD: Record<string, string> = { C: "C3+E3/2+1:4", F: "F2+A2+C3/5+3+2:4", G: "G2+B2/5+3:4" };

/** Half a bar of Alberti bass in eighths, on C major, F major over C, or G major over B. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  F: "C3/5:1 A3/1:1 F3/2:1 A3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1",
};

/** Half a bar of stride in sixteenths: the root in octaves, then the chord, each an eighth with a rest for the jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:2 r:2 E3+G3+C4/3+2+1:2 r:2",
  F: "F1+F2/5+1:2 r:2 A2+C3+F3/3+2+1:2 r:2",
  G: "G1+G2/5+1:2 r:2 B2+D3+G3/3+2+1:2 r:2",
};

/** Half a bar of octave bass in sixteenths, held. */
const OCTAVES: Record<string, string> = { C: "C2+C3/5+1:6 r:2", F: "F2+F3/5+1:6 r:2", G: "G2+G3/5+1:6 r:2" };

/** Half a bar of broken chord in sixteenths: root, fifth and tenth, each an eighth, then a rest for the jump. */
const BROKEN: Record<string, string> = { C: "C2/5:2 G2/2:2 E3/1:2 r:2", F: "F1/5:2 C2/2:2 A2/1:2 r:2", G: "G1/5:2 D2/2:2 B2/1:2 r:2" };

/** Bars of `patterns` from `halves`, such as `"CC FC"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

export const twinkleTwinkleLittleStar: OurSong = {
  slug: "twinkle-twinkle-little-star",
  title: "Twinkle Twinkle Little Star",
  source: {
    composer: "Traditional",
    died: null,
    published: 1761,
    edition: "The theme of Mozart's Twelve Variations on \"Ah, vous dirai-je, maman\", K. 265, in the Breitkopf & Härtel complete edition, series 21",
  },
  about:
    "This tune began as a French song, Ah! vous dirai-je, maman, first printed in 1761. " +
    "Mozart wrote twelve variations on it for the piano. " +
    "In 1806 Jane Taylor published her poem about a little star, and it was later sung to this tune.",
  funFact: "The alphabet song and Baa, Baa, Black Sheep are sung to this same tune.",
  mythic: null,
  tune: { text: tune, numerator: 4, denominator: 4, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 100,
      numerator: 4,
      denominator: 4,
      right: [
        "C4/1:1 C4/1:1 G4/4:1 G4/4:1 | A4/5:1 A4/5:1 G4/4:2 | F4/4:1 F4/4:1 E4/3:1 E4/3:1 | D4/2:1 D4/2:1 C4/1:2",
        "G4/5:1 G4/5:1 F4/4:1 F4/4:1 | E4/3:1 E4/3:1 D4/2:2 | G4/5:1 G4/5:1 F4/4:1 F4/4:1 | E4/3:1 E4/3:1 D4/2:2",
        "C4/1:1 C4/1:1 G4/4:1 G4/4:1 | A4/5:1 A4/5:1 G4/4:2 | F4/4:1 F4/4:1 E4/3:1 E4/3:1 | D4/2:1 D4/2:1 C4/1:2",
      ].join(" | "),
      left: [
        "C3/1:4 | F2/5:2 C3/1:2 | F2/5:2 C3/1:2 | G2/4:2 C3/1:2",
        "C3/1:2 F2/5:2 | C3/1:2 G2/4:2 | C3/1:2 F2/5:2 | C3/1:2 G2/4:2",
        "C3/1:4 | F2/5:2 C3/1:2 | F2/5:2 C3/1:2 | G2/4:2 C3/1:2",
      ].join(" | "),
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the right hand alone, slowly, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Now the left hand alone. It only moves between C, F and G.", hands: "left", speed: 0.6, loop: [1, 12], wait: true },
        { text: "Put both hands together on the first four bars.", hands: "both", speed: 0.7, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Put your thumb on middle C. Finger 4 plays G, and the little finger plays A." },
        { fromBar: 4, toBar: 4, kind: "rhythm", text: "The last C is twice as long as the notes before it, so count two beats." },
        { fromBar: 5, toBar: 8, kind: "sound", text: "The middle part says the same thing twice. Play it softer the second time, like an echo." },
      ],
      tricky: {
        3: "Your hand moves one key down here, so finger 4 leaves G and lands on F.",
        5: "Your little finger plays G now. Walk down from it, one finger per key: 5, 4, 3, 2.",
        11: "This is bar 3 again. Slide the hand one key down, so finger 4 lands on F.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 96,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "C4/1:2 C4/1:2 G4/4:2 G4/4:2 | A4/5:2 A4/5:2 G4/4:4 | F4/4:2 F4/4:2 E4/3:2 E4/3:2 | D4/2:2 D4/2:1 E4/3:1 C4/1:4",
        "G4/5:2 G4/5:2 F4/4:2 F4/4:1 G4/5:1 | E4/3:2 E4/3:2 D4/2:4 | G4/5:2 G4/5:2 F4/4:1 E4/3:1 F4/4:2 | E4/3:2 E4/3:2 D4/2:4",
        "C4/1:2 C4/1:2 G4/4:2 G4/4:2 | A4/5:2 A4/5:2 G4/4:4 | F4/4:2 F4/4:2 E4/3:2 E4/3:2 | D4/2:2 D4/2:1 E4/3:1 C4/1:4",
        "A4/5:2 A4/5:2 G4/4:4 | F4/4:2 F4/4:2 E4/3:2 E4/3:2 | D4/2:2 E4/3:1 F4/4:1 E4/3:2 D4/2:2 | C4/1:8",
      ].join(" | "),
      left: [
        "G2+C3+E3/4+2+1:8",
        halfBars(HELD, "FC FC GC CF CG CF CG"),
        "C3+E3/2+1:8",
        halfBars(HELD, "FC FC GC FC FC"),
        "G2+B2/5+3:8 | G2+C3+E3/5+2+1:8",
      ].join(" | "),
      skills: ["eighth-notes", "triads"],
      practice: [
        { text: "Play the right hand alone, slowly, and feel the two quick notes in bar 4.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the left hand alone. It holds each chord for two or four beats.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Put both hands together on the middle part.", hands: "both", speed: 0.7, loop: [5, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 4, toBar: 4, kind: "rhythm", text: "The D and the E share one beat. Say \"one-and\" as you play them." },
        { fromBar: 1, toBar: 8, kind: "fingering", text: "The left hand stays in one place, and each chord keeps its own fingers." },
        { fromBar: 13, toBar: 16, kind: "sound", text: "The last four bars are a coda, a short goodbye. Slow down a little at the end." },
      ],
      tricky: {
        3: "Finger 4 moves from G down to F here. Let the whole hand slide one key down with it.",
        11: "This is bar 3 again. Slide the hand one key down, so finger 4 lands on F.",
        14: "Finger 4 slides from G down to F once more, as the coda walks home.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 104,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "C4/1:2 C4/1:2 G4/4:2 G4/4:2 | A4/5:2 A4/5:2 G4/4:4 | F4/4:2 F4/4:2 E4/3:2 E4/3:2 | D4/2:2 D4/2:2 C4/1:2 E4/2:1 F4/3:1",
        "G4/4:2 G4/4:2 F4/3:2 F4/3:2 | E4/2:2 E4/2:2 D4/1:2 E4/2:1 F4/3:1 | G4/4:2 G4/4:2 F4/3:2 F4/3:2 | E4/2:2 E4/2:2 D4/1:4",
        "C4/1:2 C4/1:2 E4+G4/2+4:2 E4+G4/2+4:2 | F4+A4/3+5:2 F4+A4/3+5:2 E4+G4/2+4:4 | D4+F4/2+4:2 D4+F4/2+4:2 C4+E4/1+3:2 C4+E4/1+3:2 | B3+D4/1+2:2 B3+D4/1+2:2 C4/1:4",
        "A4/5:2 A4/5:2 G4/4:4 | F4/4:2 F4/4:2 E4/3:2 E4/3:2 | C4/1:1 D4/2:1 E4/3:1 F4/1:1 G4/2:1 A4/3:1 B4/4:1 C5/5:1 | E4+G4+C5/1+2+5:8",
      ].join(" | "),
      left: `${halfBars(ALBERTI, "CC FC FC GC CF CG CF CG CC FC FC GC FC FC CG")} | C3+E3+G3/5+3+1:8`,
      pedal: "P:4 P:4 | ".repeat(15) + "P:8",
      skills: ["alberti-bass", "pedal", "thumb-under"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Play the scale of bar 15 alone, with the thumb passing under after finger 3.", hands: "right", speed: 0.5, loop: [15, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the Alberti bass softly, so the tune stays on top." },
        { fromBar: 4, toBar: 6, kind: "rhythm", text: "The two quick notes at the end of bars 4 and 6 lead up to G. Play them lightly." },
        { fromBar: 15, toBar: 15, kind: "fingering", text: "Your thumb tucks under on F, so the scale climbs to C without a gap." },
        { fromBar: 1, toBar: 15, kind: "sound", text: "Change the pedal twice a bar, on beats one and three." },
      ],
      tricky: {
        3: "Finger 4 slides from G down to F, while the Alberti bass keeps rolling.",
        9: "Your thumb slides from D down to C. Then fingers 2 and 4 take the first third.",
        14: "Finger 4 slides from G down to F, as it did in bar 3.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 92,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [
        "C5/1:4 C5/1:4 C5+E5+G5/1+3+5:4 C5+E5+G5/1+3+5:4 | C5+F5+A5/1+3+5:4 C5+F5+A5/1+3+5:4 C5+E5+G5/1+3+5:8",
        "A4+C5+F5/1+2+5:4 A4+C5+F5/1+2+5:4 G4+C5+E5/1+2+5:4 G4+C5+E5/1+2+5:4 | G4+B4+D5/1+2+5:4 G4+B4+D5/1+2+5:4 E4+G4+C5/1+2+4:6 r:2",
        "G5/5:1 F5/4:1 E5/3:1 F5/4:1 G5/5:1 F5/4:1 E5/3:1 F5/4:1 F5/4:1 E5/3:1 D5/2:1 E5/3:1 F5/4:1 E5/3:1 D5/2:1 E5/3:1",
        "E5/3:1 D5/2:1 C5/1:1 D5/2:1 E5/3:1 D5/2:1 C5/1:1 D5/2:1 D5/2:8",
        "G5/5:1 F5/4:1 E5/3:1 F5/4:1 G5/5:1 F5/4:1 E5/3:1 F5/4:1 F5/4:1 E5/3:1 D5/2:1 E5/3:1 F5/4:1 E5/3:1 D5/2:1 E5/3:1",
        "E5/3:1 D5/2:1 C5/1:1 D5/2:1 E5/3:1 D5/2:1 C5/1:1 D5/2:1 D5/2:6 r:2",
        "C4+C5/1+5:2 r:2 C4+C5/1+5:2 r:2 G4+G5/1+5:2 r:2 G4+G5/1+5:2 r:2 | A4+A5/1+5:2 r:2 A4+A5/1+5:2 r:2 G4+G5/1+5:6 r:2",
        "F4+F5/1+5:2 r:2 F4+F5/1+5:2 r:2 E4+E5/1+5:2 r:2 E4+E5/1+5:2 r:2 | D4+D5/1+5:2 r:2 D4+D5/1+5:2 r:2 C4+C5/1+5:6 r:2",
        "C5+F5+A5/1+3+5:4 C5+F5+A5/1+3+5:4 C5+E5+G5/1+3+5:8 | A4+C5+F5/1+2+5:4 A4+C5+F5/1+2+5:4 G4+C5+E5/1+2+5:4 G4+C5+E5/1+2+5:4",
        "G5/5:1 F5/4:1 E5/3:1 D5/2:1 C5/1:1 B4/3:1 A4/2:1 G4/1:1 G4/1:1 B4/2:1 D5/3:1 G5/5:1 F5/4:1 D5/2:1 B4/1:2",
        "C5+E5+G5+C6/1+2+3+5:16",
      ].join(" | "),
      left: [
        halfBars(STRIDE, "CC FC FC GC"),
        halfBars(OCTAVES, "CF CG CF CG"),
        halfBars(BROKEN, "CC FC FC GC"),
        halfBars(STRIDE, "FC FC CG"),
        "C2+G2+C3/5+2+1:16",
      ].join(" | "),
      pedal: "P:8 P:8 | ".repeat(15) + "P:16",
      skills: ["stride", "sixteenth-notes", "melody-in-chords"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the sixteenths of the middle part slowly, with the right hand alone.", hands: "right", speed: 0.5, loop: [5, 8], wait: true },
        { text: "Play the right hand's octaves alone, and lift the hand between them.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "trick", text: "Watch the left hand's jumps, and let the right hand find its chords by feel." },
        { fromBar: 5, toBar: 8, kind: "rhythm", text: "Each tune note starts a group of four sixteenths. Lean on it a little, so the tune still sounds." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "Play the octaves short and bright, like bells." },
      ],
      tricky: {
        3: "The thumb steps from A down to G while finger 2 keeps C. Move the hand as one.",
        14: "This is bar 3 again. The thumb steps down from A to G, and finger 2 stays on C.",
        15: "Finger 3 crosses over the thumb on B as the run falls. Then the hand climbs back up through G major.",
      },
    },
  },
};

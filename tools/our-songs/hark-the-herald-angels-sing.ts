/**
 * *Hark! The Herald Angels Sing*: Felix Mendelssohn's Festgesang tune, in four versions of ours.
 *
 * The tune is the whole verse as hymnals print it, moved from F major down to C major and then up an
 * octave, so it sits from G4 to A5. Hymnals write it in 4/4 with dotted eighths. Every length here is
 * twice as long, in 4/2, so an eighth is a quarter and Common plays it at its place. Each bar of 4/2 is
 * one bar of the hymnal, and the verse has 20 of them.
 *
 * The hook is its first two bars. Common plays the whole tune in one hand position over held fifths. Rare
 * adds triads and two-note chords at the ends of phrases. Epic puts an Alberti bass with the pedal under the
 * tune, runs up with the thumb under, and plays some bars in thirds. Legendary sets the tune an octave up in
 * chords over a stride bass, then in octaves over a broken octave bass. Each of its chords and octaves is
 * an eighth short, so the hand lifts before it moves, and the pedal joins them.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The opening two bars in quarters, which come back as bars 5 and 6. */
const OPEN = "G4:2 C5:2 C5:3 B4:1 | C5:2 E5:2 E5:2 D5:2";

/** Bars 9 and 10 in quarters, which come back as bars 11 and 12. */
const JOYFUL = "G5:2 G5:2 G5:2 C5:2 | F5:2 E5:2 E5:2 D5:2";

/** Bar 15 in quarters, which comes back as bar 19. */
const CLIMB = "D5:2 E5:1 F5:1 G5:3 C5:1";

/** The tune in 4/2, in quarters: the hymnal's 20 bars, each twice as long. */
const tune = [
  OPEN,
  "G5:2 G5:2 G5:3 F5:1 | E5:2 D5:2 E5:4",
  OPEN,
  "G5:2 D5:2 D5:3 B4:1 | B4:2 A4:2 G4:4",
  JOYFUL,
  JOYFUL,
  "A5:2 A5:2 A5:2 G5:2 | F5:2 E5:2 F5:4",
  CLIMB,
  "C5:2 D5:2 E5:4",
  "A5:3 A5:1 A5:2 G5:2 | F5:2 E5:2 F5:4",
  CLIMB,
  "C5:2 D5:2 C5:4",
].join(" | ");

/** The tune's bars, one string each. */
const TUNE_BARS = tune.split(" | ");

/** The opening two bars in the right hand, with the thumb on G. */
const RIGHT_OPEN = "G4/1:2 C5/2:2 C5/2:3 B4/1:1 | C5/2:2 E5/4:2 E5/4:2 D5/3:2";

/** Bars 9 and 10 in the right hand. */
const RIGHT_JOYFUL = "G5/5:2 G5/5:2 G5/5:2 C5/1:2 | F5/4:2 E5/3:2 E5/3:2 D5/2:2";

/** Bar 15 in the right hand, with the thumb on D. */
const RIGHT_CLIMB = "D5/1:2 E5/2:1 F5/3:1 G5/4:3 C5/1:1";

/** Half a bar of the left hand in quarters, by chord: an open fifth for Common, a fuller chord for Rare. */
const FIFTH: Record<string, string> = {
  C: "C3+G3/5+1:4",
  G: "D3+G3/4+1:4",
  F: "C3+F3/5+2:4",
};
const TRIAD: Record<string, string> = {
  C: "C3+E3+G3/5+3+1:4",
  c: "C3+G3/5+1:4",
  G: "D3+G3/4+1:4",
  7: "D3+F3+G3/4+2+1:4",
  F: "C3+F3/5+2:4",
};

/** Half a bar of Alberti bass in quarters, on C major, G major over B, or F major over A. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1",
  F: "A2/5:1 F3/1:1 C3/3:1 F3/1:1",
};

/** Half a bar of stride in eighths: the root in octaves, then the chord, each with a rest for the jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:3 r:1 E3+G3+C4/3+2+1:3 r:1",
  G: "G1+G2/5+1:3 r:1 D3+G3+B3/3+2+1:3 r:1",
  D: "D2+D3/5+1:3 r:1 F#3+A3+C4/3+2+1:3 r:1",
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

/** The chords of bars 1 to 19, a letter per half bar. */
const CHORDS = "CC CG CC GC CC CG GG GG CC CC CC CG FF GG GC CC FF GG GC";

/** One bar of the tune in octaves, in eighths, from the notes and their lengths in quarters. */
function octaves(bar: string): string {
  return bar
    .split(" ")
    .map((note) => {
      const [pitch, length] = note.split(":");
      const name = pitch!.slice(0, -1);
      const octave = Number(pitch!.slice(-1));
      return `${name}${octave}+${name}${octave + 1}/1+5:${Number(length) * 2}`;
    })
    .join(" ");
}

/** A bar with each chord one eighth short and a rest after it, so the hand lifts before it moves. */
function detached(bar: string): string {
  return bar
    .split(" ")
    .map((chord) => {
      const [notes, length] = chord.split(":");
      return `${notes}:${Number(length) - 1} r:1`;
    })
    .join(" ");
}

export const harkTheHeraldAngelsSing: OurSong = {
  slug: "hark-the-herald-angels-sing",
  title: "Hark! The Herald Angels Sing",
  source: {
    composer: "Felix Mendelssohn",
    died: 1847,
    published: 1840,
    edition:
      "Part 2 of Mendelssohn's Festgesang (1840), \"Vaterland, in deinen Gauen\", as William H. Cummings adapted it in 1855 and printed it in 1856, " +
      "checked against a public domain hymnal score",
  },
  about:
    "Felix Mendelssohn wrote this tune in 1840 for a festival in Leipzig. " +
    "The festival marked four hundred years of printing with movable type. " +
    "In 1855 William H. Cummings fitted the tune to Christmas words that Charles Wesley wrote in 1739.",
  funFact:
    "The tune was first sung by a men's choir with two brass orchestras, in Leipzig's market square, on 24 June 1840.",
  mythic: null,
  collection: "christmas",
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 168,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: [
        RIGHT_OPEN,
        "G5/5:2 G5/5:2 G5/5:3 F5/4:1 | E5/3:2 D5/2:2 E5/3:3 r:1",
        RIGHT_OPEN,
        "G5/5:2 D5/3:2 D5/3:3 B4/2:1 | B4/3:2 A4/2:2 G4/1:3 r:1",
        RIGHT_JOYFUL,
        RIGHT_JOYFUL,
        "A5/5:2 A5/5:2 A5/5:2 G5/4:2 | F5/3:2 E5/2:2 F5/3:4",
        RIGHT_CLIMB,
        "C5/1:2 D5/2:2 E5/3:4",
        "A5/5:3 A5/5:1 A5/5:2 G5/4:2 | F5/3:2 E5/2:2 F5/3:4",
        RIGHT_CLIMB,
        "C5/1:2 D5/2:2 C5/1:4",
      ].join(" | "),
      left: `${halfBars(FIFTH, CHORDS)} | ${halfBars(FIFTH, "GC")}`,
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play the first two bars with the right hand alone. The thumb starts on G.", hands: "right", speed: 0.6, loop: [1, 2], wait: true },
        { text: "Play bars 1 to 8 with the right hand alone. The hand never needs to move.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play bars 13 to 20 with the right hand alone, where the tune climbs to the high A.", hands: "right", speed: 0.6, loop: [13, 20], wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.75, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "Long, short: the second C lasts three times as long as the B after it." },
        { fromBar: 8, toBar: 8, kind: "fingering", text: "Play the B of bar 7 with finger 2, and the B of bar 8 with finger 3. Then fingers 2 and 1 play A and G." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "Bars 11 and 12 repeat bars 9 and 10. Play them a little louder the second time." },
      ],
      tricky: {
        3: "Finger 3 plays D, then the little finger reaches up to G. Keep the hand still and open.",
        7: "The little finger plays G. Then finger 3 drops to D, and finger 2 to B.",
        13: "Finger 2 plays D, then the little finger stretches up to the high A.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 176,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: [
        RIGHT_OPEN,
        "G5/5:2 G5/5:2 G5/5:3 F5/4:1 | E5/3:2 D5/2:2 E5/3:3 r:1",
        RIGHT_OPEN,
        "G5/5:2 D5/3:2 D5/3:3 B4/2:1 | B4/3:2 A4/2:2 G4/1:3 r:1",
        RIGHT_JOYFUL,
        RIGHT_JOYFUL,
        "A5/5:2 A5/5:2 A5/5:2 G5/4:2 | F5/3:2 E5/2:2 D5+F5/1+3:4",
        RIGHT_CLIMB,
        "C5/1:2 D5/2:2 C5+E5/1+3:4",
        "A5/5:3 A5/5:1 A5/5:2 G5/4:2 | F5/3:2 E5/2:2 D5+F5/1+3:4",
        RIGHT_CLIMB,
        "C5/2:2 D5/3:2 G4+C5/1+2:4",
      ].join(" | "),
      left: `${halfBars(TRIAD, CHORDS.replace("CC CC CC CG FF", "CC cC CC cG FF"))} | ${halfBars(TRIAD, "7C")}`,
      skills: ["triads", "two-note-chords"],
      practice: [
        { text: "Play the right hand alone on the first four bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the left hand alone. It holds one chord for each half of a bar.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on bars 13 to 20, where the right hand plays two notes at once.", hands: "both", speed: 0.6, loop: [13, 20], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the left hand's chords soft, so the tune rings above them." },
        { fromBar: 14, toBar: 14, kind: "fingering", text: "Press D and F together with the thumb and finger 3. The F is the tune, so let it sing." },
        { fromBar: 17, toBar: 17, kind: "rhythm", text: "Long, short, then even: the first A lasts three times as long as the second." },
      ],
      tricky: {
        3: "Finger 3 plays D, then the little finger reaches up to G. Keep the hand still and open.",
        7: "The little finger plays G. Then finger 3 drops to D, and finger 2 to B.",
        13: "Finger 2 plays D, then the little finger stretches up to the high A.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 184,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: [
        RIGHT_OPEN,
        "G5/5:2 G5/5:2 G5/5:3 F5/4:1 | E5/3:2 D5/2:2 E5/3:4",
        RIGHT_OPEN,
        "G5/5:2 D5/3:2 D5/3:3 B4/2:1 | B4/3:2 A4/2:2 G4/1:1 A4/2:1 B4/3:1 C5/1:1",
        "E5+G5/3+5:2 E5+G5/3+5:2 E5+G5/3+5:2 C5/1:2 | D5+F5/2+4:2 C5+E5/1+3:2 C5+E5/1+3:2 B4+D5/1+2:2",
        "E5+G5/3+5:2 E5+G5/3+5:2 E5+G5/3+5:2 C5/1:2 | D5+F5/2+4:2 C5+E5/1+3:2 E5/3:2 B4+D5/1+2:2",
        "A5/5:2 A5/5:2 A5/5:2 G5/4:2 | F5/3:2 E5/2:2 F5/3:4",
        RIGHT_CLIMB,
        "C5/1:2 D5/2:2 E5/3:4",
        "F5+A5/3+5:3 F5+A5/3+5:1 F5+A5/3+5:2 E5+G5/2+4:2 | D5+F5/2+4:2 C5+E5/1+3:2 D5+F5/2+4:4",
        "D5/1:2 E5/2:1 F5/3:1 G5/5:3 C5/1:1",
        "C5/2:2 D5/3:2 E4+C5/1+3:4",
      ].join(" | "),
      left: `${halfBars(ALBERTI, CHORDS)} | G2/5:1 G3/1:1 D3/3:1 r:1 C2+C3/5+1:4`,
      pedal: "P:4 P:4 | ".repeat(19) + "P:4 P:4",
      skills: ["alberti-bass", "thumb-under", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play bars 8 and 9 with the right hand alone. The thumb passes under finger 3 onto C.", hands: "right", speed: 0.5, loop: [8, 9], wait: true },
        { text: "Play the thirds of bars 9 to 12 with the right hand alone, and press both notes as one.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 9, toBar: 12, kind: "fingering", text: "The tune is the top note of each third, so let the upper finger lead." },
        { fromBar: 1, toBar: 20, kind: "sound", text: "Change the pedal at the start and the middle of each bar, as the left hand starts its pattern again." },
      ],
      tricky: {
        8: "After the low G, fingers 2 and 3 run up A and B. Then the thumb passes under onto C.",
        18: "The thirds step down and back up: fingers 2 and 4, then the thumb and 3, then 2 and 4 again.",
        20: "Finger 2 plays C and finger 3 plays D. Then the thumb reaches down to E under the last C.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 200,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [
        "C5+E5+G5/1+3+5:4 C5+E5+G5+C6/1+2+3+5:4 C5+E5+G5+C6/1+2+3+5:6 B4+D5+G5+B5/1+2+3+5:2",
        "C5+E5+G5+C6/1+2+3+5:4 G5+C6+E6/1+2+4:4 G5+C6+E6/1+2+4:4 G5+B5+D6/1+2+4:4",
        "C6+E6+G6/1+3+5:4 C6+E6+G6/1+3+5:4 C6+E6+G6/1+3+5:6 B5+D6+F6/1+2+4:2",
        "G5+C6+E6/1+2+4:4 G5+B5+D6/1+2+4:4 G5+C6+E6/1+2+4:8",
        "C5+E5+G5/1+3+5:4 C5+E5+G5+C6/1+2+3+5:4 C5+E5+G5+C6/1+2+3+5:6 B4+D5+G5+B5/1+2+3+5:2",
        "C5+E5+G5+C6/1+2+3+5:4 G5+C6+E6/1+2+4:4 G5+C6+E6/1+2+4:4 G5+B5+D6/1+2+4:4",
        "B5+D6+G6/1+2+5:4 G5+B5+D6/1+2+4:4 G5+B5+D6/1+2+4:6 D5+G5+B5/1+2+4:2",
        "D5+G5+B5/1+2+4:4 D5+F#5+A5/1+2+4:4 B4+D5+G5/1+2+4:8",
        TUNE_BARS.slice(8, 19).join(" | "),
      ]
        .join(" | ")
        .split(" | ")
        .map((bar, at) => (at < 8 ? bar : octaves(bar)))
        .map(detached)
        .concat(`${detached(octaves("C5:2 D5:2"))} C5+E5+G5+C6/1+2+3+5:8`)
        .join(" | "),
      left: [
        halfBars(STRIDE, "CC CG CC GC CC CG GG DG"),
        halfBars(BROKEN_OCTAVE, "CC CC CC CG FF GG GC CC FF GG GC"),
        `${BROKEN_OCTAVE.G} C2+C3/5+1:8`,
      ].join(" | "),
      pedal: "P:8 P:8 | ".repeat(19) + "P:8 P:8",
      skills: ["stride", "melody-in-chords", "octave-bass"],
      practice: [
        { text: "Play the stride bass alone: jump down for the low octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's chords alone. Lift the hand after each one, and let the top finger sing.", hands: "right", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the octaves of bars 9 to 20 with the right hand alone. Keep the hand open and light.", hands: "right", speed: 0.5, loop: [9, 20], wait: true },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 1, toBar: 20, kind: "sound", text: "Each chord is short, and the pedal joins them. Change it at the start and the middle of each bar." },
        { fromBar: 9, toBar: 20, kind: "sound", text: "In octaves, play the little finger a little louder, so the tune shines on top." },
      ],
      tricky: {
        2: "From the big C chord, the hand jumps up to G, C and E. Lift it in the short rest first.",
        6: "Bar 6 is bar 2 again. Lift the hand in the rest, then jump up to G, C and E.",
        7: "The hand drops from the high G chord to G, B and D. The thumb moves from B down to G.",
      },
    },
  },
};

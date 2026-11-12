/**
 * *O Christmas Tree*: the traditional German tune of *O Tannenbaum*, in four versions of ours.
 *
 * The tune is the whole verse as it is sung today: the opening phrase, the middle phrase and its echo a
 * step lower, then the opening again. It is in C major, after a bar holding the one-beat pickup.
 *
 * The tune is in 3/4, and every length here is four times as long, in 3/1. A whole note is one beat,
 * so the sixteenth of each dotted pair is a quarter, and Common plays it at its place. The hook is the
 * pickup bar and the next two, the opening figure the song is known by.
 *
 * Common plays the tune over held fifths. Rare plays it twice, over block triads and then a waltz bass,
 * the second time an octave up. Epic puts an Alberti bass under the first verse and plays the second in
 * thirds and sixths over a waltz bass, with the pedal. Legendary sets the tune in chords over a stride
 * bass, then in high octaves over arpeggios.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 3/1, in quarters: the pickup bar, then the twelve bars of the verse. */
const tune = [
  "r:8 G3:4 | C4:3 C4:1 C4:6 D4:2 | E4:3 E4:1 E4:6 E4:2 | D4:2 E4:2 F4:4 B3:4 | D4:4 C4:6 G4:2",
  "G4:2 E4:2 A4:6 G4:2 | G4:2 F4:2 F4:6 F4:2 | F4:2 D4:2 G4:6 F4:2 | F4:2 E4:2 E4:4 G3:4",
  "C4:3 C4:1 C4:6 D4:2 | E4:3 E4:1 E4:6 E4:2 | D4:2 E4:2 F4:4 B3:4 | D4:4 C4:8",
].join(" | ");

/** The pickup bar in the right hand, in quarters: the thumb on G below middle C. */
const PICKUP = "r:8 G3/1:4";

/** The opening phrase in the right hand, in quarters: bars 2 to 4, which come back as bars 10 to 12. */
const OPENING = "C4/2:3 C4/2:1 C4/2:6 D4/3:2 | E4/4:3 E4/4:1 E4/4:6 E4/4:2 | D4/3:2 E4/4:2 F4/5:4 B3/1:4";

/** Bar 5 in the right hand, in quarters: the opening's close, and the pickup into the middle phrase. */
const TURN = "D4/3:4 C4/2:6 G4/5:2";

/** The middle phrase and its echo in the right hand, in quarters: bars 6 to 8. */
const MIDDLE = "G4/5:2 E4/3:2 A4/5:6 G4/4:2 | G4/4:2 F4/3:2 F4/3:6 F4/3:2 | F4/3:2 D4/1:2 G4/4:6 F4/3:2";

/** Bar 9 in the right hand, in quarters: the echo's close, and the pickup back into the opening. */
const RETURN = "F4/4:2 E4/3:2 E4/3:4 G3/1:4";

/** The last bar in the right hand, in quarters. */
const END = "D4/3:4 C4/2:8";

/** `text` an octave higher. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** The verse's second time in the right hand, an octave up: bars 14 to 25 of Rare. */
const SECOND_VERSE = octaveUp([OPENING, TURN, MIDDLE, RETURN, OPENING, END].join(" | "));

/** Bars of `patterns` from `beats`, such as `"Ccc Ggg"`: one letter per beat, a space between bars. */
function beatBars(patterns: Record<string, string>, beats: string): string {
  return beats
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** One bar of a block chord in quarters: C major, or G seventh with the hand kept still. */
const BLOCK: Record<string, string> = {
  C: "C3+E3+G3/5+3+1:12",
  G: "D3+F3+G3/4+2+1:12",
};

/** One beat of waltz bass in quarters: the bass note, or the chord above it, on C or G seventh. */
const WALTZ: Record<string, string> = {
  C: "C3/5:4",
  c: "E3+G3/3+1:4",
  G: "B2/5:4",
  g: "F3+G3/2+1:4",
};

/** One bar of Alberti bass in quarters, on C or on G seventh over B. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:2 G3/1:2 E3/3:2 G3/1:2 E3/3:2 G3/1:2",
  G: "B2/5:2 G3/1:2 D3/3:2 G3/1:2 F3/2:2 G3/1:2",
};

/** One beat of stride in eighths, its last quarter a rest for the jump: the root in octaves, or the chord. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:6 r:2",
  c: "C3+E3+G3/5+3+1:6 r:2",
  G: "G1+G2/5+1:6 r:2",
  g: "B2+F3+G3/5+2+1:6 r:2",
};

/** One beat of arpeggio in eighths, over two octaves: up and down on C and on G seventh. */
const ARPEGGIO: Record<string, string> = {
  C: "C2/5:2 G2/3:2 C3/2:2 E3/1:2",
  c: "G3/3:2 C4/2:2 E4/1:2 C4/2:2",
  e: "G3/3:2 E3/1:2 C3/2:2 G2/3:1 r:1",
  G: "G1/5:2 D2/3:2 G2/2:2 B2/1:2",
  g: "D3/3:2 F3/2:2 G3/1:2 F3/2:2",
  h: "D3/3:2 B2/1:2 G2/2:2 D2/3:1 r:1",
};

/** The opening phrase in chords in the right hand, an octave up, in quarters: bars 2 to 4 and 10 to 12 of Legendary. */
const OPENING_CHORDS =
  "E4+G4+C5/1+2+5:3 C5/5:1 E4+G4+C5/1+2+5:6 D5/5:2 | G4+C5+E5/1+2+5:3 E5/5:1 G4+C5+E5/1+2+5:6 E5/5:2 | " +
  "D5/5:2 E5/5:2 G4+B4+F5/1+2+5:4 D4+G4+B4/1+2+5:4";

/** The opening phrase in octaves in the right hand, two octaves up, in quarters: bars 14 to 16 and 22 to 24 of Legendary. */
const OPENING_OCTAVES =
  "C5+C6/1+5:3 C5+C6/1+5:1 C5+C6/1+5:6 D5+D6/1+5:2 | E5+E6/1+5:3 E5+E6/1+5:1 E5+E6/1+5:6 E5+E6/1+5:2 | " +
  "D5+D6/1+5:2 E5+E6/1+5:2 F5+F6/1+5:3 r:1 B4+B5/1+5:4";

/** The opening phrase with a third or sixth under the tune, in quarters: bars 14 to 16 and 22 to 24 of Epic. */
const OPENING_SIXTHS =
  "E4+C5/1+4:3 C5/4:1 E4+C5/1+4:6 F4+D5/1+5:2 | G4+E5/1+5:3 E5/5:1 G4+E5/1+5:6 E5/5:2 | " +
  "F4+D5/1+4:2 E5/5:2 G4+F5/1+5:4 D4+B4/1+3:4";

export const oChristmasTree: OurSong = {
  slug: "o-christmas-tree",
  title: "O Christmas Tree",
  source: {
    composer: "Traditional",
    died: null,
    published: 1824,
    edition: "Ernst Anschütz, Musikalisches Schulgesangbuch, Leipzig (1824), the traditional German folk tune as sung today",
  },
  about:
    "O Tannenbaum means O fir tree in German. " +
    "The tune comes from an old German folk song, and nobody knows who wrote it. " +
    "The Leipzig teacher Ernst Anschütz wrote the words sung today in 1824. " +
    "His song praises the fir tree for staying green all through the winter.",
  funFact: "The same tune carries the state song of Iowa, and Maryland's state song used it until 2021.",
  mythic: null,
  collection: "christmas",
  aka: ["O Tannenbaum"],
  tune: { text: tune, numerator: 3, denominator: 1, steps: 4, key: C_MAJOR, hookBars: [1, 3] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 288,
      numerator: 3,
      denominator: 1,
      steps: 4,
      right: [PICKUP, OPENING, TURN, MIDDLE, "F4/4:2 E4/3:2 E4/3:3 r:1 G3/1:4", OPENING, END].join(" | "),
      left: [
        "r:12 | C3+G3/5+1:12 | C3+G3/5+1:12 | D3+G3/4+1:12 | C3+G3/5+1:12",
        "C3+G3/5+1:12 | D3+G3/4+1:12 | D3+G3/4+1:12 | C3+G3/5+1:8 r:4",
        "C3+G3/5+1:12 | C3+G3/5+1:12 | D3+G3/4+1:12 | C3+G3/5+1:12",
      ].join(" | "),
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play the first five bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play bars 5 to 9 with the right hand alone, where the tune climbs to A.", hands: "right", speed: 0.6, loop: [5, 9], wait: true },
        { text: "Now the left hand alone. It only holds two shapes, one per bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 3, kind: "rhythm", text: "Long, short, long: the quick second note leans into the third, like a little skip." },
        { fromBar: 1, toBar: 13, kind: "fingering", text: "Your thumb starts on the G below middle C, and finger 2 takes middle C." },
        { fromBar: 9, toBar: 9, kind: "trick", text: "Lift the hand before the low G, and let the thumb drop down to it." },
      ],
      tricky: {
        3: "Finger 4 plays E four times. Keep it light, so the quick second E still sounds.",
        4: "Fingers 3, 4 and 5 walk up to F, then the thumb reaches down to B.",
        6: "The little finger plays G, finger 3 takes E, and the little finger stretches up to A.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 320,
      numerator: 3,
      denominator: 1,
      steps: 4,
      right: [PICKUP, OPENING, TURN, MIDDLE, RETURN, OPENING, "D4/2:4 C4/1:4 G4/1:4", SECOND_VERSE].join(" | "),
      left: [
        `r:12 | ${BLOCK.C} | ${BLOCK.C} | ${BLOCK.G} | ${BLOCK.C}`,
        `${BLOCK.C} | ${BLOCK.G} | ${BLOCK.G} | C3+G3/5+1:8 r:4`,
        `${BLOCK.C} | ${BLOCK.C} | ${BLOCK.G} | ${BLOCK.C}`,
        beatBars(WALTZ, "Ccc Ccc Ggg Ccc Ccc Ggg Ggg Ccc Ccc Ccc Ggg"),
        BLOCK.C,
      ].join(" | "),
      skills: ["triads", "waltz-bass", "position-change"],
      practice: [
        { text: "Play the left hand alone, and press the three notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 13], wait: true },
        { text: "Play the waltz bass of the second verse alone: low note, chord, chord.", hands: "left", speed: 0.6, loop: [14, 25], wait: true },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.6, loop: [1, 13], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 13, toBar: 14, kind: "trick", text: "After the last C, the thumb moves up to the next G. The second verse then starts an octave higher." },
        { fromBar: 14, toBar: 25, kind: "sound", text: "In the waltz bass, play the low note a little louder than the chords after it." },
        { fromBar: 6, toBar: 9, kind: "sound", text: "The middle phrase comes twice, a step lower the second time. Play the echo a little softer." },
      ],
      tricky: {
        13: "Fingers 2 and 1 play D and C, then the thumb jumps up to the next G.",
        16: "An octave up, fingers 3, 4 and 5 climb to F, and the thumb reaches back to B.",
        24: "The same reach as bar 16: climb to F, then tuck the thumb down to B.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 352,
      numerator: 3,
      denominator: 1,
      steps: 4,
      right: [
        PICKUP,
        OPENING,
        TURN,
        MIDDLE,
        RETURN,
        OPENING,
        "D4/2:4 C4/1:4 G4/1:4",
        OPENING_SIXTHS,
        "F4+D5/1+4:4 E4+C5/1+3:6 G5/5:2",
        "G5/5:2 E5/3:2 C5+A5/1+5:6 G5/4:2 | B4+G5/1+5:2 F5/4:2 B4+F5/1+4:6 F5/4:2 | B4+F5/1+4:2 D5/2:2 B4+G5/1+5:6 F5/4:2",
        "F5/4:2 E5/3:2 C5+E5/1+3:4 G4/1:4",
        OPENING_SIXTHS,
        "F4+B4+D5/1+3+5:4 E4+G4+C5/1+2+5:8",
      ].join(" | "),
      left: [
        "r:12",
        [..."CCGCCGG"].map((chord) => ALBERTI[chord]).join(" | "),
        "C3/5:2 G3/1:2 E3/3:2 G3/1:2 C3/5:4",
        [..."CCGC"].map((chord) => ALBERTI[chord]).join(" | "),
        beatBars(WALTZ, "Ccc Ccc Ggg Gcc Ccc Ggg Ggg Ccc Ccc Ccc Ggg"),
        "G2+G3/5+1:3 r:1 C2+G2+C3/5+2+1:8",
      ].join(" | "),
      pedal: ["r:12", ...Array(15).fill("P:12"), "P:4 P:8", ...Array(7).fill("P:12"), "P:4 P:8"].join(" | "),
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand's sixths alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [14, 17], wait: true },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.5, loop: [1, 13], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 13, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 14, toBar: 25, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
        { fromBar: 17, toBar: 17, kind: "sound", text: "Change the pedal on the second beat, where the chord turns from G to C." },
      ],
      tricky: {
        16: "The hand stretches to a seventh, G and F. Then the thumb drops from G to D for the last pair.",
        17: "After the two pairs, the little finger reaches up to the high G.",
        25: "Spread the hand for the last two chords, and let the C on top ring.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 384,
      numerator: 3,
      denominator: 1,
      steps: 8,
      right: inEighths(
        [
          "r:8 G4/5:4",
          OPENING_CHORDS,
          "F4+B4+D5/1+3+5:4 E4+G4+C5/1+2+5:5 r:1 G5/5:2",
          "G5/5:2 E5/3:2 C5+E5+A5/1+2+5:6 G5/4:2 | B4+D5+G5/1+2+5:2 F5/4:2 B4+D5+F5/1+2+4:6 F5/4:2",
          "F5/4:2 D5/2:2 B4+D5+G5/1+2+5:6 F5/4:2 | F5/4:2 E5/3:2 C5+E5/1+3:4 G4/1:4",
          OPENING_CHORDS,
          "F4+B4+D5/1+3+5:4 E4+G4+C5/1+2+5:3 r:1 G4+G5/1+5:3 r:1",
          OPENING_OCTAVES,
          "D5+D6/1+5:4 C5+C6/1+5:5 r:1 G5+G6/1+5:2",
          "G5+G6/1+5:2 E5+E6/1+5:1 r:1 A5+A6/1+5:6 G5+G6/1+5:2 | G5+G6/1+5:2 F5+F6/1+5:2 F5+F6/1+5:6 F5+F6/1+5:2",
          "F5+F6/1+5:2 D5+D6/1+5:1 r:1 G5+G6/1+5:6 F5+F6/1+5:2 | F5+F6/1+5:2 E5+E6/1+5:2 E5+E6/1+5:3 r:1 G4+G5/1+5:3 r:1",
          OPENING_OCTAVES,
          "D5+D6/1+5:4 C5+E5+G5+C6/1+2+3+5:8",
        ].join(" | "),
      ),
      left: [
        `r:24 | ${beatBars(STRIDE, "Ccc Ccc Ggg Gcc Ccc Ggg Ggg Ccc Ccc Ccc Ggg Gcc")}`,
        beatBars(ARPEGGIO, "Cce Cce Ggh Cce Cce Ggh Ggh Cce Cce Cce Ggh"),
        "C2+G2+C3/5+2+1:24",
      ].join(" | "),
      pedal: ["r:24", "P:24", "P:24", "P:24", "P:8 P:16", ...Array(7).fill("P:24"), "P:8 P:16", ...Array(12).fill("P:24")].join(" | "),
      skills: ["stride", "melody-in-chords", "arpeggios"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand's chords alone, and let the little finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 5], wait: true },
        { text: "Play the arpeggios of the second verse in the left hand alone.", hands: "left", speed: 0.5, loop: [14, 17], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 13, kind: "trick", text: "In stride, look at the octave and let the hand find the chord by feel." },
        { fromBar: 14, toBar: 25, kind: "sound", text: "Up high, the octaves should ring like bells. Keep the wrist loose." },
        { fromBar: 14, toBar: 25, kind: "fingering", text: "In each arpeggio, the third finger crosses over the thumb on the way up." },
      ],
      tricky: {
        4: "The little finger plays D, E and F on top. Then the hand drops to the G chord, with the little finger on B.",
        5: "Lift the hand after the C chord, and reach up to the high G with the little finger.",
        12: "The same chords as bar 4. Keep the little finger on the tune as the thumb steps down.",
      },
    },
  },
};

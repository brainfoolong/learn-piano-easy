/**
 * *Deck the Halls*: the Welsh New Year's Eve tune *Nos Galan*, in four versions of ours.
 *
 * The tune is the whole verse in C major, as it is sung today to Thomas Oliphant's English words of 1862.
 * The verse has quick fa-la-la answers in eighths. The tune here makes every length twice as long, in 4/2,
 * so each eighth is a quarter and Common needs nothing faster. The hook is its first two bars.
 *
 * Common plays the tune over held bass notes. It drops the F sharp of bar 11 and the D of bar 16. Rare
 * writes each bar as two bars of 2/2, so its 32 bars leave the hand time to move. It plays every note over
 * a bass and a chord. Epic puts an Alberti bass with the pedal under the tune, and plays much of the
 * second half in thirds. Legendary sets the tune an octave up with quick fills over a stride bass, then
 * over a broken octave bass, and ends on a full chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The first phrase in quarters, which comes back as bars 5 to 8. */
const PHRASE = "G4:3 F4:1 E4:2 D4:2 | C4:2 D4:2 E4:2 C4:2 | D4:1 E4:1 F4:1 D4:1 E4:3 D4:1 | C4:2 B3:2 C4:4";

/** The tune in 4/2, in quarters. */
const tune = [
  PHRASE,
  PHRASE,
  "D4:3 E4:1 F4:2 D4:2 | E4:3 F4:1 G4:2 D4:2 | E4:1 F#4:1 G4:2 A4:1 B4:1 C5:2 | B4:2 A4:2 G4:4",
  "G4:3 F4:1 E4:2 D4:2 | C4:2 D4:2 E4:2 C4:2 | A4:1 A4:1 A4:1 A4:1 G4:3 F4:1 | E4:2 D4:2 C4:4",
].join(" | ");

/** The first phrase's first three bars in the right hand, in quarters, fingered. */
const RIGHT_PHRASE =
  "G4/5:3 F4/4:1 E4/3:2 D4/2:2 | C4/1:2 D4/2:2 E4/3:2 C4/1:2 | D4/3:1 E4/4:1 F4/5:1 D4/3:1 E4/4:3 D4/3:1";

/** One bar of 2/2 for Rare: the root on the first beat, then the rest of the chord. */
const RARE_BASS: Record<string, string> = {
  C: "C3/4:2 E3+G3/2+1:2",
  G: "B2/5:2 D3+G3/3+1:2",
  A: "C3/4:2 E3+A3/2+1:2",
};

/** Half a bar of Alberti bass in quarters: C major, G major or G seventh over B, F major over A, or G with a rest. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1",
  7: "B2/5:1 G3/1:1 F3/2:1 G3/1:1",
  F: "A2/5:1 F3/1:1 C3/3:1 F3/1:1",
  g: "B2/5:1 G3/1:1 D3/3:1 r:1",
};

/** Half a bar of stride in eighths: the root in octaves, then the chord, each with a rest for the jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:2 r:2 E3+G3+C4/3+2+1:2 r:2",
  G: "G1+G2/5+1:2 r:2 D3+G3+B3/3+2+1:2 r:2",
};

/** Half a bar of broken octave in eighths: root, fifth, octave and fifth, with a short rest for the jump. */
const BROKEN_OCTAVE: Record<string, string> = {
  C: "C2/5:2 G2/2:2 C3/1:2 G2/2:1 r:1",
  G: "G1/5:2 D2/2:2 G2/1:2 D2/2:1 r:1",
  F: "F2/5:2 C3/2:2 F3/1:2 C3/2:1 r:1",
  g: "G1/5:2 D2/2:2 G2/1:2 r:2",
};

/** Bars of `patterns` from `halves`, such as `"CC GC"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** Bars of `patterns` from `chords`, such as `"CGCC"`: one letter per bar. */
function wholeBars(patterns: Record<string, string>, chords: string): string {
  return [...chords].map((chord) => patterns[chord]).join(" | ");
}

export const deckTheHalls: OurSong = {
  slug: "deck-the-halls",
  title: "Deck the Halls",
  source: {
    composer: "Traditional",
    died: null,
    published: 1794,
    edition:
      "The Welsh New Year's Eve carol Nos Galan, first printed in 1794, as it is sung to Thomas Oliphant's English words " +
      "of 1862 in John Thomas, Welsh Melodies, volume 2",
  },
  about:
    "Deck the Halls is sung to Nos Galan, an old Welsh tune for New Year's Eve. " +
    "The tune was first printed in 1794, and Joseph Haydn arranged it in 1803. " +
    "Thomas Oliphant wrote the English Christmas words in 1862, and the tune is sung to them today.",
  funFact:
    "Oliphant's words began with Deck the hall, for one hall only. Later songbooks changed it to the plural we sing today.",
  mythic: null,
  collection: "christmas",
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: [
        `${RIGHT_PHRASE} | C4/2:2 B3/1:2 C4/2:4`,
        `${RIGHT_PHRASE} | C4/2:2 B3/1:2 C4/2:4`,
        "D4/3:3 E4/4:1 F4/5:2 D4/1:2 | E4/2:3 F4/3:1 G4/4:2 D4/1:2 | E4/1:2 G4/2:2 A4/3:1 B4/4:1 C5/5:2 | B4/4:2 A4/3:2 G4/2:4",
        "G4/5:3 F4/4:1 E4/3:2 D4/2:2 | C4/1:2 D4/2:2 E4/3:2 C4/1:1 r:1 | A4/5:4 G4/4:3 F4/3:1 | E4/2:4 C4/1:4",
      ].join(" | "),
      left: [
        "C3/1:8 | C3/1:8 | G2/4:4 C3/1:4 | G2/4:4 C3/1:4 | C3/1:8 | C3/1:8 | G2/4:4 C3/1:4 | G2/4:4 C3/1:4",
        "G2/4:8 | C3/1:4 G2/4:4 | C3/1:4 F2+C3/5+1:4 | G2/4:8 | C3/1:8 | C3/1:8 | F2+C3/5+1:4 C3/1:4 | G2/4:4 C3/1:4",
      ].join(" | "),
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the right hand alone, slowly, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 9 to 12 with the right hand alone, where the tune climbs to the high C.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Put both hands together. The left hand holds each low note for half a bar or more.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "Long, short: the first G is long, and the F is short and comes right after it." },
        { fromBar: 13, toBar: 14, kind: "trick", text: "Bars 13 and 14 are the opening again, so your hand already knows them." },
        { fromBar: 15, toBar: 16, kind: "sound", text: "Slow down a little on the last notes, and let the low C ring." },
      ],
      tricky: {
        3: "Fingers 3, 4 and 5 walk up D, E and F, then finger 3 drops back to D.",
        9: "Finger 5 plays F, then the thumb reaches down to D while the hand stays still.",
        11: "The thumb slides up from D to E. Then fingers 2 to 5 climb G, A, B and the high C.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 160,
      numerator: 2,
      denominator: 2,
      steps: 2,
      right: [
        "G4/5:3 F4/4:1 | E4/3:2 D4/2:2 | C4/1:2 D4/2:2 | E4/3:2 C4/1:2 | D4/3:1 E4/4:1 F4/5:1 D4/3:1 | E4/4:3 D4/3:1 | C4/2:2 B3/1:2 | C4/2:4",
        "G4/5:3 F4/4:1 | E4/3:2 D4/2:2 | C4/1:2 D4/2:2 | E4/3:2 C4/1:2 | D4/3:1 E4/4:1 F4/5:1 D4/3:1 | E4/4:3 D4/3:1 | C4/2:2 B3/1:2 | C4/2:4",
        "D4/3:3 E4/4:1 | F4/5:2 D4/1:2 | E4/2:3 F4/3:1 | G4/4:2 D4/1:2 | E4/1:1 F#4/2:1 G4/3:2 | A4/3:1 B4/4:1 C5/5:2 | B4/4:2 A4/3:2 | G4/2:4",
        "G4/5:3 F4/4:1 | E4/3:2 D4/2:2 | C4/1:2 D4/2:2 | E4/3:2 C4/1:2 | A4/5:1 A4/5:1 A4/5:1 A4/5:1 | G4/4:3 F4/3:1 | E4/2:2 D4/1:2 | C4/1:4",
      ].join(" | "),
      left: `${wholeBars(RARE_BASS, "CGCCGCCCCGCCGCCCGGCGCAGGCGCCACG")} | C3+E3+G3/4+2+1:4`,
      skills: ["triads", "position-change"],
      practice: [
        { text: "Play the right hand alone, slowly, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone: a low note, then a chord, in every bar.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play bars 17 to 24 with the right hand alone, where the tune climbs to the high C.", hands: "right", speed: 0.6, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 21, toBar: 21, kind: "trick", text: "The F sharp is the black key between F and G. It lifts the tune towards the high C." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the left hand's low note a little louder than the chord after it." },
        { fromBar: 29, toBar: 29, kind: "rhythm", text: "Four quick A's: keep them even, like four steps on the same stair." },
      ],
      tricky: {
        21: "The thumb moves up from D to E, and finger 2 takes the black F sharp.",
        22: "After the G, finger 3 slides up one key to A, so fingers 4 and 5 reach B and C.",
        32: "The thumb slides down from D to the last C, while the left hand plays its full chord.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 176,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: [
        `${RIGHT_PHRASE} | C4/2:2 B3/1:2 C4/2:2 E4/3:1 F4/4:1`,
        `${RIGHT_PHRASE} | C4/2:2 B3/1:2 C4/2:4`,
        "B3+D4/1+3:3 C4+E4/2+4:1 D4+F4/3+5:2 B3+D4/1+3:2 | C4+E4/1+3:3 D4+F4/2+4:1 E4+G4/3+5:2 B3+D4/1+2:2",
        "E4/1:1 F#4/2:1 G4/3:2 A4/1:1 B4/2:1 C5/3:2 | B4/2:2 A4/1:2 D4+G4/1+4:4",
        "E4+G4/2+4:3 D4+F4/1+3:1 E4/2:2 B3+D4/1+2:2 | C4/1:2 D4/2:2 E4/3:2 C4/1:2",
        "F4+A4/2+4:1 F4+A4/2+4:1 F4+A4/2+4:1 F4+A4/2+4:1 E4+G4/1+3:3 D4+F4/1+2:1 | E4/2:2 D4/1:2 G3+C4/1+2:4",
      ].join(" | "),
      left: `${halfBars(ALBERTI, "CG CC GC CC CG CC GC CC G7 CG CF GG CG CC FC")} | ${ALBERTI.g} C2+C3/5+1:4`,
      pedal: "P:4 P:4 | ".repeat(15) + "P:4 P:4",
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the first four bars, slowly.", hands: "both", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Change the pedal in the middle of each bar, as the left hand starts a new chord." },
      ],
      tricky: {
        11: "After the G, the thumb passes under finger 3 to A. Fingers 2 and 3 then finish on B and C.",
        12: "From A, the thumb drops to D, while finger 4 lands on the G above it.",
        16: "The thumb reaches down to G for the last chord, and the left hand drops to a low octave.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 192,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [
        "G5/5:6 F5/4:2 E5/3:2 F5/4:1 E5/3:1 D5/2:4 | C5/1:4 D5/2:2 E5/3:1 D5/2:1 E5/3:4 C5/1:4",
        "D5/2:2 E5/3:2 F5/4:2 D5/2:2 E5/3:2 G5/5:1 F5/4:1 E5/3:2 D5/2:2 | C5/2:4 B4/1:4 C5/2:4 E5/3:2 F5/4:2",
        "G5/5:6 F5/4:2 E5/3:2 F5/4:1 E5/3:1 D5/2:4 | C5/1:4 D5/2:2 E5/3:1 D5/2:1 E5/3:4 C5/1:4",
        "D5/2:2 E5/3:2 F5/4:2 D5/2:2 E5/3:2 G5/5:1 F5/4:1 E5/3:2 D5/2:2 | C5/2:4 B4/1:4 C5/2:8",
        "D5/2:4 C5/1:1 D5/2:1 E5/3:2 F5/4:4 D5/2:4 | E5/3:4 D5/2:1 E5/3:1 F5/4:2 G5/5:4 D5/1:4",
        "E5/1:2 F#5/2:2 G5/3:4 A5/1:2 B5/2:2 C6/3:4 | B5/2:4 A5/1:4 G5/3:4 D5/1:1 E5/2:1 F5/3:2",
        "G5/4:6 F5/3:2 E5/2:4 D5/1:4 | C5/1:4 D5/2:2 E5/3:1 D5/2:1 E5/3:4 C5/1:4",
        "F5+A5/3+5:2 F5+A5/3+5:2 F5+A5/3+5:2 F5+A5/3+5:2 E5+G5/2+4:6 D5+F5/1+3:2 | E5/3:4 D5/2:3 r:1 C4+E4+G4+C5/1+2+3+5:8",
      ].join(" | "),
      left: [
        halfBars(STRIDE, "CG CC GC GC CG CC GC GC"),
        halfBars(BROKEN_OCTAVE, "GG CG CF GG CG CC FC"),
        `${BROKEN_OCTAVE.g} C2+C3/5+1:8`,
      ].join(" | "),
      pedal: "P:8 P:8 | ".repeat(15) + "P:8 P:8",
      skills: ["stride", "octave-bass", "sixteenth-notes"],
      practice: [
        { text: "Play the stride bass alone: jump down for the low octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand alone on bars 1 to 4, and keep the quick fills light.", hands: "right", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the run of bars 11 and 12 with the right hand alone.", hands: "right", speed: 0.5, loop: [11, 12], wait: true },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the quick fills softer than the tune notes, like a little echo." },
        { fromBar: 15, toBar: 16, kind: "sound", text: "Lift the hand after the last D, then land on the big chord with both hands." },
      ],
      tricky: {
        4: "Finger 2 slides down from D to C, and the thumb tucks in for B. The left hand leaps to the low G.",
        5: "The fill of bar 4 runs straight into the high G, so keep finger 5 ready for it.",
        8: "Finger 2 slides down to C again, while the left hand leaps for the low G octave.",
      },
    },
  },
};

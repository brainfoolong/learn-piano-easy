/**
 * *O du fröhliche*: the German Christmas song on the tune of *O sanctissima*, in four versions of ours.
 *
 * The tune is the whole verse: the opening phrase and its repeat, the rise to C and the half close on G,
 * then the two climbing steps and the falling close. It is in C major, with no pickup.
 *
 * The tune is in 2/2, and every length here is twice as long, in 2/1. A whole note is one beat, so the
 * eighth of each dotted pair is a quarter, and Common plays it at its place. The hook is bars 1 and 2,
 * the opening phrase.
 *
 * Common plays the tune over held fifths. Rare plays it over block chords. Epic puts an Alberti bass
 * under the first verse, then plays the second an octave up in thirds and sixths over broken chords.
 * Legendary sets the tune in chords over a stride bass, then in octaves over arpeggios.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 2/1, in quarters: the sixteen bars of the verse. */
const tune = [
  "G4:4 A4:4 | G4:3 F4:1 E4:2 F4:2 | G4:4 A4:4 | G4:3 F4:1 E4:2 F4:2",
  "G4:4 G4:4 | A4:4 B4:2 C5:2 | B4:4 A4:4 | G4:8",
  "D4:3 E4:1 D4:2 E4:2 | F4:3 G4:1 F4:4 | E4:3 F4:1 E4:2 F4:2 | G4:3 A4:1 G4:4",
  "C5:2 B4:2 A4:2 G4:2 | C5:2 A4:2 G4:2 F4:2 | E4:4 D4:4 | C4:8",
].join(" | ");

/** The tune in the right hand, in quarters, one bar per entry. The F before bar 15 is cut short to free the hand. */
const RIGHT_BARS = [
  "G4/3:4 A4/4:4",
  "G4/3:3 F4/2:1 E4/1:2 F4/2:2",
  "G4/3:4 A4/4:4",
  "G4/3:3 F4/2:1 E4/1:2 F4/2:2",
  "G4/3:4 G4/2:4",
  "A4/3:4 B4/4:2 C5/5:2",
  "B4/4:4 A4/3:4",
  "G4/2:8",
  "D4/1:3 E4/2:1 D4/1:2 E4/2:2",
  "F4/3:3 G4/4:1 F4/3:4",
  "E4/2:3 F4/3:1 E4/2:2 F4/3:2",
  "G4/4:3 A4/5:1 G4/2:4",
  "C5/5:2 B4/4:2 A4/3:2 G4/2:2",
  "C5/5:2 A4/3:2 G4/2:2 F4/1:1 r:1",
  "E4/3:4 D4/2:4",
  "C4/1:8",
];

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** `text`, a line without fingers, with each note doubled an octave up, thumb below and little finger above. */
function inOctaves(text: string): string {
  return text.replace(/([A-G][#b]?)(\d):/g, (_, name: string, octave: string) => `${name}${octave}+${name}${Number(octave) + 1}/1+5:`);
}

/** Bars of `patterns` from `chords`, such as `"CC GC"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, chords: string): string {
  return chords
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** The chords of the first fifteen bars, one letter per half bar. The last bar is C. */
const CHORDS = "CC GC CC GC CC FG GG GG GG GG CC CC CF FG CG";

/** The chords of Rare's first fifteen bars: `g` is G without its seventh, under an E or a cadence. */
const RARE_CHORDS = "CC GC CC GC CC FG GG gg gg GG CC CC CF FG CG";

/** Half a bar of held fifth or bass note in quarters, on C, G or F. */
const FIFTH: Record<string, string> = {
  C: "C3+G3/5+1:4",
  G: "D3+G3/4+1:4",
  F: "F3/2:4",
};

/** Half a bar of block chord in quarters, with the hand kept still: C, G seventh, G and F over C. */
const BLOCK: Record<string, string> = {
  C: "C3+E3+G3/5+3+1:4",
  G: "D3+F3+G3/4+2+1:4",
  g: "D3+G3/4+1:4",
  F: "C3+F3/5+2:4",
};

/** Half a bar of Alberti bass in eighths, on C, on G over B and on F over A. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1 B2/5:1 G3/1:1 D3/3:1 G3/1:1",
  F: "A2/5:1 F3/1:1 C3/3:1 F3/1:1 A2/5:1 F3/1:1 C3/3:1 F3/1:1",
};

/** Half a bar of rising and falling broken chord in eighths, on C, on G over B and on F over A. */
const BROKEN: Record<string, string> = {
  C: "C3/5:1 E3/3:1 G3/1:1 E3/3:1 C3/5:1 E3/3:1 G3/1:1 E3/3:1",
  G: "B2/5:1 D3/3:1 G3/1:1 D3/3:1 B2/5:1 D3/3:1 G3/1:1 D3/3:1",
  F: "A2/5:1 C3/3:1 F3/1:1 C3/3:1 A2/5:1 C3/3:1 F3/1:1 C3/3:1",
};

/** Half a bar of stride in eighths: the root in octaves, then the chord, each with an eighth's rest to jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:3 r:1 C3+E3+G3/5+3+1:3 r:1",
  G: "G1+G2/5+1:3 r:1 B2+D3+G3/5+3+1:3 r:1",
  F: "F1+F2/5+1:3 r:1 C3+F3+A3/5+2+1:3 r:1",
};

/** Half a bar of arpeggio in eighths, up and back down, with an eighth's rest to jump. */
const ARPEGGIO: Record<string, string> = {
  C: "C2/5:1 G2/3:1 C3/2:1 E3/1:1 G3/3:1 E3/1:1 C3/2:1 r:1",
  G: "G1/5:1 D2/3:1 G2/2:1 B2/1:1 D3/3:1 B2/1:1 G2/2:1 r:1",
  F: "F1/5:1 C2/3:1 F2/2:1 A2/1:1 C3/3:1 A2/1:1 F2/2:1 r:1",
};

/** The verse's second time in Epic's right hand, an octave up, in eighths, with a third or sixth under the tune. */
const EPIC_SECOND = [
  "E5+G5/3+5:8 C5+A5/1+5:8",
  "B4+G5/1+5:6 F5/4:2 C5+E5/1+3:4 F5/4:4",
  "E5+G5/3+5:8 C5+A5/1+5:8",
  "B4+G5/1+5:6 F5/4:2 C5+E5/1+3:4 F5/4:4",
  "E5+G5/3+5:8 C5+G5/1+4:8",
  "F5+A5/2+4:8 D5+B5/1+4:4 C6/5:4",
  "G5+B5/3+5:8 A5/4:8",
  "B4+D5+G5/1+2+4:16",
  "B4+D5/1+2:6 E5/3:2 B4+D5/1+2:4 E5/3:4",
  "D5+F5/2+4:6 G5/5:2 D5+F5/2+4:8",
  "C5+E5/1+3:6 F5/4:2 C5+E5/1+3:4 F5/4:4",
  "E5+G5/2+4:6 A5/5:2 E5+G5/2+4:8",
  "E5+C6/1+5:4 B5/4:4 F5+A5/1+3:4 G5/2:4",
  "F5+C6/1+5:4 F5+A5/1+3:4 D5+G5/1+3:4 D5+F5/1+3:4",
  "C5+E5/1+3:8 B4+D5/1+3:7 r:1",
  "E4+G4+C5/1+2+5:16",
].join(" | ");

/** The verse in chords in Legendary's right hand, in eighths, the tune on top. */
const LEGENDARY_CHORDS = [
  "C4+E4+G4/1+2+4:8 C4+E4+A4/1+2+5:8",
  "B3+D4+G4/1+2+5:6 F4/4:2 C4+E4/1+3:4 F4/4:4",
  "C4+E4+G4/1+2+4:8 C4+E4+A4/1+2+5:8",
  "B3+D4+G4/1+2+5:6 F4/4:2 C4+E4/1+3:4 F4/4:4",
  "C4+E4+G4/1+2+4:8 C4+E4+G4/1+2+4:8",
  "C4+F4+A4/1+2+4:8 D4+G4+B4/1+3+5:4 C5/5:4",
  "D4+G4+B4/1+3+5:8 D4+F4+A4/1+3+5:8",
  "B3+D4+G4/1+3+5:16",
  "B3+D4/1+3:6 E4/4:2 B3+D4/1+3:4 E4/4:4",
  "B3+F4/1+4:6 G4/5:2 B3+D4+F4/1+2+4:8",
  "C4+E4/1+3:6 F4/4:2 C4+E4/1+3:4 F4/4:4",
  "C4+E4+G4/1+2+4:6 A4/5:2 C4+E4+G4/1+2+4:8",
  "E4+G4+C5/1+3+5:4 B4/4:4 F4+A4/1+3:4 G4/2:4",
  "F4+A4+C5/1+3+5:4 A4/3:3 r:1 B3+D4+G4/1+2+5:4 F4/4:4",
  "C4+E4/1+3:8 B3+D4/1+3:8",
  "C4/1:14 r:2",
].join(" | ");

/** `bar` with its last note an eighth shorter, and an eighth's rest so the hand can jump. */
function withBreath(bar: string): string {
  return bar.replace(/:(\d+)$/, (_, units: string) => `:${Number(units) - 1} r:1`);
}

/** The bars, from 1, whose octaves end with a breath before a leap of more than a third. */
const BREATH_BARS = new Set([8, 12, 13, 15]);

/** The verse in octaves in Legendary's right hand, an octave up, in eighths, closing on a full chord. */
const LEGENDARY_OCTAVES = [
  ...tune
    .split(" | ")
    .slice(0, 15)
    .map((bar, index) => (BREATH_BARS.has(index + 1) ? withBreath(inEighths(inOctaves(bar))) : inEighths(inOctaves(bar)))),
  "C5+E5+G5+C6/1+2+3+5:16",
].join(" | ");

/** The pedal of both verses in eighths, changed on every half bar and held through the last chord. */
const PEDAL = [...Array(31).fill("P:8 P:8"), "P:16"].join(" | ");

export const oDuFroehliche: OurSong = {
  slug: "o-du-froehliche",
  title: "O du fröhliche",
  source: {
    composer: "Traditional",
    died: null,
    published: 1792,
    edition: "The European Magazine and London Review, November 1792, as the Sicilian Mariner's Hymn to the Virgin",
  },
  about:
    "O du fröhliche means O you joyful, and it is one of the best-known German Christmas songs. " +
    "Johannes Daniel Falk of Weimar wrote its first verse for the neglected children he took into his home. " +
    "It was first printed in 1816. " +
    "Falk set it to O sanctissima, a song to the Virgin Mary first printed in London in 1792.",
  funFact: "Falk first wrote it for all three great Christian feasts, with one verse for Christmas, one for Easter and one for Pentecost.",
  mythic: null,
  collection: "christmas",
  aka: ["O sanctissima"],
  tune: { text: tune, numerator: 2, denominator: 1, steps: 4, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 160,
      numerator: 2,
      denominator: 1,
      steps: 4,
      right: RIGHT_BARS.join(" | "),
      left: `${halfBars(FIFTH, CHORDS)} | C3+G3/5+1:8`,
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play the first eight bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play bars 9 to 16 with the right hand alone, where the tune climbs step by step.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Now the left hand alone. It holds a fifth, or a single F.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 2, kind: "rhythm", text: "Long, short: hold the G for three counts, and let the quick F fall into the E." },
        { fromBar: 5, toBar: 5, kind: "trick", text: "Play the second G with finger 2 instead of 3. The hand is then ready to climb to C." },
        { fromBar: 14, toBar: 15, kind: "trick", text: "Lift the thumb off F a little early, and drop finger 3 onto the E below." },
      ],
      tricky: {
        7: "Fingers 4 and 3 step back down from B to A. Keep the hand still over its five keys.",
        12: "Finger 4 plays G, finger 5 the quick A, then finger 2 takes G, ready for the high C.",
        15: "After the short F, finger 3 lands on E and finger 2 on D.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 200,
      numerator: 2,
      denominator: 1,
      steps: 4,
      right: RIGHT_BARS.map((bar, index) => (index === 7 ? "D4+G4/1+2:8" : bar)).join(" | "),
      left: `${halfBars(BLOCK, RARE_CHORDS)} | C3+E3+G3/5+3+1:8`,
      skills: ["triads", "two-note-chords"],
      practice: [
        { text: "Play the left hand alone, and press the notes of each chord together.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Play the right hand alone on the whole song.", hands: "right", speed: 0.7, loop: null, wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "fingering", text: "The left hand barely moves. Finger 5 on C and finger 4 on D take turns, and the thumb stays on G." },
        { fromBar: 8, toBar: 8, kind: "sound", text: "The phrase rests on G here. Let the two notes ring for the whole bar." },
        { fromBar: 13, toBar: 14, kind: "sound", text: "The tune steps down from C twice. Play the second time a little louder." },
      ],
      tricky: {
        6: "The right hand climbs A, B and C with fingers 3, 4 and 5, as the left hand turns from F to G.",
        12: "Finger 4 plays G, finger 5 the quick A, then finger 2 takes G, ready for the high C.",
        15: "After the short F, finger 3 lands on E and finger 2 on D.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 180,
      numerator: 2,
      denominator: 1,
      steps: 8,
      right: [inEighths(RIGHT_BARS.slice(0, 15).join(" | ")), "C4/1:14 r:2", EPIC_SECOND].join(" | "),
      left: [halfBars(ALBERTI, `${CHORDS} CC`), halfBars(BROKEN, CHORDS), "C3+E3+G3/5+3+1:16"].join(" | "),
      pedal: PEDAL,
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 8], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [17, 24], wait: true },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.5, loop: [1, 16], wait: true },
        { text: "Play the whole song with both hands at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 1, toBar: 32, kind: "sound", text: "Change the pedal on every half bar, as the new bass note sounds." },
        { fromBar: 17, toBar: 31, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        17: "The hand jumps up an octave. Land on E and G with fingers 3 and 5, then open to the sixth C and A.",
        22: "Fingers 2 and 4 take F and A, the hand opens to the sixth D and B, and finger 5 reaches C.",
        32: "Lift the hand in the short rest, then spread it over E, G and C for the last chord.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 216,
      numerator: 2,
      denominator: 1,
      steps: 8,
      right: [LEGENDARY_CHORDS, LEGENDARY_OCTAVES].join(" | "),
      left: [halfBars(STRIDE, `${CHORDS} CC`), halfBars(ARPEGGIO, CHORDS), "C2+G2+C3/5+2+1:16"].join(" | "),
      pedal: PEDAL,
      skills: ["stride", "melody-in-chords", "arpeggios"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 8], wait: false },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the arpeggios of the second verse in the left hand alone.", hands: "left", speed: 0.5, loop: [17, 24], wait: false },
        { text: "Join the hands on the whole song at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and make the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "trick", text: "In stride, look at the octave and let the hand find the chord by feel." },
        { fromBar: 17, toBar: 31, kind: "sound", text: "The octaves should ring like church bells. Keep the wrist loose." },
        { fromBar: 17, toBar: 31, kind: "fingering", text: "In each arpeggio, finger 3 crosses over the thumb on the way up." },
      ],
      tricky: {
        6: "The chord climbs from F to G, and the little finger rises from B to the high C.",
        8: "The chord settles on G. The thumb drops to B, and the little finger steps down from A to G.",
        14: "Leave the A a little early, so the hand has time to drop to the G chord.",
      },
    },
  },
};

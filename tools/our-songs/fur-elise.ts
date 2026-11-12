/**
 * *Für Elise*: the opening of Beethoven's Bagatelle in A minor, WoO 59, in four versions of ours.
 *
 * The tune is the A section: the E and D sharp phrase, its answer, and the home A. The edition writes it
 * in 3/8 with sixteenths and a two-note upbeat. The tune here makes every sixteenth a quarter, so Common
 * needs nothing faster. Each bar of 3/4 is half a bar of the edition, and bar 1 holds the upbeat after a
 * quarter rest. The hook is its first four bars, from the upbeat to the first A.
 *
 * Common plays the tune over held open fifths and drops three low notes it cannot reach. Rare plays every
 * note, and the left hand climbs its broken chords as the edition does. Epic puts an Alberti bass with the
 * pedal under it, then plays the tune again in thirds and sixths. Legendary sets it over a stride bass,
 * then plays it an octave up with full chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 3/4, in quarters: the phrase, its answer, and the home A. */
const tune =
  "r:1 E5:1 D#5:1 | E5:1 D#5:1 E5:1 | B4:1 D5:1 C5:1 | A4:2 r:1 | C4:1 E4:1 A4:1 | B4:2 r:1 | E4:1 G#4:1 B4:1 | C5:2 r:1 | " +
  "E4:1 E5:1 D#5:1 | E5:1 D#5:1 E5:1 | B4:1 D5:1 C5:1 | A4:2 r:1 | C4:1 E4:1 A4:1 | B4:2 r:1 | E4:1 C5:1 B4:1 | A4:3";

/** The whole tune in the right hand, in quarters, with every note fingered. */
const RIGHT_QUARTERS =
  "r:1 E5/5:1 D#5/4:1 | E5/5:1 D#5/4:1 E5/5:1 | B4/2:1 D5/4:1 C5/3:1 | A4/2:2 r:1 | C4/1:1 E4/2:1 A4/4:1 | B4/5:2 r:1 | " +
  "E4/1:1 G#4/2:1 B4/4:1 | C5/5:2 r:1 | E4/1:1 E5/5:1 D#5/4:1 | E5/5:1 D#5/4:1 E5/5:1 | B4/2:1 D5/4:1 C5/3:1 | A4/2:2 r:1 | " +
  "C4/1:1 E4/2:1 A4/4:1 | B4/5:2 r:1 | E4/1:1 C5/5:1 B4/4:1 | A4/3:3";

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** One bar of Alberti bass in eighths, on A minor or on E major. */
const ALBERTI: Record<string, string> = {
  a: "A2/5:1 E3/1:1 C3/3:1 E3/1:1 C3/3:1 E3/1:1",
  e: "E2/5:1 B2/1:1 G#2/3:1 B2/1:1 G#2/3:1 B2/1:1",
};

/** One bar of stride in eighths: the root in octaves, then the chord twice, with a rest before each jump. */
const STRIDE: Record<string, string> = {
  a: "A1+A2/5+1:1 r:1 C3+E3+A3/5+3+1:2 C3+E3+A3/5+3+1:1 r:1",
  e: "E1+E2/5+1:1 r:1 B2+E3+G#3/5+3+1:2 B2+E3+G#3/5+3+1:1 r:1",
};

/** One bar of octave bass and a rising broken chord in eighths, on A minor or on E major. */
const RISING: Record<string, string> = {
  a: "A1+A2/5+1:1 r:1 E3/4:1 A3/2:1 C4/1:1 r:1",
  e: "E1+E2/5+1:1 r:1 G#2/5:1 B2/4:1 E3/2:1 r:1",
};

/** Bars of `patterns` from `chords`, such as `"aae"`: one letter per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  return [...chords].map((chord) => patterns[chord]).join(" | ");
}

/** A bar of rest in 3/4, in eighths. */
const REST = "r:6";

export const furElise: OurSong = {
  slug: "fur-elise",
  title: "Für Elise",
  source: {
    composer: "Ludwig van Beethoven",
    died: 1827,
    published: 1867,
    edition:
      "Bagatelle in A minor, WoO 59, in Ludwig Nohl's first edition (1867) and the Breitkopf & Härtel complete edition, series 25 no. 30 (1888)",
  },
  about:
    "Beethoven wrote this short piano piece in 1810, and his manuscript names it for Elise. " +
    "Nobody knows for sure who Elise was. " +
    "Ludwig Nohl found the piece and published it in 1867, forty years after Beethoven died.",
  funFact: "One theory says Nohl misread the name, and the piece was really written for Therese Malfatti, whom Beethoven hoped to marry.",
  mythic: "piano-midi/elise.mid",
  tune: { text: tune, numerator: 3, denominator: 4, key: A_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 112,
      numerator: 3,
      denominator: 4,
      right: [
        "r:1 E5/5:1 D#5/4:1 | E5/5:1 D#5/4:1 E5/5:1 | B4/2:1 D5/4:1 C5/3:1 | A4/2:2 r:1",
        "C4/1:1 E4/2:1 A4/4:1 | B4/5:2 r:1 | r:1 G#4/1:1 B4/2:1 | C5/3:2 r:1",
        "r:1 E5/5:1 D#5/4:1 | E5/5:1 D#5/4:1 E5/5:1 | B4/2:1 D5/4:1 C5/3:1 | A4/2:2 r:1",
        "C4/1:1 E4/2:1 A4/4:1 | B4/5:2 r:1 | E4/1:2 B4/5:1 | A4/4:3",
      ].join(" | "),
      left: [
        "r:3 | r:3 | r:3 | A2+E3/3+1:3",
        "A2+E3/3+1:3 | E2+B2/5+2:3 | E2+B2/5+2:3 | A2+E3/3+1:3",
        "A2/3:3 | r:3 | r:3 | A2+E3/3+1:3",
        "A2+E3/3+1:3 | E2+B2/5+2:3 | E2+B2/5+2:3 | A2+E3/3+1:3",
      ].join(" | "),
      skills: ["position-change", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone from bar 5, where the hand moves down to middle C.", hands: "right", speed: 0.6, loop: [5, 9], wait: true },
        { text: "Now the left hand alone. It only holds two shapes, one per bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Rock between fingers 5 and 4 for E and D sharp, like a gentle swing." },
        { fromBar: 1, toBar: 3, kind: "sound", text: "The left hand waits here. Play the tune softly, as if telling a secret." },
        { fromBar: 4, toBar: 5, kind: "trick", text: "Lift the hand in the rest after A, and land with the thumb on middle C." },
      ],
      tricky: {
        5: "After the rest, your thumb lands on middle C. Look down before you play it.",
        7: "Your thumb takes the black key G sharp, so the hand can reach up to C.",
        13: "The hand moves down to middle C again. Use the rest in bar 12 to get there.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 126,
      numerator: 3,
      denominator: 4,
      right: RIGHT_QUARTERS,
      left: [
        "r:3 | r:3 | r:3 | A2/5:1 E3/2:1 A3/1:1",
        "r:3 | E2/5:1 B2/2:1 G#3/1:1 | r:3 | A2/5:1 E3/2:1 A3/1:1",
        "r:3 | r:3 | r:3 | A2/5:1 E3/2:1 A3/1:1",
        "r:3 | E2/5:1 B2/2:1 G#3/1:1 | r:3 | A2/5:1 E3/2:1 A3/1:1",
      ].join(" | "),
      skills: ["broken-chords", "position-change"],
      practice: [
        { text: "Play the right hand alone, slowly, on the first eight bars.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone. Each chord climbs from the bass, one note per beat.", hands: "left", speed: 0.6, loop: [4, 8], wait: true },
        { text: "Join the hands on bars 4 to 8, where they take turns.", hands: "both", speed: 0.6, loop: [4, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 4, toBar: 5, kind: "trick", text: "The left hand climbs, then the right hand carries on climbing. It should sound like one hand." },
        { fromBar: 9, toBar: 9, kind: "fingering", text: "Thumb on E, little finger on the high E. Spread the hand over the whole octave." },
        { fromBar: 6, toBar: 6, kind: "sound", text: "G sharp in the bass makes the chord bright. It pulls the ear back home to A." },
      ],
      tricky: {
        5: "Use the rest after A to move the right thumb down to middle C.",
        6: "The left thumb stretches from B up to G sharp. Let the hand open wide.",
        14: "The same stretch as bar 6: the left thumb reaches from B up to G sharp.",
      },
    },
    epic: {
      key: A_MINOR,
      bpm: 150,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: [
        inEighths(RIGHT_QUARTERS),
        "r:2 C5+E5/3+5:2 B4+D#5/2+4:2 | C5+E5/3+5:2 B4+D#5/2+4:2 C5+E5/3+5:2 | G#4+B4/1+2:2 B4+D5/2+4:2 A4+C5/1+3:1 r:1 | C4+A4/1+5:4 r:2",
        "C4/1:2 E4/2:2 A4/4:2 | D4+B4/1+5:4 r:2 | E4/1:2 G#4/2:2 B4/4:2 | E4+C5/1+5:4 r:2",
        "E4/1:2 E5/5:2 D#5/4:2 | C5+E5/3+5:2 B4+D#5/2+4:2 C5+E5/3+5:2 | G#4+B4/1+2:2 B4+D5/2+4:2 A4+C5/1+3:1 r:1 | C4+A4/1+5:4 r:2",
        "C4/1:2 E4/2:2 A4/4:2 | D4+B4/1+5:4 r:2 | E4/1:2 C5/5:2 B4/4:2 | C4+E4+A4/1+2+4:6",
      ].join(" | "),
      left: [
        `${REST} | ${REST} | ${REST} | ${bars(ALBERTI, "aaeea")}`,
        `A2/5:1 E3/1:1 C3/3:2 r:2 | ${REST} | ${REST} | ${bars(ALBERTI, "aaeea")}`,
        `${REST} | ${REST} | ${REST} | ${bars(ALBERTI, "aaeea")}`,
        `A2/5:1 E3/1:1 C3/3:2 r:2 | ${REST} | ${REST} | ${bars(ALBERTI, "aaee")} | A2+E3+A3/5+2+1:6`,
      ].join(" | "),
      pedal: [
        "r:6 | r:6 | r:6 | P:6 | P:6 | P:6 | P:6 | P:6",
        "r:6 | r:6 | r:6 | P:6 | P:6 | P:6 | P:6 | P:6",
        "r:6 | r:6 | r:6 | P:6 | P:6 | P:6 | P:6 | P:6",
        "r:6 | r:6 | r:6 | P:6 | P:6 | P:6 | P:6 | P:6",
      ].join(" | "),
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [4, 8], wait: false },
        { text: "Play the right hand's thirds alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [17, 20], wait: true },
        { text: "Join the hands on bars 4 to 8, slowly.", hands: "both", speed: 0.5, loop: [4, 8], wait: true },
        { text: "Play the whole song with both hands at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 4, toBar: 8, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 4, toBar: 8, kind: "sound", text: "Change the pedal on every bar line. Lift it as the new bass note sounds." },
        { fromBar: 17, toBar: 19, kind: "fingering", text: "The tune is the top note of each third, so let the upper finger lead." },
      ],
      tricky: {
        20: "Lift the hand after the thirds, then land with the thumb on middle C and the little finger on A.",
        28: "The same jump as bar 20: thumb on middle C and little finger on A, together.",
        32: "Spread the hand for the last chord: thumb on C, then fingers 2 and 4 on E and A.",
      },
    },
    legendary: {
      key: A_MINOR,
      bpm: 192,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: [
        inEighths(RIGHT_QUARTERS),
        "r:2 E6/5:2 D#6/4:2 | E6/5:2 D#6/4:2 E6/5:2 | B5/2:2 D6/4:2 C6/3:1 r:1 | A4+C5+E5+A5/1+2+3+5:4 r:2",
        "C5/1:2 E5/2:2 A5/4:2 | E5+G#5+B5/1+2+4:4 r:2 | E5/1:2 G#5/2:2 B5/4:2 | E5+A5+C6/1+3+5:4 r:2",
        "E5/1:2 E6/5:2 D#6/4:2 | E6/5:2 D#6/4:2 E6/5:2 | B5/2:2 D6/4:2 C6/3:1 r:1 | A4+C5+E5+A5/1+2+3+5:4 r:2",
        "C5/1:2 E5/2:2 A5/4:2 | E5+G#5+B5/1+2+4:4 r:2 | E5/1:2 C6/5:2 B5/4:1 r:1 | A4+C5+E5+A5/1+2+3+5:6",
      ].join(" | "),
      left: [
        `${REST} | ${REST} | ${REST} | ${bars(STRIDE, "aaeea")}`,
        `A1+A2/5+1:1 r:1 C3+E3+A3/5+3+1:2 r:2 | ${REST} | ${REST} | ${bars(STRIDE, "aae")}`,
        `E1+E2/5+1:1 r:1 E3+G#3/2+1:2 B2+E3+G#3/5+3+1:1 r:1 | ${STRIDE.a}`,
        `${REST} | ${REST} | ${REST} | ${bars(RISING, "aaeea")}`,
        `${REST} | ${REST} | ${REST} | ${bars(RISING, "aaee")} | A1+A2/5+1:6`,
      ].join(" | "),
      pedal: [
        "r:6 | r:6 | r:6 | P:6 | P:6 | P:6 | P:6 | P:6",
        "r:6 | r:6 | r:6 | P:6 | P:6 | P:6 | P:6 | P:6",
        "r:6 | r:6 | r:6 | P:6 | P:6 | P:6 | P:6 | P:6",
        "r:6 | r:6 | r:6 | P:6 | P:6 | P:6 | P:6 | P:6",
      ].join(" | "),
      skills: ["stride", "melody-in-chords", "octave-bass"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [4, 8], wait: false },
        { text: "Play the right hand's chords alone, and let the little finger sing the tune.", hands: "right", speed: 0.5, loop: [20, 24], wait: true },
        { text: "Join the hands on the second half, where the tune climbs an octave.", hands: "both", speed: 0.6, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and make the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 4, toBar: 8, kind: "trick", text: "In stride, look at the bass note and let the hand find the chord by feel." },
        { fromBar: 17, toBar: 19, kind: "sound", text: "Up high, the E and D sharp should shimmer. Keep them light and even." },
        { fromBar: 20, toBar: 24, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        15: "The left hand's chord on beat two has only E and G sharp. Add B on beat three.",
        20: "Lift the hand off the high C, then grab A, C, E and A with fingers 1, 2, 3 and 5.",
        28: "The four-note chord comes back. Lift off the high C first, then land on the whole octave.",
      },
    },
  },
};

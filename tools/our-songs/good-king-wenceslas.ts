/**
 * *Good King Wenceslas*: the spring carol *Tempus adest floridum*, in four versions of ours.
 *
 * The tune is the whole verse of 17 bars in 4/4, read from a 19th-century print of the carol. The print
 * is in A major, and the tune here is a minor third higher, in C major, at the print's own octave. The
 * hook is the first four bars, the opening phrase the carol is known by.
 *
 * The right hand of Common and Rare changes finger on a repeated C to reach the high G. It lifts after
 * the C of bar 10, a quarter early, and lands on A. That is its only change of place.
 *
 * Common plays the tune over held fifths and bass notes. Rare plays it over block chords, then a bass and
 * chord in turns. Epic puts an Alberti bass under the verse, then plays it an octave up over broken
 * chords, with the pedal. Legendary sets the verse in octaves over a stride bass, then in chords over an
 * octave bass, and ends on a four-note chord. Its hands lift an eighth early before each wide move, and
 * the pedal holds the sound.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, a minor third above the print's A major. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 4/4, in quarters, but for its last bar. */
const TUNE_BODY = [
  "C5:1 C5:1 C5:1 D5:1 | C5:1 C5:1 G4:2 | A4:1 G4:1 A4:1 B4:1 | C5:2 C5:2",
  "C5:1 C5:1 C5:1 D5:1 | C5:1 C5:1 G4:2 | A4:1 G4:1 A4:1 B4:1 | C5:2 C5:2",
  "G5:1 F5:1 E5:1 D5:1 | E5:1 D5:1 C5:2 | A4:1 G4:1 A4:1 B4:1 | C5:2 C5:2",
  "G4:1 G4:1 A4:1 B4:1 | C5:1 C5:1 D5:2 | G5:1 F5:1 E5:1 D5:1 | C5:2 F5:2",
].join(" | ");

/** The whole tune in 4/4, in quarters. */
const tune = `${TUNE_BODY} | C5:4`;

/** The first three bars in the right hand, in quarters, the thumb on G. */
const OPENING_RIGHT = "C5/4:1 C5/4:1 C5/4:1 D5/5:1 | C5/4:1 C5/4:1 G4/1:2 | A4/2:1 G4/1:1 A4/2:1 B4/3:1";

/**
 * The tune in the right hand, in quarters, but for its last bar. The thumb takes over the second C of
 * bars 8 and 14, and the hand lifts after the C of bar 10.
 */
const RIGHT_BODY = [
  OPENING_RIGHT,
  "C5/4:2 C5/4:2",
  OPENING_RIGHT,
  "C5/4:2 C5/1:2",
  "G5/5:1 F5/4:1 E5/3:1 D5/2:1 | E5/3:1 D5/2:1 C5/1:1 r:1",
  "A4/2:1 G4/1:1 A4/2:1 B4/3:1 | C5/4:2 C5/4:2",
  "G4/1:1 G4/1:1 A4/2:1 B4/3:1 | C5/4:1 C5/1:1 D5/2:2",
  "G5/5:1 F5/4:1 E5/3:1 D5/2:1 | C5/1:2 F5/4:2",
].join(" | ");

/** The chords, two letters a bar, one for each half: C, G and F. */
const CHORDS = "CC CG FG CC CC CG FG CC GG CC FG CC CG CG GG CF CC";

/** The chords without the last bar. */
const CHORDS_BODY = CHORDS.slice(0, CHORDS.lastIndexOf(" "));

/** `text` with every length multiplied by `times`, so a line in quarters reads in eighths or sixteenths. */
function scaled(text: string, times: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${times * Number(units)}`);
}

/** `text` an octave higher. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** Bars of `patterns` from `chords`, such as `"CC CG"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, chords: string): string {
  return chords
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** Like `halfBars`, but a bar whose halves share a chord holds it for the whole bar. */
function heldBars(patterns: Record<string, string>, chords: string): string {
  return chords
    .split(" ")
    .map((bar) => (bar[0] === bar[1] ? scaled(patterns[bar[0]!]!, 2) : [...bar].map((chord) => patterns[chord]).join(" ")))
    .join(" | ");
}

/** Half a bar of a held fifth or bass note in quarters, the hand kept on C to G. */
const HELD: Record<string, string> = {
  C: "C3+G3/5+1:2",
  G: "D3+G3/4+1:2",
  F: "C3+F3/5+2:2",
};

/** Half a bar of a block chord in quarters, the hand kept on C to G: C, G seventh without its third, or F over C. */
const BLOCK: Record<string, string> = {
  C: "C3+E3+G3/5+3+1:2",
  G: "D3+F3+G3/4+2+1:2",
  F: "C3+F3/5+2:2",
};

/** Half a bar in quarters: the bass note, then the rest of its chord, the hand kept on C to G. */
const TURNS: Record<string, string> = {
  C: "C3/5:1 E3+G3/3+1:1",
  G: "G3/1:1 D3+F3/4+2:1",
  F: "F3/2:1 C3/5:1",
};

/** Half a bar of Alberti bass in eighths: low, high, middle, high. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1",
  F: "C3/5:1 A3/1:1 F3/2:1 A3/1:1",
};

/** The last half bar of the Alberti bass in eighths, with a rest for the jump down. */
const ALBERTI_END = "C3/5:1 G3/1:1 E3/3:1 r:1";

/**
 * Half a bar of broken chord in eighths: root, fifth, octave, fifth. `R` is C with a rest in place of
 * its last fifth, for the jump down to a lower root. F always ends on that rest.
 */
const BROKEN: Record<string, string> = {
  C: "C2/5:1 G2/2:1 C3/1:1 G2/2:1",
  R: "C2/5:1 G2/2:1 C3/1:1 r:1",
  G: "G1/5:1 D2/2:1 G2/1:1 D2/2:1",
  F: "F1/5:1 C2/2:1 F2/1:1 r:1",
};

/** The chords of the second verse for the broken chords, but for its last bar: `R` marks a C before a lower root. */
const BROKEN_CHORDS = "CC RG FG CC CC RG FG CR GG CR FG CC RG RG GG RF";

/** Half a bar of stride in sixteenths: the root in octaves, then the chord, each an eighth with an eighth's rest. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:2 r:2 C3+E3+G3/5+3+1:2 r:2",
  G: "G1+G2/5+1:2 r:2 B2+D3+G3/5+3+1:2 r:2",
  F: "F1+F2/5+1:2 r:2 C3+F3+A3/5+2+1:2 r:2",
};

/** Half a bar of octave bass in sixteenths: the root in octaves, then the fifth under the root, and a rest for the jump. */
const OCTAVE_BASS: Record<string, string> = {
  C: "C2+C3/5+1:4 G2+C3/2+1:2 r:2",
  G: "G1+G2/5+1:4 D2+G2/2+1:2 r:2",
  F: "F1+F2/5+1:4 C2+F2/2+1:2 r:2",
};

/** The pitch of a note name such as `C5` or `F#4`, in semitones. */
function pitchOf(name: string): number {
  const steps: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  const accidental = name[1] === "#" ? 1 : name[1] === "b" ? -1 : 0;
  return 12 * Number(name.slice(-1)) + steps[name[0]!]! + accidental;
}

/** The right hand's chord under each tune note, by the chord of its half bar. The tune is on top. */
const VOICING: Record<string, Record<string, string>> = {
  C: {
    G4: "C4+E4+G4/1+2+4",
    C5: "C4+E4+G4+C5/1+2+3+5",
    D5: "E4+G4+D5/1+2+5",
    E5: "G4+C5+E5/1+3+5",
  },
  G: {
    G4: "B3+D4+G4/1+2+5",
    A4: "D4+F4+A4/1+2+4",
    B4: "D4+G4+B4/1+3+5",
    D5: "G4+B4+D5/1+3+5",
    E5: "G4+B4+E5/1+2+5",
    F5: "G4+B4+F5/1+2+5",
    G5: "B4+D5+G5/1+2+5",
  },
  F: {
    A4: "C4+F4+A4/1+3+5",
    G4: "C4+G4/1+5",
    F5: "A4+C5+F5/1+2+5",
  },
};

/**
 * `text`, a line of the tune in quarters, with each note set in its chord from `chords`, in sixteenths.
 * Each chord ends an eighth early, so the hand can travel, and the pedal holds its sound.
 */
function inChords(text: string, chords: string): string {
  const halves = chords.split(" ");
  return text
    .split(" | ")
    .map((bar, at) => {
      let beat = 0;
      return bar
        .split(" ")
        .map((token) => {
          const [pitch, units] = token.split(":") as [string, string];
          const chord = halves[at]![beat < 2 ? 0 : 1]!;
          beat += Number(units);
          return `${VOICING[chord]![pitch]}:${4 * Number(units) - 2} r:2`;
        })
        .join(" ");
    })
    .join(" | ");
}

/**
 * `text`, a line of the tune in quarters, in octaves in sixteenths, the thumb on the tune and finger 5
 * an octave above. A note before a leap of more than three semitones ends an eighth early, so the hand
 * can travel.
 */
function inOctaves(text: string): string {
  const bars = text.split(" | ").map((bar) => bar.split(" "));
  const notes = bars.flat().filter((token) => !token.startsWith("r"));
  let at = 0;
  return bars
    .map((bar) =>
      bar
        .map((token) => {
          const [pitch, units] = token.split(":") as [string, string];
          if (pitch === "r") return `r:${4 * Number(units)}`;
          const next = notes[++at]?.split(":")[0];
          const octave = `${pitch}+${pitch.slice(0, -1)}${Number(pitch.slice(-1)) + 1}/1+5`;
          const leaps = next !== undefined && Math.abs(pitchOf(next) - pitchOf(pitch)) > 3;
          return leaps ? `${octave}:${4 * Number(units) - 2} r:2` : `${octave}:${4 * Number(units)}`;
        })
        .join(" "),
    )
    .join(" | ");
}

export const goodKingWenceslas: OurSong = {
  slug: "good-king-wenceslas",
  title: "Good King Wenceslas",
  source: {
    composer: "Traditional",
    died: null,
    published: 1582,
    edition: "Tempus adest floridum from Piae Cantiones (1582), as a 19th-century print of the carol with John Mason Neale's words sets it",
  },
  about:
    "The tune is Tempus adest floridum, a spring carol from the 13th century. " +
    "It was first published in 1582 in Piae Cantiones, a Finnish song book. " +
    "In 1853 the English hymnwriter John Mason Neale wrote new words to it, with his music editor Thomas Helmore. " +
    "The carol tells of a king of Bohemia who braves the winter weather to give alms to a poor peasant.",
  funFact: "Wenceslas was only a duke in his lifetime. Emperor Otto I gave him the title of king after his death.",
  mythic: null,
  collection: "christmas",
  aka: ["Tempus adest floridum"],
  tune: { text: tune, numerator: 4, denominator: 4, key: C_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      right: `${RIGHT_BODY} | C5/1:4`,
      left: heldBars(HELD, CHORDS),
      skills: ["held-bass", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 8 to 11 with the right hand alone, up to the high G and back down to A.", hands: "right", speed: 0.6, loop: [8, 11], wait: true },
        { text: "Now the left hand alone. It changes its shape on the first and the third beat only.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "fingering", text: "The thumb starts on G, and finger 4 plays the repeated C." },
        { fromBar: 8, toBar: 9, kind: "trick", text: "Play the second C with the thumb. The little finger then reaches up to the high G." },
        { fromBar: 10, toBar: 11, kind: "trick", text: "Lift the hand after the C, and land finger 2 on A." },
      ],
      tricky: {
        1: "Finger 4 plays C three times, then finger 5 plays D. The thumb waits over G.",
        5: "The same notes as bar 1. Keep the three Cs even and the D light.",
        11: "After the lift, finger 2 lands on A and the thumb takes G. Then fingers 2 and 3 climb to B.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      right: `${RIGHT_BODY} | C5/1:4`,
      left: [
        halfBars(BLOCK, CHORDS.split(" ").slice(0, 8).join(" ")),
        halfBars(TURNS, CHORDS_BODY.split(" ").slice(8).join(" ")),
        "C3+E3+G3/5+3+1:4",
      ].join(" | "),
      skills: ["triads"],
      practice: [
        { text: "Play the left hand alone on the first eight bars, and press the notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone from bar 9: a low note, then the chord, on every beat.", hands: "left", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Hold each chord softly for its two beats, so the tune rings above it." },
        { fromBar: 8, toBar: 9, kind: "trick", text: "Play the second C with the thumb. The little finger then reaches up to the high G." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Play the low note a little louder than the chord after it." },
      ],
      tricky: {
        1: "Finger 4 plays C three times, then finger 5 plays D. The left hand holds the C chord all bar.",
        5: "The same notes as bar 1. Keep the three Cs even and the D light.",
        11: "After the lift, finger 2 lands on A. The left hand plays F, then C, then G, then its chord.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [scaled(RIGHT_BODY, 2), "C5/1:6 r:2", scaled(octaveUp(RIGHT_BODY), 2), "C6/1:8"].join(" | "),
      left: [halfBars(ALBERTI, CHORDS_BODY), `${ALBERTI.C} ${ALBERTI_END}`, halfBars(BROKEN, BROKEN_CHORDS), "C2+G2+C3/5+2+1:8"].join(" | "),
      pedal: [...Array(33).fill("P:4 P:4"), "P:8"].join(" | "),
      skills: ["alberti-bass", "broken-chords", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the broken chords of the second verse in the left hand alone.", hands: "left", speed: 0.5, loop: [18, 21], wait: false },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.5, loop: [1, 17], wait: true },
        { text: "Play the whole song with both hands at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 17, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 17, toBar: 18, kind: "trick", text: "After the last C, the right hand jumps up an octave, and the left hand drops to a low C." },
        { fromBar: 1, toBar: 34, kind: "sound", text: "Change the pedal each half bar, as the left hand starts a new chord." },
      ],
      tricky: {
        18: "The right hand starts again an octave up, and the left hand drops to the low C.",
        28: "The left hand rests after the F chord, then jumps down to the low G.",
        33: "The tune leaps up from C to F, while the left hand rests and drops to the low F.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 100,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [
        inOctaves(`${TUNE_BODY} | C5:3 r:1`),
        inChords(TUNE_BODY, CHORDS_BODY),
        "C4+E4+G4+C5/1+2+3+5:16",
      ].join(" | "),
      left: [halfBars(STRIDE, CHORDS), halfBars(OCTAVE_BASS, CHORDS_BODY), "C2+G2+C3/5+2+1:16"].join(" | "),
      pedal: [...Array(33).fill("P:8 P:8"), "P:16"].join(" | "),
      skills: ["stride", "octave-bass", "melody-in-chords"],
      practice: [
        { text: "Play the right hand's octaves alone, with the thumb and finger 5 kept in one shape.", hands: "right", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the chords of the second verse in the right hand alone.", hands: "right", speed: 0.5, loop: [18, 21], wait: true },
        { text: "Join the hands on the whole song at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 17, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 9, toBar: 10, kind: "fingering", text: "Keep the thumb and finger 5 stretched an octave apart, and let the wrist carry the run down." },
        { fromBar: 18, toBar: 34, kind: "sound", text: "Lift each chord a little early to move the hand. The pedal holds its sound." },
      ],
      tricky: {
        3: "The octaves step A, G, A and B, while the left hand jumps from the low F to its chord, then to G.",
        7: "The same as bar 3. Keep the octaves even and the wrist loose.",
        11: "The same steps once more, after the run down. Keep the stride bass light under the octaves.",
      },
    },
  },
};

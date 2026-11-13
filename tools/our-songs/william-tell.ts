/**
 * *William Tell Overture*: the first phrase of the finale of Rossini's overture, in four versions of ours.
 *
 * The tune is the top voice of Louis Niedermeyer's piano reduction. The print is in 2/4 and E major, with
 * sixteenths. The tune writes every sixteenth as a quarter, so each print bar is a bar of 4/2. Bar 1
 * holds the upbeat after a rest. The print's right hand plays a repeated B under the tune, which the tune
 * leaves out where a higher note sounds. The hook is the whole tune.
 *
 * Every version writes the tune in 4/2 quarters, one bar per print bar. The tune ends on the dominant,
 * so every version plays it two or three times, with bars of our own between. Our bars answer with the
 * tune's long, short, short rhythm on other chord notes, over I, IV, V and V7. Every version closes on
 * the tonic.
 *
 * Common moves the tune to C major, an octave up, over held fifths in one hand position. Its E before
 * each low G ends an eighth early, so the hand has a breath for the leap. Rare moves it to G major, over a
 * triad or a two-note chord on each half bar, and adds two-note chords to our bars. Epic moves it to A
 * major over an Alberti bass with the pedal, plays it again in sixths, then an octave up. Legendary
 * keeps E major over a stride bass, plays the tune again in octaves and then in chords.
 *
 * The sixths, the octaves, the chords and the stride are played short, each with an eighth's rest
 * after it. The hand then jumps to its next shape instead of stretching.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Legendary keeps. */
const E_MAJOR: Key = { tonic: 4, mode: "major" };

/** Common's key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** Rare's key. */
const G_MAJOR: Key = { tonic: 7, mode: "major" };

/** Epic's key, of three sharps. */
const A_MAJOR: Key = { tonic: 9, mode: "major" };

/** The tune in 4/2, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune =
  "r:6 B3:1 B3:1 | B3:2 B3:1 B3:1 B3:2 B3:1 B3:1 | E4:2 F#4:2 G#4:2 B3:1 B3:1 | B3:2 B3:1 B3:1 E4:2 G#4:1 G#4:1 | F#4:2 D#4:2 B3:2 r:2";

/** `text` an octave up: every note name's octave plus one. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/**
 * `text`, a line in quarters, in eighths, with every note or chord an eighth short and an eighth's rest
 * after it. The hand then has a breath before each move, so a moving sixth or octave never stretches.
 */
function staccato(text: string): string {
  return text
    .split(" ")
    .map((token) => {
      const [notes, units] = token.split(":");
      if (notes === undefined || units === undefined) return token;
      const eighths = 2 * Number(units);
      return notes === "r" ? `r:${eighths}` : `${notes}:${eighths - 1} r:1`;
    })
    .join(" ");
}

/** Bars of `patterns` from `chords`, such as `"iv"`: one letter per half bar, two per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  const halves = [...chords].map((chord) => {
    const pattern = patterns[chord];
    if (pattern === undefined) throw new Error(`No pattern for chord ${chord}`);
    return pattern;
  });
  const lines: string[] = [];
  for (let at = 0; at < halves.length; at += 2) lines.push(halves.slice(at, at + 2).join(" "));
  return lines.join(" | ");
}

/** Common's left hand in eighths: a fifth held for the half bar, or the whole bar when the chord stays. */
function held(chords: string): string {
  const shape: Record<string, string> = { i: "C3+G3/5+1", f: "C3+F3/5+2", v: "D3+G3/4+1" };
  const lines: string[] = [];
  for (let at = 0; at < chords.length; at += 2) {
    const first = shape[chords[at] ?? ""];
    const second = shape[chords[at + 1] ?? ""];
    if (first === undefined || second === undefined) throw new Error(`No shape for chords ${chords}`);
    lines.push(first === second ? `${first}:16` : `${first}:8 ${second}:8`);
  }
  return lines.join(" | ");
}

/** The chords under the tune's last four bars, one letter per half bar. */
const TUNE_CHORDS = "iiiivivv";

/** The chords under the whole tune, its first bar of rest included. */
const HEAD_CHORDS = `ii${TUNE_CHORDS}`;

/** Common's tune in C major, an octave up, in eighths: bars 1 to 5. The E before each low G ends early. */
const COMMON_HEAD = "r:12 G4/1:2 G4/1:2";
const COMMON_BODY = [
  "G4/1:4 G4/1:2 G4/1:2 G4/1:4 G4/1:2 G4/1:2",
  "C5/3:4 D5/4:4 E5/5:3 r:1 G4/1:2 G4/1:2",
  "G4/1:4 G4/1:2 G4/1:2 C5/3:4 E5/5:2 E5/5:2",
  "D5/4:4 B4/2:4 G4/1:4 r:4",
].join(" | ");

/** Rare's tune in G major, in quarters. */
const RARE_HEAD = "r:6 D4/1:1 D4/1:1";
const RARE_BODY = [
  "D4/1:2 D4/1:1 D4/1:1 D4/1:2 D4/1:1 D4/1:1",
  "G4/3:2 A4/4:2 B4/5:2 D4/1:1 D4/1:1",
  "D4/1:2 D4/1:1 D4/1:1 G4/3:2 B4/5:1 B4/5:1",
  "A4/4:2 F#4/2:2 D4/1:2 r:2",
].join(" | ");

/** Epic's tune in A major, in quarters. */
const EPIC_HEAD = "r:6 E4/1:1 E4/1:1";
const EPIC_BODY = [
  "E4/1:2 E4/1:1 E4/1:1 E4/1:2 E4/1:1 E4/1:1",
  "A4/3:2 B4/4:2 C#5/5:2 E4/1:1 E4/1:1",
  "E4/1:2 E4/1:1 E4/1:1 A4/3:2 C#5/5:1 C#5/5:1",
  "B4/4:2 G#4/2:2 E4/1:2 r:2",
].join(" | ");

/** Epic's tune in A major, in quarters, with a third or a sixth under every note. */
const EPIC_SIXTHS = [
  "C#4+E4/1+3:2 C#4+E4/1+3:1 C#4+E4/1+3:1 C#4+E4/1+3:2 C#4+E4/1+3:1 C#4+E4/1+3:1",
  "C#4+A4/1+5:2 D4+B4/1+5:2 E4+C#5/1+5:2 C#4+E4/1+3:1 C#4+E4/1+3:1",
  "B3+E4/1+3:2 B3+E4/1+3:1 B3+E4/1+3:1 C#4+A4/1+5:2 E4+C#5/1+5:1 E4+C#5/1+5:1",
  "D4+B4/1+5:2 B3+G#4/1+5:2 G#3+E4/1+4:2 r:2",
].join(" | ");

/** Legendary's tune in E major, an octave up, in quarters. */
const LEGENDARY_HEAD = "r:6 B4/1:1 B4/1:1";
const LEGENDARY_BODY = [
  "B4/1:2 B4/1:1 B4/1:1 B4/1:2 B4/1:1 B4/1:1",
  "E5/3:2 F#5/4:2 G#5/5:2 B4/1:1 B4/1:1",
  "B4/1:2 B4/1:1 B4/1:1 E5/3:2 G#5/5:1 G#5/5:1",
  "F#5/4:2 D#5/2:2 B4/1:2 r:2",
].join(" | ");

/** Legendary's tune in E major, in quarters, in octaves. */
const LEGENDARY_OCTAVES = [
  "B3+B4/1+5:2 B3+B4/1+5:1 B3+B4/1+5:1 B3+B4/1+5:2 B3+B4/1+5:1 B3+B4/1+5:1",
  "E4+E5/1+5:2 F#4+F#5/1+5:2 G#4+G#5/1+5:2 B3+B4/1+5:1 B3+B4/1+5:1",
  "B3+B4/1+5:2 B3+B4/1+5:1 B3+B4/1+5:1 E4+E5/1+5:2 G#4+G#5/1+5:1 G#4+G#5/1+5:1",
  "F#4+F#5/1+5:2 D#4+D#5/1+5:2 B3+B4/1+5:2 r:2",
].join(" | ");

/** Legendary's tune in E major, an octave up, in quarters, as the top of a chord. */
const LEGENDARY_CHORDS = [
  "E4+G#4+B4/1+3+5:2 E4+G#4+B4/1+3+5:1 E4+G#4+B4/1+3+5:1 E4+G#4+B4/1+3+5:2 E4+G#4+B4/1+3+5:1 E4+G#4+B4/1+3+5:1",
  "G#4+B4+E5/1+2+5:2 B4+F#5/1+5:2 B4+E5+G#5/1+3+5:2 E4+G#4+B4/1+3+5:1 E4+G#4+B4/1+3+5:1",
  "D#4+F#4+B4/1+2+5:2 D#4+F#4+B4/1+2+5:1 D#4+F#4+B4/1+2+5:1 G#4+B4+E5/1+2+5:2 B4+E5+G#5/1+3+5:1 B4+E5+G#5/1+3+5:1",
  "B4+D#5+F#5/1+3+5:2 F#4+B4+D#5/1+3+5:2 D#4+F#4+B4/1+2+5:2 r:2",
].join(" | ");

/** Rare's two-note chord or triad on each half bar, in quarters. */
const RARE_LEFT: Record<string, string> = {
  i: "G2+B2+D3/5+3+1:4",
  f: "G2+C3/5+2:4",
  v: "A2+D3/4+1:4",
  "7": "A2+C3+D3/4+2+1:4",
};

/** Epic's Alberti bass on each half bar, in eighths, in inversions that keep the hand still. */
const ALBERTI: Record<string, string> = {
  i: "A2/5:1 E3/1:1 C#3/3:1 E3/1:1 A2/5:1 E3/1:1 C#3/3:1 E3/1:1",
  f: "A2/5:1 F#3/1:1 D3/3:1 F#3/1:1 A2/5:1 F#3/1:1 D3/3:1 F#3/1:1",
  v: "G#2/5:1 E3/1:1 B2/3:1 E3/1:1 G#2/5:1 E3/1:1 B2/3:1 E3/1:1",
  "7": "G#2/5:1 E3/1:1 D3/2:1 E3/1:1 G#2/5:1 E3/1:1 D3/2:1 E3/1:1",
};

/**
 * Legendary's stride on each half bar, in eighths: an octave, a chord, the fifth's octave, a chord. Each
 * is an eighth long, with an eighth's rest to jump.
 */
const STRIDE: Record<string, string> = {
  i: "E2+E3/5+1:1 r:1 G#2+B2+E3/3+2+1:1 r:1 B1+B2/5+1:1 r:1 G#2+B2+E3/3+2+1:1 r:1",
  f: "A1+A2/5+1:1 r:1 A2+C#3+E3/3+2+1:1 r:1 E2+E3/5+1:1 r:1 A2+C#3+E3/3+2+1:1 r:1",
  v: "B1+B2/5+1:1 r:1 F#2+B2+D#3/3+2+1:1 r:1 F#1+F#2/5+1:1 r:1 F#2+B2+D#3/3+2+1:1 r:1",
  "7": "B1+B2/5+1:1 r:1 A2+B2+D#3/3+2+1:1 r:1 F#1+F#2/5+1:1 r:1 A2+B2+D#3/3+2+1:1 r:1",
};

/** The chords of Epic and Legendary from bar 1 to bar 23, one letter per half bar. */
const BIG_CHORDS = `${HEAD_CHORDS}ffi7i7ii${TUNE_CHORDS}ifi7fvii${TUNE_CHORDS}`;

/** A pedal line of `count` bars, changed on every half bar. */
function halfBarPedal(count: number): string {
  return Array(count).fill("P:8 P:8").join(" | ");
}

export const williamTell: OurSong = {
  slug: "william-tell",
  title: "William Tell Overture",
  aka: ["William Tell", "Guillaume Tell", "Wilhelm Tell", "March of the Swiss Soldiers"],
  source: {
    composer: "Gioachino Rossini",
    died: 1868,
    published: 1829,
    edition:
      "William Tell Overture, the first phrase of its finale, the top voice of Louis Niedermeyer's piano reduction, printed by E. Troupenas in Paris between 1829 and 1830, as Gallica's scan on Wikimedia Commons shows it",
  },
  about:
    "Rossini's opera William Tell premiered in 1829, and it was the last of his 39 operas. " +
    "Its overture ends with a fast galop, often called the March of the Swiss Soldiers. " +
    "That finale became the theme music of The Lone Ranger on radio, television and film.",
  funFact: "Some writers have defined an intellectual as a man who can listen to the William Tell Overture without thinking of the Lone Ranger.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: E_MAJOR, hookBars: [1, 5] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [
        COMMON_HEAD,
        COMMON_BODY,
        "C5/3:4 C5/3:2 C5/3:2 C5/3:4 E5/5:2 E5/5:2 | D5/4:4 D5/4:2 D5/4:2 B4/2:4 G4/1:4",
        "C5/3:4 E5/5:4 D5/4:4 B4/2:4 | C5/3:8 r:4 G4/1:2 G4/1:2",
        COMMON_BODY,
        "E5/5:4 E5/5:2 E5/5:2 C5/3:4 C5/3:2 C5/3:2 | E5/5:4 D5/4:2 C5/3:2 D5/4:4 B4/2:4 | C5/3:16",
      ].join(" | "),
      left: held(`${HEAD_CHORDS}fivvivii${TUNE_CHORDS}ifivii`),
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first five bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play bars 6 to 9 with the right hand alone. They answer the tune with the same rhythm.", hands: "right", speed: 0.6, loop: [6, 9], wait: true },
        { text: "Now the left hand alone. It holds one shape for half a bar or a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first nine bars, slowly.", hands: "both", speed: 0.7, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "rhythm", text: "Say \"long, short, short\" as you play. That rhythm is the gallop of a horse." },
        { fromBar: 3, toBar: 3, kind: "trick", text: "Lift finger 5 from E a little early. Then the thumb lands on the low G in time." },
        { fromBar: 1, toBar: 16, kind: "fingering", text: "Each finger keeps its own key. The thumb plays every G." },
      ],
      tricky: {
        7: "Finger 4 plays D three times. Then fingers 2 and 1 step down to B and G.",
        8: "Finger 3 plays C, then finger 5 skips up to E. The left hand changes to D and G halfway.",
        15: "Fingers 5, 4 and 3 walk down from E to C. The left hand changes to D and G for the last two notes.",
      },
    },
    rare: {
      key: G_MAJOR,
      bpm: 168,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: [
        RARE_HEAD,
        RARE_BODY,
        "D4+G4/1+3:2 G4/3:1 G4/3:1 D4+G4/1+3:2 B4/5:1 B4/5:1 | F#4+A4/2+4:2 A4/4:1 A4/4:1 F#4+A4/2+4:2 G4/3:1 F#4/2:1",
        "G4+B4/3+5:2 B4/5:1 A4/4:1 G4/3:2 F#4+A4/2+4:2 | G4+B4/3+5:4 r:2 D4/1:1 D4/1:1",
        RARE_BODY,
        "B4/5:2 B4/5:1 B4/5:1 G4/3:2 G4/3:1 G4/3:1 | A4/4:2 A4/4:1 A4/4:1 B4/5:2 G4/3:2",
        "D4+G4/1+3:2 G4/3:1 A4/4:1 F#4+A4/2+4:4 | G4+B4/3+5:4 r:2 D4/1:1 D4/1:1",
        RARE_BODY,
        "B4/5:2 B4/5:1 B4/5:1 D4+G4/1+3:2 G4/3:1 G4/3:1 | G4+B4/3+5:2 A4/4:1 G4/3:1 F#4+A4/2+4:4 | D4+G4/1+3:8",
      ].join(" | "),
      left: `${bars(RARE_LEFT, `${HEAD_CHORDS}fiv7ivii${TUNE_CHORDS}ifvif7ii${TUNE_CHORDS}ifi7`)} | G2+B2+D3/5+3+1:8`,
      skills: ["two-note-chords", "triads"],
      practice: [
        { text: "Play the first five bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play the left hand alone. It plays one chord on each half bar.", hands: "left", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Join the hands on the first nine bars, slowly.", hands: "both", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed, like a galloping horse.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 5, kind: "rhythm", text: "Count four beats in each bar, two quarters to a beat. The left hand plays on every beat." },
        { fromBar: 6, toBar: 9, kind: "fingering", text: "The two-note chords use fingers 1 and 3, 2 and 4, or 3 and 5." },
        { fromBar: 1, toBar: 24, kind: "sound", text: "Play the repeated notes lightly, with a loose wrist, like hooves on a road." },
      ],
      tricky: {
        7: "Fingers 2 and 4 play F sharp and A together. Then finger 4 repeats A alone.",
        8: "The pairs move from G and B to F sharp and A. Keep the hand in place, and change only the fingers.",
        15: "Finger 4 repeats A, and finger 5 takes B. The left hand goes back to G, B and D halfway.",
      },
    },
    epic: {
      key: A_MAJOR,
      bpm: 144,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [
        inEighths(EPIC_HEAD),
        inEighths(EPIC_BODY),
        "A4/1:4 A4/1:2 A4/1:2 D5/3:4 F#5/5:2 F#5/5:2 | E5/4:4 E5/4:2 E5/4:2 D5/3:2 C#5/2:2 B4/1:4",
        "A4/1:1 B4/2:1 C#5/3:1 D5/4:1 E5/5:4 D5/4:2 B4/2:2 G#4/1:4 | A4/2:8 r:4 C#4+E4/1+3:2 C#4+E4/1+3:2",
        staccato(EPIC_SIXTHS),
        "C#5/3:4 C#5/3:2 C#5/3:2 D5/4:4 F#5/5:2 F#5/5:2 | E5/5:4 C#5/3:2 A4/1:2 D5/4:2 B4/2:2 G#4/1:2 B4/2:2",
        "F#5/5:4 D5/4:2 A4/2:2 B4/3:4 G#4/2:2 E4/1:2 | A4/3:8 r:4 E5/1:2 E5/1:2",
        inEighths(octaveUp(EPIC_BODY)),
        "C#5+A5/1+5:4 C#5+A5/1+5:2 C#5+A5/1+5:2 D5+A5/1+5:4 D5+F#5/1+3:2 D5+F#5/1+3:2",
        "E5+C#6/1+5:4 C#5+A5/1+5:4 B4+G#5/1+5:4 D5+B5/1+5:4 | C#5+E5+A5/1+2+5:16",
      ].join(" | "),
      left: `${bars(ALBERTI, `${BIG_CHORDS}ifi7`)} | A2+E3+A3/5+2+1:16`,
      pedal: `${halfBarPedal(23)} | P:16`,
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone. Each half bar rocks from the low note to the two notes above.", hands: "left", speed: 0.5, loop: [1, 5], wait: true },
        { text: "Play the right hand's sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [10, 13], wait: true },
        { text: "Join the hands on the first nine bars, slowly.", hands: "both", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 9, kind: "sound", text: "Change the pedal on every half bar, as the bass note comes back." },
        { fromBar: 8, toBar: 8, kind: "fingering", text: "The run climbs from A to E with fingers 1 to 5. Keep the wrist level." },
        { fromBar: 10, toBar: 13, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        9: "Finger 2 holds A after the thumb's G sharp. Then the hand drops to C sharp and E for the next bar.",
        14: "Finger 3 repeats C sharp, then fingers 4 and 5 reach up to D and F sharp.",
        17: "Use the rest after the long A to move the thumb up to the high E.",
      },
    },
    legendary: {
      key: E_MAJOR,
      bpm: 160,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [
        inEighths(LEGENDARY_HEAD),
        inEighths(LEGENDARY_BODY),
        "C#5+E5+A5/1+2+5:4 C#5+E5+A5/1+2+5:2 C#5+E5+A5/1+2+5:2 A4/1:1 B4/2:1 C#5/3:1 E5/4:1 A5/5:4",
        "G#5/5:2 E5/3:2 B4/1:2 E5/3:2 A5/5:2 F#5/4:2 D#5/2:2 B4/1:2",
        "E5/1:1 F#5/2:1 G#5/3:1 A5/4:1 B5/5:4 A5/5:2 F#5/3:2 D#5/2:2 B4/1:2",
        "G#4+B4+E5/1+2+5:8 r:4 B3+B4/1+5:2 B3+B4/1+5:2",
        staccato(LEGENDARY_OCTAVES),
        "B5/5:4 B5/5:2 B5/5:2 A5/4:4 A5/4:2 A5/4:2 | G#5/3:2 A5/4:2 B5/5:2 G#5/3:2 A5/4:2 F#5/2:2 D#5/1:4",
        "E5/1:1 F#5/2:1 G#5/3:1 A5/4:1 C#6/5:4 B5/5:2 A5/4:1 G#5/3:1 F#5/2:2 D#5/1:2",
        "E5/1:8 r:4 E4+G#4+B4/1+3+5:2 E4+G#4+B4/1+3+5:2",
        staccato(LEGENDARY_CHORDS),
        "A4+C#5+E5+A5/1+2+3+5:4 A4+C#5+E5+A5/1+2+3+5:2 A4+C#5+E5+A5/1+2+3+5:2 A4+B4+D#5+F#5/1+2+3+5:4 A4+B4+D#5+F#5/1+2+3+5:2 A4+B4+D#5+F#5/1+2+3+5:2",
        "E5/1:1 F#5/2:1 G#5/3:1 A5/4:1 B5/5:4 A5/5:2 F#5/4:2 D#5/2:2 B4/1:2",
        "E4+G#4+B4+E5/1+2+3+5:16",
      ].join(" | "),
      left: `${bars(STRIDE, `${BIG_CHORDS}f7i7`)} | E2+B2+E3/5+2+1:16`,
      pedal: `${halfBarPedal(23)} | P:16`,
      skills: ["stride", "octave-bass", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: a low octave, a chord, another octave, a chord.", hands: "left", speed: 0.5, loop: [1, 5], wait: true },
        { text: "Play the right hand's octaves alone. Keep the hand open, with the thumb and little finger ready.", hands: "right", speed: 0.5, loop: [10, 13], wait: true },
        { text: "Join the hands on the first nine bars, slowly.", hands: "both", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 9, kind: "trick", text: "In the left hand, let the arm swing between the low octave and the chord." },
        { fromBar: 10, toBar: 13, kind: "sound", text: "Let the little finger sing the top note of each octave a little louder." },
        { fromBar: 18, toBar: 21, kind: "fingering", text: "The tune is the top note of each chord. Finger 5 plays it every time." },
      ],
      tricky: {
        13: "The octaves fall from F sharp to B. Keep the hand open, and let it bounce on each one.",
        21: "The chords step down. Keep finger 5 on the top note, and let the hand bounce.",
        22: "The thumb stays on A. Fingers 2, 3 and 5 move from C sharp, E and A to B, D sharp and F sharp.",
      },
    },
  },
  de: {
    about:
      "Rossinis Oper Wilhelm Tell wurde 1829 uraufgeführt, und sie war die letzte seiner 39 Opern. " +
      "Ihre Ouvertüre endet mit einem schnellen Galopp, oft Marsch der Schweizer Soldaten genannt. " +
      "Dieses Finale wurde die Titelmusik von The Lone Ranger in Radio, Fernsehen und Film.",
    funFact: "Manche Autoren nennen einen Intellektuellen jemanden, der die Wilhelm-Tell-Ouvertüre hören kann, ohne an den Lone Ranger zu denken.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten fünf Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 6 bis 9 nur mit der rechten Hand. Sie antworten der Melodie im gleichen Rhythmus.",
          "Jetzt die linke Hand allein. Sie hält jeden Griff einen halben oder einen ganzen Takt lang.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Sag beim Spielen \"lang, kurz, kurz\". Dieser Rhythmus ist der Galopp eines Pferdes.",
          "Heb Finger 5 etwas früher vom E. Dann landet der Daumen rechtzeitig auf dem tiefen G.",
          "Jeder Finger bleibt auf seiner eigenen Taste. Der Daumen spielt jedes G.",
        ],
        tricky: {
          7: "Finger 4 spielt das D dreimal. Dann steigen Finger 2 und 1 hinab zu H und G.",
          8: "Finger 3 spielt das C, dann springt Finger 5 hinauf zum E. Die linke Hand wechselt in der Mitte zu D und G.",
          15: "Finger 5, 4 und 3 gehen vom E hinab zum C. Für die letzten zwei Töne wechselt die linke Hand zu D und G.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten fünf Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Sie spielt auf jedem halben Takt einen Akkord.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo, wie ein galoppierendes Pferd.",
        ],
        tips: [
          "Zähl in jedem Takt vier Schläge, zwei Viertel pro Schlag. Die linke Hand spielt auf jedem Schlag.",
          "Die Zweiklänge nehmen Finger 1 und 3, 2 und 4 oder 3 und 5.",
          "Spiel die wiederholten Töne leicht, mit lockerem Handgelenk, wie Hufe auf einer Straße.",
        ],
        tricky: {
          7: "Finger 2 und 4 spielen Fis und A zusammen. Dann wiederholt Finger 4 das A allein.",
          8: "Die Paare wandern von G und H zu Fis und A. Lass die Hand an ihrem Platz, und wechsle nur die Finger.",
          15: "Finger 4 wiederholt das A, und Finger 5 nimmt das H. In der Mitte geht die linke Hand zurück zu G, H und D.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Jeder halbe Takt schaukelt vom tiefen Ton zu den zwei Tönen darüber.",
          "Spiel die Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal auf jedem halben Takt, wenn der Basston wiederkommt.",
          "Der Lauf steigt mit Finger 1 bis 5 vom A zum E. Halt das Handgelenk ruhig.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          9: "Finger 2 hält das A nach dem Gis des Daumens. Dann geht die Hand für den nächsten Takt hinab zu Cis und E.",
          14: "Finger 3 wiederholt das Cis, dann greifen Finger 4 und 5 hinauf zu D und Fis.",
          17: "Nutz die Pause nach dem langen A, um den Daumen hinauf zum hohen E zu bringen.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine tiefe Oktave, ein Akkord, noch eine Oktave, ein Akkord.",
          "Spiel die Oktaven der rechten Hand allein. Halt die Hand offen, mit Daumen und kleinem Finger bereit.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Lass in der linken Hand den Arm zwischen der tiefen Oktave und dem Akkord schwingen.",
          "Lass den kleinen Finger den oberen Ton jeder Oktave etwas lauter singen.",
          "Die Melodie ist der obere Ton jedes Akkords. Finger 5 spielt sie jedes Mal.",
        ],
        tricky: {
          13: "Die Oktaven fallen vom Fis zum H. Halt die Hand offen, und lass sie auf jeder Oktave federn.",
          21: "Die Akkorde steigen hinab. Lass Finger 5 auf dem oberen Ton, und lass die Hand federn.",
          22: "Der Daumen bleibt auf dem A. Finger 2, 3 und 5 wandern von Cis, E und A zu H, Dis und Fis.",
        },
      },
    },
  },
};

/**
 * *Black Flag Jig*: a tune of our own, in the style of a swashbuckling adventure film score, in four
 * versions of ours.
 *
 * The tune is ours, written for this app, so it has no print. It is a jig in 6/8 in D minor, eight bars
 * long. It climbs the D minor chord, turns on the dominant A at bar 4, and closes on D with a C sharp
 * before it. The hook is bars 1 to 4.
 *
 * The tune writes every eighth of the jig as a quarter, so each jig bar is a bar of 6/4. It has no
 * upbeat. Its range is C sharp 4 to B flat 4, and every note lies in D minor with its raised seventh.
 *
 * Every version writes the tune in 6/4 eighths, one bar per jig bar, and then plays 8 bars of our own.
 * Epic and Legendary then play the tune again in another setting. Our chords are D minor, G minor, B flat
 * major, C major and A major with its seventh, two to a bar. Rare and Legendary leave the F out of D
 * minor under the tune's last E. Our own bars use the same chords. Every version keeps D minor and
 * closes on it.
 *
 * Common plays the tune over held fifths, fourths and thirds in one hand position. Rare plays the jig's bounce: a
 * long bass note and a short two-note chord in each half bar, and a few eighths in our own bars. Epic
 * rolls a broken chord under the tune with the pedal, passes the thumb under in our bars, then plays the
 * tune in thirds and sixths. Legendary bounces an octave and two chords in each half bar, and rolls
 * arpeggios over two octaves under our own bars. It then plays the tune an octave higher in full chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 6/4, in quarters, which are the jig's eighths: one bar per jig bar. */
const tune =
  "D4:2 F4:1 A4:2 F4:1 | G4:2 A4:1 Bb4:2 G4:1 | A4:2 G4:1 F4:2 E4:1 | D4:3 A4:3 | Bb4:2 A4:1 G4:2 F4:1 | G4:2 F4:1 E4:2 D4:1 | C#4:2 E4:1 A4:2 G4:1 | F4:2 E4:1 D4:3";

/** The tune in 6/4 eighths, for every version. The hand never shifts, since each move stays in a comfortable span. */
const TUNE = [
  "D4/1:4 F4/2:2 A4/4:4 F4/2:2 | G4/3:4 A4/4:2 Bb4/5:4 G4/3:2 | A4/5:4 G4/4:2 F4/3:4 E4/2:2 | D4/1:6 A4/4:6",
  "Bb4/5:4 A4/4:2 G4/3:4 F4/2:2 | G4/5:4 F4/4:2 E4/3:4 D4/2:2 | C#4/1:4 E4/3:2 A4/5:4 G4/4:2 | F4/3:4 E4/2:2 D4/1:6",
].join(" | ");

/** Our bars 9 to 16 in quarters, in one hand position from D to A, for Common. */
const OWN_COMMON = [
  "A4/5:4 F4/3:2 D4/1:4 F4/3:2 | G4/4:4 A4/5:2 G4/4:4 E4/2:2 | E4/2:4 F4/3:2 G4/4:4 E4/2:2 | A4/5:4 G4/4:2 E4/2:6",
  "F4/3:4 E4/2:2 D4/1:4 F4/3:2 | G4/4:4 F4/3:2 E4/2:4 G4/4:2 | A4/5:4 E4/2:2 G4/4:4 E4/2:2 | F4/3:4 E4/2:2 D4/1:6",
].join(" | ");

/** Our bars 9 to 16 for Rare, in the same hand position, with a few eighths. */
const OWN_RARE = [
  "A4/5:4 G4/4:1 F4/3:1 D4/1:4 F4/3:2 | G4/4:4 A4/5:2 G4/4:2 F4/3:1 E4/2:1 D4/1:2",
  "E4/2:4 G4/4:2 A4/5:2 G4/4:1 F4/3:1 E4/2:2 | A4/5:2 G4/4:1 F4/3:1 E4/2:2 A4/5:6",
  "F4/3:4 A4/5:2 D4/1:2 E4/2:1 F4/3:1 A4/5:2 | G4/4:2 F4/3:1 E4/2:1 D4/1:2 E4/2:4 G4/4:2",
  "A4/5:4 G4/4:2 E4/2:2 F4/3:1 G4/4:1 A4/5:2 | F4/3:4 E4/2:2 D4+F4/1+3:6",
].join(" | ");

/** Our bars 9 to 16 in eighths for Epic and Legendary, with the thumb passing under. Bar 16 turns to A for the tune again. */
const OWN_EIGHTHS = [
  "D4/1:1 E4/2:1 F4/3:1 G4/1:1 A4/2:1 Bb4/3:1 A4/2:2 F4/1:2 G4/2:1 A4/3:1",
  "Bb4/4:2 A4/3:1 G4/2:2 D4/1:1 G4/2:2 Bb4/4:1 A4/3:2 G4/2:1",
  "D5/5:2 C5/4:1 Bb4/3:2 F4/1:1 Bb4/3:2 A4/2:1 Bb4/3:2 D5/5:1",
  "C#5/4:2 A4/2:1 E4/1:2 G4/3:1 A4/4:2 G4/3:1 F4/2:1 E4/1:2",
  "F4/2:2 E4/1:1 F4/2:2 A4/4:1 A4/3:1 F4/1:1 A4/3:1 D5/5:2 A4/3:1",
  "Bb4/4:2 G4/2:1 D4/1:2 G4/2:1 C5/5:2 G4/2:1 E4/1:2 G4/2:1",
  "E4/1:2 A4/2:1 C#5/4:2 A4/2:1 E5/5:2 C#5/4:1 A4/2:2 G4/1:1",
  "A4/2:2 F4/1:1 A4/2:2 D5/5:1 C#5/4:2 A4/2:1 E4/1:3",
].join(" | ");

/** Epic's tune again in eighths, with a third or a sixth under most notes. */
const EPIC_TUNE_AGAIN = [
  "D4/1:4 D4+F4/1+2:2 F4+A4/2+4:4 D4+F4/1+2:2 | D4+G4/1+3:4 F4+A4/2+4:2 G4+Bb4/3+5:4 D4+G4/1+3:2",
  "C#4+A4/1+5:4 C#4+G4/1+4:2 C4+F4/1+3:4 C4+E4/1+2:2 | D4/1:6 F4+A4/2+4:6",
  "D4+Bb4/1+5:4 C4+A4/1+5:2 Bb3+G4/1+5:4 A3+F4/1+4:2 | Bb3+G4/1+5:4 Bb3+F4/1+4:2 C4+E4/1+3:4 Bb3+D4/1+2:2",
  "A3+C#4/1+2:4 C#4+E4/1+3:2 C#4+A4/1+5:4 C#4+G4/1+4:2 | D4+F4/1+3:4 A3+E4/1+3:2 A3+D4/1+2:6",
].join(" | ");

/**
 * Legendary's tune again an octave higher in eighths, in chords of three and four notes with the tune on
 * top. Each chord is cut an eighth short, so the hand lifts and lands on the next one.
 */
const LEGENDARY_TUNE_AGAIN = [
  "D4+F4+A4+D5/1+2+3+5:3 r:1 A4+D5+F5/1+3+5:1 r:1 D5+F5+A5/1+3+5:3 r:1 A4+D5+F5/1+3+5:1 r:1",
  "Bb4+D5+G5/1+2+5:3 r:1 D5+F5+A5/1+3+5:1 r:1 D5+G5+Bb5/1+3+5:3 r:1 Bb4+D5+G5/1+2+5:1 r:1",
  "C#5+E5+A5/1+2+5:3 r:1 C#5+E5+G5/1+2+4:1 r:1 G4+C5+F5/1+2+5:3 r:1 G4+C5+E5/1+2+4:1 r:1",
  "F4+A4+D5/1+2+5:5 r:1 D5+F5+A5/1+3+5:5 r:1",
  "D5+F5+Bb5/1+2+5:3 r:1 D5+F5+A5/1+2+4:1 r:1 Bb4+D5+G5/1+2+5:3 r:1 Bb4+D5+F5/1+2+4:1 r:1",
  "Bb4+D5+G5/1+2+5:3 r:1 Bb4+D5+F5/1+2+4:1 r:1 G4+C5+E5/1+3+5:3 r:1 F4+A4+D5/1+2+5:1 r:1",
  "E4+A4+C#5/1+2+4:3 r:1 A4+C#5+E5/1+3+5:1 r:1 C#5+E5+A5/1+2+5:3 r:1 C#5+E5+G5/1+2+4:1 r:1",
  "A4+D5+F5/1+3+5:3 r:1 A4+E5/1+4:1 r:1 D4+F4+A4+D5/1+2+3+5:6",
].join(" | ");

/** Bars of `patterns` from `chords`, such as `"ddgg"`: one letter per half bar, two per bar. */
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

/**
 * The chords under the tune, two per bar: d, g, b and c are D minor, G minor, B flat major and C major,
 * and A is A major with its seventh. D is D minor too, which Rare plays as a bare fifth under the E.
 */
const TUNE_CHORDS = "ddggAcddbggcAADd";

/** The chords under our bars 9 to 16 for Common and Rare, two per bar. */
const OWN_CHORDS = "ddggccAAddgcAAdd";

/** The chords under our bars 9 to 16 for Epic and Legendary, two per bar, turning to A before the tune again. */
const OWN_EIGHTH_CHORDS = "ddggbbAAddgcAAdA";

/** Common's held shapes in eighths, a half bar each, in one hand position from C3 to A3. */
const HELD: Record<string, string> = {
  d: "D3+A3/4+1:6",
  D: "D3+A3/4+1:6",
  g: "D3+G3/4+2:6",
  b: "D3+F3/5+3:6",
  c: "C3+G3/5+2:6",
  A: "E3+A3/3+1:6",
};

/** Rare's half bar in eighths: a long bass note on finger 5, then a short two-note chord, the jig's bounce. */
const LILT: Record<string, string> = {
  d: "D3/5:4 F3+A3/2+1:2",
  D: "D3/5:4 A3/1:2",
  g: "Bb2/5:4 D3+G3/2+1:2",
  b: "Bb2/5:4 D3+F3/2+1:2",
  c: "C3/5:4 E3+G3/2+1:2",
  A: "A2/5:4 E3+G3/2+1:2",
};

/** Epic's half bar in eighths: a rolling broken chord, with the root and fifth on the beats. */
const BROKEN: Record<string, string> = {};
for (const [chord, [root, third, fifth]] of Object.entries({
  d: ["D3", "F3", "A3"],
  D: ["D3", "F3", "A3"],
  g: ["G2", "Bb2", "D3"],
  b: ["Bb2", "D3", "F3"],
  c: ["C3", "E3", "G3"],
  A: ["A2", "C#3", "E3"],
})) {
  BROKEN[chord] = `${root}/5:1 ${third}/3:1 ${fifth}/1:1 ${third}/3:1 ${fifth}/1:1 ${root}/5:1`;
}

/**
 * Legendary's half bar in eighths: an octave, then a chord twice, each with a rest to jump. A chord leaves
 * out a note a semitone from the tune's note on its beat, such as the B flat of G minor under A.
 */
const STRIDE: Record<string, string> = {};
for (const [chord, [octave, triad]] of Object.entries({
  d: ["D2+D3/5+1", "A2+D3+F3/5+3+1"],
  D: ["D2+D3/5+1", "A2+D3+A3/5+3+1"],
  g: ["G1+G2/5+1", "G2+D3+G3/5+3+1"],
  b: ["Bb1+Bb2/5+1", "F2+D3+F3/5+2+1"],
  c: ["C2+C3/5+1", "G2+C3+G3/5+3+1"],
  A: ["A1+A2/5+1", "A2+C#3+G3/5+3+1"],
})) {
  STRIDE[chord] = `${octave}:1 r:1 ${triad}:1 r:1 ${triad}:1 r:1`;
}

/** The six notes of each chord over two octaves, for Legendary's arpeggios. */
const WIDE_NOTES: Record<string, string> = {
  d: "D2 A2 D3 F3 A3 D4",
  g: "G1 D2 G2 Bb2 D3 G3",
  b: "Bb1 F2 Bb2 D3 F3 Bb3",
  c: "C2 G2 C3 E3 G3 C4",
  A: "A1 E2 A2 C#3 E3 A3",
};

/**
 * Legendary's arpeggios in eighths, a half bar per chord: up two octaves in the first half of a bar, back
 * down in the second. The last half ends on a rest, so the hand can jump to the octave of the next bar.
 */
function wide(chords: string): string {
  const halves = [...chords].map((chord, at) => {
    const pitches = WIDE_NOTES[chord]!.split(" ");
    const steps: [number, number][] =
      at % 2 === 0
        ? [[0, 5], [1, 2], [2, 1], [3, 3], [4, 2], [5, 1]]
        : [[5, 1], [4, 2], [3, 3], [2, 1], [1, 2], [0, 5]];
    const notes = steps.map(([index, finger]) => `${pitches[index]}/${finger}:1`);
    if (at === chords.length - 1) notes.splice(-1, 1, "r:1");
    return notes.join(" ");
  });
  const lines: string[] = [];
  for (let at = 0; at < halves.length; at += 2) lines.push(halves.slice(at, at + 2).join(" "));
  return lines.join(" | ");
}

/** The pedal of Epic and Legendary in eighths: changed at each half bar, held through the last bar. */
const PEDAL = `${Array<string>(23).fill("P:6 P:6").join(" | ")} | P:12`;

export const blackFlagJig: OurSong = {
  slug: "black-flag-jig",
  title: "Black Flag Jig",
  aka: [],
  source: {
    composer: "learn-piano-easy",
    died: null,
    published: 2026,
    edition: "Our own tune, written for Learn Piano Easy in the style of a swashbuckling adventure film score",
    own: true,
  },
  about:
    "Black Flag Jig is a tune of our own, in the style of a swashbuckling adventure film score. " +
    "It dances in a quick six-eight, like a sailor's jig on deck.",
  funFact: "A jig is a lively dance counted in two groups of three. It came from the British Isles in the sixteenth century.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 6, denominator: 4, key: D_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 108,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: `${TUNE} | ${OWN_COMMON}`,
      left: bars(HELD, `${TUNE_CHORDS}${OWN_CHORDS}`),
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play bars 1 to 4 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. The thumb reaches down to C sharp in bar 7.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds two keys and changes them twice in a bar at most.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "rhythm", text: "Count six beats in a bar: long, short, long, short. That is the hop of a jig." },
        { fromBar: 2, toBar: 3, kind: "fingering", text: "Finger 5 takes B flat, a black key. Then it plays A at the start of bar 3, and the fingers walk down." },
        { fromBar: 7, toBar: 7, kind: "trick", text: "The thumb plays C sharp, the black key just below D. Then the hand opens up to A." },
      ],
      tricky: {
        2: "Fingers 3, 4 and 5 climb G, A and B flat. Then finger 3 comes back to G.",
        6: "The hand walks down from G to D with fingers 5, 4, 3 and 2. The thumb waits over C sharp.",
        10: "Fingers 4 and 5 rock between G and A. Then finger 2 drops to E.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 104,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: `${TUNE} | ${OWN_RARE}`,
      left: `${bars(LILT, `${TUNE_CHORDS}${OWN_CHORDS.slice(0, -2)}`)} | D3+A3/5+1:12`,
      skills: ["two-note-chords", "eighth-notes"],
      practice: [
        { text: "Play the left hand alone: a long low note, then a short chord.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "Each half bar of the left hand has a long note and a short chord. Feel the bounce: long, short." },
        { fromBar: 9, toBar: 15, kind: "rhythm", text: "The quick pairs of eighths are twice as fast as the short notes. Count them evenly." },
        { fromBar: 16, toBar: 16, kind: "fingering", text: "End with D and F together. Fingers 1 and 3 press them as one." },
      ],
      tricky: {
        4: "The thumb holds D for three beats, then finger 4 holds A. The left hand bounces under both.",
        6: "Fingers 5, 4, 3 and 2 walk down from G to D. The left hand moves from G minor to C major.",
        13: "Finger 5 reaches A, then the thumb drops to D. E and F are quick eighths before the next A.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 116,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [TUNE, OWN_EIGHTHS, EPIC_TUNE_AGAIN].join(" | "),
      left: `${bars(BROKEN, `${TUNE_CHORDS}${OWN_EIGHTH_CHORDS}${TUNE_CHORDS.slice(0, -2)}`)} | D2+A2+D3/5+2+1:12`,
      pedal: PEDAL,
      skills: ["broken-chords", "thumb-under", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone until the broken chords roll by themselves.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand alone on bars 9 to 16, and pass the thumb under on the way up.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 9, toBar: 9, kind: "fingering", text: "Pass the thumb under to G after F. Fingers 2 and 3 then reach A and B flat." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        14: "The hand jumps between B flat, G and D, then opens up to C. Finger 2 stays over G the whole bar.",
        19: "The thumb holds C sharp, then slides down to C. The upper finger walks down A, G, F and E.",
        21: "Fingers 1 and 5 hold each sixth and glide down one key at a time. Finger 4 takes the last F.",
      },
    },
    legendary: {
      key: D_MINOR,
      bpm: 126,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [TUNE, OWN_EIGHTHS, LEGENDARY_TUNE_AGAIN].join(" | "),
      left: [bars(STRIDE, TUNE_CHORDS), wide(OWN_EIGHTH_CHORDS), bars(STRIDE, TUNE_CHORDS.slice(0, -2)), "D2+A2+D3/5+2+1:12"].join(" | "),
      pedal: PEDAL,
      skills: ["octave-bass", "arpeggios", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave, then a chord twice, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the left hand's arpeggios alone. They climb two octaves and roll back down.", hands: "left", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "Use the short rest after each octave and chord to jump to the next one." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Let the arpeggios roll up and down like a ship on the waves." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "Play the top note of each chord a little louder, so the tune rings out." },
      ],
      tricky: {
        2: "The left hand jumps from a low octave G to a chord of G, D and G. The right hand climbs G, A and B flat.",
        18: "Lift the hand after each chord, and land on the next. The thumb moves from B flat up to D and back.",
        21: "The thumb stays on D for two chords, then drops to B flat. The top finger sings B flat, A, G and F.",
      },
    },
  },
  de: {
    about:
      "Black Flag Jig ist eine Melodie von uns, im Stil einer Filmmusik zu einem Abenteuer mit Säbeln und Piraten. " +
      "Sie tanzt in einem flotten Sechsachteltakt, wie ein Matrose beim Jig an Deck.",
    funFact: "Ein Jig ist ein lebhafter Tanz, den man in zwei Gruppen zu drei zählt. Er kam im 16. Jahrhundert von den Britischen Inseln.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 4 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. In Takt 7 greift der Daumen hinunter zum Cis.",
          "Jetzt die linke Hand allein. Sie hält zwei Tasten und wechselt sie höchstens zweimal im Takt.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Zähl sechs Schläge in jedem Takt: lang, kurz, lang, kurz. So hüpft ein Jig.",
          "Finger 5 nimmt das B, eine schwarze Taste. Dann spielt er das A am Anfang von Takt 3, und die Finger gehen hinunter.",
          "Der Daumen spielt das Cis, die schwarze Taste direkt unter dem D. Dann öffnet sich die Hand bis zum A.",
        ],
        tricky: {
          2: "Finger 3, 4 und 5 steigen über G, A und B. Dann kehrt Finger 3 zum G zurück.",
          6: "Die Hand geht mit Finger 5, 4, 3 und 2 vom G hinunter zum D. Der Daumen wartet über dem Cis.",
          10: "Finger 4 und 5 wiegen sich zwischen G und A. Dann fällt Finger 2 auf das E.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: erst einen langen tiefen Ton, dann einen kurzen Akkord.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Jeder halbe Takt der linken Hand hat einen langen Ton und einen kurzen Akkord. Spür das Hüpfen: lang, kurz.",
          "Die schnellen Achtelpaare sind doppelt so schnell wie die kurzen Töne. Zähl sie gleichmäßig.",
          "Am Ende spielst du D und F zusammen. Finger 1 und 3 drücken sie wie einen Ton.",
        ],
        tricky: {
          4: "Der Daumen hält das D drei Schläge lang, dann hält Finger 4 das A. Die linke Hand hüpft unter beiden.",
          6: "Finger 5, 4, 3 und 2 gehen vom G hinunter zum D. Die linke Hand wechselt von g-Moll nach C-Dur.",
          13: "Finger 5 erreicht das A, dann fällt der Daumen auf das D. E und F sind schnelle Achtel vor dem nächsten A.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein, bis die gebrochenen Akkorde von selbst rollen.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand, und setz auf dem Weg nach oben den Daumen unter.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Setz nach dem F den Daumen unter zum G. Dann erreichen Finger 2 und 3 das A und das B.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          14: "Die Hand springt zwischen B, G und D und öffnet sich dann bis zum C. Finger 2 bleibt den ganzen Takt über dem G.",
          19: "Der Daumen hält das Cis und rutscht dann hinunter zum C. Der obere Finger geht über A, G, F und E hinunter.",
          21: "Finger 1 und 5 halten jede Sexte und gleiten Taste für Taste hinunter. Finger 4 nimmt das letzte F.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave, dann zweimal einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Arpeggios der linken Hand allein. Sie steigen zwei Oktaven hinauf und rollen wieder hinunter.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause nach jeder Oktave und jedem Akkord, um zum nächsten Griff zu springen.",
          "Lass die Arpeggios auf und ab rollen wie ein Schiff auf den Wellen.",
          "Spiel den oberen Ton jedes Akkords etwas lauter, damit die Melodie klar klingt.",
        ],
        tricky: {
          2: "Die linke Hand springt von einer tiefen Oktave G zu einem Akkord aus G, D und G. Die rechte Hand steigt über G, A und B.",
          18: "Heb die Hand nach jedem Akkord, und lande auf dem nächsten. Der Daumen geht vom B hinauf zum D und zurück.",
          21: "Der Daumen bleibt zwei Akkorde lang auf dem D und fällt dann auf das B. Der obere Finger singt B, A, G und F.",
        },
      },
    },
  },
};

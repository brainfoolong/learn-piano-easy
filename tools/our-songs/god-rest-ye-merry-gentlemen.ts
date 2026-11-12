/**
 * *God Rest Ye Merry, Gentlemen*: the traditional English carol, in four versions of ours.
 *
 * The tune is the whole verse: the opening phrase twice, the middle phrase, then the refrain. The score
 * is in E minor, and the tune here is a fifth lower, in A minor, with G natural throughout. It is in 4/4
 * in eighths, after a bar holding the one-beat pickup. The hook is the pickup bar and the next two.
 *
 * Common plays the tune over held bass notes and open fifths. It drops four notes: B in bar 4, G in bar
 * 7, the quick B in bar 16 and the last D in bar 17. Its hand then moves only three times. Rare plays every
 * note over a bass and a chord. In bars 7 and 8 it splits one A and one D into two eighths, so a finger
 * changes on the repeated key and the hand moves without a jump. Epic crosses the fingers in the runs
 * over a broken-chord bass. Legendary plays the tune an octave up with quick turns over a stride bass,
 * and ends on a full chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The opening phrase in eighths, which the verse plays twice. */
const OPENING = "A3:2 E4:2 E4:2 D4:2 | C4:2 B3:2 A3:2 G3:2 | A3:2 B3:2 C4:2 D4:2";

/** The tune in 4/4, in eighths: the pickup bar, then the nineteen bars of the verse. */
const tune = [
  "r:6 A3:2",
  `${OPENING} | E4:6 A3:2`,
  `${OPENING} | E4:6 E4:2`,
  "F4:2 D4:2 E4:2 F4:2 | G4:2 A4:2 E4:2 D4:2 | C4:2 A3:2 B3:2 C4:2 | D4:4 C4:2 D4:2",
  "E4:4 F4:2 E4:2 | E4:2 D4:2 C4:2 B3:2 | A3:4 C4:1 B3:1 A3:2 | D4:4 C4:2 D4:2",
  "E4:2 F4:2 G4:2 A4:2 | E4:2 D4:2 C4:2 B3:2 | A3:6 r:2",
].join(" | ");

/** `chords`, such as `"aa ag"`: one letter per half bar, a space between bars, each letter from `patterns`. */
function halfBars(patterns: Record<string, string>, chords: string): string {
  return chords
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** Half a bar for Rare, in eighths: the bass on the beat, then one or two notes above it on the next. */
const RARE_BASS: Record<string, string> = {
  a: "A2/5:2 C3+E3/2+1:2",
  f: "A2/5:2 E3/1:2",
  g: "G2/5:2 B2+D3/2+1:2",
  e: "E2/5:2 B2+E3/2+1:2",
  d: "A2/5:2 D3+F3/2+1:2",
  l: "C3/5:2 E3/1:2",
  c: "G2/5:2 C3+E3/2+1:2",
  o: "E2/5:2 G2+C3/2+1:2",
  F: "F2/5:2 A2+C3/2+1:2",
};

/** Half a bar of broken chord for Epic, in eighths: low, high, middle, high. */
const BROKEN: Record<string, string> = {
  a: "A2/5:1 E3/1:1 C3/3:1 E3/1:1",
  f: "A2/5:1 E3/1:1 A2/5:1 E3/1:1",
  g: "G2/5:1 D3/1:1 B2/3:1 D3/1:1",
  c: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  o: "C3/5:1 G3/1:1 C3/5:1 G3/1:1",
  l: "C2/5:1 G2/1:1 E2/3:1 G2/1:1",
  d: "D2/5:1 A2/1:1 F2/3:1 A2/1:1",
  e: "E2/5:1 B2/1:1 G#2/3:1 B2/1:1",
  F: "F2/5:1 C3/1:1 A2/3:1 C3/1:1",
};

/** Half a bar of stride for Legendary, in sixteenths: the root in octaves, then the chord, each with a rest for the jump. */
const STRIDE: Record<string, string> = {
  a: "A1+A2/5+1:2 r:2 C3+E3+A3/5+3+1:2 r:2",
  f: "A1+A2/5+1:2 r:2 A2+E3+A3/5+2+1:2 r:2",
  g: "G1+G2/5+1:2 r:2 B2+D3+G3/5+3+1:2 r:2",
  c: "C2+C3/5+1:2 r:2 C3+E3+G3/5+3+1:2 r:2",
  l: "C2+C3/5+1:2 r:2 C3+E3+G3/5+3+1:2 r:2",
  o: "C2+C3/5+1:2 r:2 C3+G3+C4/5+2+1:2 r:2",
  d: "D2+D3/5+1:2 r:2 D3+F3+A3/5+3+1:2 r:2",
  e: "E1+E2/5+1:2 r:2 B2+E3+G#3/5+2+1:2 r:2",
  F: "F1+F2/5+1:2 r:2 A2+C3+F3/5+3+1:2 r:2",
};

/**
 * The chords of the verse, one letter per half bar of the tune. `a` and `f` are A minor, `c`, `l` and `o`
 * are C, and `g`, `e`, `d` and `F` are G, E, D minor and F. A chord with several letters has several
 * voicings, so the hands never clash.
 */
const CHORDS = "aa fg fg aa aa fg fg ee dd lg aa gg cc ae aa gg oF ae";

/** The opening phrase in the right hand for Epic, in eighths, with a finger crossing each way. */
const EPIC_OPENING = "A3/1:2 E4/3:2 E4/3:2 D4/2:2 | C4/1:2 B3/3:2 A3/2:2 G3/1:2 | A3/2:2 B3/3:2 C4/1:2 D4/2:2";

/** `text` an octave higher. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** `text` with every length doubled, so a line in eighths reads in sixteenths. */
function inSixteenths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

export const godRestYeMerryGentlemen: OurSong = {
  slug: "god-rest-ye-merry-gentlemen",
  title: "God Rest Ye Merry, Gentlemen",
  source: {
    composer: "Traditional",
    died: null,
    published: 1833,
    edition:
      "William Sandys, Christmas Carols Ancient and Modern, London (1833), the traditional English tune; " +
      "the words are on broadsides from about 1760",
  },
  about:
    "God Rest Ye Merry, Gentlemen is one of the oldest English carols still sung today. " +
    "Its words were sold on cheap printed sheets in London from about 1760. " +
    "William Sandys printed the tune in his book of Christmas carols in 1833. " +
    "Its first line once meant: may God grant you peace and happiness.",
  funFact:
    "In Charles Dickens's A Christmas Carol, a boy sings this carol at Scrooge's keyhole. Scrooge chases him away with a ruler.",
  mythic: null,
  collection: "christmas",
  aka: ["God Rest You Merry, Gentlemen"],
  tune: { text: tune, numerator: 4, denominator: 4, steps: 2, key: A_MINOR, hookBars: [1, 3] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [
        "r:12 A3/1:4",
        "A3/1:4 E4/5:4 E4/5:4 D4/4:4 | C4/3:4 B3/2:4 A3/1:3 r:1 G3/1:4 | A3/2:8 C4/3:4 D4/4:4 | E4/5:12 A3/1:4",
        "A3/1:4 E4/5:4 E4/5:4 D4/4:4 | C4/3:4 B3/2:4 A3/1:8 | A3/1:4 B3/2:4 C4/3:4 D4/4:4 | E4/5:12 E4/2:4",
        "F4/3:4 D4/1:4 E4/2:4 F4/3:4 | G4/4:4 A4/5:3 r:1 E4/5:4 D4/4:4 | C4/3:4 A3/1:4 B3/2:4 C4/3:4 | D4/4:8 C4/2:4 D4/3:4",
        "E4/4:8 F4/5:4 E4/4:4 | E4/5:4 D4/4:4 C4/3:4 B3/2:4 | A3/1:8 C4/3:4 A3/1:4 | D4/2:8 C4/1:8",
        "E4/2:4 F4/3:4 G4/4:4 A4/5:4 | E4/3:4 D4/2:4 C4/1:3 r:1 B3/2:4 | A3/1:12 r:4",
      ].join(" | "),
      left: [
        "r:16",
        "A2+E3/4+1:16 | A2+E3/4+1:8 G2+D3/5+2:8 | A2+E3/4+1:8 G2+D3/5+2:8 | A2+E3/4+1:16",
        "A2+E3/4+1:16 | A2+E3/4+1:8 G2+D3/5+2:8 | A2+E3/4+1:8 G2+D3/5+2:8 | C3/3:16",
        "D3/2:16 | C3/3:8 G2+D3/5+2:8 | A2+E3/4+1:16 | G2+D3/5+2:16",
        "A2/4:16 | A2+E3/4+1:8 G2+D3/5+2:8 | A2+E3/4+1:16 | G2+D3/5+2:16",
        "C3/3:16 | A2+E3/4+1:8 G2+D3/5+2:8 | A2+E3/4+1:12 r:4",
      ].join(" | "),
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play the first five bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play bars 10 to 14 with the right hand alone, where the tune climbs to the high A.", hands: "right", speed: 0.6, loop: [10, 14], wait: true },
        { text: "Now the left hand alone. It holds one low note or an open fifth at a time.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 3, kind: "fingering", text: "Your thumb starts on the A below middle C, and the little finger rests on E." },
        { fromBar: 3, toBar: 3, kind: "trick", text: "Lift the hand a moment after the A, and let the thumb drop onto the G below it." },
        { fromBar: 14, toBar: 20, kind: "sound", text: "This is the refrain. Let it ring out a little louder than the verse." },
      ],
      tricky: {
        3: "Fingers 3, 2 and 1 walk down to A. Lift the hand, and the thumb drops onto G.",
        11: "Fingers 4 and 5 climb to the high A. Lift the hand, and the little finger lands on E below it.",
        19: "Fingers 3, 2 and 1 walk down to C. Lift the hand, and finger 2 lands on B.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 108,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "r:6 A3/1:2",
        "A3/1:2 E4/5:2 E4/5:2 D4/4:2 | C4/4:2 B3/3:2 A3/2:2 G3/1:2 | A3/1:2 B3/2:2 C4/3:2 D4/4:2 | E4/5:6 A3/1:2",
        "A3/1:2 E4/5:2 E4/5:2 D4/4:2 | C4/3:2 B3/2:2 A3/1:1 A3/2:1 G3/1:2 | A3/2:2 B3/3:2 C4/4:2 D4/5:1 D4/4:1 | E4/5:6 E4/2:2",
        "F4/3:2 D4/1:2 E4/2:2 F4/3:2 | G4/4:2 A4/5:2 E4/5:2 D4/4:2 | C4/3:2 A3/1:2 B3/2:2 C4/3:2 | D4/4:4 C4/2:2 D4/3:2",
        "E4/4:4 F4/5:2 E4/4:2 | E4/5:2 D4/4:2 C4/3:2 B3/2:2 | A3/1:4 C4/3:1 B3/2:1 A3/1:2 | D4/2:4 C4/1:2 D4/2:2",
        "E4/2:2 F4/3:2 G4/4:2 A4/5:2 | E4/5:2 D4/4:2 C4/3:2 B3/2:2 | A3/1:6 r:2",
      ].join(" | "),
      left: `r:8 | ${halfBars(RARE_BASS, CHORDS)} | A2+E3/5+1:6 r:2`,
      skills: ["eighth-notes", "position-change"],
      practice: [
        { text: "Play the left hand alone: a low note, then the notes above it, twice in each bar.", hands: "left", speed: 0.6, loop: [2, 5], wait: true },
        { text: "Play bars 2 to 5 with the right hand alone. The hand moves twice on the way.", hands: "right", speed: 0.6, loop: [2, 5], wait: true },
        { text: "Play bars 7 and 8 with the right hand alone, where a repeated note helps the hand move.", hands: "right", speed: 0.6, loop: [7, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 3, toBar: 4, kind: "fingering", text: "Finger 4 slides down from D to C. In the next bar, the thumb slides up from G to A." },
        { fromBar: 7, toBar: 8, kind: "trick", text: "Change finger on the second of the two quick A's and D's. The hand then moves without a jump." },
        { fromBar: 16, toBar: 16, kind: "rhythm", text: "C and B share one beat. Count one-and, and play them as two quick, even steps." },
      ],
      tricky: {
        11: "Fingers 4 and 5 climb to the high A. Then the little finger jumps down to E, and finger 4 takes D.",
        18: "Finger 2 slides up from D to E. Then each finger takes the next key, up to the high A.",
        19: "The little finger jumps from the high A down to E. The hand then walks down to B.",
      },
    },
    epic: {
      key: A_MINOR,
      bpm: 100,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "r:6 A3/1:2",
        `${EPIC_OPENING} | E4/3:6 A3/1:2`,
        `${EPIC_OPENING} | E4/3:6 E4/2:2`,
        "F4/3:2 D4/1:2 E4/2:2 F4/3:2 | G4/4:2 A4/5:2 E4/2:2 D4/1:2 | C4/2:2 A3/1:2 B3/2:2 C4/1:2 | D4/2:4 C4/1:2 D4/2:2",
        "E4/3:4 F4/4:2 E4/3:2 | E4/5:2 D4/4:2 C4/3:2 B3/2:2 | A3/1:4 C4/3:1 B3/2:1 A3/1:2 | D4/4:4 C4/3:2 D4/4:2",
        "E4/1:2 F4/2:2 G4/3:2 A4/5:2 | E4/3:2 D4/2:2 C4/1:2 B3/2:2 | A3/1:6 r:2",
      ].join(" | "),
      left: `r:8 | ${halfBars(BROKEN, CHORDS)} | A2+E3/5+1:6 r:2`,
      skills: ["broken-chords", "thumb-under", "finger-over"],
      practice: [
        { text: "Play the left hand alone until the broken chords roll by themselves: low, high, middle, high.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play bars 3 and 4 with the right hand alone, where the fingers cross each way.", hands: "right", speed: 0.6, loop: [3, 4], wait: true },
        { text: "Join the hands on the first nine bars, slowly.", hands: "both", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 19, kind: "sound", text: "Keep the broken chords soft, so the tune sings above them." },
        { fromBar: 3, toBar: 4, kind: "fingering", text: "Going down, finger 3 crosses over the thumb onto B. Going up, the thumb tucks under onto C." },
        { fromBar: 18, toBar: 18, kind: "fingering", text: "The thumb tucks under for E, and the hand climbs to the high A." },
      ],
      tricky: {
        12: "Finger 2 crosses over the thumb onto C. At the end of the bar, the thumb tucks under for C.",
        18: "The thumb tucks under onto E. Fingers 2 and 3 climb, and the little finger reaches the high A.",
        19: "Finger 3 drops to E and walks down to C. Then finger 2 crosses over the thumb onto B.",
      },
    },
    legendary: {
      key: A_MINOR,
      bpm: 96,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [
        "r:12 A4/1:4",
        inSixteenths(octaveUp(EPIC_OPENING)),
        "E5/3:8 F5/4:1 E5/3:1 D5/2:1 E5/3:1 A4/1:4",
        inSixteenths(octaveUp(EPIC_OPENING)),
        "E5/3:8 G5/5:1 F5/4:1 E5/3:1 D5/1:1 E5/2:4",
        "F5/3:4 D5/1:4 E5/2:4 F5/3:4 | G5/4:4 A5/5:4 E5/2:4 D5/1:4 | C5/2:4 A4/1:4 B4/2:4 C5/1:4",
        "D5/2:6 E5/3:1 D5/2:1 C5/1:4 D5/2:4 | E5/3:8 F5/4:4 E5/3:4 | E5/5:4 D5/4:4 C5/3:4 B4/2:4",
        "A4/1:8 C5/3:2 B4/2:2 A4/1:4 | D5/4:6 E5/5:1 D5/4:1 C5/3:4 D5/4:4",
        "E5/1:4 F5/2:4 G5/3:4 A5/5:4 | E5/3:4 D5/2:4 C5/1:4 B4/2:2 r:2 | A3+C4+E4+A4/1+2+3+5:12 r:4",
      ].join(" | "),
      left: `r:16 | ${halfBars(STRIDE, CHORDS)} | A1+A2/5+1:12 r:4`,
      pedal: ["r:16", ...Array(18).fill("P:8 P:8"), "P:12 r:4"].join(" | "),
      skills: ["stride", "sixteenth-notes", "pedal"],
      practice: [
        { text: "Play the stride bass alone: jump down for the low octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand alone on bars 4 to 6, and keep the quick turn light.", hands: "right", speed: 0.5, loop: [4, 6], wait: true },
        { text: "Join the hands on the first nine bars at half speed.", hands: "both", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 19, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 5, toBar: 5, kind: "sound", text: "The quick turn around E is a decoration. Play it softer than the tune." },
        { fromBar: 19, toBar: 20, kind: "sound", text: "Lift the hand after the B, then land on the last chord with both hands together." },
      ],
      tricky: {
        9: "The turn starts on the high G. Fingers 5, 4, 3 and the thumb run down, then finger 2 takes E.",
        15: "Change to the little finger on the repeated E, and walk down one finger per key. The left hand jumps to the low E.",
        19: "Finger 2 crosses over the thumb for B. Play it short, and move the hand down for the last chord.",
      },
    },
  },
};

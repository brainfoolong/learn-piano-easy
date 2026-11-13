/**
 * *Adagietto*: the first violins' theme from the fourth movement of Mahler's Fifth Symphony, in four
 * versions of ours.
 *
 * The tune is the theme as a scanned book of orchestral themes on Wikimedia Commons prints it on its
 * page 405. The print is in 4/4 and F major, with eighths. After two bars of harp, the first violins
 * enter with three eighths, C, D and E, as an upbeat. The tune is that upbeat and the seven bars after
 * it, to the whole-note G of the last. It writes every eighth as a quarter, so each print bar is a bar of
 * 4/2. Bar 1 holds the upbeat after a rest. The hook is the upbeat bar and the three bars after it.
 *
 * Our chords, one or two per bar, are F, C, D minor and B-flat major, then G major and G minor in bar 5.
 * A D7 in bar 6 leads to G minor, and C major and C7 carry the tune's last G. The tune ends on the
 * dominant, so our own bars after it close on F. Every version keeps F major.
 *
 * Common plays the tune and four bars of our own over single bass notes and open fifths, held. Rare
 * plays a low note on each beat and a two-note chord on the next, with eight bars of our own. Epic rolls
 * an Alberti bass with the pedal under the tune and our eight bars. It then plays the tune again with
 * thirds and sixths under its long notes, and closes on F. Legendary plays an octave bass and a chord on
 * each beat, arpeggios over two octaves under our bars, and the tune again an octave up in chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const F_MAJOR: Key = { tonic: 5, mode: "major" };

/** The tune in 4/2, in quarters, which are the print's eighths: one bar per print bar, after the upbeat. */
const tune = "r:5 C4:1 D4:1 E4:1 | E4:2 F4:3 F4:1 Bb4:1 A4:1 | A4:2 G4:3 G4:1 A4:1 Bb4:1 | C5:3 C5:1 D5:3 C5:1 | C5:2 B4:3 Bb4:1 D5:1 Bb4:1 | Bb4:2 A4:3 C5:1 Bb4:1 F#4:1 | F#4:1 G4:1 Bb4:3 A4:1 G4:1 F4:1 | G4:8";

/** The tune in 4/2 quarters, fingered. The thumb takes the repeated F in bar 2, so the hand never shifts. */
const TUNE_RIGHT = [
  "r:5 C4/1:1 D4/2:1 E4/3:1",
  "E4/3:2 F4/4:3 F4/1:1 Bb4/4:1 A4/3:1",
  "A4/3:2 G4/2:3 G4/2:1 A4/3:1 Bb4/4:1",
  "C5/5:3 C5/4:1 D5/5:3 C5/4:1",
  "C5/4:2 B4/3:3 Bb4/2:1 D5/5:1 Bb4/2:1",
  "Bb4/2:2 A4/1:3 C5/3:1 Bb4/2:1 F#4/1:1",
  "F#4/1:1 G4/2:1 Bb4/4:3 A4/3:1 G4/2:1 F4/1:1",
  "G4/2:8",
].join(" | ");

/** Our eight bars after the tune, in 4/2 quarters, closing on F. */
const OWN = [
  "A4/3:3 G4/1:1 A4/2:2 C5/4:2",
  "D5/5:3 C5/4:1 Bb4/3:2 A4/2:2",
  "G4/1:3 A4/2:1 Bb4/3:2 D5/5:2",
  "C5/4:4 A4/2:2 G4/1:2",
  "A4/2:3 Bb4/3:1 C5/4:2 A4/2:2",
  "Bb4/4:3 A4/3:1 G4/2:2 Bb4/4:2",
  "A4/3:2 C5/5:2 Bb4/4:2 G4/2:2",
  "F4/1:8",
].join(" | ");

/** Our eight bars in 4/2 eighths, with a few passing notes, for Epic and Legendary. */
const OWN_EIGHTHS = [
  "A4/3:6 G4/1:2 A4/2:2 Bb4/3:2 C5/4:4",
  "D5/5:6 C5/4:2 Bb4/3:4 A4/2:4",
  "G4/1:6 A4/2:2 Bb4/3:2 C5/4:2 D5/5:4",
  "C5/4:8 A4/2:4 G4/1:4",
  "A4/2:6 Bb4/3:2 C5/4:4 A4/2:4",
  "Bb4/4:6 A4/3:2 G4/2:2 A4/3:2 Bb4/4:4",
  "A4/3:4 C5/5:4 Bb4/4:4 G4/2:4",
  "F4/1:16",
].join(" | ");

/** Epic's tune again in 4/2 eighths, with a third or a sixth under its long notes, closing on F. */
const EPIC_AGAIN = [
  "A4/3:6 G4/2:2 F4/1:2 C4/1:2 D4/2:2 E4/3:2",
  "C4+E4/1+3:4 A3+F4/1+5:6 F4/1:2 Bb4/4:2 A4/3:2",
  "F4+A4/1+3:4 G4/2:6 G4/2:2 A4/3:2 Bb4/4:2",
  "A4+C5/2+5:6 C5/5:2 Bb4+D5/3+5:6 C5/4:2",
  "G4+C5/1+4:4 G4+B4/1+3:6 Bb4/2:2 D5/5:2 Bb4/2:2",
  "G4+Bb4/1+3:4 A4/2:6 C5/4:2 Bb4/3:2 F#4/1:2",
  "F#4/1:2 G4/2:2 D4+Bb4/1+5:6 A4/4:2 G4/3:2 F4/2:2",
  "E4+G4/1+3:8 Bb3+E4+G4/1+3+5:8",
  "A3+C4+F4/1+2+5:16",
].join(" | ");

/** Legendary's tune again in 4/2 eighths, an octave up, with its long notes in chords. */
const LEGENDARY_AGAIN = [
  "A4/3:6 G4/2:2 F4/1:2 C5/1:2 D5/2:2 E5/3:2",
  "C5+E5/1+3:4 C5+F5/2+5:6 F5/2:2 Bb5/4:2 A5/3:2",
  "D5+F5+A5/1+2+4:4 G5/3:6 G5/3:2 A5/4:2 Bb5/5:2",
  "F5+A5+C6/1+3+5:6 C6/5:2 F5+Bb5+D6/1+3+5:6 C6/5:2",
  "D5+G5+C6/1+3+5:4 D5+G5+B5/1+3+5:6 Bb5/4:2 D6/5:2 Bb5/3:2",
  "D5+G5+Bb5/1+3+5:4 A5/4:6 C6/5:2 Bb5/4:2 F#5/1:2",
  "F#5/1:2 G5/2:2 D5+G5+Bb5/1+3+5:6 A5/4:2 G5/3:2 F5/2:2",
  "C5+E5+G5/1+2+4:8 Bb4+C5+E5+G5/1+2+3+5:7 r:1",
  "F4+A4+C5+F5/1+2+3+5:16",
].join(" | ");

/**
 * The chords under the tune, two per bar. f, c, d, b, g and G are F, C, D minor, B flat, G minor and
 * G major. C is C7, q is G minor without its third, D is D7, and h is G minor over B flat or D.
 */
const TUNE_CHORDS = "ffcbdcfbGgqDhCcC";

/** The chords under our eight bars, two per bar. */
const OWN_CHORDS = "ffbfggfcfdbgfCff";

/** Bars of `patterns` from `chords`, such as `"ffcf"`: one letter per half bar, two per bar. */
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

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** Common's left hand in quarters, one bar per entry: an open fifth or one bass note, held. */
const COMMON_LEFT = [
  "F2+C3/5+1:8 | C3/1:4 F2+C3/5+1:4 | A2/3:4 C3/1:4 | F2+C3/5+1:4 Bb2/2:4",
  "G2/4:8 | G2/4:4 C3/1:4 | Bb2/2:4 C3/1:4 | G2+C3/4+1:8",
  "F2+C3/5+1:8 | Bb2/2:4 F2+C3/5+1:4 | G2/4:4 C3/1:4 | F2+C3/5+1:8",
].join(" | ");

/** Common's last four bars in quarters, which close the song on F. */
const COMMON_CLOSE = "A4/3:3 G4/1:1 A4/2:2 C5/4:2 | D5/5:3 C5/4:1 Bb4/3:2 A4/2:2 | Bb4/4:2 A4/3:2 G4/2:2 E4/1:2 | F4/2:8";

/** Rare's half bar in quarters: a low note on the beat, then a two-note chord. */
const PULSE: Record<string, string> = {
  f: "F2/5:2 A2+C3/3+1:2",
  c: "E2/5:2 G2+C3/3+1:2",
  C: "E2/5:2 G2+Bb2+C3/3+2+1:2",
  d: "F2/5:2 A2+D3/3+1:2",
  b: "F2/5:2 Bb2+D3/2+1:2",
  g: "G2/5:2 Bb2+D3/3+1:2",
  q: "G2/5:2 D3+G3/2+1:2",
  D: "D3/2:2 C3/3:2",
  h: "Bb2/4:2 D3+G3/2+1:2",
  k: "C3/2:2 G2+Bb2/4+3:2",
  e: "C3/2:2 G2+E3/4+1:2",
};

/** Rare's chords under the tune. Bars 7 and 8 play C on the beat, as k and e, so the hand stays near C. */
const RARE_TUNE_CHORDS = TUNE_CHORDS.replace("Gg", "qg").replace("hCcC", "hkee");

/** Epic's half bar in eighths: an Alberti group, low, high, middle, high, twice. */
const ALBERTI: Record<string, string> = {
  f: "F2/5:1 C3/1:1 A2/3:1 C3/1:1",
  c: "C2/5:1 C3/1:1 G2/2:1 C3/1:1",
  C: "C2/5:1 Bb2/1:1 G2/2:1 Bb2/1:1",
  d: "D2/5:1 A2/1:1 F2/3:1 A2/1:1",
  b: "F2/5:1 D3/1:1 Bb2/2:1 D3/1:1",
  g: "G2/5:1 D3/1:1 Bb2/2:1 D3/1:1",
  G: "G2/5:1 D3/1:1 B2/2:1 D3/1:1",
  q: "G2/5:1 D3/1:1 G2/5:1 D3/1:1",
  D: "F#2/5:1 D3/1:1 C3/2:1 D3/1:1",
  h: "D2/5:1 Bb2/1:1 G2/2:1 Bb2/1:1",
};
for (const chord of Object.keys(ALBERTI)) ALBERTI[chord] = `${ALBERTI[chord]} ${ALBERTI[chord]}`;

/** Legendary's half bar in eighths: an octave on the beat, a chord on the next, each with a rest to jump. */
const STRIDE: Record<string, string> = {
  f: "F1+F2/5+1:3 r:1 A2+C3+F3/5+3+1:3 r:1",
  c: "C2+C3/5+1:3 r:1 G2+C3+G3/5+4+1:3 r:1",
  C: "C2+C3/5+1:3 r:1 G2+Bb2+E3/5+4+1:3 r:1",
  d: "D2+D3/5+1:3 r:1 F2+A2+D3/5+3+1:3 r:1",
  b: "Bb1+Bb2/5+1:3 r:1 F2+Bb2+D3/5+3+1:3 r:1",
  g: "G1+G2/5+1:3 r:1 G2+Bb2+D3/5+3+1:3 r:1",
  G: "G1+G2/5+1:3 r:1 G2+B2+D3/5+3+1:3 r:1",
  q: "G1+G2/5+1:3 r:1 G2+D3+G3/5+2+1:3 r:1",
  D: "D2+D3/5+1:3 r:1 F#2+C3+D3/5+2+1:3 r:1",
  h: "Bb1+Bb2/5+1:3 r:1 G2+D3+G3/5+2+1:3 r:1",
};

/** The six notes of each chord over two octaves, for Legendary's arpeggios. */
const WIDE_NOTES: Record<string, string> = {
  f: "F1 C2 F2 A2 C3 F3",
  b: "Bb1 F2 Bb2 D3 F3 Bb3",
  g: "G1 D2 G2 Bb2 D3 G3",
  c: "C2 G2 C3 E3 G3 C4",
  C: "C2 G2 C3 E3 G3 Bb3",
  d: "D2 A2 D3 F3 A3 D4",
};

/** Legendary's half bar of arpeggio in eighths: up two octaves and back one note, then a rest to jump. */
const WIDE: Record<string, string> = {};
for (const [chord, notes] of Object.entries(WIDE_NOTES)) {
  const pitches = notes.split(" ");
  const fingers = [5, 2, 1, 3, 2, 1];
  WIDE[chord] = `${[0, 1, 2, 3, 4, 5, 4].map((at) => `${pitches[at]}/${fingers[at]}:1`).join(" ")} r:1`;
}

/** A pedal line of 25 bars, changed on every half bar, and held through the last. */
const PEDAL = `${Array(24).fill("P:8 P:8").join(" | ")} | P:16`;

export const mahlerAdagietto: OurSong = {
  slug: "mahler-adagietto",
  title: "Adagietto",
  aka: ["Mahler Adagietto", "Symphony No. 5", "Sinfonie Nr. 5", "Death in Venice", "Tod in Venedig"],
  source: {
    composer: "Gustav Mahler",
    died: 1911,
    published: 1904,
    edition:
      "Symphony No. 5, Adagietto, the first violins' theme, its upbeat and bars 1 to 7, as a scanned book of orchestral themes on Wikimedia Commons prints it on its page 405; Edition Peters published the symphony in 1904",
  },
  about:
    "The Adagietto is the slow fourth movement of Mahler's Fifth Symphony, first played in Cologne in 1904. " +
    "Luchino Visconti's 1971 film Death in Venice made it famous far beyond the concert hall.",
  funFact: "Since that film, it has become the best known music Mahler ever wrote.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: F_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: F_MAJOR,
      bpm: 100,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: `${TUNE_RIGHT} | ${COMMON_CLOSE}`,
      left: COMMON_LEFT,
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. Bar 5 has a B, and bars 6 and 7 an F sharp.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds each note for half a bar or a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "Count five quarters of rest. Then C, D and E lead softly into the tune." },
        { fromBar: 2, toBar: 2, kind: "fingering", text: "Play the second F with the thumb. Then fingers 4 and 3 reach B flat and A." },
        { fromBar: 1, toBar: 12, kind: "sound", text: "This music is slow and tender. Let every long note sing, and never hurry." },
      ],
      tricky: {
        4: "Play the first C with finger 5, then repeat it with finger 4. Finger 5 then takes D.",
        5: "The B is a white key, and the B flat after it is black. Fingers 3 and 2 play them.",
        11: "Fingers 4, 3 and 2 walk down from B flat to G. Then the thumb takes E.",
      },
    },
    rare: {
      key: F_MAJOR,
      bpm: 104,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: `${TUNE_RIGHT} | ${OWN}`
        .replace("D5/5:3 C5/4:1 Bb4/3:2 A4/2:2", "Bb4+D5/3+5:3 C5/4:1 Bb4/3:2 A4/2:2")
        .replace("C5/4:4 A4/2:2", "A4+C5/2+4:4 A4/2:2"),
      left: `${bars(PULSE, `${RARE_TUNE_CHORDS}${OWN_CHORDS.slice(0, -2)}`)} | F2+A2+C3/5+3+1:8`,
      skills: ["two-note-chords", "triads"],
      practice: [
        { text: "Play the left hand alone. A low note comes on the beat, and a chord answers it.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "The left hand plays on every beat: a low note, then a chord. Count it as one, two." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the left hand very soft, so the tune floats above it." },
        { fromBar: 10, toBar: 10, kind: "fingering", text: "Fingers 3 and 5 press B flat and D together. Let D sing a little more." },
      ],
      tricky: {
        5: "The B is a white key, and the B flat after it is black. The left hand plays only G and D at first.",
        7: "The thumb plays F sharp first and F at the end. The left hand moves from B flat to C halfway.",
        14: "Finger 4 plays B flat twice in this bar. The left hand moves from F to G halfway.",
      },
    },
    epic: {
      key: F_MAJOR,
      bpm: 108,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [inEighths(TUNE_RIGHT), OWN_EIGHTHS, EPIC_AGAIN].join(" | "),
      left: `${bars(ALBERTI, `${TUNE_CHORDS}${OWN_CHORDS}${TUNE_CHORDS}`)} | F2+C3+F3/5+2+1:16`,
      pedal: PEDAL,
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [18, 21], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Keep the Alberti bass soft and even, like a harp under the violins." },
        { fromBar: 18, toBar: 24, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        18: "The thumb drops from C to A for the sixth. Then it moves up to F for the single notes.",
        23: "Spread the hand from D to B flat for the sixth. Then fingers 4, 3 and 2 walk down to F.",
        24: "The thumb moves down from E to B flat, while fingers 3 and 5 take E and G.",
      },
    },
    legendary: {
      key: F_MAJOR,
      bpm: 112,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [inEighths(TUNE_RIGHT), OWN_EIGHTHS, LEGENDARY_AGAIN].join(" | "),
      left: [bars(STRIDE, TUNE_CHORDS), bars(WIDE, OWN_CHORDS), bars(STRIDE, TUNE_CHORDS), "F1+C2+F2/5+2+1:16"].join(" | "),
      pedal: PEDAL,
      skills: ["octave-bass", "arpeggios", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then a chord, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the left hand's arpeggios alone. The thumb passes under, and finger 3 crosses over.", hands: "left", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [18, 21], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "Use the short rest after each octave and chord to jump to the next one." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Let the arpeggios flow softly under the tune, and change the pedal on each new chord." },
        { fromBar: 18, toBar: 24, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        14: "The left hand climbs two octaves from B flat, then from G. Finger 3 crosses over the thumb each time.",
        16: "The right hand holds F for the whole bar, while the left hand climbs from F twice.",
        17: "After the F, the thumb jumps up to C. Then fingers 2 and 3 climb to D and E.",
      },
    },
  },
  de: {
    about:
      "Das Adagietto ist der langsame vierte Satz von Mahlers Fünfter Sinfonie, die 1904 in Köln zum ersten Mal erklang. " +
      "Luchino Viscontis Film Tod in Venedig von 1971 machte es weit über den Konzertsaal hinaus berühmt.",
    funFact: "Seit diesem Film ist es die bekannteste Musik, die Mahler je geschrieben hat.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. In Takt 5 kommt ein H, in den Takten 6 und 7 ein Fis.",
          "Jetzt die linke Hand allein. Sie hält jeden Ton einen halben oder einen ganzen Takt lang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Zähl fünf Viertel Pause. Dann führen C, D und E leise in die Melodie.",
          "Spiel das zweite F mit dem Daumen. Dann erreichen Finger 4 und 3 das B und das A.",
          "Diese Musik ist langsam und zart. Lass jeden langen Ton singen, und eil nie.",
        ],
        tricky: {
          4: "Spiel das erste C mit Finger 5, und wiederhol es mit Finger 4. Dann nimmt Finger 5 das D.",
          5: "Das H ist eine weiße Taste, und das B danach ist schwarz. Finger 3 und 2 spielen sie.",
          11: "Finger 4, 3 und 2 gehen vom B hinunter zum G. Dann nimmt der Daumen das E.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Auf dem Schlag kommt ein tiefer Ton, und ein Akkord antwortet.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand spielt auf jedem Schlag: erst einen tiefen Ton, dann einen Akkord. Zähl dazu eins, zwei.",
          "Spiel die linke Hand sehr leise, damit die Melodie darüber schwebt.",
          "Finger 3 und 5 drücken B und D zusammen. Lass das D etwas mehr singen.",
        ],
        tricky: {
          5: "Das H ist eine weiße Taste, und das B danach ist schwarz. Die linke Hand spielt zuerst nur G und D.",
          7: "Der Daumen spielt zuerst das Fis und am Ende das F. Die linke Hand wechselt in der Mitte vom B zum C.",
          14: "Finger 4 spielt das B in diesem Takt zweimal. Die linke Hand wechselt in der Mitte vom F zum G.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Spiel den Alberti-Bass leise und gleichmäßig, wie eine Harfe unter den Geigen.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          18: "Der Daumen fällt für die Sexte vom C zum A. Dann geht er für die einzelnen Töne hinauf zum F.",
          23: "Spann die Hand für die Sexte vom D bis zum B. Dann gehen Finger 4, 3 und 2 hinunter zum F.",
          24: "Der Daumen geht vom E hinunter zum B, während Finger 3 und 5 das E und das G nehmen.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Arpeggios der linken Hand allein. Der Daumen geht unter, und Finger 3 kreuzt darüber.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause nach jeder Oktave und jedem Akkord, um zum nächsten Griff zu springen.",
          "Lass die Arpeggios leise unter der Melodie fließen, und wechsle das Pedal bei jedem neuen Akkord.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          14: "Die linke Hand steigt zwei Oktaven vom B hinauf, dann vom G. Finger 3 kreuzt jedes Mal über den Daumen.",
          16: "Die rechte Hand hält das F den ganzen Takt, während die linke Hand zweimal vom F hinaufsteigt.",
          17: "Nach dem F springt der Daumen hinauf zum C. Dann steigen Finger 2 und 3 zum D und E.",
        },
      },
    },
  },
};

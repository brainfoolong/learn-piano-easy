/**
 * *Last Horizon*: a tune of our own, in the style of a modern film score, in four versions of ours.
 *
 * The tune is ours, written for this app, so it has no print. It is eight bars of slow 4/4 in C minor. It
 * sighs from G up to A flat and back, falls to C, and climbs back to G at bar 4. It then walks down to
 * C, over the leading note B. The hook is bars 1 to 4.
 *
 * Its range is B3 to A flat 4, and every note lies in C minor with its raised seventh. Our chords are one
 * to a bar: C minor, A flat major, B flat major, E flat major, F minor, C minor, G major and C minor.
 * Every version plays the tune, then 8 bars of our own over A flat, B flat, C minor, G major and F minor.
 * Epic and Legendary then play the tune a last time in fuller chords. Every version closes on the
 * tonic minor.
 *
 * C minor has three flats, so Common and Rare move the song up to D minor. Epic and Legendary keep C
 * minor.
 *
 * Common plays the tune over held bass notes and two open fifths, one bar each, in one hand position. It
 * leaves out one E of bar 6, so the hand never moves after a short note. Rare plays a slow figure in the
 * left hand, a root and its fifth in turn, and adds eighths and two-note chords in our own bars. Epic
 * rolls a broken chord in eighths under the tune with the pedal, passes the thumb under in our bars, and
 * plays the tune again in chords. Legendary rolls the same figure in eighths under the tune an octave up,
 * then in sixteenths under held chords. Its last statement plays the tune in chords of four notes.
 */
import { handMove, type Finger } from "../../src/theory/fingering";
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";
import { pitchOf } from "../song-notation";

/** The tune's own key, which Epic and Legendary keep. */
const C_MINOR: Key = { tonic: 0, mode: "minor" };

/** The key Common and Rare move the song to. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 4/4, in quarters. */
const tune = "G4:2 Ab4:1 G4:1 | Eb4:3 C4:1 | D4:2 Eb4:1 F4:1 | G4:4 | Ab4:2 G4:1 F4:1 | Eb4:2 D4:1 C4:1 | D4:2 B3:2 | C4:4";

/** Common's right hand in D minor quarters: the tune without the E of bar 6, then our own eight bars. */
const COMMON_RIGHT = [
  "A4/4:2 Bb4/5:1 A4/4:1 | F4/2:3 D4/1:1 | E4/2:2 F4/3:1 G4/4:1 | A4/5:4",
  "Bb4/5:2 A4/4:1 G4/3:1 | F4/2:3 D4/1:1 | E4/2:2 C#4/1:2 | D4/2:4",
  "F4/4:2 E4/3:1 D4/2:1 | E4/3:2 F4/4:1 G4/5:1 | F4/4:3 D4/2:1 | E4/3:4",
  "F4/4:2 G4/5:1 F4/4:1 | E4/3:2 D4/2:1 E4/3:1 | F4/4:1 E4/3:1 D4/2:1 C#4/1:1 | D4/2:4",
].join(" | ");

/** Common's left hand in quarters: one held root or open fifth a bar, the hand still from F2 to D3. */
const COMMON_LEFT = [
  "D3/1:4 | Bb2/3:4 | C3/2:4 | F2+C3/5+2:4 | G2+D3/4+1:4 | D3/1:4 | A2/3:4 | D3/1:4",
  "Bb2/3:4 | C3/2:4 | D3/1:4 | A2/3:4 | G2+D3/4+1:4 | C3/2:4 | A2/3:4 | D3/1:4",
].join(" | ");

/** Rare's right hand in D minor eighths: every note of the tune, then our own bars with eighths. */
const RARE_RIGHT = [
  "A4/4:4 Bb4/5:2 A4/4:2 | F4/2:6 D4/1:2 | E4/2:4 F4/3:2 G4/4:2 | A4/5:8",
  "Bb4/5:4 A4/4:2 G4/3:2 | F4/3:4 E4/2:2 D4/1:2 | E4/2:4 C#4/1:4 | D4/2:8",
  "F4/4:4 E4/3:2 D4/2:1 E4/3:1 | E4/3:4 F4/4:2 G4/5:2 | F4/4:2 E4/3:1 D4/2:1 F4/4:4 | C#4+E4/1+3:8",
  "D4/2:2 E4/3:1 F4/4:1 G4/5:4 | F4/4:4 E4/3:2 D4/2:2 | E4/3:2 D4/2:1 C#4/1:1 E4/3:4 | D4+F4/2+4:8",
].join(" | ");

/** Rare's figure in eighths: a root and its fifth in turn, a quarter each. */
const FIGURE: Record<string, string> = {
  d: "D3/5:2 A3/1:2 D3/5:2 A3/1:2",
  b: "Bb2/5:2 F3/1:2 Bb2/5:2 F3/1:2",
  c: "C3/5:2 G3/1:2 C3/5:2 G3/1:2",
  /** The C figure before F, whose last fifth is cut short so the hand can drop to F in the rest. */
  k: "C3/5:2 G3/1:2 C3/5:2 G3/1:1 r:1",
  f: "F2/5:2 C3/1:2 F2/5:2 C3/1:2",
  g: "G2/5:2 D3/1:2 G2/5:2 D3/1:2",
  a: "A2/5:2 E3/1:2 A2/5:2 E3/1:2",
};

/** Rare's left hand: the figure under each bar, one chord a bar, and a held D minor fifth to close. */
const RARE_LEFT = `${[..."dbkfgdadbcdagca"].map((chord) => FIGURE[chord]).join(" | ")} | D3+A3/5+1:8`;

/** Epic's right hand in C minor eighths: the tune, with the thumb passing under after it. */
const TUNE_C = [
  "G4/4:4 Ab4/5:2 G4/4:2 | Eb4/2:6 C4/1:2 | D4/2:4 Eb4/3:2 F4/4:2 | G4/5:8",
  "Ab4/5:4 G4/4:2 F4/3:2 | Eb4/3:4 D4/2:2 C4/1:2 | D4/2:4 B3/1:4 | C4/2:8",
].join(" | ");

/** Epic's eight bars of our own in eighths, with the thumb passing under. */
const EPIC_OWN = [
  "Eb4/1:2 F4/2:1 G4/3:1 Ab4/4:4 | Bb4/5:2 Ab4/4:1 G4/3:1 F4/2:4",
  "C4/1:1 D4/2:1 Eb4/3:1 F4/1:1 G4/2:2 C5/4:2 | D5/5:2 B4/4:2 G4/2:2 F4/1:2",
  "Ab4/3:2 G4/2:1 F4/1:1 Ab4/2:2 C5/4:2 | D5/5:2 C5/4:1 Bb4/3:1 Ab4/2:2 F4/1:2",
  "G4/1:1 B4/3:1 D5/5:2 C5/4:1 B4/3:1 G4/2:1 F4/1:1 | G4/2:4 Eb4/1:4",
].join(" | ");

/** Epic's tune again, held in chords of two and three notes on its long notes, the tune on top. */
const EPIC_TUNE_AGAIN = [
  "C4+Eb4+G4/1+2+4:4 Ab4/5:2 G4/4:2 | Ab3+C4+Eb4/1+2+4:6 C4/2:2",
  "Bb3+D4/1+2:4 Eb4/3:2 F4/4:2 | Bb3+Eb4+G4/1+2+5:8",
  "C4+F4+Ab4/1+3+5:4 G4/4:2 F4/3:2 | G3+C4+Eb4/1+2+3:4 D4/2:2 C4/1:2",
  "G3+B3+D4/1+2+4:4 G3+B3/1+3:4 | G3+C4/1+3:8",
].join(" | ");

/** The four notes of each chord's broken figure in the left hand: root, third, fifth and octave. */
const CHORD_NOTES: Record<string, [string, string, string, string]> = {
  c: ["C2", "Eb2", "G2", "C3"],
  a: ["Ab1", "C2", "Eb2", "Ab2"],
  b: ["Bb1", "D2", "F2", "Bb2"],
  e: ["Eb2", "G2", "Bb2", "Eb3"],
  f: ["F2", "Ab2", "C3", "F3"],
  g: ["G1", "B1", "D2", "G2"],
};

/** One note of the left hand's figure and its finger. */
type Tone = [string, Finger];

/**
 * The figure of one half bar. A lower-case letter rolls root, fifth, octave, fifth, once in eighths or
 * on every beat in sixteenths. An upper-case one starts on the third instead, wherever the third rubs
 * against no tune note.
 */
function halfFigure(letter: string, everyBeat: boolean): Tone[] {
  const notes = CHORD_NOTES[letter.toLowerCase()];
  if (notes === undefined) throw new Error(`No figure for chord ${letter}`);
  const [root, third, fifth, octave] = notes;
  const first: Tone = letter === letter.toLowerCase() ? [root, 5] : [third, 4];
  const beat: Tone[] = [first, [fifth, 2], [octave, 1], [fifth, 2]];
  return everyBeat ? [...beat, [root, 5], ...beat.slice(1)] : beat;
}

/** A stretch of the left hand's figure: its chords, one letter per half bar, and each note's units. */
interface Stretch {
  chords: string;
  units: number;
  everyBeat: boolean;
}

/**
 * The left hand's rolled figure over `stretches`, two half bars per bar. A half bar whose last fifth lies
 * too far from the next half bar's first note ends on its root instead, so finger 5 moves from root to root.
 */
function rolled(...stretches: Stretch[]): string {
  const halves = stretches.flatMap(({ chords, units, everyBeat }) =>
    [...chords].map((letter) => ({ letter, units, tones: halfFigure(letter, everyBeat) })),
  );
  halves.forEach(({ letter, tones }, at) => {
    const next = halves[at + 1]?.tones[0];
    const [note, finger] = tones[tones.length - 1]!;
    if (next !== undefined && handMove("left", finger, pitchOf(note), next[1], pitchOf(next[0])).pastPractical) {
      tones[tones.length - 1] = [CHORD_NOTES[letter.toLowerCase()]![0], 5];
    }
  });
  const text = halves.map(({ units, tones }) => tones.map(([note, finger]) => `${note}/${finger}:${units}`).join(" "));
  const lines: string[] = [];
  for (let at = 0; at < text.length; at += 2) lines.push(text.slice(at, at + 2).join(" "));
  return lines.join(" | ");
}

/** The chords under the tune, two per bar, as `figures` reads them. */
const TUNE_CHORDS = "cCaAbbeEffccgGcC";

/** The chords under our eight bars, two per bar. */
const OWN_CHORDS = "aAbBcCgGfFbBggcC";

/** The last bar of Epic and Legendary in the left hand: a low C minor chord. */
const LAST_LEFT = "C2+G2+C3/5+2+1";

/** Legendary's tune an octave up, with a held third or chord under its long notes. */
const LEGENDARY_TUNE = [
  "Eb5+G5/2+4:8 Ab5/5:4 G5/4:4 | Ab4+C5+Eb5/1+2+4:12 C5/2:4",
  "Bb4+D5/1+3:8 Eb5/4:4 F5/5:4 | Bb4+Eb5+G5/1+2+5:16",
  "C5+F5+Ab5/1+3+5:8 G5/4:4 F5/3:4 | G4+C5+Eb5/1+2+3:8 D5/2:4 C5/1:4",
  "G4+B4+D5/1+2+4:8 G4+B4/1+3:8 | Eb4+G4+C5/1+2+5:16",
].join(" | ");

/** Legendary's eight bars of our own in sixteenths, Epic's line with chords held on its strong notes. */
const LEGENDARY_OWN = [
  "Eb4/1:4 F4/2:2 G4/3:2 C4+Eb4+Ab4/1+2+4:8 | D4+F4+Bb4/1+2+5:4 Ab4/4:2 G4/3:2 Bb3+D4+F4/1+2+3:8",
  "C4/1:2 D4/2:2 Eb4/3:2 F4/1:2 G4/2:4 Eb4+G4+C5/1+2+4:4 | G4+B4+D5/1+2+5:4 B4/4:4 G4/2:4 F4/1:4",
  "C4+F4+Ab4/1+2+4:4 G4/3:2 F4/2:2 Ab4/3:4 F4+Ab4+C5/1+3+5:4 | F4+Bb4+D5/1+3+5:4 C5/4:2 Bb4/3:2 Ab4/2:4 D4+F4/1+2:4",
  "G4/1:2 B4/3:2 D5/5:4 C5/4:2 B4/3:2 G4/2:2 F4/1:2 | C4+Eb4+G4/1+2+4:8 G3+C4+Eb4/1+2+4:6 r:2",
].join(" | ");

/** Legendary's last statement of the tune, an octave up in chords of three and four notes. */
const LEGENDARY_LAST = [
  "G4+C5+Eb5+G5/1+2+3+5:8 Ab4+C5+F5+Ab5/1+2+3+5:4 G4+C5+Eb5+G5/1+2+3+5:2 r:2",
  "Eb4+Ab4+C5+Eb5/1+2+3+5:12 Eb4+Ab4+C5/1+2+4:4",
  "F4+Bb4+D5/1+2+4:8 G4+Bb4+Eb5/1+2+4:4 F4+Bb4+D5+F5/1+2+3+5:4",
  "Bb4+Eb5+G5/1+3+5:16",
  "Ab4+C5+F5+Ab5/1+2+3+5:8 C5+Eb5+G5/1+2+4:4 Ab4+C5+F5/1+2+4:4",
  "G4+C5+Eb5/1+2+4:8 F4+Ab4+D5/1+2+4:4 Eb4+G4+C5/1+2+4:4",
  "G4+B4+D5/1+2+4:6 r:2 D4+F4+B4/1+2+5:8",
  "C4+Eb4+G4+C5/1+2+3+5:16",
].join(" | ");

export const lastHorizon: OurSong = {
  slug: "last-horizon",
  title: "Last Horizon",
  aka: [],
  source: {
    composer: "learn-piano-easy",
    died: null,
    published: 2026,
    edition: "Our own tune, written for Learn Piano Easy in the style of a modern film score",
    own: true,
  },
  about:
    "Last Horizon is a tune of our own, in the style of a modern film score. " +
    "A slow figure repeats under long held chords, as a long journey ends.",
  funFact: "A figure that repeats again and again under a tune is called an ostinato, from the Italian word for stubborn.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 4, key: C_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 72,
      numerator: 4,
      denominator: 4,
      right: COMMON_RIGHT,
      left: COMMON_LEFT,
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play bars 1 to 4 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. Finger 5 moves up one key to B flat.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds one low note or a fifth for each whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "fingering", text: "Start with finger 4 on A. The thumb waits over D, and finger 5 over B flat." },
        { fromBar: 1, toBar: 16, kind: "rhythm", text: "Count four slow beats in every bar. The left hand holds each note until the bar ends." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Play softly and evenly, like the music at the end of a long film." },
      ],
      tricky: {
        4: "Hold A with finger 5 for four beats. The left hand plays F and C together with fingers 5 and 2.",
        5: "Finger 5 moves up one key to B flat. Then fingers 4 and 3 walk down to A and G.",
        15: "Four even notes walk down from F to C sharp. The thumb plays C sharp, and finger 2 then takes D.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 72,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: RARE_RIGHT,
      left: RARE_LEFT,
      skills: ["eighth-notes", "two-note-chords"],
      practice: [
        { text: "Play the left hand alone: a low note, then the fifth above it, again and again.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 15, kind: "rhythm", text: "The left hand plays the same two notes on every beat, low and high. Keep it steady and calm." },
        { fromBar: 3, toBar: 4, kind: "trick", text: "Let go of the last G in bar 3 a little early. The left hand then has time to drop to F." },
        { fromBar: 12, toBar: 12, kind: "fingering", text: "Press C sharp and E together with the thumb and finger 3." },
      ],
      tricky: {
        5: "Finger 5 moves up one key to B flat. The left hand rocks between G and D.",
        6: "Finger 3 moves down from G to F. Then fingers 2 and 1 play E and D.",
        16: "End with D and F together, with fingers 2 and 4. The left hand holds D and A under them.",
      },
    },
    epic: {
      key: C_MINOR,
      bpm: 70,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [TUNE_C, EPIC_OWN, EPIC_TUNE_AGAIN].join(" | "),
      left: `${rolled({ chords: `${TUNE_CHORDS}${OWN_CHORDS}${TUNE_CHORDS.slice(0, -2)}`, units: 1, everyBeat: false })} | ${LAST_LEFT}:8`,
      pedal: Array<string>(24).fill("P:8").join(" | "),
      skills: ["broken-chords", "thumb-under", "pedal"],
      practice: [
        { text: "Play the left hand alone until the broken chords roll by themselves.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play bars 9 to 12 with the right hand alone, and pass the thumb under on the way up.", hands: "right", speed: 0.5, loop: [9, 12], wait: true },
        { text: "Play the right hand's chords alone on bars 17 to 24, and let the top note sing.", hands: "right", speed: 0.6, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 24, kind: "sound", text: "Change the pedal at the start of every bar, where the chord changes." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the left hand soft. Its figure repeats like a quiet engine under the tune." },
        { fromBar: 11, toBar: 11, kind: "fingering", text: "Pass the thumb under to F after E flat. Fingers 2 and 4 then reach G and C." },
      ],
      tricky: {
        6: "Finger 3 moves down from F to E flat. Then fingers 2 and 1 walk down to C.",
        15: "The hand climbs G, B and D, then walks back down. The thumb ends on F.",
        22: "Hold G, C and E flat with fingers 1, 2 and 3. Then fingers 2 and 1 play D and C.",
      },
    },
    legendary: {
      key: C_MINOR,
      bpm: 76,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [LEGENDARY_TUNE, LEGENDARY_OWN, LEGENDARY_LAST].join(" | "),
      left: `${rolled(
        { chords: TUNE_CHORDS, units: 2, everyBeat: false },
        { chords: `${OWN_CHORDS}${TUNE_CHORDS.slice(0, -2)}`.toLowerCase(), units: 1, everyBeat: true },
      )} | ${LAST_LEFT}:16`,
      pedal: Array<string>(24).fill("P:16").join(" | "),
      skills: ["sixteenth-notes", "melody-in-chords", "pedal"],
      practice: [
        { text: "Play the left hand alone in bars 9 to 12. It rolls the same figure on every beat.", hands: "left", speed: 0.5, loop: [9, 12], wait: false },
        { text: "Play the right hand alone on the first eight bars, an octave higher than the tune.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the right hand's big chords alone on bars 17 to 24, and let the top finger sing.", hands: "right", speed: 0.5, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "The left hand rolls eighths here. In bar 9 they turn into sixteenths, and the music grows." },
        { fromBar: 9, toBar: 23, kind: "rhythm", text: "Count four sixteenths on every beat: root, fifth, octave, fifth. Never let the figure hurry." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "This is the last and fullest statement. Play the top note of each chord a little louder." },
      ],
      tricky: {
        17: "Spread the hand over four notes for each chord. Lift it early at the end of the bar, to jump down.",
        18: "Hold E flat, A flat, C and E flat for three beats. Then finger 4 takes C.",
        23: "Lift the hand after the first chord. Finger 5 then lands on B, with F and D below it.",
      },
    },
  },
  de: {
    about:
      "Last Horizon ist eine eigene Melodie von uns, im Stil einer modernen Filmmusik. " +
      "Eine langsame Figur wiederholt sich unter lang gehaltenen Akkorden, wie am Ende einer langen Reise.",
    funFact: "Eine Figur, die sich unter einer Melodie immer wieder wiederholt, heißt Ostinato, nach dem italienischen Wort für stur.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 4 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Finger 5 rückt eine Taste höher zum B.",
          "Jetzt die linke Hand allein. Sie hält einen tiefen Ton oder eine Quinte für jeden ganzen Takt.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Fang mit Finger 4 auf dem A an. Der Daumen wartet über dem D, und Finger 5 über dem B.",
          "Zähl vier langsame Schläge in jedem Takt. Die linke Hand hält jeden Ton bis zum Ende des Takts.",
          "Spiel leise und gleichmäßig, wie die Musik am Ende eines langen Films.",
        ],
        tricky: {
          4: "Halt das A mit Finger 5 vier Schläge lang. Die linke Hand spielt F und C zusammen mit Finger 5 und 2.",
          5: "Finger 5 rückt eine Taste höher zum B. Dann gehen Finger 4 und 3 hinunter zum A und G.",
          15: "Vier gleichmäßige Töne gehen vom F hinunter zum Cis. Der Daumen spielt das Cis, und Finger 2 nimmt dann das D.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: einen tiefen Ton, dann die Quinte darüber, immer wieder.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand spielt auf jedem Schlag dieselben zwei Töne, tief und hoch. Halt sie gleichmäßig und ruhig.",
          "Lass das letzte G in Takt 3 etwas früher los. Dann hat die linke Hand Zeit, hinunter zum F zu gehen.",
          "Drück Cis und E zusammen mit dem Daumen und Finger 3.",
        ],
        tricky: {
          5: "Finger 5 rückt eine Taste höher zum B. Die linke Hand schaukelt zwischen G und D.",
          6: "Finger 3 rückt vom G hinunter zum F. Dann spielen Finger 2 und 1 das E und das D.",
          16: "Am Ende spielst du D und F zusammen, mit Finger 2 und 4. Die linke Hand hält D und A darunter.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein, bis die gebrochenen Akkorde von selbst rollen.",
          "Spiel die Takte 9 bis 12 nur mit der rechten Hand, und setz auf dem Weg nach oben den Daumen unter.",
          "Spiel die Akkorde der rechten Hand in den Takten 17 bis 24 allein, und lass den oberen Ton singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal am Anfang jedes Takts, dort wo der Akkord wechselt.",
          "Spiel die linke Hand leise. Ihre Figur wiederholt sich wie ein leiser Motor unter der Melodie.",
          "Setz nach dem Es den Daumen unter zum F. Dann erreichen Finger 2 und 4 das G und das C.",
        ],
        tricky: {
          6: "Finger 3 rückt vom F hinunter zum Es. Dann gehen Finger 2 und 1 hinunter zum C.",
          15: "Die Hand steigt über G, H und D und geht dann wieder hinunter. Der Daumen endet auf dem F.",
          22: "Halt G, C und Es mit Finger 1, 2 und 3. Dann spielen Finger 2 und 1 das D und das C.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein in den Takten 9 bis 12. Sie rollt auf jedem Schlag dieselbe Figur.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, eine Oktave höher als die Melodie.",
          "Spiel die großen Akkorde der rechten Hand in den Takten 17 bis 24 allein, und lass den obersten Finger singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Die linke Hand rollt hier Achtel. In Takt 9 werden daraus Sechzehntel, und die Musik wächst.",
          "Zähl vier Sechzehntel auf jedem Schlag: Grundton, Quinte, Oktave, Quinte. Lass die Figur nie hetzen.",
          "Das ist der letzte und vollste Durchgang. Spiel den oberen Ton jedes Akkords etwas lauter.",
        ],
        tricky: {
          17: "Spann die Hand für jeden Akkord über vier Töne. Heb sie am Ende des Takts früh an, um hinunterzuspringen.",
          18: "Halt Es, As, C und Es drei Schläge lang. Dann nimmt Finger 4 das C.",
          23: "Heb die Hand nach dem ersten Akkord an. Dann landet Finger 5 auf dem H, mit F und D darunter.",
        },
      },
    },
  },
};

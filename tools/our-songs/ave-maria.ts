/**
 * *Ave Maria*: the voice's first phrase from Schubert's Ellens dritter Gesang, in four versions of ours.
 *
 * The tune is the voice's bars 3 and 4 in the C. F. Peters edition. The print is in 4/4 and B-flat
 * major, slow, with sixteenths and dotted rhythms. The tune writes every sixteenth as a quarter, so it
 * reads each print bar as one bar of 4/1. The grace notes before the last group of bar 2 are left out.
 * The hook is both bars.
 *
 * Every version writes the tune in 4/2, in eighths, two bars per print bar, so each print beat is half a
 * bar. The print's chords, one per beat, are B flat, G minor with E over G, B flat over F and F7 in bar
 * 1. Bar 2 has G minor twice, C minor over E flat and F7. After the tune, bars of ours move over B flat,
 * E flat, F7, G minor and C minor, and every version closes on B flat.
 *
 * Every line is written in C major, a whole tone above the print. Common and Rare stay in C major, and
 * Epic and Legendary are moved down a whole tone to the print's B-flat major.
 *
 * Common plays the tune twice over held bass notes, with one hand position each. Rare plays a bass note
 * and a two-note chord on each half bar, and adds thirds to the right hand between the tunes. Epic rolls
 * a broken chord in eighths under the tune with the pedal, then plays the tune again in thirds and sixths.
 * Legendary sets it over an octave bass, plays it in thirds and sixths, then in octaves, and ends on a
 * four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Epic and Legendary keep. */
const B_FLAT_MAJOR: Key = { tonic: 10, mode: "major" };

/** The key Common and Rare move to, and the key every line is written in. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 4/1, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune = "Bb4:6 A4:1 Bb4:1 D5:7 C5:1 | Bb4:4 r:4 C5:4 Bb4:1 A4:1 G4:1 A4:1";

/** The pitch class of each note letter. */
const LETTERS: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** The name of each pitch class, spelt with flats. */
const FLAT_NAMES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

/** `text` a whole tone down, every note spelt with flats, so a line in C major reads in B-flat major. */
function wholeToneDown(text: string): string {
  return text.replace(/([A-G])([#b]?)(\d)(?=[/:+])/g, (_, letter: string, accidental: string, octave: string) => {
    const pitch = 12 * (Number(octave) + 1) + (LETTERS[letter] ?? 0) + (accidental === "#" ? 1 : accidental === "b" ? -1 : 0) - 2;
    return `${FLAT_NAMES[pitch % 12]}${Math.floor(pitch / 12) - 1}`;
  });
}

/**
 * Bars of `patterns` from `chords`, such as `"c x s g"`: one token per half bar, two per bar. A token
 * with a dot, such as `c.`, ends its half bar with an eighth's rest, so the hand can jump to the next chord.
 */
function bars(patterns: Record<string, string[]>, chords: string): string {
  const halves = chords.split(" ").map((token) => {
    const pattern = patterns[token.replace(".", "")];
    if (pattern === undefined) throw new Error(`No pattern for chord ${token}`);
    const line = [...pattern];
    if (token.endsWith(".")) line[line.length - 1] = "r:1";
    return line.join(" ");
  });
  const lines: string[] = [];
  for (let at = 0; at < halves.length; at += 2) lines.push(halves.slice(at, at + 2).join(" "));
  return lines.join(" | ");
}

/** Epic's broken chord on each half bar, in eighths: low, middle, high, middle, twice. */
function rolled(low: string, middle: string, high: string): string[] {
  const group = [`${low}/5:1`, `${middle}/3:1`, `${high}/1:1`, `${middle}/3:1`];
  return [...group, ...group];
}

/**
 * Epic's chords in C major, by letter: C, A minor with F sharp, C over G, G, G7, A minor, D minor over
 * F, F and C over E.
 */
const ROLLED: Record<string, string[]> = {
  c: rolled("C3", "E3", "G3"),
  x: rolled("A2", "C3", "F#3"),
  s: rolled("G2", "C3", "E3"),
  g: rolled("G2", "B2", "D3"),
  "7": rolled("G2", "B2", "F3"),
  a: rolled("A2", "C3", "E3"),
  d: rolled("F2", "A2", "D3"),
  f: rolled("F2", "A2", "C3"),
  e: rolled("E2", "G2", "C3"),
};

/** Legendary's half bar, in eighths: the bass in octaves, two notes of the chord twice, then a rest to jump. */
function octaves(low: string, middle: string, high: string): string[] {
  const [lower, upper] = low.split("+");
  return [`${lower}+${upper}/5+1:2`, `${middle}/2:1`, `${high}/1:1`, `${middle}/2:1`, `${high}/1:1`, "r:2"];
}

/** Legendary's chords in C major, by the letters of `ROLLED`. */
const OCTAVES: Record<string, string[]> = {
  c: octaves("C2+C3", "G2", "E3"),
  x: octaves("A1+A2", "F#2", "E3"),
  s: octaves("G1+G2", "E2", "C3"),
  g: octaves("G1+G2", "D2", "B2"),
  "7": octaves("G1+G2", "F2", "B2"),
  a: octaves("A1+A2", "E2", "C3"),
  d: octaves("F1+F2", "D2", "A2"),
  f: octaves("F1+F2", "C2", "A2"),
  e: octaves("E2+E3", "G2", "C3"),
};

/** The chords under the tune, one per half bar, as the print's beats have them. */
const TUNE_CHORDS = "c x s g a a d 7";

/** The tune in C major, in eighths, fingered in one place: A with the thumb, up to E with finger 5. */
const TUNE_RIGHT = "C5/3:12 B4/2:2 C5/3:2 | E5/5:14 D5/4:2 | C5/3:8 r:8 | D5/4:8 C5/3:2 B4/2:2 A4/1:2 B4/2:2";

/** Common's three bars of ours between the tunes, in eighths, in the tune's hand position. */
const COMMON_OWN = "A4/1:6 B4/2:2 C5/3:4 E5/5:4 | D5/4:12 C5/3:2 B4/2:2 | E5/5:6 D5/4:2 C5/3:4 B4/2:4";

/** Rare's four bars of ours after the first tune, in eighths, with thirds in the tune's hand position. */
const RARE_OWN_A = [
  "A4+C5/1+3:6 D5/4:2 C5/3:2 B4/2:2 C5/3:4 | D5/4:6 C5/3:2 B4/2:4 D5/4:4",
  "C5+E5/3+5:6 D5/4:2 C5/3:4 E5/5:2 D5/4:2 | D5/4:4 A4+C5/1+3:4 B4+D5/2+4:8",
].join(" | ");

/** Rare's four bars of ours after the second tune, in eighths, ending on C major. */
const RARE_OWN_B = [
  "C5/3:4 A4+C5/1+3:4 D5/4:4 C5/3:2 B4/2:2 | D5/4:4 B4+D5/2+4:4 C5/3:2 B4/2:2 A4/1:2 B4/2:2",
  "C5+E5/3+5:8 D5/4:4 B4/2:4 | C5+E5/3+5:16",
].join(" | ");

/** Rare's left hand under the tune: a bass note, then a two-note chord, on each half bar. */
const RARE_TUNE_LEFT = [
  "C3/5:4 E3+G3/2+1:4 A2/5:4 F#3/1:4 | G2/5:4 C3+E3/2+1:4 G2/5:4 B2+D3/2+1:4",
  "A2/5:4 C3+E3/2+1:4 A2/5:4 C3+E3/2+1:4 | F2/5:4 A2+D3/2+1:4 G2/5:4 B2+F3/2+1:4",
].join(" | ");

/** Rare's left hand under `RARE_OWN_A`. */
const RARE_LEFT_A = [
  "F2/5:4 A2+C3/2+1:4 E2/5:4 G2+C3/2+1:4 | F2/5:4 A2+D3/2+1:4 G2/5:4 B2+F3/2+1:4",
  "A2/5:4 C3+E3/2+1:4 E2/5:4 G2+C3/2+1:4 | F2/5:4 A2+D3/2+1:4 G2/5:4 D3+F3/2+1:4",
].join(" | ");

/** Rare's left hand under `RARE_OWN_B`. */
const RARE_LEFT_B = [
  "A2/5:4 C3+E3/2+1:4 F2/5:4 A2+C3/2+1:4 | F2/5:4 A2+D3/2+1:4 G2/5:4 D3+F3/2+1:4",
  "A2/5:4 C3+E3/2+1:4 G2/5:4 D3+F3/2+1:4 | C3+E3+G3/5+2+1:16",
].join(" | ");

/** Epic's and Legendary's four bars of ours after the first tune, in eighths, in thirds and sixths. */
const BIG_OWN_A = [
  "A4+C5/1+3:6 D5/4:1 C5/3:1 B4/2:2 C5/3:2 E5/5:4 | D5+F5/3+5:6 E5/4:1 D5/3:1 B4+D5/1+3:4 G4+B4/1+2:4",
  "C5+E5/1+3:6 F5/4:1 E5/3:1 C5+E5/1+3:4 G5/5:2 F5/4:1 E5/3:1 | D5+F5/3+5:4 A4+D5/1+3:4 G4+B4+D5/1+2+3:7 r:1",
].join(" | ");

/** The tune in C major, in eighths, with a third or a sixth under every note. */
const TUNE_THIRDS = [
  "E4+C5/1+5:12 D4+B4/1+4:2 E4+C5/1+5:2 | G4+E5/1+5:14 B4+D5/2+5:2",
  "E4+C5/1+4:8 r:8 | F4+D5/1+5:8 A4+C5/2+4:2 G4+B4/1+3:2 F4+A4/1+2:2 G4+B4/1+3:2",
].join(" | ");

/** Epic's and Legendary's three bars of ours after the second tune, in eighths. */
const BIG_OWN_B = [
  "C5+E5/3+5:4 A4+C5/1+3:2 B4+D5/2+4:2 A4+C5/1+3:4 F4+A4/1+2:2 G4+B4/1+3:2",
  "G4+C5/1+3:4 C5+E5/3+5:4 F4+D5/1+5:4 A4+F5/2+5:4",
  "F4+D5/1+5:4 E4+C5/1+4:4 D4+B4/1+4:4 F4+D5/2+5:3 r:1",
].join(" | ");

/** The tune in C major, in eighths, in octaves. */
const TUNE_OCTAVES = [
  "C4+C5/1+5:12 B3+B4/1+5:2 C4+C5/1+5:1 r:1 | E4+E5/1+5:14 D4+D5/1+5:2",
  "C4+C5/1+5:8 r:8 | D4+D5/1+5:8 C4+C5/1+5:2 B3+B4/1+5:2 A3+A4/1+5:2 B3+B4/1+5:2",
].join(" | ");

/** Epic's and Legendary's pedal, changed with each chord, for `bars` bars, then held over the last. */
function pedal(barCount: number): string {
  return [...Array(barCount).fill("P:8 P:8"), "P:16"].join(" | ");
}

export const aveMaria: OurSong = {
  slug: "ave-maria",
  title: "Ave Maria",
  aka: ["Ellens dritter Gesang", "Ellen's Third Song", "Schubert Ave Maria", "D. 839"],
  source: {
    composer: "Franz Schubert",
    died: 1828,
    published: 1826,
    edition:
      "Ellens dritter Gesang, D. 839, the voice's first phrase in bars 3 and 4, as the Mutopia Project's typeset of the C. F. Peters edition prints it",
  },
  about:
    "Schubert set this song in 1825, from a German translation of Walter Scott's poem The Lady of the Lake. " +
    "It is Ellen's third song, and it was published in 1826 as part of his Opus 52. " +
    "Walt Disney's film Fantasia (1940) uses it in its final part, right after Night on Bald Mountain.",
  funFact: "In Fantasia, the bells at the end of Night on Bald Mountain seem to become church bells that lead into the Ave Maria.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 1, steps: 4, key: B_FLAT_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 104,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [TUNE_RIGHT, COMMON_OWN, TUNE_RIGHT, "C5/3:16"].join(" | "),
      left: [
        "C3/1:8 A2/3:8 | G2/4:16 | A2/3:16 | F2/5:8 G2/4:8",
        "F2+C3/5+1:8 C3/1:8 | F2/5:8 G2/4:8 | A2/3:8 G2/4:8",
        "C3/1:8 A2/3:8 | G2/4:16 | A2/3:16 | F2/5:8 G2/4:8",
        "C3/1:16",
      ].join(" | "),
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 7 with the right hand alone. The hand stays in the same place.", hands: "right", speed: 0.6, loop: [5, 7], wait: true },
        { text: "Now the left hand alone. It holds one bass note for half a bar or longer.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first seven bars, slowly.", hands: "both", speed: 0.7, loop: [1, 7], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "sound", text: "Sing the long notes in your head. The tune is a prayer, so play it softly." },
        { fromBar: 1, toBar: 12, kind: "fingering", text: "The thumb rests on A and finger 5 on E. Every note of the right hand lies under a finger." },
        { fromBar: 4, toBar: 4, kind: "rhythm", text: "The last four notes are even. Count them one, two, three, four." },
      ],
      tricky: {
        2: "Hold E with finger 5 for almost the whole bar. Then finger 4 plays D, short and soft.",
        4: "Fingers 3, 2, 1 and 2 step down and back up. The left hand moves from F to G in the middle.",
        6: "Hold D with finger 4. Then let fingers 3 and 2 fall to C and B.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 112,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [TUNE_RIGHT, RARE_OWN_A, TUNE_RIGHT, RARE_OWN_B].join(" | "),
      left: [RARE_TUNE_LEFT, RARE_LEFT_A, RARE_TUNE_LEFT, RARE_LEFT_B].join(" | "),
      skills: ["two-note-chords", "eighth-notes"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the left hand alone. A bass note comes first, and a two-note chord answers it.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "Count eight beats in each bar. The left hand plays on beats 1, 3, 5 and 7." },
        { fromBar: 5, toBar: 8, kind: "fingering", text: "The right hand never moves. Fingers 1 and 3 play the thirds A and C together." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the left hand softer than the tune, as a quiet harp under a voice." },
      ],
      tricky: {
        3: "The right hand rests for half a bar. Keep counting while the left hand plays alone.",
        6: "In the left hand, finger 2 takes B and the thumb takes F above it.",
        7: "The left hand reaches down from C to the low E with finger 5.",
      },
    },
    epic: {
      key: B_FLAT_MAJOR,
      bpm: 100,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: wholeToneDown([TUNE_RIGHT, BIG_OWN_A, TUNE_THIRDS, BIG_OWN_B, "E4+G4+C5/1+2+5:16"].join(" | ")),
      left: wholeToneDown(
        [
          bars(ROLLED, TUNE_CHORDS),
          bars(ROLLED, "f e d 7 a c. d 7."),
          bars(ROLLED, TUNE_CHORDS),
          bars(ROLLED, "a f e d g 7."),
          "C2+G2+C3/5+2+1:16",
        ].join(" | "),
      ),
      pedal: pedal(15),
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone. Each half bar rolls up from the bass note and back down.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Change the pedal with each new bass note, twice in every bar." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Let the rolling left hand ripple softly, like a harp under the tune." },
        { fromBar: 9, toBar: 12, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        9: "After the rest, open the hand to a sixth, D and B flat. Fingers 1 and 5 hold it for most of the bar.",
        12: "The thirds step down and back up. The thumb takes E flat, then F, E flat and F again.",
        15: "The sixths walk down one key at a time, then the hand jumps back up after a short rest.",
      },
    },
    legendary: {
      key: B_FLAT_MAJOR,
      bpm: 96,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: wholeToneDown(
        [
          TUNE_RIGHT,
          BIG_OWN_A,
          TUNE_THIRDS,
          BIG_OWN_B,
          "D5+F5/3+5:4 A4+D5/1+3:4 G4+B4+D5/1+2+3:7 r:1",
          TUNE_OCTAVES,
          "C4+E4+G4+C5/1+2+3+5:16",
        ].join(" | "),
      ),
      left: wholeToneDown(
        [
          bars(OCTAVES, TUNE_CHORDS),
          bars(OCTAVES, "f e d 7 a c d 7"),
          bars(OCTAVES, TUNE_CHORDS),
          bars(OCTAVES, "a f e d g 7 d 7"),
          bars(OCTAVES, TUNE_CHORDS),
          "C2+G2+C3/5+2+1:16",
        ].join(" | "),
      ),
      pedal: pedal(20),
      skills: ["octave-bass", "melody-in-chords", "pedal"],
      practice: [
        { text: "Play the left hand alone: the octave, four quick notes, then a short rest to jump.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the right hand's octaves alone. Keep the hand open, with the thumb and little finger ready.", hands: "right", speed: 0.5, loop: [17, 20], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "trick", text: "Use the short rest at the end of each half bar to jump to the next octave." },
        { fromBar: 17, toBar: 20, kind: "sound", text: "The tune comes back in octaves. Let the little finger sing the top note." },
        { fromBar: 21, toBar: 21, kind: "sound", text: "Play the last chord softly, and hold it until the sound fades." },
      ],
      tricky: {
        9: "After the rest, open the hand to a sixth, D and B flat. Fingers 1 and 5 hold it for most of the bar.",
        17: "The octaves begin. Keep the hand open from the thumb to the little finger, and move it as one.",
        18: "Use the short rest before this bar to jump up to the octave on D.",
      },
    },
  },
  de: {
    about:
      "Schubert vertonte dieses Lied 1825, nach einer deutschen Übersetzung von Walter Scotts Gedicht Das Fräulein vom See. " +
      "Es ist Ellens dritter Gesang und erschien 1826 als Teil seines Opus 52. " +
      "Walt Disneys Film Fantasia (1940) verwendet es in seinem letzten Teil, direkt nach Eine Nacht auf dem Kahlen Berge.",
    funFact: "In Fantasia scheinen die Glocken am Ende von Eine Nacht auf dem Kahlen Berge zu Kirchenglocken zu werden, die zum Ave Maria führen.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 7 nur mit der rechten Hand. Die Hand bleibt am selben Platz.",
          "Jetzt die linke Hand allein. Sie hält jeden Basston einen halben Takt lang oder länger.",
          "Spiel die ersten sieben Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Sing die langen Töne im Kopf mit. Die Melodie ist ein Gebet, also spiel sie leise.",
          "Der Daumen liegt auf dem A und Finger 5 auf dem E. Jeder Ton der rechten Hand liegt unter einem Finger.",
          "Die letzten vier Töne sind gleich lang. Zähl sie eins, zwei, drei, vier.",
        ],
        tricky: {
          2: "Halt das E fast den ganzen Takt mit Finger 5. Dann spielt Finger 4 das D, kurz und leise.",
          4: "Finger 3, 2, 1 und 2 gehen hinab und wieder hinauf. Die linke Hand wechselt in der Mitte von F zu G.",
          6: "Halt das D mit Finger 4. Dann lass Finger 3 und 2 auf C und H fallen.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Zuerst kommt ein Basston, und ein Zweiklang antwortet ihm.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Zähl in jedem Takt acht Schläge. Die linke Hand spielt auf den Schlägen 1, 3, 5 und 7.",
          "Die rechte Hand bewegt sich nie. Finger 1 und 3 spielen die Terzen A und C zusammen.",
          "Spiel die linke Hand leiser als die Melodie, wie eine leise Harfe unter einer Stimme.",
        ],
        tricky: {
          3: "Die rechte Hand pausiert einen halben Takt. Zähl weiter, während die linke Hand allein spielt.",
          6: "In der linken Hand nimmt Finger 2 das H, und der Daumen nimmt das F darüber.",
          7: "Die linke Hand greift mit Finger 5 vom C hinab zum tiefen E.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Jeder halbe Takt rollt vom Basston hinauf und wieder hinab.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Lass die rollende linke Hand leise plätschern, wie eine Harfe unter der Melodie.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          9: "Öffne die Hand nach der Pause zur Sexte, D und B. Finger 1 und 5 halten sie fast den ganzen Takt.",
          12: "Die Terzen gehen hinab und wieder hinauf. Der Daumen nimmt Es, dann F, Es und wieder F.",
          15: "Die Sexten gehen Taste für Taste hinab, dann springt die Hand nach einer kurzen Pause zurück.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: die Oktave, vier schnelle Töne, dann eine kurze Pause zum Springen.",
          "Spiel die Oktaven der rechten Hand allein. Halt die Hand offen, mit Daumen und kleinem Finger bereit.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause am Ende jedes halben Takts, um zur nächsten Oktave zu springen.",
          "Die Melodie kommt in Oktaven zurück. Lass den kleinen Finger den oberen Ton singen.",
          "Spiel den letzten Akkord leise, und halt ihn, bis der Klang verklingt.",
        ],
        tricky: {
          9: "Öffne die Hand nach der Pause zur Sexte, D und B. Finger 1 und 5 halten sie fast den ganzen Takt.",
          17: "Die Oktaven beginnen. Halt die Hand vom Daumen bis zum kleinen Finger offen, und beweg sie als Ganzes.",
          18: "Nutz die kurze Pause vor diesem Takt, um hinauf zur Oktave auf D zu springen.",
        },
      },
    },
  },
};

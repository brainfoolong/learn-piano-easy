/**
 * *Haul Away Joe*: a hauling shanty, in four versions of ours.
 *
 * The source is R. R. Terry's *The Shanty Book, Part I* of 1921, scanned on Wikimedia Commons. The print
 * is in 6/8, Andante molto, with no key signature. It sits in D minor, with a raised F sharp and a B
 * natural. Bars 1 to 4 are the solo, and bars 5 to 8 the chorus, ending on the last verse's held D.
 *
 * The tune writes every eighth as a quarter, so each print bar is a bar of 6/4. It has no upbeat. Its
 * range is D4 to D5. The F sharp of bar 3 and the B of bar 4 lie outside D minor, and the hook is bars 1
 * to 4, the solo.
 *
 * Every version writes the tune in 6/4 eighths, one bar per print bar, and then plays 8 bars of our own.
 * Epic and Legendary then play the tune again in another setting. Our chords are D minor, C major, G
 * major and A minor, two to a bar. A D chord without its third sits under the F sharp, and A major under
 * the last A before the close. Our own bars use the same chords. Every version keeps D minor and closes on it.
 *
 * Common plays the tune over open fifths and fourths, held in one hand position. Rare plays a long bass
 * note and a short two-note chord in each half bar, and a few eighths in our own bars. Epic rolls a
 * broken chord under the tune with the pedal, passes the thumb under in our bars, then plays the tune in
 * thirds and sixths. Legendary plays an octave bass and a chord twice in each half bar, and arpeggios over
 * two octaves under our own bars. It then plays the tune again in chords of three and four notes.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 6/4, in quarters, which are the print's eighths: one bar per print bar. */
const tune =
  "D5:2 D5:1 D5:2 A4:1 | C5:2 C5:1 C5:2 A4:1 | G4:2 G4:1 F#4:2 G4:1 | A4:2 B4:1 C5:2 A4:1 | D5:3 D5:2 A4:1 | C5:3 C5:2 A4:1 | G4:2 G4:1 A4:3 | D4:6";

/** The solo, bars 1 to 4, in 6/4 eighths. The hand never leaves its place, and finger 1 takes the F sharp. */
const SOLO = "D5/5:4 D5/5:2 D5/5:4 A4/2:2 | C5/5:4 C5/5:2 C5/5:4 A4/3:2 | G4/2:4 G4/2:2 F#4/1:4 G4/2:2 | A4/3:4 B4/4:2 C5/5:4 A4/3:2";

/** The chorus, bars 5 to 8, in 6/4 eighths, for Common, Epic and Legendary. */
const CHORUS = "D5/5:6 D5/5:4 A4/3:2 | C5/5:6 C5/5:4 A4/3:2 | G4/2:4 G4/2:2 A4/3:6 | D4/1:12";

/** Rare's chorus, with a sixth under the first D and the first C. */
const CHORUS_RARE = "F4+D5/1+5:6 D5/5:4 A4/3:2 | E4+C5/1+5:6 C5/5:4 A4/3:2 | G4/2:4 G4/2:2 A4/3:6 | D4/1:12";

/** Our bars 9 to 16 in quarters, in one hand position from D to A, for Common. */
const OWN_COMMON = [
  "A4/5:4 A4/5:2 F4/3:4 D4/1:2 | E4/2:4 G4/4:2 G4/4:4 E4/2:2 | G4/4:4 F4/3:2 E4/2:4 D4/1:2 | A4/5:4 G4/4:2 E4/2:6",
  "F4/3:4 E4/2:2 D4/1:4 F4/3:2 | G4/4:4 A4/5:2 G4/4:4 F4/3:2 | G4/4:4 E4/2:2 A4/5:4 E4/2:2 | D4/1:12",
].join(" | ");

/** Our bars 9 to 16 for Rare, in the same hand position, with a few eighths. */
const OWN_RARE = [
  "D4/1:2 F4/3:2 A4/5:2 A4/5:2 G4/4:1 F4/3:1 G4/4:2 | E4/2:4 G4/4:2 G4/4:2 F4/3:1 E4/2:1 D4/1:2",
  "D4/1:2 E4/2:2 G4/4:2 G4/4:4 D4/1:2 | E4/2:4 A4/5:2 G4/4:1 F4/3:1 E4/2:4",
  "F4/3:2 E4/2:2 D4/1:2 F4/3:2 A4/5:4 | G4/4:4 A4/5:2 G4/4:2 E4/2:2 D4/1:2",
  "E4/2:2 G4/4:2 A4/5:4 G4/4:1 F4/3:1 E4/2:2 | D4+F4/1+3:12",
].join(" | ");

/** Our bars 9 to 16 in eighths for Epic and Legendary, with the thumb passing under and finger 3 crossing over. */
const OWN_EIGHTHS = [
  "D4/1:1 E4/2:1 F4/3:1 G4/1:1 A4/2:1 B4/3:1 C5/4:2 A4/2:2 F4/1:2",
  "E4/1:2 G4/2:1 A4/3:1 G4/2:2 C5/5:4 G4/2:2",
  "D4/1:1 G4/2:1 B4/3:1 D5/5:1 B4/3:2 A4/2:1 G4/1:1 A4/2:2 B4/3:2",
  "C5/4:2 B4/3:1 A4/2:1 E4/1:2 A4/2:2 B4/3:1 C5/4:1 E5/5:2",
  "D5/5:2 C5/4:1 B4/3:1 A4/2:1 G4/1:1 F4/3:2 D4/1:2 A4/5:2",
  "G4/3:1 A4/4:1 B4/5:2 D4/1:2 G4/3:2 B4/5:2 A4/4:1 G4/3:1",
  "C5/5:2 B4/4:1 A4/3:1 E4/1:2 C#5/4:2 B4/3:1 A4/2:1 E4/1:2",
  "D4/1:2 F4/2:2 A4/3:2 D5/5:4 A4/2:2",
].join(" | ");

/** Epic's tune again in eighths, with a third, a fourth or a sixth under each note. */
const EPIC_TUNE_AGAIN = [
  "F4+D5/1+5:4 A4+D5/2+5:2 F4+D5/1+5:4 F4+A4/1+3:2 | E4+C5/1+5:4 E4+C5/1+5:2 A4+C5/3+5:4 E4+A4/1+3:2",
  "D4+G4/1+3:4 D4+G4/1+3:2 D4+F#4/1+2:4 B3+G4/1+4:2 | C4+A4/1+5:4 D4+B4/1+5:2 E4+C5/1+5:4 C4+A4/1+5:2",
  "F4+D5/1+5:6 F4+D5/1+5:4 F4+A4/1+3:2 | E4+C5/1+5:6 E4+C5/1+5:4 C4+A4/1+5:2",
  "B3+G4/1+5:4 B3+G4/1+5:2 C#4+A4/1+5:6 | A3+D4/1+3:12",
].join(" | ");

/** Legendary's tune again in eighths, in chords of three and four notes with the tune on top. */
const LEGENDARY_TUNE_AGAIN = [
  "D4+F4+A4+D5/1+2+3+5:4 F4+A4+D5/1+3+5:2 D4+F4+A4+D5/1+2+3+5:4 D4+F4+A4/1+2+4:2",
  "E4+G4+C5/1+2+5:4 E4+G4+C5/1+2+5:2 C4+E4+G4+C5/1+2+3+5:4 C4+E4+A4/1+2+4:2",
  "B3+D4+G4/1+2+4:4 B3+D4+G4/1+2+4:2 D4+F#4/1+3:4 B3+D4+G4/1+2+4:2",
  "C4+E4+A4/1+2+4:4 D4+G4+B4/1+3+5:2 E4+A4+C5/1+3+5:4 C4+E4+A4/1+2+4:2",
  "D4+F4+A4+D5/1+2+3+5:6 F4+A4+D5/1+3+5:4 D4+F4+A4/1+2+4:2",
  "C4+E4+G4+C5/1+2+3+5:6 E4+G4+C5/1+2+5:4 C4+E4+A4/1+2+4:2",
  "B3+D4+G4/1+2+4:4 B3+D4+G4/1+2+4:2 C#4+E4+A4/1+2+4:6",
  "D4+F4+A4+D5/1+2+3+5:12",
].join(" | ");

/** Bars of `patterns` from `chords`, such as `"ddcc"`: one letter per half bar, two per bar. */
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
 * The chords under the tune, two per bar: d, c, g and a are D minor, C major, G major and A minor. D is
 * a D chord without its third, under the F sharp, and A is A major.
 */
const TUNE_CHORDS = "ddccgDaaddccgAdd";

/** The chords under our bars 9 to 16, two per bar. */
const OWN_CHORDS = "ddccggaaddggaAdd";

/** Common's held shapes in eighths, a half bar each, in one hand position from C3 to A3. */
const HELD: Record<string, string> = {
  d: "D3+A3/4+1:6",
  D: "D3+A3/4+1:6",
  c: "C3+G3/5+2:6",
  g: "D3+G3/4+2:6",
  a: "E3+A3/3+1:6",
  A: "E3+A3/3+1:6",
};

/** Rare's half bar in eighths: a long bass note on finger 5, then a short two-note chord. */
const LILT: Record<string, string> = {
  d: "D3/5:4 F3+A3/2+1:2",
  D: "D3/5:4 A3/1:2",
  c: "C3/5:4 E3+G3/2+1:2",
  g: "B2/5:4 D3+G3/2+1:2",
  a: "A2/5:4 E3+A3/2+1:2",
  A: "A2/5:4 E3+A3/2+1:2",
};

/** Epic's half bar in eighths: a broken chord, with no note that rubs against the tune on a beat. */
const BROKEN: Record<string, string> = {
  d: "D3/5:1 A3/1:1 F3/3:1 A3/1:1 F3/3:1 A3/1:1",
  D: "D3/5:1 A3/1:1 D3/5:1 A3/1:1 D3/5:1 A3/1:1",
  c: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 E3/3:1 G3/1:1",
  g: "G2/5:1 D3/2:1 G3/1:1 D3/2:1 G3/1:1 D3/2:1",
  a: "A2/5:1 E3/2:1 A3/1:1 E3/2:1 A3/1:1 E3/2:1",
  A: "A2/5:1 E3/2:1 A3/1:1 E3/2:1 A3/1:1 E3/2:1",
};

/** Legendary's half bar in eighths: an octave on the beat, a chord on the next two, each with a rest to jump. */
const STRIDE: Record<string, string> = {};
for (const [chord, [octave, triad]] of Object.entries({
  d: ["D2+D3/5+1", "A2+D3+F3/5+3+1"],
  D: ["D2+D3/5+1", "A2+D3+A3/5+2+1"],
  c: ["C2+C3/5+1", "G2+C3+E3/5+3+1"],
  g: ["G1+G2/5+1", "G2+B2+D3/5+3+1"],
  a: ["A1+A2/5+1", "A2+E3+A3/5+2+1"],
  A: ["A1+A2/5+1", "A2+C#3+E3/5+3+1"],
})) {
  STRIDE[chord] = `${octave}:1 r:1 ${triad}:1 r:1 ${triad}:1 r:1`;
}

/** The six notes of each chord over two octaves, for Legendary's arpeggios. */
const WIDE_NOTES: Record<string, string> = {
  d: "D2 A2 D3 F3 A3 D4",
  c: "C2 G2 C3 E3 G3 C4",
  g: "G1 D2 G2 B2 D3 G3",
  a: "A1 E2 A2 C3 E3 A3",
  A: "A1 E2 A2 C#3 E3 A3",
};

/** Legendary's bar of arpeggio in eighths: up two octaves, back down to the fifth, then a rest to jump. */
const WIDE: Record<string, string> = {};
for (const [chord, notes] of Object.entries(WIDE_NOTES)) {
  const pitches = notes.split(" ");
  const steps: [number, number][] = [[0, 5], [1, 2], [2, 1], [3, 3], [4, 2], [5, 1], [4, 2], [3, 3], [2, 1], [1, 2]];
  WIDE[chord] = `${steps.map(([at, finger]) => `${pitches[at]}/${finger}:1`).join(" ")} r:2`;
}

/** The pedal of Epic and Legendary in eighths: changed at each half bar, held through the last bar. */
const PEDAL = `${Array<string>(23).fill("P:6 P:6").join(" | ")} | P:12`;

export const haulAwayJoe: OurSong = {
  slug: "haul-away-joe",
  title: "Haul Away Joe",
  source: {
    composer: "Traditional",
    died: null,
    published: 1921,
    edition: "The solo and chorus as R. R. Terry's The Shanty Book, Part I (1921) prints them, scanned on Wikimedia Commons",
  },
  about: "Haul Away Joe is a short shanty for hauling on a rope. R. R. Terry printed it in 1921 as a shanty for hauling the fore-sheet.",
  funFact: "One verse in Terry's print tells of King Louis of France, who lost his head in the Revolution.",
  mythic: null,
  collection: "sea",
  tune: { text: tune, numerator: 6, denominator: 4, key: D_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 108,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: `${SOLO} | ${CHORUS} | ${OWN_COMMON}`,
      left: bars(HELD, `${TUNE_CHORDS}${OWN_CHORDS}`),
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 4 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, where the chorus falls to the low D.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds two keys and changes them twice in a bar at most.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "fingering", text: "Finger 5 takes D and C at the top. The thumb only plays the F sharp in bar 3." },
        { fromBar: 1, toBar: 16, kind: "rhythm", text: "Count six beats in a bar: long, short, long, short. That is the pull on the rope." },
        { fromBar: 8, toBar: 9, kind: "trick", text: "The low D of bar 8 is the thumb. The hand now stays over D to A to the end." },
      ],
      tricky: {
        2: "Finger 5 plays C three times. Then finger 3 takes A, and finger 2 waits over G.",
        11: "The fingers walk down from G to D, one key at a time. The left hand holds D and G.",
        14: "Fingers 4 and 5 rock between G and A. Then finger 3 steps down to F.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 100,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: `${SOLO} | ${CHORUS_RARE} | ${OWN_RARE}`,
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
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "Each half bar of the left hand has a long note and a short chord. Feel the heave: long, short." },
        { fromBar: 5, toBar: 6, kind: "fingering", text: "Fingers 1 and 5 press the sixths as one. Then finger 5 stays on the top note." },
        { fromBar: 16, toBar: 16, kind: "fingering", text: "End with D and F together. Fingers 1 and 3 press them as one." },
      ],
      tricky: {
        4: "Fingers 3, 4 and 5 climb A, B and C. This B is the white key, not B flat.",
        5: "Spread fingers 1 and 5 over F and D for the sixth. Then finger 5 plays D again alone.",
        9: "The tune climbs D, F and A. G and F are quick eighths, so count them evenly.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 112,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [SOLO, CHORUS, OWN_EIGHTHS, EPIC_TUNE_AGAIN].join(" | "),
      left: `${bars(BROKEN, `${TUNE_CHORDS}${OWN_CHORDS}${TUNE_CHORDS.slice(0, -2)}`)} | D3+F3+A3/5+2+1:12`,
      pedal: PEDAL,
      skills: ["broken-chords", "thumb-under", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone until the broken chords flow by themselves.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand alone on bars 9 to 16, and pass the thumb under on the way up.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 9, toBar: 9, kind: "fingering", text: "Pass the thumb under to G after F. Fingers 2, 3 and 4 then reach A, B and C." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        13: "Run down from D with fingers 5 to 1. Then finger 3 crosses over the thumb to F.",
        16: "Climb the D minor chord with fingers 1, 2, 3 and 5. The hand opens wide for the high D.",
        20: "Fingers 1 and 5 hold each sixth and glide up one key at a time. Keep the hand's shape the same.",
      },
    },
    legendary: {
      key: D_MINOR,
      bpm: 120,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [SOLO, CHORUS, OWN_EIGHTHS, LEGENDARY_TUNE_AGAIN].join(" | "),
      left: [
        bars(STRIDE, TUNE_CHORDS),
        [..."dcgadgAd"].map((chord) => WIDE[chord]).join(" | "),
        bars(STRIDE, TUNE_CHORDS.slice(0, -2)),
        "D2+A2+D3/5+2+1:12",
      ].join(" | "),
      pedal: PEDAL,
      skills: ["octave-bass", "arpeggios", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then a chord twice, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the left hand's arpeggios alone. The thumb passes under, and finger 3 crosses over.", hands: "left", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "Use the short rest after each octave and chord to jump to the next one." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Let the arpeggios roll like waves under the tune." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "Play the top note of each chord a little louder, so the tune rings out." },
      ],
      tricky: {
        4: "The left hand jumps from a low octave A to a chord of A, E and A. The right hand climbs A, B and C.",
        20: "Each chord moves the whole hand up or down a key. Keep its shape, and let the top finger lead.",
        23: "The hand moves from G major to A major in one step. The thumb lands on C sharp, a black key.",
      },
    },
  },
  de: {
    about:
      "Haul Away Joe ist ein kurzer Shanty zum Ziehen an einem Tau. " +
      "R. R. Terry druckte ihn 1921 als Shanty zum Holen der Fockschot.",
    funFact: "Eine Strophe in Terrys Druck erzählt von König Ludwig von Frankreich, der in der Revolution seinen Kopf verlor.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 4 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Dort fällt der Refrain zum tiefen D.",
          "Jetzt die linke Hand allein. Sie hält zwei Tasten und wechselt sie höchstens zweimal im Takt.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Finger 5 nimmt oben das D und das C. Der Daumen spielt nur das Fis in Takt 3.",
          "Zähl sechs Schläge in jedem Takt: lang, kurz, lang, kurz. So zieht man am Tau.",
          "Das tiefe D in Takt 8 ist der Daumen. Die Hand bleibt nun bis zum Ende über D bis A.",
        ],
        tricky: {
          2: "Finger 5 spielt dreimal das C. Dann nimmt Finger 3 das A, und Finger 2 wartet über dem G.",
          11: "Die Finger gehen Taste für Taste vom G hinunter zum D. Die linke Hand hält D und G.",
          14: "Finger 4 und 5 wiegen sich zwischen G und A. Dann geht Finger 3 hinunter zum F.",
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
          "Jeder halbe Takt der linken Hand hat einen langen Ton und einen kurzen Akkord. Spür das Ziehen: lang, kurz.",
          "Finger 1 und 5 drücken die Sexten wie einen Ton. Dann bleibt Finger 5 auf dem oberen Ton.",
          "Am Ende spielst du D und F zusammen. Finger 1 und 3 drücken sie wie einen Ton.",
        ],
        tricky: {
          4: "Finger 3, 4 und 5 steigen über A, H und C. Das H ist die weiße Taste, nicht das B.",
          5: "Spann Finger 1 und 5 über F und D für die Sexte. Dann spielt Finger 5 das D noch einmal allein.",
          9: "Die Melodie steigt über D, F und A. G und F sind schnelle Achtel, also zähl sie gleichmäßig.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein, bis die gebrochenen Akkorde von selbst fließen.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand, und setz auf dem Weg nach oben den Daumen unter.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Setz nach dem F den Daumen unter zum G. Dann erreichen Finger 2, 3 und 4 das A, das H und das C.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          13: "Lauf mit Finger 5 bis 1 vom D hinunter. Dann kreuzt Finger 3 über den Daumen zum F.",
          16: "Steig mit Finger 1, 2, 3 und 5 durch den d-Moll-Akkord. Für das hohe D öffnet sich die Hand weit.",
          20: "Finger 1 und 5 halten jede Sexte und gleiten Taste für Taste hinauf. Halt die Form der Hand gleich.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann zweimal einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Arpeggios der linken Hand allein. Der Daumen geht unter, und Finger 3 kreuzt darüber.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause nach jeder Oktave und jedem Akkord, um zum nächsten Griff zu springen.",
          "Lass die Arpeggios wie Wellen unter der Melodie rollen.",
          "Spiel den oberen Ton jedes Akkords etwas lauter, damit die Melodie klar klingt.",
        ],
        tricky: {
          4: "Die linke Hand springt von einer tiefen Oktave A zu einem Akkord aus A, E und A. Die rechte Hand steigt über A, H und C.",
          20: "Jeder Akkord rückt die ganze Hand eine Taste hinauf oder hinunter. Halt ihre Form, und lass den oberen Finger führen.",
          23: "Die Hand rückt in einem Schritt von G-Dur nach A-Dur. Der Daumen landet auf dem Cis, einer schwarzen Taste.",
        },
      },
    },
  },
};

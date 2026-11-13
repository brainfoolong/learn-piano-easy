/**
 * *Morning Mood*: the flute's theme from Grieg's first *Peer Gynt* Suite, in four versions of ours.
 *
 * The tune is the flute's theme in bars 1 to 4, from a scanned book of orchestral themes. The print is
 * in 6/8, Allegretto pastorale, in E major, and its grace notes are left out. The tune writes every
 * sixteenth as a quarter, so each print bar is a bar of 6/2. Its range is E5 to C sharp 6, and the hook
 * is all four bars.
 *
 * Every version writes the tune in 6/4 quarters, two bars per print bar, and then plays 8 bars of our
 * own. Epic and Legendary then play the tune again in another setting. The tune sits on the tonic, with
 * the dominant at the half of bar 7. Our own bars add the subdominant and the dominant. Epic and
 * Legendary put the sixth chord under the high C sharps of bar 6. Every version closes on the tonic.
 *
 * Common moves the song to C major and Rare to G major, where the tune keeps one hand position. E major
 * has four sharps, so Epic moves it to D major, and Legendary keeps E major.
 *
 * Common plays the tune over held open fifths and single bass notes, with the left hand still. Rare
 * plays a waltz bass in one place: a low note on the beat, then a chord or a single note twice. Epic
 * rolls an Alberti bass with the pedal, then plays the tune again with a third or a sixth under it.
 * Legendary plays an octave bass and a chord on each beat, arpeggios over two octaves under our own
 * bars, and the tune again in chords of three and four notes.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Legendary keeps. */
const E_MAJOR: Key = { tonic: 4, mode: "major" };

/** The key Common moves the song to. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The key Rare moves the song to. */
const G_MAJOR: Key = { tonic: 7, mode: "major" };

/** The key Epic moves the song to, since Epic allows three sharps. */
const D_MAJOR: Key = { tonic: 2, mode: "major" };

/** The tune in 6/2, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune =
  "B5:2 G#5:2 F#5:2 E5:2 F#5:2 G#5:2 | B5:2 G#5:2 F#5:2 E5:2 F#5:1 G#5:1 F#5:1 G#5:1 | " +
  "B5:2 G#5:2 B5:2 C#6:2 G#5:2 C#6:2 | B5:2 G#5:2 F#5:2 E5:4 r:2";

/**
 * The tune in E major, in 6/4 quarters, two bars per print bar. Finger 5 takes B, and finger 3 takes G
 * sharp, since fingers 3 and 4 stretch badly over a minor third. In bars 9 and 10 finger 2 takes G sharp,
 * so finger 5 can reach C sharp. Finger 5 then steps back to B, the tune's one change of position.
 */
const TUNE_RIGHT = [
  "B5/5:2 G#5/3:2 F#5/2:2 | E5/1:2 F#5/2:2 G#5/3:2",
  "B5/5:2 G#5/3:2 F#5/2:2 | E5/1:2 F#5/2:1 G#5/3:1 F#5/2:1 G#5/3:1",
  "B5/5:2 G#5/2:2 B5/4:2 | C#6/5:2 G#5/2:2 C#6/5:2",
  "B5/5:2 G#5/3:2 F#5/2:2 | E5/1:4 r:2",
].join(" | ");

/** Our eight bars after the tune, in E major quarters, on E, F sharp, G sharp and B, with the hand still. */
const OWN = [
  "B5/5:2 F#5/2:2 B5/5:2 | G#5/3:2 F#5/2:2 E5/1:2 | F#5/2:2 G#5/3:2 B5/5:2 | B5/5:4 F#5/2:2",
  "E5/1:2 F#5/2:2 B5/5:2 | G#5/3:2 E5/1:2 G#5/3:2 | F#5/2:2 G#5/3:2 F#5/2:2",
].join(" | ");

/** Our eight bars after the tune, in E major eighths, over A, E, C-sharp minor and B. */
const OWN_EIGHTHS = [
  "C#6/3:2 B5/2:2 A5/1:2 B5/2:2 C#6/3:2 E6/5:2 | B5/5:4 G#5/3:2 E5/1:2 F#5/2:2 G#5/3:2",
  "C#6/5:2 B5/4:2 G#5/3:2 F#5/2:2 E5/1:2 F#5/2:2 | F#5/2:4 D#5/1:2 F#5/2:2 B5/5:4",
  "A5/1:2 C#6/2:2 E6/4:2 C#6/2:2 B5/1:4 | B5/5:2 G#5/3:2 E5/1:2 G#5/3:2 B5/5:4",
  "F#5/2:2 B5/5:2 A5/4:2 F#5/2:2 D#5/1:2 F#5/2:2 | E5/1:12",
].join(" | ");

/** Epic's tune again in E major eighths, with a third or a sixth under most of its notes. */
const EPIC_TUNE_AGAIN = [
  "G#5+B5/3+4:4 E5+G#5/1+3:4 F#5/2:4 | E5/1:4 F#5/2:4 E5+G#5/1+3:4",
  "G#5+B5/3+4:4 E5+G#5/1+3:4 F#5/2:4 | E5/1:4 F#5/2:2 G#5/3:2 F#5/2:2 G#5/3:2",
  "G#5+B5/3+4:4 E5+G#5/1+3:4 G#5+B5/3+4:4 | E5+C#6/1+5:4 E5+G#5/1+3:4 E5+C#6/1+5:4",
  "G#5+B5/3+4:4 G#5/3:4 F#5/2:3 r:1 | G#4+B4+E5/1+2+5:12",
].join(" | ");

/** Legendary's tune again in E major eighths, in chords of three and four notes with the tune on top. */
const LEGENDARY_TUNE_AGAIN = [
  "E5+G#5+B5/1+3+5:4 B4+E5+G#5/1+2+4:4 B4+F#5/1+4:4 | G#4+B4+E5/1+2+3:4 B4+F#5/1+4:4 B4+E5+G#5/1+2+4:4",
  "E5+G#5+B5/1+3+5:4 B4+E5+G#5/1+2+4:4 B4+F#5/1+4:4 | G#4+B4+E5/1+2+3:4 F#5/4:2 G#5/5:2 F#5/4:2 G#5/5:2",
  "E5+G#5+B5/1+3+5:4 B4+E5+G#5/1+2+4:4 E5+G#5+B5/1+3+5:4 | C#5+E5+G#5+C#6/1+2+3+5:4 C#5+E5+G#5/1+2+4:4 C#5+E5+G#5+C#6/1+2+3+5:4",
  "E5+G#5+B5/1+3+5:4 B4+G#5/1+4:4 B4+D#5+F#5/1+2+4:3 r:1 | E4+G#4+B4+E5/1+2+3+5:12",
].join(" | ");

/** The name of each pitch class, spelled with sharps, as C, G, D and E major spell them. */
const NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

/** The pitch class of each note name. */
const CLASSES: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** `text` moved by `semitones`, with every note spelled by `NAMES`. */
function moved(text: string, semitones: number): string {
  return text.replace(/([A-G])(#?)(\d)(?=[/:+])/g, (_, letter: string, sharp: string, octave: string) => {
    const from = 12 * (Number(octave) + 1) + (CLASSES[letter] ?? 0) + (sharp === "#" ? 1 : 0);
    const to = from + semitones;
    return `${NAMES[to % 12]}${Math.floor(to / 12) - 1}`;
  });
}

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** Bars of `patterns` from `chords`, such as `"EEAB"`: one letter per half bar, two per bar. */
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

/** The chords under the tune, two per bar: E, A, B and C are E major, A major, B major and C-sharp minor. */
const TUNE_CHORDS = "EEEEEEEEEECCEBEE";

/** The chords under our eight bars, two per bar. */
const OWN_CHORDS = "AAEECCBBAAEEBBEE";

/** Common's left hand in C major quarters: an open fifth or one bass note, held, with the hand still. */
const COMMON_LEFT = [
  "C3+G3/5+1:6 | C3+G3/5+1:6 | C3+G3/5+1:6 | C3+G3/5+1:6",
  "C3+G3/5+1:6 | C3+G3/5+1:6 | C3+G3/5+1:3 D3+G3/4+1:3 | C3+G3/5+1:6",
  "F3/2:6 | C3+G3/5+1:6 | C3+G3/5+1:6 | D3+G3/4+1:6",
  "F3/2:6 | C3+G3/5+1:6 | D3+G3/4+1:6 | C3+G3/5+1:6",
].join(" | ");

/** Rare's half bar in G major quarters: a low note, then a two-note chord twice, with the hand still. */
const WALTZ: Record<string, string> = {
  g: "G2/5:1 B2+D3/3+1:1 B2+D3/3+1:1",
  c: "G2/5:1 A2+C3/4+2:1 A2+C3/4+2:1",
  d: "A2/4:1 D3/1:1 D3/1:1",
};

/** Epic's half bar in E major eighths: an Alberti group, low, high, middle, high, middle, high. */
const ALBERTI: Record<string, string> = {
  E: "E3/5:1 B3/1:1 G#3/3:1 B3/1:1 G#3/3:1 B3/1:1",
  A: "A2/5:1 E3/1:1 C#3/3:1 E3/1:1 C#3/3:1 E3/1:1",
  B: "B2/5:1 F#3/1:1 D#3/3:1 F#3/1:1 D#3/3:1 F#3/1:1",
  C: "C#3/5:1 G#3/1:1 E3/3:1 G#3/1:1 E3/3:1 G#3/1:1",
};

/** Legendary's half bar in eighths: an octave on the beat, a chord on the next two, each with a rest to jump. */
const STRIDE: Record<string, string> = {};
for (const [chord, [octave, triad]] of Object.entries({
  E: ["E2+E3/5+1", "B2+E3+G#3/5+2+1"],
  A: ["A1+A2/5+1", "A2+C#3+E3/5+3+1"],
  B: ["B1+B2/5+1", "B2+D#3+F#3/5+3+1"],
  C: ["C#2+C#3/5+1", "C#3+E3+G#3/5+3+1"],
})) {
  STRIDE[chord] = `${octave}:1 r:1 ${triad}:1 r:1 ${triad}:1 r:1`;
}

/** The six notes of each chord over two octaves, for Legendary's arpeggios. */
const WIDE_NOTES: Record<string, string> = {
  A: "A1 E2 A2 C#3 E3 A3",
  E: "E2 B2 E3 G#3 B3 E4",
  C: "C#2 G#2 C#3 E3 G#3 C#4",
  B: "B1 F#2 B2 D#3 F#3 B3",
};

/** Legendary's bar of arpeggio in eighths: up two octaves, back down to the fifth, then a rest to jump. */
const WIDE: Record<string, string> = {};
for (const [chord, notes] of Object.entries(WIDE_NOTES)) {
  const pitches = notes.split(" ");
  const steps: [number, number][] = [[0, 5], [1, 2], [2, 1], [3, 3], [4, 2], [5, 1], [4, 2], [3, 3], [2, 1], [1, 2]];
  WIDE[chord] = `${steps.map(([at, finger]) => `${pitches[at]}/${finger}:1`).join(" ")} r:2`;
}

/** The last bar of Epic and Legendary in the left hand: a low E major chord, held. */
const LAST_LEFT = "E2+B2+E3/5+2+1:12";

/** The pedal of Epic and Legendary in eighths: changed at each half bar, held through the last bar. */
const PEDAL = `${Array<string>(23).fill("P:6 P:6").join(" | ")} | P:12`;

/** Epic's left hand in E major eighths: the Alberti bass under all three parts, then the last chord. */
const EPIC_LEFT = `${bars(ALBERTI, `${TUNE_CHORDS}${OWN_CHORDS}${TUNE_CHORDS.slice(0, -2)}`)} | ${LAST_LEFT}`;

/** Legendary's left hand: stride under the tune, arpeggios under our bars, stride again and the last chord. */
const LEGENDARY_LEFT = [
  bars(STRIDE, TUNE_CHORDS),
  [..."AECBAEBE"].map((chord) => WIDE[chord]).join(" | "),
  bars(STRIDE, TUNE_CHORDS.slice(0, -2)),
  LAST_LEFT,
].join(" | ");

export const morningMood: OurSong = {
  slug: "morning-mood",
  title: "Morning Mood",
  aka: ["Morgenstemning", "Morgenstimmung", "Morning", "Peer Gynt Suite No. 1"],
  source: {
    composer: "Edvard Grieg",
    died: 1907,
    published: 1888,
    edition:
      "Peer Gynt Suite No. 1, Op. 46, Morning Mood, the flute's theme in bars 1 to 4, as a scanned book of orchestral themes on Wikimedia Commons prints it on its page 287; Suite No. 1 was published in 1888",
  },
  about:
    "Grieg wrote Morning Mood in 1875 for Ibsen's play Peer Gynt, and published it in his first Peer Gynt Suite in 1888. " +
    "Its tune uses only five notes of the scale, and passes between flute and oboe. " +
    "The 1973 film Soylent Green plays it as a dying man listens to the music he chose.",
  funFact: "The music paints a sunrise in the Moroccan desert, not over a Norwegian fjord as most listeners imagine.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 6, denominator: 2, steps: 2, key: E_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 120,
      numerator: 6,
      denominator: 4,
      steps: 1,
      right: moved(`${TUNE_RIGHT} | ${OWN} | E5/1:6`, -16),
      left: COMMON_LEFT,
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 9 to 16 with the right hand alone. The hand stays in the same place.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Now the left hand alone. It holds each shape for a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Your right thumb sits on middle C, and finger 5 starts on G. Fingers 2 and 3 rest on D and E." },
        { fromBar: 4, toBar: 4, kind: "rhythm", text: "After the first C, four short notes rock between D and E. Count them evenly." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play softly, like the sun rising slowly. Each note should flow into the next." },
      ],
      tricky: {
        5: "Finger 2 takes E here, and finger 4 takes G. That frees finger 5 for the high A in bar 6.",
        6: "Finger 5 plays A, and finger 2 plays E. Keep the hand open between them.",
        7: "Finger 5 steps back from A to G. The left hand moves to D and G at the half bar.",
      },
    },
    rare: {
      key: G_MAJOR,
      bpm: 144,
      numerator: 6,
      denominator: 4,
      steps: 1,
      right: moved(`${TUNE_RIGHT} | ${OWN} | E5+G#5/1+3:6`, -9),
      left: `${bars(WALTZ, "gggggggggggggdgg")} | ${bars(WALTZ, "ccggggddccggdd")} | G2+B2+D3/5+3+1:6`,
      skills: ["waltz-bass", "two-note-chords"],
      practice: [
        { text: "Play the left hand alone: a low note, then a two-note chord twice. The hand stays still.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "The left hand plays on every beat. Count one, two, three, twice in each bar." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the left hand's chords soft, so the tune floats above them like morning light." },
        { fromBar: 16, toBar: 16, kind: "fingering", text: "End with G and B together. Fingers 1 and 3 press them as one." },
      ],
      tricky: {
        5: "Finger 2 takes B here, and finger 4 takes D. That frees finger 5 for the high E in bar 6.",
        7: "Finger 5 steps back from E to D. The left hand moves to A and D at the half bar.",
        9: "The left hand keeps finger 5 on G. Fingers 4 and 2 move to A and C for the new chord.",
      },
    },
    epic: {
      key: D_MAJOR,
      bpm: 150,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: moved([inEighths(TUNE_RIGHT), OWN_EIGHTHS, EPIC_TUNE_AGAIN].join(" | "), -2),
      left: moved(EPIC_LEFT, -2),
      pedal: PEDAL,
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [17, 20], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "Our own bars move the hand. Look ahead to the first finger of each bar." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        7: "At the half bar the left hand changes to an A major Alberti group, with finger 5 on the low A.",
        11: "Five notes walk down from B to D, one finger each. Then finger 2 steps back up to E.",
        24: "Use the short rest to spread the right hand over F sharp, A and D for the last chord.",
      },
    },
    legendary: {
      key: E_MAJOR,
      bpm: 168,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [inEighths(TUNE_RIGHT), OWN_EIGHTHS, LEGENDARY_TUNE_AGAIN].join(" | "),
      left: LEGENDARY_LEFT,
      pedal: PEDAL,
      skills: ["octave-bass", "arpeggios", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then a chord twice, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the left hand's arpeggios alone. They climb two octaves and come back down.", hands: "left", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "Use the short rest after each octave and chord to jump to the next one." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Let the arpeggios flow softly under the tune, and change the pedal on each new chord." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        6: "The left hand jumps to C sharp for the whole bar. The right hand plays C sharp with finger 5 and G sharp with finger 2.",
        22: "The two C sharps make an octave, with E and G sharp between them. Keep the hand spread for the whole bar.",
        23: "Three shapes follow each other: E major, then B and G sharp, then B major. The left hand changes to B at the half bar.",
      },
    },
  },
  de: {
    about:
      "Grieg schrieb die Morgenstimmung 1875 für Ibsens Schauspiel Peer Gynt und veröffentlichte sie 1888 in seiner ersten Peer-Gynt-Suite. " +
      "Ihre Melodie verwendet nur fünf Töne der Tonleiter und wandert zwischen Flöte und Oboe hin und her. " +
      "Der Film Soylent Green von 1973 spielt sie, während ein sterbender Mann der Musik lauscht, die er gewählt hat.",
    funFact: "Die Musik malt einen Sonnenaufgang in der marokkanischen Wüste, nicht über einem norwegischen Fjord, wie die meisten Hörer glauben.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand. Die Hand bleibt an derselben Stelle.",
          "Jetzt die linke Hand allein. Sie hält jeden Griff einen ganzen Takt lang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Dein rechter Daumen liegt auf dem mittleren C, und Finger 5 beginnt auf dem G. Finger 2 und 3 liegen auf D und E.",
          "Nach dem ersten C wiegen sich vier kurze Töne zwischen D und E. Zähl sie gleichmäßig.",
          "Spiel leise, wie die langsam aufgehende Sonne. Jeder Ton soll in den nächsten fließen.",
        ],
        tricky: {
          5: "Hier nimmt Finger 2 das E, und Finger 4 nimmt das G. So ist Finger 5 frei für das hohe A in Takt 6.",
          6: "Finger 5 spielt das A, und Finger 2 spielt das E. Halt die Hand dazwischen offen.",
          7: "Finger 5 geht vom A zurück zum G. Die linke Hand wechselt in der Mitte des Takts zu D und G.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: einen tiefen Ton, dann zweimal einen Zweiklang. Die Hand bleibt still.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand spielt auf jedem Schlag. Zähl eins, zwei, drei, zweimal in jedem Takt.",
          "Spiel die Akkorde der linken Hand leise, damit die Melodie wie Morgenlicht darüber schwebt.",
          "Am Ende spielst du G und H zusammen. Finger 1 und 3 drücken sie wie einen Ton.",
        ],
        tricky: {
          5: "Hier nimmt Finger 2 das H, und Finger 4 nimmt das D. So ist Finger 5 frei für das hohe E in Takt 6.",
          7: "Finger 5 geht vom E zurück zum D. Die linke Hand wechselt in der Mitte des Takts zu A und D.",
          9: "Die linke Hand lässt Finger 5 auf dem G. Finger 4 und 2 gehen für den neuen Akkord zu A und C.",
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
          "In unseren eigenen Takten wandert die Hand. Schau voraus auf den ersten Finger jedes Takts.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          7: "In der Mitte des Takts wechselt die linke Hand zu einer Alberti-Figur in A-Dur, mit Finger 5 auf dem tiefen A.",
          11: "Fünf Töne gehen vom H hinunter zum D, ein Finger für jeden. Dann geht Finger 2 zurück hinauf zum E.",
          24: "Nutz die kurze Pause, um die rechte Hand über Fis, A und D für den letzten Akkord zu spannen.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann zweimal einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Arpeggios der linken Hand allein. Sie steigen zwei Oktaven hinauf und kommen wieder herunter.",
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
          6: "Die linke Hand springt für den ganzen Takt zum Cis. Die rechte Hand spielt das Cis mit Finger 5 und das Gis mit Finger 2.",
          22: "Die beiden Cis bilden eine Oktave, mit E und Gis dazwischen. Halt die Hand den ganzen Takt lang gespannt.",
          23: "Drei Griffe folgen aufeinander: E-Dur, dann H und Gis, dann H-Dur. Die linke Hand wechselt in der Mitte des Takts zum H.",
        },
      },
    },
  },
};

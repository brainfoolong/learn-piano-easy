/**
 * *Symphony No. 5*: the four-note motif that opens Beethoven's symphony, in four versions of ours.
 *
 * The tune is bars 1 to 5 of the first movement, as the score in Wikipedia's article on the symphony
 * prints it. The print is in 2/4 and C minor, Allegro con brio. The tune writes every eighth as a
 * quarter, so each print bar is a bar of 4/4. Each fermata note holds one whole bar, and the tied D of
 * print bars 4 and 5 is one bar. The tune is four bars, and the hook is all four.
 *
 * Every version plays the tune, then bars of our own built on the motif's rhythm: three short notes and
 * a long one. The tune's chords are C minor, then G major under the F and the D. Our bars move through
 * C minor, G major, A-flat major and F minor, and every version closes on C minor. Common and Rare move
 * the song to A minor, so their chords are A minor, E major, F major and D minor.
 *
 * Common plays the tune in quarters over held bass notes, with both hands in one place. Rare plays the
 * tune in eighths, with two-note chords on our long notes, over a bass note and two short chords. Epic
 * plays the tune in octaves over an Alberti bass, and climbs a scale with the thumb passing under. Legendary
 * plays the tune in four-note chords over a stride bass, then runs in sixteenths over arpeggios across two
 * octaves. It plays the tune again in octaves and ends on a four-note chord. Where the tune is in octaves or
 * chords, its third short note ends early, so the hand has a rest to jump to the long note.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Epic and Legendary keep. */
const C_MINOR: Key = { tonic: 0, mode: "minor" };

/** The key Common and Rare move the song to. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 4/4, in quarters, which are the print's eighths: one bar per print bar. */
const tune = "r:1 G4:1 G4:1 G4:1 | Eb4:4 | r:1 F4:1 F4:1 F4:1 | D4:4";

/** Each pitch of the C minor text, its pitch in A minor a minor third down, and the octave it loses. */
const DOWN_A_THIRD: Record<string, [string, number]> = {
  C: ["A", 1],
  D: ["B", 1],
  Eb: ["C", 0],
  F: ["D", 0],
  G: ["E", 0],
  Ab: ["F", 0],
  Bb: ["G", 0],
  B: ["G#", 1],
};

/** `text`, written in C minor, moved down a minor third to A minor. */
function toAMinor(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => {
    const to = DOWN_A_THIRD[name];
    if (to === undefined) throw new Error(`No A minor pitch for ${name}`);
    return `${to[0]}${Number(octave) - to[1]}`;
  });
}

/** Bars of `patterns` from `chords`, such as `"ccgg"`: one letter per pattern, `perBar` patterns per bar. */
function bars(patterns: Record<string, string>, chords: string, perBar: number): string {
  const parts = [...chords].map((chord) => {
    const pattern = patterns[chord];
    if (pattern === undefined) throw new Error(`No pattern for chord ${chord}`);
    return pattern;
  });
  const lines: string[] = [];
  for (let at = 0; at < parts.length; at += perBar) lines.push(parts.slice(at, at + perBar).join(" "));
  return lines.join(" | ");
}

/** The tune's chords, one a bar: c, g, a and f are C minor, G major, A-flat major and F minor. */
const TUNE_CHORDS = "ccgg";

/** The chords of Rare's and Epic's own bars, one a bar, before the closing bar. */
const OWN_CHORDS = "ccggaaffcfg";

/** The tune in 4/4 quarters, fingered in the hand's one place from D to A flat. */
const TUNE_QUARTERS = "r:1 G4/4:1 G4/4:1 G4/4:1 | Eb4/2:4 | r:1 F4/3:1 F4/3:1 F4/3:1 | D4/1:4";

/** Common's eight bars after the tune, in quarters, in the same place as the tune. */
const COMMON_OWN = [
  "r:1 Eb4/2:1 F4/3:1 G4/4:1 | D4/1:4 | r:1 Ab4/5:1 Ab4/5:1 Ab4/5:1 | F4/3:4",
  "r:1 G4/4:1 Ab4/5:1 G4/4:1 | Eb4/2:4 | r:1 F4/3:1 F4/3:1 D4/1:1 | Eb4/2:4",
].join(" | ");

/** Common's bass for each bar, in quarters: one note, or an open fifth for F minor, held. */
const HELD: Record<string, string> = {
  c: "C4/1:4",
  g: "G3/4:4",
  a: "Ab3/3:4",
  f: "F3+C4/5+1:4",
};

/** The tune in 4/4 eighths, fingered as in Common. */
const TUNE_EIGHTHS = "r:2 G4/4:2 G4/4:2 G4/4:2 | Eb4/2:8 | r:2 F4/3:2 F4/3:2 F4/3:2 | D4/1:8";

/** Rare's twelve bars after the tune, in eighths: the motif in each bar, with a two-note chord on its long note. */
const RARE_OWN = [
  "r:1 G4/4:1 G4/4:1 G4/4:1 Eb4/2:4 | r:1 F4/3:1 Eb4/2:1 D4/1:1 Eb4+G4/2+4:4",
  "r:1 F4/3:1 F4/3:1 F4/3:1 D4/1:4 | r:1 Eb4/2:1 F4/3:1 G4/4:1 D4+G4/1+4:4",
  "r:1 Ab4/5:1 Ab4/5:1 Ab4/5:1 Eb4/2:4 | r:1 F4/3:1 F4/3:1 F4/3:1 Eb4+Ab4/2+5:4",
  "r:1 Ab4/5:1 Ab4/5:1 Ab4/5:1 F4/3:4 | r:1 Eb4/2:1 F4/3:1 Ab4/5:1 F4/3:4",
  "r:1 G4/4:1 G4/4:1 G4/4:1 Eb4+G4/2+4:4 | r:1 Ab4/5:1 Ab4/5:1 Ab4/5:1 F4+Ab4/3+5:4",
  "r:1 F4/3:1 F4/3:1 F4/3:1 D4+F4/1+3:4 | Eb4+G4/2+4:8",
].join(" | ");

/** Rare's bass for each bar, in eighths: a half note, then two short chords, all in one hand position. */
const PULSE: Record<string, string> = {
  c: "C4/1:4 G3+C4/4+1:2 G3+C4/4+1:2",
  g: "G3/4:4 G3/4:2 G3/4:2",
  a: "Ab3/3:4 Ab3+C4/3+1:2 Ab3+C4/3+1:2",
  f: "F3/5:4 Ab3+C4/3+1:2 Ab3+C4/3+1:2",
};

/** Epic's tune in eighths, in octaves. */
const TUNE_OCTAVES_EIGHTHS =
  "r:2 G4+G5/1+5:2 G4+G5/1+5:2 G4+G5/1+5:1 r:1 | Eb4+Eb5/1+5:8 | r:2 F4+F5/1+5:2 F4+F5/1+5:2 F4+F5/1+5:1 r:1 | D4+D5/1+5:8";

/** Epic's twelve bars after the tune, in eighths, with a scale in bar 12 where the thumb passes under. */
const EPIC_OWN = [
  "r:1 Eb5/3:1 Eb5/3:1 Eb5/3:1 C5+G5/1+5:4 | r:1 G5/5:1 F5/4:1 Eb5/3:1 C5+Eb5/1+3:4",
  "r:1 F5/5:1 F5/5:1 F5/5:1 B4+D5/1+3:4 | r:1 D5/3:1 Eb5/4:1 D5/3:1 B4+G5/1+5:4",
  "r:1 Eb5/3:1 Eb5/3:1 Eb5/3:1 C5+Ab5/1+5:4 | r:1 C6/5:1 Bb5/4:1 Ab5/3:1 Eb5+Ab5/1+3:4",
  "r:1 Ab5/5:1 Ab5/5:1 Ab5/5:1 C5+F5/1+4:3 r:1 | F4/1:1 G4/2:1 Ab4/3:1 Bb4/1:1 C5/2:1 D5/3:1 Eb5/4:1 F5/5:1",
  "r:1 G5/5:1 G5/5:1 G5/5:1 C5+Eb5/1+3:4 | r:1 F5/4:1 Ab5/5:1 F5/4:1 C5+F5/1+4:4",
  "r:1 D5/3:1 D5/3:1 D5/3:1 B4+F5/1+5:4 | C5+Eb5+G5/1+3+5:8",
].join(" | ");

/** Epic's Alberti bass for each bar, in eighths: low, high, middle, high, twice. */
const ALBERTI: Record<string, string> = {
  c: "C3/5:1 G3/1:1 Eb3/3:1 G3/1:1",
  g: "G2/5:1 D3/1:1 B2/3:1 D3/1:1",
  a: "Ab2/5:1 Eb3/1:1 C3/3:1 Eb3/1:1",
  f: "F2/5:1 C3/1:1 Ab2/3:1 C3/1:1",
};
for (const chord of Object.keys(ALBERTI)) ALBERTI[chord] = `${ALBERTI[chord]} ${ALBERTI[chord]}`;

/** Legendary's tune in sixteenths, each note the top of a four-note chord. */
const TUNE_CHORDS_SIXTEENTHS = [
  "r:4 G4+C5+Eb5+G5/1+2+3+5:4 G4+C5+Eb5+G5/1+2+3+5:4 G4+C5+Eb5+G5/1+2+3+5:2 r:2 | Eb4+G4+C5+Eb5/1+2+3+5:16",
  "r:4 G4+B4+D5+F5/1+2+3+5:4 G4+B4+D5+F5/1+2+3+5:4 G4+B4+D5+F5/1+2+3+5:2 r:2 | D4+G4+B4+D5/1+2+3+5:16",
].join(" | ");

/** Legendary's tune again in sixteenths, in octaves. */
const TUNE_OCTAVES_SIXTEENTHS =
  "r:4 G4+G5/1+5:4 G4+G5/1+5:4 G4+G5/1+5:2 r:2 | Eb4+Eb5/1+5:16 | r:4 F4+F5/1+5:4 F4+F5/1+5:4 F4+F5/1+5:2 r:2 | D4+D5/1+5:14 r:2";

/** Legendary's twelve bars after the tune, in sixteenths, with a run in bar 12 where the thumb passes under twice. */
const LEGENDARY_OWN = [
  "r:2 G5/5:2 G5/5:2 G5/5:2 C5+Eb5+G5/1+2+5:8",
  "G5/5:1 F5/4:1 Eb5/3:1 D5/2:1 C5/1:1 D5/2:1 Eb5/3:1 F5/4:1 G5/5:4 C5+Eb5/1+3:4",
  "r:2 F5/5:2 F5/5:2 F5/5:2 B4+D5+F5/1+2+5:8",
  "D5/3:1 Eb5/4:1 D5/3:1 C5/2:1 B4/1:1 C5/2:1 D5/3:1 Eb5/4:1 F5/5:4 B4+D5/1+3:4",
  "r:2 Eb5/3:2 Eb5/3:2 Eb5/3:2 C5+Eb5+Ab5/1+2+5:8",
  "C5/1:1 Eb5/2:1 Ab5/5:1 Eb5/2:1 C5/1:1 Eb5/2:1 Ab5/5:1 Eb5/2:1 C5/1:1 Eb5/2:1 Ab5/5:1 Eb5/2:1 C5+Eb5+Ab5/1+2+5:4",
  "r:2 Ab5/5:2 Ab5/5:2 Ab5/5:2 C5+F5+Ab5/1+3+5:6 r:2",
  "F4/1:1 G4/2:1 Ab4/3:1 Bb4/1:1 C5/2:1 D5/3:1 Eb5/4:1 F5/1:1 G5/2:1 Ab5/3:1 Bb5/4:1 C6/5:1 Ab5/3:2 F5/1:2",
  "r:2 G5/5:2 G5/5:2 G5/5:2 C5+Eb5+G5/1+2+5:8",
  "r:2 Ab5/5:2 Ab5/5:2 Ab5/5:2 C5+F5+Ab5/1+3+5:8",
  "r:2 F5/5:2 F5/5:2 F5/5:2 B4+D5+F5/1+2+5:8",
  "D5/3:1 Eb5/4:1 D5/3:1 C5/2:1 B4/1:4 r:8",
].join(" | ");

/** The chords of Legendary's own bars, one a bar. */
const LEGENDARY_OWN_CHORDS = "ccggaaffcfgg";

/** Legendary's stride for each half bar, in sixteenths: an octave, then a chord, each with a rest to jump. */
const STRIDE: Record<string, string> = {
  c: "C2+C3/5+1:2 r:2 Eb3+G3+C4/4+2+1:2 r:2",
  g: "G1+G2/5+1:2 r:2 D3+G3+B3/4+2+1:2 r:2",
};

/** The tune's chords for Legendary's stride, two per bar. */
const TUNE_HALVES = "ccccgggg";

/** The six notes of each chord over two octaves, for Legendary's arpeggios. */
const WIDE_NOTES: Record<string, string> = {
  c: "C2 G2 C3 Eb3 G3 C4",
  g: "G1 D2 G2 B2 D3 G3",
  a: "Ab1 Eb2 Ab2 C3 Eb3 Ab3",
  f: "F1 C2 F2 Ab2 C3 F3",
};

/** Legendary's bar of arpeggio in eighths: up two octaves and back one note, then a rest to jump. */
const WIDE: Record<string, string> = {};
for (const [chord, notes] of Object.entries(WIDE_NOTES)) {
  const pitches = notes.split(" ");
  const fingers = [5, 2, 1, 3, 2, 1];
  WIDE[chord] = `${[0, 1, 2, 3, 4, 5, 4].map((at) => `${pitches[at]}/${fingers[at]}:2`).join(" ")} r:2`;
}

/** `pattern` repeated `count` times, one bar each. */
function repeat(pattern: string, count: number): string {
  return Array(count).fill(pattern).join(" | ");
}

export const beethoven5: OurSong = {
  slug: "beethoven-5",
  title: "Symphony No. 5",
  aka: ["Beethoven's Fifth", "Fifth Symphony", "Op. 67", "Schicksalssinfonie"],
  source: {
    composer: "Ludwig van Beethoven",
    died: 1827,
    published: 1809,
    edition:
      "Symphony No. 5 in C minor, Op. 67, first movement, bars 1 to 5, as the score in Wikipedia's article on the symphony prints it; the first edition was printed in April 1809",
  },
  about:
    "Beethoven's Fifth Symphony opens with four notes, three short and one long. " +
    "Its first printed edition appeared in April 1809. " +
    "The film Fantasia 2000 (1999) opens with this symphony.",
  funFact: "Beethoven dedicated the symphony to two of his patrons, Prince Joseph Franz von Lobkowitz and Count Razumovsky.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 4, key: C_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      right: toAMinor(`${TUNE_QUARTERS} | ${COMMON_OWN}`),
      left: toAMinor(bars(HELD, `${TUNE_CHORDS}cgafcagc`, 1)),
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 12 with the right hand alone. The hand stays in one place.", hands: "right", speed: 0.6, loop: [5, 12], wait: true },
        { text: "Now the left hand alone. It holds one note for a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first four bars, slowly.", hands: "both", speed: 0.7, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "Rest on beat one. Then play E on beats two, three and four." },
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the three short notes strongly, and let the long note ring for the whole bar." },
        { fromBar: 5, toBar: 12, kind: "fingering", text: "The thumb stays on B, and each finger keeps its own key." },
      ],
      tricky: {
        1: "Rest on beat one, then play E three times with finger 4. Keep the finger loose for each new note.",
        7: "Finger 5 plays F three times. Lift it a little between the notes, so each one sounds.",
        9: "Fingers 4 and 5 rock between E and F. Keep both fingers close to the keys.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: toAMinor(`${TUNE_EIGHTHS} | ${RARE_OWN}`),
      left: toAMinor(`${bars(PULSE, `${TUNE_CHORDS}${OWN_CHORDS}`, 1)} | C4/1:8`),
      skills: ["eighth-notes", "two-note-chords"],
      practice: [
        { text: "Play the first four bars with the right hand alone. The short notes are eighths.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the left hand alone. A long bass note comes first, then two short chords.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Join the hands on bars 5 to 8, slowly.", hands: "both", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "Each motif starts with a short rest. Then three quick notes lead into the long one." },
        { fromBar: 5, toBar: 15, kind: "sound", text: "Every bar plays the opening idea again: three short notes and a long one." },
        { fromBar: 16, toBar: 16, kind: "fingering", text: "End with C and E together. Fingers 2 and 4 press them as one." },
      ],
      tricky: {
        1: "Three quick E's follow the short rest. Play them with finger 4, light and even.",
        5: "Play three quick E's with finger 4. Then finger 2 holds C for half the bar.",
        13: "After the three quick E's, fingers 2 and 4 press C and E together.",
      },
    },
    epic: {
      key: C_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: `${TUNE_OCTAVES_EIGHTHS} | ${EPIC_OWN}`,
      left: `${bars(ALBERTI, `${TUNE_CHORDS}${OWN_CHORDS}`, 1)} | C2+G2+C3/5+2+1:8`,
      pedal: repeat("P:8", 16),
      skills: ["alberti-bass", "thumb-under", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the octaves of the first four bars alone. Keep the hand open from thumb to little finger.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the scale in bar 12 with the right hand alone. Pass the thumb under to B flat.", hands: "right", speed: 0.5, loop: [12, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the octaves loud and sharp, then let each long note ring." },
        { fromBar: 5, toBar: 16, kind: "sound", text: "Change the pedal at the start of every bar, when the chord changes." },
        { fromBar: 12, toBar: 12, kind: "fingering", text: "Pass the thumb under to B flat, then climb with fingers 2 to 5." },
      ],
      tricky: {
        5: "Play E flat three times with finger 3. Then open the hand wide for C and G.",
        10: "Start high on C with finger 5, and walk down to A flat. Then the thumb drops to E flat.",
        12: "Pass the thumb under to B flat after A flat. Fingers 2 to 5 then climb to F.",
      },
    },
    legendary: {
      key: C_MINOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [TUNE_CHORDS_SIXTEENTHS, LEGENDARY_OWN, TUNE_OCTAVES_SIXTEENTHS, "C4+Eb4+G4+C5/1+2+3+5:16"].join(" | "),
      left: [
        bars(STRIDE, TUNE_HALVES, 2),
        bars(WIDE, LEGENDARY_OWN_CHORDS, 1),
        bars(STRIDE, TUNE_HALVES, 2),
        "C2+G2+C3/5+2+1:16",
      ].join(" | "),
      pedal: repeat("P:8 P:8", 21),
      skills: ["melody-in-chords", "stride", "arpeggios"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then a chord, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the run in bar 12 with the right hand alone. The thumb passes under twice.", hands: "right", speed: 0.4, loop: [12, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Press all four notes of each chord as one, with the top note a little louder." },
        { fromBar: 5, toBar: 16, kind: "trick", text: "The left hand climbs two octaves in every bar. Finger 3 crosses over the thumb." },
        { fromBar: 12, toBar: 12, kind: "fingering", text: "Pass the thumb under to B flat, and again to F. Then finger 5 reaches C." },
      ],
      tricky: {
        3: "The left hand jumps from the low G up to the chord. Use the short rest after each octave to jump.",
        4: "The right hand holds its chord. Let the left hand jump between the low G and the chord above it.",
        19: "Play F in octaves three times, with the hand open. The left hand jumps from the low G as before.",
      },
    },
  },
  de: {
    about:
      "Beethovens Fünfte Sinfonie beginnt mit vier Tönen, drei kurzen und einem langen. " +
      "Ihre erste gedruckte Ausgabe erschien im April 1809. " +
      "Der Film Fantasia 2000 (1999) beginnt mit dieser Sinfonie.",
    funFact: "Beethoven widmete die Sinfonie zwei seiner Gönner, Fürst Joseph Franz von Lobkowitz und Graf Rasumowsky.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 12 nur mit der rechten Hand. Die Hand bleibt an einem Platz.",
          "Jetzt die linke Hand allein. Sie hält einen Ton einen ganzen Takt lang.",
          "Spiel die ersten vier Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Auf Schlag eins ist Pause. Dann spielst du das E auf den Schlägen zwei, drei und vier.",
          "Spiel die drei kurzen Töne kräftig, und lass den langen Ton den ganzen Takt klingen.",
          "Der Daumen bleibt auf dem H, und jeder Finger behält seine eigene Taste.",
        ],
        tricky: {
          1: "Auf Schlag eins ist Pause, dann spielst du dreimal das E mit Finger 4. Halt den Finger für jeden neuen Ton locker.",
          7: "Finger 5 spielt dreimal das F. Heb ihn zwischen den Tönen ein wenig an, damit jeder Ton klingt.",
          9: "Finger 4 und 5 wiegen zwischen E und F hin und her. Halt beide Finger nah an den Tasten.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand. Die kurzen Töne sind Achtel.",
          "Spiel die linke Hand allein. Zuerst kommt ein langer Basston, dann zwei kurze Akkorde.",
          "Spiel die Takte 5 bis 8 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Jedes Motiv beginnt mit einer kurzen Pause. Dann führen drei schnelle Töne zum langen Ton.",
          "Jeder Takt spielt die Idee vom Anfang noch einmal: drei kurze Töne und einen langen.",
          "Am Ende spielst du C und E zusammen. Finger 2 und 4 drücken sie wie einen Ton.",
        ],
        tricky: {
          1: "Nach der kurzen Pause kommen drei schnelle E. Spiel sie mit Finger 4, leicht und gleichmäßig.",
          5: "Spiel drei schnelle E mit Finger 4. Dann hält Finger 2 das C einen halben Takt lang.",
          13: "Nach den drei schnellen E drücken Finger 2 und 4 das C und das E zusammen.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Oktaven der ersten vier Takte allein. Halt die Hand vom Daumen bis zum kleinen Finger offen.",
          "Spiel die Tonleiter in Takt 12 nur mit der rechten Hand. Führ den Daumen unter zum B.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Spiel die Oktaven laut und scharf, und lass dann jeden langen Ton klingen.",
          "Wechsle das Pedal am Anfang jedes Takts, wenn der Akkord wechselt.",
          "Führ den Daumen unter zum B, dann steig mit Finger 2 bis 5 weiter.",
        ],
        tricky: {
          5: "Spiel dreimal das Es mit Finger 3. Dann öffne die Hand weit für C und G.",
          10: "Beginn oben auf dem C mit Finger 5, und geh hinunter zum As. Dann fällt der Daumen auf das Es.",
          12: "Führ nach dem As den Daumen unter zum B. Dann steigen Finger 2 bis 5 hinauf zum F.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel den Lauf in Takt 12 nur mit der rechten Hand. Der Daumen geht zweimal unter.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Drück alle vier Töne jedes Akkords wie einen, mit dem oberen Ton etwas lauter.",
          "Die linke Hand steigt in jedem Takt zwei Oktaven hinauf. Finger 3 kreuzt über den Daumen.",
          "Führ den Daumen unter zum B und noch einmal zum F. Dann reicht Finger 5 zum C.",
        ],
        tricky: {
          3: "Die linke Hand springt vom tiefen G hinauf zum Akkord. Nutz die kurze Pause nach jeder Oktave zum Springen.",
          4: "Die rechte Hand hält ihren Akkord. Lass die linke Hand zwischen dem tiefen G und dem Akkord darüber springen.",
          19: "Spiel das F dreimal in Oktaven, mit offener Hand. Die linke Hand springt wie vorher vom tiefen G.",
        },
      },
    },
  },
};

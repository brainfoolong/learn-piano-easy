/**
 * *Carol of the Bells*: Mykola Leontovych's *Shchedryk*, in four versions of ours.
 *
 * The tune follows Leontovych's own *Shchedryk*, and never Peter Wilhousky's later arrangement. The
 * score is in G minor, and the tune here is in A minor, a whole step higher, at the score's own octave.
 *
 * The tune is in 3/4, and every length here is twice as long, in 3/2. A half note is one beat, so the
 * score's eighths are quarters, and Common plays them at their place. The hook is bars 1 to 4, the
 * four-note figure that rings through almost every bar.
 *
 * Common plays the tune over held fifths, and the hand never moves. It leaves out the low E, F sharp and
 * G sharp that start bars 17 and 19. It ends in bar 24, without the last A. Rare plays every note over
 * a root and fifth in turns, with triads in the middle, and lifts the hand in bars 17 and 19. Epic rocks
 * a broken chord under sixths, with a falling bass and a thumb under in the climb. Legendary rings the
 * figure in both hands, with stride, the tune in chords and the climb in both hands two octaves apart.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, a whole step above the score's G minor. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** `bar` repeated `count` times, as bars. */
function times(bar: string, count: number): string {
  return Array<string>(count).fill(bar).join(" | ");
}

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** Bars of `patterns` from `chords`, one letter per bar. */
function chordBars(patterns: Record<string, string>, chords: string): string {
  return [...chords].map((chord) => patterns[chord]).join(" | ");
}

/** The four-note figure of the tune, in quarters. */
const FIGURE = "C5:2 B4:1 C5:1 A4:2";

/** The answer a third higher of bars 9 to 12, in quarters. */
const ANSWER = "E5:2 D5:1 E5:1 C5:2";

/** The climb of bars 17 and 18, in quarters. */
const CLIMB = "E4:1 F#4:1 G#4:1 A4:1 B4:1 C5:1 | D5:1 E5:1 D5:2 C5:2";

/** The tune in 3/2, in quarters: 25 bars. */
const tune = [
  times(FIGURE, 8),
  times(ANSWER, 4),
  "A5:2 A5:1 A5:1 G5:1 F5:1 | E5:2 E5:1 E5:1 D5:1 C5:1 | D5:2 D5:1 D5:1 E5:1 D5:1 | A4:2 A4:1 A4:1 A4:2",
  CLIMB,
  CLIMB,
  times(FIGURE, 4),
  "A4:6",
].join(" | ");

/** The figure in the right hand, in quarters, the thumb on A. */
const BELL = "C5/3:2 B4/2:1 C5/3:1 A4/1:2";

/** Bars 9 to 11 in the right hand, in quarters. */
const CALL = "E5/5:2 D5/4:1 E5/5:1 C5/3:2";

/** Bar 12 in the right hand, in quarters: the thumb takes C, ready to reach the high A. */
const CALL_LAST = "E5/5:2 D5/4:1 E5/5:1 C5/1:2";

/** Bars 13 to 15 in the right hand, in quarters. Fingers 2 and 3 swap on the repeated E, so the hand never moves. */
const HIGH = "A5/5:2 A5/5:1 A5/5:1 G5/4:1 F5/3:1 | E5/2:2 E5/2:1 E5/3:1 D5/2:1 C5/1:1 | D5/2:2 D5/2:1 D5/2:1 E5/3:1 D5/2:1";

/** Bar 16 in the right hand, in quarters: the last A moves to finger 3, ready for the low E. */
const REPEATED_A = "A4/1:2 A4/1:1 A4/1:1 A4/3:2";

/** Bars 17 and 18 for Common, in quarters: the A holds over the low notes it leaves out. */
const CLIMB_COMMON = "A4/1:4 B4/2:1 C5/3:1 | D5/4:1 E5/5:1 D5/4:2 C5/3:2";

/** Bars 17 and 18 for Rare, in eighths: a short G sharp, a lift, and the thumb lands on A. */
const CLIMB_LIFT = "E4/1:2 F#4/2:2 G#4/3:1 r:1 A4/1:2 B4/2:2 C5/3:2 | D5/4:2 E5/5:2 D5/4:4 C5/3:4";

/** Bars 17 and 18 in quarters, with the thumb passing under on A. */
const CLIMB_UNDER = "E4/1:1 F#4/2:1 G#4/3:1 A4/1:1 B4/2:1 C5/3:1 | D5/4:1 E5/5:1 D5/4:2 C5/3:2";

/** One bar of a held bass in quarters, the hand kept on A to E: A minor, C, D minor or E. */
const HELD: Record<string, string> = {
  A: "A2+E3/5+1:6",
  C: "C3/3:6",
  D: "D3/2:6",
  E: "E3/1:6",
};

/** One bar of a block chord in quarters: A minor, C, F over A, G over B, E without its fifth. */
const BLOCK: Record<string, string> = {
  A: "A2+C3+E3/5+4+2:6",
  C: "C3+E3+G3/4+2+1:6",
  F: "A2+C3+F3/5+4+1:6",
  G: "B2+D3+G3/5+3+1:6",
  E: "E3+G#3/2+1:6",
};

/** One bar of root and fifth in turns in quarters, which leaves the C out from under the B. */
const ROOT_FIFTH = "A2/5:2 E3/2:2 A2+E3/5+2:2";

/**
 * One bar of broken chord in eighths: root, fifth, octave, tenth, octave, fifth, with a breath before
 * the next root. On A minor, G, F, E and C.
 */
const ROCK: Record<string, string> = {
  A: "A2/5:2 E3/3:2 A3/2:2 C4/1:2 A3/2:2 E3/3:1 r:1",
  G: "G2/5:2 D3/3:2 G3/2:2 B3/1:2 G3/2:2 D3/3:1 r:1",
  F: "F2/5:2 C3/3:2 F3/2:2 A3/1:2 F3/2:2 C3/3:1 r:1",
  E: "E2/5:2 B2/3:2 E3/2:2 G#3/1:2 E3/2:2 B2/3:1 r:1",
  C: "C3/5:2 G3/3:2 C4/2:2 E4/1:2 C4/2:2 G3/3:1 r:1",
};

/** The figure with sixths below it, in quarters. */
const BELL_SIXTHS = "E4+C5/1+5:2 D4+B4/1+4:1 E4+C5/1+5:1 C4+A4/1+4:2";

/** The figure with thirds below it, in quarters, for the bar over F. */
const BELL_THIRDS = "A4+C5/2+4:2 G4+B4/1+3:1 A4+C5/2+4:1 F4+A4/1+3:2";

/** Bars 5 to 8 of Epic in eighths, over the falling bass: the last chord breathes before the next bar. */
const BELLS_FALLING = inEighths([BELL_SIXTHS, BELL_SIXTHS, BELL_THIRDS, "E4+C5/1+5:2 D4+B4/1+4:1 E4+C5/1+5:1"].join(" | ")) + " C4+A4/1+4:3 r:1";

/** Bars 9 to 11 of Epic in quarters, the answer with sixths below it. */
const CALL_SIXTHS = "G4+E5/1+5:2 F4+D5/1+4:1 G4+E5/1+5:1 E4+C5/1+4:2";

/** The figure in the right hand in eighths, with a low E ringing between its notes like a second bell. */
const BELL_FILL = "C5/5:2 E4/1:2 B4/4:2 C5/5:2 A4/4:2 E4/1:2";

/** The figure in the left hand in eighths, in octaves two octaves down, with a breath at the end. */
const BELL_OCTAVES = "C3+C4/5+1:4 B2+B3/5+1:2 C3+C4/5+1:2 A2+A3/5+1:3 r:1";

/** One bar of stride in eighths: the root in octaves, then the chord twice, each with a breath for the jump. */
const STRIDE: Record<string, string> = {
  A: "A1+A2/5+1:3 r:1 E3+A3/3+2:3 r:1 E3+A3+C4/3+2+1:3 r:1",
  a: "A1+A2/5+1:3 r:1 E3+A3/3+2:3 r:1 E3+A3/3+2:3 r:1",
  G: "G1+G2/5+1:3 r:1 D3+G3+B3/3+2+1:3 r:1 D3+G3+B3/3+2+1:3 r:1",
  F: "F1+F2/5+1:3 r:1 F3+A3/2+1:3 r:1 C3+F3+A3/4+2+1:3 r:1",
  E: "E1+E2/5+1:3 r:1 B2+E3+G#3/4+2+1:3 r:1 B2+E3/4+2:3 r:1",
  C: "C2+C3/5+1:3 r:1 E3+G3+C4/3+2+1:3 r:1 E3+G3+C4/3+2+1:3 r:1",
};

/** Bars 13 to 16 of Legendary in eighths: the tune in chords. */
const HIGH_CHORDS =
  "C5+F5+A5/1+3+5:4 C5+F5+A5/1+3+5:2 C5+F5+A5/1+3+5:2 G5/5:2 F5/4:2 | " +
  "G4+C5+E5/1+2+4:4 G4+C5+E5/1+2+4:2 G4+C5+E5/1+2+4:2 D5/3:2 C5/2:2 | " +
  "G4+B4+D5/1+2+4:4 G4+B4+D5/1+2+4:2 G4+B4+D5/1+2+4:2 E5/5:2 D5/4:1 r:1 | " +
  "C4+E4+A4/1+2+5:4 C4+E4+A4/1+2+5:2 C4+E4+A4/1+2+5:2 C4+E4+A4/1+2+5:4";

/** Bars 17 and 18 of Legendary's left hand in eighths, two octaves below the right, with finger 3 over the thumb. */
const CLIMB_LOW = "E2/5:2 F#2/4:2 G#2/3:2 A2/2:2 B2/1:2 C3/3:2 | D3/2:2 E3/1:2 D3/2:4 C3/3:3 r:1";

export const carolOfTheBells: OurSong = {
  slug: "carol-of-the-bells",
  title: "Carol of the Bells",
  source: {
    composer: "Mykola Leontovych",
    died: 1921,
    published: 1919,
    edition: "Leontovych's final revision of Shchedryk (1919), as Wikipedia engraves its melody",
  },
  about:
    "Shchedryk is a Ukrainian New Year song, and its name comes from Bountiful Evening. " +
    "Mykola Leontovych, a Ukrainian composer, conductor and teacher, built it on a four-note figure in 3/4 time. " +
    "It was first sung in December 1916 in Kyiv. " +
    "Peter J. Wilhousky later made it the English Carol of the Bells.",
  funFact: "Wilhousky gave it words about bells because the tune reminded him of handbells.",
  mythic: null,
  collection: "christmas",
  aka: ["Shchedryk"],
  tune: { text: tune, numerator: 3, denominator: 2, steps: 2, key: A_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 150,
      numerator: 3,
      denominator: 2,
      steps: 2,
      right: [
        times(BELL, 8),
        times(CALL, 3),
        "E5/5:2 D5/4:1 E5/5:1 C5/1:1 r:1",
        HIGH,
        "A4/1:2 A4/1:1 A4/1:1 A4/1:2",
        CLIMB_COMMON,
        CLIMB_COMMON,
        times(BELL, 4),
      ].join(" | "),
      left: chordBars(HELD, "AAAAAAAACACADCEAEAEAAAAA"),
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone: C, B, C, A, again and again.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 12 to 16 with the right hand alone, up to the high A and back down.", hands: "right", speed: 0.6, loop: [12, 16], wait: true },
        { text: "Now the left hand alone. It holds one shape for each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "The four notes ring like small bells. Play them light and even." },
        { fromBar: 12, toBar: 13, kind: "fingering", text: "The thumb takes the last C, so the little finger can reach up to the high A." },
        { fromBar: 14, toBar: 14, kind: "trick", text: "On the third E, swap from finger 2 to finger 3. The hand stays where it is." },
      ],
      tricky: {
        12: "Play the last C with the thumb, and use the short rest to open the hand for the high A.",
        18: "Fingers 4 and 5 rock between D and E, then finger 3 lands on C.",
        20: "The same as bar 18. Hold the C for its full half note before the bells come back.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 112,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: [
        inEighths([times(BELL, 8), times(CALL, 3), CALL_LAST, HIGH, REPEATED_A].join(" | ")),
        CLIMB_LIFT,
        CLIMB_LIFT,
        inEighths([times(BELL, 4), "A4/1:6"].join(" | ")),
      ].join(" | "),
      left: inEighths([times(ROOT_FIFTH, 8), chordBars(BLOCK, "CACAFAGAEAEA"), times(ROOT_FIFTH, 4), BLOCK.A].join(" | ")),
      skills: ["triads", "position-change"],
      practice: [
        { text: "Play the left hand alone. Press the three notes of each chord together.", hands: "left", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play bars 17 to 20 with the right hand alone, and lift the hand after the G sharp.", hands: "right", speed: 0.5, loop: [17, 20], wait: true },
        { text: "Join the hands on the first twelve bars, slowly.", hands: "both", speed: 0.6, loop: [1, 12], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "The left hand leaves out the C, so it never rubs against the B of the tune." },
        { fromBar: 16, toBar: 16, kind: "fingering", text: "Move the last A to finger 3. The thumb is then free for the low E." },
        { fromBar: 17, toBar: 20, kind: "trick", text: "Make the G sharp short, lift the hand, and land the thumb on A." },
      ],
      tricky: {
        12: "The thumb takes the last C, so the little finger can reach the high A in the next bar.",
        17: "Make the G sharp short, then lift the hand and land the thumb on A.",
        19: "The same climb as bar 17. Lift after the G sharp, and keep the beat steady.",
      },
    },
    epic: {
      key: A_MINOR,
      bpm: 160,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: [
        inEighths(times(BELL, 4)),
        BELLS_FALLING,
        inEighths([times(CALL_SIXTHS, 3), "G4+E5/1+5:2 F4+D5/1+4:1 G4+E5/1+5:1 C5/1:2", HIGH, REPEATED_A, CLIMB_UNDER, CLIMB_UNDER].join(" | ")),
        BELLS_FALLING,
        "C4+E4+A4/1+2+5:12",
      ].join(" | "),
      left: [chordBars(ROCK, "AAAAAGFECGCAFCGAEAEAAGFE"), "A2+E3+A3/5+2+1:12"].join(" | "),
      skills: ["broken-chords", "thirds-and-sixths", "thumb-under"],
      practice: [
        { text: "Play the left hand alone until it rocks by itself: low, up, up, top, down, down.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's sixths and thirds alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [5, 12], wait: true },
        { text: "Play the climb of bars 17 to 20 with the right hand alone. The thumb passes under on A.", hands: "right", speed: 0.5, loop: [17, 20], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 5, toBar: 8, kind: "sound", text: "The bass falls one step each bar, from A down to E, while the bells ring on above it." },
        { fromBar: 9, toBar: 12, kind: "fingering", text: "The tune is the top note of each sixth, so let the upper finger lead." },
        { fromBar: 17, toBar: 20, kind: "fingering", text: "After the G sharp, pass the thumb under to A, and the hand climbs on." },
      ],
      tricky: {
        9: "The hand jumps up from the low sixths to G and E. Lift it during the short rest at the end of bar 8.",
        10: "The thumb steps G, F, G and E, while fingers 5 and 4 ring the tune on top.",
        19: "Pass the thumb under after the G sharp, without a bump in the sound.",
      },
    },
    legendary: {
      key: A_MINOR,
      bpm: 176,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: [
        inEighths(times(BELL, 4)),
        times(BELL_FILL, 4),
        times("C5+E5/3+5:4 B4+D5/2+4:2 C5+E5/3+5:2 A4+C5/1+3:4", 3),
        "C5+E5/3+5:4 B4+D5/2+4:2 C5+E5/3+5:2 A4+C5/1+3:3 r:1",
        HIGH_CHORDS,
        inEighths([CLIMB_UNDER, CLIMB_UNDER].join(" | ")),
        times(BELL_FILL, 4),
        "A3+C4+E4+A4/1+2+3+5:12",
      ].join(" | "),
      left: [
        times(BELL_OCTAVES, 4),
        chordBars(STRIDE, "AGFE"),
        times(BELL_OCTAVES, 4),
        chordBars(STRIDE, "FCGa"),
        CLIMB_LOW,
        CLIMB_LOW,
        times(BELL_OCTAVES, 2),
        chordBars(STRIDE, "FE"),
        "A1+A2/5+1:12",
      ].join(" | "),
      skills: ["counter-melody", "stride", "melody-in-chords"],
      practice: [
        { text: "Play the left hand's octaves alone. They ring the same four-note figure two octaves down.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [5, 8], wait: false },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [13, 16], wait: true },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Both hands ring the same figure, two octaves apart, like a big bell and a small one." },
        { fromBar: 9, toBar: 12, kind: "trick", text: "The left hand keeps the four-note figure going under the tune, so the bells never stop." },
        { fromBar: 17, toBar: 20, kind: "fingering", text: "Both hands climb together. The right thumb passes under, and the left third finger crosses over." },
      ],
      tricky: {
        6: "The right hand rings its low E between the tune's notes while the left hand jumps for the stride.",
        15: "Keep the G chord light, then play E and D with fingers 5 and 4, and lift for the next chord.",
        16: "The right hand repeats one chord while the left hand jumps. Keep the A on top ringing.",
      },
    },
  },
};

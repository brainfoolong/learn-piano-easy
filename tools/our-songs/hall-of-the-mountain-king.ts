/**
 * *In the Hall of the Mountain King*: the march of the trolls from Grieg's *Peer Gynt*, in four versions
 * of ours.
 *
 * The tune is the creeping theme in B minor, and then its answer on F sharp. The score writes it in
 * staccato eighths, and the tune here doubles every length, so its eighths are quarters and Common needs
 * nothing faster. Each of Grieg's bars is then two of ours, and the hook is our first two bars.
 *
 * Grieg's piece speeds up from start to end. That accelerando is left out, and every version keeps one
 * tempo.
 *
 * Common moves the tune to A minor over held open fifths, with D sharp and B flat in the chromatic bars.
 * There the left hand holds one low note of its position, so the hands never clash. Rare plays every note
 * of the tune over a root and fifth in turns, one on each beat. Epic keeps B minor over broken chords,
 * then gives the theme to the left hand. Legendary builds up, from a plucked octave bass to the tune in
 * octaves over a driving bass, and ends in full chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const B_MINOR: Key = { tonic: 11, mode: "minor" };

/** The key of Common and Rare. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The theme and its answer in B minor, Grieg's eighths written as quarters. */
const tune = [
  "B3:1 C#4:1 D4:1 E4:1 | F#4:1 D4:1 F#4:2 | E#4:1 C#4:1 E#4:2 | E4:1 C4:1 E4:2",
  "B3:1 C#4:1 D4:1 E4:1 | F#4:1 D4:1 F#4:1 B4:1 | A4:1 F#4:1 D4:1 F#4:1 | A4:4",
  "F#4:1 G#4:1 A#4:1 B4:1 | C#5:1 A#4:1 C#5:2 | D5:1 A#4:1 D5:2 | C#5:1 A#4:1 C#5:2",
  "F#4:1 G#4:1 A#4:1 B4:1 | C#5:1 A#4:1 C#5:2 | D5:1 A#4:1 D5:2 | C#5:4",
].join(" | ");

/** The answer in A minor, in quarters, as Common and Rare play it. */
const ANSWER_A_MINOR = [
  "E4/1:1 F#4/2:1 G#4/3:1 A4/4:1 | B4/5:1 G#4/2:1 B4/4:2 | C5/5:1 G#4/2:1 C5/5:2 | B4/4:1 G#4/2:1 B4/4:2",
  "E4/1:1 F#4/2:1 G#4/3:1 A4/4:1 | B4/5:1 G#4/2:1 B4/4:2 | C5/5:1 G#4/2:1 C5/5:2",
].join(" | ");

/** The theme's first eight bars in B minor, in eighths, an octave up, as Epic and Legendary play it. */
const THEME_B_MINOR =
  "B4/1:2 C#5/2:2 D5/3:2 E5/4:2 | F#5/5:2 D5/3:2 F#5/5:4 | E#5/4:2 C#5/2:2 E#5/4:4 | E5/3:2 C5/1:2 E5/3:4 | " +
  "B4/1:2 C#5/2:2 D5/1:2 E5/2:2 | F#5/3:2 D5/1:2 F#5/3:2 B5/5:2 | A5/4:2 F#5/2:2 D5/1:2 F#5/2:2";

/** Half a bar of broken chord in eighths: B minor, C sharp major, C major, D major, F sharp major and others. */
const BROKEN: Record<string, string> = {
  b: "B2/5:1 D3/3:1 F#3/1:1 D3/3:1",
  C: "C#3/5:1 E#3/3:1 G#3/1:1 E#3/3:1",
  c: "C3/5:1 E3/3:1 G3/1:1 E3/3:1",
  d: "D3/5:1 F#3/3:1 A3/1:1 F#3/3:1",
  f: "F#2/5:1 A#2/3:1 C#3/1:1 A#2/3:1",
  a: "F#2/5:1 A#2/3:1 D3/1:1 A#2/3:1",
  e: "F#2/5:1 A#2/3:1 E3/1:1 A#2/3:1",
};

/** Bars of `patterns` from `halves`, such as `"bb CC"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** A whole bar of `chord` on each offbeat, in eighths, with a rest on each beat. */
function offbeats(chord: string): string {
  return `r:1 ${chord}:1 `.repeat(4).trim();
}

/**
 * `line`, such as `"B4:2 C#5:2 | D5:4"`, with each note doubled an octave up and played by fingers 1 and 5.
 * Each octave is an eighth shorter, with a rest that lets the hand jump to the next one.
 */
function octaves(line: string): string {
  return line.replace(
    /([A-G][#b]?)(\d):(\d+)/g,
    (_, name: string, octave: string, length: string) => `${name}${octave}+${name}${Number(octave) + 1}/1+5:${Number(length) - 1} r:1`,
  );
}

/** One bar of the left hand in octaves on `root`, such as `"B1"`: `"pulse"` on each beat, or `"drive"` on each eighth. */
function octaveBar(root: string, style: "pulse" | "drive"): string {
  const name = root.slice(0, -1);
  const octave = Number(root.slice(-1));
  const low = `${name}${octave}+${name}${octave + 1}/5+1:1`;
  return Array.from({ length: 4 }, () => (style === "pulse" ? `${low} r:1` : `${low} ${low}`)).join(" ");
}

export const hallOfTheMountainKing: OurSong = {
  slug: "hall-of-the-mountain-king",
  title: "In the Hall of the Mountain King",
  source: {
    composer: "Edvard Grieg",
    died: 1907,
    published: 1888,
    edition: "Peer Gynt Suite No. 1, Op. 46, C. F. Peters, Leipzig (1888), from the incidental music Op. 23, first played in 1876",
  },
  about:
    "Grieg wrote this music for Henrik Ibsen's play Peer Gynt, first staged in Christiania, today's Oslo, in 1876. " +
    "In this scene, the trolls crowd around Peer in the hall of their king. " +
    "The same short tune comes back again and again, each time louder and faster, until it crashes to an end.",
  funFact: "Grieg himself wrote that this piece reeked of cow pies and trollish self-satisfaction, and he could hardly bear to hear it.",
  mythic: null,
  tune: { text: tune, numerator: 4, denominator: 4, key: B_MINOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      right: [
        "A3/1:1 B3/2:1 C4/3:1 D4/4:1 | E4/5:1 C4/3:1 E4/5:2 | D#4/4:1 B3/2:1 D#4/4:2 | D4/4:1 Bb3/2:1 D4/4:2",
        "A3/1:1 B3/2:1 C4/3:1 D4/4:1 | E4/5:1 C4/1:1 E4/3:1 A4/5:1 | G4/4:1 E4/2:1 C4/1:1 E4/2:1 | G4/4:4",
        ANSWER_A_MINOR,
        "B4/4:3 r:1",
        "A3/1:1 B3/2:1 C4/3:1 D4/4:1 | E4/5:1 C4/3:1 E4/5:2 | D#4/4:1 B3/2:1 D#4/4:2 | D4/4:1 Bb3/2:1 D4/4:2",
        "A3/1:1 B3/2:1 C4/3:1 D4/4:1 | E4/5:1 C4/3:1 E4/5:2 | E4/5:1 D4/4:1 C4/3:1 B3/2:1 | A3/1:4",
      ].join(" | "),
      left: [
        "A2+E3/5+1:4 | A2+E3/5+1:4 | B2/4:4 | D3/2:4 | " + "A2+E3/5+1:4 | ".repeat(4),
        "E2+B2/5+1:4 | E2+B2/5+1:4 | E2/5:4 | E2+B2/5+1:4 | E2+B2/5+1:4 | E2+B2/5+1:4 | E2/5:4 | E2+B2/5+1:4 | ",
        "A2+E3/5+1:4 | A2+E3/5+1:4 | B2/4:4 | D3/2:4 | A2+E3/5+1:4 | A2+E3/5+1:4 | ",
        "E3/1:4 | A2+E3/5+1:4",
      ].join(""),
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play the right hand alone, slowly, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Now the right hand alone in bars 9 to 16, where the tune climbs higher.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "The left hand holds one fifth or one note for each bar. Join the hands on the first eight bars.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Each finger has its own key here: thumb on A, little finger on E." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play short and quiet, like a troll tiptoeing through a cave." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "The tune climbs higher here. Let it grow a little louder, as if the trolls are waking up." },
      ],
      tricky: {
        4: "Finger 4 reached in for D sharp in bar 3, and finger 2 reaches in for B flat here.",
        9: "The thumb lands on E, and fingers 2, 3 and 4 climb one key each. The left hand moves down to E.",
        17: "The tune starts again. Take the thumb back down to A during the rest, and the left hand back to A.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 132,
      numerator: 4,
      denominator: 4,
      right: [
        "A3/1:1 B3/2:1 C4/3:1 D4/4:1 | E4/5:1 C4/3:1 E4/5:2 | D#4/4:1 B3/2:1 D#4/4:2 | D4/4:1 Bb3/2:1 D4/4:2",
        "A3/1:1 B3/2:1 C4/3:1 D4/4:1 | E4/5:1 C4/1:1 E4/3:1 A4/5:1 | G4/4:1 E4/2:1 C4/1:1 E4/2:1 | E4+G4/2+4:4",
        ANSWER_A_MINOR,
        "G#4+B4/2+4:3 r:1",
        "A3/1:1 B3/2:1 C4/3:1 D4/4:1 | E4/5:1 C4/3:1 E4/5:2 | D#4/4:1 B3/2:1 D#4/4:2 | D4/4:1 Bb3/2:1 D4/4:2",
        "A3/1:1 B3/2:1 C4/3:1 D4/4:1 | E4/5:1 C4/3:1 E4/5:2 | E4/5:1 D4/4:1 C4/3:1 B3/2:1 | A3+E4/1+5:4",
      ].join(" | "),
      left: [
        "A2/5:1 E3/1:1 A2/5:1 E3/1:1 | A2/5:1 E3/1:1 A2/5:1 E3/1:1 | B2/5:1 F#3/1:1 B2/5:1 F#3/1:1 | G2/5:1 D3/1:1 G2/5:1 D3/1:1",
        "A2/5:1 E3/1:1 A2/5:1 E3/1:1 | A2/5:1 E3/1:1 A2/5:1 E3/1:1 | C3/5:1 G3/1:1 C3/5:1 G3/1:1 | C3+E3+G3/5+3+1:3 r:1",
        "E2/5:1 B2/1:1 E2/5:1 B2/1:1 | E2/5:1 B2/1:1 E2/5:1 B2/1:1 | E2/5:1 E3/1:1 E2/5:1 E3/1:1 | E2/5:1 B2/1:1 E2/5:1 B2/1:1",
        "E2/5:1 B2/1:1 E2/5:1 B2/1:1 | E2/5:1 B2/1:1 E2/5:1 B2/1:1 | E2/5:1 E3/1:1 E2/5:1 E3/1:1 | E2+B2/5+1:3 r:1",
        "A2/5:1 E3/1:1 A2/5:1 E3/1:1 | A2/5:1 E3/1:1 A2/5:1 E3/1:1 | B2/5:1 F#3/1:1 B2/5:1 F#3/1:1 | G2/5:1 D3/1:1 G2/5:1 D3/1:1",
        "A2/5:1 E3/1:1 A2/5:1 E3/1:1 | A2/5:1 E3/1:1 A2/5:1 E3/1:1 | E2/5:1 E3/1:1 E2/5:1 E3/1:1 | A2+C3+E3/5+3+1:4",
      ].join(" | "),
      skills: ["five-finger-position", "triads"],
      practice: [
        { text: "Play the left hand alone. It steps between two notes on every beat, like a troll's march.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 3 and 4 with the right hand alone, and watch for the sharp and the flat.", hands: "right", speed: 0.5, loop: [3, 4], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on bars 9 to 16, where the tune climbs.", hands: "both", speed: 0.7, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 3, toBar: 4, kind: "fingering", text: "D sharp and B flat are black keys. Fingers 4 and 2 reach a little further in." },
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "Both hands play on every beat. March along and keep the beats even." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "This part is the trolls getting closer. Play it a little louder than the start." },
      ],
      tricky: {
        4: "Finger 2 reaches in for B flat, while the left hand steps between G and D.",
        9: "Use the rest to drop the left hand to the low E. The right thumb starts the climb on E.",
        17: "Both hands go back to A during the rest, and the tune starts once more.",
      },
    },
    epic: {
      key: B_MINOR,
      bpm: 144,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        THEME_B_MINOR,
        "F#5+A5/2+4:8",
        "F#5/1:2 G#5/2:2 A#5/3:2 B5/4:2 | C#6/5:2 A#5/2:2 C#6/4:4 | D6/5:2 A#5/2:2 D6/5:4 | C#6/4:2 A#5/2:2 C#6/4:4",
        "F#5/1:2 G#5/2:2 A#5/3:2 B5/4:2 | C#6/5:2 A#5/2:2 C#6/4:4 | D6/5:2 A#5/2:2 D6/5:4 | C#6/4:8",
        [
          offbeats("D4+F#4/1+3"),
          offbeats("D4+F#4/1+3"),
          offbeats("E#4+G#4/1+3"),
          offbeats("E4+G4/1+3"),
          offbeats("D4+F#4/1+3"),
          offbeats("D4+F#4/1+3"),
          offbeats("A#3+E4/1+4"),
          "B3+D4+F#4/1+2+4:8",
        ].join(" | "),
      ].join(" | "),
      left: [
        `${halfBars(BROKEN, "bb bb CC cc bb bb dd d")} D3/5:3 r:1`,
        `${halfBars(BROKEN, "ff ff aa ff ff ff aa f")} F#2/5:1 A#2/3:1 E3/1:1 r:1`,
        "B2/5:2 C#3/4:2 D3/3:2 E3/2:2 | F#3/1:2 D3/3:2 F#3/1:4 | E#3/2:2 C#3/4:2 E#3/2:4 | E3/3:2 C3/5:2 E3/3:4",
        "B2/5:2 C#3/4:2 D3/3:2 E3/2:2 | F#3/1:2 D3/3:2 F#3/1:2 B2/5:2 | F#2/5:2 A#2/3:2 C#3/2:2 E3/1:1 r:1 | B1+F#2+B2/5+2+1:8",
      ].join(" | "),
      skills: ["broken-chords", "left-hand-melody", "thumb-under"],
      practice: [
        { text: "Play the left hand's broken chords alone until they roll by themselves: low, middle, high, middle.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand alone on bars 5 to 8, where the thumb passes under.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play the theme in the left hand alone, from bar 17.", hands: "left", speed: 0.6, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let it get louder towards the end.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 3, toBar: 4, kind: "sound", text: "The bass slides down from C sharp to C. That spooky slide is what makes the trolls sound sneaky." },
        { fromBar: 5, toBar: 5, kind: "fingering", text: "After C sharp on finger 2, tuck the thumb under for D, and the hand moves up." },
        { fromBar: 17, toBar: 22, kind: "trick", text: "The left hand plays the tune now. The right hand only taps short chords between the beats." },
      ],
      tricky: {
        9: "Drop the left hand to the low F sharp during the short rest. The right thumb starts the climb.",
        17: "The hands swap jobs. The left hand plays the tune on the beats, and the right hand taps between them.",
        23: "The left hand climbs F sharp, A sharp, C sharp and E, then lets go to find the low B.",
      },
    },
    legendary: {
      key: B_MINOR,
      bpm: 160,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        THEME_B_MINOR,
        "A5/4:7 r:1",
        octaves("F#4:2 G#4:2 A#4:2 B4:2 | C#5:2 A#4:2 C#5:4 | D5:2 A#4:2 D5:4 | C#5:2 A#4:2 C#5:4"),
        octaves("F#4:2 G#4:2 A#4:2 B4:2 | C#5:2 A#4:2 C#5:4 | D5:2 A#4:2 D5:4 | C#5:8"),
        octaves("B4:2 C#5:2 D5:2 E5:2 | F#5:2 D5:2 F#5:4 | E#5:2 C#5:2 E#5:4 | E5:2 C5:2 E5:4"),
        octaves("B4:2 C#5:2 D5:2 E5:2 | F#5:2 D5:2 F#5:2 B5:2 | A5:2 F#5:2 D5:2 F#5:2 | A5:8"),
        "B4+D5+F#5+B5/1+2+3+5:2 r:2 B4+D5+F#5+B5/1+2+3+5:2 r:2 | F#4+A#4+C#5+F#5/1+2+3+5:2 r:2 F#4+A#4+C#5+F#5/1+2+3+5:2 r:2",
        "B4+D5+F#5+B5/1+2+3+5:2 r:2 F#4+A#4+C#5+F#5/1+2+3+5:2 r:2 | B4+D5+F#5+B5/1+2+3+5:8",
      ].join(" | "),
      left: [
        ["B1", "B1", "C#2", "C2", "B1", "B1", "D2", "D2"].map((root) => octaveBar(root, "pulse")).join(" | "),
        Array.from({ length: 7 }, () => octaveBar("F#1", "drive")).join(" | "),
        "F#1+F#2/5+1:1 ".repeat(7) + "r:1",
        ["B1", "B1", "C#2", "C2", "B1", "B1", "D2", "D2"].map((root) => octaveBar(root, "drive")).join(" | "),
        "B1+B2/5+1:2 r:2 B1+B2/5+1:2 r:2 | F#1+F#2/5+1:2 r:2 F#1+F#2/5+1:2 r:2 | B1+B2/5+1:2 r:2 F#1+F#2/5+1:2 r:2 | B1+B2/5+1:8",
      ].join(" | "),
      skills: ["octave-bass", "melody-in-chords"],
      practice: [
        { text: "Play the left hand's octaves alone, short and plucked, with a rest after each.", hands: "left", speed: 0.6, loop: [1, 4], wait: false },
        { text: "Play the right hand's octaves alone. Keep the hand in one shape and move it as one piece.", hands: "right", speed: 0.5, loop: [9, 12], wait: true },
        { text: "Play the driving octaves of the left hand alone, eight to a bar.", hands: "left", speed: 0.5, loop: [9, 12], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, from soft at the start to loud at the end.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Start quietly. The whole piece grows louder to its end, so leave room to grow." },
        { fromBar: 9, toBar: 16, kind: "trick", text: "For octaves, thumb and little finger keep the same shape. Let the wrist do the moving." },
        { fromBar: 25, toBar: 28, kind: "sound", text: "These are the trolls' final crashes. Play each chord loud and short." },
      ],
      tricky: {
        9: "The right hand starts its octaves, and the left hand starts its eighths. Keep both hands loose.",
        13: "The octaves climb again on F sharp, G sharp, A sharp and B. Let the wrist bounce from key to key.",
        27: "The chords swap between B minor and F sharp major. Keep fingers 1, 2, 3 and 5 in their shape.",
      },
    },
  },
};

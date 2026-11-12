/**
 * *Kommet, ihr Hirten*: a carol from Bohemia, in four versions of ours.
 *
 * The tune is the whole verse of 14 bars, moved from the print's F major up a fifth to C major. The
 * print is in 3/4, and every length here is twice as long, in 3/2, so its eighths are quarters and
 * Common plays them. The hook is bars 1 to 4, the opening phrase.
 *
 * The tune is a drone melody, so every version keeps a C under most of it. The right hand stays on C to
 * A for the opening phrases, then moves its thumb down to G for the middle phrase.
 *
 * Common plays the tune once over held fifths. Rare plays it twice over a slow waltz bass. Epic plays it
 * over broken chords, then gives it to the left hand under block chords, with the pedal. Legendary plays
 * it over a stride bass, then in octaves over arpeggios, and ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's key, a fifth above the print's F major. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 3/2, in quarters: the 14 bars of the verse. */
const tune = [
  "G5:2 G5:1 E5:1 A5:1 F5:1 | G5:2 G5:1 E5:1 A5:1 F5:1 | G5:2 E5:1 G5:1 D5:1 E5:1 | C5:6",
  "G5:2 G5:1 E5:1 A5:1 F5:1 | G5:2 G5:1 E5:1 A5:1 F5:1 | G5:2 E5:1 G5:1 D5:1 E5:1 | C5:6",
  "C5:2 E5:1 C5:1 E5:1 G5:1 | C5:2 E5:1 C5:1 D5:1 G4:1 | C5:2 E5:1 C5:1 E5:1 G5:1 | C5:2 E5:1 C5:1 D5:1 G4:1",
  "G5:2 E5:1 G5:1 D5:1 E5:1 | C5:4 r:2",
].join(" | ");

/** The opening phrase in the right hand, in quarters. The thumb takes D and C, and finger 5 takes A. */
const PHRASE = [
  "G5/4:2 G5/4:1 E5/2:1 A5/5:1 F5/3:1 | G5/4:2 G5/4:1 E5/2:1 A5/5:1 F5/3:1",
  "G5/4:2 E5/2:1 G5/4:1 D5/1:1 E5/2:1 | C5/1:6",
].join(" | ");

/** Bars 9 and 10 in the right hand, in quarters. The thumb drops to G, and finger 2 takes C. */
const MIDDLE = "C5/2:2 E5/4:1 C5/2:1 E5/4:1 G5/5:1 | C5/2:2 E5/4:1 C5/2:1 D5/3:1 G4/1:1";

/** The last phrase's first bar in the right hand, in quarters, back on C to A. */
const CLOSE = "G5/4:2 E5/2:1 G5/4:1 D5/1:1 E5/2:1";

/** The whole tune in the right hand, in quarters. */
const RIGHT = [PHRASE, PHRASE, MIDDLE, MIDDLE, CLOSE, "C5/1:4 r:2"].join(" | ");

/** Common's tune: bar 12 holds its D and leaves out the low G, so the hand never leaps an octave. */
const RIGHT_COMMON = [PHRASE, PHRASE, MIDDLE, MIDDLE.replace("D5/3:1 G4/1:1", "D5/3:2"), CLOSE.replace("G5/4:2", "G5/5:2"), "C5/1:4 r:2"].join(
  " | ",
);

/**
 * The tune an octave down in the left hand, in eighths. The thumb takes A, and finger 5 takes D and C.
 * In the middle phrase finger 5 reaches down to the low G.
 */
const LEFT_TUNE = [
  "G4/2:4 G4/2:2 E4/4:2 A4/1:2 F4/3:2 | G4/2:4 G4/2:2 E4/4:2 A4/1:2 F4/3:2 | G4/2:4 E4/4:2 G4/2:2 D4/5:2 E4/4:2 | C4/5:12",
  "G4/2:4 G4/2:2 E4/4:2 A4/1:2 F4/3:2 | G4/2:4 G4/2:2 E4/4:2 A4/1:2 F4/3:2 | G4/2:4 E4/4:2 G4/2:2 D4/5:2 E4/4:2 | C4/5:12",
  "C4/4:4 E4/2:2 C4/4:2 E4/2:2 G4/1:2 | C4/4:4 E4/2:2 C4/4:2 D4/3:2 G3/5:2",
  "C4/4:4 E4/2:2 C4/4:2 E4/2:2 G4/1:2 | C4/4:4 E4/2:2 C4/4:2 D4/3:2 G3/5:2",
  "G4/1:4 E4/3:2 G4/1:2 D4/4:2 E4/3:2 | C4/5:8 r:4",
].join(" | ");

/** `text` with every length multiplied by `times`, so a line in quarters reads in eighths or sixteenths. */
function scaled(text: string, times: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${times * Number(units)}`);
}

const SEMITONES: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** The MIDI number of a note name such as `G4`. */
function pitchOf(name: string): number {
  return SEMITONES[name[0]!]! + 12 * (Number(name[1]) + 1);
}

/**
 * `text`, one note at a time and without fingers, with each note before a move of more than 3 semitones
 * cut to half its length and a rest. An octave hand then lifts before each leap instead of stretching.
 */
function liftedBeforeLeaps(text: string): string {
  const tokens = text.split(" ");
  return tokens
    .map((token, at) => {
      const next = tokens.slice(at + 1).find((other) => other !== "|");
      const [name, units] = token.split(":");
      if (token === "|" || name === "r" || next === undefined || next.startsWith("r")) return token;
      if (Math.abs(pitchOf(next) - pitchOf(name!)) <= 3) return token;
      const half = Number(units) / 2;
      return `${name}:${half} r:${half}`;
    })
    .join(" ");
}

/** `text`, without fingers, with each note as an octave: the note under the thumb and the octave above under finger 5. */
function octaves(text: string): string {
  return text.replace(/([A-G])(\d):/g, (_, name: string, octave: string) => `${name}${octave}+${name}${Number(octave) + 1}/1+5:`);
}

/** Bars of `patterns` from `bars`, such as `"CCF CCG"`: one letter per beat, a space between bars. */
function beatBars(patterns: Record<string, string>, bars: string): string {
  return bars
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** `bars` with each beat before a new chord, and the last, in small letters, so the hand lifts to jump. */
function lifted(bars: string): string {
  const letters = [...bars];
  return letters
    .map((letter, at) => {
      if (letter === " ") return letter;
      const next = letters.slice(at + 1).find((other) => other !== " ");
      return letter === next ? letter : letter.toLowerCase();
    })
    .join("");
}

/**
 * The chord of each beat of bars 1 to 13, from the print's left hand: C, F, G seventh and A minor. The
 * last bar holds C.
 */
const BEATS = "CCF CCF CCG CCC CCF CCF CCG CCC ACC FCG AAC AAG CCG";

/** Common's left hand: one held shape per bar, the hand kept on C to G. */
const HELD = [
  ...[..."CCGCCCGCCCCGG"].map((chord) => (chord === "C" ? "C3+G3/5+1:6" : "D3+G3/4+1:6")),
  "C3+G3/5+1:4 r:2",
].join(" | ");

/** Rare's bars of slow waltz bass, in quarters: the root on the first beat, then two chords, the hand on C to G. */
const WALTZ = {
  cf: "C3/5:2 E3+G3/3+1:2 C3+F3/5+2:2",
  cg: "C3/5:2 E3+G3/3+1:2 D3+F3+G3/4+2+1:2",
  cc: "C3/5:2 E3+G3/3+1:2 E3+G3/3+1:2",
  fcg: "C3+F3/5+2:2 E3+G3/3+1:2 D3+F3+G3/4+2+1:2",
  c: "C3+E3+G3/5+3+1:6",
};

/** Rare's left hand for the tune once. */
const RARE_LEFT = [
  WALTZ.cf, WALTZ.cf, WALTZ.cg, WALTZ.c,
  WALTZ.cf, WALTZ.cf, WALTZ.cg, WALTZ.c,
  WALTZ.cc, WALTZ.fcg, WALTZ.cc, WALTZ.cg,
  WALTZ.cg, "C3+E3+G3/5+3+1:4 r:2",
].join(" | ");

/** A beat of broken chord in eighths: root, fifth, octave, fifth. A small letter ends on a rest for the jump. */
const BROKEN: Record<string, string> = {
  C: "C2/5:1 G2/2:1 C3/1:1 G2/2:1",
  c: "C2/5:1 G2/2:1 C3/1:1 r:1",
  F: "F2/5:1 C3/2:1 F3/1:1 C3/2:1",
  f: "F2/5:1 C3/2:1 F3/1:1 r:1",
  G: "G2/5:1 D3/2:1 G3/1:1 D3/2:1",
  g: "G2/5:1 D3/2:1 G3/1:1 r:1",
  A: "A2/5:1 E3/2:1 A3/1:1 E3/2:1",
  a: "A2/5:1 E3/2:1 A3/1:1 r:1",
};

/** A beat of block chord in the right hand, in eighths, above the tune in the left hand. */
const BLOCK: Record<string, string> = {
  C: "C5+E5+G5/1+3+5:4",
  F: "C5+F5+A5/1+3+5:4",
  G: "B4+D5+G5/1+2+5:4",
  A: "C5+E5+A5/1+2+5:4",
};

/** A beat of stride in sixteenths: the root in octaves, then the chord, each an eighth with an eighth's rest. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:2 r:2 E3+G3+C4/3+2+1:2 r:2",
  F: "F1+F2/5+1:2 r:2 A2+C3+F3/5+3+1:2 r:2",
  G: "G1+G2/5+1:2 r:2 B2+F3+G3/5+2+1:2 r:2",
  A: "A1+A2/5+1:2 r:2 A2+C3+E3/5+3+1:2 r:2",
};

/** A beat of arpeggio in sixteenths, two octaves up from the root, then an eighth's rest for the jump. */
const ARPEGGIO: Record<string, string> = {
  C: "C2/5:1 G2/3:1 C3/2:1 E3/1:1 G3/3:1 C4/2:1 r:2",
  F: "F1/5:1 C2/3:1 F2/2:1 A2/1:1 C3/3:1 F3/2:1 r:2",
  G: "G1/5:1 D2/3:1 G2/2:1 B2/1:1 D3/3:1 G3/2:1 r:2",
  A: "A1/5:1 E2/3:1 A2/2:1 C3/1:1 E3/3:1 A3/2:1 r:2",
};

/** The tune in sixteenths, with a run up to the G after bar 4 and a turn back to C after bar 8. */
const RIGHT_RUNS = scaled(RIGHT, 4)
  .replace("C5/1:24", "C5/1:16 D5/1:2 E5/2:2 F5/3:2 r:2")
  .replace("C5/1:24", "C5/1:16 E5/3:2 D5/2:2 C5/1:4");

/** The tune in octaves in sixteenths, lifted before each leap, ending on a four-note C chord. */
const RIGHT_OCTAVES = octaves(liftedBeforeLeaps(scaled(tune, 4))).replace(/C5\+C6\/1\+5:16 r:8$/, "C5+E5+G5+C6/1+2+3+5:16 r:8");

export const kommetIhrHirten: OurSong = {
  slug: "kommet-ihr-hirten",
  title: "Kommet, ihr Hirten",
  source: {
    composer: "Traditional",
    died: null,
    published: 1847,
    edition: "Katolický kancionál, Olomouc 1847, its first print, as sung to Carl Riedel's German words of 1870",
  },
  about:
    "The German title Kommet, ihr Hirten means Come, you shepherds. " +
    "The song comes from Bohemia, where its Czech title is Nesem vám noviny. " +
    "The tune was first printed in 1847, in a Catholic hymnal in Olomouc. " +
    "The Leipzig conductor Carl Riedel wrote the German words freely after the original, and first printed them in 1870.",
  funFact: "The scholar Konrad Ameln dated the tune to around 1700 from its style alone.",
  mythic: null,
  collection: "christmas",
  aka: ["Nesem vám noviny", "Come, All Ye Shepherds"],
  tune: { text: tune, numerator: 3, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 112,
      numerator: 3,
      denominator: 2,
      steps: 2,
      right: RIGHT_COMMON,
      left: HELD,
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 9 to 12 with the right hand alone. The thumb moves down to the low G.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Now the left hand alone. It holds one shape for each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 3, kind: "rhythm", text: "Each bar starts with a long G worth two counts, then four short notes worth one count each." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "The left hand holds C and G like a bagpipe drone. Let it ring under the tune." },
        { fromBar: 9, toBar: 12, kind: "fingering", text: "Finger 2 plays C here, so the thumb is free for the low G in bar 10." },
      ],
      tricky: {
        9: "Finger 2 takes over the C from the thumb. Then fingers 4 and 5 play E and G.",
        11: "The same as bar 9: finger 2 on C, finger 4 on E and finger 5 on G.",
        13: "Finger 5 lands on the high G. Then fingers 2 and 4 play E and G, and the thumb plays D.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 126,
      numerator: 3,
      denominator: 2,
      steps: 2,
      right: [RIGHT, RIGHT.replace(/C5\/1:4 r:2$/, "G4+C5/1+2:4 r:2")].join(" | "),
      left: [RARE_LEFT, RARE_LEFT].join(" | "),
      skills: ["waltz-bass", "triads"],
      practice: [
        { text: "Play the left hand alone: a low C, then two chords in each bar.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 9 to 14 with the left hand alone, where the chords change more often.", hands: "left", speed: 0.6, loop: [9, 14], wait: true },
        { text: "Join the hands on the first time through, slowly.", hands: "both", speed: 0.6, loop: [1, 14], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 14, kind: "rhythm", text: "In most bars the left hand plays C on the first beat, then a chord on each of the other two." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the low C a little stronger than the chords, like the drone of a bagpipe." },
        { fromBar: 12, toBar: 13, kind: "trick", text: "The tune leaps from the low G up to the high G. Finger 4 stretches the whole octave." },
      ],
      tricky: {
        13: "The thumb leaves the low G, and finger 4 reaches up an octave to the high G.",
        27: "The same octave reach as bar 13. Keep the wrist loose as the hand opens.",
        28: "The thumb drops to G and finger 2 plays C, together, for the last chord.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 120,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: [scaled(RIGHT, 2), beatBars(BLOCK, BEATS), "C5+E5+G5/1+3+5:8 r:4"].join(" | "),
      left: [beatBars(BROKEN, lifted(BEATS)), "C2+G2+C3/5+2+1:8 r:4", LEFT_TUNE].join(" | "),
      pedal: [...Array(13).fill("P:4 P:4 P:4"), "P:12", ...Array(13).fill("P:4 P:4 P:4"), "P:12"].join(" | "),
      skills: ["broken-chords", "left-hand-melody", "pedal"],
      practice: [
        { text: "Play the broken chords alone until they roll by themselves: low, middle, high, middle.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the tune in the left hand alone, from bar 15 on.", hands: "left", speed: 0.5, loop: [15, 28], wait: true },
        { text: "Join the hands on the first time through, slowly.", hands: "both", speed: 0.5, loop: [1, 14], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 14, kind: "sound", text: "Keep the broken chords soft, so the tune sings above them." },
        { fromBar: 15, toBar: 28, kind: "sound", text: "Now the left hand has the tune. Play it clearly, and keep the right-hand chords quiet." },
        { fromBar: 1, toBar: 28, kind: "sound", text: "Change the pedal on each beat." },
      ],
      tricky: {
        9: "The left hand jumps to A for the A minor chord, while finger 2 of the right hand takes the C.",
        11: "Two beats of A minor, then the left hand lifts and lands back on the low C.",
        15: "The hands swap jobs. The left hand starts the tune on G, and the right hand plays chords.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 112,
      numerator: 3,
      denominator: 2,
      steps: 8,
      right: [RIGHT_RUNS, RIGHT_OCTAVES].join(" | "),
      left: [beatBars(STRIDE, BEATS), `${STRIDE.C} ${STRIDE.C} r:8`, beatBars(ARPEGGIO, BEATS), "C2+G2+C3/5+2+1:16 r:8"].join(" | "),
      pedal: [...Array(13).fill("P:8 P:8 P:8"), "P:8 P:8 r:8", ...Array(13).fill("P:8 P:8 P:8"), "P:16 r:8"].join(" | "),
      skills: ["stride", "arpeggios", "sixteenth-notes"],
      practice: [
        { text: "Play the stride bass alone: jump down for the low octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play bars 1 to 9 with the right hand alone, and keep the quick runs light.", hands: "right", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the arpeggios of the second time in the left hand alone.", hands: "left", speed: 0.5, loop: [15, 18], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 14, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 4, toBar: 4, kind: "fingering", text: "The run climbs D, E and F, then the hand lifts and lands finger 4 on G." },
        { fromBar: 15, toBar: 28, kind: "fingering", text: "Keep the thumb and little finger an octave apart. The short rests give the hand time to leap." },
      ],
      tricky: {
        19: "The octaves leap up to A and back down to F. Lift the hand on each short rest.",
        24: "The octaves step C, E, C and D, then drop to the low G. Let the wrist bounce.",
        26: "The same as bar 24. Then the hand leaps a whole octave up to the high G.",
      },
    },
  },
  de: {
    about:
      "Kommet, ihr Hirten heißt auf Englisch Come, you shepherds. " +
      "Das Lied stammt aus Böhmen, wo sein tschechischer Titel Nesem vám noviny lautet. " +
      "Die Melodie wurde 1847 zum ersten Mal gedruckt, in einem katholischen Gesangbuch in Olmütz. " +
      "Der Leipziger Dirigent Carl Riedel dichtete den deutschen Text frei nach dem Original und druckte ihn 1870 zum ersten Mal.",
    funFact: "Der Musikwissenschaftler Konrad Ameln datierte die Melodie allein nach ihrem Stil auf etwa 1700.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Lied auf jeden Ton warten.",
          "Spiel die Takte 9 bis 12 nur mit der rechten Hand. Der Daumen rückt hinab zum tiefen G.",
          "Jetzt die linke Hand allein. Sie hält in jedem Takt eine einzige Handform.",
          "Spiel das ganze Lied langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Jeder Takt beginnt mit einem langen G für zwei Schläge, dann folgen vier kurze Töne für je einen Schlag.",
          "Die linke Hand hält C und G wie den Bordun eines Dudelsacks. Lass ihn unter der Melodie klingen.",
          "Hier spielt Finger 2 das C, damit der Daumen in Takt 10 für das tiefe G frei ist.",
        ],
        tricky: {
          9: "Finger 2 übernimmt das C vom Daumen. Dann spielen Finger 4 und 5 E und G.",
          11: "Wie in Takt 9: Finger 2 auf C, Finger 4 auf E und Finger 5 auf G.",
          13: "Finger 5 landet auf dem hohen G. Dann spielen Finger 2 und 4 E und G, und der Daumen spielt das D.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: ein tiefes C, dann zwei Akkorde in jedem Takt.",
          "Spiel die Takte 9 bis 14 nur mit der linken Hand. Dort wechseln die Akkorde öfter.",
          "Spiel den ersten Durchgang langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "In den meisten Takten spielt die linke Hand das C auf Schlag eins, dann einen Akkord auf jedem der beiden anderen.",
          "Spiel das tiefe C etwas kräftiger als die Akkorde, wie den Bordun eines Dudelsacks.",
          "Die Melodie springt vom tiefen G hinauf zum hohen G. Finger 4 spannt die ganze Oktave.",
        ],
        tricky: {
          13: "Der Daumen verlässt das tiefe G, und Finger 4 greift eine Oktave hinauf zum hohen G.",
          27: "Derselbe Oktavgriff wie in Takt 13. Halt das Handgelenk locker, während sich die Hand öffnet.",
          28: "Für den letzten Akkord fällt der Daumen auf das G, und Finger 2 spielt gleichzeitig das C.",
        },
      },
      epic: {
        practice: [
          "Spiel die gebrochenen Akkorde allein, bis sie von selbst rollen: tief, Mitte, hoch, Mitte.",
          "Spiel ab Takt 15 die Melodie nur mit der linken Hand.",
          "Spiel den ersten Durchgang langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt die gebrochenen Akkorde leise, damit die Melodie darüber singt.",
          "Jetzt hat die linke Hand die Melodie. Spiel sie deutlich, und halt die Akkorde der rechten Hand leise.",
          "Wechsle das Pedal auf jedem Schlag.",
        ],
        tricky: {
          9: "Die linke Hand springt für den a-Moll-Akkord zum A, während Finger 2 der rechten Hand das C nimmt.",
          11: "Zwei Schläge a-Moll, dann hebt die linke Hand ab und landet wieder auf dem tiefen C.",
          15: "Die Hände tauschen ihre Aufgaben. Die linke Hand beginnt die Melodie auf G, und die rechte Hand spielt Akkorde.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Stride-Bass allein: Spring hinunter zur tiefen Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Takte 1 bis 9 nur mit der rechten Hand, und spiel die schnellen Läufe leicht.",
          "Spiel die Arpeggien des zweiten Durchgangs nur mit der linken Hand.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau beim Stride auf die tiefe Oktave, und lass die Hand den Akkord nach Gefühl finden.",
          "Der Lauf steigt über D, E und F, dann hebt die Hand ab und setzt Finger 4 auf das G.",
          "Halt Daumen und kleinen Finger eine Oktave auseinander. Die kurzen Pausen geben der Hand Zeit zum Springen.",
        ],
        tricky: {
          19: "Die Oktaven springen hinauf zum A und wieder hinab zum F. Heb die Hand in jeder kurzen Pause.",
          24: "Die Oktaven schreiten über C, E, C und D, dann fallen sie zum tiefen G. Lass das Handgelenk federn.",
          26: "Wie in Takt 24. Dann springt die Hand eine ganze Oktave hinauf zum hohen G.",
        },
      },
    },
  },
};

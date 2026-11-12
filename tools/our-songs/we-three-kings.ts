/**
 * *We Three Kings*: John Henry Hopkins Jr.'s carol *Three Kings of Orient*, in four versions of ours.
 *
 * The score is in E minor, and the tune here is a fourth higher, in A minor, so the hands stay near
 * middle C. The verse is in A minor, and the refrain turns to C major. The score is in 3/8, and every
 * length here is twice as long, in 3/4. A quarter is one beat, so Common plays the score's eighths. The
 * hook is the first four bars, the minor opening the song is known by.
 *
 * Common plays the tune over held fifths, two bars of 3/4 to each bar of 6/4, so it stays within its
 * 24 bars. Rare plays it over block triads, then a waltz bass in the refrain. Epic puts an Alberti bass
 * under the verse and plays the refrain in thirds and sixths over a waltz bass, with the pedal.
 * Legendary sets the verse in octaves over a stride bass, runs arpeggios under bars 9 to 16, and plays
 * the refrain in chords over a stride bass.
 *
 * Common and Rare change finger on a repeated note, so the right hand moves place only once, after the
 * long C of bar 14.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, a fourth above the score's E minor. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 3/4, in quarters: the verse twice, its middle, the refrain twice and its close. */
const tune = [
  "E5:2 D5:1 | C5:2 A4:1 | B4:1 C5:1 B4:1 | A4:2 r:1",
  "E5:2 D5:1 | C5:2 A4:1 | B4:1 C5:1 B4:1 | A4:2 r:1",
  "C5:2 C5:1 | D5:2 D5:1 | E5:2 E5:1 | G5:1 F5:1 E5:1 | D5:1 E5:1 D5:1 | C5:2 B4:1 | A4:2 r:1 | B4:2 D5:1",
  "C5:2 C5:1 | C5:2 G4:1 | C5:2 A4:1 | C5:2 r:1",
  "C5:2 C5:1 | C5:2 G4:1 | C5:2 A4:1 | C5:2 r:1",
  "C5:2 C5:1 | D5:2 E5:1 | F5:2 E5:1 | D5:2 E5:1 | C5:2 C5:1 | C5:2 G4:1 | C5:2 A4:1 | C5:3",
].join(" | ");

/** The four bars of the verse in the right hand, in quarters, played twice. */
const VERSE = "E5/5:2 D5/4:1 | C5/3:2 A4/1:1 | B4/2:1 C5/3:1 B4/2:1 | A4/1:2 r:1";

/** Bars 9 to 15 in the right hand, in quarters: up to G, then down to A with a new place after the C. */
const MIDDLE = "C5/3:2 C5/1:1 | D5/2:2 D5/2:1 | E5/3:2 E5/3:1 | G5/5:1 F5/4:1 E5/3:1 | D5/2:1 E5/4:1 D5/3:1 | C5/2:2 B4/2:1 | A4/1:2 r:1";

/** The refrain's first four bars in the right hand, in quarters, played twice. */
const REFRAIN = "C5/3:2 C5/3:1 | C5/3:2 G4/1:1 | C5/3:2 A4/1:1 | C5/3:2 r:1";

/** The last eight bars in the right hand, in quarters. Finger 1 takes over the second C of bar 29. */
const CLOSE = "C5/1:2 C5/1:1 | D5/2:2 E5/3:1 | F5/4:2 E5/3:1 | D5/2:2 E5/3:1 | C5/1:2 C5/3:1 | C5/3:2 G4/1:1 | C5/3:2 A4/1:1 | C5/3:3";

/** The whole tune in the right hand, in quarters, for Common and Rare. */
const RIGHT = [VERSE, VERSE, MIDDLE, "B4/2:2 D5/4:1", REFRAIN, REFRAIN, CLOSE].join(" | ");

/** `text` with every two bars of 3/4 joined into one bar of 6/4. */
function inPairs(text: string): string {
  const bars = text.split(" | ");
  return bars.flatMap((bar, at) => (at % 2 === 0 ? [`${bar} ${bars[at + 1]}`] : [])).join(" | ");
}

/** `text` with every length multiplied by `times`, so a line in quarters reads in eighths or sixteenths. */
function scaled(text: string, times: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${times * Number(units)}`);
}

/** Bars of `patterns` from `beats`, such as `"Ccc Ggg"`: one letter per pattern, a space between bars. */
function beatBars(patterns: Record<string, string>, beats: string): string {
  return beats
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** The chord of each bar of the verse: A minor as `a`, and E or E seventh as `E`. */
const VERSE_CHORDS = "aaEaaaEa";

/** One bar of 3/4 of a held fifth or bass note in quarters, on A minor, E, C, G, F or D. The hand never moves. */
const HELD: Record<string, string> = {
  a: "A2+E3/5+2:3",
  E: "E3/2:3",
  C: "C3+G3/4+1:3",
  G: "D3+G3/3+1:3",
  F: "F3/2:3",
  D: "D3/3:3",
};

/** One bar of a block chord in quarters: A minor, E seventh over D, C, C without its third, or G over B. */
const BLOCK: Record<string, string> = {
  a: "A2+C3+E3/5+4+2:3",
  E: "D3+E3+G#3/3+2+1:3",
  C: "C3+E3+G3/4+2+1:3",
  c: "C3+G3/4+1:3",
  G: "B2+D3+G3/5+3+1:3",
};

/** One beat of waltz bass in quarters: the bass note, or the chord above it, on C, F, G or D minor, and `x` a lone A. */
const WALTZ: Record<string, string> = {
  C: "C3/5:1",
  c: "E3+G3/3+1:1",
  F: "C3/5:1",
  f: "F3+A3/2+1:1",
  G: "B2/5:1",
  g: "D3+G3/3+1:1",
  D: "D3/5:1",
  d: "F3+A3/3+1:1",
  x: "A3/1:1",
};

/** One bar of Alberti bass in eighths, on A minor, E seventh, C, G or G seventh. */
const ALBERTI: Record<string, string> = {
  a: "A2/5:1 E3/1:1 C3/3:1 E3/1:1 C3/3:1 E3/1:1",
  E: "G#2/5:1 E3/1:1 D3/2:1 E3/1:1 D3/2:1 E3/1:1",
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 E3/3:1 G3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1 D3/3:1 G3/1:1",
  H: "B2/5:1 G3/1:1 F3/2:1 G3/1:1 D3/3:1 G3/1:1",
};

/** The refrain in the right hand, in quarters, with a third or a sixth under each tune note. */
const REFRAIN_SIXTHS = "E4+C5/1+5:2 E4+C5/1+5:1 | E4+C5/1+5:2 E4+G4/1+3:1 | A4+C5/3+5:2 F4+A4/1+3:1 | E4+C5/1+5:2 r:1";

/** The last eight bars in the right hand, in quarters, with sixths and thirds under the tune. */
const CLOSE_SIXTHS =
  "E4+C5/1+5:2 E4+C5/1+5:1 | F4+D5/1+5:2 G4+E5/1+5:1 | A4+F5/1+5:2 G4+E5/1+5:1 | F4+D5/1+5:2 G4+E5/1+5:1 | " +
  "E4+C5/1+5:2 E4+C5/1+5:1 | E4+C5/1+5:2 E4+G4/1+3:1 | A4+C5/3+5:2 F4+A4/1+3:1 | E4+G4+C5/1+2+5:3";

/** The verse in the right hand in octaves, in quarters, the tune on top. */
const VERSE_OCTAVES = "E4+E5/1+5:2 D4+D5/1+5:1 | C4+C5/1+5:2 A3+A4/1+5:1 | B3+B4/1+5:1 C4+C5/1+5:1 B3+B4/1+5:1 | A3+A4/1+5:2 r:1";

/** The refrain in the right hand as chords, in quarters, the tune on top. */
const REFRAIN_CHORDS =
  "C4+E4+G4+C5/1+2+3+5:2 E4+G4+C5/1+2+5:1 | E4+G4+C5/1+2+5:2 C4+E4+G4/1+2+3:1 | " +
  "C4+F4+A4+C5/1+2+3+5:2 C4+F4+A4/1+2+4:1 | C4+E4+G4+C5/1+2+3+5:2 r:1";

/** The last eight bars in the right hand as chords, in quarters, the tune on top. */
const CLOSE_CHORDS =
  "E4+G4+C5/1+2+5:2 E4+G4+C5/1+2+5:1 | G4+B4+D5/1+3+5:2 G4+B4+E5/1+3+5:1 | A4+D5+F5/1+3+5:2 G4+C5+E5/1+3+5:1 | " +
  "G4+B4+D5/1+3+5:2 G4+B4+E5/1+3+5:1 | E4+G4+C5/1+2+5:2 E4+G4+C5/1+2+5:1 | E4+G4+C5/1+2+5:2 C4+E4+G4/1+2+3:1 | " +
  "C4+F4+A4+C5/1+2+3+5:2 C4+F4+A4/1+2+4:1 | C4+E4+G4+C5/1+2+3+5:3";

/** One beat of stride in sixteenths, an eighth then an eighth's rest: the root in octaves, or the chord. */
const STRIDE: Record<string, string> = {
  A: "A1+A2/5+1:2 r:2",
  a: "A2+C3+E3/5+3+1:2 r:2",
  E: "E1+E2/5+1:2 r:2",
  e: "G#2+D3+E3/5+2+1:2 r:2",
  C: "C2+C3/5+1:2 r:2",
  c: "C3+E3+G3/5+3+1:2 r:2",
  F: "F2+F3/5+1:2 r:2",
  f: "C3+F3+A3/5+2+1:2 r:2",
  G: "G1+G2/5+1:2 r:2",
  g: "B2+D3+G3/5+3+1:2 r:2",
  D: "D2+D3/5+1:2 r:2",
  d: "D3+F3+A3/5+3+1:2 r:2",
  x: "A2+E3+A3/5+2+1:2 r:2",
};

/** One bar of arpeggio in sixteenths, up two octaves and back, ending on a rest so the hand can jump. */
const ARPEGGIO: Record<string, string> = {
  a: "A1/5:1 E2/3:1 A2/2:1 C3/1:1 E3/3:1 A3/2:1 C4/1:1 A3/2:1 E3/3:1 C3/1:1 r:2",
  E: "E2/5:1 B2/3:1 D3/2:1 E3/1:1 G#3/3:1 B3/2:1 D4/1:1 B3/2:1 G#3/3:1 E3/1:1 r:2",
  C: "C2/5:1 G2/3:1 C3/2:1 E3/1:1 G3/3:1 C4/2:1 E4/1:1 C4/2:1 G3/3:1 E3/1:1 r:2",
  G: "G1/5:1 D2/3:1 G2/2:1 B2/1:1 D3/3:1 G3/2:1 B3/1:1 G3/2:1 D3/3:1 B2/1:1 r:2",
};

export const weThreeKings: OurSong = {
  slug: "we-three-kings",
  title: "We Three Kings",
  source: {
    composer: "John Henry Hopkins Jr.",
    died: 1891,
    published: 1863,
    edition: "Three Kings of Orient (1863), as Wikipedia engraves it",
  },
  about:
    "The American clergyman John Henry Hopkins Jr. wrote this carol in 1857, for a Christmas pageant at the seminary where he taught. " +
    "It tells of the Magi and their gifts, and was published in 1863 as Three Kings of Orient. " +
    "Its verse is in a minor key, and the refrain turns to the major.",
  funFact: "Hopkins planned the carol so that three men each sing one verse alone, one for each king.",
  mythic: null,
  collection: "christmas",
  aka: ["Three Kings of Orient", "We Three Kings of Orient Are"],
  tune: { text: tune, numerator: 3, denominator: 4, key: A_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 120,
      numerator: 6,
      denominator: 4,
      right: inPairs(RIGHT),
      left: inPairs([VERSE_CHORDS, "CGCCGaaE", "CCFCCCFC", "CGDGCCFC"].join("").split("").map((chord) => HELD[chord]).join(" | ")),
      skills: ["held-bass", "open-fifths"],
      practice: [
        { text: "Play the first two bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 2], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, where the tune climbs to G and walks down to A.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It changes its shape on the first and the fourth beat only.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "rhythm", text: "Each bar holds two groups of three beats. Count one, two, three twice." },
        { fromBar: 5, toBar: 5, kind: "fingering", text: "On the second C, swap from finger 3 to the thumb. The hand is then ready to climb to G." },
        { fromBar: 7, toBar: 8, kind: "trick", text: "After the long C, the whole hand moves down one key, so finger 2 plays B." },
      ],
      tricky: {
        1: "Finger 5 plays E, finger 4 plays D, finger 3 plays C, then the thumb reaches down to A.",
        3: "The same notes as bar 1. Keep the long notes full and the short ones light.",
        7: "Hold the long C with finger 2, then move the hand down so finger 2 plays B.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 120,
      numerator: 3,
      denominator: 4,
      right: RIGHT,
      left: [
        [...(VERSE_CHORDS + "CGCcGEaE")].map((chord) => BLOCK[chord]).join(" | "),
        beatBars(WALTZ, "Ccc Ccc Fff Ccc Ccc Ccc Fff Ccc Ccc Ggg Ddx Ggg Ccc Ccc Fff"),
        "C3+E3+G3/5+3+1:3",
      ].join(" | "),
      skills: ["triads", "waltz-bass"],
      practice: [
        { text: "Play the left hand alone on the first eight bars, and press the three notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the waltz bass of the refrain alone: low note, chord, chord.", hands: "left", speed: 0.6, loop: [17, 24], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "The verse is in a minor key. Play it softly and evenly, and keep each chord down for the whole bar." },
        { fromBar: 14, toBar: 14, kind: "fingering", text: "Hold C with finger 2, then move the hand down one key so finger 2 plays B." },
        { fromBar: 17, toBar: 32, kind: "sound", text: "The refrain turns to the major. Let it ring brighter, and keep the waltz bass light." },
      ],
      tricky: {
        1: "Finger 5 plays E, finger 4 plays D, finger 3 plays C, then the thumb reaches down to A.",
        5: "The same notes as bar 1, after a rest. Land finger 5 on E before you start.",
        14: "Hold C with finger 2, then move the hand down so finger 2 plays B. The left hand changes to the E chord.",
      },
    },
    epic: {
      key: A_MINOR,
      bpm: 132,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: scaled([VERSE, VERSE, MIDDLE].join(" | "), 2) + " | B4/2:4 D5/4:1 r:1 | " + scaled([REFRAIN_SIXTHS, REFRAIN_SIXTHS, CLOSE_SIXTHS].join(" | "), 2),
      left: [
        [...(VERSE_CHORDS + "CGCHGEaE")].map((chord) => ALBERTI[chord]).join(" | "),
        scaled(beatBars({ ...WALTZ, x: "D3+A3/5+1:1" }, "Ccc Ccc Fff Ccc Ccc Ccc Fff Ccc Ccc Ggg Ddx Ggg Ccc Ccc Fff"), 2),
        "C3+E3+G3/5+3+1:6",
      ].join(" | "),
      pedal: Array(32).fill("P:6").join(" | "),
      skills: ["alberti-bass", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [17, 20], wait: true },
        { text: "Join the hands on the verse, slowly.", hands: "both", speed: 0.5, loop: [1, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 16, toBar: 17, kind: "trick", text: "Lift the hand after the short D, and land the thumb on the E below for the refrain." },
        { fromBar: 25, toBar: 28, kind: "fingering", text: "The thumb and finger 5 hold the sixth, and the hand slides as one piece from key to key." },
      ],
      tricky: {
        17: "Lift the hand after the D, and land the thumb on E and finger 5 on C.",
        27: "Slide the sixth up to A and F, then back down to G and E. Keep the wrist loose.",
        28: "The sixth slides from F and D up to G and E. Finger 5 plays the tune.",
      },
    },
    legendary: {
      key: A_MINOR,
      bpm: 108,
      numerator: 3,
      denominator: 4,
      steps: 4,
      right:
        scaled([VERSE_OCTAVES, VERSE_OCTAVES, MIDDLE].join(" | "), 4) +
        " | B4/2:8 D5/4:2 r:2 | " +
        scaled([REFRAIN_CHORDS, REFRAIN_CHORDS, CLOSE_CHORDS].join(" | "), 4),
      left: [
        beatBars(STRIDE, "Aaa Aaa Eee Aaa Aaa Aaa Eee Aaa"),
        [..."CGCGGEaE"].map((chord) => ARPEGGIO[chord]).join(" | "),
        beatBars(STRIDE, "Ccc Ccc Fff Ccc Ccc Ccc Fff Ccc Ccc Ggg Ddx Ggg Ccc Ccc Fff"),
        "C2+G2+C3/5+2+1:12",
      ].join(" | "),
      pedal: Array(32).fill("P:12").join(" | "),
      skills: ["stride", "arpeggios", "melody-in-chords"],
      practice: [
        { text: "Play the right hand's octaves alone, with the thumb and finger 5 kept in one shape.", hands: "right", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the arpeggios of bars 9 to 16 in the left hand alone.", hands: "left", speed: 0.5, loop: [9, 16], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "In the octaves, watch finger 5 on the tune. The thumb follows it by feel." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "In each arpeggio, finger 3 crosses over the thumb on the way up." },
        { fromBar: 17, toBar: 32, kind: "sound", text: "In the chords, play the top finger a little louder, so the tune sings." },
      ],
      tricky: {
        3: "The octaves step from B to C and back, while the left hand jumps between the low E and its chord.",
        7: "The same as bar 3. Keep the octaves even and the hand light.",
        9: "The left hand starts its first arpeggio, up two octaves from C and back, under the repeated C.",
      },
    },
  },
  de: {
    about:
      "Der amerikanische Geistliche John Henry Hopkins Junior schrieb dieses Weihnachtslied 1857 für ein Krippenspiel an dem Seminar, an dem er lehrte. " +
      "Es erzählt von den Weisen aus dem Morgenland und ihren Gaben und erschien 1863 als Three Kings of Orient. " +
      "Die Strophe steht in Moll, und der Refrain wendet sich nach Dur.",
    funFact: "Hopkins plante das Lied so, dass drei Männer je eine Strophe allein singen, einer für jeden König.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten zwei Takte nur mit der rechten Hand, und lass das Lied auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Dort steigt die Melodie zum G und wandert hinab zum A.",
          "Jetzt die linke Hand allein. Sie wechselt ihre Form nur auf dem ersten und dem vierten Schlag.",
          "Nimm beide Hände zusammen, und spiel das ganze Lied langsam.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Jeder Takt hat zwei Gruppen aus drei Schlägen. Zähl zweimal eins, zwei, drei.",
          "Wechsle auf dem zweiten C von Finger 3 zum Daumen. Dann ist die Hand bereit für den Aufstieg zum G.",
          "Nach dem langen C rückt die ganze Hand eine Taste tiefer, damit Finger 2 das H spielt.",
        ],
        tricky: {
          1: "Finger 5 spielt E, Finger 4 spielt D, Finger 3 spielt C, dann greift der Daumen hinab zum A.",
          3: "Dieselben Töne wie in Takt 1. Spiel die langen Töne voll und die kurzen leicht.",
          7: "Halt das lange C mit Finger 2, dann verschieb die Hand nach unten, damit Finger 2 das H spielt.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand in den ersten acht Takten allein, und drück die drei Töne jedes Akkords zusammen.",
          "Spiel den Walzerbass des Refrains allein: tiefer Ton, Akkord, Akkord.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die Strophe steht in Moll. Spiel sie leise und gleichmäßig, und halt jeden Akkord den ganzen Takt lang.",
          "Halt das C mit Finger 2, dann verschieb die Hand eine Taste tiefer, damit Finger 2 das H spielt.",
          "Der Refrain wendet sich nach Dur. Lass ihn heller klingen, und halt den Walzerbass leicht.",
        ],
        tricky: {
          1: "Finger 5 spielt E, Finger 4 spielt D, Finger 3 spielt C, dann greift der Daumen hinab zum A.",
          5: "Dieselben Töne wie in Takt 1, nach einer Pause. Setz Finger 5 auf das E, bevor du beginnst.",
          14: "Halt das C mit Finger 2, dann verschieb die Hand nach unten, damit Finger 2 das H spielt. Die linke Hand wechselt zum E-Akkord.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Zweiklangs zusammen.",
          "Spiel die Strophe langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise, damit die Melodie darüber singt.",
          "Heb die Hand nach dem kurzen D an, und setz den Daumen für den Refrain auf das E darunter.",
          "Daumen und Finger 5 halten die Sexte, und die Hand gleitet als Ganzes von Taste zu Taste.",
        ],
        tricky: {
          17: "Heb die Hand nach dem D an, und setz den Daumen auf das E und Finger 5 auf das C.",
          27: "Schieb die Sexte hinauf zu A und F, dann zurück hinab zu G und E. Halt das Handgelenk locker.",
          28: "Die Sexte gleitet von F und D hinauf zu G und E. Finger 5 spielt die Melodie.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Oktaven der rechten Hand allein, und halt Daumen und Finger 5 in einer festen Form.",
          "Spiel den Stride-Bass allein: Spring hinunter zur Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Arpeggien der Takte 9 bis 16 nur mit der linken Hand.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau bei den Oktaven auf Finger 5 mit der Melodie. Der Daumen folgt ihm nach Gefühl.",
          "In jedem Arpeggio greift Finger 3 auf dem Weg nach oben über den Daumen.",
          "Spiel bei den Akkorden den obersten Finger etwas lauter, damit die Melodie singt.",
        ],
        tricky: {
          3: "Die Oktaven gehen vom H zum C und zurück, während die linke Hand zwischen dem tiefen E und seinem Akkord springt.",
          7: "Wie in Takt 3. Spiel die Oktaven gleichmäßig, und halt die Hand leicht.",
          9: "Die linke Hand beginnt ihr erstes Arpeggio, zwei Oktaven hinauf vom C und zurück, unter dem wiederholten C.",
        },
      },
    },
  },
};

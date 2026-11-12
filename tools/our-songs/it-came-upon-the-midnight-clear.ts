/**
 * *It Came Upon the Midnight Clear*: Richard Storrs Willis's tune *Carol*, in four versions of ours.
 *
 * The tune is one verse of *Carol* in C major, as US hymnals print it. Its four phrases start alike, and
 * the third drops an octave and climbs back through F sharp and G sharp. The edition writes it in 6/8
 * with an eighth upbeat. The tune here doubles every length into 6/4, so its eighths are quarters and
 * Common needs nothing faster. Bar 1 holds the upbeat after five quarters of rest. The hook is its first
 * three bars, the opening line from the upbeat to its last note.
 *
 * Common plays the tune over held open fifths and single bass notes. It rests briefly before each leap,
 * and leaves out four notes, the two sharps among them. The hand then keeps its place, and only the thumb
 * stretches down to the low E. Rare plays every note over a bass note and the rest of its chord, with a
 * few two-note chords. Epic puts an Alberti bass with the pedal under it, and plays the last phrase in
 * thirds and sixths. Legendary sets the tune an octave up in chords over a stride bass.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 6/4, in quarters: a phrase, its answer, a phrase that drops and climbs, and the answer again. */
const tune = [
  "r:5 G4:1 | E5:2 D5:1 C5:2 A4:1 | G4:2 A4:1 G4:2 G4:1 | A4:1 B4:1 C5:1 C5:1 D5:1 E5:1 | D5:5 G4:1",
  "E5:2 D5:1 C5:2 A4:1 | G4:2 A4:1 G4:2 G4:1 | A4:2 A4:1 B4:1 A4:1 G4:1 | C5:5 E5:1",
  "E5:2 E4:1 E4:1 F#4:1 G#4:1 | A4:2 B4:1 C5:2 E5:1 | D5:1 C5:1 B4:1 A4:1 B4:1 A4:1 | G4:5 G4:1",
  "E5:2 D5:1 C5:2 A4:1 | G4:2 A4:1 G4:2 G4:1 | A4:2 A4:1 B4:1 A4:1 G4:1 | C5:6",
].join(" | ");

/** Each bar of the tune in the right hand, in quarters, fingered as a pianist plays it, thumb under included. */
const RIGHT_BARS = [
  "r:5 G4/1:1",
  "E5/5:2 D5/4:1 C5/3:2 A4/2:1",
  "G4/1:2 A4/2:1 G4/1:2 G4/1:1",
  "A4/1:1 B4/2:1 C5/3:1 C5/3:1 D5/4:1 E5/5:1",
  "D5/4:5 G4/1:1",
  "E5/5:2 D5/4:1 C5/3:2 A4/2:1",
  "G4/1:2 A4/2:1 G4/1:2 G4/1:1",
  "A4/2:2 A4/2:1 B4/3:1 A4/2:1 G4/1:1",
  "C5/3:5 E5/5:1",
  "E5/5:2 E4/1:1 E4/1:1 F#4/2:1 G#4/3:1",
  "A4/1:2 B4/2:1 C5/3:2 E5/5:1",
  "D5/4:1 C5/3:1 B4/2:1 A4/1:1 B4/3:1 A4/2:1",
  "G4/1:5 G4/1:1",
  "E5/5:2 D5/4:1 C5/3:2 A4/2:1",
  "G4/1:2 A4/2:1 G4/1:2 G4/1:1",
  "A4/2:2 A4/2:1 B4/3:1 A4/2:1 G4/1:1",
  "C5/3:6",
];

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** The right hand in eighths, with `changes` replacing whole bars, keyed by bar from 1. */
function rightWith(changes: Record<number, string>): string {
  return RIGHT_BARS.map((bar, index) => changes[index + 1] ?? inEighths(bar)).join(" | ");
}

/** Common's left hand, held in one place: open fifths on C, G and A, and single notes on C, D and E. */
const HELD: Record<string, string> = {
  C: "C3+G3/3+1",
  G: "G2+D3/5+2",
  A: "A2+E3/4+1",
  c: "C3/3",
  D: "D3/2",
  E: "E3/1",
};

/** Rare's half bars in eighths: a bass note on the beat, then the rest of its chord. */
const BASS_CHORD: Record<string, string> = {
  C: "C3/5:2 E3+G3/2+1:4",
  F: "A2/5:2 C3+F3/3+1:4",
  d: "D3/5:2 F3+A3/2+1:4",
  G: "B2/5:2 D3+G3/2+1:4",
  a: "A2/5:2 E3+A3/2+1:4",
};

/** Half a bar of Alberti bass in eighths, one pattern per chord, the bass note on the beat. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 E3/3:1 G3/1:1",
  a: "A2/5:1 E3/1:1 C3/3:1 E3/1:1 C3/3:1 E3/1:1",
  o: "A2/5:1 A3/1:1 E3/2:1 A3/1:1 E3/2:1 A3/1:1",
  F: "A2/5:1 F3/1:1 C3/3:1 F3/1:1 C3/3:1 F3/1:1",
  d: "D3/5:1 A3/1:1 F3/3:1 A3/1:1 F3/3:1 A3/1:1",
  D: "D3/5:1 A3/1:1 F#3/3:1 A3/1:1 F#3/3:1 A3/1:1",
  E: "B2/5:1 G#3/1:1 E3/3:1 G#3/1:1 E3/3:1 G#3/1:1",
  X: "B2/5:1 G#3/1:1 D3/3:1 G#3/1:1 D3/3:1 G#3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1 D3/3:1 G3/1:1",
  7: "B2/5:1 G3/1:1 F3/2:1 G3/1:1 F3/2:1 G3/1:1",
};

/** Half a bar of stride in eighths: the root in octaves, then the chord, each with a rest for the jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:2 r:1 E3+G3+C4/3+2+1:2 r:1",
  a: "A1+A2/5+1:2 r:1 E3+A3+C4/3+2+1:2 r:1",
  o: "A1+A2/5+1:2 r:1 E3+A3/2+1:2 r:1",
  d: "D2+D3/5+1:2 r:1 F3+A3+D4/3+2+1:2 r:1",
  D: "D2+D3/5+1:2 r:1 F#3+A3+D4/3+2+1:2 r:1",
  E: "E2+E3/5+1:2 r:1 G#3+B3+E4/3+2+1:2 r:1",
  X: "E2+E3/5+1:2 r:1 D3+G#3+B3/4+2+1:2 r:1",
  F: "F2+F3/5+1:2 r:1 F3+A3+C4/3+2+1:2 r:1",
  G: "G1+G2/5+1:2 r:1 D3+G3+B3/4+2+1:2 r:1",
  7: "G1+G2/5+1:2 r:1 F3+G3+B3/3+2+1:2 r:1",
};

/** Bars of `patterns` from `halves`, such as `"CF C7"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** The chords of bars 2 to 16 under Epic's Alberti bass, one letter per half bar. */
const EPIC_CHORDS = "CF C7 dC GG CF C7 F7 CC EX oa DD GG CF C7 F7";

/** The chords of bars 2 to 16 under Legendary's stride, one letter per half bar. */
const LEGENDARY_CHORDS = "CF C7 dC GG CF C7 F7 CC EX oa DD GG CF C7 F7";

/** A pedal line for 17 bars: up in bar 1, changed on each half bar, then held through the last bar. */
const PEDAL = "r:12 | " + "P:6 P:6 | ".repeat(15) + "P:12";

/** Legendary's tune an octave up in the right hand, for bars 2 and 3, which come back as bars 6, 7, 14 and 15. */
const LEGENDARY_PHRASE = [
  "G5+C6+E6/1+2+5:4 D6/4:2 F5+A5+C6/1+2+3:4 A5/2:2",
  "E5+G5/1+2:4 A5/3:2 B4+F5+G5/1+2+3:4 D5+G5/1+3:2",
];

/** Legendary's bars 8 and 16, where the phrase turns through F and G back to the home C. */
const LEGENDARY_CADENCE = "C5+F5+A5/1+2+4:4 F5+A5/2+4:2 D5+G5+B5/1+3+5:2 A5/4:2 G5/3:2";

export const itCameUponTheMidnightClear: OurSong = {
  slug: "it-came-upon-the-midnight-clear",
  title: "It Came Upon the Midnight Clear",
  source: {
    composer: "Richard Storrs Willis",
    died: 1900,
    published: 1850,
    edition: "Willis's tune Carol, published as a choir study in 1850, in the form US hymnals print it",
  },
  about:
    "Edmund Sears wrote the poem in 1849. " +
    "It was first printed in The Christian Register, in Boston, on December 29, 1849. " +
    "Richard Storrs Willis published the tune a year later, as a study for choirs. " +
    "Hymnals in the United States set the poem to it under the name Carol, and it became a well-loved carol.",
  funFact: "In Britain, the same words are usually sung to a different tune, Noel, which Arthur Sullivan arranged from an English folk tune.",
  mythic: null,
  collection: "christmas",
  tune: { text: tune, numerator: 6, denominator: 4, key: C_MAJOR, hookBars: [1, 3] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 120,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: rightWith({
        1: "r:10 G4/1:1 r:1",
        2: "E5/5:4 D5/4:2 C5/3:4 A4/2:2",
        3: "G4/1:4 A4/2:2 G4/1:4 G4/1:2",
        4: "A4/2:2 B4/3:2 C5/4:2 C5/4:2 D5/5:4",
        5: "D5/5:10 G4/1:1 r:1",
        9: "C5/3:10 E5/5:1 r:1",
        10: "E5/5:3 r:1 E4/1:8",
        11: "A4/2:4 B4/3:2 C5/4:6",
        12: "D5/5:2 C5/4:2 B4/3:2 A4/2:2 B4/3:2 A4/2:2",
        13: "G4/1:10 G4/1:1 r:1",
      }),
      left: [
        `r:12 | ${HELD.C}:12 | ${HELD.C}:6 ${HELD.G}:6 | ${HELD.D}:6 ${HELD.C}:6 | ${HELD.G}:12`,
        `${HELD.C}:12 | ${HELD.C}:6 ${HELD.G}:6 | ${HELD.D}:6 ${HELD.G}:6 | ${HELD.c}:12`,
        `${HELD.E}:12 | ${HELD.A}:12 | ${HELD.D}:12 | ${HELD.G}:12`,
        `${HELD.C}:12 | ${HELD.C}:6 ${HELD.G}:6 | ${HELD.D}:6 ${HELD.G}:6 | ${HELD.C}:12`,
      ].join(" | "),
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play the first three bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 3], wait: true },
        { text: "Play bars 9 to 13 with the right hand alone, where the tune drops and climbs back.", hands: "right", speed: 0.6, loop: [9, 13], wait: true },
        { text: "Now the left hand alone. It holds one fifth or one note at a time, and stays in one place.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first five bars.", hands: "both", speed: 0.7, loop: [1, 5], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "trick", text: "Lift the thumb off G a moment early. The little finger then has time to reach the high E." },
        { fromBar: 10, toBar: 10, kind: "trick", text: "The tune drops a whole octave here. Lift the hand off the high E, and land the thumb on the low one." },
        { fromBar: 1, toBar: 17, kind: "rhythm", text: "Count six beats in a bar: long, short, long, short. The tune sways like a lullaby." },
      ],
      tricky: {
        6: "After the short rest, finger 5 lands on the high E. Fingers 4, 3 and 2 then walk down to A.",
        8: "Finger 2 plays A twice, and finger 3 steps up to B. Then fingers 2 and 1 walk down to G.",
        14: "The same shape as bar 6: finger 5 on the high E, then 4, 3 and 2 down to A.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: rightWith({
        4: "A4/2:2 B4/3:2 C5/4:2 C5/1:2 D5/2:2 E5/3:2",
        5: "G4+D5/1+2:10 G4/1:2",
        6: "C5+E5/3+5:4 D5/4:2 C5/3:4 A4/2:2",
        9: "G4+C5/1+3:10 E5/5:2",
        10: "E5/5:4 E4/1:2 E4/1:2 F#4/1:2 G#4/2:2",
        11: "A4/3:4 B4/4:2 C5/5:4 E5/5:2",
        14: "C5+E5/3+5:4 D5/4:2 C5/3:4 A4/2:2",
        17: "G4+C5/1+3:12",
      }),
      left: [
        "r:12",
        halfBars(BASS_CHORD, "CF CG dC GG CF CG FG CC"),
        "B2/5:2 E3+G#3/2+1:10",
        halfBars(BASS_CHORD, "aa dd GG CF CG FG"),
        "C3/5:2 E3+G3/2+1:10",
      ].join(" | "),
      skills: ["triads", "two-note-chords"],
      practice: [
        { text: "Play the left hand alone. A bass note comes first, then the rest of its chord.", hands: "left", speed: 0.6, loop: [2, 5], wait: true },
        { text: "Play the right hand alone on the first five bars, slowly.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play bars 9 to 13 with the right hand alone, where the tune drops and climbs.", hands: "right", speed: 0.6, loop: [9, 13], wait: true },
        { text: "Join the hands on bars 1 to 5.", hands: "both", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 4, toBar: 4, kind: "fingering", text: "On the second C, swap finger 4 for the thumb. Fingers 2 and 3 then reach D and E." },
        { fromBar: 5, toBar: 6, kind: "trick", text: "Use the long chord in bar 5 to get the hand ready for the high E." },
        { fromBar: 10, toBar: 11, kind: "sound", text: "The tune climbs through F sharp and G sharp. Let it grow a little louder up to the high E." },
      ],
      tricky: {
        10: "The tune drops from the high E to the low one. Then the thumb slides up to F sharp, and finger 2 takes G sharp.",
        11: "Fingers 3, 4 and 5 climb to A, B and C. Then finger 5 moves on up to the high E.",
        12: "Fingers 4, 3, 2 and 1 walk down from D to A. Then finger 3 takes B, so finger 2 lands on A.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: rightWith({
        14: "C5+E5/3+5:4 B4+D5/2+4:2 A4+C5/1+3:4 F4+A4/1+3:2",
        15: "E4+G4/1+3:4 C4+A4/1+5:2 B3+G4/1+5:4 D4+G4/1+3:2",
        16: "F4+A4/1+3:4 F4+A4/1+3:2 G4+B4/2+4:2 F4+A4/2+4:2 B3+G4/1+3:2",
        17: "E4+G4+C5/1+3+5:12",
      }),
      left: `r:12 | ${halfBars(ALBERTI, EPIC_CHORDS)} | C3+E3+G3/5+3+1:12`,
      pedal: PEDAL,
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand alone on bars 9 to 13, and pass the thumb under on the way up.", hands: "right", speed: 0.5, loop: [9, 13], wait: true },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [13, 17], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "sound", text: "Keep the Alberti bass soft, so the tune floats above it." },
        { fromBar: 10, toBar: 11, kind: "fingering", text: "Climb E, F sharp and G sharp with fingers 1, 2 and 3, then pass the thumb under to A." },
        { fromBar: 14, toBar: 16, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        4: "The thumb moves from G up to A. Fingers 2 to 5 then climb to E, with finger 3 on both Cs.",
        15: "The pairs change shape: 1 and 3 for a third, 1 and 5 for a sixth. The thumb walks down to B, then up to D.",
        16: "Thirds on F and A, then fingers 2 and 4 step up to G and B and back. The thumb reaches down to B at the end.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 144,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [
        "r:10 G5/1:2",
        ...LEGENDARY_PHRASE,
        "D5+F5+A5/1+2+3:2 B5/4:2 C6/5:2 E5+G5+C6/1+2+3:2 D6/4:2 E6/5:2",
        "D5+G5+B5+D6/1+2+3+5:9 r:1 G5/1:2",
        ...LEGENDARY_PHRASE,
        LEGENDARY_CADENCE,
        "E5+G5+C6/1+3+5:9 r:1 E6/5:2",
        "G#5+B5+E6/1+2+5:3 r:1 B4+E5/1+2:2 B4+E5/1+2:2 D5+F#5/1+3:2 D5+G#5/1+4:2",
        "C5+E5+A5/1+2+4:4 B5/5:2 E5+A5+C6/1+2+5:4 E6/5:2",
        "F#5+A5+D6/1+2+5:2 C6/4:2 B5/3:2 C5+F#5+A5/1+2+3:2 B5/4:2 A5/3:1 r:1",
        "G4+B4+D5+G5/1+2+3+5:9 r:1 G5/1:2",
        ...LEGENDARY_PHRASE,
        LEGENDARY_CADENCE,
        "C5+E5+G5+C6/1+2+3+5:12",
      ].join(" | "),
      left: `r:12 | ${halfBars(STRIDE, LEGENDARY_CHORDS)} | C2+C3/5+1:12`,
      pedal: PEDAL,
      skills: ["stride", "melody-in-chords", "octave-bass"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 5], wait: true },
        { text: "Join the hands on the third phrase, bars 9 to 13, where the tune drops and climbs.", hands: "both", speed: 0.6, loop: [9, 13], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 5, kind: "trick", text: "In stride, look at the bass note and let the hand find the chord by feel." },
        { fromBar: 1, toBar: 17, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
        { fromBar: 5, toBar: 6, kind: "trick", text: "A short rest comes before each upbeat. Use it to move the hand to the next chord." },
      ],
      tricky: {
        3: "Finger 3 sings A after E and G. Then the thumb drops to B under F and G, and finger 3 keeps the tune's G.",
        5: "Spread the hand over four notes: D, G, B and D. Then lift it and land the thumb on the G.",
        13: "Another four-note chord, G, B, D and G, with the little finger on top. Lift it in the rest before the upbeat.",
      },
    },
  },
  de: {
    about:
      "Edmund Sears schrieb das Gedicht 1849. " +
      "Es erschien zuerst am 29. Dezember 1849 in The Christian Register in Boston. " +
      "Richard Storrs Willis veröffentlichte die Melodie ein Jahr später als Übungsstück für Chöre. " +
      "Gesangbücher in den USA setzten das Gedicht unter dem Namen Carol auf diese Melodie, und es wurde ein beliebtes Weihnachtslied.",
    funFact: "In Großbritannien singt man denselben Text meist zu einer anderen Melodie, Noel, die Arthur Sullivan nach einem englischen Volkslied bearbeitete.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten drei Takte nur mit der rechten Hand, und lass das Lied auf jeden Ton warten.",
          "Spiel die Takte 9 bis 13 nur mit der rechten Hand. Dort fällt die Melodie ab und steigt wieder hinauf.",
          "Jetzt die linke Hand allein. Sie hält immer eine Quinte oder einen Ton und bleibt an einer Stelle.",
          "Spiel die ersten fünf Takte mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Heb den Daumen einen Moment früher vom G. Dann hat der kleine Finger Zeit, das hohe E zu erreichen.",
          "Hier fällt die Melodie eine ganze Oktave. Heb die Hand vom hohen E, und setz den Daumen auf das tiefe.",
          "Zähl sechs Schläge im Takt: lang, kurz, lang, kurz. Die Melodie wiegt sich wie ein Wiegenlied.",
        ],
        tricky: {
          6: "Nach der kurzen Pause landet Finger 5 auf dem hohen E. Dann wandern Finger 4, 3 und 2 hinab zum A.",
          8: "Finger 2 spielt zweimal das A, und Finger 3 steigt zum H. Dann wandern Finger 2 und 1 hinab zum G.",
          14: "Dieselbe Form wie in Takt 6: Finger 5 auf dem hohen E, dann 4, 3 und 2 hinab zum A.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Zuerst kommt ein Basston, dann der Rest seines Akkords.",
          "Spiel die ersten fünf Takte langsam nur mit der rechten Hand.",
          "Spiel die Takte 9 bis 13 nur mit der rechten Hand. Dort fällt die Melodie ab und steigt wieder.",
          "Spiel die Takte 1 bis 5 mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Wechsle beim zweiten C von Finger 4 auf den Daumen. Dann greifen Finger 2 und 3 das D und das E.",
          "Nutz den langen Akkord in Takt 5, um die Hand auf das hohe E vorzubereiten.",
          "Die Melodie steigt über Fis und Gis. Lass sie bis zum hohen E etwas lauter werden.",
        ],
        tricky: {
          10: "Die Melodie fällt vom hohen E zum tiefen. Dann gleitet der Daumen hinauf zum Fis, und Finger 2 nimmt das Gis.",
          11: "Finger 3, 4 und 5 steigen zu A, H und C. Dann geht Finger 5 weiter hinauf zum hohen E.",
          12: "Finger 4, 3, 2 und 1 wandern vom D hinab zum A. Dann nimmt Finger 3 das H, damit Finger 2 auf dem A landet.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Takte 9 bis 13 nur mit der rechten Hand, mit Daumenuntersatz auf dem Weg nach oben.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Zweiklangs wie einen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise, damit die Melodie darüber schwebt.",
          "Steig mit Finger 1, 2 und 3 über E, Fis und Gis, dann folgt der Daumenuntersatz zum A.",
          "Die Melodie ist der obere Ton jedes Zweiklangs, also lass den oberen Finger führen.",
        ],
        tricky: {
          4: "Der Daumen geht vom G hinauf zum A. Dann steigen Finger 2 bis 5 zum E, mit Finger 3 auf beiden C.",
          15: "Die Zweiklänge wechseln ihre Form: 1 und 3 für eine Terz, 1 und 5 für eine Sexte. Der Daumen wandert hinab zum H, dann hinauf zum D.",
          16: "Terzen auf F und A, dann steigen Finger 2 und 4 zu G und H und zurück. Am Ende greift der Daumen hinunter zum H.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Stride-Bass allein: Spring hinunter zur Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Akkorde der rechten Hand allein, und lass den oberen Finger die Melodie singen.",
          "Spiel die dritte Phrase, die Takte 9 bis 13, mit beiden Händen. Dort fällt die Melodie ab und steigt wieder.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau beim Stride auf den Basston, und lass die Hand den Akkord nach Gefühl finden.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
          "Vor jedem Auftakt kommt eine kurze Pause. Nutz sie, um die Hand zum nächsten Akkord zu bringen.",
        ],
        tricky: {
          3: "Finger 3 singt das A nach E und G. Dann fällt der Daumen auf das H unter F und G, und Finger 3 behält das G der Melodie.",
          5: "Spann die Hand über vier Töne: D, G, H und D. Dann heb sie an und setz den Daumen auf das G.",
          13: "Wieder ein Akkord aus vier Tönen, G, H, D und G, mit dem kleinen Finger oben. Lös ihn in der Pause vor dem Auftakt.",
        },
      },
    },
  },
};

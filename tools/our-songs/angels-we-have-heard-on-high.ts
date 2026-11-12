/**
 * *Angels We Have Heard on High*: the French carol *Les Anges dans nos campagnes*, in four versions of ours.
 *
 * The tune is the melody of Lambillotte's 1842 edition, and nothing of any later harmony. The score is in
 * F major, and the tune here is in C major, a fourth lower, at the score's own octave. Every harmony is our own.
 *
 * The score is in 4/4 with eighths. Every length here is twice as long, so an eighth is a quarter and
 * Common plays the Gloria run at its place. The tune is written in 4/2, one bar of the score to a bar.
 * The hook is its bars 9 to 12, the Gloria run the carol is known by.
 *
 * A version must play the hook within its first 8 bars, and the hook starts in the score's ninth bar. So
 * every version is in 4/1, two bars of the score to a bar, and the Gloria starts in its fifth bar.
 *
 * Common plays the tune once over held fifths. Rare, Epic and Legendary play it twice, with a short
 * bridge between. Rare plays it over block triads. Epic puts an Alberti bass under the tune, then plays it
 * an octave up over broken chords, with the pedal. Legendary sets the tune in octaves over a stride bass.
 * It then plays the tune an octave up over a broken octave bass, and ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, a fourth below the score's F major. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The verse's four bars in quarters, which the tune plays twice. */
const VERSE = "E4:2 E4:2 E4:2 G4:2 | G4:3 F4:1 E4:4 | E4:2 D4:2 E4:2 G4:2 | E4:3 D4:1 C4:4";

/** The Gloria's five bars in quarters, which the tune plays twice. */
const GLORIA = "G4:4 A4:1 G4:1 F4:1 E4:1 | F4:4 G4:1 F4:1 E4:1 D4:1 | E4:4 F4:1 E4:1 D4:1 C4:1 | D4:3 G3:1 G3:4 | C4:2 D4:2 E4:2 F4:2";

/** The tune in 4/2, in quarters: the score's 21 bars, each twice as long. */
const tune = [VERSE, VERSE, GLORIA, "E4:4 D4:4", GLORIA, "E4:4 D4:4", "C4:8"].join(" | ");

/** The verse's four bars in the right hand, in quarters, fingered. */
const VERSE_RIGHT = ["E4/3:2 E4/3:2 E4/3:2 G4/5:2", "G4/5:3 F4/4:1 E4/3:4", "E4/3:2 D4/2:2 E4/3:2 G4/5:2", "E4/3:3 D4/2:1 C4/1:4"];

/** The Gloria's five bars in the right hand, in quarters, fingered so the hand never leaves its place. */
const GLORIA_RIGHT = [
  "G4/4:4 A4/5:1 G4/4:1 F4/3:1 E4/2:1",
  "F4/3:4 G4/4:1 F4/3:1 E4/2:1 D4/1:1",
  "E4/3:4 F4/4:1 E4/3:1 D4/2:1 C4/1:1",
  "D4/2:3 G3/1:1 G3/1:4",
  "C4/2:2 D4/3:2 E4/4:2 F4/5:2",
];

/** The tune's first 20 bars in the right hand, in quarters, one string per bar of the score. */
const TUNE_RIGHT = [...VERSE_RIGHT, ...VERSE_RIGHT, ...GLORIA_RIGHT, "E4/3:4 D4/2:4", ...GLORIA_RIGHT, "E4/3:4 D4/2:4"];

/** The chords of the tune's first 20 bars, one letter per half bar, a space between bars of the score. */
const CHORDS = "CC SC CC GC CC SC CC GC CF FS CD BB CC CG CF FS CD BB CC CG";

/** `text` with every length `times` as long, so a line in quarters reads in eighths or sixteenths. */
function scaled(text: string, times: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${times * Number(units)}`);
}

/** `text` with every note an octave higher. */
function octaveUp(text: string): string {
  return text.replace(/([A-G]#?)(\d)/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** The bars of the score in `bars`, two to a bar of 4/1. */
function inPairs(bars: readonly string[]): string {
  const pairs: string[] = [];
  for (let at = 0; at < bars.length; at += 2) pairs.push(`${bars[at]} ${bars[at + 1]}`);
  return pairs.join(" | ");
}

/** One string per bar of the score from `chords`, such as `"CC SC"`, each letter one of `patterns`. */
function chordBars(patterns: Record<string, string>, chords: string): string[] {
  return chords.split(" ").map((bar) => [...bar].map((chord) => patterns[chord]).join(" "));
}

/** One bar of the score of a held open fifth or bass note, in quarters, the hand kept on C to G. */
const HELD: Record<string, string> = {
  C: "C3+G3/5+1:8",
  G: "D3+G3/4+1:8",
  F: "F3/2:8",
  D: "D3/4:8",
};

/** Half a bar of the score of a block chord in quarters, the hand kept on C to G. */
const BLOCK: Record<string, string> = {
  C: "C3+E3+G3/5+3+1:4",
  c: "C3/5:4",
  S: "D3+F3+G3/4+2+1:4",
  G: "D3+G3/4+1:4",
  F: "C3+F3/5+2:4",
  D: "D3+F3/4+2:4",
  B: "D3+F3/4+2:4",
};

/** Half a bar of the score of Alberti bass in eighths: C, F over C, G seventh, G, D minor, or G seventh without its G. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  F: "C3/5:1 A3/1:1 F3/2:1 A3/1:1 C3/5:1 A3/1:1 F3/2:1 A3/1:1",
  S: "B2/5:1 G3/1:1 F3/2:1 G3/1:1 B2/5:1 G3/1:1 F3/2:1 G3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1 B2/5:1 G3/1:1 D3/3:1 G3/1:1",
  D: "D3/5:1 A3/1:1 F3/3:1 A3/1:1 D3/5:1 A3/1:1 F3/3:1 A3/1:1",
  B: "B2/5:1 F3/1:1 D3/3:1 F3/1:1 B2/5:1 F3/1:1 D3/3:1 F3/1:1",
};

/** Half a bar of the score of a rising broken chord in eighths, with a rest to jump back down. */
const BROKEN: Record<string, string> = {
  C: "C3/5:2 E3/3:2 G3/2:2 C4/1:1 r:1",
  F: "C3/5:2 F3/3:2 A3/2:2 C4/1:1 r:1",
  S: "G2/5:2 D3/3:2 F3/2:2 B3/1:1 r:1",
  G: "G2/5:2 D3/3:2 G3/2:2 B3/1:1 r:1",
  D: "D3/5:2 F3/3:2 A3/2:2 D4/1:1 r:1",
  B: "G2/5:2 D3/3:2 G3/2:2 B3/1:1 r:1",
};

/** Half a bar of the score of stride in sixteenths: the root in octaves, then the chord, twice, with rests for the jumps. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:2 r:2 C3+E3+G3/3+2+1:2 r:2 C2+C3/5+1:2 r:2 C3+E3+G3/3+2+1:2 r:2",
  F: "F2+F3/5+1:2 r:2 C3+F3+A3/3+2+1:2 r:2 F2+F3/5+1:2 r:2 C3+F3+A3/3+2+1:2 r:2",
  S: "G1+G2/5+1:2 r:2 F3+G3+B3/3+2+1:2 r:2 G1+G2/5+1:2 r:2 F3+G3+B3/3+2+1:2 r:2",
  G: "G1+G2/5+1:2 r:2 D3+G3+B3/3+2+1:2 r:2 G1+G2/5+1:2 r:2 D3+G3+B3/3+2+1:2 r:2",
  D: "D2+D3/5+1:2 r:2 D3+F3+A3/3+2+1:2 r:2 D2+D3/5+1:2 r:2 D3+F3+A3/3+2+1:2 r:2",
  B: "G1+G2/5+1:2 r:2 B2+D3+F3/3+2+1:2 r:2 G1+G2/5+1:2 r:2 B2+D3+F3/3+2+1:2 r:2",
};

/** Half a bar of the score of broken octave bass in sixteenths: root, fifth, octave, fifth, with a rest for the jump. */
const BROKEN_OCTAVE: Record<string, string> = {
  C: "C2/5:2 G2/2:2 C3/1:2 G2/2:2 C2/5:2 G2/2:2 C3/1:2 r:2",
  F: "F2/5:2 C3/2:2 F3/1:2 C3/2:2 F2/5:2 C3/2:2 F3/1:2 r:2",
  S: "G1/5:2 D2/2:2 G2/1:2 D2/2:2 G1/5:2 D2/2:2 G2/1:2 r:2",
  G: "G1/5:2 D2/2:2 G2/1:2 D2/2:2 G1/5:2 D2/2:2 G2/1:2 r:2",
  D: "D2/5:2 A2/2:2 D3/1:2 A2/2:2 D2/5:2 A2/2:2 D3/1:2 r:2",
  B: "G1/5:2 D2/2:2 G2/1:2 D2/2:2 G1/5:2 D2/2:2 G2/1:2 r:2",
};

/** The tune's first 20 bars an octave up in the right hand, in quarters, with a breath before the last chord. */
const TUNE_HIGH = [...TUNE_RIGHT.slice(0, -1), "E4/3:4 D4/2:3 r:1"].map(octaveUp);

/** The verse's four bars in Legendary's right hand, an octave up in octaves, in sixteenths. */
const VERSE_OCTAVES = [
  "E4+E5/1+5:8 E4+E5/1+5:8 E4+E5/1+5:8 G4+G5/1+5:8",
  "G4+G5/1+5:12 F5/4:2 r:2 E4+E5/1+5:16",
  "E4+E5/1+5:8 D5/4:6 r:2 E4+E5/1+5:8 G4+G5/1+5:8",
  "E5/5:12 D5/4:2 r:2 C4+C5/1+5:14 r:2",
];

/** The Gloria's five bars in Legendary's right hand, an octave up in octaves, in sixteenths. */
const GLORIA_OCTAVES = [
  "G4+G5/1+5:16 A5/5:4 G5/4:4 F5/3:4 E5/2:2 r:2",
  "F4+F5/1+5:16 G5/5:4 F5/4:4 E5/3:4 D5/2:2 r:2",
  "E4+E5/1+5:16 F5/5:4 E5/4:4 D5/3:4 C5/2:2 r:2",
  "D4+D5/1+5:12 G4/1:4 G3+G4/1+5:14 r:2",
  "C4+C5/1+5:8 D4+D5/1+5:8 E4+E5/1+5:8 F4+F5/1+5:8",
];

/** The bar after the Gloria in Legendary's right hand, with a breath before the next leap. */
const CLOSE_OCTAVES = "E4+E5/1+5:16 D4+D5/1+5:14 r:2";

/** Legendary's first time through, its first 20 bars of the score in sixteenths. */
const TUNE_OCTAVES = [...VERSE_OCTAVES, ...VERSE_OCTAVES, ...GLORIA_OCTAVES, CLOSE_OCTAVES, ...GLORIA_OCTAVES, CLOSE_OCTAVES];

/** Pedal for 22 bars of 4/1, changed at each half bar of the score in `perHalf` units, and held through the last bar. */
function pedalLine(perHalf: number): string {
  return [...Array(21).fill(Array(4).fill(`P:${perHalf}`).join(" ")), `P:${4 * perHalf}`].join(" | ");
}

export const angelsWeHaveHeardOnHigh: OurSong = {
  slug: "angels-we-have-heard-on-high",
  title: "Angels We Have Heard on High",
  source: {
    composer: "Traditional",
    died: null,
    published: 1842,
    edition: "Les Anges dans nos campagnes, from Louis Lambillotte's Choix de cantiques sur des airs nouveaux (1842), the melody only",
  },
  about:
    "Angels We Have Heard on High is a traditional French carol. " +
    "In French it is Les Anges dans nos campagnes, which means The angels in our countryside. " +
    "Its earliest known printing with words and notes is from 1842, in a collection by Louis Lambillotte. " +
    "The English words are a paraphrase from 1862 by James Chadwick, the Roman Catholic Bishop of Hexham and Newcastle.",
  funFact: "In the refrain Gloria in excelsis Deo, the o of Gloria is held through a long run of notes that rise and fall.",
  mythic: null,
  collection: "christmas",
  aka: ["Les Anges dans nos campagnes", "Gloria"],
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [9, 12] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 184,
      numerator: 4,
      denominator: 1,
      steps: 4,
      right: [inPairs(TUNE_RIGHT), "C4/1:16"].join(" | "),
      left: [inPairs([..."CGCCCGCCCFCDCGCFCDCG"].map((chord) => HELD[chord]!)), "C3+G3/5+1:16"].join(" | "),
      skills: ["held-bass", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the Gloria, bars 5 to 7, with the right hand alone. Let the quick notes rise and fall evenly.", hands: "right", speed: 0.5, loop: [5, 7], wait: true },
        { text: "Now the left hand alone. It holds one shape for each half bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "fingering", text: "Start with finger 3 on E. The thumb rests on middle C, and finger 5 on G." },
        { fromBar: 5, toBar: 6, kind: "rhythm", text: "Each long note is followed by four quick ones. Count them as one, two, three, four." },
        { fromBar: 11, toBar: 11, kind: "sound", text: "Let the last C ring for the whole bar, and lift both hands together." },
      ],
      tricky: {
        6: "Finger 2 plays D, then the thumb stretches down to the low G. The hand stays where it is.",
        7: "From the low G, fingers 2 to 5 climb C, D, E and F, one key each.",
        10: "The same climb as bar 7: fingers 2 to 5 on C, D, E and F.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 240,
      numerator: 4,
      denominator: 1,
      steps: 4,
      right: [inPairs(TUNE_RIGHT), "C4/1:8 r:8", inPairs(TUNE_RIGHT), "C4/1:16"].join(" | "),
      left: [
        inPairs(chordBars(BLOCK, CHORDS)),
        "C3+E3+G3/5+3+1:8 D3+F3+G3/4+2+1:8",
        inPairs(chordBars(BLOCK, "cC SC cC GC cC SC cC GC CF FS CD BB cC CG CF FS CD BB cC CG")),
        "C3+E3+G3/5+3+1:16",
      ].join(" | "),
      skills: ["triads"],
      practice: [
        { text: "Play the left hand alone, and press the notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 11], wait: true },
        { text: "Play the Gloria, bars 5 to 7, with the right hand alone. Keep the quick notes even.", hands: "right", speed: 0.5, loop: [5, 7], wait: true },
        { text: "Join the hands on the first time through, slowly.", hands: "both", speed: 0.6, loop: [1, 11], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "fingering", text: "The left hand does not move: finger 5 on C, 4 on D, 3 on E, 2 on F and the thumb on G." },
        { fromBar: 11, toBar: 11, kind: "trick", text: "The right hand rests while the left hand plays a G seventh chord. It leads you back to the start." },
        { fromBar: 12, toBar: 22, kind: "sound", text: "The second time, play the low note a little louder than the chord after it." },
      ],
      tricky: {
        6: "Finger 2 plays D, then the thumb stretches down to the low G, while the left hand holds D and F.",
        9: "The same notes as bar 6. Keep the right hand still and let the thumb reach down.",
        17: "Bar 6 once more, now in the second time through. Keep the chords soft under the tune.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 192,
      numerator: 4,
      denominator: 1,
      steps: 8,
      right: [
        scaled(inPairs(TUNE_RIGHT), 2),
        "C4/1:16 r:8 G4/1:2 A4/2:2 B4/3:2 r:2",
        scaled(inPairs(TUNE_HIGH), 2),
        "E4+G4+C5/1+2+5:32",
      ].join(" | "),
      left: [
        inPairs(chordBars(ALBERTI, CHORDS)),
        [..."CCSS"].map((chord) => ALBERTI[chord]).join(" "),
        inPairs(chordBars(BROKEN, CHORDS)),
        "C3+E3+G3/5+3+1:32",
      ].join(" | "),
      pedal: pedalLine(8),
      skills: ["alberti-bass", "broken-chords", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the broken chords of the second time through with the left hand alone.", hands: "left", speed: 0.5, loop: [12, 15], wait: false },
        { text: "Play the high Gloria, bars 16 to 18, with the right hand alone.", hands: "right", speed: 0.6, loop: [16, 18], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 10, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 11, toBar: 11, kind: "trick", text: "Lift the hand after the G, A and B, and land finger 3 on the E an octave up." },
        { fromBar: 1, toBar: 21, kind: "sound", text: "Change the pedal each time the left hand starts a new chord." },
      ],
      tricky: {
        17: "Finger 2 plays the high D, and the thumb stretches down to G while the left hand climbs.",
        19: "The Gloria runs high now. Let fingers 5, 4, 3 and 2 roll down from A to E.",
        20: "The thumb takes C, then finger 2 lands on D. Keep the broken chords below even.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 200,
      numerator: 4,
      denominator: 1,
      steps: 16,
      right: [
        inPairs(TUNE_OCTAVES),
        "C4+C5/1+5:32 r:16 C5/1:1 D5/2:1 E5/3:1 F5/4:1 G5/5:8 r:4",
        scaled(inPairs(TUNE_HIGH), 4),
        "C4+E4+G4+C5/1+2+3+5:64",
      ].join(" | "),
      left: [
        inPairs(chordBars(STRIDE, CHORDS)),
        [..."CCSS"].map((chord) => STRIDE[chord]).join(" "),
        inPairs(chordBars(BROKEN_OCTAVE, CHORDS)),
        "C2+G2+C3/5+2+1:64",
      ].join(" | "),
      pedal: pedalLine(16),
      skills: ["stride", "octave-bass", "sixteenth-notes"],
      practice: [
        { text: "Play the stride bass alone: jump down for the low octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's octaves alone, and let finger 5 sing the tune.", hands: "right", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the broken octave bass of the second time through with the left hand alone.", hands: "left", speed: 0.5, loop: [12, 15], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 10, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 5, toBar: 7, kind: "fingering", text: "After each octave, finger 5 stays up high and leads the quick notes down." },
        { fromBar: 11, toBar: 11, kind: "sound", text: "The quick run to G is a little fanfare. Play it light and bright." },
      ],
      tricky: {
        2: "Lift the hand off each single note before the next octave, so it lands without a stretch.",
        3: "The opening again. Keep the octaves even while the left hand jumps.",
        11: "Four quick notes run from C up to F, and finger 5 lands on G. The stride bass keeps going below.",
      },
    },
  },
  de: {
    about:
      "Angels We Have Heard on High ist ein traditionelles französisches Weihnachtslied. " +
      "Auf Französisch heißt es Les Anges dans nos campagnes, das bedeutet Die Engel auf unseren Feldern. " +
      "Der früheste bekannte Druck mit Text und Noten stammt von 1842, aus einer Sammlung von Louis Lambillotte. " +
      "Der englische Text ist eine Nachdichtung von 1862 durch James Chadwick, den römisch-katholischen Bischof von Hexham und Newcastle.",
    funFact:
      "Im Refrain Gloria in excelsis Deo wird das o von Gloria über einen langen Lauf von Tönen gehalten, die steigen und fallen.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Lied auf jeden Ton warten.",
          "Spiel das Gloria, Takte 5 bis 7, nur mit der rechten Hand. Lass die schnellen Töne gleichmäßig steigen und fallen.",
          "Jetzt die linke Hand allein. Sie hält für jeden halben Takt eine Griffform.",
          "Nimm beide Hände zusammen, und spiel das ganze Lied langsam.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Beginn mit Finger 3 auf dem E. Der Daumen liegt auf dem mittleren C, Finger 5 auf dem G.",
          "Auf jeden langen Ton folgen vier schnelle. Zähl sie als eins, zwei, drei, vier.",
          "Lass das letzte C den ganzen Takt klingen, und heb beide Hände zusammen ab.",
        ],
        tricky: {
          6: "Finger 2 spielt das D, dann streckt sich der Daumen hinab zum tiefen G. Die Hand bleibt, wo sie ist.",
          7: "Vom tiefen G aus steigen Finger 2 bis 5 über C, D, E und F, je eine Taste.",
          10: "Derselbe Aufstieg wie in Takt 7: Finger 2 bis 5 auf C, D, E und F.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein, und drück die Töne jedes Akkords zusammen an.",
          "Spiel das Gloria, Takte 5 bis 7, nur mit der rechten Hand. Halt die schnellen Töne gleichmäßig.",
          "Spiel den ersten Durchgang langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand bewegt sich nicht: Finger 5 auf C, 4 auf D, 3 auf E, 2 auf F und der Daumen auf G.",
          "Die rechte Hand pausiert, während die linke einen G-Septakkord spielt. Er führt dich zurück zum Anfang.",
          "Spiel beim zweiten Mal den tiefen Ton etwas lauter als den Akkord danach.",
        ],
        tricky: {
          6: "Finger 2 spielt das D, dann streckt sich der Daumen hinab zum tiefen G, während die linke Hand D und F hält.",
          9: "Dieselben Töne wie in Takt 6. Halt die rechte Hand ruhig, und lass den Daumen hinabgreifen.",
          17: "Noch einmal Takt 6, jetzt im zweiten Durchgang. Halt die Akkorde unter der Melodie leise.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die gebrochenen Akkorde des zweiten Durchgangs nur mit der linken Hand.",
          "Spiel das hohe Gloria, Takte 16 bis 18, nur mit der rechten Hand.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise, damit die Melodie darüber singt.",
          "Heb die Hand nach G, A und H, und setz Finger 3 eine Oktave höher auf das E.",
          "Wechsle das Pedal jedes Mal, wenn die linke Hand einen neuen Akkord beginnt.",
        ],
        tricky: {
          17: "Finger 2 spielt das hohe D, und der Daumen streckt sich hinab zum G, während die linke Hand steigt.",
          19: "Das Gloria läuft jetzt hoch. Lass Finger 5, 4, 3 und 2 vom A hinab zum E rollen.",
          20: "Der Daumen nimmt das C, dann landet Finger 2 auf dem D. Halt die gebrochenen Akkorde darunter gleichmäßig.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Stride-Bass allein: Spring hinunter zur tiefen Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Oktaven der rechten Hand allein, und lass Finger 5 die Melodie singen.",
          "Spiel den gebrochenen Oktavbass des zweiten Durchgangs nur mit der linken Hand.",
          "Nimm beide Hände zusammen, und spiel das ganze Lied in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau beim Stride auf die tiefe Oktave, und lass die Hand den Akkord nach Gefühl finden.",
          "Nach jeder Oktave bleibt Finger 5 oben und führt die schnellen Töne hinab.",
          "Der schnelle Lauf zum G ist eine kleine Fanfare. Spiel ihn leicht und hell.",
        ],
        tricky: {
          2: "Heb die Hand nach jedem Einzelton ab, damit sie ohne Strecken auf der nächsten Oktave landet.",
          3: "Wieder der Anfang. Halt die Oktaven gleichmäßig, während die linke Hand springt.",
          11: "Vier schnelle Töne laufen vom C hinauf zum F, und Finger 5 landet auf dem G. Darunter läuft der Stride-Bass weiter.",
        },
      },
    },
  },
};

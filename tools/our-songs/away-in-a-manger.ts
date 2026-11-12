/**
 * *Away in a Manger*: William J. Kirkpatrick's tune *Cradle Song*, in four versions of ours.
 *
 * The tune is the one sung in Britain, which rises from its first note. It is not James R. Murray's
 * tune *Mueller*, which falls from a high C. The score is in F major, and the tune here is in C major,
 * a fourth lower, at the score's own octave. A bar holding the one-beat pickup comes first.
 *
 * The tune is in 3/4, and every length here is twice as long, in 3/2. A half note is one beat, so the
 * score's eighths are quarters, and Common plays them at their place. The hook is the pickup bar and
 * the next two, the rising opening the song is known by.
 *
 * Common plays the tune once over held fifths. Rare plays it over block triads, then a waltz bass. Epic
 * puts an Alberti bass under the first verse and plays the second an octave up in thirds and sixths
 * over a waltz bass, with the pedal. Legendary sets the tune in chords over a stride bass, then in high
 * octaves over arpeggios, and ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, a fourth below the score's F major. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The first six bars of each half of the tune in 3/2, in quarters. */
const HALF = "C4:2 C4:2 D4:1 E4:1 | C4:2 C4:2 E4:1 F4:1 | G4:2 G4:2 A4:2 | F4:4 D4:1 E4:1 | F4:2 F4:2 G4:2 | E4:2 E4:2 C4:1 E4:1";

/** The tune in 3/2, in quarters: the pickup bar, then the sixteen bars of the verse. */
const tune = ["r:4 G3:2", HALF, "D4:2 A3:2 C4:2 | B3:4 G3:2", HALF, "D4:2 A3:2 B3:2 | C4:6"].join(" | ");

/** The pickup bar in the right hand, in quarters: the thumb on G below middle C. */
const PICKUP = "r:4 G3/1:2";

/** Bars 2 to 7 in the right hand, in quarters, which come back as bars 10 to 15. */
const OPENING =
  "C4/2:2 C4/2:2 D4/3:1 E4/4:1 | C4/1:2 C4/1:2 E4/2:1 F4/3:1 | G4/4:2 G4/4:2 A4/5:2 | " +
  "F4/3:4 D4/1:1 E4/2:1 | F4/3:2 F4/3:2 G4/5:2 | E4/4:2 E4/4:2 C4/2:1 E4/4:1";

/** Bars 8 and 9 in the right hand, in quarters: the first half's close, down to the low G. */
const TURN = "D4/3:2 A3/1:2 C4/3:2 | B3/2:4 G3/1:2";

/** Bar 16 in the right hand, in quarters: the last climb to C. */
const CLOSE = "D4/3:2 A3/1:2 B3/2:2";

/** The whole verse in the right hand, in quarters, without its last bar. */
const VERSE = [PICKUP, OPENING, TURN, OPENING, CLOSE].join(" | ");

/** Bars of `patterns` from `beats`, such as `"Ccc Ggg"`: one letter per beat, a space between bars. */
function beatBars(patterns: Record<string, string>, beats: string): string {
  return beats
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** One bar of a held open fifth or bass note in quarters, the hand kept on C to G. */
const HELD: Record<string, string> = {
  C: "C3+G3/5+1:6",
  F: "F3/2:6",
  G: "D3+G3/4+1:6",
  D: "D3/4:6",
};

/** One bar of a block chord in quarters: C, F over C, G seventh with the hand kept still, or G. */
const BLOCK: Record<string, string> = {
  C: "C3+E3+G3/5+3+1:6",
  F: "C3+F3+A3/5+2+1:6",
  S: "D3+F3+G3/4+2+1:6",
  G: "B2+D3+G3/5+3+1:6",
};

/** One beat of waltz bass in quarters: the bass note, or the chord above it, on C, F, G seventh, D minor or G. */
const WALTZ: Record<string, string> = {
  C: "C3/5:2",
  c: "E3+G3/3+1:2",
  F: "C3/5:2",
  f: "F3+A3/2+1:2",
  S: "B2/5:2",
  s: "F3+G3/2+1:2",
  D: "D3/5:2",
  d: "F3+A3/3+1:2",
  G: "B2/5:2",
  g: "D3+G3/3+1:2",
  h: "B2+D3+G3/5+3+1:2",
  T: "D3/4:2",
  t: "D3+G3/4+1:2",
};

/** One bar of Alberti bass in quarters, on C, F over C, G seventh over B, D minor or G over B. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 E3/3:1 G3/1:1",
  F: "C3/5:1 A3/1:1 F3/2:1 A3/1:1 F3/2:1 A3/1:1",
  S: "B2/5:1 G3/1:1 D3/3:1 G3/1:1 F3/2:1 G3/1:1",
  D: "D3/5:1 A3/1:1 F3/3:1 A3/1:1 F3/3:1 A3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1 D3/3:1 G3/1:1",
};

/** One beat of stride in eighths, its last eighth a rest for the jump: the root in octaves, or the chord. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:3 r:1",
  c: "C3+E3+G3/5+3+1:3 r:1",
  F: "F2+F3/5+1:3 r:1",
  f: "F3+A3+C4/5+3+1:3 r:1",
  S: "G1+G2/5+1:3 r:1",
  s: "B2+F3+G3/5+2+1:3 r:1",
  D: "D2+D3/5+1:3 r:1",
  d: "F3+A3+C4/5+3+1:3 r:1",
  G: "G1+G2/5+1:3 r:1",
  h: "B2+D3+G3/5+3+1:3 r:1",
};

/**
 * One beat of arpeggio in eighths, over two octaves. A capital climbs from the root, a small letter
 * climbs on, and a digit falls back and ends on a rest, so the hand can jump to the next root.
 */
const ARPEGGIO: Record<string, string> = {
  C: "C2/5:1 G2/3:1 C3/2:1 E3/1:1",
  c: "G3/3:1 C4/2:1 E4/1:1 C4/2:1",
  "1": "G3/3:1 E3/1:1 C3/2:1 r:1",
  F: "F2/5:1 C3/3:1 F3/2:1 A3/1:1",
  f: "C4/3:1 F4/2:1 A4/1:1 F4/2:1",
  "4": "C4/3:1 A3/1:1 F3/2:1 r:1",
  S: "G1/5:1 D2/3:1 G2/2:1 B2/1:1",
  s: "D3/3:1 F3/2:1 G3/1:1 F3/2:1",
  "5": "D3/3:1 B2/1:1 G2/2:1 r:1",
  D: "D2/5:1 A2/3:1 D3/2:1 F3/1:1",
  d: "A3/3:1 D4/2:1 F4/1:1 D4/2:1",
  "2": "A3/3:1 F3/1:1 D3/2:1 r:1",
  G: "G1/5:1 D2/3:1 G2/2:1 B2/1:1",
  g: "D3/3:1 G3/2:1 B3/1:1 G3/2:1",
  "7": "B3/3:1 G3/1:1 D3/2:1 r:1",
};

/** Bars 2 to 7 of Epic's second verse in the right hand, an octave up with thirds and sixths, in quarters. */
const OPENING_SIXTHS =
  "E4+C5/1+3:2 C5/3:2 D5/4:1 E5/5:1 | E4+C5/1+3:2 C5/2:2 E5/3:1 F5/4:1 | C5+G5/1+4:2 G5/4:2 C5+A5/1+5:2 | " +
  "A4+F5/1+4:4 D5/2:1 E5/3:1 | D5+F5/2+4:2 F5/4:2 B4+G5/1+5:2 | C5+E5/1+3:2 E5/3:2 C5/1:1 E5/5:1";

/** Bars 2 to 7 of Legendary's first verse in the right hand, the tune in chords an octave up, in quarters. */
const OPENING_CHORDS =
  "E4+G4+C5/1+2+3:2 G4+C5/1+2:2 D5/4:1 E5/5:1 | E4+G4+C5/1+2+3:2 G4+C5/1+2:2 E5/4:1 F5/5:1 | " +
  "C5+E5+G5/1+3+5:2 C5+E5+G5/1+3+5:2 C5+F5+A5/1+3+5:2 | A4+C5+F5/1+2+5:4 D5/3:1 E5/4:1 | " +
  "B4+D5+F5/1+2+5:2 B4+D5+F5/1+2+5:2 B4+D5+G5/1+2+5:2 | G4+C5+E5/1+2+5:2 G4+C5+E5/1+2+5:2 C5/2:1 E5/5:1";

/** Bars 2 to 7 of Legendary's second verse in the right hand, the tune in octaves two octaves up, in eighths. */
const OPENING_OCTAVES =
  "C5+C6/1+5:4 C5+C6/1+5:4 D5+D6/1+5:2 E5+E6/1+5:1 r:1 | C5+C6/1+5:4 C5+C6/1+5:3 r:1 E5+E6/1+5:2 F5+F6/1+5:2 | " +
  "G5+G6/1+5:4 G5+G6/1+5:4 A5+A6/1+5:3 r:1 | F5+F6/1+5:8 D5+D6/1+5:2 E5+E6/1+5:2 | " +
  "F5+F6/1+5:4 F5+F6/1+5:4 G5+G6/1+5:4 | E5+E6/1+5:4 E5+E6/1+5:3 r:1 C5+C6/1+5:1 r:1 E5+E6/1+5:2";

export const awayInAManger: OurSong = {
  slug: "away-in-a-manger",
  title: "Away in a Manger",
  source: {
    composer: "William J. Kirkpatrick",
    died: 1921,
    published: 1895,
    edition: "William J. Kirkpatrick, Cradle Song, in Around the World with Christmas (1895)",
  },
  about:
    "The words of Away in a Manger are American, and nobody knows who wrote them. " +
    "Many tunes were written for them, and this one is Cradle Song by William J. Kirkpatrick, from 1895. " +
    "It is the tune sung in Britain and Ireland.",
  funFact: "The words were long called Luther's Cradle Hymn, but Martin Luther never wrote them.",
  mythic: null,
  collection: "christmas",
  aka: ["Cradle Song"],
  tune: { text: tune, numerator: 3, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 3] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 180,
      numerator: 3,
      denominator: 2,
      steps: 2,
      right: [VERSE, "C4/3:6"].join(" | "),
      left: ["r:6", ...[..."CCCFGCDGCCCFGCG"].map((chord) => HELD[chord]), HELD.C].join(" | "),
      skills: ["held-bass", "open-fifths"],
      practice: [
        { text: "Play the first five bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play bars 5 to 9 with the right hand alone, where the tune walks down to the low G.", hands: "right", speed: 0.6, loop: [5, 9], wait: true },
        { text: "Now the left hand alone. It holds one shape for each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "The thumb plays the low G, and finger 2 takes middle C." },
        { fromBar: 2, toBar: 3, kind: "rhythm", text: "Two long notes, then two quick ones that lean into the next bar." },
        { fromBar: 8, toBar: 9, kind: "trick", text: "The thumb reaches down to A, and the hand follows it down to the low G." },
      ],
      tricky: {
        6: "Finger 3 plays F twice, then the little finger stretches up to G.",
        7: "Finger 4 plays E, finger 2 reaches down to C, and finger 4 comes back to E.",
        15: "The same notes as bar 7: E twice with finger 4, then C with finger 2.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 200,
      numerator: 3,
      denominator: 2,
      steps: 2,
      right: [VERSE, "C4/3:6"].join(" | "),
      left: [
        "r:6",
        [..."CCCFSCSS"].map((chord) => BLOCK[chord]).join(" | "),
        beatBars(WALTZ, "Ccc Ccc Ccc Fff Tss Ccc Tst"),
        BLOCK.C,
      ].join(" | "),
      skills: ["triads", "waltz-bass"],
      practice: [
        { text: "Play the left hand alone, and press the three notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the waltz bass alone: low note, chord, chord.", hands: "left", speed: 0.6, loop: [10, 17], wait: true },
        { text: "Join the hands on the first half, slowly.", hands: "both", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 5, toBar: 6, kind: "fingering", text: "For the F chord, the thumb moves up from G to A. It moves back for the next chord." },
        { fromBar: 10, toBar: 17, kind: "sound", text: "In the waltz bass, play the low note a little louder than the chords after it." },
        { fromBar: 2, toBar: 9, kind: "sound", text: "Hold each chord for the whole bar, softly, like a lullaby." },
      ],
      tricky: {
        6: "The left thumb steps back from A to G as the right hand climbs to G.",
        7: "Finger 4 plays E, finger 2 reaches down to C, and finger 4 comes back to E.",
        15: "The same notes as bar 7, now over a waltz bass. Keep the bass soft.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 216,
      numerator: 3,
      denominator: 2,
      steps: 2,
      right: [
        VERSE,
        "C4/3:3 r:1 G4/1:2",
        OPENING_SIXTHS,
        "F4+D5/1+4:2 A4/1:2 C5/2:2 | G4+B4/1+2:4 G4/1:2",
        OPENING_SIXTHS,
        "F4+D5/1+5:2 A4/2:2 G4+B4/1+3:2 | E4+G4+C5/1+2+5:6",
      ].join(" | "),
      left: [
        "r:6",
        [..."CCCFSCDGCCCFSCG"].map((chord) => ALBERTI[chord]).join(" | "),
        "C3/5:1 G3/1:1 E3/3:1 G3/1:1 C3/5:2",
        beatBars(WALTZ, "Ccc Ccc Ccc Fff Sss Ccc Ddd Ggg Ccc Ccc Ccc Fff Sss Ccc Ddh"),
        BLOCK.C,
      ].join(" | "),
      pedal: ["r:6", ...Array(30).fill("P:6"), "P:4 P:2", "P:6"].join(" | "),
      skills: ["alberti-bass", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [18, 21], wait: true },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.5, loop: [1, 17], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 17, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 17, toBar: 18, kind: "trick", text: "Lift the hand after the C, and land on the G an octave up." },
        { fromBar: 18, toBar: 33, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        17: "Lift the right hand after the C, and land the thumb on the G an octave up.",
        19: "The thumb lets go of the low E, and fingers 2, 3 and 4 walk up to F.",
        32: "Spread the hand for the sixth, then close it for the last third on G and B.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 216,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: [
        inEighths(
          [
            "r:4 G4/2:2",
            OPENING_CHORDS,
            "F4+A4+D5/1+2+5:2 F4+A4/1+3:2 F4+A4+C5/1+2+4:2 | D4+G4+B4/1+2+4:4 D4+G4/1+3:2",
            OPENING_CHORDS,
            "F4+A4+D5/1+2+5:2 F4+A4/1+3:2 D4+G4+B4/1+2+4:2",
          ].join(" | "),
        ),
        "E4+G4+C5/1+2+5:7 r:1 G4+G5/1+5:3 r:1",
        OPENING_OCTAVES,
        "D5+D6/1+5:3 r:1 A4+A5/1+5:4 C5+C6/1+5:4 | B4+B5/1+5:7 r:1 G4+G5/1+5:3 r:1",
        OPENING_OCTAVES,
        "D5+D6/1+5:3 r:1 A4+A5/1+5:4 B4+B5/1+5:4 | C5+E5+G5+C6/1+2+3+5:12",
      ].join(" | "),
      left: [
        "r:12",
        beatBars(STRIDE, "Ccc Ccc Ccf Fff Sss Ccc Ddd Ghh Ccc Ccc Ccf Fff Sss Ccc Ddh Ccc"),
        beatBars(ARPEGGIO, "Cc1 Cc1 Cc1 Ff4 Ss5 Cc1 Dd2 Gg5 Cc1 Cc1 Cc1 Ff4 Ss5 Cc1 Dd7"),
        "C2+G2+C3/5+2+1:12",
      ].join(" | "),
      pedal: ["r:12", "P:12", "P:12", "P:8 P:4", ...Array(11).fill("P:12"), "P:8 P:4", ...Array(15).fill("P:12"), "P:8 P:4", "P:12"].join(" | "),
      skills: ["stride", "melody-in-chords", "arpeggios"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 5], wait: true },
        { text: "Play the arpeggios of the second verse in the left hand alone.", hands: "left", speed: 0.5, loop: [18, 21], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 17, kind: "trick", text: "In stride, look at the octave and let the hand find the chord by feel." },
        { fromBar: 18, toBar: 33, kind: "sound", text: "Up high, the octaves should ring like bells. Keep the wrist loose." },
        { fromBar: 18, toBar: 33, kind: "fingering", text: "In each arpeggio, the third finger crosses over the thumb on the way up." },
      ],
      tricky: {
        6: "The left hand jumps to the low G octave while the right hand plays the B, D and F chord.",
        22: "The octaves play F twice, then G, while the left hand climbs a G seventh and falls back.",
        30: "The same as bar 22. Keep the octaves even while the arpeggio runs below them.",
      },
    },
  },
  de: {
    about:
      "Der Text von Away in a Manger stammt aus Amerika, und niemand weiß, wer ihn geschrieben hat. " +
      "Viele Melodien entstanden dazu, und diese ist Cradle Song von William J. Kirkpatrick aus dem Jahr 1895. " +
      "Diese Melodie singt man in Großbritannien und Irland.",
    funFact: "Der Text hieß lange Luther's Cradle Hymn, doch Martin Luther hat ihn nie geschrieben.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten fünf Takte nur mit der rechten Hand, und lass das Lied auf jeden Ton warten.",
          "Spiel die Takte 5 bis 9 nur mit der rechten Hand. Dort wandert die Melodie hinab zum tiefen G.",
          "Jetzt die linke Hand allein. Sie hält für jeden Takt eine Griffform.",
          "Nimm beide Hände zusammen, und spiel das ganze Lied langsam.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Der Daumen spielt das tiefe G, und Finger 2 nimmt das mittlere C.",
          "Zwei lange Töne, dann zwei schnelle, die sich in den nächsten Takt lehnen.",
          "Der Daumen greift hinab zum A, und die Hand folgt ihm hinab zum tiefen G.",
        ],
        tricky: {
          6: "Finger 3 spielt zweimal das F, dann streckt sich der kleine Finger hinauf zum G.",
          7: "Finger 4 spielt das E, Finger 2 greift hinab zum C, und Finger 4 kehrt zum E zurück.",
          15: "Dieselben Töne wie in Takt 7: zweimal E mit Finger 4, dann C mit Finger 2.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein, und drück die drei Töne jedes Akkords zusammen an.",
          "Spiel den Walzerbass allein: tiefer Ton, Akkord, Akkord.",
          "Spiel die erste Hälfte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Für den F-Akkord geht der Daumen vom G hinauf zum A. Für den nächsten Akkord geht er zurück.",
          "Spiel im Walzerbass den tiefen Ton etwas lauter als die Akkorde danach.",
          "Halt jeden Akkord den ganzen Takt lang, leise, wie in einem Wiegenlied.",
        ],
        tricky: {
          6: "Der linke Daumen geht vom A zurück zum G, während die rechte Hand hinauf zum G steigt.",
          7: "Finger 4 spielt das E, Finger 2 greift hinab zum C, und Finger 4 kehrt zum E zurück.",
          15: "Dieselben Töne wie in Takt 7, jetzt über einem Walzerbass. Halt den Bass leise.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und halt beide Töne jedes Zweiklangs zusammen.",
          "Spiel die erste Strophe langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise, damit die Melodie darüber singt.",
          "Heb die Hand nach dem C, und lande eine Oktave höher auf dem G.",
          "Die Melodie ist der obere Ton jedes Zweiklangs, also lass den oberen Finger führen.",
        ],
        tricky: {
          17: "Heb die rechte Hand nach dem C, und setz den Daumen eine Oktave höher auf das G.",
          19: "Der Daumen lässt das tiefe E los, und Finger 2, 3 und 4 wandern hinauf zum F.",
          32: "Spreiz die Hand für die Sexte, dann schließ sie für die letzte Terz auf G und H.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Stride-Bass allein: Spring hinunter zur Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel die Arpeggien der zweiten Strophe nur mit der linken Hand.",
          "Nimm beide Hände zusammen, und spiel das ganze Lied in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau beim Stride auf die Oktave, und lass die Hand den Akkord nach Gefühl finden.",
          "Oben sollen die Oktaven wie Glocken klingen. Lass das Handgelenk locker.",
          "In jedem Arpeggio kreuzt Finger 3 auf dem Weg nach oben über den Daumen.",
        ],
        tricky: {
          6: "Die linke Hand springt zur tiefen G-Oktave, während die rechte Hand den Akkord aus H, D und F spielt.",
          22: "Die Oktaven spielen zweimal F, dann G, während die linke Hand einen G-Septakkord hinaufsteigt und zurückfällt.",
          30: "Wie Takt 22. Halt die Oktaven gleichmäßig, während das Arpeggio darunter läuft.",
        },
      },
    },
  },
};

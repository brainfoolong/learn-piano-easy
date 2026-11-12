/**
 * *The First Noel*: the traditional English carol, in four versions of ours.
 *
 * The tune is the whole carol as John Stainer printed it in 1871: a verse of eight bars, the same verse
 * again, and the refrain. Stainer writes it in D major, in 3/4, with a pickup of two eighths. The tune
 * here is in C major and doubles every length into 3/2, so each eighth is a quarter and Common needs
 * nothing faster. Its first bar holds the pickup after a rest. The hook is bars 1 and 2 of the score.
 *
 * Common leaves out the pickup, so its 24 bars stay within its limit, and plays the rest over held open
 * fifths and single bass notes. Rare plays every note over a waltz bass. Epic puts an Alberti bass with the pedal under it,
 * passes the thumb under in the climb, and plays the second verse and the refrain in thirds. Legendary
 * sets the tune in octaves over a stride bass, then in chords over a broken octave bass.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The pickup in quarters, after a rest of a half and a quarter. */
const PICKUP = "r:4 E4:1 D4:1";

/** The verse in quarters, which comes twice: bars 1 to 8 and 9 to 16. */
const VERSE = "C4:3 D4:1 E4:1 F4:1 | G4:4 A4:1 B4:1 | C5:2 B4:2 A4:2 | G4:4 A4:1 B4:1 | C5:2 B4:2 A4:2 | G4:2 A4:2 B4:2 | C5:2 G4:2 F4:2 | E4:4 E4:1 D4:1";

/** The refrain in quarters: bars 17 to 24. */
const REFRAIN = "C4:3 D4:1 E4:1 F4:1 | G4:4 C5:1 B4:1 | A4:4 A4:2 | G4:4 G4:2 | C5:2 B4:2 A4:2 | G4:2 A4:2 B4:2 | C5:2 G4:2 F4:2 | E4:6";

/** The tune in 3/2, in quarters: the pickup bar, the verse twice and the refrain. */
const tune = [PICKUP, VERSE, VERSE, REFRAIN].join(" | ");

/** The verse in the right hand, in quarters. The hand lifts after the long G and lands with finger 3 on A. */
const RIGHT_VERSE =
  "C4/1:3 D4/2:1 E4/3:1 F4/4:1 | G4/5:3 r:1 A4/3:1 B4/4:1 | C5/5:2 B4/4:2 A4/3:2 | G4/2:4 A4/3:1 B4/4:1 | " +
  "C5/5:2 B4/4:2 A4/3:2 | G4/2:2 A4/3:2 B4/4:2 | C5/5:2 G4/3:2 F4/2:2 | E4/1:4 E4/3:1 D4/2:1";

/** The refrain in the right hand, in quarters, but for its last bar. The hand lifts after the long G. */
const RIGHT_REFRAIN =
  "C4/1:3 D4/2:1 E4/3:1 F4/4:1 | G4/5:3 r:1 C5/5:1 B4/4:1 | A4/3:4 A4/3:2 | G4/2:4 G4/2:2 | " +
  "C5/5:2 B4/4:2 A4/3:2 | G4/2:2 A4/3:2 B4/4:2 | C5/5:2 G4/3:2 F4/2:2";

/** The chords of the verse, one letter per bar: C, F, G, and X for C turning to G seventh. */
const VERSE_CHORDS = "CCFCFGXC";

/** The chords of the refrain, but for its last bar. */
const REFRAIN_CHORDS = "CCFCFGX";

/** Bars of `patterns` from `chords`, such as `"CCFC"`: one letter per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  return [...chords].map((chord) => patterns[chord]).join(" | ");
}

/** Bars of `patterns` from `beats`, such as `"Ccc Fff"`: one letter per beat, a space between bars. */
function beatBars(patterns: Record<string, string>, beats: string): string {
  return beats
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** `text` with every note doubled an octave up, the thumb below and the little finger on the tune. */
function inOctaves(text: string): string {
  return text.replace(/([A-G][#b]?)(\d):(\d+)/g, (_, name: string, octave: string, units: string) => {
    return `${name}${octave}+${name}${Number(octave) + 1}/1+5:${units}`;
  });
}

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** One bar of Common's left hand in quarters: an open fifth on C, F alone, or G over D. */
const HELD: Record<string, string> = {
  C: "C3+G3/5+1:6",
  F: "F3/2:6",
  G: "D3+G3/4+1:6",
  X: "D3+G3/4+1:6",
};

/** One bar of waltz bass in quarters: the bass note, then the rest of the chord twice. */
const WALTZ: Record<string, string> = {
  C: "C3/5:2 E3+G3/3+1:2 E3+G3/3+1:2",
  F: "C3/5:2 F3+A3/2+1:2 F3+A3/2+1:2",
  G: "B2/5:2 D3+G3/3+1:2 D3+G3/3+1:2",
  X: "C3/5:2 E3+G3/3+1:2 D3+F3+G3/4+2+1:2",
};

/** One bar of Alberti bass in quarters, the hand kept still: C, F over C, G over B, and C turning to G seventh. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 E3/3:1 G3/1:1",
  F: "C3/5:1 A3/1:1 F3/2:1 A3/1:1 F3/2:1 A3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1 D3/3:1 G3/1:1",
  X: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 B2/5:1 F3/2:1",
};

/** One beat of stride in eighths, its last eighth a rest for the jump: the root in octaves, or the chord. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:3 r:1",
  c: "C3+E3+G3/5+3+1:3 r:1",
  F: "F2+F3/5+1:3 r:1",
  f: "F3+A3/2+1:3 r:1",
  G: "G1+G2/5+1:3 r:1",
  g: "B2+D3+G3/5+3+1:3 r:1",
  x: "B2+F3+G3/5+2+1:3 r:1",
};

/**
 * One beat of broken octave in eighths: root, fifth, octave and fifth. A small letter ends a bar, with a
 * rest in place of the last fifth, so the hand can jump to the next root.
 */
const BROKEN_OCTAVE: Record<string, string> = {
  C: "C2/5:1 G2/2:1 C3/1:1 G2/2:1",
  c: "C2/5:1 G2/2:1 C3/1:1 r:1",
  F: "F2/5:1 C3/2:1 F3/1:1 C3/2:1",
  f: "F2/5:1 C3/2:1 F3/1:1 r:1",
  G: "G2/5:1 D3/2:1 G3/1:1 D3/2:1",
  g: "G2/5:1 D3/2:1 G3/1:1 r:1",
  x: "G2/5:1 D3/2:1 F3/1:1 r:1",
};

/** The verse with the thumb passing under on F, in quarters: Epic's first verse. */
const EPIC_VERSE =
  "C4/1:3 D4/2:1 E4/3:1 F4/1:1 | G4/2:4 A4/3:1 B4/4:1 | C5/5:2 B4/4:2 A4/3:2 | G4/2:4 A4/3:1 B4/4:1 | " +
  "C5/5:2 B4/4:2 A4/3:2 | G4/2:2 A4/3:2 B4/4:2 | C5/5:2 G4/3:2 F4/2:2 | E4/1:4 E4/3:1 D4/2:1";

/** The verse in thirds and sixths under the tune, in quarters: Epic's second verse. */
const EPIC_THIRDS =
  "C4/1:3 D4/2:1 E4/3:1 F4/1:1 | E4+G4/1+2:4 A4/3:1 B4/4:1 | A4+C5/3+5:2 G4+B4/2+4:2 F4+A4/1+3:2 | " +
  "E4+G4/1+2:4 A4/3:1 B4/4:1 | A4+C5/3+5:2 G4+B4/2+4:2 F4+A4/1+3:2 | E4+G4/1+3:2 F4+A4/2+4:2 G4+B4/3+5:2 | " +
  "E4+C5/2+5:2 E4+G4/2+4:2 D4+F4/1+3:2 | C4+E4/1+3:4 E4/3:1 D4/2:1";

/** The refrain with thirds under its long notes, in quarters: Epic's last eight bars. */
const EPIC_REFRAIN =
  "C4/1:3 D4/2:1 E4/3:1 F4/1:1 | G4/2:4 C5/5:1 B4/4:1 | F4+A4/1+3:4 F4+A4/1+3:2 | E4+G4/1+2:4 E4+G4/1+2:2 | " +
  "A4+C5/3+5:2 G4+B4/2+4:2 F4+A4/1+3:2 | E4+G4/1+3:2 F4+A4/2+4:2 G4+B4/3+5:2 | " +
  "E4+C5/2+5:2 E4+G4/2+4:2 D4+F4/1+3:2 | C4+E4/1+3:6";

/** The verse's bars in quarters, from bar 1. */
const VERSE_BARS = VERSE.split(" | ");

/**
 * The pickup and the first verse in octaves, in eighths: Legendary's bars 1 to 9. Before the drop from C to
 * G, the hand lifts for an eighth.
 */
const LEGENDARY_OCTAVES = [
  inEighths(inOctaves([PICKUP, ...VERSE_BARS.slice(0, 6)].join(" | "))),
  "C5+C6/1+5:3 r:1 G4+G5/1+5:4 F4+F5/1+5:4",
  inEighths(inOctaves(VERSE_BARS[7]!)),
].join(" | ");

/** The second verse with full chords under its long notes, in eighths: Legendary's bars 10 to 17. */
const LEGENDARY_CHORDS =
  "C4+E4+G4+C5/1+2+3+5:6 D4+D5/1+5:2 E4+E5/1+5:2 F4+F5/1+5:2 | G4+C5+E5+G5/1+2+3+5:8 A4+A5/1+5:2 B4+B5/1+5:2 | " +
  "C5+C6/1+5:4 B4+B5/1+5:4 A4+A5/1+5:4 | G4+C5+E5+G5/1+2+3+5:8 A4+A5/1+5:2 B4+B5/1+5:2 | " +
  "C5+C6/1+5:4 B4+B5/1+5:4 A4+A5/1+5:4 | G4+G5/1+5:4 A4+A5/1+5:4 B4+B5/1+5:4 | " +
  "C5+E5+G5+C6/1+2+3+5:3 r:1 G4+G5/1+5:4 F4+F5/1+5:4 | G4+C5+E5/1+2+5:8 E4+E5/1+5:2 D4+D5/1+5:2";

/** The refrain in chords and octaves, in eighths: Legendary's last eight bars. The hand lifts before each jump. */
const LEGENDARY_REFRAIN =
  "C4+E4+G4+C5/1+2+3+5:6 D4+D5/1+5:2 E4+E5/1+5:2 F4+F5/1+5:2 | " +
  "G4+C5+E5+G5/1+2+3+5:7 r:1 C5+C6/1+5:2 B4+B5/1+5:1 r:1 | " +
  "A4+C5+F5+A5/1+2+4+5:8 A4+C5+F5+A5/1+2+4+5:4 | G4+C5+E5+G5/1+2+3+5:8 G4+C5+E5+G5/1+2+3+5:3 r:1 | " +
  "C5+C6/1+5:4 B4+B5/1+5:4 A4+A5/1+5:4 | G4+G5/1+5:4 A4+A5/1+5:4 B4+B5/1+5:4 | " +
  "C5+E5+G5+C6/1+2+3+5:3 r:1 G4+G5/1+5:4 F4+F5/1+5:4 | E4+G4+C5+E5/1+2+3+5:12";

export const theFirstNoel: OurSong = {
  slug: "the-first-noel",
  title: "The First Noel",
  source: {
    composer: "Traditional",
    died: null,
    published: 1823,
    edition:
      "The traditional English tune as Davies Gilbert (1823) and William Sandys (1833) printed it, checked against " +
      "John Stainer, Christmas Carols New and Old (1871)",
  },
  about:
    "The First Noel is an English carol, and nobody knows who wrote its tune. " +
    "It is thought to come from Cornwall, in the far south-west of England. " +
    "Davies Gilbert printed it in 1823, and William Sandys printed it in 1833. " +
    "John Stainer set it for choirs in 1871, and his version is the one sung today.",
  funFact: "Noel comes from the French word Noël, and that comes from the Latin word for birth.",
  mythic: null,
  collection: "christmas",
  aka: ["The First Nowell"],
  tune: { text: tune, numerator: 3, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [2, 3] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 160,
      numerator: 3,
      denominator: 2,
      steps: 2,
      right: [RIGHT_VERSE, RIGHT_VERSE, RIGHT_REFRAIN, "E4/1:6"].join(" | "),
      left: [bars(HELD, VERSE_CHORDS), bars(HELD, VERSE_CHORDS), bars(HELD, REFRAIN_CHORDS), HELD.C].join(" | "),
      skills: ["open-fifths", "position-change"],
      practice: [
        { text: "Play the first eight bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the refrain, bars 17 to 24, with the right hand alone.", hands: "right", speed: 0.6, loop: [17, 24], wait: true },
        { text: "Now the left hand alone. It holds one shape for each whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "The first C is long. Count three, then let D, E and F walk up evenly." },
        { fromBar: 9, toBar: 16, kind: "trick", text: "Bars 9 to 16 are the first eight bars again, so your hand already knows them." },
        { fromBar: 24, toBar: 24, kind: "sound", text: "Slow down a little on the last E, and let it ring with the low C." },
      ],
      tricky: {
        2: "Finger 5 holds the long G. Lift the hand in the short rest, and land finger 3 on A.",
        10: "The same move as bar 2: lift the hand after the long G, and land finger 3 on A.",
        18: "Finger 5 holds the long G. Lift the hand, and let the same finger land on the high C.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 176,
      numerator: 3,
      denominator: 2,
      steps: 2,
      right: ["r:4 E4/3:1 D4/2:1", RIGHT_VERSE, RIGHT_VERSE, RIGHT_REFRAIN, "C4+E4/1+2:6"].join(" | "),
      left: ["r:6", bars(WALTZ, VERSE_CHORDS), bars(WALTZ, VERSE_CHORDS), bars(WALTZ, REFRAIN_CHORDS), "C3+E3+G3/5+3+1:6"].join(" | "),
      skills: ["waltz-bass", "position-change"],
      practice: [
        { text: "Play the waltz bass alone: low note, chord, chord.", hands: "left", speed: 0.6, loop: [2, 9], wait: true },
        { text: "Play the right hand alone from the pickup, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "The song starts on the last beat. Count one, two, then play E and D." },
        { fromBar: 2, toBar: 25, kind: "sound", text: "In the waltz bass, play the low note a little louder than the chords after it." },
        { fromBar: 22, toBar: 24, kind: "trick", text: "Bars 22 to 24 repeat bars 6 to 8, so your hand already knows them." },
      ],
      tricky: {
        3: "Finger 5 holds the long G. Lift the hand in the short rest, and land finger 3 on A.",
        11: "The same move as bar 3: lift the hand after the long G, and land finger 3 on A.",
        19: "Finger 5 holds the long G. Lift the hand, and let the same finger land on the high C.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 192,
      numerator: 3,
      denominator: 2,
      steps: 2,
      right: ["r:4 E4/3:1 D4/2:1", EPIC_VERSE, EPIC_THIRDS, EPIC_REFRAIN].join(" | "),
      left: ["r:6", bars(ALBERTI, VERSE_CHORDS), bars(ALBERTI, VERSE_CHORDS), bars(ALBERTI, REFRAIN_CHORDS), "C3+E3+G3/5+3+1:6"].join(" | "),
      pedal: ["r:6", ...Array(6).fill("P:6"), "P:4 P:2", ...Array(7).fill("P:6"), "P:4 P:2", ...Array(7).fill("P:6"), "P:4 P:2", "P:6"].join(" | "),
      skills: ["alberti-bass", "thumb-under", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the climb of bars 2 and 3 with the right hand alone, and pass the thumb under on F.", hands: "right", speed: 0.5, loop: [2, 3], wait: true },
        { text: "Play the right hand's thirds alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [10, 17], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 10, toBar: 25, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
        { fromBar: 8, toBar: 8, kind: "sound", text: "Change the pedal on the third beat, where the chord turns from C to G." },
      ],
      tricky: {
        2: "Fingers 1, 2 and 3 play C, D and E. Then the thumb passes under finger 3 to F.",
        16: "A sixth, then two thirds. Finger 2 stays on E for the first two, and the thumb drops to D.",
        24: "The same pairs as bar 16: a sixth, two thirds, and the thumb down to D.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 208,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: [LEGENDARY_OCTAVES, LEGENDARY_CHORDS, LEGENDARY_REFRAIN].join(" | "),
      left: [
        "r:12",
        beatBars(STRIDE, "Ccc Ccc Fff Ccc Fff Ggg Ccx Ccc"),
        beatBars(BROKEN_OCTAVE, "CCc CCc FFf CCc FFf GGg CCx CCc CCc CCc FFf CCc FFf GGg CCx"),
        "C2+G2+C3/5+2+1:12",
      ].join(" | "),
      pedal: [...Array(9).fill("r:12"), ...Array(6).fill("P:12"), "P:8 P:4", ...Array(7).fill("P:12"), "P:8 P:4", "P:12"].join(" | "),
      skills: ["stride", "octave-bass", "melody-in-chords"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand's octaves alone on the first verse, with a loose wrist.", hands: "right", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the right hand's chords alone, and let the little finger sing the tune.", hands: "right", speed: 0.5, loop: [10, 13], wait: true },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "trick", text: "In stride, look at the octave and let the hand find the chord by feel." },
        { fromBar: 1, toBar: 9, kind: "fingering", text: "Every octave is the thumb and the little finger. Keep the hand in that shape." },
        { fromBar: 10, toBar: 25, kind: "sound", text: "Play the low notes of each chord softer, so the top note carries the tune." },
      ],
      tricky: {
        5: "After the long G, the octaves step quickly to A and B. Move the whole hand, with a loose wrist.",
        7: "The octaves climb G, A and B. Let the hand glide up the keys without lifting high.",
        10: "Spread the hand for the full C chord, then close it to an octave for D, E and F.",
      },
    },
  },
  de: {
    about:
      "The First Noel ist ein englisches Weihnachtslied, und niemand weiß, wer seine Melodie geschrieben hat. " +
      "Man nimmt an, dass sie aus Cornwall stammt, im äußersten Südwesten Englands. " +
      "Davies Gilbert druckte das Lied 1823, William Sandys druckte es 1833. " +
      "John Stainer setzte es 1871 für Chor, und seine Fassung singt man bis heute.",
    funFact: "Noel kommt vom französischen Wort Noël, und das stammt vom lateinischen Wort für Geburt.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Lied auf jeden Ton warten.",
          "Spiel den Refrain, die Takte 17 bis 24, nur mit der rechten Hand.",
          "Jetzt die linke Hand allein. Sie hält eine Form jeweils einen ganzen Takt lang.",
          "Nimm beide Hände zusammen, und spiel das ganze Lied langsam.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Das erste C ist lang. Zähl bis drei, dann lass D, E und F gleichmäßig hinaufgehen.",
          "Die Takte 9 bis 16 sind wieder die ersten acht Takte, also kennt deine Hand sie schon.",
          "Nimm beim letzten E das Tempo etwas zurück, und lass es mit dem tiefen C klingen.",
        ],
        tricky: {
          2: "Finger 5 hält das lange G. Heb die Hand in der kurzen Pause an, und setz Finger 3 auf das A.",
          10: "Dieselbe Bewegung wie in Takt 2: Heb die Hand nach dem langen G an, und setz Finger 3 auf das A.",
          18: "Finger 5 hält das lange G. Heb die Hand an, und lass denselben Finger auf dem hohen C landen.",
        },
      },
      rare: {
        practice: [
          "Spiel den Walzerbass allein: tiefer Ton, Akkord, Akkord.",
          "Spiel die rechte Hand allein ab dem Auftakt, und lass das Lied auf jeden Ton warten.",
          "Spiel die erste Strophe langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Das Lied beginnt auf dem letzten Schlag. Zähl eins, zwei, dann spiel E und D.",
          "Spiel im Walzerbass den tiefen Ton etwas lauter als die Akkorde danach.",
          "Die Takte 22 bis 24 wiederholen die Takte 6 bis 8, also kennt deine Hand sie schon.",
        ],
        tricky: {
          3: "Finger 5 hält das lange G. Heb die Hand in der kurzen Pause an, und setz Finger 3 auf das A.",
          11: "Dieselbe Bewegung wie in Takt 3: Heb die Hand nach dem langen G an, und setz Finger 3 auf das A.",
          19: "Finger 5 hält das lange G. Heb die Hand an, und lass denselben Finger auf dem hohen C landen.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel den Aufstieg der Takte 2 und 3 nur mit der rechten Hand, mit Daumenuntersatz auf dem F.",
          "Spiel die Terzen der rechten Hand allein, und drück beide Töne jedes Zweiklangs zusammen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise, damit die Melodie darüber singt.",
          "Die Melodie ist der obere Ton jedes Zweiklangs, also lass den oberen Finger führen.",
          "Wechsle das Pedal auf dem dritten Schlag, wo der Akkord von C nach G wechselt.",
        ],
        tricky: {
          2: "Finger 1, 2 und 3 spielen C, D und E. Dann geht der Daumen unter Finger 3 hindurch zum F.",
          16: "Eine Sexte, dann zwei Terzen. Finger 2 bleibt bei den ersten beiden auf dem E, und der Daumen fällt zum D.",
          24: "Dieselben Zweiklänge wie in Takt 16: eine Sexte, zwei Terzen, und der Daumen hinab zum D.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Stride-Bass allein: Spring hinunter zur Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Oktaven der rechten Hand in der ersten Strophe allein, mit lockerem Handgelenk.",
          "Spiel die Akkorde der rechten Hand allein, und lass den kleinen Finger die Melodie singen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau beim Stride auf die Oktave, und lass die Hand den Akkord nach Gefühl finden.",
          "Jede Oktave spielen Daumen und kleiner Finger. Halt die Hand in dieser Form.",
          "Spiel die tiefen Töne jedes Akkords leiser, damit der obere Ton die Melodie trägt.",
        ],
        tricky: {
          5: "Nach dem langen G gehen die Oktaven schnell weiter zu A und H. Beweg die ganze Hand, mit lockerem Handgelenk.",
          7: "Die Oktaven steigen über G, A und H. Lass die Hand über die Tasten gleiten, ohne sie hoch anzuheben.",
          10: "Spann die Hand für den vollen C-Akkord, dann schließ sie für D, E und F zur Oktave.",
        },
      },
    },
  },
};

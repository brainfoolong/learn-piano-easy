/**
 * *Air on the G String*: the opening of the Air from Bach's Orchestral Suite No. 3, in four versions of
 * ours.
 *
 * The tune is the first violin's bars 1 to 4, with the grace notes dropped. The print is in 4/4 and D
 * major, with sixteenths. The tune makes every sixteenth a quarter, so Common needs nothing faster, and
 * reads each print bar as one bar of 4/1. The hook is its first two bars: the long F sharp, the fall from
 * B, and the step down to A. Every version writes the tune in 4/2, two bars per print bar, and a note held
 * across one of its bar lines ends at the line.
 *
 * The bass follows the print's continuo, one chord per print beat. After the tune, bars of ours close the
 * song over the home chord, the chord on the fourth, the dominant seventh and the home chord again.
 *
 * Common and Rare move the tune down to C major, Wilhelmj's key. Epic and Legendary are written in C major
 * too, then moved up to the print's D major.
 *
 * Common plays the tune once over held bass notes. It drops one A and lifts the hand off C for a moment, so
 * the hand moves down to B after a rest. Rare plays the tune twice over a bass note and a two-note chord.
 * Epic rolls an Alberti bass under it with the pedal, then plays it again in thirds and sixths. Legendary
 * walks the bass in octave leaps, as the continuo does. Its second time is an octave up, with four-note
 * chords on the long notes and thirds and sixths between them. Epic and Legendary strike the long first
 * note again in bar 2.
 *
 * Under the tune's first beat of bar 2, the print puts G in the bass against the held F sharp. Common and
 * Rare may not rub a semitone, so they put the chord's third in the bass there. Epic and Legendary keep the rub in bars 3 and 11,
 * and their guides mark it.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Epic and Legendary keep. */
const D_MAJOR: Key = { tonic: 2, mode: "major" };

/** The key Common and Rare move to, and the key every line is written in. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 4/1, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune =
  "F#5:16 | F#5:2 B5:1 G5:1 E5:1 D5:1 C#5:1 D5:1 C#5:4 A4:4 | A5:9 F#5:1 C5:1 B4:1 E5:1 D#5:1 A5:1 G5:1 | " +
  "G5:9 E5:1 B4:1 A4:1 D5:1 C#5:1 G5:1 F#5:1";

/** The pitch class of each note letter. */
const LETTERS: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** The name of each pitch class, spelt with sharps. */
const SHARP_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

/** `text` a whole tone up, every note spelt with sharps, so a line in C major reads in D major. */
function wholeToneUp(text: string): string {
  return text.replace(/([A-G])([#b]?)(\d)(?=[/:+])/g, (_, letter: string, accidental: string, octave: string) => {
    const pitch = 12 * (Number(octave) + 1) + (LETTERS[letter] ?? 0) + (accidental === "#" ? 1 : accidental === "b" ? -1 : 0) + 2;
    return `${SHARP_NAMES[pitch % 12]}${Math.floor(pitch / 12) - 1}`;
  });
}

/** `text` an octave up: every note name's octave plus one. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/**
 * A broken chord over `eighths` eighths, from `notes`, low to high: low, high, middle, high, fingered 5, 1,
 * 2, 1. With `rest`, its last eighth is a rest, so the hand can jump to the next chord.
 */
function broken(notes: string, eighths: number, rest = false): string {
  const [low, middle, high] = notes.split(" ");
  const group = [`${low}/5:1`, `${high}/1:1`, `${middle}/2:1`, `${high}/1:1`];
  const line = Array.from({ length: eighths }, (_, at) => group[at % 4] ?? "");
  if (rest) line[eighths - 1] = "r:1";
  return line.join(" ");
}

/** One bar of two chords, each a half bar long, broken. */
function bar(first: string, second: string, rest = false): string {
  return `${broken(first, 8)} ${broken(second, 8, rest)}`;
}

/** Common's right hand in C major, in eighths: the tune once, then the bars of ours. */
const COMMON_RIGHT = [
  "E5/2:16 | r:16 | E5/2:4 A5/5:2 F5/3:2 D5/2:2 C5/1:1 r:1 B4/2:2 C5/3:2 | B4/2:8 G4/1:4 r:4",
  "G5/5:16 | r:2 E5/3:2 Bb4/1:4 D5/3:2 C#5/2:2 G5/5:2 F5/4:2 | F5/5:16 | r:2 D5/4:2 A4/2:2 G4/1:2 C5/3:2 B4/2:2 F5/5:2 E5/4:2",
  "E5/4:8 F5/5:4 C5/3:4 | D5/4:8 B4/2:8 | C5/3:16",
].join(" | ");

/** Rare's right hand in C major, in eighths: the whole tune once. */
const RARE_TUNE = [
  "E5/2:16 | r:16 | E5/2:4 A5/5:2 F5/3:2 D5/2:2 C5/1:1 r:1 B4/2:2 C5/3:2 | B4/2:8 G4/1:8",
  "G5/5:16 | r:2 E5/5:2 Bb4/2:2 A4/1:2 D5/3:2 C#5/2:2 G5/5:2 F5/4:2 | F5/5:16 | r:2 D5/4:2 A4/2:2 G4/1:2 C5/3:2 B4/2:2 F5/5:2 E5/4:2",
].join(" | ");

/** Rare's left hand in C major, in eighths: a bass note, then a two-note chord, for each chord of the print. */
const RARE_BASS = [
  "C3/5:4 E3+G3/2+1:4 B2/5:4 D3+G3/2+1:4 | A2/5:4 C3+E3/2+1:4 G2/5:4 C3+E3/2+1:4",
  "A2/5:4 C3+F3/2+1:4 F#2/5:4 A2+D3/2+1:4 | G2/5:4 B2+D3/2+1:4 F2/5:4 B2+D3/2+1:4",
  "E2/5:4 G2+C3/2+1:4 G2/5:4 D3+G3/2+1:4 | A2/5:4 E3+G3/2+1:4 D3/5:4 F3+A3/2+1:4",
  "D3/5:4 F3+A3/2+1:4 C3/5:4 F3+A3/2+1:4 | B2/5:4 D3+G3/2+1:4 G2/5:4 C3+G3/2+1:4",
].join(" | ");

/** The whole tune in C major, one note at a time, in eighths, for Epic and Legendary. */
const SINGLE_TUNE = [
  "E5/3:16 | E5/3:16 | E5/3:4 A5/5:2 F5/4:2 D5/3:2 C5/2:2 B4/1:2 C5/2:2 | B4/1:8 G4/1:8",
  "G5/5:16 | r:2 E5/4:2 Bb4/2:2 A4/1:2 D5/3:2 C#5/2:2 G5/5:2 F5/4:2 | F5/5:16 | r:2 D5/4:2 A4/2:2 G4/1:2 C5/3:2 B4/2:2 F5/5:2 E5/4:2",
].join(" | ");

/** The tune's bars 3 to 8 in C major in thirds and sixths, in eighths, for Epic and Legendary. */
const THIRDS_FROM_BAR_3 = [
  "C5+E5/1+3:4 F5+A5/3+5:2 A4+F5/1+4:2 F#4+D5/1+4:2 A4+C5/2+3:2 G4+B4/1+2:2 A4+C5/2+3:2",
  "G4+B4/1+3:8 G4/1:8",
  "E5+G5/2+5:8 Bb4+G5/1+5:8",
  "r:2 C#5+E5/3+5:2 G4+Bb4/1+2:2 A4/1:2 F4+D5/1+5:2 A4+C#5/1+3:2 Bb4+G5/1+5:2 D5+F5/2+4:2",
  "A4+F5/1+5:16",
  "r:2 B4+D5/3+5:2 F4+A4/1+2:2 G4/1:2 C5/4:2 G4+B4/1+3:2 D5+F5/3+5:2 C5+E5/2+4:2",
].join(" | ");

/** Epic's chords under the tune in C major, two per bar, as close triads for the Alberti bass. */
const EPIC_BASS = [
  bar("C3 E3 G3", "B2 D3 G3"),
  bar("A2 C3 E3", "G2 C3 E3"),
  bar("F2 A2 C3", "F#2 C3 D3"),
  bar("G2 B2 D3", "F2 B2 D3", true),
  bar("E3 G3 C4", "D3 G3 Bb3"),
  bar("C#3 E3 G3", "D3 F3 A3"),
  bar("D3 F3 A3", "C3 F3 A3"),
  `${broken("B2 D3 G3", 8)} ${broken("G2 B2 F3", 4)} ${broken("C3 E3 G3", 4)}`,
].join(" | ");

/** Legendary's bass under the tune in C major: each chord's root, its octave and a note between, two per bar. */
const LEGENDARY_BASS = [
  bar("C2 G2 C3", "B1 G2 B2"),
  bar("A1 E2 A2", "G1 E2 G2"),
  bar("F1 C2 F2", "F#1 C2 F#2"),
  bar("G1 D2 G2", "F1 B1 F2"),
  bar("E2 C3 E3", "D2 Bb2 D3"),
  bar("C#2 A2 C#3", "D2 A2 D3"),
  bar("D2 A2 D3", "C2 F2 C3"),
  `${broken("B1 G2 B2", 8, true)} ${broken("G1 F2 G2", 4)} ${broken("C2 G2 C3", 4)}`,
].join(" | ");

/** The pedal under the tune in eighths: changed with each chord, two per bar, and on the last beat of bar 8. */
const PEDAL_TUNE = [...Array(7).fill("P:8 P:8"), "P:8 P:4 P:4"].join(" | ");

/** The pedal under the bars of ours. */
const PEDAL_END = "P:8 P:8 | P:16 | P:16";

export const airOnTheGString: OurSong = {
  slug: "air-on-the-g-string",
  title: "Air on the G String",
  aka: ["Air", "Orchestral Suite No. 3", "BWV 1068", "Air auf der G-Saite"],
  source: {
    composer: "Johann Sebastian Bach",
    died: 1750,
    published: 1871,
    edition:
      "Orchestral Suite No. 3 in D major, BWV 1068, Air, the first violin's bars 1 to 4, in the Bach-Gesellschaft edition as the Mutopia Project typesets it. The year is that of August Wilhelmj's arrangement, which gave the piece its name",
  },
  about:
    "Bach wrote this Air as a slow movement of his third Orchestral Suite. " +
    "In 1871 the violinist August Wilhelmj arranged it so a violin could play the whole tune on its lowest string, the G string. " +
    "The film Se7en (1995) plays it while two detectives look through crime photographs.",
  funFact: 'Wilhelmj wrote "auf der G-Saite", on the G string, above the violin part, and that gave the piece its nickname.',
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 1, steps: 4, key: D_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 96,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: COMMON_RIGHT,
      left: [
        "C3/1:8 B2/2:8 | A2/3:8 G2/4:8 | A2/3:8 D3/1:8 | G2/4:8 F2/5:8",
        "C3/2:8 D3/1:8 | C#3/2:8 D3/1:8 | D3/1:8 C3/2:8 | B2/3:8 G2/5:8",
        "C3/2:8 F2+C3/5+2:8 | G2+D3/4+1:16 | C3/2:16",
      ].join(" | "),
      skills: ["held-bass", "position-change"],
      practice: [
        { text: "Play bars 1 to 4 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. The tune leaps down and climbs back up.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds one bass note or an open fifth at a time.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "sound", text: "Hold the first E for a whole bar and listen. A violin sings this note on one long bow." },
        { fromBar: 3, toBar: 4, kind: "fingering", text: "Lift the thumb off C for a moment. Then finger 2 lands on B, and the hand stays there." },
        { fromBar: 5, toBar: 8, kind: "rhythm", text: "Each long note fills a whole bar. Count eight slow beats, then wait one more before the next note." },
      ],
      tricky: {
        3: "Lift the thumb off C for a moment, then play B with finger 2.",
        8: "After the rest, finger 4 plays D. Then the thumb reaches down to G.",
        9: "The left hand stretches down to F with finger 5, while finger 2 stays on C.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 108,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [
        RARE_TUNE,
        RARE_TUNE,
        "E5/2:4 D5/1:2 E5/2:2 F5/3:4 A5/5:2 F5/3:2 | G5/5:4 F5/4:4 D5/2:8 | C5+E5/1+3:16",
      ].join(" | "),
      left: [
        RARE_BASS,
        RARE_BASS,
        "C3/5:4 E3+G3/2+1:4 A2/5:4 C3+F3/2+1:4 | G2/5:4 B2+F3/2+1:4 G2/5:4 B2+F3/2+1:2 r:2 | C3+E3+G3/5+3+1:16",
      ].join(" | "),
      skills: ["two-note-chords", "position-change"],
      practice: [
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone. The bass note comes first, and the two-note chord answers it.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written. The tune comes twice.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "The bass walks down one step at a time under the long E. Keep it soft and smooth." },
        { fromBar: 3, toBar: 3, kind: "fingering", text: "Lift the thumb off C for a moment, so finger 2 can land on B." },
        { fromBar: 17, toBar: 19, kind: "sound", text: "The last three bars are ours. They lead the tune home to C major." },
      ],
      tricky: {
        6: "After the rest, finger 5 takes E. Then fingers 2 and 1 play B flat and A.",
        14: "The same move as bar 6: finger 5 on E, then B flat with finger 2.",
        19: "The right hand plays C and E together. The left hand spreads over C, E and G with fingers 5, 3 and 1.",
      },
    },
    epic: {
      key: D_MAJOR,
      bpm: 88,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: wholeToneUp(
        [
          SINGLE_TUNE,
          "C5+E5/1+3:8 G4+E5/1+4:8 | C5+E5/1+3:16",
          THIRDS_FROM_BAR_3,
          "E5/3:4 D5/2:2 E5/3:2 F5/4:4 A5/5:2 F5/4:2 | B4+G5/1+5:4 B4+F5/1+4:4 B4+D5/1+3:8 | G4+C5+E5/1+2+4:16",
        ].join(" | "),
      ),
      left: wholeToneUp(
        [EPIC_BASS, EPIC_BASS, `${bar("C3 E3 G3", "A2 C3 F3")} | ${bar("G2 B2 F3", "G2 B2 F3")} | C3+E3+G3/5+3+1:16`].join(" | "),
      ),
      pedal: [PEDAL_TUNE, PEDAL_TUNE, PEDAL_END].join(" | "),
      markedClashBars: [3, 11],
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 8], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the Alberti bass soft and even, so the long notes float above it." },
        { fromBar: 3, toBar: 3, kind: "sound", text: "The G in the bass rubs against the F sharp above it. Bach wrote this rub, so let it ring." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        5: "Use the rest at the end of bar 4 to move the left hand up to F sharp.",
        13: "The left hand moves up again after its rest. Then the right hand opens to a sixth, C and A.",
        14: "Play each pair as one, and let the top finger sing the tune. The thumb takes most of the lower notes.",
      },
    },
    legendary: {
      key: D_MAJOR,
      bpm: 84,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: wholeToneUp(
        [
          SINGLE_TUNE,
          "r:2 E5+G5+C6+E6/1+2+3+5:6 E5+G5+B5+E6/1+2+3+5:8 |E5+A5+C6+E6/1+2+3+5:14 r:2",
          octaveUp(THIRDS_FROM_BAR_3),
          "E6/3:4 D6/2:2 E6/3:2 F6/4:4 A6/5:2 F6/4:2 | B5+G6/1+5:4 B5+F6/1+4:4 B5+D6/1+3:6 r:2 | C5+E5+G5+C6/1+2+3+5:16",
        ].join(" | "),
      ),
      left: wholeToneUp(
        [LEGENDARY_BASS, LEGENDARY_BASS, `${broken("C2 G2 C3", 8, true)} ${broken("F1 C2 F2", 8)} |${bar("G1 F2 G2", "G1 F2 G2")} | C2+G2+C3/5+2+1:16`].join(" | "),
      ),
      pedal: [PEDAL_TUNE, PEDAL_TUNE, PEDAL_END].join(" | "),
      markedClashBars: [3, 11],
      skills: ["octave-bass", "melody-in-chords", "pedal"],
      practice: [
        { text: "Play the left hand alone. It leaps from each bass note up to its octave and back.", hands: "left", speed: 0.5, loop: [1, 8], wait: false },
        { text: "Play the right hand's chords alone on bars 9 and 10, and let the top finger sing.", hands: "right", speed: 0.5, loop: [9, 10], wait: true },
        { text: "Play the second half with both hands, slowly. The tune is an octave higher there.", hands: "both", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "fingering", text: "Keep finger 5 on the low bass note and the thumb on its octave. Finger 2 fills the note between." },
        { fromBar: 3, toBar: 3, kind: "sound", text: "The G in the bass rubs against the F sharp above it. Bach wrote this rub, so let it ring." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        9: "Use the rest at the start to move the hand an octave up. Then grab four notes with fingers 1, 2, 3 and 5.",
        16: "After the rest, fingers 3 and 5 take C sharp and E. Then the thumb walks down to G and climbs again.",
        17: "Finger 5 reaches up to the high B. The left hand uses its rest to jump down to the low G.",
      },
    },
  },
  de: {
    about:
      "Bach schrieb dieses Air als langsamen Satz seiner dritten Orchestersuite. " +
      "1871 bearbeitete der Geiger August Wilhelmj es so, dass eine Geige die ganze Melodie auf ihrer tiefsten Saite spielen kann, der G-Saite. " +
      "Der Film Sieben (Se7en, 1995) spielt es, während zwei Ermittler Tatortfotos ansehen.",
    funFact: 'Wilhelmj schrieb "auf der G-Saite" über die Geigenstimme, und daher hat das Stück seinen Spitznamen.',
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 4 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Die Melodie springt hinab und steigt wieder hinauf.",
          "Jetzt die linke Hand allein. Sie hält immer einen Basston oder eine leere Quinte.",
          "Nimm beide Hände zusammen, langsam.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt das erste E einen ganzen Takt lang und hör zu. Eine Geige singt diesen Ton mit einem langen Bogenstrich.",
          "Heb den Daumen kurz vom C. Dann landet Finger 2 auf dem H, und die Hand bleibt dort.",
          "Jeder lange Ton füllt einen ganzen Takt. Zähl acht langsame Schläge, dann warte noch einen bis zum nächsten Ton.",
        ],
        tricky: {
          3: "Heb den Daumen kurz vom C, dann spiel das H mit Finger 2.",
          8: "Nach der Pause spielt Finger 4 das D. Dann greift der Daumen hinab zum G.",
          9: "Die linke Hand streckt sich mit Finger 5 hinab zum F, während Finger 2 auf dem C bleibt.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Zuerst kommt der Basston, dann antwortet der Zweiklang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert. Die Melodie kommt zweimal.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Unter dem langen E geht der Bass Schritt für Schritt abwärts. Spiel ihn leise und gebunden.",
          "Heb den Daumen kurz vom C, damit Finger 2 auf dem H landen kann.",
          "Die letzten drei Takte sind von uns. Sie führen die Melodie nach Hause nach C-Dur.",
        ],
        tricky: {
          6: "Nach der Pause nimmt Finger 5 das E. Dann spielen Finger 2 und 1 das B und das A.",
          14: "Dieselbe Bewegung wie in Takt 6: Finger 5 auf das E, dann das B mit Finger 2.",
          19: "Die rechte Hand spielt C und E zusammen. Die linke Hand spannt sich mit Finger 5, 3 und 1 über C, E und G.",
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
          "Halt den Alberti-Bass leise und gleichmäßig, damit die langen Töne darüber schweben.",
          "Das G im Bass reibt sich am Fis darüber. Bach hat diese Reibung so geschrieben, also lass sie klingen.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          5: "Nutz die Pause am Ende von Takt 4, um die linke Hand hinauf zum Fis zu führen.",
          13: "Die linke Hand rückt nach ihrer Pause wieder hinauf. Dann öffnet sich die rechte Hand zur Sexte, C und A.",
          14: "Spiel jedes Paar wie einen Ton, und lass den oberen Finger die Melodie singen. Der Daumen nimmt die meisten unteren Töne.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein. Sie springt von jedem Basston hinauf zu seiner Oktave und zurück.",
          "Spiel die Akkorde der rechten Hand in den Takten 9 und 10 allein, und lass den obersten Finger singen.",
          "Spiel die zweite Hälfte langsam mit beiden Händen. Dort liegt die Melodie eine Oktave höher.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Halt Finger 5 auf dem tiefen Basston und den Daumen auf seiner Oktave. Finger 2 spielt den Ton dazwischen.",
          "Das G im Bass reibt sich am Fis darüber. Bach hat diese Reibung so geschrieben, also lass sie klingen.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          9: "Nutz die Pause am Anfang, um die Hand eine Oktave höher zu setzen. Dann greif vier Töne mit Finger 1, 2, 3 und 5.",
          16: "Nach der Pause nehmen Finger 3 und 5 das Cis und das E. Dann geht der Daumen hinab zum G und steigt wieder.",
          17: "Finger 5 greift hinauf zum hohen H. Die linke Hand nutzt ihre Pause, um hinab zum tiefen G zu springen.",
        },
      },
    },
  },
};

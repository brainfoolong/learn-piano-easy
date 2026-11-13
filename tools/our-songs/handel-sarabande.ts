/**
 * *Sarabande in D minor*: the Sarabande of Handel's Keyboard Suite in D minor, HWV 437, in four versions
 * of ours.
 *
 * The tune is the top voice of the theme's bars 1 to 8, as the print's right-hand chords carry it. The
 * print is in 3/2, and the tune counts in quarters: two half notes, then a rest and a quarter that leads
 * on. Its key is D minor, and the hook is bars 1 to 4. Every version then plays the print's repeat of
 * bars 1 to 5 and its three closing bars, so each one is 16 bars long.
 *
 * Common plays the top voice alone over one held bass note per bar. Rare puts a low note and a two-note
 * chord under it, with the pedal held for whole bars. Epic rolls an Alberti bass in eighths under it,
 * then plays the repeat in thirds. Legendary plays the print's chords over an octave bass that walks as
 * the print's bass does, then plays the repeat an octave up in four-note chords over two-octave
 * arpeggios.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 3/2, in quarters: the top voice of the print's bars 1 to 8. */
const tune =
  "F4:2 F4:2 r:1 G4:1 | E4:2 E4:2 r:2 | A4:2 A4:2 r:1 Bb4:1 | G4:2 G4:2 r:1 A4:1 | " +
  "Bb4:2 Bb4:2 r:1 C5:1 | A4:2 A4:2 r:1 A4:1 | D5:2 D5:2 r:1 E5:1 | C#5:2 C#5:2 r:2";

/** The tune's first five bars in the right hand, in quarters, fingered in two places. */
const OPENING =
  "F4/2:2 F4/2:2 r:1 G4/3:1 | E4/1:2 E4/1:2 r:2 | A4/4:2 A4/4:2 r:1 Bb4/5:1 | G4/3:2 G4/3:2 r:1 A4/1:1 | " +
  "Bb4/2:2 Bb4/2:2 r:1 C5/3:1";

/** The tune's last three bars in the right hand, in quarters. */
const ANSWER = "A4/1:2 A4/1:2 r:1 A4/1:1 | D5/4:2 D5/4:2 r:1 E5/5:1 | C#5/3:2 C#5/3:2 r:2";

/** The print's three closing bars in the right hand, in quarters, ending before the last bar. */
const CLOSE = "A4/1:3 A4/1:1 D5/2:1 C#5/1:1 | D5/2:1 E5/3:1 F5/4:2 E5/3:1 D5/2:1";

/** The top voice of all 16 bars in the right hand, in quarters. */
const RIGHT_QUARTERS = `${OPENING} | ${ANSWER} | ${OPENING} | ${CLOSE} | D5/2:6`;

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** One Alberti group of four eighths on a close chord, low, high, middle, high. */
const ALBERTI: Record<string, string> = {
  d: "D3/5:1 A3/1:1 F3/3:1 A3/1:1",
  a: "A2/5:1 E3/1:1 C#3/3:1 E3/1:1",
  f: "F2/5:1 C3/1:1 A2/3:1 C3/1:1",
  c: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  D: "D3/5:1 A3/1:1 F#3/3:1 A3/1:1",
  g: "G2/5:1 D3/1:1 Bb2/3:1 D3/1:1",
  b: "Bb2/5:1 F3/1:1 D3/3:1 F3/1:1",
  B: "Bb2/5:1 G3/1:1 D3/3:1 G3/1:1",
  o: "A2/5:1 A3/1:1 E3/3:1 A3/1:1",
};

/** Epic's bars of Alberti groups, three letters per bar of `ALBERTI`. */
function albertiBars(bars: string): string {
  return bars
    .split(" ")
    .map((groups) =>
      [...groups]
        .map((group) => {
          const notes = ALBERTI[group];
          if (notes === undefined) throw new Error(`no Alberti group ${group}`);
          return notes;
        })
        .join(" "),
    )
    .join(" | ");
}

/** The six notes of a chord over two octaves, for Legendary's arpeggios. */
const WIDE: Record<string, string> = {
  d: "D2 A2 D3 F3 A3 D4",
  a: "A1 E2 A2 C#3 E3 A3",
  f: "F1 C2 F2 A2 C3 F3",
  c: "C2 G2 C3 E3 G3 C4",
  g: "G1 D2 G2 Bb2 D3 G3",
};

/** The order of a whole bar's arpeggio, up and down, followed by a rest of two eighths. */
const WIDE_BAR = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1];

/** The order of two thirds of a bar, up and back one note, followed by a rest of an eighth. */
const WIDE_TWO_THIRDS = [0, 1, 2, 3, 4, 5, 4];

/** An arpeggio of `chord` in eighths: the thumb passes under and finger 3 crosses over it. */
function wide(chord: string, order: readonly number[], rest: number): string {
  const notes = WIDE[chord];
  if (notes === undefined) throw new Error(`no wide chord ${chord}`);
  const pitches = notes.split(" ");
  const fingers = [5, 2, 1, 3, 2, 1];
  return `${order.map((at) => `${pitches[at]}/${fingers[at]}:1`).join(" ")} r:${rest}`;
}

/** The last third of a bar in Legendary: A, E and A, then a rest of an eighth. */
const OPEN_A = "A1/5:1 E2/2:1 A2/1:1 r:1";

export const handelSarabande: OurSong = {
  slug: "handel-sarabande",
  title: "Sarabande in D minor",
  aka: ["Sarabande", "Saraband", "HWV 437", "Händel Sarabande"],
  source: {
    composer: "George Frideric Handel",
    died: 1759,
    published: 1733,
    edition:
      "Keyboard Suite in D minor, HWV 437, Sarabande, the theme's top voice in bars 1 to 8, as a public domain (CC0) typeset of the Sarabande and its first variation on Wikimedia Commons prints it",
  },
  about:
    "Handel wrote this suite for harpsichord in his early twenties, and it was first published in 1733. " +
    "Its Sarabande is a slow, solemn dance in three beats. " +
    "Stanley Kubrick's film Barry Lyndon (1975) uses it in an orchestral arrangement.",
  funFact: "Handel's catalogue number for the suite, HWV 437, comes from the Händel-Werke-Verzeichnis, the list of all his works.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 3, denominator: 2, steps: 2, key: D_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 104,
      numerator: 3,
      denominator: 2,
      steps: 2,
      right: RIGHT_QUARTERS,
      left: [
        "D3/1:6 | A2/3:6 | F2/5:6 | C3/1:6 | G2/4:6 | D3/1:6 | Bb2/3:6 | A2/4:6",
        "D3/1:6 | A2/3:6 | F2/5:6 | C3/1:6 | G2/4:6 | A2/3:6 | G2/4:6 | D2+A2/5+1:6",
      ].join(" | "),
      skills: ["held-bass", "position-change"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 4 to 8 with the right hand alone. The thumb moves up to A in bar 4.", hands: "right", speed: 0.6, loop: [4, 8], wait: true },
        { text: "Now the left hand alone. It holds one low note in each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "Count three slow beats in each bar. The short note comes right before the next bar." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "This is a slow, proud dance. Play each long note calmly and fully." },
        { fromBar: 14, toBar: 15, kind: "fingering", text: "Keep the thumb near A and C sharp. Your fingers 2 to 4 walk up to F and back." },
      ],
      tricky: {
        4: "Use the rest to move the right thumb up to A. It stays there until bar 8.",
        9: "After the rest, the right hand moves back down. Finger 2 lands on F.",
        12: "As in bar 4, use the rest to move the right thumb up to A.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 104,
      numerator: 3,
      denominator: 2,
      steps: 2,
      right: RIGHT_QUARTERS.replace(/D5\/2:6$/, "A4+D5/1+4:6"),
      left: [
        "D3/4:2 F3+A3/2+1:4 | A2/5:2 C#3+E3/3+1:3 r:1 | F2/5:2 A2+C3/3+1:4 | C3/2:2 G2+E3/5+1:4",
        "G2/5:2 Bb2+D3/3+1:3 r:1 | D3/4:2 F3+A3/2+1:4 | Bb2/5:2 D3+F3/2+1:4 | A2/5:2 E3+A3/2+1:4",
        "D3/4:2 F3+A3/2+1:4 | A2/5:2 C#3+E3/3+1:3 r:1 | F2/5:2 A2+C3/3+1:4 | C3/2:2 G2+E3/5+1:4",
        "G2/5:2 Bb2+D3/3+1:3 r:1 | A2/5:2 C3+F3/3+1:2 A2/5:2 | Bb2+D3+G3/4+2+1:4 A2/5:2 | D3+F3+A3/3+2+1:6",
      ].join(" | "),
      pedal: [...Array(13).fill("P:6"), "r:6", "r:6", "P:6"].join(" | "),
      skills: ["waltz-bass", "pedal"],
      practice: [
        { text: "Play the left hand alone. A low note comes first, and a two-note chord answers it.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly, with the pedal.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the ending, where the left hand changes its chord on each beat.", hands: "both", speed: 0.7, loop: [13, 16], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 13, kind: "sound", text: "Hold the pedal down for each whole bar, and change it right on the bar line." },
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the low note a little louder than the chord after it. It carries the dance." },
        { fromBar: 14, toBar: 15, kind: "trick", text: "No pedal in these two bars, so the chords stay clean. Hold each one with your fingers." },
      ],
      tricky: {
        3: "Use the short rest to jump the left hand down to F. Finger 5 takes it.",
        6: "Use the rest to move the left hand back up. Finger 4 plays D.",
        9: "The left hand moves up to D, and the right hand moves back down to F.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 96,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: [
        inEighths(`${OPENING} | ${ANSWER}`),
        inEighths(
          [
            "D4+F4/1+3:2 D4+F4/1+3:2 r:1 E4+G4/2+4:1",
            "C#4+E4/1+3:2 C#4+E4/1+3:2 r:2",
            "F4+A4/2+4:2 F4+A4/2+4:2 r:1 G4+Bb4/3+5:1",
            "E4+G4/1+3:2 E4+G4/1+3:2 r:1 F#4+A4/2+4:1",
            "G4+Bb4/2+4:2 G4+Bb4/2+4:2 r:1 A4+C5/3+5:1",
            "F4+A4/1+3:3 F4+A4/1+3:1 A4+D5/2+5:1 A4+C#5/2+4:1",
            "G4+D5/1+4:1 E5/5:1 Bb4+F5/2+5:2 C#5+E5/3+4:1 D5/3:1",
            "F4+A4+D5/1+2+5:6",
          ].join(" | "),
        ),
      ].join(" | "),
      left: [
        albertiBars("ddd aaa fff ccD ggg ddd bbB aaa ddd aaa fff ccD ggg ffo ggo"),
        "D2+A2+D3/5+2+1:12",
      ].join(" | ").replace(/A2\/5:1 A3\/1:1 E3\/3:1 A3\/1:1 \| D2/, "A2/5:1 A3/1:1 E3/3:1 r:1 | D2"),
      pedal: [
        "P:12 | P:12 | P:12 | P:8 P:4 | P:12 | P:12 | P:8 P:4 | P:12",
        "P:12 | P:12 | P:12 | P:8 P:4 | P:12 | P:8 P:4 | P:8 P:4 | P:12",
      ].join(" | "),
      skills: ["alberti-bass", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [9, 13], wait: true },
        { text: "Join the hands on the first four bars, slowly.", hands: "both", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the Alberti bass soft and even, so the slow tune sings above it." },
        { fromBar: 4, toBar: 4, kind: "sound", text: "The bass turns to D major at the end of this bar. Change the pedal there." },
        { fromBar: 9, toBar: 13, kind: "fingering", text: "The tune is the top note of each third, so let the upper finger lead." },
      ],
      tricky: {
        11: "Play F and A with fingers 2 and 4, so fingers 3 and 5 are ready for G and B flat.",
        15: "Play the notes of this bar slowly first. The fingers change on every note.",
        16: "Spread the right hand over F, A and D with fingers 1, 2 and 5.",
      },
    },
    legendary: {
      key: D_MINOR,
      bpm: 92,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: [
        inEighths(
          [
            "A3+D4+F4/1+3+5:2 A3+D4+F4/1+3+5:2 r:1 E4+G4/3+5:1",
            "A3+C#4+E4/1+2+4:2 A3+C#4+E4/1+2+4:2 r:2",
            "C4+F4+A4/1+3+5:2 C4+F4+A4/1+3+5:2 r:1 G4+Bb4/3+5:1",
            "C4+E4+G4/1+3+5:2 C4+E4+G4/1+3+5:2 r:1 F#4+A4/2+4:1",
            "D4+G4+Bb4/1+3+5:2 D4+G4+Bb4/1+3+5:2 r:1 A4+C5/3+5:1",
            "D4+F4+A4/1+3+5:2 D4+F4+A4/1+3+5:2 r:1 A4/2:1",
            "A4+D5/2+5:2 G4+D5/1+5:2 r:1 E5/5:1",
            "E4+A4+C#5/1+2+4:2 E4+A4+C#5/1+2+4:2 r:2",
          ].join(" | "),
        ),
        "F4+A4+D5+F5/1+2+4+5:4 F4+A4+D5+F5/1+2+4+5:4 r:2 E5+G5/3+5:1 r:1",
        "E4+A4+C#5+E5/1+2+4+5:4 E4+A4+C#5+E5/1+2+4+5:4 r:4",
        "A4+C5+F5+A5/1+2+3+5:4 A4+C5+F5+A5/1+2+3+5:4 r:2 G5+Bb5/3+5:1 r:1",
        "G4+C5+E5+G5/1+2+3+5:4 G4+C5+E5+G5/1+2+3+5:4 r:2 F#5+A5/2+4:1 r:1",
        "Bb4+D5+G5+Bb5/1+2+4+5:4 Bb4+D5+G5+Bb5/1+2+4+5:4 r:2 A5+C6/3+5:1 r:1",
        "A4+C5+F5+A5/1+2+3+5:5 r:1 A5/2:2 D6/5:2 C#6/4:1 r:1",
        "G5+D6/1+4:2 E6/5:2 Bb5+F6/2+5:4 C#6+E6/3+4:2 D6/3:1 r:1",
        "D5+F5+A5+D6/1+2+3+5:12",
      ].join(" | "),
      left: [
        "D2+D3/5+1:3 r:1 A2+D3+F3/5+2+1:4 A2+D3+F3/5+2+1:3 r:1",
        "A1+A2/5+1:8 G1+G2/5+1:3 r:1",
        "F1+F2/5+1:3 r:1 A2+C3+F3/5+3+1:4 A2+C3+F3/5+3+1:3 r:1",
        "C2+C3/5+1:4 Bb1+Bb2/5+1:4 A1+A2/5+1:3 r:1",
        "G1+G2/5+1:3 r:1 Bb2+D3+G3/5+3+1:4 Bb2+D3+G3/5+3+1:3 r:1",
        "D2+D3/5+1:3 r:1 A2+D3+F3/5+2+1:3 r:1 C2+C3/5+1:3 r:1",
        "Bb1+Bb2/5+1:3 r:1 Bb2+D3+G3/5+3+1:4 Bb2+D3+G3/5+3+1:3 r:1",
        "A2+A3/5+1:6 G3/2:2 F3/3:2 E3/4:1 r:1",
        wide("d", WIDE_BAR, 2),
        wide("a", WIDE_BAR, 2),
        wide("f", WIDE_BAR, 2),
        wide("c", WIDE_BAR, 2),
        wide("g", WIDE_BAR, 2),
        `${wide("f", WIDE_TWO_THIRDS, 1)} ${OPEN_A}`,
        `${wide("g", WIDE_TWO_THIRDS, 1)} ${OPEN_A}`,
        "D2+A2+D3/5+2+1:12",
      ].join(" | "),
      pedal: [
        "P:12 | P:8 r:4 | P:12 | P:4 P:4 P:4 | P:12 | P:8 P:4 | P:12 | P:6 r:6",
        "P:12 | P:12 | P:12 | P:12 | P:12 | P:8 P:4 | P:8 P:4 | P:12",
      ].join(" | "),
      markedClashBars: [7],
      skills: ["melody-in-chords", "octave-bass", "arpeggios"],
      practice: [
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the left hand alone on the first eight bars. Lift it before each jump.", hands: "left", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the left hand's arpeggios alone. The thumb passes under, and finger 3 crosses over.", hands: "left", speed: 0.5, loop: [9, 13], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
        { fromBar: 7, toBar: 7, kind: "sound", text: "The A rubs against the B flat in the bass on purpose. Let it ache, then move on." },
        { fromBar: 9, toBar: 13, kind: "trick", text: "Lift the right hand a little early before each new chord, so it lands in time." },
      ],
      tricky: {
        9: "The tune jumps up an octave here. Land on all four notes together.",
        14: "After the big chord, finger 2 takes the high A, and finger 5 reaches up to D.",
        15: "The fingers change on every note of this bar. Practise it slowly on its own.",
      },
    },
  },
  de: {
    about:
      "Händel schrieb diese Suite für Cembalo mit Anfang zwanzig, und sie erschien 1733 zum ersten Mal im Druck. " +
      "Ihre Sarabande ist ein langsamer, feierlicher Tanz in drei Schlägen. " +
      "Stanley Kubricks Film Barry Lyndon (1975) verwendet sie in einer Bearbeitung für Orchester.",
    funFact: "Die Nummer der Suite, HWV 437, stammt aus dem Händel-Werke-Verzeichnis, der Liste all seiner Werke.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 4 bis 8 nur mit der rechten Hand. In Takt 4 rückt der Daumen hinauf zum A.",
          "Jetzt die linke Hand allein. Sie hält in jedem Takt einen tiefen Ton.",
          "Spiel die ersten acht Takte mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Zähl in jedem Takt drei langsame Schläge. Der kurze Ton kommt direkt vor dem nächsten Takt.",
          "Das ist ein langsamer, stolzer Tanz. Spiel jeden langen Ton ruhig und voll.",
          "Halt den Daumen in der Nähe von A und Cis. Deine Finger 2 bis 4 laufen hinauf zum F und zurück.",
        ],
        tricky: {
          4: "Nutz die Pause, um den rechten Daumen hinauf zum A zu setzen. Dort bleibt er bis Takt 8.",
          9: "Nach der Pause geht die rechte Hand wieder hinunter. Finger 2 landet auf dem F.",
          12: "Nutz wie in Takt 4 die Pause, um den rechten Daumen hinauf zum A zu setzen.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Zuerst kommt ein tiefer Ton, dann antwortet ein Zweiklang.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten acht Takte langsam mit beiden Händen und mit Pedal.",
          "Spiel den Schluss. Dort wechselt die linke Hand ihren Akkord auf jedem Schlag.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt das Pedal jeweils einen ganzen Takt, und wechsle es genau am Taktstrich.",
          "Spiel den tiefen Ton etwas lauter als den Akkord danach. Er trägt den Tanz.",
          "In diesen zwei Takten gibt es kein Pedal, damit die Akkorde klar bleiben. Halt jeden mit den Fingern.",
        ],
        tricky: {
          3: "Nutz die kurze Pause, um mit der linken Hand hinunter zum F zu springen. Finger 5 nimmt es.",
          6: "Nutz die Pause, um die linke Hand wieder hinaufzuführen. Finger 4 spielt das D.",
          9: "Die linke Hand rückt hinauf zum D, und die rechte Hand geht wieder hinunter zum F.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Terzen der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten vier Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise und gleichmäßig, damit die langsame Melodie darüber singt.",
          "Am Ende dieses Takts wechselt der Bass nach D-Dur. Wechsle dort das Pedal.",
          "Die Melodie ist der obere Ton jeder Terz, also lass den oberen Finger führen.",
        ],
        tricky: {
          11: "Spiel F und A mit Finger 2 und 4, damit Finger 3 und 5 für G und B bereit sind.",
          15: "Spiel die Töne dieses Takts zuerst langsam. Die Finger wechseln bei jedem Ton.",
          16: "Spann die rechte Hand über F, A und D mit Finger 1, 2 und 5.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel die ersten acht Takte nur mit der linken Hand. Heb sie vor jedem Sprung an.",
          "Spiel die Arpeggios der linken Hand allein. Der Daumen geht unter, und Finger 3 kreuzt darüber.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
          "Das A reibt sich mit Absicht am B im Bass. Lass es kurz schmerzen, dann geh weiter.",
          "Heb die rechte Hand vor jedem neuen Akkord etwas früher an, damit sie pünktlich landet.",
        ],
        tricky: {
          9: "Hier springt die Melodie eine Oktave höher. Lande auf allen vier Tönen zugleich.",
          14: "Nach dem großen Akkord nimmt Finger 2 das hohe A, und Finger 5 greift hinauf zum D.",
          15: "Die Finger wechseln bei jedem Ton dieses Takts. Üb ihn langsam für sich.",
        },
      },
    },
  },
};

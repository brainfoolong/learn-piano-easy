/**
 * *Toccata and Fugue in D minor*: the Toccata's two opening flourishes from Bach's BWV 565, in four
 * versions of ours.
 *
 * The tune is the print's first two flourishes. The first falls from a long A through a quick run to a
 * D, and the second answers it an octave lower and shorter. The print is for organ in 4/4, with notes as
 * short as a sixty-fourth. The tune writes every sixty-fourth as a quarter, so every length keeps its
 * proportion, and reads in 3/1. Each fermata rest is free in time, so the tune shortens it to four
 * quarters. The two editions disagree on the ornament over each long A, so the tune has none. The hook is
 * the whole tune, in D minor.
 *
 * Every version is written in 4/2, so the long A fills a bar. After the tune, each version plays the
 * print's answer in its own setting: a diminished seventh chord on C sharp built note by note, which
 * resolves to D major. Then come bars of our own over D minor and A7, and a loud close in D minor.
 *
 * Common plays the tune over held open fifths, and the left hand climbs the chord alone. Rare puts triads
 * under the tune, and both hands climb the chord while the pedal holds it. Epic starts each long A with a
 * lower mordent on the beat, rolls an Alberti bass under the tune, and echoes the run in the bass. Legendary
 * doubles the tune an octave up, as an organ does, over two-octave arpeggios. It echoes the run in bass
 * octaves, then ends over a stride bass.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 3/1, in quarters, which are the print's sixty-fourths: one bar per half flourish. */
const tune = "A5:8 r:2 G5:1 F5:1 | E5:1 D5:1 C#5:2 D5:4 r:4 | A4:8 r:2 E4:2 | F4:2 C#4:2 D4:4 r:4";

/** `text` with every length `factor` times as long, so a line in one unit reads in a shorter one. */
function scaled(text: string, factor: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${factor * Number(units)}`);
}

/** `count` copies of `text`, one after another in the same bar. */
function times(text: string, count: number): string {
  return Array(count).fill(text).join(" ");
}

/** One bar of 4/2 in sixteenths: an Alberti bass on D minor, low, high, middle, high, in eighths. */
const ALBERTI_D = times("D3/5:2 A3/1:2 F3/3:2 A3/1:2", 4);

/** The order of a two-octave arpeggio over one bar of sixteenths, before its last rest: up, down, and up to the fourth note. */
const WIDE_ORDER = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 2];

/**
 * A two-octave arpeggio in sixteenths, `notes` low to high: the thumb passes under and finger 3 crosses
 * over it. It ends on a rest, so the hand can jump to the next bass.
 */
function wide(notes: string): string {
  const pitches = notes.split(" ");
  const fingers = [5, 2, 1, 3, 2, 1];
  return `${WIDE_ORDER.map((at) => `${pitches[at]}/${fingers[at]}:2`).join(" ")} r:2`;
}

/** Half a bar of stride in sixteenths: the bass in octaves, a rest to jump, then the chord and a rest. */
function stride(bass: string, chord: string): string {
  return `${bass}/5+1:6 r:2 ${chord}/5+3+1:6 r:2`;
}

export const toccataInDMinor: OurSong = {
  slug: "toccata-in-d-minor",
  title: "Toccata and Fugue in D minor",
  aka: ["Toccata", "BWV 565", "Toccata und Fuge d-Moll"],
  source: {
    composer: "Johann Sebastian Bach",
    died: 1750,
    published: 1833,
    edition:
      "Toccata and Fugue in D minor, BWV 565, the Toccata's two opening flourishes, as Wikipedia's article prints them and the Bach-Gesellschaft edition, typeset by the Mutopia Project, confirms",
  },
  about:
    "Bach's Toccata and Fugue in D minor was first published in 1833, during the revival of Bach's music. " +
    "Felix Mendelssohn championed it and played it to great acclaim in 1840. " +
    "Walt Disney's film Fantasia (1940) opens with it.",
  funFact: "The piece stayed almost unknown until its first print, more than eighty years after Bach died.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 3, denominator: 1, steps: 4, key: D_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 100,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: [
        "A5/5:8 | r:2 G5/5:1 F5/4:1 E5/3:1 D5/2:1 C#5/1:2 | D5/2:4 r:4",
        "A4/5:8 | r:2 E4/3:2 F4/4:2 C#4/1:2 | D4/2:4 r:4",
        "r:8 | r:8 | F#4/4:6 r:2",
        "A4/5:4 F4/3:4 | E4/2:4 C#4/1:4 | D4/2:8",
      ].join(" | "),
      left: [
        "D3+A3/5+1:8 | E3+A3/4+1:8 | D3+A3/5+1:8",
        "D3+A3/5+1:8 | A3/1:8 | D3+A3/4+1:4 r:4",
        "C#3/5:4 E3/3:4 | G3/2:4 Bb3/1:2 r:2 | D3+A3/5+2:8",
        "D3+A3/5+2:6 r:2 | A2+E3/5+2:8 | D3+A3/3+1:8",
      ].join(" | "),
      skills: ["position-change", "open-fifths", "held-bass"],
      practice: [
        { text: "Play bars 1 to 3 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 3], wait: true },
        { text: "Play bars 4 to 6 with the right hand alone. The same idea comes back an octave lower.", hands: "right", speed: 0.6, loop: [4, 6], wait: true },
        { text: "Now the left hand alone. In bars 7 and 8 it climbs a dark chord, one note at a time.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed, loud and bold.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "sound", text: "Play the first A loud and hold it for the whole bar, like a great organ." },
        { fromBar: 2, toBar: 2, kind: "fingering", text: "After the rest, finger 5 moves down to G. Then each finger plays one step lower." },
        { fromBar: 7, toBar: 8, kind: "sound", text: "This chord sounds dark and tense. Let it hang in the air, then enjoy the bright chord in bar 9." },
      ],
      tricky: {
        2: "Use the rest to move finger 5 from A down to G. The run then falls finger by finger.",
        4: "Use the rest in bar 3 to move the hand down an octave. Finger 5 lands on A.",
        11: "After the short rest, the left hand jumps down to A with finger 5. The right thumb takes C sharp.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 112,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [
        "A5/5:16 | r:4 G5/5:2 F5/4:2 E5/3:2 D5/2:2 C#5/1:4 | D5/2:8 r:8",
        "A4/5:16 | r:4 E4/3:4 F4/4:4 C#4/1:4 | D4/2:8 r:8",
        "r:16 | C#4/1:4 E4/2:4 G4/3:4 Bb4/5:4 | D4+F#4/1+3:16",
        "A4/5:8 G4/4:2 F4/3:2 D4/1:2 E4/2:2 | E4/2:4 C#4/1:4 E4/2:4 G4/4:4 | F4/3:8 D4/1:8",
        "D4+A4/1+5:8 F4/3:4 A4/5:4 | G4/4:4 E4/2:4 C#4/1:4 E4/2:4 | F4+A4/3+5:8 E4+G4/2+4:8 | D4+A4/1+5:16",
      ].join(" | "),
      left: [
        "D3+F3+A3/5+3+1:16 | E3+G3+A3/4+2+1:16 | D3+F3+A3/5+3+1:8 r:8",
        "D3+F3+A3/5+3+1:16 | G3+A3/2+1:16 | D3+A3/4+1:8 r:8",
        "C#3/5:4 E3/3:4 G3/2:4 Bb3/1:4 | C#3+E3+G3/5+3+2:16 | D3+A3/4+1:16",
        "D3+F3+A3/4+2+1:16 | C#3+E3+A3/5+3+1:16 | D3+F3+A3/4+2+1:16",
        "D3+F3+A3/4+2+1:8 D3+F3+A3/4+2+1:8 | C#3+E3+A3/5+3+1:8 C#3+E3+A3/5+3+1:8",
        "D3+F3+A3/4+2+1:8 C#3+E3+A3/5+3+1:6 r:2 | D2+A2/5+1:16",
      ].join(" | "),
      pedal: [...Array(6).fill("r:16"), ...Array(10).fill("P:16")].join(" | "),
      skills: ["triads", "pedal"],
      practice: [
        { text: "Play the right hand alone on the first six bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 6], wait: true },
        { text: "Play the left hand alone. Keep each triad in one hand shape and move it only one step.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Join the hands on bars 7 to 9, with the pedal down for each whole bar.", hands: "both", speed: 0.6, loop: [7, 9], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed, loud and proud.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 3, kind: "sound", text: "Play the long A strongly, then let the quick run tumble down to D." },
        { fromBar: 7, toBar: 8, kind: "trick", text: "The pedal keeps every note of the climb ringing, so the chord grows one note at a time." },
        { fromBar: 9, toBar: 9, kind: "sound", text: "F sharp makes this chord bright. It is the answer to all the tension before it." },
      ],
      tricky: {
        2: "Use the rest to move finger 5 from A down to G. Then the run falls finger by finger.",
        4: "Use the rest in bar 3 to move the right hand down an octave. Finger 5 lands on A.",
        16: "Use the short rest in bar 15 to jump the left hand down to the low D and A.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 96,
      numerator: 4,
      denominator: 2,
      steps: 16,
      right: [
        "A5/5:1 G5/4:1 A5/5:62",
        scaled("r:8 G5/5:4 F5/4:4 E5/3:4 D5/2:4 C#5/1:8 | D5/2:16 r:16", 2),
        "A4/5:1 G4/4:1 A4/5:62",
        scaled("r:8 E4/3:8 F4/4:8 C#4/1:8 | D4/2:16 r:16", 2),
        scaled(
          [
            "r:16 C#4/1:4 E4/2:4 G4/3:4 Bb4/5:4",
            "E4+G4+C#5/1+2+5:32",
            "F#4+A4+D5/1+2+5:32",
            "F4+A4/2+4:32",
            "A4/1:2 C#5/2:2 E5/3:2 G5/5:2 E5/3:2 C#5/2:2 A4/1:2 C#5/2:2 E5/3:2 G5/5:2 E5/3:2 C#5/2:2 A4/1:8",
            "A5/5:2 F5/3:2 D5/2:2 A4/1:2 D5/2:2 F5/3:2 A5/5:2 F5/3:2 D5/2:2 A4/1:2 D5/2:2 F5/3:2 D5+F5+A5/1+3+5:8",
            "A5/5:2 G5/4:2 F5/3:2 E5/2:2 D5/1:2 C#5/2:2 D5/1:2 E5/2:2 F5/3:2 E5/2:2 D5/1:2 C#5/2:2 E5/3:8",
            "D5+F5+A5/1+3+5:16 C#5+E5+A5/1+2+5:16",
            "F5+A5+D6/1+2+5:16 E5+G5+C#6/1+2+5:16",
            "F5+A5+D6/1+2+5:32",
          ].join(" | "),
          2,
        ),
      ].join(" | "),
      left: scaled(
        [
          ALBERTI_D,
          "A2+E3+G3/5+2+1:32",
          ALBERTI_D,
          ALBERTI_D,
          "A2+C#3+G3/5+4+1:28 r:4",
          ALBERTI_D,
          "C#3/5:4 E3/3:4 G3/2:4 Bb3/1:4 r:16",
          "C#3+G3+Bb3/5+2+1:28 r:4",
          "D2+A2+D3/5+2+1:32",
          "A2/1:12 r:4 G2/1:2 F2/2:2 E2/3:2 D2/4:2 C#2/5:4 D2/4:2 r:2",
          "A2+E3+G3/5+2+1:28 r:4",
          "D2+A2+D3/5+2+1:32",
          "A2/5:8 E3/2:8 G3/1:8 E3/2:4 r:4",
          "D2+D3/5+1:14 r:2 A1+A2/5+1:14 r:2",
          "D2+D3/5+1:14 r:2 A1+A2/5+1:14 r:2",
          "D1+D2/5+1:32",
        ].join(" | "),
        2,
      ),
      pedal: [...Array(6).fill("r:64"), ...Array(7).fill("P:64"), "P:32 P:32", "P:32 P:32", "P:64"].join(" | "),
      skills: ["alberti-bass", "left-hand-melody", "sixteenth-notes"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand alone on the first six bars. Flick a quick A, G, A at the start of each long A.", hands: "right", speed: 0.5, loop: [1, 6], wait: true },
        { text: "Play the left hand alone in bar 10, where the bass echoes the opening run.", hands: "left", speed: 0.5, loop: [10, 10], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal, as dramatic as you dare.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "trick", text: "The quick A, G, A is a mordent. Play it as one tiny shake, then hold the A." },
        { fromBar: 13, toBar: 13, kind: "fingering", text: "In this run finger 2 crosses over the thumb, and the thumb comes back. Keep the wrist level." },
        { fromBar: 14, toBar: 15, kind: "sound", text: "Change the pedal halfway through each bar, right as the new chord sounds." },
      ],
      tricky: {
        4: "Use the rest in bar 3 to move the right hand down an octave. Then flick A, G, A and hold the A.",
        11: "The run climbs A, C sharp, E and G with fingers 1, 2, 3 and 5, then turns back down.",
        14: "Use the short rest to jump the left hand down from D to the low A. Change the pedal there too.",
      },
    },
    legendary: {
      key: D_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 2,
      steps: 16,
      right: [
        "A6/5:1 G6/4:1 A5+A6/1+5:62",
        scaled("r:8 G5+G6/1+5:4 F5+F6/1+5:4 E5+E6/1+5:4 D5+D6/1+5:4 C#5+C#6/1+5:8 | D5+D6/1+5:16 r:16", 2),
        "A5/5:1 G5/4:1 A4+A5/1+5:62",
        scaled(
          [
            "r:8 E4+E5/1+5:8 F4+F5/1+5:6 r:2 C#4+C#5/1+5:8",
            "D4+D5/1+5:16 r:16",
            "r:16 C#4/1:2 E4/2:2 G4/3:2 Bb4/1:2 C#5/2:2 E5/3:2 G5/4:2 Bb5/5:2",
            "C#5+E5+G5+Bb5/1+2+3+5:32",
            "D5+F#5+A5+D6/1+2+3+5:30 r:2",
            "A4+F5+A5/1+3+5:32",
            "A4/1:2 C#5/2:2 E5/3:2 G5/4:2 A5/1:2 C#6/2:2 E6/3:2 G6/5:2 E6/3:2 C#6/2:2 A5/1:2 G5/4:2 E5/3:2 C#5/2:2 A4/1:2 r:2",
            "D6/5:2 A5/3:2 F5/2:2 D5/1:2 F5/2:2 A5/3:2 D6/5:2 A5/3:2 F5/2:2 D5/1:2 F5/2:2 A5/3:2 D5+F5+A5+D6/1+2+3+5:8",
            "A5/5:2 G5/4:2 F5/3:2 E5/2:2 D5/1:2 C#5/2:2 D5/1:2 E5/2:2 F5/3:2 E5/2:2 D5/1:2 C#5/2:2 E5+A5/2+5:8",
            "D5+F5+A5+D6/1+2+3+5:16 C#5+E5+A5+C#6/1+2+3+5:14 r:2",
            "F5+A5+D6+F6/1+2+4+5:16 E5+G5+C#6+E6/1+2+4+5:14 r:2",
            "D5+F5+A5+D6/1+2+3+5:32",
          ].join(" | "),
          2,
        ),
      ].join(" | "),
      left: scaled(
        [
          wide("D2 A2 D3 F3 A3 D4"),
          "A1+A2/5+1:30 r:2",
          `${stride("D2+D3", "F3+A3+D4")} ${stride("D2+D3", "F3+A3+D4")}`,
          wide("D2 A2 D3 F3 A3 D4"),
          "A1+A2/5+1:30 r:2",
          "D2+D3/5+1:6 r:2 F3+A3/2+1:6 r:2 D2+D3/5+1:6 r:10",
          "C#2/5:2 E2/4:2 G2/3:2 Bb2/2:2 C#3/1:2 E3/3:2 G3/2:2 Bb3/1:2 r:16",
          "C#2+C#3/5+1:32",
          "D2+A2+D3/5+2+1:30 r:2",
          "A1+A2/5+1:12 r:4 G1+G2/5+1:2 F1+F2/5+1:2 E1+E2/5+1:2 D1+D2/5+1:2 C#1+C#2/5+1:4 D1+D2/5+1:2 r:2",
          `${stride("A1+A2", "C#3+E3+G3")} ${stride("A1+A2", "C#3+E3+G3")}`,
          `${stride("D1+D2", "D3+F3+A3")} ${stride("D1+D2", "D3+F3+A3")}`,
          `${stride("A1+A2", "E3+G3+A3")} ${stride("A1+A2", "E3+G3+A3")}`,
          "D1+D2/5+1:14 r:2 A1+A2/5+1:14 r:2",
          "D2+D3/5+1:14 r:2 A1+A2/5+1:14 r:2",
          "D1+D2/5+1:32",
        ].join(" | "),
        2,
      ),
      pedal: [...Array(6).fill("r:64"), ...Array(7).fill("P:64"), "P:32 P:32", "P:32 P:32", "P:64"].join(" | "),
      skills: ["arpeggios", "octave-bass", "stride"],
      practice: [
        { text: "Play the right hand's octaves alone on the first six bars. Keep the hand open, thumb and little finger ready.", hands: "right", speed: 0.5, loop: [1, 6], wait: true },
        { text: "Play the left hand alone. Each arpeggio spans two octaves, and the stride bass jumps between bass and chord.", hands: "left", speed: 0.5, loop: null, wait: true },
        { text: "Join the hands on bars 7 to 9, where the hands climb the dark chord in turns.", hands: "both", speed: 0.5, loop: [7, 9], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord roar.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 3, kind: "sound", text: "Octaves make the tune sound like an organ. Let the top note ring a little louder." },
        { fromBar: 7, toBar: 7, kind: "trick", text: "The left hand starts the climb and the right hand finishes it. It should sound like one long run." },
        { fromBar: 10, toBar: 10, kind: "sound", text: "The bass echoes the opening run in octaves. Make it rumble like the lowest organ pipes." },
      ],
      tricky: {
        11: "The arpeggio climbs two octaves. The thumb passes under on A, and finger 4 crosses back over.",
        12: "Keep the hand open over the octave, with finger 5 on the high D and the thumb on the low D.",
        13: "Finger 2 crosses over the thumb to C sharp, and the thumb comes back to D.",
      },
    },
  },
  de: {
    about:
      "Bachs Toccata und Fuge d-Moll erschien 1833 zum ersten Mal im Druck, als man Bachs Musik wiederentdeckte. " +
      "Felix Mendelssohn setzte sich dafür ein und spielte sie 1840 mit großem Erfolg. " +
      "Walt Disneys Film Fantasia (1940) beginnt mit ihr.",
    funFact: "Das Stück blieb fast unbekannt bis zu seinem ersten Druck, mehr als achtzig Jahre nach Bachs Tod.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 3 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 4 bis 6 nur mit der rechten Hand. Dieselbe Idee kommt eine Oktave tiefer zurück.",
          "Jetzt die linke Hand allein. In Takt 7 und 8 steigt sie einen dunklen Akkord hinauf, Ton für Ton.",
          "Nimm beide Hände zusammen, langsam.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo, laut und mutig.",
        ],
        tips: [
          "Spiel das erste A laut und halt es den ganzen Takt, wie eine große Orgel.",
          "Nach der Pause rückt Finger 5 hinab zum G. Dann spielt jeder Finger einen Schritt tiefer.",
          "Dieser Akkord klingt dunkel und gespannt. Lass ihn in der Luft hängen, dann genieß den hellen Akkord in Takt 9.",
        ],
        tricky: {
          2: "Nutz die Pause, um Finger 5 vom A hinab zum G zu setzen. Dann fällt der Lauf Finger für Finger.",
          4: "Nutz die Pause in Takt 3, um die Hand eine Oktave tiefer zu setzen. Finger 5 landet auf dem A.",
          11: "Nach der kurzen Pause springt die linke Hand mit Finger 5 hinab zum A. Der rechte Daumen nimmt das Cis.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten sechs Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Halt jeden Dreiklang in einer Griffform, und bewege ihn nur einen Schritt.",
          "Spiel die Takte 7 bis 9 mit beiden Händen, mit dem Pedal unten für jeden ganzen Takt.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo, laut und stolz.",
        ],
        tips: [
          "Spiel das lange A kräftig, dann lass den schnellen Lauf hinab zum D purzeln.",
          "Das Pedal lässt jeden Ton des Aufstiegs klingen, so wächst der Akkord Ton für Ton.",
          "Das Fis macht diesen Akkord hell. Es ist die Antwort auf all die Spannung davor.",
        ],
        tricky: {
          2: "Nutz die Pause, um Finger 5 vom A hinab zum G zu setzen. Dann fällt der Lauf Finger für Finger.",
          4: "Nutz die Pause in Takt 3, um die rechte Hand eine Oktave tiefer zu setzen. Finger 5 landet auf dem A.",
          16: "Nutz die kurze Pause in Takt 15, um mit der linken Hand hinab zum tiefen D und A zu springen.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die ersten sechs Takte nur mit der rechten Hand. Schnipp ein schnelles A, G, A an den Anfang jedes langen A.",
          "Spiel die linke Hand allein in Takt 10. Dort wiederholt der Bass den Lauf vom Anfang.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal, so dramatisch, wie du dich traust.",
        ],
        tips: [
          "Das schnelle A, G, A ist ein Mordent. Spiel es wie ein winziges Zittern, dann halt das A.",
          "In diesem Lauf kreuzt Finger 2 über den Daumen, und der Daumen kommt zurück. Halt das Handgelenk ruhig.",
          "Wechsle das Pedal in der Mitte jedes Takts, genau wenn der neue Akkord klingt.",
        ],
        tricky: {
          4: "Nutz die Pause in Takt 3, um die rechte Hand eine Oktave tiefer zu setzen. Dann schnipp A, G, A und halt das A.",
          11: "Der Lauf steigt A, Cis, E und G hinauf, mit Finger 1, 2, 3 und 5, dann kehrt er um.",
          14: "Nutz die kurze Pause, um mit der linken Hand vom D hinab zum tiefen A zu springen. Wechsle dort auch das Pedal.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Oktaven der rechten Hand allein in den ersten sechs Takten. Halt die Hand offen, mit Daumen und kleinem Finger bereit.",
          "Spiel die linke Hand allein. Jedes Arpeggio umspannt zwei Oktaven, und der Stride-Bass springt zwischen Bass und Akkord.",
          "Spiel die Takte 7 bis 9 mit beiden Händen. Dort steigen die Hände abwechselnd den dunklen Akkord hinauf.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord donnern.",
        ],
        tips: [
          "Die Oktaven lassen die Melodie wie eine Orgel klingen. Lass den oberen Ton etwas lauter klingen.",
          "Die linke Hand beginnt den Aufstieg, und die rechte Hand beendet ihn. Es soll wie ein einziger langer Lauf klingen.",
          "Der Bass wiederholt den Lauf vom Anfang in Oktaven. Lass ihn grollen wie die tiefsten Orgelpfeifen.",
        ],
        tricky: {
          11: "Das Arpeggio steigt zwei Oktaven hinauf. Der Daumen geht auf dem A unter, und Finger 4 kreuzt zurück darüber.",
          12: "Halt die Hand offen über der Oktave, mit Finger 5 auf dem hohen D und dem Daumen auf dem tiefen D.",
          13: "Finger 2 kreuzt über den Daumen zum Cis, und der Daumen kommt zurück zum D.",
        },
      },
    },
  },
};

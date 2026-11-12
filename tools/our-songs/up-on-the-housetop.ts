/**
 * *Up on the Housetop*: Benjamin Hanby's Christmas song, in four versions of ours.
 *
 * The tune is the verse and then the chorus, with the first ending. The score is in E-flat major, and the
 * tune here is a minor third lower, in C major, so it lies between middle C and the A above. The score is
 * in 4/4, and every length here is twice as long, in 4/2, so its eighths are quarters and Common plays
 * them. The hook is the first four bars, the opening phrase.
 *
 * The right hand plays the tune with the thumb on C or D and fingers 2 to 5 on E, F, G and A. The thumb
 * goes straight from D to C only after bar 1 and bar 5, where the meter counts a change of place. Common
 * lifts the hand for that move in bar 1, and it leaves out the D of bar 5, so it changes place only once.
 *
 * Common plays the tune over held fifths and bass notes. Rare plays every note over block chords in the
 * verse, and over a root and fifth in turns in the chorus. Epic puts an Alberti bass under the whole
 * song and plays the chorus in thirds, with the pedal. Legendary adds quick fills to the verse over a
 * stride bass, then plays the chorus in thirds an octave up over arpeggios, and ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, a minor third below the score's E-flat major. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 4/2, in quarters: the verse, then the chorus with the first ending. */
const tune = [
  "G4:2 G4:1 A4:1 G4:2 E4:1 D4:1 | C4:2 E4:2 G4:4 | A4:2 A4:2 G4:2 E4:2 | D4:2 G4:2 G4:4",
  "G4:2 G4:1 A4:1 G4:2 E4:1 D4:1 | C4:2 E4:2 G4:4 | A4:2 A4:1 A4:1 G4:1 G4:1 E4:2 | D4:2 G4:2 C4:4",
  "F4:2 F4:2 A4:4 | G4:2 G4:1 G4:1 E4:4 | D4:2 F4:2 F4:4 | E4:2 G4:1 G4:1 C4:2 E4:2",
  "G4:2 G4:1 A4:1 G4:2 E4:2 | F4:2 G4:2 A4:4 | G4:2 G4:1 A4:1 G4:2 E4:1 E4:1 | D4:2 G4:2 C4:4",
].join(" | ");

/** The right hand's finger on each note name: the thumb on C or D, then one finger for each of E, F, G and A. */
const FINGER: Record<string, number> = { C: 1, D: 1, E: 2, F: 3, G: 4, A: 5 };

/** `text` with the finger of `FINGER` written on every single note. */
function fingered(text: string): string {
  return text.replace(/([A-G])(\d):/g, (_, name: string, octave: string) => `${name}${octave}/${FINGER[name]}:`);
}

/** `text` with every length multiplied by `times`, so a line in quarters reads in eighths or sixteenths. */
function scaled(text: string, times: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${times * Number(units)}`);
}

/** `text` an octave higher. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/**
 * Bars of held shapes from `halves`, such as `"CC FC"`: one letter of `shapes` per half bar, a space
 * between bars. Two equal halves make one note held for the whole bar. `half` is the half bar's length.
 */
function heldBars(shapes: Record<string, string>, halves: string, half: number): string {
  return halves
    .split(" ")
    .map(([first, second]) => (first === second ? `${shapes[first!]}:${2 * half}` : `${shapes[first!]}:${half} ${shapes[second!]}:${half}`))
    .join(" | ");
}

/** Bars of `patterns` from `halves`, such as `"CC FC"`: one letter per half bar, a space between bars. */
function patternBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** The chord of each half bar: C, F, and G as `G` or `S`. */
const CHORDS = "CC CC FC GG CC CC FC GC FF CC GG CC CC FF CC GC";

/** Common's right hand in quarters. It merges repeated notes after bar 4 and leaves out the D of bar 5. */
const COMMON_RIGHT = [
  "G4:2 G4:1 A4:1 G4:2 E4:1 D4:1 | C4:2 E4:2 G4:4 | A4:2 A4:2 G4:2 E4:2 | D4:2 G4:2 G4:4",
  "G4:2 G4:1 A4:1 G4:2 E4:2 | C4:2 E4:2 G4:4 | A4:2 A4:2 G4:2 E4:2 | D4:2 G4:2 C4:4",
  "F4:2 F4:2 A4:4 | G4:2 G4:2 E4:4 | D4:2 F4:2 F4:4 | E4:2 G4:2 C4:2 E4:2",
  "G4:2 G4:1 A4:1 G4:2 E4:2 | F4:2 G4:2 A4:4 | G4:2 G4:1 A4:1 G4:2 E4:2 | D4:2 G4:2 C4:4",
].join(" | ");

/** A held fifth or bass note, the hand kept on C to G: C, G, or F. */
const HELD: Record<string, string> = {
  C: "C3+G3/5+1",
  G: "D3+G3/4+1",
  F: "F3/2",
};

/** A block chord, the hand kept on C to G: C, G seventh without its B, or F over C. */
const BLOCK: Record<string, string> = {
  C: "C3+E3+G3/5+3+1",
  G: "D3+F3+G3/4+2+1",
  F: "C3+F3/5+2",
};

/** Half a bar in quarters of a root and fifth in turns, on C, F or G, the hand kept on C to G. */
const TURNS: Record<string, string> = {
  C: "C3/5:2 G3/1:2",
  F: "F3/2:2 C3/5:2",
  G: "G3/1:2 D3/4:2",
};

/** Half a bar of Alberti bass in eighths: low, high, middle, high, twice. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  F: "C3/5:1 A3/1:1 F3/2:1 A3/1:1 C3/5:1 A3/1:1 F3/2:1 A3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1 B2/5:1 G3/1:1 D3/3:1 G3/1:1",
};

/** The root in octaves, the low half of stride on C, F or G. */
const STRIDE_BASS: Record<string, string> = { C: "C2+C3/5+1", F: "F1+F2/5+1", G: "G1+G2/5+1" };

/** The chord above the root, the high half of stride on C, F or G. */
const STRIDE_CHORD: Record<string, string> = { C: "E3+G3+C4/3+2+1", F: "A2+C3+F3/5+3+1", G: "B2+D3+G3/5+3+1" };

/** Half a bar of stride in sixteenths: bass, chord, bass, chord, each an eighth with an eighth's rest for the jump. */
const STRIDE: Record<string, string> = Object.fromEntries(
  Object.keys(STRIDE_BASS).map((chord) => {
    const beat = `${STRIDE_BASS[chord]}:2 r:2 ${STRIDE_CHORD[chord]}:2 r:2`;
    return [chord, `${beat} ${beat}`];
  }),
);

/** Half a bar of arpeggio in sixteenths, two octaves up from the root in eighths, then a rest for the jump down. */
const ARPEGGIO: Record<string, string> = {
  C: "C2/5:2 G2/3:2 C3/2:2 E3/1:2 G3/3:2 C4/2:2 E4/1:2 r:2",
  F: "F1/5:2 C2/3:2 F2/2:2 A2/1:2 C3/3:2 F3/2:2 A3/1:2 r:2",
  G: "G1/5:2 D2/3:2 G2/2:2 B2/1:2 D3/3:2 G3/2:2 B3/1:2 r:2",
};

/** The verse of the tune, bars 1 to 8, in quarters. */
const VERSE = tune.split(" | ").slice(0, 8).join(" | ");

/** The chorus in the right hand, in quarters, with a third under most tune notes. */
const CHORUS_THIRDS = [
  "D4+F4/1+3:2 D4+F4/1+3:2 F4+A4/3+5:4",
  "E4+G4/2+4:2 E4+G4/2+4:1 E4+G4/2+4:1 C4+E4/1+2:4",
  "B3+D4/1+2:2 D4+F4/2+4:2 D4+F4/2+4:4",
  "C4+E4/1+3:2 E4+G4/3+5:1 E4+G4/3+5:1 A3+C4/1+2:2 C4+E4/2+4:2",
  "E4+G4/2+4:2 E4+G4/2+4:1 F4+A4/3+5:1 E4+G4/2+4:2 C4+E4/1+2:2",
  "D4+F4/1+3:2 G4/4:2 F4+A4/3+5:4",
  "E4+G4/2+4:2 E4+G4/2+4:1 F4+A4/3+5:1 E4+G4/2+4:2 C4+E4/1+2:1 C4+E4/1+2:1",
];

/** The verse for Legendary an octave up, in sixteenths, with a quick fill at the end of each long note. */
const VERSE_FILLS = [
  "G5/4:8 G5/4:4 A5/5:4 G5/4:8 E5/2:4 D5/1:4",
  "C5/1:8 E5/2:8 G5/4:12 A5/5:1 G5/4:1 F5/3:1 E5/2:1",
  "A5/5:8 A5/5:8 G5/4:8 E5/2:8",
  "D5/1:8 G5/4:8 G5/4:12 F5/3:1 E5/2:1 F5/3:2",
  "G5/4:8 G5/4:4 A5/5:4 G5/4:8 E5/2:4 D5/1:4",
  "C5/1:8 E5/2:8 G5/4:12 A5/5:1 G5/4:1 F5/3:1 E5/2:1",
  "A5/5:8 A5/5:4 A5/5:4 G5/4:4 G5/4:4 E5/2:8",
  "D5/1:8 G5/4:8 C5/1:12 E5/2:2 D5/1:2",
].join(" | ");

export const upOnTheHousetop: OurSong = {
  slug: "up-on-the-housetop",
  title: "Up on the Housetop",
  source: {
    composer: "Benjamin Hanby",
    died: 1867,
    published: 1864,
    edition: "Up on the Housetop, read from the first-violin part of an ensemble edition on the Internet Archive",
  },
  about:
    "Benjamin Hanby wrote this Christmas song in 1864, while he ran a singing school in New Paris, Ohio. " +
    "It was first published by Root & Cady in the magazine Our Song Birds. " +
    "It is thought to be the first Christmas song mainly about Santa Claus. " +
    "Hanby wrote some 80 songs before he died of tuberculosis in 1867.",
  funFact:
    "One book counts it as the second-oldest Christmas song that is not religious. Only Jingle Bells, published in 1857, is older.",
  mythic: null,
  collection: "christmas",
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 8,
      right: scaled(fingered(COMMON_RIGHT), 4).replace("D4/1:4 |", "D4/1:3 r:1 |"),
      left: scaled(heldBars(HELD, CHORDS, 4), 4),
      skills: ["held-bass", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the chorus with the right hand alone. Finger 3 now joins in on F.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Now the left hand alone. It holds one shape for half a bar or a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "fingering", text: "Rest the thumb on D, and fingers 2 to 5 on E, F, G and A." },
        { fromBar: 1, toBar: 2, kind: "trick", text: "Lift the hand a little after the D, so the thumb drops onto C for bar 2." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "The chorus starts here. Play it a little brighter than the verse." },
      ],
      tricky: {
        1: "Fingers 4 and 5 rock between G and A. Then finger 2 plays E and the thumb plays D.",
        2: "Lift the hand after the D, and land the thumb on C. Finger 2 plays E and finger 4 holds G.",
        5: "The opening comes back. This time finger 2 holds E longer, and no D comes before the C.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 160,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: fingered(tune),
      left: [
        heldBars(BLOCK, "CC CC FC GG CC CC FC GC", 4),
        patternBars(TURNS, "FF CC GG CC CC FF CC"),
        `${TURNS.G} C3+E3+G3/5+3+1:4`,
      ].join(" | "),
      skills: ["triads", "position-change"],
      practice: [
        { text: "Play the left hand alone on the verse, and press the notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone on the chorus: the root of each chord, then its fifth.", hands: "left", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, where the short notes come.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Hold each chord softly to its end, so the tune sings above it." },
        { fromBar: 7, toBar: 7, kind: "rhythm", text: "After the first A, the next two As and the two Gs are twice as quick. Keep them even." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "In the chorus, play each root a little louder than the fifth after it." },
      ],
      tricky: {
        2: "The thumb slides from D down to C. Finger 2 plays E and finger 4 holds G.",
        6: "The same move as bar 2: the thumb slides from D down to C, as the next chord starts.",
        7: "Finger 5 plays A three times, then finger 4 plays G twice. Then finger 2 plays E.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 160,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: scaled([fingered(VERSE), ...CHORUS_THIRDS, "B3+D4/1+2:2 G4/5:2 C4/1:4"].join(" | "), 2),
      left: `${patternBars(ALBERTI, CHORDS.slice(0, -1))} C3+E3+G3/5+3+1:8`,
      pedal: Array(16).fill("P:8 P:8").join(" | "),
      skills: ["alberti-bass", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the verse, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the Alberti bass soft, so the tune rings above it." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "Press both notes of each third at once, and let the top finger sing." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Change the pedal each half bar, as the left hand starts a new chord." },
      ],
      tricky: {
        2: "The thumb slides from D down to C, while the Alberti bass rolls on below.",
        6: "The same move as bar 2. Keep the left hand steady while the thumb slides.",
        13: "The thirds step up from E and G to F and A, and back. Fingers 2 and 4 hand over to 3 and 5.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 120,
      numerator: 4,
      denominator: 2,
      steps: 8,
      right: [VERSE_FILLS, scaled(octaveUp(CHORUS_THIRDS.join(" | ")), 4), "B4+D5/1+2:8 G5/5:6 r:2 C4+E4+G4+C5/1+2+3+5:16"].join(" | "),
      left: [
        patternBars(STRIDE, "CC CC FC GG CC CC FC GC"),
        patternBars(ARPEGGIO, "FF CC GG CC CC FF CC G"),
      ].join(" | ") + " C2+G2+C3/5+2+1:16",
      pedal: Array(16).fill("P:16 P:16").join(" | "),
      skills: ["stride", "arpeggios", "sixteenth-notes"],
      practice: [
        { text: "Play the stride bass alone: jump down for the low octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the verse with the right hand alone, and keep the quick fills light.", hands: "right", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the arpeggios of the chorus in the left hand alone.", hands: "left", speed: 0.5, loop: [9, 16], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 2, toBar: 2, kind: "fingering", text: "In the quick fill, fingers 5, 4, 3 and 2 walk down from A to E." },
        { fromBar: 16, toBar: 16, kind: "sound", text: "Lift the hand after the G, and land the four-note chord with the pedal down." },
      ],
      tricky: {
        3: "Finger 5 plays A twice, then the hand rolls down to E. The left hand jumps from F to C.",
        4: "After the long G, fingers 3, 2 and 3 play F, E and F quickly, then the tune returns to G.",
        7: "Finger 5 repeats A, then finger 4 repeats G. Keep the quick notes light over the stride.",
      },
    },
  },
  de: {
    about:
      "Benjamin Hanby schrieb dieses Weihnachtslied 1864, als er in New Paris, Ohio, eine Gesangsschule leitete. " +
      "Zuerst veröffentlichte es der Verlag Root & Cady in der Zeitschrift Our Song Birds. " +
      "Man hält es für das erste Weihnachtslied, das vor allem vom Weihnachtsmann handelt. " +
      "Hanby schrieb rund 80 Lieder, bevor er 1867 an Tuberkulose starb.",
    funFact:
      "Ein Buch zählt es als zweitältestes Weihnachtslied, das nicht religiös ist. Nur Jingle Bells, veröffentlicht 1857, ist älter.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Lied auf jeden Ton warten.",
          "Spiel den Refrain nur mit der rechten Hand. Jetzt kommt Finger 3 auf dem F dazu.",
          "Jetzt die linke Hand allein. Sie hält eine Form einen halben oder einen ganzen Takt lang.",
          "Nimm beide Hände zusammen, und spiel das ganze Lied langsam.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Leg den Daumen auf D und Finger 2 bis 5 auf E, F, G und A.",
          "Heb die Hand nach dem D etwas an, damit der Daumen in Takt 2 auf das C fällt.",
          "Hier beginnt der Refrain. Spiel ihn etwas heller als die Strophe.",
        ],
        tricky: {
          1: "Finger 4 und 5 schaukeln zwischen G und A. Dann spielt Finger 2 das E und der Daumen das D.",
          2: "Heb die Hand nach dem D an, und setz den Daumen auf das C. Finger 2 spielt E, und Finger 4 hält G.",
          5: "Der Anfang kommt zurück. Diesmal hält Finger 2 das E länger, und vor dem C kommt kein D.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand in der Strophe allein, und drück die Töne jedes Akkords zusammen.",
          "Spiel die linke Hand im Refrain allein: den Grundton jedes Akkords, dann seine Quinte.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Dort kommen die kurzen Töne.",
          "Spiel das ganze Lied mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Halt jeden Akkord leise bis zu seinem Ende, damit die Melodie darüber singt.",
          "Nach dem ersten A sind die nächsten zwei A und die zwei G doppelt so schnell. Spiel sie gleichmäßig.",
          "Spiel im Refrain jeden Grundton etwas lauter als die Quinte danach.",
        ],
        tricky: {
          2: "Der Daumen gleitet vom D hinab zum C. Finger 2 spielt E, und Finger 4 hält G.",
          6: "Dieselbe Bewegung wie in Takt 2: Der Daumen gleitet vom D hinab zum C, während der nächste Akkord beginnt.",
          7: "Finger 5 spielt dreimal das A, dann Finger 4 zweimal das G. Danach spielt Finger 2 das E.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Terzen der rechten Hand allein, und drück beide Töne jedes Zweiklangs zusammen.",
          "Spiel die Strophe langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise, damit die Melodie darüber klingt.",
          "Drück beide Töne jeder Terz gleichzeitig, und lass den oberen Finger singen.",
          "Wechsle das Pedal jeden halben Takt, sobald die linke Hand einen neuen Akkord beginnt.",
        ],
        tricky: {
          2: "Der Daumen gleitet vom D hinab zum C, während der Alberti-Bass darunter weiterrollt.",
          6: "Dieselbe Bewegung wie in Takt 2. Halt die linke Hand ruhig, während der Daumen gleitet.",
          13: "Die Terzen steigen von E und G zu F und A und wieder zurück. Finger 2 und 4 übergeben an 3 und 5.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Stride-Bass allein: Spring hinunter zur tiefen Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Strophe nur mit der rechten Hand, und halt die schnellen Zwischenläufe leicht.",
          "Spiel die Arpeggien des Refrains nur mit der linken Hand.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau beim Stride auf die tiefe Oktave, und lass die Hand den Akkord nach Gefühl finden.",
          "Im schnellen Zwischenlauf gehen Finger 5, 4, 3 und 2 vom A hinab zum E.",
          "Heb die Hand nach dem G an, und setz den vierstimmigen Akkord bei getretenem Pedal.",
        ],
        tricky: {
          3: "Finger 5 spielt zweimal das A, dann rollt die Hand hinab zum E. Die linke Hand springt von F nach C.",
          4: "Nach dem langen G spielen Finger 3, 2 und 3 schnell F, E und F, dann kehrt die Melodie zum G zurück.",
          7: "Finger 5 wiederholt das A, dann wiederholt Finger 4 das G. Halt die schnellen Töne über dem Stride leicht.",
        },
      },
    },
  },
};

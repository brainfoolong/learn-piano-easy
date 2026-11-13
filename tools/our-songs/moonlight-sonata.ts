/**
 * *Moonlight Sonata*: the opening tune of the first movement of Beethoven's Piano Sonata No. 14, in four
 * versions of ours.
 *
 * The tune is the melody of the print's bars 5 to 9: the quiet repeated note with its dotted pickup, the
 * rise of a semitone, and the fall to the third of the chord. The hook is all five bars. The print is in
 * cut time with sixteenths. The tune makes every sixteenth a quarter, so Common needs nothing faster, and
 * reads the print's bar as one bar of 4/1. Every version writes it in 4/2, two bars per print bar.
 *
 * The print is in C-sharp minor with four sharps, and Epic allows three. So Common, Rare and Epic move the
 * tune a semitone up, to D minor. Legendary is written in D minor too, then moved down to the print's key.
 *
 * Common plays the tune over held bass notes and open fifths. Rare plays it twice over a bass and a
 * two-note chord with the pedal, the second time an octave up. Epic rolls triplet broken chords under it,
 * then plays it in thirds and sixths. Legendary rolls triplet arpeggios over two octaves, plays the tune in
 * octaves, and crosses the left hand over for its last notes.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Legendary keeps. */
const C_SHARP_MINOR: Key = { tonic: 1, mode: "minor" };

/** The key of Common, Rare and Epic: a semitone above the print's. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 4/1, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune = "r:12 G#4:3 G#4:1 | G#4:12 G#4:3 G#4:1 | G#4:8 A4:8 | G#4:8 F#4:4 B4:4 | E4:4 r:12";

/** The pitch class of each note letter. */
const LETTERS: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** The name of each pitch class, spelt with sharps. */
const SHARP_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

/** `text` a semitone down, every note spelt with sharps, so a line in D minor reads in C-sharp minor. */
function semitoneDown(text: string): string {
  return text.replace(/([A-G])([#b]?)(\d)(?=[/:+])/g, (_, letter: string, accidental: string, octave: string) => {
    const pitch = 12 * (Number(octave) + 1) + LETTERS[letter]! + (accidental === "#" ? 1 : accidental === "b" ? -1 : 0) - 1;
    return `${SHARP_NAMES[pitch % 12]}${Math.floor(pitch / 12) - 1}`;
  });
}

/** The tune in 4/2, in quarters, fingered in one place, with the bar after it at rest. */
const RIGHT_QUARTERS = "r:4 A4/3:3 A4/3:1 | A4/3:8 | r:4 A4/3:3 A4/3:1 | A4/3:8 | Bb4/4:8 | A4/3:8 | G4/2:4 C5/5:4 | F4/1:8 | r:8";

/** `text` with every length three times as long, so a line in quarters reads in triplet eighths. */
function inTriplets(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${3 * Number(units)}`);
}

/** `text` an octave up: every note name's octave plus one. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** `count` triplet groups of a broken chord `notes`, low to high, fingered 5, 2, 1. */
function triplets(notes: string, count = 8): string {
  const [low, mid, high] = notes.split(" ");
  return Array(count).fill(`${low}/5:1 ${mid}/2:1 ${high}/1:1`).join(" ");
}

/** The order of an arpeggio over a whole bar: up, down, up and down, then a rest to jump to the next chord. */
const WIDE_BAR = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1];

/** The order of an arpeggio over half a bar: up and down, then a rest. */
const WIDE_HALF = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1];

/** An arpeggio over two octaves in triplet eighths: the thumb passes under and finger 3 crosses over it. */
function wide(notes: string, order: readonly number[] = WIDE_BAR): string {
  const pitches = notes.split(" ");
  const fingers = [5, 2, 1, 3, 2, 1];
  return `${order.map((at) => `${pitches[at]}/${fingers[at]}:1`).join(" ")} r:2`;
}

/** The chords under the tune and the bar after it, as close triads for Epic's broken chords. */
const EPIC_CHORDS = ["D3 F3 A3", "C#3 E3 A3", "A2 E3 G3", "D3 F3 A3", "Bb2 D3 G3", "C3 F3 A3", "C3 E3 Bb3", "A2 C3 F3", "F2 C3 F3"];

/** The same chords over two octaves, for Legendary's arpeggios. */
const WIDE_CHORDS = [
  "D2 A2 D3 F3 A3 D4",
  "C#2 G2 C#3 E3 G3 C#4",
  "A1 E2 A2 C#3 E3 G3",
  "D2 A2 D3 F3 A3 D4",
  "G1 D2 G2 Bb2 D3 G3",
  "C2 F2 A2 C3 F3 A3",
  "C2 G2 C3 E3 G3 Bb3",
  "F1 C2 F2 A2 C3 F3",
  "F1 C2 F2 A2 C3 F3",
];

/** The pedal for a 4/2 bar in triplet eighths, held for the whole bar. */
const PEDAL_BAR = "P:24";

export const moonlightSonata: OurSong = {
  slug: "moonlight-sonata",
  title: "Moonlight Sonata",
  aka: ["Mondscheinsonate", "Piano Sonata No. 14"],
  source: {
    composer: "Ludwig van Beethoven",
    died: 1827,
    published: 1802,
    edition:
      "Piano Sonata No. 14 in C-sharp minor, Op. 27 No. 2, first movement, in A. Winterberger's edition (Berners, 1908), as the Mutopia Project typesets it",
  },
  about:
    "Beethoven wrote this sonata in 1801 and published it in 1802, with a dedication to Countess Giulietta Guicciardi. " +
    'The name "Moonlight" came from the critic Ludwig Rellstab, after Beethoven had died. ' +
    "The film Immortal Beloved (1994), about Beethoven's life, plays it.",
  funFact: 'Beethoven asks for the whole movement to be played very delicately, with the dampers raised, "senza sordino".',
  mythic: "piano-midi/mond_1.mid",
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 1, steps: 4, key: C_SHARP_MINOR, hookBars: [1, 5] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 104,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: `${RIGHT_QUARTERS} | G4/2:4 Bb4/4:4 | A4/3:4 G4/2:4 | F4/1:8`,
      left: [
        "D3+A3/3+1:8 | A2+E3/5+2:8 | A2+E3/5+2:8 | D3+A3/3+1:8",
        "G2+D3/5+1:8 | C3/2:8 | C3/2:8 | F2+C3/5+1:8",
        "F2+C3/5+1:8 | G2+D3/5+1:8 | A2+C#3/4+2:8 | D3/1:8",
      ].join(" | "),
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 4 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, where the tune rises and falls.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds one note or an open fifth in each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 3, kind: "rhythm", text: "Hold the first A long, then play the short A right before the next long one." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play very softly. This music should sound like moonlight on a quiet lake." },
        { fromBar: 9, toBar: 9, kind: "trick", text: "The right hand rests here. Listen to the left hand and count four slow beats." },
      ],
      tricky: {
        2: "The left hand moves down from D and A to A and E. Finger 5 takes the low A.",
        5: "The left hand reaches down to G with finger 5, and the thumb stays on D.",
        10: "The left hand moves up from F to G. The right hand comes back with finger 2 on G.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 108,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: `${RIGHT_QUARTERS} | ${octaveUp(RIGHT_QUARTERS.replace(" | r:8", ""))} | Bb5/4:4 G5/2:4 | F5+A5/1+3:8`,
      left: [
        "D3/5:4 F3+A3/2+1:4 | C#3/5:4 E3+G3/2+1:4 | A2/5:4 E3+G3/2+1:4 | D3/5:4 F3+A3/2+1:4",
        "Bb2/5:4 D3+G3/2+1:4 | C3/5:4 F3+A3/2+1:4 | C3/5:4 E3+G3/2+1:4 | A2/5:4 C3+F3/2+1:4",
        "F2/5:4 C3+F3/2+1:4 | A2/5:4 D3+F3/2+1:4 | A2/5:4 E3+G3/2+1:4 | A2/5:4 E3+G3/2+1:4",
        "D3/5:4 F3+A3/2+1:4 | Bb2/5:4 D3+G3/2+1:4 | C3/5:4 F3+A3/2+1:4 | C3/5:4 E3+G3/2+1:4",
        "A2/5:4 C3+F3/2+1:4 | G2/5:2 D3+G3/2+1:2 A2/5:2 E3+G3/2+1:1 r:1 | D3+F3+A3/5+3+1:8",
      ].join(" | "),
      pedal: Array(19).fill("P:8").join(" | "),
      skills: ["pedal", "position-change"],
      practice: [
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone. The low note comes first, and the two-note chord answers it.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly, with the pedal.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the second half, where the tune comes back an octave higher.", hands: "both", speed: 0.7, loop: [10, 19], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Hold the pedal down for each whole bar, and change it right on the bar line." },
        { fromBar: 1, toBar: 3, kind: "rhythm", text: "The dotted A lasts three times as long as the short A after it." },
        { fromBar: 10, toBar: 17, kind: "sound", text: "Up high, play even softer. The tune should glow like the moon." },
      ],
      tricky: {
        4: "Play D with finger 5 of the left hand, then F and A together with fingers 2 and 1.",
        10: "Use the rest in bar 9 to move the right hand an octave up. Finger 3 lands on the high A.",
        19: "Spread the left hand over D, F and A with fingers 5, 3 and 1. The right hand plays F and A together.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 88,
      numerator: 4,
      denominator: 2,
      steps: 6,
      right: [
        inTriplets(RIGHT_QUARTERS),
        "r:12 F4+A4/1+3:9 F4+A4/1+3:3",
        "C#4+A4/1+5:24",
        "r:12 C#4+A4/1+5:9 C#4+A4/1+5:3",
        "F4+A4/1+3:24",
        "G4+Bb4/2+4:24",
        "F4+A4/1+3:24",
        "E4+G4/1+2:12 E4+C5/1+5:12",
        "A3+F4/1+5:21 r:3",
        "G4+Bb4/2+4:12 E4+G4/1+3:9 r:3",
        "A3+D4+F4/1+2+4:24",
      ].join(" | "),
      left: [
        ...EPIC_CHORDS.map((chord) => triplets(chord)),
        ...EPIC_CHORDS.slice(0, 8).map((chord) => triplets(chord)),
        `${triplets("Bb2 D3 G3", 4)} ${triplets("C#3 E3 G3", 3)} r:3`,
        "D2+A2+D3/5+2+1:24",
      ].join(" | "),
      pedal: [...Array(17).fill(PEDAL_BAR), "P:12 P:12", PEDAL_BAR].join(" | "),
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone. Each chord rolls up in threes, low, middle, high.", hands: "left", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [10, 19], wait: true },
        { text: "Join the hands on the first nine bars, slowly.", hands: "both", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 9, kind: "sound", text: "Keep the rolling threes soft and even, so the tune floats above them." },
        { fromBar: 1, toBar: 3, kind: "rhythm", text: "The short A lasts one group of three. Count the threes, and it lands by itself." },
        { fromBar: 10, toBar: 17, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        17: "Spread the right hand to a sixth, with the thumb on A and the little finger on F.",
        18: "The chord changes halfway through this bar. Change the pedal there too.",
        19: "Spread the left hand over a whole octave: finger 5 on the low D, the thumb on the D above.",
      },
    },
    legendary: {
      key: C_SHARP_MINOR,
      bpm: 104,
      numerator: 4,
      denominator: 2,
      steps: 6,
      right: semitoneDown([
        inTriplets(RIGHT_QUARTERS),
        "r:12 A4+A5/1+5:9 A4+A5/1+5:3",
        "A4+A5/1+5:24",
        "r:12 A4+A5/1+5:9 A4+A5/1+5:3",
        "A4+A5/1+5:24",
        "Bb4+Bb5/1+5:24",
        "A4+A5/1+5:24",
        "G4+G5/1+5:9 r:3 C5+C6/1+5:9 r:3",
        "F4+F5/1+5:21 r:3",
        "Bb4+Bb5/1+5:9 r:3 G4+G5/1+5:9 r:3",
        "F4+A4+D5+F5/1+2+3+5:24",
      ].join(" | ")),
      left: semitoneDown([
        ...WIDE_CHORDS.map((chord) => wide(chord)),
        ...WIDE_CHORDS.slice(0, 8).map((chord) => wide(chord)),
        `${wide("G1 D2 G2 Bb2 D3 G3", WIDE_HALF)} ${wide("A1 E2 A2 C#3 E3 G3", WIDE_HALF)}`,
        "D2+A2+D3/5+2+1:9 r:3 A5/3:3 D6/2:3 F6/1:6",
      ].join(" | ")),
      pedal: [...Array(17).fill(PEDAL_BAR), "P:12 P:12", PEDAL_BAR].join(" | "),
      skills: ["arpeggios", "melody-in-chords", "hand-crossing"],
      practice: [
        { text: "Play the left hand alone. The thumb passes under and finger 3 crosses over, so each arpeggio spans two octaves.", hands: "left", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the right hand's octaves alone. Keep the hand open, with the thumb and little finger ready.", hands: "right", speed: 0.5, loop: [10, 17], wait: true },
        { text: "Play the ending slowly. The left hand crosses over the right for three high notes.", hands: "both", speed: 0.5, loop: [18, 19], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last notes ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 9, kind: "fingering", text: "In each arpeggio, the thumb passes under on the way down, and finger 3 crosses over on the way up." },
        { fromBar: 10, toBar: 17, kind: "sound", text: "Let the little finger sing the top note of each octave a little louder." },
        { fromBar: 19, toBar: 19, kind: "trick", text: "While the right hand holds its chord, float the left hand over it like a ray of moonlight." },
      ],
      tricky: {
        10: "The right hand plays octaves from here. The thumb and little finger land on both G sharps together.",
        17: "The left hand starts its arpeggio on a low E. Use the rest at the end of bar 16 to get there.",
        19: "Hold the right hand's chord, and cross the left hand over it to play G sharp, C sharp and E.",
      },
    },
  },
  de: {
    about:
      "Beethoven schrieb diese Sonate 1801 und veröffentlichte sie 1802, gewidmet der Gräfin Giulietta Guicciardi. " +
      'Den Namen "Mondschein" gab ihr der Kritiker Ludwig Rellstab, erst nach Beethovens Tod. ' +
      "Der Film Immortal Beloved (1994) über Beethovens Leben spielt sie.",
    funFact: 'Beethoven verlangt, den ganzen Satz sehr zart und mit gehobenen Dämpfern zu spielen, "senza sordino".',
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 4 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Dort steigt die Melodie und fällt wieder.",
          "Jetzt die linke Hand allein. Sie hält in jedem Takt einen Ton oder eine leere Quinte.",
          "Nimm beide Hände zusammen, langsam.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt das erste A lange, dann spiel das kurze A direkt vor dem nächsten langen.",
          "Spiel sehr leise. Diese Musik soll klingen wie Mondlicht auf einem stillen See.",
          "Hier pausiert die rechte Hand. Hör der linken Hand zu, und zähl vier langsame Schläge.",
        ],
        tricky: {
          2: "Die linke Hand rückt von D und A hinab zu A und E. Finger 5 nimmt das tiefe A.",
          5: "Die linke Hand greift mit Finger 5 hinab zum G, und der Daumen bleibt auf dem D.",
          10: "Die linke Hand rückt von F hinauf zu G. Die rechte Hand kommt mit Finger 2 auf dem G zurück.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Zuerst kommt der tiefe Ton, dann antwortet der Zweiklang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen und mit Pedal.",
          "Spiel die zweite Hälfte. Dort kommt die Melodie eine Oktave höher zurück.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt das Pedal jeweils einen ganzen Takt, und wechsle es genau am Taktstrich.",
          "Das punktierte A dauert dreimal so lange wie das kurze A danach.",
          "Spiel oben noch leiser. Die Melodie soll leuchten wie der Mond.",
        ],
        tricky: {
          4: "Spiel das D mit Finger 5 der linken Hand, dann F und A zusammen mit Finger 2 und 1.",
          10: "Nutz die Pause in Takt 9, um die rechte Hand eine Oktave höher zu setzen. Finger 3 landet auf dem hohen A.",
          19: "Spann die linke Hand über D, F und A mit Finger 5, 3 und 1. Die rechte Hand spielt F und A zusammen.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Jeder Akkord rollt in Dreiergruppen aufwärts, tief, Mitte, hoch.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt die rollenden Dreiergruppen leise und gleichmäßig, damit die Melodie darüber schwebt.",
          "Das kurze A dauert eine Dreiergruppe lang. Zähl die Dreier mit, dann landet es von selbst.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          17: "Spann die rechte Hand zur Sexte, mit dem Daumen auf dem A und dem kleinen Finger auf dem F.",
          18: "Der Akkord wechselt mitten in diesem Takt. Wechsle dort auch das Pedal.",
          19: "Spann die linke Hand über eine ganze Oktave: Finger 5 auf das tiefe D, den Daumen auf das D darüber.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein. Der Daumen geht unter, Finger 3 kreuzt darüber, und so umspannt jedes Arpeggio zwei Oktaven.",
          "Spiel die Oktaven der rechten Hand allein. Halt die Hand offen, mit Daumen und kleinem Finger bereit.",
          "Spiel den Schluss langsam. Die linke Hand kreuzt über die rechte für drei hohe Töne.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass die letzten Töne klingen.",
        ],
        tips: [
          "In jedem Arpeggio geht der Daumen abwärts unter, und Finger 3 kreuzt aufwärts darüber.",
          "Lass den kleinen Finger den oberen Ton jeder Oktave etwas lauter singen.",
          "Während die rechte Hand ihren Akkord hält, schweb mit der linken Hand darüber wie ein Mondstrahl.",
        ],
        tricky: {
          10: "Ab hier spielt die rechte Hand Oktaven. Daumen und kleiner Finger landen zusammen auf beiden Gis.",
          17: "Die linke Hand beginnt ihr Arpeggio auf einem tiefen E. Nutz die Pause am Ende von Takt 16, um dorthin zu kommen.",
          19: "Halt den Akkord der rechten Hand, und kreuz die linke Hand darüber, um Gis, Cis und E zu spielen.",
        },
      },
    },
  },
};

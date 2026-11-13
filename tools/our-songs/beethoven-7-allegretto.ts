/**
 * *Symphony No. 7: Allegretto*: the opening of the second movement of Beethoven's Seventh Symphony, in four
 * versions of ours.
 *
 * The tune is the top voice of the low strings' chords in the movement's opening eight bars. The print is in
 * 2/4 with eighths, an octave lower. The tune doubles every length into 4/4, so its eighths are quarters and
 * Common needs nothing faster. Each bar of 4/4 is one bar of the print. The hook is all eight bars, and their
 * rhythm of long, short, short, long, long is the piece.
 *
 * The tune repeats one note, so the print's chords carry it. Every version follows them, and the tune ends
 * on C major, so every version adds bars that close on A minor.
 *
 * Common plays the tune over held bass notes and open fifths, and its hand never moves. Rare plays it twice
 * over triads with the pedal, the second time with a low note and a chord in turns. Epic puts thirds and
 * sixths under the tune over a rolling broken chord, then plays it in three-note chords. Legendary sets it in
 * octaves over an octave bass, then in four-note chords over arpeggios that span two octaves.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 4/4, in quarters: the print's eight bars with every length doubled. */
const tune =
  "E4:2 E4:1 E4:1 | E4:2 E4:2 | E4:2 E4:1 E4:1 | E4:2 E4:2 | E4:2 E4:1 F#4:1 | G4:2 G4:2 | G4:2 G4:1 G4:1 | G4:2 r:2";

/** The tune in the right hand, in quarters, fingered from the thumb on E. The hand never moves. */
const RIGHT_TUNE =
  "E4/1:2 E4/1:1 E4/1:1 | E4/1:2 E4/1:2 | E4/1:2 E4/1:1 E4/1:1 | E4/1:2 E4/1:2 | " +
  "E4/1:2 E4/1:1 F#4/2:1 | G4/3:2 G4/3:2 | G4/3:2 G4/3:1 G4/3:1 | G4/3:2 r:2";

/** The four closing bars of Common and Rare, in quarters: the rhythm climbs to A over C, A minor and E. */
const RIGHT_CLOSE = "G4/3:2 G4/3:1 G4/3:1 | A4/4:2 A4/4:2 | B4/5:2 B4/5:1 B4/5:1";

/** One bar of a chord in eighths, in the tune's long, short, short rhythm. */
function longShortShort(chord: string): string {
  return `${chord}:4 ${chord}:2 ${chord}:2`;
}

/** One bar of a chord in eighths, as two long notes. */
function longLong(chord: string): string {
  return `${chord}:4 ${chord}:4`;
}

/** One bar of a chord in eighths, long, short, short, with an eighth's rest at its end for the hand to travel. */
function detachedLongShortShort(chord: string): string {
  return `${chord}:4 ${chord}:2 ${chord}:1 r:1`;
}

/** One bar of a chord in eighths, long, long, with an eighth's rest at its end for the hand to travel. */
function detachedLongLong(chord: string): string {
  return `${chord}:4 ${chord}:3 r:1`;
}

/** One bar of Alberti bass in eighths: low, high, middle, high, twice. */
function alberti(low: string, middle: string, high: string): string {
  const half = `${low}/5:1 ${high}/1:1 ${middle}/3:1 ${high}/1:1`;
  return `${half} ${half}`;
}

/** One bar of an arpeggio in eighths over six notes: up, one step down, and a rest to jump back. Finger 3 crosses over the thumb. */
function arpeggio(notes: string): string {
  const [n0, n1, n2, n3, n4, n5] = notes.split(" ");
  return `${n0}/5:1 ${n1}/2:1 ${n2}/1:1 ${n3}/3:1 ${n4}/2:1 ${n5}/1:1 ${n4}/2:1 r:1`;
}

/** The pedal for the tune's eight bars in eighths: changed on every bar line and at every new chord. */
const PEDAL_TUNE = "P:8 | P:8 | P:8 | P:8 | P:6 P:2 | P:8 | P:2 P:2 P:4 | P:8";

/** The pedal for the four closing bars in eighths. */
const PEDAL_CLOSE = "P:8 | P:8 | P:4 P:4 | P:8";

/** Epic's left hand for the tune's eight bars: an Alberti bass on the print's chords. */
const EPIC_LEFT = [
  alberti("A2", "C3", "E3"),
  "G#2/5:1 E3/1:1 B2/2:1 E3/1:1 G#2/5:1 E3/1:1 B2/2:1 E3/1:1",
  "E2/5:1 E3/1:1 B2/2:1 E3/1:1 E2/5:1 E3/1:1 B2/2:1 E3/1:1",
  alberti("A2", "C3", "E3"),
  "A2/5:1 E3/1:1 C3/3:1 E3/1:1 A2/5:1 E3/1:1 A2/5:1 F#3/1:1",
  alberti("G2", "C3", "E3"),
  "G2/5:1 D3/1:1 A2/4:1 C3/2:1 G2/5:1 D3/1:1 B2/3:1 D3/1:1",
  alberti("C3", "E3", "G3"),
].join(" | ");

export const beethoven7Allegretto: OurSong = {
  slug: "beethoven-7-allegretto",
  title: "Symphony No. 7: Allegretto",
  aka: ["Beethoven 7", "Symphony No. 7"],
  source: {
    composer: "Ludwig van Beethoven",
    died: 1827,
    published: 1816,
    edition: "Symphony No. 7 in A major, Op. 92, second movement, as Wikipedia's article on the symphony prints its opening bars",
  },
  about:
    "Beethoven wrote his Seventh Symphony in 1811 and 1812. " +
    "At its premiere in Vienna in December 1813, the audience demanded to hear the Allegretto again. " +
    "The film The King's Speech (2010) plays it under the King's wartime radio speech.",
  funFact: "The tune first sounds low, in the violas and cellos.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 4, key: A_MINOR, hookBars: [1, 8] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      right: `${RIGHT_TUNE} | ${RIGHT_CLOSE} | A4/4:4`,
      left: [
        "A2+E3/4+1:4 | B2+E3/3+1:4 | B2+E3/3+1:4 | A2+E3/4+1:4",
        "A2+E3/4+1:4 | G2+C3/5+2:4 | G2/5:4 | C3/2:4",
        "C3/2:4 | A2+E3/4+1:4 | B2+E3/3+1:4 | A2+E3/4+1:4",
      ].join(" | "),
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 4 with the right hand alone. Your thumb plays every E.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, where the tune climbs to G.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds one shape in each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: 'Say "long, short, short" as you play the first bar. That rhythm is the whole piece.' },
        { fromBar: 5, toBar: 6, kind: "fingering", text: "Your hand never moves. Fingers 1, 2 and 3 play E, F sharp and G." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Start very softly, and let each bar grow a little louder." },
      ],
      tricky: {
        10: "Finger 4 plays A here. Keep the hand still, and let only the finger reach up.",
        11: "Finger 5 plays B three times. Keep it curved, so the smallest finger stays strong.",
        12: "Finger 4 comes back to A for the last note. Hold it for four beats.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 132,
      numerator: 4,
      denominator: 4,
      right: [
        RIGHT_TUNE,
        "E4/1:2 E4/1:1 E4/1:1 | E4/1:2 E4/1:2 | E4/1:2 E4/1:1 E4/1:1 | E4/1:2 E4/1:2",
        "E4/1:2 E4/1:1 F#4/2:1 | E4+G4/1+3:2 E4+G4/1+3:2 | G4/3:2 G4/3:1 G4/3:1 | E4+G4/1+3:2 r:2",
        RIGHT_CLOSE,
        "E4+A4/1+4:4",
      ].join(" | "),
      left: [
        "A2+C3+E3/4+2+1:4 | G#2+B2+E3/5+3+1:4 | G#2+B2+E3/5+3+1:4 | A2+C3+E3/4+2+1:4",
        "A2+C3+E3/4+2+1:4 | G2+C3+E3/5+3+1:4 | G2+D3/5+2:4 | G2+C3+E3/5+3+1:4",
        "A2/4:1 C3+E3/2+1:1 A2/4:1 C3+E3/2+1:1 | G#2/5:1 B2+E3/3+1:1 G#2/5:1 B2+E3/3+1:1",
        "G#2/5:1 B2+E3/3+1:1 G#2/5:1 B2+E3/3+1:1 | A2/4:1 C3+E3/2+1:1 A2/4:1 C3+E3/2+1:1",
        "A2/4:1 C3+E3/2+1:1 A2/4:1 C3+E3/2+1:1 | G2/5:1 C3+E3/3+1:1 G2/5:1 C3+E3/3+1:1",
        "G2/5:1 D3/2:1 G2/5:1 D3/2:1 | G2/5:1 C3+E3/3+1:1 G2/5:1 C3+E3/3+1:1",
        "G2+C3+E3/5+3+1:4 | A2+C3+E3/4+2+1:4 | G#2+B2+E3/5+3+1:4 | A2+C3+E3/4+2+1:4",
      ].join(" | "),
      pedal: Array(20).fill("P:4").join(" | "),
      skills: ["triads", "pedal", "two-note-chords"],
      practice: [
        { text: 'Play the right hand alone on the first eight bars, and count "long, short, short".', hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone. Each bar holds one chord of three notes.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, with the pedal.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the second half, where the left hand plays a low note and a chord in turns.", hands: "both", speed: 0.7, loop: [9, 20], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 6, toBar: 6, kind: "fingering", text: "The left hand moves down a little here. Finger 5 goes from G sharp to G." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Hold the pedal down for each whole bar, and change it right on the bar line." },
        { fromBar: 9, toBar: 16, kind: "rhythm", text: "The left hand plays on every beat now. Keep it even, like a slow march." },
      ],
      tricky: {
        10: "The left hand plays G sharp with finger 5, then B and E together. Keep the hand still.",
        15: "The left hand rocks between G and D with fingers 5 and 2.",
        16: "Play E and G together with fingers 1 and 3. Then lift the right hand in the rest.",
      },
    },
    epic: {
      key: A_MINOR,
      bpm: 138,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "C4+E4/1+3:4 C4+E4/1+3:2 C4+E4/1+3:2 | G#3+E4/1+5:4 B3+E4/2+5:4",
        "G#3+E4/1+5:4 B3+E4/2+5:2 G#3+E4/1+5:2 | A3+E4/1+5:4 C4+E4/2+5:4",
        "C4+E4/2+5:4 A3+E4/1+5:2 D4+F#4/2+5:2 | C4+G4/1+5:4 E4+G4/3+5:4",
        "D4+G4/2+5:4 D4+G4/2+5:2 B3+G4/1+5:2 | E4+G4/3+5:4 r:4",
        `${longShortShort("A3+C4+E4/1+2+4")} | ${longLong("G#3+B3+E4/1+2+5")}`,
        `${longShortShort("G#3+B3+E4/1+2+5")} | ${longLong("A3+C4+E4/1+2+4")}`,
        "A3+C4+E4/1+2+4:4 A3+C4+E4/1+2+4:2 A3+D4+F#4/1+3+5:2 | " + longLong("C4+E4+G4/1+3+5"),
        `${longShortShort("B3+D4+G4/1+2+5")} | C4+E4+G4/1+3+5:4 r:4`,
        `${longShortShort("C4+F4+A4/1+2+5")} | ${longLong("B3+E4+G#4/1+2+5")}`,
        "C4+E4+A4/1+2+5:4 B3+E4+G#4/1+2+5:4 | C4+E4+A4/1+2+5:8",
      ].join(" | "),
      left: [
        EPIC_LEFT,
        EPIC_LEFT,
        alberti("F2", "A2", "C3"),
        "E2/5:1 B2/1:1 G#2/3:1 B2/1:1 E2/5:1 B2/1:1 G#2/3:1 B2/1:1",
        "A2/5:1 E3/1:1 C3/3:1 E3/1:1 E2/5:1 B2/1:1 G#2/3:1 B2/1:1",
        "A2+E3+A3/5+2+1:8",
      ].join(" | "),
      pedal: `${PEDAL_TUNE} | ${PEDAL_TUNE} | ${PEDAL_CLOSE}`,
      skills: ["alberti-bass", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the left hand alone until the broken chords roll by themselves: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 8], wait: false },
        { text: "Play the right hand's pairs alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the broken chords soft, so the repeated E sings above them." },
        { fromBar: 5, toBar: 5, kind: "sound", text: "Change the pedal on the last beat, where the chord turns to D major." },
        { fromBar: 7, toBar: 7, kind: "sound", text: "Change the pedal three times in this bar, once for each new chord." },
      ],
      tricky: {
        17: "Fingers 1, 2 and 5 take C, F and A. The left hand rolls an F major chord below.",
        19: "The chord changes halfway through the bar. Change the pedal with it.",
        20: "Spread the left hand over the octave: finger 5 on A, finger 2 on E and the thumb on the high A.",
      },
    },
    legendary: {
      key: A_MINOR,
      bpm: 144,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        `${longShortShort("E4+C5+E5/1+3+5")} | ${longLong("E4+B4+E5/1+3+5")}`,
        `${longShortShort("E4+B4+E5/1+3+5")} | ${longLong("E4+C5+E5/1+3+5")}`,
        "E4+C5+E5/1+3+5:4 E4+C5+E5/1+3+5:2 F#4+D5+F#5/1+3+5:2 | " + longLong("G4+E5+G5/1+3+5"),
        `${longShortShort("G4+D5+G5/1+3+5")} | G4+E5+G5/1+3+5:4 r:4`,
        `${longShortShort("E4+A4+C5+E5/1+2+3+5")} | ${longLong("E4+G#4+B4+E5/1+2+3+5")}`,
        `${longShortShort("E4+G#4+B4+E5/1+2+3+5")} | ${longLong("E4+A4+C5+E5/1+2+3+5")}`,
        "E4+A4+C5+E5/1+2+3+5:4 E4+A4+C5+E5/1+2+3+5:2 F#4+A4+D5+F#5/1+2+3+5:2 | " + longLong("G4+C5+E5+G5/1+2+4+5"),
        `${longShortShort("G4+B4+D5+G5/1+2+3+5")} | G4+C5+E5+G5/1+2+4+5:4 r:4`,
        `${longShortShort("A4+C5+F5+A5/1+2+4+5")} | ${longLong("G#4+B4+E5+G#5/1+2+4+5")}`,
        "A4+C5+E5+A5/1+2+4+5:4 G#4+B4+E5+G#5/1+2+4+5:4 | A4+C5+E5+A5/1+2+4+5:8",
      ].join(" | "),
      left: [
        `${detachedLongShortShort("A1+E2+A2/5+2+1")} | ${detachedLongLong("G#1+E2+G#2/5+2+1")}`,
        `${detachedLongShortShort("E1+B1+E2/5+2+1")} | ${detachedLongLong("A1+E2+A2/5+2+1")}`,
        `${detachedLongShortShort("A1+E2+A2/5+2+1")} | ${detachedLongLong("G1+E2+G2/5+2+1")}`,
        `${detachedLongShortShort("G1+D2+G2/5+2+1")} | C2+G2+C3/5+2+1:4 r:4`,
        `${arpeggio("A1 E2 A2 C3 E3 A3")} | ${arpeggio("E1 B1 E2 G#2 B2 E3")}`,
        `${arpeggio("E1 B1 E2 G#2 B2 E3")} | ${arpeggio("A1 E2 A2 C3 E3 A3")}`,
        `A1/5:1 E2/2:1 A2/1:1 C3/3:1 E3/2:1 A3/1:1 F#3/2:1 r:1 | ${arpeggio("C2 G2 C3 E3 G3 C4")}`,
        `${arpeggio("G1 D2 G2 B2 D3 G3")} | C2/5:1 G2/2:1 C3/1:1 E3/3:1 G3/2:1 C4/1:1 r:2`,
        `${detachedLongShortShort("F1+C2+F2/5+2+1")} | ${detachedLongLong("E1+B1+E2/5+2+1")}`,
        "A1+E2+A2/5+2+1:3 r:1 E1+B1+E2/5+2+1:3 r:1 | A1+E2+A2/5+2+1:8",
      ].join(" | "),
      pedal: `${PEDAL_TUNE} | ${PEDAL_TUNE} | ${PEDAL_CLOSE}`,
      skills: ["melody-in-chords", "octave-bass", "arpeggios"],
      practice: [
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the left hand's arpeggios alone. The thumb passes under, and finger 3 crosses over.", hands: "left", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Join the hands on bars 9 to 16, slowly.", hands: "both", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the top note of each octave a little louder, so the tune stands out." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "Spread the right hand over a whole octave for each chord, with the thumb and finger 5 on the outside." },
        { fromBar: 17, toBar: 20, kind: "trick", text: "The tune climbs to A for the ending. Let the last chord ring with the pedal." },
      ],
      tricky: {
        10: "The left hand starts on a low E. Use the rest at the end of bar 9 to jump down.",
        15: "Finger 3 crosses over the thumb onto B. Keep the wrist level as the hand climbs.",
        17: "Fingers 1, 2, 4 and 5 take A, C, F and A. Lift the left hand in each short rest.",
      },
    },
  },
  de: {
    about:
      "Beethoven schrieb seine Siebte Sinfonie 1811 und 1812. " +
      "Bei der Uraufführung in Wien im Dezember 1813 verlangte das Publikum, das Allegretto noch einmal zu hören. " +
      "Der Film The King's Speech (2010) spielt es unter der Radioansprache des Königs im Krieg.",
    funFact: "Die Melodie erklingt zuerst tief, in den Bratschen und Celli.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 4 nur mit der rechten Hand. Dein Daumen spielt jedes E.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Dort steigt die Melodie zum G.",
          "Jetzt die linke Hand allein. Sie hält in jedem Takt eine Griffform.",
          "Nimm beide Hände zusammen, langsam.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          'Sag "lang, kurz, kurz", während du den ersten Takt spielst. Dieser Rhythmus ist das ganze Stück.',
          "Deine Hand bewegt sich nie. Finger 1, 2 und 3 spielen E, Fis und G.",
          "Fang ganz leise an, und lass jeden Takt ein wenig lauter werden.",
        ],
        tricky: {
          10: "Finger 4 spielt hier das A. Halt die Hand still, und lass nur den Finger hinaufgreifen.",
          11: "Finger 5 spielt dreimal das H. Halt ihn gebogen, damit der kleinste Finger kräftig bleibt.",
          12: "Finger 4 kehrt für den letzten Ton zum A zurück. Halt ihn vier Schläge lang.",
        },
      },
      rare: {
        practice: [
          'Spiel die ersten acht Takte nur mit der rechten Hand, und zähl "lang, kurz, kurz".',
          "Spiel die linke Hand allein. Jeder Takt hält einen Akkord aus drei Tönen.",
          "Spiel die ersten acht Takte mit beiden Händen und mit Pedal.",
          "Spiel die zweite Hälfte. Dort spielt die linke Hand abwechselnd einen tiefen Ton und einen Akkord.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Hier rückt die linke Hand ein wenig nach unten. Finger 5 geht vom Gis zum G.",
          "Halt das Pedal jeweils einen ganzen Takt, und wechsle es genau am Taktstrich.",
          "Die linke Hand spielt jetzt auf jeden Schlag. Halt sie gleichmäßig, wie einen langsamen Marsch.",
        ],
        tricky: {
          10: "Die linke Hand spielt Gis mit Finger 5, dann H und E zusammen. Halt die Hand still.",
          15: "Die linke Hand wiegt sich mit Finger 5 und 2 zwischen G und D.",
          16: "Spiel E und G zusammen mit Finger 1 und 3. Dann heb die rechte Hand in der Pause an.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein, bis die gebrochenen Akkorde von selbst rollen: tief, hoch, Mitte, hoch.",
          "Spiel die Zweiklänge der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt die gebrochenen Akkorde leise, damit das wiederholte E darüber singt.",
          "Wechsle das Pedal auf dem letzten Schlag. Dort wird der Akkord zu D-Dur.",
          "Wechsle das Pedal in diesem Takt dreimal, einmal für jeden neuen Akkord.",
        ],
        tricky: {
          17: "Finger 1, 2 und 5 nehmen C, F und A. Die linke Hand rollt darunter einen F-Dur-Akkord.",
          19: "Der Akkord wechselt in der Mitte des Takts. Wechsle das Pedal mit ihm.",
          20: "Spann die linke Hand über die Oktave: Finger 5 auf A, Finger 2 auf E und den Daumen auf das hohe A.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel die Arpeggien der linken Hand allein. Der Daumen geht unter, und Finger 3 kreuzt darüber.",
          "Spiel die Takte 9 bis 16 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Spiel den oberen Ton jeder Oktave etwas lauter, damit die Melodie heraussticht.",
          "Spann die rechte Hand für jeden Akkord über eine ganze Oktave, mit Daumen und Finger 5 außen.",
          "Für den Schluss steigt die Melodie zum A. Lass den letzten Akkord mit Pedal klingen.",
        ],
        tricky: {
          10: "Die linke Hand beginnt auf einem tiefen E. Nutz die Pause am Ende von Takt 9, um hinunterzuspringen.",
          15: "Finger 3 kreuzt über den Daumen auf das H. Halt das Handgelenk ruhig, während die Hand steigt.",
          17: "Finger 1, 2, 4 und 5 nehmen A, C, F und A. Heb die linke Hand in jeder kurzen Pause an.",
        },
      },
    },
  },
};

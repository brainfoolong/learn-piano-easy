/**
 * *Row Row Row Your Boat*: the round Eliphalet Oram Lyte published in 1881, in four versions of ours.
 *
 * The tune is its eight bars in C major. The edition writes it in 6/8, and the tune here doubles every
 * length into 6/4, so its eighths are quarters and Common needs nothing faster. Every version shares
 * that time, so the tune matches each one tick for tick. The hook is its first two bars.
 *
 * Common holds each note of bars 5 and 6 for a beat over a held bass, so it moves near the sung tempo.
 * Rare plays the tune twice over triads. Epic puts an Alberti bass in quarters with the pedal under it,
 * then gives the tune to the left hand. Legendary sets the tune in chords over an octave bass, then plays
 * it as a round, the left hand first.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 6/4, in quarters. */
const tune =
  "C4:3 C4:3 | C4:2 D4:1 E4:3 | E4:2 D4:1 E4:2 F4:1 | G4:6 | " +
  "C5:1 C5:1 C5:1 G4:1 G4:1 G4:1 | E4:1 E4:1 E4:1 C4:1 C4:1 C4:1 | G4:2 F4:1 E4:2 D4:1 | C4:6";

/** The tune in the right hand, in quarters, with the fingers of a beginner. */
const RIGHT_QUARTERS =
  "C4/1:3 C4/1:3 | C4/1:2 D4/2:1 E4/3:3 | E4/3:2 D4/2:1 E4/3:2 F4/4:1 | G4/5:6 | " +
  "C5/5:1 C5/5:1 C5/5:1 G4/3:1 G4/3:1 G4/3:1 | E4/2:1 E4/2:1 E4/2:1 C4/1:1 C4/1:1 C4/1:1 | G4/5:2 F4/4:1 E4/3:2 D4/2:1 | C4/1:6";

/** The tune in the right hand for Common: bars 5 and 6 hold one note a beat, and the rest is the tune. */
const COMMON_RIGHT =
  "C4/1:3 C4/1:3 | C4/1:2 D4/2:1 E4/3:3 | E4/3:2 D4/2:1 E4/3:2 F4/4:1 | G4/5:6 | " +
  "C5/5:3 G4/3:3 | E4/2:3 C4/1:3 | G4/5:2 F4/4:1 E4/3:2 D4/2:1 | C4/1:6";

/** A bar of Alberti bass in quarters on C major, on C major with C and G last, or on G major. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:2 G3/1:2 E3/3:2 G3/1:2 E3/3:2 G3/1:2",
  c: "C3/5:2 G3/1:2 E3/3:2 G3/1:2 C3/5:2 G3/1:2",
  G: "B2/5:2 G3/1:2 D3/3:2 G3/1:2 D3/3:2 G3/1:2",
};

/** A bar of broken chord in the right hand in quarters on C major, on C major with G and C last, or on G major. */
const BROKEN: Record<string, string> = {
  C: "E4/1:2 G4/2:2 C5/5:2 G4/2:2 E4/1:2 G4/2:2",
  c: "E4/1:2 G4/2:2 C5/5:2 G4/2:2 C5/5:2 G4/2:2",
  G: "D4/1:2 G4/3:2 B4/5:2 G4/3:2 D4/1:2 G4/3:2",
};

/** Bars of `patterns` from `chords`, such as `"CCc"`: one letter per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  return [...chords].map((chord) => patterns[chord]).join(" | ");
}

/** The tune in the left hand, an octave down, in eighths, but for its last bar. */
const LEFT_TUNE =
  "C3/5:6 C3/5:6 | C3/5:4 D3/4:2 E3/3:6 | E3/3:4 D3/4:2 E3/3:4 F3/2:2 | G3/1:12 | " +
  "C4/1:2 C4/1:2 C4/1:2 G3/2:2 G3/2:2 G3/2:2 | E3/3:2 E3/3:2 E3/3:2 C3/5:2 C3/5:2 C3/5:2 | G3/1:4 F3/2:2 E3/3:4 D3/4:2";

export const rowRowRowYourBoat: OurSong = {
  slug: "row-row-row-your-boat",
  title: "Row Row Row Your Boat",
  source: {
    composer: "Eliphalet Oram Lyte",
    died: 1913,
    published: 1881,
    edition: "The Franklin Square Song Collection (1881)",
  },
  about:
    "This is one of the best-known children's songs in the English-speaking world. " +
    "Eliphalet Oram Lyte published the tune we sing today in 1881, in The Franklin Square Song Collection. " +
    "It walks up the first five notes of the scale, then tumbles down a whole octave.",
  funFact: "The song is a round: a second voice starts the same tune two bars later, and the two parts fit together.",
  mythic: null,
  tune: { text: tune, numerator: 6, denominator: 4, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 264,
      numerator: 6,
      denominator: 4,
      right: COMMON_RIGHT,
      left: "C3/2:6 | C3/2:6 | C3/2:6 | C3/2:6 | C3/2:6 | C3/2:6 | G2/5:6 | C3/2:6",
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the right hand alone, slowly, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, where the tune runs down.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Put both hands together. The left hand only holds a long low note.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "fingering", text: "Each finger has its own key here: thumb on C, little finger on G." },
        { fromBar: 4, toBar: 4, kind: "rhythm", text: "The G lasts the whole bar, so count all six beats before you move." },
        { fromBar: 5, toBar: 6, kind: "rhythm", text: "Each note here lasts three beats, so count to three on every key." },
      ],
      tricky: {
        5: "Move the hand up during the long G, so the little finger lands on the high C.",
        6: "Hold E with finger 2, then C with the thumb, for three beats each. Keep the hand still.",
        7: "The little finger finds G again, and the tune walks down: 5, 4, 3, 2.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 240,
      numerator: 6,
      denominator: 4,
      right: `${RIGHT_QUARTERS} | ${RIGHT_QUARTERS}`,
      left: [
        "C3+E3+G3/5+3+1:6 | C3+E3+G3/5+3+1:6 | C3/5:3 G3/1:3 | C3+E3+G3/5+3+1:6",
        "C3+E3+G3/5+3+1:6 | C3+E3+G3/5+3+1:6 | B2+D3+G3/5+3+1:6 | C3+E3+G3/5+3+1:6",
        "C3/5:3 E3+G3/3+1:3 | C3/5:3 E3+G3/3+1:3 | C3/5:3 G3/1:3 | C3/5:3 E3+G3/3+1:3",
        "C3/5:3 E3+G3/3+1:3 | C3/5:3 E3+G3/3+1:3 | B2/5:3 D3+G3/3+1:3 | C3+E3+G3/5+3+1:6",
      ].join(" | "),
      skills: ["triads", "five-finger-position"],
      practice: [
        { text: "Play the left hand alone, and press the three notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand of the second half, where a bass note comes before each chord.", hands: "left", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 7, toBar: 7, kind: "fingering", text: "The chord moves to G. The thumb stays on G, and the other two fingers each step down one key." },
        { fromBar: 9, toBar: 15, kind: "rhythm", text: "The bass note falls on beat one, and the notes above it on beat four." },
        { fromBar: 5, toBar: 6, kind: "sound", text: "Let the falling notes get a little softer, like a boat drifting away." },
      ],
      tricky: {
        5: "Move the right hand up during the long G, so the little finger lands on the high C.",
        7: "In the left hand, the little finger slides from C to B and the third finger from E to D.",
        13: "The high C comes back. Move the right hand up during the long G of bar 12.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 300,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [
        "C4/1:6 C4/1:6 | C4/1:4 D4/2:2 E4/3:6 | E4/3:4 D4/2:2 E4/3:4 F4/4:2 | G4/5:12",
        "C5/5:2 C5/5:2 C5/5:2 G4/3:2 G4/3:2 G4/3:2 | E4/2:2 E4/2:2 E4/2:2 C4/1:2 C4/1:2 C4/1:2 | G4/5:4 F4/4:2 E4/3:4 D4/2:2 | C4/1:12",
        bars(BROKEN, "CCcCCCG"),
        "E4+G4+C5/1+2+5:12",
      ].join(" | "),
      left: `${bars(ALBERTI, "CCcCCCGC")} | ${LEFT_TUNE} | C3/5:12`,
      pedal: "P:6 P:6 | ".repeat(8) + "r:12 | ".repeat(7) + "r:12",
      skills: ["alberti-bass", "pedal", "left-hand-melody"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the tune in the left hand alone, from bar 9.", hands: "left", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Lift the pedal and press it again on beats one and four." },
        { fromBar: 9, toBar: 16, kind: "trick", text: "The tune moves to the left hand. Play it louder than the right hand's broken chords." },
      ],
      tricky: {
        5: "Move the right hand up during the long G, so the little finger is ready on the high C.",
        9: "Both hands change jobs here: the left hand takes the tune, and the right hand takes the chords.",
        13: "Your left thumb reaches up to middle C, then the hand walks down with 2, 3 and 5.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 324,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [
        "E4+G4+C5/1+2+5:6 E4+G4+C5/1+2+5:6 | E4+G4+C5/1+2+5:4 D5/5:2 G4+C5+E5/1+3+5:6",
        "G4+C5+E5/1+3+5:4 D5/4:2 G4+C5+E5/1+3+5:4 A4+C5+F5/1+2+5:2 | C5+E5+G5/1+3+5:11 r:1",
        "C6/5:2 C6/5:2 C6/5:2 G5/3:2 G5/3:2 G5/3:2 | E5/2:2 E5/2:2 E5/2:2 C5/1:2 C5/1:2 C5/1:2",
        "B4+D5+G5/1+2+5:4 F5/4:2 C5+E5/1+3:4 B4+D5/1+2:1 r:1 | E4+G4+C5/1+2+5:12",
        "r:12 | r:12",
        "C5/1:6 C5/1:6 | C5/1:4 D5/2:2 E5/3:6 | E5/3:4 D5/2:2 E5/3:4 F5/4:2 | G5/5:12",
        "C6/5:2 C6/5:2 C6/5:2 G5/3:2 G5/3:2 G5/3:2 | E5/2:2 E5/2:2 E5/2:2 C5/1:2 C5/1:2 C5/1:2 | G5/5:4 F5/4:2 E5/3:4 D5/2:1 r:1",
        "C4+E4+G4+C5/1+2+3+5:12",
      ].join(" | "),
      left: [
        "C2+C3/5+1:5 r:1 G1+G2/5+1:5 r:1 | ".repeat(6) + "G1+G2/5+1:5 r:1 D2+D3/5+1:5 r:1 | C2+C3/5+1:11 r:1",
        LEFT_TUNE,
        "C3/5:11 r:1 | G1+G2/5+1:11 r:1 | C2+C3/5+1:12",
      ].join(" | "),
      skills: ["melody-in-chords", "octave-bass", "counter-melody"],
      practice: [
        { text: "Play the right hand's chords alone, and let the little finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the left hand alone from bar 9, where it starts the round.", hands: "left", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the round, slowly, and listen for the two voices.", hands: "both", speed: 0.5, loop: [9, 18], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
        { fromBar: 9, toBar: 10, kind: "trick", text: "The left hand starts the round alone. The right hand waits two bars." },
        { fromBar: 11, toBar: 18, kind: "sound", text: "Each hand plays the whole tune. Let both voices be heard." },
      ],
      tricky: {
        5: "Lift the hand off the chord of bar 4, and land with the little finger on the high C.",
        17: "The right hand ends the tune over a low G. Lift it after the D, ready for the last chord.",
        18: "Spread the right hand over a whole octave for the last chord: C, E, G and C.",
      },
    },
  },
  de: {
    about:
      "Dies ist eines der bekanntesten Kinderlieder im englischen Sprachraum. " +
      "Eliphalet Oram Lyte veröffentlichte die heute gesungene Melodie 1881 in The Franklin Square Song Collection. " +
      "Sie steigt die ersten fünf Töne der Tonleiter hinauf und purzelt dann eine ganze Oktave hinab.",
    funFact: "Das Lied ist ein Kanon: Eine zweite Stimme beginnt dieselbe Melodie zwei Takte später, und beide Stimmen passen zusammen.",
    versions: {
      common: {
        practice: [
          "Spiel die rechte Hand allein und langsam, und lass das Lied auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Dort läuft die Melodie abwärts.",
          "Nimm beide Hände zusammen. Die linke Hand hält nur einen langen tiefen Ton.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Hier hat jeder Finger seine eigene Taste: der Daumen auf C, der kleine Finger auf G.",
          "Das G dauert den ganzen Takt, also zähl alle sechs Schläge, bevor du weitergehst.",
          "Jeder Ton dauert hier drei Schläge, also zähl auf jeder Taste bis drei.",
        ],
        tricky: {
          5: "Verschieb die Hand während des langen G nach oben, damit der kleine Finger auf dem hohen C landet.",
          6: "Halt das E mit Finger 2 und dann das C mit dem Daumen, je drei Schläge lang. Lass die Hand ruhig.",
          7: "Der kleine Finger findet wieder das G, und die Melodie wandert abwärts: 5, 4, 3, 2.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein, und drück die drei Töne jedes Akkords zusammen.",
          "Spiel die linke Hand der zweiten Hälfte. Dort kommt vor jedem Akkord ein Basston.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Der Akkord wechselt nach G. Der Daumen bleibt auf G, und die anderen zwei Finger gehen je eine Taste abwärts.",
          "Der Basston kommt auf Schlag eins, die Töne darüber auf Schlag vier.",
          "Lass die fallenden Töne etwas leiser werden, wie ein Boot, das davontreibt.",
        ],
        tricky: {
          5: "Verschieb die rechte Hand während des langen G nach oben, damit der kleine Finger auf dem hohen C landet.",
          7: "In der linken Hand gleitet der kleine Finger von C nach H und Finger 3 von E nach D.",
          13: "Das hohe C kommt zurück. Verschieb die rechte Hand während des langen G in Takt 12 nach oben.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel ab Takt 9 die Melodie in der linken Hand allein.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise, damit die Melodie darüber singt.",
          "Heb das Pedal auf Schlag eins und auf Schlag vier an, und tritt es gleich wieder.",
          "Die Melodie wandert in die linke Hand. Spiel sie lauter als die gebrochenen Akkorde der rechten Hand.",
        ],
        tricky: {
          5: "Verschieb die rechte Hand während des langen G nach oben, damit der kleine Finger auf dem hohen C bereit ist.",
          9: "Hier tauschen die Hände ihre Aufgaben: Die linke Hand übernimmt die Melodie, die rechte die Akkorde.",
          13: "Dein linker Daumen greift hinauf zum mittleren C, dann wandert die Hand mit 2, 3 und 5 abwärts.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Akkorde der rechten Hand allein, und lass den kleinen Finger die Melodie singen.",
          "Spiel ab Takt 9 die linke Hand allein. Dort beginnt sie den Kanon.",
          "Spiel den Kanon langsam mit beiden Händen zusammen, und hör auf die zwei Stimmen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
          "Die linke Hand beginnt den Kanon allein. Die rechte Hand wartet zwei Takte.",
          "Jede Hand spielt die ganze Melodie. Lass beide Stimmen gut hörbar sein.",
        ],
        tricky: {
          5: "Heb die Hand vom Akkord in Takt 4 ab, und setz den kleinen Finger auf das hohe C.",
          17: "Die rechte Hand beendet die Melodie über einem tiefen G. Heb sie nach dem D ab, bereit für den letzten Akkord.",
          18: "Spann die rechte Hand für den letzten Akkord über eine ganze Oktave: C, E, G und C.",
        },
      },
    },
  },
};

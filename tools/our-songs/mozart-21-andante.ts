/**
 * *Piano Concerto No. 21: Andante*: the first theme of the slow movement of Mozart's concerto K. 467, in
 * four versions of ours.
 *
 * The tune is the melody of the print's bars 2 to 7, in F major. The print is in 4/4 with sixteenths. The
 * tune makes every sixteenth a quarter, so Common needs nothing faster, and reads each print bar as one bar
 * of 4/1. Every version keeps that bar, so the long C of bar 2 never crosses a bar line. A beat is a whole
 * note, one beat of the print. The hook is bars 1 to 3. The chords are the print's: F major, then C seventh
 * in bars 3 to 5, then home. The bars after the tune are ours, over F, B flat, C seventh and F.
 *
 * Common plays the tune once over held roots and open fifths. Its short C in bar 1 ends early, so the hand
 * has a breath to reach the high A. Rare plays it twice over a bass note and its chord on every beat, as the
 * print's strings repeat theirs. Epic rolls triplet broken chords under it with the pedal, then adds sixths
 * and thirds under the tune. Legendary plucks an octave bass under soft triplet chords, then plays the tune
 * with its sixths and thirds an octave up, over arpeggios of two octaves. It closes on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const F_MAJOR: Key = { tonic: 5, mode: "major" };

/** The tune in 4/1, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune =
  "F5:7 C5:1 A5:7 F5:1 | C6:12 D6:1 C6:1 Bb5:1 A5:1 | F#5:4 G5:4 r:8 | C5:8 E5:4 G5:4 | Bb5:8 Bb5:2 D6:2 C6:2 Bb5:2 | G#5:2 A5:2 A5:4 r:8";

/** The tune in the right hand, in quarters, with every note fingered. */
const RIGHT_QUARTERS =
  "F5/2:7 C5/1:1 A5/5:7 F5/1:1 | C6/4:12 D6/5:1 C6/4:1 Bb5/3:1 A5/2:1 | F#5/1:4 G5/2:4 r:8 | " +
  "C5/1:8 E5/2:4 G5/3:4 | Bb5/3:8 Bb5/3:2 D6/5:2 C6/4:2 Bb5/3:2 | G#5/2:2 A5/4:2 A5/4:4 r:8";

/** `text` with every length three times as long, so a line in quarters reads in triplet eighths. */
function inTriplets(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${3 * Number(units)}`);
}

/** `text` an octave up: every note name's octave plus one. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** Epic's second time through the tune, in triplet eighths, with sixths and thirds under its long notes. */
const EPIC_SECOND = [
  "A4+F5/1+3:21 C5/1:3 F5+A5/2+5:21 F5/1:3",
  "A5+C6/2+4:36 D6/5:3 C6/4:3 Bb5/3:3 A5/2:3",
  "F#5/1:12 E5+G5/1+2:12 r:24",
  "C5/1:24 E5/2:12 C5+G5/1+3:12",
  "D5+Bb5/1+3:24 Bb5/3:6 D6/5:6 C6/4:6 Bb5/3:6",
  "G#5/2:6 A5/4:6 C5+F5+A5/1+2+4:12 r:24",
].join(" | ");

/** Epic's first bars of our own after the tune, in triplet eighths: F, B flat, and C seventh up to its last beat. */
const EPIC_OWN = "A5/3:12 C6/5:12 Bb5/4:6 A5/3:6 G5/2:6 F5/1:6 | D6/5:24 Bb5/3:12 F5/1:12 | G5/2:12 Bb5/4:12 E5/1:12";

/** Rare's left hand for one bar of F: the root, then the chord on each other beat. */
const RARE_F = "F2/5:4 A2+C3/3+2:4 A2+C3/3+2:4 A2+C3/3+2:4";

/** Rare's left hand for one bar of C seventh: the root, then the chord on each other beat. */
const RARE_C = "C3/2:4 G2+C3+E3/4+2+1:4 G2+C3+E3/4+2+1:4 G2+C3+E3/4+2+1:4";

/** One bar of triplet broken chords from `notes`, low to high, fingered 5, 3, 1: three notes per beat. */
function rolling(notes: string): string {
  const [low, mid, high] = notes.split(" ");
  return Array(4).fill(`${low}/5:4 ${mid}/3:4 ${high}/1:4`).join(" ");
}

/** One bar of a plucked octave bass and two soft chords on each beat, in triplet eighths. */
function plucked(octave: string, chord: string): string {
  return Array(4).fill(`${octave}/5+1:2 r:2 ${chord}/5+3+1:4 ${chord}/5+3+1:2 r:2`).join(" ");
}

/** An arpeggio over two octaves of `notes` in triplet eighths: up and down, then a rest to jump. */
function wide(notes: string): string {
  const pitches = notes.split(" ");
  const fingers = [5, 2, 1, 3, 2, 1];
  return `${[0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0].map((at) => `${pitches[at]}/${fingers[at]}:4`).join(" ")} r:4`;
}

/** The pedal held for each whole bar of 4/1 in triplet eighths, for `count` bars. */
function pedalBars(count: number): string {
  return Array(count).fill("P:48").join(" | ");
}

export const mozart21Andante: OurSong = {
  slug: "mozart-21-andante",
  title: "Piano Concerto No. 21: Andante",
  aka: ["Elvira Madigan", "K. 467", "Klavierkonzert Nr. 21"],
  source: {
    composer: "Wolfgang Amadeus Mozart",
    died: 1791,
    published: 1855,
    edition:
      "Piano Concerto No. 21 in C major, K. 467, second movement, its first theme in bars 2 to 7, as a piano four-hands arrangement on Wikimedia Commons prints it. The year is that of J. B. Cramer's transcription (Richault, Paris), the earliest dated print read",
  },
  about:
    "Mozart completed this concerto on 9 March 1785, four weeks after the one before it. " +
    "Its slow movement, the Andante, sings a long tune over soft repeated chords. " +
    "The film Elvira Madigan (1967) plays it, and the concerto is now widely known by that name.",
  funFact: "Mozart finished the concerto only four weeks after his Piano Concerto No. 20.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 1, steps: 4, key: F_MAJOR, hookBars: [1, 3] },
  versions: {
    common: {
      key: F_MAJOR,
      bpm: 160,
      numerator: 4,
      denominator: 1,
      steps: 8,
      right: [
        "F5/2:14 C5/1:1 r:1 A5/5:14 F5/1:2 | C6/4:24 D6/5:2 C6/4:2 Bb5/3:2 A5/2:2 | F#5/1:8 G5/2:8 r:16",
        "C5/1:16 E5/2:8 G5/3:8 | Bb5/3:16 Bb5/3:4 D6/5:4 C6/4:4 Bb5/3:4 | G#5/2:4 A5/3:4 A5/3:8 r:16",
        "A5/3:8 C6/5:8 Bb5/4:16 | G5/2:8 Bb5/4:4 G5/2:4 F5/1:16",
      ].join(" | "),
      left: [
        "F2+C3/5+1:32 | F2+C3/5+1:32 | C3/1:32",
        "C3/1:16 G2/4:16 | C3/1:16 Bb2/2:16 | F2+C3/5+1:32",
        "F2+C3/5+1:16 Bb2/2:16 | C3/1:16 F2+C3/5+1:16",
      ].join(" | "),
      skills: ["held-bass", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 3 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 3], wait: true },
        { text: "Play bars 4 to 8 with the right hand alone.", hands: "right", speed: 0.6, loop: [4, 8], wait: true },
        { text: "Now the left hand alone. It holds one note or an open fifth for a long time.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "Hold the first F for seven counts. The short C comes just before the next long note." },
        { fromBar: 2, toBar: 2, kind: "fingering", text: "Finger 4 holds the high C. Then fingers 5, 4, 3 and 2 play four quick notes." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play softly and smoothly, as if you were humming a lullaby." },
      ],
      tricky: {
        1: "Let go of the short C a little early. Then reach up to A with finger 5.",
        4: "The right thumb lands on C after the rest. Halfway through the bar, the left hand moves down to G.",
        5: "Finger 3 moves up from G to B flat. Then fingers 5, 4 and 3 play D, C and B flat.",
      },
    },
    rare: {
      key: F_MAJOR,
      bpm: 176,
      numerator: 4,
      denominator: 1,
      steps: 4,
      right: `${RIGHT_QUARTERS} | ${RIGHT_QUARTERS} | C6/5:6 A5/3:2 F5/1:8 | Bb5/4:8 G5/2:4 F5/1:4 | G5/2:8 Bb5/4:4 G5/2:4 | F5+A5/1+3:16`,
      left: [
        `${RARE_F} | ${RARE_F} | ${RARE_C} | ${RARE_C} | ${RARE_C} | ${RARE_F}`,
        `${RARE_F} | ${RARE_F} | ${RARE_C} | ${RARE_C} | ${RARE_C} | ${RARE_F}`,
        "F2/5:4 A2+C3/3+2:4 A2+C3/3+2:4 A2+C3/3+2:3 r:1",
        "Bb2/5:4 D3+F3/3+1:4 D3+F3/3+1:4 D3+F3/3+1:3 r:1",
        `${RARE_C} | F2+A2+C3/5+3+2:16`,
      ].join(" | "),
      skills: ["triads", "two-note-chords"],
      practice: [
        { text: "Play the right hand alone on the first six bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 6], wait: true },
        { text: "Play the left hand alone. A low note comes first, then the chord answers three times.", hands: "left", speed: 0.6, loop: [1, 6], wait: true },
        { text: "Join the hands on bars 1 to 6, slowly.", hands: "both", speed: 0.6, loop: [1, 6], wait: true },
        { text: "Play the ending from bar 13, where the left hand finds two new chords.", hands: "both", speed: 0.7, loop: [13, 16], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 6, kind: "sound", text: "Keep the chords soft, so the tune sings above them like a voice." },
        { fromBar: 3, toBar: 3, kind: "rhythm", text: "F sharp leans up into G. Give each one four counts, then rest." },
        { fromBar: 14, toBar: 15, kind: "trick", text: "Lift the left hand a moment before each new chord. Then it lands in its new place." },
      ],
      tricky: {
        5: "Finger 3 moves up from G to B flat. Then fingers 5, 4 and 3 play D, C and B flat.",
        14: "The left hand moves to B flat with finger 5. D and F sit above it.",
        15: "The left hand comes back to C with finger 2. Use the short rest before it.",
      },
    },
    epic: {
      key: F_MAJOR,
      bpm: 184,
      numerator: 4,
      denominator: 1,
      steps: 12,
      right: `${inTriplets(RIGHT_QUARTERS)} | ${EPIC_SECOND} | ${EPIC_OWN} G5/2:12 | F5+A5+C6/1+3+5:48`,
      left: [
        [rolling("F3 A3 C4"), rolling("F3 A3 C4"), rolling("C3 E3 Bb3"), rolling("C3 E3 Bb3"), rolling("C3 E3 Bb3"), rolling("F3 A3 C4")].join(" | "),
        [rolling("F3 A3 C4"), rolling("F3 A3 C4"), rolling("C3 E3 Bb3"), rolling("C3 E3 Bb3"), rolling("C3 E3 Bb3"), rolling("F3 A3 C4")].join(" | "),
        [rolling("F3 A3 C4"), rolling("Bb2 D3 F3"), rolling("C3 E3 Bb3"), "F3+A3+C4/5+3+1:48"].join(" | "),
      ].join(" | "),
      pedal: pedalBars(16),
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone. Each chord rolls up in threes: low, middle, high.", hands: "left", speed: 0.5, loop: [1, 6], wait: true },
        { text: "Play the right hand alone on bars 7 to 12, where sixths and thirds join the tune.", hands: "right", speed: 0.6, loop: [7, 12], wait: true },
        { text: "Join the hands on the first six bars, slowly.", hands: "both", speed: 0.5, loop: [1, 6], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 6, kind: "rhythm", text: "Count three even notes in the left hand for every beat. They should ripple gently." },
        { fromBar: 7, toBar: 12, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Change the pedal on every bar line, as the new bass note sounds." },
      ],
      tricky: {
        5: "Finger 3 moves up from G to B flat. The left hand keeps rolling C, E and B flat below.",
        7: "Thumb on A under the F. Then the thumb moves up to C, and fingers 2 and 5 take F and A.",
        9: "After F sharp, the thumb slides down to E, and finger 2 plays G with it.",
      },
    },
    legendary: {
      key: F_MAJOR,
      bpm: 192,
      numerator: 4,
      denominator: 1,
      steps: 12,
      right: [
        inTriplets(RIGHT_QUARTERS),
        octaveUp(EPIC_SECOND),
        `${octaveUp(EPIC_OWN)} G6/2:9 r:3`,
        "F5+A5+C6+F6/1+2+3+5:48",
      ].join(" | "),
      left: [
        [
          plucked("F1+F2", "A2+C3+F3"),
          plucked("F1+F2", "A2+C3+F3"),
          plucked("C2+C3", "E3+G3+Bb3"),
          plucked("C2+C3", "E3+G3+Bb3"),
          plucked("C2+C3", "E3+G3+Bb3"),
          plucked("F1+F2", "A2+C3+F3"),
        ].join(" | "),
        [
          wide("F1 C2 F2 A2 C3 F3"),
          wide("F1 C2 F2 A2 C3 F3"),
          wide("C2 G2 C3 E3 G3 Bb3"),
          wide("C2 G2 C3 E3 G3 Bb3"),
          wide("C2 G2 C3 E3 G3 Bb3"),
          wide("F1 C2 F2 A2 C3 F3"),
        ].join(" | "),
        [wide("F1 C2 F2 A2 C3 F3"), wide("Bb1 F2 Bb2 D3 F3 Bb3"), wide("C2 G2 C3 E3 G3 Bb3"), "F1+F2/5+1:48"].join(" | "),
      ].join(" | "),
      pedal: pedalBars(16),
      skills: ["octave-bass", "arpeggios", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone on bars 1 to 6. Jump down for the low octave, then back up for the chords.", hands: "left", speed: 0.5, loop: [1, 6], wait: true },
        { text: "Play the left hand's long arpeggios alone on bars 7 to 12.", hands: "left", speed: 0.5, loop: [7, 12], wait: true },
        { text: "Play the right hand alone from bar 7, where the tune climbs an octave.", hands: "right", speed: 0.6, loop: [7, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 6, kind: "trick", text: "Lift the left hand after each low octave. The short rest gives you time to reach the chord." },
        { fromBar: 7, toBar: 12, kind: "fingering", text: "In each arpeggio, the thumb passes under on the way down, and finger 3 crosses over on the way up." },
        { fromBar: 16, toBar: 16, kind: "sound", text: "Spread the right hand over the last chord, and let it ring with the pedal." },
      ],
      tricky: {
        2: "Finger 4 holds the high C over the plucked bass. Then fingers 5, 4, 3 and 2 play four quick notes.",
        5: "Finger 3 moves up from G to B flat, while the left hand keeps plucking its low C.",
        6: "Play G sharp with finger 2 and A with finger 4. The left hand jumps down to the low F octave.",
      },
    },
  },
  de: {
    about:
      "Mozart vollendete dieses Konzert am 9. März 1785, vier Wochen nach dem vorigen. " +
      "Sein langsamer Satz, das Andante, singt eine lange Melodie über leisen wiederholten Akkorden. " +
      "Der Film Elvira Madigan (1967) spielt es, und seither kennen viele das Konzert unter diesem Namen.",
    funFact: "Mozart vollendete das Konzert nur vier Wochen nach seinem Klavierkonzert Nr. 20.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 3 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 4 bis 8 nur mit der rechten Hand.",
          "Jetzt die linke Hand allein. Sie hält lange einen Ton oder eine leere Quinte.",
          "Nimm beide Hände zusammen, langsam.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt das erste F sieben Zählzeiten lang. Das kurze C kommt direkt vor dem nächsten langen Ton.",
          "Finger 4 hält das hohe C. Dann spielen Finger 5, 4, 3 und 2 vier schnelle Töne.",
          "Spiel leise und weich, als würdest du ein Wiegenlied summen.",
        ],
        tricky: {
          1: "Lass das kurze C etwas früher los. Dann greif mit Finger 5 hinauf zum A.",
          4: "Der rechte Daumen landet nach der Pause auf dem C. In der Mitte des Takts rückt die linke Hand hinab zum G.",
          5: "Finger 3 rückt vom G hinauf zum B. Dann spielen Finger 5, 4 und 3 D, C und B.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten sechs Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Zuerst kommt ein tiefer Ton, dann antwortet der Akkord dreimal.",
          "Spiel die Takte 1 bis 6 langsam mit beiden Händen zusammen.",
          "Spiel den Schluss ab Takt 13. Dort findet die linke Hand zwei neue Akkorde.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt die Akkorde leise, damit die Melodie darüber singt wie eine Stimme.",
          "Das Fis lehnt sich hinauf zum G. Gib jedem vier Zählzeiten, dann mach Pause.",
          "Heb die linke Hand vor jedem neuen Akkord kurz an. Dann landet sie an ihrem neuen Platz.",
        ],
        tricky: {
          5: "Finger 3 rückt vom G hinauf zum B. Dann spielen Finger 5, 4 und 3 D, C und B.",
          14: "Die linke Hand rückt mit Finger 5 zum B. D und F liegen darüber.",
          15: "Die linke Hand kommt mit Finger 2 zurück zum C. Nutz die kurze Pause davor.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Jeder Akkord rollt in Dreiergruppen aufwärts: tief, Mitte, hoch.",
          "Spiel die Takte 7 bis 12 nur mit der rechten Hand. Dort kommen Sexten und Terzen zur Melodie.",
          "Spiel die ersten sechs Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Zähl in der linken Hand drei gleichmäßige Töne pro Schlag. Sie sollen sanft plätschern.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
          "Wechsle das Pedal an jedem Taktstrich, sobald der neue Basston klingt.",
        ],
        tricky: {
          5: "Finger 3 rückt vom G hinauf zum B. Die linke Hand rollt darunter weiter C, E und B.",
          7: "Daumen auf das A unter dem F. Dann rückt der Daumen hinauf zum C, und Finger 2 und 5 nehmen F und A.",
          9: "Nach dem Fis gleitet der Daumen hinab zum E, und Finger 2 spielt das G dazu.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Takte 1 bis 6 nur mit der linken Hand. Spring hinunter zur tiefen Oktave, dann zurück hinauf zu den Akkorden.",
          "Spiel die langen Arpeggien der linken Hand allein, in den Takten 7 bis 12.",
          "Spiel ab Takt 7 nur die rechte Hand. Dort steigt die Melodie eine Oktave höher.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Heb die linke Hand nach jeder tiefen Oktave an. Die kurze Pause gibt dir Zeit, den Akkord zu erreichen.",
          "In jedem Arpeggio geht der Daumen abwärts unter, und Finger 3 kreuzt aufwärts darüber.",
          "Spann die rechte Hand über den letzten Akkord, und lass ihn mit dem Pedal klingen.",
        ],
        tricky: {
          2: "Finger 4 hält das hohe C über dem gezupften Bass. Dann spielen Finger 5, 4, 3 und 2 vier schnelle Töne.",
          5: "Finger 3 rückt vom G hinauf zum B, während die linke Hand weiter ihr tiefes C zupft.",
          6: "Spiel das Gis mit Finger 2 und das A mit Finger 4. Die linke Hand springt hinab zur tiefen F-Oktave.",
        },
      },
    },
  },
};

/**
 * *Happy Birthday to You*: Mildred J. Hill's tune, in four versions of ours.
 *
 * Mildred Hill published the tune in 1893 as *Good Morning to All*, with her sister Patty. Patty Hill
 * died in 1946, and the tune is public domain in the US and the EU. A US court voided the claim on the
 * birthday words in 2015, and the tune itself was free long before. Our songs carry no lyrics.
 *
 * The tune is the one *Happy Birthday* is sung to today. Its third line has two extra notes, and the
 * leap of an octave. It is the eight bars in C major, after a bar holding the dotted pickup.
 *
 * The tune is in 3/4, and every length here is four times as long, in 3/1. A whole note is one beat,
 * so the pickup's sixteenth is a quarter, and Common plays it at its place. The hook is the pickup bar
 * and the next two, the figure the song is known by.
 *
 * Common plays the whole tune over held fifths, with a breath before the octave leap. Rare plays it
 * twice, over block triads and then a waltz bass, the second time an octave up. Epic puts an Alberti
 * bass under the first verse and plays the second in thirds and sixths over a waltz bass, with the
 * pedal. Legendary sets the tune in chords over a stride bass, then in octaves over arpeggios.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 3/1, in quarters: the pickup bar, then the eight bars of the song. */
const tune =
  "r:8 G4:3 G4:1 | A4:4 G4:4 C5:4 | B4:8 G4:3 G4:1 | A4:4 G4:4 D5:4 | C5:8 G4:3 G4:1 | " +
  "G5:4 E5:4 C5:4 | B4:4 A4:4 F5:3 F5:1 | E5:4 C5:4 D5:4 | C5:12";

/** The first eight bars of the tune in the right hand, in eighths, as Rare and Epic finger it. */
const VERSE = [
  "r:16 G4/1:6 G4/1:2 | A4/2:8 G4/1:8 C5/4:8 | B4/3:16 G4/1:6 G4/1:2 | A4/2:8 G4/1:8 D5/5:8",
  "C5/4:16 G4/1:6 G4/1:2 | G5/5:8 E5/4:8 C5/2:8 | B4/1:8 A4/1:8 F5/4:6 F5/4:2 | E5/3:8 C5/1:8 D5/2:8",
].join(" | ");

/** One bar of Alberti bass in half notes, on C, G, G7 or F. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:4 G3/1:4 E3/3:4 G3/1:4 E3/3:4 G3/1:4",
  G: "B2/5:4 G3/1:4 D3/3:4 G3/1:4 D3/3:4 G3/1:4",
  7: "B2/5:4 G3/1:4 D3/3:4 G3/1:4 F3/2:4 G3/1:4",
  F: "A2/5:4 F3/1:4 C3/3:4 F3/1:4 C3/3:4 F3/1:4",
};

/** One beat of waltz bass, detached: the root, or the chord above it, on C, G7 or F. */
const WALTZ: Record<string, string> = {
  C: "C3/5:7 r:1",
  c: "E3+G3+C4/3+2+1:7 r:1",
  G: "G2/5:7 r:1",
  g: "F3+G3+B3/3+2+1:7 r:1",
  F: "F2/5:7 r:1",
  f: "F3+A3+C4/3+2+1:7 r:1",
};

/** One beat of stride, its last quarter a rest for the jump: the root in octaves, or the chord. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:6 r:2",
  c: "C3+E3+G3/5+3+1:6 r:2",
  G: "G1+G2/5+1:6 r:2",
  g: "B2+F3+G3/5+2+1:6 r:2",
  F: "F1+F2/5+1:6 r:2",
  f: "C3+F3+A3/5+2+1:6 r:2",
};

/** One beat of arpeggio in quarters, over two octaves: up and down on C, on G7 and on F. */
const ARPEGGIO: Record<string, string> = {
  C: "C2/5:2 G2/3:2 C3/2:2 E3/1:2",
  c: "G3/3:2 C4/2:2 E4/1:2 C4/2:2",
  e: "G3/3:2 E3/1:2 C3/2:2 G2/3:1 r:1",
  G: "G1/5:2 D2/3:2 G2/2:2 B2/1:2",
  g: "D3/3:2 F3/2:2 G3/1:2 F3/2:2",
  h: "D3/3:2 B2/1:2 G2/2:2 D2/3:1 r:1",
  F: "F1/5:2 C2/3:2 F2/2:2 A2/1:2",
  f: "C3/3:2 F3/2:2 A3/1:2 F3/2:2",
  i: "C3/3:2 A2/1:2 F2/2:2 C2/3:1 r:1",
  s: "G2/2:2 B2/1:2 D3/3:2 F3/2:1 r:1",
};

/** Bars of `patterns` from `beats`, such as `"Ccc Ggg"`: one letter per beat, a space between bars. */
function beatBars(patterns: Record<string, string>, beats: string): string {
  return beats
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** The pedal of a version in 17 bars: none in the pickup bar, then once a bar, and changed for the dominant in bars 8 and 16. */
const PEDAL = ["r:24", ...Array(6).fill("P:24"), "P:16 P:8", "P:24", ...Array(6).fill("P:24"), "P:16 P:8", "P:24"].join(" | ");

export const happyBirthday: OurSong = {
  slug: "happy-birthday",
  title: "Happy Birthday to You",
  source: {
    composer: "Mildred J. Hill",
    died: 1916,
    published: 1893,
    edition:
      "Good Morning to All, in Mildred J. Hill and Patty Smith Hill, Song Stories for the Kindergarten, Clayton F. Summy, Chicago (1893)",
  },
  about:
    "Mildred J. Hill wrote this tune for Good Morning to All, a greeting song for kindergarten classes. " +
    "She published it in 1893 in Song Stories for the Kindergarten, a book she made with her sister Patty. " +
    "The birthday version sung today adds two notes to its third line, with a leap of an octave.",
  funFact: "In 2015, a US court ruled that the company charging for the birthday song had no valid copyright on its words.",
  mythic: null,
  tune: { text: tune, numerator: 3, denominator: 1, steps: 4, key: C_MAJOR, hookBars: [1, 3] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 288,
      numerator: 3,
      denominator: 1,
      steps: 8,
      right: [
        "r:16 G4/1:6 G4/1:2 | A4/2:8 G4/1:8 C5/4:8 | B4/3:16 G4/1:6 G4/1:2 | A4/2:8 G4/1:8 D5/5:8",
        "C5/4:16 G4/1:6 G4/1:1 r:1 | G5/5:8 E5/4:8 C5/2:8 | B4/1:8 A4/1:6 r:2 F5/4:6 F5/4:2 | E5/3:8 C5/1:8 D5/2:8 | C5/1:24",
      ].join(" | "),
      left: "r:24 | C3+G3/5+1:24 | D3+G3/4+1:24 | D3+G3/4+1:24 | C3+G3/5+1:24 | C3+G3/5+1:24 | F3/2:24 | C3+G3/5+1:24 | C3+G3/5+1:24",
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play the right hand alone, slowly, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play bars 5 to 9 with the right hand alone, where the tune jumps up high.", hands: "right", speed: 0.6, loop: [5, 9], wait: true },
        { text: "Put both hands together. The left hand only holds a fifth or a single note.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 3, kind: "rhythm", text: "The two G's at the start are long, then short. The short one leads into the next bar." },
        { fromBar: 2, toBar: 5, kind: "fingering", text: "Your thumb sits on G, and each finger keeps its own key up to D." },
        { fromBar: 5, toBar: 6, kind: "trick", text: "Lift the hand after the second G, and land with the little finger on the high G." },
      ],
      tricky: {
        2: "Finger 2 plays A, the thumb comes back to G, and finger 4 reaches for C.",
        6: "Land on the high G with the little finger, then walk down to E and C with fingers 4 and 2.",
        7: "Your thumb plays B, then slides down to A. Lift the hand before the two F's.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 336,
      numerator: 3,
      denominator: 1,
      steps: 8,
      right: [
        VERSE,
        "C5/1:16 G5/1:6 G5/1:2 | A5/2:8 G5/1:8 C6/4:8 | B5/3:16 G5/1:6 G5/1:2 | A5/2:8 G5/1:8 D6/5:8",
        "C6/4:16 G5/1:6 G5/1:2 | G6/5:8 E6/4:8 C6/2:8 | B5/1:8 A5/1:8 F6/4:6 F6/4:2 | E6/3:8 C6/1:8 D6/2:8 | C6/1:24",
      ].join(" | "),
      left: [
        "r:24 | C3+E3+G3/5+3+1:24 | D3+F3+G3/4+2+1:24 | D3+F3+G3/4+2+1:24 | C3+E3+G3/5+3+1:24",
        "C3+E3+G3/5+3+1:24 | D3+F3+A3/4+2+1:24 | C3+E3+G3/5+3+1:16 D3+F3+G3/4+2+1:8 | C3+E3+G3/5+3+1:24",
        "C3/5:8 E3+G3/3+1:8 E3+G3/3+1:8 | B2/5:8 F3+G3/2+1:8 F3+G3/2+1:8 | B2/5:8 F3+G3/2+1:8 F3+G3/2+1:8 | C3/5:8 E3+G3/3+1:8 E3+G3/3+1:8",
        "C3/5:8 E3+G3/3+1:8 E3+G3/3+1:8 | D3/4:8 F3+A3/2+1:8 F3+A3/2+1:8 | C3/5:8 E3+G3/3+1:8 F3+G3/2+1:8 | C3+E3+G3/5+3+1:24",
      ].join(" | "),
      skills: ["triads", "waltz-bass", "position-change"],
      practice: [
        { text: "Play the left hand alone, and press the three notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the waltz bass of the second verse alone: low note, chord, chord.", hands: "left", speed: 0.6, loop: [10, 17], wait: true },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 6, toBar: 6, kind: "fingering", text: "The little finger reaches a whole octave up from the thumb. The hand opens, then closes again." },
        { fromBar: 9, toBar: 10, kind: "trick", text: "After the long C, move the thumb up to G. The second verse starts an octave higher." },
        { fromBar: 10, toBar: 17, kind: "sound", text: "In the waltz bass, play the low note a little louder than the chords after it." },
      ],
      tricky: {
        7: "Your thumb plays B, then slides down to A, and finger 4 reaches up for F.",
        9: "Hold the C, then move your thumb up to the next G for the second verse.",
        15: "The thumb slides from B down to A again, now an octave higher.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 384,
      numerator: 3,
      denominator: 1,
      steps: 8,
      right: [
        VERSE,
        "C5/1:16 G5/5:6 G5/5:2",
        "C5+A5/1+5:8 E5+G5/2+4:8 E5+C6/1+5:8 | G5+B5/1+3:16 G5/1:6 G5/1:2 | F5+A5/1+3:8 D5+G5/1+2:8 B5+D6/3+5:8",
        "E5+C6/1+5:16 G5/1:6 G5/1:2 | E6+G6/3+5:8 C6+E6/1+3:8 G5+C6/1+3:8 | G5+B5/1+3:8 F5+A5/1+2:8 D6+F6/3+5:6 D6+F6/3+5:2",
        "C6+E6/2+4:8 G5+C6/1+4:8 B5+D6/3+5:8 | E5+G5+C6/1+2+5:24",
      ].join(" | "),
      left: [
        `r:24 | ${beatBars(ALBERTI, "C G 7 C C F")}`,
        "C3/5:4 G3/1:4 E3/3:4 G3/1:4 B2/5:4 G3/1:4",
        ALBERTI.C,
        beatBars(WALTZ, "Ccc Ggg Ggg Ccc Ccc Fff Ccg"),
        "C2+G2+C3/5+2+1:24",
      ].join(" | "),
      pedal: PEDAL,
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [10, 13], wait: true },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 10, toBar: 17, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
        { fromBar: 10, toBar: 17, kind: "sound", text: "The waltz bass lifts off each note. The pedal joins them, so change it at the start of each bar." },
      ],
      tricky: {
        12: "The pairs step down, then fingers 3 and 5 jump up to B and D.",
        15: "After the two low pairs, reach up with fingers 3 and 5 for the high D and F.",
        17: "Drop the hand to the last chord: thumb on E, finger 2 on G and the little finger on C.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 432,
      numerator: 3,
      denominator: 1,
      steps: 8,
      right: [
        "r:16 G4/2:6 G4/2:1 r:1 | C4+F4+A4/1+3+5:8 C4+E4+G4/1+2+4:8 E4+G4+C5/1+2+5:8 | D4+G4+B4/1+2+4:16 G4/2:6 G4/2:2",
        "F4+A4/1+3:8 D4+G4/1+3:8 G4+B4+D5/1+3+5:8 | E4+G4+C5/1+2+5:16 G4/2:6 G4/2:1 r:1",
        "C5+E5+G5/1+3+5:8 G4+C5+E5/1+2+4:8 G4+C5/1+3:8 | G4+B4/1+3:8 F4+A4/1+3:7 r:1 A4+C5+F5/1+2+5:6 A4+C5+F5/1+2+5:2",
        "G4+C5+E5/1+2+4:8 G4+C5/1+3:8 F4+B4+D5/1+3+5:8 | E4+G4+C5/1+2+5:15 r:1 G4+G5/1+5:6 G4+G5/1+5:1 r:1",
        "A4+A5/1+5:7 r:1 G4+G5/1+5:7 r:1 C5+C6/1+5:7 r:1 | B4+B5/1+5:15 r:1 G4+G5/1+5:6 G4+G5/1+5:1 r:1",
        "A4+A5/1+5:7 r:1 G4+G5/1+5:7 r:1 D5+D6/1+5:7 r:1 | C5+C6/1+5:15 r:1 G4+G5/1+5:6 G4+G5/1+5:1 r:1",
        "G5+G6/1+5:7 r:1 E5+E6/1+5:7 r:1 C5+C6/1+5:7 r:1 | B4+B5/1+5:7 r:1 A4+A5/1+5:7 r:1 F5+F6/1+5:6 F5+F6/1+5:1 r:1",
        "E5+E6/1+5:7 r:1 C5+C6/1+5:7 r:1 D5+D6/1+5:7 r:1 | C5+E5+G5+C6/1+2+3+5:24",
      ].join(" | "),
      left: [
        `r:24 | ${beatBars(STRIDE, "Ccc Ggg Ggg Ccc Ccc Fff CcG Ccc")}`,
        beatBars(ARPEGGIO, "Cce Ggh Ggh Cce Cce Ffi Ccs"),
        "C2+G2+C3/5+2+1:24",
      ].join(" | "),
      pedal: PEDAL,
      skills: ["stride", "melody-in-chords", "arpeggios"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 5], wait: true },
        { text: "Play the arpeggios of the second verse in the left hand alone.", hands: "left", speed: 0.5, loop: [10, 13], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "trick", text: "In stride, look at the octave and let the hand find the chord by feel." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Play the octaves a little apart, like bells, and let the pedal join them." },
        { fromBar: 10, toBar: 16, kind: "fingering", text: "In each arpeggio, the third finger crosses over the thumb on the way up." },
      ],
      tricky: {
        7: "Lift the hand after the A, so it can open into the chord with F on top.",
        10: "The octaves start while the left hand runs its first arpeggio. Practise each hand alone first.",
        15: "Keep the octave shape as the hand jumps up to F, and let the bass roll beneath it.",
      },
    },
  },
  de: {
    about:
      "Mildred J. Hill schrieb diese Melodie für Good Morning to All, ein Begrüßungslied für Kindergartengruppen. " +
      "Sie veröffentlichte es 1893 in Song Stories for the Kindergarten, einem Buch, das sie mit ihrer Schwester Patty machte. " +
      "Die heute gesungene Geburtstagsfassung fügt der dritten Zeile zwei Töne hinzu, mit einem Oktavsprung.",
    funFact:
      "2015 entschied ein US-Gericht, dass die Firma, die für das Geburtstagslied Gebühren verlangte, kein gültiges Urheberrecht an seinem Text hatte.",
    versions: {
      common: {
        practice: [
          "Spiel die rechte Hand langsam allein, und lass das Lied auf jeden Ton warten.",
          "Spiel die Takte 5 bis 9 nur mit der rechten Hand. Dort springt die Melodie hoch hinauf.",
          "Nimm beide Hände zusammen. Die linke Hand hält nur eine Quinte oder einen einzelnen Ton.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Von den beiden G am Anfang ist das erste lang, das zweite kurz. Das kurze führt in den nächsten Takt.",
          "Dein Daumen liegt auf dem G, und jeder Finger behält seine eigene Taste bis hinauf zum D.",
          "Heb die Hand nach dem zweiten G, und lande mit dem kleinen Finger auf dem hohen G.",
        ],
        tricky: {
          2: "Finger 2 spielt das A, der Daumen kehrt zum G zurück, und Finger 4 greift zum C.",
          6: "Lande mit dem kleinen Finger auf dem hohen G, dann geh mit Finger 4 und 2 hinab zu E und C.",
          7: "Dein Daumen spielt das H und rutscht dann hinab zum A. Heb die Hand vor den beiden F.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein, und drück die drei Töne jedes Akkords zusammen an.",
          "Spiel den Walzerbass der zweiten Strophe allein: tiefer Ton, Akkord, Akkord.",
          "Spiel die erste Strophe langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Der kleine Finger greift eine ganze Oktave über den Daumen hinauf. Die Hand öffnet sich und schließt sich wieder.",
          "Führ den Daumen nach dem langen C hinauf zum G. Die zweite Strophe beginnt eine Oktave höher.",
          "Spiel im Walzerbass den tiefen Ton etwas lauter als die Akkorde danach.",
        ],
        tricky: {
          7: "Dein Daumen spielt das H und rutscht dann hinab zum A, und Finger 4 greift hinauf zum F.",
          9: "Halt das C, dann führ deinen Daumen hinauf zum nächsten G für die zweite Strophe.",
          15: "Der Daumen rutscht wieder vom H hinab zum A, jetzt eine Oktave höher.",
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
          "Die Melodie ist der obere Ton jedes Zweiklangs, also lass den oberen Finger führen.",
          "Der Walzerbass hebt von jedem Ton ab. Das Pedal verbindet sie, also wechsle es am Anfang jedes Takts.",
        ],
        tricky: {
          12: "Die Zweiklänge steigen hinab, dann springen Finger 3 und 5 hinauf zu H und D.",
          15: "Greif nach den beiden tiefen Zweiklängen mit Finger 3 und 5 hinauf zum hohen D und F.",
          17: "Lass die Hand auf den letzten Akkord fallen: Daumen auf E, Finger 2 auf G und kleiner Finger auf C.",
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
          "Spiel die Oktaven etwas abgesetzt, wie Glocken, und lass das Pedal sie verbinden.",
          "In jedem Arpeggio kreuzt Finger 3 auf dem Weg nach oben über den Daumen.",
        ],
        tricky: {
          7: "Heb die Hand nach dem A, damit sie sich zum Akkord mit dem F oben öffnen kann.",
          10: "Die Oktaven beginnen, während die linke Hand ihr erstes Arpeggio läuft. Üb zuerst jede Hand allein.",
          15: "Halt die Oktavform, während die Hand hinauf zum F springt, und lass den Bass darunter rollen.",
        },
      },
    },
  },
};

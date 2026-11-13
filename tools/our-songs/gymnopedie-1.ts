/**
 * *Gymnopédie No. 1*: the first phrase of Satie's slow waltz, in four versions of ours.
 *
 * The tune is the melody's first phrase, the print's bars 5 to 8, in D major and 3/4. A unit is a quarter
 * note in the tune. The hook is all four of its bars. Under it the print rocks between a bar of G major 7
 * and a bar of D major 7, and the tune's bars 1 and 3 sit on G.
 *
 * Every version opens with four bars of that rocking before the tune, so the hook ends in bar 8. Each then
 * plays the phrase's first three bars again, and closes with bars of ours on the home chord. Common and
 * Rare move to C major, where the rocking runs between F and C. Epic and Legendary keep D major.
 *
 * The tune rubs a semitone against the root of each chord, which Common and Rare may not do. So Common
 * plays a fifth on A in each bar of F, and Rare puts G under each bar of C. Epic and Legendary keep the
 * rub, and their guides mark it.
 *
 * Common plays the tune over held open fifths, and lifts the thumb off B for a moment to step down to A.
 * Rare rocks a bass note and a two-note chord under it, with the pedal. Epic leaps from a bass note to close
 * chords, then plays the tune in sixths. Legendary leaps from octaves in the bass, then plays the tune in
 * full chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Epic and Legendary keep. */
const D_MAJOR: Key = { tonic: 2, mode: "major" };

/** The key Common and Rare move to. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 3/4, in quarters: the print's bars 5 to 8. */
const tune = "r:1 F#5:1 A5:1 | G5:1 F#5:1 C#5:1 | B4:1 C#5:1 D5:1 | A4:3";

/** The four bars before the tune, where the right hand rests, in eighths. */
const INTRO_EIGHTHS = "r:6 | r:6 | r:6 | r:6";

/** The tune's first three bars in C major, fingered, in eighths. The hand lifts off B to move down to A. */
const COMMON_PHRASE = "r:2 E5/3:2 G5/5:2 | F5/4:2 E5/3:2 B4/1:1 r:1 | A4/1:2 B4/2:2 C5/3:2";

/** The tune's first three bars in C major, fingered, in quarters. */
const RARE_PHRASE = "r:1 E5/3:1 G5/5:1 | F5/4:1 E5/3:1 B4/1:1 | A4/1:1 B4/2:1 C5/3:1";

/** The whole tune in D major, fingered, in eighths. */
const D_TUNE = "r:2 F#5/3:2 A5/5:2 | G5/4:2 F#5/3:2 C#5/1:2 | B4/1:2 C#5/2:2 D5/3:2 | A4/1:6";

/** Epic's bar of a chord: the bass, a breath, then the chord twice, in eighths. */
function waltz(bass: string, chord: string): string {
  return `${bass}:1 r:1 ${chord}/4+2+1:2 ${chord}/4+2+1:1 r:1`;
}

/** Legendary's bar of a chord: the bass in octaves, a breath, then the chord twice, in eighths. */
function octaveWaltz(low: string, high: string, chord: string): string {
  return `${low}+${high}/5+1:1 r:1 ${chord}/4+2+1:2 ${chord}/4+2+1:1 r:1`;
}

/** Common's left hand: an open fifth on A for each bar of F, and one on C for each bar of C. */
const COMMON_F = "A2+E3/5+2:6";
const COMMON_C = "C3+G3/4+1:6";
const COMMON_C_SHORT = "C3+G3/4+1:4 r:2";

/** Rare's left hand: F, then A and E for a bar of F; G, then B and E for a bar of C. */
const RARE_F = "F3/5:1 A3+E4/3+1:2";
const RARE_C = "G3/4:1 B3+E4/2+1:2";

/** Epic's bars of G major 7, D major 7, E minor 7 and A7. */
const EPIC_G = waltz("G2/5", "D3+F#3+B3");
const EPIC_D = waltz("D2/5", "C#3+F#3+A3");
const EPIC_E = waltz("E2/5", "D3+G3+B3");
const EPIC_A = waltz("A2/5", "C#3+E3+G3");

/** Legendary's bars of G major 7, D major 7, E minor 7 and A7. */
const LEGENDARY_G = octaveWaltz("G1", "G2", "D3+F#3+B3");
const LEGENDARY_D = octaveWaltz("D2", "D3", "C#3+F#3+A3");
const LEGENDARY_E = octaveWaltz("E2", "E3", "D3+G3+B3");
const LEGENDARY_A = octaveWaltz("A1", "A2", "C#3+E3+G3");

export const gymnopedie1: OurSong = {
  slug: "gymnopedie-1",
  title: "Gymnopédie No. 1",
  aka: ["Gymnopedie No. 1", "Gymnopédie"],
  source: {
    composer: "Erik Satie",
    died: 1925,
    published: 1888,
    edition: "Gymnopédie No. 1, as Wikipedia's article prints its first eight bars, checked against Satie's own early print as Wikimedia Commons scans it",
  },
  about:
    "Erik Satie finished his three Gymnopédies in 1888, and the first was published that summer in a magazine. " +
    'It is marked "Lent et douloureux", which means slow and sorrowful. ' +
    "The film The Royal Tenenbaums (2001) plays it.",
  funFact: "Claude Debussy, a friend of Satie, later set the first and third Gymnopédies for orchestra.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 3, denominator: 4, steps: 1, key: D_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 66,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: `${INTRO_EIGHTHS} | ${COMMON_PHRASE} | G4/1:6 | ${COMMON_PHRASE} | D5/4:4 B4/2:2 | C5/3:6`,
      left: [
        COMMON_F, COMMON_C, COMMON_F, COMMON_C,
        COMMON_F, COMMON_C_SHORT, COMMON_F, COMMON_C,
        COMMON_F, COMMON_C_SHORT, COMMON_F, "G2+D3/5+2:6", "C3+G3/5+1:6",
      ].join(" | "),
      skills: ["held-bass", "open-fifths"],
      practice: [
        { text: "Play the left hand alone. It holds one open fifth in each bar.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Put both hands together on bars 5 to 8, slowly.", hands: "both", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the fifths softly and let them ring. They rock like a slow boat." },
        { fromBar: 6, toBar: 6, kind: "trick", text: "Lift the thumb off B a little early. Then it moves down to A in time." },
        { fromBar: 12, toBar: 13, kind: "sound", text: "Slow down a little at the end, and let the last C fade." },
      ],
      tricky: {
        7: "Your thumb moves from B down to A. Then fingers 2 and 3 climb to B and C.",
        11: "As in bar 7, the thumb moves down to A after the short rest.",
        12: "Hold D with finger 4 for two beats. Your left hand moves down to low G at the same time.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 69,
      numerator: 3,
      denominator: 4,
      steps: 1,
      right: [
        "r:3 | r:3 | r:3 | r:3",
        RARE_PHRASE,
        "G4/1:3",
        RARE_PHRASE,
        "E5/5:2 D5/4:1 | C5/3:1 D5/4:1 E5/5:1 | D5/4:2 B4/2:1 | C5/3:3 | G4+C5/1+3:3",
      ].join(" | "),
      left: [
        RARE_F, RARE_C, RARE_F, RARE_C,
        RARE_F, RARE_C, RARE_F, RARE_C,
        RARE_F, RARE_C, RARE_F, RARE_C, RARE_F,
        "G3/4:1 B3+F4/2+1:1 r:1", "C3/5:1 G3+C4/2+1:2", "C3+G3/5+2:3",
      ].join(" | "),
      pedal: Array(16).fill("P:3").join(" | "),
      skills: ["waltz-bass", "pedal"],
      practice: [
        { text: "Play the left hand alone. A low note comes on beat 1, and two notes together on beat 2.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on bars 5 to 8, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Join the hands on bars 5 to 8, slowly, with the pedal.", hands: "both", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play the ending, where the tune finds its way home to C.", hands: "both", speed: 0.7, loop: [12, 16], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "sound", text: "Hold the pedal down for each whole bar, and change it right on the bar line." },
        { fromBar: 6, toBar: 7, kind: "fingering", text: "The thumb plays B, then steps down to A. Keep the other fingers loose." },
        { fromBar: 15, toBar: 16, kind: "sound", text: "Let the last two bars ring softly, like the end of a lullaby." },
      ],
      tricky: {
        7: "Your thumb steps from B down to A. Keep the hand close to the keys.",
        11: "The same step as in bar 7. The thumb moves from B down to A.",
        15: "Your left hand moves down to low C. Use the rest at the end of bar 14.",
      },
    },
    epic: {
      key: D_MAJOR,
      bpm: 72,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: [
        INTRO_EIGHTHS,
        D_TUNE,
        "r:2 A4+F#5/1+4:2 C#5+A5/1+5:2",
        "B4+G5/1+4:2 A4+F#5/1+4:2 E4+C#5/1+4:2",
        "D4+B4/1+4:2 E4+C#5/1+4:2 F#4+D5/1+5:2",
        "F#4+A4/1+3:5 r:1",
        "G4+E5/1+4:4 F#4+D5/1+4:2",
        "E4+C#5/1+4:6",
        "r:2 A4+F#5/1+4:2 C#5+A5/1+5:2",
        "D5+F#5+A5/1+3+5:6",
      ].join(" | "),
      left: [
        EPIC_G, EPIC_D, EPIC_G, EPIC_D,
        EPIC_G, EPIC_D, EPIC_G, EPIC_D,
        EPIC_G, EPIC_D, EPIC_G, EPIC_D,
        EPIC_E, EPIC_A, EPIC_G, "D2+A2+D3/5+2+1:6",
      ].join(" | "),
      pedal: Array(16).fill("P:6").join(" | "),
      markedClashBars: [7, 9, 11, 13, 15],
      skills: ["waltz-bass", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the left hand alone. Jump from the low note up to the chord in the short rest.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with both hands, slowly.", hands: "both", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play the right hand's sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "trick", text: "The pedal holds the low note while your hand jumps up to the chord." },
        { fromBar: 7, toBar: 7, kind: "sound", text: "C sharp rubs against D in the left hand. That soft rub is the colour Satie loved." },
        { fromBar: 9, toBar: 12, kind: "fingering", text: "The thumb takes the low note of each sixth. Finger 4 or 5 carries the tune on top." },
      ],
      tricky: {
        6: "Your thumb reaches down to C sharp as finger 3 lets go of F sharp.",
        10: "The sixths step down, then jump down to E and C sharp. Keep fingers 1 and 4 in the same shape.",
        12: "Hold F sharp and A for the whole bar. Then move up to G and E for the next bar.",
      },
    },
    legendary: {
      key: D_MAJOR,
      bpm: 76,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: [
        INTRO_EIGHTHS,
        D_TUNE,
        "r:2 F#4+B4+D5+F#5/1+2+3+5:1 r:1 A4+D5+F#5+A5/1+2+3+5:1 r:1",
        "G4+B4+D5+G5/1+2+3+5:1 r:1 F#4+A4+D5+F#5/1+2+3+5:1 r:1 C#4+F#4+A4+C#5/1+2+3+5:1 r:1",
        "D4+G4+B4/1+2+4:1 r:1 E4+A4+C#5/1+2+4:1 r:1 F#4+B4+D5/1+2+4:1 r:1",
        "D4+F#4+A4/1+2+4:5 r:1",
        "E4+G4+B4+E5/1+2+3+5:3 r:1 D4+F#4+A4+D5/1+2+3+5:1 r:1",
        "C#4+E4+G4+C#5/1+2+3+5:5 r:1",
        "r:2 F#5/3:2 A5/5:2",
        "D5+F#5+A5+D6/1+2+3+5:6",
      ].join(" | "),
      left: [
        LEGENDARY_G, LEGENDARY_D, LEGENDARY_G, LEGENDARY_D,
        LEGENDARY_G, LEGENDARY_D, LEGENDARY_G, LEGENDARY_D,
        LEGENDARY_G, LEGENDARY_D, LEGENDARY_G, LEGENDARY_D,
        LEGENDARY_E, LEGENDARY_A, LEGENDARY_G, "D2+A2+D3/5+2+1:6",
      ].join(" | "),
      pedal: Array(16).fill("P:6").join(" | "),
      markedClashBars: [7, 10, 11, 12, 13],
      skills: ["octave-bass", "melody-in-chords", "pedal"],
      practice: [
        { text: "Play the left hand alone. Jump from the low octave up to the chord in the short rest.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with both hands, slowly.", hands: "both", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play the right hand's chords alone, and lift the hand between them.", hands: "right", speed: 0.5, loop: [9, 14], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "Look at the next chord while the pedal holds the low octave. Your eyes lead the hand." },
        { fromBar: 9, toBar: 11, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
        { fromBar: 15, toBar: 16, kind: "sound", text: "The tune's first notes come back alone. Play them softly, like a memory." },
      ],
      tricky: {
        9: "Lift the hand after each chord, and keep its shape as it moves up.",
        11: "Three chords climb one step at a time. Keep fingers 1, 2 and 4 in the same shape.",
        15: "The tune comes back alone. Finger 3 plays F sharp, and finger 5 plays A.",
      },
    },
  },
  de: {
    about:
      "Erik Satie vollendete seine drei Gymnopédies 1888, und die erste erschien im Sommer desselben Jahres in einer Zeitschrift. " +
      'Sie trägt die Vortragsangabe "Lent et douloureux", also langsam und schmerzlich. ' +
      "Der Film The Royal Tenenbaums (2001) spielt dieses Stück.",
    funFact: "Claude Debussy, ein Freund von Satie, setzte später die erste und die dritte Gymnopédie für Orchester.",
    versions: {
      common: {
        practice: [
          "Spiel die linke Hand allein. Sie hält in jedem Takt eine leere Quinte.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Nimm beide Hände zusammen auf den Takten 5 bis 8, langsam.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Spiel die Quinten leise, und lass sie klingen. Sie schaukeln wie ein langsames Boot.",
          "Heb den Daumen etwas früher vom H ab. Dann kommt er rechtzeitig hinunter zum A.",
          "Werde am Schluss etwas langsamer, und lass das letzte C verklingen.",
        ],
        tricky: {
          7: "Dein Daumen rückt vom H hinunter zum A. Dann steigen Finger 2 und 3 zu H und C.",
          11: "Wie in Takt 7 rückt der Daumen nach der kurzen Pause hinunter zum A.",
          12: "Halt das D mit Finger 4 zwei Schläge lang. Gleichzeitig rückt deine linke Hand hinunter zum tiefen G.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Ein tiefer Ton kommt auf Schlag 1, zwei Töne zusammen auf Schlag 2.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 langsam mit beiden Händen und mit Pedal.",
          "Spiel den Schluss, wo die Melodie nach Hause zum C findet.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt das Pedal jeweils einen ganzen Takt, und wechsle es genau am Taktstrich.",
          "Der Daumen spielt H und rückt dann hinunter zum A. Halt die anderen Finger locker.",
          "Lass die letzten zwei Takte leise klingen, wie das Ende eines Wiegenlieds.",
        ],
        tricky: {
          7: "Dein Daumen rückt vom H hinunter zum A. Halt die Hand nah an den Tasten.",
          11: "Derselbe Schritt wie in Takt 7. Der Daumen rückt vom H hinunter zum A.",
          15: "Deine linke Hand rückt hinunter zum tiefen C. Nutz die Pause am Ende von Takt 14.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Spring in der kurzen Pause vom tiefen Ton hinauf zum Akkord.",
          "Spiel die Takte 5 bis 8 langsam mit beiden Händen.",
          "Spiel die Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Das Pedal hält den tiefen Ton, während deine Hand hinauf zum Akkord springt.",
          "Das Cis reibt sich am D der linken Hand. Diese leise Reibung ist die Farbe, die Satie liebte.",
          "Der Daumen nimmt den unteren Ton jeder Sexte. Finger 4 oder 5 trägt oben die Melodie.",
        ],
        tricky: {
          6: "Dein Daumen greift hinunter zum Cis, während Finger 3 das Fis loslässt.",
          10: "Die Sexten steigen abwärts und springen dann hinunter zu E und Cis. Halt Finger 1 und 4 in derselben Form.",
          12: "Halt Fis und A den ganzen Takt lang. Dann rück hinauf zu G und E für den nächsten Takt.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein. Spring in der kurzen Pause von der tiefen Oktave hinauf zum Akkord.",
          "Spiel die Takte 5 bis 8 langsam mit beiden Händen.",
          "Spiel die Akkorde der rechten Hand allein, und heb die Hand zwischen ihnen an.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau auf den nächsten Akkord, während das Pedal die tiefe Oktave hält. Deine Augen führen die Hand.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
          "Die ersten Töne der Melodie kommen allein zurück. Spiel sie leise, wie eine Erinnerung.",
        ],
        tricky: {
          9: "Heb die Hand nach jedem Akkord an, und halt ihre Form, während sie hinaufrückt.",
          11: "Drei Akkorde steigen Schritt für Schritt. Halt Finger 1, 2 und 4 in derselben Form.",
          15: "Die Melodie kommt allein zurück. Finger 3 spielt Fis, und Finger 5 spielt A.",
        },
      },
    },
  },
};

/**
 * *Hungarian Dance No. 5*: the opening phrase of Brahms's dance in F-sharp minor, in four versions of ours.
 *
 * The tune is the opening phrase, the print's bars 1 to 4, in F-sharp minor. The print is in 2/4, and
 * every length here is four times as long, in 2/1. A whole note is one beat, so the print's sixteenths are
 * quarters, and Common plays them at their place. A unit is a quarter, and the hook is all four bars.
 *
 * Common and Rare move the tune up a minor third to A minor. Epic and Legendary keep F-sharp minor. Each
 * version follows the print's chords: F-sharp minor, then C-sharp seventh in bar 3, then home. Everything
 * after the tune is ours, over the home chord, the dominant seventh and the minor fourth chord.
 *
 * Common plays the tune twice over held open fifths, the second time with a new ending. Rare puts a bass
 * note and its triad under it, and plays it again an octave up with an answer of ours. Epic rolls an
 * Alberti bass under it with the pedal, and plays it again in sixths. Legendary sets it in octaves over an
 * octave bass and its chords, runs quick figures around it, and ends with it in full chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const F_SHARP_MINOR: Key = { tonic: 6, mode: "minor" };

/** The key Common and Rare move to. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 2/1, in quarters: the print's four bars. E sharp is the leading note. */
const tune = "C#4:6 F#4:2 | A4:6 F#4:2 | E#4:6 F#4:1 G#4:1 | F#4:8";

/** The tune in A minor in the right hand, in quarters, the thumb on E. */
const TUNE_A = "E4/1:6 A4/3:2 | C5/5:6 A4/3:2 | G#4/2:6 A4/3:1 B4/4:1 | A4/3:8";

/** The tune in A minor with a new ending of ours, where B falls to G sharp. */
const TUNE_A_CLOSE = "E4/1:6 A4/3:2 | C5/5:6 A4/3:2 | B4/4:4 G#4/2:4";

/** `text` an octave up: every note name's octave plus one. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** Bars of `patterns` from `halves`, such as `"ii VV"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** Rare's left hand per half bar in A minor: the root, then its triad. The dominant keeps the thumb on E. */
const OOM_PAH: Record<string, string> = {
  i: "A2/5:4",
  I: "A2+C3+E3/5+3+1:4",
  v: "E3/1:4",
  V: "B2+D3+E3/4+2+1:4",
};

/** Epic's Alberti bass per half bar in F-sharp minor: the home chord, the dominant seventh and the fourth chord. */
const ALBERTI: Record<string, string> = {
  i: "F#2/5:1 C#3/1:1 A2/3:1 C#3/1:1",
  V: "E#2/5:1 C#3/1:1 B2/2:1 C#3/1:1",
  f: "D2/5:1 B2/1:1 F#2/3:1 B2/1:1",
};

/** Legendary's left hand per half bar: the root in octaves, then its chord, each with a rest for the jump. */
const OCTAVE_CHORD: Record<string, string> = {
  i: "F#1+F#2/5+1:3 r:1 A2+C#3+F#3/4+2+1:3 r:1",
  V: "C#2+C#3/5+1:3 r:1 B2+E#3+G#3/4+2+1:3 r:1",
  f: "B1+B2/5+1:3 r:1 B2+D3+F#3/4+2+1:3 r:1",
};

/** The tune an octave up in sixths and thirds, with a full home chord at the end: Epic's bars 5 to 8 and 13 to 16. */
const SIXTHS =
  "A4+C#5/1+3:6 A4+F#5/1+5:2 | C#5+A5/2+5:6 A4+F#5/1+4:2 | G#4+E#5/1+4:6 A4+F#5/1+4:1 B4+G#5/2+5:1 | A4+C#5+F#5/1+2+5:8";

export const hungarianDance5: OurSong = {
  slug: "hungarian-dance-5",
  title: "Hungarian Dance No. 5",
  source: {
    composer: "Johannes Brahms",
    died: 1897,
    published: 1869,
    edition:
      "Hungarian Dance No. 5 in F-sharp minor, in Moritz Moszkowski's arrangement for piano solo in Augener's edition, as Wikimedia Commons scans it",
  },
  about:
    "Brahms wrote his Hungarian Dances for piano four hands, and the first set was published in 1869. " +
    "No. 5 became the most famous of them all. " +
    "In the film The Great Dictator (1940), Charlie Chaplin shaves a customer in time to it.",
  funFact: "Brahms based this dance on a csárdás by Béla Kéler, but he believed it was a folk tune.",
  mythic: null,
  collection: "film",
  aka: ["Ungarischer Tanz Nr. 5"],
  tune: { text: tune, numerator: 2, denominator: 1, steps: 4, key: F_SHARP_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 160,
      numerator: 2,
      denominator: 1,
      steps: 4,
      right: `${TUNE_A} | ${TUNE_A_CLOSE} | A4/3:8`,
      left: "A2+E3/5+1:8 | A2+E3/5+1:8 | E3/1:8 | A2+E3/5+1:8 | A2+E3/5+1:8 | A2+E3/5+1:8 | E3/1:8 | A2+E3/5+1:8",
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. The ending is new here.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds an open fifth, and only the thumb plays in bars 3 and 7.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "rhythm", text: "Each long note lasts six counts, and the short one two. Count them, and the dance swings." },
        { fromBar: 3, toBar: 3, kind: "fingering", text: "Finger 2 holds G sharp, then fingers 3 and 4 hurry up to A and B." },
        { fromBar: 3, toBar: 3, kind: "sound", text: "G sharp pulls hard towards A. Let it lean a little before it moves." },
      ],
      tricky: {
        2: "Finger 5 reaches up to C, then finger 3 comes back to A.",
        3: "Finger 2 holds G sharp for six counts. Then fingers 3 and 4 play A and B quickly.",
        6: "As in bar 2, finger 5 plays C and finger 3 plays A.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 200,
      numerator: 2,
      denominator: 1,
      steps: 4,
      right: [
        TUNE_A.replace("A4/3:8", "A4/3:7 r:1"),
        octaveUp(TUNE_A),
        "C6/5:4 A5/3:2 B5/4:2 | B5/4:4 A5/3:2 G#5/2:2 | A5/3:2 B5/4:2 G#5/2:2 E5/1:2 | A5/3:7 r:1",
        TUNE_A_CLOSE,
        "E4+A4/1+3:8",
      ].join(" | "),
      left: [halfBars(OOM_PAH, "iI iI vV iI iI iI vV iI iI vV vV iI iI iI vV"), "A2+C3+E3/5+3+1:8"].join(" | "),
      skills: ["triads", "position-change"],
      practice: [
        { text: "Play the left hand alone. A low note comes first, then a chord on the second beat.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, where it moves up an octave.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the low note a little louder than the chord after it. That is the dance's oom-pah." },
        { fromBar: 4, toBar: 5, kind: "trick", text: "While you hold the long A, move the right hand up an octave. The thumb lands on E." },
        { fromBar: 12, toBar: 13, kind: "trick", text: "The short rest at the end of bar 12 gives you time to jump back down." },
      ],
      tricky: {
        5: "The right hand now plays an octave up. Your thumb lands on the high E.",
        9: "The answer starts on high C with finger 5. Then finger 3 plays A, and finger 4 plays B.",
        13: "Use the rest in bar 12 to jump down an octave. Your thumb lands on E.",
      },
    },
    epic: {
      key: F_SHARP_MINOR,
      bpm: 280,
      numerator: 2,
      denominator: 1,
      steps: 4,
      right: [
        "C#4/1:6 F#4/3:2 | A4/5:6 F#4/3:2 | E#4/2:6 F#4/3:1 G#4/4:1 | F#4/3:8",
        SIXTHS,
        "F#5/5:6 D5/3:2 | C#5/2:6 A4/1:2 | B4/3:2 G#4/2:2 E#4/1:2 G#4/2:2 | F#4/1:2 A4/2:2 C#5/4:4",
        SIXTHS,
      ].join(" | "),
      left: [halfBars(ALBERTI, "ii ii VV ii ii ii VV ii"), halfBars(ALBERTI, "ff ii VV ii ii ii VV"), "F#2+C#3+F#3/5+2+1:8"].join(" | "),
      pedal: Array(16).fill("P:8").join(" | "),
      skills: ["alberti-bass", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Keep the Alberti bass light and quick, so the tune dances above it." },
        { fromBar: 3, toBar: 3, kind: "fingering", text: "E sharp is the white key F. Finger 2 plays it, and the hand stays put." },
        { fromBar: 5, toBar: 8, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        5: "Your thumb stays on A, while fingers 3 and 5 play C sharp and F sharp above it.",
        7: "Fingers 1 and 4 play G sharp and E sharp. Then the hand steps up twice, quickly.",
        15: "The same sixths as bar 7. Keep the thumb close to A and B.",
      },
    },
    legendary: {
      key: F_SHARP_MINOR,
      bpm: 440,
      numerator: 2,
      denominator: 1,
      steps: 8,
      right: [
        "C#4+C#5/1+5:11 r:1 F#4+F#5/1+5:3 r:1 | A4+A5/1+5:11 r:1 F#4+F#5/1+5:3 r:1",
        "E#4+E#5/1+5:11 r:1 F#4+F#5/1+5:1 r:1 G#4+G#5/1+5:1 r:1 | F#4+F#5/1+5:15 r:1",
        "C#5/3:2 D5/4:2 C#5/3:2 B4/2:2 C#5/3:2 A4/1:2 F#5/5:4",
        "A5/5:2 G#5/4:2 F#5/3:2 E#5/2:2 F#5/3:2 C#5/1:2 F#5/4:4",
        "E#5/2:2 G#5/4:2 B5/5:2 G#5/4:2 E#5/2:2 C#5/1:2 F#5/3:2 G#5/4:1 r:1",
        "F#4+A4+C#5+F#5/1+2+3+5:15 r:1",
        "F#4+F#5/1+5:11 r:1 D4+D5/1+5:3 r:1 | C#4+C#5/1+5:11 r:1 A3+A4/1+5:3 r:1",
        "G#4/1:2 B4/2:2 E#5/4:2 G#5/5:2 E#5/4:2 C#5/3:2 B4/2:2 G#4/1:1 r:1",
        "F#4+A4+C#5+F#5/1+2+3+5:15 r:1",
        "F#4+A4+C#5/1+2+5:11 r:1 A4+C#5+F#5/1+2+5:3 r:1 | C#5+F#5+A5/1+3+5:11 r:1 A4+C#5+F#5/1+2+5:3 r:1",
        "G#4+B4+E#5/1+2+5:11 r:1 A4+C#5+F#5/1+2+4:1 r:1 B4+E#5+G#5/1+3+5:1 r:1 | F#4+A4+C#5+F#5/1+2+3+5:16",
      ].join(" | "),
      left: [halfBars(OCTAVE_CHORD, "ii ii VV ii ii ii VV ii ff ii VV ii ii ii VV"), "F#1+F#2/5+1:16"].join(" | "),
      skills: ["octave-bass", "melody-in-chords", "stride"],
      practice: [
        { text: "Play the left hand alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's octaves alone, with the thumb and little finger in one shape.", hands: "right", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the quick figures of bars 5 to 7 in the right hand alone, slowly.", hands: "right", speed: 0.4, loop: [5, 7], wait: true },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the octaves with fire. This is a fast dance, and every long note should ring." },
        { fromBar: 5, toBar: 7, kind: "fingering", text: "In the quick figures, the thumb passes under to keep the run smooth." },
        { fromBar: 13, toBar: 16, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        4: "Hold the F sharp octave, and let the left hand jump between its octave and its chord.",
        8: "Spread the hand over F sharp, A, C sharp and F sharp with fingers 1, 2, 3 and 5.",
        12: "The four-note chord comes back. Lift off the low G sharp first, then land on the whole octave.",
      },
    },
  },
  de: {
    about:
      "Brahms schrieb seine Ungarischen Tänze für Klavier zu vier Händen, und die erste Sammlung erschien 1869. " +
      "Der fünfte Tanz wurde der berühmteste von allen. " +
      "Im Film Der große Diktator (1940) rasiert Charlie Chaplin einen Kunden im Takt dazu.",
    funFact: "Brahms baute diesen Tanz auf einem Csárdás von Béla Kéler auf, hielt ihn aber für ein Volkslied.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Hier ist der Schluss neu.",
          "Jetzt die linke Hand allein. Sie hält eine leere Quinte, und in Takt 3 und 7 spielt nur der Daumen.",
          "Nimm beide Hände zusammen, langsam.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Jeder lange Ton dauert sechs Zählzeiten, der kurze zwei. Zähl mit, dann schwingt der Tanz.",
          "Finger 2 hält das Gis, dann eilen Finger 3 und 4 hinauf zu A und H.",
          "Das Gis zieht stark zum A. Lass es ein wenig verweilen, bevor es weitergeht.",
        ],
        tricky: {
          2: "Finger 5 greift hinauf zum C, dann kehrt Finger 3 zum A zurück.",
          3: "Finger 2 hält das Gis sechs Zählzeiten lang. Dann spielen Finger 3 und 4 schnell A und H.",
          6: "Wie in Takt 2 spielt Finger 5 das C und Finger 3 das A.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Zuerst kommt ein tiefer Ton, dann ein Akkord auf dem zweiten Schlag.",
          "Spiel die ersten acht Takte nur mit der rechten Hand. Dort rückt sie eine Oktave hinauf.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Spiel den tiefen Ton etwas lauter als den Akkord danach. Das ist das Hm-ta des Tanzes.",
          "Während du das lange A hältst, rück die rechte Hand eine Oktave hinauf. Der Daumen landet auf dem E.",
          "Die kurze Pause am Ende von Takt 12 gibt dir Zeit, wieder hinunterzuspringen.",
        ],
        tricky: {
          5: "Die rechte Hand spielt jetzt eine Oktave höher. Dein Daumen landet auf dem hohen E.",
          9: "Die Antwort beginnt mit Finger 5 auf dem hohen C. Dann spielt Finger 3 das A und Finger 4 das H.",
          13: "Nutz die Pause in Takt 12, um eine Oktave hinunterzuspringen. Dein Daumen landet auf dem E.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leicht und flink, damit die Melodie darüber tanzt.",
          "Eis ist die weiße Taste F. Finger 2 spielt es, und die Hand bleibt, wo sie ist.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          5: "Dein Daumen bleibt auf dem A, während Finger 3 und 5 darüber Cis und Fis spielen.",
          7: "Finger 1 und 4 spielen Gis und Eis. Dann rückt die Hand zweimal schnell hinauf.",
          15: "Dieselben Sexten wie in Takt 7. Halt den Daumen nah bei A und H.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: Spring hinunter zur Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Oktaven der rechten Hand allein, mit Daumen und kleinem Finger in einer Griffform.",
          "Spiel die schnellen Figuren der Takte 5 bis 7 langsam nur mit der rechten Hand.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Spiel die Oktaven mit Feuer. Das ist ein schneller Tanz, und jeder lange Ton soll klingen.",
          "In den schnellen Figuren geht der Daumen unter, damit der Lauf glatt bleibt.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          4: "Halt die Oktave Fis, und lass die linke Hand zwischen Oktave und Akkord springen.",
          8: "Spann die Hand über Fis, A, Cis und Fis, mit Finger 1, 2, 3 und 5.",
          12: "Der Vierklang kommt zurück. Heb zuerst vom tiefen Gis ab, dann lande auf der ganzen Oktave.",
        },
      },
    },
  },
};

/**
 * *Süßer die Glocken nie klingen*: the German Christmas song, in four versions of ours.
 *
 * The tune is the whole verse of 16 bars, with its repeat written out. It is moved from the print's
 * F major down a fourth to C major, in 6/8 with no pickup. The hook is bars 1 to 4, the opening phrase.
 *
 * The tune is written in 6/2, every length four times as long, so a unit is a quarter. The sixteenth
 * of each dotted pair is then a quarter, and Common plays it at its place.
 *
 * The right hand sits on C to G, and moves up for the high C and A of bars 6 and 14. The thumb then
 * takes D in bars 7 and 15, and C in bars 8 and 16, so the hand is home again.
 *
 * Common plays the tune once over held fifths. Rare plays it once over block triads, held a bar and
 * then a half bar. Epic plays it twice, over an Alberti bass and then an octave up over broken chords, with the
 * pedal. Legendary adds a quick run over a stride bass, then plays the tune in octaves over arpeggios.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's key, a fourth below the print's F major. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 6/2, in quarters: the 16 bars of the verse. */
const tune = [
  "E4:3 E4:1 E4:2 E4:2 D4:2 E4:2 | G4:6 D4:6 | D4:3 D4:1 D4:2 D4:2 C4:2 D4:2 | E4:8 r:4",
  "G4:3 G4:1 G4:2 G4:2 E4:2 C4:2 | C5:6 A4:6 | G4:3 A4:1 G4:2 G4:2 F4:2 D4:2 | C4:10 r:2",
  "D4:3 D4:1 D4:2 E4:2 E4:2 E4:2 | G4:3 F4:1 D4:2 E4:6 | D4:3 D4:1 D4:2 E4:2 E4:2 E4:2 | G4:3 F4:1 D4:2 E4:6",
  "G4:3 F4:1 E4:2 E4:2 D4:2 C4:2 | C5:6 A4:6 | G4:3 A4:1 G4:2 G4:2 F4:2 D4:2 | C4:10 r:2",
].join(" | ");

/** The two bars sung twice, in the right hand, in quarters. */
const REPEATED = "D4/2:3 D4/2:1 D4/2:2 E4/3:2 E4/3:2 E4/3:2 | G4/5:3 F4/4:1 D4/2:2 E4/3:6";

/**
 * The verse in the right hand, in quarters, without its last bar. The thumb lets go of C early in bars
 * 5 and 13, so the hand has a rest to leap up to the high C. The thumb comes back to D in bars 7 and 15.
 */
const VERSE = [
  "E4/3:3 E4/3:1 E4/3:2 E4/3:2 D4/2:2 E4/3:2 | G4/5:6 D4/2:6 | D4/2:3 D4/2:1 D4/2:2 D4/2:2 C4/1:2 D4/2:2 | E4/3:8 r:4",
  "G4/5:3 G4/5:1 G4/5:2 G4/5:2 E4/3:2 C4/1:1 r:1 | C5/5:6 A4/4:6 | G4/3:3 A4/4:1 G4/3:2 G4/3:2 F4/2:2 D4/1:2 | C4/1:10 r:2",
  REPEATED,
  REPEATED,
  "G4/5:3 F4/4:1 E4/3:2 E4/3:2 D4/2:2 C4/1:1 r:1 | C5/5:6 A4/4:6 | G4/3:3 A4/4:1 G4/3:2 G4/3:2 F4/2:2 D4/1:2",
].join(" | ");

/** The verse's last bar in the right hand, in quarters. */
const LAST = "C4/1:10 r:2";

/** `text` with every length multiplied by `times`, so a line in quarters reads in eighths. */
function scaled(text: string, times: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${times * Number(units)}`);
}

/** `text` an octave higher. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** `text` with each fingered note as an octave, the note under the thumb and the octave above under finger 5. */
function octaves(text: string): string {
  return text.replace(
    /([A-G][#b]?)(\d)\/\d/g,
    (_, name: string, octave: string) => `${name}${octave}+${name}${Number(octave) + 1}/1+5`,
  );
}

/** Bars of `patterns` from `halves`, such as `"CC GC"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** Bars of `patterns` from `halves`, where a bar of one chord holds it for the whole bar. */
function heldBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => (bar[0] === bar[1] ? scaled(patterns[bar[0]!]!, 2) : `${patterns[bar[0]!]} ${patterns[bar[1]!]}`))
    .join(" | ");
}

/** `halves` with each half bar before a new chord, and the last, in small letters, so the hand lifts to jump. */
function lifted(halves: string): string {
  const letters = [...halves.replaceAll(" ", "")];
  const marked = letters.map((chord, index) => (chord === letters[index + 1] ? chord : chord.toLowerCase()));
  return marked.join("").replace(/(..)(?=.)/g, "$1 ");
}

/** The chords of the verse, one letter per half bar: C, G seventh and F. */
const HALVES = "CC GG GG CC CC FF GG CC GC GC GC GC CC FF GG CC";

/** The chords of the verse's first 15 bars, one letter per half bar. */
const HALVES_15 = HALVES.slice(0, -3);

/** Half a bar of a held fifth or bass note in quarters, the hand kept on C to G. */
const HELD: Record<string, string> = {
  C: "C3+G3/5+1:6",
  G: "D3+G3/4+1:6",
  F: "C3+F3/5+2:6",
};

/** Half a bar of a block triad in quarters: C, G seventh without its B, or F over C. */
const BLOCK: Record<string, string> = {
  C: "C3+E3+G3/5+3+1:6",
  G: "D3+F3+G3/4+2+1:6",
  F: "C3+F3+A3/5+2+1:6",
};

/** Half a bar of Alberti bass in quarters: low, high, middle, high, middle, high. `R` ends on a rest for the jump. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 E3/3:1 G3/1:1",
  G: "B2/5:1 G3/1:1 F3/2:1 G3/1:1 F3/2:1 G3/1:1",
  F: "C3/5:1 A3/1:1 F3/2:1 A3/1:1 F3/2:1 A3/1:1",
  R: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 E3/3:1 r:1",
};

/** Half a bar of broken chord in quarters: root, fifth, octave, fifth. A small letter ends on a rest for the jump. */
const BROKEN: Record<string, string> = {
  C: "C2/5:1 G2/2:1 C3/1:1 G2/2:1 C3/1:1 G2/2:1",
  c: "C2/5:1 G2/2:1 C3/1:1 G2/2:1 C3/1:1 r:1",
  G: "G2/5:1 D3/2:1 G3/1:1 D3/2:1 G3/1:1 D3/2:1",
  g: "G2/5:1 D3/2:1 G3/1:1 D3/2:1 G3/1:1 r:1",
  F: "F2/5:1 C3/2:1 F3/1:1 C3/2:1 F3/1:1 C3/2:1",
  f: "F2/5:1 C3/2:1 F3/1:1 C3/2:1 F3/1:1 r:1",
};

/**
 * Half a bar of stride in eighths, each part ending on a rest for the jump: the root in octaves, then the
 * chord twice. The G seventh leaves out its B, which would clash with the tune's C.
 */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:3 r:1 C3+E3+G3/5+3+1:3 r:1 C3+E3+G3/5+3+1:3 r:1",
  G: "G1+G2/5+1:3 r:1 D3+F3+G3/5+2+1:3 r:1 D3+F3+G3/5+2+1:3 r:1",
  F: "F1+F2/5+1:3 r:1 C3+F3+A3/5+2+1:3 r:1 C3+F3+A3/5+2+1:3 r:1",
};

/** Half a bar of arpeggio in eighths, up and back down, ending on a rest for the jump. */
const ARPEGGIO: Record<string, string> = {
  C: "C2/5:2 G2/3:2 C3/2:2 E3/1:2 C3/2:2 G2/3:1 r:1",
  G: "G1/5:2 D2/3:2 G2/2:2 B2/1:2 G2/2:2 D2/3:1 r:1",
  F: "F1/5:2 C2/3:2 F2/2:2 A2/1:2 F2/2:2 C2/3:1 r:1",
};

/** The verse an octave up in eighths, with a quick run from G down to D in the rest of bar 4. */
const VERSE_TURN = octaveUp(scaled(VERSE, 2)).replace("E5/3:16 r:8", "E5/3:16 G5/5:2 F5/4:2 E5/3:2 D5/2:2");

/** The verse in octaves in eighths, the hand lifted for an eighth before the leaps down in bars 2 and 5. */
const VERSE_OCTAVES = octaves(scaled(VERSE, 2))
  .replace("G4+G5/1+5:12 D4+D5/1+5:12", "G4+G5/1+5:11 r:1 D4+D5/1+5:12")
  .replace("E4+E5/1+5:4 C4+C5/1+5:2", "E4+E5/1+5:3 r:1 C4+C5/1+5:2");

export const suesserDieGlocken: OurSong = {
  slug: "suesser-die-glocken",
  title: "Süßer die Glocken nie klingen",
  source: {
    composer: "Traditional",
    died: null,
    published: 1860,
    edition: "Bernhard Brähmig, Liederstrauß, Heft 3, Leipzig 1860, as Die Weihnachtsglocken",
  },
  about:
    "Süßer die Glocken nie klingen means Never do the bells ring sweeter in German. " +
    "The theologian and teacher Friedrich Wilhelm Kritzinger wrote the words. " +
    "Bernhard Brähmig first printed the song in 1860, in his collection Liederstrauß, as Die Weihnachtsglocken. " +
    "The tune is the folk song Seht, wie die Sonne dort sinket, known in Thuringia.",
  funFact: "Before it rang for Christmas, the tune sang of evening: its folk song's title means See how the sun sets there.",
  mythic: null,
  collection: "christmas",
  aka: ["Die Weihnachtsglocken", "Seht, wie die Sonne dort sinket"],
  tune: { text: tune, numerator: 6, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 200,
      numerator: 6,
      denominator: 2,
      steps: 2,
      right: [VERSE, LAST].join(" | "),
      left: heldBars(HELD, HALVES),
      skills: ["five-finger-position", "held-bass", "dotted-rhythm"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, where the hand leaps up to the high C.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds one or two shapes in each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "Each dotted pair is a long note and a quick one, like a bell that swings and rings." },
        { fromBar: 5, toBar: 6, kind: "trick", text: "After the thumb plays C, the whole hand leaps up an octave, and finger 5 lands on the high C." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "Bars 11 and 12 repeat bars 9 and 10. Play them a little softer, like an echo." },
      ],
      tricky: {
        6: "The thumb lets go of C early, and finger 5 lands on the high C. Then finger 4 plays A.",
        8: "The thumb moves from D down to C and holds it. Count the long note to its end.",
        16: "The same move as bar 8: the thumb walks from D down to C, and the song ends.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 240,
      numerator: 6,
      denominator: 2,
      steps: 2,
      right: [VERSE, LAST].join(" | "),
      left: [heldBars(BLOCK, HALVES.slice(0, 23)), halfBars(BLOCK, HALVES_15.slice(24)), scaled(BLOCK.C!, 2)].join(" | "),
      skills: ["triads", "dotted-rhythm"],
      practice: [
        { text: "Play the left hand alone, and press the three notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play bars 9 to 16 with the left hand alone, a chord on each half of the bar.", hands: "left", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Hold each chord softly, so the ringing tune stays clear above it." },
        { fromBar: 9, toBar: 16, kind: "rhythm", text: "The left hand now plays a chord on each half of the bar. Count one, two, and press on each count." },
        { fromBar: 6, toBar: 6, kind: "fingering", text: "The left thumb moves up to A for the F chord, while the right hand leaps to the high C." },
      ],
      tricky: {
        8: "The right thumb walks from D down to C, while the left hand changes back to the C chord.",
        14: "Finger 5 leaps up to the high C, and the left thumb moves up to A for the F chord.",
        16: "The thumb walks down to C, and both hands hold the last C chord to the end.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 260,
      numerator: 6,
      denominator: 2,
      steps: 2,
      right: [VERSE, LAST, octaveUp(VERSE).replace(/D5\/1:2$/, "D5/1:1 r:1"), "E4+G4+C5/1+2+5:12"].join(" | "),
      left: [
        halfBars(ALBERTI, `${HALVES_15} CR`),
        halfBars(BROKEN, lifted(HALVES_15)),
        "C2+G2+C3/5+2+1:12",
      ].join(" | "),
      pedal: [...Array(31).fill("P:6 P:6"), "P:12"].join(" | "),
      skills: ["alberti-bass", "broken-chords", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the broken chords of the second time alone, and lift the hand on each rest.", hands: "left", speed: 0.5, loop: [17, 20], wait: false },
        { text: "Join the hands on the first time through, slowly.", hands: "both", speed: 0.5, loop: [1, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the Alberti bass soft, so the tune rings above it like a bell." },
        { fromBar: 16, toBar: 17, kind: "trick", text: "Both hands lift on the rest. The right hand jumps up an octave, and the left drops to a low C." },
        { fromBar: 1, toBar: 32, kind: "sound", text: "Change the pedal on each half bar, as the left hand starts a new chord." },
      ],
      tricky: {
        17: "The tune starts again an octave up, while the left hand starts its broken chords on the low C.",
        24: "Hold the long C while the broken chord rolls on. Lift the left hand on the rest at the end.",
        32: "The thumb lets go of D early. Then the hand drops to the last chord, with finger 5 on C.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 240,
      numerator: 6,
      denominator: 2,
      steps: 4,
      right: [VERSE_TURN, octaveUp(scaled(LAST, 2)), VERSE_OCTAVES, "C4+E4+G4+C5/1+2+3+5:24"].join(" | "),
      left: [
        halfBars(STRIDE, HALVES),
        halfBars(ARPEGGIO, HALVES_15),
        "C2+G2+C3/5+2+1:24",
      ].join(" | "),
      pedal: [...Array(31).fill("P:12 P:12"), "P:24"].join(" | "),
      skills: ["stride", "arpeggios", "sixteenth-notes"],
      practice: [
        { text: "Play the stride bass alone: jump down for the low octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play bars 1 to 8 with the right hand alone, and keep the quick run light.", hands: "right", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the arpeggios of the second time in the left hand alone.", hands: "left", speed: 0.5, loop: [17, 20], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 4, toBar: 4, kind: "sound", text: "The quick run after the long E is a little peal of bells. Play it softer than the tune." },
        { fromBar: 17, toBar: 32, kind: "fingering", text: "Keep the thumb and little finger an octave apart, and let the wrist bounce." },
      ],
      tricky: {
        6: "The right hand leaps up to the high C, while the stride bass jumps down to a low F.",
        7: "The quick A sits between the Gs. Keep finger 4 light, while the stride bass changes to G.",
        14: "The same leap as bar 6. Let go of C on time, so the hand lands calmly on the high C.",
      },
    },
  },
  de: {
    about:
      "Den Text von \"Süßer die Glocken nie klingen\" schrieb der Theologe und Lehrer Friedrich Wilhelm Kritzinger. " +
      "Bernhard Brähmig druckte das Lied 1860 zum ersten Mal, in seiner Sammlung Liederstrauß, unter dem Titel Die Weihnachtsglocken. " +
      "Die Melodie ist das Volkslied \"Seht, wie die Sonne dort sinket\", das man in Thüringen kannte.",
    funFact: "Bevor die Melodie zu Weihnachten läutete, besang sie den Abend: Ihr Volkslied heißt \"Seht, wie die Sonne dort sinket\".",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Lied auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Dort springt die Hand hinauf zum hohen C.",
          "Jetzt die linke Hand allein. Sie hält in jedem Takt eine oder zwei Formen.",
          "Nimm beide Hände zusammen, und spiel das ganze Lied langsam.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Jedes punktierte Paar ist ein langer und ein schneller Ton, wie eine Glocke, die schwingt und läutet.",
          "Nachdem der Daumen das C gespielt hat, springt die ganze Hand eine Oktave hinauf, und Finger 5 landet auf dem hohen C.",
          "Die Takte 11 und 12 wiederholen die Takte 9 und 10. Spiel sie etwas leiser, wie ein Echo.",
        ],
        tricky: {
          6: "Der Daumen lässt das C früh los, und Finger 5 landet auf dem hohen C. Dann spielt Finger 4 das A.",
          8: "Der Daumen geht vom D hinab zum C und hält es. Zähl den langen Ton bis zu seinem Ende aus.",
          16: "Dieselbe Bewegung wie in Takt 8: Der Daumen geht vom D hinab zum C, und das Lied endet.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein, und drück die drei Töne jedes Akkords zusammen.",
          "Spiel die Takte 9 bis 16 nur mit der linken Hand, mit einem Akkord auf jeder Takthälfte.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Halt jeden Akkord leise, damit die klingende Melodie darüber klar bleibt.",
          "Die linke Hand spielt jetzt auf jeder Takthälfte einen Akkord. Zähl eins, zwei, und drück auf jeden Schlag.",
          "Der linke Daumen geht für den F-Akkord hinauf zum A, während die rechte Hand zum hohen C springt.",
        ],
        tricky: {
          8: "Der rechte Daumen geht vom D hinab zum C, während die linke Hand zurück zum C-Akkord wechselt.",
          14: "Finger 5 springt hinauf zum hohen C, und der linke Daumen geht für den F-Akkord hinauf zum A.",
          16: "Der Daumen geht hinab zum C, und beide Hände halten den letzten C-Akkord bis zum Ende.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die gebrochenen Akkorde des zweiten Durchgangs allein, und heb die Hand bei jeder Pause an.",
          "Spiel den ersten Durchgang langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise, damit die Melodie darüber wie eine Glocke klingt.",
          "Beide Hände heben bei der Pause ab. Die rechte Hand springt eine Oktave hinauf, die linke fällt zu einem tiefen C.",
          "Wechsle das Pedal jeden halben Takt, sobald die linke Hand einen neuen Akkord beginnt.",
        ],
        tricky: {
          17: "Die Melodie beginnt eine Oktave höher von vorn, während die linke Hand ihre gebrochenen Akkorde auf dem tiefen C beginnt.",
          24: "Halt das lange C, während der gebrochene Akkord weiterrollt. Heb die linke Hand bei der Pause am Ende an.",
          32: "Der Daumen lässt das D früh los. Dann fällt die Hand auf den letzten Akkord, mit Finger 5 auf C.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Stride-Bass allein: Spring hinunter zur tiefen Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Takte 1 bis 8 nur mit der rechten Hand, und halt den schnellen Lauf leicht.",
          "Spiel die Arpeggien des zweiten Durchgangs nur mit der linken Hand.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau beim Stride auf die tiefe Oktave, und lass die Hand den Akkord nach Gefühl finden.",
          "Der schnelle Lauf nach dem langen E ist ein kleines Glockengeläut. Spiel ihn leiser als die Melodie.",
          "Halt Daumen und kleinen Finger eine Oktave auseinander, und lass das Handgelenk federn.",
        ],
        tricky: {
          6: "Die rechte Hand springt hinauf zum hohen C, während der Stride-Bass hinunter zu einem tiefen F springt.",
          7: "Das schnelle A liegt zwischen den beiden G. Halt Finger 4 leicht, während der Stride-Bass nach G wechselt.",
          14: "Derselbe Sprung wie in Takt 6. Lass das C rechtzeitig los, damit die Hand ruhig auf dem hohen C landet.",
        },
      },
    },
  },
};

/**
 * *Ihr Kinderlein, kommet*: Johann Abraham Peter Schulz's tune of 1794, in four versions of ours.
 *
 * The tune is the whole verse of 16 bars, in C major, after a bar holding the pickup. The print is in
 * 2/4, and every length here is twice as long, in 2/2, so its eighths are quarters and Common plays
 * them. The hook is the pickup bar and the next four, the opening phrase.
 *
 * The right hand keeps one place from D to A for the first 13 bars. Then finger 3 takes G, so finger 5
 * reaches the high C, and the hand walks down to B with no jump.
 *
 * Common plays the tune once over held fifths. Rare plays it once over block triads. Epic plays it
 * twice, over an Alberti bass and then an octave up over broken chords, with the pedal. Legendary adds
 * quick groups of notes over a stride bass, then plays the tune in octaves over arpeggios, and ends on a
 * four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, a step below the print's D major. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 2/2, in quarters: the pickup bar, then the 16 bars of the verse. */
const tune = [
  "r:3 G4:1",
  "G4:2 E4:1 G4:1 | G4:2 E4:1 G4:1 | F4:2 D4:1 F4:1 | E4:2 r:1 G4:1",
  "G4:2 E4:1 G4:1 | G4:2 E4:1 G4:1 | F4:2 D4:1 F4:1 | E4:2 r:1 E4:1",
  "D4:2 D4:1 D4:1 | F4:2 F4:1 F4:1 | E4:2 E4:1 E4:1 | A4:2 r:1 A4:1",
  "G4:2 G4:1 G4:1 | C5:2 G4:1 E4:1 | F4:2 D4:1 B3:1 | C4:3 r:1",
].join(" | ");

/** The pickup bar in the right hand, in quarters: finger 4 on G. */
const PICKUP = "r:3 G4/4:1";

/**
 * The verse in the right hand, in quarters, without its last bar. The hand stays on D to A until finger 5
 * reaches up to C in bar 14, then finger 2 takes D after the long F of bar 15.
 */
const VERSE = [
  "G4/4:2 E4/2:1 G4/4:1 | G4/4:2 E4/2:1 G4/4:1 | F4/3:2 D4/1:1 F4/3:1 | E4/2:2 r:1 G4/4:1",
  "G4/4:2 E4/2:1 G4/4:1 | G4/4:2 E4/2:1 G4/4:1 | F4/3:2 D4/1:1 F4/3:1 | E4/2:2 r:1 E4/2:1",
  "D4/1:2 D4/1:1 D4/1:1 | F4/3:2 F4/3:1 F4/3:1 | E4/2:2 E4/2:1 E4/2:1 | A4/5:2 r:1 A4/5:1",
  "G4/3:2 G4/3:1 G4/3:1 | C5/5:2 G4/3:1 E4/2:1 | F4/3:2 D4/2:1 B3/1:1",
].join(" | ");

/** `text` with every length multiplied by `times`, so a line in quarters reads in eighths or sixteenths. */
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

/** Bars of `patterns` from `halves`, such as `"CC GG"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** The chord of each bar of the verse: C, G and F. */
const CHORDS = "CCGCCCGCGGCFCCGC";

/** The chords of the verse's first 15 bars, one letter per half bar. */
const HALVES = [...CHORDS.slice(0, 15)].map((chord) => chord + chord).join(" ");

/** One bar of a held fifth or bass note in quarters, the hand kept on C to G. */
const HELD: Record<string, string> = {
  C: "C3+G3/5+1:4",
  G: "D3+G3/4+1:4",
  F: "F3/2:4",
};

/** Half a bar of a block triad in quarters: C, G seventh without its B, or F over C. */
const BLOCK: Record<string, string> = {
  C: "C3+E3+G3/5+3+1:2",
  G: "D3+F3+G3/4+2+1:2",
  F: "C3+F3+A3/5+2+1:2",
};

/** Half a bar of Alberti bass in eighths: low, high, middle, high. `R` is C with a rest for the jump. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  G: "B2/5:1 G3/1:1 F3/2:1 G3/1:1",
  F: "C3/5:1 A3/1:1 F3/2:1 A3/1:1",
  R: "C3/5:1 G3/1:1 E3/3:1 r:1",
};

/** Half a bar of broken chord in eighths: root, fifth, octave, fifth. A small letter ends on a rest for the jump. */
const BROKEN: Record<string, string> = {
  C: "C2/5:1 G2/2:1 C3/1:1 G2/2:1",
  c: "C2/5:1 G2/2:1 C3/1:1 r:1",
  G: "G2/5:1 D3/2:1 G3/1:1 D3/2:1",
  g: "G2/5:1 D3/2:1 G3/1:1 r:1",
  F: "F2/5:1 C3/2:1 F3/1:1 C3/2:1",
  f: "F2/5:1 C3/2:1 F3/1:1 r:1",
};

/** `halves` with each half bar before a new chord, and the last, in small letters, so the hand lifts to jump. */
function lifted(halves: string): string {
  const letters = [...halves.replaceAll(" ", "")];
  const marked = letters.map((chord, index) => (chord === letters[index + 1] ? chord : chord.toLowerCase()));
  return marked.join("").replace(/(..)(?=.)/g, "$1 ");
}

/** Half a bar of stride in sixteenths: the root in octaves, then the chord, each an eighth with an eighth's rest. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:2 r:2 E3+G3+C4/3+2+1:2 r:2",
  G: "G1+G2/5+1:2 r:2 B2+F3+G3/5+2+1:2 r:2",
  F: "F1+F2/5+1:2 r:2 A2+C3+F3/5+3+1:2 r:2",
};

/** Half a bar of arpeggio in sixteenths, two octaves up from the root, then an eighth's rest for the jump. */
const ARPEGGIO: Record<string, string> = {
  C: "C2/5:1 G2/3:1 C3/2:1 E3/1:1 G3/3:1 C4/2:1 r:2",
  G: "G1/5:1 D2/3:1 G2/2:1 B2/1:1 D3/3:1 G3/2:1 r:2",
  F: "F1/5:1 C2/3:1 F2/2:1 A2/1:1 C3/3:1 F3/2:1 r:2",
};

/** The verse an octave up in sixteenths, with a quick group of four notes in the rests of bars 4 and 8. */
const VERSE_FIGURES =octaveUp(scaled(VERSE, 4))
  .replace("E5/2:8 r:4 G5/4:4", "E5/2:8 F5/3:1 E5/2:1 D5/1:2 G5/4:4")
  .replace("E5/2:8 r:4 E5/2:4", "E5/2:8 F5/3:1 E5/2:1 D5/1:2 E5/2:4");

/** The verse in octaves in sixteenths, the hand lifted for an eighth before each leap of a fourth. */
const VERSE_OCTAVES = octaves(scaled(VERSE, 4))
  .replace("E4+E5/1+5:4 | A4", "E4+E5/1+5:2 r:2 | A4")
  .replace("G4+G5/1+5:4 | C5+C6/1+5:8", "G4+G5/1+5:2 r:2 | C5+C6/1+5:6 r:2");

export const ihrKinderleinKommet: OurSong = {
  slug: "ihr-kinderlein-kommet",
  title: "Ihr Kinderlein, kommet",
  source: {
    composer: "Johann Abraham Peter Schulz",
    died: 1800,
    published: 1794,
    edition: "Taschenbuch zum geselligen Vergnügen auf das Jahr 1795, Leipzig (1794), Schulz's tune to Wie reizend, wie wonnig",
  },
  about:
    "The German title Ihr Kinderlein, kommet means Come, little children. " +
    "The priest Christoph von Schmid wrote the words, and called his poem The Children at the Manger. " +
    "Johann Abraham Peter Schulz wrote the tune in 1794 for a spring poem by Wilhelm Gottlieb Becker. " +
    "Schmid's words were later sung to that spring tune, and together they became a Christmas song.",
  funFact: "Christoph von Schmid also wrote stories for children, such as Das Blumenkörbchen, The Basket of Flowers.",
  mythic: null,
  collection: "christmas",
  aka: ["Come, Little Children", "Die Kinder bey der Krippe"],
  tune: { text: tune, numerator: 2, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 5] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 112,
      numerator: 2,
      denominator: 2,
      steps: 2,
      right: [PICKUP, VERSE, "C4/2:4"].join(" | "),
      left: ["r:4", ...[...CHORDS].map((chord) => HELD[chord])].join(" | "),
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first five bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play the last four bars with the right hand alone, where the tune reaches up to the high C.", hands: "right", speed: 0.6, loop: [14, 17], wait: true },
        { text: "Now the left hand alone. It holds one shape for each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "rhythm", text: "Each bar starts with a long note and ends with two short ones, like a cradle rocking." },
        { fromBar: 13, toBar: 13, kind: "rhythm", text: "Bar 13 has a rest after the first A. Lift the finger, count the rest, and play A again." },
        { fromBar: 15, toBar: 17, kind: "fingering", text: "Finger 5 plays the high C. Then the hand walks down, and the thumb ends on B." },
      ],
      tricky: {
        2: "Finger 4 plays G, and finger 2 drops to E. Keep the hand still over D to A.",
        15: "Finger 5 stretches up to the high C, then fingers 3 and 2 play G and E.",
        16: "Fingers 3 and 2 play F and D, and the thumb reaches down to B.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 2,
      denominator: 2,
      steps: 2,
      right: [PICKUP, VERSE, "C4/2:4"].join(" | "),
      left: [
        "r:4",
        [..."CCGCCCGC"].map((chord) => BLOCK[chord]!.replace(":2", ":4")).join(" | "),
        halfBars(BLOCK, "GG GG CC FF CC CC GG CC"),
      ].join(" | "),
      skills: ["triads", "position-change"],
      practice: [
        { text: "Play the left hand alone, and press the three notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play bars 10 to 17 with the left hand alone, two chords in each bar.", hands: "left", speed: 0.6, loop: [10, 17], wait: true },
        { text: "Join the hands on the whole song, slowly.", hands: "both", speed: 0.6, loop: null, wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "sound", text: "Hold each chord softly, so the rocking tune stays clear above it." },
        { fromBar: 13, toBar: 14, kind: "fingering", text: "The left thumb moves up to A for the F chord in bar 13, and back to G in bar 14." },
        { fromBar: 10, toBar: 17, kind: "rhythm", text: "The left hand now plays a chord on each half of the bar. Count one, two, and press on each count." },
      ],
      tricky: {
        14: "Finger 3 plays G three times, while the left thumb slides back from A to G.",
        15: "Finger 5 reaches up to the high C, then finger 3 comes back to G.",
        16: "Fingers 3, 2 and 1 walk down F, D and B over a G seventh chord.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 126,
      numerator: 2,
      denominator: 2,
      steps: 4,
      right: [scaled(PICKUP, 2), scaled(VERSE, 2), "C4/2:5 r:1 G5/4:2", octaveUp(scaled(VERSE, 2)), "E4+G4+C5/1+2+5:8"].join(" | "),
      left: [
        "r:8",
        halfBars(ALBERTI, `${HALVES} CR`),
        halfBars(BROKEN, lifted(HALVES)),
        "C2+G2+C3/5+2+1:8",
      ].join(" | "),
      pedal: ["r:8", ...Array(31).fill("P:4 P:4"), "P:8"].join(" | "),
      skills: ["alberti-bass", "broken-chords", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the broken chords of the second time alone, and lift the hand on each rest.", hands: "left", speed: 0.5, loop: [18, 21], wait: false },
        { text: "Join the hands on the first time through, slowly.", hands: "both", speed: 0.5, loop: [1, 17], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 17, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 17, toBar: 18, kind: "trick", text: "Both hands lift on a rest. The right hand jumps up to the high G, and the left drops to a low C." },
        { fromBar: 2, toBar: 33, kind: "sound", text: "Change the pedal on each half bar, as the left hand starts its pattern again." },
      ],
      tricky: {
        17: "Hold the C, lift the hand on the rest, and land finger 4 on the high G.",
        18: "The tune starts again an octave up, while the left hand starts its broken chords on the low C.",
        21: "The tune rests after the long E. Count the rest, then finger 4 plays G.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 108,
      numerator: 2,
      denominator: 2,
      steps: 8,
      right: [
        "r:12 G5/4:4",
        VERSE_FIGURES,
        "C5/2:10 r:2 G4+G5/1+5:4",
        VERSE_OCTAVES,
        "C4+E4+G4+C5/1+2+3+5:16",
      ].join(" | "),
      left: [
        "r:16",
        halfBars(STRIDE, `${HALVES} CC`),
        halfBars(ARPEGGIO, HALVES),
        "C2+G2+C3/5+2+1:16",
      ].join(" | "),
      pedal: ["r:16", ...Array(31).fill("P:8 P:8"), "P:16"].join(" | "),
      skills: ["stride", "arpeggios", "sixteenth-notes"],
      practice: [
        { text: "Play the stride bass alone: jump down for the low octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play bars 2 to 9 with the right hand alone, and keep the quick groups of notes light.", hands: "right", speed: 0.5, loop: [2, 9], wait: true },
        { text: "Play the arpeggios of the second time in the left hand alone.", hands: "left", speed: 0.5, loop: [18, 21], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 17, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 5, toBar: 5, kind: "sound", text: "The quick group of notes after the long E is a little skip. Play it softer than the tune." },
        { fromBar: 18, toBar: 33, kind: "fingering", text: "Keep the thumb and little finger an octave apart, and let the wrist bounce." },
      ],
      tricky: {
        20: "The octaves step F, D and F over a G arpeggio. Keep the hand in its octave shape.",
        24: "The same steps as bar 20. Let the arpeggio run on under the octaves.",
        29: "The octave A lands after a short lift. Count the rest, then play the A again.",
      },
    },
  },
  de: {
    about:
      "Ihr Kinderlein, kommet heißt auf Englisch Come, little children. " +
      "Der Priester Christoph von Schmid schrieb den Text und nannte sein Gedicht Die Kinder bei der Krippe. " +
      "Johann Abraham Peter Schulz schrieb die Melodie 1794 für ein Frühlingsgedicht von Wilhelm Gottlieb Becker. " +
      "Später sang man Schmids Text zu dieser Frühlingsmelodie, und zusammen wurden sie ein Weihnachtslied.",
    funFact: "Christoph von Schmid schrieb auch Geschichten für Kinder, etwa Das Blumenkörbchen.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten fünf Takte nur mit der rechten Hand, und lass das Lied auf jeden Ton warten.",
          "Spiel die letzten vier Takte nur mit der rechten Hand. Dort reicht die Melodie hinauf bis zum hohen C.",
          "Jetzt die linke Hand allein. Sie hält in jedem Takt eine einzige Handform.",
          "Spiel das ganze Lied langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Jeder Takt beginnt mit einem langen Ton und endet mit zwei kurzen, wie eine schaukelnde Wiege.",
          "In Takt 13 steht nach dem ersten A eine Pause. Heb den Finger, zähl die Pause, und spiel das A noch einmal.",
          "Finger 5 spielt das hohe C. Dann wandert die Hand hinab, und der Daumen endet auf dem H.",
        ],
        tricky: {
          2: "Finger 4 spielt das G, und Finger 2 fällt auf das E. Halt die Hand ruhig über D bis A.",
          15: "Finger 5 streckt sich hinauf zum hohen C, dann spielen Finger 3 und 2 das G und das E.",
          16: "Finger 3 und 2 spielen F und D, und der Daumen greift hinunter zum H.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein, und drück die drei Töne jedes Akkords zusammen.",
          "Spiel die Takte 10 bis 17 nur mit der linken Hand, zwei Akkorde in jedem Takt.",
          "Spiel das ganze Lied langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Halt jeden Akkord leise, damit die schaukelnde Melodie darüber klar bleibt.",
          "Der linke Daumen geht in Takt 13 für den F-Akkord hinauf zum A, und in Takt 14 zurück zum G.",
          "Die linke Hand spielt jetzt auf jeder Takthälfte einen Akkord. Zähl eins, zwei, und drück auf jeden Schlag.",
        ],
        tricky: {
          14: "Finger 3 spielt dreimal das G, während der linke Daumen vom A zurück zum G gleitet.",
          15: "Finger 5 greift hinauf zum hohen C, dann kehrt Finger 3 zum G zurück.",
          16: "Finger 3, 2 und 1 wandern hinab über F, D und H, über einem G-Septakkord.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die gebrochenen Akkorde des zweiten Durchgangs allein, und heb die Hand bei jeder Pause.",
          "Spiel den ersten Durchgang langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise, damit die Melodie darüber singt.",
          "Beide Hände heben in einer Pause ab. Die rechte Hand springt hinauf zum hohen G, die linke fällt auf ein tiefes C.",
          "Wechsle das Pedal auf jeder Takthälfte, sobald die linke Hand ihr Muster neu beginnt.",
        ],
        tricky: {
          17: "Halt das C, heb die Hand in der Pause, und setz Finger 4 auf das hohe G.",
          18: "Die Melodie beginnt eine Oktave höher von vorn, und die linke Hand beginnt ihre gebrochenen Akkorde auf dem tiefen C.",
          21: "Nach dem langen E pausiert die Melodie. Zähl die Pause, dann spielt Finger 4 das G.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Stride-Bass allein: Spring hinunter zur tiefen Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Takte 2 bis 9 nur mit der rechten Hand, und spiel die schnellen Notengruppen leicht.",
          "Spiel die Arpeggien des zweiten Durchgangs nur mit der linken Hand.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau beim Stride auf die tiefe Oktave, und lass die Hand den Akkord nach Gefühl finden.",
          "Die schnelle Notengruppe nach dem langen E ist ein kleiner Hüpfer. Spiel sie leiser als die Melodie.",
          "Halt Daumen und kleinen Finger eine Oktave auseinander, und lass das Handgelenk federn.",
        ],
        tricky: {
          20: "Die Oktaven schreiten über F, D und F, während ein G-Arpeggio läuft. Halt die Hand in ihrer Oktavform.",
          24: "Dieselben Schritte wie in Takt 20. Lass das Arpeggio unter den Oktaven weiterlaufen.",
          29: "Die Oktave A kommt nach einem kurzen Abheben. Zähl die Pause, dann spiel das A noch einmal.",
        },
      },
    },
  },
};

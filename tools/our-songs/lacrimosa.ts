/**
 * *Lacrimosa*: the soprano's first phrase from the Lacrimosa of Mozart's Requiem, in four versions of ours.
 *
 * The tune is the soprano's "Lacrimosa dies illa", bars 3 and 4 of the vocal score. The print is in 12/8
 * and D minor. The tune writes every eighth as a quarter, so it reads in 12/4. Its first A is a dotted
 * quarter tied to an eighth, which makes one note of four units. The hook is both bars.
 *
 * Every version writes the tune in 6/4 quarters, two bars per print bar, so each print beat is half a
 * bar. The print's chords, one per beat, are D minor, then G minor or B-flat major, then D minor, then A
 * major. Every version plays the tune two or three times, with bars of our own between, over D minor,
 * G minor, B-flat major, A major and A7. It closes on D minor.
 *
 * Common plays the tune over held bass notes and open fifths. Its first A ends an eighth early, so the
 * hand has a breath to reach up a sixth. Rare rocks a two-note chord, long then short, on each beat.
 * Common and Rare put G minor under the held A, where B flat would rub against it. Epic rolls broken
 * chords in eighths under the tune with the pedal, plays it again in sixths, then an octave up. Legendary
 * sets it over an octave bass, plays it in sixths and then in octaves, and ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 12/4, in quarters, which are the print's eighths: one bar per print bar. */
const tune = "A4:4 F5:1 E5:1 D5:3 C#5:1 r:2 | A4:4 F5:1 D5:1 D5:3 C#5:1 r:2";

/** The tune in 6/4, in quarters, fingered in one place. */
const TUNE_RIGHT = "A4/1:4 F5/5:1 E5/4:1 | D5/3:3 C#5/2:1 r:2 | A4/1:4 F5/5:1 D5/3:1 | D5/3:3 C#5/2:1 r:2";

/** Our first eight bars after the tune, in 6/4 quarters, over G minor, B flat, D minor, A and A7. */
const OWN_A = [
  "D5/3:2 Bb4/1:1 D5/3:3 | F5/5:2 D5/3:1 F5/5:3 | F5/5:2 E5/4:1 D5/3:3 | E5/4:3 C#5/2:3",
  "D5/3:3 F5/5:3 | E5/4:2 D5/3:1 A4/1:3 | C#5/2:2 E5/4:1 E5/4:3 | G5/5:2 E5/4:1 C#5/2:3",
].join(" | ");

/** Our second eight bars after the tune, in 6/4 quarters, ending on A. */
const OWN_B = [
  "F5/5:3 E5/4:3 | D5/3:2 E5/4:1 D5/3:3 | E5/4:2 C#5/2:1 A4/1:3 | D5/3:2 E5/4:1 F5/5:3",
  "D5/3:2 E5/4:1 F5/5:3 | E5/4:3 C#5/2:3 | D5/3:6 | A4/1:6",
].join(" | ");

/** The chords under the tune, two beats per bar: G minor under the held A of the second print bar. */
const TUNE_CHORDS = "dgdadgda";

/** The chords under the tune with the print's B flat under the held A of the second print bar. */
const TUNE_CHORDS_B_FLAT = "dgdadbda";

/** The chords under `OWN_A`, two beats per bar. */
const OWN_A_CHORDS = "ggbbddaabgddaa77";

/** The chords under `OWN_B`, two beats per bar. */
const OWN_B_CHORDS = "dadgaadbgbaaddaa";

/** The tune in 6/4 eighths, with a third or a sixth under every note. */
const TUNE_SIXTHS = [
  "F4+A4/1+2:8 A4+F5/2+5:2 G4+E5/1+4:2 | F4+D5/1+3:6 E4+C#5/1+2:2 r:4",
  "F4+A4/1+2:8 A4+F5/2+5:2 F4+D5/1+3:2 | F4+D5/1+3:6 E4+C#5/1+2:2 r:4",
].join(" | ");

/** The tune in 6/4 eighths, in octaves. Each A ends an eighth early, so the hand can jump in the rest. */
const TUNE_OCTAVES = [
  "A3+A4/1+5:7 r:1 F4+F5/1+5:2 E4+E5/1+5:2 | D4+D5/1+5:6 C#4+C#5/1+5:2 r:4",
  "A3+A4/1+5:7 r:1 F4+F5/1+5:2 D4+D5/1+5:2 | D4+D5/1+5:6 C#4+C#5/1+5:2 r:4",
].join(" | ");

/** Epic's and Legendary's two bars before the last, in 6/4 quarters: thirds and sixths over G minor and A7. */
const BEFORE_LAST = "Bb4+D5/2+4:2 G4+Bb4/1+2:1 Bb4+D5/2+4:3 | G4+E5/1+5:2 E4+C#5/1+3:1 E4+A4/1+3:3";

/** `text` an octave up: every note name's octave plus one. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** Bars of `patterns` from `chords`, such as `"dgda"`: one letter per beat, two beats per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  const beats = [...chords].map((chord) => {
    const pattern = patterns[chord];
    if (pattern === undefined) throw new Error(`No pattern for chord ${chord}`);
    return pattern;
  });
  const lines: string[] = [];
  for (let at = 0; at < beats.length; at += 2) lines.push(beats.slice(at, at + 2).join(" "));
  return lines.join(" | ");
}

/** Common's bass on each beat, in eighths: a dotted half. */
const HELD: Record<string, string> = {
  d: "A2+D3/4+1:6",
  g: "G2+D3/5+1:6",
  b: "Bb2+D3/3+1:6",
  a: "A2/4:6",
};

/** Rare's two-note chord on each beat, in quarters: long, then short. Rare plays G minor for B flat. */
const PULSE: Record<string, string> = {
  d: "A2+D3/4+1:2 A2+D3/4+1:1",
  g: "G2+D3/5+1:2 G2+D3/5+1:1",
  b: "G2+D3/5+1:2 G2+D3/5+1:1",
  a: "A2+C#3/4+2:2 A2+C#3/4+2:1",
  "7": "A2+C#3/4+2:2 A2+C#3/4+2:1",
};

/**
 * Epic's broken chord on each beat, in eighths: the root, then the third and the fifth twice, then a rest
 * to move to the next chord. The third falls between the quarters, so it never rubs against the tune.
 */
const BROKEN: Record<string, string> = {
  d: "D3/5:1 F3/2:1 A3/1:1 F3/2:1 A3/1:1 r:1",
  g: "G2/5:1 Bb2/2:1 D3/1:1 Bb2/2:1 D3/1:1 r:1",
  b: "Bb2/5:1 D3/2:1 F3/1:1 D3/2:1 F3/1:1 r:1",
  a: "A2/5:1 C#3/2:1 E3/1:1 C#3/2:1 E3/1:1 r:1",
  "7": "A2/5:1 C#3/2:1 G3/1:1 C#3/2:1 G3/1:1 r:1",
  z: "A2+E3+G3/5+2+1:4 r:2",
};

/** Legendary's octave bass on each beat, in eighths, then the fifth and the third, then a rest to jump. */
const OCTAVE: Record<string, string> = {
  d: "D2+D3/5+1:2 A2/3:1 F3/1:1 r:2",
  g: "G1+G2/5+1:2 D2/3:1 Bb2/1:1 r:2",
  b: "Bb1+Bb2/5+1:2 F2/3:1 D3/1:1 r:2",
  a: "A1+A2/5+1:2 E2/3:1 C#3/1:1 r:2",
  "7": "A1+A2/5+1:2 E2/3:1 G2/1:1 r:2",
};

/** The chords of Epic and Legendary before their last bar, two beats per bar. */
const BIG_CHORDS = `${TUNE_CHORDS_B_FLAT}${OWN_A_CHORDS}${TUNE_CHORDS_B_FLAT}${OWN_B_CHORDS}${TUNE_CHORDS_B_FLAT}gg7`;

/** Common's tune in 6/4, in eighths: each A ends an eighth early, before the reach up to F. */
const COMMON_TUNE = "A4/1:7 r:1 F5/5:2 E5/4:2 | D5/3:6 C#5/2:2 r:4 | A4/1:7 r:1 F5/5:2 D5/3:2 | D5/3:6 C#5/2:2 r:4";

export const lacrimosa: OurSong = {
  slug: "lacrimosa",
  title: "Lacrimosa",
  aka: ["Lacrymosa", "Requiem in D minor", "K. 626"],
  source: {
    composer: "Wolfgang Amadeus Mozart, completed by Franz Xaver Süssmayr",
    died: 1803,
    published: 1800,
    edition:
      "Requiem in D minor, K. 626, No. 7 Lacrimosa, the soprano's bars 3 and 4, in the vocal score with Latin and German text that Wikimedia Commons scans",
  },
  about:
    "Mozart died in 1791 while he was writing his Requiem. " +
    "His pupil Franz Xaver Süssmayr finished it, and Breitkopf & Härtel printed the score in 1800. " +
    "The film Amadeus tells the story of how Mozart wrote this Requiem.",
  funFact: "Mozart's own draft of the Lacrimosa breaks off after its first eight bars.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 12, denominator: 4, key: D_MINOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 104,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [
        COMMON_TUNE,
        "D5/3:4 E5/4:2 F5/5:6 | E5/4:4 D5/3:2 C#5/2:6 | D5/3:4 F5/5:2 E5/4:4 D5/3:2 | C#5/2:4 E5/4:2 A4/1:6",
        COMMON_TUNE,
        "D5/3:6 F5/5:4 D5/3:2 | A4/1:4 D5/3:2 E5/4:4 C#5/2:2 | F5/5:4 E5/4:2 C#5/2:6 | D5/3:12",
      ].join(" | "),
      left: [
        bars(HELD, TUNE_CHORDS),
        `${bars(HELD, "gb")} | A2/4:12 | ${bars(HELD, "dg")} | A2/4:12`,
        bars(HELD, TUNE_CHORDS),
        `${bars(HELD, "gbdada")} | A2+D3/4+1:12`,
      ].join(" | "),
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. They answer the tune with a new phrase.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds one shape for half a bar at a time.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "trick", text: "Lift the hand just before the high F. Then finger 5 lands on it softly." },
        { fromBar: 1, toBar: 4, kind: "sound", text: "Each falling pair of notes is a sigh. Play the first note a little louder than the second." },
        { fromBar: 5, toBar: 8, kind: "fingering", text: "Each finger keeps its own key. Finger 2 always plays C sharp." },
      ],
      tricky: {
        1: "Spread the right hand from A up to F. Lift it for a moment before finger 5 plays F.",
        7: "The left hand changes from A to G in the middle of the bar. Finger 5 takes the low G.",
        15: "Fingers 5, 4 and 2 step down from F to C sharp. The left hand changes to A on the long note.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 116,
      numerator: 6,
      denominator: 4,
      right: [TUNE_RIGHT, OWN_A, TUNE_RIGHT, OWN_B, "F5/5:2 E5/4:1 D5/3:3 | E5/4:2 C#5/2:1 A4/1:3 | D5/3:6"].join(" | "),
      left: `${bars(PULSE, `${TUNE_CHORDS}${OWN_A_CHORDS}${TUNE_CHORDS}${OWN_B_CHORDS}ddaa`)} | A2+D3+F3/4+2+1:6`,
      skills: ["two-note-chords", "waltz-bass"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the left hand alone. Each chord comes twice: long, then short.", hands: "left", speed: 0.6, loop: [1, 12], wait: true },
        { text: "Join the hands on the first twelve bars, slowly.", hands: "both", speed: 0.6, loop: [1, 12], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "Count six beats in each bar. The left hand plays on beats 1, 3, 4 and 6." },
        { fromBar: 1, toBar: 12, kind: "sound", text: "Let the left hand rock gently, like a slow boat, and keep it softer than the tune." },
        { fromBar: 12, toBar: 12, kind: "fingering", text: "Finger 5 reaches up to G for one note, then the hand comes back." },
      ],
      tricky: {
        11: "Play E twice with finger 4. Lift the finger a little between the two notes.",
        12: "Stretch finger 5 up to G, then let fingers 4 and 2 fall back to E and C sharp.",
        17: "The low A stays. The thumb leaves D, and finger 2 plays the C sharp just below it.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 112,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [
        inEighths(TUNE_RIGHT),
        inEighths(OWN_A),
        TUNE_SIXTHS,
        inEighths(OWN_B),
        inEighths(octaveUp(TUNE_RIGHT)),
        inEighths(BEFORE_LAST),
        "F4+A4+D5/1+2+5:12",
      ].join(" | "),
      left: `${bars(BROKEN, `${BIG_CHORDS}z`)} | D2+A2+D3/5+2+1:12`,
      pedal: [...Array(30).fill("P:6 P:6"), "P:12"].join(" | "),
      markedClashBars: [3, 15, 27],
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone. Each beat starts on the bass note, then rocks between two higher notes.", hands: "left", speed: 0.5, loop: [1, 12], wait: true },
        { text: "Play the right hand's sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [13, 16], wait: true },
        { text: "Join the hands on the first twelve bars, slowly.", hands: "both", speed: 0.5, loop: [1, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 12, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 3, toBar: 3, kind: "sound", text: "B flat in the bass rubs against the held A. That sad rub is on purpose." },
        { fromBar: 13, toBar: 16, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        13: "The pairs open from a third to a sixth. Fingers 2 and 5 take A and F together.",
        25: "The tune jumps up an octave. Move the thumb from the low A to the high A in one smooth arc.",
        29: "In the middle of this bar, finger 2 stays on B flat and the thumb adds G below it.",
      },
    },
    legendary: {
      key: D_MINOR,
      bpm: 120,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [
        inEighths(TUNE_RIGHT),
        inEighths(OWN_A),
        TUNE_SIXTHS,
        inEighths(OWN_B),
        TUNE_OCTAVES,
        inEighths(BEFORE_LAST),
        "D4+F4+A4+D5/1+2+3+5:12",
      ].join(" | "),
      left: `${bars(OCTAVE, `${BIG_CHORDS}7`)} | D2+A2+D3/5+2+1:12`,
      pedal: [...Array(30).fill("P:6 P:6"), "P:12"].join(" | "),
      markedClashBars: [3, 15, 27],
      skills: ["octave-bass", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: the octave, two quick notes, then a short rest to jump.", hands: "left", speed: 0.5, loop: [1, 12], wait: true },
        { text: "Play the right hand's octaves alone. Keep the hand open, with the thumb and little finger ready.", hands: "right", speed: 0.5, loop: [25, 28], wait: true },
        { text: "Join the hands on the first twelve bars, slowly.", hands: "both", speed: 0.5, loop: [1, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 12, kind: "trick", text: "Use the short rest at the end of each beat to jump to the next octave." },
        { fromBar: 25, toBar: 28, kind: "sound", text: "Let the little finger sing the top note of each octave a little louder." },
        { fromBar: 31, toBar: 31, kind: "sound", text: "Play the last chord softly, and hold it until the sound fades." },
      ],
      tricky: {
        13: "The pairs open from a third to a sixth. Fingers 2 and 5 take A and F together.",
        25: "The octaves begin. Open the hand with the thumb on the low A and the little finger on the A above.",
        27: "Use the short rest after A to jump up to the octave on F.",
      },
    },
  },
  de: {
    about:
      "Mozart starb 1791, während er an seinem Requiem schrieb. " +
      "Sein Schüler Franz Xaver Süßmayr vollendete es, und Breitkopf & Härtel druckte die Partitur im Jahr 1800. " +
      "Der Film Amadeus erzählt, wie Mozart dieses Requiem schrieb.",
    funFact: "Mozarts eigener Entwurf des Lacrimosa bricht nach den ersten acht Takten ab.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Sie antworten der Melodie mit einer neuen Phrase.",
          "Jetzt die linke Hand allein. Sie hält jeden Griff einen halben Takt lang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Heb die Hand kurz vor dem hohen F an. Dann landet Finger 5 sanft darauf.",
          "Jedes fallende Tonpaar ist ein Seufzer. Spiel den ersten Ton etwas lauter als den zweiten.",
          "Jeder Finger bleibt auf seiner eigenen Taste. Finger 2 spielt immer das Cis.",
        ],
        tricky: {
          1: "Spann die rechte Hand vom A hinauf bis zum F. Heb sie kurz an, bevor Finger 5 das F spielt.",
          7: "Die linke Hand wechselt mitten im Takt von A zu G. Finger 5 nimmt das tiefe G.",
          15: "Finger 5, 4 und 2 steigen vom F hinab zum Cis. Die linke Hand wechselt beim langen Ton zum A.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Jeder Akkord kommt zweimal: erst lang, dann kurz.",
          "Spiel die ersten zwölf Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Zähl in jedem Takt sechs Schläge. Die linke Hand spielt auf den Schlägen 1, 3, 4 und 6.",
          "Lass die linke Hand sanft schaukeln wie ein langsames Boot, und spiel sie leiser als die Melodie.",
          "Finger 5 greift für einen Ton hinauf zum G, dann kommt die Hand zurück.",
        ],
        tricky: {
          11: "Spiel das E zweimal mit Finger 4. Heb den Finger zwischen den beiden Tönen ein wenig an.",
          12: "Streck Finger 5 hinauf zum G, dann lass Finger 4 und 2 zurück auf E und Cis fallen.",
          17: "Das tiefe A bleibt. Der Daumen verlässt das D, und Finger 2 spielt das Cis direkt darunter.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Jeder Schlag beginnt auf dem Basston und schaukelt dann zwischen zwei höheren Tönen.",
          "Spiel die Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten zwölf Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Das B im Bass reibt sich am gehaltenen A. Diese traurige Reibung ist gewollt.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          13: "Die Paare öffnen sich von der Terz zur Sexte. Finger 2 und 5 nehmen A und F zusammen.",
          25: "Die Melodie springt eine Oktave höher. Führ den Daumen in einem ruhigen Bogen vom tiefen A zum hohen A.",
          29: "In der Mitte des Takts bleibt Finger 2 auf dem B, und der Daumen nimmt das G darunter dazu.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: die Oktave, zwei schnelle Töne, dann eine kurze Pause zum Springen.",
          "Spiel die Oktaven der rechten Hand allein. Halt die Hand offen, mit Daumen und kleinem Finger bereit.",
          "Spiel die ersten zwölf Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause am Ende jedes Schlags, um zur nächsten Oktave zu springen.",
          "Lass den kleinen Finger den oberen Ton jeder Oktave etwas lauter singen.",
          "Spiel den letzten Akkord leise, und halt ihn, bis der Klang verklingt.",
        ],
        tricky: {
          13: "Die Paare öffnen sich von der Terz zur Sexte. Finger 2 und 5 nehmen A und F zusammen.",
          25: "Die Oktaven beginnen. Öffne die Hand, mit dem Daumen auf dem tiefen A und dem kleinen Finger auf dem A darüber.",
          27: "Nutz die kurze Pause nach dem A, um hinauf zur Oktave auf F zu springen.",
        },
      },
    },
  },
};

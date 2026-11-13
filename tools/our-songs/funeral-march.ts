/**
 * *Funeral March*: the opening of the third movement of Chopin's Piano Sonata No. 2, in four versions of
 * ours.
 *
 * The tune is bars 1 to 4 of the march, from two public domain typesets of the opening. The print is in
 * 4/4 Lento, with dotted eighths and sixteenths. The tune writes every sixteenth as a quarter, so each
 * print bar is a bar of 4/1. Its key is B-flat minor, and the hook is all four bars.
 *
 * Every version writes the tune in 4/2 quarters, two bars per print bar. The print rocks between B-flat
 * minor and G-flat major, a quarter each. Our versions rock the same way, one chord per half bar. Every
 * version then plays 8 bars of our own over the tonic minor, its sixth, its fourth and its fifth.
 * Epic and Legendary then play the tune again in another setting. Every version closes on the tonic minor.
 *
 * B-flat minor has five flats, so every version moves the key. Common and Rare play in D minor, over D
 * minor, B-flat major, G minor and A major. Epic and Legendary play in C minor, over C minor, A-flat
 * major, F minor and G major. Under the tune's B natural they play an open fifth on G, so no B rubs
 * against the held C.
 *
 * Common plays the tune over held single bass notes and one open fifth. Rare tolls a chord on each beat
 * and adds eighths and two-note chords in our own bars. Epic rolls an Alberti bass with the pedal, runs
 * with the thumb under, and plays the tune again an octave up over sixths. Legendary plays the tune in
 * octaves over an octave bass and a chord. It rolls arpeggios under our own bars, then plays the tune
 * again in four-note chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which no version keeps. */
const B_FLAT_MINOR: Key = { tonic: 10, mode: "minor" };

/** The key Common and Rare move the song to. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The key Epic and Legendary move the song to. */
const C_MINOR: Key = { tonic: 0, mode: "minor" };

/** The tune in 4/1, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune = "Bb3:4 Bb3:3 Bb3:1 Bb3:8 | Bb3:4 Bb3:3 Bb3:1 Bb3:8 | Bb3:4 Bb3:3 Bb3:1 Bb3:4 Db4:3 C4:1 | C4:3 Bb3:1 Bb3:3 A3:1 Bb3:8";

/** The tune in D minor, in 4/2 quarters, with the right hand's thumb on C sharp. */
const TUNE_D = [
  "D4/2:4 D4/2:3 D4/2:1 | D4/2:8 | D4/2:4 D4/2:3 D4/2:1 | D4/2:8",
  "D4/2:4 D4/2:3 D4/2:1 | D4/2:4 F4/4:3 E4/3:1 | E4/3:3 D4/2:1 D4/2:3 C#4/1:1 | D4/2:8",
].join(" | ");

/** Common's eight bars after the tune, in D minor quarters, in the same hand position. */
const COMMON_OWN = [
  "F4/4:2 E4/3:2 D4/2:4 | F4/4:4 G4/5:2 F4/4:2 | G4/5:4 F4/4:2 E4/3:2 | E4/3:4 C#4/1:4",
  "F4/4:2 E4/3:2 D4/2:4 | D4/2:2 E4/3:2 F4/4:4 | E4/3:2 F4/4:2 E4/3:2 C#4/1:2 | D4/2:8",
].join(" | ");

/** Common's left hand in quarters: the tune's rocking bass, then one held note a bar. */
const COMMON_LEFT = [
  "D3/1:4 Bb2/3:4 | D3/1:4 Bb2/3:4 | D3/1:4 Bb2/3:4 | D3/1:4 Bb2/3:4",
  "D3/1:4 Bb2/3:4 | D3/1:4 Bb2/3:4 | A2/4:8 | D3/1:8",
  "D3/1:8 | Bb2/3:8 | G2+D3/5+1:8 | A2/4:8 | D3/1:8 | Bb2/3:8 | A2/4:8 | D3/1:8",
].join(" | ");

/** Rare's eight bars after the tune, in D minor eighths, with two-note chords. */
const RARE_OWN = [
  "F4/4:6 E4/3:2 D4/2:8 | D4+F4/2+4:8 G4/5:4 F4/4:4 | G4/5:8 F4/4:2 E4/3:2 D4/2:4",
  "C#4+E4/1+3:8 D4/2:2 C#4/1:2 E4/3:4 | F4/4:4 G4/5:2 F4/4:2 D4/2:8 | D4/2:4 F4/4:4 G4/5:4 F4/4:2 E4/3:2",
  "E4/3:6 F4/4:2 E4/3:4 C#4/1:4 | D4+F4/2+4:16",
].join(" | ");

/** Rare's left-hand chords for D minor, B flat, G minor and A, voiced so most changes keep the hand still. */
const TRIAD: Record<string, string> = {
  d: "A2+D3+F3/5+2+1",
  b: "Bb2+D3+F3/4+2+1",
  g: "G2+Bb2+D3/5+4+2",
  a: "A2/5",
};

/** Rare's left hand in eighths: a chord on every beat under the tune, then a half and two quarters a bar. */
function rareLeft(): string {
  const toll = (first: string, second: string) => `${TRIAD[first]}:4 ${TRIAD[first]}:4 ${TRIAD[second]}:4 ${TRIAD[second]}:4`;
  const own = (chord: string) => `${TRIAD[chord]}:8 ${TRIAD[chord]}:4 ${TRIAD[chord]}:4`;
  return [
    ...Array<string>(6).fill(toll("d", "b")),
    toll("a", "a"),
    toll("d", "d"),
    ..."dbgadba".split("").map(own),
    `${TRIAD.d}:16`,
  ].join(" | ");
}

/** The tune in C minor, in 4/2 eighths, with the right hand's thumb on B. */
const TUNE_C = [
  "C4/2:8 C4/2:6 C4/2:2 | C4/2:16 | C4/2:8 C4/2:6 C4/2:2 | C4/2:16",
  "C4/2:8 C4/2:6 C4/2:2 | C4/2:8 Eb4/4:6 D4/3:2 | D4/3:6 C4/2:2 C4/2:6 B3/1:2 | C4/2:16",
].join(" | ");

/** Epic's and Legendary's eight bars after the tune, in C minor eighths, with the thumb passing under. */
const OWN_C = [
  "G4/5:4 F4/4:2 Eb4/3:2 D4/2:4 C4/1:4 | C4/1:4 Eb4/2:4 Ab4/5:6 G4/4:2",
  "C4/1:2 D4/2:2 Eb4/3:2 F4/1:2 G4/2:2 Ab4/3:2 G4/2:2 F4/1:2 | Eb4/3:4 D4/2:4 B3/1:4 D4/2:4",
  "C4/1:4 Eb4/2:2 G4/3:2 C5/5:8 | Ab4/4:4 G4/3:2 F4/2:2 C4/1:8",
  "Eb4/3:4 D4/2:4 F4/4:2 Eb4/3:2 D4/2:2 B3/1:2 | C4/1:12 r:4",
].join(" | ");

/** Epic's tune again, an octave up, with a sixth under its long notes. */
const EPIC_TUNE_AGAIN = [
  "Eb4+C5/1+5:8 Eb4+C5/1+5:6 C5/5:2 | Eb4+C5/1+5:16 | Eb4+C5/1+5:8 Eb4+C5/1+5:6 C5/5:2 | Eb4+C5/1+5:16",
  "Eb4+C5/1+5:8 Eb4+C5/1+5:6 C5/5:2 | Eb4+C5/1+4:8 Eb5/5:6 D5/4:2",
  "F4+D5/1+5:6 C5/4:2 Eb4+C5/1+5:6 B4/4:2 | Eb4+G4+C5/1+2+5:16",
].join(" | ");

/** Legendary's tune in octaves: each note of `TUNE_C` with the note an octave up, played by fingers 1 and 5. */
const TUNE_OCTAVES = TUNE_C.replace(
  /([A-G][#b]?)(\d)\/[1-5](?=:)/g,
  (_, name: string, octave: string) => `${name}${octave}+${name}${Number(octave) + 1}/1+5`,
);

/** Legendary's tune again in chords of three and four notes, the tune on top. */
const LEGENDARY_TUNE_AGAIN = [
  "C4+Eb4+G4+C5/1+2+3+5:8 Eb4+Ab4+C5/1+3+5:6 Eb4+Ab4+C5/1+3+5:2 | C4+Eb4+G4+C5/1+2+3+5:8 C4+Eb4+Ab4+C5/1+2+4+5:8",
  "C4+Eb4+G4+C5/1+2+3+5:8 Eb4+Ab4+C5/1+3+5:6 Eb4+Ab4+C5/1+3+5:2 | C4+Eb4+G4+C5/1+2+3+5:8 C4+Eb4+Ab4+C5/1+2+4+5:8",
  "C4+Eb4+G4+C5/1+2+3+5:8 Eb4+Ab4+C5/1+3+5:6 Eb4+Ab4+C5/1+3+5:2 | C4+Eb4+G4+C5/1+2+3+5:7 r:1 Eb4+Ab4+C5+Eb5/1+2+3+5:6 D5/4:2",
  "F4+Ab4+D5/1+2+5:6 C5/4:2 G4+C5/2+5:6 B4/4:2 | Eb4+G4+C5/1+3+5:16",
].join(" | ");

/** Bars of `patterns` from `chords`, such as `"caca"`: one letter per half bar, two per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  const halves = [...chords].map((chord) => {
    const pattern = patterns[chord];
    if (pattern === undefined) throw new Error(`No pattern for chord ${chord}`);
    return pattern;
  });
  const lines: string[] = [];
  for (let at = 0; at < halves.length; at += 2) lines.push(halves.slice(at, at + 2).join(" "));
  return lines.join(" | ");
}

/** Epic's half bar in eighths: an Alberti group, low, high, middle, high, twice. `o` is an open fifth on G. */
const ALBERTI: Record<string, string> = {
  c: "C3/5:1 G3/1:1 Eb3/3:1 G3/1:1",
  a: "Ab2/5:1 Eb3/1:1 C3/3:1 Eb3/1:1",
  f: "F2/5:1 C3/1:1 Ab2/3:1 C3/1:1",
  g: "G2/5:1 D3/1:1 B2/3:1 D3/1:1",
  o: "G2/5:1 D3/1:1 G2/5:1 D3/1:1",
};
for (const chord of Object.keys(ALBERTI)) ALBERTI[chord] = `${ALBERTI[chord]} ${ALBERTI[chord]}`;

/** Legendary's half bar in eighths: an octave on the beat, a chord on the next, each with a rest to jump. */
const TOLL: Record<string, string> = {
  c: "C2+C3/5+1:3 r:1 G2+C3+Eb3/4+2+1:3 r:1",
  a: "Ab1+Ab2/5+1:3 r:1 Eb2+Ab2+C3/4+2+1:3 r:1",
  f: "F1+F2/5+1:3 r:1 C2+F2+Ab2/4+2+1:3 r:1",
  o: "G1+G2/5+1:3 r:1 D2+G2/2+1:3 r:1",
};

/** Legendary's half bar of arpeggio in eighths: up and back over an octave and a half. */
const WIDE: Record<string, string> = {
  c: "C2/5:1 G2/2:1 C3/1:1 Eb3/3:1 G3/2:1 Eb3/3:1 C3/1:1 r:1",
  a: "Ab1/5:1 Eb2/2:1 Ab2/1:1 C3/3:1 Eb3/2:1 C3/3:1 Ab2/1:1 r:1",
  f: "F1/5:1 C2/2:1 F2/1:1 Ab2/3:1 C3/2:1 Ab2/3:1 F2/1:1 r:1",
  g: "G1/5:1 D2/2:1 G2/1:1 B2/3:1 D3/2:1 B2/3:1 G2/1:1 r:1",
};

/** The chords under the tune for Epic and Legendary, two per bar. */
const TUNE_CHORDS = "cacacacacacafocc";

/** The chords under our eight bars, two per bar. */
const OWN_CHORDS = "ccaaffggccffggcc";

/** The last bar of Epic and Legendary in the left hand: a low C minor chord. */
const LAST_LEFT = "C2+G2+C3/5+2+1:16";

/** The pedal of Epic and Legendary: changed at each half bar, held through the last bar. */
const PEDAL = `${Array<string>(23).fill("P:8 P:8").join(" | ")} | P:16`;

export const funeralMarch: OurSong = {
  slug: "funeral-march",
  title: "Funeral March",
  aka: ["Marche funèbre", "Chopin's Funeral March", "Trauermarsch", "Piano Sonata No. 2, Op. 35"],
  source: {
    composer: "Frédéric Chopin",
    died: 1849,
    published: 1840,
    edition:
      "Piano Sonata No. 2 in B-flat minor, Op. 35, third movement, bars 1 to 4, as two public domain typesets of the opening on Wikimedia Commons print it; the sonata was first published in May 1840",
  },
  about:
    "This funeral march is the third movement of Chopin's Piano Sonata No. 2, published in 1840. " +
    "It was played at Chopin's own funeral, and at the state funeral of John F. Kennedy. " +
    "Films and cartoons often quote its opening for a funeral.",
  funFact: "Many scholars date the march to 1837, two years before Chopin finished the rest of the sonata.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 1, steps: 4, key: B_FLAT_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 138,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: `${TUNE_D} | ${COMMON_OWN}`,
      left: COMMON_LEFT,
      skills: ["five-finger-position", "held-bass", "dotted-rhythm"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. The tune finally moves away from D.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It rocks between D and B flat, like a slow bell.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "Count to four on the first D. Then a long D and a short D lead into the next bar." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play softly and heavily, like slow steps behind a coffin." },
        { fromBar: 7, toBar: 7, kind: "fingering", text: "The thumb rests on C sharp the whole time. It plays only in bars 7, 12 and 15." },
      ],
      tricky: {
        7: "Hold E for three counts, then play D for one. Hold D for three counts, and the thumb plays C sharp last.",
        12: "Finger 3 holds E for four counts. Then the thumb plays C sharp, and the left hand stays on A.",
        15: "Four even notes: E, F, E, then C sharp with the thumb. Keep every finger on its own key.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 138,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [TUNE_D.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`), RARE_OWN].join(" | "),
      left: rareLeft(),
      skills: ["triads", "two-note-chords", "eighth-notes"],
      practice: [
        { text: "Play the left hand alone. It tolls a chord on every beat, like a bell.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on bars 9 to 16, slowly.", hands: "both", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the left hand's chords soft and even, so the tune stays on top." },
        { fromBar: 1, toBar: 6, kind: "fingering", text: "Between the two chords, only the low note moves. Fingers 2 and 1 stay on D and F." },
        { fromBar: 16, toBar: 16, kind: "sound", text: "End with D and F together, and let them fade slowly." },
      ],
      tricky: {
        10: "Press D and F together with fingers 2 and 4. Then finger 5 plays G, and finger 4 plays F.",
        11: "The left hand plays G, B flat and D with fingers 5, 4 and 2. The right hand walks down from G.",
        12: "The thumb and finger 3 press C sharp and E together. The left hand plays only A, with finger 5.",
      },
    },
    epic: {
      key: C_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [TUNE_C, OWN_C, EPIC_TUNE_AGAIN].join(" | "),
      left: `${bars(ALBERTI, `${TUNE_CHORDS}${OWN_CHORDS}${TUNE_CHORDS.slice(0, -2)}`)} | ${LAST_LEFT}`,
      pedal: PEDAL,
      skills: ["alberti-bass", "thumb-under", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play bar 11 with the right hand alone. Pass the thumb under to F.", hands: "right", speed: 0.5, loop: [11, 12], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 11, toBar: 11, kind: "fingering", text: "Pass the thumb under to F after finger 3 plays E flat." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "The tune is now on top of each pair. Let finger 5 sing it." },
      ],
      tricky: {
        19: "Keep the hand open, with the thumb on E flat and finger 5 on C. Lift the thumb for the short C.",
        21: "As in bar 19, the thumb and finger 5 play a sixth. Then finger 5 plays C alone.",
        22: "Finger 4 takes C in the sixth, so finger 5 is free to reach up to E flat.",
      },
    },
    legendary: {
      key: C_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [TUNE_OCTAVES, OWN_C, LEGENDARY_TUNE_AGAIN].join(" | "),
      left: [bars(TOLL, TUNE_CHORDS), bars(WIDE, OWN_CHORDS), `${bars(TOLL, TUNE_CHORDS.slice(0, -2))} | ${LAST_LEFT}`].join(" | "),
      pedal: PEDAL,
      skills: ["octave-bass", "arpeggios", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then a chord, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the left hand's arpeggios alone. Finger 3 crosses over the thumb on the way up.", hands: "left", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the octaves heavy and slow, like a great bell. Let the little finger lead." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "In the arpeggios, finger 3 crosses over the thumb, and the thumb passes under on the way down." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        9: "The arpeggios begin. Finger 3 crosses over the thumb onto E flat, while the right hand walks down from G.",
        14: "The left hand starts on the low F with finger 5. Finger 3 crosses over the thumb onto A flat.",
        22: "Lift the hand in the short rest, then land on E flat, A flat, C and E flat.",
      },
    },
  },
  de: {
    about:
      "Dieser Trauermarsch ist der dritte Satz von Chopins Klaviersonate Nr. 2, die 1840 erschien. " +
      "Er wurde bei Chopins eigener Beerdigung gespielt, und beim Staatsbegräbnis von John F. Kennedy. " +
      "Filme und Zeichentrickfilme zitieren oft seinen Anfang für eine Beerdigung.",
    funFact: "Viele Forscher datieren den Marsch auf 1837, zwei Jahre bevor Chopin den Rest der Sonate vollendete.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Die Melodie verlässt endlich das D.",
          "Jetzt die linke Hand allein. Sie wiegt zwischen D und B hin und her, wie eine langsame Glocke.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Zähl beim ersten D bis vier. Dann führen ein langes D und ein kurzes D in den nächsten Takt.",
          "Spiel leise und schwer, wie langsame Schritte hinter einem Sarg.",
          "Der Daumen liegt die ganze Zeit auf dem Cis. Er spielt nur in den Takten 7, 12 und 15.",
        ],
        tricky: {
          7: "Halt das E drei Zählzeiten lang, dann spiel das D für eine. Halt das D drei Zählzeiten lang, und zuletzt spielt der Daumen das Cis.",
          12: "Finger 3 hält das E vier Zählzeiten lang. Dann spielt der Daumen das Cis, und die linke Hand bleibt auf dem A.",
          15: "Vier gleichmäßige Töne: E, F, E, dann das Cis mit dem Daumen. Lass jeden Finger auf seiner eigenen Taste.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Sie läutet auf jedem Schlag einen Akkord, wie eine Glocke.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 9 bis 16 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Spiel die Akkorde der linken Hand leise und gleichmäßig, damit die Melodie oben bleibt.",
          "Zwischen den beiden Akkorden bewegt sich nur der tiefe Ton. Finger 2 und 1 bleiben auf D und F.",
          "Am Ende spielst du D und F zusammen. Lass sie langsam verklingen.",
        ],
        tricky: {
          10: "Drück D und F mit Finger 2 und 4 zusammen. Dann spielt Finger 5 das G, und Finger 4 das F.",
          11: "Die linke Hand spielt G, B und D mit Finger 5, 4 und 2. Die rechte Hand geht vom G abwärts.",
          12: "Daumen und Finger 3 drücken Cis und E zusammen. Die linke Hand spielt nur das A, mit Finger 5.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel Takt 11 nur mit der rechten Hand. Führ den Daumen unter zum F.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Führ den Daumen unter zum F, nachdem Finger 3 das Es gespielt hat.",
          "Die Melodie ist jetzt der obere Ton jedes Paars. Lass Finger 5 sie singen.",
        ],
        tricky: {
          19: "Halt die Hand offen, mit dem Daumen auf dem Es und Finger 5 auf dem C. Heb den Daumen für das kurze C.",
          21: "Wie in Takt 19 spielen Daumen und Finger 5 eine Sexte. Dann spielt Finger 5 das C allein.",
          22: "Finger 4 nimmt das C in der Sexte, damit Finger 5 frei bis zum Es hinaufreicht.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Arpeggios der linken Hand allein. Auf dem Weg nach oben kreuzt Finger 3 über den Daumen.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Spiel die Oktaven schwer und langsam, wie eine große Glocke. Lass den kleinen Finger führen.",
          "In den Arpeggios kreuzt Finger 3 über den Daumen, und auf dem Weg nach unten geht der Daumen unter.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          9: "Die Arpeggios beginnen. Finger 3 kreuzt über den Daumen auf das Es, während die rechte Hand vom G abwärts geht.",
          14: "Die linke Hand beginnt mit Finger 5 auf dem tiefen F. Finger 3 kreuzt über den Daumen auf das As.",
          22: "Heb die Hand in der kurzen Pause, dann lande auf Es, As, C und Es.",
        },
      },
    },
  },
};

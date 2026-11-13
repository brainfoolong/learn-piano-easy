/**
 * *Can-can*: the famous strain of the Galop infernal from Offenbach's *Orphée aux Enfers*, in four
 * versions of ours.
 *
 * The tune is the strain "Ce bal est original" in Heugel's piano score of 1862, on its page 81. The
 * Galop is in 2/4 and D major, and this strain is in G major, with the right hand in octaves. The tune
 * is the octaves' top notes. The print's notes are eighths, and the tune writes each as a quarter, so
 * each print bar is a bar of 4/4. The tune is the print's first six bars and the first eighth of its
 * seventh. The seventh bar then runs up an arpeggio, which the tune cuts to rests. The hook is the
 * whole tune.
 *
 * The print's chords are G major and D7 in turns, with G then D7 in bar 4. Our versions follow them
 * under the tune. Our own bars move through C major, G major and D7, and every version closes on G
 * major. Every version keeps G major. Common, Rare and Epic play the tune an octave lower, from G4 to E5.
 *
 * Common plays the tune and 9 bars of our own over held fifths and single bass notes. Rare plays a bass
 * note and a two-note chord in turns, and adds two-note chords to our bars. Epic rolls an Alberti bass
 * with the pedal and runs a scale with the thumb under. It then plays the tune again with a sixth or a
 * third under its long notes. Legendary plays the tune in octaves, as the print does, over a stride bass.
 * Its own bars run in sixteenths over arpeggios of two octaves, and it plays the tune again in chords.
 *
 * Legendary's octaves, chords and stride notes are played short, each with an eighth's rest after it.
 * The hand then jumps to its next shape instead of stretching.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const G_MAJOR: Key = { tonic: 7, mode: "major" };

/** The tune in 4/4, in quarters, which are the print's eighths: one bar per print bar. */
const tune = "G5:4 | A5:1 C6:1 B5:1 A5:1 | D6:2 D6:2 | D6:1 E6:1 B5:1 C6:1 | A5:2 A5:2 | A5:1 C6:1 B5:1 A5:1 | G5:1 r:3";

/** The tune an octave lower, in quarters, fingered so the hand never leaves its place. */
const TUNE_LOW =
  "G4/1:4 | A4/2:1 C5/4:1 B4/3:1 A4/2:1 | D5/5:2 D5/5:2 | D5/4:1 E5/5:1 B4/2:1 C5/3:1 | " +
  "A4/2:2 A4/2:2 | A4/2:1 C5/4:1 B4/3:1 A4/2:1 | G4/1:1 r:3";

/** `text` with every length times `factor`, so a line in quarters reads in eighths or sixteenths. */
function scaled(text: string, factor: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${factor * Number(units)}`);
}

/** Bars of `patterns` from `chords`, such as `"gd"`: one letter per half bar, two per bar. */
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

/** The chords under the tune, one letter per half bar: g is G major, d is D7. */
const TUNE_CHORDS = "ggddgggdggddgg";

/** The chords of our own bars 9 to 16, one letter per half bar: c is C major. */
const OWN_CHORDS = "ccggddggccggdddd";

/** Common's bars 8 to 16 in quarters, in the tune's hand position. */
const COMMON_OWN = [
  "B4/2:1 C5/3:1 D5/4:2 | E5/5:2 C5/3:2 | D5/5:2 B4/3:2",
  "A4/2:1 B4/3:1 C5/4:1 A4/2:1 | G4/1:2 B4/2:2 | E5/5:2 C5/3:2",
  "D5/4:1 C5/3:1 B4/2:1 G4/1:1 | A4/2:2 D5/5:2 | G4/1:4",
].join(" | ");

/** Common's left hand for each chord, held for half a bar: an open fifth on G, one note on D and C. */
const HELD: Record<string, string> = { g: "G2+D3/5+1:2", d: "D3/1:2", c: "C3/2:2" };

/** Rare's bars 8 to 16 in quarters, with two-note chords. */
const RARE_OWN = [
  "G4+B4/1+2:2 C5/3:1 D5/4:1 | E5/5:1 D5/4:1 C5/3:1 E5/5:1 | B4+D5/2+4:2 G4+B4/1+2:2",
  "C5/4:2 A4/2:2 | B4/3:2 G4/1:2 | C5+E5/3+5:2 E5/5:1 D5/4:1",
  "B4+D5/2+4:2 G4+B4/1+2:2 | C5/4:1 A4/2:1 B4/3:1 C5/4:1 | G4+B4/1+3:4",
].join(" | ");

/** Rare's half bar in quarters: a bass note on the beat, then a two-note chord. */
const PULSE: Record<string, string> = {
  g: "G2/5:1 B2+D3/3+1:1",
  d: "D3/1:1 A2+C3/4+2:1",
  c: "C3/2:1 G2+C3/5+2:1",
};

/** Epic's bars 8 to 16 in eighths: a scale up with the thumb under, then our own tune. */
const EPIC_OWN = [
  "G4/1:1 A4/2:1 B4/3:1 C5/1:1 D5/2:1 E5/3:1 F#5/4:1 G5/5:1",
  "E5/3:2 G5/5:2 E5/3:2 C5/1:2 | D5/3:1 C5/2:1 B4/1:2 D5/2:2 G5/5:2",
  "F#5/4:2 E5/3:1 D5/2:1 C5/1:2 A4/3:2 | G4/1:2 B4/3:2 D5/5:2 B4/3:2",
  "C5/1:2 E5/3:2 G5/5:2 E5/3:2 | D5/3:1 E5/4:1 D5/3:1 C5/2:1 B4/1:2 D5/3:2",
  "C5/3:2 A4/2:2 F#4/1:2 A4/2:2 | A4/2:2 B4/3:2 C5/4:2 F#4/1:2",
].join(" | ");

/** Epic's tune again in eighths, with a sixth or a third under its long notes, and the close. */
const EPIC_AGAIN = [
  "B3+G4/1+5:7 r:1 | A4/2:2 C5/4:2 B4/3:2 A4/2:2 | B4+D5/3+5:4 B4+D5/3+5:4 | D5/4:2 E5/5:2 B4/2:2 C5/3:2",
  "A4/2:4 A4/2:4 | A4/2:2 C5/4:2 B4/3:2 A4/2:1 r:1 | B3+G4/1+5:2 r:2 D4/1:2 F#4/3:2 | B3+D4+G4/1+2+5:8",
].join(" | ");

/** Epic's half bar in eighths: an Alberti group, low, high, middle, high, in shapes that keep the hand still. */
const ALBERTI: Record<string, string> = {
  g: "G2/5:1 D3/1:1 B2/3:1 D3/1:1",
  d: "F#2/5:1 C3/1:1 A2/3:1 C3/1:1",
  c: "G2/5:1 E3/1:1 C3/3:1 E3/1:1",
};

/** Legendary's tune in sixteenths, in short octaves, as the print plays it. */
const LEGENDARY_TUNE = [
  "G4+G5/1+5:14 r:2",
  "A4+A5/1+5:2 r:2 C5+C6/1+5:2 r:2 B4+B5/1+5:2 r:2 A4+A5/1+5:2 r:2",
  "D5+D6/1+5:6 r:2 D5+D6/1+5:6 r:2",
  "D5+D6/1+5:2 r:2 E5+E6/1+5:2 r:2 B4+B5/1+5:2 r:2 C5+C6/1+5:2 r:2",
  "A4+A5/1+5:6 r:2 A4+A5/1+5:6 r:2",
  "A4+A5/1+5:2 r:2 C5+C6/1+5:2 r:2 B4+B5/1+5:2 r:2 A4+A5/1+5:2 r:2",
  "G4+G5/1+5:2 r:14",
].join(" | ");

/** Legendary's bars 8 to 16 in sixteenths: a scale over two octaves, then runs of our own. */
const LEGENDARY_OWN = [
  "G4/1:1 A4/2:1 B4/3:1 C5/1:1 D5/2:1 E5/3:1 F#5/4:1 G5/1:1 A5/2:1 B5/3:1 C6/1:1 D6/2:1 E6/3:1 F#6/4:1 G6/5:2",
  "E6/5:4 D6/4:1 C6/3:1 B5/2:1 C6/3:1 G5/1:4 C6/3:4",
  "D6/5:4 C6/4:1 B5/3:1 A5/2:1 B5/3:1 G5/1:4 D6/5:4",
  "C6/4:4 A5/2:1 B5/3:1 C6/4:1 A5/2:1 F#5/1:4 A5/3:4",
  "G5/1:4 B5/3:1 A5/2:1 G5/1:1 B5/3:1 D6/5:4 B5/3:4",
  "C6/3:4 D6/4:1 E6/5:1 D6/4:1 C6/3:1 G5/1:4 E6/5:4",
  "D6/5:4 B5/3:1 C6/4:1 D6/5:1 B5/3:1 G5/1:4 B5/3:4",
  "A5/1:4 C6/3:1 B5/2:1 A5/1:1 C6/3:1 D6/4:4 F#5/1:4",
  "D6/5:2 C6/4:2 A5/3:2 F#5/2:2 D5/1:4 r:4",
].join(" | ");

/** Legendary's tune again in sixteenths, its long notes in chords, then a run up to the last chord. */
const LEGENDARY_AGAIN = [
  "G4+B4+D5+G5/1+2+3+5:14 r:2",
  "A5/1:2 r:2 C6/3:2 r:2 B5/2:2 r:2 A5/1:2 r:2",
  "G5+B5+D6/1+3+5:6 r:2 G5+B5+D6/1+3+5:6 r:2",
  "D6/4:2 r:2 E6/5:2 r:2 B5/2:2 r:2 C6/3:2 r:2",
  "A4+D5+A5/1+2+5:6 r:2 A4+D5+A5/1+2+5:6 r:2",
  "A5/1:2 r:2 C6/3:2 r:2 B5/2:2 r:2 A5/1:2 r:2",
  "G4+B4+D5+G5/1+2+3+5:2 r:6 D5/1:1 E5/2:1 F#5/3:1 G5/1:1 A5/2:1 B5/3:1 C6/4:1 D6/5:1",
  "G5+B5+D6+G6/1+2+3+5:16",
].join(" | ");

/** Legendary's half bar in sixteenths: an octave, then a chord, each an eighth with an eighth's rest to jump. */
const STRIDE: Record<string, string> = {
  g: "G1+G2/5+1:2 r:2 B2+D3+G3/4+2+1:2 r:2",
  d: "D2+D3/5+1:2 r:2 A2+C3+F#3/4+2+1:2 r:2",
};

/** Legendary's bar of arpeggio in sixteenths: up two octaves in eighths and back one note, then a rest. */
const WIDE: Record<string, string> = {
  c: "C2/5:2 G2/2:2 C3/1:2 E3/3:2 G3/2:2 C4/1:2 G3/2:2 r:2",
  g: "G1/5:2 D2/2:2 G2/1:2 B2/3:2 D3/2:2 G3/1:2 D3/2:2 r:2",
  d: "D2/5:2 A2/2:2 D3/1:2 F#3/3:2 A3/2:2 C4/1:2 A3/2:2 r:2",
};

export const canCan: OurSong = {
  slug: "can-can",
  title: "Can-can",
  aka: ["Can-Can", "Cancan", "Galop infernal", "Infernal Galop", "Orpheus in the Underworld", "Orphée aux Enfers"],
  source: {
    composer: "Jacques Offenbach",
    died: 1880,
    published: 1862,
    edition:
      "Orphée aux Enfers, the Galop infernal's strain in G major, bars 1 to 7, as Heugel's piano score of 1862 on Wikimedia Commons prints it on its page 81",
  },
  about:
    "Offenbach wrote the Galop infernal for the wild party of the gods that ends his operetta Orpheus in the Underworld, first staged in 1858. " +
    "In the 1890s the Paris cabarets the Moulin Rouge and the Folies Bergère took it up to accompany the can-can. " +
    "The 2001 film Moulin Rouge! uses it in its score.",
  funFact: "Its tune shares its main notes with two far slower songs of the same act, yet sounds nothing like them.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 4, key: G_MAJOR, hookBars: [1, 7] },
  versions: {
    common: {
      key: G_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 4,
      right: `${TUNE_LOW} | ${COMMON_OWN}`,
      left: `${bars(HELD, `${TUNE_CHORDS}gg${OWN_CHORDS.slice(0, -2)}`).replace(/(\S+):2 \1:2/g, "$1:4")} | G2+D3/5+1:4`,
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first seven bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Play bars 8 to 16 with the right hand alone. The hand stays in the same place.", hands: "right", speed: 0.6, loop: [8, 16], wait: true },
        { text: "Now the left hand alone. It holds one shape for a whole bar or half a bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first seven bars, slowly.", hands: "both", speed: 0.7, loop: [1, 7], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "Hold the first G for four beats. The dancers wait for the music to start." },
        { fromBar: 3, toBar: 4, kind: "fingering", text: "Finger 5 plays the first two Ds. Then finger 4 takes D, so finger 5 can reach E." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Play the quarters short and bouncy, like dancers kicking their legs." },
      ],
      tricky: {
        4: "Change from finger 5 to finger 4 on D. Then finger 5 reaches E, and finger 2 drops to B.",
        5: "Finger 3 leaves C, and finger 2 plays A twice. Hold each A for two beats.",
        10: "Finger 5 plays D, then finger 3 drops to B. The thumb stays over G.",
      },
    },
    rare: {
      key: G_MAJOR,
      bpm: 144,
      numerator: 4,
      denominator: 4,
      right: `${TUNE_LOW} | ${RARE_OWN}`,
      left: `${bars(PULSE, `${TUNE_CHORDS}gg${OWN_CHORDS.slice(0, -2)}`)} | G2+B2+D3/5+3+1:4`,
      skills: ["two-note-chords", "triads"],
      practice: [
        { text: "Play the left hand alone. A bass note comes on the beat, and a two-note chord answers it.", hands: "left", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Play the right hand alone on the first seven bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Join the hands on the first seven bars, slowly.", hands: "both", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed, like a dance hall at midnight.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 7, kind: "rhythm", text: "The left hand plays on every beat: a low note, then a chord. Count it as one, two." },
        { fromBar: 8, toBar: 16, kind: "fingering", text: "The two-note chords use fingers 1 and 2, 2 and 4, or 3 and 5." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the left hand light and short, so the tune can dance above it." },
      ],
      tricky: {
        4: "Change from finger 5 to finger 4 on D. Then finger 5 reaches E, and finger 2 drops to B.",
        11: "After the pair G and B, finger 4 takes C and finger 2 takes A. The left hand plays D, then A and C.",
        15: "The right hand plays C, A, B and C. The left hand plays D, then A and C together.",
      },
    },
    epic: {
      key: G_MAJOR,
      bpm: 144,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [scaled(TUNE_LOW, 2), EPIC_OWN, EPIC_AGAIN].join(" | "),
      left: `${bars(ALBERTI, `${TUNE_CHORDS}gg${OWN_CHORDS}${TUNE_CHORDS.slice(0, -1)}d`)} | G2+B2+D3/5+3+1:8`,
      pedal: ["P:8", "P:8", "P:8", "P:4 P:4", ...Array(18).fill("P:8"), "P:4 P:4", "P:8"].join(" | "),
      skills: ["alberti-bass", "thumb-under", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 7], wait: false },
        { text: "Play the scale in bar 8 alone. The thumb passes under finger 3 on C.", hands: "right", speed: 0.5, loop: [8, 9], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 7, kind: "sound", text: "Change the pedal on each new chord. In bar 4 it changes halfway." },
        { fromBar: 8, toBar: 8, kind: "fingering", text: "The scale climbs from G with fingers 1, 2 and 3. Then the thumb passes under to C." },
        { fromBar: 17, toBar: 23, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        11: "The thumb lands on C, and finger 3 crosses over it down to A.",
        18: "Lift the sixth a little early. Then finger 2 lands on A, and finger 4 reaches C.",
        23: "Play the sixth short. Then the thumb takes D, and finger 3 takes F sharp.",
      },
    },
    legendary: {
      key: G_MAJOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [LEGENDARY_TUNE, LEGENDARY_OWN, LEGENDARY_AGAIN].join(" | "),
      left: [
        bars(STRIDE, `${TUNE_CHORDS}gg`),
        [...OWN_CHORDS].filter((_, at) => at % 2 === 0).map((chord) => WIDE[chord]).join(" | "),
        bars(STRIDE, `${TUNE_CHORDS.slice(0, -2)}gg`),
        "G1+D2+G2/5+2+1:16",
      ].join(" | "),
      pedal: [...Array(8).fill("r:16"), ...Array(8).fill("P:16"), ...Array(7).fill("r:16"), "P:16"].join(" | "),
      skills: ["octave-bass", "arpeggios", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then a chord, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [1, 7], wait: true },
        { text: "Play the right hand's octaves alone. Keep fingers 1 and 5 firm, and bounce from the wrist.", hands: "right", speed: 0.5, loop: [1, 7], wait: true },
        { text: "Play the left hand's arpeggios alone. Finger 3 crosses over the thumb.", hands: "left", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 7, kind: "trick", text: "Use the short rest after each octave to jump to the next one." },
        { fromBar: 8, toBar: 8, kind: "fingering", text: "The scale runs two octaves. The thumb passes under on each C and each G." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Let the arpeggios flow softly under the runs, and change the pedal with each bar." },
      ],
      tricky: {
        17: "Spread the hand over G, B, D and G. Then the hand jumps up an octave to A in the rest.",
        21: "Play A, D and A with fingers 1, 2 and 5. Jump back from the high C in the rest before.",
        23: "After the chord, the run climbs from D. The thumb passes under on G.",
      },
    },
  },
  de: {
    about:
      "Offenbach schrieb den Galop infernal für das wilde Fest der Götter am Ende seiner Operette Orpheus in der Unterwelt, die 1858 zum ersten Mal auf die Bühne kam. " +
      "In den 1890er-Jahren übernahmen die Pariser Kabaretts Moulin Rouge und Folies Bergère ihn als Musik zum Cancan. " +
      "Der Film Moulin Rouge! von 2001 verwendet ihn in seiner Musik.",
    funFact: "Seine Melodie teilt ihre Haupttöne mit zwei viel langsameren Liedern desselben Akts und klingt doch ganz anders.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten sieben Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 8 bis 16 nur mit der rechten Hand. Die Hand bleibt am selben Platz.",
          "Jetzt die linke Hand allein. Sie hält jeden Griff einen ganzen oder einen halben Takt lang.",
          "Spiel die ersten sieben Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt das erste G vier Schläge lang. Die Tänzerinnen warten auf den Einsatz der Musik.",
          "Finger 5 spielt die ersten beiden D. Dann nimmt Finger 4 das D, damit Finger 5 das E erreicht.",
          "Spiel die Viertel kurz und federnd, wie Tänzerinnen, die die Beine hochwerfen.",
        ],
        tricky: {
          4: "Wechsle auf dem D von Finger 5 zu Finger 4. Dann erreicht Finger 5 das E, und Finger 2 fällt auf das H.",
          5: "Finger 3 verlässt das C, und Finger 2 spielt zweimal das A. Halt jedes A zwei Schläge lang.",
          10: "Finger 5 spielt das D, dann fällt Finger 3 auf das H. Der Daumen bleibt über dem G.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Auf dem Schlag kommt ein Basston, und ein Zweiklang antwortet.",
          "Spiel die ersten sieben Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten sieben Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo, wie in einem Tanzsaal um Mitternacht.",
        ],
        tips: [
          "Die linke Hand spielt auf jedem Schlag: erst einen tiefen Ton, dann einen Akkord. Zähl dazu eins, zwei.",
          "Die Zweiklänge spielst du mit Finger 1 und 2, 2 und 4 oder 3 und 5.",
          "Spiel die linke Hand leicht und kurz, damit die Melodie darüber tanzen kann.",
        ],
        tricky: {
          4: "Wechsle auf dem D von Finger 5 zu Finger 4. Dann erreicht Finger 5 das E, und Finger 2 fällt auf das H.",
          11: "Nach dem Paar G und H nimmt Finger 4 das C und Finger 2 das A. Die linke Hand spielt D, dann A und C.",
          15: "Die rechte Hand spielt C, A, H und C. Die linke Hand spielt D, dann A und C zusammen.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Tonleiter in Takt 8 allein. Der Daumen geht auf dem C unter Finger 3 hindurch.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Akkord. In Takt 4 wechselt es in der Mitte.",
          "Die Tonleiter steigt vom G mit Finger 1, 2 und 3. Dann geht der Daumen unter zum C.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          11: "Der Daumen landet auf dem C, und Finger 3 kreuzt darüber hinunter zum A.",
          18: "Lös die Sexte etwas früher. Dann landet Finger 2 auf dem A, und Finger 4 erreicht das C.",
          23: "Spiel die Sexte kurz. Dann nimmt der Daumen das D, und Finger 3 nimmt das Fis.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Oktaven der rechten Hand allein. Halt Finger 1 und 5 fest, und federe aus dem Handgelenk.",
          "Spiel die Arpeggios der linken Hand allein. Finger 3 kreuzt über den Daumen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause nach jeder Oktave, um zur nächsten zu springen.",
          "Die Tonleiter läuft über zwei Oktaven. Der Daumen geht auf jedem C und jedem G unter.",
          "Lass die Arpeggios leise unter den Läufen fließen, und wechsle das Pedal mit jedem Takt.",
        ],
        tricky: {
          17: "Spann die Hand über G, H, D und G. Dann springt die Hand in der Pause eine Oktave hinauf zum A.",
          21: "Spiel A, D und A mit Finger 1, 2 und 5. Spring in der Pause davor vom hohen C zurück.",
          23: "Nach dem Akkord steigt der Lauf vom D aus. Auf dem G geht der Daumen unter.",
        },
      },
    },
  },
};

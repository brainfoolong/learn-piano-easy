/**
 * *Aquarium*: the theme from Saint-Saëns's *Carnival of the Animals*, in four versions of ours.
 *
 * The tune is the theme's eight bars, in 4/4 and in quarters, one bar per print bar. The print writes the
 * theme under an 8va sign, and the tune writes the staff's notes, an octave below where it sounds. It ends
 * on a whole-note B. Its key is A minor, and the hook is all eight bars. The theme turns around E with D
 * sharp, then slides down by step. Every version plays the 8 tune bars, then 8 bars of our own over
 * A minor, D minor and E. Epic and Legendary then play the tune again in another setting.
 *
 * Our chords, one per bar, are A minor for bars 1 to 5, D minor in bar 6, A minor in bar 7 and E in bar 8.
 * Our own bars run A minor, D minor and E, with G major in bar 14 of Epic and Legendary. Common and Rare
 * play E as a bare note or a fifth, so they add no note outside A minor. Every version closes on A minor.
 * Common, Rare and Legendary keep E out of the bass under each D sharp, and D under each C sharp. Epic
 * lets its Alberti bass rub against the tune in the bars its guide marks.
 *
 * Common plays the tune over held open fifths and single bass notes. Rare plays a root and fifth in turns,
 * one on each beat, with a held triad at bar 4 and at the end. Epic rolls an Alberti bass under the tune
 * with the pedal, then plays the tune again with a third or a fourth under it. Legendary plays an octave
 * bass and a chord on each half bar, then arpeggios over two octaves, and plays the tune again in chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 4/4, in quarters, as the print writes it below its 8va sign: one bar per print bar. */
const tune = "E5:1 D#5:1 E5:1 D5:1 | E5:1 A4:3 | E5:1 D#5:1 E5:1 D5:1 | E5:1 A4:3 | E5:1 D#5:1 E5:1 F5:1 | D5:1 C#5:1 D5:1 E5:1 | C5:1 B4:1 C5:1 D5:1 | B4:4";

/** The tune's first two bars in quarters, fingered with the thumb on A. */
const TUNE_TURN = "E5/5:1 D#5/4:1 E5/5:1 D5/4:1 | E5/5:1 A4/1:3";

/** The tune in quarters, fingered: the thumb on A for bars 1 to 4, then on B for bars 5 to 8. */
const TUNE_RIGHT = [
  TUNE_TURN,
  TUNE_TURN,
  "E5/4:1 D#5/3:1 E5/4:1 F5/5:1 | D5/3:1 C#5/2:1 D5/3:1 E5/4:1 | C5/2:1 B4/1:1 C5/2:1 D5/3:1 | B4/1:4",
].join(" | ");

/** Our eight bars after the tune in quarters, with the thumb on A, over A minor, D minor and E. */
const OWN =
  "E5/5:1 D5/4:1 C5/3:1 B4/2:1 | A4/1:2 C5/3:2 | D5/4:1 C5/3:1 D5/4:1 A4/1:1 | B4/2:4 | " +
  "C5/3:1 D5/4:1 E5/5:1 C5/3:1 | D5/4:2 B4/2:2 | B4/2:1 D5/4:1 C5/3:1 B4/2:1";

/** Our eight bars after the tune in eighths, with a few passing notes, for Epic and Legendary. */
const OWN_EIGHTHS = [
  "E5/5:2 D5/4:1 C5/3:1 B4/2:2 A4/1:2 | A4/1:2 B4/2:1 C5/3:1 E5/5:4",
  "D5/4:2 C5/3:1 D5/4:1 A4/1:4 | B4/2:8",
  "C5/3:2 D5/4:1 E5/5:1 C5/3:4 | D5/4:4 B4/2:4",
  "B4/2:2 D5/4:2 C5/3:2 B4/2:2 | A4/1:8",
].join(" | ");

/** The chords under the tune, one per bar: a, d and e are A minor, D minor and E. */
const TUNE_CHORDS = "aaaaadae";

/** The tune's chords in Common, where `l` is a lone A under each D sharp and C sharp. */
const COMMON_TUNE_CHORDS = "lalallae";

/** The tune's chords in Rare, where `l` keeps E out from under D sharp and `t` holds a triad. */
const RARE_TUNE_CHORDS = "laltldae";

/** The tune's chords in Legendary, two per bar, where `l`, `x` and `o` keep a semitone out from under the tune. */
const LEGENDARY_TUNE_CHORDS = "llaallaallxxooee";

/** The chords under our eight bars in Common and Rare, which play E for bar 14. */
const OWN_CHORDS = "aadeaeea";

/** The chords under our eight bars in Epic and Legendary, which play G major for bar 14. */
const OWN_CHORDS_RICH = "aadeagea";

/** `text` with every length times `times`, so a line in quarters reads in eighths or sixteenths. */
function stretch(text: string, times: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${times * Number(units)}`);
}

/** Bars of `patterns` from `chords`, such as `"aade"`: one letter per part of a bar, `perBar` parts to a bar. */
function bars(patterns: Record<string, string>, chords: string, perBar: number): string {
  const parts = [...chords].map((chord) => {
    const pattern = patterns[chord];
    if (pattern === undefined) throw new Error(`No pattern for chord ${chord}`);
    return pattern;
  });
  const lines: string[] = [];
  for (let at = 0; at < parts.length; at += perBar) lines.push(parts.slice(at, at + perBar).join(" "));
  return lines.join(" | ");
}

/** Common's bar in quarters: an open fifth, or one bass note, held. */
const HOLD: Record<string, string> = {
  a: "A2+E3/5+1:4",
  l: "A2/5:4",
  d: "D3/2:4",
  e: "E3/1:4",
};

/**
 * Rare's bar in quarters: a root and a fifth in turns, one on each beat, with the hand over A to E.
 * `l` plays A and C, `t` holds an A minor triad.
 */
const TURNS: Record<string, string> = {
  a: "A2/5:1 E3/1:1 A2/5:1 E3/1:1",
  l: "A2/5:1 C3/3:1 A2/5:1 C3/3:1",
  d: "D3/2:1 A2/5:1 D3/2:1 A2/5:1",
  e: "E3/1:1 B2/4:1 E3/1:1 B2/4:1",
  t: "A2+C3+E3/5+3+1:4",
};

/** Epic's bar in eighths: an Alberti group, low, high, middle, high, twice, in shapes that keep the hand still. */
const ALBERTI: Record<string, string> = {
  a: "A2/5:1 E3/1:1 C3/3:1 E3/1:1",
  d: "A2/5:1 F3/1:1 D3/2:1 F3/1:1",
  e: "G#2/5:1 E3/1:1 B2/3:1 E3/1:1",
  g: "G2/5:1 D3/1:1 B2/3:1 D3/1:1",
};
for (const chord of Object.keys(ALBERTI)) ALBERTI[chord] = `${ALBERTI[chord]} ${ALBERTI[chord]}`;

/**
 * Legendary's half bar in sixteenths: an octave on the beat, a chord on the next, each with an eighth's
 * rest to jump. The chords of `l`, `x` and `o` leave out the note a semitone from the tune's note above.
 */
const STRIDE: Record<string, string> = {
  a: "A1+A2/5+1:2 r:2 C3+E3+A3/4+2+1:2 r:2",
  l: "A1+A2/5+1:2 r:2 A2+C3+A3/5+3+1:2 r:2",
  x: "D2+D3/5+1:2 r:2 A2+E3+A3/5+2+1:2 r:2",
  o: "A1+A2/5+1:2 r:2 A2+E3+A3/5+2+1:2 r:2",
  d: "D2+D3/5+1:2 r:2 A2+D3+F3/5+2+1:2 r:2",
  e: "E1+E2/5+1:2 r:2 G#2+B2+E3/4+2+1:2 r:2",
};

/** The six notes of each chord over two octaves, for Legendary's arpeggios. */
const WIDE_NOTES: Record<string, string> = {
  a: "A1 E2 A2 C3 E3 A3",
  d: "D2 A2 D3 F3 A3 D4",
  e: "E1 B1 E2 G#2 B2 E3",
  g: "G1 D2 G2 B2 D3 G3",
};

/** Legendary's bar of arpeggio in eighths, written in sixteenths: up two octaves and back one note, then a rest to jump. */
const WIDE: Record<string, string> = {};
for (const [chord, notes] of Object.entries(WIDE_NOTES)) {
  const pitches = notes.split(" ");
  const fingers = [5, 2, 1, 3, 2, 1];
  WIDE[chord] = `${[0, 1, 2, 3, 4, 5, 4].map((at) => `${pitches[at]}/${fingers[at]}:2`).join(" ")} r:2`;
}

/** The tune's turn in eighths, with a third under its first E and the long A alone. */
const EPIC_TURN = "C5+E5/3+5:2 D#5/4:2 E5/5:2 D5/4:2 | C5+E5/3+5:2 A4/1:6";

/** Epic's tune again in eighths, with a third or a fourth under its notes, and a close on A minor. */
const EPIC_TUNE_AGAIN = [
  EPIC_TURN,
  EPIC_TURN,
  "C5+E5/2+4:2 D#5/3:2 E5/4:2 F5/5:2 | A4+D5/1+3:2 C#5/2:2 D5/3:2 E5/4:2",
  "A4+C5/1+3:2 B4/2:2 C5/3:2 D5/4:2 | G#4+B4/1+3:8 | A4+C5+E5/1+3+5:8",
].join(" | ");

/** The tune's turn in eighths, with its first E in an A minor chord and its long A in a low one, each with a rest to jump. */
const LEGENDARY_TURN = "A4+C5+E5/1+3+5:2 D#5/4:2 E5/5:2 D5/4:2 | A4+C5+E5/1+3+5:1 r:1 C4+E4+A4/1+2+5:5 r:1";

/** Legendary's tune again in eighths, with its notes on the beat in chords, and a close on A minor. */
const LEGENDARY_TUNE_AGAIN = [
  LEGENDARY_TURN,
  LEGENDARY_TURN,
  "A4+C5+E5/1+2+4:2 D#5/3:2 E5/4:2 F5/5:2 | F4+A4+D5/1+2+4:2 C#5/3:2 D5/4:2 E5/5:2",
  "E4+A4+C5/1+2+4:2 B4/3:2 C5/4:2 D5/5:2 | E4+G#4+B4/1+2+4:7 r:1 | A4+C5+E5+A5/1+2+3+5:8",
].join(" | ");

export const aquarium: OurSong = {
  slug: "aquarium",
  title: "Aquarium",
  aka: ["The Carnival of the Animals", "Le Carnaval des animaux", "Der Karneval der Tiere"],
  source: {
    composer: "Camille Saint-Saëns",
    died: 1921,
    published: 1922,
    edition:
      "Le Carnaval des animaux, Aquarium, the theme's bars 1 to 8, as a scanned book of orchestral themes on Wikimedia Commons prints it on its page 672; the suite was published in 1922",
  },
  about:
    "Aquarium is the seventh movement of The Carnival of the Animals, a musical joke Saint-Saëns wrote in 1886. " +
    "The suite was published in 1922, the year after his death. " +
    "Terrence Malick's 1978 film Days of Heaven plays it under its opening credits.",
  funFact: "Saint-Saëns banned public performances of the suite while he lived, fearing its jokes would harm his name as a serious composer.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 4, key: A_MINOR, hookBars: [1, 8] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 76,
      numerator: 4,
      denominator: 4,
      right: `${TUNE_RIGHT} | ${OWN} | A4/1:4`,
      left: bars(HOLD, `${COMMON_TUNE_CHORDS}${OWN_CHORDS}`, 1),
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. The thumb now starts on B.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds one shape for each whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "fingering", text: "Fingers 5 and 4 rock between E and D sharp, like water lapping at glass." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play softly and smoothly, as if fish glide through still water." },
        { fromBar: 5, toBar: 5, kind: "fingering", text: "The hand moves up one key here. Finger 4 now plays E, and the thumb waits over B." },
      ],
      tricky: {
        1: "Rock between E and D sharp with fingers 5 and 4. Then finger 4 slides to the white D.",
        3: "Bar 3 is bar 1 again. Keep finger 4 close to the black key, so D sharp comes easily.",
        9: "During the long B, move the hand back down. The thumb returns to A, and finger 5 takes E.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 80,
      numerator: 4,
      denominator: 4,
      right: `${TUNE_RIGHT} | ${OWN} | A4+C5/1+3:4`,
      left: bars(TURNS, `${RARE_TUNE_CHORDS}${OWN_CHORDS.slice(0, -1)}t`, 1),
      skills: ["triads", "two-note-chords"],
      practice: [
        { text: "Play the left hand alone. It steps between a low note and a higher one, on every beat.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "Both hands play on every beat. Keep the beats as even as slow waves." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the left hand soft, so the tune floats above it." },
        { fromBar: 16, toBar: 16, kind: "fingering", text: "End with A and C together. Fingers 1 and 3 press them as one." },
      ],
      tricky: {
        1: "Rock between E and D sharp with fingers 5 and 4, while the left hand steps between A and C.",
        3: "As in bar 1, fingers 5 and 4 rock between E and D sharp. Then finger 4 takes the white D.",
        9: "During the long B, move the right hand back down, so the thumb is on A again.",
      },
    },
    epic: {
      key: A_MINOR,
      bpm: 84,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [stretch(TUNE_RIGHT, 2), OWN_EIGHTHS, EPIC_TUNE_AGAIN].join(" | "),
      left: `${bars(ALBERTI, `${TUNE_CHORDS}${OWN_CHORDS_RICH}${TUNE_CHORDS}`, 1)} | A2+C3+E3/5+3+1:8`,
      pedal: Array(25).fill("P:8").join(" | "),
      markedClashBars: [6, 7, 10, 22, 23],
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's pairs alone from bar 17, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [17, 20], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Change the pedal on each new bar, so the water stays clear." },
        { fromBar: 6, toBar: 8, kind: "fingering", text: "The left hand keeps its low finger near A. It only shifts to G sharp for the E chord." },
        { fromBar: 17, toBar: 24, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        9: "Move the right hand back down during the long B. Then it runs down from E to A with fingers 5 to 1.",
        15: "The left hand reaches down to G sharp. The right hand plays B, D, C and B with fingers 2, 4, 3 and 2.",
        24: "Hold G sharp and B with fingers 1 and 3. Then spread the hand over A, C and E for the last chord.",
      },
    },
    legendary: {
      key: A_MINOR,
      bpm: 88,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [stretch(TUNE_RIGHT, 4), stretch(OWN_EIGHTHS, 2), stretch(LEGENDARY_TUNE_AGAIN, 2)].join(" | "),
      left: [
        bars(STRIDE, LEGENDARY_TUNE_CHORDS, 2),
        bars(WIDE, OWN_CHORDS_RICH, 1),
        bars(STRIDE, LEGENDARY_TUNE_CHORDS, 2),
        "A1+E2+A2/5+2+1:16",
      ].join(" | "),
      pedal: Array(25).fill("P:8 P:8").join(" | "),
      markedClashBars: [15],
      skills: ["octave-bass", "arpeggios", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then a chord, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the left hand's arpeggios alone. The thumb passes under, and finger 3 crosses over.", hands: "left", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [17, 20], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "Use the short rest after each octave and chord to jump to the next one." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Let the arpeggios ripple softly, like light moving through water." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        8: "The left hand jumps from the low E octave up to G sharp, B and E. Use each short rest to land.",
        18: "After the high chord, the right hand drops to C, E and A. Keep the hand in its chord shape.",
        24: "Lift the right hand in the short rest after E, G sharp and B. It lands on A, C, E and A.",
      },
    },
  },
  de: {
    about:
      "Aquarium ist der siebte Satz aus Der Karneval der Tiere, einem musikalischen Scherz, den Saint-Saëns 1886 schrieb. " +
      "Die Suite erschien 1922, im Jahr nach seinem Tod. " +
      "Terrence Malicks Film Days of Heaven von 1978 spielt den Satz zum Vorspann.",
    funFact:
      "Saint-Saëns verbot öffentliche Aufführungen der Suite zu Lebzeiten, weil er fürchtete, ihre Scherze würden seinem Ruf als ernster Komponist schaden.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Der Daumen beginnt jetzt auf dem H.",
          "Jetzt die linke Hand allein. Sie hält jeden Griff einen ganzen Takt lang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Finger 5 und 4 schaukeln zwischen E und Dis, wie Wasser, das an Glas plätschert.",
          "Spiel leise und weich, als ob Fische durch stilles Wasser gleiten.",
          "Hier rückt die Hand eine Taste höher. Finger 4 spielt jetzt das E, und der Daumen wartet über dem H.",
        ],
        tricky: {
          1: "Schaukle mit Finger 5 und 4 zwischen E und Dis. Dann rutscht Finger 4 auf das weiße D.",
          3: "Takt 3 ist wieder Takt 1. Halt Finger 4 nah an der schwarzen Taste, dann kommt das Dis leicht.",
          9: "Führ die Hand während des langen H wieder hinab. Der Daumen kehrt zum A zurück, und Finger 5 nimmt das E.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Sie wechselt auf jedem Schlag zwischen einem tiefen und einem höheren Ton.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Beide Hände spielen auf jedem Schlag. Halt die Schläge so gleichmäßig wie langsame Wellen.",
          "Spiel die linke Hand leise, damit die Melodie darüber schwebt.",
          "Am Ende spielst du A und C zusammen. Finger 1 und 3 drücken sie wie einen Ton.",
        ],
        tricky: {
          1: "Schaukle mit Finger 5 und 4 zwischen E und Dis, während die linke Hand zwischen A und C wechselt.",
          3: "Wie in Takt 1 schaukeln Finger 5 und 4 zwischen E und Dis. Dann nimmt Finger 4 das weiße D.",
          9: "Führ die rechte Hand während des langen H wieder hinab, damit der Daumen wieder auf dem A liegt.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Paare der rechten Hand ab Takt 17 allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal in jedem neuen Takt, damit das Wasser klar bleibt.",
          "Der tiefe Finger der linken Hand bleibt nah am A. Nur für den E-Dur-Akkord rückt er zum Gis.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          9: "Führ die rechte Hand während des langen H wieder hinab. Dann läuft sie mit Finger 5 bis 1 vom E hinunter zum A.",
          15: "Die linke Hand greift hinunter zum Gis. Die rechte Hand spielt H, D, C und H mit Finger 2, 4, 3 und 2.",
          24: "Halt Gis und H mit Finger 1 und 3. Dann spann die Hand für den letzten Akkord über A, C und E.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Arpeggios der linken Hand allein. Der Daumen geht unter, und Finger 3 kreuzt darüber.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause nach jeder Oktave und jedem Akkord, um zum nächsten Griff zu springen.",
          "Lass die Arpeggios leise perlen, wie Licht, das durch Wasser fällt.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          8: "Die linke Hand springt von der tiefen E-Oktave hinauf zu Gis, H und E. Nutz jede kurze Pause zum Landen.",
          18: "Nach dem hohen Akkord fällt die rechte Hand auf C, E und A. Halt die Hand in ihrer Akkordform.",
          24: "Heb die rechte Hand in der kurzen Pause nach E, Gis und H. Sie landet auf A, C, E und A.",
        },
      },
    },
  },
};

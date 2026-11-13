/**
 * *Swan Lake*: the oboe's theme from Act II of Tchaikovsky's ballet, in four versions of ours.
 *
 * The tune is the oboe's theme in bars 1 to 8 of Act II No. 10. The print is in 4/4 with eighths, and
 * the tune writes every eighth as a quarter, so each print bar is a bar of 4/2. Its key is B minor, and
 * the hook is bars 1 to 4. Every version plays the 8 tune bars, then 8 bars of our own over E minor,
 * B minor and F-sharp major. Epic and Legendary then play the tune again in another setting.
 *
 * Our chords, one or two per bar, are B minor, then G major and E minor in bars 3 and 7, then F-sharp
 * major before each B minor close. Common and Rare move the song to A minor. They play E minor for the
 * whole of bars 3 and 7, because a G under the held F sharp would rub against it. Every version closes
 * on B minor, or on A minor in Common and Rare.
 *
 * Common plays the tune over held open fifths and single bass notes. Rare plays a low note on each beat
 * and a two-note chord on the next. Epic rolls an Alberti bass under the tune with the pedal, then plays
 * the tune again with a third or a sixth under its long notes. Legendary plays an octave bass and a
 * chord on each beat, then arpeggios over two octaves, and plays the tune again in four-note chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Epic and Legendary keep. */
const B_MINOR: Key = { tonic: 11, mode: "minor" };

/** The key Common and Rare move the song to. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 4/2, in quarters, which are the print's eighths: one bar per print bar. */
const tune =
  "F#5:4 B4:1 C#5:1 D5:1 E5:1 | F#5:3 D5:1 F#5:3 D5:1 | F#5:3 B4:1 D5:1 B4:1 G4:1 D5:1 | B4:5 E5:1 D5:1 C#5:1 | " +
  "F#5:4 B4:1 C#5:1 D5:1 E5:1 | F#5:3 D5:1 F#5:3 D5:1 | F#5:3 B4:1 D5:1 B4:1 G4:1 D5:1 | B4:6 B4:2";

/** The tune's first three bars in quarters, fingered. Finger 2 takes B in bar 3, so the thumb reaches G. */
const TUNE_OPENING =
  "F#5/5:4 B4/1:1 C#5/2:1 D5/3:1 E5/4:1 | F#5/5:3 D5/3:1 F#5/5:3 D5/3:1 | " +
  "F#5/5:3 B4/2:1 D5/3:1 B4/2:1 G4/1:1 D5/3:1";

/** The tune in 4/2, in quarters, fingered in one place. */
const TUNE_RIGHT = `${TUNE_OPENING} | B4/1:5 E5/4:1 D5/3:1 C#5/2:1 | ${TUNE_OPENING} | B4/1:6 B4/1:2`;

/** Our eight bars after the tune, in 4/2 quarters, over E minor, B minor and F-sharp major. */
const OWN = [
  "E5/4:4 D5/3:2 C#5/2:2 | D5/3:4 F#5/5:2 D5/3:2 | B4/1:4 E5/4:2 D5/3:2 | C#5/2:4 E5/4:2 C#5/2:2",
  "F#5/5:4 E5/4:2 D5/3:2 | E5/4:4 C#5/2:4 | B4/1:2 D5/3:2 C#5/2:4",
].join(" | ");

/** Our eight bars after the tune in 4/2 eighths, with a few passing notes, for Epic and Legendary. */
const OWN_EIGHTHS = [
  "E5/4:4 F#5/5:2 E5/4:2 D5/3:4 C#5/2:4 | D5/3:8 F#5/5:4 D5/3:4",
  "B4/1:4 C#5/2:2 D5/3:2 E5/4:4 D5/3:4 | C#5/2:8 E5/4:4 C#5/2:4",
  "F#5/5:8 E5/4:4 D5/3:4 | E5/4:4 D5/3:2 E5/4:2 C#5/2:8",
  "B4/1:4 D5/3:4 C#5/2:8 | B4/1:12 r:4",
].join(" | ");

/** The chords under the tune for Epic and Legendary, two per bar: b, g, e and f are B, G, E and F sharp. */
const TUNE_CHORDS = "bbbbgebfbbbbgefb";

/** The chords under our eight bars, two per bar. */
const OWN_CHORDS = "eebbeeffbbefbfbb";

/** Each pitch of the B minor text and its pitch in A minor, a whole step down. */
const DOWN_A_STEP: Record<string, string> = { B: "A", "C#": "B", D: "C", E: "D", "F#": "E", G: "F", A: "G", "A#": "G#" };

/** `text`, written in B minor, moved down a whole step to A minor. */
function toAMinor(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => {
    const to = DOWN_A_STEP[name];
    if (to === undefined) throw new Error(`No A minor pitch for ${name}`);
    return `${to}${name.startsWith("C") ? Number(octave) - 1 : Number(octave)}`;
  });
}

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** Bars of `patterns` from `chords`, such as `"bbge"`: one letter per half bar, two per bar. */
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

/** Common's left hand in B minor quarters, one bar per entry: an open fifth, or one bass note, held. */
const COMMON_LEFT = [
  "B2+F#3/5+1:8 | B2+F#3/5+1:8 | E3/2:8 | B2+F#3/5+1:4 F#3/1:4",
  "B2+F#3/5+1:8 | B2+F#3/5+1:8 | E3/2:8 | F#3/1:4 B2+F#3/5+1:4",
  "E3/2:8 | B2+F#3/5+1:8 | E3/2:8 | F#3/1:8",
  "B2+F#3/5+1:8 | E3/2:4 F#3/1:4 | B2+F#3/5+1:4 F#3/1:4 | B2+F#3/5+1:8",
].join(" | ");

/** Rare's half bar in B minor quarters: a low note on the beat, then a two-note chord. `h` holds F sharp. */
const PULSE: Record<string, string> = {
  b: "B2/5:2 D3+F#3/3+1:2",
  e: "E3/2:2 B2+E3/5+2:2",
  f: "F#3/1:2 C#3+F#3/4+1:2",
  h: "F#3/1:4",
};

/** Epic's half bar in eighths: an Alberti group, low, high, middle, high, twice. */
const ALBERTI: Record<string, string> = {
  b: "B2/5:1 F#3/1:1 D3/3:1 F#3/1:1",
  g: "G2/5:1 D3/1:1 B2/3:1 D3/1:1",
  e: "E2/5:1 B2/1:1 G2/3:1 B2/1:1",
  f: "F#2/5:1 C#3/1:1 A#2/3:1 C#3/1:1",
};
for (const chord of Object.keys(ALBERTI)) ALBERTI[chord] = `${ALBERTI[chord]} ${ALBERTI[chord]}`;

/** Legendary's half bar in eighths: an octave on the beat, a chord on the next, each with a rest to jump. */
const STRIDE: Record<string, string> = {
  b: "B1+B2/5+1:3 r:1 D3+F#3+B3/4+2+1:3 r:1",
  g: "G1+G2/5+1:3 r:1 B2+D3+G3/4+2+1:3 r:1",
  e: "E1+E2/5+1:3 r:1 G2+B2+E3/4+2+1:3 r:1",
  f: "F#1+F#2/5+1:3 r:1 A#2+C#3+F#3/4+2+1:3 r:1",
};

/** The six notes of each chord over two octaves, for Legendary's arpeggios. */
const WIDE_NOTES: Record<string, string> = {
  b: "B1 F#2 B2 D3 F#3 B3",
  e: "E2 B2 E3 G3 B3 E4",
  f: "F#1 C#2 F#2 A#2 C#3 F#3",
};

/** Legendary's half bar of arpeggio in eighths: up two octaves and back one note, then a rest to jump. */
const WIDE: Record<string, string> = {};
for (const [chord, notes] of Object.entries(WIDE_NOTES)) {
  const pitches = notes.split(" ");
  const fingers = [5, 2, 1, 3, 2, 1];
  WIDE[chord] = `${[0, 1, 2, 3, 4, 5, 4].map((at) => `${pitches[at]}/${fingers[at]}:1`).join(" ")} r:1`;
}

/** Epic's tune again in eighths, with a third or a sixth under its long notes. */
const TUNE_THIRDS_OPENING = [
  "D5+F#5/3+5:8 B4/1:2 C#5/2:2 D5/3:2 E5/4:2",
  "D5+F#5/3+5:6 B4+D5/1+3:2 D5+F#5/3+5:6 B4+D5/1+3:2",
  "D5+F#5/3+5:6 B4/2:2 D5/3:2 B4/2:2 G4/1:2 D5/5:2",
].join(" | ");

/** Epic's tune again, ending on a three-note B minor chord after a short rest. */
const EPIC_TUNE_AGAIN = [
  TUNE_THIRDS_OPENING,
  "D4+B4/1+3:9 r:1 E5/5:2 D5/4:2 C#5/3:2",
  TUNE_THIRDS_OPENING,
  "F#4+B4/1+3:11 r:1 D4+F#4+B4/1+2+5:4",
].join(" | ");

/** Legendary's tune again in eighths, with its long notes in chords of three and four notes. */
const LEGENDARY_OPENING = [
  "F#4+B4+D5+F#5/1+2+3+5:8 B4/1:2 C#5/2:2 D5/3:2 E5/4:2",
  "B4+D5+F#5/1+3+5:6 B4+D5/1+3:2 B4+D5+F#5/1+3+5:6 B4+D5/1+3:2",
  "B4+D5+F#5/1+3+5:6 B4/2:2 D5/3:2 B4/2:2 G4/1:2 D5/5:2",
].join(" | ");

/** Legendary's tune again, ending on a four-note B minor chord. */
const LEGENDARY_TUNE_AGAIN = [
  LEGENDARY_OPENING,
  "D4+F#4+B4/1+2+3:9 r:1 E5/5:2 D5/4:2 C#5/3:2",
  LEGENDARY_OPENING,
  "D4+F#4+B4/1+2+4:11 r:1 B3+D4+F#4+B4/1+2+3+5:4",
].join(" | ");

export const swanLake: OurSong = {
  slug: "swan-lake",
  title: "Swan Lake",
  aka: ["Schwanensee", "Le Lac des cygnes", "Swan Lake theme", "Op. 20"],
  source: {
    composer: "Pyotr Ilyich Tchaikovsky",
    died: 1893,
    published: 1877,
    edition:
      "Swan Lake, Op. 20, Act II No. 10, the oboe's theme in bars 1 to 8, as a public domain typeset of the theme on Wikimedia Commons prints it; 1877 is the year of the ballet's first staging",
  },
  about:
    "Tchaikovsky wrote the music for the ballet Swan Lake in 1875 and 1876, and the Bolshoi Ballet first staged it in 1877. " +
    "This theme is the oboe's tune from the second act. " +
    "The film Black Swan (2010) contains sequences from Swan Lake.",
  funFact: "Vladimir Begichev commissioned the score in May 1875, and Tchaikovsky received a fee of 800 rubles for it.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: B_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: toAMinor(`${TUNE_RIGHT} | ${OWN} | B4/1:8`),
      left: toAMinor(COMMON_LEFT),
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 9 to 16 with the right hand alone. The hand stays in one place.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Now the left hand alone. It holds one shape for a whole bar or half a bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "Hold the first E while you count to four. Then four short notes climb from A to D." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "This is a sad, proud tune. Let each long high note sing." },
        { fromBar: 3, toBar: 3, kind: "fingering", text: "Finger 2 plays A in this bar, so the thumb can reach down to F." },
      ],
      tricky: {
        1: "After the long E, land the thumb on A. Fingers 2, 3 and 4 then climb to D.",
        3: "Play A with finger 2 here. Then the thumb reaches down to F, and finger 3 takes C.",
        7: "As in bar 3, finger 2 plays A, and the thumb reaches down to F.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 138,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: toAMinor(`${TUNE_RIGHT} | ${OWN} | B4+D5/1+3:8`),
      left: toAMinor(`${bars(PULSE, "bbbbeebhbbbbeefb")} | ${bars(PULSE, "eebbeeffbbefbf")} | B2+D3+F#3/5+3+1:8`),
      skills: ["two-note-chords", "waltz-bass"],
      practice: [
        { text: "Play the left hand alone. A low note comes on the beat, and a two-note chord answers it.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "The left hand plays on every beat: a low note, then a chord. Count it as one, two." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the left hand soft, so the tune sings above it." },
        { fromBar: 16, toBar: 16, kind: "fingering", text: "End with A and C together. Fingers 1 and 3 press them as one." },
      ],
      tricky: {
        3: "Finger 2 plays A in this bar, so the thumb can reach down to F.",
        7: "As in bar 3, finger 2 plays A, and the thumb reaches down to F.",
        12: "The left hand plays E with finger 1, then adds B below it with finger 4.",
      },
    },
    epic: {
      key: B_MINOR,
      bpm: 144,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [inEighths(TUNE_RIGHT), OWN_EIGHTHS, EPIC_TUNE_AGAIN].join(" | "),
      left: `${bars(ALBERTI, `${TUNE_CHORDS}${OWN_CHORDS}${TUNE_CHORDS.slice(0, -1)}`)} B2+D3+F#3/5+3+1:8`,
      pedal: Array(24).fill("P:8 P:8").join(" | "),
      markedClashBars: [3, 7, 19, 23],
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [17, 20], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 3, toBar: 3, kind: "sound", text: "The low G rubs against the held F sharp. That sharp, sad sound is on purpose." },
        { fromBar: 17, toBar: 20, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        8: "The left hand plays A sharp in the first half. Then it moves back to B minor for the close.",
        21: "Fingers 3 and 5 hold D and F sharp. Then the thumb starts the climb from B to E.",
        24: "Use the short rest to spread the right hand over D, F sharp and B.",
      },
    },
    legendary: {
      key: B_MINOR,
      bpm: 152,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [inEighths(TUNE_RIGHT), OWN_EIGHTHS, LEGENDARY_TUNE_AGAIN].join(" | "),
      left: [bars(STRIDE, TUNE_CHORDS), bars(WIDE, OWN_CHORDS), `${bars(STRIDE, TUNE_CHORDS.slice(0, -1))} B1+F#2+B2/5+2+1:8`].join(" | "),
      pedal: Array(24).fill("P:8 P:8").join(" | "),
      markedClashBars: [3, 4, 7, 8, 19, 20, 23, 24],
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
        { fromBar: 9, toBar: 16, kind: "sound", text: "Let the arpeggios flow softly under the tune, and change the pedal on each new chord." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        12: "The left hand climbs two octaves from F sharp, twice. Finger 3 crosses over the thumb onto A sharp.",
        19: "Finger 2 takes B after the chord. Then the thumb reaches down to G, and finger 5 takes D.",
        23: "As in bar 19, the thumb reaches down to G, and finger 5 takes D.",
      },
    },
  },
  de: {
    about:
      "Tschaikowsky schrieb die Musik zum Ballett Schwanensee in den Jahren 1875 und 1876, und das Bolschoi-Ballett brachte es 1877 zum ersten Mal auf die Bühne. " +
      "Dieses Thema ist die Melodie der Oboe aus dem zweiten Akt. " +
      "Der Film Black Swan (2010) enthält Szenen aus Schwanensee.",
    funFact: "Wladimir Begitschew gab die Musik im Mai 1875 in Auftrag, und Tschaikowsky erhielt dafür 800 Rubel.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand. Die Hand bleibt an einem Platz.",
          "Jetzt die linke Hand allein. Sie hält jeden Griff einen ganzen oder einen halben Takt lang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt das erste E, während du bis vier zählst. Dann steigen vier kurze Töne von A bis D.",
          "Das ist eine traurige, stolze Melodie. Lass jeden langen hohen Ton singen.",
          "In diesem Takt spielt Finger 2 das A, damit der Daumen hinunter zum F reicht.",
        ],
        tricky: {
          1: "Setz nach dem langen E den Daumen auf das A. Dann steigen Finger 2, 3 und 4 bis zum D.",
          3: "Spiel das A hier mit Finger 2. Dann reicht der Daumen hinunter zum F, und Finger 3 nimmt das C.",
          7: "Wie in Takt 3 spielt Finger 2 das A, und der Daumen reicht hinunter zum F.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Auf dem Schlag kommt ein tiefer Ton, und ein Zweiklang antwortet.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand spielt auf jedem Schlag: erst einen tiefen Ton, dann einen Akkord. Zähl dazu eins, zwei.",
          "Spiel die linke Hand leise, damit die Melodie darüber singt.",
          "Am Ende spielst du A und C zusammen. Finger 1 und 3 drücken sie wie einen Ton.",
        ],
        tricky: {
          3: "In diesem Takt spielt Finger 2 das A, damit der Daumen hinunter zum F reicht.",
          7: "Wie in Takt 3 spielt Finger 2 das A, und der Daumen reicht hinunter zum F.",
          12: "Die linke Hand spielt das E mit Finger 1 und nimmt dann das H darunter mit Finger 4 dazu.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Terzen der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Das tiefe G reibt sich am gehaltenen Fis. Dieser scharfe, traurige Klang ist gewollt.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          8: "Die linke Hand spielt in der ersten Hälfte ein Ais. Dann kehrt sie für den Schluss nach h-Moll zurück.",
          21: "Finger 3 und 5 halten D und Fis. Dann beginnt der Daumen den Aufstieg vom H zum E.",
          24: "Nutz die kurze Pause, um die rechte Hand über D, Fis und H zu spannen.",
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
          "Lass die Arpeggios leise unter der Melodie fließen, und wechsle das Pedal bei jedem neuen Akkord.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          12: "Die linke Hand steigt zweimal zwei Oktaven vom Fis hinauf. Finger 3 kreuzt über den Daumen auf das Ais.",
          19: "Nach dem Akkord nimmt Finger 2 das H. Dann reicht der Daumen hinunter zum G, und Finger 5 nimmt das D.",
          23: "Wie in Takt 19 reicht der Daumen hinunter zum G, und Finger 5 nimmt das D.",
        },
      },
    },
  },
};

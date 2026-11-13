/**
 * *Wedding March*: the tutti theme from Mendelssohn's music to *A Midsummer Night's Dream*, in four
 * versions of ours.
 *
 * The tune is the second phrase of the march's tutti theme, from a scanned book of orchestral themes. The
 * print is in 4/4 Allegro vivace, in C major. The first phrase ends with an arpeggio no Beginner hand can
 * follow, so the tune leaves it out, and it leaves out the trill and the two grace notes too. The tune
 * writes every sixteenth as a quarter, so each print bar is a bar of 4/1, and the hook is all four bars.
 *
 * Every version writes the tune in 4/2 eighths, two bars per print bar, and keeps C major. The long G
 * ends an eighth early, so the hand lifts to its second place without a crossing. Our chords, one or
 * two per bar, open on F major, then D major under the F sharp, then G major, and close on C major.
 * Every version then plays 8 bars of our own over C major and G major. Epic and Legendary also use F
 * major there, then play the tune again in another setting. Every version closes on C major.
 *
 * Common plays the tune in two hand positions over held single bass notes and open fifths. Rare plays a
 * chord on each beat in the left hand, and eighths and two-note chords in our own bars. Its D major
 * chord is A and D alone, so the F sharp stays the tune's one note outside the key. Epic rolls an
 * Alberti bass with the pedal, runs with the thumb under, and plays the tune again over thirds and
 * sixths. Legendary plays the tune in octaves over an octave bass and a chord. It rolls arpeggios under
 * our own bars, then plays the tune again in chords of three and four notes.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 4/1, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune = "C6:8 B5:6 F#5:2 | A5:4 G5:4 F5:4 D5:4 | C5:8 E5:4 D5:3 E5:1 | D5:8 C5:4 r:4";

/**
 * The tune in 4/2 eighths, two bars per print bar. The thumb sits on F sharp for the first three bars.
 * The long G ends an eighth early, so the hand lifts and lands with the thumb on C.
 */
const TUNE_RIGHT = [
  "C6/5:16 | B5/4:12 F#5/1:4 | A5/3:8 G5/2:7 r:1 | F5/4:8 D5/2:8",
  "C5/1:16 | E5/3:8 D5/2:6 E5/3:2 | D5/2:16 | C5/1:8 r:8",
].join(" | ");

/** Common's eight bars after the tune, in quarters, with the thumb on C. */
const COMMON_OWN = [
  "E5/3:2 E5/3:2 G5/5:4 | F5/4:2 E5/3:2 D5/2:4 | E5/3:2 F5/4:2 G5/5:2 E5/3:2 | D5/2:8",
  "E5/3:2 G5/5:2 F5/4:2 D5/2:2 | E5/3:2 C5/1:2 D5/2:4 | E5/3:2 D5/2:2 C5/1:2 D5/2:2 | C5/1:8",
].join(" | ");

/** Common's left hand in quarters, in one place from C to G: one held note or an open fifth. */
const COMMON_LEFT = [
  "F3/2:8 | D3/4:8 | D3/4:4 G3/1:4 | G3/1:8 | C3+G3/5+1:8 | C3+G3/5+1:4 G3/1:4 | G3/1:8 | C3+G3/5+1:8",
  "C3+G3/5+1:8 | G3/1:8 | C3+G3/5+1:8 | G3/1:8",
  "C3+G3/5+1:4 G3/1:4 | C3+G3/5+1:4 G3/1:4 | C3+G3/5+1:4 G3/1:4 | C3+G3/5+1:8",
].join(" | ");

/** Rare's eight bars after the tune, in eighths, with two-note chords. */
const RARE_OWN = [
  "E5/3:4 G5/5:2 E5/3:2 C5+E5/1+3:8 | D5/2:4 F5/4:2 D5/2:2 G5/5:8",
  "E5/3:2 F5/4:2 G5/5:4 E5/3:4 C5/1:4 | D5+G5/2+5:8 F5/4:4 D5/2:4",
  "E5/3:4 D5/2:2 C5/1:2 D5/2:4 F5/4:4 | E5/3:2 F5/4:2 G5/5:4 F5/4:4 D5/2:4",
  "E5/3:4 C5/1:4 D5/2:2 E5/3:2 D5/2:4 | C5+E5/1+3:16",
].join(" | ");

/** Rare's left-hand triads. G and C share one place, so only F to D and D to G move the hand. */
const TRIAD: Record<string, string> = {
  f: "A2+C3+F3/5+4+1",
  d: "A2+D3/5+3",
  g: "B2+D3+G3/5+3+1",
  c: "C3+E3+G3/4+2+1",
};

/** Rare's left hand in eighths: a triad on every beat, two per half bar, and a held C major chord last. */
function rareLeft(): string {
  const halves = [..."ffdddgggcccgggcc" + "ccggccggcgcgcg"].map((chord) => `${TRIAD[chord]}:4 ${TRIAD[chord]}:4`);
  const lines: string[] = [];
  for (let at = 0; at < halves.length; at += 2) lines.push(halves.slice(at, at + 2).join(" "));
  return `${lines.join(" | ")} | ${TRIAD.c}:16`;
}

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** Bars of `patterns` from `chords`, such as `"ffdd"`: one letter per half bar, two per bar. */
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

/** Epic's and Legendary's eight bars after the tune, in eighths, with the thumb passing under. */
const OWN_EIGHTHS = [
  "C5/1:2 D5/2:2 E5/3:2 F5/1:2 G5/2:4 E5/1:4 | D5/1:2 E5/2:2 F5/3:2 G5/4:2 F5/3:4 D5/1:4",
  "E5/1:2 F5/2:2 G5/3:2 A5/4:2 G5/3:4 E5/1:4 | D5/1:4 G5/4:4 F5/3:2 E5/2:2 D5/1:4",
  "C5/1:4 F5/2:2 G5/3:2 A5/4:4 F5/2:4 | G5/5:2 F5/4:2 E5/3:2 D5/2:2 F5/4:4 D5/2:4",
  "E5/3:2 D5/2:2 C5/1:2 E5/3:2 D5/2:4 G5/5:2 F5/4:2 | E5/3:4 D5/2:4 C5/1:8",
].join(" | ");

/** Epic's tune again, with a third or a sixth under each note. */
const EPIC_TUNE_AGAIN = [
  "A5+C6/3+5:16 | D5+B5/1+5:12 D5+F#5/1+3:4 | F#5+A5/2+4:7 r:1 B4+G5/1+5:8 | B4+F5/1+5:8 B4+D5/1+3:7 r:1",
  "E4+C5/1+5:15 r:1 | C5+E5/1+3:8 B4+D5/1+2:6 C5+E5/1+3:2 | B4+D5/1+3:15 r:1 | E4+G4+C5/1+2+5:16",
].join(" | ");

/** Legendary's tune in octaves, by fingers 1 and 5, with an eighth's lift before each big move. */
const TUNE_OCTAVES = [
  "C5+C6/1+5:16 | B4+B5/1+5:11 r:1 F#4+F#5/1+5:4 | A4+A5/1+5:8 G4+G5/1+5:7 r:1 | F4+F5/1+5:8 D4+D5/1+5:8",
  "C4+C5/1+5:15 r:1 | E4+E5/1+5:7 r:1 D4+D5/1+5:6 E5/5:2 | D4+D5/1+5:16 | C4+C5/1+5:8 r:8",
].join(" | ");

/** Legendary's tune again in chords of three and four notes, the tune on top. */
const LEGENDARY_TUNE_AGAIN = [
  "C5+F5+A5+C6/1+2+3+5:16 | D5+F#5+B5/1+3+5:12 D5+F#5/1+3:4",
  "D5+F#5+A5/1+3+5:8 B4+D5+G5/1+2+5:8 | B4+D5+F5/1+2+5:8 G4+B4+D5/1+2+5:7 r:1",
  "C4+E4+G4+C5/1+2+3+5:15 r:1 | G4+C5+E5/1+3+5:8 G4+B4+D5/1+2+5:6 G4+C5+E5/1+3+5:2",
  "F4+G4+B4+D5/1+2+3+5:15 r:1 | C4+E4+G4+C5/1+2+3+5:16",
].join(" | ");

/** Epic's half bar in eighths: an Alberti group, low, high, middle, high, twice. */
const ALBERTI: Record<string, string> = {
  c: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  f: "F2/5:1 C3/1:1 A2/3:1 C3/1:1",
  d: "A2/5:1 D3/2:1 F#3/1:1 D3/2:1",
  g: "G2/5:1 D3/1:1 B2/3:1 D3/1:1",
};
for (const chord of Object.keys(ALBERTI)) ALBERTI[chord] = `${ALBERTI[chord]} ${ALBERTI[chord]}`;

/** Legendary's half bar in eighths: an octave on the beat, a chord on the next, each with a rest to jump. */
const STRIDE: Record<string, string> = {
  c: "C2+C3/5+1:3 r:1 G2+C3+E3/4+2+1:3 r:1",
  f: "F1+F2/5+1:3 r:1 A2+C3+F3/4+2+1:3 r:1",
  d: "D2+D3/5+1:3 r:1 F#2+A2+D3/4+2+1:3 r:1",
  g: "G1+G2/5+1:3 r:1 B2+D3+G3/4+2+1:3 r:1",
};

/** The six notes of each chord over two octaves, for Legendary's arpeggios. */
const WIDE_NOTES: Record<string, string> = {
  c: "C2 G2 C3 E3 G3 C4",
  f: "F1 C2 F2 A2 C3 F3",
  g: "G1 D2 G2 B2 D3 G3",
};

/** Legendary's half bar of arpeggio in eighths: up two octaves and back one note, then a rest to jump. */
const WIDE: Record<string, string> = {};
for (const [chord, notes] of Object.entries(WIDE_NOTES)) {
  const pitches = notes.split(" ");
  const fingers = [5, 2, 1, 3, 2, 1];
  WIDE[chord] = `${[0, 1, 2, 3, 4, 5, 4].map((at) => `${pitches[at]}/${fingers[at]}:1`).join(" ")} r:1`;
}

/** The chords under the tune for Epic and Legendary, two per bar: f, d, g and c are F, D, G and C major. */
const TUNE_CHORDS = "ffdddgggcccgggcc";

/** The chords under Epic's and Legendary's eight bars, two per bar. */
const OWN_CHORDS = "ccggccggffggcgcc";

/** The last bar of Epic and Legendary in the left hand: a low C major chord. */
const LAST_LEFT = "C2+G2+C3/5+2+1:16";

/** The pedal of Epic and Legendary: changed at each half bar, held through the last bar. */
const PEDAL = `${Array<string>(23).fill("P:8 P:8").join(" | ")} | P:16`;

export const weddingMarch: OurSong = {
  slug: "wedding-march",
  title: "Wedding March",
  aka: ["Hochzeitsmarsch", "A Midsummer Night's Dream", "Ein Sommernachtstraum", "Op. 61"],
  source: {
    composer: "Felix Mendelssohn",
    died: 1847,
    published: 1843,
    edition:
      "A Midsummer Night's Dream, Op. 61, Wedding March, the second phrase of the tutti theme, as a scanned book of orchestral themes on Wikimedia Commons prints it on its page 452; 1843 is the year of the play's first staging with the music",
  },
  about:
    "Mendelssohn wrote this march in 1842 as part of his music for Shakespeare's A Midsummer Night's Dream. " +
    "It became a favourite at weddings after Victoria, the Princess Royal, chose it for her own in 1858. " +
    "Films still play it whenever a couple leaves the altar.",
  funFact: "The first known wedding to use it was in Tiverton, England, on 2 June 1847, played by the organist Samuel Reay.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 1, steps: 4, key: C_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: `${TUNE_RIGHT} | ${inEighths(COMMON_OWN)}`,
      left: inEighths(COMMON_LEFT),
      skills: ["position-change", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 4 to 8 with the right hand alone. The hand moves down to C on the long G.", hands: "right", speed: 0.6, loop: [4, 8], wait: true },
        { text: "Now the left hand alone. It holds one note or an open fifth for a whole bar or half a bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 3, kind: "fingering", text: "Start with the thumb on F sharp and finger 5 on the high C. The tune stays under your hand." },
        { fromBar: 3, toBar: 4, kind: "fingering", text: "Lift the hand just before G ends, and move it down. Then finger 4 lands on F." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play it bright and proud, like the doors of a church swinging open." },
      ],
      tricky: {
        2: "Hold B with finger 4 for six counts. Then the thumb plays F sharp.",
        4: "The hand has moved down. Finger 4 plays F, and finger 2 plays D.",
        11: "Four even notes: E, F, G, then E again. Fingers 3, 4 and 5 climb, and finger 3 comes back.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: `${TUNE_RIGHT} | ${RARE_OWN}`,
      left: rareLeft(),
      skills: ["triads", "two-note-chords", "eighth-notes"],
      practice: [
        { text: "Play the left hand alone. It plays a chord on every beat, like a marching band.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on bars 9 to 16, slowly.", hands: "both", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 3, kind: "fingering", text: "From the F chord to the D chord, finger 5 stays on A. Only the upper notes move." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the chords short and even, so the tune rings out above them." },
        { fromBar: 16, toBar: 16, kind: "fingering", text: "End with C and E together. Fingers 1 and 3 press them as one." },
      ],
      tricky: {
        1: "Hold the high C with finger 5. The left hand plays A, C and F on every beat.",
        2: "The left hand plays A and D. Hold B in the right hand while the chord repeats.",
        4: "Finger 4 plays F, and finger 2 plays D. The left hand stays on B, D and G.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [TUNE_RIGHT, OWN_EIGHTHS, EPIC_TUNE_AGAIN].join(" | "),
      left: `${bars(ALBERTI, `${TUNE_CHORDS}${OWN_CHORDS}${TUNE_CHORDS.slice(0, -2)}`)} | ${LAST_LEFT}`,
      pedal: PEDAL,
      skills: ["alberti-bass", "thumb-under", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play bar 9 with the right hand alone. Pass the thumb under to F.", hands: "right", speed: 0.5, loop: [9, 10], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 9, toBar: 9, kind: "fingering", text: "Pass the thumb under to F after finger 3 plays E." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "The tune is now on top of each pair. Let the upper finger sing it." },
      ],
      tricky: {
        4: "Lift the hand at the end of bar 3. Then finger 4 lands on F, while the left hand rolls G, D and B.",
        21: "Spread the hand over E and C, a sixth apart. Lift it just before the next bar.",
        22: "Play C and E, then B and D, then a quick C and E. The thumb moves one key each time.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [TUNE_OCTAVES, OWN_EIGHTHS, LEGENDARY_TUNE_AGAIN].join(" | "),
      left: [bars(STRIDE, TUNE_CHORDS), bars(WIDE, OWN_CHORDS), `${bars(STRIDE, TUNE_CHORDS.slice(0, -2))} | ${LAST_LEFT}`].join(" | "),
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
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the octaves like trumpets at a royal wedding. Let the little finger lead." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "In the arpeggios, finger 3 crosses over the thumb, and the thumb passes under on the way down." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        10: "The left hand climbs two octaves from the low G. The right hand walks up from D with fingers 1 to 4.",
        12: "The left hand climbs from G again. The right hand leaps from D up to G with finger 4.",
        17: "Spread the right hand over C, F, A and C. The left hand jumps from the low F octave to its chord.",
      },
    },
  },
  de: {
    about:
      "Mendelssohn schrieb diesen Marsch 1842 als Teil seiner Musik zu Shakespeares Ein Sommernachtstraum. " +
      "Er wurde ein Liebling bei Hochzeiten, nachdem Victoria, die Princess Royal, ihn 1858 für ihre eigene Hochzeit wählte. " +
      "Filme spielen ihn noch heute, wann immer ein Paar den Altar verlässt.",
    funFact: "Die erste bekannte Hochzeit mit diesem Marsch war am 2. Juni 1847 in Tiverton, England, gespielt vom Organisten Samuel Reay.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 4 bis 8 nur mit der rechten Hand. Beim langen G wandert die Hand hinunter zum C.",
          "Jetzt die linke Hand allein. Sie hält einen Ton oder eine leere Quinte einen ganzen oder einen halben Takt lang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Fang mit dem Daumen auf dem Fis und Finger 5 auf dem hohen C an. Die Melodie bleibt unter deiner Hand.",
          "Heb die Hand kurz vor dem Ende des G und setz sie tiefer. Dann landet Finger 4 auf dem F.",
          "Spiel hell und stolz, als ob die Türen einer Kirche aufschwingen.",
        ],
        tricky: {
          2: "Halt das H mit Finger 4 sechs Zählzeiten lang. Dann spielt der Daumen das Fis.",
          4: "Die Hand ist nach unten gewandert. Finger 4 spielt das F, und Finger 2 das D.",
          11: "Vier gleichmäßige Töne: E, F, G, dann wieder E. Finger 3, 4 und 5 steigen, und Finger 3 kommt zurück.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Sie spielt auf jedem Schlag einen Akkord, wie eine Blaskapelle.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 9 bis 16 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Vom F-Akkord zum D-Akkord bleibt Finger 5 auf dem A. Nur die oberen Töne bewegen sich.",
          "Spiel die Akkorde kurz und gleichmäßig, damit die Melodie darüber klingt.",
          "Am Ende spielst du C und E zusammen. Finger 1 und 3 drücken sie wie einen Ton.",
        ],
        tricky: {
          1: "Halt das hohe C mit Finger 5. Die linke Hand spielt auf jedem Schlag A, C und F.",
          2: "Die linke Hand spielt A und D. Halt das H in der rechten Hand, während der Akkord sich wiederholt.",
          4: "Finger 4 spielt das F, und Finger 2 das D. Die linke Hand bleibt auf H, D und G.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel Takt 9 nur mit der rechten Hand. Führ den Daumen unter zum F.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Führ den Daumen unter zum F, nachdem Finger 3 das E gespielt hat.",
          "Die Melodie ist jetzt der obere Ton jedes Paars. Lass den oberen Finger sie singen.",
        ],
        tricky: {
          4: "Heb die Hand am Ende von Takt 3. Dann landet Finger 4 auf dem F, während die linke Hand G, D und H rollt.",
          21: "Spann die Hand über E und C, eine Sexte weit. Heb sie kurz vor dem nächsten Takt.",
          22: "Spiel C und E, dann H und D, dann schnell C und E. Der Daumen rückt jedes Mal eine Taste weiter.",
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
          "Spiel die Oktaven wie Trompeten bei einer königlichen Hochzeit. Lass den kleinen Finger führen.",
          "In den Arpeggios kreuzt Finger 3 über den Daumen, und auf dem Weg nach unten geht der Daumen unter.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          10: "Die linke Hand steigt zwei Oktaven vom tiefen G hinauf. Die rechte Hand geht mit Finger 1 bis 4 vom D aufwärts.",
          12: "Die linke Hand steigt wieder vom G hinauf. Die rechte Hand springt mit Finger 4 vom D hinauf zum G.",
          17: "Spann die rechte Hand über C, F, A und C. Die linke Hand springt von der tiefen F-Oktave zu ihrem Akkord.",
        },
      },
    },
  },
};

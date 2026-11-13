/**
 * *Neon Chase*: a tune of our own, written for this app in the style of a 1980s synth film score.
 *
 * There is no print. The tune is ours, in 4/4 and A minor, eight bars of quarters, halves and a dotted
 * half. Its range is G4 to E5, every note lies in A minor, and the hook is bars 1 to 4.
 *
 * Every version plays the tune, then 8 bars of our own. Medium and Hard then play the tune again in
 * another setting and close on an A minor chord. Our chords are A minor, F major, G major and E minor,
 * the colour of i, VI, VII and v. Bar 2 moves from F to G, and E minor ends bars 4 and 7. Our own bars
 * use the same four chords, and every version keeps A minor and closes on it.
 *
 * Beginner plays the tune over a shape of one or two notes, struck on each strong beat. Its right hand
 * moves once, in a short gap after the long E of bar 6. Easy adds a bass on every beat and eighths in
 * our own bars. Medium drives an eighth-note pulse on the root and fifth, with syncopated chord stabs
 * and runs in our bars, then the tune in thirds and sixths. Hard pumps octaves in eighths under
 * sixteenth runs, then plays the tune in short chords of three and four notes.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 4/4, in quarters. */
const tune = "A4:1 A4:1 C5:1 E5:1 | D5:2 C5:1 B4:1 | A4:1 A4:1 C5:1 D5:1 | E5:3 r:1 | E5:1 D5:1 C5:1 D5:1 | E5:2 G4:2 | A4:1 C5:1 B4:1 G4:1 | A4:3 r:1";

/** `text` with every length multiplied by `factor`, so a line in quarters becomes one in eighths or sixteenths. */
function scale(text: string, factor: number): string {
  return text.replace(/:(\d+)/g, (_, length: string) => `:${Number(length) * factor}`);
}

/**
 * The tune in quarters with a finger on each note. The hand starts with the thumb on A, and moves down a
 * key to G at the long E of bar 6.
 */
const TUNE_FINGERED =
  "A4/1:1 A4/1:1 C5/3:1 E5/5:1 | D5/4:2 C5/3:1 B4/2:1 | A4/1:1 A4/1:1 C5/3:1 D5/4:1 | E5/5:3 r:1 | E5/5:1 D5/4:1 C5/3:1 D5/4:1 | E5/5:2 G4/1:2 | A4/2:1 C5/4:1 B4/3:1 G4/1:1 | A4/2:3 r:1";

/** Easy's tune in eighths, with C under the long E of bar 4. */
const TUNE_RARE = scale(TUNE_FINGERED, 2).replace("E5/5:6 r:2", "C5+E5/3+5:6 r:2");

/** Our bars 9 to 16 in quarters, for Beginner, in the hand position from G to D. */
const OWN_COMMON = [
  "A4/2:1 B4/3:1 C5/4:1 A4/2:1 | C5/4:2 A4/2:1 C5/4:1 | D5/5:2 B4/3:1 G4/1:1 | B4/3:2 A4/2:1 G4/1:1",
  "A4/2:1 C5/4:1 D5/5:1 C5/4:1 | A4/2:1 C5/4:1 D5/5:2 | D5/5:1 B4/3:1 G4/1:1 B4/3:1 | A4/2:4",
].join(" | ");

/** Our bars 9 to 16 in eighths, for Easy, in the same hand position. */
const OWN_RARE = [
  "A4/2:2 C5/4:1 B4/3:1 A4/2:2 C5/4:2 | C5/4:2 A4/2:1 C5/4:1 D5/5:2 C5/4:2",
  "D5/5:2 B4/3:1 A4/2:1 G4/1:2 B4/3:2 | B4/3:4 A4/2:1 G4/1:1 A4/2:2",
  "A4/2:1 B4/3:1 C5/4:2 D5/5:2 C5/4:2 | A4/2:2 C5/4:1 D5/5:1 C5/4:2 A4/2:2",
  "B4/3:2 D5/5:2 B4/3:1 A4/2:1 G4/1:2 | A4+C5/2+4:8",
].join(" | ");

/** Our bars 9 to 16 in eighths, for Medium: chord stabs of 3, 3 and 2 eighths, a run up and a run down. */
const OWN_EPIC = [
  "A4+C5+E5/1+2+4:3 A4+C5+E5/1+2+4:3 B4+D5/1+3:2",
  "A4+C5/1+2:3 A4+C5+F5/1+2+5:3 A4+D5/1+4:2",
  "B4+D5/1+3:3 B4+D5+G5/1+3+5:3 B4+D5/1+3:2",
  "G4/1:1 A4/2:1 B4/3:1 C5/1:1 D5/2:1 E5/3:1 G5/5:2",
  "C5+E5+A5/1+2+5:3 C5+E5+A5/1+2+5:3 C5+E5+G5/1+2+4:2",
  "C5+F5+A5/1+3+5:3 C5+F5+A5/1+3+5:3 C5+F5/1+3:2",
  "B4+D5+G5/1+2+5:3 B4+D5+G5/1+2+5:3 B4+D5/1+3:2",
  "G5/5:1 F5/4:1 E5/3:1 D5/2:1 C5/1:1 B4/3:1 A4/2:1 G4/1:1",
].join(" | ");

/** Medium's tune again in eighths, with a third, a fourth or a sixth under each note, and a stab in bar 20's rest. */
const EPIC_TUNE_AGAIN = [
  "C4+A4/1+5:2 C4+A4/1+5:2 E4+C5/1+5:2 G4+E5/1+5:2",
  "F4+D5/1+5:4 E4+C5/1+5:2 D4+B4/1+5:2",
  "C4+A4/1+5:2 C4+A4/1+5:2 E4+C5/1+5:2 G4+D5/1+5:2",
  "B4+E5/2+5:6 r:1 B4+D5/2+4:1",
  "C5+E5/2+4:2 B4+D5/1+3:2 A4+C5/1+2:2 B4+D5/1+3:2",
  "C5+E5/2+5:4 E4+G4/1+2:4",
  "F4+A4/1+3:2 A4+C5/2+4:2 G4+B4/1+3:2 E4+G4/1+2:2",
  "C4+E4+A4/1+2+5:8",
].join(" | ");

/** Hard's tune in sixteenths, with a turn in the long D of bar 2 and a short run in the rest of bar 4. */
const TUNE_HARD = [
  "A4/1:4 A4/1:4 C5/3:4 E5/5:4 | D5/4:6 E5/5:1 D5/4:1 C5/3:4 B4/2:4 | A4/1:4 A4/1:4 C5/3:4 D5/4:4",
  "E5/5:12 D5/4:1 C5/3:1 B4/2:1 C5/3:1 | E5/5:4 D5/4:4 C5/3:4 D5/4:4 | E5/5:8 G4/1:8",
  "A4/2:4 C5/4:4 B4/3:4 G4/1:4 | A4/2:12 r:4",
].join(" | ");

/** Our bars 9 to 16 in sixteenths, for Hard: runs with the thumb passing under, broken chords and stabs. */
const OWN_HARD = [
  "A4/1:1 B4/2:1 C5/3:1 D5/1:1 E5/2:1 F5/3:1 G5/4:1 A5/5:1 C5+E5+A5/1+2+5:3 C5+E5+A5/1+2+5:3 r:2",
  "A4+C5+F5/1+2+5:3 A4+C5+F5/1+2+5:3 A4+C5+F5/1+2+5:2 F5/5:1 E5/4:1 D5/3:1 C5/2:1 A4/1:1 C5/2:1 D5/3:1 F5/5:1",
  "G4/1:1 A4/2:1 B4/3:1 C5/1:1 D5/2:1 E5/3:1 F5/4:1 G5/5:1 B4+D5+G5/1+2+5:3 B4+D5+G5/1+2+5:3 B4+D5+G5/1+2+5:2",
  "G4+B4+E5/1+2+5:3 G4+B4+E5/1+2+5:3 G4+B4+E5/1+2+5:2 E5/5:1 D5/4:1 C5/3:1 B4/2:1 A4/1:1 B4/2:1 A4/1:1 B4/2:1",
  "C5+E5+A5/1+2+5:3 C5+E5+A5/1+2+5:3 C5+E5+A5/1+2+5:2 A5/5:1 G5/4:1 F5/3:1 E5/2:1 D5/1:1 C5/3:1 B4/2:1 A4/1:1",
  "A4+C5+F5/1+2+5:3 A4+C5+F5/1+2+5:3 A4+C5+F5/1+2+5:2 A4/1:1 C5/2:1 F5/4:1 A5/5:1 F5/4:1 C5/2:1 A4/1:1 C5/2:1",
  "G4/1:1 B4/2:1 D5/3:1 G5/5:1 D5/3:1 B4/2:1 G4/1:1 B4/2:1 G4+B4+E5/1+2+5:3 G4+B4+E5/1+2+5:3 B4+E5/2+5:2",
  "E4/1:1 G4/2:1 B4/3:1 E5/5:1 B4/3:1 G4/2:1 E4/1:1 G4/2:1 B4/1:1 C5/2:1 D5/3:1 E5/4:1 D5/3:1 C5/2:1 r:2",
].join(" | ");

/** Hard's tune again in sixteenths, in chords of three and four notes with the tune on top, and syncopated stabs. */
const HARD_TUNE_AGAIN = [
  "A3+C4+E4+A4/1+2+3+5:2 r:2 C4+E4+A4/1+2+5:2 r:2 E4+A4+C5/1+2+5:2 r:2 A4+C5+E5/1+2+5:2 r:2",
  "F4+A4+D5/1+2+5:3 F4+A4+D5/1+2+5:3 r:2 E4+G4+C5/1+2+5:2 r:2 D4+G4+B4/1+2+5:2 r:2",
  "A3+C4+E4+A4/1+2+3+5:2 r:2 C4+E4+A4/1+2+5:2 r:2 E4+A4+C5/1+2+5:2 r:2 F4+A4+D5/1+2+5:2 r:2",
  "G4+B4+E5/1+2+5:3 G4+B4+E5/1+2+5:3 r:2 B4+E5/2+5:2 r:2 B4+D5/2+4:2 r:2",
  "A4+C5+E5/1+2+5:2 r:2 F4+A4+D5/1+2+5:2 r:2 E4+A4+C5/1+2+5:2 r:2 F4+A4+D5/1+2+5:2 r:2",
  "E4+A4+C5+E5/1+2+3+5:3 E4+A4+C5+E5/1+2+3+5:3 r:2 B3+D4+G4/1+2+5:3 B3+D4+G4/1+2+5:3 r:2",
  "C4+F4+A4/1+2+5:2 r:2 F4+A4+C5/1+2+5:2 r:2 E4+G4+B4/1+2+5:2 r:2 B3+E4+G4/1+2+5:2 r:2",
  "A3+C4+E4+A4/1+2+3+5:16",
].join(" | ");

/** Bars of `patterns` from `chords`, such as `"aafg"`: one letter per half bar, two per bar. */
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

/** The chords under the tune, two per bar: a, f, g and e are A minor, F major, G major and E minor. */
const TUNE_CHORDS = "aafgaageaaagfeaa";

/** The chords under our bars 9 to 16 for Beginner and Easy, two per bar. */
const OWN_CHORDS = "aaffggeeaaffgeaa";

/** The chords under our bars 9 to 16 for Medium and Hard, ending on E minor to lead back to the tune. */
const OWN_CHORDS_AGAIN = "aaffggeeaaffgeee";

/** Beginner's shape for a half bar in quarters, in one hand position: E3 under finger 5, C4 under the thumb. */
const HELD: Record<string, string> = {
  a: "E3+A3/5+2:2",
  f: "F3+C4/4+1:2",
  g: "G3/3:2",
  e: "E3+G3/5+3:2",
};

/** Easy's half bar in eighths: a shape on the strong beat and the root on the next, in Beginner's hand position. */
const BEAT: Record<string, string> = {
  a: "E3+A3/5+2:2 A3/2:2",
  f: "F3+C4/4+1:2 F3/4:2",
  g: "G3/3:2 G3/3:2",
  e: "E3+G3/5+3:2 E3/5:2",
};

/** Medium's half bar in eighths: the driving pulse of root, root, fifth and root. */
const PULSE: Record<string, string> = {
  a: "A2/5:1 A2/5:1 E3/1:1 A2/5:1",
  f: "F2/5:1 F2/5:1 C3/1:1 F2/5:1",
  g: "G2/5:1 G2/5:1 D3/1:1 G2/5:1",
  e: "E2/5:1 E2/5:1 B2/1:1 E2/5:1",
};

/**
 * Hard's half bar in sixteenths: the root pumping between two octaves in eighths. F starts on its upper
 * octave, so the thumb steps down from A to F and the hand never stretches past an octave.
 */
const PUMP: Record<string, string> = {
  a: "A2/5:2 A3/1:2 A2/5:2 A3/1:2",
  f: "F3/1:2 F2/5:2 F3/1:2 F2/5:2",
  g: "G2/5:2 G3/1:2 G2/5:2 G3/1:2",
  e: "E2/5:2 E3/1:2 E2/5:2 E3/1:2",
};

/** Hard's left hand: the pump, with a rest before the last bar's low octave so the hand can jump. */
const HARD_LEFT = `${bars(PUMP, `${TUNE_CHORDS}${OWN_CHORDS_AGAIN}${TUNE_CHORDS.slice(0, -2)}`).replace(/E3\/1:2$/, "r:2")} | A1+A2/5+1:16`;

export const neonChase: OurSong = {
  slug: "neon-chase",
  title: "Neon Chase",
  aka: [],
  source: {
    composer: "learn-piano-easy",
    died: null,
    published: 2026,
    edition: "Our own tune, written for Learn Piano Easy in the style of an 80s synth film score",
    own: true,
  },
  about:
    "Neon Chase is a tune of our own, written for this app in the style of a 1980s synth film score. " +
    "A driving bass pulses under it like a car chase at night.",
  funFact: "Many film scores of the 1980s were played on synthesizers instead of an orchestra, often by the composer alone in a small studio.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 4, key: A_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 96,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: scale(`${TUNE_FINGERED} | ${OWN_COMMON}`, 2).replace("E5/5:4 G4/1:4", "E5/5:3 r:1 G4/1:4"),
      left: scale(`${bars(HELD, `${TUNE_CHORDS}${OWN_CHORDS.slice(0, -2)}`)} | E3+A3/5+2:4`, 2),
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play bars 1 to 4 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. The hand moves down one key in bar 6.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It strikes a shape twice in every bar and never moves.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "fingering", text: "Start with the thumb on A. Fingers 1 to 5 then sit on A, B, C, D and E." },
        { fromBar: 6, toBar: 6, kind: "trick", text: "Let go of the long E a little early. In the short gap, move the hand down one key, so the thumb lands on G." },
        { fromBar: 1, toBar: 16, kind: "rhythm", text: "The left hand strikes on beats 1 and 3, like a slow engine. Keep it steady." },
      ],
      tricky: {
        5: "Fingers 5, 4, 3 and 4 rock between E, D and C. Keep the hand still, and let the fingers do the work.",
        10: "Finger 4 plays C, and finger 2 plays A in between. Finger 3 rests over B and waits.",
        13: "Fingers 2, 4 and 5 climb from A over C to D, then step back to C. The thumb rests over G.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 104,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: `${TUNE_RARE} | ${OWN_RARE}`,
      left: `${bars(BEAT, `${TUNE_CHORDS}${OWN_CHORDS.slice(0, -2)}`)} | E3+A3/5+2:8`,
      skills: ["eighth-notes", "two-note-chords"],
      practice: [
        { text: "Play the left hand alone. It plays on every beat, like the engine of a car.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the right hand alone on bars 9 to 16, where the eighths come in.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the whole song, a little slower than written.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "The left hand plays four even beats in each bar. Let the tune ride on top of them." },
        { fromBar: 4, toBar: 4, kind: "fingering", text: "Press C and E together with fingers 3 and 5, and hold them for three beats." },
        { fromBar: 16, toBar: 16, kind: "sound", text: "End with A and C together, and let them ring for the whole bar." },
      ],
      tricky: {
        7: "Finger 2 plays A, finger 4 C, finger 3 B and the thumb G. The hand stays where bar 6 left it.",
        10: "Fingers 4 and 2 swap between C and A, then finger 5 reaches up to D. Keep the eighths even.",
        14: "Fingers 2, 4 and 5 climb to D in eighths, then walk back down to A.",
      },
    },
    epic: {
      key: A_MINOR,
      bpm: 118,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [scale(TUNE_FINGERED, 2), OWN_EPIC, EPIC_TUNE_AGAIN].join(" | "),
      left: `${bars(PULSE, `${TUNE_CHORDS}${OWN_CHORDS_AGAIN}${TUNE_CHORDS.slice(0, -2)}`)} | A2+E3/5+1:8`,
      skills: ["thumb-under", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone until the pulse of eighths runs by itself.", hands: "left", speed: 0.6, loop: [1, 4], wait: false },
        { text: "Play the right hand alone on bars 9 to 16, and count the stabs: three, three, two.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and keep the pulse driving.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "The left hand never stops: eight even eighths in every bar, like headlights flashing past." },
        { fromBar: 9, toBar: 11, kind: "rhythm", text: "The chords fall on 1, the and of 2, and 4. Count eight eighths and stab on 1, 4 and 7." },
        { fromBar: 12, toBar: 12, kind: "fingering", text: "Pass the thumb under to C after B. Fingers 2 and 3 then reach D and E." },
      ],
      tricky: {
        17: "Keep fingers 1 and 5 a sixth apart, and move the whole hand up for each new pair.",
        18: "The pairs walk down from D to B. Keep the hand's shape, and move it one key at a time.",
        19: "The pairs climb as in bar 17. The last one is a fifth, G and D, so close the hand a little.",
      },
    },
    legendary: {
      key: A_MINOR,
      bpm: 118,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [TUNE_HARD, OWN_HARD, HARD_TUNE_AGAIN].join(" | "),
      left: HARD_LEFT,
      skills: ["octave-bass", "sixteenth-notes", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone. Rock between finger 5 and the thumb, an octave apart.", hands: "left", speed: 0.6, loop: [1, 4], wait: false },
        { text: "Play the right hand's runs alone, slowly, and pass the thumb under on the way up.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "Keep the left wrist loose and let it rock. The octaves then pump by themselves." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Play the runs lightly and the stabs short and bright, like a synthesizer." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "The tune is the top note of each chord. Play it a little louder than the rest." },
      ],
      tricky: {
        17: "Stab each chord short, and use the rest after it to move to the next one.",
        22: "Stab the four-note chord twice with fingers 1, 2, 3 and 5. Then drop the hand to B, D and G.",
        23: "Four short chords carry A, C, B and G on top. Let go after each, and land the next in the rest.",
      },
    },
  },
  de: {
    about:
      "Neon Chase ist eine eigene Melodie, für diese App geschrieben im Stil einer Synthesizer-Filmmusik der 1980er Jahre. " +
      "Ein treibender Bass pulsiert darunter wie eine Verfolgungsjagd bei Nacht.",
    funFact: "Viele Filmmusiken der 1980er Jahre wurden auf Synthesizern statt von einem Orchester gespielt, oft vom Komponisten allein in einem kleinen Studio.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 4 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. In Takt 6 rückt die Hand eine Taste tiefer.",
          "Jetzt die linke Hand allein. Sie schlägt in jedem Takt zweimal einen Griff an und bewegt sich nie.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Fang mit dem Daumen auf dem A an. Finger 1 bis 5 liegen dann auf A, H, C, D und E.",
          "Lass das lange E etwas früher los. In der kurzen Lücke rückt die Hand eine Taste tiefer, sodass der Daumen auf dem G landet.",
          "Die linke Hand schlägt auf Schlag 1 und 3 an, wie ein langsamer Motor. Halt sie gleichmäßig.",
        ],
        tricky: {
          5: "Finger 5, 4, 3 und 4 schaukeln zwischen E, D und C. Halt die Hand still, und lass die Finger arbeiten.",
          10: "Finger 4 spielt das C, und Finger 2 spielt dazwischen das A. Finger 3 ruht über dem H und wartet.",
          13: "Finger 2, 4 und 5 steigen vom A über das C zum D, dann zurück zum C. Der Daumen ruht über dem G.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Sie spielt auf jedem Schlag, wie der Motor eines Autos.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand. Dort kommen die Achtel dazu.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand spielt vier gleichmäßige Schläge in jedem Takt. Lass die Melodie darauf reiten.",
          "Drück C und E zusammen mit Finger 3 und 5, und halt sie drei Schläge lang.",
          "Am Ende spielst du A und C zusammen. Lass sie den ganzen Takt klingen.",
        ],
        tricky: {
          7: "Finger 2 spielt das A, Finger 4 das C, Finger 3 das H und der Daumen das G. Die Hand bleibt, wo Takt 6 sie gelassen hat.",
          10: "Finger 4 und 2 wechseln zwischen C und A, dann greift Finger 5 hinauf zum D. Halt die Achtel gleichmäßig.",
          14: "Finger 2, 4 und 5 steigen in Achteln zum D, dann gehen sie zurück hinunter zum A.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein, bis der Puls aus Achteln von selbst läuft.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand, und zähl die Akkordschläge: drei, drei, zwei.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den Puls treiben.",
        ],
        tips: [
          "Die linke Hand hört nie auf: acht gleichmäßige Achtel in jedem Takt, wie vorbeiblitzende Scheinwerfer.",
          "Die Akkorde fallen auf 1, das Und von 2 und auf 4. Zähl acht Achtel und schlag auf 1, 4 und 7 an.",
          "Setz nach dem H den Daumen unter zum C. Dann erreichen Finger 2 und 3 das D und das E.",
        ],
        tricky: {
          17: "Halt Finger 1 und 5 eine Sexte auseinander, und rück die ganze Hand für jedes neue Paar höher.",
          18: "Die Paare gehen vom D hinunter zum H. Behalt die Form der Hand, und rück sie jeweils eine Taste weiter.",
          19: "Die Paare steigen wie in Takt 17. Das letzte ist eine Quinte, G und D, also schließ die Hand ein wenig.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein. Schaukel zwischen Finger 5 und dem Daumen, eine Oktave auseinander.",
          "Spiel die Läufe der rechten Hand langsam allein, und setz auf dem Weg nach oben den Daumen unter.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Halt das linke Handgelenk locker und lass es schaukeln. Dann pumpen die Oktaven von selbst.",
          "Spiel die Läufe leicht und die Akkordschläge kurz und hell, wie ein Synthesizer.",
          "Die Melodie ist der obere Ton jedes Akkords. Spiel ihn etwas lauter als den Rest.",
        ],
        tricky: {
          17: "Schlag jeden Akkord kurz an, und nutz die Pause danach, um zum nächsten zu wechseln.",
          22: "Schlag den Akkord aus vier Tönen zweimal mit Finger 1, 2, 3 und 5 an. Dann senk die Hand zu H, D und G.",
          23: "Vier kurze Akkorde tragen A, C, H und G oben. Lass nach jedem los, und lande den nächsten in der Pause.",
        },
      },
    },
  },
};

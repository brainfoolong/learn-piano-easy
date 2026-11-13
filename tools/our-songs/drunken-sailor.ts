/**
 * *Drunken Sailor*: the sea shanty, in four versions of ours.
 *
 * The tune is the verse as R. R. Terry's *The Shanty Book, Part I* of 1921 prints it, scanned on
 * Wikimedia Commons. The print is in 2/4 with no key signature, in the Dorian mode on D. The tune writes
 * every print sixteenth as a quarter, so each print bar is a bar of 2/1. Its key is D minor with one B
 * natural, and the hook is the first four bars.
 *
 * Every version writes the tune in 4/2, one bar per print bar, then plays 8 bars of our own. Epic and
 * Legendary then play the tune again in another setting. Our chords are D minor and C major, a half bar
 * each, with F major before the close. Our own bars use the same chords, and Epic and Legendary add A
 * minor. Every version keeps D minor and closes on it.
 *
 * Common plays the tune in quarters over held single bass notes and one open fifth. The hand moves
 * once, after the long high D. Rare plays a bass note and a short chord on alternate beats, and adds
 * eighths and two-note chords in our own bars. Epic rolls an Alberti bass with the pedal, passes the
 * thumb under in our own bars, and plays the tune again an octave up over thirds. Legendary plays the
 * tune in octaves over an octave bass and a chord. It rolls arpeggios under our own bars, then plays the
 * tune again in chords of three and four notes.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 2/1, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune =
  "A4:2 A4:1 A4:1 A4:2 A4:1 A4:1 | A4:2 D4:2 F4:2 A4:2 | G4:2 G4:1 G4:1 G4:2 G4:1 G4:1 | G4:2 C4:2 E4:2 G4:2 | A4:2 A4:1 A4:1 A4:2 A4:1 A4:1 | A4:2 B4:2 C5:2 D5:2 | C5:2 A4:2 G4:2 E4:2 | D4:4 D4:4";

/** The tune in 4/2 quarters, with a finger on every note. Finger 2 takes the last A of bar 5. */
const TUNE = [
  "A4/5:2 A4/5:1 A4/5:1 A4/5:2 A4/5:1 A4/5:1 | A4/5:2 D4/1:2 F4/3:2 A4/5:2",
  "G4/4:2 G4/4:1 G4/4:1 G4/4:2 G4/4:1 G4/4:1 | G4/4:2 C4/1:2 E4/2:2 G4/4:2",
  "A4/5:2 A4/5:1 A4/5:1 A4/5:2 A4/5:1 A4/2:1 | A4/2:2 B4/3:2 C5/4:2 D5/5:2",
  "C5/5:2 A4/4:2 G4/3:2 E4/2:2 | D4/1:4 D4/1:4",
].join(" | ");

/** `text` with every length doubled, so quarters become eighths. */
function doubled(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** Common's eight bars after the tune, in quarters, in one hand position from D to A. */
const OWN_COMMON = [
  "D4/1:2 F4/3:2 A4/5:4 | G4/4:2 F4/3:2 E4/2:4 | F4/3:2 E4/2:2 D4/1:2 F4/3:2 | E4/2:2 G4/4:2 G4/4:4",
  "A4/5:2 A4/5:2 F4/3:2 A4/5:2 | G4/4:2 E4/2:2 G4/4:4 | G4/4:2 E4/2:2 A4/5:2 E4/2:2 | D4/1:8",
].join(" | ");

/** Common's left hand in quarters: one held note a bar, or one a half bar, and an open fifth on G. */
const COMMON_LEFT = [
  "D3/1:8 | D3/1:8 | C3/2:8 | C3/2:8 | D3/1:8 | D3/1:4 G2+D3/5+1:4 | A2/4:4 C3/2:4 | D3/1:8",
  "D3/1:8 | C3/2:8 | D3/1:8 | C3/2:8 | D3/1:8 | C3/2:8 | A2/4:8 | D3/1:8",
].join(" | ");

/** Rare's eight bars after the tune, in eighths, with two-note chords, in the same hand position. */
const OWN_RARE = [
  "D4/1:4 F4/3:2 E4/2:2 D4/1:4 A4/5:4 | G4/4:4 F4/3:2 E4/2:2 E4+G4/2+4:8",
  "F4/3:2 G4/4:2 A4/5:4 D4+F4/1+3:4 F4/3:4 | E4/2:4 G4/4:4 E4+G4/2+4:8",
  "A4/5:4 A4/5:2 G4/4:2 F4/3:4 A4/5:4 | G4/4:2 F4/3:2 E4/2:4 G4/4:8",
  "F4/3:4 A4/5:4 E4+G4/2+4:4 E4/2:4 | D4+F4/1+3:16",
].join(" | ");

/** Bars of `patterns` from `chords`, such as `"ddcc"`: one letter per half bar, two per bar. */
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

/** The chords under the tune, two per bar: d, c and f are D minor, C major and F major. */
const TUNE_CHORDS = "ddddccccddddfcdd";

/** The chords under our eight bars, two per bar: a is A minor. */
const OWN_CHORDS = "ddccddaaddccfcdd";

/** The chords under Rare's bars 9 to 15, two per bar: C major stands in for A minor, so the hand stays. */
const RARE_OWN_CHORDS = "ddccddccddccfc";

/**
 * Rare's half bar in eighths: a bass note, then two notes of the chord a beat later. The hand never
 * moves, since D minor and F major share F and A, and C major takes the free fingers.
 */
const OOM_PAH: Record<string, string> = {
  d: "D3/4:4 F3+A3/2+1:4",
  c: "C3/5:4 G3/2:4",
  f: "C3/5:4 F3+A3/2+1:4",
};

/** Our bars 9 to 16 in eighths for Epic and Legendary, with the thumb passing under. Bar 16 ends with a rest. */
const OWN_EIGHTHS = [
  "D4/1:2 E4/2:2 F4/3:2 G4/1:2 A4/2:2 B4/3:2 C5/4:2 A4/2:2 | G4/1:4 C5/4:2 B4/3:2 C5/4:4 G4/1:4",
  "A4/2:2 G4/1:2 F4/3:2 E4/2:2 D4/1:4 F4/3:2 A4/5:2 | E4/1:2 A4/3:2 C5/5:4 A4/3:2 B4/4:2 C5/5:2 A4/3:2",
  "F4/1:2 A4/3:2 D5/5:4 C5/4:2 A4/2:2 F4/1:4 | G4/2:2 E4/1:2 G4/2:2 B4/4:2 C5/5:4 G4/2:4",
  "A4/3:2 G4/2:2 F4/1:2 A4/3:2 G4/2:4 E4/1:4 | F4/3:2 E4/2:2 D4/1:8 r:4",
].join(" | ");

/** Epic's tune again in eighths, an octave up, with a third or a sixth under its long notes. */
const EPIC_TUNE_AGAIN = [
  "F5+A5/2+4:4 A5/4:2 A5/4:2 F5+A5/2+4:4 A5/4:2 A5/4:2 | F5+A5/2+4:4 D5/1:4 F5/2:4 F5+A5/2+4:4",
  "E5+G5/1+3:4 G5/3:2 G5/3:2 E5+G5/1+3:4 G5/3:2 G5/3:2 | E5+G5/1+3:4 C5/1:4 E5/2:4 E5+G5/2+4:4",
  "F5+A5/3+5:4 A5/5:2 A5/5:2 F5+A5/3+5:4 A5/5:2 A5/5:2 | F5+A5/1+2:4 B5/3:4 C6/4:4 F5+D6/1+5:4",
  "A5+C6/3+5:4 F5+A5/1+3:4 E5+G5/1+3:4 C5+E5/1+3:3 r:1 | F4+A4+D5/1+2+5:16",
].join(" | ");

/** Legendary's tune in eighths in octaves, with a short rest before each leap of a fourth or more. */
const TUNE_OCTAVES = [
  "A4+A5/1+5:4 A4+A5/1+5:2 A4+A5/1+5:2 A4+A5/1+5:4 A4+A5/1+5:2 A4+A5/1+5:2",
  "A4+A5/1+5:3 r:1 D4+D5/1+5:4 F4+F5/1+5:3 r:1 A4+A5/1+5:4",
  "G4+G5/1+5:4 G4+G5/1+5:2 G4+G5/1+5:2 G4+G5/1+5:4 G4+G5/1+5:2 G4+G5/1+5:2",
  "G4+G5/1+5:3 r:1 C4+C5/1+5:3 r:1 E4+E5/1+5:4 G4+G5/1+5:4",
  "A4+A5/1+5:4 A4+A5/1+5:2 A4+A5/1+5:2 A4+A5/1+5:4 A4+A5/1+5:2 A4+A5/1+5:2",
  "A4+A5/1+5:4 B4+B5/1+5:4 C5+C6/1+5:4 D5+D6/1+5:4",
  "C5+C6/1+5:4 A4+A5/1+5:4 G4+G5/1+5:4 E4+E5/1+5:4",
  "D4+D5/1+5:8 D4+D5/1+5:8",
].join(" | ");

/** Legendary's tune again in short chords of three and four notes, the tune on top, each with a rest to jump. */
const LEGENDARY_TUNE_AGAIN = [
  "A4+D5+F5+A5/1+2+3+5:3 r:1 A5/5:2 A5/5:2 A4+D5+F5+A5/1+2+3+5:3 r:1 A5/5:2 A5/5:2",
  "A4+D5+F5+A5/1+2+3+5:3 r:1 F4+A4+D5/1+2+5:3 r:1 A4+D5+F5/1+2+5:3 r:1 A4+D5+F5+A5/1+2+3+5:3 r:1",
  "G4+C5+E5+G5/1+2+3+5:3 r:1 G5/5:2 G5/5:2 G4+C5+E5+G5/1+2+3+5:3 r:1 G5/5:2 G5/5:2",
  "G4+C5+E5+G5/1+2+3+5:3 r:1 E4+G4+C5/1+2+5:3 r:1 G4+C5+E5/1+2+5:3 r:1 G4+C5+E5+G5/1+2+3+5:3 r:1",
  "A4+D5+F5+A5/1+2+3+5:3 r:1 A5/5:2 A5/5:2 A4+D5+F5+A5/1+2+3+5:3 r:1 A5/5:2 A5/5:2",
  "A4+D5+F5+A5/1+2+3+5:3 r:1 B4+D5+G5+B5/1+2+3+5:3 r:1 C5+F5+A5+C6/1+2+3+5:3 r:1 D5+F5+A5+D6/1+2+3+5:3 r:1",
  "C5+F5+A5+C6/1+2+3+5:3 r:1 C5+F5+A5/1+2+5:3 r:1 C5+E5+G5/1+3+5:3 r:1 G4+C5+E5/1+2+5:3 r:1",
  "D4+F4+A4+D5/1+2+3+5:16",
].join(" | ");

/** Epic's half bar in eighths: an Alberti group, low, high, middle, high, twice. F major lies over C. */
const ALBERTI: Record<string, string> = {
  d: "D3/5:1 A3/1:1 F3/3:1 A3/1:1",
  c: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  f: "C3/5:1 A3/1:1 F3/2:1 A3/1:1",
  a: "A2/5:1 E3/1:1 C3/3:1 E3/1:1",
};
for (const chord of Object.keys(ALBERTI)) ALBERTI[chord] = `${ALBERTI[chord]} ${ALBERTI[chord]}`;

/** Legendary's half bar in eighths: an octave on the beat, a chord on the next, each with a rest to jump. */
const TOLL: Record<string, string> = {
  d: "D2+D3/5+1:3 r:1 A2+D3+F3/5+2+1:3 r:1",
  c: "C2+C3/5+1:3 r:1 G2+C3+E3/5+2+1:3 r:1",
  f: "F2+F3/5+1:3 r:1 A2+C3+F3/5+3+1:3 r:1",
};

/** Legendary's half bar of arpeggio in eighths: up and back over an octave and a half. */
const WIDE: Record<string, string> = {
  d: "D2/5:1 A2/2:1 D3/1:1 F3/3:1 A3/2:1 F3/3:1 D3/1:1 r:1",
  c: "C2/5:1 G2/2:1 C3/1:1 E3/3:1 G3/2:1 E3/3:1 C3/1:1 r:1",
  a: "A1/5:1 E2/2:1 A2/1:1 C3/3:1 E3/2:1 C3/3:1 A2/1:1 r:1",
  f: "F1/5:1 C2/2:1 F2/1:1 A2/3:1 C3/2:1 A2/3:1 F2/1:1 r:1",
};

/** The last bar of Rare and Epic in the left hand: a D minor chord where the hand already lies. */
const EPIC_LAST_LEFT = "D3+F3+A3/5+3+1:16";

/** Legendary's last bar in the left hand: a low D minor fifth and octave. */
const LEGENDARY_LAST_LEFT = "D2+A2+D3/5+2+1:16";

/** The pedal of Epic and Legendary: changed at each half bar, held through the last bar. */
const PEDAL = `${Array<string>(23).fill("P:8 P:8").join(" | ")} | P:16`;

export const drunkenSailor: OurSong = {
  slug: "drunken-sailor",
  title: "Drunken Sailor",
  aka: ["What Shall We Do with the Drunken Sailor?", "What Shall We Do with a Drunken Sailor", "Early in the Morning"],
  source: {
    composer: "Traditional",
    died: null,
    published: 1891,
    edition:
      "The verse as R. R. Terry's The Shanty Book, Part I (1921) prints it, scanned on Wikimedia Commons; Davis and Tozer first printed its tune in 1891",
  },
  about:
    "Drunken Sailor is a sea shanty that crews sang while hauling ropes or turning the capstan. " +
    "Nobody knows who wrote it, and its tune is in the Dorian mode.",
  funFact: "The first written account of the shanty comes from a whaling voyage of 1839, out of New London, Connecticut.",
  mythic: null,
  collection: "sea",
  tune: { text: tune, numerator: 2, denominator: 1, steps: 4, key: D_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 138,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: `${TUNE} | ${OWN_COMMON}`,
      left: COMMON_LEFT,
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. The tune climbs up to D and comes home.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds one low note for each bar or half bar.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "Each half of the bar goes long, short, short. Stamp it like a sailor on the deck." },
        { fromBar: 2, toBar: 2, kind: "fingering", text: "Finger 5 plays A, then the thumb reaches down to D. The hand stays where it is." },
        { fromBar: 5, toBar: 6, kind: "fingering", text: "Play the last A of bar 5 with finger 2. Fingers 3, 4 and 5 are then ready for B, C and D." },
      ],
      tricky: {
        3: "Finger 4 plays G six times: long, short, short, long, short, short. Keep the short notes light.",
        5: "Finger 5 plays A five times. Then finger 2 takes the last A, so the hand is ready to climb.",
        7: "Finger 5 moves down from D to C. Then fingers 4, 3 and 2 walk down to A, G and E.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 112,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: `${doubled(TUNE)} | ${OWN_RARE}`,
      left: `${bars(OOM_PAH, TUNE_CHORDS)} | ${bars(OOM_PAH, RARE_OWN_CHORDS)} | ${EPIC_LAST_LEFT}`,
      skills: ["triads", "two-note-chords", "eighth-notes"],
      practice: [
        { text: "Play the left hand alone: a low note, then two notes on the next beat.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on bars 9 to 16, slowly.", hands: "both", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "The left hand swings low, high, low, high, like a crew pulling on a rope together." },
        { fromBar: 6, toBar: 7, kind: "fingering", text: "After the long high D, finger 5 slides down to C. That is the one move of the hand." },
        { fromBar: 16, toBar: 16, kind: "sound", text: "End with D and F together, and let them ring." },
      ],
      tricky: {
        3: "Finger 4 plays G six times, while the left hand plays C, then G. Keep both hands even.",
        4: "The thumb reaches down to C, and finger 2 plays E. The left hand stays on C and G.",
        7: "After the long D, finger 5 moves down to C. The left hand plays C, then F and A, then C and G.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 144,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [doubled(TUNE), OWN_EIGHTHS, EPIC_TUNE_AGAIN].join(" | "),
      left: `${bars(ALBERTI, `${TUNE_CHORDS}${OWN_CHORDS}${TUNE_CHORDS.slice(0, -2)}`)} | ${EPIC_LAST_LEFT}`,
      pedal: PEDAL,
      skills: ["alberti-bass", "thumb-under", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play bars 9 to 16 with the right hand alone, and pass the thumb under on the way up.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 9, toBar: 9, kind: "fingering", text: "Pass the thumb under to G after finger 3 plays F." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "The tune is now the top note of each pair. Let the upper finger sing it." },
      ],
      tricky: {
        7: "Finger 5 moves down from D to C, and fingers 4, 3 and 2 walk down. The left hand rolls F major, then C major.",
        17: "Fingers 2 and 4 press F and A together. Then finger 4 plays A twice alone.",
        24: "The left hand plays D, F and A together with fingers 5, 3 and 1. The right hand holds F, A and D.",
      },
    },
    legendary: {
      key: D_MINOR,
      bpm: 160,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [TUNE_OCTAVES, OWN_EIGHTHS, LEGENDARY_TUNE_AGAIN].join(" | "),
      left: [bars(TOLL, TUNE_CHORDS), bars(WIDE, OWN_CHORDS), `${bars(TOLL, TUNE_CHORDS.slice(0, -2))} | ${LEGENDARY_LAST_LEFT}`].join(" | "),
      pedal: PEDAL,
      skills: ["octave-bass", "arpeggios", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then a chord, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the right hand's octaves alone. Keep the thumb and finger 5 open, like a fixed frame.", hands: "right", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the left hand's arpeggios alone, and let the thumb pass under on the way down.", hands: "left", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "Lift the hand in each short rest, then land on the next octave." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Let the arpeggios roll softly, like waves under the ship." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "Play the chords short and bold, like boots on the deck. The top note is the tune." },
      ],
      tricky: {
        9: "The thumb passes under to G after F. The left hand starts its arpeggio on the low D.",
        12: "The left hand reaches down to the low A with finger 5. The right hand starts on E with the thumb.",
        15: "The left hand starts on the low F, then on C. In the right hand, the thumb plays F, then E.",
      },
    },
  },
  de: {
    about:
      "Drunken Sailor ist ein Shanty, ein Seemannslied, das Matrosen beim Ziehen der Taue oder beim Drehen des Ankerspills sangen. " +
      "Niemand weiß, wer es geschrieben hat, und seine Melodie steht in der dorischen Tonart.",
    funFact: "Der erste schriftliche Bericht über den Shanty stammt von einer Walfangfahrt im Jahr 1839, die in New London, Connecticut, begann.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Die Melodie steigt bis zum D und kehrt heim.",
          "Jetzt die linke Hand allein. Sie hält einen tiefen Ton für jeden Takt oder halben Takt.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Jede Takthälfte geht lang, kurz, kurz. Stampf sie wie ein Matrose an Deck.",
          "Finger 5 spielt das A, dann greift der Daumen hinunter zum D. Die Hand bleibt, wo sie ist.",
          "Spiel das letzte A in Takt 5 mit Finger 2. Dann sind Finger 3, 4 und 5 bereit für H, C und D.",
        ],
        tricky: {
          3: "Finger 4 spielt sechsmal das G: lang, kurz, kurz, lang, kurz, kurz. Spiel die kurzen Töne leicht.",
          5: "Finger 5 spielt fünfmal das A. Dann nimmt Finger 2 das letzte A, damit die Hand bereit zum Steigen ist.",
          7: "Finger 5 rückt vom D hinunter zum C. Dann gehen Finger 4, 3 und 2 hinunter zu A, G und E.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: einen tiefen Ton, dann zwei Töne auf dem nächsten Schlag.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 9 bis 16 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand schwingt tief, hoch, tief, hoch, wie eine Mannschaft, die gemeinsam an einem Tau zieht.",
          "Nach dem langen hohen D rutscht Finger 5 hinunter zum C. Das ist der einzige Wechsel der Hand.",
          "Am Ende spielst du D und F zusammen. Lass sie klingen.",
        ],
        tricky: {
          3: "Finger 4 spielt sechsmal das G, während die linke Hand C und dann G spielt. Halt beide Hände gleichmäßig.",
          4: "Der Daumen greift hinunter zum C, und Finger 2 spielt das E. Die linke Hand bleibt auf C und G.",
          7: "Nach dem langen D rückt Finger 5 hinunter zum C. Die linke Hand spielt C, dann F und A, dann C und G.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand, und setz auf dem Weg nach oben den Daumen unter.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Setz den Daumen unter zum G, nachdem Finger 3 das F gespielt hat.",
          "Die Melodie ist jetzt der obere Ton jedes Paars. Lass den oberen Finger sie singen.",
        ],
        tricky: {
          7: "Finger 5 rückt vom D hinunter zum C, und Finger 4, 3 und 2 gehen abwärts. Die linke Hand rollt F-Dur, dann C-Dur.",
          17: "Finger 2 und 4 drücken F und A zusammen. Dann spielt Finger 4 zweimal das A allein.",
          24: "Die linke Hand spielt D, F und A zusammen mit Finger 5, 3 und 1. Die rechte Hand hält F, A und D.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Oktaven der rechten Hand allein. Halt Daumen und Finger 5 offen, wie einen festen Rahmen.",
          "Spiel die Arpeggios der linken Hand allein, und lass auf dem Weg nach unten den Daumen untergehen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Heb die Hand in jeder kurzen Pause, dann lande auf der nächsten Oktave.",
          "Lass die Arpeggios leise rollen, wie Wellen unter dem Schiff.",
          "Spiel die Akkorde kurz und kräftig, wie Stiefel auf dem Deck. Der obere Ton ist die Melodie.",
        ],
        tricky: {
          9: "Nach dem F geht der Daumen unter zum G. Die linke Hand beginnt ihr Arpeggio auf dem tiefen D.",
          12: "Die linke Hand greift mit Finger 5 hinunter zum tiefen A. Die rechte Hand beginnt mit dem Daumen auf dem E.",
          15: "Die linke Hand beginnt auf dem tiefen F, dann auf dem C. In der rechten Hand spielt der Daumen das F, dann das E.",
        },
      },
    },
  },
};

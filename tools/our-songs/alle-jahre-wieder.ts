/**
 * *Alle Jahre wieder*: Friedrich Silcher's tune to Wilhelm Hey's Christmas words, in four versions of ours.
 *
 * The tune is the whole verse of eight bars, moved from D major to C major. It ends on E, the third, as
 * the original ends on its own third.
 *
 * The tune is in 4/4, and every length here is twice as long, in 4/2. A half note is one beat, so the
 * eighths of the tune are quarters, and Common plays them at their place. The hook is bars 1 and 2, the
 * opening phrase.
 *
 * Every version plays the verse twice. Common plays it over held fifths. Rare puts block triads under
 * the first verse and a root and fifth in turns under the second. Epic plays an Alberti bass under the
 * first verse and the tune in thirds and sixths an octave up over broken chords, with the pedal.
 * Legendary sets the tune in chords over a stride bass, then in high octaves over arpeggios.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 4/2, in quarters: the eight bars of the verse. */
const tune = [
  "G4:3 A4:1 G4:2 F4:2 | E4:4 D4:4 | C4:2 D4:1 E4:1 F4:2 E4:2 | D4:6 r:2",
  "E4:2 G4:2 A4:2 G4:2 | C5:4 B4:2 A4:2 | G4:2 F4:1 E4:1 F4:2 G4:2 | E4:6 r:2",
].join(" | ");

/** The verse in the right hand, in quarters, with two moves of the hand: after the long D and the long C. */
const VERSE = [
  "G4/4:3 A4/5:1 G4/4:2 F4/3:2 | E4/2:4 D4/1:4 | C4/1:2 D4/2:1 E4/3:1 F4/4:2 E4/3:2 | D4/1:6 r:2",
  "E4/2:2 G4/3:2 A4/4:2 G4/3:2 | C5/5:4 B4/5:2 A4/4:2 | G4/3:2 F4/2:1 E4/1:1 F4/2:2 G4/3:2 | E4/1:6 r:2",
].join(" | ");

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** Bars of `patterns` from `letters`, such as `"CCFF CCGG"`: one letter per pattern, a space between bars. */
function patternBars(patterns: Record<string, string>, letters: string): string {
  return letters
    .split(" ")
    .map((bar) => [...bar].map((letter) => patterns[letter]).join(" "))
    .join(" | ");
}

/** The verse's chords, one letter per beat: C, F, G, and H for G seventh. */
const CHORDS = "CCFF CCGG CCCC GGGG CCCC FFHH HHHH CCCC";

/** The verse's chords, one letter per half bar, for a pattern that fills two beats. */
const HALF_CHORDS = "CF CG CC GG CC FH HH CC";

/** The left hand of Common in quarters: held fifths of C and G, and a single F, all in one place. */
const COMMON_LEFT = [
  "C3+G3/5+1:8 | C3+G3/5+1:4 D3+G3/4+1:4 | C3+G3/5+1:8 | D3+G3/4+1:8",
  "C3+G3/5+1:8 | F3/2:4 D3+G3/4+1:4 | D3+G3/4+1:8 | C3+G3/5+1:8",
].join(" | ");

/** The first verse's left hand in Rare, in quarters: block triads, with the hand kept still on G seventh. */
const RARE_TRIADS = [
  "C3+E3+G3/5+3+1:4 C3+G3/5+1:4 | C3+E3+G3/5+3+1:4 D3+F3+G3/4+2+1:4 | C3+E3+G3/5+3+1:4 C3+G3/5+1:4 | D3+F3+G3/4+2+1:8",
  "C3+E3+G3/5+3+1:8 | C3+F3+A3/5+2+1:4 D3+F3+G3/4+2+1:4 | D3+F3+G3/4+2+1:8 | C3+E3+G3/5+3+1:8",
].join(" | ");

/** The second verse's left hand in Rare, in quarters: a root and a fifth in turns, one per beat. */
const RARE_TURNS = [
  "C3/5:2 G3/1:2 C3/5:2 G3/1:2 | C3/5:2 G3/1:2 D3/4:2 G3/1:2 | C3/5:2 G3/1:2 C3/5:2 G3/1:2 | D3/4:2 G3/1:2 D3/4:2 G3/1:2",
  "C3/5:2 G3/1:2 C3/5:2 G3/1:2 | F3/2:2 C3/5:2 D3/4:2 G3/1:2 | D3/4:2 G3/1:2 D3/4:2 F3/2:2 | C3+E3+G3/5+3+1:8",
].join(" | ");

/** One beat of Alberti bass in eighths: low, high, middle, high. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  F: "A2/5:1 F3/1:1 C3/3:1 F3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1",
  H: "B2/5:1 F3/1:1 D3/3:1 F3/1:1",
};

/** One beat of broken chord in eighths: the bass, then up the chord and back. */
const BROKEN: Record<string, string> = {
  C: "C3/5:1 E3/3:1 G3/1:1 E3/3:1",
  F: "A2/5:1 C3/3:1 F3/1:1 C3/3:1",
  G: "B2/5:1 D3/3:1 G3/1:1 D3/3:1",
  H: "B2/5:1 D3/3:1 F3/1:1 D3/3:1",
};

/** The second verse in Epic's right hand, an octave up, in eighths: thirds and sixths under the long notes. */
const EPIC_SECOND = [
  "E5+G5/2+4:6 F5+A5/3+5:2 C5+G5/1+5:4 A4+F5/1+4:4 | C5+E5/2+4:8 B4+D5/1+3:8",
  "E4+C5/1+2:4 D5/3:2 E5/4:2 A4+F5/1+5:4 G4+E5/1+4:4 | B4+D5/1+3:12 r:4",
  "C5+E5/1+3:4 E5+G5/2+4:4 C5+A5/1+5:4 E5+G5/2+4:4 | A5+C6/4+5:8 G5+B5/2+5:4 F5+A5/1+5:4",
  "B4+G5/1+4:4 F5/3:2 E5/2:2 B4+F5/1+3:4 B4+G5/1+4:4 | G4+C5+E5/1+2+4:16",
].join(" | ");

/** One beat of stride in eighths, its last eighth a rest for the jump: the root in octaves, or the chord. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:3 r:1",
  c: "C3+E3+G3/5+3+1:3 r:1",
  F: "F1+F2/5+1:3 r:1",
  f: "A2+C3+F3/5+3+1:3 r:1",
  G: "G1+G2/5+1:3 r:1",
  g: "B2+D3+G3/5+3+1:3 r:1",
  H: "G1+G2/5+1:3 r:1",
  h: "B2+F3+G3/5+2+1:3 r:1",
};

/** Two beats of arpeggio in eighths, up two octaves with the third finger crossing over the thumb. */
const ARPEGGIO: Record<string, string> = {
  C: "C2/5:1 G2/3:1 C3/2:1 E3/1:1 G3/3:1 C4/2:1 E4/1:1 r:1",
  F: "F2/5:1 C3/3:1 F3/2:1 A3/1:1 C4/3:1 F4/2:1 A4/1:1 r:1",
  G: "G1/5:1 D2/3:1 G2/2:1 B2/1:1 D3/3:1 G3/2:1 B3/1:1 r:1",
  H: "G1/5:1 D2/3:1 G2/2:1 B2/1:1 D3/3:1 F3/2:1 B3/1:1 r:1",
};

/** The first verse in Legendary's right hand, an octave up, in eighths: the tune on top of its chords. */
const LEGENDARY_CHORDS = [
  "C5+E5+G5/1+2+4:6 A5/5:2 C5+G5/1+5:4 A4+C5+F5/1+2+5:4 | G4+C5+E5/1+2+5:8 G4+B4+D5/1+2+4:8",
  "E4+G4+C5/1+2+3:4 D5/4:2 E5/5:2 A4+C5+F5/1+2+5:4 G4+C5+E5/1+2+5:4 | G4+B4+D5/1+2+4:12 r:4",
  "G4+C5+E5/1+2+4:4 C5+E5+G5/1+2+4:4 C5+E5+A5/1+2+5:4 C5+E5+G5/1+2+4:4",
  "C5+F5+A5+C6/1+2+4+5:8 D5+F5+B5/1+2+5:4 D5+F5+A5/1+2+5:4",
  "B4+D5+G5/1+2+5:4 F5/4:2 E5/3:2 B4+D5+F5/1+2+4:4 B4+D5+G5/1+2+5:4 | G4+C5+E5/1+2+5:12 r:4",
].join(" | ");

/** The second verse in Legendary's right hand, two octaves up, in eighths: the tune in octaves. */
const LEGENDARY_OCTAVES = [
  "G5+G6/1+5:6 A5+A6/1+5:2 G5+G6/1+5:4 F5+F6/1+5:4 | E5+E6/1+5:8 D5+D6/1+5:8",
  "C5+C6/1+5:4 D5+D6/1+5:2 E5+E6/1+5:2 F5+F6/1+5:4 E5+E6/1+5:4 | D5+D6/1+5:12 r:4",
  "E5+E6/1+5:4 G5+G6/1+5:4 A5+A6/1+5:4 G5+G6/1+5:3 r:1 | C6+C7/1+5:8 B5+B6/1+5:4 A5+A6/1+5:4",
  "G5+G6/1+5:4 F5+F6/1+5:2 E5+E6/1+5:2 F5+F6/1+5:4 G5+G6/1+5:3 r:1 | E5+G5+C6+E6/1+2+3+5:16",
].join(" | ");

/** The pedal of one verse in eighths: changed with each chord, held through a bar of one chord. */
const VERSE_PEDAL = "P:8 P:8 | P:8 P:8 | P:16 | P:16 | P:16 | P:8 P:8 | P:16 | P:16";

export const alleJahreWieder: OurSong = {
  slug: "alle-jahre-wieder",
  title: "Alle Jahre wieder",
  source: {
    composer: "Friedrich Silcher",
    died: 1860,
    published: 1842,
    edition: "Friedrich Silcher, Zwölf Kinderlieder aus dem Anhange des Speckter'schen Fabelbuches (1842)",
  },
  about:
    "Alle Jahre wieder means Every year again in German. " +
    "It is one of the best-known German Christmas songs. " +
    "Wilhelm Hey wrote its three verses in 1837, and they tell of the Christ Child, who comes down to earth every year. " +
    "Friedrich Silcher wrote the tune and published it in 1842, in a set of twelve songs for children.",
  funFact:
    "The same words are also sung to a tune Christian Heinrich Rinck wrote in 1827. " +
    "Today that tune mostly carries another poem, Abend wird es wieder.",
  mythic: null,
  collection: "christmas",
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 144,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: [VERSE, VERSE].join(" | "),
      left: [COMMON_LEFT, COMMON_LEFT].join(" | "),
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, where the tune climbs to the high C.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds one shape, and changes it at most once a bar.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "The first G is long and the A is short, like a little lift before the G comes back." },
        { fromBar: 2, toBar: 3, kind: "fingering", text: "After the long D, lift the hand and put the thumb on middle C." },
        { fromBar: 6, toBar: 6, kind: "trick", text: "While the high C rings, slide the little finger down to B." },
      ],
      tricky: {
        3: "The thumb takes middle C, then fingers 2, 3 and 4 walk up to F and step back to E.",
        6: "The little finger plays the high C, then slides down to B. Fingers 4 and 3 take A and G.",
        14: "The same slide as bar 6: hold the high C, then move the little finger down to B.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 160,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: [VERSE, VERSE].join(" | "),
      left: [RARE_TRIADS, RARE_TURNS].join(" | "),
      skills: ["triads", "position-change"],
      practice: [
        { text: "Play the left hand alone, and press the notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the second verse's bass alone: low note, high note, one on each beat.", hands: "left", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 6, toBar: 6, kind: "fingering", text: "For the F chord, the thumb reaches up from G to A, and comes back for the next chord." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "In the second verse, play the low notes a little louder than the high ones." },
        { fromBar: 3, toBar: 3, kind: "rhythm", text: "D and E are quick, and F lands on the middle of the bar with the chord." },
      ],
      tricky: {
        3: "The right thumb moves down to middle C, while the left hand lets go of E for the second chord.",
        6: "Both hands move here. The left thumb reaches up to A, and the right little finger slides down to B.",
        14: "Over the low F and C, the right little finger holds the high C, then slides down to B.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 168,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [inEighths(VERSE), EPIC_SECOND].join(" | "),
      left: [patternBars(ALBERTI, CHORDS), patternBars(BROKEN, CHORDS.replace(/ CCCC$/, "")), "C3+E3+G3/5+3+1:16"].join(" | "),
      pedal: [VERSE_PEDAL, VERSE_PEDAL].join(" | "),
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
        { fromBar: 1, toBar: 2, kind: "sound", text: "Change the pedal in the middle of the bar, where the chord changes." },
      ],
      tricky: {
        6: "The Alberti bass changes from F to G seventh in the middle of the bar. Change the pedal with it.",
        9: "The right hand jumps an octave up and plays pairs. Find the first pair before the bar starts.",
        14: "A and C, then G and B, then F and A: the pairs step down while the little finger leads.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 176,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [LEGENDARY_CHORDS, LEGENDARY_OCTAVES].join(" | "),
      left: [patternBars(STRIDE, "CcFf CcGg CcCc GgGg CcCc FfHh HhHh CcCc"), patternBars(ARPEGGIO, HALF_CHORDS.replace(/ CC$/, "")), "C2+G2+C3/5+2+1:16"].join(" | "),
      pedal: [VERSE_PEDAL.replace(/P:16/g, "P:8 P:8"), VERSE_PEDAL.replace(/P:16/g, "P:8 P:8").replace(/P:8 P:8$/, "P:16")].join(" | "),
      skills: ["stride", "melody-in-chords", "arpeggios"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's chords alone, and let the little finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the arpeggios of the second verse in the left hand alone.", hands: "left", speed: 0.5, loop: [9, 12], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "In stride, look at the octave and let the hand find the chord by feel." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Up high, the octaves should ring like bells. Keep the wrist loose." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "In each arpeggio, the third finger crosses over the thumb on the way up." },
      ],
      tricky: {
        10: "After the C arpeggio, the left hand drops to the low G in the short rest.",
        12: "The right hand holds its octave, so watch the left hand through the two G arpeggios.",
        14: "The octaves leap up to the high C, while the left hand runs up F and then G seventh.",
      },
    },
  },
};

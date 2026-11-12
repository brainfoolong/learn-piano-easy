/**
 * *Kling, Glöckchen, klingelingeling*: the German Christmas song, in four versions of ours.
 *
 * The tune is the whole verse as it is sung today: the bell phrase, the plea to be let in from the cold,
 * the turn towards G, and the bell phrase again. It is in C major, moved down a fourth from F.
 *
 * The tune is in 2/4, and every length here is four times as long, in 2/1. A whole note is one beat,
 * so the sixteenths of the bell figure are quarters, and Common plays them at their place. The hook is
 * the first four bars, the opening "Kling, Glöckchen" phrase.
 *
 * Common plays the tune over held fifths. Rare plays it over triads, some bars a bass note and then its
 * chord. Epic puts an Alberti bass and the pedal under the first verse, and plays the second an octave up
 * with thirds and fourths under the long notes. Legendary sets the tune in chords over a stride bass,
 * then plays it in octaves over arpeggios. Wherever a hand jumps further than its span, a short rest
 * before the jump gives it time.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 2/1, in quarters: the sixteen bars of the verse. */
const tune = [
  "G4:4 E4:2 F4:2 | G4:1 A4:1 G4:1 A4:1 G4:4 | F4:4 D4:2 G4:2 | E4:8",
  "D4:2 D4:2 E4:2 C4:2 | E4:4 D4:4 | F4:2 F4:2 G4:2 D4:2 | F4:4 E4:4",
  "D4:2 D4:2 E4:2 F#4:2 | G4:4 D4:4 | E4:2 A4:2 G4:2 F#4:2 | A4:4 G4:4",
  "G4:4 E4:2 F4:2 | G4:1 A4:1 G4:1 A4:1 G4:4 | F4:4 D4:2 G4:2 | E4:8",
].join(" | ");

/** The bell phrase in the right hand, in quarters, the thumb on D: bars 1 to 3, which come back as 13 to 15. */
const BELLS = "G4/4:4 E4/2:2 F4/3:2 | G4/4:1 A4/5:1 G4/4:1 A4/5:1 G4/4:4 | F4/3:4 D4/1:2 G4/4:2";

/** The plea in the right hand, in quarters, the thumb on C: bars 5 to 8. */
const PLEA = "D4/2:2 D4/2:2 E4/3:2 C4/1:2 | E4/3:4 D4/2:4 | F4/4:2 F4/4:2 G4/5:2 D4/2:2 | F4/4:4 E4/3:4";

/** The turn towards G in the right hand, in quarters, the thumb on D: bars 9 to 12. */
const TURN = "D4/1:2 D4/1:2 E4/2:2 F#4/3:2 | G4/4:4 D4/1:4 | E4/2:2 A4/5:2 G4/4:2 F#4/3:2 | A4/5:4 G4/4:4";

/** The whole verse in the right hand, in quarters. */
const VERSE = [BELLS, "E4/2:8", PLEA, TURN, BELLS, "E4/2:8"].join(" | ");

/** `text` an octave higher. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** Bars of `patterns` from `halves`, such as `"CC Gg"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** The chords of the verse, one letter per half bar: C, G seventh, D seventh and G. */
const CHORDS = "CC CC gg CC CC Cg gg gC DD GG DD DG CC CC gg CC";

/** Half a bar of Rare's left hand in quarters: a triad, or the bass note C or the chord above it. */
const TRIAD: Record<string, string> = {
  C: "C3+E3+G3/5+3+1:4",
  c: "C3/5:4",
  e: "E3+G3/3+1:4",
  g: "D3+F3+G3/4+2+1:4",
  D: "A2+C3+D3/4+2+1:4",
  G: "G2+B2+D3/5+3+1:4",
};

/** Half a bar of Alberti bass in quarters, on C, G seventh over B, D seventh and G. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  g: "B2/5:1 G3/1:1 F3/2:1 G3/1:1",
  D: "D3/5:1 A3/1:1 F#3/3:1 A3/1:1",
  G: "G2/5:1 D3/1:1 B2/3:1 D3/1:1",
};

/** Half a bar of Epic's second verse in quarters: the bass note, then the chord above it and a rest for the jump. */
const BASS_CHORD: Record<string, string> = {
  C: "C3/5:2 E3+G3/3+1:1 r:1",
  g: "B2/5:2 F3+G3/2+1:1 r:1",
  D: "D3/5:2 F#3+A3/3+1:1 r:1",
  G: "G2/5:2 B2+D3/3+1:1 r:1",
};

/** Half a bar of stride in eighths: the root in octaves, then the chord, each with a rest for the jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:3 r:1 C3+E3+G3/5+3+1:3 r:1",
  g: "G1+G2/5+1:3 r:1 B2+F3+G3/5+2+1:3 r:1",
  D: "D2+D3/5+1:3 r:1 C3+F#3+A3/5+2+1:3 r:1",
  G: "G1+G2/5+1:3 r:1 B2+D3+G3/5+3+1:3 r:1",
};

/** Half a bar of arpeggio in eighths: up from the root and back down, with a rest before the next jump. */
const ARPEGGIO: Record<string, string> = {
  C: "C2/5:1 G2/3:1 C3/2:1 E3/1:1 C3/2:1 G2/3:1 E2/4:1 r:1",
  g: "G1/5:1 D2/3:1 G2/2:1 B2/1:1 G2/2:1 F2/3:1 D2/4:1 r:1",
  D: "D2/5:1 A2/3:1 C3/2:1 F#3/1:1 C3/2:1 A2/3:1 F#2/4:1 r:1",
  G: "G1/5:1 D2/3:1 G2/2:1 B2/1:1 G2/2:1 D2/3:1 B1/4:1 r:1",
};

/** The bell phrase an octave up with thirds under the long notes, in quarters: bars 17 to 19 and 29 to 31 of Epic. */
const BELLS_THIRDS =
  "E5+G5/2+4:4 E5/2:2 F5/3:2 | G5/4:1 A5/5:1 G5/4:1 A5/5:1 E5+G5/2+4:4 | D5+F5/1+3:4 D5/1:2 D5+G5/1+4:2";

/** The bell phrase in chords an octave up, in quarters: bars 1 to 3 and 13 to 15 of Legendary. */
const BELLS_CHORDS =
  "C5+E5+G5/1+2+4:4 E5/2:2 F5/3:2 | G5/4:1 A5/5:1 G5/4:1 A5/5:1 C5+E5+G5/1+2+4:4 | B4+D5+F5/1+2+3:4 D5/2:2 G5/4:2";

/** `text` with every note doubled an octave up, played by the thumb and the little finger. */
function inOctaves(text: string): string {
  return text.replace(/([A-G][#b]?)(\d):/g, (_, name: string, octave: string) => `${name}${octave}+${name}${Number(octave) + 1}/1+5:`);
}

/** The bell phrase in octaves, in eighths, with a rest before each wide move: bars 17 to 19 and 29 to 31 of Legendary. */
const BELLS_OCTAVES = inOctaves("G4:8 E4:4 F4:4 | G4:2 A4:2 G4:2 A4:2 G4:8 | F4:8 D4:3 r:1 G4:3 r:1");

/** The middle of the verse in octaves, in eighths, with a rest before each wide move: bars 20 to 28 of Legendary. */
const MIDDLE_OCTAVES = inOctaves(
  [
    "E4:16 | D4:4 D4:4 E4:3 r:1 C4:3 r:1 | E4:8 D4:7 r:1 | F4:4 F4:4 G4:3 r:1 D4:3 r:1 | F4:8 E4:8",
    "D4:4 D4:4 E4:4 F#4:4 | G4:7 r:1 D4:8 | E4:3 r:1 A4:4 G4:4 F#4:3 r:1 | A4:8 G4:8",
  ].join(" | "),
);

export const klingGloeckchen: OurSong = {
  slug: "kling-gloeckchen",
  title: "Kling, Glöckchen, klingelingeling",
  source: {
    composer: "Traditional",
    died: null,
    published: 1862,
    edition: "Heinrich Oberhoffer, Die kleinen Sänger, Luxemburg (1862), the tune with few changes as Christliche Ankunft",
  },
  about:
    "Kling, Glöckchen, klingelingeling means Ring, little bell, ring-a-ling-a-ling. " +
    "Karl Enslin wrote the words, and they were first printed in 1854. " +
    "In them the Christ Child begs the children to open the door, because the winter is so cold. " +
    "The first edition had a tune by Wilhelm Speyer, but nobody knows who wrote the tune sung today.",
  funFact:
    "Some books name Benedikt Widmann as the composer, but that is a mix-up. He edited the collection that first printed the words.",
  mythic: null,
  collection: "christmas",
  aka: ["Kling Glöckchen"],
  tune: { text: tune, numerator: 2, denominator: 1, steps: 4, key: C_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 150,
      numerator: 2,
      denominator: 1,
      steps: 4,
      right: VERSE,
      left: [
        "C3+G3/5+1:8 | C3+G3/5+1:8 | D3+G3/4+1:8 | C3+G3/5+1:8",
        "D3+G3/4+1:8 | C3+G3/5+1:4 D3+G3/4+1:4 | D3+G3/4+1:8 | D3+G3/4+1:4 C3+G3/5+1:4",
        "D3/4:8 | D3+G3/4+1:8 | C3+G3/5+1:4 D3/4:4 | D3/4:4 D3+G3/4+1:4",
        "C3+G3/5+1:8 | C3+G3/5+1:8 | D3+G3/4+1:8 | C3+G3/5+1:8",
      ].join(" | "),
      skills: ["five-finger-position", "open-fifths", "position-change"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 12 with the right hand alone, where the hand moves twice.", hands: "right", speed: 0.6, loop: [5, 12], wait: true },
        { text: "Now the left hand alone. It holds one shape for a bar or half a bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 2, kind: "sound", text: "G, A, G, A: this is the little bell ringing. Keep it light and even." },
        { fromBar: 4, toBar: 5, kind: "trick", text: "While you hold the long E, slide the thumb down from D to middle C." },
        { fromBar: 8, toBar: 9, kind: "trick", text: "During the last E, move the thumb back up to D for the black key F sharp." },
      ],
      tricky: {
        2: "Fingers 4 and 5 rock between G and A, like a bell swinging.",
        5: "Your thumb now sits on middle C, so finger 2 plays the two Ds.",
        14: "The bell rings again. Fingers 4 and 5 rock between G and A, as in bar 2.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 200,
      numerator: 2,
      denominator: 1,
      steps: 4,
      right: VERSE,
      left: [
        halfBars(TRIAD, "ce ce gg CC ce Cg gg"),
        "D3+F3+G3/4+2+1:4 C3+E3+G3/5+3+1:3 r:1",
        halfBars(TRIAD, "DD GG DD"),
        "A2+C3+D3/4+2+1:4 G2+B2+D3/5+3+1:3 r:1",
        halfBars(TRIAD, "ce ce gg CC"),
      ].join(" | "),
      skills: ["triads", "position-change"],
      practice: [
        { text: "Play the left hand alone, and press the notes of each chord together.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Play bars 9 to 12 in the left hand alone, where it moves down to G.", hands: "left", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "sound", text: "Play the low C a little louder than the chord after it." },
        { fromBar: 8, toBar: 9, kind: "trick", text: "Both hands move here. Use the long last notes of bar 8 to get there." },
        { fromBar: 12, toBar: 13, kind: "trick", text: "The left hand slides back up to C as the bell phrase returns." },
      ],
      tricky: {
        5: "The right thumb moves down to middle C, while the left hand plays C and then its chord.",
        9: "Both hands move: the right thumb goes up to D, and the left hand goes down to A, C and D.",
        13: "The left hand slides back up to C, and the right hand starts the bell phrase again.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 240,
      numerator: 2,
      denominator: 1,
      steps: 4,
      right: [
        BELLS,
        "E4/2:8",
        PLEA,
        TURN,
        BELLS,
        "E4/2:7 r:1",
        BELLS_THIRDS,
        "C5+E5/1+3:8",
        "D5/2:2 D5/2:2 E5/3:2 C5/1:2 | C5+E5/1+3:4 D5/2:4 | D5+F5/2+4:2 F5/4:2 G5/5:2 D5/2:2 | D5+F5/2+4:4 C5+E5/1+3:4",
        "D5/1:2 D5/1:2 E5/2:2 F#5/3:2 | D5+G5/1+4:4 D5/1:4 | E5/2:2 A5/5:2 G5/4:2 F#5/3:2 | F#5+A5/3+5:4 D5+G5/1+4:4",
        BELLS_THIRDS,
        "C5+E5/1+3:8",
      ].join(" | "),
      left: [
        halfBars(ALBERTI, CHORDS),
        halfBars(BASS_CHORD, "CC CC gg CC CC Cg gg gC DD GG DD DG CC CC gg"),
        "C2+G2+C3/5+2+1:8",
      ].join(" | "),
      pedal: [...Array(31).fill("P:4 P:4"), "P:8"].join(" | "),
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [17, 20], wait: true },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.5, loop: [1, 16], wait: true },
        { text: "Play the whole song with both hands at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the Alberti bass soft, so the bell tune rings above it." },
        { fromBar: 1, toBar: 32, kind: "sound", text: "Change the pedal with every chord, twice in most bars." },
        { fromBar: 16, toBar: 17, kind: "trick", text: "Lift the hand off the last E, and land an octave up with fingers 2 and 4." },
      ],
      tricky: {
        17: "The right hand lands an octave up on a third, and the left hand starts its bass and chords.",
        27: "Finger 2 plays E, and the little finger stretches up to A. Keep the thumb near D.",
        29: "The bell phrase returns in thirds. Fingers 2 and 4 take E and G together.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 216,
      numerator: 2,
      denominator: 1,
      steps: 8,
      right: [
        inEighths(
          [
            BELLS_CHORDS,
            "C5+E5/1+3:8",
            "D5/2:2 D5/2:2 E5/3:2 C5/1:2 | C5+E5/1+3:4 B4+D5/1+2:4 | D5+F5/2+4:2 F5/4:2 G5/5:2 D5/2:2 | B4+D5+F5/1+2+4:4 C5+E5/1+3:4",
            "D5/1:2 D5/1:2 E5/2:2 F#5/3:2 | D5+G5/1+4:4 D5/1:4 | E5/2:2 A5/5:2 G5/4:2 F#5/3:2 | D5+F#5+A5/1+3+5:4 D5+G5/1+4:4",
            BELLS_CHORDS,
            "C5+E5/1+3:7 r:1",
          ].join(" | "),
        ),
        BELLS_OCTAVES,
        MIDDLE_OCTAVES,
        BELLS_OCTAVES,
        "E4+G4+C5+E5/1+2+3+5:16",
      ].join(" | "),
      left: [
        halfBars(STRIDE, CHORDS),
        halfBars(ARPEGGIO, "CC CC gg CC CC Cg gg gC DD GG DD DG CC CC gg"),
        "C2+G2+C3/5+2+1:16",
      ].join(" | "),
      pedal: [...Array(31).fill("P:8 P:8"), "P:16"].join(" | "),
      skills: ["stride", "melody-in-chords", "arpeggios"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the arpeggios of the second verse in the left hand alone.", hands: "left", speed: 0.5, loop: [17, 20], wait: false },
        { text: "Join the hands on the whole song at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and make the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "trick", text: "In stride, look at the octave and let the hand find the chord by feel." },
        { fromBar: 17, toBar: 32, kind: "sound", text: "In octaves, the bell figure should ring like real bells. Keep the wrist loose." },
        { fromBar: 17, toBar: 32, kind: "fingering", text: "Thumb and little finger play every octave. Let the hand stay open and still." },
      ],
      tricky: {
        3: "Grab B, D and F, then fingers 2 and 4 play D and G while the left hand jumps.",
        7: "Fingers 2 and 4 play the third, then finger 4 repeats F and the little finger takes G.",
        15: "The same chord as bar 3. Watch the left hand's jump down to the low G octave.",
      },
    },
  },
};

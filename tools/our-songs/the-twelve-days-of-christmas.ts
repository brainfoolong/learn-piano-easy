/**
 * *The Twelve Days of Christmas*: Frederic Austin's tune of 1909, in four versions of ours.
 *
 * The tune is the fifth verse alone. It holds the opening, the *Five Gold Rings* phrase and the countdown
 * to the partridge. The score is in F major, and the tune here is a fourth lower, in C major, at the
 * score's own octave. Every length is twice the score's, so its eighths are quarters and Common plays them.
 * The hook is the pickup bar and the next, the opening phrase "On the fifth day of Christmas".
 *
 * The score mixes bars of 4/4 with two bars of 3/4, and the notation takes one time signature. The tune
 * is in 6/2, so each bar holds six of the score's beats. It is the shortest bar that keeps every note of
 * the score whole. Bars of 2/4 or 4/4 would cut the long G of *Five Gold Rings* or the last C in two.
 *
 * Each version writes the score's bars of 4/4 as bars of 4/2. The two bars of 3/4 then move the bar line
 * by half a bar, so the last C ends one beat early.
 *
 * Common plays the verse once over held fifths and bass notes. It leaves out the F sharp and the low G
 * of the partridge, so the right hand creeps along and changes place once. Rare plays the verse twice,
 * over block chords and then a bass and chord in turns. Epic plays it an octave up over an Alberti bass,
 * then at its own octave over broken chords, with the pedal. Legendary puts a stride bass under the
 * first verse and arpeggios under the second, and ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, a fourth below the score's F major. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The fifth verse in 6/2, in quarters: the pickup bar, then six bars ending on the long C. */
const tune = [
  "r:10 G3:1 G3:1",
  "G3:2 C4:1 C4:1 C4:2 B3:1 C4:1 D4:1 E4:1 F4:1 D4:1",
  "E4:4 G4:4 A4:1 F#4:3",
  "G4:8 G4:1 F4:1 E4:1 D4:1",
  "C4:2 F4:2 A3:2 C4:2 D4:1 C4:1 B3:1 A3:1",
  "G3:2 E4:1 F4:1 G4:2 A4:1 F4:1 E4:1 C4:1 D4:2",
  "C4:6 r:6",
].join(" | ");

/** The pickup bar in the right hand, in quarters of 4/2: "On the", with the thumb on the low G. */
const PICKUP = "r:6 G3/1:1 G3/1:1";

/**
 * The verse in the right hand, in quarters of 4/2, without its pickup. The hand creeps up and down with
 * its fingers in order, and changes place only from the low G to the E after it.
 */
const VERSE = [
  "G3/1:2 C4/2:1 C4/2:1 C4/2:2 B3/1:1 C4/2:1",
  "D4/3:1 E4/4:1 F4/5:1 D4/1:1 E4/2:4",
  "G4/3:4 A4/5:1 F#4/4:3",
  "G4/5:8",
  "G4/5:1 F4/4:1 E4/3:1 D4/2:1 C4/1:2 F4/5:2",
  "A3/2:2 C4/4:2 D4/5:1 C4/4:1 B3/3:1 A3/2:1",
  "G3/1:2 E4/2:1 F4/3:1 G4/4:2 A4/5:1 F4/3:1",
  "E4/2:1 C4/1:1 D4/2:2 C4/1:4",
].join(" | ");

/**
 * Common's right hand, in quarters of 4/2. It leaves out the F sharp and the low G of the partridge, and
 * rests before the jumps down to A and up to E. Finger 5 takes over the G after the long one.
 */
const COMMON_RIGHT = [
  PICKUP,
  "G3/1:2 C4/2:1 C4/2:1 C4/2:2 B3/1:1 C4/2:1",
  "D4/3:1 E4/4:1 F4/5:1 D4/1:1 E4/2:4",
  "G4/3:4 A4/5:4",
  "G4/4:8",
  "G4/5:1 F4/4:1 E4/3:1 D4/2:1 C4/1:2 F4/5:1 r:1",
  "A3/1:2 C4/3:2 D4/4:1 C4/3:1 B3/2:1 A3/1:1",
  "r:2 E4/2:1 F4/3:1 G4/4:2 A4/5:1 F4/3:1",
  "E4/2:1 C4/1:1 D4/2:2 C4/1:4",
].join(" | ");

/** `text` with every length multiplied by `times`, so a line in quarters reads in eighths or sixteenths. */
function scaled(text: string, times: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${times * Number(units)}`);
}

/** `text` an octave higher. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** Bars of `patterns` from `halves`, such as `"CG GC"`: one letter per pattern, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/**
 * The chords of one verse, one letter per half bar of 4/2, the pickup bar first: C, G seventh, G, D, F,
 * and `X` for C then F in quarters. `r` is a rest.
 */
const CHORDS = "rr CS SC CD GG GX FG CF GC";

/** Half a bar of a held fifth or bass note in quarters, the hand kept on C to G. `c` leaves the G to the right hand. */
const HELD: Record<string, string> = {
  r: "r:4",
  C: "C3+G3/5+1:4",
  c: "C3/5:4",
  G: "D3+G3/4+1:4",
  W: "D3+G3/4+1:8",
  F: "F3/2:4",
  D: "D3/4:4",
};

/** Half a bar of a block chord in eighths, the hand kept on C to G. `W` is a whole bar of G seventh. */
const BLOCK: Record<string, string> = {
  r: "r:8",
  C: "C3+E3+G3/5+3+1:8",
  c: "C3+E3/5+3:8",
  S: "D3+F3+G3/4+2+1:8",
  W: "D3+F3+G3/4+2+1:16",
  G: "D3+G3/4+1:8",
  O: "C3+G3/5+1:8",
  F: "C3+F3/5+2:8",
  D: "D3/4:8",
  T: "D3+F3/4+2:8",
};

/** Half a bar in eighths: the bass on the first beat, then the rest of its chord on the second. */
const TURNS: Record<string, string> = {
  C: "C3/5:4 E3+G3/3+1:4",
  S: "G3/1:4 D3+F3/4+2:4",
  G: "G3/1:4 D3/4:4",
  X: "C3/5:4 F3/2:4",
  F: "F3/2:4 C3/5:4",
  D: "D3/4:8",
};

/** Half a bar of Alberti bass in eighths: low, high, middle, high, twice. `X` turns from C to F halfway. */
const ALBERTI: Record<string, string> = {
  r: "r:8",
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  S: "D3/5:1 G3/1:1 F3/2:1 G3/1:1 D3/5:1 G3/1:1 F3/2:1 G3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1 B2/5:1 G3/1:1 D3/3:1 G3/1:1",
  D: "D3/5:1 A3/1:1 F#3/3:1 A3/1:1 D3/5:1 A3/1:1 F#3/3:1 A3/1:1",
  F: "C3/5:1 A3/1:1 F3/2:1 A3/1:1 C3/5:1 A3/1:1 F3/2:1 A3/1:1",
  X: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 C3/5:1 A3/1:1 F3/2:1 A3/1:1",
};

/** Half a bar of broken chord in quarters, written in eighths: root, fifth, octave, fifth. `g` leaves the top G to the right hand. */
const BROKEN: Record<string, string> = {
  C: "C2/5:2 G2/2:2 C3/1:2 G2/2:1 r:1",
  G: "G2/5:2 D3/2:2 G3/1:2 D3/2:1 r:1",
  g: "G2/5:2 D3/2:2 B2/3:2 D3/2:1 r:1",
  F: "F2/5:2 C3/2:2 F3/1:2 C3/2:1 r:1",
  D: "D2/5:2 A2/2:2 D3/1:2 A2/2:1 r:1",
};

/** Half a bar of stride in sixteenths: the root in octaves, then the chord, each with a rest for the jump. */
const STRIDE: Record<string, string> = {
  r: "r:16",
  C: "C2+C3/5+1:6 r:2 G2+C3+E3/5+2+1:6 r:2",
  S: "G1+G2/5+1:6 r:2 G2+B2+D3/5+3+1:6 r:2",
  G: "G1+G2/5+1:6 r:2 G2+B2+D3/5+3+1:6 r:2",
  X: "C2+C3/5+1:6 r:2 F2+A2+C3/5+3+1:6 r:2",
  F: "F1+F2/5+1:6 r:2 F2+A2+C3/5+3+1:6 r:2",
  D: "D2+D3/5+1:6 r:2 D3+F#3+A3/5+3+1:6 r:2",
};

/** One beat of arpeggio in sixteenths, up from the root, then an eighth's rest for the jump back down. */
const ARPEGGIO_BEAT: Record<string, string> = {
  C: "C2/5:1 G2/3:1 C3/2:1 E3/1:1 G3/3:1 C4/2:1 r:2",
  G: "G1/5:1 D2/3:1 G2/2:1 B2/1:1 D3/3:1 G3/2:1 r:2",
  F: "F1/5:1 C2/3:1 F2/2:1 A2/1:1 C3/3:1 F3/2:1 r:2",
  D: "D2/5:1 A2/3:1 D3/2:1 F#3/1:1 A3/3:1 D4/2:1 r:2",
};

/** Half a bar of arpeggios in sixteenths, two beats of one chord, and `X` a beat of C then a beat of F. */
const ARPEGGIO: Record<string, string> = {
  C: `${ARPEGGIO_BEAT.C} ${ARPEGGIO_BEAT.C}`,
  S: `${ARPEGGIO_BEAT.G} ${ARPEGGIO_BEAT.G}`,
  G: `${ARPEGGIO_BEAT.G} ${ARPEGGIO_BEAT.G}`,
  X: `${ARPEGGIO_BEAT.C} ${ARPEGGIO_BEAT.F}`,
  F: `${ARPEGGIO_BEAT.F} ${ARPEGGIO_BEAT.F}`,
  D: `${ARPEGGIO_BEAT.D} ${ARPEGGIO_BEAT.D}`,
};

/** Legendary's second verse in the right hand, in quarters, an octave up: the long G in octaves, and a four-note chord at the end. */
const LEGENDARY_VERSE = octaveUp(VERSE)
  .split(" | ")
  .map((bar, at) => (at === 3 ? "G4+G5/1+5:8" : at === 7 ? "E5/2:1 C5/1:1 D5/2:2 C5+E5+G5+C6/1+2+3+5:4" : bar))
  .join(" | ");

export const theTwelveDaysOfChristmas: OurSong = {
  slug: "the-twelve-days-of-christmas",
  title: "The Twelve Days of Christmas",
  source: {
    composer: "Frederic Austin",
    died: 1952,
    published: 1909,
    edition: "Frederic Austin, The Twelve Days of Christmas (Novello, 1909), its melody as Wikipedia engraves it",
  },
  about:
    "The Twelve Days of Christmas is an English carol and nursery rhyme. " +
    "Its words were first printed in London in 1780, in a children's book called Mirth Without Mischief. " +
    "The tune sung today comes from the English singer Frederic Austin, and his arrangement was published in 1909. " +
    "Austin wrote that the song was current in his family when he was a child.",
  funFact:
    "People once played the song as a memory game. Each player repeated the gifts, and every slip cost a forfeit, such as a kiss or a sweet.",
  mythic: null,
  collection: "christmas",
  tune: { text: tune, numerator: 6, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 144,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: COMMON_RIGHT,
      left: halfBars(HELD, "rr cG GC CD W GC FG CF GC"),
      skills: ["held-bass", "open-fifths"],
      practice: [
        { text: "Play the first three bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 3], wait: true },
        { text: "Play bars 4 to 7 with the right hand alone, from the gold rings down to the low A.", hands: "right", speed: 0.6, loop: [4, 7], wait: true },
        { text: "Now the left hand alone. It changes its shape only at the start and the middle of each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "The thumb plays the three low Gs, and finger 2 takes each C of bar 2." },
        { fromBar: 4, toBar: 5, kind: "rhythm", text: "Hold the long G for the whole bar while you count to eight. That is the gold ring." },
        { fromBar: 6, toBar: 7, kind: "trick", text: "After the short rest, the thumb lands on the low A. Finger 5 has let go of F a moment before." },
      ],
      tricky: {
        3: "Fingers 3, 4 and 5 climb to F. Then the thumb slides up to D, and finger 2 holds the long E.",
        4: "Finger 3 holds G, then finger 5 reaches up to A. The left hand moves from its fifth to a lone D.",
        6: "Play the G again with finger 5, then walk down to C with the thumb. Lift the hand before the low A.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 160,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: scaled([PICKUP, VERSE, PICKUP, VERSE].join(" | "), 2),
      left: [halfBars(BLOCK, "rr cS SC CD W GO FS cF GC CT"), `${halfBars(TURNS, "CS SC CD SS GX FS CF G")} ${BLOCK.C}`].join(" | "),
      skills: ["triads"],
      practice: [
        { text: "Play the left hand alone on the first verse, and press the notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play bars 3 to 5 with the right hand alone, where the gold rings climb to A and F sharp.", hands: "right", speed: 0.6, loop: [3, 5], wait: true },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 4, toBar: 5, kind: "fingering", text: "Finger 4 plays the F sharp, a black key. Then finger 5 lands on the long G." },
        { fromBar: 8, toBar: 8, kind: "trick", text: "After the low G, the hand moves up so finger 2 plays E. The G is long, so there is time." },
        { fromBar: 11, toBar: 18, kind: "sound", text: "In the second verse, play the low note a little louder than the chord after it." },
      ],
      tricky: {
        3: "Fingers 3, 4 and 5 climb to F. Then the thumb slides up to D, and finger 2 holds the long E.",
        10: "The thumb leaves the last C and lands on the low G for the next verse. The left hand plays C, then D and F.",
        12: "The same notes as bar 3, now over a bass and a chord in turns.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 160,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: scaled([octaveUp(PICKUP), octaveUp(VERSE), PICKUP, VERSE].join(" | "), 2),
      left: [halfBars(ALBERTI, CHORDS), `${ALBERTI.C} ${BROKEN.g}`, `${halfBars(BROKEN, "CG GC CD GG GC FG CF G")} C2+G2+C3/5+2+1:8`].join(" | "),
      pedal: ["r:16", ...Array(17).fill("P:8 P:8")].join(" | "),
      skills: ["alberti-bass", "broken-chords", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the broken chords of the second verse in the left hand alone.", hands: "left", speed: 0.5, loop: [11, 14], wait: false },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "sound", text: "Keep the Alberti bass soft, so the tune rings above it." },
        { fromBar: 10, toBar: 10, kind: "trick", text: "Both hands move down here. The right thumb lands on the low G, and the left hand on a low G." },
        { fromBar: 2, toBar: 18, kind: "sound", text: "Change the pedal each half bar, as the left hand starts a new chord." },
      ],
      tricky: {
        12: "Fingers 3, 4 and 5 climb to F, and the thumb slides up to D. The left hand turns from G to C.",
        15: "The right hand walks down from G to C, then finger 5 reaches up to F. Lift the left hand after each chord.",
        17: "The right hand moves up from the low G, so finger 2 plays E. The left hand turns from C to F.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 8,
      right: scaled([octaveUp(PICKUP), octaveUp(VERSE), octaveUp(PICKUP), LEGENDARY_VERSE].join(" | "), 4),
      left: [halfBars(STRIDE, CHORDS), halfBars(STRIDE, "CG"), `${halfBars(ARPEGGIO, "CG GC CD GG GX FG CF G")} C2+G2+C3/5+2+1:16`].join(" | "),
      pedal: ["r:32", ...Array(17).fill("P:16 P:16")].join(" | "),
      skills: ["stride", "arpeggios", "pedal"],
      practice: [
        { text: "Play the stride bass alone: jump down for the low octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the arpeggios of the second verse in the left hand alone.", hands: "left", speed: 0.5, loop: [11, 14], wait: false },
        { text: "Play bars 13 to 15 with both hands slowly, where the arpeggios run under the gold rings.", hands: "both", speed: 0.5, loop: [13, 15], wait: true },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 11, toBar: 18, kind: "fingering", text: "In each arpeggio, finger 3 crosses over the thumb on the way up." },
        { fromBar: 14, toBar: 14, kind: "sound", text: "Let the octave on G ring for the whole bar, like a gold ring held up to the light." },
      ],
      tricky: {
        14: "The right hand holds the G octave, while the left hand runs G arpeggios below it.",
        15: "Finger 5 plays G again and the hand walks down to C. Below it, the arpeggios turn from G to C, then F.",
        17: "The right hand moves up from the G, so finger 2 plays E. The left hand turns from C to F.",
      },
    },
  },
};

/**
 * *Jingle Bells*: the chorus of James Lord Pierpont's *One Horse Open Sleigh*, in four versions of ours.
 *
 * The tune is the sixteen bars of the chorus, in C major, as it is sung today. Its range is C4 to G4, so a
 * hand in five-finger position plays all of it. The hook is its first two bars: E, E, E held, twice.
 *
 * Common plays the tune in quarters over a held bass. It merges the quick repeated notes and drops the D
 * of bars 3 and 11. Rare plays every eighth over triads. Epic puts an Alberti bass with the pedal under
 * it, and plays the second half in thirds and sixths. Legendary sets the tune an octave up in chords over
 * a stride bass, then plays it with sixteenth runs over a broken octave bass.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The chorus's first four bars in eighths, which come back as bars 9 to 12. */
const OPENING = "E4:2 E4:2 E4:4 | E4:2 E4:2 E4:4 | E4:2 G4:2 C4:3 D4:1 | E4:8";

/** The tune in C major, in eighths. */
const tune = [
  OPENING,
  "F4:2 F4:2 F4:3 F4:1 | F4:2 E4:2 E4:2 E4:1 E4:1 | E4:2 D4:2 D4:2 E4:2 | D4:4 G4:4",
  OPENING,
  "F4:2 F4:2 F4:3 F4:1 | F4:2 E4:2 E4:2 E4:1 E4:1 | G4:2 G4:2 F4:2 D4:2 | C4:8",
].join(" | ");

/** The opening's first three bars in the right hand, in eighths, with the fingers of a five-finger position. */
const RIGHT_OPENING = "E4/3:2 E4/3:2 E4/3:4 | E4/3:2 E4/3:2 E4/3:4 | E4/3:2 G4/5:2 C4/1:3 D4/2:1";

/** Bars 5 and 6 of the tune in the right hand, in eighths, which come back as bars 13 and 14. */
const RIGHT_FUN = "F4/4:2 F4/4:2 F4/4:3 F4/4:1 | F4/4:2 E4/3:2 E4/3:2 E4/3:1 E4/3:1";

/** Half a bar of Alberti bass in eighths, on C major, F major over A, G major over B, or G seventh over B. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  F: "A2/5:1 F3/1:1 C3/3:1 F3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1",
  7: "B2/5:1 G3/1:1 F3/2:1 G3/1:1",
  g: "B2/5:1 G3/1:1 D3/3:1 r:1",
};

/** Half a bar of stride in sixteenths: the root in octaves, then the chord, each an eighth with a rest for the jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:2 r:2 E3+G3+C4/3+2+1:2 r:2",
  F: "F2+F3/5+1:2 r:2 F3+A3+C4/3+2+1:2 r:2",
  G: "G1+G2/5+1:2 r:2 D3+G3+B3/3+2+1:2 r:2",
  7: "G1+G2/5+1:2 r:2 F3+G3+B3/3+2+1:2 r:2",
};

/** Half a bar of broken octave in sixteenths: root, fifth, octave and fifth, each an eighth. */
const BROKEN_OCTAVE: Record<string, string> = {
  C: "C2/5:2 G2/2:2 C3/1:2 G2/2:2",
  F: "F2/5:2 C3/2:2 F3/1:2 C3/2:2",
  G: "G1/5:2 D2/2:2 G2/1:2 D2/2:2",
  f: "F2/5:2 C3/2:2 F3/1:2 r:2",
  c: "C2/5:2 G2/2:2 C3/1:2 r:2",
};

/** Bars of `patterns` from `halves`, such as `"CC FF"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

export const jingleBells: OurSong = {
  slug: "jingle-bells",
  title: "Jingle Bells",
  source: {
    composer: "James Lord Pierpont",
    died: 1893,
    published: 1857,
    edition: "Oliver Ditson & Co., Boston (1857), as One Horse Open Sleigh, with the chorus as the 1859 reissue fixed it",
  },
  about:
    "James Lord Pierpont published this song in Boston in 1857, under the title One Horse Open Sleigh. " +
    "It tells of a fast ride through the snow in a sleigh pulled by one horse. " +
    "The song never mentions Christmas, yet it became one of the best known Christmas songs in the world.",
  funFact: "In 1965, two astronauts played Jingle Bells in space, on a small harmonica and a handful of bells.",
  mythic: null,
  collection: "christmas",
  aka: ["One Horse Open Sleigh"],
  tune: { text: tune, numerator: 4, denominator: 4, steps: 2, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      right: [
        "E4/3:1 E4/3:1 E4/3:2 | E4/3:1 E4/3:1 E4/3:2 | E4/3:1 G4/5:1 C4/1:2 | E4/3:4",
        "F4/4:1 F4/4:1 F4/4:2 | F4/4:1 E4/3:1 E4/3:2 | E4/3:1 D4/2:1 D4/2:1 E4/3:1 | D4/2:2 G4/5:2",
        "E4/3:1 E4/3:1 E4/3:2 | E4/3:1 E4/3:1 E4/3:2 | E4/3:1 G4/5:1 C4/1:2 | E4/3:4",
        "F4/4:1 F4/4:1 F4/4:2 | F4/4:1 E4/3:1 E4/3:2 | G4/5:1 G4/5:1 F4/4:1 D4/2:1 | C4/1:4",
      ].join(" | "),
      left: [
        "C3/1:4 | C3/1:4 | C3/1:4 | C3/1:4 | F2+C3/5+1:4 | C3/1:4 | G2/4:4 | G2/4:4",
        "C3/1:4 | C3/1:4 | C3/1:4 | C3/1:4 | F2+C3/5+1:4 | C3/1:4 | G2/4:4 | C3/1:4",
      ].join(" | "),
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the right hand alone, slowly, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, where the tune climbs to F.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Put both hands together. The left hand holds one low note in each bar.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "rhythm", text: "Short, short, long: the third E lasts two beats, like the jingle of a bell." },
        { fromBar: 1, toBar: 16, kind: "fingering", text: "Each finger has its own key here: thumb on C, little finger on G." },
        { fromBar: 15, toBar: 16, kind: "sound", text: "Slow down a little on the last notes, and let the low C ring." },
      ],
      tricky: {
        5: "Finger 4 plays F three times, while the left little finger reaches down to the low F.",
        13: "The F's come back. Keep finger 4 on F, and drop the left little finger to the low F again.",
        15: "Finger 5 plays G twice, then fingers 4 and 2 walk down, ready for the thumb's last C.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        `${RIGHT_OPENING} | C4+E4/1+3:8 | ${RIGHT_FUN} | E4/3:2 D4/2:2 D4/2:2 E4/3:2 | D4/2:4 D4+G4/2+5:4`,
        `${RIGHT_OPENING} | C4+E4/1+3:8 | ${RIGHT_FUN} | G4/5:2 G4/5:2 F4/4:2 D4/2:2 | C4/1:8`,
      ].join(" | "),
      left: [
        "C3/5:4 E3+G3/3+1:4 | C3/5:4 E3+G3/3+1:4 | C3/5:4 E3+G3/3+1:4 | C3+E3+G3/5+3+1:8",
        "C3+F3/5+2:8 | C3/5:4 E3+G3/3+1:4 | B2+D3+G3/5+3+1:8 | B2+F3+G3/5+2+1:8",
        "C3/5:4 E3+G3/3+1:4 | C3/5:4 E3+G3/3+1:4 | C3/5:4 E3+G3/3+1:4 | C3+E3+G3/5+3+1:8",
        "C3+F3/5+2:8 | C3/5:4 E3+G3/3+1:4 | B2+F3+G3/5+2+1:8 | C3+E3+G3/5+3+1:8",
      ].join(" | "),
      skills: ["eighth-notes", "dotted-rhythm", "triads"],
      practice: [
        { text: "Tap the rhythm of bar 3 on the lid, then play the right hand alone.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the left hand alone, and keep each chord until the next one.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on bars 5 to 8, where the quick notes are.", hands: "both", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 3, toBar: 3, kind: "rhythm", text: "Long, short: the C takes a beat and a half, and the D sneaks in after it." },
        { fromBar: 6, toBar: 6, kind: "rhythm", text: "The last two E's are eighths. Think of one beat split in two." },
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the left hand's bass note a little louder than the chord after it." },
      ],
      tricky: {
        5: "Four F's with finger 4: the last one is quick, so it almost bumps into bar 6.",
        9: "Your left little finger slides back up from B to C, as the tune starts again.",
        13: "The F's return. Let finger 4 bounce on F, and count the short last one.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        `${RIGHT_OPENING} | E4/3:4 G4/5:1 F4/4:1 E4/3:1 D4/2:1 | ${RIGHT_FUN} | E4/3:2 D4/2:2 D4/2:2 E4/3:2 | D4/2:4 G4/5:4`,
        "C4+E4/1+3:2 C4+E4/1+3:2 C4+E4/1+3:4 | C4+E4/1+3:2 C4+E4/1+3:2 C4+E4/1+3:4",
        "C4+E4/1+3:2 E4+G4/3+5:2 A3+C4/1+2:3 B3+D4/1+3:1 | C4+E4/1+3:4 G4/5:1 F4/4:1 E4/3:1 D4/2:1",
        "A3+F4/1+5:2 A3+F4/1+5:2 A3+F4/1+5:3 A3+F4/1+5:1 | A3+F4/1+5:2 C4+E4/2+4:2 C4+E4/2+4:2 C4+E4/2+4:1 C4+E4/2+4:1",
        "B3+G4/1+5:2 B3+G4/1+5:2 B3+F4/1+4:2 B3+D4/1+2:1 r:1 | E3+G3+C4/1+2+4:8",
      ].join(" | "),
      left: `${halfBars(ALBERTI, "CC CC CC CC FF CC GG 77 CC CC CC CC FF CC Gg")} | C2+C3/5+1:8`,
      pedal: "P:4 P:4 | ".repeat(15) + "P:8",
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the first four bars, slowly.", hands: "both", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Keep the Alberti bass soft, so the bells of the tune ring above it." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Change the pedal in the middle of each bar, as the left hand starts its pattern again." },
      ],
      tricky: {
        12: "After the third, the hand runs down G, F, E and D with fingers 5, 4, 3 and 2.",
        14: "On beat two, the sixth becomes a third: the thumb leaves A, and fingers 2 and 4 take C and E.",
        16: "Lift both hands after the D, then land on the last chord with the left hand in octaves.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [
        "G4+C5+E5/1+2+5:4 G4+C5+E5/1+2+5:4 G4+C5+E5/1+2+5:8 | G4+C5+E5/1+2+5:4 G4+C5+E5/1+2+5:4 G4+C5+E5/1+2+5:8",
        "G4+C5+E5/1+2+5:4 G4+C5+G5/1+2+5:2 r:2 G4+C5/1+3:6 G4+B4+D5/1+2+4:2",
        "G4+C5+E5/1+2+5:6 r:2 G5/5:2 F5/4:2 E5/3:2 D5/2:2",
        "A4+C5+F5/1+2+5:4 A4+C5+F5/1+2+5:4 A4+C5+F5/1+2+5:6 A4+C5+F5/1+2+5:2",
        "A4+C5+F5/1+2+5:4 G4+C5+E5/1+2+5:4 G4+C5+E5/1+2+5:4 G4+C5+E5/1+2+5:2 G4+C5+E5/1+2+5:2",
        "G4+B4+E5/1+2+5:4 G4+B4+D5/1+2+4:4 G4+B4+D5/1+2+4:4 G4+B4+E5/1+2+5:4",
        "G4+B4+D5/1+2+4:8 G4+B4+F5+G5/1+2+4+5:8",
        "E5/3:4 E5/3:4 E5/3:4 D5/2:1 C5/1:1 D5/2:1 E5/3:1 | E5/3:4 E5/3:4 E5/3:4 D5/2:1 C5/1:1 D5/2:1 E5/3:1",
        "E5/3:4 G5/5:4 C5/1:6 D5/2:2 | E5/3:8 G5/5:1 F5/4:1 E5/3:1 D5/2:1 C5/1:2 E5/3:2",
        "F5/4:4 F5/4:4 F5/4:6 F5/4:2 | F5/4:4 E5/3:4 E5/3:4 E5/3:2 E5/3:2",
        "G5/5:4 G5/5:4 F5/4:4 D5/2:2 r:2 | C4+E4+G4+C5/1+2+3+5:16",
      ].join(" | "),
      left: [
        halfBars(STRIDE, "CC CC CC CC FF CC GG G7"),
        halfBars(BROKEN_OCTAVE, "CC CC CC CC Ff Cc GG"),
        "C2+C3/5+1:16",
      ].join(" | "),
      pedal: "P:8 P:8 | ".repeat(15) + "P:16",
      skills: ["stride", "melody-in-chords", "sixteenth-notes"],
      practice: [
        { text: "Play the stride bass alone: jump down for the bass note, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's chords alone, and let the little finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the sixteenth runs of bars 9 to 12 with the right hand alone.", hands: "right", speed: 0.5, loop: [9, 12], wait: true },
        { text: "Join the hands on the whole song at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and make the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "In stride, look at the bass note and let the hand find the chord by feel." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
        { fromBar: 9, toBar: 12, kind: "rhythm", text: "Each run fits in one beat: four quick notes, then the bell rings again." },
      ],
      tricky: {
        6: "On beat two, the thumb and little finger step down one key, while finger 2 stays on C.",
        7: "The tune dips from E to D over a held G and B. Finger 4 takes the D.",
        8: "Spread the hand for four notes at once: G, B, F and G. Let the little finger sing.",
      },
    },
  },
};

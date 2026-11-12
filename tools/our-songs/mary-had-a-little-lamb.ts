/**
 * *Mary Had a Little Lamb*: the American nursery tune, in four versions of ours.
 *
 * The tune is its eight bars in C major, as sung in schools since the 1830s. The hook is its first two
 * bars, seven notes that walk down to C and back to a held E.
 *
 * Common plays the tune with a finger on each note, and holds one bass note per bar. Rare plays the
 * tune twice in G major, first over a root and fifth, then with eighths over triads. Epic puts an Alberti bass
 * under it with the pedal and plays the repeat in thirds. Legendary sets the tune an octave up over a
 * stride bass, plays the repeat in chords and ends on a full chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in C major, in quarters. */
const tune =
  "E4:1 D4:1 C4:1 D4:1 | E4:1 E4:1 E4:2 | D4:1 D4:1 D4:2 | E4:1 G4:1 G4:2 | " +
  "E4:1 D4:1 C4:1 D4:1 | E4:1 E4:1 E4:1 E4:1 | D4:1 D4:1 E4:1 D4:1 | C4:4";

/** Half a bar of Alberti bass in eighths, on C major or on G major. */
const ALBERTI: Record<string, string> = { C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1", G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1" };

/** Half a bar of stride: the root in octaves, then the chord, each an eighth with a rest for the jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:1 r:1 E3+G3+C4/3+2+1:1 r:1",
  G: "G1+G2/5+1:1 r:1 D3+G3+B3/3+2+1:1 r:1",
};

/** Bars of `patterns` from `halves`, such as `"CC GC"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

export const maryHadALittleLamb: OurSong = {
  slug: "mary-had-a-little-lamb",
  title: "Mary Had a Little Lamb",
  source: {
    composer: "Traditional",
    died: null,
    published: 1830,
    edition: "The tune as sung to Sarah Josepha Hale's poem of 1830, in the form Lowell Mason's school songbooks of the 1830s spread",
  },
  about:
    "Sarah Josepha Hale published the poem about Mary and her lamb in Boston in 1830. " +
    "The music teacher Lowell Mason set it to this simple tune soon after, for children to sing at school. " +
    "It uses only four notes, which is why so many first piano books start with it.",
  funFact: "In 1877 Thomas Edison recited its first lines into his new phonograph, so it was the first verse ever recorded and played back.",
  mythic: null,
  tune: { text: tune, numerator: 4, denominator: 4, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 100,
      numerator: 4,
      denominator: 4,
      right: [
        "E4/3:1 D4/2:1 C4/1:1 D4/2:1 | E4/3:1 E4/3:1 E4/3:2 | D4/2:1 D4/2:1 D4/2:2 | E4/3:1 G4/5:1 G4/5:2",
        "E4/3:1 D4/2:1 C4/1:1 D4/2:1 | E4/3:1 E4/3:1 E4/3:1 E4/3:1 | D4/2:1 D4/2:1 E4/3:1 D4/2:1 | C4/1:4",
      ].join(" | "),
      left: "C3/1:4 | C3/1:4 | G2/5:4 | C3/1:4 | C3/1:4 | C3/1:4 | G2/5:4 | C3/1:4",
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the right hand alone, slowly, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Now the left hand alone. It holds one note for each whole bar.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Put both hands together, still slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "fingering", text: "Each finger has its own key here: thumb on C, third finger on E." },
        { fromBar: 3, toBar: 3, kind: "fingering", text: "The left hand's little finger takes the low G, and the thumb waits above it on C." },
        { fromBar: 8, toBar: 8, kind: "rhythm", text: "The last C lasts the whole bar, so count four beats before you lift." },
      ],
      tricky: {
        3: "The left hand moves to the low G as the right hand repeats D. Use the little finger.",
        4: "The tune skips F, from E to G. Play G with the little finger, and keep the other fingers on their keys.",
        7: "The right hand rocks between D and E with fingers 2 and 3, while the bass drops to G.",
      },
    },
    rare: {
      key: { tonic: 7, mode: "major" },
      bpm: 100,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "B4/3:2 A4/2:2 G4/1:2 A4/2:2 | B4/3:2 B4/3:2 B4/3:4 | A4/2:2 A4/2:2 A4/2:4 | B4/3:2 D5/5:2 D5/5:4",
        "B4/3:2 A4/2:2 G4/1:2 A4/2:2 | B4/3:2 B4/3:2 B4/3:2 B4/3:2 | A4/2:2 A4/2:2 B4/3:2 A4/2:2 | G4/1:8",
        "B4/3:1 C5/4:1 A4/2:1 B4/3:1 G4/1:1 A4/2:1 A4/2:2 | B4/3:2 B4/3:2 B4/3:2 A4/2:1 B4/3:1 | A4/2:2 A4/2:2 A4/2:2 B4/3:1 A4/2:1 | B4/3:2 D5/5:2 B4+D5/3+5:4",
        "B4/3:1 C5/4:1 A4/2:1 B4/3:1 G4/1:1 A4/2:1 A4/2:2 | B4/3:2 B4/3:2 B4/3:2 B4/3:2 | A4/2:2 A4/2:2 B4/3:2 A4/2:2 | G4/1:8",
      ].join(" | "),
      left: [
        "G2/4:4 D3/1:4 | G2/4:4 D3/1:4 | D3/1:4 A2/3:4 | G2/4:4 D3/1:4",
        "G2/4:4 D3/1:4 | G2/4:4 D3/1:4 | D3/1:4 A2/3:4 | G2+D3/4+1:8",
        "G2+B2+D3/4+2+1:4 G2+B2+D3/4+2+1:4 | G2+B2+D3/4+2+1:4 G2+B2+D3/4+2+1:4 | F#2+A2+D3/5+3+1:4 F#2+A2+D3/5+3+1:4 | G2+B2+D3/4+2+1:8",
        "G2+B2+D3/4+2+1:4 G2+B2+D3/4+2+1:4 | G2+B2+D3/4+2+1:4 G2+B2+D3/4+2+1:4 | F#2+A2+D3/5+3+1:4 F#2+A2+D3/5+3+1:4 | G2+B2+D3/4+2+1:8",
      ].join(" | "),
      skills: ["eighth-notes", "triads", "two-note-chords"],
      practice: [
        { text: "Play the right hand alone on the second half, where the eighths come in.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Play the left hand alone, and keep each chord down until the next one.", hands: "left", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the first eight bars.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 9, toBar: 9, kind: "rhythm", text: "Each quick pair is one beat split in two. Count one-and, two-and." },
        { fromBar: 11, toBar: 11, kind: "fingering", text: "The left hand's little finger reaches down to F sharp for this chord." },
        { fromBar: 12, toBar: 12, kind: "sound", text: "Press B and D together at the end of the bar, as if they were one key." },
      ],
      tricky: {
        9: "Finger 4 plays the quick C, then finger 2 takes A. Keep the hand still.",
        11: "The left hand reaches down to F sharp while the right hand adds a quick B.",
        13: "The quick notes return here. Count one-and, two-and to keep them even.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 104,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "E4/3:2 D4/2:2 C4/1:2 D4/2:2 | E4/3:2 E4/3:2 E4/3:4 | D4/2:2 D4/2:2 D4/2:4 | E4/3:2 G4/5:2 G4/5:3 F4/4:1",
        "E4/3:2 D4/2:2 C4/1:2 D4/2:2 | E4/3:2 E4/3:2 E4/3:2 E4/3:2 | D4/2:2 D4/2:2 E4/3:2 D4/2:2 | C4/1:8",
        "C4+E4/1+3:2 B3+D4/1+2:2 C4/1:2 B3+D4/1+2:2 | C4+E4/1+3:2 C4+E4/1+3:2 C4+E4/1+3:4 | B3+D4/1+2:2 B3+D4/1+2:2 B3+D4/1+2:4 | C4+E4/1+3:2 E4+G4/3+5:2 E4+G4/3+5:4",
        "C4+E4/1+3:2 B3+D4/1+2:2 C4/1:2 B3+D4/1+2:2 | C4+E4/1+3:2 C4+E4/1+3:2 C4+E4/1+3:2 C4+E4/1+3:2 | B3+D4/1+2:2 B3+D4/1+2:2 C4+E4/1+3:2 B3+D4/1+2:2 | C4/1:8",
      ].join(" | "),
      left: `${halfBars(ALBERTI, "CC CC GG CC CC CC GC CC CC CC GG CC CC CC GC C")} C3+E3+G3/5+3+1:4`,
      pedal: "P:4 P:4 | ".repeat(15) + "P:8",
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Join the hands on the first four bars, slowly.", hands: "both", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 4, toBar: 4, kind: "trick", text: "The quick F at the end of the bar leads you back to E for the next phrase." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "The tune is the top note of each third, so let the upper finger lead." },
      ],
      tricky: {
        9: "The thirds start here. Your thumb steps between C and B under each pair.",
        13: "After the held pair, the last phrase starts. Press the two notes of each pair as one.",
        15: "The pairs change on every beat, and the bass changes chord halfway through the bar.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "E5/3:2 D5/2:2 C5/1:2 D5/2:2 | E5/3:2 E5/3:2 E5/3:4 | D5/2:2 D5/2:2 D5/2:4 | E5/3:2 G5/5:2 G5/5:4",
        "E5/3:2 D5/2:2 C5/1:2 D5/2:2 | E5/3:2 E5/3:2 E5/3:2 E5/3:2 | D5/2:2 D5/2:2 E5/3:2 D5/2:2 | C5/1:8",
        "G4+C5+E5/1+3+5:2 G4+D5/1+4:2 G4+C5/1+3:2 G4+D5/1+4:2 | G4+C5+E5/1+3+5:2 G4+C5+E5/1+3+5:2 G4+C5+E5/1+3+5:4 | G4+B4+D5/1+2+4:2 G4+B4+D5/1+2+4:2 G4+B4+D5/1+2+4:4 | G4+C5+E5/1+3+5:2 C5+E5+G5/1+3+5:2 C5+E5+G5/1+3+5:4",
        "G4+C5+E5/1+3+5:2 G4+D5/1+4:2 G4+C5/1+3:2 G4+D5/1+4:2 | G4+C5+E5/1+3+5:2 G4+C5+E5/1+3+5:2 G4+C5+E5/1+3+5:2 G4+C5+E5/1+3+5:2 | G4+B4+D5/1+2+4:2 G4+B4+D5/1+2+4:2 G4+E5/1+5:2 G4+B4+D5/1+2+4:1 r:1 | C4+E4+G4+C5/1+2+3+5:8",
      ].join(" | "),
      left: `${halfBars(STRIDE, "CC CC GG CC CC CC GG CC CC CC GG CC CC CC GG C")} C2+G2+C3/5+2+1:4`,
      pedal: "P:4 P:4 | ".repeat(15) + "P:8",
      skills: ["stride", "melody-in-chords"],
      practice: [
        { text: "Play the stride bass alone: jump down for the bass note, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [9, 12], wait: true },
        { text: "Join the hands on the first eight bars at three-quarter speed.", hands: "both", speed: 0.75, loop: [1, 8], wait: false },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "trick", text: "In stride, look at the bass note and let the hand find the chord by feel." },
        { fromBar: 9, toBar: 15, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
        { fromBar: 16, toBar: 16, kind: "sound", text: "Hold the last chord with the pedal until it fades." },
      ],
      tricky: {
        3: "The bass jumps down to the low G octave. Glance at the left hand before the bar starts.",
        11: "Keep the thumb on G and the chord shape still, so only the left hand travels.",
        15: "Lift the hand after the last D, so it has time to open wide for the final chord.",
      },
    },
  },
};

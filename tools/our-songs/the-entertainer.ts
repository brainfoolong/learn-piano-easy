/**
 * *The Entertainer*: Scott Joplin's rag of 1902, in four versions of ours.
 *
 * The tune is the first phrase of the rag's first strain, in C major. The edition writes it in 2/4 with
 * sixteenths, and the tune here makes every length four times as long in 4/4. A sixteenth is then a
 * quarter, so Common needs nothing faster and plays the hook at its place. Where the edition doubles
 * the tune in octaves, the tune takes the lower note. A held note that crosses a bar line keeps only its
 * start. The hook is its first two bars, the famous E and high C.
 *
 * The pickup, D and D sharp, stays out of the tune, because Common may play no note outside the key. The
 * tune's one D sharp is then the only note Common skips, within the tenth it may drop. The versions above
 * Common play the pickup before the hook.
 *
 * Common plays the phrase twice with a stretched right hand over open fifths. Rare adds the pickup and
 * the sharps over an oom-pah bass of a low note and a two-note chord. Epic plays the whole first strain over Joplin's own bass
 * line, with the pedal. Legendary sets the tune in sixths over a stride bass in octaves, and ends in a
 * full chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The first phrase of the first strain, in quarters: a sixteenth of the edition is a quarter here. */
const tune = "E4:1 C5:2 E4:1 | C5:2 E4:1 C5:1 | r:4 | r:1 C5:1 D5:1 D#5:1 | E5:1 C5:1 D5:1 E5:1 | r:1 B4:1 D5:2 | C5:4";

/** Common's phrase in eighths, the E short so the hand has time for the leap to C. */
const COMMON_PHRASE =
  "E4/1:1 r:1 C5/3:3 r:1 E4/1:1 r:1 | C5/3:3 r:1 E4/1:1 r:1 C5/3:2 | C5/3:8 | r:2 C5/3:2 D5/4:4 | " +
  "E5/5:2 C5/3:2 D5/4:2 E5/5:2 | r:2 B4/2:2 D5/4:4";

/** Common's bass under its phrase: one open fifth or fourth a bar. */
const COMMON_BASS = "C3+G3/5+1:8 | C3+G3/5+1:8 | C3+F3/5+2:8 | C3+G3/5+1:8 | C3+G3/5+1:8 | D3+G3/4+1:8";

/** Rare's phrase in eighths, from the hook to the run's last D. */
const RARE_PHRASE =
  "E4/2:2 C5/5:4 E4/2:2 | C5/5:4 E4/2:2 C5/5:2 | C5/5:6 r:2 | r:2 C5/2:2 D5/3:2 D#5/4:2 | " +
  "E5/5:2 C5/2:2 D5/3:2 E5/5:2 | r:2 B4/1:2 D5/3:4";

/** Rare's oom-pah bass under its phrase, in one five-finger place. */
const RARE_BASS =
  "C3/5:4 E3+G3/3+1:4 | C3/5:4 E3+G3/3+1:4 | C3/5:4 F3+A3/2+1:4 | C3/5:4 G3/1:4 | " +
  "C3/5:4 E3+G3/3+1:4 | D3/4:4 F3+G3/2+1:4";

/** The pickup in eighths, on the last two beats of a bar. */
const PICKUP = "r:4 D4/1:2 D#4/2:2";

/** Epic's right hand: the first phrase of the strain, then the bar that leads back or home. */
const EPIC_A =
  "E4/2:2 C5/5:4 E4/2:2 | C5/5:4 E4/2:2 C5/5:2 | A4+C5/4+5:6 r:2 | r:2 C5/2:2 D5/3:2 D#5/4:2 | " +
  "E5/5:2 C5/2:2 D5/3:2 E5/5:2 | r:2 B4/1:2 D5/3:3 r:1 | E4+G4+C5/1+2+5:8";

/** Epic's right hand in the second phrase, which turns to D. */
const EPIC_B =
  "E4/2:2 C5/5:4 E4/2:2 | C5/5:4 E4/2:2 C5/5:2 | A4+C5/4+5:6 r:2 | r:4 A4/3:2 G4/2:2 | " +
  "F#4/1:2 A4/2:2 C5/3:2 E5/5:2 | r:2 D5/4:2 C5/3:2 A4/1:2 | G4+B4+D5/1+2+4:6 r:2";

/** Epic's right hand in the last phrase, which runs home. */
const EPIC_C =
  "E5/3:2 C5/1:2 D5/2:2 E5/3:2 | r:2 C5/1:2 D5/2:2 C5/1:2 | E5/3:2 C5/1:2 D5/2:2 E5/3:2 | r:2 C5/1:2 D5/2:2 C5/1:2 | " +
  "E5/3:2 C5/1:2 D5/2:2 E5/3:2 | r:2 B4/1:2 D5/3:3 r:1 | E4+G4+C5/1+2+5:8";

/** Half a bar of the oom-pah bass: a bass note, then a chord, each with an eighth's rest for the jump. */
function oomPah(bass: string, chord: string, chordLength = 3): string {
  return `${bass}:3 r:1 ${chord}:${chordLength} r:${4 - chordLength}`;
}

/** Epic's bass under the first phrase, as Joplin's own line runs, one bass and one chord a bar. */
const EPIC_BASS_A = [
  oomPah("C3/5", "E3+G3+C4/3+2+1"),
  oomPah("G2/5", "G3+A#3+C4/3+2+1"),
  oomPah("F2/5", "F3+A3+C4/3+2+1"),
  oomPah("E2/5", "G3+C4/2+1"),
  oomPah("G2/5", "E3+G3+C4/3+2+1"),
  oomPah("G2/5", "F3+G3+B3/3+2+1"),
  oomPah("C3/5", "E3+G3+C4/3+2+1"),
];

/** Epic's bass under the second phrase, with the bass falling chromatically to D. */
const EPIC_BASS_B = [
  oomPah("C3/5", "E3+G3+C4/3+2+1"),
  oomPah("G2/5", "G3+A#3+C4/3+2+1"),
  oomPah("F2/5", "F3+A3+C4/3+2+1"),
  "E2/5:3 r:1 D#2/5:3 r:1",
  oomPah("D2/5", "F#3+A3+C4/3+2+1"),
  oomPah("D3/5", "F#3+A3+C4/3+2+1"),
  oomPah("G2/5", "F3+G3+B3/3+2+1"),
];

/** Epic's bass under the last phrase, with the bass falling from B flat to A flat. */
const EPIC_BASS_C = [
  oomPah("C3/5", "E3+G3+C4/3+2+1"),
  oomPah("A#2/5", "E3+G3+C4/3+2+1"),
  oomPah("A2/5", "F3+A3+C4/3+2+1", 2),
  oomPah("G#2/5", "F3+G#3+C4/3+2+1", 2),
  oomPah("G2/5", "E3+G3+C4/3+2+1"),
  oomPah("G2/5", "F3+G3+B3/3+2+1"),
  "C3+E3+G3/5+3+1:8",
];

/** Legendary's right hand in the first phrase: the run in sixths under the tune. */
const LEGENDARY_A =
  "E4/1:2 G4+C5/2+5:4 E4/1:2 | A#4+C5/3+5:4 E4/1:2 A#4+C5/3+5:2 | F4+A4+C5/1+3+5:6 r:2 | " +
  "r:2 E4+C5/1+5:2 F4+D5/1+5:2 F#4+D#5/1+5:2 | G4+E5/1+5:2 E4+C5/1+5:2 F4+D5/1+5:2 G4+E5/1+5:2 | " +
  "r:2 G4+B4/1+3:2 F4+B4+D5/1+3+5:4 | E4+G4+C5/1+2+5:8";

/** Legendary's right hand in the second phrase. */
const LEGENDARY_B =
  "E4/1:2 G4+C5/2+5:4 E4/1:2 | A#4+C5/3+5:4 E4/1:2 A#4+C5/3+5:2 | F4+A4+C5/1+3+5:6 r:2 | " +
  "r:4 C4+A4/1+4:2 C4+G4/1+3:2 | F#4/1:2 A4/2:2 C5/3:2 E5/5:2 | r:2 F#4+D5/1+5:2 E4+C5/1+5:2 C4+A4/1+5:1 r:1 | " +
  "F4+B4+D5/1+3+5:6 r:2";

/** Legendary's right hand in the last phrase, in sixths, ending on a full chord. */
const LEGENDARY_C =
  "G4+E5/1+5:2 E4+C5/1+5:2 F4+D5/1+5:2 G4+E5/1+5:2 | r:2 E4+C5/1+5:2 F4+D5/1+5:2 E4+C5/1+5:2 | " +
  "G4+E5/1+5:2 E4+C5/1+5:2 F4+D5/1+5:2 G4+E5/1+5:2 | r:2 E4+C5/1+5:2 F4+D5/1+5:2 E4+C5/1+5:2 | " +
  "G4+E5/1+5:2 E4+C5/1+5:2 F4+D5/1+5:2 G4+E5/1+5:2 | r:2 G4+B4/1+3:2 F4+B4+D5/1+3+5:3 r:1 | C4+E4+G4+C5/1+2+3+5:8";

/** Legendary's stride bass under the first phrase: the bass in octaves, then the chord. */
const LEGENDARY_BASS_A = [
  oomPah("C2+C3/5+1", "E3+G3+C4/3+2+1"),
  oomPah("G1+G2/5+1", "G3+A#3+C4/3+2+1"),
  oomPah("F1+F2/5+1", "F3+A3+C4/3+2+1"),
  oomPah("E1+E2/5+1", "G3+C4/2+1", 2),
  oomPah("G1+G2/5+1", "G3+C4/2+1"),
  oomPah("G1+G2/5+1", "F3+G3+B3/3+2+1"),
  oomPah("C2+C3/5+1", "E3+G3+C4/3+2+1"),
];

/** Legendary's stride bass under the second phrase, with a full D seventh. */
const LEGENDARY_BASS_B = [
  oomPah("C2+C3/5+1", "E3+G3+C4/3+2+1"),
  oomPah("G1+G2/5+1", "G3+A#3+C4/3+2+1"),
  oomPah("F1+F2/5+1", "F3+A3+C4/3+2+1"),
  "E1+E2/5+1:3 r:1 D#1+D#2/5+1:3 r:1",
  oomPah("D2+D3/5+1", "D3+F#3+A3+C4/5+3+2+1"),
  oomPah("D2+D3/5+1", "F#3+A3+C4/3+2+1"),
  oomPah("G1+G2/5+1", "F3+G3+B3/3+2+1"),
];

/** Legendary's stride bass under the last phrase. */
const LEGENDARY_BASS_C = [
  oomPah("C2+C3/5+1", "G3+C4/2+1"),
  oomPah("A#1+A#2/5+1", "G3+A#3+C4/3+2+1"),
  oomPah("A1+A2/5+1", "F3+A3+C4/3+2+1", 2),
  oomPah("G#1+G#2/5+1", "F3+G#3+C4/3+2+1", 2),
  oomPah("G1+G2/5+1", "G3+C4/2+1"),
  oomPah("G1+G2/5+1", "F3+G3+B3/3+2+1"),
  "C2+G2+C3/5+2+1:8",
];

export const theEntertainer: OurSong = {
  slug: "the-entertainer",
  title: "The Entertainer",
  source: {
    composer: "Scott Joplin",
    died: 1917,
    published: 1902,
    edition: "John Stark & Son's first edition, St. Louis, 1902",
  },
  about:
    "Scott Joplin, the King of Ragtime, published this rag in St. Louis in 1902. " +
    "A rag puts a bouncy, off-beat tune over a steady bass that goes oom-pah. " +
    "This is the first strain, the part everyone hums.",
  funFact: "The rag became famous around the world in 1973, when the film The Sting used it, more than seventy years after Joplin wrote it.",
  mythic: "mutopia/entertainer.mid",
  tune: { text: tune, numerator: 4, denominator: 4, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 100,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [COMMON_PHRASE, "C5/3:8 | r:4 D5/4:2 B4/2:2", COMMON_PHRASE, "C5/3:8"].join(" | "),
      left: [COMMON_BASS, "C3+G3/5+1:8 | D3+G3/4+1:8", COMMON_BASS, "C3+G3/5+1:8"].join(" | "),
      skills: ["open-fifths", "held-bass"],
      practice: [
        { text: "Play the first two bars with the right hand alone, until the jump from E to C feels easy.", hands: "right", speed: 0.6, loop: [1, 2], wait: true },
        { text: "Play the right hand alone through the whole phrase.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Put both hands together on the first eight bars.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Thumb on E, middle finger on high C. Keep the hand open and let it rock between them." },
        { fromBar: 1, toBar: 2, kind: "rhythm", text: "Play each E short and bouncy. That little gap is the rag's hop." },
        { fromBar: 4, toBar: 6, kind: "fingering", text: "Fingers 2 to 5 sit on B, C, D and E, right next to each other." },
      ],
      tricky: {
        2: "The hand rocks from C down to E and back. Let go of each key quickly, so the jump has time.",
        9: "From B, your thumb drops back to E. Keep the hand open, and the tune starts again.",
        10: "The same rocking bar as before: middle finger on C, thumb on E, and short notes.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [PICKUP, RARE_PHRASE, "C5/2:8 | B4/1:2 C5/2:2 D5/3:2 r:2", RARE_PHRASE, "C5/2:8"].join(" | "),
      left: ["r:4 F3+G3/2+1:4", RARE_BASS, "C3/5:4 E3+G3/3+1:4 | D3/4:4 F3+G3/2+1:4", RARE_BASS, "C3+E3+G3/5+3+1:8"].join(" | "),
      skills: ["triads", "position-change"],
      practice: [
        { text: "Play the pickup and the first two bars with the right hand alone.", hands: "right", speed: 0.6, loop: [1, 3], wait: true },
        { text: "Play the left hand alone: a low note, then a chord, like a little march.", hands: "left", speed: 0.6, loop: [2, 9], wait: true },
        { text: "Join the hands on the first nine bars, slowly.", hands: "both", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "D sharp and E share finger 2. Slide it up one key into the tune." },
        { fromBar: 2, toBar: 9, kind: "rhythm", text: "The left hand goes oom on beat one and pah on beat three, every bar." },
        { fromBar: 5, toBar: 6, kind: "sound", text: "Let the climb C, D, D sharp, E grow a little louder each step." },
      ],
      tricky: {
        2: "Finger 2 slides from D sharp up to E, and the little finger reaches for high C.",
        3: "Keep the little finger over C and the second finger over E. Only the wrist rocks.",
        10: "After the rest, finger 2 jumps down to E. Look at the key before you land.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 144,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [PICKUP, EPIC_A, PICKUP, EPIC_B, PICKUP, EPIC_A, "r:4 C5/1:2 D5/2:2", EPIC_C].join(" | "),
      left: [
        oomPah("G2/5", "G3+B3/2+1"),
        ...EPIC_BASS_A,
        "E3+G3+C4/3+2+1:3 r:1 G3+B3/2+1:3 r:1",
        ...EPIC_BASS_B,
        "A2/5:4 B2/4:3 r:1",
        ...EPIC_BASS_A,
        oomPah("G2/5", "E3+G3+C4/3+2+1"),
        ...EPIC_BASS_C,
      ].join(" | "),
      pedal: `${"P:4 r:4 | ".repeat(31)}P:8`,
      skills: ["pedal", "position-change"],
      practice: [
        { text: "Play the left hand alone: jump down for the bass note, then up for the chord.", hands: "left", speed: 0.5, loop: [2, 8], wait: false },
        { text: "Play the second phrase's right hand alone, where an F sharp leads the tune to G.", hands: "right", speed: 0.6, loop: [10, 16], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 8, kind: "sound", text: "Press the pedal with each bass note and lift it for the chord, so the chord stays crisp." },
        { fromBar: 13, toBar: 13, kind: "sound", text: "The bass slides down one key, from E to E flat. Let it be heard." },
        { fromBar: 26, toBar: 31, kind: "rhythm", text: "The last phrase repeats one little turn three times. Count it so you know which one you are on." },
      ],
      tricky: {
        4: "The left hand leaps from low F up to the chord, while the right hand holds A and C.",
        5: "After the rest, move the right hand up so finger 2 lands on C for the climb.",
        21: "The climb of bar 5 comes back. Move up during the rest, and finger 2 takes the C.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 168,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [PICKUP, LEGENDARY_A, PICKUP, LEGENDARY_B, PICKUP, LEGENDARY_A, "r:4 E4+C5/1+5:2 F4+D5/1+5:2", LEGENDARY_C].join(" | "),
      left: [
        oomPah("G1+G2/5+1", "F3+G3+B3/3+2+1"),
        ...LEGENDARY_BASS_A,
        "E2+E3/5+1:3 r:1 G2+G3/5+1:3 r:1",
        ...LEGENDARY_BASS_B,
        "A1+A2/5+1:4 B1+B2/5+1:4",
        ...LEGENDARY_BASS_A,
        oomPah("G1+G2/5+1", "G3+C4/2+1", 2),
        ...LEGENDARY_BASS_C,
      ].join(" | "),
      pedal: `${"P:4 r:4 | ".repeat(31)}P:8`,
      skills: ["stride", "octave-bass", "thirds-and-sixths"],
      practice: [
        { text: "Play the stride bass alone: an octave down low, then the chord up high.", hands: "left", speed: 0.5, loop: [2, 8], wait: false },
        { text: "Play the right hand's sixths alone, thumb and little finger moving together.", hands: "right", speed: 0.5, loop: [5, 6], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 8, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 5, toBar: 6, kind: "sound", text: "Play the top note of each sixth a little louder, so the tune sings." },
        { fromBar: 13, toBar: 13, kind: "sound", text: "The bass octaves slide down from E to E flat, then on to D." },
      ],
      tricky: {
        4: "The left hand jumps from the low F octave up to the chord, while the right hand spreads over F, A and C.",
        12: "The F chord comes back. Land the low octave first, then let the hand spring up.",
        20: "The F chord comes a third time, with the same jumps as bar 4. Keep the beat steady.",
      },
    },
  },
};

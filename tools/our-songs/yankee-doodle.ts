/**
 * *Yankee Doodle*: the traditional tune of the American Revolution, in four versions of ours.
 *
 * The tune is the eight bars of the verse, in G major, in quarter notes. The hook is its first two
 * bars. Rare and above add the eight bars of the chorus after the verse, which the tune leaves out.
 *
 * Common keeps the notes of the beginner song in C major, and lifts the hand once before bar 7 to
 * reach the low G. Rare plays verse and chorus in G over a bass and triads. Epic puts an Alberti bass
 * under it with the pedal, runs up into the chorus with the thumb under, and plays the chorus again
 * in thirds. Legendary plays over a stride bass and octaves, sets the tune in sixths and thirds, and
 * ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const G_MAJOR: Key = { tonic: 7, mode: "major" };

/** The verse in G major, in quarters. */
const tune = "G4:1 G4:1 A4:1 B4:1 | G4:1 B4:1 A4:1 D4:1 | G4:1 G4:1 A4:1 B4:1 | G4:2 F#4:2 | G4:1 G4:1 A4:1 B4:1 | C5:1 B4:1 A4:1 G4:1 | F#4:1 D4:1 E4:1 F#4:1 | G4:2 G4:2";

/** The verse in G in quarters, as Rare, Epic and Legendary finger it, in eighths. */
const VERSE = [
  "G4/2:2 G4/2:2 A4/3:2 B4/4:2 | G4/2:2 B4/4:2 A4/3:2 D4/1:2 | G4/2:2 G4/2:2 A4/3:2 B4/4:2 | G4/2:4 F#4/1:4",
  "G4/2:2 G4/2:2 A4/3:2 B4/4:2 | C5/5:2 B4/4:2 A4/3:2 G4/2:2 | F#4/2:2 D4/1:2 E4/2:2 F#4/3:2",
];

/** The first half of the chorus in G, in eighths, single notes. */
const CHORUS = "E5/3:2 F#5/4:2 E5/3:2 D5/2:2 | E5/3:2 F#5/4:2 G5/5:4 | D5/3:2 E5/4:2 D5/3:2 C5/2:2 | B4/1:4 G4/1:4";

/** The second half of the chorus in G, in eighths, in thirds under the tune. */
const CHORUS_THIRDS =
  "C5+E5/1+3:2 D5+F#5/2+4:2 C5+E5/1+3:2 B4+D5/1+2:2 | C5+E5/1+3:2 D5+F#5/2+4:2 B4+G5/1+5:2 C5+E5/1+3:2 | " +
  "B4+D5/1+2:2 B4+G5/1+5:2 D5+F#5/2+4:2 F#5+A5/4+5:2";

/** Half a bar of Alberti bass in eighths, on G, C over G, or D over A. */
const ALBERTI: Record<string, string> = {
  G: "G2/5:1 D3/1:1 B2/3:1 D3/1:1",
  C: "G2/5:1 E3/1:1 C3/2:1 E3/1:1",
  D: "A2/5:1 F#3/1:1 D3/2:1 F#3/1:1",
};

/** Half a bar of stride: the root in octaves, then the chord, each an eighth with a rest for the jump. */
const STRIDE: Record<string, string> = {
  G: "G1+G2/5+1:1 r:1 B2+D3+G3/3+2+1:1 r:1",
  C: "C2+C3/5+1:1 r:1 C3+E3+G3/5+3+1:1 r:1",
  D: "D2+D3/5+1:1 r:1 A2+D3+F#3/4+2+1:1 r:1",
};

/** Half a bar of octave bass: two octaves, each an eighth with a rest for the jump. */
const OCTAVES: Record<string, string> = {
  c: "C2+C3/5+1:1 r:1 E2+E3/5+1:1 r:1",
  C: "G2+G3/5+1:1 r:1 E2+E3/5+1:1 r:1",
  g: "G1+G2/5+1:1 r:1 B1+B2/5+1:1 r:1",
  d: "D2+D3/5+1:1 r:1 F#2+F#3/5+1:1 r:1",
  D: "A2+A3/5+1:1 r:1 F#2+F#3/5+1:1 r:1",
  G: "D2+D3/5+1:1 r:1 B1+B2/5+1:1 r:1",
};

/** Bars of `patterns` from `halves`, such as `"GG GD"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

export const yankeeDoodle: OurSong = {
  slug: "yankee-doodle",
  title: "Yankee Doodle",
  source: {
    composer: "Traditional",
    died: null,
    published: 1782,
    edition: "James Aird, A Selection of Scotch, English, Irish and Foreign Airs, volume 1, Glasgow (1782)",
  },
  about:
    "Yankee Doodle is a traditional tune that British soldiers sang to make fun of the American colonists. " +
    "During the American Revolution, the Americans took the song as their own and sang it with pride. " +
    "One of its first printings is in a book of tunes James Aird published in Glasgow in 1782.",
  funFact: "Yankee Doodle is the official state song of Connecticut.",
  mythic: null,
  tune: { text: tune, numerator: 4, denominator: 4, key: G_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: { tonic: 0, mode: "major" },
      bpm: 100,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "C4/2:2 C4/2:2 D4/3:2 E4/4:2 | C4/2:2 E4/4:2 D4/3:2 G3/1:2 | C4/2:2 C4/2:2 D4/3:2 E4/4:2 | C4/2:4 B3/1:4",
        "C4/2:2 C4/2:2 D4/3:2 E4/4:2 | F4/5:2 E4/4:2 D4/3:2 C4/2:1 r:1 | B3/2:2 G3/1:2 A3/2:2 B3/3:2 | C4/4:4 C4/4:4",
      ].join(" | "),
      left: "C3/1:8 | C3/1:4 G2/5:4 | C3/1:8 | C3/1:4 G2/5:4 | C3/1:8 | A2/4:4 C3/1:4 | G2/5:8 | C3/1:8",
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the right hand alone, slowly, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Now the left hand alone. Each of its notes lasts two beats or more.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Put both hands together on the first four bars.", hands: "both", speed: 0.7, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Finger 2 sits on C, and your thumb reaches down for the low G at the end of bar 2." },
        { fromBar: 4, toBar: 4, kind: "rhythm", text: "Both notes of bar 4 last two beats, so count them out." },
        { fromBar: 6, toBar: 7, kind: "trick", text: "Lift the hand for a moment after the C in bar 6. It lands one key lower." },
      ],
      tricky: {
        6: "Walk down F, E, D and C with fingers 5, 4, 3 and 2, then lift the hand.",
        7: "Land with finger 2 on B, and the thumb takes the low G.",
        8: "Finger 4 plays both C's. Hold each one for two beats.",
      },
    },
    rare: {
      key: G_MAJOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [...VERSE, "G4/4:4 G4/1:4", CHORUS, "E5/3:2 F#5/4:2 E5/3:2 D5/2:2 | E5/3:2 F#5/4:2 G5/5:2 E5/3:2 | D5/1:2 G5/4:2 F#5/3:2 A5/5:2 | G5/4:4 G5/4:4"].join(" | "),
      left: [
        "G2/5:4 G2+B2+D3/5+3+1:4 | G2/5:4 A2+D3+F#3/4+2+1:4 | G2/5:4 G2+B2+D3/5+3+1:4 | G2/5:4 A2+D3+F#3/4+2+1:4",
        "G2+B2+D3/5+3+2:4 G2/5:4 | G2+E3/5+1:4 G2+B2+D3/5+3+2:4 | A2+D3+F#3/4+2+1:8 | G2+B2+D3/5+3+2:4 G2/5:4",
        "C3+E3/2+1:8 | C3+E3/2+1:4 G2/5:4 | A2+D3+F#3/4+2+1:8 | G2+B2+D3/5+3+2:4 G2/5:4",
        "C3+E3/2+1:8 | C3+E3/2+1:4 G2/5:4 | D3/2:4 A2+D3+F#3/4+2+1:4 | G2+B2+D3/5+3+2:8",
      ].join(" | "),
      skills: ["triads", "position-change"],
      practice: [
        { text: "Play the right hand alone through the verse, slowly.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone. Keep each chord until the next note.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the chorus, which sits higher on the keys.", hands: "both", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "The bass note comes first and the chord answers it. Play the chord a little softer." },
        { fromBar: 8, toBar: 9, kind: "trick", text: "Change to the thumb on the second G, so the hand can reach up for the chorus." },
        { fromBar: 15, toBar: 16, kind: "sound", text: "The tune climbs to its highest note here. Let it ring out, then land softly on G." },
      ],
      tricky: {
        7: "Move finger 2 from G down to F sharp, and the thumb lands on D below it.",
        12: "Your thumb plays B and then G. Slide it down while the long B rings.",
        15: "The thumb takes D, then finger 4 reaches up to G. Keep the hand open.",
      },
    },
    epic: {
      key: G_MAJOR,
      bpm: 116,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [...VERSE, "G4/4:4 G4/1:1 A4/2:1 B4/3:1 C5/1:1", CHORUS, CHORUS_THIRDS, "B4+D5+G5/1+2+5:8"].join(" | "),
      left: `${halfBars(ALBERTI, "GG GD GG GD GG CG DD GG CC CG DD GG CC CG DD G")} G2+B2+D3/5+3+1:4`,
      pedal: "P:8 | P:4 P:4 | P:8 | P:4 P:4 | P:8 | P:4 P:4 | P:8 | P:8 | P:8 | P:4 P:4 | P:8 | P:8 | P:8 | P:4 P:4 | P:8 | P:8",
      markedClashBars: [6, 13, 14],
      skills: ["alberti-bass", "thumb-under", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the run of bar 8 alone, and pass the thumb under to C.", hands: "right", speed: 0.5, loop: [8, 9], wait: true },
        { text: "Play the chorus in thirds alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [13, 16], wait: true },
        { text: "Play the whole song with both hands at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 8, toBar: 8, kind: "fingering", text: "The thumb passes under finger 3 to reach C, and the run climbs on into the chorus." },
        { fromBar: 13, toBar: 14, kind: "sound", text: "The F sharps rub against the bass for a moment. That bite is meant." },
      ],
      tricky: {
        7: "Move finger 2 from G down to F sharp. The rest of the hand follows it.",
        11: "The chorus drops back to D. Finger 3 takes it, so the hand is ready for C.",
        15: "The hand opens to a sixth on B and G, then climbs to F sharp and A.",
      },
    },
    legendary: {
      key: G_MAJOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        VERSE[0],
        "B3+G4/1+4:2 B3+G4/1+4:2 C4+A4/1+5:2 D4+B4/1+5:2 | E4+C5/1+5:2 D4+B4/1+5:2 C4+A4/1+5:2 B3+G4/1+4:2",
        "D4+F#4/1+3:2 B3+D4/1+2:2 C4+E4/1+3:2 D4+F#4/2+4:2 | B3+D4+G4/1+2+4:4 B3+D4+G4/1+2+4:3 r:1",
        CHORUS,
        CHORUS_THIRDS,
        "G4+B4+D5+G5/1+2+3+5:8",
      ].join(" | "),
      left: `${halfBars(STRIDE, "GG GD GG GD GG CG DD GG")} | ${halfBars(OCTAVES, "cC cg dD gG")} | ${halfBars(STRIDE, "CC CG DD")} | G1+G2/5+1:8`,
      pedal: "P:4 P:4 | ".repeat(15) + "P:8",
      markedClashBars: [6, 13, 14, 15],
      skills: ["stride", "octave-bass", "melody-in-chords"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's sixths and thirds alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [5, 8], wait: true },
        { text: "Play the octaves of the chorus in the left hand alone.", hands: "left", speed: 0.6, loop: [9, 12], wait: false },
        { text: "Join the hands on the whole song at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and make the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "trick", text: "In stride, look at the octave and let the hand find the chord by feel." },
        { fromBar: 5, toBar: 6, kind: "fingering", text: "The thumb plays every lower note, and fingers 4 and 5 carry the tune." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "Play the octaves short, and let the pedal join them." },
      ],
      tricky: {
        3: "The tune walks up while the bass jumps. Keep your eyes on the left hand.",
        5: "The sixths move as one shape. Let the thumb lead each step up.",
        8: "Lift the hand after the second chord, then jump up to E for the chorus.",
      },
    },
  },
};

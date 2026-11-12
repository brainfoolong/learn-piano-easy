/**
 * *Es ist ein Ros entsprungen*: the tune of the Speyer hymnal of 1599, as the soprano of Michael
 * Praetorius's setting of 1609 carries it, in four versions of ours. The harmony is our own.
 *
 * The tune is the whole song, its repeated first section written out, moved from F major up a fifth to
 * C major. The print is in 4/4 with a half-note pickup. Three times it ties a note over the bar line, and
 * the notation cannot tie. So the tune is written in 6/2, every bar holding three bars of the print, with
 * the bar lines placed so each tied note sits inside one bar. A unit is a quarter, as in the print.
 *
 * In 6/2 the tune fills only 7 bars. Common plays it twice, and the other versions three times, so each
 * reaches the meter's fewest bars. The hook is bars 1 and 2: the pickup and the opening phrase.
 *
 * The right hand never leaves its place. Finger 5 takes over each long G from finger 4, so the hand
 * spans B to G, and the phrase walks down to the thumb on B. The phrase in the middle reaches down to G
 * with finger 2 on A.
 *
 * Common plays the tune over held fifths. Rare plays it over block chords, the second time an octave up.
 * Epic rolls an Alberti bass, and plays the second time an octave up over broken chords with the pedal.
 * Legendary plays it over a stride bass, then in octaves over arpeggios, then in octaves over stride, and
 * ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's key, a fifth above the print's F major. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 6/2, in quarters: the pickup after a half bar's rest, the 16 bars of the print, and the last C. */
const tune = [
  "r:6 G5:2 G5:1 G5:1 A5:1 G5:1",
  "G5:2 E5:2 F5:2 E5:1 D5:2 C5:2 B4:1",
  "C5:2 G5:2 G5:1 G5:1 A5:1 G5:1 G5:2 E5:2",
  "F5:2 E5:1 D5:2 C5:2 B4:1 C5:2 r:1 E5:1",
  "D5:1 B4:1 C5:1 A4:1 G4:2 r:1 G5:1 G5:1 G5:1 A5:1 G5:1",
  "G5:2 E5:2 F5:2 E5:1 D5:2 C5:2 B4:1",
  "C5:2 r:10",
].join(" | ");

/** The pickup and the print's first bar, in quarters: half a bar of 6/2. Finger 5 takes the G, then 4. */
const PICKUP = "G5/5:2 G5/4:1 G5/4:1 A5/5:1 G5/4:1";

/**
 * Bars 2 to 6 of each time through, in quarters. Finger 5 takes over each long G, finger 4 drops to E,
 * and the hand walks down to the thumb on B. In bar 5 finger 5 starts on E and finger 2 takes A.
 */
const BODY = [
  "G5/5:2 E5/4:2 F5/5:2 E5/4:1 D5/3:2 C5/2:2 B4/1:1",
  `C5/2:2 ${PICKUP} G5/5:2 E5/4:2`,
  "F5/5:2 E5/4:1 D5/3:2 C5/2:2 B4/1:1 C5/2:2 r:1 E5/5:1",
  "D5/4:1 B4/2:1 C5/3:1 A4/2:1 G4/1:2 r:1 G5/5:1 G5/4:1 G5/4:1 A5/5:1 G5/4:1",
  "G5/5:2 E5/4:2 F5/5:2 E5/4:1 D5/3:2 C5/2:2 B4/1:1",
].join(" | ");

/** The last C of one time through, and the pickup of the next. */
const TURN = `C5/2:2 r:4 ${PICKUP}`;

/** `text` with every length multiplied by `times`, so a line in quarters reads in eighths or sixteenths. */
function scaled(text: string, times: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${times * Number(units)}`);
}

/** `text` an octave higher. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** `text` with each fingered note as an octave, the note under the thumb and the octave above under finger 5. */
function octaves(text: string): string {
  return text.replace(
    /([A-G][#b]?)(\d)\/\d/g,
    (_, name: string, octave: string) => `${name}${octave}+${name}${Number(octave) + 1}/1+5`,
  );
}

/** Bars of `patterns` from `letters`, such as `"CCgCGg"`: one letter per half-note beat, a space between bars. */
function beats(patterns: Record<string, string>, letters: string): string {
  return letters
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/**
 * The chord of each half-note beat of bars 2 to 6: C, G, F and A minor. A small g is G without its B,
 * under a beat where the tune sounds C, so the B never rubs against it.
 */
const BODY_CHORDS = "CCgCGg CCCFCA GGGCCC GgGCCF CCgCGg";

/** The chords of the first bar, whose first half rests. */
const FIRST_CHORDS = "rrrCCF";

/** The chords of a bar that ends one time through and starts the next. */
const TURN_CHORDS = "CCCCCF";

/** Common's left hand for one time through, in quarters: a held fifth or fourth, the thumb kept on G. */
const HELD_BODY = [
  "C3+G3/5+1:6 D3+G3/4+1:6",
  "C3+G3/5+1:12",
  "D3+G3/4+1:6 C3+G3/5+1:6",
  "D3+G3/4+1:6 C3+G3/5+1:6",
  "C3+G3/5+1:6 D3+G3/4+1:6",
].join(" | ");

/** Rare's chords in quarters: a C triad, a G triad, and G without its B. The thumb stays on G. */
const C_TRIAD = "C3+E3+G3/4+2+1";
const G_TRIAD = "B2+D3+G3/5+3+1";
const G_OPEN = "D3+G3/3+1";

/** Rare's left hand for one time through, in quarters, mostly a chord to each half bar. */
const BLOCK_BODY = [
  `${C_TRIAD}:4 ${G_OPEN}:2 ${C_TRIAD}:2 ${G_TRIAD}:2 ${G_OPEN}:2`,
  `${C_TRIAD}:6 ${C_TRIAD}:6`,
  `${G_TRIAD}:6 ${C_TRIAD}:6`,
  `${G_OPEN}:4 ${G_TRIAD}:2 ${C_TRIAD}:6`,
  `${C_TRIAD}:4 ${G_OPEN}:2 ${C_TRIAD}:2 ${G_TRIAD}:2 ${G_OPEN}:2`,
].join(" | ");

/** One beat of Alberti bass in eighths: low, high, middle, high. A small f ends on a rest for the jump down. */
const ALBERTI: Record<string, string> = {
  r: "r:4",
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  G: "B2/5:1 G3/1:1 F3/2:1 G3/1:1",
  g: "D3/4:1 G3/1:1 F3/2:1 G3/1:1",
  F: "C3/5:1 A3/1:1 F3/2:1 A3/1:1",
  A: "C3/5:1 A3/1:1 E3/2:1 A3/1:1",
  f: "C3/5:1 A3/1:1 F3/2:1 r:1",
};

/** One beat of broken chord in eighths: root, fifth and octave, then a rest for the jump. */
const BROKEN: Record<string, string> = {
  C: "C2/5:1 G2/2:1 C3/1:1 r:1",
  G: "G2/5:1 D3/2:1 G3/1:1 r:1",
  g: "G2/5:1 D3/2:1 G3/1:1 r:1",
  F: "F2/5:1 C3/2:1 F3/1:1 r:1",
  A: "A2/5:1 E3/2:1 A3/1:1 r:1",
};

/** One beat of stride in sixteenths: the root in octaves, then the chord, each an eighth with an eighth's rest. */
const STRIDE: Record<string, string> = {
  r: "r:8",
  C: "C2+C3/5+1:2 r:2 E3+G3+C4/3+2+1:2 r:2",
  G: "G1+G2/5+1:2 r:2 B2+F3+G3/5+2+1:2 r:2",
  g: "G1+G2/5+1:2 r:2 B2+F3+G3/5+2+1:2 r:2",
  F: "F1+F2/5+1:2 r:2 A2+C3+F3/5+3+1:2 r:2",
  A: "A1+A2/5+1:2 r:2 C3+E3+A3/5+3+1:2 r:2",
};

/** One beat of arpeggio in sixteenths, two octaves up from the root, then an eighth's rest for the jump. */
const ARPEGGIO: Record<string, string> = {
  C: "C2/5:1 G2/3:1 C3/2:1 E3/1:1 G3/3:1 C4/2:1 r:2",
  G: "G1/5:1 D2/3:1 G2/2:1 B2/1:1 D3/3:1 G3/2:1 r:2",
  g: "G1/5:1 D2/3:1 G2/2:1 B2/1:1 D3/3:1 G3/2:1 r:2",
  F: "F1/5:1 C2/3:1 F2/2:1 A2/1:1 C3/3:1 F3/2:1 r:2",
  A: "A1/5:1 E2/3:1 A2/2:1 C3/1:1 E3/3:1 A3/2:1 r:2",
};

/** Bars 2 to 6 in octaves in sixteenths. The C octave before the leap up to G lets go an eighth early. */
const BODY_OCTAVES = octaves(scaled(BODY, 4)).replace("C5+C6/1+5:8 G5+G6/1+5:8", "C5+C6/1+5:6 r:2 G5+G6/1+5:8");

/** The pedal for `bars` bars, pressed again on each of the six beats of `units` each. */
function pedalBeats(bars: number, units: number): string {
  return Array(bars).fill(Array(6).fill(`P:${units}`).join(" ")).join(" | ");
}

export const esIstEinRosEntsprungen: OurSong = {
  slug: "es-ist-ein-ros-entsprungen",
  title: "Es ist ein Ros entsprungen",
  source: {
    composer: "Traditional",
    died: null,
    published: 1599,
    edition:
      "Michael Praetorius's four-part setting of 1609, whose soprano carries the tune of the Speyer hymnal, printed in Cologne in 1599",
  },
  about:
    "Es ist ein Ros entsprungen means A rose has sprung up in German. " +
    "It is a church Christmas song from the 16th century. " +
    "Its tune was first printed in the Speyer hymnal, in Cologne in 1599, and its composer is unknown. " +
    "Michael Praetorius set it for four voices in 1609, and his setting spread widely.",
  funFact: "Johannes Brahms took Praetorius's melody as the starting point of a chorale prelude, the eighth of his Op. 122.",
  mythic: null,
  collection: "christmas",
  aka: ["Lo, How a Rose E'er Blooming"],
  tune: { text: tune, numerator: 6, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 150,
      numerator: 6,
      denominator: 2,
      steps: 2,
      right: [`r:6 ${PICKUP}`, BODY, TURN, BODY, "C5/2:4 r:8"].join(" | "),
      left: ["r:6 C3+G3/5+1:6", HELD_BODY, "C3+G3/5+1:12", HELD_BODY, "C3+G3/5+1:4 r:8"].join(" | "),
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first two bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 2], wait: true },
        { text: "Play bars 3 to 6 with the right hand alone. The tune dips down to G in bar 5.", hands: "right", speed: 0.6, loop: [3, 6], wait: true },
        { text: "Now the left hand alone. It holds one shape for a half bar or a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Each long G starts on finger 5. Change to finger 4 on the next G, and the hand stays put." },
        { fromBar: 2, toBar: 2, kind: "rhythm", text: "Each bar holds three bars of the old print. Count six slow beats, two quarters to each beat." },
        { fromBar: 5, toBar: 5, kind: "trick", text: "After the low G, rest a moment, then let finger 5 reach up an octave to the high G." },
      ],
      tricky: {
        3: "Finger 2 holds C, then finger 5 stretches up to G. Swap to finger 4 on the next G.",
        5: "Fingers 4 and 2 play D and B, then the thumb lands on the low G. Rest, and reach up with finger 5.",
        9: "The same stretch as bar 3: finger 5 reaches up from C to G, and finger 4 takes the next G.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 150,
      numerator: 6,
      denominator: 2,
      steps: 2,
      right: [
        `r:6 ${PICKUP}`,
        BODY,
        `C5/2:2 r:4 ${octaveUp(PICKUP)}`,
        octaveUp(BODY),
        `C6/2:2 r:4 ${PICKUP}`,
        BODY,
        "C5/2:4 r:8",
      ].join(" | "),
      left: [`r:6 ${C_TRIAD}:6`, BLOCK_BODY, `${C_TRIAD}:6 ${C_TRIAD}:6`, BLOCK_BODY, `${C_TRIAD}:6 ${C_TRIAD}:6`, BLOCK_BODY, `${C_TRIAD}:4 r:8`].join(" | "),
      skills: ["triads", "position-change"],
      practice: [
        { text: "Play the left hand alone, and press the notes of each chord together. The thumb stays on G.", hands: "left", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Play bars 7 to 13 with the right hand alone. The tune moves up an octave and back.", hands: "right", speed: 0.6, loop: [7, 13], wait: true },
        { text: "Join the hands on the first time through, slowly.", hands: "both", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 2, kind: "sound", text: "Under the tune's F, the chord shrinks to D and G. Keep the thumb on G and let the F ring." },
        { fromBar: 7, toBar: 7, kind: "trick", text: "Use the rest after the C to lift the right hand an octave higher." },
        { fromBar: 13, toBar: 13, kind: "trick", text: "The same rest brings the right hand back down, for the last time through." },
      ],
      tricky: {
        3: "Finger 5 stretches up from C to G while the left hand presses a new C chord.",
        7: "Hold the C, lift the right hand on the rest, and land finger 5 on the G an octave up.",
        13: "Hold the high C, lift on the rest, and land finger 5 back on the G below.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 112,
      numerator: 6,
      denominator: 2,
      steps: 4,
      right: [
        scaled(`r:6 ${PICKUP}`, 2),
        scaled(BODY, 2),
        scaled(`C5/2:2 r:4 ${octaveUp(PICKUP)}`, 2),
        octaveUp(scaled(BODY, 2)),
        scaled(`C6/2:2 r:4 ${PICKUP}`, 2),
        scaled(BODY, 2),
        "E4+G4+C5/1+2+5:24",
      ].join(" | "),
      left: [
        beats(ALBERTI, [FIRST_CHORDS, BODY_CHORDS, TURN_CHORDS.replace(/F$/, "f")].join(" ")),
        beats(BROKEN, [BODY_CHORDS, TURN_CHORDS].join(" ")),
        beats(ALBERTI, BODY_CHORDS),
        "C3+G3/5+1:24",
      ].join(" | "),
      pedal: [...Array(7).fill("r:24"), pedalBeats(6, 4), ...Array(5).fill("r:24"), "P:24"].join(" | "),
      skills: ["alberti-bass", "broken-chords", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [2, 4], wait: false },
        { text: "Play the broken chords of the second time alone, and lift the hand on each rest.", hands: "left", speed: 0.5, loop: [8, 13], wait: false },
        { text: "Join the hands on the first time through, slowly.", hands: "both", speed: 0.5, loop: [1, 7], wait: true },
        { text: "Play the whole song with both hands at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal in the middle part.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 7, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 8, toBar: 13, kind: "sound", text: "Change the pedal on each beat, as the left hand starts a new chord." },
        { fromBar: 13, toBar: 14, kind: "trick", text: "Both hands lift on the rest. The right hand drops an octave, and the left goes back to its Alberti bass." },
      ],
      tricky: {
        7: "The right hand leaps up an octave on the rest. The Alberti bass ends on a rest, so the left hand can drop.",
        8: "The left hand starts its broken chords on the low C. Lift it on each rest, and change the pedal on each beat.",
        13: "The right hand drops back down on the rest, while the broken chords end on F.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 100,
      numerator: 6,
      denominator: 2,
      steps: 8,
      right: [
        scaled(`r:6 ${PICKUP}`, 4),
        scaled(BODY, 4),
        scaled(`C5/2:2 r:4`, 4) + " " + octaves(scaled(PICKUP, 4)),
        BODY_OCTAVES,
        octaves(scaled(TURN, 4)),
        BODY_OCTAVES,
        "C5+E5+G5+C6/1+2+3+5:48",
      ].join(" | "),
      left: [
        beats(STRIDE, [FIRST_CHORDS, BODY_CHORDS, TURN_CHORDS].join(" ")),
        beats(ARPEGGIO, [BODY_CHORDS, TURN_CHORDS].join(" ")),
        beats(STRIDE, BODY_CHORDS),
        "C2+C3/5+1:48",
      ].join(" | "),
      pedal: ["r:24 P:8 P:8 P:8", pedalBeats(17, 8), "P:48"].join(" | "),
      skills: ["stride", "arpeggios", "octave-bass"],
      practice: [
        { text: "Play the stride bass alone: jump down for the low octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [2, 4], wait: false },
        { text: "Play the right hand's octaves alone, and keep the thumb and finger 5 an octave apart.", hands: "right", speed: 0.5, loop: [8, 13], wait: true },
        { text: "Play the arpeggios of the second time in the left hand alone.", hands: "left", speed: 0.5, loop: [8, 13], wait: false },
        { text: "Join the hands on the whole song at three quarters speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 7, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 8, toBar: 13, kind: "sound", text: "The arpeggios climb two octaves on each beat. Keep them soft, so the octaves above ring out." },
        { fromBar: 14, toBar: 19, kind: "fingering", text: "Keep the thumb and finger 5 an octave apart, and let the wrist bounce." },
      ],
      tricky: {
        9: "Let go of the C octave an eighth early, so the hand lands on the G octave in time.",
        11: "The octaves step down to the low G, then leap up an octave after the rest.",
        13: "Hold the C octave, then land the G octave as the arpeggios end on F.",
      },
    },
  },
};

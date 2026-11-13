/**
 * *Vltava*: the river's theme from Smetana's symphonic poem, in four versions of ours.
 *
 * The source is a scanned book of orchestral themes on Wikimedia Commons, `File:Orchesterwerke Romantik
 * Themen.pdf`, which prints *Die Moldau* on its page 829. The print is in 6/8, Allegro comodo, non
 * agitato, in E minor. After two bars of flute sixteenths, the theme enters with an eighth upbeat B,
 * marked p dolce. The tune is that upbeat and the eight bars that follow, to the E of the ninth.
 *
 * The tune writes every eighth as a quarter, so each print bar is a bar of 6/4. Bar 1 holds the upbeat
 * after a rest. Its range is B4 to C6, every note lies in E minor, and the hook is all nine bars.
 *
 * Every version writes the tune in 6/4 eighths, one bar per print bar, and then plays 8 bars of our own.
 * Epic and Legendary then play the tune again in another setting. Our chords are E minor, with A minor
 * under the high C and the long A, and B major under the F sharps before the close. Our own bars use the
 * same three chords. Every version keeps E minor and closes on it.
 *
 * Common plays the tune over an open fifth and two other held shapes, with one change of hand position.
 * Rare plays a long bass note and a short note or two-note chord in each half bar, the lilt of the tune.
 * Epic rolls a broken chord under the tune with the pedal, then plays it again in thirds and sixths.
 * Legendary plays an octave bass and a chord on each beat, and arpeggios over two octaves under our own
 * bars. It then plays the tune again in chords of three and four notes.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const E_MINOR: Key = { tonic: 4, mode: "minor" };

/** The tune in 6/4, in quarters, which are the print's eighths: one bar per print bar, after the upbeat. */
const tune = "r:5 B4:1 | E5:2 F#5:1 G5:2 A5:1 | B5:2 B5:1 B5:3 | C6:3 C6:3 | B5:3 B5:2 B5:1 | A5:3 A5:2 A5:1 | G5:2 A5:1 G5:2 G5:1 | F#5:3 F#5:2 F#5:1 | E5:2 r:4";

/**
 * The tune in 6/4 eighths with the hand still, for Common and Rare. The A of bar 2 is cut short, so the
 * hand moves up a key in the rest. Finger 2 takes over the last F sharp, so the thumb lands on E.
 */
const TUNE_STILL = [
  "r:10 B4/1:2 | E5/2:4 F#5/3:2 G5/4:4 A5/5:1 r:1 | B5/4:4 B5/4:2 B5/4:6 | C6/5:6 C6/5:6",
  "B5/4:6 B5/4:4 B5/4:2 | A5/3:6 A5/3:4 A5/3:2 | G5/2:4 A5/3:2 G5/2:4 G5/2:2 | F#5/1:6 F#5/1:4 F#5/2:2",
].join(" | ");

/** The tune in 6/4 eighths with the thumb passing under to G, for Epic and Legendary, ending before the last E. */
const TUNE_UNDER = [
  "r:10 B4/1:2 | E5/2:4 F#5/3:2 G5/1:4 A5/2:2 | B5/3:4 B5/3:2 B5/3:6 | C6/4:6 C6/4:6",
  "B5/3:6 B5/3:4 B5/3:2 | A5/2:6 A5/2:4 A5/2:2 | G5/1:4 A5/2:2 G5/1:4 G5/2:2 | F#5/1:6 F#5/1:4 F#5/2:2",
].join(" | ");

/** Our bars 9 to 16 in quarters, in one hand position from E to B, for Common. Bar 9 holds the tune's last E. */
const OWN_COMMON = [
  "E5/1:12 | G5/3:4 F#5/2:2 E5/1:4 F#5/2:2 | A5/4:4 G5/3:2 E5/1:6 | G5/3:4 A5/4:2 B5/5:6",
  "A5/4:4 F#5/2:2 B5/5:6 | B5/5:4 A5/4:2 G5/3:4 F#5/2:2 | E5/1:4 G5/3:2 A5/4:6 | B5/5:4 A5/4:2 F#5/2:6",
].join(" | ");

/** Our bars 9 to 16 for Rare, in the same hand position, with a few eighths. */
const OWN_RARE = [
  "E5/1:12 | G5/3:4 F#5/2:1 G5/3:1 E5/1:4 F#5/2:2 | A5/4:4 G5/3:2 E5/1:6 | G5/3:2 A5/4:2 B5/5:2 A5/4:1 G5/3:1 B5/5:4",
  "A5/4:4 F#5/2:2 B5/5:6 | B5/5:4 A5/4:1 G5/3:1 F#5/2:2 G5/3:1 A5/4:1 G5/3:2 | E5/1:4 F#5/2:1 G5/3:1 A5/4:6 | B5/5:4 A5/4:2 F#5/2:6",
].join(" | ");

/** Our bars 9 to 17 in eighths for Epic and Legendary, with the thumb passing under. Bar 17 ends on the upbeat B. */
const OWN_EIGHTHS = [
  "E5/1:12",
  "G5/3:2 F#5/2:1 E5/1:1 F#5/2:1 G5/3:1 B5/5:4 A5/4:2 | C6/5:2 B5/4:1 A5/3:1 G5/2:1 A5/3:1 E5/1:6",
  "E5/1:1 F#5/2:1 G5/3:1 A5/1:1 B5/2:1 C6/3:1 B5/2:4 G5/1:2 | F#5/2:2 A5/4:1 B5/5:1 A5/4:1 F#5/2:1 D#5/1:4 F#5/2:2",
  "B5/5:2 A5/4:1 G5/3:1 F#5/2:1 E5/1:1 G5/3:4 B5/5:2 | C6/5:2 B5/4:1 A5/3:1 E5/1:2 A5/4:4 C6/5:2",
  "B5/5:2 A5/4:1 F#5/2:1 D#5/1:2 F#5/2:4 A5/4:2 | G5/3:4 F#5/2:2 E5/1:4 B4/1:2",
].join(" | ");

/** Epic's tune again in eighths, with a third, a fourth or a sixth under each note. */
const EPIC_TUNE_AGAIN = [
  "B4+E5/1+3:4 D5+F#5/1+3:2 E5+G5/2+4:4 F#5+A5/3+5:2 | G5+B5/3+5:4 G5+B5/3+5:2 G5+B5/3+5:6",
  "A5+C6/3+5:6 E5+C6/1+5:6 | G5+B5/3+5:6 G5+B5/3+5:4 G5+B5/3+5:2",
  "E5+A5/1+4:6 C5+A5/1+5:4 E5+A5/1+4:2 | E5+G5/1+3:4 F#5+A5/2+4:2 E5+G5/1+3:4 B4+G5/1+5:2",
  "D#5+F#5/1+3:6 D#5+F#5/1+3:4 A4+F#5/1+5:2 | G4+B4+E5/1+2+5:12",
].join(" | ");

/** Legendary's tune again in eighths, in chords of three and four notes with the tune on top. */
const LEGENDARY_TUNE_AGAIN = [
  "G4+B4+E5/1+2+5:4 A4+C5+F#5/1+2+5:2 B4+E5+G5/1+3+5:4 C5+E5+A5/1+3+5:2",
  "E5+G5+B5/1+3+5:4 B5/5:2 B4+E5+G5+B5/1+2+3+5:6",
  "C5+E5+A5+C6/1+2+3+5:6 E5+A5+C6/1+3+5:6",
  "B4+E5+G5+B5/1+2+3+5:6 E5+G5+B5/1+2+4:4 G5+B5/2+5:2",
  "C5+E5+A5/1+2+5:6 C5+E5+A5/1+2+5:4 E5+A5/2+5:2",
  "B4+E5+G5/1+2+5:4 C5+E5+A5/1+2+5:2 B4+E5+G5/1+2+5:4 B4+E5+G5/1+2+5:2",
  "B4+D#5+F#5/1+2+4:6 A4+D#5+F#5/1+2+4:4 B4+F#5/1+4:1 r:1",
  "E4+G4+B4+E5/1+2+3+5:12",
].join(" | ");

/** Bars of `patterns` from `chords`, such as `"eeaa"`: one letter per half bar, two per bar. */
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

/** The chords under tune bars 2 to 9, two per bar: e, a and b are E minor, A minor and B major. */
const TUNE_CHORDS = "eeeeaaeeaaeebbee";

/** The chords under our bars 10 to 17, two per bar. */
const OWN_CHORDS = "eeaaeebbeeaabbee";

/** Common's held shapes in eighths, a whole bar each, with the hand still: E3 under finger 5, C4 under the thumb. */
const HELD: Record<string, string> = {
  e: "E3+B3/5+2:12",
  a: "E3+A3/5+3:12",
  b: "F#3+B3/4+2:12",
};

/** Rare's half bar in eighths: a long bass note, then a short chord, in the same hand place as Common. */
const LILT: Record<string, string> = {
  e: "E3/5:4 B3/2:2",
  a: "E3/5:4 A3+C4/3+1:2",
  b: "F#3/4:4 A3+B3/2+1:2",
};

/** Epic's half bar in eighths: a broken chord near E3, so a beat never sounds the note that rubs against the tune. */
const BROKEN: Record<string, string> = {
  e: "E3/5:1 G3/3:1 B3/1:1 G3/3:1 B3/1:1 G3/3:1",
  a: "E3/5:1 C4/1:1 A3/2:1 C4/1:1 A3/2:1 C4/1:1",
  b: "D#3/5:1 F#3/3:1 B3/1:1 F#3/3:1 B3/1:1 F#3/3:1",
};

/** Legendary's half bar in eighths: an octave on the beat, a chord on the next two, each with a rest to jump. */
const STRIDE: Record<string, string> = {};
for (const [chord, [octave, triad]] of Object.entries({
  e: ["E2+E3/5+1", "B2+E3+G3/5+2+1"],
  a: ["A1+A2/5+1", "A2+C3+E3/5+3+1"],
  b: ["B1+B2/5+1", "B2+D#3+F#3/5+3+1"],
})) {
  STRIDE[chord] = `${octave}:1 r:1 ${triad}:1 r:1 ${triad}:1 r:1`;
}

/** The six notes of each chord over two octaves, for Legendary's arpeggios. */
const WIDE_NOTES: Record<string, string> = {
  e: "E2 B2 E3 G3 B3 E4",
  a: "A1 E2 A2 C3 E3 A3",
  b: "B1 F#2 B2 D#3 F#3 B3",
};

/** Legendary's bar of arpeggio in eighths: up two octaves, back down to the fifth, then a rest to jump. */
const WIDE: Record<string, string> = {};
for (const [chord, notes] of Object.entries(WIDE_NOTES)) {
  const pitches = notes.split(" ");
  const steps: [number, number][] = [[0, 5], [1, 2], [2, 1], [3, 3], [4, 2], [5, 1], [4, 2], [3, 3], [2, 1], [1, 2]];
  WIDE[chord] = `${steps.map(([at, finger]) => `${pitches[at]}/${finger}:1`).join(" ")} r:2`;
}

/** The pedal of Epic and Legendary in eighths: up in bar 1, changed at each half bar, held through the last bar. */
const PEDAL = `r:12 | ${Array<string>(23).fill("P:6 P:6").join(" | ")} | P:12`;

/** The left hand of Common: rest in bar 1, then one held shape per bar. */
const COMMON_LEFT = ["r:12", ...[..."eeaeaebeeaebeabe"].map((chord) => HELD[chord])].join(" | ");

export const vltava: OurSong = {
  slug: "vltava",
  title: "Vltava",
  aka: ["Die Moldau", "The Moldau", "Má vlast", "Moldau"],
  source: {
    composer: "Bedřich Smetana",
    died: 1884,
    published: 1875,
    edition:
      "Má vlast, Vltava, the theme's upbeat and bars 1 to 8, as a scanned book of orchestral themes on Wikimedia Commons prints it on its page 829; Vltava was first played in 1875",
  },
  about:
    "Smetana wrote Vltava in 1874, the second of six symphonic poems in his cycle Má vlast, My Country. " +
    "Its music paints the river that flows through Prague. " +
    "Terrence Malick's 2011 film The Tree of Life uses it.",
  funFact: "Its famous tune is an adaptation of La Mantovana, a melody attributed to the Italian Renaissance tenor Giuseppe Cenci.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 6, denominator: 4, key: E_MINOR, hookBars: [1, 9] },
  versions: {
    common: {
      key: E_MINOR,
      bpm: 120,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: `${TUNE_STILL} | ${OWN_COMMON} | E5/1:12`,
      left: COMMON_LEFT,
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 5 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play bars 5 to 9 with the right hand alone, where the tune walks down to E.", hands: "right", speed: 0.6, loop: [5, 9], wait: true },
        { text: "Now the left hand alone. It holds one shape for a whole bar, and never moves.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first nine bars, slowly.", hands: "both", speed: 0.7, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Start with the thumb on B. Fingers 2 to 5 then climb from E to A." },
        { fromBar: 2, toBar: 3, kind: "trick", text: "Let go of A a little early. In the short gap, move the hand up one key, with finger 4 on B." },
        { fromBar: 1, toBar: 17, kind: "rhythm", text: "Count six beats in a bar: long, short, long, short. The river flows on and never hurries." },
      ],
      tricky: {
        3: "Finger 4 plays B three times. The hand has just moved up one key, so finger 5 waits over C.",
        5: "After the two high Cs, finger 4 plays B again. Keep the hand still, and let the fingers walk down.",
        8: "Play the first two F sharps with the thumb, and the third with finger 2. The thumb is then free for E.",
      },
    },
    rare: {
      key: E_MINOR,
      bpm: 112,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: `${TUNE_STILL} | ${OWN_RARE} | E5+G5/1+3:12`,
      left: `r:12 | ${bars(LILT, TUNE_CHORDS)} | ${bars(LILT, OWN_CHORDS.slice(0, -2))} | E3+B3/5+2:12`,
      skills: ["two-note-chords", "eighth-notes"],
      practice: [
        { text: "Play the left hand alone: a long low note, then a short note or chord.", hands: "left", speed: 0.6, loop: [2, 5], wait: true },
        { text: "Play the right hand alone on the first nine bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Join the hands on the first nine bars, slowly.", hands: "both", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "rhythm", text: "Each half bar has a long note and a short one, in both hands. Feel the swing: long, short." },
        { fromBar: 2, toBar: 3, kind: "trick", text: "Let go of A a little early. In the short gap, move the hand up one key, with finger 4 on B." },
        { fromBar: 17, toBar: 17, kind: "fingering", text: "End with E and G together. Fingers 1 and 3 press them as one." },
      ],
      tricky: {
        3: "Finger 4 plays B three times after the hand moves up. The left hand plays a long E, then a short B.",
        5: "Finger 4 plays B three times again, and finger 3 waits over A for the next bar.",
        12: "Fingers 3, 4 and 5 climb from G to B. Then A and G step back quickly before the long B.",
      },
    },
    epic: {
      key: E_MINOR,
      bpm: 132,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [TUNE_UNDER, OWN_EIGHTHS, EPIC_TUNE_AGAIN].join(" | "),
      left: `r:12 | ${bars(BROKEN, `${TUNE_CHORDS}${OWN_CHORDS}${TUNE_CHORDS.slice(0, -2)}`)} | E3+G3+B3/5+3+1:12`,
      pedal: PEDAL,
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone until the broken chords flow by themselves.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand alone on bars 10 to 17, and pass the thumb under on the way up.", hands: "right", speed: 0.5, loop: [10, 17], wait: true },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [18, 25], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 2, toBar: 2, kind: "fingering", text: "Pass the thumb under to G after F sharp. Fingers 2, 3 and 4 then reach A, B and C." },
        { fromBar: 18, toBar: 25, kind: "sound", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        16: "The thumb takes D sharp, and the left hand plays a low D sharp under it. Both lead back home to E.",
        17: "Fingers 3, 2 and 1 walk down to E. Then the thumb jumps down to B, the upbeat of the tune.",
        24: "Fingers 1 and 3 hold D sharp and F sharp. Then the thumb stretches down to A for the sixth.",
      },
    },
    legendary: {
      key: E_MINOR,
      bpm: 144,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [TUNE_UNDER, OWN_EIGHTHS, LEGENDARY_TUNE_AGAIN].join(" | "),
      left: [
        "r:12",
        bars(STRIDE, TUNE_CHORDS),
        [..."eaebeabe"].map((chord) => WIDE[chord]).join(" | "),
        bars(STRIDE, TUNE_CHORDS.slice(0, -2)),
        "E1+E2/5+1:12",
      ].join(" | "),
      pedal: PEDAL,
      markedClashBars: [2, 18, 23],
      skills: ["octave-bass", "arpeggios", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then a chord twice, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [2, 5], wait: true },
        { text: "Play the left hand's arpeggios alone. The thumb passes under, and finger 3 crosses over.", hands: "left", speed: 0.5, loop: [10, 17], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [18, 25], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "trick", text: "Use the short rest after each octave and chord to jump to the next one." },
        { fromBar: 10, toBar: 17, kind: "sound", text: "Let the arpeggios flow softly, like the river under the tune." },
        { fromBar: 18, toBar: 23, kind: "sound", text: "A few chords rub against the bass on purpose. Play the top note of each chord a little louder." },
      ],
      tricky: {
        20: "Spread the hand over C, E, A and C for the first chord. Then the thumb moves up to E for the second.",
        22: "The A minor chord sounds three times. Keep the hand loose, and play the last one with fingers 2 and 5.",
        24: "Hold the B major chords, then use the short rest to spread the hand over E, G, B and E.",
      },
    },
  },
  de: {
    about:
      "Smetana schrieb Die Moldau 1874, die zweite von sechs sinfonischen Dichtungen in seinem Zyklus Má vlast, Mein Vaterland. " +
      "Ihre Musik malt den Fluss, der durch Prag fließt. " +
      "Terrence Malicks Film The Tree of Life aus dem Jahr 2011 verwendet sie.",
    funFact: "Ihre berühmte Melodie ist eine Bearbeitung von La Mantovana, einer Melodie, die dem italienischen Renaissance-Tenor Giuseppe Cenci zugeschrieben wird.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 5 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 9 nur mit der rechten Hand. Dort steigt die Melodie hinunter zum E.",
          "Jetzt die linke Hand allein. Sie hält jeden Griff einen ganzen Takt lang und bewegt sich nie.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Fang mit dem Daumen auf dem H an. Dann steigen Finger 2 bis 5 vom E bis zum A.",
          "Lass das A etwas früher los. In der kurzen Lücke rückt die Hand eine Taste höher, mit Finger 4 auf dem H.",
          "Zähl sechs Schläge in jedem Takt: lang, kurz, lang, kurz. Der Fluss fließt weiter und hetzt nie.",
        ],
        tricky: {
          3: "Finger 4 spielt dreimal das H. Die Hand ist gerade eine Taste höher gerückt, also wartet Finger 5 über dem C.",
          5: "Nach den zwei hohen C spielt Finger 4 wieder das H. Halt die Hand still, und lass die Finger hinuntergehen.",
          8: "Spiel die ersten zwei Fis mit dem Daumen und das dritte mit Finger 2. Dann ist der Daumen frei für das E.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: erst einen langen tiefen Ton, dann einen kurzen Ton oder Akkord.",
          "Spiel die ersten neun Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Jeder halbe Takt hat einen langen und einen kurzen Ton, in beiden Händen. Spür das Schaukeln: lang, kurz.",
          "Lass das A etwas früher los. In der kurzen Lücke rückt die Hand eine Taste höher, mit Finger 4 auf dem H.",
          "Am Ende spielst du E und G zusammen. Finger 1 und 3 drücken sie wie einen Ton.",
        ],
        tricky: {
          3: "Nachdem die Hand höher gerückt ist, spielt Finger 4 dreimal das H. Die linke Hand spielt ein langes E, dann ein kurzes H.",
          5: "Finger 4 spielt wieder dreimal das H, und Finger 3 wartet über dem A auf den nächsten Takt.",
          12: "Finger 3, 4 und 5 steigen vom G zum H. Dann gehen A und G schnell zurück vor dem langen H.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein, bis die gebrochenen Akkorde von selbst fließen.",
          "Spiel die Takte 10 bis 17 nur mit der rechten Hand, und setz auf dem Weg nach oben den Daumen unter.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Setz nach dem Fis den Daumen unter zum G. Dann erreichen Finger 2, 3 und 4 das A, das H und das C.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          16: "Der Daumen nimmt das Dis, und die linke Hand spielt ein tiefes Dis darunter. Beide führen zurück zum E.",
          17: "Finger 3, 2 und 1 gehen hinunter zum E. Dann springt der Daumen hinunter zum H, dem Auftakt der Melodie.",
          24: "Finger 1 und 3 halten Dis und Fis. Dann streckt sich der Daumen hinunter zum A für die Sexte.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann zweimal einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Arpeggios der linken Hand allein. Der Daumen geht unter, und Finger 3 kreuzt darüber.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause nach jeder Oktave und jedem Akkord, um zum nächsten Griff zu springen.",
          "Lass die Arpeggios leise fließen, wie den Fluss unter der Melodie.",
          "Ein paar Akkorde reiben sich absichtlich am Bass. Spiel den oberen Ton jedes Akkords etwas lauter.",
        ],
        tricky: {
          20: "Spann die Hand für den ersten Akkord über C, E, A und C. Dann rückt der Daumen für den zweiten hinauf zum E.",
          22: "Der a-Moll-Akkord klingt dreimal. Halt die Hand locker, und spiel den letzten mit Finger 2 und 5.",
          24: "Halt die H-Dur-Akkorde, und nutz dann die kurze Pause, um die Hand über E, G, H und E zu spannen.",
        },
      },
    },
  },
};

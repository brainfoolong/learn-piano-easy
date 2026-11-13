/**
 * *Spanish Ladies*: the traditional sailors' song, in four versions of ours.
 *
 * The source is the score in Wikipedia's Spanish Ladies article. The print is in 3/4, in E minor, in
 * quarters and eighths, and opens with a quarter upbeat B. The tune is the first half of the verse, to
 * the held F sharp.
 *
 * The tune writes every print eighth as a quarter, so each print bar is a bar of 3/2. Bar 1 holds the
 * upbeat after a rest. Its range is B3 to A4, every note lies in E minor, and the hook is bars 1 to 5.
 *
 * Every version writes the tune in 3/2 eighths, one bar per print bar, and then plays 8 bars of our own.
 * Epic and Legendary then play the tune again an octave up in another setting. Our chords are E minor,
 * with G major under the low Bs, C major under the high A and B major under the held F sharp. Our own
 * bars add A minor. Under E minor, no left-hand beat sounds G, so no G rubs against the tune's F sharps. Every
 * version keeps E minor and closes on it.
 *
 * Common plays the tune over held bass notes and open fifths, with one change of hand position at a short
 * rest. Rare plays a waltz bass of a low note and two lighter notes or chords, and adds eighths and
 * two-note chords. Epic plays an Alberti bass under the tune with the pedal, runs with the thumb under,
 * then plays the tune again in thirds and sixths. Legendary plays a stride bass and arpeggios over two
 * octaves, then plays the tune again in chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const E_MINOR: Key = { tonic: 4, mode: "minor" };

/** The tune in 3/2, in quarters, which are the print's eighths: one bar per print bar, after the upbeat. */
const tune = "r:4 B3:2 | E4:2 E4:2 F#4:2 | E4:4 E4:1 F#4:1 | G4:2 F#4:2 E4:2 | E4:1 D4:1 B3:2 B3:2 | E4:2 E4:2 F#4:2 | E4:3 E4:1 F#4:2 | G4:2 A4:2 G4:2 | F#4:4 r:2";

/**
 * The tune in 3/2 eighths for Common and Rare. The hand lies from B to G, then moves up to E in the short
 * rest after the low Bs of bar 5.
 */
const TUNE_STILL = [
  "r:8 B3/1:4 | E4/3:4 E4/3:4 F#4/4:4 | E4/3:8 E4/3:2 F#4/4:2 | G4/5:4 F#4/4:4 E4/3:4",
  "E4/3:2 D4/2:2 B3/1:4 B3/1:3 r:1 | E4/1:4 E4/1:4 F#4/2:4 | E4/1:6 E4/1:2 F#4/2:4 | G4/3:4 A4/4:4 G4/3:4 | F#4/2:8 r:4",
].join(" | ");

/** The tune in 3/2 eighths for Epic and Legendary. From bar 6, finger 2 reaches up to E, so finger 5 finds A. */
const TUNE_REACH = [
  "r:8 B3/1:4 | E4/3:4 E4/3:4 F#4/4:4 | E4/3:8 E4/3:2 F#4/4:2 | G4/5:4 F#4/4:4 E4/3:4",
  "E4/3:2 D4/2:2 B3/1:4 B3/1:4 | E4/2:4 E4/2:4 F#4/3:4 | E4/2:6 E4/2:2 F#4/3:4 | G4/4:4 A4/5:4 G4/4:4 | F#4/3:8 r:4",
].join(" | ");

/** Common's bars 10 to 17 in quarters, in one hand position from E to B. */
const OWN_COMMON = [
  "B4/5:4 A4/4:4 G4/3:4 | A4/4:8 E4/1:4 | F#4/2:8 A4/4:4 | G4/3:4 F#4/2:4 E4/1:4",
  "G4/3:4 A4/4:4 G4/3:4 | E4/1:4 G4/3:4 B4/5:4 | A4/4:4 B4/5:4 F#4/2:4 | E4/1:12",
].join(" | ");

/** Rare's bars 10 to 17 in the same hand position, with a few eighths and two-note chords. */
const OWN_RARE = [
  "B4/5:4 A4/4:2 G4/3:2 F#4/2:2 G4/3:2 | E4+A4/1+4:8 E4/1:4 | F#4/2:6 G4/3:1 A4/4:1 F#4/2:4",
  "G4/3:4 F#4/2:2 E4/1:2 E4+G4/1+3:4 | G4/3:4 A4/4:2 G4/3:2 E4+G4/1+3:4 | E4/1:2 F#4/2:2 G4/3:2 A4/4:2 B4/5:4",
  "A4/4:2 G4/3:2 F#4/2:4 F#4+A4/2+4:4 | E4+G4/1+3:12",
].join(" | ");

/** Our bars 10 to 17 in eighths for Epic and Legendary, with the thumb passing under. Bar 17 ends on the upbeat B. */
const OWN_EIGHTHS = [
  "E4/1:2 F#4/2:1 G4/3:1 A4/4:2 B4/5:2 A4/4:1 G4/3:1 E4/1:2",
  "E4/1:1 F#4/2:1 G4/3:1 A4/1:1 B4/2:1 C5/3:1 B4/2:2 A4/1:4",
  "B4/2:4 A4/1:2 B4/2:2 D#5/4:2 B4/2:2",
  "E5/5:4 D5/4:1 C5/3:1 B4/2:2 A4/1:2 B4/2:2",
  "C5/3:4 A4/1:2 B4/2:1 A4/1:1 G4/3:2 E4/1:2",
  "A4/4:4 G4/3:1 F#4/2:1 E4/1:2 A4/4:4",
  "B4/5:2 A4/4:1 G4/3:1 F#4/2:2 D#4/1:4 F#4/2:2",
  "G4/3:2 F#4/2:2 E4/1:5 r:1 B4/2:2",
].join(" | ");

/** Epic's tune again an octave up in eighths, with a third, a fourth or a sixth under each note. */
const EPIC_TUNE_AGAIN = [
  "G4+E5/1+4:4 G4+E5/1+4:4 A4+F#5/1+5:4 | G4+E5/1+4:8 G4+E5/1+4:2 A4+F#5/1+5:2",
  "B4+G5/1+5:4 B4+F#5/1+4:4 B4+E5/1+3:4 | G4+E5/1+5:2 G4+D5/1+4:2 G4+B4/1+2:4 D4+B4/1+5:4",
  "G4+E5/1+5:4 B4+E5/2+5:4 A4+F#5/1+5:4 | G4+E5/1+4:6 G4+E5/1+4:2 A4+F#5/1+5:4",
  "C5+G5/1+5:4 C5+A5/1+5:4 C5+G5/1+5:4 | B4+D#5+F#5/1+2+4:8 r:4",
  "G4+B4+E5/1+2+5:12",
].join(" | ");

/** Legendary's tune again an octave up in eighths, in chords of two and three notes with the tune on top. */
const LEGENDARY_TUNE_AGAIN = [
  "G4+B4+E5/1+2+5:4 G4+B4+E5/1+2+5:4 B4+D5+F#5/1+2+5:4 | G4+B4+E5/1+2+5:8 B4+E5/2+5:2 B4+F#5/1+5:2",
  "B4+E5+G5/1+2+5:4 B4+D5+F#5/1+2+5:4 G4+B4+E5/1+2+5:4 | G4+B4+E5/1+2+5:2 G4+B4+D5/1+2+4:2 G4+B4/1+3:4 G4+B4/1+3:4",
  "G4+B4+E5/1+2+5:4 G4+B4+E5/1+2+5:4 B4+D5+F#5/1+2+5:4 | G4+B4+E5/1+2+5:6 B4+E5/2+5:2 B4+D5+F#5/1+2+5:4",
  "C5+E5+G5/1+2+5:4 C5+E5+A5/1+2+5:4 C5+E5+G5/1+2+5:4 | B4+D#5+F#5/1+2+4:8 r:4",
  "E4+G4+B4+E5/1+2+3+5:12",
].join(" | ");

/** Bars of `patterns` from `chords`, such as `"eecg"`: one letter per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  return [...chords]
    .map((chord) => {
      const pattern = patterns[chord];
      if (pattern === undefined) throw new Error(`No pattern for chord ${chord}`);
      return pattern;
    })
    .join(" | ");
}

/** The chords under tune bars 2 to 9, one per bar: e, c, g and b are E minor, C major, G major and B major. */
const TUNE_CHORDS = "eeegeecb";

/** The chords under our bars 10 to 17 for Common and Rare, one per bar: a is A minor. */
const OWN_CHORDS = "eabecebe";

/** The chords under our bars 10 to 17 for Epic and Legendary. */
const OWN_EIGHTH_CHORDS = "eabecabe";

/** Common's held shapes in eighths, a whole bar each, with the hand still from E3 to B3. */
const HELD: Record<string, string> = {
  e: "E3+B3/5+1:12",
  a: "E3+A3/5+2:12",
  c: "E3+G3/5+3:12",
  g: "G3/3:12",
  b: "F#3+B3/4+1:12",
};

/** Rare's bar of waltz bass in eighths: a low note for a beat, then a lighter note or two-note chord on each other beat. */
const WALTZ: Record<string, string> = {
  e: "E3/5:4 B3/1:4 B3/1:4",
  a: "E3/5:4 A3+C4/2+1:4 A3+C4/2+1:4",
  c: "E3/5:4 G3+C4/3+1:4 G3+C4/3+1:4",
  g: "D3/5:4 G3+B3/2+1:4 G3+B3/2+1:4",
  b: "D#3/5:4 F#3+B3/3+1:4 F#3+B3/3+1:4",
};

/**
 * Epic's bar of Alberti bass in eighths: low, high, middle, high, three times. Each beat sounds the low
 * note, so the third never rubs against an F sharp of the tune. G major stands on its B.
 */
const ALBERTI: Record<string, string> = {};
for (const [chord, [low, high, middle]] of Object.entries({
  e: ["E3", "B3", "G3"],
  a: ["A2", "E3", "C3"],
  c: ["C3", "G3", "E3"],
  g: ["B2", "G3", "D3"],
  b: ["B2", "F#3", "D#3"],
})) {
  ALBERTI[chord] = Array<string>(3).fill(`${low}/5:1 ${high}/1:1 ${middle}/3:1 ${high}/1:1`).join(" ");
}

/** Legendary's bar of stride in eighths: an octave on the first beat, a chord on the next two, each with a rest to jump. */
const STRIDE: Record<string, string> = {};
for (const [chord, [octave, triad]] of Object.entries({
  e: ["E2+E3/5+1", "B2+E3/2+1"],
  a: ["A1+A2/5+1", "A2+C3+E3/5+3+1"],
  c: ["C2+C3/5+1", "G2+C3+E3/5+2+1"],
  g: ["G1+G2/5+1", "G2+B2+D3/5+3+1"],
  b: ["B1+B2/5+1", "B2+D#3+F#3/5+3+1"],
})) {
  STRIDE[chord] = `${octave}:3 r:1 ${triad}:3 r:1 ${triad}:3 r:1`;
}

/** The six notes of each chord over two octaves, for Legendary's arpeggios. */
const WIDE_NOTES: Record<string, string> = {
  e: "E2 B2 E3 G3 B3 E4",
  a: "A1 E2 A2 C3 E3 A3",
  c: "C2 G2 C3 E3 G3 C4",
  b: "B1 F#2 B2 D#3 F#3 B3",
};

/** Legendary's bar of arpeggio in eighths: up two octaves, back down to the fifth, then a rest to jump. */
const WIDE: Record<string, string> = {};
for (const [chord, notes] of Object.entries(WIDE_NOTES)) {
  const pitches = notes.split(" ");
  const steps: [number, number][] = [[0, 5], [1, 2], [2, 1], [3, 3], [4, 2], [5, 1], [4, 2], [3, 3], [2, 1], [1, 2]];
  WIDE[chord] = `${steps.map(([at, finger]) => `${pitches[at]}/${finger}:1`).join(" ")} r:2`;
}

/** The pedal of Epic and Legendary in eighths: up in bar 1, changed at each bar, held through the last bar. */
const PEDAL = `r:12 | ${Array<string>(25).fill("P:12").join(" | ")}`;

export const spanishLadies: OurSong = {
  slug: "spanish-ladies",
  title: "Spanish Ladies",
  source: {
    composer: "Traditional",
    died: null,
    published: 1840,
    edition:
      "The verse as the score in Wikipedia's Spanish Ladies article prints it; the song's earliest dated print, Marryat's novel Poor Jack (1840), gives its words in full",
  },
  about:
    "Spanish Ladies is a traditional sailors' song about a crew sailing home to England from Spain. " +
    "A version from 1769 survives in a ship's logbook.",
  funFact: "In the 1975 film Jaws, the shark hunter Quint sings a whalers' version of the song.",
  mythic: null,
  collection: "sea",
  tune: { text: tune, numerator: 3, denominator: 2, steps: 2, key: E_MINOR, hookBars: [1, 5] },
  versions: {
    common: {
      key: E_MINOR,
      bpm: 160,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: `${TUNE_STILL} | ${OWN_COMMON}`,
      left: ["r:12", bars(HELD, TUNE_CHORDS), bars(HELD, OWN_CHORDS)].join(" | "),
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 5 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play bars 5 to 9 with the right hand alone, and move the hand up in the short rest.", hands: "right", speed: 0.6, loop: [5, 9], wait: true },
        { text: "Now the left hand alone. It holds one shape for a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first nine bars, slowly.", hands: "both", speed: 0.7, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Start with the thumb on the low B. Finger 3 then plays E." },
        { fromBar: 5, toBar: 6, kind: "trick", text: "Let go of the second B a little early. In the gap, move the thumb up to E." },
        { fromBar: 1, toBar: 17, kind: "rhythm", text: "Count three slow beats in a bar, like a ship rolling on the waves." },
      ],
      tricky: {
        4: "Finger 5 plays G, then fingers 4 and 3 walk down to E. The left hand holds E and B.",
        6: "The thumb now plays E twice, and finger 2 plays F sharp. The hand has moved up to E.",
        16: "Finger 4 plays A and finger 5 plays B. Then finger 2 drops to F sharp, over the left hand's B.",
      },
    },
    rare: {
      key: E_MINOR,
      bpm: 160,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: `${TUNE_STILL} | ${OWN_RARE}`,
      left: ["r:12", bars(WALTZ, TUNE_CHORDS), bars(WALTZ, OWN_CHORDS.slice(0, -1)), "E3+G3+B3/5+3+1:12"].join(" | "),
      skills: ["waltz-bass", "two-note-chords", "eighth-notes"],
      practice: [
        { text: "Play the left hand alone: a low note, then a lighter note or chord twice.", hands: "left", speed: 0.6, loop: [2, 5], wait: true },
        { text: "Play the right hand alone on the first nine bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Join the hands on the first nine bars, slowly.", hands: "both", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 17, kind: "sound", text: "Play the low note of the waltz bass a little louder than the two chords after it." },
        { fromBar: 5, toBar: 6, kind: "trick", text: "Let go of the second B a little early. In the gap, move the thumb up to E." },
        { fromBar: 17, toBar: 17, kind: "fingering", text: "End with E and G together. Fingers 1 and 3 press them as one." },
      ],
      tricky: {
        6: "The thumb now plays E twice, and finger 2 plays F sharp. The left hand plays a low E, then B twice.",
        10: "Fingers 5, 4, 3 and 2 walk down from B to F sharp. Then finger 3 steps back up to G.",
        16: "Fingers 4, 3 and 2 walk down to F sharp. Then fingers 2 and 4 press F sharp and A together.",
      },
    },
    epic: {
      key: E_MINOR,
      bpm: 160,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: [TUNE_REACH, OWN_EIGHTHS, EPIC_TUNE_AGAIN].join(" | "),
      left: ["r:12", bars(ALBERTI, `${TUNE_CHORDS}${OWN_EIGHTH_CHORDS}${TUNE_CHORDS}`), "E2+B2+E3/5+2+1:12"].join(" | "),
      pedal: PEDAL,
      skills: ["alberti-bass", "thumb-under", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand alone on bars 10 to 17, and pass the thumb under on the way up.", hands: "right", speed: 0.5, loop: [10, 17], wait: true },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [18, 25], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 25, kind: "sound", text: "Change the pedal on each new bass note, once in every bar." },
        { fromBar: 11, toBar: 11, kind: "fingering", text: "Pass the thumb under to A after finger 3 plays G." },
        { fromBar: 18, toBar: 25, kind: "sound", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        16: "Fingers 5, 4, 3 and 2 walk down from B. Then the thumb takes D sharp, which leads home to E.",
        22: "Finger 5 plays E twice on top, while the lower note moves from G to B. Then the thumb reaches A.",
        26: "Lift both hands after the B major chord, and land on the last E minor chord together.",
      },
    },
    legendary: {
      key: E_MINOR,
      bpm: 160,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: [TUNE_REACH, OWN_EIGHTHS, LEGENDARY_TUNE_AGAIN].join(" | "),
      left: [
        "r:12",
        bars(STRIDE, TUNE_CHORDS),
        bars(WIDE, OWN_EIGHTH_CHORDS),
        bars(STRIDE, TUNE_CHORDS),
        "E1+E2/5+1:12",
      ].join(" | "),
      pedal: PEDAL,
      skills: ["stride", "arpeggios", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave on the first beat, then a chord twice, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [2, 5], wait: true },
        { text: "Play the left hand's arpeggios alone. The thumb passes under, and finger 3 crosses over.", hands: "left", speed: 0.5, loop: [10, 17], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [18, 25], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "trick", text: "Use the short rest after each octave and chord to jump to the next one." },
        { fromBar: 10, toBar: 17, kind: "sound", text: "Let the arpeggios roll softly, like waves under the ship." },
        { fromBar: 18, toBar: 25, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        11: "Pass the right thumb under to A after G. Meanwhile the left hand climbs from the low A over two octaves.",
        21: "Keep the thumb on G through the whole bar. Only the top note moves, from E to D to B.",
        26: "Lift both hands in the short rest of bar 25. Then land on the last chord, over the low E octave.",
      },
    },
  },
  de: {
    about:
      "Spanish Ladies ist ein traditionelles Seemannslied über eine Mannschaft, die von Spanien nach England heimsegelt. " +
      "Eine Fassung von 1769 ist im Logbuch eines Schiffs erhalten.",
    funFact: "Im Film Der weiße Hai von 1975 singt der Haijäger Quint eine Walfänger-Fassung des Lieds.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 5 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 9 nur mit der rechten Hand, und rück die Hand in der kurzen Pause höher.",
          "Jetzt die linke Hand allein. Sie hält jeden Griff einen ganzen Takt lang.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Fang mit dem Daumen auf dem tiefen H an. Dann spielt Finger 3 das E.",
          "Lass das zweite H etwas früher los. In der Lücke rückt der Daumen hinauf zum E.",
          "Zähl drei langsame Schläge in jedem Takt, wie ein Schiff, das auf den Wellen schaukelt.",
        ],
        tricky: {
          4: "Finger 5 spielt das G, dann gehen Finger 4 und 3 hinunter zum E. Die linke Hand hält E und H.",
          6: "Jetzt spielt der Daumen zweimal das E, und Finger 2 spielt das Fis. Die Hand ist hinauf zum E gerückt.",
          16: "Finger 4 spielt das A und Finger 5 das H. Dann fällt Finger 2 auf das Fis, über dem H der linken Hand.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: einen tiefen Ton, dann zweimal einen leichteren Ton oder Akkord.",
          "Spiel die ersten neun Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Spiel den tiefen Ton des Walzerbasses etwas lauter als die zwei Akkorde danach.",
          "Lass das zweite H etwas früher los. In der Lücke rückt der Daumen hinauf zum E.",
          "Am Ende spielst du E und G zusammen. Finger 1 und 3 drücken sie wie einen Ton.",
        ],
        tricky: {
          6: "Jetzt spielt der Daumen zweimal das E, und Finger 2 spielt das Fis. Die linke Hand spielt ein tiefes E, dann zweimal das H.",
          10: "Finger 5, 4, 3 und 2 gehen vom H hinunter zum Fis. Dann steigt Finger 3 wieder hinauf zum G.",
          16: "Finger 4, 3 und 2 gehen hinunter zum Fis. Dann drücken Finger 2 und 4 Fis und A zusammen.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Takte 10 bis 17 nur mit der rechten Hand, und setz auf dem Weg nach oben den Daumen unter.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, einmal in jedem Takt.",
          "Setz den Daumen unter zum A, nachdem Finger 3 das G gespielt hat.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          16: "Finger 5, 4, 3 und 2 gehen vom H hinunter. Dann nimmt der Daumen das Dis, das nach Hause zum E führt.",
          22: "Finger 5 spielt oben zweimal das E, während der untere Ton vom G zum H geht. Dann greift der Daumen das A.",
          26: "Heb beide Hände nach dem H-Dur-Akkord, und lande zusammen auf dem letzten e-Moll-Akkord.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem ersten Schlag, dann zweimal einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Arpeggios der linken Hand allein. Der Daumen geht unter, und Finger 3 kreuzt darüber.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause nach jeder Oktave und jedem Akkord, um zum nächsten Griff zu springen.",
          "Lass die Arpeggios leise rollen, wie Wellen unter dem Schiff.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          11: "Setz den rechten Daumen nach dem G unter zum A. Gleichzeitig steigt die linke Hand vom tiefen A über zwei Oktaven.",
          21: "Lass den Daumen den ganzen Takt auf dem G. Nur der obere Ton bewegt sich, vom E zum D zum H.",
          26: "Heb beide Hände in der kurzen Pause von Takt 25. Dann lande auf dem letzten Akkord, über der tiefen E-Oktave.",
        },
      },
    },
  },
};

/**
 * *Nocturne in C-sharp minor*: the theme of Chopin's posthumous nocturne, in four versions of ours.
 *
 * The tune is the theme in the print's bars 5 to 8. The print is in 4/4, Lento con gran espressione, in
 * C-sharp minor. The tune leaves out the print's trill and grace notes. After the long C sharp in its
 * third bar, the print plays a quick dotted figure and a triplet, which the tune leaves out as a rest.
 * The hook is the tune's bars 1 and 2.
 *
 * Our chords, one or two per bar, are C-sharp minor, G-sharp major with its seventh, F-sharp minor, and
 * A and E major in our own bars. Common and Rare move the song down a major third to A minor, and Epic
 * moves it down a whole step to B minor. Legendary keeps C-sharp minor. Every version closes on the home
 * minor chord.
 *
 * Common plays the tune over held open fifths and single bass notes, then eight bars of our own. It rests
 * a quarter before the tune's octave leap, so the hand has time to move. Rare plays a low note on each
 * beat and a two-note chord on the next, with the pedal held for whole bars. Its own bars add eighths and
 * a two-note chord in the right hand. Rare plays twelve bars of our own after the tune.
 *
 * Epic and Legendary fill the tune's rests with figures of ours, play eight bars of our own, then play
 * the tune again and close. Epic rolls broken chords in eighths with the pedal, and plays the tune again
 * in thirds. Legendary rolls arpeggios over two octaves in sixteenths. It plays the tune again in chords
 * of three and four notes.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Legendary keeps. */
const C_SHARP_MINOR: Key = { tonic: 1, mode: "minor" };

/** The key Epic moves to, since it allows 3 sharps and C-sharp minor has 4. */
const B_MINOR: Key = { tonic: 11, mode: "minor" };

/** The key Common and Rare move to. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 4/4, in the print's own lengths. */
const tune = "G#5:2 F#5:2 | G#5:2 C#5:2 | C#6:2 r:2 | A5:2 r:2";

/** Common's right hand in A minor quarters. It rests before the octave leap, and moves in two rests. */
const COMMON_RIGHT = [
  "E5/5:2 D5/4:2 | E5/5:2 A4/1:1 r:1 | A5/5:2 r:2 | F5/3:2 r:2",
  "A5/5:2 G5/4:1 F5/3:1 | E5/2:2 D5/1:2 | F5/3:2 E5/2:1 D5/1:1 | E5/2:4",
  "A5/5:2 G5/4:1 F5/3:1 | E5/2:2 D5/1:1 r:1 | C5/3:2 B4/2:2 | A4/1:4",
].join(" | ");

/** Common's left hand in A minor quarters, in one place: an open fifth or one bass note, held. */
const COMMON_LEFT = [
  "A2+E3/5+1:2 E3/1:2 | A2+E3/5+1:4 | D3/2:4 | D3/2:2 E3/1:2",
  "D3/2:4 | A2+E3/5+1:2 E3/1:2 | D3/2:4 | E3/1:4",
  "D3/2:4 | E3/1:4 | A2+E3/5+1:2 E3/1:2 | A2+E3/5+1:4",
].join(" | ");

/** Rare's right hand in A minor eighths: the tune, then twelve bars of our own. */
const RARE_RIGHT = [
  "E5/5:4 D5/4:4 | E5/5:4 A4/1:4 | A5/5:4 r:4 | F5/3:4 r:4",
  "A5/5:3 G5/4:1 F5/3:2 E5/2:2 | E5/2:4 D5/1:4 | F5/3:2 A5/5:2 G5/4:2 F5/3:2 | E5/2:6 r:2",
  "D5+F5/1+3:4 E5/2:2 F5/3:2 | E5/2:2 A5/5:2 G5/4:2 E5/2:2 | F5/3:4 E5/2:2 D5/1:2 | E5/2:6 r:2",
  "C5/3:4 E5/5:2 D5/4:2 | D5/4:4 B4/2:4 | C5/3:2 D5/4:2 B4/2:4 | A4+C5/1+3:8",
].join(" | ");

/** Rare's half bar in A minor eighths: a low note on the beat, then a two-note chord, in one place. */
const PULSE: Record<string, string> = {
  a: "A2/5:2 C3+E3/3+1:2",
  e: "E3/1:2 B2+D3/4+2:2",
  d: "D3/2:2 A2+D3/5+2:2",
};

/** Rare's chords, two per bar, before its last bar. */
const RARE_CHORDS = "aeaadddeddaeddeeddaadeaaaadede";

/** The tune in 4/4 sixteenths, in C-sharp minor, with a dotted figure of ours in each rest. */
const TUNE_FILLED = [
  "G#5/5:8 F#5/4:8 | G#5/5:8 C#5/1:8",
  "C#6/5:8 B5/4:3 A5/3:1 F#5/1:1 G#5/2:1 A5/3:1 G#5/2:1 | A5/3:8 G#5/2:4 F#5/1:4",
].join(" | ");

/** Our eight bars after the tune, in C-sharp minor sixteenths, for Epic and Legendary. */
const OWN = [
  "A5/5:6 G#5/4:2 F#5/3:4 E5/2:4 | F#5/3:4 A5/5:4 G#5/4:8",
  "E5/3:6 D#5/2:2 C#5/1:4 E5/3:4 | F#5/4:6 E5/3:2 D#5/2:8",
  "C#6/5:6 B5/4:2 A5/3:4 E5/1:4 | G#5/4:6 F#5/3:2 E5/2:4 B4/1:4",
  "A5/5:4 F#5/3:4 B#4/1:4 D#5/2:4 | C#5/2:8 D#5/3:4 B#4/1:4",
].join(" | ");

/** The tune's third bar again with the figure, after a chord on the long C sharp. */
const FIGURE = "B5/4:3 A5/3:1 F#5/1:1 G#5/2:1 A5/3:1 G#5/2:1";

/** Epic's tune again in thirds, with a short rest before its octave leap, then the close on C-sharp minor. */
const EPIC_AGAIN = [
  "E5+G#5/3+5:8 D#5+F#5/2+4:8 | E5+G#5/3+5:8 C#5+E5/1+3:6 r:2",
  `A5+C#6/3+5:8 ${FIGURE} | F#5+A5/2+4:8 G#5/4:4 F#5/3:4`,
  "B#4+D#5/1+3:8 D#5+F#5/2+4:8 | C#5+E5+G#5/1+3+5:16",
].join(" | ");

/** Legendary's tune again in chords of three and four notes, each wide move after a rest, then the close. */
const LEGENDARY_AGAIN = [
  "G#4+C#5+G#5/1+2+5:6 r:2 F#4+B#4+F#5/1+2+5:6 r:2 | G#4+E5+G#5/1+3+5:6 r:2 C#4+G#4+C#5/1+3+5:6 r:2",
  `C#5+F#5+A5+C#6/1+2+3+5:8 ${FIGURE} | F#5+A5/2+4:8 G#5/4:4 F#5/3:2 r:2`,
  "G#4+B#4+D#5+F#5/1+2+3+5:6 r:2 G#4+B#4+D#5+G#5/1+2+3+5:6 r:2 | C#5+E5+G#5+C#6/1+2+3+5:16",
].join(" | ");

/**
 * The chords of Epic and Legendary, two per bar, before the last bar. c is C-sharp minor, g is G-sharp
 * seventh, G is G-sharp major, f is F-sharp minor, a is A major and E is E major.
 */
const CHORDS = "cgccfffG" +"aafGccfGaaEEfGcG" + "cgccffffgG";

/** Epic's half bar in sixteenths: a broken chord in eighths, low, high, middle, high. */
const BROKEN: Record<string, string> = {
  c: "C#3/5:2 G#3/1:2 E3/3:2 G#3/1:2",
  g: "G#2/5:2 F#3/1:2 B#2/4:2 D#3/2:2",
  G: "G#2/5:2 D#3/1:2 B#2/3:2 D#3/1:2",
  f: "F#2/5:2 C#3/1:2 A2/3:2 C#3/1:2",
  a: "A2/5:2 E3/1:2 C#3/3:2 E3/1:2",
  E: "E2/5:2 B2/1:2 G#2/3:2 B2/1:2",
};

/** The six notes of each chord over two octaves, for Legendary's arpeggios. */
const WIDE_NOTES: Record<string, string> = {
  c: "C#2 G#2 C#3 E3 G#3 C#4",
  g: "G#1 D#2 G#2 B#2 D#3 F#3",
  G: "G#1 D#2 G#2 B#2 D#3 G#3",
  f: "F#1 C#2 F#2 A2 C#3 F#3",
  a: "A1 E2 A2 C#3 E3 A3",
  E: "E1 B1 E2 G#2 B2 E3",
};

/** Legendary's half bar of arpeggio in sixteenths: up two octaves, then an eighth's rest to jump back down. */
const WIDE: Record<string, string> = {};
for (const [chord, notes] of Object.entries(WIDE_NOTES)) {
  const pitches = notes.split(" ");
  const fingers = [5, 2, 1, 3, 2, 1];
  WIDE[chord] = `${pitches.map((pitch, at) => `${pitch}/${fingers[at]}:1`).join(" ")} r:2`;
}

/** Bars of `patterns` from `chords`, such as `"cgcc"`: one letter per half bar, two per bar. */
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

/** Each pitch of the C-sharp minor text and its pitch in B minor, a whole step down. */
const DOWN_A_STEP: Record<string, string> = { "C#": "B", "D#": "C#", E: "D", "F#": "E", "G#": "F#", A: "G", B: "A", "B#": "A#" };

/** `text`, written in C-sharp minor, moved down a whole step to B minor. */
function toBMinor(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => {
    const to = DOWN_A_STEP[name];
    if (to === undefined) throw new Error(`No B minor pitch for ${name}`);
    return `${to}${name.startsWith("C") ? Number(octave) - 1 : Number(octave)}`;
  });
}

/** The pedal of Epic and Legendary: changed at each chord, twice a bar, and held through the last bar. */
const PEDAL = `${Array(17).fill("P:8 P:8").join(" | ")} | P:16`;

export const chopinNocturneCSharpMinor: OurSong = {
  slug: "chopin-nocturne-c-sharp-minor",
  title: "Nocturne in C-sharp minor",
  aka: ["Lento con gran espressione", "Nocturne No. 20", "B. 49", "Op. posth.", "Nocturne cis-Moll"],
  source: {
    composer: "Frédéric Chopin",
    died: 1849,
    published: 1875,
    edition:
      "Nocturne in C-sharp minor, B. 49, the theme in bars 5 to 8, as a typeset of the opening bars on Wikimedia Commons prints it; the nocturne was first published in 1875",
  },
  about:
    "Chopin wrote this nocturne in 1830, and it was first published in 1875, long after his death. " +
    "He sent it to his sister Ludwika, to practise before his second piano concerto. " +
    "The film The Pianist plays it, and it opens the film's soundtrack album.",
  funFact: "In 1939 the pianist Władysław Szpilman was playing it live on Polish Radio when the German attack on Warsaw cut the broadcast.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 4, key: C_SHARP_MINOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 66,
      numerator: 4,
      denominator: 4,
      right: COMMON_RIGHT,
      left: COMMON_LEFT,
      skills: ["five-finger-position", "held-bass", "position-change"],
      practice: [
        { text: "Play the first two bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 2], wait: true },
        { text: "Play bars 3 to 10 with the right hand alone. The hand starts higher, with finger 5 on the high A.", hands: "right", speed: 0.6, loop: [3, 10], wait: true },
        { text: "Now the left hand alone. It never moves, and each finger keeps its own key.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first four bars, slowly.", hands: "both", speed: 0.7, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "This is a night song. Play softly, and let each long note sing." },
        { fromBar: 2, toBar: 3, kind: "trick", text: "Use the short rest after the low A to move the hand up to the high A." },
        { fromBar: 10, toBar: 11, kind: "trick", text: "Use the rest after D to move the hand down. Finger 3 then lands on C." },
      ],
      tricky: {
        1: "Start with finger 5 on the high E and finger 4 on D. The left hand holds A and E together.",
        3: "The hand has moved up. Finger 5 plays the high A, and the thumb now sits on D.",
        11: "The hand has moved back down. Finger 3 plays C, and the thumb ends on A.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 66,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: RARE_RIGHT,
      left: `${bars(PULSE, RARE_CHORDS)} | A2+C3+E3/5+3+1:8`,
      pedal: "r:8 | P:8 | P:8 | r:8 | P:8 | r:8 | P:8 | P:8 | P:8 | P:8 | r:8 | P:8 | P:8 | r:8 | r:8 | P:8",
      skills: ["two-note-chords", "eighth-notes", "pedal"],
      practice: [
        { text: "Play the left hand alone. A low note comes on the beat, and a two-note chord answers it.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first four bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Join the hands on bars 5 to 12, slowly.", hands: "both", speed: 0.6, loop: [5, 12], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 3, kind: "fingering", text: "The tune leaps a whole octave. The thumb plays the low A, and finger 5 the high one." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Hold the pedal only in bars with one chord, and lift it at the next bar line." },
        { fromBar: 12, toBar: 13, kind: "trick", text: "Use the rest after E to move the right hand down, so finger 3 lands on C." },
      ],
      tricky: {
        1: "Finger 5 plays the high E. The left hand plays A on the beat, then C and E together.",
        3: "Finger 5 lands on the high A after the octave leap. Watch the key, not the hand.",
        13: "The hand has moved down in the rest. Finger 3 plays C, and finger 5 plays E.",
      },
    },
    epic: {
      key: B_MINOR,
      bpm: 56,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: toBMinor([TUNE_FILLED, OWN, EPIC_AGAIN].join(" | ")),
      left: toBMinor(`${bars(BROKEN, CHORDS)} | C#2+G#2+C#3/5+2+1:16`),
      pedal: PEDAL,
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone until its broken chords roll evenly, low to high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the quick figure in bar 3 with the right hand alone, very slowly.", hands: "right", speed: 0.5, loop: [3, 3], wait: true },
        { text: "Join the hands on the first four bars, slowly.", hands: "both", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the right hand's thirds alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [13, 18], wait: true },
        { text: "Now play the whole song with both hands at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 18, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 3, toBar: 3, kind: "rhythm", text: "The figure after the long B is ours. Play it freely, like a singer taking a breath." },
        { fromBar: 13, toBar: 16, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        7: "Finger 3 holds D, then fingers 2 and 1 step down to B. The left hand keeps rolling B, F sharp and D.",
        12: "The thumb reaches down to A sharp at the end of the bar. Then fingers 3 and 5 take the tune's first third.",
        17: "Play A sharp and C sharp with fingers 1 and 3, then C sharp and E with 2 and 4. The left hand leads home to B minor.",
      },
    },
    legendary: {
      key: C_SHARP_MINOR,
      bpm: 58,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [TUNE_FILLED, OWN, LEGENDARY_AGAIN].join(" | "),
      left: `${bars(WIDE, CHORDS)} | C#2+G#2+C#3/5+2+1:16`,
      pedal: PEDAL,
      skills: ["arpeggios", "sixteenth-notes", "melody-in-chords"],
      practice: [
        { text: "Play the left hand's arpeggios alone. Finger 3 crosses over the thumb on the way up.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the quick figure in bar 3 with the right hand alone, very slowly.", hands: "right", speed: 0.5, loop: [3, 3], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [13, 18], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 12, kind: "sound", text: "Let the arpeggios ripple softly, like water at night, under the singing tune." },
        { fromBar: 1, toBar: 18, kind: "trick", text: "Use the short rest at the end of each arpeggio to jump back down to the low note." },
        { fromBar: 13, toBar: 18, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        3: "Hold the high C sharp with finger 5. Then play the figure lightly: B, A, then F sharp with the thumb.",
        8: "The left hand climbs from the low F sharp, then from the low G sharp. Jump down in the short rest.",
        15: "Spread the hand over four notes, from C sharp to C sharp. Then start the figure with finger 4.",
      },
    },
  },
  de: {
    about:
      "Chopin schrieb dieses Nocturne 1830, und es erschien erst 1875, lange nach seinem Tod. " +
      "Er schickte es seiner Schwester Ludwika, damit sie es vor seinem zweiten Klavierkonzert übte. " +
      "Der Film Der Pianist spielt es, und es eröffnet das Soundtrack-Album des Films.",
    funFact: "1939 spielte der Pianist Władysław Szpilman es live im Polnischen Rundfunk, als der deutsche Angriff auf Warschau die Sendung unterbrach.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten zwei Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 3 bis 10 nur mit der rechten Hand. Die Hand beginnt höher, mit Finger 5 auf dem hohen A.",
          "Jetzt die linke Hand allein. Sie bewegt sich nie, und jeder Finger bleibt auf seiner eigenen Taste.",
          "Spiel die ersten vier Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Das ist ein Lied der Nacht. Spiel leise, und lass jeden langen Ton singen.",
          "Nutz die kurze Pause nach dem tiefen A, um die Hand hinauf zum hohen A zu setzen.",
          "Nutz die Pause nach dem D, um die Hand nach unten zu setzen. Dann landet Finger 3 auf dem C.",
        ],
        tricky: {
          1: "Beginn mit Finger 5 auf dem hohen E und Finger 4 auf dem D. Die linke Hand hält A und E zusammen.",
          3: "Die Hand ist nach oben gerückt. Finger 5 spielt das hohe A, und der Daumen liegt jetzt auf dem D.",
          11: "Die Hand ist wieder nach unten gerückt. Finger 3 spielt das C, und der Daumen endet auf dem A.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Auf dem Schlag kommt ein tiefer Ton, und ein Zweiklang antwortet.",
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 12 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Die Melodie springt eine ganze Oktave. Der Daumen spielt das tiefe A, und Finger 5 das hohe.",
          "Halt das Pedal nur in Takten mit einem einzigen Akkord, und heb es am nächsten Taktstrich.",
          "Nutz die Pause nach dem E, um die rechte Hand nach unten zu setzen, sodass Finger 3 auf dem C landet.",
        ],
        tricky: {
          1: "Finger 5 spielt das hohe E. Die linke Hand spielt das A auf dem Schlag, dann C und E zusammen.",
          3: "Nach dem Oktavsprung landet Finger 5 auf dem hohen A. Schau auf die Taste, nicht auf die Hand.",
          13: "Die Hand ist in der Pause nach unten gerückt. Finger 3 spielt das C, und Finger 5 spielt das E.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein, bis ihre gebrochenen Akkorde gleichmäßig von tief nach hoch rollen.",
          "Spiel die schnelle Figur in Takt 3 nur mit der rechten Hand, ganz langsam.",
          "Spiel die ersten vier Takte langsam mit beiden Händen zusammen.",
          "Spiel die Terzen der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Jetzt spiel das ganze Stück mit beiden Händen im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Die Figur nach dem langen H ist unsere eigene. Spiel sie frei, wie ein Sänger, der Atem holt.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          7: "Finger 3 hält das D, dann gehen Finger 2 und 1 hinunter zum H. Die linke Hand rollt weiter H, Fis und D.",
          12: "Am Ende des Takts reicht der Daumen hinunter zum Ais. Dann nehmen Finger 3 und 5 die erste Terz der Melodie.",
          17: "Spiel Ais und Cis mit Finger 1 und 3, dann Cis und E mit Finger 2 und 4. Die linke Hand führt nach h-Moll zurück.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Arpeggios der linken Hand allein. Auf dem Weg nach oben kreuzt Finger 3 über den Daumen.",
          "Spiel die schnelle Figur in Takt 3 nur mit der rechten Hand, ganz langsam.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Lass die Arpeggios leise unter der singenden Melodie plätschern, wie Wasser in der Nacht.",
          "Nutz die kurze Pause am Ende jedes Arpeggios, um zurück zum tiefen Ton zu springen.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          3: "Halt das hohe Cis mit Finger 5. Dann spiel die Figur leicht: H, A, dann Fis mit dem Daumen.",
          8: "Die linke Hand steigt vom tiefen Fis auf, dann vom tiefen Gis. Spring in der kurzen Pause zurück nach unten.",
          15: "Spann die Hand über vier Töne, von Cis bis Cis. Dann beginn die Figur mit Finger 4.",
        },
      },
    },
  },
};

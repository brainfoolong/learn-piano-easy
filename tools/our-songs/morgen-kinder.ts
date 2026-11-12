/**
 * *Morgen, Kinder, wird's was geben*: Carl Gottlieb Hering's tune of 1809, in four versions of ours.
 *
 * The tune is the whole verse of 12 bars, in C major, a fourth above the print's G major, with no pickup.
 * The print is in 2/4, and every length here is four times as long, in 2/1. Its sixteenths are then
 * quarters, so Common plays them. The hook is bars 1 to 4, the opening phrase.
 *
 * The right hand never leaves its place: each step lies within a comfortable span of its two fingers.
 * The thumb starts on G, finger 3 takes the leap up to E, and finger 2 brings the hand back to C. The
 * repeated C of bar 11 changes from the thumb to finger 2, so finger 5 reaches F.
 *
 * Common rests a quarter before the leap up to E, so the hand has time. Rare is in 4/4, the same notes
 * in twice as many bars, so the song is long enough for its rarity.
 *
 * Common plays the tune once over held fifths. Rare plays it once over block chords. Epic plays it twice,
 * over an Alberti bass and then an octave up over broken chords, with the pedal. Legendary plays it over
 * a stride bass, then in octaves over arpeggios, and ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, a fourth above the print's G major. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 2/1, in quarters: the 12 bars of the verse. */
const tune = [
  "C5:2 G4:2 A4:2 G4:2 | A4:1 C5:1 B4:1 D5:1 C5:2 G4:2 | E5:2 E5:1 F5:1 G5:2 E5:2 | F5:2 E5:2 D5:4",
  "C5:2 G4:2 A4:2 G4:2 | A4:1 C5:1 B4:1 D5:1 C5:2 G4:2 | E5:2 E5:1 F5:1 G5:2 E5:2 | F5:2 E5:2 D5:4",
  "F5:2 F5:2 A5:2 A5:2 | D5:2 D5:2 G5:4 | C5:2 C5:2 F5:2 F5:2 | E5:1 D5:1 C5:1 B4:1 C5:4",
].join(" | ");

/** The opening phrase in the right hand, in quarters, without its last bar: the thumb on G, then finger 3 up on E. */
const PHRASE = [
  "C5/2:2 G4/1:2 A4/2:2 G4/1:2",
  "A4/2:1 C5/4:1 B4/3:1 D5/5:1 C5/4:2 G4/1:2",
  "E5/3:2 E5/3:1 F5/4:1 G5/5:2 E5/4:2",
];

/**
 * The tune in the right hand, in quarters, one bar per entry. Bar 4 ends on finger 3, ready to step
 * down to C, and bar 8 ends on finger 2, ready to step up to F.
 */
const RIGHT_BARS = [
  ...PHRASE,
  "F5/5:2 E5/4:2 D5/3:4",
  ...PHRASE,
  "F5/5:2 E5/4:2 D5/2:4",
  "F5/3:2 F5/3:2 A5/5:2 A5/5:2",
  "D5/1:2 D5/1:2 G5/4:4",
  "C5/1:2 C5/2:2 F5/5:2 F5/5:2",
  "E5/4:1 D5/3:1 C5/2:1 B4/1:1 C5/2:4",
];

/** Common's tune: the G before each leap up to E is cut to a quarter, and a quarter's rest frees the hand. */
const COMMON_BARS = RIGHT_BARS.map((bar, index) => (index === 1 || index === 5 ? bar.replace(/G4\/1:2$/, "G4/1:1 r:1") : bar));

/** `bar`, a bar of 2/1 in quarters, split into two bars of 4/4 after its fourth quarter. */
function halved(bar: string): string {
  let units = 0;
  return bar
    .split(" ")
    .map((token) => {
      units += Number(token.split(":")[1]);
      return units === 4 ? `${token} |` : token;
    })
    .join(" ");
}

/** The semitone of a note name such as `C5` or `G4/1`, counted from C0. */
function semitoneOf(token: string): number {
  const [, name, octave] = /^([A-G])(\d)/.exec(token)!;
  return { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[name as "C"]! + 12 * Number(octave);
}

/** `text`, a line of single notes, with each note before a leap past a minor third cut short by one unit's rest. */
function breathed(text: string): string {
  const tokens = text.split(" ");
  const notes = tokens.flatMap((token, index) => (/^[A-G]/.test(token) ? [index] : []));
  for (let at = 0; at + 1 < notes.length; at++) {
    const [here, next] = [notes[at]!, notes[at + 1]!];
    if (Math.abs(semitoneOf(tokens[here]!) - semitoneOf(tokens[next]!)) > 3) {
      tokens[here] = tokens[here]!.replace(/:(\d+)$/, (_, units: string) => `:${Number(units) - 1} r:1`);
    }
  }
  return tokens.join(" ");
}

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
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

/** Bars of `patterns` from `chords`, such as `"CC GC"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, chords: string): string {
  return chords
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** The chords of the verse, one letter per half bar: C, G and F. */
const CHORDS = "CC GC CC GG CC GC CC GG FF GG CF GC";

/** The chords of the verse's first 11 bars, so a version can write its own last bar. */
const FIRST_ELEVEN = CHORDS.split(" ").slice(0, 11).join(" ");

/** Half a bar of held fifth or bass note in quarters, on C, G or F. */
const FIFTH: Record<string, string> = {
  C: "C3+G3/5+1:4",
  G: "D3+G3/4+1:4",
  F: "F3/2:4",
};

/**
 * A bar of Rare's 4/4 in quarters, the hand kept still on C to G: a C triad, C as a fifth, G as D and G,
 * and F over C. The fifth `c` leaves out E, and G leaves out F, so neither clashes with the tune.
 */
const BLOCK: Record<string, string> = {
  C: "C3+E3+G3/5+3+1:4",
  c: "C3+G3/5+1:4",
  G: "D3+G3/4+1:4",
  F: "C3+F3/5+2:4",
};

/** The chords of Rare's 24 bars: `c` under the F of bars 5 and 13. */
const RARE_CHORDS = "CCGCcCGGCCGCcCGGFFGGCFGC";

/** Half a bar of Alberti bass in eighths, on C, on G over B and on F over A. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1 B2/5:1 G3/1:1 D3/3:1 G3/1:1",
  F: "A2/5:1 F3/1:1 C3/3:1 F3/1:1 A2/5:1 F3/1:1 C3/3:1 F3/1:1",
};

/** Half a bar of rising and falling broken chord in eighths, on C, on G over B and on F over A. */
const BROKEN: Record<string, string> = {
  C: "C3/5:1 E3/3:1 G3/1:1 E3/3:1 C3/5:1 E3/3:1 G3/1:1 E3/3:1",
  G: "B2/5:1 D3/3:1 G3/1:1 D3/3:1 B2/5:1 D3/3:1 G3/1:1 D3/3:1",
  F: "A2/5:1 C3/3:1 F3/1:1 C3/3:1 A2/5:1 C3/3:1 F3/1:1 C3/3:1",
};

/** Half a bar of stride in eighths: the root in octaves, then the chord, each with an eighth's rest to jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:3 r:1 C3+E3+G3/5+3+1:3 r:1",
  G: "G1+G2/5+1:3 r:1 B2+D3+G3/5+3+1:3 r:1",
  F: "F1+F2/5+1:3 r:1 C3+F3+A3/5+2+1:3 r:1",
};

/** Half a bar of arpeggio in eighths, up and back down, with an eighth's rest to jump. */
const ARPEGGIO: Record<string, string> = {
  C: "C2/5:1 G2/3:1 C3/2:1 E3/1:1 G3/3:1 E3/1:1 C3/2:1 r:1",
  G: "G1/5:1 D2/3:1 G2/2:1 B2/1:1 D3/3:1 B2/1:1 G2/2:1 r:1",
  F: "F1/5:1 C2/3:1 F2/2:1 A2/1:1 C3/3:1 A2/1:1 F2/2:1 r:1",
};

/** The verse once in eighths, its last C cut short by an eighth's rest so the hand can jump. */
const FIRST_TIME = inEighths(RIGHT_BARS.join(" | ")).replace(/C5\/2:8$/, "C5/2:6 r:2");

/** The verse's first 11 bars in octaves in eighths, the hand lifted for an eighth before each leap past a third. */
const VERSE_OCTAVES = octaves(breathed(inEighths(RIGHT_BARS.slice(0, 11).join(" | "))));

/** The pedal of both verses in eighths, changed on every half bar. */
const PEDAL = Array(24).fill("P:8 P:8").join(" | ");

export const morgenKinder: OurSong = {
  slug: "morgen-kinder",
  title: "Morgen, Kinder, wird's was geben",
  source: {
    composer: "Carl Gottlieb Hering",
    died: 1853,
    published: 1809,
    edition: "Carl Gottlieb Hering, Neue praktische Singschule für Kinder, 1809",
  },
  about:
    "The German title Morgen, Kinder, wird's was geben means Tomorrow, children, there will be something. " +
    "Karl Friedrich Splittegarb's words were first printed in 1795. " +
    "Carl Gottlieb Hering set them to this tune in 1809, in a singing school for children. " +
    "The song is about children looking forward to their presents, and it never mentions the birth of Jesus.",
  funFact:
    "In 1927 Erich Kästner wrote a parody about poor children, which begins Morgen, Kinder, wird's nichts geben: there will be nothing.",
  mythic: null,
  collection: "christmas",
  aka: ["Die Weihnachtsfreude"],
  tune: { text: tune, numerator: 2, denominator: 1, steps: 4, key: C_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 160,
      numerator: 2,
      denominator: 1,
      steps: 4,
      right: COMMON_BARS.join(" | "),
      left: halfBars(FIFTH, CHORDS),
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the last four bars with the right hand alone, where the tune climbs to the high A.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Now the left hand alone. It holds a fifth, or a single F.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 2, kind: "rhythm", text: "The four quick notes of bar 2 are the shortest in the song. Count them evenly: one, two, three, four." },
        { fromBar: 2, toBar: 3, kind: "trick", text: "Bar 2 ends with a short G and a rest. Use the rest to open the hand up to the E." },
        { fromBar: 11, toBar: 11, kind: "fingering", text: "The thumb plays the first C and finger 2 the second, so finger 5 reaches F." },
      ],
      tricky: {
        3: "After the rest, finger 3 plays E twice. Fingers 4 and 5 climb to F and G, and finger 4 comes back to E.",
        7: "The same as bar 3: finger 3 on E, then fingers 4 and 5 up to F and G.",
        8: "Fingers 5 and 4 play F and E, and finger 2 takes D. Finger 3 is then ready for the F of bar 9.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 192,
      numerator: 4,
      denominator: 4,
      steps: 1,
      right: RIGHT_BARS.map(halved).join(" | "),
      left: [...RARE_CHORDS].map((chord) => BLOCK[chord]).join(" | "),
      skills: ["triads", "position-change"],
      practice: [
        { text: "Play the left hand alone, and press the notes of each chord together.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Play the right hand alone on the first eight bars, the opening phrase.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Hold each chord softly for the whole bar, so the tune stays on top." },
        { fromBar: 4, toBar: 5, kind: "trick", text: "Bar 4 ends on a low G, and bar 5 starts high on E. Look at the E before you play the G." },
        { fromBar: 21, toBar: 22, kind: "fingering", text: "The thumb plays the first C and finger 2 the second, so finger 5 reaches F." },
      ],
      tricky: {
        5: "After the thumb's G, finger 3 leaps up to E with no rest. Keep the thumb light, so the hand opens out.",
        6: "Finger 5 plays the high G, and finger 4 comes back to E over the C chord.",
        14: "The same as bar 6: finger 5 on the high G, then finger 4 on E.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 184,
      numerator: 2,
      denominator: 1,
      steps: 8,
      right: [FIRST_TIME, octaveUp(inEighths(RIGHT_BARS.join(" | ")))].join(" | "),
      left: [halfBars(ALBERTI, CHORDS), halfBars(BROKEN, FIRST_ELEVEN), `${BROKEN.G} C3+E3+G3/5+3+1:8`].join(" | "),
      pedal: PEDAL,
      skills: ["alberti-bass", "broken-chords", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the broken chords of the second time alone, up and back down.", hands: "left", speed: 0.5, loop: [13, 16], wait: false },
        { text: "Join the hands on the first time through, slowly.", hands: "both", speed: 0.5, loop: [1, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 12, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 12, toBar: 13, kind: "trick", text: "The right hand rests for a quarter at the end of bar 12, then jumps up an octave." },
        { fromBar: 1, toBar: 24, kind: "sound", text: "Change the pedal on every half bar, as the left hand starts a new chord." },
      ],
      tricky: {
        13: "The tune starts again an octave up. Finger 2 takes the high C, and the thumb drops to G.",
        23: "The thumb plays the first C and finger 2 the second, so finger 5 reaches the high F.",
        24: "Fingers 4, 3, 2 and 1 walk down to B, and finger 2 ends on C over the last chord.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 208,
      numerator: 2,
      denominator: 1,
      steps: 8,
      right: [FIRST_TIME, VERSE_OCTAVES, "E5+E6/1+5:2 D5+D6/1+5:2 C5+C6/1+5:2 B4+B5/1+5:2 C5+E5+G5+C6/1+2+3+5:8"].join(" | "),
      left: [halfBars(STRIDE, CHORDS), halfBars(ARPEGGIO, FIRST_ELEVEN), `${ARPEGGIO.G} C2+G2+C3/5+2+1:8`].join(" | "),
      pedal: PEDAL,
      skills: ["stride", "arpeggios"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's octaves alone, and lift the hand on each short rest.", hands: "right", speed: 0.5, loop: [13, 16], wait: true },
        { text: "Play the arpeggios of the second time in the left hand alone.", hands: "left", speed: 0.5, loop: [13, 16], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 12, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 13, toBar: 23, kind: "fingering", text: "Keep the thumb and little finger an octave apart. The short rests give the hand time to jump." },
        { fromBar: 24, toBar: 24, kind: "sound", text: "Spread the hand over C, E, G and C for the last chord, and let it ring." },
      ],
      tricky: {
        4: "Finger 3 holds the long D, while the left hand leaps from the low G to its chord and back.",
        8: "Finger 2 takes the long D this time, so finger 3 is ready for the F of bar 9.",
        9: "Finger 3 plays F twice and finger 5 plays A twice, while the stride bass drops to a low F.",
      },
    },
  },
  de: {
    about:
      "Morgen, Kinder, wird's was geben heißt auf Englisch Tomorrow, children, there will be something. " +
      "Karl Friedrich Splittegarbs Text wurde 1795 zum ersten Mal gedruckt. " +
      "Carl Gottlieb Hering vertonte ihn 1809 mit dieser Melodie, in einer Gesangschule für Kinder. " +
      "Das Lied erzählt von Kindern, die sich auf ihre Geschenke freuen, und erwähnt die Geburt Jesu nie.",
    funFact:
      "1927 schrieb Erich Kästner eine Parodie über arme Kinder, die mit Morgen, Kinder, wird's nichts geben beginnt.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Lied auf jeden Ton warten.",
          "Spiel die letzten vier Takte nur mit der rechten Hand. Dort steigt die Melodie bis zum hohen A.",
          "Jetzt die linke Hand allein. Sie hält eine Quinte oder ein einzelnes F.",
          "Spiel das ganze Lied langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Die vier schnellen Töne in Takt 2 sind die kürzesten im Lied. Zähl sie gleichmäßig: eins, zwei, drei, vier.",
          "Takt 2 endet mit einem kurzen G und einer Pause. Nutz die Pause, um die Hand bis zum E zu öffnen.",
          "Der Daumen spielt das erste C und Finger 2 das zweite, damit Finger 5 das F erreicht.",
        ],
        tricky: {
          3: "Nach der Pause spielt Finger 3 zweimal das E. Finger 4 und 5 steigen zu F und G, und Finger 4 kehrt zum E zurück.",
          7: "Wie in Takt 3: Finger 3 auf E, dann Finger 4 und 5 hinauf zu F und G.",
          8: "Finger 5 und 4 spielen F und E, und Finger 2 nimmt das D. Dann ist Finger 3 bereit für das F in Takt 9.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein, und drück die Töne jedes Akkords zusammen.",
          "Spiel die ersten acht Takte nur mit der rechten Hand. Das ist die Anfangsphrase.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Halt jeden Akkord leise den ganzen Takt lang, damit die Melodie oben bleibt.",
          "Takt 4 endet auf einem tiefen G, und Takt 5 beginnt hoch auf dem E. Schau auf das E, bevor du das G spielst.",
          "Der Daumen spielt das erste C und Finger 2 das zweite, damit Finger 5 das F erreicht.",
        ],
        tricky: {
          5: "Nach dem G des Daumens springt Finger 3 ohne Pause hinauf zum E. Halt den Daumen leicht, damit sich die Hand öffnet.",
          6: "Finger 5 spielt das hohe G, und Finger 4 kehrt über dem C-Akkord zum E zurück.",
          14: "Wie in Takt 6: Finger 5 auf dem hohen G, dann Finger 4 auf dem E.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die gebrochenen Akkorde des zweiten Durchgangs allein, hinauf und wieder hinab.",
          "Spiel den ersten Durchgang langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise, damit die Melodie darüber singt.",
          "Die rechte Hand pausiert am Ende von Takt 12 eine Viertel lang, dann springt sie eine Oktave hinauf.",
          "Wechsle das Pedal auf jeder Takthälfte, sobald die linke Hand einen neuen Akkord beginnt.",
        ],
        tricky: {
          13: "Die Melodie beginnt eine Oktave höher von vorn. Finger 2 nimmt das hohe C, und der Daumen fällt auf das G.",
          23: "Der Daumen spielt das erste C und Finger 2 das zweite, damit Finger 5 das hohe F erreicht.",
          24: "Finger 4, 3, 2 und 1 wandern hinab zum H, und Finger 2 endet über dem letzten Akkord auf dem C.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Stride-Bass allein: Spring hinunter zur Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Oktaven der rechten Hand allein, und heb die Hand bei jeder kurzen Pause.",
          "Spiel die Arpeggien des zweiten Durchgangs nur mit der linken Hand.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau beim Stride auf die tiefe Oktave, und lass die Hand den Akkord nach Gefühl finden.",
          "Halt Daumen und kleinen Finger eine Oktave auseinander. Die kurzen Pausen geben der Hand Zeit zum Springen.",
          "Spann die Hand für den letzten Akkord über C, E, G und C, und lass ihn klingen.",
        ],
        tricky: {
          4: "Finger 3 hält das lange D, während die linke Hand vom tiefen G zu ihrem Akkord springt und zurück.",
          8: "Diesmal nimmt Finger 2 das lange D, damit Finger 3 bereit ist für das F in Takt 9.",
          9: "Finger 3 spielt zweimal das F und Finger 5 zweimal das A, während der Stride-Bass auf ein tiefes F fällt.",
        },
      },
    },
  },
};

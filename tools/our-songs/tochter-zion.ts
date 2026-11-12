/**
 * *Tochter Zion, freue dich*: Handel's chorus tune, in four versions of ours.
 *
 * The tune is the soprano of the first print with Ranke's words, moved from G major down a fifth to C
 * major. Its form is A B A, and the tune here is A and B, 16 bars, since the last A repeats the first
 * note for note. The print is in 4/4, and every length here is twice as long, in 4/2, so its eighths are
 * quarters and Common plays them. The hook is the opening phrase, bars 1 to 4. The harmony is our own.
 *
 * Common and Rare play A, B and the second half of A. All of A again would pass Common's 60 seconds,
 * and Rare's hand would move three times in eight bars. Common holds fifths and single bass notes, and
 * Rare plays block chords and fifths. Epic plays A and B over an Alberti bass, then the last A an octave
 * up over broken chords, with the pedal. Legendary sets A and B an octave up with quick turns over a stride bass,
 * then plays the last A in octaves over arpeggios, and ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's key, a fifth below the print's G major. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 4/2, in quarters: A, then B, which ends in G major. */
const tune = [
  "G4:4 E4:3 F4:1 | G4:4 C4:4 | D4:1 E4:1 F4:1 G4:1 F4:2 E4:2 | D4:8",
  "G4:1 F4:1 G4:1 A4:1 G4:2 G4:2 | C5:4 G4:4 | F4:2 E4:2 D4:2 D4:2 | C4:8",
  "E4:1 D4:1 E4:1 F4:1 E4:2 E4:2 | D4:4 C4:4 | F4:2 E4:2 D4:2 C4:2 | B3:8",
  "C4:1 B3:1 C4:1 D4:1 C4:2 C4:2 | A4:4 F#4:4 | G4:2 A4:1 G4:1 F#4:3 G4:1 | G4:8",
].join(" | ");

/** Bars 1 to 4 in the right hand, in quarters: the thumb on C, finger 5 on G. */
const A_FIRST = "G4/5:4 E4/3:3 F4/4:1 | G4/5:4 C4/1:4 | D4/2:1 E4/3:1 F4/4:1 G4/5:1 F4/4:2 E4/3:2 | D4/2:8";

/**
 * Bars 5 to 8 in the right hand, in quarters. The thumb moves to E, so finger 3 takes G and finger 5
 * reaches the high C. The G of bar 6 is shortened, so the hand lifts, and finger 5 lands on F with the
 * thumb over B for the walk down.
 */
const A_SECOND = "G4/3:1 F4/2:1 G4/3:1 A4/4:1 G4/3:2 G4/3:2 | C5/5:4 G4/3:3 r:1 | F4/5:2 E4/4:2 D4/3:2 D4/3:2 | C4/2:8";

/**
 * B in the right hand, in quarters. The thumb stays on B to bar 13, whose last C is shortened, so the
 * hand lifts and lands on A with finger 4 and F sharp with finger 2.
 */
const B_PART = [
  "E4/4:1 D4/3:1 E4/4:1 F4/5:1 E4/4:2 E4/4:2 | D4/3:4 C4/2:4 | F4/5:2 E4/4:2 D4/3:2 C4/2:2 | B3/1:8",
  "C4/2:1 B3/1:1 C4/2:1 D4/3:1 C4/2:2 C4/2:1 r:1 | A4/4:4 F#4/2:4 | G4/3:2 A4/4:1 G4/3:1 F#4/2:3 G4/3:1 | G4/3:8",
].join(" | ");

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

/** Bars of `patterns` from `beats`, such as `"CCGG"`: one letter per pattern, a space between bars. */
function bars(patterns: Record<string, string>, beats: string): string {
  return beats
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** The chords of A, one letter per half bar. A small `c` is C without its third, under the tune's F and E. */
const A_HALVES = "CC CC GG GG FF CC GG CC";

/** The chords of B, one letter per half bar. It turns to G major through D in bars 14 and 15. */
const B_HALVES = "CC GC cG GG CC DD GD GG";

/** `halves` with each letter doubled, one letter per half note, for the patterns of Epic and Legendary. */
function perBeat(halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => chord + chord).join(""))
    .join(" ");
}

/** `beats` with each beat before a new chord, and the last, in small letters, so the hand lifts to jump. */
function lifted(beats: string): string {
  const letters = [...beats.replaceAll(" ", "")].map((chord) => chord.toUpperCase());
  const marked = letters.map((chord, index) => (chord === letters[index + 1] ? chord : chord.toLowerCase()));
  return marked.join("").replace(/(....)(?=.)/g, "$1 ");
}

/** Half a bar of held fifth or bass note in quarters, the hand kept on C to G. */
const HELD: Record<string, string> = {
  C: "C3+G3/5+1:4",
  c: "C3+G3/5+1:4",
  G: "D3+G3/4+1:4",
  F: "F3/2:4",
  D: "D3/4:4",
};

/** Common's left hand from one letter per half bar: a chord over a whole bar is held, not struck twice. */
function held(halves: string): string {
  return halves
    .split(" ")
    .map((bar) => (bar[0] === bar[1] ? HELD[bar[0]!]!.replace(":4", ":8") : bar.split("").map((chord) => HELD[chord]).join(" ")))
    .join(" | ");
}

/**
 * Half a bar of block chord in quarters, the hand kept on C to G. G is a G seventh without its B, and
 * `g` leaves out the F under the tune's E. `c` is the open fifth under the tune's F. F sits over C, and D
 * takes F sharp once, then `d` holds D alone, so B keeps its sharps to three in four bars.
 */
const BLOCK: Record<string, string> = {
  C: "C3+E3+G3/5+3+1:4",
  c: "C3+G3/5+1:4",
  G: "D3+F3+G3/4+2+1:4",
  g: "D3+G3/4+1:4",
  F: "C3+F3/5+2:4",
  D: "D3+F#3/4+2:4",
  d: "D3/4:4",
};

/** A beat of Alberti bass in eighths: low, high, middle, high. A small letter ends on a rest for the jump. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  c: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  G: "G2/5:1 D3/1:1 B2/3:1 D3/1:1",
  g: "G2/5:1 D3/1:1 B2/3:1 r:1",
  F: "C3/5:1 A3/1:1 F3/2:1 A3/1:1",
  f: "C3/5:1 A3/1:1 F3/2:1 r:1",
  D: "D3/5:1 A3/1:1 F#3/3:1 A3/1:1",
  d: "D3/5:1 A3/1:1 F#3/3:1 r:1",
};

/** A beat of broken chord in eighths: root, fifth, octave, fifth. A small letter ends on a rest for the jump. */
const BROKEN: Record<string, string> = {
  C: "C2/5:1 G2/2:1 C3/1:1 G2/2:1",
  c: "C2/5:1 G2/2:1 C3/1:1 r:1",
  G: "G2/5:1 D3/2:1 G3/1:1 D3/2:1",
  g: "G2/5:1 D3/2:1 G3/1:1 r:1",
  F: "F2/5:1 C3/2:1 F3/1:1 C3/2:1",
  f: "F2/5:1 C3/2:1 F3/1:1 r:1",
};

/** A beat of stride in sixteenths: the root in octaves, then the chord, each an eighth with an eighth's rest. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:2 r:2 E3+G3+C4/3+2+1:2 r:2",
  G: "G1+G2/5+1:2 r:2 B2+F3+G3/5+2+1:2 r:2",
  F: "F1+F2/5+1:2 r:2 A2+C3+F3/5+3+1:2 r:2",
  D: "D2+D3/5+1:2 r:2 A2+D3+F#3/5+2+1:2 r:2",
};

/** A beat of arpeggio in sixteenths, up from the root and back a third, then an eighth's rest for the jump. */
const ARPEGGIO: Record<string, string> = {
  C: "C2/5:1 G2/3:1 C3/2:1 E3/1:1 G3/3:1 E3/1:1 r:2",
  G: "G1/5:1 D2/3:1 G2/2:1 B2/1:1 D3/3:1 B2/1:1 r:2",
  F: "F1/5:1 C2/3:1 F2/2:1 A2/1:1 C3/3:1 A2/1:1 r:2",
};

/** The right hand of A and B for Common and Rare, then the second half of A, which ends at home on C. */
const SHORT_RIGHT = [A_FIRST, A_SECOND, B_PART, A_SECOND].join(" | ");

/** The chords of Common and Rare, one letter per half bar, as the right hand plays them. */
const SHORT_HALVES = `${A_HALVES} ${B_HALVES} FF CC GG CC`;

/** A and B an octave up in sixteenths, with a quick turn in each long note at the end of a phrase. */
const TURNS = octaveUp(scaled([A_FIRST, A_SECOND, B_PART].join(" | "), 4))
  .replace("D5/2:32", "D5/2:24 E5/3:2 D5/2:2 C5/1:2 D5/2:2")
  .replace("C5/2:32", "C5/2:24 D5/3:2 E5/4:2 D5/3:2 C5/2:2")
  .replace("B4/1:32", "B4/1:24 C5/2:2 D5/3:2 C5/2:2 B4/1:2")
  .replace("G5/3:32", "G5/3:24 A5/4:2 G5/3:2 F#5/2:2 r:2");

/** The last A in octaves in sixteenths, without its last bar, the hand lifted for an eighth before each leap. */
const A_OCTAVES = octaves(scaled([A_FIRST, A_SECOND].join(" | "), 4))
  .replace("G4+G5/1+5:16 C4+C5/1+5:16", "G4+G5/1+5:14 r:2 C4+C5/1+5:16")
  .replace("D4+D5/1+5:32", "D4+D5/1+5:30 r:2")
  .replace("G4+G5/1+5:8 | C5+C6/1+5:16", "G4+G5/1+5:6 r:2 | C5+C6/1+5:14 r:2")
  .replace(/ \| C4\+C5\/1\+5:32$/, "");

export const tochterZion: OurSong = {
  slug: "tochter-zion",
  title: "Tochter Zion, freue dich",
  source: {
    composer: "George Frideric Handel",
    died: 1759,
    published: 1847,
    edition: "the first print with Friedrich Heinrich Ranke's words, 1847, after Handel's chorus See, the conqu'ring hero comes",
  },
  about:
    "Tochter Zion, freue dich means Daughter of Zion, rejoice in German. " +
    "George Frideric Handel wrote the chorus See, the conqu'ring hero comes in 1747 for his oratorio Joshua. " +
    "In 1751 he added it to his oratorio Judas Maccabaeus. " +
    "Friedrich Heinrich Ranke later set German words to the tune, in Erlangen.",
  funFact: "In 1905, Henry Wood used the tune in his Fantasia on British Sea Songs, a piece often heard at the Last Night of the Proms.",
  mythic: null,
  collection: "christmas",
  aka: ["See, the Conqu'ring Hero Comes", "À toi la gloire"],
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 168,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: SHORT_RIGHT,
      left: held(SHORT_HALVES),
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 9 to 16 with the right hand alone, where the tune dips down to B.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Now the left hand alone. It holds one shape for each half bar or longer.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 3, toBar: 3, kind: "rhythm", text: "Bar 3 climbs D, E, F and G, then comes back down. Keep the four climbing notes even." },
        { fromBar: 6, toBar: 7, kind: "fingering", text: "Lift the hand after the G of bar 6. Finger 5 lands on F, and the hand walks down to C." },
        { fromBar: 13, toBar: 14, kind: "trick", text: "The last C of bar 13 is short. Use the rest to move the hand up, with finger 4 on A." },
      ],
      tricky: {
        7: "Finger 5 lands on F after the lift, then fingers 4 and 3 play E and D.",
        14: "Finger 4 plays A, and finger 2 plays F sharp, the black key between F and G.",
        19: "The same move as bar 7: lift after the G, and land finger 5 on F.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 184,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: SHORT_RIGHT,
      left: bars(BLOCK, "CC CC gg GG FF CC gg CC CC GC cG GG CC Dd Gd GG FF CC gg CC"),
      skills: ["triads", "position-change"],
      practice: [
        { text: "Play the left hand alone, and press the notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play bars 9 to 16 with the right hand alone. The tune turns towards G, with two F sharps.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the whole song, slowly.", hands: "both", speed: 0.6, loop: null, wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the chords softer than the tune, so the tune stands out like a trumpet call." },
        { fromBar: 10, toBar: 11, kind: "rhythm", text: "Here the left hand changes chord in the middle of the bar. Count four, and change on three." },
        { fromBar: 14, toBar: 15, kind: "fingering", text: "In bar 14 the left finger 2 takes F sharp, and in bar 15 it moves back to F." },
      ],
      tricky: {
        7: "Lift after the G, land finger 5 on F, and press the G chord with the left hand.",
        14: "Both hands play an F sharp. Right finger 2 and left finger 2 each take the black key.",
        19: "The same move as bar 7: lift after the G, and land finger 5 on F.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 120,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [
        scaled([A_FIRST, A_SECOND, B_PART].join(" | "), 2).replace(/G4\/3:16$/, "G4/3:15 r:1"),
        octaveUp(scaled([A_FIRST, A_SECOND].join(" | "), 2)).replace(/ \| C5\/2:16$/, "").replace(/D5\/3:4$/, "D5/3:3 r:1"),
        "E4+G4+C5/1+2+5:16",
      ].join(" | "),
      left: [
        bars(ALBERTI, perBeat(`${A_HALVES} ${B_HALVES}`).replace(/G$/, "g")),
        bars(BROKEN, lifted(perBeat(A_HALVES)).replace(/ [^ ]+$/, "")),
        "C2+G2+C3/5+2+1:16",
      ].join(" | "),
      pedal: [...Array(23).fill("P:4 P:4 P:4 P:4"), "P:16"].join(" | "),
      skills: ["alberti-bass", "broken-chords", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the broken chords of the last part alone, and lift the hand on each rest.", hands: "left", speed: 0.5, loop: [17, 20], wait: false },
        { text: "Join the hands on bars 1 to 16, slowly.", hands: "both", speed: 0.5, loop: [1, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 16, toBar: 17, kind: "trick", text: "Both hands lift at the end of bar 16. The right hand jumps up an octave, and the left drops to a low C." },
        { fromBar: 1, toBar: 24, kind: "sound", text: "Change the pedal on each beat, as the left hand starts a new group of four." },
      ],
      tricky: {
        7: "Lift after the G, and land finger 5 on F, while the Alberti bass turns to G.",
        17: "The tune starts again an octave up, while the left hand starts its broken chords on the low C.",
        23: "Fingers 5, 4 and 3 walk down F, E and D. Lift on the last D to reach the final chord.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 100,
      numerator: 4,
      denominator: 2,
      steps: 8,
      right: [TURNS, A_OCTAVES, "C4+E4+G4+C5/1+2+3+5:32"].join(" | "),
      left: [
        bars(STRIDE, perBeat(`${A_HALVES} ${B_HALVES}`).toUpperCase()),
        bars(ARPEGGIO, perBeat(A_HALVES).replace(/ [^ ]+$/, "")),
        "C2+G2+C3/5+2+1:32",
      ].join(" | "),
      pedal: [...Array(23).fill("P:8 P:8 P:8 P:8"), "P:32"].join(" | "),
      skills: ["stride", "arpeggios", "sixteenth-notes"],
      practice: [
        { text: "Play the stride bass alone: jump down for the low octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play bars 1 to 8 with the right hand alone, and keep the quick turns light.", hands: "right", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the arpeggios of the last part in the left hand alone.", hands: "left", speed: 0.5, loop: [17, 20], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "trick", text: "In stride, look at the low octave and let the hand find the chord by feel." },
        { fromBar: 4, toBar: 4, kind: "sound", text: "The quick turn at the end of bar 4 decorates the long D. Play it softer than the tune." },
        { fromBar: 17, toBar: 23, kind: "fingering", text: "Keep the thumb and little finger an octave apart, and let the wrist bounce." },
      ],
      tricky: {
        3: "The tune climbs D, E, F and G an octave up, while the stride bass jumps under it.",
        7: "Lift after the G, land finger 5 on F, and walk down while the stride bass turns to G.",
        11: "The left hand changes from C to G in the middle of the bar. Keep the stride even.",
      },
    },
  },
  de: {
    about:
      "Georg Friedrich Händel schrieb 1747 den Chor \"See, the conqu'ring hero comes\" für sein Oratorium Joshua. " +
      "1751 nahm er ihn in sein Oratorium Judas Maccabaeus auf. " +
      "Später unterlegte Friedrich Heinrich Ranke der Melodie in Erlangen den deutschen Text \"Tochter Zion, freue dich\".",
    funFact:
      "Henry Wood nutzte die Melodie 1905 in seiner Fantasia on British Sea Songs. Das Stück erklingt oft bei der Last Night of the Proms.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Lied auf jeden Ton warten.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand. Dort taucht die Melodie hinab zum H.",
          "Jetzt die linke Hand allein. Sie hält jede Form einen halben Takt oder länger.",
          "Nimm beide Hände zusammen, und spiel das ganze Lied langsam.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Takt 3 steigt über D, E, F und G und kommt wieder herab. Spiel die vier steigenden Töne gleichmäßig.",
          "Heb die Hand nach dem G in Takt 6 an. Finger 5 landet auf dem F, und die Hand wandert hinab zum C.",
          "Das letzte C in Takt 13 ist kurz. Nutz die Pause, um die Hand nach oben zu verschieben, mit Finger 4 auf A.",
        ],
        tricky: {
          7: "Nach dem Abheben landet Finger 5 auf dem F, dann spielen Finger 4 und 3 das E und das D.",
          14: "Finger 4 spielt das A, und Finger 2 spielt das Fis, die schwarze Taste zwischen F und G.",
          19: "Dieselbe Bewegung wie in Takt 7: Heb nach dem G ab, und setz Finger 5 auf das F.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein, und drück die Töne jedes Akkords zusammen.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand. Die Melodie wendet sich nach G, mit zwei Fis.",
          "Spiel das ganze Lied langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Spiel die Akkorde leiser als die Melodie, damit sie heraussticht wie ein Trompetensignal.",
          "Hier wechselt die linke Hand den Akkord in der Taktmitte. Zähl bis vier, und wechsle auf drei.",
          "In Takt 14 nimmt Finger 2 der linken Hand das Fis, und in Takt 15 geht er zurück zum F.",
        ],
        tricky: {
          7: "Heb nach dem G ab, setz Finger 5 auf das F, und drück mit der linken Hand den G-Akkord.",
          14: "Beide Hände spielen ein Fis. Rechts und links nimmt jeweils Finger 2 die schwarze Taste.",
          19: "Dieselbe Bewegung wie in Takt 7: Heb nach dem G ab, und setz Finger 5 auf das F.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die gebrochenen Akkorde des letzten Teils allein, und heb die Hand bei jeder Pause an.",
          "Spiel die Takte 1 bis 16 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise, damit die Melodie darüber singt.",
          "Beide Hände heben am Ende von Takt 16 ab. Die rechte Hand springt eine Oktave hinauf, die linke fällt zu einem tiefen C.",
          "Wechsle das Pedal auf jedem Schlag, sobald die linke Hand eine neue Vierergruppe beginnt.",
        ],
        tricky: {
          7: "Heb nach dem G ab, und setz Finger 5 auf das F, während der Alberti-Bass nach G wechselt.",
          17: "Die Melodie beginnt eine Oktave höher von vorn, während die linke Hand ihre gebrochenen Akkorde auf dem tiefen C beginnt.",
          23: "Finger 5, 4 und 3 wandern hinab über F, E und D. Heb beim letzten D ab, um den Schlussakkord zu erreichen.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Stride-Bass allein: Spring hinunter zur tiefen Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Takte 1 bis 8 nur mit der rechten Hand, und halt die schnellen Doppelschläge leicht.",
          "Spiel die Arpeggien des letzten Teils nur mit der linken Hand.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau beim Stride auf die tiefe Oktave, und lass die Hand den Akkord nach Gefühl finden.",
          "Der schnelle Doppelschlag am Ende von Takt 4 schmückt das lange D. Spiel ihn leiser als die Melodie.",
          "Halt Daumen und kleinen Finger eine Oktave auseinander, und lass das Handgelenk federn.",
        ],
        tricky: {
          3: "Die Melodie steigt eine Oktave höher über D, E, F und G, während der Stride-Bass darunter springt.",
          7: "Heb nach dem G ab, setz Finger 5 auf das F, und geh hinab, während der Stride-Bass nach G wechselt.",
          11: "Die linke Hand wechselt in der Taktmitte von C nach G. Halt den Stride gleichmäßig.",
        },
      },
    },
  },
};

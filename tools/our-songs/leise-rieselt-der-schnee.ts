/**
 * *Leise rieselt der Schnee*: the German Advent song, in four versions of ours.
 *
 * The tune is the whole verse: four short phrases, each ending on a long note and a rest. It is in
 * C major, in 6/8 with no pickup, and every version plays it twice.
 *
 * The tune is written in 6/2, every length four times as long, so a unit is a quarter. The sixteenth
 * of the dotted pair in bar 7 is then a quarter, and Common plays it at its place. The hook is bars 1
 * and 2, the opening phrase.
 *
 * Common plays the tune over held fifths, with the left thumb kept on G. Rare plays it an
 * octave up, over block triads and then a waltz bass. Epic puts an Alberti bass under the first verse,
 * and plays the second in thirds and sixths over a waltz bass, with the pedal. Legendary sets the tune
 * in chords over a stride bass, then in octaves over arpeggios.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 6/2, in quarters: the eight bars of the verse. */
const tune = [
  "E4:4 E4:2 D4:2 E4:2 D4:2 | C4:10 r:2 | C4:4 A3:2 C4:2 B3:2 A3:2 | G3:10 r:2",
  "D4:2 C#4:2 D4:2 F4:2 E4:2 D4:2 | C4:10 r:2 | D4:3 A3:1 A3:2 B3:2 A3:2 B3:2 | C4:10 r:2",
].join(" | ");

/** The verse in the right hand, in quarters, with the thumb on middle C for the opening. */
const VERSE = [
  "E4/3:4 E4/3:2 D4/2:2 E4/3:2 D4/2:2 | C4/1:10 r:2",
  "C4/4:4 A3/2:2 C4/4:2 B3/3:2 A3/2:2 | G3/1:10 r:2",
  "D4/2:2 C#4/1:2 D4/2:2 F4/4:2 E4/3:2 D4/2:2 | C4/1:10 r:2",
  "D4/4:3 A3/1:1 A3/1:2 B3/2:2 A3/1:2 B3/2:2 | C4/3:10 r:2",
].join(" | ");

/** `text` an octave higher. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** Bars of `patterns` from `halves`, such as `"CC FG"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/**
 * The chords of the verse, one letter per half bar: C, F, G seventh, G and D minor. H is the G seventh
 * of bar 3, whose half starts under the tune's C, so a bass on B would clash with it.
 */
const CHORDS = "CC CC FH CC SG CC DS CC";

/** The block chords of Rare's first verse, in quarters, with the thumb kept on G. */
const BLOCK = [
  "C3+E3+G3/5+3+1:12 | C3+E3+G3/5+3+1:12 | C3+F3/5+2:6 D3+F3+G3/4+2+1:6 | C3+E3+G3/5+3+1:12",
  "F3+G3/2+1:6 D3+G3/4+1:6 | C3+E3+G3/5+3+1:12 | D3+F3/4+2:6 D3+F3+G3/4+2+1:6 | C3+E3+G3/5+3+1:12",
].join(" | ");

/** One half bar of waltz bass in quarters: the bass note, then the chord above it twice. */
const WALTZ: Record<string, string> = {
  C: "C3/5:2 E3+G3/3+1:2 E3+G3/3+1:2",
  F: "C3/5:2 F3+A3/2+1:2 F3+A3/2+1:2",
  S: "B2/5:2 F3+G3/2+1:2 F3+G3/2+1:2",
  H: "D3/4:2 F3+G3/2+1:2 F3+G3/2+1:2",
  G: "B2/5:2 D3+G3/3+1:2 D3+G3/3+1:2",
  D: "D3/4:2 F3+A3/2+1:2 F3+A3/2+1:2",
};

/** The second verse's waltz bass, in quarters, ending on a held C major chord. */
const WALTZ_VERSE = `${halfBars(WALTZ, CHORDS.slice(0, -3))} | ${WALTZ.C} C3+E3+G3/5+3+1:6`;

/** One half bar of Alberti bass in quarters: low, high, middle, high, middle, high. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 E3/3:1 G3/1:1",
  F: "C3/5:1 A3/1:1 F3/2:1 A3/1:1 F3/2:1 A3/1:1",
  S: "B2/5:1 G3/1:1 F3/2:1 G3/1:1 F3/2:1 G3/1:1",
  H: "D3/4:1 G3/1:1 F3/2:1 G3/1:1 F3/2:1 G3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1 D3/3:1 G3/1:1",
  D: "D3/4:1 A3/1:1 F3/2:1 A3/1:1 F3/2:1 A3/1:1",
};

/** Epic's second verse in the right hand, in quarters: a third or sixth under most notes of the tune. */
const THIRDS = [
  "C5+E5/2+4:4 C5+E5/2+4:2 D5/3:2 C5+E5/2+4:2 D5/3:2 | E4+C5/1+3:10 r:2",
  "A4+C5/2+4:4 F4+A4/1+2:2 A4+C5/2+4:2 G4+B4/1+3:2 F4+A4/1+2:2 | E4+G4/1+2:10 r:2",
  "B4+D5/2+4:2 A4+C#5/1+3:2 B4+D5/2+4:2 D5+F5/3+5:2 C5+E5/2+4:2 B4+D5/1+3:2 | E4+C5/1+3:10 r:2",
  "F4+D5/1+5:3 F4+A4/1+3:1 F4+A4/1+3:2 G4+B4/2+4:2 F4+A4/1+3:2 G4+B4/2+4:2 | E4+G4+C5/1+2+5:12",
].join(" | ");

/** Legendary's first verse in the right hand, in quarters: the tune on top of chords. */
const CHORD_VERSE = [
  "G4+C5+E5/1+3+5:4 G4+C5+E5/1+3+5:2 G4+D5/1+4:2 G4+C5+E5/1+3+5:2 G4+D5/1+4:2 | E4+G4+C5/1+2+4:10 r:2",
  "F4+A4+C5/1+2+4:4 F4+A4/1+3:2 F4+A4+C5/1+2+4:2 F4+G4+B4/1+2+4:2 F4+A4/1+3:2 | E4+G4/1+3:10 r:2",
  "B4+D5/2+4:2 A4+C#5/1+3:2 B4+D5/2+4:2 B4+D5+F5/1+3+5:2 G4+E5/1+4:2 G4+B4+D5/1+2+4:2 | E4+G4+C5/1+2+4:10 r:2",
  "F4+A4+D5/1+2+5:3 F4+A4/1+2:1 F4+A4/1+2:2 G4+B4/1+3:2 F4+A4/1+2:2 G4+B4/1+3:2 | E4+G4+C5/1+2+4:10 r:2",
].join(" | ");

/**
 * Legendary's second verse in the right hand, in eighths: the tune in octaves, ending on a full chord.
 * The D octave of bar 15 lets go an eighth early, so the hand can jump down to A.
 */
const OCTAVE_VERSE = [
  "E5+E6/1+5:8 E5+E6/1+5:4 D5+D6/1+5:4 E5+E6/1+5:4 D5+D6/1+5:4 | C5+C6/1+5:20 r:4",
  "C5+C6/1+5:8 A4+A5/1+5:4 C5+C6/1+5:4 B4+B5/1+5:4 A4+A5/1+5:4 | G4+G5/1+5:20 r:4",
  "D5+D6/1+5:4 C#5+C#6/1+5:4 D5+D6/1+5:4 F5+F6/1+5:4 E5+E6/1+5:4 D5+D6/1+5:4 | C5+C6/1+5:20 r:4",
  "D5+D6/1+5:5 r:1 A4+A5/1+5:2 A4+A5/1+5:4 B4+B5/1+5:4 A4+A5/1+5:4 B4+B5/1+5:4 | C5+E5+G5+C6/1+2+3+5:24",
].join(" | ");

/** One half bar of stride in eighths, each part ending on a rest for the jump: the root in octaves, then the chord twice. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:3 r:1 C3+E3+G3/5+3+1:3 r:1 C3+E3+G3/5+3+1:3 r:1",
  F: "F2+F3/5+1:3 r:1 C3+F3+A3/5+2+1:3 r:1 C3+F3+A3/5+2+1:3 r:1",
  S: "G2+G3/5+1:3 r:1 B2+F3+G3/5+2+1:3 r:1 B2+F3+G3/5+2+1:3 r:1",
  H: "G2+G3/5+1:3 r:1 B2+F3+G3/5+2+1:3 r:1 B2+F3+G3/5+2+1:3 r:1",
  G: "G2+G3/5+1:3 r:1 B2+D3+G3/5+3+1:3 r:1 B2+D3+G3/5+3+1:3 r:1",
  D: "D2+D3/5+1:3 r:1 D3+F3+A3/5+3+1:3 r:1 D3+F3+A3/5+3+1:3 r:1",
};

/** One half bar of arpeggio in eighths, up and back down, ending on a rest for the jump. */
const ARPEGGIO: Record<string, string> = {
  F: "F2/5:2 C3/3:2 F3/2:2 A3/1:2 F3/2:2 C3/3:1 r:1",
  S: "G2/5:2 D3/3:2 F3/2:2 B3/1:2 F3/2:2 D3/3:1 r:1",
  T: "G2/5:2 B2/4:2 F3/2:2 G3/1:2 F3/2:2 B2/4:1 r:1",
  G: "G2/5:2 D3/3:2 G3/2:2 B3/1:2 G3/2:2 D3/3:1 r:1",
  D: "D2/5:2 A2/3:2 D3/2:2 F3/1:2 D3/2:2 A2/3:1 r:1",
};

/** One whole bar of arpeggio on C in eighths, over two octaves up and back down. */
const ARPEGGIO_C = "C2/5:2 G2/3:2 C3/2:2 E3/1:2 G3/3:2 C4/2:2 E4/1:2 C4/2:2 G3/3:2 E3/1:2 C3/2:2 G2/3:1 r:1";

/** The second verse's arpeggios in eighths, ending on a held open C. */
const ARPEGGIO_VERSE = [
  ARPEGGIO_C,
  ARPEGGIO_C,
  `${ARPEGGIO.F} ${ARPEGGIO.S}`,
  ARPEGGIO_C,
  `${ARPEGGIO.T} ${ARPEGGIO.G}`,
  ARPEGGIO_C,
  `${ARPEGGIO.D} ${ARPEGGIO.S}`,
  "C2+G2+C3/5+2+1:24",
].join(" | ");

export const leiseRieseltDerSchnee: OurSong = {
  slug: "leise-rieselt-der-schnee",
  title: "Leise rieselt der Schnee",
  source: {
    composer: "Traditional",
    died: null,
    published: 1924,
    edition: "Urania, Heft 3, December 1924, printed as an old Christmas song (Altes Weihnachtslied)",
  },
  about:
    "The German title Leise rieselt der Schnee means Softly falls the snow. " +
    "It is one of the best-known Advent songs in the German language. " +
    "The pastor Eduard Ebel wrote the words in 1895, and his book printed them with no tune. " +
    "Many books credit the tune to Ebel too, but no source shows it, and others call it a folk tune.",
  funFact:
    "Each of its three verses opens with a short picture: the soft snow, warm hearts, and the holy night that comes soon.",
  mythic: null,
  collection: "christmas",
  tune: { text: tune, numerator: 6, denominator: 2, steps: 2, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 200,
      numerator: 6,
      denominator: 2,
      steps: 2,
      right: [VERSE, VERSE].join(" | "),
      left: Array(2)
        .fill("C3+G3/5+1:12 | C3+G3/5+1:12 | C3+F3/5+2:6 D3+G3/4+1:6 | C3/5:12 | G3/1:6 D3+G3/4+1:6 | C3+G3/5+1:12 | D3/4:6 D3+G3/4+1:6 | C3+G3/5+1:12")
        .join(" | "),
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play the first two bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 2], wait: true },
        { text: "Play bars 1 to 8 with the right hand alone. That is the whole verse once.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Now the left hand alone. It holds one shape for a bar, or two shapes at most.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Your right thumb starts on middle C, and finger 3 takes the first E." },
        { fromBar: 3, toBar: 4, kind: "trick", text: "Finger 4 takes the C your thumb held in bar 2, and the hand moves down until the thumb sits on G." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Each phrase ends on a long note and a short rest. Let the note ring, then breathe, like falling snow." },
      ],
      tricky: {
        7: "Finger 4 holds D, then the thumb drops to A twice. Keep the quick A light.",
        9: "The verse starts again. Lift finger 3 off C during the rest, and place it on E.",
        15: "The same hop as bar 7: a long D, then a quick A on the thumb.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 240,
      numerator: 6,
      denominator: 2,
      steps: 2,
      right: octaveUp([VERSE, VERSE].join(" | ")),
      left: [BLOCK, WALTZ_VERSE].join(" | "),
      skills: ["triads", "waltz-bass"],
      practice: [
        { text: "Play the left hand alone, and press the notes of each chord together.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the waltz bass of the second verse alone: low note, chord, chord.", hands: "left", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "fingering", text: "The left thumb stays on G for the whole first verse. Only the other fingers move." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "In the waltz bass, play the low note a little louder than the chords after it." },
        { fromBar: 5, toBar: 5, kind: "fingering", text: "C sharp is the one black key of the song. Let the thumb slide onto it and off again." },
      ],
      tricky: {
        7: "Finger 4 holds D, then the thumb drops to A twice, while the left hand changes chord at the half bar.",
        9: "The verse starts again, and the waltz begins. Move finger 3 from C up to E during the rest.",
        15: "The quick A comes again, now over the waltz bass. Count the long D fully before it.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 260,
      numerator: 6,
      denominator: 2,
      steps: 2,
      right: [octaveUp(VERSE), THIRDS].join(" | "),
      left: [halfBars(ALBERTI, CHORDS), WALTZ_VERSE].join(" | "),
      pedal: [...Array(15).fill("P:6 P:6"), "P:12"].join(" | "),
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Join the hands on the first verse, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Change the pedal at each half bar, as the left hand starts its pattern again." },
      ],
      tricky: {
        7: "The quick A falls on the thumb while the left hand rolls through D minor. Keep the bass even under it.",
        13: "The pairs circle C sharp. Fingers 1 and 3 take A and C sharp, then 2 and 4 return to B and D.",
        14: "The hand opens from a third to a sixth, with the thumb on E and finger 3 on C.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 280,
      numerator: 6,
      denominator: 2,
      steps: 4,
      right: [inEighths(CHORD_VERSE), OCTAVE_VERSE].join(" | "),
      left: [halfBars(STRIDE, CHORDS), ARPEGGIO_VERSE].join(" | "),
      pedal: [...Array(15).fill("P:12 P:12"), "P:24"].join(" | "),
      skills: ["stride", "melody-in-chords", "arpeggios"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the arpeggios of the second verse in the left hand alone.", hands: "left", speed: 0.5, loop: [9, 12], wait: false },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "In stride, look at the octave and let the hand find the chord by feel." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Up high, the octaves should ring like bells. Keep the wrist loose." },
        { fromBar: 15, toBar: 15, kind: "rhythm", text: "Let go of the D octave a moment early, so the hand lands on the quick A in time." },
      ],
      tricky: {
        9: "Both hands change their pattern. The right hand plays octaves, and the left starts its first arpeggio over two octaves.",
        12: "Hold the G octave while the left hand climbs to the high E and back down.",
        14: "The same climb as bar 12, now under the C octave. Let finger 3 cross over the thumb smoothly.",
      },
    },
  },
  de: {
    about:
      "Leise rieselt der Schnee heißt auf Englisch Softly falls the snow. " +
      "Es ist eines der bekanntesten Adventslieder in deutscher Sprache. " +
      "Der Pfarrer Eduard Ebel schrieb den Text 1895, und sein Buch druckte ihn ohne Melodie. " +
      "Viele Bücher schreiben auch die Melodie Ebel zu, doch keine Quelle belegt das, und andere nennen sie ein Volkslied.",
    funFact:
      "Jede der drei Strophen beginnt mit einem kurzen Bild: dem leisen Schnee, den warmen Herzen und der heiligen Nacht, die bald kommt.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten zwei Takte nur mit der rechten Hand, und lass das Lied auf jeden Ton warten.",
          "Spiel die Takte 1 bis 8 nur mit der rechten Hand. Das ist einmal die ganze Strophe.",
          "Jetzt die linke Hand allein. Sie hält eine Handform pro Takt, höchstens zwei.",
          "Spiel das ganze Lied langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Dein rechter Daumen beginnt auf dem mittleren C, und Finger 3 nimmt das erste E.",
          "Finger 4 nimmt das C, das dein Daumen in Takt 2 hielt. Dann rückt die Hand hinab, bis der Daumen auf dem G sitzt.",
          "Jede Phrase endet mit einem langen Ton und einer kurzen Pause. Lass den Ton klingen, dann atme, wie fallender Schnee.",
        ],
        tricky: {
          7: "Finger 4 hält das D, dann fällt der Daumen zweimal auf das A. Spiel das schnelle A leicht.",
          9: "Die Strophe beginnt von vorn. Heb Finger 3 in der Pause vom C, und setz ihn auf das E.",
          15: "Derselbe Hüpfer wie in Takt 7: ein langes D, dann ein schnelles A mit dem Daumen.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein, und drück die Töne jedes Akkords zusammen.",
          "Spiel den Walzerbass der zweiten Strophe allein: tiefer Ton, Akkord, Akkord.",
          "Spiel die erste Strophe langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Der linke Daumen bleibt die ganze erste Strophe auf dem G. Nur die anderen Finger bewegen sich.",
          "Spiel im Walzerbass den tiefen Ton etwas lauter als die Akkorde danach.",
          "Cis ist die einzige schwarze Taste im Lied. Lass den Daumen darauf und wieder herunter gleiten.",
        ],
        tricky: {
          7: "Finger 4 hält das D, dann fällt der Daumen zweimal auf das A, während die linke Hand zur Takthälfte den Akkord wechselt.",
          9: "Die Strophe beginnt von vorn, und der Walzer setzt ein. Rück Finger 3 in der Pause vom C hinauf zum E.",
          15: "Das schnelle A kommt wieder, jetzt über dem Walzerbass. Zähl das lange D vorher ganz aus.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und halt beide Töne jedes Zweiklangs zusammen.",
          "Spiel die erste Strophe langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise, damit die Melodie darüber singt.",
          "Die Melodie ist der obere Ton jedes Zweiklangs, also lass den oberen Finger führen.",
          "Wechsle das Pedal auf jeder Takthälfte, sobald die linke Hand ihr Muster neu beginnt.",
        ],
        tricky: {
          7: "Das schnelle A fällt auf den Daumen, während die linke Hand durch d-Moll rollt. Halt den Bass darunter gleichmäßig.",
          13: "Die Zweiklänge kreisen um das Cis. Finger 1 und 3 nehmen A und Cis, dann kehren 2 und 4 zu H und D zurück.",
          14: "Die Hand öffnet sich von einer Terz zu einer Sexte, mit dem Daumen auf E und Finger 3 auf C.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Stride-Bass allein: Spring hinunter zur Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Akkorde der rechten Hand allein, und lass den oberen Finger die Melodie singen.",
          "Spiel die Arpeggien der zweiten Strophe nur mit der linken Hand.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau beim Stride auf die Oktave, und lass die Hand den Akkord nach Gefühl finden.",
          "Hoch oben sollen die Oktaven wie Glocken klingen. Halt das Handgelenk locker.",
          "Lös die D-Oktave einen Moment früher, damit die Hand rechtzeitig auf dem schnellen A landet.",
        ],
        tricky: {
          9: "Beide Hände wechseln ihr Muster. Die rechte Hand spielt Oktaven, und die linke beginnt ihr erstes Arpeggio über zwei Oktaven.",
          12: "Halt die G-Oktave, während die linke Hand hinauf zum hohen E steigt und wieder hinab.",
          14: "Derselbe Aufstieg wie in Takt 12, jetzt unter der C-Oktave. Lass Finger 3 geschmeidig über den Daumen greifen.",
        },
      },
    },
  },
};

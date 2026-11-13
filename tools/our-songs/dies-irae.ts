/**
 * *Dies irae*: the first stanza of the medieval sequence for the Requiem Mass, in four versions of ours.
 *
 * The tune is the chant's first stanza, three phrases, as the Vatican Graduale Romanum prints it. The
 * chant has no meter, so the tune sets it in 3/4: every note is a quarter, and each phrase ends on a held
 * note. The hook is the first phrase, bars 1 to 3.
 *
 * Common plays the tune over a D and A drone in one hand position, with single F, G and A roots. Rare
 * plays it twice: first over D minor triads and open fifths, then over a root and fifth in turns. Epic
 * puts a broken-chord bass with the pedal under it, then plays the tune again in open fourths and fifths,
 * as medieval singers did. Legendary tolls low octaves under the tune in octaves, then plays the tune in
 * the bass under high bell chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 3/4, in quarters: three phrases, each ending on a held note. */
const tune =
  "F5:1 E5:1 F5:1 | D5:1 E5:1 C5:1 | D5:1 D5:2 | F5:1 F5:1 G5:1 | F5:1 E5:1 D5:1 | C5:1 E5:1 F5:1 | E5:1 D5:2 | " +
  "A4:1 C5:1 D5:1 | D5:1 D5:1 C5:1 | E5:1 F5:1 E5:1 | D5:3";

/** The whole tune in the right hand, in quarters, with every note fingered. */
const RIGHT_QUARTERS =
  "F5/4:1 E5/3:1 F5/4:1 | D5/2:1 E5/3:1 C5/1:1 | D5/2:1 D5/2:2 | F5/4:1 F5/4:1 G5/5:1 | F5/4:1 E5/3:1 D5/2:1 | " +
  "C5/1:1 E5/3:1 F5/4:1 | E5/3:1 D5/2:2 | A4/1:1 C5/2:1 D5/3:1 | D5/3:1 D5/3:1 C5/2:1 | E5/4:1 F5/5:1 E5/4:1 | D5/3:3";

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** One bar of broken chord in eighths: the root, its fifth and its octave, by the chord's letter. */
const BROKEN: Record<string, string> = {
  d: "D2/5:1 A2/2:1 D3/1:1 A2/2:1 D3/1:1 A2/2:1",
  c: "C2/5:1 G2/2:1 C3/1:1 G2/2:1 C3/1:1 G2/2:1",
  f: "F2/5:1 C3/2:1 F3/1:1 C3/2:1 F3/1:1 C3/2:1",
  g: "G2/5:1 D3/2:1 G3/1:1 D3/2:1 G3/1:1 D3/2:1",
  a: "A2/5:1 E3/2:1 A3/1:1 E3/2:1 A3/1:1 A2/5:1",
};

/** One bar of bell in eighths: the root in low octaves, a rest, then its fifth and octave. */
const BELL: Record<string, string> = {
  d: "D1+D2/5+1:1 r:1 A2+D3/2+1:3 r:1",
  c: "C1+C2/5+1:1 r:1 G2+C3/2+1:3 r:1",
  f: "F1+F2/5+1:1 r:1 C3+F3/2+1:3 r:1",
  g: "G1+G2/5+1:1 r:1 D3+G3/2+1:3 r:1",
  a: "A1+A2/5+1:1 r:1 C#3+A3/2+1:3 r:1",
};

/** One bell chord on beat one, then a rest, in eighths, by the chord's letter. */
const CHIME: Record<string, string> = {
  d: "D5+F5+A5+D6/1+2+3+5:2 r:4",
  o: "D5+A5+D6/1+3+5:2 r:4",
  c: "C5+E5+G5+C6/1+2+3+5:2 r:4",
  f: "C5+F5+A5+C6/1+2+3+5:2 r:4",
  g: "D5+G5+A#5+D6/1+2+4+5:2 r:4",
  a: "A4+C#5+E5+A5/1+2+3+5:2 r:4",
};

/** Bars of `patterns` from `chords`, such as `"dcd"`: one letter per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  return [...chords].map((chord) => patterns[chord]).join(" | ");
}

/** The pedal held for `count` bars of 3/4 in eighths, changed at each bar line. */
function pedalBars(count: number): string {
  return Array.from({ length: count }, () => "P:6").join(" | ");
}

export const diesIrae: OurSong = {
  slug: "dies-irae",
  title: "Dies irae",
  collection: "film",
  source: {
    composer: "Traditional",
    died: null,
    published: 1908,
    edition:
      "The sequence Dies irae, its first stanza in the chant of the Vatican Graduale Romanum (1908), as Wikipedia's Dies irae article prints it",
  },
  about:
    "Dies irae is a medieval Latin chant about the Day of Judgement, sung in the Requiem Mass for centuries. " +
    "From Berlioz on, composers quote it whenever their music speaks of death. " +
    "The opening titles of Stanley Kubrick's film The Shining (1980) are built on it.",
  funFact: "Its first words mean \"day of wrath, that day\", and the first line ends with the world turned to ashes.",
  mythic: null,
  tune: { text: tune, numerator: 3, denominator: 4, key: D_MINOR, hookBars: [1, 3] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 92,
      numerator: 3,
      denominator: 4,
      right: RIGHT_QUARTERS,
      left: "D3+A3/5+1:3 | D3+A3/5+1:3 | D3+A3/5+1:3 | F3/3:3 | D3+A3/5+1:3 | A3/1:3 | D3+A3/5+1:3 | F3/3:3 | G3/2:3 | A3/1:3 | D3+F3/5+3:3",
      skills: ["open-fifths", "position-change"],
      practice: [
        { text: "Play the first three bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 3], wait: true },
        { text: "Play the right hand alone from bar 8, where the thumb moves down to A.", hands: "right", speed: 0.6, loop: [7, 11], wait: true },
        { text: "Now the left hand alone. It stays in one place, with the little finger on D.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first seven bars.", hands: "both", speed: 0.7, loop: [1, 7], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 3, kind: "sound", text: "Play slowly and evenly, like monks singing in a stone church." },
        { fromBar: 1, toBar: 7, kind: "fingering", text: "Your right thumb sits on C. Every note up to G is under a finger." },
        { fromBar: 7, toBar: 8, kind: "trick", text: "While D is held, slide the thumb down to A, ready for the last phrase." },
      ],
      tricky: {
        1: "Rock between fingers 4 and 3 for F, E and F. Keep the wrist still.",
        4: "Finger 4 plays F twice, then finger 5 reaches G. Do not move the hand.",
        10: "Rock between fingers 4 and 5 for E, F and E. The little finger plays F.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 100,
      numerator: 3,
      denominator: 4,
      right: `${RIGHT_QUARTERS} | ${RIGHT_QUARTERS}`,
      left: [
        "D3+F3+A3/5+3+1:1 D3+A3/5+1:2 | D3+F3+A3/5+3+1:1 D3+A3/5+1:2 | D3+F3+A3/5+3+1:3 | F3+A3/3+1:3",
        "D3+F3+A3/5+3+1:1 D3+A3/5+1:2 | A3/1:3 | D3+A3/5+1:1 D3+F3+A3/5+3+1:2",
        "F3+A3/3+1:3 | D3+G3/5+2:3 | A3/1:3 | D3+F3+A3/5+3+1:3",
        "D3/5:1 A3/1:2 | D3/5:1 A3/1:2 | D3+F3+A3/5+3+1:3 | F3/3:1 A3/1:2",
        "D3/5:1 A3/1:2 | A3/1:1 G3/2:2 | D3+A3/5+1:1 D3+F3+A3/5+3+1:2",
        "F3/3:1 A3/1:2 | G3/2:1 D3/5:2 | A3/1:3 | D3+F3+A3/5+3+1:3",
      ].join(" | "),
      skills: ["triads", "held-bass"],
      practice: [
        { text: "Play the left hand alone. It stays in one place, with the little finger on D.", hands: "left", speed: 0.6, loop: [1, 11], wait: true },
        { text: "Play the right hand alone on the first time through the tune.", hands: "right", speed: 0.6, loop: [1, 11], wait: true },
        { text: "Join the hands on the first phrase, and press the three notes of each chord as one.", hands: "both", speed: 0.6, loop: [1, 3], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "sound", text: "The chord drops to two notes on beat two, so the tune's E rings clear." },
        { fromBar: 12, toBar: 22, kind: "rhythm", text: "The second time, the left hand plays D, then A. Feel the slow swing of three." },
        { fromBar: 22, toBar: 22, kind: "sound", text: "Let the last D minor chord ring until it fades." },
      ],
      tricky: {
        1: "Press D, F and A together, then lift F on beat two and keep D and A down.",
        4: "The left hand plays F and A with fingers 3 and 1. The right hand's finger 5 reaches G.",
        12: "Use the held D in bar 11 to move the right thumb back up to C.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 88,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: [
        inEighths(RIGHT_QUARTERS),
        "A#4+F5/1+5:2 A4+E5/1+5:2 A#4+F5/1+5:2 | A4+D5/1+5:2 A4+E5/1+5:2 F4+C5/1+5:2 | A4+D5/1+5:2 A4+D5/1+5:4",
        "A#4+F5/1+5:2 A#4+F5/1+5:2 C5+G5/1+5:2 | A#4+F5/1+5:2 A4+E5/1+5:2 A4+D5/1+5:2 | F4+C5/1+5:2 A4+E5/1+5:2 A#4+F5/1+5:2",
        "A4+E5/1+5:2 A4+D5/1+5:4 | D4+A4/1+5:2 F4+C5/1+5:2 A4+D5/1+5:2 | A4+D5/1+5:2 A4+D5/1+5:2 F4+C5/1+5:2",
        "A4+E5/1+5:2 A4+F5/1+5:2 A4+E5/1+5:2 | F4+A4+D5/1+2+5:6",
      ].join(" | "),
      left: [bars(BROKEN, "dcdfdcdfgad"), bars(BROKEN, "dcdfdcdfga"), "D2+A2+D3/5+2+1:6"].join(" | "),
      pedal: pedalBars(22),
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the broken chords alone until they roll by themselves: low, middle, high, middle.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's two-note chords alone, and press both notes as one.", hands: "right", speed: 0.6, loop: [12, 15], wait: true },
        { text: "Join the hands on the first phrase, slowly.", hands: "both", speed: 0.5, loop: [1, 3], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 11, kind: "sound", text: "Change the pedal on every bar line. Lift it as the new bass note sounds." },
        { fromBar: 12, toBar: 21, kind: "sound", text: "Open fourths and fifths sound hollow and old. Singers harmonised chant this way a thousand years ago." },
        { fromBar: 12, toBar: 21, kind: "fingering", text: "Keep fingers 1 and 5 in one shape, and move the whole hand from note to note." },
      ],
      tricky: {
        13: "The thumb stays on A for two chords, then drops to F. Only the little finger moves at first.",
        16: "The thumb moves from B flat down to A, and the little finger walks down F, E, D.",
        17: "The hand climbs on every beat: F and C, A and E, then B flat and F.",
      },
    },
    legendary: {
      key: D_MINOR,
      bpm: 96,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: [
        "F4+F5/1+5:2 E4+E5/1+5:2 F4+F5/1+5:2 | D4+D5/1+5:2 E4+E5/1+5:1 r:1 C4+C5/1+5:2 | D4+D5/1+5:2 D4+F4+A4+D5/1+2+3+5:3 r:1",
        "F4+F5/1+5:2 F4+F5/1+5:2 G4+G5/1+5:2 | F4+F5/1+5:2 E4+E5/1+5:2 D4+D5/1+5:2 | C4+C5/1+5:1 r:1 E4+E5/1+5:2 F4+F5/1+5:2",
        "E4+E5/1+5:1 r:1 D4+F4+A4+D5/1+2+3+5:3 r:1",
        "A3+A4/1+5:2 C4+C5/1+5:2 D4+D5/1+5:2 | D4+D5/1+5:2 D4+D5/1+5:2 C4+C5/1+5:1 r:1 | E4+E5/1+5:2 F4+F5/1+5:2 E4+E5/1+5:1 r:1",
        "D4+F4+A4+D5/1+2+3+5:5 r:1",
        bars(CHIME, "dcdfdcofgad"),
        "D4+F4+A4+D5/1+2+3+5:6",
      ].join(" | "),
      left: [
        bars(BELL, "dcdfdcdfga"),
        "D1+D2/5+1:1 r:1 A2+D3+F3/5+2+1:3 r:1",
        "F2+F3/5+1:2 E2+E3/5+1:2 F2+F3/5+1:2 | D2+D3/5+1:2 E2+E3/5+1:1 r:1 C2+C3/5+1:2 | D2+D3/5+1:2 D2+D3/5+1:4",
        "F2+F3/5+1:2 F2+F3/5+1:2 G2+G3/5+1:2 | F2+F3/5+1:2 E2+E3/5+1:2 D2+D3/5+1:2 | C2+C3/5+1:1 r:1 E2+E3/5+1:2 F2+F3/5+1:2",
        "E2+E3/5+1:2 D2+D3/5+1:3 r:1",
        "A1+A2/5+1:2 C2+C3/5+1:2 D2+D3/5+1:2 | D2+D3/5+1:2 D2+D3/5+1:2 C2+C3/5+1:1 r:1 | E2+E3/5+1:2 F2+F3/5+1:2 E2+E3/5+1:2",
        "D2+D3/5+1:5 r:1",
        "D1+D2/5+1:6",
      ].join(" | "),
      pedal: pedalBars(23),
      skills: ["octave-bass", "melody-in-chords", "left-hand-melody"],
      practice: [
        { text: "Play the bell bass alone: strike the low octave, then lift and land on the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's octaves alone, and keep the hand in one shape.", hands: "right", speed: 0.5, loop: [1, 7], wait: true },
        { text: "Play the left hand's tune alone in the second half, deep in the bass.", hands: "left", speed: 0.6, loop: [12, 22], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last octave ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 11, kind: "sound", text: "Strike each low octave like a church bell, then let the pedal carry its sound." },
        { fromBar: 12, toBar: 22, kind: "sound", text: "Now the tune sings in the bass. Play the high chords softly, like distant bells." },
        { fromBar: 7, toBar: 8, kind: "trick", text: "Lift the hand after the chord, and drop the thumb onto low A." },
      ],
      tricky: {
        2: "Lift off the E octave early, so the hand has time to drop to C.",
        5: "The octaves walk down F, E, D. Keep fingers 1 and 5 locked in one shape.",
        11: "Both hands play chords here. Lift each hand before the tune moves down into the bass.",
      },
    },
  },
  de: {
    about:
      "Dies irae ist ein mittelalterlicher lateinischer Gesang über das Jüngste Gericht, seit Jahrhunderten in der Totenmesse gesungen. " +
      "Seit Berlioz zitieren Komponisten ihn immer dann, wenn ihre Musik vom Tod spricht. " +
      "Der Vorspann von Stanley Kubricks Film The Shining (1980) ist auf ihm aufgebaut.",
    funFact: "Seine ersten Worte bedeuten \"Tag des Zorns, jener Tag\", und die erste Zeile endet mit der Welt, die zu Asche zerfällt.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten drei Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel ab Takt 8 nur die rechte Hand. Dort geht der Daumen hinab zum A.",
          "Jetzt die linke Hand allein. Sie bleibt an einer Stelle, mit dem kleinen Finger auf D.",
          "Spiel die ersten sieben Takte mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Spiel langsam und gleichmäßig, wie Mönche, die in einer Steinkirche singen.",
          "Dein rechter Daumen liegt auf C. Jeder Ton bis G liegt unter einem Finger.",
          "Während das D klingt, schieb den Daumen hinab zum A, bereit für die letzte Phrase.",
        ],
        tricky: {
          1: "Wieg zwischen Finger 4 und 3 für F, E und F. Halt das Handgelenk ruhig.",
          4: "Finger 4 spielt zweimal F, dann greift Finger 5 das G. Beweg die Hand nicht.",
          10: "Wieg zwischen Finger 4 und 5 für E, F und E. Der kleine Finger spielt das F.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Sie bleibt an einer Stelle, mit dem kleinen Finger auf D.",
          "Spiel beim ersten Durchgang der Melodie nur die rechte Hand.",
          "Spiel die erste Phrase mit beiden Händen, und drück die drei Töne jedes Akkords wie einen an.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Auf Schlag zwei bleiben vom Akkord zwei Töne, damit das E der Melodie klar klingt.",
          "Beim zweiten Mal spielt die linke Hand D, dann A. Spür den langsamen Schwung im Dreiertakt.",
          "Lass den letzten d-Moll-Akkord klingen, bis er verhallt.",
        ],
        tricky: {
          1: "Drück D, F und A zusammen, dann heb auf Schlag zwei das F und halt D und A.",
          4: "Die linke Hand spielt F und A mit Finger 3 und 1. Finger 5 der rechten Hand greift das G.",
          12: "Nutz das gehaltene D in Takt 11, um den rechten Daumen zurück hinauf zum C zu führen.",
        },
      },
      epic: {
        practice: [
          "Spiel die gebrochenen Akkorde allein, bis sie von selbst rollen: tief, Mitte, hoch, Mitte.",
          "Spiel die Zweiklänge der rechten Hand allein, und drück beide Töne wie einen an.",
          "Spiel die erste Phrase langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal an jedem Taktstrich. Heb es an, sobald der neue Basston klingt.",
          "Leere Quarten und Quinten klingen hohl und alt. So haben Sänger vor tausend Jahren Gesang mehrstimmig gemacht.",
          "Halt Finger 1 und 5 in einer Form, und beweg die ganze Hand von Ton zu Ton.",
        ],
        tricky: {
          13: "Der Daumen bleibt zwei Zweiklänge lang auf A, dann geht er hinab zum F. Zuerst bewegt sich nur der kleine Finger.",
          16: "Der Daumen geht vom B hinab zum A, und der kleine Finger geht F, E, D abwärts.",
          17: "Die Hand steigt auf jedem Schlag: F und C, A und E, dann B und F.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Glockenbass allein: Schlag die tiefe Oktave an, dann heb ab und lande auf dem Akkord.",
          "Spiel die Oktaven der rechten Hand allein, und halt die Hand in einer Form.",
          "Spiel in der zweiten Hälfte die Melodie der linken Hand allein, tief im Bass.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass die letzte Oktave klingen.",
        ],
        tips: [
          "Schlag jede tiefe Oktave an wie eine Kirchenglocke, dann lass das Pedal ihren Klang tragen.",
          "Jetzt singt die Melodie im Bass. Spiel die hohen Akkorde leise, wie ferne Glocken.",
          "Heb die Hand nach dem Akkord, und lass den Daumen auf das tiefe A fallen.",
        ],
        tricky: {
          2: "Heb früh von der E-Oktave ab, damit die Hand Zeit hat, hinab zum C zu gehen.",
          5: "Die Oktaven gehen F, E, D abwärts. Halt Finger 1 und 5 fest in einer Form.",
          11: "Hier spielen beide Hände Akkorde. Heb jede Hand ab, bevor die Melodie hinab in den Bass geht.",
        },
      },
    },
  },
};

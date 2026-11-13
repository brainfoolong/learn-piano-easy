/**
 * *Eine kleine Nachtmusik*: the first theme of Mozart's Serenade No. 13, K. 525, in four versions of ours.
 *
 * The tune is the first theme's four bars in G major, where all the strings play in unison and octaves. The
 * print is in 4/4 with eighths. The tune keeps its notes and doubles every length into 4/2, so its eighths
 * are quarters and Common needs nothing faster. A unit is a quarter, and the hook is all four bars.
 *
 * Each print bar fills two bars of 4/4 in a version, so the tune takes eight. The strings imply the chords:
 * G major under the first half, and D7 under the second. Every version answers the tune with a phrase of
 * ours that mirrors it over D7 and closes on G.
 *
 * Common plays the tune and the answer over held open fifths and bass notes. Rare plays them over a root
 * and fifth in turns, with a bar of eighths in the answer. Epic sets an Alberti bass under the tune, plays it
 * again in thirds and sixths, then plays the answer. Legendary plays the tune in octaves over an octave bass,
 * and runs in sixteenths through the answer.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const G_MAJOR: Key = { tonic: 7, mode: "major" };

/** The tune in 4/2, in quarters: the print's four bars in eighths, every length doubled. */
const tune = "G5:2 r:1 D5:1 G5:2 r:1 D5:1 | G5:1 D5:1 G5:1 B5:1 D6:2 r:2 | C6:2 r:1 A5:1 C6:2 r:1 A5:1 | C6:1 A5:1 F#5:1 A5:1 D5:2 r:2";

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** The tune in the right hand in 4/4, in quarters, fingered. The hand moves in the rest of bar 4. */
const TUNE_QUARTERS = [
  "G5/2:2 r:1 D5/1:1 | G5/2:2 r:1 D5/1:1 | G5/2:1 D5/1:1 G5/2:1 B5/4:1 | D6/5:2 r:2",
  "C6/5:2 r:1 A5/3:1 | C6/5:2 r:1 A5/3:1 | C6/5:1 A5/3:1 F#5/2:1 A5/3:1 | D5/1:2 r:2",
].join(" | ");

/** The tune in 4/4 in eighths, fingered. */
const TUNE_EIGHTHS = inEighths(TUNE_QUARTERS);

/** Our answer in 4/4 in eighths, fingered: it mirrors the tune over D7, and closes on G. */
const ANSWER_EIGHTHS = [
  "A5/3:4 r:2 D5/1:2 | A5/3:4 r:2 D5/1:2 | D5/1:1 F#5/2:1 A5/3:1 C6/5:1 A5/3:2 F#5/2:2 | A5/3:4 r:4",
  "B5/3:4 r:2 G5/1:2 | B5/3:4 r:2 G5/1:2 | C6/4:2 A5/2:2 B5/3:1 C6/4:1 A5/2:2",
].join(" | ");

/** One bar of Alberti bass in eighths, on G major or on D major. */
const ALBERTI: Record<string, string> = {
  g: "G2/5:1 D3/1:1 B2/3:1 D3/1:1 G2/5:1 D3/1:1 B2/3:1 D3/1:1",
  d: "F#2/5:1 D3/1:1 A2/3:1 D3/1:1 F#2/5:1 D3/1:1 A2/3:1 D3/1:1",
};

/** One bar of a root and fifth in turns, in eighths, on G major or on D major. */
const ROOT_FIFTH: Record<string, string> = {
  g: "G2/5:2 D3/1:2 G2/5:2 D3/1:2",
  d: "D3/1:2 A2/4:2 D3/1:2 A2/4:2",
};

/** One bar of octave bass in sixteenths, on G major or on D major: the root and the fifth in turns, each lifted for a jump. */
const OCTAVES: Record<string, string> = {
  g: "G1+G2/5+1:2 r:2 D2+D3/5+1:2 r:2 G1+G2/5+1:2 r:2 D2+D3/5+1:2 r:2",
  d: "D2+D3/5+1:2 r:2 A1+A2/5+1:2 r:2 D2+D3/5+1:2 r:2 A1+A2/5+1:2 r:2",
};

/** Bars of `patterns` from `chords`, such as `"ggdd"`: one letter per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  return [...chords].map((chord) => patterns[chord]).join(" | ");
}

/** The chords of the tune and the answer, one letter per bar of 4/4. */
const CHORDS = "ggggddddddddggd";

export const eineKleineNachtmusik: OurSong = {
  slug: "eine-kleine-nachtmusik",
  title: "Eine kleine Nachtmusik",
  aka: ["A Little Night Music", "Serenade No. 13"],
  source: {
    composer: "Wolfgang Amadeus Mozart",
    died: 1791,
    published: 1827,
    edition: "Serenade No. 13 in G major, K. 525, first movement, as Wikipedia's article prints its first theme",
  },
  about:
    "Mozart finished this serenade for strings in Vienna in 1787. " +
    "It was published only in 1827, more than thirty years after his death. " +
    "In the film Amadeus (1984), the old Salieri plays it, and a priest knows the tune at once.",
  funFact: 'The title means "a little serenade", and Mozart wrote it into his own list of his works.',
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: G_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: G_MAJOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      right: [
        TUNE_QUARTERS,
        "A5/3:2 r:1 D5/1:1 | A5/3:2 r:1 D5/1:1 | D5/1:1 F#5/2:1 A5/3:1 C6/5:1 | A5/3:2 r:2",
        "B5/3:2 r:1 G5/1:1 | B5/3:2 r:1 G5/1:1 | C6/4:1 A5/2:1 B5/3:1 A5/2:1 | G5/1:4",
      ].join(" | "),
      left: [
        "G2+D3/5+1:4 | G2+D3/5+1:4 | G2+D3/5+1:4 | G2+D3/5+1:4",
        "D3/1:4 | D3/1:4 | D3/1:4 | D3/1:4",
        "D3/1:4 | D3/1:4 | D3/1:4 | D3/1:4",
        "G2+D3/5+1:4 | G2+D3/5+1:4 | D3/1:4 | G2+D3/5+1:4",
      ].join(" | "),
      skills: ["held-bass", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 4 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, after the hand moves to its new place.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds G and D, or D alone, for whole bars.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "fingering", text: "Thumb on D, finger 2 on G, finger 4 on B and finger 5 on the high D." },
        { fromBar: 1, toBar: 2, kind: "sound", text: "Play the G short and bright, as if the strings snap it out." },
        { fromBar: 4, toBar: 5, kind: "trick", text: "Use the rest after the high D to move fingers 2, 3 and 5 onto F sharp, A and C." },
      ],
      tricky: {
        5: "Your hand has moved in the rest. Finger 5 now plays C, and finger 3 plays A.",
        7: "Walk down C, A and F sharp with fingers 5, 3 and 2, then back up to A.",
        13: "Move the hand up in the rest of bar 12. Finger 3 lands on B, and the thumb on G.",
      },
    },
    rare: {
      key: G_MAJOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: `${TUNE_EIGHTHS} | ${ANSWER_EIGHTHS} | G5/1:8`,
      left: `${bars(ROOT_FIFTH, CHORDS)} | G2+D3/5+1:8`,
      skills: ["eighth-notes", "position-change"],
      practice: [
        { text: "Play the tune with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone. It rocks between the root and the fifth on every beat.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the tune, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the answer with both hands. Bar 11 runs in eighths.", hands: "both", speed: 0.7, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "Count the left hand in quarters. Each tune note lands on a beat with it." },
        { fromBar: 11, toBar: 11, kind: "fingering", text: "Climb D, F sharp, A and C with fingers 1, 2, 3 and 5, then come back down." },
        { fromBar: 13, toBar: 16, kind: "sound", text: "The answer comes home to G. Let the last note ring for the whole bar." },
      ],
      tricky: {
        5: "Move the hand in the rest of bar 4. Finger 5 lands on C, and finger 3 on A.",
        7: "Walk down C, A and F sharp with fingers 5, 3 and 2, then back up to A.",
        13: "Move the hand up in the rest of bar 12. Finger 3 lands on B, and the thumb on G.",
      },
    },
    epic: {
      key: G_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        TUNE_EIGHTHS,
        "B4+G5/1+5:4 r:2 B4+D5/1+3:2 | B4+G5/1+5:4 r:2 B4+D5/1+3:2",
        "B4+G5/1+5:2 B4+D5/1+3:2 B4+G5/1+5:2 D5+B5/1+5:2 | G5+B5+D6/1+3+5:4 r:4",
        "A5+C6/3+5:4 r:2 F#5+A5/1+3:2 | A5+C6/3+5:4 r:2 F#5+A5/1+3:2",
        "A5+C6/3+5:2 F#5+A5/1+3:2 D5+F#5/1+2:2 F#5+A5/2+4:1 r:1 | A4+D5/1+4:4 r:4",
        "A5/3:4 r:2 D5/1:2 | A5/3:4 r:2 D5/1:2 | D5/1:1 F#5/2:1 A5/3:1 C6/5:1 A5/3:2 F#5/2:2 | A5/3:4 r:4",
        "B5/3:4 r:2 G5/1:2 | B5/3:4 r:2 G5/1:2 | C6/4:2 A5/2:2 B5/3:1 C6/4:1 A5/2:1 r:1 | B4+D5+G5/1+2+5:8",
      ].join(" | "),
      left: `${bars(ALBERTI, "ggggddddggggdddd")} | ${bars(ALBERTI, "ddddggd")} | G2+B2+D3/5+3+1:8`,
      pedal: Array(24).fill("P:8").join(" | "),
      skills: ["alberti-bass", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 8], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the Alberti bass soft and even, so the tune sings above it." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
        { fromBar: 1, toBar: 24, kind: "sound", text: "Change the pedal on every bar line, as the new bass note sounds." },
      ],
      tricky: {
        16: "Lift the hand after the last third, then drop to A and D with fingers 1 and 4.",
        17: "The answer starts high on A with finger 3. Use the rest before it to reach up.",
        24: "Lift off A in the rest, then land on B, D and G with fingers 1, 2 and 5.",
      },
    },
    legendary: {
      key: G_MAJOR,
      bpm: 126,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [
        "G4+G5/1+5:6 r:6 D4+D5/1+5:2 r:2 | G4+G5/1+5:6 r:6 D4+D5/1+5:2 r:2",
        "G4+G5/1+5:2 r:2 D4+D5/1+5:2 r:2 G4+G5/1+5:2 r:2 B4+B5/1+5:2 r:2 | D5+D6/1+5:8 r:8",
        "C5+C6/1+5:6 r:6 A4+A5/1+5:2 r:2 | C5+C6/1+5:6 r:6 A4+A5/1+5:2 r:2",
        "C5+C6/1+5:2 r:2 A4+A5/1+5:2 r:2 F#4+F#5/1+5:2 r:2 A4+A5/1+5:2 r:2 | D4+D5/1+5:8 r:8",
        "A4+A5/1+5:6 r:6 D4+D5/1+5:2 r:2 | A4+A5/1+5:6 r:6 D4+D5/1+5:2 r:2",
        "D5/1:1 E5/2:1 F#5/3:1 G5/1:1 A5/2:1 B5/3:1 C6/4:1 D6/5:1 C6/4:1 B5/3:1 A5/2:1 G5/1:1 F#5/3:1 E5/2:1 r:2",
        "A4+A5/1+5:8 r:8",
        "B4+B5/1+5:6 r:6 G4+G5/1+5:2 r:2 | B4+B5/1+5:6 r:6 G4+G5/1+5:2 r:2",
        "C6/5:1 B5/4:1 A5/3:1 G5/2:1 F#5/1:1 G5/2:1 A5/3:1 B5/4:1 C6/5:1 A5/3:1 F#5/2:1 D5/1:1 r:4",
        "G4+B4+D5+G5/1+2+3+5:16",
      ].join(" | "),
      left: `${bars(OCTAVES, CHORDS)} | G1+G2/5+1:16`,
      skills: ["octave-bass", "sixteenth-notes", "thumb-under"],
      practice: [
        { text: "Play the right hand's octaves alone. Keep the thumb and finger 5 spread, and move the whole hand.", hands: "right", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the runs of bars 11 and 15 alone, slowly, until they flow.", hands: "right", speed: 0.5, loop: [11, 15], wait: true },
        { text: "Play the left hand alone. It jumps between octaves on the root and the fifth.", hands: "left", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Octaves in both hands sound like a whole string orchestra. Play them firmly." },
        { fromBar: 11, toBar: 11, kind: "fingering", text: "The thumb passes under after F sharp on the way up. Finger 3 crosses over G on the way down." },
        { fromBar: 15, toBar: 16, kind: "trick", text: "After the run, lift the hand in the rest and land on all four notes of G major." },
      ],
      tricky: {
        2: "Lift the octave on G, then jump down to the octave on D. Keep the hand spread.",
        3: "Four octaves in a row: G, D, G and B. Lift the hand a little after each one.",
        14: "Jump down from the octave on B to the octave on G, then get ready for the run.",
      },
    },
  },
  de: {
    about:
      "Mozart vollendete diese Serenade für Streicher 1787 in Wien. " +
      "Gedruckt wurde sie erst 1827, mehr als dreißig Jahre nach seinem Tod. " +
      "Im Film Amadeus (1984) spielt der alte Salieri sie, und ein Priester erkennt die Melodie sofort.",
    funFact: 'Der Titel bedeutet "eine kleine Serenade", und Mozart trug ihn selbst in sein Verzeichnis seiner Werke ein.',
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 4 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand, nachdem die Hand an ihren neuen Platz gerückt ist.",
          "Jetzt die linke Hand allein. Sie hält G und D, oder nur D, für ganze Takte.",
          "Nimm beide Hände zusammen, langsam.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Daumen auf D, Finger 2 auf G, Finger 4 auf H und Finger 5 auf dem hohen D.",
          "Spiel das G kurz und hell, als würden die Streicher es hinausschnellen.",
          "Nutz die Pause nach dem hohen D, um Finger 2, 3 und 5 auf Fis, A und C zu setzen.",
        ],
        tricky: {
          5: "Deine Hand ist in der Pause gerückt. Finger 5 spielt jetzt C, und Finger 3 spielt A.",
          7: "Geh mit Finger 5, 3 und 2 über C, A und Fis hinunter, dann zurück hinauf zum A.",
          13: "Rück die Hand in der Pause von Takt 12 nach oben. Finger 3 landet auf H, der Daumen auf G.",
        },
      },
      rare: {
        practice: [
          "Spiel die Melodie nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Sie wiegt auf jedem Schlag zwischen Grundton und Quinte.",
          "Spiel die Melodie langsam mit beiden Händen zusammen.",
          "Spiel die Antwort mit beiden Händen. Takt 11 läuft in Achteln.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Zähl die linke Hand in Vierteln. Jeder Ton der Melodie fällt mit ihr auf einen Schlag.",
          "Steig über D, Fis, A und C mit Finger 1, 2, 3 und 5 hinauf, dann wieder hinunter.",
          "Die Antwort kehrt heim zum G. Lass den letzten Ton den ganzen Takt klingen.",
        ],
        tricky: {
          5: "Rück die Hand in der Pause von Takt 4. Finger 5 landet auf C, und Finger 3 auf A.",
          7: "Geh mit Finger 5, 3 und 2 über C, A und Fis hinunter, dann zurück hinauf zum A.",
          13: "Rück die Hand in der Pause von Takt 12 nach oben. Finger 3 landet auf H, der Daumen auf G.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise und gleichmäßig, damit die Melodie darüber singt.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
          "Wechsle das Pedal an jedem Taktstrich, sobald der neue Basston klingt.",
        ],
        tricky: {
          16: "Heb die Hand nach der letzten Terz, dann geh hinunter zu A und D mit Finger 1 und 4.",
          17: "Die Antwort beginnt hoch auf dem A mit Finger 3. Nutz die Pause davor, um hinaufzugreifen.",
          24: "Heb vom A ab in der Pause, dann lande auf H, D und G mit Finger 1, 2 und 5.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Oktaven der rechten Hand allein. Halt Daumen und Finger 5 gespreizt, und bewege die ganze Hand.",
          "Spiel die Läufe in Takt 11 und 15 langsam allein, bis sie fließen.",
          "Spiel die linke Hand allein. Sie springt zwischen Oktaven auf Grundton und Quinte.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Oktaven in beiden Händen klingen wie ein ganzes Streichorchester. Spiel sie kräftig.",
          "Aufwärts geht der Daumen nach dem Fis unter. Abwärts kreuzt Finger 3 über das G.",
          "Heb nach dem Lauf die Hand in der Pause, und lande auf allen vier Tönen von G-Dur.",
        ],
        tricky: {
          2: "Heb die Oktave auf G ab, dann spring hinunter zur Oktave auf D. Halt die Hand gespreizt.",
          3: "Vier Oktaven hintereinander: G, D, G und H. Heb die Hand nach jeder ein wenig an.",
          14: "Spring von der Oktave auf H hinunter zur Oktave auf G, dann mach dich bereit für den Lauf.",
        },
      },
    },
  },
};

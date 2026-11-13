/**
 * *The Sorcerer's Apprentice*: the bassoon's broom theme from Dukas's symphonic poem, in four versions
 * of ours.
 *
 * The tune is the theme's bars 1 to 10. The print is in 3/8 with staccato eighths, and the tune writes
 * every eighth as a quarter, so each print bar is a bar of 3/4. Its key is F minor, with E as the raised
 * seventh and D natural as a passing note. The hook is bars 1 to 6.
 *
 * Every version plays the tune one or two octaves up in the right hand, then six bars of our own over
 * the key's i and V, with the flat sixth's chord or iv between. Each one closes on its tonic after 16
 * bars.
 *
 * Common moves the tune to A minor over a held bass note or open fifth per bar. Rare keeps A minor, and
 * puts a waltz bass under it, with eighths and two-note chords in our own bars. Epic moves to D minor,
 * two octaves up, over broken chords in eighths, and answers in thirds. Legendary keeps F minor over a
 * plucked octave bass, runs up in sixteenths, and ends on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Legendary keeps. */
const F_MINOR: Key = { tonic: 5, mode: "minor" };

/** The key of Common and Rare. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The key of Epic. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 3/4, in quarters, which are the print's staccato eighths. */
const tune =
  "F3:2 r:1 | C4:2 r:1 | C3:1 D3:1 E3:1 | F3:1 r:1 Ab3:1 | F3:1 r:1 Ab3:1 | G3:1 F3:1 E3:1 | " +
  "F3:1 r:1 Ab3:1 | F3:1 r:1 Ab3:1 | G3:1 F3:1 E3:1 | F3:1 r:1 Ab3:1";

/** The tune in A minor, an octave up, in quarters, as Common and Rare play it. */
const TUNE_A_MINOR = [
  "A4/1:2 r:1 | E5/5:2 r:1 | E4/1:1 F#4/2:1 G#4/3:1 | A4/4:1 r:1 C5/5:1 | A4/4:1 r:1 C5/5:1",
  "B4/4:1 A4/3:1 G#4/2:1 | A4/4:1 r:1 C5/5:1 | A4/4:1 r:1 C5/5:1 | B4/4:1 A4/3:1 G#4/2:1 | A4/4:1 r:1 C5/5:1",
].join(" | ");

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** Common's bar of each chord: a held fifth or bass note in one place of the hand. */
const HELD: Record<string, string> = {
  a: "A2+E3/5+1:3",
  e: "E3/1:3",
  d: "D3/2:3",
};

/** Rare's waltz bar of each chord: a low note, then a two-note chord twice. */
const WALTZ: Record<string, string> = {
  a: "A2/4:2 C3+E3/2+1:2 C3+E3/2+1:2",
  e: "E2/5:2 B2+E3/2+1:2 B2+E3/2+1:2",
  f: "F2/5:2 A2+C3/2+1:2 A2+C3/2+1:2",
};

/** Epic's broken chord of each chord, six eighths to the bar. */
const BROKEN: Record<string, string> = {
  d: "D3/5:1 A3/1:1 F3/3:1 A3/1:1 F3/3:1 A3/1:1",
  a: "A2/5:1 E3/2:1 A3/1:1 E3/2:1 C#3/4:1 E3/2:1",
  b: "Bb2/5:1 F3/1:1 D3/3:1 F3/1:1 D3/3:1 F3/1:1",
};

/** Legendary's plucked bar of each chord in sixteenths: an octave, then a two-note chord on each beat. */
const PLUCKED: Record<string, string> = {
  f: "F2+F3/5+1:2 r:2 F3+Ab3/2+1:2 r:2 F3+Ab3/2+1:2 r:2",
  c: "C2+C3/5+1:2 r:2 E3+G3/2+1:2 r:2 E3+G3/2+1:2 r:2",
  7: "C2+C3/5+1:2 r:2 G3+Bb3/2+1:2 r:2 G3+Bb3/2+1:2 r:2",
  D: "Db2+Db3/5+1:2 r:2 F3+Ab3/2+1:2 r:2 F3+Ab3/2+1:2 r:2",
  b: "Bb1+Bb2/5+1:2 r:2 Db3+F3/2+1:2 r:2 Db3+F3/2+1:2 r:2",
};

/** The bars of `patterns` for `chords`, one letter per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  return [...chords]
    .map((chord) => {
      const bar = patterns[chord];
      if (bar === undefined) throw new Error(`no bar for chord ${chord}`);
      return bar;
    })
    .join(" | ");
}

/** Legendary's bar of F, a rest and A flat, in sixteenths, with each quarter played short. */
const PLUCK_FA = "F4/4:2 r:6 Ab4/5:2 r:2";

/** Legendary's bar of G, F and E, in sixteenths, with each quarter played short. */
const PLUCK_TURN = "G4/4:2 r:2 F4/3:2 r:2 E4/2:2 r:2";

export const theSorcerersApprentice: OurSong = {
  slug: "the-sorcerers-apprentice",
  title: "The Sorcerer's Apprentice",
  aka: ["L'Apprenti sorcier", "Der Zauberlehrling", "Sorcerer's Apprentice"],
  source: {
    composer: "Paul Dukas",
    died: 1935,
    published: 1897,
    edition:
      "The Sorcerer's Apprentice, the bassoon's broom theme in bars 1 to 10, as an engraving of the theme on Wikimedia Commons prints it, with Wikipedia's score of the opening confirming its first notes",
  },
  about:
    "Paul Dukas completed this symphonic poem in 1897, and it was published the same year. " +
    "It follows Goethe's 1797 poem Der Zauberlehrling. " +
    "In Walt Disney's film Fantasia (1940), Mickey Mouse plays the apprentice.",
  funFact: "Dukas subtitled it a scherzo after a ballad by Goethe. It is by far the most performed and recorded of his works.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 3, denominator: 4, key: F_MINOR, hookBars: [1, 6] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 112,
      numerator: 3,
      denominator: 4,
      right: [
        TUNE_A_MINOR,
        "B4/4:1 G#4/2:1 E4/1:1 | A4/3:2 r:1 | D5/5:2 r:1 | C5/4:1 B4/3:1 A4/2:1 | B4/3:2 G#4/1:1 | A4/2:3",
      ].join(" | "),
      left: bars(HELD, "aeeaaeaaeaeadaea"),
      skills: ["held-bass", "position-change"],
      practice: [
        { text: "Play the first three bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 3], wait: true },
        { text: "Play bars 4 to 10 with the right hand alone. The hand stays in one place.", hands: "right", speed: 0.6, loop: [4, 10], wait: true },
        { text: "Now the left hand alone. It holds one low note or two in each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first ten bars.", hands: "both", speed: 0.7, loop: [1, 10], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 10, kind: "sound", text: "Play every note short and light, like a broom hopping along. The rests are part of the tune." },
        { fromBar: 4, toBar: 5, kind: "rhythm", text: "Count one, two, three. The rest falls on two, and the high note on three." },
        { fromBar: 13, toBar: 16, kind: "fingering", text: "The hand stays where it is. Fingers 2 to 5 sit on A, B, C and D." },
      ],
      tricky: {
        5: "Finger 5 has just played C. Bring finger 4 back down to A, then reach up to C again.",
        7: "After G sharp on finger 2, finger 4 takes A. The left hand moves from E back to A and E.",
        10: "As in bar 7, finger 4 takes A after G sharp. Then finger 5 reaches up to C.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 108,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: [
        inEighths(TUNE_A_MINOR),
        "B4/4:2 A4/3:1 G#4/2:1 B4/4:2 | C5/5:2 A4/3:2 E4/1:2 | A4+C5/2+4:4 r:2 | B4/3:1 A4/2:1 G#4/1:2 B4/3:2",
        "A4/2:2 C5/4:1 B4/3:1 A4/2:2 | E4+A4/1+3:6",
      ].join(" | "),
      left: `${bars(WALTZ, "aeeaaeaaeaeafea")} | A2+C3+E3/5+3+1:6`,
      skills: ["waltz-bass", "eighth-notes"],
      practice: [
        { text: "Play the left hand alone. A low note comes first, and a two-note chord answers it twice.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first ten bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 10], wait: true },
        { text: "Join the hands on the first six bars, slowly.", hands: "both", speed: 0.6, loop: [1, 6], wait: true },
        { text: "Play our own ending with both hands, where the eighths come in.", hands: "both", speed: 0.7, loop: [11, 16], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 10, kind: "sound", text: "Keep the tune short and bouncy. Let go of each note before the next one." },
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the low note a little louder than the chords after it. It keeps the beat." },
        { fromBar: 11, toBar: 11, kind: "rhythm", text: "Two quick eighths fit into the second beat. Count them as one and two." },
      ],
      tricky: {
        7: "Finger 4 takes A after G sharp. The left hand drops from its E chord back to A.",
        10: "The tune ends here. Finger 4 takes A, and the left hand moves back to A.",
        11: "The eighths start here. Keep fingers 4, 3 and 2 close to their keys.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 120,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: [
        inEighths(
          [
            "D5/1:2 r:1 | A5/5:2 r:1 | A4/1:1 B4/2:1 C#5/3:1 | D5/4:1 r:1 F5/5:1 | D5/4:1 r:1 F5/5:1",
            "E5/4:1 D5/3:1 C#5/2:1 | D5/4:1 r:1 F5/5:1 | D5/4:1 r:1 F5/5:1 | E5/4:1 D5/3:1 C#5/2:1 | D5/4:1 r:1 F5/5:1",
          ].join(" | "),
        ),
        "D5+F5/2+4:2 r:2 D5+F5/2+4:2 | C#5+E5/1+3:2 r:2 E5+G5/3+5:2 | D5+F5/2+4:2 r:2 F5+A5/3+5:2",
        "F5/5:1 E5/4:1 D5/3:1 C5/2:1 Bb4/1:1 D5/3:1 | E5/4:2 C#5/2:2 A4/1:2 | F4+A4+D5/1+2+5:6",
      ].join(" | "),
      left: `${bars(BROKEN, "daaddaddadbadb")} | A2/5:1 E3/2:1 A3/1:1 E3/2:1 C#3/4:1 r:1 | D2+A2+D3/5+2+1:6`,
      skills: ["broken-chords", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand's broken chords alone until they roll by themselves.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand alone on the first ten bars. Keep each note short.", hands: "right", speed: 0.6, loop: [1, 10], wait: true },
        { text: "Play the right hand's thirds alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [11, 13], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 10, kind: "sound", text: "Keep the broken chords soft and even, so the hopping tune stands out above them." },
        { fromBar: 3, toBar: 3, kind: "fingering", text: "The thumb lands on the low A after the rest. Then fingers 2 and 3 climb." },
        { fromBar: 14, toBar: 14, kind: "fingering", text: "Walk down from finger 5 to the thumb, one key each, then finger 3 jumps back to D." },
      ],
      tricky: {
        7: "The left hand jumps up from E to D for its broken chord. Finger 4 takes D in the right hand.",
        10: "As in bar 7, the left hand jumps up to D, while the right hand plays D and F.",
        16: "Spread the right hand over F, A and D, and drop the left hand to the low D.",
      },
    },
    legendary: {
      key: F_MINOR,
      bpm: 126,
      numerator: 3,
      denominator: 4,
      steps: 4,
      right: [
        "F4/1:8 r:4 | C5/5:8 r:4 | C4/1:4 D4/2:4 E4/3:4",
        `${PLUCK_FA} | ${PLUCK_FA} | ${PLUCK_TURN} | ${PLUCK_FA} | ${PLUCK_FA} | ${PLUCK_TURN} | ${PLUCK_FA}`,
        "Ab4/1:1 Bb4/2:1 C5/3:1 Db5/4:1 F5/5:2 r:2 Db5/3:2 r:2",
        "G5/5:2 r:2 E5/3:2 r:2 Bb4/1:1 C5/2:1 D5/3:1 E5/4:1",
        "F5/5:2 r:2 C5/2:2 r:2 Ab4/1:2 r:2",
        "Bb4/1:1 C5/2:1 Db5/3:1 Eb5/4:1 F5/5:2 r:2 Db5/3:2 r:2",
        "C5/1:1 D5/2:1 E5/3:1 F5/4:1 G5/5:2 r:2 E5/3:2 r:2",
        "F4+Ab4+C5+F5/1+2+3+5:12",
      ].join(" | "),
      left: `${bars(PLUCKED, "fccff7ff7fD7fb7")} | F1+F2/5+1:12`,
      skills: ["octave-bass", "sixteenth-notes"],
      practice: [
        { text: "Play the left hand alone. A low octave comes first, then two short chords.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand alone on the first ten bars. Let go of each note at once.", hands: "right", speed: 0.6, loop: [1, 10], wait: true },
        { text: "Play the right hand's runs alone, four sixteenths to each beat.", hands: "right", speed: 0.5, loop: [11, 15], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 10, kind: "sound", text: "Both hands play short and dry. The broom tiptoes before it starts to run." },
        { fromBar: 1, toBar: 10, kind: "trick", text: "Let the left wrist bounce from the low octave up to the chords." },
        { fromBar: 11, toBar: 15, kind: "fingering", text: "Each run fits under five fingers. Keep the hand still and let the fingers roll." },
      ],
      tricky: {
        6: "The right fingers walk down G, F and E, each one short. The left hand leaps up to its chords.",
        12: "Jump back to the thumb on B flat, then run up to E in even sixteenths.",
        16: "Land on all four notes of the last chord together, and drop the left hand to the low F.",
      },
    },
  },
  de: {
    about:
      "Paul Dukas vollendete diese sinfonische Dichtung 1897, und sie erschien im selben Jahr im Druck. " +
      "Sie folgt Goethes Gedicht Der Zauberlehrling von 1797. " +
      "In Walt Disneys Film Fantasia (1940) spielt Micky Maus den Zauberlehrling.",
    funFact:
      "Dukas nannte sie im Untertitel ein Scherzo nach einer Ballade von Goethe. Sie ist mit Abstand sein meistgespieltes und meistaufgenommenes Werk.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten drei Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 4 bis 10 nur mit der rechten Hand. Die Hand bleibt an einem Platz.",
          "Jetzt die linke Hand allein. Sie hält in jedem Takt einen oder zwei tiefe Töne.",
          "Spiel die ersten zehn Takte mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Spiel jeden Ton kurz und leicht, wie ein hüpfender Besen. Die Pausen gehören zur Melodie.",
          "Zähl eins, zwei, drei. Die Pause fällt auf zwei, und der hohe Ton auf drei.",
          "Die Hand bleibt, wo sie ist. Finger 2 bis 5 liegen auf A, H, C und D.",
        ],
        tricky: {
          5: "Finger 5 hat gerade das C gespielt. Bring Finger 4 zurück zum A, dann greif wieder hinauf zum C.",
          7: "Nach dem Gis mit Finger 2 nimmt Finger 4 das A. Die linke Hand geht vom E zurück zu A und E.",
          10: "Wie in Takt 7 nimmt Finger 4 nach dem Gis das A. Dann greift Finger 5 hinauf zum C.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Zuerst kommt ein tiefer Ton, dann antwortet zweimal ein Zweiklang.",
          "Spiel die ersten zehn Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten sechs Takte langsam mit beiden Händen zusammen.",
          "Spiel unseren Schluss mit beiden Händen. Dort kommen die Achtel dazu.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt die Melodie kurz und federnd. Lass jeden Ton vor dem nächsten los.",
          "Spiel den tiefen Ton etwas lauter als die Akkorde danach. Er hält den Schlag.",
          "Zwei schnelle Achtel passen in den zweiten Schlag. Zähl sie als eins und zwei.",
        ],
        tricky: {
          7: "Finger 4 nimmt nach dem Gis das A. Die linke Hand geht von ihrem E-Akkord zurück zum A.",
          10: "Hier endet die Melodie. Finger 4 nimmt das A, und die linke Hand geht zurück zum A.",
          11: "Hier beginnen die Achtel. Halt Finger 4, 3 und 2 nah an ihren Tasten.",
        },
      },
      epic: {
        practice: [
          "Spiel die gebrochenen Akkorde der linken Hand allein, bis sie von selbst rollen.",
          "Spiel die ersten zehn Takte nur mit der rechten Hand. Halt jeden Ton kurz.",
          "Spiel die Terzen der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Halt die gebrochenen Akkorde leise und gleichmäßig, damit die hüpfende Melodie darüber hervortritt.",
          "Nach der Pause landet der Daumen auf dem tiefen A. Dann steigen Finger 2 und 3.",
          "Lauf von Finger 5 bis zum Daumen je eine Taste hinunter, dann springt Finger 3 zurück zum D.",
        ],
        tricky: {
          7: "Die linke Hand springt vom E hinauf zum D für ihren gebrochenen Akkord. Finger 4 nimmt das D in der rechten Hand.",
          10: "Wie in Takt 7 springt die linke Hand hinauf zum D, während die rechte Hand D und F spielt.",
          16: "Spann die rechte Hand über F, A und D, und bring die linke Hand hinunter zum tiefen D.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein. Zuerst kommt eine tiefe Oktave, dann zwei kurze Akkorde.",
          "Spiel die ersten zehn Takte nur mit der rechten Hand. Lass jeden Ton sofort wieder los.",
          "Spiel die Läufe der rechten Hand allein, vier Sechzehntel auf jeden Schlag.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Beide Hände spielen kurz und trocken. Der Besen schleicht auf Zehenspitzen, bevor er losläuft.",
          "Lass das linke Handgelenk von der tiefen Oktave hinauf zu den Akkorden federn.",
          "Jeder Lauf passt unter fünf Finger. Halt die Hand still, und lass die Finger rollen.",
        ],
        tricky: {
          6: "Die rechten Finger laufen kurz über G, F und E hinunter. Die linke Hand springt hinauf zu ihren Akkorden.",
          12: "Spring mit dem Daumen zurück zum B, dann lauf in gleichmäßigen Sechzehnteln hinauf bis E.",
          16: "Lande auf allen vier Tönen des letzten Akkords zugleich, und bring die linke Hand hinunter zum tiefen F.",
        },
      },
    },
  },
};

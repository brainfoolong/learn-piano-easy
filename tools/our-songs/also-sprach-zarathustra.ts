/**
 * *Also sprach Zarathustra*: the dawn motif of Strauss's tone poem, Op. 30, in four versions of ours.
 *
 * The tune is the motif as Wikipedia prints and describes it, in 4/4 and in quarters. It rises C, G, C,
 * then the major third E turns to the minor third E flat. The hook is the whole tune, bars 1 and 2.
 * Every version states the motif again with the change reversed, minor to major, as the score does.
 *
 * Common plays the motif over held open fifths. Its second statement leaves out the low C, so the hand
 * keeps one place, then it closes on a cadence. Rare does the same in its second statement, so the hand
 * moves at most twice in eight bars. It opens on a held fifth, drums C and G between statements and
 * echoes the motif in two-note chords. Epic opens on a deep C octave with the pedal, then plays the motif
 * an octave up in thirds and sixths over broken chords. Legendary plays it again in octaves and in full
 * chords over octave bass and timpani rolls, climbing to a last C major chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 4/4, in quarters: the motif rising to the major third, which turns minor. */
const tune = "C4:2 G4:2 | C5:2 E5:1 Eb5:1";

/** One bar of timpani in eighths: low C and G in quarters. */
const TIMPANI = "C2/1:2 G1/5:2 C2/1:2 G1/5:2";

/** One bar of a broken C fifth in eighths: low C, G, C and G, twice. */
const BROKEN = "C2/5:1 G2/2:1 C3/1:1 G2/2:1 C2/5:1 G2/2:1 C3/1:1 G2/2:1";

/** Half a bar of timpani roll in eighths, ending on a rest so the hand can jump. */
const ROLL = "C2/1:1 G1/5:1 C2/1:1 r:1";

export const alsoSprachZarathustra: OurSong = {
  slug: "also-sprach-zarathustra",
  title: "Also sprach Zarathustra",
  aka: ["Thus Spoke Zarathustra"],
  collection: "film",
  source: {
    composer: "Richard Strauss",
    died: 1949,
    published: 1896,
    edition: "Also sprach Zarathustra, Op. 30 (1896), the dawn motif of its introduction, as Wikipedia's article prints and describes it",
  },
  about:
    "Richard Strauss wrote this tone poem in 1896, after a book by the philosopher Friedrich Nietzsche. " +
    "Its opening fanfare paints a sunrise, rising over a deep held C. " +
    "Stanley Kubrick's film 2001: A Space Odyssey (1968) opens with it.",
  funFact: "The three rising notes, C, G and C, are the second, third and fourth notes of the overtone series of a low C.",
  mythic: null,
  tune: { text: tune, numerator: 4, denominator: 4, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 72,
      numerator: 4,
      denominator: 4,
      right: [
        "C4/1:2 G4/1:2 | C5/2:2 E5/5:1 Eb5/4:1 | r:2 G4/1:2 | C5/2:2 Eb5/4:1 E5/5:1",
        "r:2 G4/1:2 | C5/2:2 E5/5:2 | D5/3:2 G4/1:2 | C5/2:2 E5/5:2",
      ].join(" | "),
      left: [
        "C3+G3/5+1:4 | C3+G3/5+1:4 | C3+G3/5+1:4 | C3+G3/5+1:4",
        "C3+G3/5+1:4 | C3+G3/5+1:4 | G2+D3/5+1:4 | C3+G3/5+1:4",
      ].join(" | "),
      skills: ["open-fifths", "position-change"],
      practice: [
        { text: "Play the first two bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 2], wait: true },
        { text: "Now play bars 3 to 8 with the right hand. Your thumb stays near G.", hands: "right", speed: 0.6, loop: [3, 8], wait: true },
        { text: "Play the left hand alone. It holds one open fifth in each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "sound", text: "This is a sunrise. Play each long note fully, and let it ring to the end." },
        { fromBar: 2, toBar: 2, kind: "sound", text: "E turns to E flat here, and the bright sound turns dark. Listen for the change." },
        { fromBar: 3, toBar: 4, kind: "trick", text: "Bar 3 leaves out the low C, so your thumb can wait on G." },
      ],
      tricky: {
        1: "Your thumb plays middle C, then moves up to G. Move it during the long note.",
        7: "The left hand moves down to G and D. The right hand goes from D down to G.",
        8: "Both hands come home. The left hand returns to C and G, and the right hand ends on E.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 80,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "r:8 | r:8",
        "C4/1:4 G4/1:4 | C5/2:4 E5/5:2 Eb5/4:1 r:1 | r:4 G4/1:4 | C5/2:4 Eb5/4:2 E5/5:2",
        "r:8 | r:8",
        "G4+C5/1+2:4 C5+E5/2+5:4 | G4+D5/1+3:4 C5+E5/2+5:2 C5+Eb5/2+4:2 | G4+C5/1+2:4 C5+Eb5/2+4:4 | G4+D5/1+3:4 C5+E5/2+5:4",
        "C5+E5/2+5:4 G4+C5/1+2:4 | G4+D5/1+3:8 | G4+C5/1+2:4 C5+E5/2+5:4 | C5+E5/2+5:8",
      ].join(" | "),
      left: [
        "C3+G3/5+1:8 | C3+G3/5+1:8",
        "C3+G3/5+1:8 | C3+G3/5+1:8 | C3+G3/5+1:8 | C3+G3/5+1:8",
        "C3/5:2 G3/1:2 C3/5:2 G3/1:2 | C3/5:2 G3/1:2 C3/5:4",
        "C3+G3/5+1:8 | C3+G3/5+1:8 | C3+G3/5+1:8 | C3+G3/5+1:8",
        "C3+E3+G3/5+3+1:8 | B2+D3+G3/5+3+1:8 | C3+E3+G3/5+3+1:8 | C3+E3+G3/5+3+1:8",
      ].join(" | "),
      skills: ["two-note-chords", "triads"],
      practice: [
        { text: "Play bars 3 to 6 with the right hand alone. This is the sunrise tune.", hands: "right", speed: 0.6, loop: [3, 6], wait: true },
        { text: "Play the right hand's two-note chords alone, in bars 9 to 16.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play the left hand alone. In bars 7 and 8, it drums C and G like a timpani.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "sound", text: "The left hand starts alone, like a low organ note before dawn. Hold it for both bars." },
        { fromBar: 7, toBar: 8, kind: "rhythm", text: "Play the drum notes evenly, one on every beat, and a little louder each time." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "The top note of each chord carries the tune. Play it a little louder." },
      ],
      tricky: {
        3: "Your thumb plays middle C, then moves up to G during the long note.",
        10: "Keep finger 2 on C, and let finger 5 on E give way to finger 4 on E flat.",
        15: "The left hand plays a full C chord here. Spread fingers 5, 3 and 1 over C, E and G.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 76,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "r:8 | r:8",
        "C4/1:4 G4/2:4 | C5/2:4 E5/5:2 Eb5/4:1 r:1 | C4/1:4 G4/2:4 | C5/2:4 Eb5/4:2 E5/5:2",
        "r:8 | r:8",
        "C5/1:4 E5+G5/3+5:3 r:1 | E5+C6/1+5:4 G5+E6/1+5:2 G5+Eb6/1+4:1 r:1 | C5/1:4 E5+G5/3+5:3 r:1 | E5+C6/1+5:4 G5+Eb6/1+5:2 G5+E6/1+5:1 r:1",
        "C5+F5+A5/1+2+4:4 C5+E5+G5/1+2+4:4 | B4+D5+G5/1+2+5:8 | E5+G5+C6/1+2+5:7 r:1 | E4+G4+C5/1+2+5:8",
      ].join(" | "),
      left: [
        "C1+C2/5+1:8 | C1+C2/5+1:7 r:1",
        "C2+C3/5+1:8 | C2+G2+C3/5+2+1:8 | C2+C3/5+1:8 | C2+G2+C3/5+2+1:7 r:1",
        `${TIMPANI} | C2/1:1 G1/5:1 C2/1:1 G1/5:1 C2/1:1 G1/5:1 C2/1:2`,
        `${BROKEN} | ${BROKEN} | ${BROKEN} | ${BROKEN}`,
        "F2/5:1 C3/2:1 F3/1:1 C3/2:1 E2/5:1 G2/3:1 C3/1:1 G2/3:1 | G2/5:1 D3/2:1 G3/1:1 D3/2:1 G2/5:1 D3/2:1 G3/1:1 r:1 | C2+C3/5+1:7 r:1 | C1+C2/5+1:8",
      ].join(" | "),
      pedal: "P:8 | P:8 | P:8 | P:8 | P:8 | P:8 | r:8 | r:8 | P:8 | P:8 | P:8 | P:8 | P:4 P:4 | P:8 | P:8 | P:8",
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand's broken chords alone, in bars 9 to 12: low C, G, C and G.", hands: "left", speed: 0.5, loop: [9, 12], wait: false },
        { text: "Play the right hand alone on bars 9 to 12, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Join the hands on bars 9 to 12, slowly.", hands: "both", speed: 0.5, loop: [9, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "sound", text: "Hold the low octave with the pedal down. It should rumble like a great organ." },
        { fromBar: 4, toBar: 4, kind: "sound", text: "The bright E turns to a dark E flat. Play the E flat a little softer." },
        { fromBar: 7, toBar: 8, kind: "rhythm", text: "Drum C and G like a timpani, and grow louder into bar 9." },
      ],
      tricky: {
        3: "The right hand enters on middle C as the left hand moves up an octave. The rest in bar 2 gives it time.",
        15: "Spread the right hand over E, G and high C. The left hand holds a C octave under it.",
        16: "Both hands jump down for the last chord. Use the short rest at the end of bar 15.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 76,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "r:8 | r:8",
        "C4/1:4 G4/2:4 | C5/2:4 E5/5:2 Eb5/4:1 r:1 | C4/1:4 G4/2:4 | C5/2:4 Eb5/4:2 E5/5:2",
        "r:8 | r:8",
        "C4+C5/1+5:3 r:1 G4+G5/1+5:3 r:1 | C5+C6/1+5:3 r:1 E5+G5+C6+E6/1+2+3+5:2 Eb5+G5+C6+Eb6/1+2+3+5:1 r:1",
        "C4+C5/1+5:3 r:1 G4+G5/1+5:3 r:1 | C5+C6/1+5:3 r:1 Eb5+G5+C6+Eb6/1+2+3+5:2 E5+G5+C6+E6/1+2+3+5:1 r:1",
        "E4+G4+C5/1+2+5:3 r:1 G4+C5+E5+G5/1+2+3+5:3 r:1 | C5+E5+G5+C6/1+2+3+5:3 r:1 G5+C6+E6/1+3+5:2 F5+A5+C6+F6/1+2+3+5:2",
        "E5+G5+C6+E6/1+2+3+5:3 r:1 D5+G5+B5+D6/1+2+4+5:3 r:1 | C5+E5+G5+C6/1+2+3+5:8",
      ].join(" | "),
      left: [
        "C1+C2/5+1:8 | C1+C2/5+1:7 r:1",
        `C2+C3/5+1:8 | C2+G2+C3/5+2+1:3 r:1 ${ROLL} | C2+C3/5+1:8 | C2+G2+C3/5+2+1:3 r:1 ${ROLL}`,
        "C2/1:1 G1/5:1 C2/1:1 G1/5:1 C2/1:1 G1/5:1 C2/1:1 G1/5:1 | C2/1:1 G1/5:1 C2/1:1 G1/5:1 C2/1:2 r:2",
        `C1+C2/5+1:8 | C1+G1+C2/5+2+1:3 r:1 ${ROLL} | C1+C2/5+1:8 | C1+G1+C2/5+2+1:3 r:1 ${ROLL}`,
        "C2+C3/5+1:3 r:1 C2+C3/5+1:3 r:1 | C2+C3/5+1:3 r:1 C2+C3/5+1:1 r:1 F1+F2/5+1:2",
        "G1+G2/5+1:3 r:1 G1+G2/5+1:3 r:1 | C1+C2/5+1:8",
      ].join(" | "),
      pedal: "P:8 | P:8 | P:8 | P:8 | P:8 | P:8 | r:8 | r:8 | P:8 | P:8 | P:8 | P:8 | P:8 | P:4 P:2 P:2 | P:4 P:4 | P:8",
      skills: ["octave-bass", "melody-in-chords", "pedal"],
      practice: [
        { text: "Play the right hand's octaves alone, in bars 9 to 12. Keep the hand's shape and move the whole arm.", hands: "right", speed: 0.5, loop: [9, 12], wait: true },
        { text: "Play the left hand alone. It switches between deep octaves and timpani rolls.", hands: "left", speed: 0.5, loop: null, wait: true },
        { text: "Join the hands on the climax, bars 13 to 16.", hands: "both", speed: 0.6, loop: [13, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 9, toBar: 12, kind: "trick", text: "Lock the hand in an octave, thumb and little finger. The arm carries it from key to key." },
        { fromBar: 10, toBar: 12, kind: "fingering", text: "For the four-note chords, use fingers 1, 2, 3 and 5. Finger 4 rests." },
        { fromBar: 13, toBar: 16, kind: "sound", text: "Each chord climbs higher and louder. Save your loudest sound for the last C chord." },
      ],
      tricky: {
        11: "The right hand jumps from the high chord down to the octave on middle C. Use the rest before it.",
        13: "The climb starts here. Lift after each chord, and let the pedal join the sound.",
        14: "On beat 4, the left hand drops to a low F octave as the right hand plays its F chord.",
      },
    },
  },
  de: {
    about:
      "Richard Strauss schrieb diese Tondichtung 1896, nach einem Buch des Philosophen Friedrich Nietzsche. " +
      "Ihre Eröffnungsfanfare malt einen Sonnenaufgang über einem tiefen, gehaltenen C. " +
      "Stanley Kubricks Film 2001: Odyssee im Weltraum (1968) beginnt mit ihr.",
    funFact: "Die drei aufsteigenden Töne C, G und C sind der zweite, dritte und vierte Ton der Obertonreihe eines tiefen C.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten zwei Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Jetzt spiel die Takte 3 bis 8 mit der rechten Hand. Dein Daumen bleibt nahe beim G.",
          "Spiel die linke Hand allein. Sie hält in jedem Takt eine leere Quinte.",
          "Spiel das ganze Stück langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Das ist ein Sonnenaufgang. Spiel jeden langen Ton voll aus, und lass ihn bis zum Ende klingen.",
          "Hier wird aus E ein Es, und der helle Klang wird dunkel. Hör auf den Wechsel.",
          "Takt 3 lässt das tiefe C weg, damit dein Daumen auf dem G warten kann.",
        ],
        tricky: {
          1: "Dein Daumen spielt das mittlere C und geht dann hinauf zum G. Beweg ihn während des langen Tons.",
          7: "Die linke Hand geht hinab zu G und D. Die rechte Hand geht vom D hinab zum G.",
          8: "Beide Hände kommen nach Hause. Die linke kehrt zu C und G zurück, und die rechte endet auf E.",
        },
      },
      rare: {
        practice: [
          "Spiel die Takte 3 bis 6 nur mit der rechten Hand. Das ist die Melodie des Sonnenaufgangs.",
          "Spiel die Zweiklänge der rechten Hand allein, in den Takten 9 bis 16.",
          "Spiel die linke Hand allein. In Takt 7 und 8 trommelt sie C und G wie eine Pauke.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand beginnt allein, wie ein tiefer Orgelton vor der Morgendämmerung. Halt ihn beide Takte lang.",
          "Spiel die Paukentöne gleichmäßig, einen auf jedem Schlag, und jedes Mal etwas lauter.",
          "Der obere Ton jedes Zweiklangs trägt die Melodie. Spiel ihn etwas lauter.",
        ],
        tricky: {
          3: "Dein Daumen spielt das mittlere C und geht während des langen Tons hinauf zum G.",
          10: "Lass Finger 2 auf dem C, und lass Finger 5 auf dem E an Finger 4 auf dem Es übergeben.",
          15: "Die linke Hand spielt hier einen vollen C-Akkord. Leg Finger 5, 3 und 1 auf C, E und G.",
        },
      },
      epic: {
        practice: [
          "Spiel die gebrochenen Akkorde der linken Hand allein, in den Takten 9 bis 12: tiefes C, G, C und G.",
          "Spiel die rechte Hand allein in den Takten 9 bis 12, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die Takte 9 bis 12 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt die tiefe Oktave mit gedrücktem Pedal. Sie soll grollen wie eine große Orgel.",
          "Das helle E wird zum dunklen Es. Spiel das Es etwas leiser.",
          "Trommle C und G wie eine Pauke, und werde lauter bis in Takt 9.",
        ],
        tricky: {
          3: "Die rechte Hand setzt auf dem mittleren C ein, während die linke eine Oktave hinaufgeht. Die Pause in Takt 2 gibt ihr Zeit.",
          15: "Spann die rechte Hand über E, G und das hohe C. Die linke Hand hält darunter eine C-Oktave.",
          16: "Beide Hände springen für den letzten Akkord hinab. Nutz die kurze Pause am Ende von Takt 15.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Oktaven der rechten Hand allein, in den Takten 9 bis 12. Halt die Form der Hand, und beweg den ganzen Arm.",
          "Spiel die linke Hand allein. Sie wechselt zwischen tiefen Oktaven und Paukenwirbeln.",
          "Spiel den Höhepunkt, die Takte 13 bis 16, mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Halt die Hand fest in einer Oktave, Daumen und kleiner Finger. Der Arm trägt sie von Taste zu Taste.",
          "Nimm für die Vierklänge Finger 1, 2, 3 und 5. Finger 4 ruht.",
          "Jeder Akkord steigt höher und wird lauter. Heb dir den lautesten Klang für den letzten C-Akkord auf.",
        ],
        tricky: {
          11: "Die rechte Hand springt vom hohen Akkord hinab zur Oktave auf dem mittleren C. Nutz die Pause davor.",
          13: "Hier beginnt der Aufstieg. Heb nach jedem Akkord ab, und lass das Pedal den Klang verbinden.",
          14: "Auf Schlag 4 fällt die linke Hand zu einer tiefen F-Oktave, während die rechte ihren F-Akkord spielt.",
        },
      },
    },
  },
};

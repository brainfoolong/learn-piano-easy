/**
 * *Old MacDonald Had a Farm*: the traditional farmyard song, in four versions of ours.
 *
 * The tune is one verse of sixteen bars in G major: the farm line twice, the animal's sounds, and the
 * farm line again. The hook is its first two bars, the opening "Old MacDonald had a farm".
 *
 * Common plays the tune in quarters over held bass notes and fifths, and merges its quick notes. It
 * rests an eighth before each high B, so the hand has time to reach it. Rare plays the real
 * rhythm over a bass and chords. Epic puts an Alberti bass under it with the pedal, and plays the second
 * line in thirds. Legendary sets the tune an octave up in chords over a stride bass, with quick runs.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const G_MAJOR: Key = { tonic: 7, mode: "major" };

/** The tune in G major, in eighths: the farm line, the animal's sounds, and the farm line to end. */
const FARM = "G4:2 G4:2 G4:2 D4:2 | E4:2 E4:2 D4:4 | B4:2 B4:2 A4:2 A4:2";
const SOUNDS = "G4:2 G4:2 G4:2 D4:1 D4:1 | G4:2 G4:2 G4:4 | G4:1 G4:1 G4:2 G4:1 G4:1 G4:2 | G4:1 G4:1 G4:1 G4:1 G4:2 G4:2";
const tune = [FARM, "G4:6 D4:2", FARM, "G4:6 D4:1 D4:1", SOUNDS, FARM, "G4:8"].join(" | ");

/** Half a bar of Alberti bass in eighths, on G, C or D major. */
const ALBERTI: Record<string, string> = {
  G: "G2/5:1 D3/1:1 B2/3:1 D3/1:1",
  C: "G2/5:1 E3/1:1 C3/3:1 E3/1:1",
  D: "F#2/5:1 D3/1:1 A2/3:1 D3/1:1",
};

/** Half a bar of stride in sixteenths: the root in octaves, then the chord, each with a rest for the jump. */
const STRIDE: Record<string, string> = {
  G: "G1+G2/5+1:2 r:2 B2+D3+G3/3+2+1:2 r:2",
  C: "C2+C3/5+1:2 r:2 C3+E3+G3/3+2+1:2 r:2",
  D: "D2+D3/5+1:2 r:2 C3+F#3+A3/3+2+1:2 r:2",
};

/** Bars of `patterns` from `halves`, such as `"GG CG"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** The chords of the verse by half bar, through bar 15. */
const CHORDS = "GG CG GD GG GG CG GD GG GG GG GG GG GG CG GD";

export const oldMacDonaldHadAFarm: OurSong = {
  slug: "old-macdonald-had-a-farm",
  title: "Old MacDonald Had a Farm",
  source: {
    composer: "Traditional",
    died: null,
    published: 1917,
    edition: "The tune as it is sung today, which grew from \"Ohio\" in F. T. Nettleingham's Tommy's Tunes (1917)",
  },
  about:
    "Old MacDonald Had a Farm is a children's song about a farmer and his animals. " +
    "An early form called Ohio was printed in 1917, in a book of songs sung by British soldiers. " +
    "Each verse adds an animal and its sound, so the song lasts as long as the singers like.",
  funFact: "In the 1917 song the farmer was called Old Macdougal, and his farm was in Ohio.",
  mythic: null,
  tune: { text: tune, numerator: 4, denominator: 4, steps: 2, key: G_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: G_MAJOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "G4/3:2 G4/3:2 G4/3:2 D4/1:2 | E4/2:2 E4/2:2 D4/1:3 r:1 | B4/5:2 B4/5:2 A4/4:2 A4/4:2 | G4/3:6 D4/1:2",
        "G4/3:2 G4/3:2 G4/3:2 D4/1:2 | E4/2:2 E4/2:2 D4/1:3 r:1 | B4/5:2 B4/5:2 A4/4:2 A4/4:2 | G4/3:6 D4/1:2",
        "G4/3:2 G4/3:2 G4/3:2 D4/1:2 | G4/3:2 G4/3:2 G4/3:4 | G4/3:2 G4/3:2 G4/3:2 G4/3:2 | G4/3:2 G4/3:2 G4/3:2 G4/3:2",
        "G4/3:2 G4/3:2 G4/3:2 D4/1:2 | E4/2:2 E4/2:2 D4/1:3 r:1 | B4/5:2 B4/5:2 A4/4:2 A4/4:2 | G4/3:8",
      ].join(" | "),
      left: [
        "G2/5:8 | C3/2:4 G2/5:4 | G2/5:4 D3/1:4 | G2/5:8",
        "G2/5:8 | C3/2:4 G2/5:4 | G2/5:4 D3/1:4 | G2/5:8",
        "G2+D3/5+1:8 | G2+D3/5+1:8 | G2+D3/5+1:8 | G2+D3/5+1:8",
        "G2/5:8 | C3/2:4 G2/5:4 | G2/5:4 D3/1:4 | G2+D3/5+1:8",
      ].join(" | "),
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the right hand alone, slowly, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Now the left hand alone. It holds each note for two or four beats.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Put both hands together on the first eight bars.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Your thumb rests on D and your third finger on G. Each finger keeps its own key." },
        { fromBar: 2, toBar: 3, kind: "rhythm", text: "Lift your hand a little before the high B, so you land on it in time." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "These are the animal's sounds. Make them bounce, and smile if you like." },
      ],
      tricky: {
        3: "Your little finger reaches up for the high B, while the thumb stays near D.",
        7: "The same reach again: little finger on B, then fourth finger on A.",
        15: "One last reach for B. Use the short rest before it to get ready.",
      },
    },
    rare: {
      key: G_MAJOR,
      bpm: 104,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "G4/3:2 G4/3:2 G4/3:2 D4/1:2 | E4/2:2 E4/2:2 D4/1:4 | B4/5:2 B4/5:2 A4/4:2 A4/4:2 | G4/3:6 D4/1:2",
        "G4/3:2 G4/3:2 G4/3:2 D4/1:2 | E4/2:2 E4/2:2 D4/1:4 | B4/5:2 B4/5:2 A4/4:2 A4/4:2 | G4/3:6 D4/1:1 D4/1:1",
        SOUNDS.replace(/G4:/g, "G4/3:").replace(/D4:/g, "D4/1:"),
        "G4/3:2 G4/3:2 G4/3:2 D4/1:2 | E4/2:2 E4/2:2 D4/1:4 | B4/5:2 B4/5:2 A4/4:2 A4/4:2 | D4+G4/1+3:8",
      ].join(" | "),
      left: [
        "G2/5:4 B2+D3/3+1:4 | G2+C3/5+2:4 G2+B2+D3/5+3+1:4 | G2+B2+D3/5+3+1:4 A2+C3+D3/4+2+1:4 | G2/5:4 B2+D3/3+1:4",
        "G2/5:4 B2+D3/3+1:4 | G2+C3/5+2:4 G2+B2+D3/5+3+1:4 | G2+B2+D3/5+3+1:4 A2+C3+D3/4+2+1:4 | G2/5:4 B2+D3/3+1:4",
        "G2/5:4 B2+D3/3+1:4 | G2/5:4 B2+D3/3+1:4 | G2/5:2 B2+D3/3+1:2 G2/5:2 B2+D3/3+1:2 | G2/5:2 B2+D3/3+1:2 G2/5:2 B2+D3/3+1:2",
        "G2/5:4 B2+D3/3+1:4 | G2+C3/5+2:4 G2+B2+D3/5+3+1:4 | G2+B2+D3/5+3+1:4 A2+C3+D3/4+2+1:4 | G2+B2+D3/5+3+1:8",
      ].join(" | "),
      skills: ["eighth-notes", "triads"],
      practice: [
        { text: "Clap the quick notes of bars 11 and 12, then play the right hand alone.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Play the left hand alone, and keep each chord until the next one.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first four bars, slowly.", hands: "both", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 8, toBar: 9, kind: "rhythm", text: "The two quick D notes are eighths. Think of them as one beat split in two." },
        { fromBar: 11, toBar: 12, kind: "rhythm", text: "Here a short, short, long pattern repeats. Say the animal's sound in your head as you play." },
        { fromBar: 3, toBar: 3, kind: "sound", text: "The left hand's chord changes halfway through the bar. Let each one ring for two beats." },
      ],
      tricky: {
        3: "The thumb leaves D and the little finger takes the high B at once. Keep the hand open.",
        7: "The same jump up to B. Halfway through the bar, the left hand's fourth finger takes A.",
        15: "The last jump to B. After it, both hands only have the final chord left.",
      },
    },
    epic: {
      key: G_MAJOR,
      bpm: 100,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "G4/3:2 G4/3:2 G4/3:2 D4/1:2 | E4/2:2 E4/2:2 D4/1:4 | B4/5:2 B4/5:2 A4/4:2 A4/4:2 | G4/3:6 D4/1:2",
        "E4+G4/3+5:2 E4+G4/3+5:2 E4+G4/3+5:2 B3+D4/1+2:2 | C4+E4/1+3:2 C4+E4/1+3:2 B3+D4/1+2:4 | G4+B4/3+5:2 G4+B4/3+5:2 F#4+A4/2+4:2 F#4+A4/2+4:2 | D4+G4/1+4:2 A4/5:1 G4/4:1 E4/2:1 F#4/3:1 D4/1:1 D4/1:1",
        "G4/3:2 G4/3:2 G4/3:2 D4/1:1 D4/1:1 | G4/3:2 G4/3:2 G4/3:2 A4/4:1 B4/5:1 | G4/3:1 G4/3:1 G4/3:2 G4/3:1 G4/3:1 G4/3:2 | G4/3:1 G4/3:1 G4/3:1 G4/3:1 G4/3:2 G4/3:2",
        "G4/3:2 G4/3:2 G4/3:2 D4/1:2 | E4/2:2 E4/2:2 D4/1:1 E4/2:1 F#4/3:1 G4/4:1 | B4/5:2 B4/5:2 A4/4:2 A4/4:2 | B3+D4+G4/1+2+3:8",
      ].join(" | "),
      left: `${halfBars(ALBERTI, CHORDS)} | G2+D3+G3/5+2+1:8`,
      pedal: "P:4 P:4 | ".repeat(15) + "P:8",
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds alone, and keep both notes of each pair together.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Join the hands on the first four bars, slowly.", hands: "both", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Keep the Alberti bass soft, so the tune sings above it." },
        { fromBar: 5, toBar: 7, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Change the pedal on every half bar, as the Alberti bass starts again." },
      ],
      tricky: {
        7: "The thirds jump up from D to G and B. Move the whole hand, and keep its shape.",
        15: "After the quick run, your little finger lands on B. Let the run carry the hand there.",
        16: "Your hand falls from A to the last chord. Thumb on B, third finger on G.",
      },
    },
    legendary: {
      key: G_MAJOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [
        "B4+D5+G5/1+2+5:4 B4+D5+G5/1+2+5:4 B4+D5+G5/1+2+5:4 G4+B4+D5/1+2+4:4 | G4+C5+E5/1+2+4:4 G4+C5+E5/1+2+4:4 D5/1:8 | D5+G5+B5/1+3+5:4 D5+G5+B5/1+3+5:4 D5+F#5+A5/1+3+5:4 D5+F#5+A5/1+3+5:4 | B4+D5+G5/1+2+5:12 G4+B4+D5/1+2+4:4",
        "B4+D5+G5/1+2+5:4 B4+D5+G5/1+2+5:4 B4+D5+G5/1+2+5:4 G4+B4+D5/1+2+4:4 | G4+C5+E5/1+2+4:4 G4+C5+E5/1+2+4:4 D5/1:8 | D5+G5+B5/1+3+5:4 D5+G5+B5/1+3+5:4 D5+F#5+A5/1+3+5:4 D5+F#5+A5/1+3+5:4 | B4+D5+G5/1+2+5:12 D5/1:2 D5/1:2",
        "G5/3:4 G5/3:4 G5/3:4 D5/1:2 D5/1:2 | G5/3:4 G5/3:4 G5/3:2 F#5/2:1 G5/3:1 A5/4:2 B5/5:2 | G5/3:2 G5/3:2 G5/3:4 G5/3:2 G5/3:2 G5/3:4 | G5/3:2 G5/3:2 G5/3:2 G5/3:2 G5/3:4 G5/3:1 F#5/2:1 E5/1:1 D5/1:1",
        "B4+D5+G5/1+2+5:4 B4+D5+G5/1+2+5:4 B4+D5+G5/1+2+5:4 G4+B4+D5/1+2+4:4 | G4+C5+E5/1+3+5:4 G4+C5+E5/1+3+5:4 G4+B4+D5/1+2+4:4 E5/1:1 F#5/2:1 G5/3:1 A5/4:1 | D5+G5+B5/1+3+5:4 D5+G5+B5/1+3+5:4 D5+A5/1+5:4 D5+A5/1+5:4 | G4+B4+D5+G5/1+2+3+5:16",
      ].join(" | "),
      left: `${halfBars(STRIDE, CHORDS)} | G1+G2/5+1:16`,
      pedal: "P:8 P:8 | ".repeat(15) + "P:16",
      skills: ["stride", "melody-in-chords", "sixteenth-notes"],
      practice: [
        { text: "Play the stride bass alone: jump down for the bass note, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the quick runs of the right hand alone, slowly at first.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "trick", text: "In stride, look at the bass note and let the hand find the chord by feel." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
        { fromBar: 10, toBar: 10, kind: "fingering", text: "The quick notes climb by step, one finger per key, up to the little finger on B." },
      ],
      tricky: {
        4: "Hold the long chord for three beats, then drop the thumb to G for the chord on beat four.",
        8: "Your thumb plays both quick D notes, ready for the single notes of bar 9.",
        13: "The run ends with your thumb on D. Slide it down to B for the chord, with finger 2 on D.",
      },
    },
  },
  de: {
    about:
      "\"Old MacDonald hat 'ne Farm\" ist ein Kinderlied über einen Bauern und seine Tiere. " +
      "Eine frühe Fassung namens Ohio erschien 1917 in einem Buch mit Liedern, die britische Soldaten sangen. " +
      "Jede Strophe bringt ein Tier und seinen Laut dazu, also dauert das Lied so lange, wie die Sänger wollen.",
    funFact: "Im Lied von 1917 hieß der Bauer Old Macdougal, und sein Hof lag in Ohio.",
    versions: {
      common: {
        practice: [
          "Spiel die rechte Hand allein und langsam, und lass das Lied auf jeden Ton warten.",
          "Jetzt die linke Hand allein. Sie hält jeden Ton zwei oder vier Schläge lang.",
          "Nimm beide Hände zusammen für die ersten acht Takte.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Dein Daumen liegt auf dem D und Finger 3 auf dem G. Jeder Finger behält seine eigene Taste.",
          "Heb die Hand kurz vor dem hohen H etwas an, damit du rechtzeitig darauf landest.",
          "Das sind die Laute der Tiere. Lass sie hüpfen, und lächle ruhig dabei.",
        ],
        tricky: {
          3: "Dein kleiner Finger greift hinauf zum hohen H, während der Daumen nah am D bleibt.",
          7: "Wieder derselbe Griff: der kleine Finger auf H, dann Finger 4 auf A.",
          15: "Ein letzter Griff zum H. Nutz die kurze Pause davor, um dich bereitzumachen.",
        },
      },
      rare: {
        practice: [
          "Klatsch die schnellen Töne der Takte 11 und 12, dann spiel die rechte Hand allein.",
          "Spiel die linke Hand allein, und halt jeden Akkord bis zum nächsten.",
          "Spiel die ersten vier Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die zwei schnellen D sind Achtel. Stell sie dir als einen geteilten Schlag vor.",
          "Hier wiederholt sich ein Muster aus kurz, kurz, lang. Sag beim Spielen im Kopf den Laut des Tiers.",
          "Der Akkord der linken Hand wechselt in der Taktmitte. Lass jeden zwei Schläge lang klingen.",
        ],
        tricky: {
          3: "Der Daumen verlässt das D, und der kleine Finger nimmt sofort das hohe H. Halt die Hand offen.",
          7: "Derselbe Sprung hinauf zum H. In der Taktmitte nimmt Finger 4 der linken Hand das A.",
          15: "Der letzte Sprung zum H. Danach bleibt beiden Händen nur noch der Schlussakkord.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Terzen der rechten Hand allein, und drück beide Töne jedes Zweiklangs zusammen.",
          "Spiel die ersten vier Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise, damit die Melodie darüber singt.",
          "Die Melodie ist der obere Ton jedes Zweiklangs, also lass den oberen Finger führen.",
          "Wechsle das Pedal jeden halben Takt, sobald der Alberti-Bass neu beginnt.",
        ],
        tricky: {
          7: "Die Terzen springen vom D hinauf zu G und H. Beweg die ganze Hand, und behalt ihre Form.",
          15: "Nach dem schnellen Lauf landet dein kleiner Finger auf dem H. Lass den Lauf die Hand dorthin tragen.",
          16: "Deine Hand fällt vom A zum Schlussakkord. Daumen auf H, Finger 3 auf G.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Stride-Bass allein: Spring hinunter zum Basston, dann zurück hinauf zum Akkord.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel die schnellen Läufe der rechten Hand allein, am Anfang langsam.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau beim Stride auf den Basston, und lass die Hand den Akkord nach Gefühl finden.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
          "Die schnellen Töne steigen stufenweise, ein Finger pro Taste, bis zum kleinen Finger auf H.",
        ],
        tricky: {
          4: "Halt den langen Akkord drei Schläge lang. Dann lass den Daumen für den Akkord auf Schlag vier zum G fallen.",
          8: "Dein Daumen spielt beide schnellen D und ist damit bereit für die einzelnen Töne von Takt 9.",
          13: "Der Lauf endet mit dem Daumen auf D. Schieb ihn hinunter zum H für den Akkord, mit Finger 2 auf D.",
        },
      },
    },
  },
};

/**
 * *Habanera*: Carmen's first phrase from Bizet's opera *Carmen*, in four versions of ours.
 *
 * The tune is the phrase that slides down by semitones from D to E. The score writes it in 2/4 with
 * triplet eighths, sixteenths and triplet sixteenths. The tune here makes every length three times
 * longer, so each triplet eighth is a quarter and Common needs nothing faster. Each bar of 3/4 is one
 * beat of the score, and bar 1 holds the score's opening rest. The hook is bars 2 to 4, the descent
 * from D to B flat.
 *
 * Every version plays the tune twice and closes on D minor. Common holds open fifths on D and lifts the
 * hand for a sixteenth before A, where it moves down. Rare plays every note over a waltz-like bass in one
 * hand position. Epic puts the habanera rhythm in the left hand, then plays the tune again in thirds.
 * Legendary sets the habanera rhythm with octaves and chords, then plays the tune in octaves an octave up.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 3/4, a quarter split in four: the score's first phrase, every length tripled. */
const tune =
  "r:12 | D5:6 C#5:6 | C5:4 C5:4 C5:4 | B4:6 Bb4:6 | A4:6 A4:3 A4:3 | G#4:6 G4:6 | " +
  "F4:2 G4:2 F4:2 E4:3 F4:3 | G4:6 F4:6 | E4:6 r:6 | r:12";

/** The tune's first nine bars in the right hand, fingered, with a lift before A to move the hand down. */
const RIGHT_TUNE =
  "r:12 | D5/5:6 C#5/4:6 | C5/3:4 C5/3:4 C5/3:4 | B4/2:6 Bb4/1:5 r:1 | A4/5:6 A4/5:3 A4/5:3 | G#4/4:6 G4/3:6 | " +
  "F4/2:2 G4/3:2 F4/2:2 E4/1:3 F4/2:3 | G4/3:6 F4/2:6 | E4/1:6 r:6";

/** The tune's first nine bars in thirds under it, fingered. */
const RIGHT_THIRDS =
  "r:12 | Bb4+D5/2+4:6 A4+C#5/1+3:6 | A4+C5/1+3:4 A4+C5/1+3:4 A4+C5/1+3:4 | G#4+B4/1+3:6 G4+Bb4/1+3:6 | " +
  "F4+A4/1+3:6 F4+A4/1+3:3 F4+A4/1+3:3 | E4+G#4/1+3:6 E4+G4/1+3:6 | " +
  "D4+F4/1+3:2 E4+G4/2+4:2 D4+F4/1+3:2 C#4+E4/1+2:3 D4+F4/1+3:3 | E4+G4/2+4:6 D4+F4/1+3:6 | C#4+E4/1+3:6 r:6";

/** The tune's first nine bars in octaves, an octave up, fingered. */
const RIGHT_OCTAVES =
  "r:12 | D5+D6/1+5:6 C#5+C#6/1+5:6 | C5+C6/1+5:4 C5+C6/1+5:4 C5+C6/1+5:4 | B4+B5/1+5:6 Bb4+Bb5/1+5:6 | " +
  "A4+A5/1+5:6 A4+A5/1+5:3 A4+A5/1+5:3 | G#4+G#5/1+5:6 G4+G5/1+5:6 | " +
  "F4+F5/1+5:2 G4+G5/1+5:2 F4+F5/1+5:2 E4+E5/1+5:3 F4+F5/1+5:3 | G4+G5/1+5:6 F4+F5/1+5:6 | E4+E5/1+5:6 r:6";

/** Two bars of the habanera rhythm on D minor or on A7 over D: a dotted eighth, a sixteenth, two eighths. */
const HABANERA: Record<string, string> = {
  d: "D2/5:9 A2/2:3 | D3/1:6 A2/2:6",
  a: "D2/5:9 A2/2:3 | C#3/1:6 G2/3:6",
};

/** Two bars of the habanera rhythm with an octave bass and chords, on D minor or on A7 over D. */
const HABANERA_CHORDS: Record<string, string> = {
  d: "D2+D3/5+1:9 A2/5:3 | A2+D3+F3/5+2+1:6 A2+D3+F3/5+2+1:4 r:2",
  a: "D2+D3/5+1:9 A2/5:3 | A2+C#3+G3/5+3+1:6 A2+C#3+G3/5+3+1:4 r:2",
};

/** Pairs of bars of `patterns` from `chords`, such as `"dda"`: one letter per pair. */
function pairs(patterns: Record<string, string>, chords: string): string {
  return [...chords].map((chord) => patterns[chord]).join(" | ");
}

/** Common's left hand for one time through the tune's first nine bars: held fifths and single notes. */
const COMMON_LEFT =
  "D3+A3/5+1:12 | A3/1:12 | D3+A3/5+1:12 | D3/5:12 | D3+A3/5+1:12 | D3/5:12 | D3+A3/5+1:12 | D3+A3/5+1:12 | A3/1:12";

/** Rare's left hand for one time through the tune's first nine bars, in one hand position. */
const RARE_LEFT =
  "D3+F3+A3/5+3+1:12 | D3/5:4 A3/1:4 E3+A3/4+1:4 | D3/5:4 F3+A3/3+1:4 F3+A3/3+1:4 | D3/5:4 G3/2:4 G3/2:4 | " +
  "D3/5:4 F3+A3/3+1:4 F3+A3/3+1:4 | D3/5:4 E3/4:4 E3/4:4 | D3/5:4 A3/1:4 A3/1:4 | D3/5:4 A3/1:4 A3/1:4 | E3+A3/4+1:12";

export const habanera: OurSong = {
  slug: "habanera",
  title: "Habanera",
  aka: ["L'amour est un oiseau rebelle"],
  collection: "film",
  source: {
    composer: "Georges Bizet",
    died: 1875,
    published: 1875,
    edition: "Carmen (1875), the Habanera, its first phrase as Wikipedia's article on the aria prints it",
  },
  about:
    "Carmen sings this aria when she first appears in Georges Bizet's opera Carmen, first staged in Paris in 1875. " +
    "Bizet took its tune from a song by Sebastián Iradier, believing it was a folk song. " +
    "The film The Bad News Bears (1976) plays Carmen's music throughout.",
  funFact: "A habanera is a dance from Cuba, and it is named after Havana, the capital.",
  mythic: null,
  tune: { text: tune, numerator: 3, denominator: 4, steps: 4, key: D_MINOR, hookBars: [2, 4] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 120,
      numerator: 3,
      denominator: 4,
      steps: 4,
      right: [
        "r:12 | D5/5:6 C#5/4:6 | C5/3:4 C5/3:4 C5/3:4 | B4/2:6 Bb4/1:5 r:1 | A4/5:12 | G#4/4:6 G4/3:6",
        "F4/2:12 | G4/3:6 F4/2:6 | E4/1:6 r:6 | r:12",
        "r:12 | D5/5:6 C#5/4:6 | C5/3:4 C5/3:4 C5/3:4 | B4/2:6 Bb4/1:5 r:1 | A4/5:12 | G#4/4:6 G4/3:6",
        "F4/2:12 | G4/3:6 F4/2:6 | E4/1:6 r:6 | r:4 A4/5:4 G4/3:4 | F4/2:4 G4/3:4 E4/1:4 | F4/2:12",
      ].join(" | "),
      left: [COMMON_LEFT, "D3+A3/5+1:12", COMMON_LEFT, "D3+A3/5+1:12 | D3+A3/5+1:12 | D3+A3/5+1:12"].join(" | "),
      skills: ["position-change", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 5 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play the right hand alone from bar 5 to bar 9, low in the new position.", hands: "right", speed: 0.6, loop: [5, 9], wait: true },
        { text: "Now the left hand alone. It holds one shape per bar and never moves.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first ten bars.", hands: "both", speed: 0.7, loop: [1, 10], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 4, kind: "fingering", text: "Each finger plays one key, from 5 down to the thumb. The tune slides down step by step." },
        { fromBar: 4, toBar: 5, kind: "trick", text: "Lift the hand for a moment after B flat, and land with finger 5 on A." },
        { fromBar: 2, toBar: 6, kind: "sound", text: "Play the slide down slowly and smoothly, like a cat stretching." },
      ],
      tricky: {
        5: "The hand moves down here. Lift it after B flat, then land finger 5 on A.",
        15: "The same move as bar 5: lift after B flat, then land finger 5 on A.",
        20: "After the rest, finger 5 plays A and finger 3 plays G. Finger 4 waits.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 144,
      numerator: 3,
      denominator: 4,
      steps: 4,
      right: [
        RIGHT_TUNE,
        "r:12",
        RIGHT_TUNE,
        "r:4 A4/5:4 G4/3:4 | F4/2:4 G4/3:4 E4/1:4 | F4+A4/2+5:12",
      ].join(" | "),
      left: [
        RARE_LEFT,
        "D3+F3+A3/5+3+1:12",
        RARE_LEFT,
        "D3/5:4 F3+A3/3+1:4 F3+A3/3+1:4 | D3/5:4 A3/1:4 E3+A3/4+1:4 | D3+F3+A3/5+3+1:12",
      ].join(" | "),
      skills: ["eighth-notes", "dotted-rhythm"],
      practice: [
        { text: "Play the right hand alone on bars 2 to 6, slowly, and count three beats in each bar.", hands: "right", speed: 0.6, loop: [2, 6], wait: true },
        { text: "Play the right hand alone on bars 7 to 9, where the little turn comes.", hands: "right", speed: 0.6, loop: [7, 9], wait: true },
        { text: "Play the left hand alone. It keeps its five fingers on D, E, F, G and A.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 5, toBar: 5, kind: "rhythm", text: "A long A, then two short ones. Think \"taa, ti-ti\"." },
        { fromBar: 7, toBar: 7, kind: "fingering", text: "The turn F, G, F uses fingers 2, 3 and 2. Keep them close to the keys." },
        { fromBar: 4, toBar: 5, kind: "trick", text: "Lift the hand after B flat, and land with finger 5 on A." },
      ],
      tricky: {
        5: "Finger 5 lands on A after the move, then plays it twice more, short and quick.",
        15: "The same as bar 5: land finger 5 on A, then play the two short As.",
        20: "After the rest, finger 5 plays A and finger 3 plays G. Finger 4 waits.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 168,
      numerator: 3,
      denominator: 4,
      steps: 4,
      right: [RIGHT_TUNE, "r:12", RIGHT_THIRDS, "r:4 F4+A4/2+4:4 E4+G4/1+3:4 | D4+F4/1+3:4 E4+G4/2+4:4 C#4+E4/1+2:4 | D4+F4+A4/1+3+5:12"].join(" | "),
      left: [pairs(HABANERA, "dddaadddaa"), "D2/5:9 A2/2:3", "D2+A2+D3/5+2+1:12"].join(" | "),
      markedClashBars: [4, 14, 17, 19, 21],
      skills: ["thirds-and-sixths", "dotted-rhythm", "position-change"],
      practice: [
        { text: "Play the habanera rhythm alone in the left hand: long, short, then two even notes.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [12, 16], wait: true },
        { text: "Join the hands on bars 1 to 6, slowly.", hands: "both", speed: 0.5, loop: [1, 6], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "rhythm", text: "The left hand's short note leads into the next bar. Let it bounce." },
        { fromBar: 12, toBar: 16, kind: "fingering", text: "The tune is the top note of each third, so let the upper finger lead." },
        { fromBar: 1, toBar: 10, kind: "sound", text: "Keep the bass soft and light, like a dancer's steps under the voice." },
      ],
      tricky: {
        5: "The right hand moves down to A while the left hand starts its long D. Practise them together slowly.",
        17: "The thirds turn quickly here. Change between fingers 1 and 3 and fingers 2 and 4.",
        20: "After the rest, fingers 2 and 4 take F and A. Then the thirds walk down.",
      },
    },
    legendary: {
      key: D_MINOR,
      bpm: 192,
      numerator: 3,
      denominator: 4,
      steps: 4,
      right: [
        RIGHT_TUNE,
        "r:12",
        RIGHT_OCTAVES,
        "r:4 A4+A5/1+5:4 G4+G5/1+5:4 | F4+F5/1+5:4 E4+E5/1+5:4 C#4+C#5/1+5:4 | D4+F4+A4+D5/1+2+3+5:12",
      ].join(" | "),
      left: [pairs(HABANERA_CHORDS, "dddaadddaa"), "D2+D3/5+1:9 A2/5:3", "D2+A2+D3/5+2+1:12"].join(" | "),
      markedClashBars: [2, 4, 6, 12, 14, 16, 21],
      skills: ["octave-bass", "dotted-rhythm", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: the low octave, the short A, then two chords.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's octaves alone. Keep the hand open and move it as one piece.", hands: "right", speed: 0.5, loop: [12, 16], wait: true },
        { text: "Join the hands on the second time through, where the tune climbs an octave.", hands: "both", speed: 0.6, loop: [11, 19], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "trick", text: "Look at the low octave, and let the hand find the chords by feel." },
        { fromBar: 12, toBar: 16, kind: "fingering", text: "Thumb and little finger take every octave. Slide them down together, a key at a time." },
        { fromBar: 12, toBar: 19, kind: "sound", text: "Play the top note of each octave a little louder, so the tune sings." },
      ],
      tricky: {
        12: "The right hand jumps up to the octave on D. Use the rest in bar 11 to get there.",
        17: "The octaves turn quickly here. Keep the wrist loose, and let the arm guide the hand.",
        21: "Thumb and little finger reach the black keys for C sharp. Move the hand a little forward.",
      },
    },
  },
  de: {
    about:
      "Carmen singt diese Arie bei ihrem ersten Auftritt in Georges Bizets Oper Carmen, die 1875 in Paris uraufgeführt wurde. " +
      "Bizet nahm die Melodie aus einem Lied von Sebastián Iradier, weil er es für ein Volkslied hielt. " +
      "Der Film The Bad News Bears (1976) spielt durchgehend Carmens Musik.",
    funFact: "Die Habanera ist ein Tanz aus Kuba, und sie ist nach der Hauptstadt Havanna benannt.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 5 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die rechte Hand allein von Takt 5 bis Takt 9, tief in der neuen Lage.",
          "Jetzt die linke Hand allein. Sie hält eine Griffform pro Takt und bewegt sich nie.",
          "Spiel die ersten zehn Takte mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Jeder Finger spielt eine Taste, von 5 hinab bis zum Daumen. Die Melodie gleitet Schritt für Schritt hinab.",
          "Heb die Hand nach dem B kurz an, und lande mit Finger 5 auf dem A.",
          "Spiel das Hinabgleiten langsam und weich, wie eine Katze, die sich streckt.",
        ],
        tricky: {
          5: "Hier geht die Hand hinab. Heb sie nach dem B an, dann lande mit Finger 5 auf dem A.",
          15: "Derselbe Wechsel wie in Takt 5: Heb nach dem B an, dann lande mit Finger 5 auf dem A.",
          20: "Nach der Pause spielt Finger 5 das A und Finger 3 das G. Finger 4 wartet.",
        },
      },
      rare: {
        practice: [
          "Spiel die Takte 2 bis 6 langsam nur mit der rechten Hand, und zähl drei Schläge in jedem Takt.",
          "Spiel die Takte 7 bis 9 nur mit der rechten Hand. Dort kommt der kleine Doppelschlag.",
          "Spiel die linke Hand allein. Ihre fünf Finger bleiben auf D, E, F, G und A.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Ein langes A, dann zwei kurze. Denk \"taa, ti-ti\".",
          "Der Doppelschlag F, G, F nimmt die Finger 2, 3 und 2. Halt sie nah an den Tasten.",
          "Heb die Hand nach dem B an, und lande mit Finger 5 auf dem A.",
        ],
        tricky: {
          5: "Finger 5 landet nach dem Wechsel auf dem A und spielt es dann noch zweimal, kurz und schnell.",
          15: "Wie in Takt 5: Lande mit Finger 5 auf dem A, dann spiel die zwei kurzen A.",
          20: "Nach der Pause spielt Finger 5 das A und Finger 3 das G. Finger 4 wartet.",
        },
      },
      epic: {
        practice: [
          "Spiel den Habanera-Rhythmus allein in der linken Hand: lang, kurz, dann zwei gleiche Töne.",
          "Spiel die Terzen der rechten Hand allein, und drück beide Töne jedes Zweiklangs wie einen an.",
          "Spiel die Takte 1 bis 6 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Der kurze Ton der linken Hand führt in den nächsten Takt. Lass ihn federn.",
          "Die Melodie ist der obere Ton jeder Terz, also lass den oberen Finger führen.",
          "Halt den Bass leise und leicht, wie die Schritte einer Tänzerin unter der Stimme.",
        ],
        tricky: {
          5: "Die rechte Hand geht hinab zum A, während die linke Hand ihr langes D beginnt. Üb beides langsam zusammen.",
          17: "Hier drehen sich die Terzen schnell. Wechsle zwischen Finger 1 und 3 und Finger 2 und 4.",
          20: "Nach der Pause nehmen Finger 2 und 4 das F und das A. Dann gehen die Terzen hinab.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: die tiefe Oktave, das kurze A, dann zwei Akkorde.",
          "Spiel die Oktaven der rechten Hand allein. Halt die Hand offen, und beweg sie als ein Stück.",
          "Spiel den zweiten Durchgang mit beiden Händen zusammen. Dort steigt die Melodie eine Oktave höher.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau auf die tiefe Oktave, und lass die Hand die Akkorde nach Gefühl finden.",
          "Daumen und kleiner Finger nehmen jede Oktave. Schieb sie zusammen hinab, Taste für Taste.",
          "Spiel den oberen Ton jeder Oktave etwas lauter, damit die Melodie singt.",
        ],
        tricky: {
          12: "Die rechte Hand springt hinauf zur Oktave auf D. Nutz die Pause in Takt 11, um dorthin zu kommen.",
          17: "Hier drehen sich die Oktaven schnell. Halt das Handgelenk locker, und lass den Arm die Hand führen.",
          21: "Daumen und kleiner Finger greifen die schwarzen Tasten für Cis. Schieb die Hand etwas nach vorn.",
        },
      },
    },
  },
};

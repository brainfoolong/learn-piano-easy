/**
 * *Blow the Man Down*: the halyard shanty, in four versions of ours.
 *
 * The source is R. R. Terry's *The Shanty Book, Part I* of 1921, scanned on Wikimedia Commons. It prints
 * the song in 6/8, in E-flat major, with dotted eighths and sixteenths. The tune is the last verse's
 * ending: an upbeat of two eighths and the eight bars that follow.
 *
 * The tune writes every sixteenth as a quarter, so each print bar is a bar of 6/2 split into quarters.
 * Bar 1 holds the upbeat after a rest. Its range is D4 to E-flat 5, and the hook is its first four bars.
 *
 * Every version writes the tune in 6/4 eighths, two bars per print bar, so a bar of ours is half a print
 * bar. Bar 1 holds the upbeat alone. Our chords are the tonic under the opening and the close, the
 * dominant under the middle, and the subdominant under the two high Cs. Our own bars use the same three.
 *
 * E-flat major has three flats, so Common and Rare move the song to G major. Epic and Legendary keep
 * E-flat major. Every version closes on the home chord.
 *
 * Common plays the tune over one held bass note or open fifth a bar, then 4 bars of our own. Rare plays a
 * long bass note and a short chord in each half bar, and adds eighths in its 4 bars of our own. Epic
 * rolls a broken chord with the pedal under the tune and under 8 bars of our own runs. Legendary plays
 * the tune in chords over an octave bass and a chord, and arpeggios under the same 8 bars.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Epic and Legendary keep. */
const E_FLAT_MAJOR: Key = { tonic: 3, mode: "major" };

/** The key Common and Rare move the song to. */
const G_MAJOR: Key = { tonic: 7, mode: "major" };

/** The tune in 6/2, in quarters, which are the print's sixteenths: one bar per print bar, after the upbeat. */
const tune =
  "r:8 Eb4:2 G4:2 | Bb4:3 C5:1 Bb4:2 G4:2 Eb4:2 G4:2 | Bb4:2 C5:2 Bb4:2 G4:2 Eb4:2 G4:2 | Bb4:6 C5:6 | Ab4:3 G4:1 Ab4:2 F4:4 G4:2 | Ab4:3 G4:1 Ab4:2 F4:2 D4:2 F4:2 | Ab4:2 G4:2 F4:2 C5:4 Eb5:2 | Bb4:1 Bb4:3 Bb4:2 Bb4:4 Ab4:2 | G4:3 F4:1 G4:2 Eb4:6";

/** The tune in G major, in 6/4 eighths, for Common. The hand moves only after the long E and the high G. */
const TUNE_G = [
  "r:4 G4/1:4 B4/2:4 | D5/4:6 E5/5:2 D5/4:4 | B4/2:4 G4/1:4 B4/2:4 | D5/4:4 E5/5:4 D5/4:4 | B4/2:4 G4/1:4 B4/2:4",
  "D5/4:12 | E5/5:12 | C5/4:6 B4/3:2 C5/4:4 | A4/2:8 B4/3:4 | C5/4:6 B4/3:2 C5/4:4 | A4/2:4 F#4/1:4 A4/2:4",
  "C5/3:4 B4/2:4 A4/1:4 | E5/4:8 G5/5:4 | D5/5:2 D5/5:6 D5/5:4 | D5/5:8 C5/4:4 | B4/3:6 A4/2:2 B4/3:4 | G4/1:12",
].join(" | ");

/** Rare's tune: Common's, with a two-note chord under four long notes. */
const TUNE_G_CHORDS = TUNE_G.replace("D5/4:12", "B4+D5/2+4:12")
  .replace("E5/5:12", "C5+E5/3+5:12")
  .replace("A4/2:8", "F#4+A4/1+2:8")
  .replace("D5/5:8", "B4+D5/3+5:8");

/** Common's bars 18 to 21 in eighths, in the hand position from G to D. */
const OWN_COMMON = "B4/3:4 C5/4:4 D5/5:4 | C5/4:4 A4/2:4 C5/4:4 | D5/5:4 B4/3:4 A4/2:4 | G4/1:12";

/** Rare's bars 18 to 21 in eighths, in the same hand position, with a few eighths. */
const OWN_RARE = [
  "B4/3:2 C5/4:2 D5/5:4 C5/4:1 B4/3:1 A4/2:2 | C5/4:3 D5/5:1 C5/4:2 A4/2:4 G4/1:2",
  "A4/2:2 B4/3:1 C5/4:1 D5/5:4 C5/4:2 A4/2:2 | G4+B4/1+3:12",
].join(" | ");

/** The tune in E-flat major, in 6/4 eighths, for Epic. */
const TUNE_E = [
  "r:4 Eb4/1:4 G4/2:4 | Bb4/4:6 C5/5:2 Bb4/4:4 | G4/2:4 Eb4/1:4 G4/2:4 | Bb4/4:4 C5/5:4 Bb4/4:4 | G4/2:4 Eb4/1:4 G4/2:4",
  "Bb4/4:12 | C5/5:12 | Ab4/4:6 G4/3:2 Ab4/4:4 | F4/2:8 G4/3:4 | Ab4/4:6 G4/3:2 Ab4/4:4 | F4/2:4 D4/1:4 F4/2:4",
  "Ab4/3:4 G4/2:4 F4/1:4 | C5/4:8 Eb5/5:4 | Bb4/5:2 Bb4/5:6 Bb4/5:4 | Bb4/5:8 Ab4/4:4 | G4/3:6 F4/2:2 G4/3:4 | Eb4/1:12",
].join(" | ");

/** Legendary's tune in E-flat major: chords of two to four notes under the tune's long notes. */
const TUNE_E_CHORDS = [
  "r:4 Eb4/1:4 G4/2:4",
  "Eb4+G4+Bb4/1+2+4:6 C5/5:2 Eb4+G4+Bb4/1+2+4:4",
  "Eb4+G4/1+2:4 Eb4/1:4 G4/2:4",
  "Eb4+G4+Bb4/1+2+4:4 Eb4+G4+C5/1+2+5:4 Eb4+G4+Bb4/1+2+4:4",
  "Eb4+G4/1+2:4 Eb4/1:4 G4/2:4",
  "Bb3+Eb4+G4+Bb4/1+2+3+5:12",
  "C4+Eb4+Ab4+C5/1+2+3+5:12",
  "D4+F4+Ab4/1+2+4:6 G4/3:2 D4+F4+Ab4/1+2+4:4",
  "Bb3+D4+F4/1+2+4:8 G4/5:4",
  "D4+F4+Ab4/1+3+5:6 G4/4:2 D4+F4+Ab4/1+3+5:4",
  "Bb3+D4+F4/1+2+4:4 D4/2:4 F4/4:4",
  "Ab4/4:4 G4/3:4 F4/2:4",
  "Eb4+Ab4+C5/1+2+4:8 Eb5/5:4",
  "Bb4/5:2 Eb4+G4+Bb4/1+2+5:6 Eb4+G4+Bb4/1+2+5:4",
  "D4+F4+Bb4/1+2+5:8 F4+Ab4/2+4:4",
  "Eb4+G4/1+3:6 F4/2:2 Eb4+G4/1+3:4",
  "Bb3+Eb4/1+3:12",
].join(" | ");

/** Epic's and Legendary's bars 18 to 24 in eighths: runs with the thumb passing under and a finger crossing over. */
const OWN_E = [
  "Eb4/1:1 F4/2:1 G4/3:1 Ab4/1:1 Bb4/2:1 C5/3:1 Bb4/2:4 G4/1:2",
  "Ab4/2:2 C5/4:2 Eb5/5:2 C5/4:3 Bb4/3:1 Ab4/2:2",
  "G4/1:1 Bb4/3:1 D5/5:2 C5/4:1 Bb4/3:1 Ab4/2:1 G4/1:1 F4/3:2 D4/1:2",
  "Eb4/1:2 G4/2:2 Bb4/3:2 Eb5/5:4 D5/4:1 C5/3:1",
  "Ab4/1:2 C5/3:2 Bb4/2:1 Ab4/1:1 Bb4/2:2 C5/3:2 Eb5/5:2",
  "Eb5/5:3 D5/4:1 C5/3:1 Bb4/2:1 D5/4:2 C5/3:1 Bb4/2:1 F4/1:2",
  "F4/1:2 Ab4/2:2 Bb4/3:2 D5/5:2 C5/4:1 Bb4/3:1 Ab4/2:2",
].join(" | ");

/** Bars of `patterns` from `chords`, such as `"ttss"`: one letter per half bar, two per bar. */
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

/** The chords under tune bars 2 to 17, two per bar: t, s and d are the tonic, subdominant and dominant. */
const TUNE_CHORDS = "tttttttttt" + "ss" + "dddddddddd" + "ss" + "tt" + "dd" + "tt" + "tt";

/** The chords under Epic's and Legendary's bars 18 to 24, two per bar. */
const OWN_CHORDS = "ttssddttsstddd";

/** The chords under Common's and Rare's bars 18 to 20, two per bar. */
const OWN_CHORDS_SHORT = "ttssdd";

/** Common's held shapes in G major, a whole bar each. The hand stays on G2 to D3, finger 5 to the thumb. */
const HELD: Record<string, string> = {
  t: "G2+D3/5+1:12",
  s: "C3/2:12",
  d: "D3/1:12",
};

/** Rare's half bar in G major: a long bass note, then a short chord, in Common's hand place. */
const LILT: Record<string, string> = {
  t: "G2/5:4 B2+D3/3+1:2",
  s: "C3/2:4 G2+C3/5+2:2",
  d: "D3/1:4 A2+D3/4+1:2",
};

/** Epic's half bar in E-flat major: a broken chord near E-flat 3. */
const BROKEN: Record<string, string> = {
  t: "Eb3/5:1 G3/3:1 Bb3/1:1 G3/3:1 Bb3/1:1 G3/3:1",
  s: "Eb3/5:1 Ab3/2:1 C4/1:1 Ab3/2:1 C4/1:1 Ab3/2:1",
  d: "D3/5:1 F3/3:1 Bb3/1:1 F3/3:1 Bb3/1:1 F3/3:1",
};

/** Legendary's half bar: an octave on the beat, a chord on the next two, each with a rest to jump. */
const STRIDE: Record<string, string> = {};
for (const [chord, [octave, triad]] of Object.entries({
  t: ["Eb2+Eb3/5+1", "Bb2+Eb3+G3/5+2+1"],
  s: ["Ab1+Ab2/5+1", "Ab2+C3+Eb3/5+3+1"],
  d: ["Bb1+Bb2/5+1", "Bb2+D3+F3/5+3+1"],
})) {
  STRIDE[chord] = `${octave}:1 r:1 ${triad}:1 r:1 ${triad}:1 r:1`;
}

/** Legendary's half bar of arpeggio: up an octave and a half, then a rest to jump back down. */
const ARPEGGIO: Record<string, string> = {
  t: "Eb2/5:1 Bb2/2:1 Eb3/1:1 G3/3:1 Bb3/2:1 r:1",
  s: "Ab1/5:1 Eb2/2:1 Ab2/1:1 C3/3:1 Eb3/2:1 r:1",
  d: "Bb1/5:1 F2/2:1 Bb2/1:1 D3/3:1 F3/2:1 r:1",
};

/** The pedal of Epic and Legendary: up in bar 1, changed at each half bar, held through the last bar. */
const PEDAL = `r:12 | ${Array<string>(23).fill("P:6 P:6").join(" | ")} | P:12`;

/** Common's left hand: rest in bar 1, then one held shape per bar. */
const COMMON_LEFT = ["r:12", ...[...`${TUNE_CHORDS}${OWN_CHORDS_SHORT}`].filter((_, at) => at % 2 === 0).map((chord) => HELD[chord]), HELD.t].join(" | ");

export const blowTheManDown: OurSong = {
  slug: "blow-the-man-down",
  title: "Blow the Man Down",
  source: {
    composer: "Traditional",
    died: null,
    published: 1921,
    edition: "The verse and chorus as R. R. Terry's The Shanty Book, Part I (1921) prints them, scanned on Wikimedia Commons",
  },
  about:
    "Blow the Man Down is a halyard shanty, sung while a crew hauled a heavy sail up its mast. " +
    "Our tune follows R. R. Terry's print of 1921.",
  funFact: "A newspaper in Syracuse, New York, quoted a line of the song in 1867. Sailors had sung it on a steamship from New York to Glasgow.",
  mythic: null,
  collection: "sea",
  tune: { text: tune, numerator: 6, denominator: 2, steps: 2, key: E_FLAT_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: G_MAJOR,
      bpm: 132,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: `${TUNE_G} | ${OWN_COMMON}`,
      left: COMMON_LEFT,
      skills: ["five-finger-position", "open-fifths", "dotted-rhythm"],
      practice: [
        { text: "Play bars 1 to 7 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Play bars 8 to 17 with the right hand alone. The hand moves twice, each time after a long note.", hands: "right", speed: 0.6, loop: [8, 17], wait: true },
        { text: "Now the left hand alone. It holds one note or two for a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first seven bars, slowly.", hands: "both", speed: 0.7, loop: [1, 7], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 7, kind: "fingering", text: "Start with the thumb on G. Finger 2 takes B, finger 4 takes D, and finger 5 takes E." },
        { fromBar: 2, toBar: 3, kind: "rhythm", text: "Hold the first D for three counts, then play E for one. The short E pulls like a rope." },
        { fromBar: 1, toBar: 21, kind: "sound", text: "Sailors sang this while they hauled a sail. Lean a little on the first note of each bar, like a pull." },
      ],
      tricky: {
        8: "After the long E, the hand moves down. Finger 4 lands on C, and the thumb waits over F sharp.",
        13: "Finger 4 reaches up from A to E, and finger 5 plays the high G.",
        14: "After the high G, finger 5 moves down to D. It plays D three times: short, long, then medium.",
      },
    },
    rare: {
      key: G_MAJOR,
      bpm: 120,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: `${TUNE_G_CHORDS} | ${OWN_RARE}`,
      left: `r:12 | ${bars(LILT, `${TUNE_CHORDS}${OWN_CHORDS_SHORT}`)} | G2+B2+D3/5+3+1:12`,
      skills: ["two-note-chords", "triads", "eighth-notes"],
      practice: [
        { text: "Play the left hand alone: a long low note, then a short chord.", hands: "left", speed: 0.6, loop: [2, 9], wait: true },
        { text: "Play the right hand alone on the first seven bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Join the hands on bars 8 to 17, slowly.", hands: "both", speed: 0.6, loop: [8, 17], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 17, kind: "rhythm", text: "The left hand plays long, short, long, short in every bar. Let the tune ride on top like a boat on waves." },
        { fromBar: 6, toBar: 7, kind: "fingering", text: "Press both notes of each chord as one. The top note is the tune, so let it ring a little louder." },
        { fromBar: 18, toBar: 20, kind: "rhythm", text: "Two quick eighths fill one count. Say \"pull-ing\" for each pair." },
      ],
      tricky: {
        8: "After the chord of C and E, the hand moves down. Finger 4 lands on C. The left hand plays D, then A and D together.",
        13: "Finger 4 reaches up from A to E, and finger 5 plays the high G. The left hand plays C, then G and C together.",
        14: "Finger 5 moves down from the high G to D and plays it three times. Keep the wrist loose.",
      },
    },
    epic: {
      key: E_FLAT_MAJOR,
      bpm: 120,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [TUNE_E, OWN_E, "G4+Bb4+Eb5/1+2+5:12"].join(" | "),
      left: `r:12 | ${bars(BROKEN, `${TUNE_CHORDS}${OWN_CHORDS}`)} | Eb3+G3+Bb3/5+3+1:12`,
      pedal: PEDAL,
      skills: ["broken-chords", "thumb-under", "pedal"],
      practice: [
        { text: "Play the left hand alone until the broken chords roll by themselves.", hands: "left", speed: 0.5, loop: [2, 9], wait: false },
        { text: "Play bars 18 to 24 with the right hand alone. Pass the thumb under on the way up.", hands: "right", speed: 0.5, loop: [18, 24], wait: true },
        { text: "Join the hands on the first nine bars, slowly.", hands: "both", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 17, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 18, toBar: 18, kind: "fingering", text: "After G with finger 3, pass the thumb under to A flat. Fingers 2 and 3 then reach B flat and C." },
        { fromBar: 20, toBar: 20, kind: "fingering", text: "On the way down, finger 3 crosses over the thumb onto F." },
      ],
      tricky: {
        14: "After the high E flat, finger 5 moves down to B flat and plays it three times.",
        18: "Pass the thumb under to A flat, and keep the run smooth. The left hand rolls on without a break.",
        21: "The hand spreads over an octave, from E flat to E flat. Fingers 4 and 3 then step down to D and C.",
      },
    },
    legendary: {
      key: E_FLAT_MAJOR,
      bpm: 138,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [TUNE_E_CHORDS, OWN_E, "Eb4+G4+Bb4+Eb5/1+2+3+5:12"].join(" | "),
      left: ["r:12", bars(STRIDE, TUNE_CHORDS), bars(ARPEGGIO, OWN_CHORDS), "Eb1+Eb2/5+1:12"].join(" | "),
      pedal: PEDAL,
      skills: ["octave-bass", "arpeggios", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then a chord twice, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [2, 9], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the left hand's arpeggios alone. Finger 3 crosses over the thumb on the way up.", hands: "left", speed: 0.5, loop: [18, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 17, kind: "trick", text: "Use the short rest after each octave and chord to jump to the next one." },
        { fromBar: 6, toBar: 7, kind: "sound", text: "Play the top note of each big chord a little louder. It carries the tune." },
        { fromBar: 18, toBar: 24, kind: "sound", text: "Let the arpeggios roll softly, like waves under the ship." },
      ],
      tricky: {
        19: "The left hand starts on the low A flat, and finger 3 crosses over the thumb onto C.",
        22: "The right thumb stays near A flat, and finger 5 stretches up to E flat at the end.",
        24: "Use the rest to jump down to the low B flat. The right hand climbs from F to D and walks back to A flat.",
      },
    },
  },
  de: {
    about:
      "Blow the Man Down ist ein Shanty zum Segelsetzen. Eine Mannschaft sang ihn, während sie ein schweres Segel den Mast hinaufzog. " +
      "Unsere Melodie folgt dem Druck von R. R. Terry aus dem Jahr 1921.",
    funFact: "Eine Zeitung in Syracuse im Staat New York zitierte 1867 eine Zeile des Lieds. Seeleute hatten es auf einem Dampfschiff von New York nach Glasgow gesungen.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 7 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 8 bis 17 nur mit der rechten Hand. Die Hand rückt zweimal, jedes Mal nach einem langen Ton.",
          "Jetzt die linke Hand allein. Sie hält einen oder zwei Töne einen ganzen Takt lang.",
          "Spiel die ersten sieben Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Fang mit dem Daumen auf dem G an. Finger 2 nimmt das H, Finger 4 das D und Finger 5 das E.",
          "Halt das erste D drei Zählzeiten lang, dann spiel das E für eine. Das kurze E zieht wie an einem Seil.",
          "Seeleute sangen das, während sie ein Segel hochzogen. Betone den ersten Ton jedes Takts ein wenig, wie einen Zug.",
        ],
        tricky: {
          8: "Nach dem langen E rückt die Hand hinunter. Finger 4 landet auf dem C, und der Daumen wartet über dem Fis.",
          13: "Finger 4 greift vom A hinauf zum E, und Finger 5 spielt das hohe G.",
          14: "Nach dem hohen G rückt Finger 5 hinunter zum D. Er spielt das D dreimal: kurz, lang, dann mittel.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: erst einen langen tiefen Ton, dann einen kurzen Akkord.",
          "Spiel die ersten sieben Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 8 bis 17 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand spielt in jedem Takt lang, kurz, lang, kurz. Lass die Melodie oben reiten wie ein Boot auf den Wellen.",
          "Drück beide Töne jedes Akkords wie einen an. Der obere Ton ist die Melodie, also lass ihn etwas lauter klingen.",
          "Zwei schnelle Achtel füllen eine Zählzeit. Sag \"zie-hen\" für jedes Paar.",
        ],
        tricky: {
          8: "Nach dem Akkord aus C und E rückt die Hand hinunter. Finger 4 landet auf dem C. Die linke Hand spielt D, dann A und D zusammen.",
          13: "Finger 4 greift vom A hinauf zum E, und Finger 5 spielt das hohe G. Die linke Hand spielt C, dann G und C zusammen.",
          14: "Finger 5 rückt vom hohen G hinunter zum D und spielt es dreimal. Halt das Handgelenk locker.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein, bis die gebrochenen Akkorde von selbst rollen.",
          "Spiel die Takte 18 bis 24 nur mit der rechten Hand. Setz auf dem Weg nach oben den Daumen unter.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Setz nach dem G mit Finger 3 den Daumen unter zum As. Dann erreichen Finger 2 und 3 das B und das C.",
          "Auf dem Weg nach unten kreuzt Finger 3 über den Daumen auf das F.",
        ],
        tricky: {
          14: "Nach dem hohen Es rückt Finger 5 hinunter zum B und spielt es dreimal.",
          18: "Setz den Daumen unter zum As, und spiel den Lauf gleichmäßig. Die linke Hand rollt ohne Pause weiter.",
          21: "Die Hand spannt sich über eine Oktave, von Es bis Es. Dann gehen Finger 4 und 3 hinunter zum D und C.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann zweimal einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel die Arpeggios der linken Hand allein. Auf dem Weg nach oben kreuzt Finger 3 über den Daumen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause nach jeder Oktave und jedem Akkord, um zum nächsten Griff zu springen.",
          "Spiel den oberen Ton jedes großen Akkords etwas lauter. Er trägt die Melodie.",
          "Lass die Arpeggios leise rollen, wie Wellen unter dem Schiff.",
        ],
        tricky: {
          19: "Die linke Hand beginnt auf dem tiefen As, und Finger 3 kreuzt über den Daumen auf das C.",
          22: "Der rechte Daumen bleibt beim As, und Finger 5 streckt sich am Ende hinauf zum Es.",
          24: "Nutz die Pause, um hinunter zum tiefen B zu springen. Die rechte Hand steigt vom F zum D und geht zurück zum As.",
        },
      },
    },
  },
};

/**
 * The meter: measures a piano piece against the limits of the four rarities of our songs, says which
 * rarity it fits and whether it earns its own, finds the song's hook in it, and names its tricky spots.
 * [docs/our-songs.md](../docs/our-songs.md) holds the rest of the rules a song of ours follows.
 *
 * A piece is measured as a `MeterSong`: each hand's notes with a finger on each, the pedal, the keys and
 * the time. `meterSong` builds one from any `Song`, so the meter reads our own versions and the catalog's
 * pieces alike. A finger the version writes is kept, and the search of `src/theory/fingering.ts` fills
 * every other note, which is all of them in a catalog piece.
 *
 * The limits, one row per measure. A version fits a rarity when every measure stays inside that rarity's
 * column. ∞ is no limit.
 *
 * | Measure | Common | Rare | Epic | Legendary |
 * |---|---|---|---|---|
 * | Position changes in any 8 bars, per hand | 2 | 2 | ∞ | ∞ |
 * | Position changes after a note shorter than a half, with no rest | 0 | ∞ | ∞ | ∞ |
 * | Position changes after a note shorter than a quarter, with no rest | 0 | 0 | ∞ | ∞ |
 * | Crossings | 0 | 0 | ∞ | ∞ |
 * | Biggest leap in one hand, semitones | 7 | 12 | 19 | 24 |
 * | Most notes at once, right hand | 1 | 2 | 3 | 4 |
 * | Most notes at once, left hand | 2 | 3 | 3 | 4 |
 * | Widest chord in one hand, semitones | 7 | 9 | 12 | 12 |
 * | Shortest note, ornaments aside, quarters, at least | 1 | 1/2 | 1/4 | 1/4 |
 * | Ornaments in any 8 bars | 0 | 0 | ∞ | ∞ |
 * | Triplets: 0 none, 1 eighth triplets, 2 any | 0 | 0 | 1 | 2 |
 * | Starts per second, one hand | 2.5 | 4 | 7 | 10 |
 * | Starts per second, both hands | 3 | 5 | 8 | 12 |
 * | Left-hand starts: 0 strong beats and a half or longer, 1 on the beat, 2 anywhere | 0 | 1 | 2 | 2 |
 * | Second voices, right hand | 0 | 0 | 0 | ∞ |
 * | Second voices, left hand | 0 | 0 | ∞ | ∞ |
 * | Hand crossings | 0 | 0 | 0 | ∞ |
 * | Sharps or flats in the key | 1 | 2 | 3 | 4 |
 * | Notes outside the key in any 4 bars | 3 | 3 | ∞ | ∞ |
 * | Pedal: 0 none, 1 whole bars, 2 changed at a note, 3 any | 0 | 1 | 2 | 3 |
 * | Clashes between the hands on a beat | 0 | 0 | ∞ | ∞ |
 * | Clashes the guide does not mark | 0 | 0 | 0 | 0 |
 * | Bars, at least | 8 | 16 | 16 | 16 |
 * | Bars, at most | 24 | 32 | 64 | 96 |
 * | Seconds, at most | 60 | 90 | 150 | 210 |
 *
 * How each measure counts:
 * - A **position change** is a move between two moments of one hand that `handMove` calls a shift: one
 *   finger on another key, a span past the comfortable one, or a crossing. Every pair of notes of the
 *   two moments is checked. A change follows a rest when the hand was silent for at least a 16th.
 * - A **crossing** is a position change where a finger passes over or under another. A change after a
 *   rest is none, since the hand lifts and lands in its new place.
 * - A **note's length** is from its start to its end, rounded up to a 16th, so a note that ends a 32nd
 *   early, as the notation writes it, keeps its written length.
 * - A **leap** is the larger move of the lowest and of the highest note between two moments in a row.
 *   A move after a rest of an eighth or more is no leap, since the hand has time to travel.
 * - A **chord** is the notes of one hand that start together. Its width is its lowest to its highest.
 * - The **shortest note** is the shortest time from one start to the next in a hand. A time under a
 *   16th is an **ornament**, such as a grace note or a turn, and counts apart.
 * - A start a third or two thirds into a quarter is an **eighth triplet**, and a start on another
 *   sixth of it is another triplet. A start on none of these grids follows an ornament and counts as
 *   neither.
 * - A **start** is a moment where a hand begins one or more notes. Starts per second is the most starts
 *   in any two seconds, halved.
 * - A **beat** is the time signature's note, or a dotted quarter in 6/8, 9/8 and 12/8. A **strong beat**
 *   starts the bar or, with an even count of beats, its second half.
 * - A **second voice** is a note that starts while another note of its hand sounds for more than a 32nd
 *   longer, unless both started together.
 * - A **hand crossing** is a start where a sounding left-hand note lies above a sounding right-hand one.
 * - The **key** is the file's key signature where it has one, and the key the notes fit best otherwise.
 *   A minor key also takes its raised sixth and seventh. A **chromatic neighbour note**, a semitone from
 *   the same pitch before and after it in its hand, is no note outside the key, as in E, D sharp, E.
 * - A **clash** is a beat where the hands sound a minor second or a major seventh, in any octave. A
 *   marked clash lies in a bar the guide names. A catalog piece has no guide, so all its clashes count
 *   as marked.
 * - **Bars** run from the start to the end of the last note, and so do the **seconds**.
 *
 * The limits are calibrated on Clementi's Op. 36 No. 1 and the 18 studies of Burgmüller's Op. 100 in
 * the catalog, books a learner meets late in the first year. None fits Common or Rare, and every one
 * fits Epic or Legendary. The fastest, *L'Adieu*, starts 9.5 notes a second in one hand.
 *
 * Decisions, and what each costs:
 * - A version earns its rarity when it fits it and breaks at least one limit of the rarity below. Common
 *   earns its rarity by fitting it.
 * - The catalog difficulty is the rarity's base, 1 to 4, and half a point more when the version's
 *   fastest hand passes the middle between the rarity below's limit and its own. Common's floor is 1.
 * - The tune is found in the top voice of a hand: the highest note that starts at a moment. Common and
 *   Rare look in the right hand only, and Epic and Legendary in either hand.
 * - The hook is found when every hook note starts at its place, moved by one interval, within the
 *   version's first 8 bars. Common and Rare also play no other top note inside the hook.
 * - Common finds a tune note up to a 16th early or late, or held over from the note before, and
 *   needs 90% of them. Every other rarity needs every note at its place.
 * - Common and Rare may move the tune to C, G or F major, or A, E or D minor. Epic and Legendary keep its
 *   key, unless the key has more sharps or flats than the rarity allows. Then the tune moves to a key
 *   the rarity allows.
 * - Common and Rare allow 3 notes outside the key in 4 bars and 2 position changes in 8 bars, so a
 *   chromatic tune keeps its notes. *In the Hall of the Mountain King* has 3 such notes in its second bar,
 *   in any key they may take, and each one moves a finger to another key.
 * - A tricky spot is a bar whose fingering costs the most, by `momentCosts` summed over both hands.
 * - A fingering is refused for a note without a written finger, or for a move between two fingers
 *   past their practical span. A move after a rest of an eighth or more is a jump, such as a stride
 *   bass, so it is never a stretch, and the leap limit bounds it instead.
 *
 * `bun tools/song-meter.ts <file.mid>…` prints each file's measures and the rarity it fits.
 */
import { autoHands } from "../src/input/wait-mode";
import { readMidi } from "../src/midi/smf-read";
import { writeMidi } from "../src/midi/smf-write";
import { songFromMidi, type Song } from "../src/midi/song";
import { RARITIES, type Rarity } from "../src/library/guide";
import { fingerHand, handMove, momentCosts, type Finger, type Hand } from "../src/theory/fingering";
import { detectKey, type Key } from "../src/theory/key";
import { fingerKey, parseHand, TICKS_PER_BEAT, twoHandMidi, writtenFingers, type TwoHandSong } from "./song-notation";

export { RARITIES, type Rarity };

/** One note of a hand, with the finger that plays it and whether the version wrote that finger. */
export interface MeterNote {
  pitch: number;
  startTick: number;
  endTick: number;
  finger: Finger | undefined;
  written: boolean;
}

/** A piece as the meter reads it. Ticks are the file's own. */
export interface MeterSong {
  ticksPerQuarter: number;
  numerator: number;
  denominator: number;
  ticksPerBar: number;
  /** Each hand's notes, in start order, then pitch order. */
  hands: Record<Hand, MeterNote[]>;
  pedals: { startTick: number; endTick: number }[];
  /** The keys, each from its tick, the first from 0. */
  keys: { tick: number; key: Key; accidentals: number }[];
  /** The end of the last note. */
  endTick: number;
  seconds: (tick: number) => number;
  /** The bars, from 1, where the guide marks a clash between the hands. */
  markedClashBars: ReadonlySet<number>;
}

/** The fingers a version writes, per hand, keyed by `fingerKey`. */
export type WrittenFingers = Record<Hand, ReadonlyMap<string, Finger>>;

/** The key of a key signature of `sharps`, negative for flats. */
function keyOfSignature(sharps: number, minor: boolean): Key {
  const major = (((sharps * 7) % 12) + 12) % 12;
  return minor ? { tonic: (major + 9) % 12, mode: "minor" } : { tonic: major, mode: "major" };
}

/** The sharps or flats in the signature of `key`. */
export function accidentalsOf(key: Key): number {
  const major = key.mode === "major" ? key.tonic : (key.tonic + 3) % 12;
  const fifths = (major * 7) % 12;
  return Math.min(fifths, 12 - fifths);
}

/** The meter's view of `song`. `fingers` are the version's own, and the search fills the rest. */
export function meterSong(song: Song, fingers?: WrittenFingers, markedClashBars: Iterable<number> = []): MeterSong {
  const trackHands = autoHands(song);
  const raw: Record<Hand, { pitch: number; startTick: number; endTick: number }[]> = { right: [], left: [] };
  for (const note of song.notes) {
    const trackHand = trackHands[note.track];
    const hand = trackHand === "split" ? (note.pitch >= 60 ? "right" : "left") : trackHand;
    if (hand === "right" || hand === "left") raw[hand].push({ pitch: note.pitch, startTick: note.startTick, endTick: note.endTick });
  }
  const hands = { right: [], left: [] } as Record<Hand, MeterNote[]>;
  for (const hand of ["right", "left"] as const) {
    const notes = raw[hand].sort((a, b) => a.startTick - b.startTick || a.pitch - b.pitch);
    const fixed = new Map<number, Finger>();
    notes.forEach((note, index) => {
      const finger = fingers?.[hand].get(fingerKey(note.startTick, note.pitch));
      if (finger !== undefined) fixed.set(index, finger);
    });
    const found = fingerHand(notes, hand, fixed);
    hands[hand] = notes.map((note, index) => ({ ...note, finger: found[index], written: fixed.has(index) }));
  }
  const signature = song.tempoMap.signatures[0];
  const numerator = signature?.numerator ?? 4;
  const denominator = signature?.denominator ?? 4;
  const ticksPerQuarter = song.tempoMap.ticksPerQuarter;
  const keys = song.keySignatures.length > 0
    ? song.keySignatures.map((signature) => keyOfSignature(signature.sharps, signature.minor)).map((key, at) => ({ tick: song.keySignatures[at]!.tick, key }))
    : [{ tick: 0, key: detectKey([...hands.right, ...hands.left])?.key ?? { tonic: 0, mode: "major" as const } }];
  const endTick = Math.max(0, ...[...hands.right, ...hands.left].map((note) => note.endTick));
  return {
    ticksPerQuarter,
    numerator,
    denominator,
    ticksPerBar: (ticksPerQuarter * 4 * numerator) / denominator,
    hands,
    pedals: song.tracks.flatMap((track) => track.pedals.map((pedal) => ({ startTick: pedal.startTick, endTick: pedal.endTick }))),
    keys: keys.map((entry, at) => ({ ...entry, tick: at === 0 ? 0 : entry.tick, accidentals: accidentalsOf(entry.key) })),
    endTick,
    seconds: (tick) => song.tempoMap.ticksToSeconds(tick),
    markedClashBars: new Set(markedClashBars),
  };
}

/** The meter's view of a version written in the notation, with its own fingers and the guide's marked clash bars. */
export function meterOfNotation(song: TwoHandSong, markedClashBars: Iterable<number> = []): MeterSong {
  return meterSong(songFromMidi(readMidi(writeMidi(twoHandMidi(song)))), writtenFingers(song), markedClashBars);
}

/**
 * The meter's view of the catalog's MIDI file `bytes`, with the search's fingering. A catalog piece has
 * no guide, so every bar counts as marked for a clash.
 */
export function meterOfFile(bytes: Uint8Array): MeterSong {
  const song = songFromMidi(readMidi(bytes));
  const bars = Math.ceil(song.endTick / Math.max(1, song.tempoMap.signatures[0]?.ticksPerMeasure ?? song.tempoMap.ticksPerQuarter * 4)) + 1;
  return meterSong(song, undefined, Array.from({ length: bars }, (_, at) => at + 1));
}

/** One moment of a hand: the notes that start on one tick. */
interface Moment {
  tick: number;
  notes: MeterNote[];
}

/** The moments of `notes`, which are in start order. */
function momentsOf(notes: readonly MeterNote[]): Moment[] {
  const moments: Moment[] = [];
  for (const note of notes) {
    const last = moments[moments.length - 1];
    if (last !== undefined && last.tick === note.startTick) last.notes.push(note);
    else moments.push({ tick: note.startTick, notes: [note] });
  }
  return moments;
}

/** The bar of `tick`, from 0. */
function barOf(song: MeterSong, tick: number): number {
  return Math.floor(tick / song.ticksPerBar);
}

/** The most of `ticks` in any `bars` bars in a row. */
function mostInBars(song: MeterSong, ticks: readonly number[], bars: number): number {
  const perBar = new Map<number, number>();
  for (const tick of ticks) perBar.set(barOf(song, tick), (perBar.get(barOf(song, tick)) ?? 0) + 1);
  let most = 0;
  for (const first of perBar.keys()) {
    let sum = 0;
    for (let bar = first; bar < first + bars; bar++) sum += perBar.get(bar) ?? 0;
    most = Math.max(most, sum);
  }
  return most;
}

/** The length of `note` rounded up to a 16th, in ticks. */
function lengthOf(song: MeterSong, note: MeterNote): number {
  const sixteenth = song.ticksPerQuarter / 4;
  return Math.ceil((note.endTick - note.startTick) / sixteenth - 1e-9) * sixteenth;
}

/** The position changes of one hand: the tick of each, its bar's crossing, and how long the hand held before it. */
interface Shift {
  tick: number;
  crossing: boolean;
  /** The longest length of the moment before, in ticks, or Infinity after a rest. */
  held: number;
}

/** Every position change of `hand`. */
export function shiftsOf(song: MeterSong, hand: Hand): Shift[] {
  const shifts: Shift[] = [];
  const moments = momentsOf(song.hands[hand]);
  moments.forEach((moment, at) => {
    const before = moments[at - 1];
    if (before === undefined) return;
    let shift = false;
    let crossing = false;
    for (const from of before.notes) {
      for (const to of moment.notes) {
        if (from.finger === undefined || to.finger === undefined) continue;
        const move = handMove(hand, from.finger, from.pitch, to.finger, to.pitch);
        shift ||= move.shift;
        crossing ||= move.crossing;
      }
    }
    if (!shift) return;
    const lastEnd = Math.max(...before.notes.map((note) => note.endTick));
    const rest = moment.tick - lastEnd >= song.ticksPerQuarter / 4;
    shifts.push({
      tick: moment.tick,
      crossing: crossing && !rest,
      held: rest ? Infinity : Math.max(...before.notes.map((note) => lengthOf(song, note))),
    });
  });
  return shifts;
}

/** The most position changes of either hand in any 8 bars. */
export function positionChangesPer8Bars(song: MeterSong): number {
  return Math.max(...(["right", "left"] as const).map((hand) => mostInBars(song, shiftsOf(song, hand).map((shift) => shift.tick), 8)));
}

/** The position changes of both hands after a note shorter than `ticks`, with no rest before them. */
function shiftsHeldUnder(song: MeterSong, ticks: number): number {
  return (["right", "left"] as const).flatMap((hand) => shiftsOf(song, hand)).filter((shift) => shift.held < ticks).length;
}

/** The position changes after a note shorter than a half, with no rest. */
export function shiftsAfterShort(song: MeterSong): number {
  return shiftsHeldUnder(song, 2 * song.ticksPerQuarter);
}

/** The position changes after a note shorter than a quarter, with no rest. */
export function shiftsAfterQuick(song: MeterSong): number {
  return shiftsHeldUnder(song, song.ticksPerQuarter);
}

/** The finger crossings of both hands. */
export function crossings(song: MeterSong): number {
  return (["right", "left"] as const).flatMap((hand) => shiftsOf(song, hand)).filter((shift) => shift.crossing).length;
}

/** Whether `hand` rests for at least an eighth between `before` and `after`. */
function restsBetween(song: MeterSong, before: Moment, after: Moment): boolean {
  return after.tick - Math.max(...before.notes.map((note) => note.endTick)) >= song.ticksPerQuarter / 2;
}

/** The biggest leap of either hand, in semitones. A move after a rest of an eighth or more is no leap. */
export function biggestLeap(song: MeterSong): number {
  let most = 0;
  for (const hand of ["right", "left"] as const) {
    const moments = momentsOf(song.hands[hand]);
    for (let at = 1; at < moments.length; at++) {
      if (restsBetween(song, moments[at - 1]!, moments[at]!)) continue;
      const [before, after] = [moments[at - 1]!.notes.map((n) => n.pitch), moments[at]!.notes.map((n) => n.pitch)];
      const low = Math.abs(Math.min(...after) - Math.min(...before));
      const high = Math.abs(Math.max(...after) - Math.max(...before));
      most = Math.max(most, low, high);
    }
  }
  return most;
}

/** The most notes `hand` starts at once. */
export function notesAtOnce(song: MeterSong, hand: Hand): number {
  return Math.max(0, ...momentsOf(song.hands[hand]).map((moment) => moment.notes.length));
}

/** The widest chord of either hand, in semitones. */
export function widestChord(song: MeterSong): number {
  const widths = (["right", "left"] as const).flatMap((hand) =>
    momentsOf(song.hands[hand]).map((moment) => Math.max(...moment.notes.map((n) => n.pitch)) - Math.min(...moment.notes.map((n) => n.pitch))),
  );
  return Math.max(0, ...widths);
}

/** The times from one start to the next in both hands, in quarters. */
function startGaps(song: MeterSong): number[] {
  return (["right", "left"] as const).flatMap((hand) => {
    const moments = momentsOf(song.hands[hand]);
    return moments.slice(1).map((moment, at) => (moment.tick - moments[at]!.tick) / song.ticksPerQuarter);
  });
}

/** Whether `quarters` is a whole number of `1 / parts` quarters. */
function onGrid(quarters: number, parts: number): boolean {
  return Math.abs(quarters * parts - Math.round(quarters * parts)) < 0.02;
}

/** The shortest time a note of the beat lasts, in quarters: a 16th. Anything quicker is an ornament. */
const ORNAMENT_QUARTERS = 0.25 - 0.02;

/** The shortest time from one start to the next in a hand, ornaments aside, in quarters, or Infinity with one start. */
export function shortestNote(song: MeterSong): number {
  return Math.min(Infinity, ...startGaps(song).filter((gap) => gap >= ORNAMENT_QUARTERS));
}

/** The most ornaments in any 8 bars: notes that start less than a 16th before the next start of their hand. */
export function ornamentsPer8Bars(song: MeterSong): number {
  const ticks = (["right", "left"] as const).flatMap((hand) => {
    const moments = momentsOf(song.hands[hand]);
    return moments.slice(0, -1).filter((moment, at) => (moments[at + 1]!.tick - moment.tick) / song.ticksPerQuarter < ORNAMENT_QUARTERS).map((m) => m.tick);
  });
  return mostInBars(song, ticks, 8);
}

/** The triplets: 0 for none, 1 for eighth triplets only, 2 for any other. */
export function triplets(song: MeterSong): number {
  let level = 0;
  for (const note of [...song.hands.right, ...song.hands.left]) {
    const within = (note.startTick % song.ticksPerQuarter) / song.ticksPerQuarter;
    if (onGrid(within, 4)) continue;
    if (onGrid(within, 3)) level = Math.max(level, 1);
    else if (onGrid(within, 6)) level = 2;
  }
  return level;
}

/** The most starts per second of `ticks`, in start order: the most in any two seconds, halved. */
function startsPerSecond(song: MeterSong, ticks: readonly number[]): number {
  const seconds = ticks.map(song.seconds);
  let most = 0;
  let from = 0;
  for (let to = 0; to < seconds.length; to++) {
    while (seconds[to]! - seconds[from]! >= 2 - 1e-9) from++;
    most = Math.max(most, to - from + 1);
  }
  return most / 2;
}

/** The most starts per second of the faster hand. */
export function startsPerSecondHand(song: MeterSong): number {
  return Math.max(...(["right", "left"] as const).map((hand) => startsPerSecond(song, momentsOf(song.hands[hand]).map((m) => m.tick))));
}

/** The most starts per second of both hands together. */
export function startsPerSecondBoth(song: MeterSong): number {
  const ticks = [...new Set([...song.hands.right, ...song.hands.left].map((note) => note.startTick))].sort((a, b) => a - b);
  return startsPerSecond(song, ticks);
}

/** The ticks of one beat of `song`: the signature's note, or a dotted quarter in a compound time. */
function beatTicks(song: MeterSong): number {
  const unit = (song.ticksPerQuarter * 4) / song.denominator;
  return song.denominator >= 8 && song.numerator % 3 === 0 && song.numerator > 3 ? 3 * unit : unit;
}

/** Where the left hand starts its notes: 0 strong beats with a half or longer, 1 on the beat, 2 anywhere. */
export function leftHandStarts(song: MeterSong): number {
  const beat = beatTicks(song);
  const beats = Math.round(song.ticksPerBar / beat);
  const strong = beats % 2 === 0 ? song.ticksPerBar / 2 : song.ticksPerBar;
  let level = 0;
  for (const note of song.hands.left) {
    const position = note.startTick % song.ticksPerBar;
    if (position % beat !== 0) return 2;
    if (position % strong !== 0 || lengthOf(song, note) < 2 * song.ticksPerQuarter) level = 1;
  }
  return level;
}

/** The second voices of `hand`: notes that start while another of the hand still sounds. */
export function secondVoices(song: MeterSong, hand: Hand): number {
  const notes = song.hands[hand];
  const slack = song.ticksPerQuarter / 8;
  return notes.filter((note) => notes.some((other) => other.startTick < note.startTick && other.endTick > note.startTick + slack)).length;
}

/** The notes of `hand` sounding at `tick`. */
function soundingAt(song: MeterSong, hand: Hand, tick: number): MeterNote[] {
  return song.hands[hand].filter((note) => note.startTick <= tick && note.endTick > tick);
}

/** The starts where a sounding left-hand note lies above a sounding right-hand one. */
export function handCrossings(song: MeterSong): number {
  const ticks = new Set([...song.hands.right, ...song.hands.left].map((note) => note.startTick));
  let count = 0;
  for (const tick of ticks) {
    const right = soundingAt(song, "right", tick);
    const left = soundingAt(song, "left", tick);
    if (right.length > 0 && left.length > 0 && Math.max(...left.map((n) => n.pitch)) > Math.min(...right.map((n) => n.pitch))) count++;
  }
  return count;
}

/** The most sharps or flats in any key of the song. */
export function keyAccidentals(song: MeterSong): number {
  return Math.max(...song.keys.map((entry) => entry.accidentals));
}

/** The pitch classes of `key`, a minor key with its raised sixth and seventh. */
function scaleOf(key: Key): Set<number> {
  const steps = key.mode === "major" ? [0, 2, 4, 5, 7, 9, 11] : [0, 2, 3, 5, 7, 8, 9, 10, 11];
  return new Set(steps.map((step) => (key.tonic + step) % 12));
}

/** Whether the note at `at` of `notes` is a neighbour note: a semitone from the same pitch on either side. */
function isNeighbourNote(notes: readonly MeterNote[], at: number): boolean {
  const before = notes[at - 1];
  const after = notes[at + 1];
  return before !== undefined && after !== undefined && before.pitch === after.pitch && Math.abs(before.pitch - notes[at]!.pitch) === 1;
}

/** The most notes outside the key in any 4 bars, chromatic neighbour notes aside. */
export function outsideKeyPer4Bars(song: MeterSong): number {
  const outside = [song.hands.right, song.hands.left].flatMap((notes) =>
    notes.filter((note, at) => {
      const key = [...song.keys].reverse().find((entry) => entry.tick <= note.startTick)!.key;
      return !scaleOf(key).has(note.pitch % 12) && !isNeighbourNote(notes, at);
    }),
  );
  return mostInBars(song, outside.map((note) => note.startTick), 4);
}

/** How the pedal is used: 0 never, 1 for whole bars, 2 changed at a note, 3 any other way. */
export function pedalUse(song: MeterSong): number {
  const slack = song.ticksPerQuarter / 8;
  const near = (tick: number, ticks: Iterable<number>) => [...ticks].some((other) => Math.abs(other - tick) <= slack);
  const barLine = (tick: number) => {
    const offset = tick % song.ticksPerBar;
    return offset <= slack || song.ticksPerBar - offset <= slack;
  };
  const starts = new Set([...song.hands.right, ...song.hands.left].map((note) => note.startTick));
  let level = 0;
  for (const pedal of song.pedals) {
    if (barLine(pedal.startTick) && barLine(pedal.endTick)) level = Math.max(level, 1);
    else if (near(pedal.startTick, starts) && (near(pedal.endTick, starts) || barLine(pedal.endTick))) level = Math.max(level, 2);
    else level = 3;
  }
  return level;
}

/** The beats where the hands sound a minor second or a major seventh, by tick. */
function clashTicks(song: MeterSong): number[] {
  const beat = beatTicks(song);
  const ticks: number[] = [];
  for (let tick = 0; tick < song.endTick; tick += beat) {
    const right = soundingAt(song, "right", tick);
    const left = soundingAt(song, "left", tick);
    if (right.some((r) => left.some((l) => [1, 11].includes((((r.pitch - l.pitch) % 12) + 12) % 12)))) ticks.push(tick);
  }
  return ticks;
}

/** The bars, from 1, where the hands clash on a beat. A guide marks these where the clash is meant. */
export function clashBars(song: MeterSong): number[] {
  return [...new Set(clashTicks(song).map((tick) => barOf(song, tick) + 1))];
}

/** The beats where the hands clash. */
export function clashes(song: MeterSong): number {
  return clashTicks(song).length;
}

/** The beats where the hands clash in a bar the guide does not mark. */
export function unmarkedClashes(song: MeterSong): number {
  return clashTicks(song).filter((tick) => !song.markedClashBars.has(barOf(song, tick) + 1)).length;
}

/** The bars from the start to the end of the last note. */
export function barCount(song: MeterSong): number {
  return Math.ceil(song.endTick / song.ticksPerBar - 1e-9);
}

/** The seconds from the start to the end of the last note. */
export function secondCount(song: MeterSong): number {
  return song.seconds(song.endTick);
}

/** What a limit bounds: a measure that must stay at most, or at least, each rarity's value. */
export interface Limit {
  name: string;
  measure: (song: MeterSong) => number;
  bound: "max" | "min";
  /** The value of each rarity, in the order of `RARITIES`. */
  values: readonly [number, number, number, number];
}

const ANY = Infinity;

/** The limit table. The head comment shows the same rows. */
export const LIMITS: readonly Limit[] = [
  { name: "position changes in 8 bars", measure: positionChangesPer8Bars, bound: "max", values: [2, 2, ANY, ANY] },
  { name: "position changes after a short note", measure: shiftsAfterShort, bound: "max", values: [0, ANY, ANY, ANY] },
  { name: "position changes after a quick note", measure: shiftsAfterQuick, bound: "max", values: [0, 0, ANY, ANY] },
  { name: "crossings", measure: crossings, bound: "max", values: [0, 0, ANY, ANY] },
  { name: "biggest leap", measure: biggestLeap, bound: "max", values: [7, 12, 19, 24] },
  { name: "notes at once, right hand", measure: (song) => notesAtOnce(song, "right"), bound: "max", values: [1, 2, 3, 4] },
  { name: "notes at once, left hand", measure: (song) => notesAtOnce(song, "left"), bound: "max", values: [2, 3, 3, 4] },
  { name: "widest chord", measure: widestChord, bound: "max", values: [7, 9, 12, 12] },
  { name: "shortest note", measure: shortestNote, bound: "min", values: [1, 0.5, 0.25, 0.25] },
  { name: "ornaments in 8 bars", measure: ornamentsPer8Bars, bound: "max", values: [0, 0, ANY, ANY] },
  { name: "triplets", measure: triplets, bound: "max", values: [0, 0, 1, 2] },
  { name: "starts per second, one hand", measure: startsPerSecondHand, bound: "max", values: [2.5, 4, 7, 10] },
  { name: "starts per second, both hands", measure: startsPerSecondBoth, bound: "max", values: [3, 5, 8, 12] },
  { name: "left-hand starts", measure: leftHandStarts, bound: "max", values: [0, 1, 2, 2] },
  { name: "second voices, right hand", measure: (song) => secondVoices(song, "right"), bound: "max", values: [0, 0, 0, ANY] },
  { name: "second voices, left hand", measure: (song) => secondVoices(song, "left"), bound: "max", values: [0, 0, ANY, ANY] },
  { name: "hand crossings", measure: handCrossings, bound: "max", values: [0, 0, 0, ANY] },
  { name: "sharps or flats", measure: keyAccidentals, bound: "max", values: [1, 2, 3, 4] },
  { name: "notes outside the key in 4 bars", measure: outsideKeyPer4Bars, bound: "max", values: [3, 3, ANY, ANY] },
  { name: "pedal", measure: pedalUse, bound: "max", values: [0, 1, 2, 3] },
  { name: "clashes", measure: clashes, bound: "max", values: [0, 0, ANY, ANY] },
  { name: "unmarked clashes", measure: unmarkedClashes, bound: "max", values: [0, 0, 0, 0] },
  { name: "bars, at least", measure: barCount, bound: "min", values: [8, 16, 16, 16] },
  { name: "bars, at most", measure: barCount, bound: "max", values: [24, 32, 64, 96] },
  { name: "seconds", measure: secondCount, bound: "max", values: [60, 90, 150, 210] },
];

/** Every measure of `song`, by the limit's name. */
export function measure(song: MeterSong): Record<string, number> {
  return Object.fromEntries(LIMITS.map((limit) => [limit.name, limit.measure(song)]));
}

/** One limit a version breaks: its name, the measured value and the rarity's bound. */
export interface Break {
  name: string;
  value: number;
  limit: number;
}

/** The limits of `rarity` that `measures` break. */
export function breaksOf(measures: Readonly<Record<string, number>>, rarity: Rarity): Break[] {
  const at = RARITIES.indexOf(rarity);
  return LIMITS.flatMap((limit) => {
    const value = measures[limit.name]!;
    const bound = limit.values[at]!;
    const broken = limit.bound === "max" ? value > bound + 1e-9 : value < bound - 1e-9;
    return broken ? [{ name: limit.name, value, limit: bound }] : [];
  });
}

/** The rarities whose every limit `measures` keep. */
export function raritiesFit(measures: Readonly<Record<string, number>>): Rarity[] {
  return RARITIES.filter((rarity) => breaksOf(measures, rarity).length === 0);
}

/** Whether a version of `measures` earns `rarity`: it fits it and breaks a limit of the rarity below. */
export function earns(measures: Readonly<Record<string, number>>, rarity: Rarity): boolean {
  const at = RARITIES.indexOf(rarity);
  if (breaksOf(measures, rarity).length > 0) return false;
  return at === 0 || breaksOf(measures, RARITIES[at - 1]!).length > 0;
}

/** The catalog difficulty of a version of `rarity`: its base, and half a point for a fast hand. */
export function catalogDifficulty(measures: Readonly<Record<string, number>>, rarity: Rarity): number {
  const at = RARITIES.indexOf(rarity);
  const limit = LIMITS.find((row) => row.name === "starts per second, one hand")!;
  const below = at === 0 ? 1 : limit.values[at - 1]!;
  const middle = (below + limit.values[at]!) / 2;
  return at + 1 + (measures[limit.name]! > middle ? 0.5 : 0);
}

/** A song's tune: its notes in ticks of `TICKS_PER_BEAT` to the quarter, its key, and its hook's span. */
export interface Tune {
  notes: { pitch: number; tick: number }[];
  key: Key;
  hook: { fromTick: number; toTick: number };
}

/**
 * The tune written as one line of the notation, in a time of `numerator` over `denominator` split into
 * `steps`, in `key`, with its hook in bars `firstBar` to `lastBar`, from 1.
 */
export function tuneOf(
  text: string,
  time: { numerator: number; denominator: number; steps?: number },
  key: Key,
  hookBars: readonly [number, number],
): Tune {
  const steps = time.steps ?? 1;
  const unit = (TICKS_PER_BEAT * 4) / time.denominator / steps;
  const perBar = time.numerator * steps;
  const notes = parseHand(text, unit, perBar, "the tune")
    .filter((note) => note.pitches.length > 0)
    .map((note) => ({ pitch: Math.max(...note.pitches), tick: note.tick }));
  const barTicks = unit * perBar;
  return { notes, key, hook: { fromTick: (hookBars[0] - 1) * barTicks, toTick: hookBars[1] * barTicks } };
}

/** What the tune match found: where the hook starts, by how much the tune moved, and how much of it plays. */
export interface TuneMatch {
  /** The tick of the hook's first note in the version, or undefined when the hook is lost. */
  hookTick: number | undefined;
  /** The semitones the version moves the tune by. */
  shift: number;
  /** The share of the tune's notes the version plays, from 0 to 1. */
  score: number;
  /** Why the version fails the match, or none. */
  problems: string[];
}

/** The keys Common and Rare may move a tune to: C, G and F major, and A, E and D minor. */
const EASY_KEYS: readonly Key[] = [
  { tonic: 0, mode: "major" },
  { tonic: 7, mode: "major" },
  { tonic: 5, mode: "major" },
  { tonic: 9, mode: "minor" },
  { tonic: 4, mode: "minor" },
  { tonic: 2, mode: "minor" },
];

/** The top voice of `notes`: the highest pitch that starts at each tick, scaled to `TICKS_PER_BEAT`. */
function topVoice(song: MeterSong, notes: readonly MeterNote[]): Map<number, number> {
  const scale = TICKS_PER_BEAT / song.ticksPerQuarter;
  const top = new Map<number, number>();
  for (const note of notes) {
    const tick = Math.round(note.startTick * scale);
    top.set(tick, Math.max(top.get(tick) ?? -Infinity, note.pitch));
  }
  return top;
}

/** Whether `song`, as a version of `rarity`, plays `tune`: its hook note for note, and the rest of it. */
export function matchTune(song: MeterSong, tune: Tune, rarity: Rarity): TuneMatch {
  const easy = rarity === "common" || rarity === "rare";
  const voices = (easy ? (["right"] as const) : (["right", "left"] as const)).map((hand) => topVoice(song, song.hands[hand]));
  const hook = tune.notes.filter((note) => note.tick >= tune.hook.fromTick && note.tick < tune.hook.toTick);
  const first = hook[0];
  const lost: TuneMatch = { hookTick: undefined, shift: 0, score: 0, problems: ["the hook is lost"] };
  if (first === undefined) return { ...lost, problems: ["the tune has no hook"] };
  const eightBars = (8 * song.ticksPerBar * TICKS_PER_BEAT) / song.ticksPerQuarter;

  let found: { tick: number; shift: number } | undefined;
  search: for (const voice of voices) {
    for (const [tick, pitch] of [...voice].sort((a, b) => a[0] - b[0])) {
      if (tick >= eightBars) break;
      const shift = pitch - first.pitch;
      const end = tick + (tune.hook.toTick - first.tick);
      const at = new Set(hook.map((note) => tick + note.tick - first.tick));
      const plays = hook.every((note) => voice.get(tick + note.tick - first.tick) === note.pitch + shift);
      const extra = easy && [...voice.keys()].some((other) => other > tick && other < end && !at.has(other));
      if (plays && !extra) {
        found = { tick, shift };
        break search;
      }
    }
  }
  if (found === undefined) return lost;

  const problems: string[] = [];
  const keyKept = found.shift % 12 === 0;
  const moved: Key = { tonic: (((tune.key.tonic + found.shift) % 12) + 12) % 12, mode: tune.key.mode };
  if (!keyKept) {
    const most = LIMITS.find((limit) => limit.name === "sharps or flats")!.values[RARITIES.indexOf(rarity)]!;
    const allowed = easy
      ? EASY_KEYS.some((key) => key.tonic === moved.tonic && key.mode === moved.mode)
      : accidentalsOf(tune.key) > most && accidentalsOf(moved) <= most;
    if (!allowed) problems.push(`the tune moves to a key ${rarity} may not take`);
  }

  const offset = found.tick - first.tick;
  const slack = rarity === "common" ? TICKS_PER_BEAT / 4 : 0;
  const scale = TICKS_PER_BEAT / song.ticksPerQuarter;
  const hands = easy ? (["right"] as const) : (["right", "left"] as const);
  const plays = (note: { pitch: number; tick: number }) => {
    const tick = note.tick + offset;
    const pitch = note.pitch + found.shift;
    if (voices.some((voice) => voice.get(tick) === pitch)) return true;
    if (slack === 0) return false;
    if (voices.some((voice) => [...voice].some(([other, top]) => top === pitch && Math.abs(other - tick) <= slack))) return true;
    return hands.some((hand) =>
      song.hands[hand].some((held) => held.pitch === pitch && held.startTick * scale < tick && held.endTick * scale > tick),
    );
  };
  const score = tune.notes.filter(plays).length / tune.notes.length;
  const needed = rarity === "common" ? 0.9 : 1;
  if (score < needed - 1e-9) problems.push(`the version plays ${Math.round(score * 100)}% of the tune, under ${needed * 100}%`);
  return { hookTick: Math.round(found.tick / scale), shift: found.shift, score, problems };
}

/** A tricky spot: a bar, from 1, and its fingering cost over both hands. */
export interface TrickySpot {
  bar: number;
  cost: number;
}

/** The fingering cost of every bar of `song`, from bar 1, over both hands. */
export function barCosts(song: MeterSong): number[] {
  const costs = Array.from({ length: barCount(song) }, () => 0);
  for (const hand of ["right", "left"] as const) {
    const notes = song.hands[hand];
    for (const { startTick, cost } of momentCosts(notes, hand, notes.map((note) => note.finger))) {
      costs[barOf(song, startTick)]! += cost;
    }
  }
  return costs;
}

/** The `count` bars of `song` whose fingering costs the most, the costliest first. Bars that cost nothing are left out. */
export function trickySpots(song: MeterSong, count = 3): TrickySpot[] {
  return barCosts(song)
    .map((cost, at) => ({ bar: at + 1, cost }))
    .filter((spot) => spot.cost > 0)
    .sort((a, b) => b.cost - a.cost || a.bar - b.bar)
    .slice(0, count);
}

/** What the fingering of a version breaks: a note without a written finger, or a stretch past its practical span. */
export function fingerProblems(song: MeterSong): string[] {
  const problems: string[] = [];
  for (const hand of ["right", "left"] as const) {
    const moments = momentsOf(song.hands[hand]);
    moments.forEach((moment, at) => {
      const bar = barOf(song, moment.tick) + 1;
      for (const note of moment.notes) if (!note.written) problems.push(`${hand} hand, bar ${bar}: pitch ${note.pitch} has no finger`);
      const before = moments[at - 1];
      if (before === undefined || restsBetween(song, before, moment)) return;
      const past = before.notes.some((from) =>
        moment.notes.some(
          (to) => from.finger !== undefined && to.finger !== undefined && from.finger !== to.finger && handMove(hand, from.finger, from.pitch, to.finger, to.pitch).pastPractical,
        ),
      );
      if (past) problems.push(`${hand} hand, bar ${bar}: a move stretches past its practical span`);
    });
  }
  return problems;
}

if (import.meta.main) {
  for (const path of process.argv.slice(2)) {
    const song = meterOfFile(new Uint8Array(await Bun.file(path).arrayBuffer()));
    const measures = measure(song);
    const fits = raritiesFit(measures);
    const lowest = RARITIES.find((rarity) => fits.includes(rarity));
    const breaks = (["rare", "epic", "legendary"] as const).map((rarity) => `${rarity}: ${breaksOf(measures, rarity).map((b) => `${b.name} ${+b.value.toFixed(2)}`).join(", ") || "fits"}`);
    console.log(`${path}: ${lowest ?? "none"}\n  ${breaks.join("\n  ")}`);
  }
}

/**
 * The MusicXML reader: a MusicXML score, plain or compressed as `.mxl`, becomes a `MidiFile`, so the
 * song model reads it exactly as it reads a MIDI file. Written from the MusicXML 4.0 spec.
 *
 * Decisions, and what each costs:
 * - The output is a `MidiFile` and not a `Song`. Every rule of the song model, such as how notes pair
 *   and how the pedal reads, then holds for both formats, and the MIDI writer can save a score.
 * - Time is counted at 960 ticks per quarter note. A score whose divisions do not divide 960, such as
 *   a quintuplet, rounds each note to the nearest tick.
 * - Each staff of each part becomes its own track, so a piano score's two hands can be played apart.
 *   Track 0 carries the tempo, time and key signatures, as a MIDI file of format 1 does.
 * - Repeats, first and second endings, D.C., D.S., Fine and To Coda are played out in full. A jump is
 *   taken at the end of the measure that holds it. After a D.C. or D.S., repeats are not taken again
 *   and only the last ending of each group plays, as players read it.
 * - Ties join after the repeats are played out, so a tie into a second ending joins the right note.
 *   A tie whose next note is missing ends where its own note ends.
 * - Pitches sound as written plus the part's `transpose`. Grace notes, cue notes and unpitched
 *   percussion are not played. Cue notes and percussion still take their time.
 * - Loudness comes from the `dynamics` of a note or of a `sound`, where 100 is velocity 90 as the spec
 *   says. A score without any plays at velocity 80.
 * - The tempo comes from each `sound` with a `tempo`. A score without one plays at 120 quarter notes
 *   per minute, MIDI's default. A `metronome` mark alone is not read.
 * - The sustain pedal comes from `pedal` directions, or from a `sound`'s `damper-pedal`.
 * - A file that is not a MusicXML score throws a `MusicXmlError`, because nothing can be played from it.
 *
 * Bounds: the played-out measures are capped at 16 times the written ones, so a looping jump ends.
 */

import { decodeMeta, type MidiEvent, type MidiFile } from "./smf-read";
import { child, childElements, parseXml, textOf, XmlError, type XmlElement } from "./xml";
import { isZip, unzipEntry, zipEntries } from "./zip";

/** The ticks per quarter note of every file this reader builds. */
export const TICKS_PER_BEAT = 960;

/** The velocity of a note when the score names no loudness. */
export const DEFAULT_VELOCITY = 80;

/** A file that is not a MusicXML score this reader can play. */
export class MusicXmlError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MusicXmlError";
  }
}

/** Whether `bytes` may be a MusicXML score: a ZIP archive, or text naming a score's root element. */
export function looksLikeMusicXml(bytes: Uint8Array): boolean {
  if (isZip(bytes)) return true;
  const head = decodeXmlText(bytes.subarray(0, 4096));
  return head.includes("<score-partwise") || head.includes("<score-timewise");
}

/** The text of an XML file, read as UTF-16 when its first bytes say so, and as UTF-8 otherwise. */
export function decodeXmlText(bytes: Uint8Array): string {
  const [a, b] = [bytes[0], bytes[1]];
  if ((a === 0xff && b === 0xfe) || (a === 0x3c && b === 0x00)) return new TextDecoder("utf-16le").decode(bytes);
  if ((a === 0xfe && b === 0xff) || (a === 0x00 && b === 0x3c)) return new TextDecoder("utf-16be").decode(bytes);
  return new TextDecoder("utf-8").decode(bytes);
}

/** The `MidiFile` of a MusicXML file's bytes, plain or compressed. */
export async function readMusicXmlBytes(bytes: Uint8Array): Promise<MidiFile> {
  if (!isZip(bytes)) return readMusicXml(decodeXmlText(bytes));
  const entries = zipEntries(bytes);
  const container = entries.find((entry) => entry.name === "META-INF/container.xml");
  let path: string | undefined;
  if (container) {
    const xml = parseXml(decodeXmlText(await unzipEntry(bytes, container)));
    path = child(child(xml, "rootfiles") ?? xml, "rootfile")?.attrs["full-path"];
  }
  const score =
    entries.find((entry) => entry.name === path) ??
    entries.find((entry) => !entry.name.startsWith("META-INF/") && /\.(xml|musicxml)$/i.test(entry.name));
  if (!score) throw new MusicXmlError("The .mxl archive holds no MusicXML score");
  return readMusicXml(decodeXmlText(await unzipEntry(bytes, score)));
}

/** One sounding note as a measure writes it, with times in ticks from the measure's start. */
interface WrittenNote {
  staff: number;
  pitch: number;
  velocity: number;
  start: number;
  end: number;
  tieStart: boolean;
  tieStop: boolean;
}

/** What one part writes in one measure. Times are ticks from the measure's start. */
interface Measure {
  /** How far the measure's content reaches, in ticks. */
  length: number;
  notes: WrittenNote[];
  pedals: { staff: number; at: number; down: boolean }[];
  tempos: { at: number; bpm: number }[];
  times: { at: number; beats: number; beatType: number }[];
  keys: { at: number; fifths: number; minor: boolean }[];
  forward: boolean;
  /** How many times the measure's end-repeat plays its section, or undefined without one. */
  backward?: number | undefined;
  /** The ending numbers this measure belongs to, or undefined outside an ending. */
  ending?: number[] | undefined;
  endingStart?: number[] | undefined;
  endingStop: boolean;
  segno?: string | undefined;
  coda?: string | undefined;
  toCoda?: string | undefined;
  daCapo: boolean;
  dalSegno?: string | undefined;
  fine: boolean;
}

interface Part {
  name: string;
  program: number;
  staves: number;
  measures: Measure[];
}

const STEPS: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** The `MidiFile` of the MusicXML document `text`. */
export function readMusicXml(text: string): MidiFile {
  let root: XmlElement;
  try {
    root = parseXml(text);
  } catch (error) {
    if (error instanceof XmlError) throw new MusicXmlError(`The MusicXML file is broken: ${error.message}`);
    throw error;
  }
  if (root.name === "score-timewise") root = partwise(root);
  else if (root.name !== "score-partwise") throw new MusicXmlError("This XML file is not a MusicXML score");

  const listed = new Map<string, { name: string; program: number }>();
  for (const scorePart of childElements(child(root, "part-list") ?? root, "score-part")) {
    const program = Number(textOf(child(child(scorePart, "midi-instrument") ?? scorePart, "midi-program")));
    listed.set(scorePart.attrs["id"] ?? "", {
      name: textOf(child(scorePart, "part-name")),
      program: Number.isInteger(program) && program >= 1 && program <= 128 ? program - 1 : 0,
    });
  }
  const parts = childElements(root, "part").map((part) => readPart(part, listed.get(part.attrs["id"] ?? "")));
  if (parts.length === 0) throw new MusicXmlError("The MusicXML score has no parts");
  return buildFile(parts);
}

/** A `score-timewise` document turned into the same score as `score-partwise`. */
function partwise(root: XmlElement): XmlElement {
  const parts = new Map<string, XmlElement>();
  for (const measure of childElements(root, "measure")) {
    for (const part of childElements(measure, "part")) {
      const id = part.attrs["id"] ?? "";
      let target = parts.get(id);
      if (!target) parts.set(id, (target = { name: "part", attrs: { id }, children: [] }));
      target.children.push({ name: "measure", attrs: measure.attrs, children: part.children });
    }
  }
  const head = root.children.filter((c) => typeof c === "string" || c.name !== "measure");
  return { name: "score-partwise", attrs: root.attrs, children: [...head, ...parts.values()] };
}

function num(element: XmlElement | undefined, fallback: number): number {
  const value = Number(textOf(element));
  return element !== undefined && Number.isFinite(value) ? value : fallback;
}

function endingNumbers(value: string | undefined): number[] {
  return (value?.match(/\d+/g) ?? []).map(Number);
}

/** Reads one part's measures in document order. */
function readPart(part: XmlElement, listed: { name: string; program: number } | undefined): Part {
  let divisions = 1;
  let velocity = DEFAULT_VELOCITY;
  let transpose = 0;
  let staves = 1;
  const toTicks = (element: XmlElement | undefined): number => (num(element, 0) * TICKS_PER_BEAT) / divisions;
  const velocityOf = (dynamics: string | undefined): number | undefined => {
    const value = Number(dynamics);
    return dynamics === undefined || !Number.isFinite(value) ? undefined : Math.max(1, Math.min(127, Math.round(value * 0.9)));
  };

  const measures = childElements(part, "measure").map((element): Measure => {
    const m = emptyMeasure();
    let cursor = 0;
    let lastStart = 0;
    const advance = (by: number): void => {
      cursor = Math.max(0, cursor + by);
      m.length = Math.max(m.length, cursor);
    };
    const readSound = (sound: XmlElement, staff: number, hasPedal: boolean): void => {
      const a = sound.attrs;
      const bpm = Number(a["tempo"]);
      if (a["tempo"] !== undefined && bpm > 0) m.tempos.push({ at: cursor, bpm });
      velocity = velocityOf(a["dynamics"]) ?? velocity;
      if (!hasPedal && a["damper-pedal"] !== undefined) m.pedals.push({ staff, at: cursor, down: a["damper-pedal"] !== "no" });
      if (a["segno"] !== undefined) m.segno = a["segno"];
      if (a["coda"] !== undefined) m.coda = a["coda"];
      if (a["tocoda"] !== undefined) m.toCoda = a["tocoda"];
      if (a["dalsegno"] !== undefined) m.dalSegno = a["dalsegno"];
      if (a["dacapo"] === "yes") m.daCapo = true;
      if (a["fine"] !== undefined) m.fine = true;
    };

    for (const item of childElements(element)) {
      switch (item.name) {
        case "attributes": {
          divisions = num(child(item, "divisions"), divisions) || divisions;
          staves = Math.max(staves, num(child(item, "staves"), 1));
          const shift = child(item, "transpose");
          if (shift) transpose = num(child(shift, "chromatic"), 0) + 12 * num(child(shift, "octave-change"), 0);
          const key = child(item, "key");
          if (key && child(key, "fifths")) {
            m.keys.push({ at: cursor, fifths: num(child(key, "fifths"), 0), minor: textOf(child(key, "mode")) === "minor" });
          }
          const time = child(item, "time");
          if (time && child(time, "beats")) {
            const beats = endingNumbers(textOf(child(time, "beats"))).reduce((sum, n) => sum + n, 0);
            m.times.push({ at: cursor, beats, beatType: num(child(time, "beat-type"), 4) });
          }
          break;
        }
        case "note": {
          if (child(item, "grace")) break;
          const duration = toTicks(child(item, "duration"));
          const chord = child(item, "chord") !== undefined;
          const start = chord ? lastStart : cursor;
          if (!chord) {
            lastStart = cursor;
            advance(duration);
          }
          const pitch = child(item, "pitch");
          if (!pitch || child(item, "cue")) break;
          const midi =
            12 * (num(child(pitch, "octave"), 4) + 1) +
            (STEPS[textOf(child(pitch, "step")).toUpperCase()] ?? 0) +
            Math.round(num(child(pitch, "alter"), 0)) +
            transpose;
          if (midi < 0 || midi > 127) break;
          const ties = [...childElements(item, "tie"), ...childElements(child(item, "notations") ?? item, "tied")];
          const staff = num(child(item, "staff"), 1);
          staves = Math.max(staves, staff);
          m.notes.push({
            staff,
            pitch: midi,
            velocity: velocityOf(item.attrs["dynamics"]) ?? velocity,
            start,
            end: start + duration,
            tieStart: ties.some((tie) => tie.attrs["type"] === "start" || tie.attrs["type"] === "continue"),
            tieStop: ties.some((tie) => tie.attrs["type"] === "stop" || tie.attrs["type"] === "continue"),
          });
          break;
        }
        case "backup":
          advance(-toTicks(child(item, "duration")));
          break;
        case "forward":
          advance(toTicks(child(item, "duration")));
          break;
        case "direction": {
          const staff = num(child(item, "staff"), 1);
          let hasPedal = false;
          for (const type of childElements(item, "direction-type")) {
            for (const pedal of childElements(type, "pedal")) {
              hasPedal = true;
              const kind = pedal.attrs["type"];
              if (kind === "stop" || kind === "change" || kind === "discontinue") m.pedals.push({ staff, at: cursor, down: false });
              if (kind === "start" || kind === "change" || kind === "resume") m.pedals.push({ staff, at: cursor, down: true });
            }
          }
          const sound = child(item, "sound");
          if (sound) readSound(sound, staff, hasPedal);
          break;
        }
        case "sound":
          readSound(item, 1, false);
          break;
        case "barline": {
          const repeat = child(item, "repeat");
          if (repeat?.attrs["direction"] === "forward") m.forward = true;
          if (repeat?.attrs["direction"] === "backward") m.backward = Math.max(2, Number(repeat.attrs["times"]) || 2);
          const ending = child(item, "ending");
          const kind = ending?.attrs["type"];
          if (kind === "start") m.endingStart = endingNumbers(ending?.attrs["number"]);
          if (kind === "stop" || kind === "discontinue") m.endingStop = true;
          const sound = child(item, "sound");
          if (sound) readSound(sound, 1, false);
          break;
        }
      }
    }
    return m;
  });

  return { name: listed?.name ?? "", program: listed?.program ?? 0, staves, measures };
}

function emptyMeasure(): Measure {
  return { length: 0, notes: [], pedals: [], tempos: [], times: [], keys: [], forward: false, endingStop: false, daCapo: false, fine: false };
}

/** Marks each measure of `measures` with the ending it belongs to. */
function markEndings(measures: Measure[]): void {
  let open: number[] | undefined;
  for (const m of measures) {
    if (m.endingStart) open = m.endingStart;
    m.ending = open;
    if (m.endingStop) open = undefined;
  }
}

/** The order the measures play in, as indices into `measures`, with every repeat and jump taken. */
function playOrder(measures: readonly Measure[]): number[] {
  /** Whether measure `i` holds the last ending of its group of endings. */
  const lastEnding = (i: number): boolean => {
    let j = i;
    while (j + 1 < measures.length && measures[j + 1]!.ending) j++;
    return Math.max(...measures[i]!.ending!) === Math.max(...measures[j]!.ending!);
  };
  const findMark = (key: "segno" | "coda", name: string): number => {
    const named = measures.findIndex((m) => m[key] === name);
    return named >= 0 ? named : measures.findIndex((m) => m[key] !== undefined);
  };

  const order: number[] = [];
  const taken = new Map<number, number>();
  const limit = measures.length * 16;
  let start = 0;
  let pass = 1;
  let jumped = false;
  let codaTaken = false;
  let i = 0;
  while (i < measures.length && order.length < limit) {
    const m = measures[i]!;
    const opensSection = m.forward || (i > 0 && !m.ending && measures[i - 1]!.ending !== undefined);
    if (opensSection && !jumped && start !== i) {
      start = i;
      pass = 1;
    }
    if (m.ending && !(jumped ? lastEnding(i) : m.ending.includes(pass))) {
      i++;
      continue;
    }
    order.push(i);
    if (jumped && m.fine) break;
    if (jumped && m.toCoda !== undefined && !codaTaken) {
      const coda = findMark("coda", m.toCoda);
      if (coda > i) {
        codaTaken = true;
        i = coda;
        continue;
      }
    }
    if (m.backward !== undefined && !jumped) {
      const times = taken.get(i) ?? 0;
      if (times < m.backward - 1) {
        taken.set(i, times + 1);
        pass++;
        i = start;
        continue;
      }
      taken.delete(i);
      if (!m.ending) {
        start = i + 1;
        pass = 1;
      }
    }
    if (!jumped && (m.daCapo || m.dalSegno !== undefined)) {
      jumped = true;
      i = m.daCapo ? 0 : Math.max(0, findMark("segno", m.dalSegno!));
      continue;
    }
    i++;
  }
  return order;
}

type Timed = MidiEvent & { order: number };

function meta(tick: number, type: number, data: number[], order = 0): Timed {
  const bytes = new Uint8Array(data);
  return { tick, delta: 0, kind: "meta", type, data: bytes, ...decodeMeta(type, bytes), order } as Timed;
}

/** The finished track of `events`: sorted, with deltas, and an end-of-track at `end`. */
function finishTrack(events: Timed[], end: number): MidiEvent[] {
  events.push(meta(end, 0x2f, [], 9));
  events.sort((a, b) => a.tick - b.tick || a.order - b.order);
  let last = 0;
  return events.map(({ order: _, ...event }) => {
    const delta = event.tick - last;
    last = event.tick;
    return { ...event, delta } as MidiEvent;
  });
}

/** The `MidiFile` that plays `parts` with every repeat played out. */
function buildFile(parts: Part[]): MidiFile {
  const count = Math.max(...parts.map((part) => part.measures.length));
  const first = parts[0]!.measures;
  markEndings(first);
  // A jump may be written in any part, so each part's jump marks join the first part's barlines.
  const flags = Array.from({ length: count }, (_, i): Measure => {
    const joined = { ...(first[i] ?? emptyMeasure()) };
    for (const part of parts) {
      const m = part.measures[i];
      if (!m) continue;
      joined.segno ??= m.segno;
      joined.coda ??= m.coda;
      joined.toCoda ??= m.toCoda;
      joined.dalSegno ??= m.dalSegno;
      joined.daCapo ||= m.daCapo;
      joined.fine ||= m.fine;
    }
    return joined;
  });
  const order = playOrder(flags);
  const lengths = flags.map((_, i) => Math.max(...parts.map((part) => part.measures[i]?.length ?? 0)));
  const starts: number[] = [];
  let end = 0;
  for (const index of order) {
    starts.push(end);
    end += lengths[index]!;
  }
  const tick = (value: number): number => Math.round(value);

  const conductor: Timed[] = [];
  let time = "";
  let key = "";
  const tempos: { at: number; bpm: number }[] = [];
  order.forEach((index, k) => {
    const m = first[index];
    for (const t of m?.times ?? []) {
      const log = Math.log2(t.beatType);
      if (`${t.beats}/${t.beatType}` === time || !Number.isInteger(log) || t.beats < 1 || t.beats > 255) continue;
      time = `${t.beats}/${t.beatType}`;
      conductor.push(meta(tick(starts[k]! + t.at), 0x58, [t.beats, log, 24, 8]));
    }
    for (const s of m?.keys ?? []) {
      const fifths = Math.max(-7, Math.min(7, Math.round(s.fifths)));
      if (`${fifths}${s.minor}` === key) continue;
      key = `${fifths}${s.minor}`;
      conductor.push(meta(tick(starts[k]! + s.at), 0x59, [fifths & 0xff, s.minor ? 1 : 0]));
    }
    for (const part of parts) for (const t of part.measures[index]?.tempos ?? []) tempos.push({ at: starts[k]! + t.at, bpm: t.bpm });
  });
  tempos.sort((a, b) => a.at - b.at);
  let bpm = 120;
  tempos.forEach((t, n) => {
    const next = tempos[n + 1];
    if ((next && tick(next.at) === tick(t.at)) || t.bpm === bpm) return;
    bpm = t.bpm;
    const micros = Math.max(1, Math.min(0xffffff, Math.round(60_000_000 / t.bpm)));
    conductor.push(meta(tick(t.at), 0x51, [micros >> 16, (micros >> 8) & 0xff, micros & 0xff]));
  });

  const tracks = [{ events: finishTrack(conductor, tick(end)) }];
  parts.forEach((part, p) => {
    const channel = (p < 9 ? p : p + 1) % 16;
    for (let staff = 1; staff <= part.staves; staff++) {
      const events: Timed[] = [];
      const name = part.staves > 1 ? `${part.name || "Part"}, staff ${staff}` : part.name;
      if (name !== "") events.push(meta(0, 0x03, [...new TextEncoder().encode(name)]));
      events.push({ tick: 0, delta: 0, kind: "program", channel, program: part.program, order: 0 });

      const played: { pitch: number; velocity: number; start: number; end: number }[] = [];
      const tied = new Map<number, (typeof played)[number]>();
      order.forEach((index, k) => {
        const m = part.measures[index];
        if (!m) return;
        const notes = m.notes.filter((note) => note.staff === staff).sort((a, b) => a.start - b.start);
        for (const note of notes) {
          const start = starts[k]! + note.start;
          // A note of no length would lose its note-on to its own note-off, so it lasts one tick.
          const finish = Math.max(starts[k]! + note.end, start + 1);
          const held = note.tieStop ? tied.get(note.pitch) : undefined;
          if (held && Math.abs(held.end - start) < 1) {
            held.end = finish;
            if (!note.tieStart) tied.delete(note.pitch);
            continue;
          }
          const sounding = { pitch: note.pitch, velocity: note.velocity, start, end: finish };
          played.push(sounding);
          if (note.tieStart) tied.set(note.pitch, sounding);
        }
        for (const pedal of m.pedals) {
          if (pedal.staff !== staff) continue;
          const at = tick(starts[k]! + pedal.at);
          events.push({ tick: at, delta: 0, kind: "controller", channel, controller: 64, value: pedal.down ? 127 : 0, order: 2 });
        }
      });
      for (const note of played) {
        events.push({ tick: tick(note.start), delta: 0, kind: "noteOn", channel, note: note.pitch, velocity: note.velocity, order: 3 });
        events.push({ tick: tick(note.end), delta: 0, kind: "noteOff", channel, note: note.pitch, velocity: 0, order: 1 });
      }
      tracks.push({ events: finishTrack(events, tick(end)) });
    }
  });

  return { format: 1, division: { kind: "ticks", ticksPerBeat: TICKS_PER_BEAT }, tracks, problems: [] };
}

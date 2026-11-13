/**
 * Chord labels: each named chord as a bar or a ribbon with its name, and a block over each of its notes
 * that says what the note is in the chord or the key.
 *
 * Decisions, and what each costs:
 * - A chord is found from the notes as they sound, held pedal included, by `chordSpans` in
 *   `src/theory/chords.ts`. A broken chord under the pedal is then named, as a learner hears it. A
 *   melody note under a long pedal leaves the chord unnamed, because a chord is named only when its
 *   notes match one shape exactly.
 * - The chords are found once per song and key, never per frame. A frame finds the first chord in view
 *   by binary search and walks on until the chords leave the lanes.
 * - The chords read every pitched note of the song, hidden tracks included, because a chord names the
 *   music, not the view.
 * - A chord's name and Roman numeral follow the key at its start, from `keyAt` over the key sections.
 *   Its black keys are spelt by that key too.
 * - A bar spans the keys of the chord's lowest and highest notes, and a ribbon spans every lane. Each is
 *   a flat strip in the label colour, faint, so the notes under it stay visible.
 * - The placement is along the lanes, where time runs. The chord's top is its far end, away from the
 *   piano, and its bottom is its start. Above and below sit just outside the chord.
 * - A label leaves once it passes the hit line, so no name hides under the keys.
 * - A note's block sits just beyond its bar's back end, which is the note's top in the falling view.
 *   It belongs to the first chord the note sounds in.
 * - A full notation's words, the root's name and the ordinals, come from the live catalog's
 *   `player.shell.chords` as a block's text is made.
 * - Marking the root tints the root's block gold. With no blocks shown, the root alone shows its block.
 * - The strips and names walk the passes of `src/render/passes.ts`, as the bars do. With a cycle set,
 *   the cycle's first chords then show again past its end. A chord is cut at a pass's end. The blocks
 *   follow on their own, because they read the bars. A frame costs one binary search per pass.
 *
 * Bounds: finding the chords is `chordSpans` plus one sweep over the notes. A frame places one strip and
 * one name per chord in view and one block per bar shown.
 */
import { Group, Mesh, MeshBasicMaterial, PlaneGeometry } from "three";

import type { Cycle } from "../audio/scheduler";
import { t } from "../i18n/live";
import type { Note, Song } from "../midi/song";
import { type Chord, chordName, chordSpans, chordTone, romanNumeral, scaleDegree } from "../theory/chords";
import { type Key, keyAccidentals, keyAt, type KeySection } from "../theory/key";
import { type NamingChoice, pitchClass } from "../theory/note-names";
import type { KeyLayout } from "./key-layout";
import { createLabelLayer } from "./labels";
import { forEachPass } from "./passes";

export type ChordStyle = "bar" | "ribbon";
export type ChordPlacement = "above" | "top" | "middle" | "bottom" | "below";
export type BlockKind = "none" | "tone" | "degree";
export type BlockNotation = "simple" | "full";

/** One named chord in the song: its times in seconds, its notes' lowest and highest pitch, and its key. */
export interface ChordMark {
  readonly start: number;
  readonly end: number;
  readonly chord: Chord;
  readonly low: number;
  readonly high: number;
  readonly key: Key | undefined;
}

/** What the chord labels show, from the Labels settings. */
export interface ChordLabelOptions {
  readonly show: boolean;
  readonly style: ChordStyle;
  readonly placement: ChordPlacement;
  readonly roman: boolean;
  readonly blocks: BlockKind;
  readonly notation: BlockNotation;
  readonly markRoot: boolean;
  readonly system: NamingChoice;
}

/** A note's block: its text, and whether it is tinted as the marked root. */
export interface BlockText {
  readonly text: string;
  readonly root: boolean;
}

/** The end of a note as it sounds, in seconds, held pedal included. */
export type HeldEnd = (note: Note) => number;

/**
 * The named chords of `song`, in order, with each note sounding to `heldEnd`. Each takes its key from
 * `sections`.
 */
export function chordMarks(song: Song, heldEnd: HeldEnd, sections: readonly KeySection[]): ChordMark[] {
  const percussion = new Set(song.tracks.filter((track) => track.percussion).map((track) => track.index));
  const map = song.tempoMap;
  const held = song.notes
    .filter((note) => !percussion.has(note.track))
    .map((note) => ({ pitch: note.pitch, startTick: note.startTick, endTick: Math.max(note.endTick, map.secondsToTicks(heldEnd(note))) }))
    .sort((a, b) => a.startTick - b.startTick);
  const marks: ChordMark[] = [];
  let active: typeof held = [];
  let next = 0;
  for (const span of chordSpans(held)) {
    active = active.filter((note) => note.endTick > span.startTick);
    while (next < held.length && held[next]!.startTick < span.endTick) active.push(held[next++]!);
    let low = Infinity;
    let high = -Infinity;
    for (const note of active) {
      if (note.endTick <= span.startTick) continue;
      low = Math.min(low, note.pitch);
      high = Math.max(high, note.pitch);
    }
    marks.push({
      start: map.ticksToSeconds(span.startTick),
      end: map.ticksToSeconds(span.endTick),
      chord: span.chord,
      low,
      high,
      key: keyAt(sections, span.startTick),
    });
  }
  return marks;
}

/** The index of the first mark in `marks` that ends after `time`, or `marks.length` when none does. */
export function firstEndingAfter(marks: readonly ChordMark[], time: number): number {
  let low = 0;
  let high = marks.length;
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (marks[mid]!.end <= time) low = mid + 1;
    else high = mid;
  }
  return low;
}

/** The mark sounding at `time`, or undefined between chords. */
export function markAt(marks: readonly ChordMark[], time: number): ChordMark | undefined {
  const mark = marks[firstEndingAfter(marks, time)];
  return mark && mark.start <= time ? mark : undefined;
}

/** The first mark a note sounding from `start` to `end` seconds sounds in, or undefined. */
export function markOfNote(marks: readonly ChordMark[], start: number, end: number): ChordMark | undefined {
  const mark = marks[firstEndingAfter(marks, start)];
  return mark && mark.start < end ? mark : undefined;
}

/** The text a chord's label shows, such as `G7` or `G7 (V7)`, spelt by its key. */
export function chordText(mark: ChordMark, options: Pick<ChordLabelOptions, "roman" | "system">): string {
  const name = chordName(mark.chord, { system: options.system, accidentals: mark.key ? keyAccidentals(mark.key) : "sharps" });
  return options.roman && mark.key ? `${name} (${romanNumeral(mark.chord, mark.key)})` : name;
}

/**
 * The block of a note of pitch class `pc` in `mark`'s chord, or undefined when it shows none. A full
 * notation writes ordinals, such as `♭3rd` for `♭3`, and `Root` for `R`.
 */
export function blockText(pc: number, mark: ChordMark, options: Pick<ChordLabelOptions, "blocks" | "notation" | "markRoot">): BlockText | undefined {
  const root = options.markRoot && pitchClass(pc) === mark.chord.root;
  if (options.blocks === "none" && !root) return undefined;
  const simple = options.blocks === "degree" ? mark.key && scaleDegree(pc, mark.key) : chordTone(pc, mark.chord);
  if (simple === undefined) return undefined;
  return { text: options.notation === "full" ? fullTone(simple) : simple, root };
}

/** `simple` as an ordinal in the live locale, such as `♭3rd`, or `Root` for `R`. */
function fullTone(simple: string): string {
  const say = t().player.shell.chords;
  return simple === "R" ? say.root : say.ordinal(simple);
}

/**
 * The z of a strip's centre at `placement`, for a chord from `frontZ`, its start, back to `backZ`, its end.
 * The strip is `depth` deep.
 */
export function placementZ(placement: ChordPlacement, frontZ: number, backZ: number, depth: number): number {
  switch (placement) {
    case "above":
      return backZ - depth / 2 - STRIP_GAP;
    case "top":
      return backZ + depth / 2;
    case "middle":
      return (frontZ + backZ) / 2;
    case "bottom":
      return frontZ - depth / 2;
    case "below":
      return frontZ + depth / 2 + STRIP_GAP;
  }
}

/** A strip's depth along the lanes, its gap from its chord when outside it, and its height, in world units. */
const STRIP_DEPTH = 1.1;
const STRIP_GAP = 0.15;
const STRIP_Y = 0.5;
const STRIP_OPACITY = 0.22;
/** A chord name's height, and the least width it shrinks to fit, in world units. */
const NAME_HEIGHT = 0.9;
const NAME_MIN_WIDTH = 4;
/** A block's height, its gap beyond its bar's back end, and the least width it shrinks to fit. */
const BLOCK_HEIGHT = 0.7;
const BLOCK_GAP = 0.08;
const BLOCK_MIN_WIDTH = 1.4;
/** The tint of a marked root's block. */
const ROOT_COLOR = 0xffc53d;

/** What `ChordLabels.update` reads of the bars: each placed bar, as `NoteBars.forEachShown` visits it. */
export type ShownBars = (visit: (note: Note, x: number, frontZ: number, width: number, top: number, backZ: number) => void) => void;

export interface ChordLabels {
  readonly group: Group;
  /** Shows `marks`, the song's chords, with each note sounding to `heldEnd`. */
  setMarks(marks: readonly ChordMark[], heldEnd: HeldEnd): void;
  setOptions(options: ChordLabelOptions): void;
  /** Draws the chords of `cycle`'s start again past its end, or the song straight on with undefined. */
  setCycle(cycle: Cycle | undefined): void;
  /** Tints the names, the blocks and the strips with `color`, as `0xrrggbb`. */
  setColor(color: number): void;
  /** Places the labels at song time `now`, with notes moving `speed` units a second over `far` units. */
  update(now: number, speed: number, far: number, layout: KeyLayout, bars: ShownBars): void;
  /** The label of the chord sounding at `time`, or undefined while chords are off or none sounds. */
  textAt(time: number): string | undefined;
  dispose(): void;
}

/** Chord labels with no chords, shown off until `setOptions` turns them on. */
export function createChordLabels(): ChordLabels {
  const group = new Group();
  group.name = "chords";
  const names = createLabelLayer();
  const blocks = createLabelLayer();
  const roots = createLabelLayer();
  roots.setColor(ROOT_COLOR);
  const strips = new Group();
  group.add(strips, names.group, blocks.group, roots.group);
  const geometry = new PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
  const material = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: STRIP_OPACITY, depthWrite: false });
  const pool: Mesh[] = [];
  let marks: readonly ChordMark[] = [];
  let heldEnd: HeldEnd = (note) => note.end;
  let options: ChordLabelOptions | undefined;
  /** The cycle the picture repeats, or undefined while the song runs straight on. */
  let cycle: Cycle | undefined;

  const strip = (index: number, x: number, z: number, width: number) => {
    let mesh = pool[index];
    if (!mesh) {
      mesh = new Mesh(geometry, material);
      pool.push(mesh);
      strips.add(mesh);
    }
    mesh.position.set(x, STRIP_Y, z);
    mesh.scale.set(width, 1, STRIP_DEPTH);
    mesh.visible = true;
  };

  /** Places a strip and a name for each chord in view, and returns how many strips it used. */
  const placeChords = (shown: ChordLabelOptions, now: number, speed: number, far: number, layout: KeyLayout): number => {
    let used = 0;
    const { first, last } = layout.range;
    const left = -layout.width / 2;
    forEachPass(cycle, now, now + far / speed, (from, to, shift) => {
      // `at` is the song time the hit line shows in this pass.
      const at = now - shift;
      for (let i = firstEndingAfter(marks, Math.max(at, from)); i < marks.length; i++) {
        const mark = marks[i]!;
        if (mark.start > at + far / speed || mark.start >= to) break;
        if (mark.start < from) continue;
        const z = placementZ(shown.placement, (at - mark.start) * speed, (at - Math.min(mark.end, to)) * speed, STRIP_DEPTH);
        if (z > 0 || z < -far) continue;
        let x = 0;
        let width = layout.width;
        if (shown.style === "bar") {
          const low = layout.key(Math.min(last, Math.max(first, mark.low)));
          const high = layout.key(Math.min(last, Math.max(first, mark.high)));
          if (!low || !high) continue;
          x = left + (low.x + high.x + high.width) / 2;
          width = high.x + high.width - low.x;
        }
        strip(used++, x, z, width);
        names.push(chordText(mark, shown), x, STRIP_Y + NAME_HEIGHT / 2 + 0.05, z, NAME_HEIGHT, Math.max(width, NAME_MIN_WIDTH));
      }
    });
    return used;
  };

  return {
    group,

    setMarks(next, end) {
      marks = next;
      heldEnd = end;
    },

    setOptions(next) {
      options = next;
    },

    setCycle(next) {
      cycle = next;
    },

    setColor(color) {
      names.setColor(color);
      blocks.setColor(color);
      material.color.set(color);
    },

    update(now, speed, far, layout, bars) {
      names.begin();
      blocks.begin();
      roots.begin();
      let used = 0;
      const shown = options?.show ? options : undefined;
      if (shown) {
        used = placeChords(shown, now, speed, far, layout);
        if (shown.blocks !== "none" || shown.markRoot) {
          bars((note, x, _frontZ, width, top, backZ) => {
            const mark = markOfNote(marks, note.start, Math.max(note.end, heldEnd(note)));
            const block = mark && blockText(note.pitch, mark, shown);
            if (!block) return;
            const layer = block.root ? roots : blocks;
            layer.push(block.text, x, top + BLOCK_HEIGHT / 2, backZ - BLOCK_GAP - BLOCK_HEIGHT / 2, BLOCK_HEIGHT, Math.max(width, BLOCK_MIN_WIDTH));
          });
        }
      }
      for (let i = used; i < pool.length; i++) pool[i]!.visible = false;
      names.end();
      blocks.end();
      roots.end();
    },

    textAt(time) {
      if (!options?.show) return undefined;
      const mark = markAt(marks, time);
      return mark && chordText(mark, options);
    },

    dispose() {
      names.dispose();
      blocks.dispose();
      roots.dispose();
      geometry.dispose();
      material.dispose();
      group.removeFromParent();
    },
  };
}

/**
 * The lanes: the dark track the notes fly along, with a lane per black key, octave dividers, measure
 * and beat lines, and measure numbers.
 *
 * World space follows the scene's contract. One unit is one white key, the keyboard is centred on
 * x = 0, and the hit line is z = 0. The lanes lie flat just under the notes, from z = -far to z = 0. A
 * beat at song time `s` sits at z = -(s - now) * speed, the same place as a note starting then.
 *
 * Decisions, and what each costs:
 * - Every layer is unlit and lies a hair above the one under it, with a polygon offset as well, so the
 *   layers never flicker against each other at a distance.
 * - The black-key lanes and the dividers are built once per layout, as two instanced meshes.
 * - The beats come from the tempo map once per song. Each frame finds the visible ones by binary search
 *   and rewrites only those, into two pooled instanced meshes of measure and beat lines.
 * - Every text is a sprite with its own small canvas, redrawn only when the text it shows changes. A
 *   measure number counts from 1, as a printed score does.
 * - A key the learner holds lights its whole lane in the key's colour, see-through at the held lane
 *   opacity, between the dividers and the lines. The scene hands the held keys over each frame, and a
 *   frame with none lit before or now writes nothing.
 * - A marker of the song is a line across the lanes in the marker colour, with its text on the lanes
 *   just beyond the line at the left edge, where the camera's frame always holds it.
 * - A mark of the song's guide, a tip or a tricky spot, draws as a marker does in its own colour. It
 *   shows whether or not the song's markers do, since a learner who opened a guided song wants it.
 * - The sustain pedal draws in three layers, each its own option. A period is a see-through band
 *   across the lanes. An event is a line where the pedal goes down or up, labelled at the right edge
 *   with the score's "Ped." and "✱". The channels option adds each period's channel to that label.
 *   The pedal colour is fixed, so no setting carries it.
 * - The pedal periods are kept in start order with a running maximum of their ends, so a binary
 *   search finds the first one still visible, however the channels overlap.
 * - The lines, the numbers, the markers and the pedal periods walk the passes of
 *   `src/render/passes.ts`, as the notes do. With a cycle set, the beat grid goes on from the cycle's
 *   start past its end. A pedal period is cut at a pass's edges, and a pass shows no pedal event at
 *   its start. That matches the sound, which lifts the pedal at the wrap. A frame costs one binary
 *   search per list and pass.
 *
 * Bounds: the line meshes and the sprite pools hold as many entries as the busiest frame so far needed,
 * and the line meshes double when they run out. The beat list holds one entry per beat of the song,
 * and the marker, guide and pedal lists one per marker, mark and period. The held lanes are one instanced mesh of
 * at most `MAX_HELD` lanes.
 */
import {
  CanvasTexture,
  Color,
  DynamicDrawUsage,
  Group,
  InstancedMesh,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  Sprite,
  SpriteMaterial,
  SRGBColorSpace,
} from "three";

import type { Cycle } from "../audio/scheduler";
import type { PedalPeriod, TimedText } from "../midi/song";
import type { TempoMap } from "../midi/tempo-map";
import { keepsGlowOff } from "./glow-source";
import type { KeyLayout } from "./key-layout";
import { firstAtOrAbove } from "./note-window";
import { forEachPass } from "./passes";

/** What the lanes draw from a song. */
export interface LaneSong {
  tempoMap: TempoMap;
  /** The tick of the song's last event. */
  endTick: number;
  /** In time order. */
  markers: readonly TimedText[];
  /** The pedal periods of the shown tracks, in any order. */
  pedals: readonly PedalPeriod[];
}

export interface LaneOptions {
  /** World units a note travels per second, the same as the notes'. */
  speed: number;
  /** How far ahead of the hit line the lanes reach, in world units. */
  far: number;
  showLanes: boolean;
  showMeasureLines: boolean;
  showBeatLines: boolean;
  showMeasureNumbers: boolean;
  /** How deep a measure line and a beat line are along the lanes, in world units. */
  measureLineWidth: number;
  beatLineWidth: number;
  laneColor: number;
  blackLaneColor: number;
  dividerColor: number;
  measureColor: number;
  beatColor: number;
  /** A CSS colour for the measure numbers. */
  numberColor: string;
  /** Whether a key the learner holds lights its lane, and how strongly, from 0 to 1. */
  showHeldLanes: boolean;
  heldLaneOpacity: number;
  showMarkers: boolean;
  showPedalPeriods: boolean;
  showPedalEvents: boolean;
  showPedalChannels: boolean;
}

export const DEFAULT_LANE_OPTIONS: Readonly<LaneOptions> = {
  speed: 8,
  far: 60,
  showLanes: true,
  showMeasureLines: true,
  showBeatLines: true,
  showMeasureNumbers: true,
  measureLineWidth: 0.07,
  beatLineWidth: 0.03,
  laneColor: 0x101624,
  blackLaneColor: 0x0a0e18,
  dividerColor: 0x2a3550,
  measureColor: 0x5a6684,
  beatColor: 0x262e42,
  numberColor: "#8a95b0",
  showHeldLanes: false,
  heldLaneOpacity: 0.15,
  showMarkers: false,
  showPedalPeriods: false,
  showPedalEvents: false,
  showPedalChannels: false,
};

/** The colours of the markers, the guide's marks and the pedal, which no setting changes. */
const MARKER_COLOR = 0xe0b050;
const MARKER_TEXT = "#f0c868";
const GUIDE_COLOR = 0xa07ce8;
const GUIDE_TEXT = "#c9a8ff";
const PEDAL_COLOR = 0x46b8a4;
const PEDAL_TEXT = "#6fd8c4";
/** How opaque a pedal period's band is. */
const PEDAL_BAND_OPACITY = 0.08;

export interface Lanes {
  readonly group: Group;
  readonly options: Readonly<LaneOptions>;
  /** Lays the lanes under `layout`'s keys. */
  setLayout(layout: KeyLayout): void;
  /** Takes the measures, beats, markers and pedal periods of a song. */
  setSong(song: LaneSong): void;
  /** Takes the marks of a song's guide, in time order, which show whatever the marker setting says. */
  setGuideMarks(marks: readonly TimedText[]): void;
  setOptions(options: Partial<LaneOptions>): void;
  /** Lights the lane of each key the learner holds, by pitch, in its colour, while held lanes show. */
  setHeld(held: ReadonlyMap<number, Color>): void;
  /** Draws the start of `cycle` again past its end, or the song straight on with undefined. */
  setCycle(cycle: Cycle | undefined): void;
  /** Places the visible lines and numbers for song time `now`, in seconds. */
  update(now: number): void;
  dispose(): void;
}

/** The height of each layer. The notes sit above them all, from y = 0.02. */
const BASE_Y = -0.01;
const BLACK_LANE_Y = -0.008;
const DIVIDER_Y = -0.006;
const HELD_Y = -0.005;
const PEDAL_Y = -0.0045;
const LINE_Y = -0.004;
/** The most lanes lit at once: one per MIDI note. */
const MAX_HELD = 128;
/** The width of an octave divider, in world units. */
const DIVIDER_WIDTH = 0.04;
/** A measure number's place left of the lanes, and its size, in world units. */
const NUMBER_GAP = 0.8;
const NUMBER_HEIGHT = 0.7;
const NUMBER_Y = 0.35;
/** The height of a marker's or a pedal label's text, and its inset from the lanes' edge, in world units. */
const TAG_HEIGHT = 0.6;
const TAG_INSET = 0.3;

/** The lanes, empty until `setLayout`. */
export function createLanes(options: Partial<LaneOptions> = {}): Lanes {
  const opts: LaneOptions = { ...DEFAULT_LANE_OPTIONS, ...options };
  const group = new Group();
  group.name = "lanes";

  // One flat unit square in the xz-plane serves every layer, scaled by each mesh or instance.
  const flat = new PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
  const layerMaterial = (color: number, layer: number) =>
    new MeshBasicMaterial({ color, polygonOffset: true, polygonOffsetFactor: -layer, polygonOffsetUnits: -layer });

  const base = new Mesh(flat, layerMaterial(opts.laneColor, 0));
  base.position.y = BASE_Y;
  group.add(base);

  const blackLanes = new FixedStrips(group, flat, layerMaterial(opts.blackLaneColor, 1));
  const dividers = new FixedStrips(group, flat, layerMaterial(opts.dividerColor, 2));
  const measureLines = new PooledStrips(group, flat, layerMaterial(opts.measureColor, 3));
  const beatLines = new PooledStrips(group, flat, layerMaterial(opts.beatColor, 3));
  const numbers = new TextPool(group, { align: "right", canvasWidth: 128, height: NUMBER_HEIGHT, color: opts.numberColor });
  const markerLines = new PooledStrips(group, flat, layerMaterial(MARKER_COLOR, 3));
  const markerTags = new TextPool(group, { align: "left", canvasWidth: 512, height: TAG_HEIGHT, color: MARKER_TEXT });
  const guideLines = new PooledStrips(group, flat, layerMaterial(GUIDE_COLOR, 3));
  const guideTags = new TextPool(group, { align: "left", canvasWidth: 512, height: TAG_HEIGHT, color: GUIDE_TEXT });
  const pedalBands = new PooledStrips(
    group,
    flat,
    new MeshBasicMaterial({
      color: PEDAL_COLOR,
      transparent: true,
      opacity: PEDAL_BAND_OPACITY,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2.75,
      polygonOffsetUnits: -2.75,
    }),
  );
  const pedalLines = new PooledStrips(group, flat, layerMaterial(PEDAL_COLOR, 3));
  const pedalTags = new TextPool(group, { align: "right", canvasWidth: 256, height: TAG_HEIGHT, color: PEDAL_TEXT });
  const heldMaterial = new MeshBasicMaterial({
    transparent: true,
    opacity: opts.heldLaneOpacity,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2.5,
    polygonOffsetUnits: -2.5,
  });
  const heldLanes = new InstancedMesh(flat, heldMaterial, MAX_HELD);
  heldLanes.count = 0;
  heldLanes.frustumCulled = false;
  /** Every layer each frame rewrites. */
  const layers = [measureLines, beatLines, numbers, markerLines, markerTags, guideLines, guideTags, pedalBands, pedalLines, pedalTags];
  group.add(heldLanes);

  let layout: KeyLayout | undefined;
  let beatSeconds = new Float64Array(0);
  let beatMeasure = new Int32Array(0);
  let beatIsDownbeat = new Uint8Array(0);
  let markerSeconds = new Float64Array(0);
  let markerTexts: string[] = [];
  let guideSeconds = new Float64Array(0);
  let guideTexts: string[] = [];
  /** The pedal periods in start order, and the latest end of each period and every one before it. */
  let pedals: PedalPeriod[] = [];
  let pedalReach = new Float64Array(0);
  /** The cycle the picture repeats, or undefined while the song runs straight on. */
  let cycle: Cycle | undefined;

  const lay = () => {
    if (!layout) return;
    const { width } = layout;
    const left = -width / 2;
    base.scale.set(width, 1, opts.far);
    base.position.z = -opts.far / 2;
    base.visible = opts.showLanes;

    const blacks = layout.keys.filter((key) => key.black);
    blackLanes.set(blacks.map((key) => [left + key.center, key.width]), BLACK_LANE_Y, opts.far);
    const cs = layout.keys.filter((key) => key.pitch % 12 === 0 && key.x > 0);
    dividers.set(cs.map((key) => [left + key.x, DIVIDER_WIDTH]), DIVIDER_Y, opts.far);
    blackLanes.mesh.visible = opts.showLanes && blacks.length > 0;
    dividers.mesh.visible = opts.showLanes && cs.length > 0;
  };

  /**
   * Draws one pass's lines, numbers, markers and pedal periods. The pass shows song time `[from, to)`,
   * with song time `at` at the hit line and `reach` seconds of song ahead of it.
   */
  const drawPass = (width: number, at: number, from: number, to: number, reach: number) => {
    const first = Math.max(at, from);
    const last = at + reach;
    const zOf = (seconds: number) => (at - seconds) * opts.speed;
    const inPass = (seconds: number) => seconds <= last && seconds < to;
    const drawMarks = (seconds: Float64Array, texts: readonly string[], lines: PooledStrips, tags: TextPool) => {
      const tagX = -width / 2 + TAG_INSET;
      for (let i = firstAtOrAbove(seconds, first); i < seconds.length && inPass(seconds[i]!); i++) {
        const z = zOf(seconds[i]!);
        lines.push(0, LINE_Y, z, width, opts.measureLineWidth * 1.5);
        if (texts[i]) tags.push(texts[i]!, tagX, 0, z);
      }
    };
    if (opts.showMarkers) drawMarks(markerSeconds, markerTexts, markerLines, markerTags);
    drawMarks(guideSeconds, guideTexts, guideLines, guideTags);
    if (opts.showPedalPeriods || opts.showPedalEvents || opts.showPedalChannels) {
      const tagX = width / 2 - TAG_INSET;
      for (let i = firstAtOrAbove(pedalReach, first); i < pedals.length && inPass(pedals[i]!.start); i++) {
        const pedal = pedals[i]!;
        if (pedal.end < first) continue;
        const channel = opts.showPedalChannels ? `ch ${pedal.channel + 1}` : "";
        if (opts.showPedalPeriods) {
          const near = zOf(Math.max(pedal.start, first));
          const far = zOf(Math.min(pedal.end, last, to));
          pedalBands.push(0, PEDAL_Y, (near + far) / 2, width, near - far);
        }
        // A period held into the pass's start went down at the wrap, so it shows no line there.
        if (pedal.start >= first) {
          const z = zOf(pedal.start);
          if (opts.showPedalEvents) pedalLines.push(0, LINE_Y, z, width, opts.beatLineWidth * 2);
          const tag = opts.showPedalEvents ? `Ped. ${channel}`.trim() : channel;
          if (tag) pedalTags.push(tag, tagX, 0, z);
        }
        if (opts.showPedalEvents && pedal.end <= Math.min(last, to)) {
          const z = zOf(pedal.end);
          pedalLines.push(0, LINE_Y, z, width, opts.beatLineWidth * 2);
          pedalTags.push(`✱ ${channel}`.trim(), tagX, 0, z);
        }
      }
    }
    const numberX = -width / 2 - NUMBER_GAP;
    for (let i = firstAtOrAbove(beatSeconds, first); i < beatSeconds.length && inPass(beatSeconds[i]!); i++) {
      const z = zOf(beatSeconds[i]!);
      if (beatIsDownbeat[i]) {
        if (opts.showMeasureLines) measureLines.push(0, LINE_Y, z, width, opts.measureLineWidth);
        if (opts.showMeasureNumbers) numbers.push(String(beatMeasure[i]! + 1), numberX, NUMBER_Y, z);
      } else if (opts.showBeatLines) {
        beatLines.push(0, LINE_Y, z, width, opts.beatLineWidth);
      }
    }
  };

  const recolor = () => {
    (base.material as MeshBasicMaterial).color.set(opts.laneColor);
    blackLanes.color.set(opts.blackLaneColor);
    dividers.color.set(opts.dividerColor);
    measureLines.color.set(opts.measureColor);
    beatLines.color.set(opts.beatColor);
    numbers.setColor(opts.numberColor);
    heldMaterial.opacity = opts.heldLaneOpacity;
  };

  return {
    group,
    options: opts,

    setLayout(newLayout) {
      layout = newLayout;
      lay();
    },

    setSong(song) {
      const beats = song.tempoMap.beatsUntil(song.endTick);
      beatSeconds = Float64Array.from(beats, (b) => b.seconds);
      beatMeasure = Int32Array.from(beats, (b) => b.measure);
      beatIsDownbeat = Uint8Array.from(beats, (b) => (b.beat === 0 ? 1 : 0));
      markerSeconds = Float64Array.from(song.markers, (m) => m.seconds);
      markerTexts = song.markers.map((m) => m.text.trim());
      pedals = [...song.pedals].sort((a, b) => a.start - b.start);
      pedalReach = new Float64Array(pedals.length);
      let reach = -Infinity;
      pedals.forEach((pedal, i) => {
        reach = Math.max(reach, pedal.end);
        pedalReach[i] = reach;
      });
    },

    setGuideMarks(marks) {
      guideSeconds = Float64Array.from(marks, (m) => m.seconds);
      guideTexts = marks.map((m) => m.text.trim());
    },

    setOptions(changes) {
      Object.assign(opts, changes);
      recolor();
      lay();
    },

    setHeld(held) {
      let count = 0;
      if (layout && opts.showHeldLanes) {
        const left = -layout.width / 2;
        for (const [pitch, color] of held) {
          const key = layout.key(pitch);
          if (!key || count === MAX_HELD) continue;
          heldLanes.setMatrixAt(count, matrix.makeScale(key.width, 1, opts.far).setPosition(left + key.center, HELD_Y, -opts.far / 2));
          heldLanes.setColorAt(count, color);
          count++;
        }
      }
      if (count === 0 && heldLanes.count === 0) return;
      heldLanes.count = count;
      heldLanes.visible = count > 0;
      heldLanes.instanceMatrix.needsUpdate = true;
      if (heldLanes.instanceColor) heldLanes.instanceColor.needsUpdate = true;
    },

    setCycle(next) {
      cycle = next;
    },

    update(now) {
      for (const layer of layers) layer.begin();
      if (layout) {
        const reach = opts.far / opts.speed;
        forEachPass(cycle, now, now + reach, (from, to, shift) => drawPass(layout!.width, now - shift, from, to, reach));
      }
      for (const layer of layers) layer.end();
    },

    dispose() {
      for (const mesh of [base, blackLanes.mesh, dividers.mesh]) (mesh.material as MeshBasicMaterial).dispose();
      blackLanes.mesh.dispose();
      dividers.mesh.dispose();
      heldLanes.dispose();
      heldMaterial.dispose();
      for (const layer of layers) layer.dispose();
      flat.dispose();
      group.removeFromParent();
    },
  };
}

const matrix = new Matrix4();

/** Strips that run the lanes' whole length, such as one per black key, rebuilt only on a new layout. */
class FixedStrips {
  mesh: InstancedMesh;
  readonly color: Color;

  constructor(
    private readonly group: Group,
    private readonly geometry: PlaneGeometry,
    private readonly material: MeshBasicMaterial,
  ) {
    this.color = material.color;
    this.mesh = new InstancedMesh(geometry, material, 0);
    group.add(this.mesh);
  }

  /** One strip per `[centre x, width]`, at height `y`, from z = -far to z = 0. */
  set(strips: [number, number][], y: number, far: number): void {
    if (strips.length !== this.mesh.count) {
      this.mesh.dispose();
      this.mesh.removeFromParent();
      this.mesh = new InstancedMesh(this.geometry, this.material, strips.length);
      this.group.add(this.mesh);
    }
    strips.forEach(([x, width], i) => this.mesh.setMatrixAt(i, matrix.makeScale(width, 1, far).setPosition(x, y, -far / 2)));
    this.mesh.instanceMatrix.needsUpdate = true;
    this.mesh.computeBoundingSphere();
  }
}

/** Strips across the lanes, such as measure lines, rewritten every frame and doubled when they run out. */
class PooledStrips {
  private mesh: InstancedMesh;
  private capacity = 64;
  private count = 0;
  readonly color: Color;

  constructor(
    private readonly group: Group,
    private readonly geometry: PlaneGeometry,
    private readonly material: MeshBasicMaterial,
  ) {
    this.color = material.color;
    this.mesh = this.build();
  }

  begin(): void {
    this.count = 0;
  }

  /** A strip centred on `(x, y, z)`, `width` wide across and `depth` deep along the lanes. */
  push(x: number, y: number, z: number, width: number, depth: number): void {
    if (this.count === this.capacity) {
      const old = this.mesh;
      this.capacity *= 2;
      this.mesh = this.build();
      (this.mesh.instanceMatrix.array as Float32Array).set((old.instanceMatrix.array as Float32Array).subarray(0, this.count * 16));
      old.dispose();
      old.removeFromParent();
    }
    this.mesh.setMatrixAt(this.count++, matrix.makeScale(width, 1, depth).setPosition(x, y, z));
  }

  end(): void {
    this.mesh.count = this.count;
    this.mesh.visible = this.count > 0;
    this.mesh.instanceMatrix.clearUpdateRanges();
    this.mesh.instanceMatrix.addUpdateRange(0, this.count * 16);
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  dispose(): void {
    this.mesh.dispose();
    this.mesh.removeFromParent();
    this.material.dispose();
  }

  private build(): InstancedMesh {
    const mesh = new InstancedMesh(this.geometry, this.material, this.capacity);
    mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    // The lines move every frame, so the mesh's bounds never hold.
    mesh.frustumCulled = false;
    mesh.count = 0;
    this.group.add(mesh);
    return mesh;
  }
}

/** A text sprite and the canvas it is drawn from. */
interface TextSprite {
  sprite: Sprite;
  context: CanvasRenderingContext2D;
  texture: CanvasTexture;
  /** The text on its canvas, or undefined before the first draw. */
  shows: string | undefined;
}

interface TextStyle {
  /** Which end of the text sits at the sprite's place. A left-aligned text sits just above it as well. */
  align: "left" | "right";
  /** The canvas's width in pixels. A text wider than it shrinks to fit. */
  canvasWidth: number;
  /** The text's height in world units. */
  height: number;
  /** A CSS colour. */
  color: string;
}

const CANVAS_HEIGHT = 64;

/** Text sprites of one style, reused frame to frame. */
class TextPool {
  private readonly sprites: TextSprite[] = [];
  private count = 0;
  private color: string;

  constructor(
    private readonly group: Group,
    private readonly style: TextStyle,
  ) {
    this.color = style.color;
  }

  begin(): void {
    this.count = 0;
  }

  push(text: string, x: number, y: number, z: number): void {
    const entry = this.sprites[this.count++] ?? this.create();
    if (entry.shows !== text) this.draw(entry, text);
    entry.sprite.position.set(x, y, z);
    entry.sprite.visible = true;
  }

  end(): void {
    for (let i = this.count; i < this.sprites.length; i++) this.sprites[i]!.sprite.visible = false;
  }

  setColor(color: string): void {
    if (color === this.color) return;
    this.color = color;
    for (const entry of this.sprites) if (entry.shows !== undefined) this.draw(entry, entry.shows);
  }

  dispose(): void {
    for (const { sprite, texture } of this.sprites) {
      texture.dispose();
      sprite.material.dispose();
      sprite.removeFromParent();
    }
    this.sprites.length = 0;
  }

  private create(): TextSprite {
    const { canvasWidth, height, align } = this.style;
    const canvas = document.createElement("canvas");
    canvas.width = canvasWidth;
    canvas.height = CANVAS_HEIGHT;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("This browser cannot draw text onto a canvas.");
    const texture = new CanvasTexture(canvas);
    texture.colorSpace = SRGBColorSpace;
    const sprite = new Sprite(new SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
    keepsGlowOff(sprite);
    sprite.scale.set((height * canvasWidth) / CANVAS_HEIGHT, height, 1);
    // The sprite's centre is the aligned end of its text, at mid height or, left-aligned, at the bottom.
    if (align === "right") sprite.center.set(1, 0.5);
    else sprite.center.set(0, 0);
    this.group.add(sprite);
    const entry: TextSprite = { sprite, context, texture, shows: undefined };
    this.sprites.push(entry);
    return entry;
  }

  private draw(entry: TextSprite, text: string): void {
    const { context } = entry;
    const { canvasWidth, align } = this.style;
    context.clearRect(0, 0, canvasWidth, CANVAS_HEIGHT);
    let size = CANVAS_HEIGHT * 0.7;
    context.font = `600 ${size}px system-ui, sans-serif`;
    const room = canvasWidth - 8;
    const wide = context.measureText(text).width;
    if (wide > room) {
      size *= room / wide;
      context.font = `600 ${size}px system-ui, sans-serif`;
    }
    context.textAlign = align;
    context.textBaseline = "middle";
    context.fillStyle = this.color;
    context.fillText(text, align === "right" ? canvasWidth - 4 : 4, CANVAS_HEIGHT / 2);
    entry.texture.needsUpdate = true;
    entry.shows = text;
  }
}

/**
 * The notes: a song's notes as rounded bars that fly towards the keys and meet them at the hit line.
 *
 * World space follows the scene's contract. One unit is one white key, the keyboard is centred on
 * x = 0, and the hit line is z = 0. A note's start sits at z = -(start - now) * speed, so bars come from
 * negative z and reach the keys when they sound.
 *
 * Decisions, and what each costs:
 * - Notes are two `InstancedMesh`es, one for white-key notes and one for black-key notes, each in one
 *   draw call. Black-key bars sit a little higher, so they stay on top where the two overlap.
 * - Each instance carries its own size, and the vertex shader keeps the corner radius in world units.
 *   A long note then has the same rounded ends as a short one, which a scaled matrix cannot give. The
 *   cost is a patched `MeshStandardMaterial` shader.
 * - Each instance carries a glow, added as emission in its own colour. The stroke is a rim of that
 *   emission at grazing angles, so the bloom pass turns it into an edge glow. Only the emission lights
 *   the bloom, so an unlit bar's body never glows.
 * - With `activeGlow` on, a sounding note is lightened and glows. A note marked hit flashes and fades
 *   over `hitFade` seconds. The note `setSelected` names is lightened and glows, whether it sounds
 *   or not.
 * - `forEachShown` hands each placed bar to the label layer, so the labels sit on the bars as drawn.
 * - `noteAt` finds a bar by its rectangle on the lanes' plane, from the note window, so hover needs no
 *   ray test against the shader-sized instances.
 * - With `shrink` on, a note is cut at the hit line as it plays, so it shrinks into its key. With it
 *   off, a note runs on over the keys for `passDistance` units.
 * - With `sustain` on, a note the pedal holds shows a thin dim tail up to its pedal-held end.
 * - The bars are rewritten every frame from the note window, so a seek or a speed change costs nothing
 *   extra.
 * - Each note is drawn on the key `fitPitch` gives it. With `fold` off, a note outside the layout's
 *   range is left out. With it on, the note falls onto its folded key in range.
 * - Every walk of the bars goes through the passes of `src/render/passes.ts`. With a cycle set, the
 *   cycle's start then shows again past its end, and the labels, the chord blocks and hover follow.
 *   A bar of a later pass hands over the real note, so hover and selection find that note. Only the
 *   first pass sounds and flashes. A frame walks one note window query per pass.
 *
 * Bounds: each mesh holds as many instances as the busiest frame so far needed, doubling when it runs
 * out. The hit flashes hold one entry per note marked hit, cleared by `setSong`.
 */
import {
  Color,
  DynamicDrawUsage,
  Group,
  InstancedBufferAttribute,
  InstancedMesh,
  MeshStandardMaterial,
  type BufferGeometry,
} from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

import type { Cycle } from "../audio/scheduler";
import { fitPitch } from "../keyboard/song-fit";
import type { Note } from "../midi/song";
import { emitsInGlow, lightsGlow } from "./glow-source";
import type { KeyLayout } from "./key-layout";
import { NoteWindow } from "./note-window";
import { forEachDrawn } from "./passes";

export interface NoteOptions {
  /** World units a note travels per second. */
  speed: number;
  /** How far ahead of the hit line notes show, in world units. */
  far: number;
  /** A bar's width, as a fraction of its key's width. */
  width: number;
  /** The corner radius in world units, kept below half a bar's smallest side. */
  cornerRadius: number;
  /** The shortest a bar is drawn, in world units, so a note of no length still shows. */
  minLength: number;
  /** A bar's height above the keys' plane, in world units. */
  thickness: number;
  /** The strength of the edge glow, 0 for none. */
  stroke: number;
  /** Whether a note shrinks into its key as it plays, instead of running on over the keys. */
  shrink: boolean;
  /** How far a note runs on past the hit line when `shrink` is off, in world units. */
  passDistance: number;
  /** Whether the pedal-held end of a note shows as a tail. */
  sustain: boolean;
  /** A sustain tail's brightness against its note's, from 0 to 1. */
  sustainDim: number;
  /** Whether a sounding note is lightened and glows. */
  activeGlow: boolean;
  /** What a black-key note's colour is multiplied by. */
  blackShade: number;
  /** How long a hit note's flash lasts, in seconds. */
  hitFade: number;
  /** Whether a note outside the layout's range falls onto its folded key, instead of being left out. */
  fold: boolean;
}

export const DEFAULT_NOTE_OPTIONS: Readonly<NoteOptions> = {
  speed: 8,
  far: 60,
  width: 0.86,
  cornerRadius: 0.12,
  minLength: 0.25,
  thickness: 0.3,
  stroke: 0.35,
  shrink: true,
  passDistance: 6,
  sustain: true,
  sustainDim: 0.45,
  activeGlow: true,
  blackShade: 0.72,
  hitFade: 0.35,
  fold: false,
};

/** The colour a note is drawn in, before the black-key shade. */
export type NoteColor = (note: Note) => Color;

/** The end of a note with the pedal's hold added, or `note.end` when the pedal does not hold it. */
export type SustainEnd = (note: Note) => number;

export interface NoteBars {
  readonly group: Group;
  readonly options: Readonly<NoteOptions>;
  /** Shows `notes`, sorted by start as `Song.notes` is, on `layout`'s keys. */
  setSong(notes: readonly Note[], layout: KeyLayout, colorOf: NoteColor, sustainEnd?: SustainEnd): void;
  /** Places the same notes on a new layout, such as a fitted range. */
  setLayout(layout: KeyLayout): void;
  /** Recolours the notes, such as after a track's colour changes. */
  setColors(colorOf: NoteColor): void;
  setOptions(options: Partial<NoteOptions>): void;
  /** Draws the start of `cycle` again past its end, or the song straight on with undefined. */
  setCycle(cycle: Cycle | undefined): void;
  /** Flashes `note`, judged hit at song time `at`. */
  markHit(note: Note, at: number): void;
  /** Places every visible bar for song time `now`, in seconds. */
  update(now: number): void;
  /**
   * The note whose bar covers `(x, z)` in the group's own space, as the last `update` placed it. A
   * black-key bar wins over a white-key bar beneath it.
   */
  noteAt(x: number, z: number): Note | undefined;
  /**
   * Visits each bar as the last `update` placed it, with its centre x, the z of its front end, its
   * width, the height of its top and the z of its back end, all in the group's own space.
   */
  forEachShown(visit: (note: Note, x: number, frontZ: number, width: number, top: number, backZ: number) => void): void;
  /** Lightens `note` and makes it glow, so the learner sees which note is selected, or none with undefined. */
  setSelected(note: Note | undefined): void;
  dispose(): void;
}

/** A display span: a note with the end it is drawn to, pedal included. */
interface Span {
  note: Note;
  start: number;
  end: number;
}

/** Where black-key bars sit above white-key ones, in world units. */
const BLACK_LIFT = 0.03;
/** The bars' bottom, just above the white keys' top at y = 0. */
const BAR_BOTTOM = 0.02;
/** How much a sounding note is lightened towards white, and how much it glows. */
const ACTIVE_LIGHTEN = 0.35;
const ACTIVE_GLOW = 0.6;
/** A hit flash's glow when it starts. */
const HIT_GLOW = 1.5;
/** How much the selected note is lightened towards white, and how much it glows. */
const SELECTED_LIGHTEN = 0.5;
const SELECTED_GLOW = 1;
/** A sustain tail's width and height, against its note's. */
const TAIL_WIDTH = 0.35;
const TAIL_HEIGHT = 0.5;

/** The base geometry's corner radius. The shader rescales the corners from it. */
const BASE_RADIUS = 0.25;

const vertexHead = /* glsl */ `#include <common>
attribute vec3 aSize;
attribute float aGlow;
varying float vGlow;
uniform float uRadius;`;

const vertexBody = /* glsl */ `vec3 cornerSign = sign(position);
float radius = min(uRadius, 0.5 * min(aSize.x, min(aSize.y, aSize.z)));
vec3 transformed = cornerSign * (0.5 * aSize - radius)
  + (position - cornerSign * ${(0.5 - BASE_RADIUS).toFixed(4)}) * (radius / ${BASE_RADIUS.toFixed(4)});
vGlow = aGlow;`;

const fragmentHead = /* glsl */ `#include <common>
varying float vGlow;
uniform float uStroke;`;

const fragmentEmission = /* glsl */ `#include <emissivemap_fragment>
float rim = 1.0 - abs(dot(normal, normalize(vViewPosition)));
totalEmissiveRadiance += vColor.rgb * (vGlow + uStroke * rim * rim);`;

/** The note bars, empty until `setSong`. */
export function createNoteBars(options: Partial<NoteOptions> = {}): NoteBars {
  const opts: NoteOptions = { ...DEFAULT_NOTE_OPTIONS, ...options };
  const group = new Group();
  group.name = "notes";

  const radius = { value: opts.cornerRadius };
  const stroke = { value: opts.stroke };
  const material = new MeshStandardMaterial({ roughness: 0.4, metalness: 0.05 });
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uRadius = radius;
    shader.uniforms.uStroke = stroke;
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", vertexHead)
      .replace("#include <begin_vertex>", vertexBody);
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", fragmentHead)
      .replace("#include <emissivemap_fragment>", fragmentEmission);
  };
  emitsInGlow(material);
  const baseGeometry = new RoundedBoxGeometry(1, 1, 1, 3, BASE_RADIUS);

  const white = new BarMesh(group, baseGeometry, material, BAR_BOTTOM);
  const black = new BarMesh(group, baseGeometry, material, BAR_BOTTOM + BLACK_LIFT);

  let spans: Span[] = [];
  let window = new NoteWindow<Span>([]);
  let layout: KeyLayout | undefined;
  let colorOf: NoteColor = () => new Color(0xffffff);
  /** Per span: its key's world centre and width, or NaN when its key is out of range. */
  let keyX = new Float32Array(0);
  let keyWidth = new Float32Array(0);
  let keyBlack = new Uint8Array(0);
  /** Per span: its colour, black-key shade applied, as r, g, b. */
  let colors = new Float32Array(0);
  const hits = new Map<Note, number>();
  const scratch = new Color();
  let lastNow = 0;
  let selected: Note | undefined;

  /** The cycle the picture repeats, or undefined while the song runs straight on. */
  let cycle: Cycle | undefined;

  /**
   * Visits each bar visible at `now` whose key is in range, through the passes of the cycle. It hands
   * over the bar's centre x, its width, the z of its far end, its drawn length, the z of its pedal
   * tail's far end and its pass's shift.
   */
  const forEachBar = (
    now: number,
    visit: (span: Span, i: number, x: number, width: number, tailZ: number, length: number, holdZ: number, shift: number) => void,
  ) => {
    const { speed } = opts;
    const behind = opts.shrink ? 0 : opts.passDistance / speed;
    forEachDrawn(window, cycle, now - behind, now + opts.far / speed, (span, i, shift, cut) => {
      const x = keyX[i]!;
      if (Number.isNaN(x)) return;
      const { note } = span;
      // `at` is the song time the hit line shows in this bar's pass.
      const at = now - shift;
      const length = Math.max(opts.minLength, (Math.min(note.end, cut) - note.start) * speed);
      visit(span, i, x, keyWidth[i]! * opts.width, (at - note.start) * speed - length, length, (at - Math.min(span.end, cut)) * speed, shift);
    });
  };

  const placeKeys = () => {
    keyX = new Float32Array(spans.length);
    keyWidth = new Float32Array(spans.length);
    keyBlack = new Uint8Array(spans.length);
    spans.forEach(({ note }, i) => {
      const pitch = layout && fitPitch(note.pitch, layout.range, opts.fold);
      const key = pitch === undefined ? undefined : layout?.key(pitch);
      keyX[i] = key && layout ? key.center - layout.width / 2 : NaN;
      keyWidth[i] = key ? key.width : 0;
      keyBlack[i] = key?.black ? 1 : 0;
    });
  };

  const paint = () => {
    colors = new Float32Array(spans.length * 3);
    spans.forEach(({ note }, i) => {
      scratch.copy(colorOf(note));
      if (keyBlack[i]) scratch.multiplyScalar(opts.blackShade);
      colors[i * 3] = scratch.r;
      colors[i * 3 + 1] = scratch.g;
      colors[i * 3 + 2] = scratch.b;
    });
  };

  return {
    group,
    options: opts,

    setSong(notes, newLayout, newColorOf, sustainEnd) {
      spans = notes.map((note) => ({ note, start: note.start, end: Math.max(note.end, sustainEnd?.(note) ?? note.end) }));
      window = new NoteWindow(spans);
      layout = newLayout;
      colorOf = newColorOf;
      hits.clear();
      placeKeys();
      paint();
    },

    setLayout(newLayout) {
      layout = newLayout;
      placeKeys();
      paint();
    },

    setColors(newColorOf) {
      colorOf = newColorOf;
      paint();
    },

    setOptions(changes) {
      const reshade = changes.blackShade !== undefined && changes.blackShade !== opts.blackShade;
      const refold = changes.fold !== undefined && changes.fold !== opts.fold;
      Object.assign(opts, changes);
      radius.value = opts.cornerRadius;
      stroke.value = opts.stroke;
      if (refold) placeKeys();
      if (reshade || refold) paint();
    },

    setCycle(next) {
      cycle = next;
    },

    markHit(note, at) {
      hits.set(note, at);
    },

    update(now) {
      lastNow = now;
      white.begin();
      black.begin();
      const { speed } = opts;
      const limitZ = opts.shrink ? 0 : opts.passDistance;

      forEachBar(now, (span, i, x, width, tailZ, length, holdZ, shift) => {
        const { note } = span;
        const bars = keyBlack[i] ? black : white;

        let r = colors[i * 3]!;
        let g = colors[i * 3 + 1]!;
        let b = colors[i * 3 + 2]!;
        let glow = 0;
        // Only the first pass reaches the hit line, so a later pass's copy never sounds or flashes.
        const sounding = shift === 0 && note.start <= now && now < note.start + length / speed;
        if (sounding && opts.activeGlow) {
          r += (1 - r) * ACTIVE_LIGHTEN;
          g += (1 - g) * ACTIVE_LIGHTEN;
          b += (1 - b) * ACTIVE_LIGHTEN;
          glow += ACTIVE_GLOW;
        }
        if (note === selected) {
          r += (1 - r) * SELECTED_LIGHTEN;
          g += (1 - g) * SELECTED_LIGHTEN;
          b += (1 - b) * SELECTED_LIGHTEN;
          glow += SELECTED_GLOW;
        }
        const hitAt = hits.get(note);
        if (shift === 0 && hitAt !== undefined && now >= hitAt && now - hitAt < opts.hitFade) {
          glow += HIT_GLOW * (1 - (now - hitAt) / opts.hitFade);
        }

        const front = Math.min(tailZ + length, limitZ);
        if (front > tailZ) bars.push(x, tailZ, front, width, opts.thickness, r, g, b, glow);

        if (opts.sustain && span.end > note.end) {
          const tailFront = Math.min(tailZ, limitZ);
          if (tailFront > holdZ) {
            const d = opts.sustainDim;
            bars.push(x, holdZ, tailFront, width * TAIL_WIDTH, opts.thickness * TAIL_HEIGHT, r * d, g * d, b * d, 0);
          }
        }
      });

      white.end();
      black.end();
    },

    noteAt(x, z) {
      let found: Note | undefined;
      const limitZ = opts.shrink ? 0 : opts.passDistance;
      forEachBar(lastNow, (span, i, barX, width, tailZ, length) => {
        if (found && !keyBlack[i]) return;
        const inside = Math.abs(x - barX) <= width / 2 && z >= tailZ && z <= Math.min(tailZ + length, limitZ);
        if (inside) found = span.note;
      });
      return found;
    },

    forEachShown(visit) {
      const limitZ = opts.shrink ? 0 : opts.passDistance;
      forEachBar(lastNow, (span, i, x, width, tailZ, length) => {
        const front = Math.min(tailZ + length, limitZ);
        if (front > tailZ) visit(span.note, x, front, width, BAR_BOTTOM + (keyBlack[i] ? BLACK_LIFT : 0) + opts.thickness, tailZ);
      });
    },

    setSelected(note) {
      selected = note;
    },

    dispose() {
      white.dispose();
      black.dispose();
      baseGeometry.dispose();
      material.dispose();
      group.removeFromParent();
    },
  };
}

/** One instanced mesh of bars, rewritten every frame, that doubles its capacity when it runs out. */
class BarMesh {
  private store: BarStore;
  private count = 0;

  constructor(
    private readonly group: Group,
    private readonly base: BufferGeometry,
    private readonly material: MeshStandardMaterial,
    private readonly bottom: number,
  ) {
    this.store = this.build(256);
  }

  begin(): void {
    this.count = 0;
  }

  /** Adds a bar over `x`, from `backZ` to `frontZ`, with a colour and a glow. */
  push(x: number, backZ: number, frontZ: number, width: number, height: number, r: number, g: number, b: number, glow: number): void {
    if (this.count === this.store.capacity) this.grow();
    const i = this.count++;
    const { matrices, sizes, glows, colors } = this.store;
    // Every matrix is a pure translation. `InstancedMesh` fills the rest of each with the identity.
    matrices[i * 16 + 12] = x;
    matrices[i * 16 + 13] = this.bottom + height / 2;
    matrices[i * 16 + 14] = (backZ + frontZ) / 2;
    sizes[i * 3] = width;
    sizes[i * 3 + 1] = height;
    sizes[i * 3 + 2] = frontZ - backZ;
    glows[i] = glow;
    colors[i * 3] = r;
    colors[i * 3 + 1] = g;
    colors[i * 3 + 2] = b;
  }

  /** Uploads the bars pushed since `begin`, and draws only them. */
  end(): void {
    const { mesh } = this.store;
    const attributes = [mesh.instanceMatrix, mesh.instanceColor!, this.store.sizeAttribute, this.store.glowAttribute];
    for (const attribute of attributes) {
      attribute.clearUpdateRanges();
      attribute.addUpdateRange(0, this.count * attribute.itemSize);
      attribute.needsUpdate = true;
    }
    mesh.count = this.count;
    mesh.visible = this.count > 0;
  }

  dispose(): void {
    this.release(this.store);
  }

  private grow(): void {
    const old = this.store;
    this.store = this.build(old.capacity * 2);
    this.store.matrices.set(old.matrices.subarray(0, this.count * 16));
    this.store.sizes.set(old.sizes.subarray(0, this.count * 3));
    this.store.glows.set(old.glows.subarray(0, this.count));
    this.store.colors.set(old.colors.subarray(0, this.count * 3));
    this.release(old);
  }

  private release({ mesh }: BarStore): void {
    mesh.geometry.dispose();
    mesh.dispose();
    mesh.removeFromParent();
  }

  private build(capacity: number): BarStore {
    const geometry = this.base.clone();
    const sizes = new Float32Array(capacity * 3);
    const glows = new Float32Array(capacity);
    const colors = new Float32Array(capacity * 3);
    const sizeAttribute = new InstancedBufferAttribute(sizes, 3).setUsage(DynamicDrawUsage);
    const glowAttribute = new InstancedBufferAttribute(glows, 1).setUsage(DynamicDrawUsage);
    geometry.setAttribute("aSize", sizeAttribute);
    geometry.setAttribute("aGlow", glowAttribute);
    const mesh = new InstancedMesh(geometry, this.material, capacity);
    mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    mesh.instanceColor = new InstancedBufferAttribute(colors, 3).setUsage(DynamicDrawUsage);
    // The bars move every frame and the shader resizes them, so the mesh's bounds never hold.
    mesh.frustumCulled = false;
    mesh.count = 0;
    mesh.visible = false;
    lightsGlow(mesh);
    this.group.add(mesh);
    const matrices = mesh.instanceMatrix.array as Float32Array;
    return { mesh, capacity, matrices, sizes, glows, colors, sizeAttribute, glowAttribute };
  }
}

/** One mesh's instance buffers, with typed views of them. */
interface BarStore {
  mesh: InstancedMesh;
  capacity: number;
  matrices: Float32Array;
  sizes: Float32Array;
  glows: Float32Array;
  colors: Float32Array;
  sizeAttribute: InstancedBufferAttribute;
  glowAttribute: InstancedBufferAttribute;
}

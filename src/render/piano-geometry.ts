/**
 * The piano's key geometry and materials, in world units where one white key is one unit wide.
 *
 * The world contract every scene part shares: the hit line is z = 0, the keys' back edge, and keys
 * reach towards the player along +z. White key tops sit at y = 0 and black key tops at `BLACK_KEY_TOP`.
 *
 * Decisions, and what each costs:
 * - A key is an extruded shape with a bevel, so its edges catch light like a real key. Each geometry
 *   is built with its origin on the key's back edge at its centre, so a press is a rotation about x.
 * - A white key is notched around the black keys beside it. The notch follows each black key's lean,
 *   so the shapes of one range are cached by their notch edges and shared between keys.
 * - The bevel is offset inwards by its own size, so a key never grows past its layout rectangle.
 *
 * Bounds: the cache holds one geometry per distinct pair of notch edges in the layout, and one black key.
 */
import { type BufferGeometry, Color, type ColorRepresentation, ExtrudeGeometry, MeshPhysicalMaterial, Shape } from "three";

import type { KeyLayout, KeyRect } from "./key-layout";

/** A white key's length from its back edge to its front. */
export const WHITE_KEY_LENGTH = 6.2;
/** A white key's height from its top to its bottom. */
export const WHITE_KEY_HEIGHT = 0.9;
/** A black key's length from its back edge to its front. */
export const BLACK_KEY_LENGTH = 4;
/** The height of a black key's top above the white key tops. */
export const BLACK_KEY_TOP = 0.55;
/** A black key's height, reaching down into its notch. */
export const BLACK_KEY_HEIGHT = 1.05;
/** The gap between two white keys. */
export const KEY_GAP = 0.05;
/** The clearance a notch leaves around its black key. */
const NOTCH_CLEARANCE = 0.035;

const WHITE_BEVEL = 0.035;
const BLACK_BEVEL = 0.06;

/** Builds the key geometries of one layout and shares the white key shapes between equal notches. */
export class KeyGeometries {
  private readonly whites = new Map<string, BufferGeometry>();
  private black: BufferGeometry | undefined;

  constructor(private readonly layout: KeyLayout) {}

  /** The geometry of `key`, with its origin at the centre of its back edge. */
  of(key: KeyRect): BufferGeometry {
    if (key.black) return (this.black ??= blackKeyGeometry(key.width));
    const left = this.layout.key(key.pitch - 1);
    const right = this.layout.key(key.pitch + 1);
    // Notch edges relative to the key's centre, or undefined where no black key sits beside it.
    const leftNotch = left?.black ? left.x + left.width + NOTCH_CLEARANCE - key.center : undefined;
    const rightNotch = right?.black ? right.x - NOTCH_CLEARANCE - key.center : undefined;
    const id = `${leftNotch?.toFixed(4)}|${rightNotch?.toFixed(4)}`;
    let geometry = this.whites.get(id);
    if (!geometry) {
      geometry = whiteKeyGeometry(leftNotch, rightNotch);
      this.whites.set(id, geometry);
    }
    return geometry;
  }

  dispose(): void {
    for (const geometry of this.whites.values()) geometry.dispose();
    this.whites.clear();
    this.black?.dispose();
    this.black = undefined;
  }
}

/** A white key, its top at y = 0, notched at the back where `leftNotch` or `rightNotch` is given. */
function whiteKeyGeometry(leftNotch: number | undefined, rightNotch: number | undefined): BufferGeometry {
  const left = -0.5 + KEY_GAP / 2;
  const right = 0.5 - KEY_GAP / 2;
  const notchDepth = BLACK_KEY_LENGTH + NOTCH_CLEARANCE;

  // The outline in (x, z), walked from the front left corner round to the back.
  const shape = new Shape();
  shape.moveTo(left, WHITE_KEY_LENGTH);
  shape.lineTo(right, WHITE_KEY_LENGTH);
  if (rightNotch === undefined) {
    shape.lineTo(right, 0);
  } else {
    shape.lineTo(right, notchDepth);
    shape.lineTo(rightNotch, notchDepth);
    shape.lineTo(rightNotch, 0);
  }
  if (leftNotch === undefined) {
    shape.lineTo(left, 0);
  } else {
    shape.lineTo(leftNotch, 0);
    shape.lineTo(leftNotch, notchDepth);
    shape.lineTo(left, notchDepth);
  }
  shape.closePath();
  return extrudeKey(shape, WHITE_KEY_HEIGHT, WHITE_BEVEL, 2, 0);
}

/** A black key `width` wide, its top at `BLACK_KEY_TOP`. */
function blackKeyGeometry(width: number): BufferGeometry {
  const half = width / 2;
  const shape = new Shape();
  shape.moveTo(-half, BLACK_KEY_LENGTH);
  shape.lineTo(half, BLACK_KEY_LENGTH);
  shape.lineTo(half, 0);
  shape.lineTo(-half, 0);
  shape.closePath();
  return extrudeKey(shape, BLACK_KEY_HEIGHT, BLACK_BEVEL, 3, BLACK_KEY_TOP);
}

/**
 * Extrudes `shape`, drawn in (x, z), downwards by `height`, with its top at `top`.
 *
 * The extrusion runs along the shape's own z, and a quarter turn about x points it down the world's y.
 */
function extrudeKey(shape: Shape, height: number, bevel: number, segments: number, top: number): BufferGeometry {
  const geometry = new ExtrudeGeometry(shape, {
    depth: height - 2 * bevel,
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelOffset: -bevel,
    bevelSegments: segments,
    curveSegments: 1,
  });
  geometry.rotateX(Math.PI / 2);
  geometry.computeBoundingBox();
  geometry.translate(0, top - geometry.boundingBox!.max.y, 0);
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return geometry;
}

export interface KeyMaterialOptions {
  whiteKeyColor?: ColorRepresentation;
  blackKeyColor?: ColorRepresentation;
}

/** The ivory and ebony materials the piano clones for each key. */
export function keyMaterials(options: KeyMaterialOptions = {}): { white: MeshPhysicalMaterial; black: MeshPhysicalMaterial } {
  return {
    white: new MeshPhysicalMaterial({
      color: options.whiteKeyColor ?? 0xf4f1e8,
      roughness: 0.32,
      clearcoat: 0.6,
      clearcoatRoughness: 0.25,
    }),
    black: new MeshPhysicalMaterial({
      color: options.blackKeyColor ?? 0x121318,
      roughness: 0.22,
      metalness: 0.1,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
    }),
  };
}

/** The lacquered material of the piano's case. */
export function caseMaterial(): MeshPhysicalMaterial {
  return new MeshPhysicalMaterial({ color: 0x0a0b10, roughness: 0.18, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08 });
}

/** The felt along the keys' back edge, red by default, with a sheen a shade lighter than `color`. */
export function feltMaterial(color: ColorRepresentation = 0x6b1020): MeshPhysicalMaterial {
  const material = new MeshPhysicalMaterial({ color, roughness: 0.95, sheen: 1 });
  material.sheenColor.copy(material.color).lerp(new Color(0xffffff), 0.25);
  return material;
}

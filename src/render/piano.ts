/**
 * The 3D piano: its keys and case, laid out for a key range, pressed and lit as the music plays.
 *
 * It follows the world contract of `piano-geometry.ts`, with the range centred on x = 0. The caller
 * says which keys are down and in what colour. The piano animates them in `update`, which says whether
 * any key still moves, so the scene can stop drawing once every key rests.
 *
 * Decisions, and what each costs:
 * - Each key is its own mesh with its own material, so a key colours by track without a shader. That
 *   costs one draw call per key in view, which a piano's 88 keys afford.
 * - A press tilts the key about its back edge towards a target angle, driven by a lightly damped
 *   spring. The angle gives every key the same dip at its front, whatever its length.
 * - A press flashes the key's emissive colour, which is the piano's hit effect, and lights the flare.
 *   The flare is an additive sprite on the hit line, so it reads as light where the note lands.
 * - The keys and the case take part in the glow. A key glows only with its flash, and an unlit key or
 *   the case hides the glow behind it.
 * - Incoming notes tint their keys or light a dot on them. The caller clears and sets the marks each
 *   frame, so the piano holds no idea of the song.
 * - The last press of a key sets its colour, and one release lifts it. Counting overlapping presses
 *   is the caller's job.
 * - Reversed direction and key height are not here. The scene mirrors and scales the group that holds
 *   both the piano and the notes, so the two always agree.
 *
 * Bounds: one mesh, one material, one dot and at most one flare sprite per key of the range. The
 * spring runs in steps of at most 1/240 s, and a frame longer than 1/20 s is treated as 1/20 s.
 */
import {
  AdditiveBlending,
  CanvasTexture,
  CircleGeometry,
  Color,
  type ColorRepresentation,
  Group,
  Mesh,
  MeshBasicMaterial,
  type MeshPhysicalMaterial,
  type Raycaster,
  Sprite,
  SpriteMaterial,
  type Texture,
} from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

import { emitsInGlow, lightsGlow, lightsGlowDeep } from "./glow-source";
import { FULL_RANGE, type KeyLayout, type KeyRange, type KeyRect, layoutKeys } from "./key-layout";
import {
  BLACK_KEY_LENGTH,
  BLACK_KEY_TOP,
  caseMaterial,
  feltMaterial,
  KeyGeometries,
  keyMaterials,
  WHITE_KEY_HEIGHT,
  WHITE_KEY_LENGTH,
} from "./piano-geometry";

/** How far a pressed key's front edge dips, in world units. */
const PRESS_DEPTH = 0.32;
/** The spring's stiffness and damping ratio: stiff and a little under-damped, for a short spring. */
const SPRING_STIFFNESS = 1400;
const SPRING_DAMPING = 2 * Math.sqrt(SPRING_STIFFNESS) * 0.55;
const MAX_FRAME = 1 / 20;
const MAX_STEP = 1 / 240;
/** How much of the track colour a pressed key takes on. */
const PRESS_TINT = 0.8;
/** How much of its colour an incoming note gives its key at full strength. */
const INCOMING_TINT = 0.45;
/** How fast the press flash and the flare fade, per second. */
const FLASH_DECAY = 4;
const FLARE_DECAY = 3;
const FLARE_SIZE = 2.4;

export type IncomingStyle = "tint" | "dot";

export interface PianoOptions {
  range?: KeyRange;
  whiteKeyColor?: ColorRepresentation;
  blackKeyColor?: ColorRepresentation;
  /** The felt along the keys' back edge. Red by default. */
  feltColor?: ColorRepresentation;
  /** Light a flare where a pressed key meets the hit line. On by default. */
  flare?: boolean;
  /** How incoming notes mark their keys. A tint by default. */
  incomingStyle?: IncomingStyle;
  /** How much of its colour an incoming note gives its key at full strength, from 0 to 1. `INCOMING_TINT` by default. */
  incomingTint?: number;
}

export interface Piano {
  /** Holds the keys and the case. */
  readonly group: Group;
  readonly layout: KeyLayout;
  /** Lays the piano out for `range`, releasing every key. */
  setRange(range: KeyRange): void;
  /** Presses the key of `pitch` in `color`. A pitch outside the range is ignored. */
  press(pitch: number, color: ColorRepresentation): void;
  release(pitch: number): void;
  releaseAll(): void;
  /** The pitch of the nearest key `raycaster`'s ray meets, or undefined when it meets none. */
  keyAt(raycaster: Raycaster): number | undefined;
  /** Clears every incoming mark. Call it each frame before marking that frame's incoming notes. */
  clearIncoming(): void;
  /** Marks `pitch` as coming in `color` at `strength` from 0 to 1. The strongest mark of a key wins. */
  markIncoming(pitch: number, color: ColorRepresentation, strength: number): void;
  /**
   * Advances the animation by `seconds`. Returns whether a key still moves: its spring, its flash or its
   * fading flare. A key held still, lit or marked as incoming does not move.
   */
  update(seconds: number): boolean;
  dispose(): void;
}

interface KeyState {
  rect: KeyRect;
  mesh: Mesh;
  material: MeshPhysicalMaterial;
  base: Color;
  pressAngle: number;
  angle: number;
  velocity: number;
  pressed: boolean;
  color: Color;
  flash: number;
  flare: Sprite | undefined;
  flareLevel: number;
  incoming: number;
  incomingColor: Color;
  dot: Mesh;
  dotMaterial: MeshBasicMaterial;
  /** Whether the key is away from rest, so `update` must touch it. */
  live: boolean;
}

/** Builds a piano for `options.range`, the full 88 keys by default. */
export function createPiano(options: PianoOptions = {}): Piano {
  const group = new Group();
  const materials = keyMaterials(options);
  const flareOn = options.flare ?? true;
  const incomingStyle = options.incomingStyle ?? "tint";
  const incomingTint = options.incomingTint ?? INCOMING_TINT;
  const flareTexture = flareOn ? radialGlowTexture() : undefined;
  const dotGeometry = new CircleGeometry(0.15, 20).rotateX(-Math.PI / 2);
  const caseMat = emitsInGlow(caseMaterial());
  const feltMat = emitsInGlow(feltMaterial(options.feltColor));

  let layout = layoutKeys(options.range ?? FULL_RANGE);
  let geometries = new KeyGeometries(layout);
  let keys: (KeyState | undefined)[] = [];
  let caseGroup = new Group();

  const build = () => {
    const left = -layout.width / 2;
    keys = [];
    for (const rect of layout.keys) {
      const material = emitsInGlow((rect.black ? materials.black : materials.white).clone());
      const mesh = new Mesh(geometries.of(rect), material);
      mesh.position.set(left + rect.center, 0, 0);
      mesh.userData.pitch = rect.pitch;
      lightsGlow(mesh);
      group.add(mesh);

      const dotMaterial = new MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });
      const dot = new Mesh(dotGeometry, dotMaterial);
      dot.visible = false;
      const top = rect.black ? BLACK_KEY_TOP : 0;
      dot.position.set(0, top + 0.01, rect.black ? BLACK_KEY_LENGTH - 0.6 : WHITE_KEY_LENGTH - 0.9);
      mesh.add(dot);

      let flare: Sprite | undefined;
      if (flareTexture) {
        flare = new Sprite(
          new SpriteMaterial({ map: flareTexture, blending: AdditiveBlending, transparent: true, depthWrite: false }),
        );
        flare.position.set(left + rect.center, top + 0.35, 0);
        flare.visible = false;
        lightsGlow(flare);
        group.add(flare);
      }

      keys[rect.pitch] = {
        rect,
        mesh,
        material,
        base: material.color.clone(),
        pressAngle: Math.asin(PRESS_DEPTH / (rect.black ? BLACK_KEY_LENGTH : WHITE_KEY_LENGTH)),
        angle: 0,
        velocity: 0,
        pressed: false,
        color: new Color(),
        flash: 0,
        flare,
        flareLevel: 0,
        incoming: 0,
        incomingColor: new Color(),
        dot,
        dotMaterial,
        live: false,
      };
    }
    caseGroup = buildCase(layout.width, caseMat, feltMat);
    lightsGlowDeep(caseGroup);
    group.add(caseGroup);
  };

  const teardown = () => {
    for (const key of keys) {
      if (!key) continue;
      group.remove(key.mesh);
      key.material.dispose();
      key.dotMaterial.dispose();
      if (key.flare) {
        group.remove(key.flare);
        key.flare.material.dispose();
      }
    }
    group.remove(caseGroup);
    caseGroup.traverse((object) => {
      if (object instanceof Mesh) object.geometry.dispose();
    });
    geometries.dispose();
  };

  /** Moves `key` one frame on: its spring, its flash and flare, and its colour. Returns whether it still moves. */
  const animate = (key: KeyState, seconds: number): boolean => {
    const target = key.pressed ? key.pressAngle : 0;
    for (let left = seconds; left > 0; left -= MAX_STEP) {
      const step = Math.min(left, MAX_STEP);
      key.velocity += (SPRING_STIFFNESS * (target - key.angle) - SPRING_DAMPING * key.velocity) * step;
      key.angle += key.velocity * step;
    }
    key.mesh.rotation.x = key.angle;

    key.flash = Math.max(0, key.flash - FLASH_DECAY * seconds);
    key.flareLevel = key.pressed ? 1 : Math.max(0, key.flareLevel - FLARE_DECAY * seconds);
    if (key.flare) {
      key.flare.visible = key.flareLevel > 0.01;
      key.flare.material.color.copy(key.color);
      key.flare.material.opacity = key.flareLevel * (0.55 + 0.45 * key.flash);
      key.flare.scale.setScalar(FLARE_SIZE * (0.7 + 0.3 * key.flareLevel));
    }

    const color = key.material.color.copy(key.base);
    if (incomingStyle === "tint" && key.incoming > 0) color.lerp(key.incomingColor, key.incoming * incomingTint);
    if (key.pressed) color.lerp(key.color, PRESS_TINT);
    key.material.emissive.copy(key.color);
    key.material.emissiveIntensity = key.pressed ? 0.15 + 0.85 * key.flash : 0.6 * key.flash;

    key.dot.visible = incomingStyle === "dot" && key.incoming > 0 && !key.pressed;
    if (key.dot.visible) {
      key.dotMaterial.color.copy(key.incomingColor);
      key.dotMaterial.opacity = key.incoming;
    }

    key.live =
      key.pressed ||
      key.incoming > 0 ||
      key.flash > 0 ||
      key.flareLevel > 0 ||
      Math.abs(key.angle) > 1e-4 ||
      Math.abs(key.velocity) > 1e-3;
    if (!key.live) {
      key.angle = 0;
      key.velocity = 0;
      key.mesh.rotation.x = 0;
      key.material.emissiveIntensity = 0;
    }
    return (
      key.flash > 0 ||
      (!key.pressed && key.flareLevel > 0) ||
      Math.abs(key.angle - target) > 1e-4 ||
      Math.abs(key.velocity) > 1e-3
    );
  };

  build();

  return {
    group,
    get layout() {
      return layout;
    },
    setRange(range) {
      teardown();
      layout = layoutKeys(range);
      geometries = new KeyGeometries(layout);
      build();
    },
    press(pitch, color) {
      const key = keys[pitch];
      if (!key) return;
      key.pressed = true;
      key.color.set(color);
      key.flash = 1;
      key.live = true;
    },
    release(pitch) {
      const key = keys[pitch];
      if (key) key.pressed = false;
    },
    releaseAll() {
      for (const key of keys) if (key) key.pressed = false;
    },
    keyAt(raycaster) {
      const meshes = keys.flatMap((key) => (key ? [key.mesh] : []));
      const hit = raycaster.intersectObjects(meshes, false)[0];
      return hit === undefined ? undefined : (hit.object.userData.pitch as number);
    },
    clearIncoming() {
      for (const key of keys) if (key) key.incoming = 0;
    },
    markIncoming(pitch, color, strength) {
      const key = keys[pitch];
      if (!key || strength <= key.incoming) return;
      key.incoming = Math.min(1, strength);
      key.incomingColor.set(color);
      key.live = true;
    },
    update(seconds) {
      const frame = Math.min(Math.max(seconds, 0), MAX_FRAME);
      let moving = false;
      for (const key of keys) if (key?.live && animate(key, frame)) moving = true;
      return moving;
    },
    dispose() {
      teardown();
      materials.white.dispose();
      materials.black.dispose();
      caseMat.dispose();
      feltMat.dispose();
      dotGeometry.dispose();
      flareTexture?.dispose();
    },
  };
}

/** The case around keys spanning `width`: a bed under them, cheeks at the ends, a rail and the felt. */
function buildCase(width: number, lacquer: MeshPhysicalMaterial, felt: MeshPhysicalMaterial): Group {
  const group = new Group();
  const cheekWidth = 1.1;
  const length = WHITE_KEY_LENGTH + 0.9;

  const bed = new Mesh(new RoundedBoxGeometry(width + 2 * cheekWidth, 0.5, length, 2, 0.08), lacquer);
  bed.position.set(0, -WHITE_KEY_HEIGHT - 0.3, length / 2 - 0.4);
  group.add(bed);

  const cheekGeometry = new RoundedBoxGeometry(cheekWidth, 1.7, length, 3, 0.18);
  for (const side of [-1, 1]) {
    const cheek = new Mesh(cheekGeometry.clone(), lacquer);
    cheek.position.set(side * (width / 2 + cheekWidth / 2), -0.25, length / 2 - 0.4);
    group.add(cheek);
  }
  cheekGeometry.dispose();

  const rail = new Mesh(new RoundedBoxGeometry(width + 2 * cheekWidth, 0.7, 0.55, 2, 0.1), lacquer);
  rail.position.set(0, -0.7, WHITE_KEY_LENGTH + 0.3);
  group.add(rail);

  // The felt's top is level with the key tops: above the lanes, and under notes reaching the hit line.
  const strip = new Mesh(new RoundedBoxGeometry(width, 0.2, 0.3, 1, 0.04), felt);
  strip.position.set(0, -0.1, -0.16);
  group.add(strip);
  return group;
}

/** A soft white disc fading to transparent, the flare's texture. */
function radialGlowTexture(): Texture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d")!;
  const gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.25, "rgba(255,255,255,0.55)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);
  return new CanvasTexture(canvas);
}

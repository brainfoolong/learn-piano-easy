/**
 * The flames: a key that sounds burns, and so does its note on the lanes, in the note's colour. Once
 * the key is let go, its flames die down.
 *
 * World space follows the scene's contract: one unit is one white key, the hit line is z = 0, and the
 * keys reach towards the player along +z. Every box here is in the space of the group the scene adds
 * this module's group to.
 *
 * Decisions, and what each costs:
 * - Fire is a volume. Each flame is a box, and its fragment shader marches a ray through the box,
 *   reading a density field built from noise. The cost is fill rate, so the setting starts off and the
 *   boxes are only as large as their flames.
 * - One instanced mesh draws every flame, so a frame costs one draw call. The CPU writes each box once
 *   a frame, and only for the flames alive.
 * - The noise is a tiling 3D texture of gradient noise, built on the CPU when the flames first show.
 *   A ray step then costs a few texture reads, never a noise function. Each octave turns by a fixed
 *   rotation, so the tiling never lines up into a pattern.
 * - A flame takes its note's hue at full brightness. Its tips are a deep shade of the hue, its body the
 *   hue itself, and its core runs towards white, as a real flame is hottest at its root.
 * - Fire is light. It adds to the frame and lights the bloom, and dims what is behind it only a little,
 *   so it still reads on a light background.
 * - A key flame stands on the pressed key, strongest at the hit line. A note's flame runs along its bar,
 *   strongest at the hit line too, so the two read as one fire. A bar burns over at most `BAR_BURN`.
 * - A flame leans away from the player, as a bar running towards the keys would fan it. It then also
 *   moves on screen under the flat view, which looks straight down.
 * - A flame lights for `IGNITE` seconds with a short flare, and dies over `EXTINGUISH` seconds, its
 *   height falling. A key struck again in that time burns up from where it was.
 * - `LIGHTS` point lights flicker in the colours of the strongest key flames, so the keys and the notes
 *   round a flame catch its light. They join the scene when the flames turn on and leave when they turn
 *   off, since a change in the number of lights recompiles every lit shader.
 * - The clock is the frame's own, apart from the song's, so a held key burns while the song pauses.
 *
 * Bounds: `FLAMES` flames at once, a noise texture of `NOISE_SIZE` cubed bytes, and `LIGHTS` point
 * lights.
 */
import {
  BoxGeometry,
  type Camera,
  Color,
  Data3DTexture,
  DynamicDrawUsage,
  Group,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  LinearFilter,
  Matrix3,
  Matrix4,
  Mesh,
  NormalBlending,
  type OrthographicCamera,
  PointLight,
  Quaternion,
  RedFormat,
  RepeatWrapping,
  ShaderMaterial,
  Vector3,
} from "three";

import { GLOW_LAYER, lightsGlow } from "./glow-source";

/** A key that burns this frame, as the scene places it in the group's space. */
export interface FlameSource {
  /** The key's pitch, which names its flame from one frame to the next. */
  readonly pitch: number;
  /** The key's centre across, its width, the height of its top and the z of its far end. */
  readonly x: number;
  readonly width: number;
  readonly top: number;
  readonly length: number;
  /** The colour of the flame, which is its note's. */
  readonly color: Color;
  /** The note's bar burning with the key, or undefined when no bar shows on the key. */
  readonly bar?: FlameBar | undefined;
}

/** A note's bar on the lanes, as the notes placed it this frame. */
export interface FlameBar {
  /** What names the bar from one frame to the next, such as its note. */
  readonly id: object;
  readonly x: number;
  readonly width: number;
  readonly top: number;
  /** The z of the bar's far end, and of its end at the hit line. */
  readonly backZ: number;
  readonly frontZ: number;
}

export interface Flames {
  readonly group: Group;
  readonly on: boolean;
  /** Turns the flames on or off. Off puts every flame out at once. */
  setOn(on: boolean): void;
  /**
   * Burns `sources` for a frame that lasted `seconds`, as `camera` sees them. A flame whose key is gone
   * dies down. `drift` is how far the bars moved towards the keys this frame, in world units.
   */
  update(seconds: number, sources: Iterable<FlameSource>, drift: number, camera: Camera): void;
  /** How many flames are alive, for tests. */
  live(): number;
  /** The flame of `id`, a key's pitch or a bar's id, for tests: its strength from 0 to 1 and its colour. */
  flameOf(id: number | object): { intensity: number; color: Color; burning: boolean } | undefined;
  dispose(): void;
}

/** The most flames alive at once. */
export const FLAMES = 48;
/** The point lights that carry the flames' light onto the piano and the notes. */
export const LIGHTS = 3;
/** Seconds a flame takes to light, and to die once its key is let go. */
export const IGNITE = 0.14;
export const EXTINGUISH = 0.4;
/** The longest stretch of a bar that burns, from its end at the hit line, in world units. */
export const BAR_BURN = 9;

/** A key flame's height, and a bar flame's, in world units at full strength. */
const KEY_FLAME_HEIGHT = 3.2;
const BAR_FLAME_HEIGHT = 1.35;
/** How far a flame leans away from the player per unit it rises. */
const LEAN = 0.32;
/** A key flame's share of its key's width, and how far it starts from the hit line and stops short of the key's end. */
const KEY_FLAME_WIDTH = 0.7;
const KEY_FLAME_START = 0.15;
const KEY_FLAME_END = 0.7;
/** How far a flame's fringe reaches past its fuel, in world units, which the shader matches. */
const FRINGE = 0.45;
/** A point light's brightness at full flame, and its reach, in world units. */
const LIGHT_POWER = 14;
const LIGHT_REACH = 9;
/** The noise texture's side in texels, and the noise's period across it in lattice cells. */
const NOISE_SIZE = 64;
const NOISE_CELLS = 8;

/** One burning key or bar. */
interface Flame {
  kind: "key" | "bar";
  /** The fuel's rectangle: its least x and z, and its most x and z. */
  x0: number;
  z0: number;
  x1: number;
  z1: number;
  /** The z of the bar's front end when its key was let go, which the dying flame never passes. */
  frontLimit: number;
  base: number;
  color: Color;
  seed: number;
  intensity: number;
  /** Seconds since it last lit, which drives the flare. */
  age: number;
  burning: boolean;
  seen: boolean;
}

/** The flames, off until `setOn` turns them on. */
export function createFlames(): Flames {
  const group = new Group();
  group.name = "flames";
  let on = false;

  const uniforms = {
    uNoise: { value: null as Data3DTexture | null },
    uTime: { value: 0 },
    uCamera: { value: new Vector3() },
    uViewDir: { value: new Vector3(0, -1, 0) },
    uOrtho: { value: 0 },
    uOctave: { value: octaveTurn() },
  };
  const fire = new VolumeMesh(FLAMES, FIRE_FRAGMENT, uniforms);
  fire.mesh.renderOrder = 2;
  fire.mesh.layers.enable(GLOW_LAYER);
  group.add(fire.mesh);

  const lights: PointLight[] = [];
  for (let i = 0; i < LIGHTS; i++) {
    const light = new PointLight(0xffffff, 0, LIGHT_REACH, 2);
    lightsGlow(light);
    lights.push(light);
  }

  const flames = new Map<number | object, Flame>();
  let seeds = 0;
  const nextSeed = () => (seeds = (seeds + 0.618034) % 1) * 37;

  const inverse = new Matrix4();
  const scratch = new Vector3();

  /** Lights `id` with this frame's fuel, colour and base, or keeps it burning. */
  const feed = (id: number | object, kind: Flame["kind"], x0: number, z0: number, x1: number, z1: number, base: number, color: Color) => {
    let flame = flames.get(id);
    if (!flame) {
      flame = { kind, x0, z0, x1, z1, frontLimit: z1, base, color: color.clone(), seed: nextSeed(), intensity: 0, age: 0, burning: true, seen: true };
      flames.set(id, flame);
    }
    if (!flame.burning) flame.age = 0;
    Object.assign(flame, { x0, z0, x1, z1, frontLimit: z1, base, burning: true, seen: true });
    flame.color.copy(color);
  };

  const ignite = () => {
    if (uniforms.uNoise.value) return;
    uniforms.uNoise.value = noiseVolume();
  };

  const putOut = () => {
    flames.clear();
    fire.write([]);
  };

  return {
    group,

    get on() {
      return on;
    },

    setOn(next) {
      if (next === on) return;
      on = next;
      if (next) {
        ignite();
        group.add(...lights);
      } else {
        putOut();
        group.remove(...lights);
      }
    },

    update(seconds, sources, drift, camera) {
      if (!on) return;
      uniforms.uTime.value += seconds;

      for (const flame of flames.values()) flame.seen = false;
      for (const source of sources) {
        const half = (source.width * KEY_FLAME_WIDTH) / 2;
        const end = Math.max(KEY_FLAME_START + 0.5, source.length - KEY_FLAME_END);
        feed(source.pitch, "key", source.x - half, KEY_FLAME_START, source.x + half, end, source.top, source.color);
        const bar = source.bar;
        if (bar && bar.frontZ - bar.backZ > 0.05) {
          const barHalf = bar.width / 2;
          const back = Math.max(bar.backZ, bar.frontZ - BAR_BURN);
          feed(bar.id, "bar", bar.x - barHalf, back, bar.x + barHalf, bar.frontZ, bar.top, source.color);
        }
      }

      for (const [id, flame] of flames) {
        flame.age += seconds;
        if (flame.seen) {
          flame.intensity = Math.min(1, flame.intensity + seconds / IGNITE);
          continue;
        }
        flame.burning = false;
        // A dying bar flame rides on with its bar, which shrinks into the hit line.
        if (flame.kind === "bar") {
          flame.z0 += drift;
          flame.z1 = Math.min(flame.z1 + drift, flame.frontLimit);
        }
        flame.intensity -= seconds / EXTINGUISH;
        if (flame.intensity <= 0 || flame.z1 - flame.z0 < 0.02) flames.delete(id);
      }

      // The camera in the group's space, which mirrors along z with reversed direction.
      group.updateWorldMatrix(true, false);
      inverse.copy(group.matrixWorld).invert();
      camera.updateMatrixWorld();
      camera.getWorldPosition(scratch);
      uniforms.uCamera.value.copy(scratch).applyMatrix4(inverse);
      uniforms.uOrtho.value = (camera as OrthographicCamera).isOrthographicCamera ? 1 : 0;
      camera.getWorldDirection(scratch);
      uniforms.uViewDir.value.copy(scratch).transformDirection(inverse);

      fire.write(flameBoxes(flames.values()));
      lightFlames([...flames.values()], lights, uniforms.uTime.value);
    },

    live() {
      return flames.size;
    },

    flameOf(id) {
      const flame = flames.get(id);
      return flame && { intensity: flame.intensity, color: flame.color, burning: flame.burning };
    },

    dispose() {
      putOut();
      fire.dispose();
      for (const light of lights) light.dispose();
      uniforms.uNoise.value?.dispose();
      group.removeFromParent();
    },
  };
}

/** One volume's box and look, as the shaders read them. */
interface VolumeBox {
  min: [number, number, number];
  max: [number, number, number];
  fuel: [number, number, number, number];
  shape: [number, number, number, number];
  life: [number, number, number, number];
  color: Color;
}

/** Each flame's box: its fuel spread by its fringe, from its base to its height, leaned back. */
function* flameBoxes(flames: Iterable<Flame>): Generator<VolumeBox> {
  for (const flame of flames) {
    if (flame.intensity <= 0) continue;
    const flare = Math.exp(-flame.age * 7) * (flame.burning ? 1 : 0);
    const full = flame.kind === "key" ? KEY_FLAME_HEIGHT : BAR_FLAME_HEIGHT;
    const height = full * (0.25 + 0.75 * flame.intensity) * (1 + 0.35 * flare);
    // A key flame is strongest at the hit line end of its fuel, and a bar flame at its front end.
    const [back, front] = flame.kind === "key" ? [1, 0.65] : [0.4, 1];
    yield {
      min: [flame.x0 - FRINGE, flame.base - 0.04, flame.z0 - FRINGE - LEAN * height],
      max: [flame.x1 + FRINGE, flame.base + height, flame.z1 + FRINGE],
      fuel: [flame.x0, flame.z0, flame.x1, flame.z1],
      shape: [flame.base, height, LEAN, flame.seed],
      life: [Math.max(0, flame.intensity), back, front, flare],
      color: flame.color,
    };
  }
}

/** Hands the point lights to the strongest key flames, each flickering in its flame's colour. */
function lightFlames(flames: Flame[], lights: readonly PointLight[], time: number): void {
  const strongest = flames
    .filter((flame) => flame.kind === "key" && flame.intensity > 0)
    .sort((a, b) => b.intensity - a.intensity)
    .slice(0, lights.length);
  lights.forEach((light, i) => {
    const flame = strongest[i];
    if (!flame) {
      light.intensity = 0;
      return;
    }
    const s = flame.seed;
    const flicker = 0.78 + 0.12 * Math.sin(time * 17 + s) + 0.07 * Math.sin(time * 29.3 + 2 * s) + 0.05 * Math.sin(time * 43.1 + 3 * s);
    light.color.copy(flame.color);
    light.intensity = LIGHT_POWER * flame.intensity * flicker;
    light.position.set((flame.x0 + flame.x1) / 2, flame.base + 1.1, flame.z0 + 0.6);
  });
}

/** A unit box drawn once per volume, whose shader marches a ray through it. */
class VolumeMesh {
  readonly mesh: Mesh<InstancedBufferGeometry, ShaderMaterial>;
  private readonly attributes: Record<"iMin" | "iMax" | "iColor" | "iFuel" | "iShape" | "iLife", InstancedBufferAttribute>;

  constructor(
    private readonly capacity: number,
    fragmentShader: string,
    uniforms: Record<string, { value: unknown }>,
  ) {
    const box = new BoxGeometry(1, 1, 1);
    const geometry = new InstancedBufferGeometry();
    geometry.index = box.index;
    geometry.setAttribute("position", box.getAttribute("position"));
    const attribute = (size: number) => {
      const made = new InstancedBufferAttribute(new Float32Array(capacity * size), size);
      made.setUsage(DynamicDrawUsage);
      return made;
    };
    this.attributes = { iMin: attribute(3), iMax: attribute(3), iColor: attribute(3), iFuel: attribute(4), iShape: attribute(4), iLife: attribute(4) };
    for (const [name, made] of Object.entries(this.attributes)) geometry.setAttribute(name, made);
    geometry.instanceCount = 0;
    const material = new ShaderMaterial({
      uniforms,
      vertexShader: VERTEX,
      fragmentShader: COMMON + fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: NormalBlending,
      premultipliedAlpha: true,
    });
    this.mesh = new Mesh(geometry, material);
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;
  }

  /** Writes `boxes`, up to the capacity, as the volumes to draw. */
  write(boxes: Iterable<VolumeBox>): void {
    const { iMin, iMax, iColor, iFuel, iShape, iLife } = this.attributes;
    let count = 0;
    for (const box of boxes) {
      if (count >= this.capacity) break;
      (iMin.array as Float32Array).set(box.min, count * 3);
      (iMax.array as Float32Array).set(box.max, count * 3);
      (iColor.array as Float32Array).set([box.color.r, box.color.g, box.color.b], count * 3);
      (iFuel.array as Float32Array).set(box.fuel, count * 4);
      (iShape.array as Float32Array).set(box.shape, count * 4);
      (iLife.array as Float32Array).set(box.life, count * 4);
      count++;
    }
    for (const made of Object.values(this.attributes)) {
      made.clearUpdateRanges();
      made.addUpdateRange(0, count * made.itemSize);
      made.needsUpdate = true;
    }
    this.mesh.geometry.instanceCount = count;
    this.mesh.visible = count > 0;
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
  }
}

/** A fixed turn and a scale of about two, from one noise octave to the next. */
function octaveTurn(): Matrix3 {
  const turn = new Quaternion().setFromAxisAngle(new Vector3(0.48, 0.71, 0.52).normalize(), 0.93);
  return new Matrix3().setFromMatrix4(new Matrix4().makeRotationFromQuaternion(turn)).multiplyScalar(2.03);
}

/**
 * A tiling cube of gradient noise, one byte a texel, `NOISE_CELLS` lattice cells across. Its lattice
 * wraps, so a texture set to repeat has no seam.
 */
export function noiseVolume(): Data3DTexture {
  const cells = NOISE_CELLS;
  const size = NOISE_SIZE;
  const per = size / cells;
  // A seeded generator, so every visit draws the same flames.
  let state = 20_240_917;
  const random = () => (state = (state * 16_807) % 2_147_483_647) / 2_147_483_647;
  const gradients = new Float32Array(cells ** 3 * 3);
  for (let i = 0; i < cells ** 3; i++) {
    const z = random() * 2 - 1;
    const angle = random() * Math.PI * 2;
    const ring = Math.sqrt(1 - z * z);
    gradients.set([ring * Math.cos(angle), ring * Math.sin(angle), z], i * 3);
  }
  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const data = new Uint8Array(size ** 3);
  for (let z = 0; z < size; z++) {
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const fx = x / per;
        const fy = y / per;
        const fz = z / per;
        const ix = Math.floor(fx);
        const iy = Math.floor(fy);
        const iz = Math.floor(fz);
        const tx = fx - ix;
        const ty = fy - iy;
        const tz = fz - iz;
        let sum = 0;
        for (let corner = 0; corner < 8; corner++) {
          const dx = corner & 1;
          const dy = (corner >> 1) & 1;
          const dz = corner >> 2;
          const g = ((((iz + dz) % cells) * cells + ((iy + dy) % cells)) * cells + ((ix + dx) % cells)) * 3;
          const dot = gradients[g]! * (tx - dx) + gradients[g + 1]! * (ty - dy) + gradients[g + 2]! * (tz - dz);
          const weight = (dx ? fade(tx) : 1 - fade(tx)) * (dy ? fade(ty) : 1 - fade(ty)) * (dz ? fade(tz) : 1 - fade(tz));
          sum += dot * weight;
        }
        data[(z * size + y) * size + x] = Math.max(0, Math.min(255, Math.round((sum / 1.8 + 0.5) * 255)));
      }
    }
  }
  const texture = new Data3DTexture(data, size, size, size);
  texture.format = RedFormat;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.wrapR = RepeatWrapping;
  texture.unpackAlignment = 1;
  texture.needsUpdate = true;
  return texture;
}

const VERTEX = /* glsl */ `
attribute vec3 iMin;
attribute vec3 iMax;
attribute vec3 iColor;
attribute vec4 iFuel;
attribute vec4 iShape;
attribute vec4 iLife;
varying vec3 vPos;
flat varying vec3 vMin;
flat varying vec3 vMax;
flat varying vec3 vColor;
flat varying vec4 vFuel;
flat varying vec4 vShape;
flat varying vec4 vLife;

void main() {
  vPos = mix(iMin, iMax, position + 0.5);
  vMin = iMin;
  vMax = iMax;
  vColor = iColor;
  vFuel = iFuel;
  vShape = iShape;
  vLife = iLife;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPos, 1.0);
}
`;

/** What a volume's shader builds on: the noise, the ray through the box, and the fuel's outline. */
const COMMON = /* glsl */ `
uniform sampler3D uNoise;
uniform float uTime;
uniform vec3 uCamera;
uniform vec3 uViewDir;
uniform float uOrtho;
uniform mat3 uOctave;
varying vec3 vPos;
flat varying vec3 vMin;
flat varying vec3 vMax;
flat varying vec3 vColor;
flat varying vec4 vFuel;
flat varying vec4 vShape;
flat varying vec4 vLife;

float noise(vec3 p) {
  return texture(uNoise, p).r;
}

/** Noise summed over octaves, each turned and twice as fine, from 0 to 1. */
float fbm(vec3 p, int octaves) {
  float sum = 0.0;
  float amplitude = 0.5;
  float total = 0.0;
  for (int i = 0; i < 4; i++) {
    if (i >= octaves) break;
    sum += amplitude * noise(p);
    total += amplitude;
    p = uOctave * p + 0.31;
    amplitude *= 0.5;
  }
  return sum / total;
}

/** A per-pixel offset of the first step, so the steps' banding turns into fine grain. */
float dither() {
  return fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
}

/** The ray from the eye through this fragment, which enters the box here. */
vec3 rayDirection() {
  return uOrtho > 0.5 ? normalize(uViewDir) : normalize(vPos - uCamera);
}

/** How far the ray runs from here until it leaves the box. */
float exitDistance(vec3 origin, vec3 direction) {
  vec3 across = vec3(
    abs(direction.x) > 1e-6 ? 1.0 / direction.x : 1e6,
    abs(direction.y) > 1e-6 ? 1.0 / direction.y : 1e6,
    abs(direction.z) > 1e-6 ? 1.0 / direction.z : 1e6
  );
  vec3 a = (vMin - origin) * across;
  vec3 b = (vMax - origin) * across;
  vec3 far = max(a, b);
  return max(min(min(far.x, far.y), far.z), 0.0);
}

/** The signed distance from the point p, across and along, to the fuel's rectangle drawn in by inset. */
float fuelEdge(vec2 p, float inset) {
  vec2 centre = 0.5 * (vFuel.xy + vFuel.zw);
  vec2 extent = max(0.5 * (vFuel.zw - vFuel.xy) - inset, vec2(0.0));
  vec2 d = abs(p - centre) - extent;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

/** The note's hue at full brightness. */
vec3 hue() {
  return vColor / max(max(vColor.r, vColor.g), max(vColor.b, 1e-3));
}
`;

/**
 * The fire: vShape is the base, the height, the lean and the seed, and vLife the strength, the fuel's
 * strength at its back and front ends, and the flare.
 */
const FIRE_FRAGMENT = /* glsl */ `
const int STEPS = 40;

/** The flame's density at p, and its heat from 0 at the tips to 1 at the core. */
float flameAt(vec3 p, out float heat) {
  heat = 0.0;
  float rise = p.y - vShape.x;
  float along = p.z + vShape.z * rise;
  float share = clamp((along - vFuel.y) / max(vFuel.w - vFuel.y, 1e-3), 0.0, 1.0);
  float height = vShape.y * mix(vLife.y, vLife.z, share);
  float h = rise / height;
  if (h < 0.0 || h > 1.0) return 0.0;
  vec2 extent = 0.5 * (vFuel.zw - vFuel.xy);
  float inset = h * 0.5 * min(extent.x, extent.y);
  float edge = fuelEdge(vec2(p.x, along), inset);
  if (edge > ${FRINGE.toFixed(2)}) return 0.0;

  float t = uTime + vShape.w;
  vec3 q = vec3(p.x, rise, along) * vec3(0.42, 0.12, 0.42) - vec3(0.0, t * 0.5, 0.0) + vShape.w;
  float warp = noise(q * 0.5 + vec3(0.0, t * 0.08, 0.0)) - 0.5;
  float n = fbm(q + vec3(warp * 0.35, 0.0, warp * 0.25), 4);
  float body = (1.0 - smoothstep(-0.12, 0.32, edge)) * pow(1.0 - h, 0.65);
  float f = body + (n - 0.5) * (0.9 + 1.0 * h) - 0.12;
  heat = clamp(f * 1.2 + vLife.w * 0.3, 0.0, 1.0) * (1.0 - 0.45 * h);
  return smoothstep(0.0, 0.3, f);
}

vec3 flameColour(vec3 tint, float heat) {
  vec3 deep = tint * tint * 0.22 + 0.015;
  vec3 core = mix(tint, vec3(1.0), 0.5) * 1.35;
  return heat < 0.5 ? mix(deep, tint, heat * 2.0) : mix(tint, core, heat * 2.0 - 1.0);
}

void main() {
  vec3 direction = rayDirection();
  float stride = exitDistance(vPos, direction) / float(STEPS);
  float offset = dither();
  vec3 tint = hue();
  vec3 light = vec3(0.0);
  float through = 1.0;
  for (int i = 0; i < STEPS; i++) {
    vec3 p = vPos + direction * ((float(i) + offset) * stride);
    float heat;
    float density = flameAt(p, heat);
    if (density <= 0.002) continue;
    float a = density * vLife.x * stride * 3.5;
    light += flameColour(tint, heat) * a * through;
    through *= exp(-a * 1.1);
    if (through < 0.03) break;
  }
  gl_FragColor = vec4(light * 1.1, (1.0 - through) * 0.28);
  #include <colorspace_fragment>
}
`;

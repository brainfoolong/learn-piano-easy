/**
 * The particles: sparks, embers and stars that rise from every pressed key, drawn on the GPU.
 *
 * World space follows the scene's contract: one unit is one white key, the hit line is z = 0, and
 * the keys reach towards the player along +z. A particle rises along `UP`, which leans away from the
 * player, so it moves on screen under every camera, the flat view's top-down one included.
 *
 * Decisions, and what each costs:
 * - A preset is a list of particle types, and any number of presets run at once. Each active type
 *   gets its own emitter, so the types of one preset can differ in texture and blending.
 * - The built-in presets are `PRESETS`. The learner's own preset is one type, edited in the settings
 *   panel's Particles section, so a settings file carries it. It has one type to keep the editor flat.
 * - Every particle moves by a closed formula of its age in the vertex shader: its start, its speed,
 *   drag, gravity, noise and turbulence. The CPU writes a particle once, at its birth, and each frame
 *   uploads only the slots it wrote.
 * - The pool holds `PARTICLE_BUDGET` particles, split evenly between the active types. Each emitter is
 *   a ring, so a full one overwrites its oldest particle and never grows.
 * - A dead slot stays in the draw, and the shader moves it out of view. A frame then costs one draw
 *   call per type, whatever number of particles live.
 * - A type rides on the keys: its amount is per key per frame at 60 frames a second, and its colour
 *   is the key's unless it sets its own. A key's fractional share carries to the next frame.
 * - The "front" layer draws without the depth test, over the piano. The "behind" layer is hidden by
 *   the keys like any other object.
 * - A settings change with the same number of types updates each emitter in place, so the particles
 *   in flight stay. A change in the number of types rebuilds the emitters, and the old particles go.
 * - The clock is the frame's own, apart from the song's, so a held key sparks while the song pauses.
 *
 * Bounds: `PARTICLE_BUDGET` particles across every emitter, each twelve floats on the CPU and the GPU,
 * and one carry per MIDI note per emitter.
 */
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  DynamicDrawUsage,
  Group,
  NormalBlending,
  Points,
  ShaderMaterial,
  type Texture,
  Vector2,
} from "three";

import type { SettingsStore } from "../settings/store";
import { GLOW_LAYER } from "./glow-source";
import { particleTexture, type ParticleTexture } from "./particle-textures";

/** The most particles alive at once, across every active type. */
export const PARTICLE_BUDGET = 20_000;

/** One kind of particle: its look, how many a key emits, and how each moves. */
export interface ParticleType {
  texture: ParticleTexture;
  blending: "normal" | "additive";
  /** The tint, or undefined to take the colour of the key that emits it. */
  color: number | undefined;
  opacity: number;
  /** The size at birth, in world units. */
  size: number;
  /** Particles per key per frame at 60 frames a second. */
  amount: number;
  /** Seconds a particle lives. */
  life: number;
  /** How fast its motion plays, 1 at its own pace. */
  speed: number;
  /** The share of its life over which it fades out, at its end. */
  fadeOut: number;
  /** The share of its size it loses by its end. Below 0 it grows. */
  shrink: number;
  /** The most sideways speed at birth, either way, in units per second. */
  speedX: number;
  /** The most rising speed at birth, in units per second. */
  speedY: number;
  /** Drag, in parts of its speed lost per second. */
  friction: number;
  /** Pull along `UP` in units per second squared. Above 0 it falls, below 0 it rises faster. */
  gravity: number;
  /** The angle at birth, its random spread either way, and its turn per second, all in degrees. */
  rotation: number;
  rotationRandom: number;
  rotationSpeed: number;
  /** Smooth noise across and up: how fine it is per unit, and how far it moves a particle in units. */
  noiseResX: number;
  noiseX: number;
  noiseResY: number;
  noiseY: number;
  /** How much the noise changes a particle's size, as a share of it. */
  noiseSize: number;
  /** A sway across and up: its reach in units and its rate in waves per second. */
  turbulenceX: number;
  turbulenceXRate: number;
  turbulenceY: number;
  turbulenceYRate: number;
  /** How far above the key top a particle is born, in units. */
  yOffset: number;
  /** Across the key's width, or at its centre. */
  distributionX: "across" | "centre";
  /** The share of the key's width a particle is born across, in per cent. */
  spread: number;
  /** On the hit line, or anywhere along the key's top. */
  distributionY: "hitLine" | "key";
  /** Behind the keys, which hide it, or in front of the whole piano. */
  layer: "behind" | "front";
}

/** A named set of particle types that runs as one. */
export interface ParticlePreset {
  /** The settings toggle that runs it. */
  readonly toggle: "particlesSparks" | "particlesEmbers" | "particlesStars";
  readonly types: readonly ParticleType[];
}

/** A pressed key that emits particles. */
export interface ParticleSource {
  pitch: number;
  /** The key's centre across, its top, and its length along +z from the hit line, in world units. */
  x: number;
  top: number;
  length: number;
  width: number;
  color: Color;
}

/** Where every particle rises: up, and leaning away from the player. */
const UP = { y: 0.8, z: -0.6 };

const BASE: ParticleType = {
  texture: "circle",
  blending: "additive",
  color: undefined,
  opacity: 1,
  size: 0.5,
  amount: 1,
  life: 1.2,
  speed: 1,
  fadeOut: 1,
  shrink: 0.6,
  speedX: 0.8,
  speedY: 3,
  friction: 1.5,
  gravity: -1,
  rotation: 0,
  rotationRandom: 180,
  rotationSpeed: 0,
  noiseResX: 0.5,
  noiseX: 0.3,
  noiseResY: 0.5,
  noiseY: 0.3,
  noiseSize: 0.5,
  turbulenceX: 0.2,
  turbulenceXRate: 0.5,
  turbulenceY: 0.2,
  turbulenceYRate: 0.5,
  yOffset: 0,
  distributionX: "across",
  spread: 100,
  distributionY: "hitLine",
  layer: "behind",
};

const type = (changes: Partial<ParticleType>): ParticleType => ({ ...BASE, ...changes });

/** The built-in presets, in the order the settings panel lists their toggles. */
export const PRESETS: readonly ParticlePreset[] = [
  {
    toggle: "particlesSparks",
    types: [type({ texture: "spark", size: 0.5, amount: 0.6, life: 0.7, speedX: 2.5, speedY: 5, friction: 1, gravity: 9, rotationRandom: 360, shrink: 0.8, fadeOut: 0.6, noiseX: 0, noiseY: 0 })],
  },
  {
    toggle: "particlesEmbers",
    types: [type({ size: 0.35, amount: 0.5, life: 2.2, speedX: 0.6, speedY: 1.5, friction: 0.8, gravity: -0.8, noiseX: 0.6, noiseY: 0.4, turbulenceX: 0.3 })],
  },
  {
    toggle: "particlesStars",
    types: [
      type({ texture: "star", size: 0.7, amount: 0.15, life: 1.4, speedX: 1.2, speedY: 3, friction: 1.2, gravity: 1, rotationRandom: 360, rotationSpeed: 180 }),
      type({ size: 0.2, amount: 0.6, life: 0.8, speedX: 1.5, speedY: 2, gravity: 2 }),
    ],
  },
];

/** The types of every preset the settings run, the learner's own last, or none while particles are off. */
export function readParticleTypes(settings: SettingsStore): ParticleType[] {
  if (!settings.get("showParticles")) return [];
  const types = PRESETS.filter((preset) => settings.get(preset.toggle)).flatMap((preset) => preset.types);
  if (settings.get("particlesCustom")) {
    const hex = settings.get("particleColor");
    types.push({
      texture: settings.get("particlesTexture"),
      blending: settings.get("particlesBlending"),
      color: settings.get("particleOverrideColor") ? Number.parseInt(hex.slice(1, 7), 16) : undefined,
      opacity: settings.get("particlesOpacity"),
      size: settings.get("particleSize"),
      amount: settings.get("particleAmount"),
      life: settings.get("particleLife"),
      speed: settings.get("particleSpeed"),
      fadeOut: settings.get("particleFadeOut"),
      shrink: settings.get("particlesShrink"),
      speedX: settings.get("particleSpeedX"),
      speedY: settings.get("particleSpeedY"),
      friction: settings.get("particlesFriction"),
      gravity: settings.get("particleRising"),
      rotation: settings.get("particlesRotation"),
      rotationRandom: settings.get("particlesRotationRandom"),
      rotationSpeed: settings.get("particlesRotationSpeed"),
      noiseResX: settings.get("particleNoiseResX"),
      noiseX: settings.get("particleNoiseStrengthX"),
      noiseResY: settings.get("particleNoiseResY"),
      noiseY: settings.get("particleNoiseStrengthY"),
      noiseSize: settings.get("particleNoiseStrengthSize"),
      turbulenceX: settings.get("turbulenceXAmplitude"),
      turbulenceXRate: settings.get("turbulenceXFrequency"),
      turbulenceY: settings.get("turbulenceYAmplitude"),
      turbulenceYRate: settings.get("turbulenceYFrequency"),
      yOffset: settings.get("particleYOffset"),
      distributionX: settings.get("particleDistributionX"),
      spread: settings.get("particleDistributionXSpread"),
      distributionY: settings.get("particleDistributionY"),
      layer: settings.get("particleDistributionZ"),
    });
  }
  return types;
}

/** One type's ring of particles, as the scene sees it. */
export interface ParticleEmitter {
  readonly type: ParticleType;
  /** The most particles it holds. */
  readonly capacity: number;
  /** How many of its particles live now. */
  live(): number;
}

export interface Particles {
  readonly group: Group;
  readonly emitters: readonly ParticleEmitter[];
  /** Runs these types, each with an equal share of the budget. */
  setTypes(types: readonly ParticleType[]): void;
  /** Moves the clock on by `seconds` and lets every source emit. */
  update(seconds: number, sources: Iterable<ParticleSource>): void;
  dispose(): void;
}

/** The particles, empty until `setTypes`. `textureOf` draws each shape, and a test may stand in for it. */
export function createParticles(textureOf: (shape: ParticleTexture) => Texture = particleTexture): Particles {
  const group = new Group();
  group.name = "particles";
  let emitters: Emitter[] = [];
  let clock = 0;

  return {
    group,
    get emitters() {
      return emitters;
    },

    setTypes(types) {
      if (types.length === emitters.length) {
        types.forEach((next, i) => emitters[i]!.setType(next, textureOf(next.texture)));
        return;
      }
      for (const emitter of emitters) emitter.dispose();
      const capacity = types.length === 0 ? 0 : Math.floor(PARTICLE_BUDGET / types.length);
      emitters = types.map((next) => new Emitter(next, capacity, textureOf(next.texture), () => clock));
      for (const emitter of emitters) group.add(emitter.points);
    },

    update(seconds, sources) {
      clock += seconds;
      if (emitters.length === 0) return;
      const list = [...sources];
      for (const emitter of emitters) emitter.emit(seconds, list);
    },

    dispose() {
      for (const emitter of emitters) emitter.dispose();
      emitters = [];
      group.removeFromParent();
    },
  };
}

/** A particle never born is this far in the past, so it reads as long dead. */
const NEVER = -1e9;
const drawingBuffer = new Vector2();

class Emitter implements ParticleEmitter {
  readonly points: Points<BufferGeometry, ShaderMaterial>;
  type: ParticleType;
  private readonly origin: BufferAttribute;
  private readonly velocity: BufferAttribute;
  private readonly birth: BufferAttribute;
  private readonly seed: BufferAttribute;
  private readonly color: BufferAttribute;
  /** The next slot to write, and the fractional particle each MIDI note carries to the next frame. */
  private next = 0;
  private readonly carry = new Float64Array(128);

  constructor(
    type: ParticleType,
    readonly capacity: number,
    texture: Texture,
    private readonly now: () => number,
  ) {
    this.type = type;
    const geometry = new BufferGeometry();
    const attribute = (size: number) => new BufferAttribute(new Float32Array(capacity * size), size).setUsage(DynamicDrawUsage);
    this.origin = attribute(3);
    this.velocity = attribute(3);
    this.birth = attribute(1);
    this.seed = attribute(2);
    this.color = attribute(3);
    (this.birth.array as Float32Array).fill(NEVER);
    geometry.setAttribute("position", this.origin);
    geometry.setAttribute("velocity", this.velocity);
    geometry.setAttribute("birth", this.birth);
    geometry.setAttribute("seed", this.seed);
    geometry.setAttribute("color", this.color);
    const material = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: 1 },
        uMap: { value: texture },
        uLife: { value: 1 },
        uMotion: { value: [0, 0, 0] },
        uUp: { value: [0, UP.y, UP.z] },
        uLook: { value: [0, 0, 0, 0] },
        uSpin: { value: [0, 0, 0] },
        uNoise: { value: [0, 0, 0, 0, 0] },
        uSway: { value: [0, 0, 0, 0] },
      },
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      transparent: true,
      depthWrite: false,
    });
    this.points = new Points(geometry, material);
    // The particles move in the shader, so their bounds on the CPU never hold.
    this.points.frustumCulled = false;
    this.points.onBeforeRender = (renderer, _scene, camera) => {
      // A point's size is in the target's pixels, and the glow draws into a smaller target.
      const target = renderer.getRenderTarget();
      const height = target ? target.height : renderer.getDrawingBufferSize(drawingBuffer).y;
      material.uniforms.uScale!.value = height * 0.5 * camera.projectionMatrix.elements[5]!;
      material.uniforms.uTime!.value = this.now();
    };
    this.setType(type, texture);
  }

  setType(type: ParticleType, texture: Texture): void {
    this.type = type;
    const { material } = this.points;
    const u = material.uniforms;
    const degrees = Math.PI / 180;
    u.uMap!.value = texture;
    u.uLife!.value = type.life;
    u.uMotion!.value = [type.speed, Math.max(type.friction, 1e-3), type.gravity];
    u.uLook!.value = [type.size, type.shrink, type.fadeOut, type.opacity];
    u.uSpin!.value = [type.rotation * degrees, type.rotationRandom * degrees, type.rotationSpeed * degrees];
    u.uNoise!.value = [type.noiseResX, type.noiseX, type.noiseResY, type.noiseY, type.noiseSize];
    u.uSway!.value = [type.turbulenceX, type.turbulenceXRate, type.turbulenceY, type.turbulenceYRate];
    material.blending = type.blending === "additive" ? AdditiveBlending : NormalBlending;
    // Additive particles are light, so they light the glow. Others, such as smoke, do not.
    if (type.blending === "additive") this.points.layers.enable(GLOW_LAYER);
    else this.points.layers.disable(GLOW_LAYER);
    material.depthTest = type.layer === "behind";
    this.points.renderOrder = type.layer === "front" ? 10 : 0;
    material.needsUpdate = true;
  }

  live(): number {
    const births = this.birth.array as Float32Array;
    const oldest = this.now() - this.type.life;
    let count = 0;
    for (let i = 0; i < this.capacity; i++) if (births[i]! > oldest) count++;
    return count;
  }

  emit(seconds: number, sources: readonly ParticleSource[]): void {
    if (this.capacity === 0) return;
    const { type } = this;
    const rate = type.amount * 60 * seconds;
    const first = this.next;
    let written = 0;
    const tint = type.color === undefined ? undefined : new Color(type.color);
    for (const source of sources) {
      const due = this.carry[source.pitch]! + rate;
      const count = Math.floor(due);
      this.carry[source.pitch] = due - count;
      for (let n = 0; n < count; n++) {
        this.write(source, tint ?? source.color);
        written++;
      }
    }
    if (written > 0) this.upload(first, written);
  }

  private write(source: ParticleSource, tint: Color): void {
    const { type } = this;
    const i = this.next;
    this.next = (this.next + 1) % this.capacity;
    const across = type.distributionX === "across" ? (Math.random() - 0.5) * source.width * (type.spread / 100) : 0;
    const along = type.distributionY === "key" ? Math.random() * source.length * 0.9 : -0.05;
    (this.origin.array as Float32Array).set([source.x + across, source.top + type.yOffset + 0.02, along], i * 3);
    const rise = type.speedY * (0.5 + 0.5 * Math.random());
    const side = (Math.random() * 2 - 1) * type.speedX;
    const depth = (Math.random() * 2 - 1) * type.speedX * 0.4;
    (this.velocity.array as Float32Array).set([side, rise * UP.y, rise * UP.z + depth], i * 3);
    (this.birth.array as Float32Array)[i] = this.now();
    (this.seed.array as Float32Array).set([Math.random(), Math.random()], i * 2);
    (this.color.array as Float32Array).set([tint.r, tint.g, tint.b], i * 3);
  }

  /** Uploads the `count` slots written from `first`, which may wrap round the ring. */
  private upload(first: number, count: number): void {
    for (const attribute of [this.origin, this.velocity, this.birth, this.seed, this.color]) {
      const size = attribute.itemSize;
      attribute.clearUpdateRanges();
      if (count >= this.capacity) attribute.addUpdateRange(0, this.capacity * size);
      else if (first + count <= this.capacity) attribute.addUpdateRange(first * size, count * size);
      else {
        attribute.addUpdateRange(first * size, (this.capacity - first) * size);
        attribute.addUpdateRange(0, (first + count - this.capacity) * size);
      }
      attribute.needsUpdate = true;
    }
  }

  dispose(): void {
    this.points.geometry.dispose();
    this.points.material.dispose();
    this.points.removeFromParent();
  }
}

const VERTEX = /* glsl */ `
uniform float uTime;
uniform float uScale;
uniform float uLife;
uniform vec3 uMotion;
uniform vec3 uUp;
uniform vec4 uLook;
uniform vec3 uSpin;
uniform float uNoise[5];
uniform vec4 uSway;
attribute vec3 velocity;
attribute float birth;
attribute vec2 seed;
attribute vec3 color;
varying vec3 vColor;
varying float vAlpha;
varying float vAngle;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 s = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, s.x), mix(c, d, s.x), s.y) * 2.0 - 1.0;
}

void main() {
  float age = uTime - birth;
  float lived = age / uLife;
  if (age < 0.0 || lived >= 1.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }
  float t = age * uMotion.x;
  float k = uMotion.y;
  vec3 pull = -uUp * uMotion.z / k;
  vec3 p = position + pull * t + (velocity - pull) * (1.0 - exp(-k * t)) / k;

  float ramp = min(t, 1.0);
  vec3 across = vec3(1.0, 0.0, 0.0);
  p += across * uNoise[1] * noise(vec2(position.x * uNoise[0] + seed.x * 17.0, t * 0.7)) * ramp;
  p += uUp * uNoise[3] * noise(vec2(position.x * uNoise[2] + seed.y * 23.0, t * 0.7 + 5.0)) * ramp;
  p += across * uSway.x * sin(6.2832 * (uSway.y * t + seed.x)) * ramp;
  p += uUp * uSway.z * sin(6.2832 * (uSway.w * t + seed.y)) * ramp;

  vec4 view = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * view;
  float size = uLook.x * max(0.0, 1.0 - uLook.y * lived) * (1.0 + uNoise[4] * noise(vec2(seed.x * 31.0, t)));
  bool perspective = projectionMatrix[2][3] == -1.0;
  gl_PointSize = max(0.0, size) * (perspective ? uScale / -view.z : uScale);

  float fadeFrom = 1.0 - uLook.z;
  vAlpha = uLook.w * (lived <= fadeFrom ? 1.0 : 1.0 - (lived - fadeFrom) / max(uLook.z, 0.001));
  vColor = color;
  vAngle = uSpin.x + (seed.y * 2.0 - 1.0) * uSpin.y + uSpin.z * t;
}
`;

const FRAGMENT = /* glsl */ `
uniform sampler2D uMap;
varying vec3 vColor;
varying float vAlpha;
varying float vAngle;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float s = sin(vAngle);
  float o = cos(vAngle);
  vec2 uv = vec2(o * c.x - s * c.y, s * c.x + o * c.y) + 0.5;
  vec4 texel = texture2D(uMap, uv);
  float alpha = texel.a * vAlpha;
  if (alpha < 0.004) discard;
  gl_FragColor = vec4(vColor * texel.rgb, alpha);
  #include <colorspace_fragment>
}
`;

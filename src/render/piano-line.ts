/**
 * The piano line: a wave that runs above the keys and swells over each key that sounds.
 *
 * World space follows the scene's contract: one unit is one white key, the keyboard is centred on
 * x = 0, and the hit line is z = 0. The strip stands just behind the hit line and leans away from the
 * player, the way the particles rise, so it shows under every camera, the flat view's included.
 *
 * Decisions, and what each costs:
 * - The line is a fragment shader on one flat strip, so it is one draw call and one quad. The shader
 *   finds each pixel's distance to the wave and draws a smooth line with a soft glow round it.
 * - The wave's height across the keys is an envelope of `SAMPLES` samples, uploaded each frame as a
 *   one-row texture that the GPU filters smooth. Each sounding key raises a bell round its centre.
 * - The envelope rises fast and falls slowly, so a struck key swells at once and settles after.
 * - The wave travels at `speed` radians a second, with `resolution` waves to an octave's seven keys.
 * - With no key sounding the line lies flat, so it shows where it is before the first note.
 *
 * Bounds: one strip, and an envelope of `SAMPLES` floats and bytes.
 */
import {
  Color,
  DataTexture,
  LinearFilter,
  Mesh,
  PlaneGeometry,
  RedFormat,
  ShaderMaterial,
  UnsignedByteType,
} from "three";

import { lightsGlow } from "./glow-source";
import type { KeyLayout } from "./key-layout";
import { BLACK_KEY_TOP } from "./piano-geometry";

export interface PianoLineOptions {
  enabled: boolean;
  /** How fast the wave travels, in radians a second. */
  speed: number;
  /** Waves to an octave. */
  resolution: number;
  /** The wave's height over a key that sounds at full strength, in world units. */
  amplitude: number;
  color: number;
  opacity: number;
  /** How far above its resting place the line runs, in world units. */
  yOffset: number;
}

export interface PianoLine {
  readonly mesh: Mesh;
  setLayout(layout: KeyLayout): void;
  setOptions(options: PianoLineOptions): void;
  /** Moves the wave on by `seconds`, with a bell over the centre of each key in `centres`. */
  update(seconds: number, centres: Iterable<number>): void;
  dispose(): void;
}

/** The envelope's samples across the keyboard. */
const SAMPLES = 256;
/** A key's bell, as its spread either side in world units. */
const BELL = 0.7;
/** How fast the envelope rises and falls, in its full height per second. */
const RISE = 12;
const FALL = 2.5;
/** The line's resting height above the white key tops, and the strip's room above and below the wave. */
const REST = BLACK_KEY_TOP + 0.45;
const ROOM = 0.4;
/** The strip leans away from the player by this angle, as the particles rise. */
const LEAN = -Math.asin(0.6);

/** The piano line, hidden until it is enabled and laid out. */
export function createPianoLine(): PianoLine {
  const level = new Float32Array(SAMPLES);
  const bytes = new Uint8Array(SAMPLES);
  const envelope = new DataTexture(bytes, SAMPLES, 1, RedFormat, UnsignedByteType);
  envelope.magFilter = LinearFilter;
  envelope.minFilter = LinearFilter;
  envelope.needsUpdate = true;

  const material = new ShaderMaterial({
    uniforms: {
      uEnvelope: { value: envelope },
      uPhase: { value: 0 },
      uWaves: { value: 1 },
      uAmplitude: { value: 1 },
      uSize: { value: [1, 1] },
      uColor: { value: new Color() },
      uOpacity: { value: 1 },
    },
    vertexShader: VERTEX,
    fragmentShader: FRAGMENT,
    transparent: true,
    depthWrite: false,
  });
  const geometry = new PlaneGeometry(1, 1);
  const mesh = new Mesh(geometry, material);
  mesh.name = "piano-line";
  mesh.rotation.x = LEAN;
  mesh.visible = false;
  // The strip is drawn after the piano, so its glow lies over the key tops.
  mesh.renderOrder = 5;
  lightsGlow(mesh);

  let width = 0;
  let enabled = false;
  let speed = 0;
  let amplitude = 1;
  let yOffset = 0;

  const place = () => {
    const height = 2 * (amplitude + ROOM);
    mesh.scale.set(width, height, 1);
    material.uniforms.uSize!.value = [width, height];
    mesh.position.set(0, REST + yOffset, -0.05);
    mesh.visible = enabled && width > 0;
  };

  return {
    mesh,

    setLayout(layout) {
      width = layout.width;
      place();
    },

    setOptions(options) {
      enabled = options.enabled;
      speed = options.speed;
      amplitude = options.amplitude;
      yOffset = options.yOffset;
      const u = material.uniforms;
      u.uWaves!.value = (options.resolution * Math.PI * 2) / 7;
      u.uAmplitude!.value = options.amplitude;
      (u.uColor!.value as Color).set(options.color);
      u.uOpacity!.value = options.opacity;
      place();
    },

    update(seconds, centres) {
      if (!mesh.visible) return;
      material.uniforms.uPhase!.value = ((material.uniforms.uPhase!.value as number) + seconds * speed) % (Math.PI * 2000);
      const keys = [...centres];
      let changed = false;
      for (let i = 0; i < SAMPLES; i++) {
        const x = ((i + 0.5) / SAMPLES - 0.5) * width;
        let target = 0;
        for (const centre of keys) {
          const d = (x - centre) / BELL;
          target = Math.max(target, Math.exp(-d * d));
        }
        const now = level[i]!;
        const next = target > now ? Math.min(target, now + RISE * seconds) : Math.max(target, now - FALL * seconds);
        if (next === now) continue;
        level[i] = next;
        bytes[i] = Math.round(next * 255);
        changed = true;
      }
      if (changed) envelope.needsUpdate = true;
    },

    dispose() {
      envelope.dispose();
      material.dispose();
      geometry.dispose();
      mesh.removeFromParent();
    },
  };
}

const VERTEX = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const FRAGMENT = /* glsl */ `
uniform sampler2D uEnvelope;
uniform float uPhase;
uniform float uWaves;
uniform float uAmplitude;
uniform vec2 uSize;
uniform vec3 uColor;
uniform float uOpacity;
varying vec2 vUv;

void main() {
  float x = (vUv.x - 0.5) * uSize.x;
  float y = (vUv.y - 0.5) * uSize.y;
  float swell = texture2D(uEnvelope, vec2(vUv.x, 0.5)).r;
  float wave = swell * uAmplitude * sin(x * uWaves - uPhase);
  float d = abs(y - wave);
  float edge = fwidth(y - wave);
  float line = 1.0 - smoothstep(0.03, 0.03 + edge * 1.5, d);
  float glow = exp(-d * d / 0.02) * 0.35;
  float alpha = max(line, glow) * uOpacity;
  if (alpha < 0.004) discard;
  gl_FragColor = vec4(uColor * (1.0 + swell), alpha);
  #include <colorspace_fragment>
}
`;

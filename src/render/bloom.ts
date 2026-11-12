/**
 * The bloom: a soft halo round the light the scene emits, laid over the frame without washing it out.
 *
 * Decisions, and what each costs:
 * - The source is a second draw of the scene at half size, of `GLOW_LAYER` alone, with the background
 *   and the fog black. Only emission, flares, particles and the piano line light it.
 * - The source is halved again into up to `LEVELS` levels with a 13-tap filter, then each level is
 *   blended into the next larger one with a tent filter. The first halving weighs each sample by its
 *   brightness's inverse, so a lone bright particle does not flicker.
 * - Each upward step keeps `1 - spread` of its own level, so the levels' weights add up to one. A large
 *   lit area then gains as much light as a thin one, instead of five times its own.
 * - The halo lands on the frame as `base + (1 - base) * (1 - exp(-gain * strength * halo))`. A pixel already
 *   at full brightness gains nothing, so a big glowing note never floods its surroundings with white.
 * - The texts of `TEXT_LAYER` are drawn at half size into a mask, and the halo is kept off where they
 *   cover the frame. The mask ignores depth, so a text hidden behind a note still keeps the halo off.
 * - The frame is read and a new one written, never blended onto in place, because three.js discards a
 *   multisampled target's samples once it resolves them.
 *
 * Bounds: a half-size source and text mask, and one target per level, each a quarter of the last.
 */
import {
  type Camera,
  Color,
  HalfFloatType,
  NoBlending,
  NormalBlending,
  type Scene,
  ShaderMaterial,
  type WebGLRenderer,
  WebGLRenderTarget,
} from "three";
import { FullScreenQuad, Pass } from "three/addons/postprocessing/Pass.js";

import { GLOW_LAYER, glowSourceDrawing, TEXT_LAYER } from "./glow-source";

/** The most levels the halo spreads over, and the smallest side a level may have, in pixels. */
const LEVELS = 6;
const SMALLEST = 8;
/** How much of each upward step comes from the wider level below it, from 0 to 1. */
const SPREAD = 0.6;
/** The halo's brightness at strength 1, so the setting's default of 0.8 gives a visible edge glow. */
const GAIN = 2;

/** A target the bloom draws into, with no depth unless it is the source. */
const target = (depth = false) => new WebGLRenderTarget(1, 1, { type: HalfFloatType, depthBuffer: depth });

export class BloomPass extends Pass {
  strength: number;
  private readonly source = target(true);
  private readonly textMask = new WebGLRenderTarget(1, 1, { depthBuffer: false });
  private levels: WebGLRenderTarget[] = [];
  private readonly quad = new FullScreenQuad();
  private readonly down = shader(DOWN, { tInput: null, uTexel: [1, 1], uKaris: 0 });
  private readonly up = shader(UP, { tInput: null, uTexel: [1, 1], uSpread: SPREAD }, true);
  private readonly composite = shader(COMPOSITE, { tBase: null, tHalo: null, tText: null, uStrength: 1 });
  private readonly savedClear = new Color();
  private readonly savedFog = new Color();

  constructor(
    private readonly scene: Scene,
    private readonly view: () => Camera,
    strength: number,
  ) {
    super();
    this.strength = strength;
  }

  override setSize(width: number, height: number): void {
    const w = Math.max(1, Math.round(width / 2));
    const h = Math.max(1, Math.round(height / 2));
    this.source.setSize(w, h);
    this.textMask.setSize(w, h);
    for (const level of this.levels) level.dispose();
    this.levels = [];
    let lw = w >> 1;
    let lh = h >> 1;
    while (this.levels.length < LEVELS && Math.min(lw, lh) >= SMALLEST) {
      const level = target();
      level.setSize(lw, lh);
      this.levels.push(level);
      lw >>= 1;
      lh >>= 1;
    }
  }

  override render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget): void {
    const autoClear = renderer.autoClear;
    renderer.autoClear = false;
    this.drawSources(renderer);

    let input = this.source;
    this.levels.forEach((level, i) => {
      this.draw(renderer, this.down, level, { tInput: input.texture, uTexel: texel(input), uKaris: i === 0 ? 1 : 0 });
      input = level;
    });
    for (let i = this.levels.length - 2; i >= 0; i--) {
      const wider = this.levels[i + 1]!;
      this.draw(renderer, this.up, this.levels[i]!, { tInput: wider.texture, uTexel: texel(wider) });
    }

    this.draw(renderer, this.composite, this.renderToScreen ? null : writeBuffer, {
      tBase: readBuffer.texture,
      tHalo: this.levels[0]?.texture ?? this.source.texture,
      tText: this.textMask.texture,
      uStrength: this.levels.length > 0 ? this.strength * GAIN : 0,
    });
    renderer.autoClear = autoClear;
  }

  override dispose(): void {
    this.source.dispose();
    this.textMask.dispose();
    for (const level of this.levels) level.dispose();
    this.down.dispose();
    this.up.dispose();
    this.composite.dispose();
    this.quad.dispose();
  }

  /** Draws the glow's source and the text mask, with the background, the fog and the layers restored after. */
  private drawSources(renderer: WebGLRenderer): void {
    const { scene } = this;
    const camera = this.view();
    const background = scene.background;
    const layers = camera.layers.mask;
    const clearAlpha = renderer.getClearAlpha();
    renderer.getClearColor(this.savedClear);
    if (scene.fog) this.savedFog.copy(scene.fog.color);

    scene.background = null;
    scene.fog?.color.setRGB(0, 0, 0);
    renderer.setClearColor(0x000000, 0);

    glowSourceDrawing.value = 1;
    camera.layers.mask = 1 << GLOW_LAYER;
    renderer.setRenderTarget(this.source);
    renderer.clear();
    renderer.render(scene, camera);
    glowSourceDrawing.value = 0;

    camera.layers.mask = 1 << TEXT_LAYER;
    renderer.setRenderTarget(this.textMask);
    renderer.clear();
    renderer.render(scene, camera);

    camera.layers.mask = layers;
    scene.background = background;
    scene.fog?.color.copy(this.savedFog);
    renderer.setClearColor(this.savedClear, clearAlpha);
  }

  /** Draws `material` over all of `into`, with `uniforms` set first. */
  private draw(
    renderer: WebGLRenderer,
    material: ShaderMaterial,
    into: WebGLRenderTarget | null,
    uniforms: Record<string, unknown>,
  ): void {
    for (const [name, value] of Object.entries(uniforms)) material.uniforms[name]!.value = value;
    this.quad.material = material;
    renderer.setRenderTarget(into);
    this.quad.render(renderer);
  }
}

const texel = (of: WebGLRenderTarget): [number, number] => [1 / of.width, 1 / of.height];

/** A full-screen shader. With `blend` set, its alpha mixes it over what the target holds. */
function shader(fragmentShader: string, uniforms: Record<string, unknown>, blend = false): ShaderMaterial {
  return new ShaderMaterial({
    uniforms: Object.fromEntries(Object.entries(uniforms).map(([name, value]) => [name, { value }])),
    vertexShader: VERTEX,
    fragmentShader,
    blending: blend ? NormalBlending : NoBlending,
    transparent: blend,
    depthTest: false,
    depthWrite: false,
  });
}

const VERTEX = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

/** Halves its input with the 13-tap filter, weighing samples by inverse brightness when `uKaris` is 1. */
const DOWN = /* glsl */ `
uniform sampler2D tInput;
uniform vec2 uTexel;
uniform float uKaris;
varying vec2 vUv;

vec3 at(float x, float y) { return texture2D(tInput, vUv + vec2(x, y) * uTexel).rgb; }
float weight(vec3 c) { return mix(1.0, 1.0 / (1.0 + dot(c, vec3(0.2126, 0.7152, 0.0722))), uKaris); }
vec3 group(vec3 a, vec3 b, vec3 c, vec3 d) {
  float wa = weight(a), wb = weight(b), wc = weight(c), wd = weight(d);
  return (a * wa + b * wb + c * wc + d * wd) / (wa + wb + wc + wd);
}

void main() {
  vec3 a = at(-2.0, 2.0), b = at(0.0, 2.0), c = at(2.0, 2.0);
  vec3 d = at(-2.0, 0.0), e = at(0.0, 0.0), f = at(2.0, 0.0);
  vec3 g = at(-2.0, -2.0), h = at(0.0, -2.0), i = at(2.0, -2.0);
  vec3 j = at(-1.0, 1.0), k = at(1.0, 1.0), l = at(-1.0, -1.0), m = at(1.0, -1.0);
  vec3 sum = group(j, k, l, m) * 0.5
    + (group(a, b, d, e) + group(b, c, e, f) + group(d, e, g, h) + group(e, f, h, i)) * 0.125;
  gl_FragColor = vec4(sum, 1.0);
}
`;

/** Widens its input with a tent filter, mixed in at `uSpread` over the level it is drawn onto. */
const UP = /* glsl */ `
uniform sampler2D tInput;
uniform vec2 uTexel;
uniform float uSpread;
varying vec2 vUv;

vec3 at(float x, float y) { return texture2D(tInput, vUv + vec2(x, y) * uTexel).rgb; }

void main() {
  vec3 sum = at(0.0, 0.0) * 4.0
    + (at(-1.0, 0.0) + at(1.0, 0.0) + at(0.0, -1.0) + at(0.0, 1.0)) * 2.0
    + at(-1.0, -1.0) + at(1.0, -1.0) + at(-1.0, 1.0) + at(1.0, 1.0);
  gl_FragColor = vec4(sum / 16.0, uSpread);
}
`;

/** Lays the halo over the frame, saturating towards full brightness, and keeps it off the texts. */
const COMPOSITE = /* glsl */ `
uniform sampler2D tBase;
uniform sampler2D tHalo;
uniform sampler2D tText;
uniform float uStrength;
varying vec2 vUv;

void main() {
  vec4 base = texture2D(tBase, vUv);
  vec3 halo = texture2D(tHalo, vUv).rgb * uStrength;
  float text = clamp(texture2D(tText, vUv).a * 2.0, 0.0, 1.0);
  vec3 room = 1.0 - min(base.rgb, 1.0);
  gl_FragColor = vec4(base.rgb + room * (1.0 - exp(-halo)) * (1.0 - text), base.a);
}
`;

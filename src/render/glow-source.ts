/**
 * The glow's source: which objects light the glow, and which texts it leaves alone.
 *
 * Decisions, and what each costs:
 * - Only what is marked with `GLOW_LAYER` is drawn into the glow. The glow then comes from the light
 *   the scene emits, and never from a lit surface, a white key or a text that happens to be bright.
 * - A lit material marked with `emitsInGlow` draws only its emission into the glow. A mesh that emits
 *   nothing still draws black there, so a key or the case hides the glow behind it. The cost is one
 *   patched shader per such material.
 * - An additive sprite or a light-drawing shader needs no patch. It is light, so it glows as drawn.
 * - A text marked with `TEXT_LAYER` keeps the glow off its letters, so a finger or a name on a lit note
 *   stays readable.
 * - The lights are marked too. A pass that culls them would change every lit shader's program.
 */
import type { Material, Object3D } from "three";

/** The layer of whatever lights the glow, or hides the glow behind it. */
export const GLOW_LAYER = 1;
/** The layer of the texts the glow leaves alone. */
export const TEXT_LAYER = 2;

/** 1 while the glow pass draws its source, when a marked material draws only its emission. */
export const glowSourceDrawing = { value: 0 };

/** Marks `objects` as part of the glow's source. */
export function lightsGlow(...objects: Object3D[]): void {
  for (const object of objects) object.layers.enable(GLOW_LAYER);
}

/** Marks `object` and everything under it as part of the glow's source. */
export function lightsGlowDeep(object: Object3D): void {
  object.traverse((child) => child.layers.enable(GLOW_LAYER));
}

/** Marks `object` as a text the glow leaves alone. */
export function keepsGlowOff(object: Object3D): void {
  object.layers.enable(TEXT_LAYER);
}

/**
 * Makes a lit material draw only its emission while the glow pass draws its source. It keeps any patch
 * the material already has, and must run after that patch is set.
 */
export function emitsInGlow<M extends Material>(material: M): M {
  const previous = material.onBeforeCompile.bind(material);
  const key = material.customProgramCacheKey();
  material.onBeforeCompile = (shader, renderer) => {
    previous(shader, renderer);
    shader.uniforms.uGlowSource = glowSourceDrawing;
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nuniform float uGlowSource;")
      .replace(
        "#include <opaque_fragment>",
        "#include <opaque_fragment>\nif (uGlowSource > 0.5) gl_FragColor = vec4(totalEmissiveRadiance, 1.0);",
      );
  };
  material.customProgramCacheKey = () => `${key}|glow-source`;
  return material;
}

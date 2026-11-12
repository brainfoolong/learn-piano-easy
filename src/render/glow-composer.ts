/**
 * The glow's composer: a render pass, the bloom pass and an output pass over a half-float target.
 *
 * `src/render/glow.ts` imports this module with `import()` the first time bloom turns on, so a scene
 * whose glow stays off loads none of the postprocessing code.
 *
 * Bounds: one composer, its two targets and three passes per call.
 */
import { type Camera, HalfFloatType, type Scene, type WebGLRenderer, WebGLRenderTarget } from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";

import { BloomPass } from "./bloom";

/** A built composer, with the passes the glow updates each frame. */
export interface GlowComposer {
  readonly composer: EffectComposer;
  readonly renderPass: RenderPass;
  readonly bloom: BloomPass;
}

/** The composer that draws `scene` through `view` with bloom at `strength`, sized in CSS pixels at `pixelRatio`. */
export function buildGlowComposer(
  renderer: WebGLRenderer,
  scene: Scene,
  view: () => Camera,
  strength: number,
  size: { width: number; height: number; pixelRatio: number },
): GlowComposer {
  const target = new WebGLRenderTarget(1, 1, { type: HalfFloatType, samples: 4 });
  const composer = new EffectComposer(renderer, target);
  const renderPass = new RenderPass(scene, view());
  composer.addPass(renderPass);
  const bloom = new BloomPass(scene, view, strength);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  composer.setPixelRatio(size.pixelRatio);
  composer.setSize(size.width, size.height);
  return { composer, renderPass, bloom };
}

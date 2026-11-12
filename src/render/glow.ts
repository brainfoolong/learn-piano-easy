/**
 * The glow: a bloom pass over the scene, and the plain render it falls back to on a low-power device.
 *
 * Decisions, and what each costs:
 * - Glow is our own `BloomPass` from `src/render/bloom.ts`. Only what `src/render/glow-source.ts` marks
 *   lights it, so the notes' emission, the hit flashes and the flares glow while the keys, the lanes
 *   and the texts stay crisp.
 * - The composer renders into a half-float target with four samples, which keeps the edges smooth
 *   that the canvas's own antialiasing smooths without bloom. The cost is two such targets on the GPU.
 * - The mode is auto, on or off. Auto starts with bloom unless the device reports low power, and it
 *   turns bloom off for the visit when frames run long, measured over a few seconds after a warm-up.
 *   Only a change of mode measures again. The scene sets the mode on every settings change, so any
 *   other setting leaves bloom off on a slow device instead of slowing its frames for seconds.
 * - The composer is built on first use and freed when bloom turns off, so the plain render holds no
 *   bloom memory.
 * - The composer's code is `src/render/glow-composer.ts`, loaded with `import()` the first time bloom
 *   is wanted. A scene whose glow stays off, such as the embed's, loads none of it. The frames until it
 *   arrives draw plain. A failed load leaves the plain render for the visit. `pending` holds while the
 *   load runs, so a scene that draws only on a change still draws the bloom once it arrives.
 *
 * Bounds: one composer and its targets while bloom is on, and none while it is off.
 */
import type { Camera, Scene, WebGLRenderer } from "three";

import type { buildGlowComposer, GlowComposer } from "./glow-composer";

export type GlowMode = "auto" | "on" | "off";

export interface Glow {
  /** Whether bloom draws now. */
  readonly active: boolean;
  /** Whether bloom is wanted but its composer is not built yet, so a later frame draws differently. */
  readonly pending: boolean;
  setMode(mode: GlowMode): void;
  setStrength(strength: number): void;
  /** Sizes the composer to the canvas, in CSS pixels at `pixelRatio`. */
  setSize(width: number, height: number, pixelRatio: number): void;
  /** Draws one frame that lasted `seconds`, with bloom when it is active. */
  render(seconds: number): void;
  dispose(): void;
}

/** Auto turns bloom off when the mean frame over a window runs longer than this, in seconds. */
const SLOW_FRAME = 1 / 40;
/** The seconds auto waits before measuring, and the length of each window it measures. */
const WARM_UP = 2;
const WINDOW = 3;
/** A frame longer than this is a pause, such as a hidden tab, and is not measured. */
const PAUSE = 0.25;

/** Whether the browser says the device saves power or is small: data saver, little memory or few cores. */
export function reportsLowPower(): boolean {
  const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };
  return nav.connection?.saveData === true || (nav.deviceMemory ?? 8) <= 2 || (nav.hardwareConcurrency ?? 8) <= 2;
}

/** The glow over `scene` as the camera `view` returns sees it, read again each frame. */
export function createGlow(renderer: WebGLRenderer, scene: Scene, view: () => Camera, mode: GlowMode = "auto"): Glow {
  let currentMode = mode;
  let strength = 0.8;
  let size = { width: 1, height: 1, pixelRatio: 1 };
  let built: GlowComposer | undefined;
  /** The composer's builder once its module has loaded, and whether the load has started. */
  let build: typeof buildGlowComposer | undefined;
  let loading = false;
  let failed = false;
  /** Whether auto has seen long frames and turned bloom off for the visit. */
  let tooSlow = false;
  let measured = 0;
  let windowTime = 0;
  let windowFrames = 0;

  const lowPower = reportsLowPower();
  const wanted = () => currentMode === "on" || (currentMode === "auto" && !tooSlow && !lowPower);

  const load = () => {
    loading = true;
    import("./glow-composer").then(
      (module) => {
        build = module.buildGlowComposer;
      },
      () => {
        failed = true;
      },
    );
  };

  const release = () => {
    built?.bloom.dispose();
    built?.composer.dispose();
    built = undefined;
  };

  /** Feeds auto's frame-time watch, which turns bloom off when the mean frame runs long. */
  const watch = (seconds: number) => {
    if (currentMode !== "auto" || tooSlow || seconds > PAUSE) return;
    measured += seconds;
    if (measured < WARM_UP) return;
    windowTime += seconds;
    windowFrames++;
    if (windowTime < WINDOW) return;
    if (windowTime / windowFrames > SLOW_FRAME) tooSlow = true;
    windowTime = 0;
    windowFrames = 0;
  };

  return {
    get active() {
      return built !== undefined;
    },

    get pending() {
      return wanted() && strength > 0 && built === undefined && !failed;
    },

    setMode(next) {
      if (next === currentMode) return;
      currentMode = next;
      tooSlow = false;
      measured = 0;
      windowTime = 0;
      windowFrames = 0;
    },

    setStrength(next) {
      strength = next;
      if (built) built.bloom.strength = next;
    },

    setSize(width, height, pixelRatio) {
      size = { width, height, pixelRatio };
      built?.composer.setPixelRatio(pixelRatio);
      built?.composer.setSize(width, height);
    },

    render(seconds) {
      watch(seconds);
      const on = wanted() && strength > 0;
      if (on && !built) {
        if (build) built = build(renderer, scene, view, strength, size);
        else if (!loading) load();
      }
      if (!on && built) release();
      const camera = view();
      if (built) {
        built.renderPass.camera = camera;
        built.composer.render(seconds);
      } else renderer.render(scene, camera);
    },

    dispose: release,
  };
}

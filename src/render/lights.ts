/**
 * The piano's lights: a cool ambient fill, a sun from above and in front, and a violet rim from behind.
 *
 * The player's scene and the piano view of `src/render/piano-keys.ts` both add them, so both pianos are
 * lit alike. The lights are marked for the glow, because a pass that culls them would change every lit
 * shader's program. A host without the glow pays nothing for the mark.
 */
import { AmbientLight, DirectionalLight, type Object3D } from "three";

import { lightsGlow } from "./glow-source";

/** The piano's three lights, marked for the glow, for the caller to add to its scene. */
export function pianoLights(): Object3D[] {
  const ambient = new AmbientLight(0xb8c6ff, 0.55);
  const sun = new DirectionalLight(0xffffff, 2.2);
  sun.position.set(-10, 30, 18);
  const rim = new DirectionalLight(0xb38cff, 1.2);
  rim.position.set(12, 8, -30);
  lightsGlow(ambient, sun, rim);
  return [ambient, sun, rim];
}

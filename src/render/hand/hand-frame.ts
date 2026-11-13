/**
 * Where the piano view's camera stands while a hand plays, and the shape of the box it fills.
 *
 * - **The player's angle** looks from the player's side, `ELEVATION` above the keys. It holds the shown
 *   keys from edge to edge, and the hand's whole range up to its wrist.
 * - **The side angle** looks from the thumb's side, a little above the keys, at the middle of the
 *   phrase. There the thumb's pass under the palm shows, which the player's angle half hides.
 * - **The box's shape follows the keys' width,** within `ASPECT`, so a wide range stays one row and a
 *   narrow one keeps room for the wrist. The page lays it out before the model loads, so nothing shifts.
 *
 * This module holds numbers only. The hand's own code loads with `import()`, and this one stays light.
 */

/** The angles the camera sees a hand from. */
export type HandAngle = "player" | "side";

/** A camera's place: its eye, the point it looks at, and its vertical field of view in degrees. */
export interface HandShot {
  eye: [number, number, number];
  target: [number, number, number];
  fov: number;
}

/** How far above the keys the player's angle looks down, in radians. */
const ELEVATION = (35 * Math.PI) / 180;
/**
 * How far the player's angle stands from its target, in world units. A far eye with a narrow field
 * keeps the forearm, which reaches towards the eye, from looming over the keys.
 */
const DISTANCE = 25.5;
/** The point the player's angle looks at: its height and its distance towards the player, in world units. */
const PLAYER_TARGET = { y: 0.5, z: 2.5 } as const;
/** Half the height the player's angle holds round its target, which keeps the wrist in view. */
const HALF_HEIGHT = 4.2;
/** The room beside the outer keys in the player's angle, in white keys. */
const SIDE_ROOM = 0.4;
/** The side angle's field of view in degrees, its target, and its eye's offset from the target, in world units. */
const SIDE_FOV = 30;
const SIDE_TARGET = { y: 0.8, z: 6 } as const;
const SIDE_EYE = { x: 14, y: 4.2, z: 4 } as const;
/** The narrowest and the widest box, as width over height. */
const ASPECT = { min: 1.4, max: 2.2 } as const;

/** The box's width over its height while a hand plays on keys `width` white keys wide. */
export function handAspect(width: number): number {
  return Math.min(ASPECT.max, Math.max(ASPECT.min, (width + 2 * SIDE_ROOM) / (2 * HALF_HEIGHT)));
}

/**
 * The camera's place for `angle`, on keys `width` wide centred on x = 0, in a box of `aspect`. `focus`
 * is the x of the phrase's middle, and `thumb` the side the playing thumb points to: -1 for the right
 * hand, whose thumb points down the keys, and 1 for the left.
 */
export function handShot(angle: HandAngle, width: number, aspect: number, focus: number, thumb: -1 | 1): HandShot {
  if (angle === "side") {
    return {
      eye: [focus + thumb * SIDE_EYE.x, SIDE_TARGET.y + SIDE_EYE.y, SIDE_TARGET.z + SIDE_EYE.z],
      target: [focus, SIDE_TARGET.y, SIDE_TARGET.z],
      fov: SIDE_FOV,
    };
  }
  // The field narrows until the keys fill the width, or the wrist's height fills the box.
  const half = Math.max(HALF_HEIGHT, (width / 2 + SIDE_ROOM) / (aspect > 0 ? aspect : 1));
  return {
    eye: [0, PLAYER_TARGET.y + DISTANCE * Math.sin(ELEVATION), PLAYER_TARGET.z + DISTANCE * Math.cos(ELEVATION)],
    target: [0, PLAYER_TARGET.y, PLAYER_TARGET.z],
    fov: (360 / Math.PI) * Math.atan(half / DISTANCE),
  };
}

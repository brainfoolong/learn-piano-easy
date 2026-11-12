/**
 * The camera rig: four presets the camera glides between, and a free orbit the learner can drag.
 *
 * The presets follow the world contract of `piano-geometry.ts`. Classic looks nearly straight down,
 * as a flat falling-notes picture does. Player looks along the lanes from the pianist's seat. Cinematic is the
 * player's view on a slow sway, so the scene keeps moving. Flat looks straight down without
 * perspective, and its keys span the screen from edge to edge.
 *
 * Decisions, and what each costs:
 * - Flat exists for a screen mounted above a real keyboard. Its own orthographic camera maps the first
 *   key's left edge to the screen's left edge and the last key's right edge to the right edge. The
 *   case, the measure numbers and the frame's shift fall outside it, so every key lines up exactly.
 * - Flat holds still. It ignores drags, so a stray touch cannot misalign it, and it never glides,
 *   so a resize keeps the keys aligned at once. A preset change to or from flat therefore jumps.
 * - Each other preset is a target point and a view direction. The rig pulls the camera back along that
 *   direction until the framed width fits the screen, so a narrow screen keeps every key in view.
 * - The camera eases towards its preset with an exponential approach, so a preset change or a resize
 *   glides instead of jumping. It settles to within a hair in about a second.
 * - A drag, a pinch or a wheel turn hands the camera to `OrbitControls`, and the preset stops driving
 *   it. A double-click or `returnToPreset` glides it back. Choosing a preset does the same. A press on
 *   a key or on the lanes never reaches the controls, because playing and scrolling take it first.
 * - `OrbitControls` loads with `import()` when the rig first takes a preset other than flat. A rig that
 *   stays flat, such as the embed's, never loads it. Loading on the first drag would lose that drag,
 *   since the controls listen only once they exist.
 * - Reversed direction mirrors the target across the hit line and keeps the view direction. The
 *   piano then sits at the top of the picture, with the notes rising towards it.
 * - The piano position lifts the target along the lanes by a share of the half-screen, which raises
 *   the piano on screen. The frame's shift moves the target sideways, and the camera with it.
 * - `update` says whether the camera moved, so the scene draws only then. A glide counts until it is
 *   within `SETTLED` of its preset, and cinematic always moves. A drag moves the camera in the controls'
 *   own handlers, between updates, so their change marks the next update as moved. So does each setter.
 *
 * Bounds: two cameras, one `OrbitControls` and two listeners on the canvas.
 */
import { OrthographicCamera, PerspectiveCamera, Vector3 } from "three";
import type { OrbitControls } from "three/addons/controls/OrbitControls.js";

export type CameraPreset = "classic" | "player" | "cinematic" | "flat";

/** What the presets frame, in world units. */
export interface CameraFrame {
  /** Half the width that must fit across the screen, centred on x = 0. */
  halfWidth: number;
  /** Half the width of the keys alone, from the first key's left edge to the last key's right edge. */
  keyHalfWidth: number;
  /** The z of the piano's front edge, before reversal. */
  pianoFront: number;
  /** Whether the scene's direction is reversed. */
  reverse: boolean;
  /** How far the piano is raised on screen, from 0 to 1. */
  lift: number;
  /** How far the view moves to the right along x, in world units. */
  shift: number;
}

export interface CameraRig {
  /** The camera that draws now: the orthographic one in flat, and the perspective one otherwise. */
  readonly camera: PerspectiveCamera | OrthographicCamera;
  readonly preset: CameraPreset;
  /** Glides to `preset`, leaving any free orbit. */
  setPreset(preset: CameraPreset): void;
  /** Glides back to the current preset after a free orbit. */
  returnToPreset(): void;
  setFrame(frame: CameraFrame): void;
  setAspect(aspect: number): void;
  /**
   * Moves the camera one frame on. `seconds` is the frame's length and `time` the clock. Returns whether
   * the camera moved since the last update, or a setter changed what it shows.
   */
  update(seconds: number, time: number): boolean;
  dispose(): void;
}

/** How fast the camera closes on its preset, per second. */
const EASE_RATE = 5;
/** A glide this close to its preset, in world units, no longer moves the picture by a visible amount. */
const SETTLED = 1e-3;
const FOV = 40;
const TAN_HALF_FOV = Math.tan(((FOV / 2) * Math.PI) / 180);
/** How high above the lanes the flat camera sits, in world units. Its height never changes the picture. */
const FLAT_HEIGHT = 100;

/** A preset's pose before fitting: where it looks and the direction from there to the camera. */
interface Pose {
  target: Vector3;
  direction: Vector3;
  /** The share of the half-width that must fit, below 1 to let a seat view crop the ends. */
  fit: number;
  /** The nearest the camera may come, in world units. */
  minDistance: number;
}

/** The rig of a camera that orbits on `canvas`. */
export function createCameraRig(canvas: HTMLElement, initial: CameraPreset = "classic"): CameraRig {
  const camera = new PerspectiveCamera(FOV, 1, 0.1, 400);
  /** The point the perspective camera looks at, which the controls orbit once they load. */
  const target = new Vector3();
  let controls: OrbitControls | undefined;
  let controlsLoading = false;
  let disposed = false;
  const loadControls = () => {
    controlsLoading = true;
    import("three/addons/controls/OrbitControls.js").then(
      ({ OrbitControls }) => {
        if (disposed) return;
        controls = new OrbitControls(camera, canvas);
        controls.target = target;
        controls.enableDamping = true;
        controls.dampingFactor = 0.08;
        controls.maxPolarAngle = Math.PI * 0.49;
        controls.minDistance = 8;
        controls.maxDistance = 160;
        controls.enabled = preset !== "flat";
        controls.addEventListener("start", onStart);
        controls.addEventListener("change", onChange);
      },
      () => {},
    );
  };
  const flat = new OrthographicCamera(-1, 1, 1, -1, 0.1, 400);
  // Straight down, with -z at the top of the screen, as the classic view has it.
  flat.up.set(0, 0, -1);

  let preset = initial;
  let frame: CameraFrame = { halfWidth: 28, keyHalfWidth: 26, pianoFront: 7, reverse: false, lift: 0, shift: 0 };
  let aspect = 1;
  /** Whether the learner holds the camera, so the preset no longer drives it. */
  let free = false;
  /** Whether the next update jumps to the preset instead of gliding, as on the first frame. */
  let snap = true;
  /** Whether a setter or the controls changed the camera since the last update. */
  let stirred = true;

  const goalPosition = new Vector3();
  const goalTarget = new Vector3();

  const onStart = () => {
    free = true;
    stirred = true;
  };
  const onChange = () => {
    stirred = true;
  };
  const onDoubleClick = () => rig.returnToPreset();
  canvas.addEventListener("dblclick", onDoubleClick);
  if (initial !== "flat") loadControls();

  /** Sets `goalPosition` and `goalTarget` to the preset's pose at clock `time`. */
  const place = (time: number) => {
    const pose = poseOf(preset, time, frame);
    const distance = Math.max(pose.minDistance, (frame.halfWidth * pose.fit) / (TAN_HALF_FOV * Math.min(aspect, 3)));
    const halfHeight = distance * TAN_HALF_FOV;
    // Classic brings the piano's front near the bottom edge. The others look a fixed way up the lanes.
    if (preset === "classic") pose.target.z = frame.pianoFront + 0.5 - halfHeight * 0.92;
    pose.target.z += frame.lift * halfHeight;
    if (frame.reverse) pose.target.z = -pose.target.z;
    pose.target.x += frame.shift;
    goalTarget.copy(pose.target);
    goalPosition.copy(pose.direction).multiplyScalar(distance).add(goalTarget);
  };

  /** Fits the flat camera's box to the keys' width and puts the piano's front at the bottom edge. */
  const placeFlat = () => {
    const halfWidth = frame.keyHalfWidth;
    const halfHeight = halfWidth / aspect;
    let z = frame.pianoFront - halfHeight + frame.lift * halfHeight;
    if (frame.reverse) z = -z;
    flat.left = -halfWidth;
    flat.right = halfWidth;
    flat.top = halfHeight;
    flat.bottom = -halfHeight;
    flat.updateProjectionMatrix();
    flat.position.set(0, FLAT_HEIGHT, z);
    flat.lookAt(0, 0, z);
  };

  const rig: CameraRig = {
    get camera() {
      return preset === "flat" ? flat : camera;
    },
    get preset() {
      return preset;
    },

    setPreset(next) {
      preset = next;
      free = false;
      stirred = true;
      if (controls) controls.enabled = next !== "flat";
      else if (next !== "flat" && !controlsLoading) loadControls();
    },

    returnToPreset() {
      free = false;
      stirred = true;
    },

    setFrame(next) {
      frame = { ...next };
      stirred = true;
    },

    setAspect(next) {
      aspect = next;
      camera.aspect = next;
      camera.updateProjectionMatrix();
      stirred = true;
    },

    update(seconds, time) {
      const changed = stirred;
      stirred = false;
      if (preset === "flat") {
        placeFlat();
        return changed;
      }
      if (free && controls) {
        // The controls' own update raises their change too, which this update already reports.
        const moved = controls.update(seconds);
        stirred = false;
        return moved || changed;
      }
      place(time);
      // The gap before this step, so a glide counts as moving until it closes, and cinematic never closes.
      const moving =
        snap ||
        preset === "cinematic" ||
        camera.position.distanceTo(goalPosition) > SETTLED ||
        target.distanceTo(goalTarget) > SETTLED;
      const t = snap ? 1 : 1 - Math.exp(-EASE_RATE * Math.min(seconds, 0.1));
      snap = false;
      camera.position.lerp(goalPosition, t);
      target.lerp(goalTarget, t);
      camera.lookAt(target);
      return moving || changed;
    },

    dispose() {
      disposed = true;
      controls?.removeEventListener("start", onStart);
      controls?.removeEventListener("change", onChange);
      canvas.removeEventListener("dblclick", onDoubleClick);
      controls?.dispose();
    },
  };
  return rig;
}

/** The pose of `preset` at clock `time`, before fitting and reversal. */
function poseOf(preset: CameraPreset, time: number, frame: CameraFrame): Pose {
  switch (preset) {
    // Flat draws with its own camera and never asks for a pose. It shares classic's to keep this total.
    case "flat":
    case "classic":
      return { target: new Vector3(0, 0, 0), direction: new Vector3(0, 0.96, 0.28).normalize(), fit: 1.04, minDistance: 36 };
    case "player":
      return { target: new Vector3(0, 0, -6), direction: new Vector3(0, 0.4, 0.92).normalize(), fit: 0.8, minDistance: 34 };
    case "cinematic": {
      const yaw = 0.38 * Math.sin(time * 0.07);
      const pitch = 0.42 + 0.12 * Math.sin(time * 0.045);
      const direction = new Vector3(Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch));
      const target = new Vector3(frame.halfWidth * 0.18 * Math.sin(time * 0.05), 0, -10);
      return { target, direction, fit: 0.85, minDistance: 30 };
    }
  }
}

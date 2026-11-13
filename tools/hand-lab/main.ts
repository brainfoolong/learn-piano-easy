/**
 * The hand lab: the mascot's hands on the 3D piano, lit like the warm music room, seen from the views a
 * lesson would use. It plays the phrases of `phrases.ts` with both hands, and the keys go down in step.
 * It is a workbench for the hands' look and motion, never shipped in the app.
 *
 * The lab's own clock drives the plan, scaled by the speed, so it can pause, slow down and seek. Each
 * frame poses every hand from `planHands(...).poseAt(t)` and presses the keys the pose holds down.
 *
 * `?phrase=<name>`, `?view=<name>` and `?at=<seconds>` open the lab there, paused when `at` is given.
 * `bun run shot` takes them in `--path "./?phrase=chords"`. `window.lab` drives it for screenshots. With the lab served by `bun tools/hand-lab.ts`, one command
 * shoots the thumb passing under in the right scale from three views into `.agent-tmp/shots/`:
 *
 *   bun run shot --base http://localhost:4417/ --name hand --wait 2500 --eval "lab.seek(1.3)"
 *     --eval "lab.view('top')" --wait 300 --shot top --eval "lab.view('right')" --wait 300 --shot right
 *     --eval "lab.view('left')" --wait 300 --shot left
 *
 * `lab.report()` gives each digit's miss, joint angles, pad and target. `lab.cost()` gives the plan's
 * and the solver's mean time per played frame, in milliseconds, since the last call. A seek's frame
 * runs the solver `SEEK_PASSES` times, so it is left out.
 */
import {
  ACESFilmicToneMapping,
  Color,
  DirectionalLight,
  HemisphereLight,
  PCFShadowMap,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

import { type HandPlan, type Pose, planHands } from "../../src/render/hand/hand-plan";
import { applyPose, createHand, DIGITS, type HandRig } from "../../src/render/hand/hand-rig";
import { createPiano } from "../../src/render/piano";
import type { Hand } from "../../src/theory/fingering";
import { LAB_RANGE } from "./c-position";
import { PHRASES } from "./phrases";

/** The colour each hand's pressed keys light in. */
const KEY_COLOR: Record<Hand, number> = { right: 0x4f9de0, left: 0xe0904f };
/** The speeds the lab plays at. */
const SPEEDS = [1, 0.5, 0.25];
/** How long the lab rests after a phrase's end before it plays it again, in seconds of the phrase. */
const REPEAT_PAUSE = 1;
/** How many solver passes a seek takes, so every digit lands before the screenshot. */
const SEEK_PASSES = 4;

const params = new URLSearchParams(location.search);

const renderer = new WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = SRGBColorSpace;
renderer.toneMapping = ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFShadowMap;
document.body.prepend(renderer.domElement);

const scene = new Scene();
scene.background = new Color(0x2a1d15);
const pmrem = new PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.45;

scene.add(new HemisphereLight(0xfff0dc, 0x4a3020, 0.8));
// The window's sun, warm and soft, from the upper left behind the piano.
const sun = new DirectionalLight(0xffe0bd, 2.6);
sun.position.set(-9, 16, -4);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -12;
sun.shadow.camera.right = 12;
sun.shadow.camera.top = 12;
sun.shadow.camera.bottom = -12;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.02;
sun.shadow.radius = 5;
scene.add(sun);
const fill = new DirectionalLight(0xcfe0ff, 0.5);
fill.position.set(10, 6, 12);
scene.add(fill);

// The piano is centred on x = 0, as the plan's `contactPoint` lays out its keys.
const piano = createPiano({ range: LAB_RANGE, flare: false });
piano.group.traverse((o) => {
  o.receiveShadow = true;
});
scene.add(piano.group);

const camera = new PerspectiveCamera(32, 1, 0.1, 200);
const views: Record<string, { eye: [number, number, number]; at: [number, number, number] }> = {
  player: { eye: [0, 15, 26], at: [0, 0.5, 5] },
  top: { eye: [0, 26, 6.5], at: [0, 0, 6.5] },
  right: { eye: [16, 5, 6], at: [2.5, 0.8, 5.5] },
  left: { eye: [-16, 5, 7], at: [-2, 0.8, 5.5] },
  front: { eye: [0, 1.2, 24], at: [0, 1.2, 6] },
};

function view(name: string): void {
  const v = views[name] ?? views.player!;
  camera.position.set(...v.eye);
  camera.lookAt(new Vector3(...v.at));
  for (const button of document.querySelectorAll<HTMLButtonElement>("#views button")) button.setAttribute("aria-pressed", String(button.dataset.view === name));
}

function resize(): void {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
window.addEventListener("resize", resize);
resize();

// `?model=<file>` loads another build of the hand, from `.agent-tmp/hand/`.
const gltf = await new GLTFLoader().loadAsync(`./${params.get("model") ?? "hand.glb"}`);
const rigs: Record<Hand, HandRig> = { right: createHand(gltf, "right"), left: createHand(gltf, "left") };
for (const rig of Object.values(rigs)) scene.add(rig.root);

let name = PHRASES[params.get("phrase") ?? ""] ? params.get("phrase")! : Object.keys(PHRASES)[0]!;
let plan: HandPlan = planHands(PHRASES[name]!, piano.layout);
let clock = 0;
let speed = 1;
let playing = true;
let pose: Pose = {};
/** The pitches held down in the frame before, with the hand holding each. */
let held = new Map<number, Hand>();
/** The plan's and the solver's time summed since the last `cost()`, and the frames they span. */
const spent = { plan: 0, solve: 0, frames: 0 };

/** Poses both hands at the clock, and presses and releases the keys that changed. */
function show(passes = 1): void {
  const t0 = performance.now();
  pose = plan.poseAt(clock);
  const t1 = performance.now();
  for (const hand of ["right", "left"] as const) {
    const p = pose[hand];
    rigs[hand].root.visible = p !== undefined;
    if (p) for (let i = 0; i < passes; i++) applyPose(rigs[hand], p);
  }
  const t2 = performance.now();
  // A seek's extra passes are no frame of playing, so only a played frame counts.
  if (passes === 1) {
    spent.plan += t1 - t0;
    spent.solve += t2 - t1;
    spent.frames += 1;
  }

  const now = new Map<number, Hand>();
  for (const hand of ["right", "left"] as const) for (const pitch of pose[hand]?.down ?? []) now.set(pitch, hand);
  for (const pitch of held.keys()) if (!now.has(pitch)) piano.release(pitch);
  // A key the other hand takes over is pressed again, in that hand's colour.
  for (const [pitch, hand] of now) if (held.get(pitch) !== hand) piano.press(pitch, KEY_COLOR[hand]);
  held = now;
  controls.sync();
}

/** The phrase's length on the seek bar, with the rest before it repeats. */
const span = () => plan.end + REPEAT_PAUSE;

function choose(phrase: string): void {
  if (!PHRASES[phrase]) throw new RangeError(`The lab has no phrase ${phrase}.`);
  name = phrase;
  plan = planHands(PHRASES[phrase]!, piano.layout);
  seek(0, playing);
}

/** Sets the clock to `seconds` of the phrase and poses the hands there. It pauses unless `play` says. */
function seek(seconds: number, play = false): void {
  clock = Math.min(Math.max(seconds, 0), span());
  playing = play;
  show(SEEK_PASSES);
}

/** The plan's and the solver's mean time per frame, in milliseconds, since the last call. */
function cost(): { plan: number; solve: number; frames: number; perHand: number } {
  const frames = Math.max(1, spent.frames);
  const hands = Math.max(1, Object.keys(pose).length);
  const out = { plan: spent.plan / frames, solve: spent.solve / frames, frames: spent.frames, perHand: (spent.plan + spent.solve) / frames / hands };
  spent.plan = spent.solve = spent.frames = 0;
  return out;
}

/** How far each digit's pad is from its target, with the joint angles, for checking the solver. */
function report(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const hand of ["right", "left"] as const) {
    const p = pose[hand];
    if (!p) continue;
    for (const d of DIGITS) {
      const pad = rigs[hand].pad(d);
      const t = p.digits[d];
      const where = t ? `miss ${pad.distanceTo(t).toFixed(3)} target ${t.toArray().map((v) => v.toFixed(2))}` : "relaxed";
      out[`${hand} ${d}`] = `${where} angles ${rigs[hand].angles(d).map((v) => v.toFixed(2))} pad ${pad.toArray().map((v) => v.toFixed(2))}`;
    }
  }
  return out;
}

/** The buttons and the seek bar, kept in step with the clock. */
const controls = (() => {
  const viewBar = document.getElementById("views")!;
  for (const v of Object.keys(views)) {
    const button = document.createElement("button");
    button.textContent = v;
    button.dataset.view = v;
    button.addEventListener("click", () => view(v));
    viewBar.append(button);
  }
  const phrases = document.getElementById("phrases")!;
  for (const p of Object.keys(PHRASES)) {
    const button = document.createElement("button");
    button.textContent = p;
    button.dataset.phrase = p;
    button.addEventListener("click", () => choose(p));
    phrases.append(button);
  }
  const play = document.getElementById("play") as HTMLButtonElement;
  play.addEventListener("click", () => {
    if (!playing && clock >= span()) clock = 0;
    playing = !playing;
  });
  const speeds = document.getElementById("speeds")!;
  for (const s of SPEEDS) {
    const button = document.createElement("button");
    button.textContent = s === 1 ? "1×" : `${s}×`;
    button.dataset.speed = String(s);
    button.addEventListener("click", () => {
      speed = s;
    });
    speeds.append(button);
  }
  const bar = document.getElementById("seek") as HTMLInputElement;
  bar.addEventListener("input", () => seek(Number(bar.value) * span()));
  const time = document.getElementById("time")!;
  return {
    sync() {
      play.textContent = playing ? "pause" : "play";
      for (const b of phrases.querySelectorAll<HTMLButtonElement>("button")) b.setAttribute("aria-pressed", String(b.dataset.phrase === name));
      for (const b of speeds.querySelectorAll<HTMLButtonElement>("button")) b.setAttribute("aria-pressed", String(Number(b.dataset.speed) === speed));
      if (document.activeElement !== bar) bar.value = String(clock / span());
      time.textContent = `${clock.toFixed(2)} s`;
    },
  };
})();

view(params.get("view") ?? "player");
const at = params.get("at");
seek(at === null ? 0 : Number(at), at === null);

(window as unknown as { lab: unknown }).lab = {
  view,
  report,
  cost,
  seek,
  /** The pitches held down now, with the hand holding each. */
  held: () => Object.fromEntries(held),
  phrase: choose,
  play: () => {
    playing = true;
  },
  pause: () => {
    playing = false;
  },
  speed: (s: number) => {
    speed = s;
  },
  ready: true,
};

let last = performance.now();
function frame(now: number): void {
  const seconds = (now - last) / 1000;
  last = now;
  if (playing) {
    clock += seconds * speed;
    if (clock > span()) clock = 0;
    show();
  }
  piano.update(seconds);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

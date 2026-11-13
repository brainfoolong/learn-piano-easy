/**
 * The hand lab: the mascot's hand on the 3D piano, lit like the warm music room, seen from the views a
 * lesson would use. It is a workbench for the hand's look and motion, never shipped in the app.
 *
 * The hand holds the C position of `c-position.ts`. `?view=<name>` opens a view, and
 * `window.lab.view(name)` switches to one, so screenshots are repeatable. With the lab served by
 * `bun tools/hand-lab.ts`, one command shoots all five views into `.agent-tmp/shots/`:
 *
 *   bun run shot --base http://localhost:4417/ --name hand --wait 2500 --shot player
 *     --eval "lab.view('top')" --wait 300 --shot top --eval "lab.view('right')" --wait 300 --shot right
 *     --eval "lab.view('left')" --wait 300 --shot left --eval "lab.view('front')" --wait 300 --shot front
 *
 * `window.lab.report()` gives each digit's miss, joint angles, pad and target.
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

import { createHand, DIGITS } from "../../src/render/hand/hand-rig";
import { createPiano } from "../../src/render/piano";
import { LAB_RANGE, PLACEMENT, type Placement, poseCPosition } from "./c-position";

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

const piano = createPiano({ range: LAB_RANGE, flare: false });
piano.group.traverse((o) => {
  o.receiveShadow = true;
});
scene.add(piano.group);

const camera = new PerspectiveCamera(32, 1, 0.1, 200);
const views: Record<string, { eye: [number, number, number]; at: [number, number, number] }> = {
  player: { eye: [3, 13, 22], at: [2, 0.5, 5] },
  top: { eye: [2.2, 22, 6.5], at: [2.2, 0, 6.5] },
  right: { eye: [16, 5, 6], at: [2.5, 0.8, 5.5] },
  left: { eye: [-12, 5, 7], at: [2, 0.8, 5.5] },
  front: { eye: [2.5, 1.2, 20], at: [2.5, 1.2, 6] },
};

function view(name: string): void {
  const v = views[name] ?? views.player!;
  camera.position.set(...v.eye);
  camera.lookAt(new Vector3(...v.at));
  for (const button of document.querySelectorAll<HTMLButtonElement>("#views button")) button.setAttribute("aria-pressed", String(button.dataset.view === name));
}

const nav = document.getElementById("views")!;
for (const name of Object.keys(views)) {
  const button = document.createElement("button");
  button.textContent = name;
  button.dataset.view = name;
  button.addEventListener("click", () => view(name));
  nav.append(button);
}

function resize(): void {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
window.addEventListener("resize", resize);
resize();
view(new URLSearchParams(location.search).get("view") ?? "player");

// `?model=<file>` loads another build of the hand, from `.agent-tmp/hand/`.
const gltf = await new GLTFLoader().loadAsync(`./${new URLSearchParams(location.search).get("model") ?? "hand.glb"}`);
const hand = createHand(gltf, "right");
scene.add(hand.root);

// `?yaw=`, `?roll=`, `?lift=`, `?back=` and `?shift=` try another placement of the C position.
const params = new URLSearchParams(location.search);
const placement = { ...PLACEMENT };
for (const key of Object.keys(placement) as (keyof Placement)[]) {
  const value = params.get(key);
  if (value !== null) placement[key] = Number(value);
}
const targets = poseCPosition(hand, piano.layout, placement);

/** How far each digit's pad is from its target, and where both are, for checking the solver. */
function report(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const d of DIGITS) {
    const pad = hand.pad(d);
    const t = targets.get(d)!;
    out[d] = `miss ${pad.distanceTo(t).toFixed(3)} angles ${hand.angles(d).map((v) => v.toFixed(2))} pad ${pad.toArray().map((v) => v.toFixed(2))} target ${t.toArray().map((v) => v.toFixed(2))}`;
  }
  return out;
}

(window as unknown as { lab: unknown }).lab = { view, report, ready: true };

function frame(): void {
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
frame();

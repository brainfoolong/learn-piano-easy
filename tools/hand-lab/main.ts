/**
 * The hand lab: the mascot's hand on the 3D piano, lit like the warm music room, seen from the views a
 * lesson would use. It is a workbench for the hand's look and motion, never shipped in the app.
 *
 * `?view=<name>` opens a view, and `window.lab.view(name)` switches to one, so screenshots are repeatable.
 */
import {
  ACESFilmicToneMapping,
  Color,
  DirectionalLight,
  Euler,
  HemisphereLight,
  PCFShadowMap,
  PerspectiveCamera,
  PMREMGenerator,
  Quaternion,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

import { createHand, DIGITS, type Digit } from "../../src/render/hand/hand-rig";
import { WHITE_KEY_LENGTH } from "../../src/render/piano-geometry";
import { createPiano } from "../../src/render/piano";

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

const piano = createPiano({ range: { first: 48, last: 79 }, flare: false });
piano.group.traverse((o) => {
  o.receiveShadow = true;
});
scene.add(piano.group);

/** A key's centre in world x. */
const keyX = (pitch: number) => piano.layout.key(pitch)!.center - piano.layout.width / 2;

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

// The C position: thumb on middle C, a finger on each white key up to G, each resting on its key.
const C4 = 60;
const keys: Record<Digit, number> = { thumb: C4, index: 62, middle: 64, ring: 65, little: 67 };
/** How far in from a white key's front edge each digit plays: the fingertips lie on an arc. */
const INSET: Record<Digit, number> = { thumb: 0.8, index: 1.3, middle: 1.5, ring: 1.35, little: 0.95 };
const contactZ = (digit: Digit) => WHITE_KEY_LENGTH - INSET[digit];
const targets = new Map(DIGITS.map((d) => [d, new Vector3(keyX(keys[d]), 0.02, contactZ(d))]));

// The wrist sits behind the middle finger's key, high enough for curved fingers.
const params = new URLSearchParams(location.search);
// The hand rolls a little towards its little finger, which is short and needs the height.
const flat = new Quaternion().setFromEuler(new Euler(0, Number(params.get("yaw") ?? 0), Number(params.get("roll") ?? -0.12)));
hand.place(new Vector3(0, 0, 0), flat);
const middleRest = hand.pad("middle");
const lift = Number(new URLSearchParams(location.search).get("lift") ?? 2.6);
const back = Number(new URLSearchParams(location.search).get("back") ?? 5.0);
const shift = Number(new URLSearchParams(location.search).get("shift") ?? 0);
const wrist = new Vector3(targets.get("middle")!.x - middleRest.x + shift, lift, contactZ("middle") + back);
hand.place(wrist, flat);
for (let i = 0; i < 4; i++) for (const d of DIGITS) hand.reach(d, targets.get(d));

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

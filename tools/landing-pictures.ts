/**
 * Makes the landing page's pictures: the players of the hero and of the versions band, the devices
 * band's small piano, and the two parts, each in the light and the dark scheme, as WebP in
 * `public/images/landing/`.
 *
 * It runs `tools/shot.ts` once per picture and scheme, in English, at the picture's size. Run it again
 * whenever a picture's look changes. `bun tools/landing-pictures.ts hero rarity-epic` makes only the
 * pictures whose names it lists.
 *
 * - **A landing box's picture** is the embedded player of `src/app/embed.ts`, a few seconds into its
 *   song. The run opens the landing page, fills the window with the box of `src/landing/player-box.ts`
 *   and starts it, so the picture is the real player as the box draws it, in the box's colours. It is
 *   1200 by 900 pixels, the box's shape.
 * - **The hero** plays the hero's song. **Each version's picture** is named by the version's id, such
 *   as `rarity-epic` for Medium. It plays that version of *Ode to Joy* in the version's colour. The
 *   run first chooses the version in the band's control, by the name a visitor reads.
 * - **The devices band's small piano** is the piano view of `src/render/piano-keys.ts`, from C4 to E5
 *   with the C names, as the band's click loads it. It is 1200 by 858 pixels, the view's own shape,
 *   on the colour of the band's panel.
 * - **The two parts** are 1200 by 750 pixels.
 * - **Just Play Piano** is the player, a moment after its demo song starts, with its bar shown. Its run
 *   sets the player's own theme through its settings, since the player keeps a theme apart from the
 *   site's.
 * - **Learn Piano** is the map, with its first lesson finished at two stars. The run marks the setup
 *   done and writes that lesson's event into the page's progress log, then reloads. The map then shows
 *   a lesson done, the next one open, and the top bar's streak and XP.
 *
 *   bun tools/landing-pictures.ts
 */
import { join } from "node:path";
import { root } from "./build";

/** The folder the pictures go to, relative to the root. */
const OUT = "public/images/landing";

/**
 * A script for `--eval` that clicks the first button named `text`. The name is its `aria-label`, else
 * its text without its tooltip, since an icon button's tip repeats its hidden label.
 */
const clickButton = (text: string) =>
  `[...document.querySelectorAll("button")].find((b) => {
    const copy = b.cloneNode(true);
    for (const tip of copy.querySelectorAll("[role=tooltip]")) tip.remove();
    return (b.getAttribute("aria-label") ?? copy.textContent.trim()) === ${JSON.stringify(text)};
  }).click()`;

/** A script for `--eval` that sets the player's own theme to `scheme` through its settings panel. */
const playerTheme = (scheme: string) =>
  `(() => { const s = [...document.querySelectorAll("select")].find((s) => [...s.options].map((o) => o.value).join() === "dark,light"); s.value = ${JSON.stringify(scheme)}; s.dispatchEvent(new Event("change", { bubbles: true })); })()`;

/**
 * A script for `--eval` that marks the first-visit setup done, so its dialog never covers the map. It
 * then writes one finished lesson into the progress log of `src/learn/progress/store.ts`, and reloads.
 */
const FINISHED_LESSON = `new Promise((resolve) => {
  const stored = JSON.parse(localStorage.getItem("learn-piano-easy.settings") ?? "null") ?? { version: 1, values: {} };
  stored.values.learnSetupDone = true;
  localStorage.setItem("learn-piano-easy.settings", JSON.stringify(stored));
  const open = indexedDB.open("learn-piano-easy-progress", 1);
  open.onupgradeneeded = () => open.result.createObjectStore("events", { keyPath: "id" });
  open.onsuccess = () => {
    const tx = open.result.transaction("events", "readwrite");
    tx.objectStore("events").put({ v: 1, id: "landing", at: Date.now() - 1000, kind: "lesson", lesson: "meet-the-piano/welcome", stars: 2 });
    tx.oncomplete = () => { open.result.close(); location.reload(); resolve("ok"); };
  };
})`;

/**
 * A script for `--eval` that starts the landing box inside `band`, filled to the window. With `version`,
 * it first picks the radio of that name in the band's control. The box then moves to the page's body,
 * since a band's stacking context would keep the site bar above it.
 */
const startBox = (band: string, version?: string) => `(() => {
  const band = document.querySelector(${JSON.stringify(band)});
  const version = ${JSON.stringify(version ?? null)};
  if (version !== null) [...band.querySelectorAll("[role=radio]")].find((radio) => radio.textContent.trim() === version).click();
  const box = band.querySelector(".player-box");
  document.body.append(box);
  Object.assign(box.style, { position: "fixed", inset: "0", width: "100vw", height: "100vh", aspectRatio: "auto", border: "0", borderRadius: "0", zIndex: "2147483647" });
  box.click();
  return "started";
})()`;

/**
 * A script for `--eval` that loads the devices band's small piano with a click, then fills the window
 * with it on the panel's colour. The view moves to the page's body, as a landing box does.
 */
const START_PIANO = `(async () => {
  document.querySelector(".landing-devices__start").click();
  const frame = () => new Promise((done) => requestAnimationFrame(done));
  let view = null;
  while (view === null) {
    await frame();
    view = document.querySelector(".landing-devices__piano .piano-keys");
  }
  document.body.append(view);
  Object.assign(view.style, { position: "fixed", inset: "0", width: "100vw", height: "100vh", aspectRatio: "auto", zIndex: "2147483647", background: "var(--c-surface-1)" });
  return "loaded";
})()`;

/** The steps that shoot a landing box: start it, then let its song play a few seconds. */
const boxSteps = (band: string, version?: string) => ["--eval", startBox(band, version), "--wait", "8000"];

/** The versions band's versions: each one's id, and its English name in the band's control. */
const RARITIES = { common: "Beginner", rare: "Easy", epic: "Medium", legendary: "Hard" };

/** The page each part opens, and the steps that show it after the page has loaded in `scheme`. */
const PARTS: Record<string, { path: string; size: string; steps: (scheme: string) => string[] }> = {
  hero: { path: "./", size: "1200x900", steps: () => boxSteps(".landing-hero") },
  ...Object.fromEntries(
    Object.entries(RARITIES).map(([rarity, name]) => [
      `rarity-${rarity}`,
      { path: "./", size: "1200x900", steps: () => boxSteps(".landing-rarities", name) },
    ]),
  ),
  devices: { path: "./", size: "1200x858", steps: () => ["--eval", START_PIANO, "--wait", "1500"] },
  play: {
    path: "play/",
    size: "1200x750",
    steps: (scheme) => [
      ...["--eval", clickButton("Settings"), "--wait", "300", "--eval", playerTheme(scheme), "--eval", clickButton("Settings")],
      ...["--eval", clickButton("Play"), "--eval", "document.activeElement.blur()", "--wait", "3500"],
      // The bar fades while a song plays untouched, so a pointer move shows it again for the picture.
      ...["--eval", "window.dispatchEvent(new PointerEvent('pointermove'))", "--wait", "600"],
    ],
  },
  learn: {
    path: "learn/",
    size: "1200x750",
    steps: () => ["--eval", FINISHED_LESSON, "--wait", "2000", "--eval", "scrollTo(0, 0)", "--wait", "500"],
  },
};

const asked = process.argv.slice(2);
for (const [part, { path, size, steps }] of Object.entries(PARTS)) {
  if (asked.length > 0 && !asked.includes(part)) continue;
  for (const scheme of ["light", "dark"]) {
    const args = ["--name", part, "--path", path, "--locale", "en-US", "--size", size, "--webp", "--out", OUT];
    const run = Bun.spawn(["bun", join(root, "tools", "shot.ts"), ...args, "--scheme", scheme, "--wait", "2000", ...steps(scheme), "--shot", scheme], {
      cwd: root,
      stdout: "inherit",
      stderr: "inherit",
    });
    if ((await run.exited) !== 0) process.exit(1);
  }
}

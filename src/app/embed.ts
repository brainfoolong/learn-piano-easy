/**
 * The embedded player: the real 3D player in a box of a host page, seen from straight above.
 *
 * It builds on the core of `src/app/player-core.ts`, so its notes, keys and sound are the play page's.
 * A host imports it with `import()`, so it is a chunk of its own, loaded only when a box starts.
 *
 * - **Its settings live in memory.** It makes `new SettingsStore(null)`, so it never reads or writes the
 *   learner's settings. It sets the `flat` camera, the host's range, and no glow, particles, frame rate
 *   or tempo readout. Every other setting keeps its default.
 * - **The site's services stay the site's.** The input bus and the audio service are made with the
 *   host's `site` settings, so the sound's volume and set are the learner's, as on every other page.
 * - **Its background is the box's colour,** or that of the nearest ancestor with one. It reads the colour
 *   again when the site's theme or the system's colour scheme changes.
 * - **It fits its box.** The scene's `ResizeObserver` follows the box, and the embed never sizes the page.
 * - **`play` wakes the sound at once,** inside the host's gesture, then starts the song once it is read
 *   and the sound set is ready. A `stop` before then cancels that start.
 * - **`load` switches the song** in the same canvas, so a switch costs no new WebGL context. It stops,
 *   takes the new tracks' looks, and shows the new song from its start once it is read. A read that
 *   lands after a later `load` is dropped.
 * - **The computer keyboard plays only while it runs.** `run(false)` unbinds it, stops the frames and
 *   pauses the song, as when its box scrolls out of view.
 * - **A song that fails to load leaves the keys,** which still play.
 *
 * Its song is read on the main thread with `readMidi`, since a host's songs are small. The player's
 * parse worker is left out of the embed's load.
 */
import "./embed.css";
import { attachKeyboard } from "../input/keyboard";
import { readMidi } from "../midi/smf-read";
import { songFromMidi, type Song } from "../midi/song";
import type { KeyRange } from "../render/key-layout";
import type { TrackLook } from "../render/scene";
import { SettingsStore } from "../settings/store";
import { audioService, inputService } from "../site/services";
import { createPlayerCore } from "./player-core";

/** What an embed plays, and how. */
export interface EmbedOptions {
  /** The song's MIDI file, by its path relative to the site's root. */
  song: string;
  /** The keys the piano draws. */
  range: KeyRange;
  /** Each track's look, by track index. A track the list lacks shows in its built-in colour. */
  tracks?: readonly TrackLook[];
  /** Whether the song starts again at its end. */
  loop?: boolean;
  /** The site's settings, which the site's input and audio services are made with. */
  site: SettingsStore;
}

/** A running embed, which its host plays, stops and ends. */
export interface EmbeddedPlayer {
  /** Plays the song from where it stands, once it is read and the sound set is ready. */
  play(): void;
  /** Stops the song and returns to its start. */
  stop(): void;
  /** Stops, and loads the song at `song` from its start, with `tracks` as its tracks' looks when given. */
  load(song: string, tracks?: readonly TrackLook[]): void;
  /** Starts or stops the frames, the sound and the computer keyboard, as while its box hides. */
  run(on: boolean): void;
  /** Ends the embed, and removes its canvas from the box. */
  dispose(): void;
}

/** A MIDI file of one empty track, at 480 ticks a beat. */
const EMPTY_MIDI = new Uint8Array([
  ...[0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 0, 0, 1, 0x01, 0xe0],
  ...[0x4d, 0x54, 0x72, 0x6b, 0, 0, 0, 4, 0, 0xff, 0x2f, 0],
]);

/** The colour of `box` as `#rrggbbff`, from the nearest element up from it whose background shows. */
function backgroundOf(box: HTMLElement): string {
  const probe = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  let at: Element | null = box;
  while (at !== null && probe !== null) {
    probe.clearRect(0, 0, 1, 1);
    probe.fillStyle = getComputedStyle(at).backgroundColor;
    probe.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = probe.getImageData(0, 0, 1, 1).data;
    if (a === 255) return `#${[r, g, b].map((part) => part!.toString(16).padStart(2, "0")).join("")}ff`;
    at = at.parentElement;
  }
  return "#000000ff";
}

/** Reads the song at `path`, or undefined when it cannot be had. */
async function readSong(path: string): Promise<Song | undefined> {
  try {
    const response = await fetch(path);
    if (!response.ok) return undefined;
    return songFromMidi(readMidi(new Uint8Array(await response.arrayBuffer())));
  } catch {
    return undefined;
  }
}

/** Embeds the player into `box`, playing `options.song`. It starts stopped, with its frames running. */
export function embedPlayer(box: HTMLElement, options: EmbedOptions): EmbeddedPlayer {
  const settings = new SettingsStore(null);
  settings.set("cameraPreset", "flat");
  settings.set("keyboardFirstNote", options.range.first);
  settings.set("keyboardLastNote", options.range.last);
  settings.set("glowMode", "off");
  settings.set("showParticles", false);
  settings.set("showFps", false);
  settings.set("showBPM", false);
  settings.set("pianoBackgroundColor", backgroundOf(box));

  const { bus } = inputService(options.site);
  const audio = audioService(options.site);
  const core = createPlayerCore(box, settings, bus, audio);
  const { scene, transport } = core;
  const canvas = scene.canvas;
  box.classList.add("player-embed");
  transport.restartOnEnd = options.loop === true;
  /** Counts each `play`, `stop` and `load`, so a play that waits starts only if nothing came after it. */
  let asked = 0;
  /** Counts each read, so only the latest one loads its song. */
  let reads = 0;
  let disposed = false;

  // A song with no notes shows until the real one is read, so the scene's demo song never plays here.
  scene.setSong(songFromMidi(readMidi(EMPTY_MIDI)));
  if (options.tracks !== undefined) scene.setTracks(options.tracks);
  /** Reads the song at `path` and loads it, unless a later read or the end came first. */
  const read = (path: string) => {
    const mine = ++reads;
    return readSong(path).then((song) => {
      if (song !== undefined && !disposed && mine === reads) transport.load(song);
    });
  };
  let loading = read(options.song);

  const theme = () => settings.set("pianoBackgroundColor", backgroundOf(box));
  const scheme = matchMedia("(prefers-color-scheme: dark)");
  scheme.addEventListener("change", theme);
  const themes = new MutationObserver(theme);
  themes.observe(document.documentElement, { attributes: true, attributeFilter: ["data-site-theme"] });

  let frame = 0;
  const tick = () => {
    transport.tick();
    frame = requestAnimationFrame(tick);
  };
  let stopKeys: (() => void) | undefined;
  const start = () => {
    frame = requestAnimationFrame(tick);
    stopKeys = attachKeyboard(bus, settings);
  };
  const halt = () => {
    cancelAnimationFrame(frame);
    stopKeys?.();
    stopKeys = undefined;
  };
  start();

  return {
    play() {
      const ask = ++asked;
      void audio.engine.resume();
      void Promise.all([loading, audio.engine.ready]).then(() => {
        if (ask === asked && !disposed && core.running) transport.play();
      });
    },
    stop() {
      asked++;
      transport.stop();
    },
    load(song, tracks) {
      asked++;
      transport.stop();
      if (tracks !== undefined) scene.setTracks(tracks);
      loading = read(song);
    },
    run(on) {
      if (on === core.running || disposed) return;
      core.run(on);
      if (on) start();
      else halt();
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      halt();
      scheme.removeEventListener("change", theme);
      themes.disconnect();
      core.dispose();
      canvas.remove();
      box.classList.remove("player-embed");
    },
  };
}

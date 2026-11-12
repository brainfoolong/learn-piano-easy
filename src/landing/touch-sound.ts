/**
 * The landing page's sound for pressed keys: a key a visitor presses plays, and nothing sounds before.
 *
 * Every keyboard of the landing page that plays, such as the devices band's, takes its `press` and
 * `release`.
 * The audio engine starts on the first press, or on `start`, since browsers allow sound only after a
 * gesture. That gesture also loads `src/site/services.ts`, so the landing page loads no audio code
 * before it. Each caller gets the site's one audio service.
 *
 * A key let go before the engine is ready never sounds, because the press is dropped then.
 */
import type { SettingsStore } from "../settings/store";
import type { AudioService } from "../site/services";

/** The velocity of a key the visitor presses, from 0 to 127. */
const PRESS_VELOCITY = 96;

/** Keys that sound when pressed, on the site's audio service. */
export interface TouchSound {
  /** Starts the audio engine, once, and resolves to its service once its sound set is ready. */
  start(): Promise<AudioService>;
  /** The service once `start` or a press has run, and `undefined` before. */
  started(): Promise<AudioService> | undefined;
  /** Plays `pitch` once the engine is ready, unless the key is let go first. */
  press(pitch: number): void;
  /** Lets `pitch` go. */
  release(pitch: number): void;
}

/** A touch sound on the audio service of `settings`. */
export function touchSound(settings: SettingsStore): TouchSound {
  let audio: Promise<AudioService> | undefined;
  const start = () =>
    (audio ??= import("../site/services").then(async ({ audioService }) => {
      const service = audioService(settings);
      await service.engine.resume();
      // The sampler drops a note while it has no sound set, so a press waits for the set.
      await service.engine.ready;
      return service;
    }));
  const held = new Set<number>();
  return {
    start,
    started: () => audio,
    press(pitch) {
      held.add(pitch);
      void start().then(({ engine }) => {
        if (held.has(pitch)) void engine.input.noteOn(pitch, PRESS_VELOCITY);
      });
    },
    release(pitch) {
      held.delete(pitch);
      void audio?.then(({ engine }) => engine.input.noteOff(pitch));
    },
  };
}

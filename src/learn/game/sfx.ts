/**
 * The game's sounds: a chime for each reward of *Learn Piano*, made by Web Audio with no sound files.
 *
 * - **The cues:** `step`, two quick notes for a step passed. `star`, one bright note per star, rising
 *   with its index. `xp`, a soft tick as the XP counts. `level`, a rising arpeggio and its chord.
 *   `badge`, a sparkle of four high notes.
 * - **Each note is one oscillator** with a short attack and an exponential decay, stopped once it is
 *   silent. A cue makes at most six notes, so a burst of cues stays small.
 * - **The cues play into the engine's bus** of `src/audio/engine.ts`, so the main volume sets them,
 *   and the piano's own gains never touch them.
 * - **The `learnSounds` setting mutes them,** read at each cue, and the piano's notes keep sounding.
 *
 * Decisions, and what each costs:
 * - **Synthesis, never samples.** A cue costs no download and no license, and its timbre is plain.
 * - **A cue waits for the audio context to wake.** A browser holds audio until a gesture, and every
 *   reward follows one, so a cue is at most a frame late.
 * - **The profile's switch sets `learnSounds`,** in `src/learn/profile-view.ts`.
 */
import type { SettingsStore } from "../../settings/store";
import { audioService } from "../../site/services";

/** A reward's sound. */
export type Cue = "step" | "star" | "xp" | "level" | "badge";

/** One note of a cue: when after the cue it starts, its pitch as a MIDI note, how long it rings, and how loud. */
interface Tone {
  at: number;
  note: number;
  seconds: number;
  gain: number;
}

/** The peak gain of a cue's note, under the piano's so a reward never drowns it. */
const PEAK = 0.12;

/** The notes of each cue, the `star` cue's first star. */
const CUES: Record<Cue, readonly Tone[]> = {
  step: [
    { at: 0, note: 84, seconds: 0.18, gain: PEAK },
    { at: 0.08, note: 91, seconds: 0.3, gain: PEAK },
  ],
  star: [{ at: 0, note: 88, seconds: 0.5, gain: PEAK }],
  xp: [{ at: 0, note: 96, seconds: 0.06, gain: PEAK * 0.4 }],
  level: [
    { at: 0, note: 72, seconds: 0.25, gain: PEAK },
    { at: 0.1, note: 76, seconds: 0.25, gain: PEAK },
    { at: 0.2, note: 79, seconds: 0.25, gain: PEAK },
    { at: 0.3, note: 84, seconds: 0.9, gain: PEAK },
    { at: 0.3, note: 76, seconds: 0.9, gain: PEAK * 0.6 },
    { at: 0.3, note: 79, seconds: 0.9, gain: PEAK * 0.6 },
  ],
  badge: [
    { at: 0, note: 91, seconds: 0.3, gain: PEAK * 0.8 },
    { at: 0.07, note: 95, seconds: 0.3, gain: PEAK * 0.8 },
    { at: 0.14, note: 98, seconds: 0.3, gain: PEAK * 0.8 },
    { at: 0.21, note: 103, seconds: 0.7, gain: PEAK * 0.8 },
  ],
};

/** The semitones each next star rises above the first, so three stars climb a major triad. */
const STAR_STEPS = [0, 4, 7];

/** The frequency of MIDI note `note`, in hertz. */
function hertz(note: number): number {
  return 440 * 2 ** ((note - 69) / 12);
}

/** The game's sounds on the audio service of `settings`. */
export interface GameSounds {
  /** Plays `cue`, `delayMs` from now. `index` raises a `star` to its place in the row. */
  play(cue: Cue, options?: { delayMs?: number; index?: number }): void;
}

/** The game's sounds of `settings`, muted while its `learnSounds` is off. */
export function gameSounds(settings: SettingsStore): GameSounds {
  return {
    play(cue, options = {}) {
      if (!settings.get("learnSounds")) return;
      const { engine } = audioService(settings);
      void engine.resume().then(
        () => {
          const context = engine.context;
          const start = context.currentTime + (options.delayMs ?? 0) / 1000;
          const lift = cue === "star" ? (STAR_STEPS[options.index ?? 0] ?? 0) : 0;
          for (const tone of CUES[cue]) {
            const at = start + tone.at;
            const oscillator = context.createOscillator();
            oscillator.type = "triangle";
            oscillator.frequency.value = hertz(tone.note + lift);
            const gain = context.createGain();
            gain.gain.setValueAtTime(0.0001, at);
            gain.gain.exponentialRampToValueAtTime(tone.gain, at + 0.008);
            gain.gain.exponentialRampToValueAtTime(0.0001, at + tone.seconds);
            oscillator.connect(gain).connect(engine.bus);
            oscillator.start(at);
            oscillator.stop(at + tone.seconds + 0.02);
            oscillator.onended = () => gain.disconnect();
          }
        },
        () => {},
      );
    },
  };
}

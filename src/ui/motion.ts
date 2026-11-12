/**
 * The motion helpers: animations by token, page changes, and the learner's wish for reduced motion.
 *
 * An animation takes its duration and easing from the tokens in `src/ui/tokens.css`, read from the
 * root's computed style, so a timing has one home. A keyframe may hold only `transform` and `opacity`,
 * which the type enforces, so no animation moves the layout.
 *
 * With `prefers-reduced-motion`, a move becomes a short fade: `animate` keeps only the opacity of each
 * keyframe at the micro duration, and plays once. An animation with no opacity then does not run.
 * A page change cross-fades through the View Transitions API where the browser has it, and shows at
 * once without it or with reduced motion.
 */

/** A duration token of the motion scale. */
export type Duration = "micro" | "small" | "medium" | "large" | "reward";

/** An easing token: `standard` for most moves, `emphasis` for what enters the screen. */
export type Easing = "standard" | "emphasis";

/** A keyframe that moves nothing in the layout. */
export interface Keyframe {
  transform?: string;
  opacity?: number;
  offset?: number;
}

/** Whether the learner asked their system for reduced motion. */
export function prefersReducedMotion(): boolean {
  return typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** The value of a root token, such as `--m-medium`, as the page computes it. */
function token(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

/** The milliseconds of a duration token. */
export function durationMs(duration: Duration): number {
  const text = token(`--m-${duration}`);
  const ms = Number.parseFloat(text);
  if (!Number.isFinite(ms)) throw new Error(`The duration token --m-${duration} is missing from the page's styles.`);
  return text.endsWith("ms") ? ms : ms * 1000;
}

/**
 * Animates `element` through `keyframes`, timed by tokens. Returns the animation, or `null` when
 * reduced motion leaves nothing to show.
 */
export function animate(
  element: Element,
  keyframes: Keyframe[],
  options: { duration: Duration; easing?: Easing; delayMs?: number; iterations?: number },
): Animation | null {
  const reduced = prefersReducedMotion();
  const frames = reduced ? fades(keyframes) : keyframes;
  if (frames.length === 0) return null;
  return element.animate(frames as globalThis.Keyframe[], {
    duration: durationMs(reduced ? "micro" : options.duration),
    easing: token(`--ease-${options.easing ?? "standard"}`) || "ease",
    delay: options.delayMs ?? 0,
    iterations: reduced ? 1 : (options.iterations ?? 1),
    fill: "both",
  });
}

/** The opacity alone of each keyframe, or none when no keyframe sets it. */
function fades(keyframes: Keyframe[]): Keyframe[] {
  if (!keyframes.some((frame) => frame.opacity !== undefined)) return [];
  return keyframes.map(({ opacity, offset }) => ({
    ...(opacity === undefined ? {} : { opacity }),
    ...(offset === undefined ? {} : { offset }),
  }));
}

/** Runs `update`, which changes the page, as a cross-fade where the browser and the learner allow it. */
export async function changeView(update: () => void | Promise<void>): Promise<void> {
  const doc = document as Document & { startViewTransition?: (cb: () => void | Promise<void>) => { finished: Promise<void> } };
  if (prefersReducedMotion() || typeof doc.startViewTransition !== "function") {
    await update();
    return;
  }
  await doc.startViewTransition(update).finished;
}

/**
 * The celebrations of *Learn Piano*: one per moment, sized to it.
 *
 * - **A step passed** gets `pulse`, a small swell of the feedback band, with the `step` sound.
 * - **A new level or badge** gets `showMoments`, a full-screen moment each, one after another. A
 *   moment shows its art, a heading, the reward's name and one sentence, over a burst of particles.
 *   Continue, Esc or a click anywhere ends it, so every moment can be skipped at once.
 * - **The lesson's end** counts its own stars and XP up in `src/learn/lesson-view.ts`.
 *
 * - **The art stands on a stage:** a plate with a honey ring, turning rays behind it, stars around it,
 *   and the mascot's portrait cheering at its edge. All but the art and the mascot only decorate.
 * - **Reduced motion shows the same facts with a fade.** The moment's text and art fade in through
 *   `animate` of `src/ui/motion.ts`, and the stage's stars and mascot through its stylesheet. No
 *   particle flies, nothing turns, and the pulse, which carries no fact, is still.
 * - **The particles are our own canvas code** under `BURST_PARTICLES`, drawn for `BURST_MS` and then
 *   gone. Each is a small square or dot that flies out from the art, falls and fades.
 *
 * Decisions, and what each costs:
 * - **A moment is a native modal `<dialog>`.** The page behind turns inert, the focus starts on Continue
 *   and Esc closes it, so no trap or key handler of our own is needed.
 * - **The caller passes every text and the art,** the mascot's `alt` among them, so this module holds no
 *   copy and knows no catalog.
 * - **The burst draws on a 2D canvas,** never the player's GPU particles, so a page of *Learn Piano*
 *   loads no three.js. Its cost is one frame loop for `BURST_MS`, over at most `BURST_PARTICLES`.
 *
 * Bounds: one canvas and `BURST_PARTICLES` particles per moment, freed when the burst ends.
 */
import "./celebrate.css";
import { button } from "../../ui/components/button";
import { mascot } from "../../ui/components/mascot";
import { el } from "../../ui/dom";
import { icon } from "../../ui/icons/icons";
import { animate, prefersReducedMotion } from "../../ui/motion";
import type { Cue, GameSounds } from "./sfx";

/** The particles one burst throws. */
export const BURST_PARTICLES = 120;
/** How long a burst lasts, in milliseconds. */
export const BURST_MS = 1800;
/** The colour tokens the particles take, in turn: honey first, then the brand's other three hues. */
const BURST_TOKENS = ["--c-brand", "--c-accent-vivid", "--c-brand", "--c-iris-vivid", "--c-orchid-vivid"];
/** The stars around a moment's art. The stylesheet places each by its index. */
const STAGE_STARS = 6;
/** The pull down on a particle, in CSS pixels per second squared. */
const GRAVITY = 900;

/** Swells `element` once, gently, for a step passed. */
export function pulse(element: Element): void {
  if (prefersReducedMotion()) return;
  animate(element, [{ transform: "scale(1)" }, { transform: "scale(1.03)", offset: 0.4 }, { transform: "scale(1)" }], { duration: "medium", easing: "emphasis" });
}

/** One particle in flight. */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  spin: number;
  angle: number;
  size: number;
  colour: string;
  round: boolean;
  /** Its life, in milliseconds. */
  life: number;
}

/** The colour that `token` computes to on `probe`, which a canvas can paint. */
function colourOf(probe: HTMLElement, token: string): string {
  probe.style.color = `var(${token})`;
  return getComputedStyle(probe).color;
}

/**
 * Throws a burst of particles from the centre of `from`, drawn on `canvas`, which covers the viewport.
 * Returns the call that stops it early. Under reduced motion nothing flies.
 */
export function burst(canvas: HTMLCanvasElement, from: Element): () => void {
  const context = canvas.getContext("2d");
  if (prefersReducedMotion() || context === null) return () => {};
  const ratio = devicePixelRatio || 1;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  context.scale(ratio, ratio);

  const colours = BURST_TOKENS.map((token) => colourOf(canvas, token));
  const box = from.getBoundingClientRect();
  const cx = box.left + box.width / 2;
  const cy = box.top + box.height / 2;
  const particles: Particle[] = Array.from({ length: BURST_PARTICLES }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 250 + Math.random() * 550;
    return {
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 300,
      spin: (Math.random() - 0.5) * 12,
      angle: Math.random() * Math.PI,
      size: 4 + Math.random() * 6,
      colour: colours[i % colours.length]!,
      round: i % 3 === 0,
      life: BURST_MS * (0.6 + Math.random() * 0.4),
    };
  });

  let frame = 0;
  let last = performance.now();
  const start = last;
  const draw = (now: number) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const age = now - start;
    context.clearRect(0, 0, width, height);
    for (const p of particles) {
      if (age >= p.life) continue;
      p.vx *= 1 - 1.2 * dt;
      p.vy = p.vy * (1 - 1.2 * dt) + GRAVITY * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.angle += p.spin * dt;
      context.globalAlpha = 1 - (age / p.life) ** 2;
      context.fillStyle = p.colour;
      context.save();
      context.translate(p.x, p.y);
      context.rotate(p.angle);
      if (p.round) {
        context.beginPath();
        context.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        context.fill();
      } else context.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      context.restore();
    }
    if (age < BURST_MS) frame = requestAnimationFrame(draw);
    else context.clearRect(0, 0, width, height);
  };
  frame = requestAnimationFrame(draw);
  return () => {
    cancelAnimationFrame(frame);
    context.clearRect(0, 0, width, height);
  };
}

/** A new level or badge to celebrate. */
export interface Moment {
  /** The sound it plays. */
  cue: Extract<Cue, "level" | "badge">;
  /** Its art, such as a badge's medal or the level's number. */
  art: HTMLElement;
  /** The heading, such as "Level up!", which names the moment. */
  heading: string;
  /** The reward's name, such as "Level 4". */
  name: string;
  /** One sentence about it. */
  text: string;
}

/** The texts every moment shares. */
export interface MomentLabels {
  /** The button that ends a moment. */
  continue: string;
  /** What the mascot's picture shows, in the page's language. */
  mascot: string;
}

/** Shows `moment` full-screen, and resolves once the learner ends it. */
function showMoment(moment: Moment, labels: MomentLabels, sounds: GameSounds): Promise<void> {
  return new Promise((resolve) => {
    const canvas = el("canvas", { class: "moment__burst", attrs: { "aria-hidden": "true" } });
    const art = el("div", { class: "moment__art", children: [moment.art] });
    const stars = Array.from({ length: STAGE_STARS }, (_, i) => el("span", { class: "moment__star", attrs: { style: `--i: ${i}` }, children: [icon("star")] }));
    const stage = el("div", {
      class: "moment__stage",
      children: [
        el("span", { class: "moment__rays", attrs: { "aria-hidden": "true" } }),
        el("span", { class: "moment__stars", attrs: { "aria-hidden": "true" }, children: stars }),
        art,
        el("span", { class: "moment__cheer", children: [mascot({ pose: "portrait", alt: labels.mascot, size: "medium" })] }),
      ],
    });
    const headingId = `moment-heading-${++nextId}`;
    const heading = el("h2", { class: "moment__heading", attrs: { id: headingId }, text: moment.heading });
    const name = el("p", { class: "moment__name", text: moment.name });
    const text = el("p", { class: "moment__text", text: moment.text });
    const done = button({ label: labels.continue, variant: "primary", size: "large", onClick: () => close() });
    const content = el("div", { class: "moment__content", children: [stage, heading, name, text, done] });
    const element = el("dialog", { class: "moment", attrs: { "aria-labelledby": headingId }, children: [canvas, content] });
    let stop = () => {};
    const close = () => {
      if (element.open) element.close();
    };
    element.addEventListener("click", (event) => {
      if (event.target === element || event.target === canvas) close();
    });
    element.addEventListener("close", () => {
      stop();
      element.remove();
      resolve();
    });
    document.body.append(element);
    element.showModal();
    done.focus();
    sounds.play(moment.cue);
    animate(art, [{ opacity: 0, transform: "scale(0.4) rotate(-10deg)" }, { opacity: 1, transform: "scale(1.1) rotate(3deg)", offset: 0.6 }, { opacity: 1, transform: "none" }], {
      duration: "reward",
      easing: "emphasis",
    });
    [heading, name, text, done].forEach((part, i) =>
      animate(part, [{ opacity: 0, transform: "translateY(16px)" }, { opacity: 1, transform: "none" }], { duration: "large", easing: "emphasis", delayMs: 240 + i * 80 }),
    );
    stop = burst(canvas, art);
  });
}

let nextId = 0;

/** Shows each of `moments` in turn, and resolves once the learner has ended the last. */
export async function showMoments(moments: readonly Moment[], labels: MomentLabels, sounds: GameSounds): Promise<void> {
  for (const moment of moments) await showMoment(moment, labels, sounds);
}

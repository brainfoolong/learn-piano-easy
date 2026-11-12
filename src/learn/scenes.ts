/**
 * The illustrations' scenes: each is data, a few shapes and a timeline of their moves, which
 * `src/learn/illustration.ts` draws and plays.
 *
 * Decisions, and what each costs:
 * - **A scene is data, never markup.** The lesson model checks an `explain` step's scene by its name,
 *   and no string reaches `innerHTML`.
 * - **A shape takes a tone, never a colour.** Each tone maps to a token in `lesson-view.css`, so a
 *   scene follows the theme.
 * - **A move changes only `transform` and `opacity`,** as `src/ui/motion.ts` allows, so a scene never
 *   moves the layout.
 * - **A scene loops on its `cycle`,** and stands still at `still` under reduced motion. `still` is the
 *   moment that shows the scene's idea best.
 */
import type { Keyframe } from "../ui/motion";

/** A shape's colour role. */
export type Tone = "line" | "surface" | "soft" | "white-key" | "black-key" | "brand" | "success" | "reward";

/** One SVG shape of a scene. */
export interface Shape {
  /** The name moves address it by. Several shapes may share one. */
  part?: string;
  tag: "rect" | "circle" | "ellipse" | "path" | "line" | "text";
  attrs: Readonly<Record<string, number | string>>;
  tone: Tone;
  /** A `text` shape's content: a note name or a digit, never a sentence to translate. */
  text?: string;
}

/** One move of a scene's timeline. */
export interface Move {
  /** The shapes it moves, by their `part`. */
  part: string;
  /** When it starts in the cycle, in ms. */
  at: number;
  /** How long it takes, in ms. */
  ms: number;
  /** Its keyframes. An `offset` is a share of `ms`. */
  frames: Keyframe[];
}

/** An illustration: its size in user units, its shapes, back to front, and its timeline. */
export interface Scene {
  width: number;
  height: number;
  shapes: Shape[];
  moves: Move[];
  /** The length of one loop, in ms. */
  cycle: number;
  /** The moment shown still under reduced motion, in ms. */
  still: number;
}

const WHITE = { width: 20, height: 80 };
const BLACK = { width: 12, height: 50 };
/** The white keys of an octave from C after which a black key sits. */
const BLACK_AFTER = [0, 1, 3, 4, 5];

/** Two octaves from C: the groups of two black keys light, then the groups of three. */
function blackKeyGroups(): Scene {
  const octaves = 2;
  const shapes: Shape[] = [];
  for (let i = 0; i < octaves * 7; i += 1) {
    shapes.push({ tag: "rect", tone: "white-key", attrs: { x: i * WHITE.width, y: 0, width: WHITE.width, height: WHITE.height, rx: 2 } });
  }
  for (let octave = 0; octave < octaves; octave += 1) {
    for (const after of BLACK_AFTER) {
      const x = (octave * 7 + after + 1) * WHITE.width - BLACK.width / 2;
      const box = { x, y: 0, width: BLACK.width, height: BLACK.height, rx: 2 };
      shapes.push({ tag: "rect", tone: "black-key", attrs: box });
      const part = after < 2 ? "twos" : "threes";
      shapes.push({ part, tag: "rect", tone: part === "twos" ? "brand" : "reward", attrs: { ...box, opacity: 0 } });
    }
  }
  const glow = (part: string, at: number): Move => ({
    part,
    at,
    ms: 1600,
    frames: [{ opacity: 0 }, { opacity: 1, offset: 0.2 }, { opacity: 1, offset: 0.8 }, { opacity: 0 }],
  });
  return {
    width: octaves * 7 * WHITE.width,
    height: WHITE.height,
    shapes,
    moves: [glow("twos", 200), glow("threes", 2200)],
    cycle: 4000,
    still: 1000,
  };
}

/** Every scene, by the name an `explain` step gives it. */
export const SCENES: Readonly<Record<string, () => Scene>> = {
  "black-key-groups": blackKeyGroups,
};

/**
 * Labels: short texts, such as a note's name or finger, drawn as textures on sprites in the scene.
 *
 * Decisions, and what each costs:
 * - Each text is drawn once onto a canvas, and its texture and material are cached by the text. A frame
 *   then only moves sprites and swaps materials, with no DOM element per note.
 * - The text is drawn white with a dark outline, and the material's colour tints it. One colour change
 *   then retints every cached label without drawing any again, and the outline keeps a label legible on
 *   a note of any colour. A layer made with `outline: false` draws plain text, for dark ink on a light
 *   key, where an outline would only thicken it.
 * - A label always faces the camera, as a sprite does, so it reads the same from every camera preset.
 * - The glow is kept off every label, so a label on a lit note stays readable.
 * - A label draws in the page's font stack, read when its text is first drawn, so a syllable such as
 *   `ド` or `до` takes the script's font. A text cached before a change of locale keeps its first font.
 * - A label fits its width: it is `height` tall unless its text is too wide for `maxWidth`, and then it
 *   shrinks to fit. A finger stays large, and a long name stays inside its note.
 * - The layer keeps a pool of sprites, grown as a frame needs and never shrunk. The sprites a frame does
 *   not use are hidden.
 *
 * Bounds: the cache holds at most `MAX_TEXTS` texts, and is emptied when one more arrives. The pool holds
 * as many sprites as the busiest frame so far needed.
 */
import { CanvasTexture, Color, Group, LinearFilter, Sprite, SpriteMaterial, SRGBColorSpace } from "three";

import { keepsGlowOff } from "./glow-source";

/** The most texts the cache keeps before it starts over. */
const MAX_TEXTS = 512;
/** The canvas height of one label, in pixels, and its font. */
const PIXELS = 64;

/** The canvas font of a label: bold, in the page's font stack, which follows the script of its `lang`. */
function labelFont(): string {
  const family = typeof document === "undefined" ? "" : getComputedStyle(document.documentElement).fontFamily;
  return `bold ${PIXELS * 0.8}px ${family || "system-ui, sans-serif"}`;
}
/** The outline's width and the room left around the text, in pixels. */
const OUTLINE = PIXELS * 0.12;
const PADDING = PIXELS * 0.05;

/** One cached text: its material and its width over its height. */
interface Drawn {
  readonly material: SpriteMaterial;
  readonly aspect: number;
}

export interface LabelLayer {
  readonly group: Group;
  /** Tints every label with `color`, as `0xrrggbb`. */
  setColor(color: number): void;
  /** Starts a frame's labels. */
  begin(): void;
  /** Shows `text` centred at `x`, `y`, `z`, `height` world units tall and at most `maxWidth` wide. */
  push(text: string, x: number, y: number, z: number, height: number, maxWidth: number): void;
  /** Hides every sprite the frame did not use. */
  end(): void;
  dispose(): void;
}

/** An empty label layer, whose texts carry a dark outline unless `outline` is false. */
export function createLabelLayer({ outline = true }: { outline?: boolean } = {}): LabelLayer {
  const stroke = outline ? OUTLINE : 0;
  const group = new Group();
  group.name = "labels";
  const color = new Color(0xffffff);
  const cache = new Map<string, Drawn>();
  const sprites: Sprite[] = [];
  let count = 0;

  const clear = () => {
    for (const { material } of cache.values()) {
      material.map?.dispose();
      material.dispose();
    }
    cache.clear();
  };

  const drawn = (text: string): Drawn | undefined => {
    const known = cache.get(text);
    if (known) return known;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return undefined;
    const font = labelFont();
    context.font = font;
    canvas.width = Math.ceil(context.measureText(text).width + 2 * (stroke + PADDING));
    canvas.height = PIXELS;
    // A resized canvas forgets its font, so it is set again.
    context.font = font;
    context.textAlign = "center";
    context.textBaseline = "middle";
    if (outline) {
      context.lineJoin = "round";
      context.lineWidth = OUTLINE;
      context.strokeStyle = "rgba(0, 0, 0, 0.85)";
      context.strokeText(text, canvas.width / 2, PIXELS / 2);
    }
    context.fillStyle = "#ffffff";
    context.fillText(text, canvas.width / 2, PIXELS / 2);

    const texture = new CanvasTexture(canvas);
    texture.colorSpace = SRGBColorSpace;
    texture.minFilter = LinearFilter;
    texture.generateMipmaps = false;
    const material = new SpriteMaterial({ map: texture, color, transparent: true, depthWrite: false });
    if (cache.size >= MAX_TEXTS) clear();
    const entry = { material, aspect: canvas.width / canvas.height };
    cache.set(text, entry);
    return entry;
  };

  return {
    group,

    setColor(next) {
      color.set(next);
      for (const { material } of cache.values()) material.color.copy(color);
    },

    begin() {
      count = 0;
    },

    push(text, x, y, z, height, maxWidth) {
      const entry = drawn(text);
      if (!entry) return;
      let sprite = sprites[count];
      if (!sprite) {
        sprite = new Sprite(entry.material);
        keepsGlowOff(sprite);
        sprites.push(sprite);
        group.add(sprite);
      }
      count++;
      sprite.material = entry.material;
      const h = Math.min(height, maxWidth / entry.aspect);
      sprite.scale.set(h * entry.aspect, h, 1);
      sprite.position.set(x, y, z);
      sprite.visible = true;
    },

    end() {
      for (let i = count; i < sprites.length; i++) sprites[i]!.visible = false;
    },

    dispose() {
      clear();
      group.removeFromParent();
    },
  };
}

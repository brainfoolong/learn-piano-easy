/**
 * The particle textures: small white shapes drawn in code on a canvas, which each particle tints.
 *
 * Decisions, and what each costs:
 * - Every texture is drawn here, so no image is copied and none is fetched. A new shape is a function.
 * - Each is white on transparent, so one texture serves every colour. The tint comes from the particle.
 * - A texture is drawn once on first use and shared, so presets that use the same shape share it.
 * - The smoke is a soft blob of random puffs from a fixed seed, so it looks the same on every visit.
 *
 * Bounds: one 64-pixel square canvas per shape, held for the visit.
 */
import { CanvasTexture, SRGBColorSpace, type Texture } from "three";

/** The shapes a particle can take, by the `particlesTexture` setting's values. */
export const PARTICLE_TEXTURES = ["circle", "spark", "smoke", "star", "ring"] as const;
export type ParticleTexture = (typeof PARTICLE_TEXTURES)[number];

/** The side of each texture, in pixels. */
const SIZE = 64;
const HALF = SIZE / 2;

const cache = new Map<ParticleTexture, Texture>();

/** The texture of `shape`, drawn on first use. */
export function particleTexture(shape: ParticleTexture): Texture {
  let texture = cache.get(shape);
  if (!texture) {
    const canvas = document.createElement("canvas");
    canvas.width = SIZE;
    canvas.height = SIZE;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("This browser cannot draw onto a canvas, so particles cannot show.");
    DRAW[shape](context);
    texture = new CanvasTexture(canvas);
    texture.colorSpace = SRGBColorSpace;
    cache.set(shape, texture);
  }
  return texture;
}

const DRAW: Record<ParticleTexture, (context: CanvasRenderingContext2D) => void> = {
  circle(context) {
    const fill = context.createRadialGradient(HALF, HALF, 0, HALF, HALF, HALF);
    fill.addColorStop(0, "rgba(255,255,255,1)");
    fill.addColorStop(0.45, "rgba(255,255,255,0.85)");
    fill.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = fill;
    context.fillRect(0, 0, SIZE, SIZE);
  },

  spark(context) {
    // A bright core with a long thin streak through it, and a shorter one across.
    softDot(context, HALF * 0.35);
    context.fillStyle = "rgba(255,255,255,0.9)";
    streak(context, HALF, 2.2, 0);
    streak(context, HALF * 0.55, 1.6, Math.PI / 2);
  },

  smoke(context) {
    let seed = 7;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    for (let i = 0; i < 14; i++) {
      const angle = random() * Math.PI * 2;
      const reach = random() * HALF * 0.35;
      const x = HALF + Math.cos(angle) * reach;
      const y = HALF + Math.sin(angle) * reach;
      const radius = HALF * (0.35 + random() * 0.3);
      const puff = context.createRadialGradient(x, y, 0, x, y, radius);
      puff.addColorStop(0, "rgba(255,255,255,0.22)");
      puff.addColorStop(1, "rgba(255,255,255,0)");
      context.fillStyle = puff;
      context.fillRect(0, 0, SIZE, SIZE);
    }
  },

  star(context) {
    softDot(context, HALF * 0.3);
    context.fillStyle = "rgba(255,255,255,1)";
    context.beginPath();
    for (let i = 0; i < 10; i++) {
      const radius = i % 2 === 0 ? HALF * 0.95 : HALF * 0.38;
      const angle = (i * Math.PI) / 5 - Math.PI / 2;
      context.lineTo(HALF + Math.cos(angle) * radius, HALF + Math.sin(angle) * radius);
    }
    context.closePath();
    context.fill();
  },

  ring(context) {
    context.strokeStyle = "rgba(255,255,255,1)";
    context.lineWidth = SIZE * 0.08;
    context.shadowColor = "rgba(255,255,255,0.8)";
    context.shadowBlur = SIZE * 0.08;
    context.beginPath();
    context.arc(HALF, HALF, HALF * 0.7, 0, Math.PI * 2);
    context.stroke();
  },
};

/** A soft round glow of `radius` at the centre. */
function softDot(context: CanvasRenderingContext2D, radius: number): void {
  const glow = context.createRadialGradient(HALF, HALF, 0, HALF, HALF, radius);
  glow.addColorStop(0, "rgba(255,255,255,1)");
  glow.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = glow;
  context.fillRect(0, 0, SIZE, SIZE);
}

/** A tapered streak through the centre at `angle`, `reach` long either way and `width` wide at its middle. */
function streak(context: CanvasRenderingContext2D, reach: number, width: number, angle: number): void {
  context.save();
  context.translate(HALF, HALF);
  context.rotate(angle);
  context.beginPath();
  context.moveTo(-reach, 0);
  context.lineTo(0, -width);
  context.lineTo(reach, 0);
  context.lineTo(0, width);
  context.closePath();
  context.fill();
  context.restore();
}

/**
 * The mascot: a short silent video of our piano teacher, an ape with honey fur in a corduroy jacket.
 *
 * Decisions, and what each costs:
 * - Every view that shows the mascot calls this one function, so a pose's files, size and frame have
 *   one home.
 * - A pose is a video and its poster in `public/images/mascot/`, named relative to the site's root,
 *   since each page's `<base>` resolves them there. The folder is part of the shell's cache, so the
 *   mascot shows offline. `tools/mascot-video.ts` makes the files.
 * - **The poster is the video's first frame,** so the start of a play swaps nothing. Where a video
 *   cannot play, the poster stays as a still picture: with reduced motion, without H.264 or where a
 *   browser blocks autoplay.
 * - **A video is muted and plays inline,** which every browser needs before it plays one unasked.
 * - The video carries its size as attributes, so its frame holds its room before the file arrives.
 * - The frame is the picture to assistive technology, named by `alt` from the caller's catalog. An
 *   empty `alt` marks a mascot that only decorates, and hides it.
 *
 * The poses: `scene` is the mascot at the piano, 16 to 9. It plays once, pushes in to the face and
 * rests there. `portrait` is the face in a circle, and it loops.
 */
import { el } from "../dom";
import { prefersReducedMotion } from "../motion";
import "./mascot.css";

/** A pose of the mascot. */
export type MascotPose = "scene" | "portrait";

/** How large a portrait is drawn. A scene fills its container's width. */
export type MascotSize = "small" | "medium" | "large";

export interface MascotOptions {
  pose: MascotPose;
  /** What the mascot shows, in the page's language, or `""` when it only decorates. */
  alt: string;
  /** The portrait's size, `medium` by default. */
  size?: MascotSize;
}

const FOLDER = "images/mascot/";

/** Each pose's file name without its extension, its pixel size, and whether it loops. */
const POSES: Record<MascotPose, { file: string; width: number; height: number; loop: boolean }> = {
  scene: { file: "at-the-piano", width: 1024, height: 576, loop: false },
  portrait: { file: "portrait", width: 256, height: 256, loop: true },
};

/** The mascot in `options.pose`, inside its frame. */
export function mascot(options: MascotOptions): HTMLElement {
  const pose = POSES[options.pose];
  const play = !prefersReducedMotion();
  const video = el("video", {
    class: "mascot__image",
    attrs: {
      src: `${FOLDER}${pose.file}.mp4`,
      poster: `${FOLDER}${pose.file}.webp`,
      width: String(pose.width),
      height: String(pose.height),
      preload: play ? "auto" : "none",
      muted: "",
      playsinline: "",
      disablepictureinpicture: "",
      disableremoteplayback: "",
      ...(play ? { autoplay: "" } : {}),
      ...(pose.loop ? { loop: "" } : {}),
    },
    // A video made by script takes its muted state from the property alone, and autoplay needs it.
    props: { muted: true },
  });
  return el("span", {
    class: "mascot",
    attrs: {
      "data-pose": options.pose,
      "data-size": options.size ?? "medium",
      ...(options.alt ? { role: "img", "aria-label": options.alt } : { "aria-hidden": "true" }),
    },
    children: [video],
  });
}

/**
 * Makes the mascot's videos and their posters in `public/images/mascot/` from one source video, with
 * ffmpeg on the path.
 *
 * The source is 16 to 9 at 1280 by 720 pixels. It opens on the mascot at the piano, pushes in to its
 * face by about two seconds, and holds the close-up to its end.
 *
 * - **`at-the-piano.mp4`** is the whole source at 1024 by 576 pixels. The hero plays it once.
 * - **`portrait.mp4`** is a square around the face, from the close-up alone. Its last half second fades
 *   into its first, so its loop has no seam.
 * - **Each poster is the video's first frame,** so a play that starts swaps nothing the eye can see.
 * - **Every file is small, since the shell precaches it.** A video is H.264 without sound, the one codec
 *   every browser plays, with its index at its head so it starts before it has fully arrived.
 *
 *   bun tools/mascot-video.ts <source.mp4>
 */
import { join } from "node:path";
import { root } from "./build";

/** The folder the files go to. */
const OUT = join(root, "public", "images", "mascot");

/** The encoder's settings both videos share. A higher `crf` makes a smaller and softer file. */
const H264 = ["-an", "-c:v", "libx264", "-preset", "veryslow", "-crf", "31", "-pix_fmt", "yuv420p", "-movflags", "+faststart"];

/** The square around the face in the source's close-up, as an ffmpeg crop: width, height, left, top. */
const FACE = "720:720:280:0";

/**
 * Where the portrait's loop starts and ends in the source, and how long its seam fades, in seconds. Its
 * start is the frame of the close-up most like its end, so the fade has little to blend.
 */
const LOOP = { start: 3.75, end: 10, fade: 0.5 };

/** The portrait's loop: the close-up, its tail faded into its head, so the last frame leads to the first. */
const PORTRAIT_FILTER = [
  `[0:v]crop=${FACE},scale=256:256:flags=lanczos,setsar=1,split=3[a][b][c]`,
  `[a]trim=start=${LOOP.start + LOOP.fade}:end=${LOOP.end - LOOP.fade},setpts=PTS-STARTPTS[body]`,
  `[b]trim=start=${LOOP.end - LOOP.fade}:end=${LOOP.end},setpts=PTS-STARTPTS[tail]`,
  `[c]trim=start=${LOOP.start}:end=${LOOP.start + LOOP.fade},setpts=PTS-STARTPTS[head]`,
  `[tail][head]xfade=transition=fade:duration=${LOOP.fade}:offset=0[seam]`,
  "[body][seam]concat=n=2:v=1[out]",
].join(";");

async function ffmpeg(args: string[]): Promise<void> {
  const run = Bun.spawn(["ffmpeg", "-v", "error", "-y", ...args], { stdout: "inherit", stderr: "inherit" });
  if ((await run.exited) !== 0) throw new Error(`ffmpeg failed: ${args.join(" ")}`);
}

/** Writes the first frame of `video` as a WebP poster beside it. */
async function poster(video: string, name: string): Promise<void> {
  await ffmpeg(["-i", join(OUT, video), "-frames:v", "1", "-c:v", "libwebp", "-quality", "80", join(OUT, name)]);
}

const source = process.argv[2];
if (!source) {
  console.error("Usage: bun tools/mascot-video.ts <source.mp4>");
  process.exit(1);
}

await ffmpeg(["-i", source, "-vf", "scale=1024:576:flags=lanczos", ...H264, join(OUT, "at-the-piano.mp4")]);
await ffmpeg(["-i", source, "-filter_complex", PORTRAIT_FILTER, "-map", "[out]", ...H264, join(OUT, "portrait.mp4")]);
await poster("at-the-piano.mp4", "at-the-piano.webp");
await poster("portrait.mp4", "portrait.webp");

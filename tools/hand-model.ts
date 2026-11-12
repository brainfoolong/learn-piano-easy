/**
 * Builds the mascot's rigged hand, `public/models/hand.glb`, by running `tools/hand-model/hand.py` in
 * Blender without its window. That script's head comment says how the hand is made.
 *
 * The hand starts from MakeHuman's CC0 human, which the MPFB extension builds inside Blender. This tool
 * fetches MPFB at a pinned version, checks its hash, and installs it into a Blender profile under
 * `.agent-tmp/`, so nothing is written outside the repository. Only this tool needs Blender: the app
 * loads the built file.
 *
 * Blender is found on `BLENDER`, then at its default Windows install path, then on the path.
 *
 * By default it builds the faceted low-poly hand the app ships. The flags build other versions to
 * compare in the hand lab.
 *
 *   bun tools/hand-model.ts [--preview] [--out <file>] [--levels <n>] [--decimate <share>] [--smooth]
 *   --preview   also renders the posed hand from four sides into `.agent-tmp/hand/`
 *   --out       where the model goes, `public/models/hand.glb` by default
 *   --levels    how many times the skin is subdivided, 0 by default
 *   --decimate  the share of the skin's faces kept, from 0 to 1, a quarter by default
 *   --smooth    lights the faces smoothly, with the normals of a twice subdivided copy
 */
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { root } from "./build";

/** The MPFB release the hand is built with, and the SHA-256 of its archive. */
const MPFB = {
  url: "https://extensions.blender.org/download/sha256:c075b3e9b94b8e5556a5f03f4653602d02ea306de08126e8f55ed6dee28a2dad/add-on-mpfb-v2.0.18.zip",
  sha256: "c075b3e9b94b8e5556a5f03f4653602d02ea306de08126e8f55ed6dee28a2dad",
};

/** Blender's default install folder on Windows, whose newest version is used. */
const WINDOWS_BLENDERS = "C:/Program Files/Blender Foundation";

const scratch = join(root, ".agent-tmp", "hand-model");
const profile = join(scratch, "blender-user");
const env: Record<string, string | undefined> = { ...process.env, BLENDER_USER_RESOURCES: profile };

async function blender(): Promise<string> {
  if (process.env.BLENDER) return process.env.BLENDER;
  if (existsSync(WINDOWS_BLENDERS)) {
    const versions = (await Array.fromAsync(new Bun.Glob("Blender */blender.exe").scan(WINDOWS_BLENDERS))).sort(
      (a, b) => a.localeCompare(b, undefined, { numeric: true }),
    );
    const newest = versions.at(-1);
    if (newest) return join(WINDOWS_BLENDERS, newest);
  }
  return "blender";
}

/** Runs Blender with `args` in the scratch profile, and fails with its log when it fails. */
async function run(exe: string, args: string[]): Promise<string> {
  const proc = Bun.spawn([exe, ...args], { env, stdout: "pipe", stderr: "pipe" });
  const [out, err] = await Promise.all([new Response(proc.stdout).text(), new Response(proc.stderr).text()]);
  if ((await proc.exited) !== 0) {
    console.error([out, err].join("\n").split("\n").slice(-40).join("\n"));
    process.exit(1);
  }
  return out;
}

async function installMpfb(exe: string): Promise<void> {
  if (existsSync(join(profile, "extensions", "user_default", "mpfb"))) return;
  const zip = join(scratch, "mpfb.zip");
  const bytes = new Uint8Array(await (await fetch(MPFB.url)).arrayBuffer());
  const hash = new Bun.CryptoHasher("sha256").update(bytes).digest("hex");
  if (hash !== MPFB.sha256) throw new Error(`The MPFB archive's hash is ${hash}, not the pinned ${MPFB.sha256}.`);
  await Bun.write(zip, bytes);
  await run(exe, ["--command", "extension", "install-file", "-r", "user_default", "--enable", zip]);
}

/** The value after `flag` on the command line, if given. */
const option = (flag: string) => {
  const i = process.argv.indexOf(flag);
  return i > 0 ? process.argv[i + 1] : undefined;
};
const levels = option("--levels");
if (levels !== undefined) env.HAND_LEVELS = levels;
const decimate = option("--decimate");
if (decimate !== undefined) env.HAND_DECIMATE = decimate;
if (process.argv.includes("--smooth")) env.HAND_FLAT = "0";
const out = option("--out") ?? join(root, "public", "models", "hand.glb");
const args = [out];
if (process.argv.includes("--preview")) {
  const previewDir = join(root, ".agent-tmp", "hand");
  await mkdir(previewDir, { recursive: true });
  args.push(previewDir);
}
await mkdir(join(root, "public", "models"), { recursive: true });
await mkdir(scratch, { recursive: true });

const exe = await blender();
await installMpfb(exe);
const log = await run(exe, ["--background", "--python-exit-code", "1", "--python", join(root, "tools", "hand-model", "hand.py"), "--", ...args]);
for (const line of log.split("\n")) if (/^(MESH|BONES)/.test(line)) console.log(line);
console.log(`Wrote ${out}.`);

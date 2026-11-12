/**
 * The import of a freely licensed piano: converts the Salamander Grand Piano into the sound set
 * `public/sounds/salamander/`, shaped for the web, and writes the folder's `LICENSE.md`.
 *
 * The source is an SFZ instrument: a text file of regions, each mapping a WAV file to a key range and
 * a velocity range, with `<group>` headers whose opcodes every following region inherits. The importer
 * takes one velocity layer of the attack regions, so one sample per sampled note, and writes the
 * MIDI.js JSON file that `src/audio/soundfont.ts` loads: note names to `data:audio/mp3;base64,` URLs.
 *
 * Decisions, and what each costs:
 * - Only the sampled notes ship, one every three semitones. The sampler plays the others from the
 *   nearest sample, so the set costs about a third of a full one.
 * - One velocity layer, `velocity` below, chosen loud enough that turning it down for soft notes
 *   sounds natural. Soft notes keep a forte timbre.
 * - Each note starts 1 ms before its onset, the first sample within 40 dB of its peak. The source's
 *   silence before the hammer never delays a note.
 * - Each note ends where its loudness falls 60 dB below its peak, or after `maxSeconds`, with a
 *   squared fade over its last `fadeSeconds`. The cap bounds the bass notes, which ring for 25 s.
 * - One gain serves the whole set, putting its loudest peak at -1 dBFS. Notes keep their relative
 *   loudness as the piano played them.
 * - The trim, fade and gain run here, on raw samples. ffmpeg only decodes the WAV and encodes the MP3,
 *   as VBR stereo at LAME quality `mp3Quality`, without an ID3 tag but with the LAME header. A decoder
 *   reads the encoder's delay from that header and skips it, so the onset stays at the start.
 * - The archive downloads once into `.agent-tmp/sounds/` and is extracted whole, because Windows'
 *   tar and GNU tar share no option for extracting by pattern. Only the finished set enters the tree.
 * - The row in `THIRD-PARTY-NOTICES.md` is written by hand. The importer fails when it is missing, so
 *   a set never ships without its notice.
 *
 * `bun tools/import-sounds.ts`. It needs the network on its first run, and `tar` and `ffmpeg` on
 * PATH. The app never runs it.
 */
import { mkdir, readdir, rm } from "node:fs/promises";
import { join } from "node:path";

import { root } from "./build";

/** The one instrument a set holds, and the stem of its file name. Every instrument plays it. */
export const instrument = "acoustic_grand_piano";

/** The 88 note names of a piano, from `A0` to `C8`, with flats as MIDI.js writes them. */
export function pianoNoteNames(): string[] {
  const names = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
  const notes: string[] = [];
  for (let midi = 21; midi <= 108; midi++) notes.push(`${names[midi % 12]}${Math.floor(midi / 12) - 1}`);
  return notes;
}

/** True when `bytes` start an MP3: an ID3 tag or an MPEG frame sync. */
export function isMp3(bytes: Uint8Array): boolean {
  const id3 = bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33;
  const sync = bytes[0] === 0xff && ((bytes[1] ?? 0) & 0xe0) === 0xe0;
  return id3 || sync;
}

/** One piano to import: where it comes from, how it is shaped, and its license. */
export interface Source {
  url: string;
  archive: string;
  folder: string;
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  attribution: string;
  /** The velocity whose layer is taken, from 1 to 127. */
  velocity: number;
  maxSeconds: number;
  fadeSeconds: number;
  mp3Quality: number;
}

export const salamander: Source = {
  url: "https://freepats.zenvoid.org/Piano/SalamanderGrandPiano/SalamanderGrandPianoV3+20161209_44khz16bit.tar.xz",
  archive: "salamander-44k16.tar.xz",
  folder: "salamander",
  title: "The Salamander piano",
  author: "the Salamander Grand Piano V3 by Alexander Holm, a Yamaha C5",
  license: "Creative Commons Attribution 3.0, CC BY 3.0",
  licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
  attribution: "Salamander Grand Piano V3 by Alexander Holm, <https://freepats.zenvoid.org/Piano/acoustic-grand-piano.html>",
  velocity: 84,
  maxSeconds: 8,
  fadeSeconds: 0.3,
  mp3Quality: 5,
};

/** The sample rate every note is decoded at and encoded from. */
export const RATE = 44100;
/** The loudness window, in samples, that the tail is measured over: 20 ms. */
const WINDOW = 882;

/** One SFZ region, with the opcodes of its group folded in. */
export interface Region {
  sample: string;
  lokey: number;
  hikey: number;
  lovel: number;
  hivel: number;
  keycenter: number;
  trigger: string;
}

/** The regions of an SFZ text. A region without `pitch_keycenter` sits at key 60, as SFZ defines. */
export function parseSfz(text: string): Region[] {
  const regions: Region[] = [];
  let group: Record<string, string> = {};
  let region: Record<string, string> | null = null;
  let target: Record<string, string> | null = null;
  const body = text.replace(/\/\/.*$/gm, "");
  for (const m of body.matchAll(/<(\w+)>|(\w+)=(.*?)(?=\s+\w+=|\s*<|\s*$)/gm)) {
    if (m[1] === undefined) {
      if (target) target[m[2]!] = m[3]!.trim();
      continue;
    }
    if (region) regions.push(toRegion({ ...group, ...region }));
    region = m[1] === "region" ? {} : null;
    if (m[1] === "group") group = {};
    target = region ?? (m[1] === "group" ? group : null);
  }
  if (region) regions.push(toRegion({ ...group, ...region }));
  return regions;
}

function toRegion(op: Record<string, string>): Region {
  const num = (key: string, fallback: number) => (op[key] === undefined ? fallback : Number(op[key]));
  if (!op.sample) throw new Error("an SFZ region has no sample");
  return {
    sample: op.sample.replaceAll("\\", "/"),
    lokey: num("lokey", 0),
    hikey: num("hikey", 127),
    lovel: num("lovel", 1),
    hivel: num("hivel", 127),
    keycenter: num("pitch_keycenter", 60),
    trigger: op.trigger ?? "attack",
  };
}

/**
 * The sample of each sampled note at `velocity`, by key. A note's region is an attack region whose key
 * range holds its own key centre, which leaves out pedal noises mapped to no key. Two regions for one
 * note fail.
 */
export function layer(regions: readonly Region[], velocity: number): Map<number, string> {
  const notes = new Map<number, string>();
  for (const r of regions) {
    if (r.trigger !== "attack" || velocity < r.lovel || velocity > r.hivel) continue;
    if (r.keycenter < r.lokey || r.keycenter > r.hikey) continue;
    if (notes.has(r.keycenter)) throw new Error(`note ${r.keycenter} has two samples at velocity ${velocity}`);
    notes.set(r.keycenter, r.sample);
  }
  return new Map([...notes].sort((a, b) => a[0] - b[0]));
}

/** The loudest absolute sample of a stereo frame run, read as the louder channel. */
export function peakOf(frames: Float32Array): number {
  let peak = 0;
  for (const x of frames) peak = Math.max(peak, Math.abs(x));
  return peak;
}

/** The frame where a note starts: 1 ms before its first sample within 40 dB of its peak. */
export function onsetFrame(frames: Float32Array, channels: number): number {
  const threshold = peakOf(frames) * 0.01;
  for (let i = 0; i < frames.length; i++) {
    if (Math.abs(frames[i]!) >= threshold) return Math.max(0, Math.floor(i / channels) - Math.round(RATE / 1000));
  }
  return 0;
}

/** The frame after which a note stays 60 dB below its loudest 20 ms window. */
export function tailFrame(frames: Float32Array, channels: number): number {
  const count = Math.floor(frames.length / channels);
  const levels: number[] = [];
  for (let start = 0; start < count; start += WINDOW) {
    let sum = 0;
    const end = Math.min(count, start + WINDOW);
    for (let i = start * channels; i < end * channels; i++) sum += frames[i]! * frames[i]!;
    levels.push(Math.sqrt(sum / ((end - start) * channels)));
  }
  const floor = Math.max(...levels) * 0.001;
  let last = 0;
  levels.forEach((level, i) => {
    if (level >= floor) last = i;
  });
  return Math.min(count, (last + 1) * WINDOW);
}

/** The note's frames from its onset to its tail, capped at `maxSeconds`, with its fade applied. */
export function shape(frames: Float32Array, channels: number, source: Pick<Source, "maxSeconds" | "fadeSeconds">): Float32Array {
  const from = onsetFrame(frames, channels);
  const to = Math.min(tailFrame(frames, channels), from + Math.round(source.maxSeconds * RATE));
  const out = frames.slice(from * channels, to * channels);
  const length = to - from;
  const fade = Math.min(length, Math.round(source.fadeSeconds * RATE));
  for (let f = length - fade; f < length; f++) {
    const g = ((length - f) / fade) ** 2;
    for (let c = 0; c < channels; c++) out[f * channels + c]! *= g;
  }
  return out;
}

function run(cmd: string[], stdin?: Uint8Array, cwd?: string): Uint8Array {
  const result = Bun.spawnSync({ cmd, ...(cwd ? { cwd } : {}), stdin: stdin ?? "ignore", stdout: "pipe", stderr: "pipe" });
  if (result.exitCode !== 0) throw new Error(`${cmd[0]} failed: ${result.stderr.toString().slice(-500)}`);
  return result.stdout;
}

/** The stereo frames of a WAV file, as 32-bit floats at `RATE`. */
function decode(path: string): Float32Array {
  const bytes = run(["ffmpeg", "-v", "error", "-i", path, "-f", "f32le", "-ac", "2", "-ar", String(RATE), "-"]);
  return new Float32Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 4);
}

/**
 * The MP3 of stereo frames. It goes through a file, never a pipe, because ffmpeg writes the LAME header
 * last, by seeking back. That header holds the encoder's delay and padding, which a decoder skips.
 */
async function encode(frames: Float32Array, quality: number, scratch: string): Promise<Uint8Array> {
  const raw = new Uint8Array(frames.buffer, frames.byteOffset, frames.byteLength);
  const cmd = ["ffmpeg", "-v", "error", "-y", "-f", "f32le", "-ac", "2", "-ar", String(RATE), "-i", "-"];
  run([...cmd, "-c:a", "libmp3lame", "-q:a", String(quality), "-id3v2_version", "0", scratch], raw);
  const mp3 = new Uint8Array(await Bun.file(scratch).arrayBuffer());
  await rm(scratch);
  return mp3;
}

/** Downloads and extracts the archive once. Returns the folder that holds its SFZ file. */
async function unpack(source: Source): Promise<string> {
  const dir = join(root, ".agent-tmp", "sounds");
  await mkdir(dir, { recursive: true });
  const archive = join(dir, source.archive);
  const marker = join(dir, `${source.archive}.extracted`);
  if (!(await Bun.file(marker).exists())) {
    if (!(await Bun.file(archive).exists())) {
      const res = await fetch(source.url);
      if (!res.ok) throw new Error(`${source.url}: HTTP ${res.status}`);
      await Bun.write(archive, res);
    }
    run(["tar", "-xf", source.archive], undefined, dir);
    await Bun.write(marker, "");
  }
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const files = await readdir(join(dir, entry.name));
    if (files.some((f) => f.endsWith(".sfz"))) return join(dir, entry.name);
  }
  throw new Error(`no SFZ file in ${dir}`);
}

function licenseText(source: Source, notes: number): string {
  return `# ${source.title}

\`${instrument}-mp3.json\` in this folder is ${source.author}, converted for the web.
It is under the [${source.license}](${source.licenseUrl}) license.

- **Attribution:** ${source.attribution}
- **Changes:** ${notes} notes of one velocity layer, each trimmed to its onset, shortened with a fade, set to one gain and encoded as MP3.

\`tools/import-sounds.ts\` makes it from <${source.url}>.
`;
}

/** Imports `source` into `public/sounds/<folder>/`. Returns the paths written. */
export async function importSounds(source: Source): Promise<string[]> {
  const path = `public/sounds/${source.folder}/`;
  const notices = await Bun.file(join(root, "THIRD-PARTY-NOTICES.md")).text();
  if (!notices.includes(`\`${path}\``)) throw new Error(`THIRD-PARTY-NOTICES.md has no row for ${path}`);
  const dir = await unpack(source);
  const sfz = (await readdir(dir)).find((f) => f.endsWith(".sfz"))!;
  const samples = layer(parseSfz(await Bun.file(join(dir, sfz)).text()), source.velocity);
  const names = pianoNoteNames();
  const shaped = new Map<string, Float32Array>();
  for (const [key, sample] of samples) {
    const name = names[key - 21];
    if (!name) throw new Error(`note ${key} is outside the piano`);
    shaped.set(name, shape(decode(join(dir, sample)), 2, source));
  }
  const gain = 10 ** (-1 / 20) / Math.max(...[...shaped.values()].map(peakOf));
  const notes: Record<string, string> = {};
  for (const [name, frames] of shaped) {
    for (let i = 0; i < frames.length; i++) frames[i]! *= gain;
    const mp3 = await encode(frames, source.mp3Quality, join(dir, "..", "encode.mp3"));
    if (!isMp3(mp3)) throw new Error(`note ${name} did not encode as an MP3`);
    notes[name] = `data:audio/mp3;base64,${Buffer.from(mp3).toString("base64")}`;
  }
  const out = join(root, "public", "sounds", source.folder);
  await mkdir(out, { recursive: true });
  await Bun.write(join(out, `${instrument}-mp3.json`), `${JSON.stringify(notes)}\n`);
  await Bun.write(join(out, "LICENSE.md"), licenseText(source, shaped.size));
  return [`${path}${instrument}-mp3.json`, `${path}LICENSE.md`];
}

if (import.meta.main) {
  for (const path of await importSounds(salamander)) console.log(path);
}

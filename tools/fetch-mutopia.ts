/**
 * The fetch of the Mutopia pieces: copies each piece of `tools/mutopia-picks.json` from The Mutopia
 * Project into `public/songs/mutopia/`, and writes their `LICENSE.md` and their catalog rows.
 *
 * Each Mutopia piece is a folder under `ftp/`, such as `ftp/JoplinS/maple/`. Its `<name>.rdf` names
 * the piece's license, its maintainer and its MIDI file. A piece of several movements ships its MIDI
 * files in one `<name>-mids.zip`, and its pick names the file it takes with `entry`.
 *
 * Decisions, and what each costs:
 * - Every piece's license is read from its own RDF, and `mutopiaLicense` maps it to a short name.
 *   A license outside public domain, CC0, CC BY and CC BY-SA fails the fetch before anything is
 *   written, so a refused piece never lands in the tree.
 * - The files come from `sca.uwaterloo.ca/Mutopia/`, the University of Waterloo server that hosts the
 *   project. Its `mutopiaproject.org` name serves another site there, so the tool uses the host's own
 *   name. The host's `robots.txt` disallows only `/praetzel/`.
 * - The credit names the piece's maintainer, who typeset it, and the project. The CC licenses ask for
 *   that attribution, and a public-domain piece carries it as a courtesy.
 * - Every file must start with `MThd` and parse with notes and no problems, or the fetch fails. The
 *   library then never lists a song it cannot play.
 * - The pick list holds the titles, the pieces and the difficulties. Mutopia's own titles are often
 *   bare, such as "Menuet", and it rates no difficulty.
 * - The difficulties are our judgement, from 1 to 10 in half steps.
 * - The catalog's rows outside `mutopia/` keep their place, and the Mutopia rows come last. A file in
 *   the folder that no pick names is deleted, so a dropped pick leaves nothing behind.
 * - Four requests run at once, which keeps about 140 pieces to a minute without loading the host.
 *
 * `bun tools/fetch-mutopia.ts`. It needs the network, and the app never runs it.
 */
import { mkdir, readdir, rm } from "node:fs/promises";
import { join } from "node:path";

import { readMidi } from "../src/midi/smf-read";
import { songFromMidi } from "../src/midi/song";
import { unzipEntry, zipEntries } from "../src/midi/zip";
import { root } from "./build";
import { readCatalog, songsDir, withSpan, writeCatalog, type CatalogSong } from "./catalog";

/** The folder of every Mutopia piece on its host. */
export const ftpUrl = "https://sca.uwaterloo.ca/Mutopia/ftp/";

/** The folder of the copied pieces, relative to `public/songs/`. */
export const mutopiaFolder = "mutopia";

/** One piece of the pick list. `dir` is its folder under `ftp/`. */
export interface Pick {
  dir: string;
  title: string;
  difficulty: number;
  /** The file to take from the piece's MIDI archive, when it ships one. */
  entry?: string;
}

/** A work of the pick list and its picked pieces. */
export interface PickGroup {
  composer: string;
  piece: string;
  songs: Pick[];
}

/** What a piece's RDF says about it. */
export interface PieceData {
  title: string;
  licence: string;
  maintainer: string;
  midFile: string;
}

/** The text of the RDF element `mp:<name>`, or an empty string when it is missing or empty. */
function rdfField(rdf: string, name: string): string {
  const text = rdf.match(new RegExp(`<mp:${name}>([^<]*)</mp:${name}>`))?.[1] ?? "";
  return text.replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">").trim();
}

/** The fields of a piece's RDF that the fetch uses. Throws when the license or the MIDI file is missing. */
export function readPieceData(rdf: string): PieceData {
  const data = {
    title: rdfField(rdf, "title"),
    licence: rdfField(rdf, "licence"),
    maintainer: rdfField(rdf, "maintainer"),
    midFile: rdfField(rdf, "midFile"),
  };
  if (!data.licence) throw new Error("the RDF names no license");
  if (!data.midFile || data.midFile === "empty") throw new Error("the RDF names no MIDI file");
  return data;
}

/** The short name of Mutopia's license `licence`. Throws for a license the project does not allow. */
export function mutopiaLicense(licence: string): string {
  if (licence === "Public Domain") return "Public Domain";
  const cc = licence.match(/^Creative Commons Attribution(-ShareAlike)? (\d\.\d)$/);
  if (cc) return `CC BY${cc[1] ? "-SA" : ""} ${cc[2]}`;
  if (/^Creative Commons (Zero|CC0|Public Domain Dedication) 1\.0$/.test(licence)) return "CC0 1.0";
  throw new Error(`the license "${licence}" is not allowed`);
}

/** The credit of a piece that `maintainer` typeset. */
export function mutopiaCredit(maintainer: string): string {
  return maintainer ? `Typeset by ${maintainer}, The Mutopia Project` : "The Mutopia Project";
}

/** The name of the file `pick` is copied to, in `public/songs/mutopia/`. */
function fileName(pick: Pick, data: PieceData): string {
  return pick.entry ?? data.midFile;
}

async function fetchBytes(url: string): Promise<Uint8Array> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return new Uint8Array(await res.arrayBuffer());
}

/** The MIDI bytes of `pick`, from its file or from its archive. */
async function pieceMidi(pick: Pick, data: PieceData): Promise<Uint8Array> {
  const url = `${ftpUrl}${pick.dir}/${data.midFile}`;
  const zipped = data.midFile.endsWith(".zip");
  if (zipped !== (pick.entry !== undefined)) {
    throw new Error(`${pick.dir}: its MIDI file is ${data.midFile}, so its pick ${zipped ? "needs" : "takes no"} entry`);
  }
  const bytes = await fetchBytes(url);
  if (!zipped) return bytes;
  const entry = zipEntries(bytes).find((e) => e.name === pick.entry);
  if (!entry) throw new Error(`${url} holds no ${pick.entry}`);
  return unzipEntry(bytes, entry);
}

/** A copied piece: its catalog row, its bytes and its source. */
interface Copied {
  row: CatalogSong;
  bytes: Uint8Array;
  title: string;
  source: string;
}

/** Fetches `pick` of `group`, checks its license and its file, and returns its row and bytes. */
async function copyPick(group: PickGroup, pick: Pick): Promise<Copied> {
  const name = pick.dir.split("/").at(-1)!;
  const rdfUrl = `${ftpUrl}${pick.dir}/${name}.rdf`;
  const data = readPieceData(new TextDecoder().decode(await fetchBytes(rdfUrl)));
  const license = mutopiaLicense(data.licence);
  const bytes = await pieceMidi(pick, data);
  const file = `${mutopiaFolder}/${fileName(pick, data)}`;
  if (new TextDecoder().decode(bytes.subarray(0, 4)) !== "MThd") throw new Error(`${file} is not a MIDI file`);
  const problems = songFromMidi(readMidi(bytes)).problems;
  if (problems.length > 0) throw new Error(`${file}: ${JSON.stringify(problems)}`);
  const row = withSpan(
    {
      composer: group.composer,
      piece: group.piece,
      title: pick.title,
      file,
      difficulty: pick.difficulty,
      license,
      credit: mutopiaCredit(data.maintainer),
    },
    bytes,
  );
  return { row, bytes, title: data.title, source: `${ftpUrl}${pick.dir}/` };
}

/** The `LICENSE.md` of the folder, with a row for every copied piece. */
function licenseText(copied: readonly Copied[]): string {
  const rows = copied.map(
    (c) => `| \`${c.row.file.slice(mutopiaFolder.length + 1)}\` | ${c.row.composer} | ${c.title} | ${c.row.license} | ${c.row.credit} | <${c.source}> |`,
  );
  return `# The Mutopia pieces

The MIDI files in this folder come from [The Mutopia Project](https://www.mutopiaproject.org/), unchanged.
Each piece has its own license, which the table names. Every one is public domain, CC BY or CC BY-SA.

- **Attribution:** each piece's credit names its maintainer, who typeset it, and The Mutopia Project.
- **Share-alike:** whoever passes on a CC BY-SA file, changed or not, keeps its license.
- The share-alike term covers those files only, never the app's code.

\`tools/fetch-mutopia.ts\` copies them from the pick list \`tools/mutopia-picks.json\`, so a change goes
there, never into a file here.

| File | Composer | Mutopia title | License | Credit | Source |
|---|---|---|---|---|---|
${rows.join("\n")}
`;
}

/** The pick list in the tree. */
export async function readPicks(): Promise<PickGroup[]> {
  return (await Bun.file(join(root, "tools", "mutopia-picks.json")).json()) as PickGroup[];
}

/** Fetches every pick and writes the files, their license and the catalog. Returns the new rows. */
export async function fetchMutopia(): Promise<CatalogSong[]> {
  const picks = (await readPicks()).flatMap((group) => group.songs.map((pick) => ({ group, pick })));
  const copied: Copied[] = new Array(picks.length);
  let next = 0;
  const worker = async () => {
    for (let i = next++; i < picks.length; i = next++) {
      const { group, pick } = picks[i]!;
      copied[i] = await copyPick(group, pick).catch((error: Error) => {
        throw new Error(`${pick.dir}: ${error.message}`);
      });
    }
  };
  await Promise.all(Array.from({ length: 4 }, worker));

  const files = copied.map((c) => c.row.file);
  const twice = files.find((file, i) => files.indexOf(file) !== i);
  if (twice) throw new Error(`two picks write ${twice}`);

  const dir = join(songsDir, mutopiaFolder);
  await mkdir(dir, { recursive: true });
  const kept = new Set(files.map((file) => file.slice(mutopiaFolder.length + 1)));
  for (const name of await readdir(dir)) {
    if (name.endsWith(".mid") && !kept.has(name)) await rm(join(dir, name));
  }
  for (const c of copied) await Bun.write(join(songsDir, c.row.file), c.bytes);
  await Bun.write(join(dir, "LICENSE.md"), licenseText(copied));

  const rows = copied.map((c) => c.row);
  const others = (await readCatalog()).filter((row) => !row.file.startsWith(`${mutopiaFolder}/`));
  await writeCatalog([...others, ...rows]);
  return rows;
}

if (import.meta.main) {
  const rows = await fetchMutopia();
  console.log(`${rows.length} Mutopia pieces in public/songs/${mutopiaFolder}/`);
}

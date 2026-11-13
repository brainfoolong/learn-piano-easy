/**
 * The translation tool of a translation pass: what a locale lacks, the work list of one unit, and the
 * stamps that record the English each translation was made from. `docs/agent/translation.md` is the method.
 *
 *   bun tools/i18n.ts status <locale>          missing, stale and fallen-back texts by unit, and a total
 *   bun tools/i18n.ts work <locale> <unit>     writes the unit's work list to .agent-tmp/i18n/<locale>/
 *   bun tools/i18n.ts stamp <locale> <unit>    records the unit's English in src/i18n/stamps/<locale>.json
 *
 * Decisions, and what each costs:
 * - **A unit is one batch of a pass:** `catalog/<section>` for a catalog file, `lesson/<world>` for a
 *   world's lessons, and `guide/<slug>` for a song's guide. A catalog's own texts in `en.ts` are the unit
 *   `catalog/site`. The legal texts are not in the catalogs, so no unit holds them.
 * - **A text's id is its path:** a catalog's dotted key, `lesson/<world>/<lesson>/<key>` or
 *   `guide/<slug>/<key>`. A leaf is a string, a list or a function, as `Translation<T>` takes them whole.
 * - **A stamp is the first 12 hex digits of the SHA-256 of the English.** A list hashes its JSON, and a
 *   function its source text as Bun reads it. A Bun upgrade that prints a function differently makes its
 *   stamp stale, and the next pass stamps it again.
 * - **A translated text is stale when its stamp differs from its English's,** or when it has none.
 *   German has no stamps, since it follows every change, so its `status` calls every text stale.
 * - **A list of another length is fallen back** in a lesson and a guide, whose readers show the English
 *   list then. A catalog's list is shown whole, so it never falls back.
 * - **A work list finds its context by reading the source,** never by a type checker. A doc comment is
 *   the text's own or its nearest parent's in the English file. A catalog text's use is each line of `src/`
 *   that names the longest tail of its key. A text read by a computed key, such as a setting's, falls
 *   back to its nearest camel-cased key, such as the setting's id. A text read through a renamed object
 *   may list none.
 */
import { join, relative } from "node:path";
import { CATALOGS } from "../src/i18n/all-catalogs";
import { LOCALE_TABLE, type LocaleCode } from "../src/i18n/locale-table";
import { en } from "../src/i18n/messages/en";
import { COURSE } from "../src/learn/course";
import type { Lesson } from "../src/learn/model";
import { guideTranslationsOf, ourSongs, type OurSong } from "./make-our-songs";

const ROOT = join(import.meta.dir, "..");

/** A text as a translation takes it whole: a string, a list, or a message built by a function. */
export type Leaf = string | readonly string[] | ((...args: never[]) => unknown);

/** One text of a unit, with each locale's translation of it. */
export interface Text {
  /** Its id, which its stamp is filed under. */
  id: string;
  /** The English file that holds it, from the repository's root. */
  source: string;
  /** Its keys inside the object the English file exports. */
  path: string[];
  english: Leaf;
  /** Each locale's translation that holds it. */
  own: Partial<Record<LocaleCode, Leaf>>;
  /** Whether a list of another length shows the English list. */
  listsFallBack: boolean;
}

/** One batch of a pass: its name and its texts. */
export interface Unit {
  name: string;
  texts: Text[];
}

/** Where `textsOf` files each text. */
export interface TextOptions {
  /** The id of the text at `path` of the tree. */
  idOf: (path: string[]) => string;
  source: string;
  /** The keys of the tree's root inside the object the source exports. */
  base?: string[];
  listsFallBack?: boolean;
  /** A branch to leave out, such as a catalog section another unit holds. */
  skip?: (value: object) => boolean;
}

/** Whether `value` is a text a translation takes whole. */
function isLeaf(value: unknown): value is Leaf {
  return typeof value === "string" || typeof value === "function" || (Array.isArray(value) && value.every((item) => typeof item === "string"));
}

/** The value at `path` of `tree`, or undefined. */
function at(tree: unknown, path: readonly string[]): unknown {
  let value = tree;
  for (const key of path) {
    if (typeof value !== "object" || value === null) return undefined;
    value = (value as Record<string, unknown>)[key];
  }
  return value;
}

/** Each text of the English tree `english`, with the leaf each of `translations` holds at its path. */
export function textsOf(english: object, translations: Partial<Record<LocaleCode, unknown>>, options: TextOptions): Text[] {
  const out: Text[] = [];
  const walk = (value: unknown, path: string[]) => {
    if (isLeaf(value)) {
      const own: Partial<Record<LocaleCode, Leaf>> = {};
      for (const [locale, tree] of Object.entries(translations) as [LocaleCode, unknown][]) {
        const leaf = at(tree, path);
        if (isLeaf(leaf)) own[locale] = leaf;
      }
      out.push({ id: options.idOf(path), source: options.source, path: [...(options.base ?? []), ...path], english: value, own, listsFallBack: options.listsFallBack ?? false });
      return;
    }
    if (typeof value !== "object" || value === null || options.skip?.(value)) return;
    for (const [key, child] of Object.entries(value)) walk(child, [...path, key]);
  };
  walk(english, []);
  return out;
}

/** The text a stamp hashes for `leaf`. */
function stampText(leaf: Leaf): string {
  return typeof leaf === "string" ? leaf : typeof leaf === "function" ? leaf.toString() : JSON.stringify(leaf);
}

/** The stamp of `leaf`: the first 12 hex digits of the SHA-256 of its text. */
export function stampOf(leaf: Leaf): string {
  return new Bun.CryptoHasher("sha256").update(stampText(leaf)).digest("hex").slice(0, 12);
}

/** Each text's id, mapped to the stamp of the English it was translated from. */
export type Stamps = Record<string, string>;

/** Where a text of one locale stands. */
export type TextState = "missing" | "fallen back" | "stale" | "current";

/** Where `text` stands in `locale`, by the locale's `stamps`. */
export function stateOf(text: Text, locale: LocaleCode, stamps: Stamps): TextState {
  const own = text.own[locale];
  if (own === undefined) return "missing";
  if (text.listsFallBack && Array.isArray(text.english) && (!Array.isArray(own) || own.length !== text.english.length)) return "fallen back";
  return stamps[text.id] === stampOf(text.english) ? "current" : "stale";
}

/** One unit's texts of a locale that show English or need a review. */
export interface UnitStatus {
  unit: string;
  missing: string[];
  stale: string[];
  fallenBack: string[];
}

/** Each unit's missing, stale and fallen-back texts in `locale`, the units with none left out. */
export function statusOf(units: readonly Unit[], locale: LocaleCode, stamps: Stamps): UnitStatus[] {
  return units
    .map((unit) => {
      const status: UnitStatus = { unit: unit.name, missing: [], stale: [], fallenBack: [] };
      for (const text of unit.texts) {
        const state = stateOf(text, locale, stamps);
        if (state === "missing") status.missing.push(text.id);
        if (state === "stale") status.stale.push(text.id);
        if (state === "fallen back") status.fallenBack.push(text.id);
      }
      return status;
    })
    .filter((status) => status.missing.length + status.stale.length + status.fallenBack.length > 0);
}

/**
 * `stamps` with `unit`'s ids stamped anew: each text the locale holds, unless its list fell back. Every
 * other unit's stamp stays. An id no unit of `units` holds any more is dropped.
 */
export function stampUnit(stamps: Stamps, units: readonly Unit[], unit: Unit, locale: LocaleCode): Stamps {
  const known = new Set(units.flatMap((each) => each.texts.map((text) => text.id)));
  const mine = new Set(unit.texts.map((text) => text.id));
  const out: Stamps = {};
  for (const [id, stamp] of Object.entries(stamps)) if (known.has(id) && !mine.has(id)) out[id] = stamp;
  for (const text of unit.texts) if (stateOf(text, locale, {}) !== "missing" && stateOf(text, locale, {}) !== "fallen back") out[text.id] = stampOf(text.english);
  return Object.fromEntries(Object.entries(out).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)));
}

/** The kind of a text, which tells a writer how much room it has. */
export type TextKind = "label" | "prose" | "list" | "message";

/** The kind of `leaf`: a message is a function, and a label is a short text that ends no sentence. */
export function kindOf(leaf: Leaf): TextKind {
  if (typeof leaf === "function") return "message";
  if (typeof leaf !== "string") return "list";
  return leaf.length <= 40 && !/[.?!:]$/.test(leaf) ? "label" : "prose";
}

/** One text of a work list, with what a writer needs to translate it. */
export interface WorkItem {
  id: string;
  state: TextState;
  kind: TextKind;
  /** The English's length in characters, each item's for a list, and none for a message. */
  length: number | number[] | null;
  english: string | readonly string[];
  german: string | readonly string[] | null;
  /** The locale's own text so far, which a stale text's writer revises. */
  current: string | readonly string[] | null;
  /** The doc comment the English file gives the text or its nearest parent. */
  comment: string | null;
  /** Each `file:line` that uses the text. */
  uses: string[];
}

/** `leaf` as a work list shows it: a function as its source. */
function shown(leaf: Leaf | undefined): string | readonly string[] | null {
  return leaf === undefined ? null : typeof leaf === "function" ? leaf.toString() : leaf;
}

/** What a work list reads from the tree: a text's doc comment and its uses. */
export interface Look {
  comment: (text: Text) => string | null;
  uses: (text: Text) => string[];
}

/** The work list of `unit` in `locale`: every text, with its state and context. */
export function workList(unit: Unit, locale: LocaleCode, stamps: Stamps, look: Look): WorkItem[] {
  return unit.texts.map((text) => ({
    id: text.id,
    state: stateOf(text, locale, stamps),
    kind: kindOf(text.english),
    length: typeof text.english === "string" ? text.english.length : typeof text.english === "function" ? null : text.english.map((item) => item.length),
    english: shown(text.english)!,
    german: shown(text.own.de),
    current: shown(text.own[locale]),
    comment: look.comment(text),
    uses: look.uses(text),
  }));
}

/** A key line of an object literal, such as `  play: "Play",` or `  "three-cs": {`. */
const KEY_LINE = /^(\s*)(?:"([^"]+)"|([A-Za-z_$][\w$]*|\d+))\s*:/;

/** Each keyed line's doc comment in the source `text`, by its key path joined with `.`. */
export function commentsIn(text: string): Map<string, string> {
  const out = new Map<string, string>();
  const stack: string[] = [];
  let pending: string[] | null = null;
  let open = false;
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (trimmed.startsWith("/**")) {
      pending = [];
      open = true;
    }
    if (open) {
      pending!.push(trimmed.replace(/^\/\*\*\s?|^\*\/|^\*\s?|\s*\*\/$/g, ""));
      if (trimmed.endsWith("*/")) open = false;
      continue;
    }
    const match = KEY_LINE.exec(line);
    if (match === null || /^export /.test(trimmed)) {
      if (trimmed !== "") pending = null;
      continue;
    }
    const depth = Math.max(1, Math.round(match[1]!.length / 2));
    stack.length = depth - 1;
    stack.push(match[2] ?? match[3]!);
    if (pending !== null) out.set(stack.join("."), pending.join(" ").replace(/\s+/g, " ").trim());
    pending = null;
  }
  return out;
}

/** The doc comment of the path `path`, or of its nearest parent, in `comments`. */
function nearestComment(comments: ReadonlyMap<string, string>, path: readonly string[]): string | null {
  for (let length = path.length; length > 0; length--) {
    const found = comments.get(path.slice(0, length).join("."));
    if (found !== undefined) return found;
  }
  return null;
}

/** A `Look` over `files`, each a path from the repository's root mapped to its text. */
export function lookIn(files: ReadonlyMap<string, string>): Look {
  const comments = new Map<string, Map<string, string>>();
  const commentsOf = (source: string) => {
    let found = comments.get(source);
    if (found === undefined) comments.set(source, (found = commentsIn(files.get(source) ?? "")));
    return found;
  };
  const linesOf = (file: string) => (files.get(file) ?? "").split("\n");
  /** Each `file:line` of `file` whose line holds `needle`, or every file's when none is named. */
  const find = (needle: RegExp, only?: string): string[] => {
    const out: string[] = [];
    for (const file of only === undefined ? files.keys() : [only]) {
      if (only === undefined && (!file.startsWith("src/") || file.startsWith("src/i18n/messages/") || file.endsWith(".test.ts"))) continue;
      linesOf(file).forEach((line, index) => {
        if (needle.test(line)) out.push(`${file}:${index + 1}`);
      });
    }
    return out.slice(0, 8);
  };
  const escape = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    comment: (text) => nearestComment(commentsOf(text.source), text.path),
    uses: (text) => {
      if (text.id.startsWith("lesson/")) {
        const structure = text.source.replace(/\.en\.ts$/, ".ts");
        const step = text.path[0] === "steps" ? text.path[1] : undefined;
        return find(step === undefined ? /^\s*id:/ : new RegExp(`id:\\s*"${escape(step)}"`), structure).slice(0, 1);
      }
      if (text.id.startsWith("guide/")) {
        const first = typeof text.english === "string" ? text.english : Array.isArray(text.english) ? text.english[0] : undefined;
        return first === undefined ? [] : find(new RegExp(escape(JSON.stringify(first.slice(0, 40)).slice(0, -1))), text.source).slice(0, 1);
      }
      const keys = text.id.split(".");
      for (let length = keys.length; length >= Math.min(2, keys.length); length--) {
        const found = find(new RegExp(`\\.${escape(keys.slice(-length).join("."))}(?![\\w$])`));
        if (found.length > 0) return found;
      }
      const named = keys.slice(0, -1).reverse().find((key) => /[A-Z0-9]/.test(key));
      return named === undefined ? [] : find(new RegExp(`(?<![\\w$])${escape(named)}(?![\\w$])`));
    },
  };
}

/** The catalog's units: one per section file of `src/i18n/messages/`, and `catalog/site` for the rest. */
async function catalogUnits(): Promise<Unit[]> {
  const sections = new Map<object, { stem: string; source: string; name: string }>();
  for (const file of new Bun.Glob("*.en.ts").scanSync(join(ROOT, "src/i18n/messages"))) {
    const module = (await import(join(ROOT, "src/i18n/messages", file))) as Record<string, unknown>;
    for (const [name, value] of Object.entries(module)) {
      if (typeof value === "object" && value !== null) sections.set(value, { stem: file.replace(/\.en\.ts$/, ""), source: `src/i18n/messages/${file}`, name });
    }
  }
  const mounts: { path: string[]; section: { stem: string; source: string } }[] = [];
  /** Each object that spreads a section's entries into itself, such as the settings' texts. */
  const spreads: { path: string[]; keys: Set<string>; source: string }[] = [];
  const find = (value: unknown, path: string[], inside = false) => {
    if (typeof value !== "object" || value === null || Array.isArray(value)) return;
    const section = sections.get(value);
    if (section !== undefined && path.length > 0 && !inside) mounts.push({ path, section });
    const within = inside || section !== undefined;
    for (const [object, { source }] of sections) {
      const entries = Object.entries(object);
      if (object !== value && entries.length > 0 && entries.every(([key, child]) => (value as Record<string, unknown>)[key] === child)) {
        spreads.push({ path, keys: new Set(entries.map(([key]) => key)), source });
      }
    }
    for (const [key, child] of Object.entries(value)) find(child, [...path, key], within && path.length > 0);
  };
  find(en, []);
  /** `text` filed under the section file that spreads it, if one does. */
  const fromSpread = (text: Text): Text => {
    const keys = text.id.split(".");
    const spread = spreads.find(({ path, keys: own }) => path.every((key, index) => keys[index] === key) && own.has(keys[path.length]!));
    return spread === undefined ? text : { ...text, source: spread.source, path: keys.slice(spread.path.length) };
  };
  const translations = (path: string[]) =>
    Object.fromEntries(Object.entries(CATALOGS).flatMap(([locale, catalog]) => (locale === "en" ? [] : [[locale, at(catalog, path)]])));
  const mounted = new Set(mounts.map(({ path }) => at(en, path)));
  const units: Unit[] = [
    { name: "catalog/site", texts: textsOf(en, translations([]), { idOf: (path) => path.join("."), source: "src/i18n/messages/en.ts", skip: (value) => mounted.has(value) }) },
  ];
  for (const { path, section } of mounts) {
    const texts = textsOf(at(en, path) as object, translations(path), { idOf: (sub) => [...path, ...sub].join("."), source: section.source });
    units.push({ name: `catalog/${section.stem}`, texts: texts.map(fromSpread) });
  }
  return units.sort((a, b) => (a.name < b.name ? -1 : 1));
}

/** The course's units: one per world, holding its lessons and its boss. A built skip test reuses their texts. */
async function lessonUnits(): Promise<Unit[]> {
  const units: Unit[] = [];
  for (const world of COURSE) {
    const built = await world.load();
    const lessons = [...built.lessons, built.boss].filter((lesson): lesson is Lesson => lesson !== undefined);
    const byLocale: Partial<Record<LocaleCode, Record<string, unknown>>> = {};
    for (const { code } of LOCALE_TABLE) {
      const chunk = built.translations?.[code];
      if (chunk !== undefined) byLocale[code] = await chunk();
    }
    const texts = lessons.flatMap((lesson) => {
      const own = Object.fromEntries(Object.entries(byLocale).map(([locale, texts]) => [locale, texts?.[lesson.id]]));
      return textsOf(lesson.texts.en, own, { idOf: (path) => `lesson/${world.id}/${lesson.id}/${path.join(".")}`, source: `src/learn/lessons/${world.id}/${lesson.id}.en.ts` });
    });
    units.push({ name: `lesson/${world.id}`, texts });
  }
  return units;
}

/** The English text of `song`'s guide, in the shape of `GuideTranslation`. */
function guideEnglish(song: OurSong): object {
  const versions = Object.fromEntries(
    Object.entries(song.versions).map(([rarity, version]) => [rarity, { practice: version.practice.map((step) => step.text), tips: version.tips.map((tip) => tip.text), tricky: version.tricky }]),
  );
  return { about: song.about, funFact: song.funFact, versions };
}

/** Our songs' units: one per song's guide, German from the song's module and every other locale from its file. */
async function guideUnits(): Promise<Unit[]> {
  const units: Unit[] = [];
  for (const song of ourSongs) {
    const translations = { ...(song.de === undefined ? {} : { de: song.de }), ...(await guideTranslationsOf(song.slug)) };
    const texts = textsOf(guideEnglish(song), translations, { idOf: (path) => `guide/${song.slug}/${path.join(".")}`, source: `tools/our-songs/${song.slug}.ts`, listsFallBack: true });
    units.push({ name: `guide/${song.slug}`, texts });
  }
  return units;
}

/** Every unit of the project: the catalog's sections, the course's worlds and our songs' guides. */
export async function loadUnits(): Promise<Unit[]> {
  return [...(await catalogUnits()), ...(await lessonUnits()), ...(await guideUnits())];
}

/** The stamp file of `locale`. */
function stampFile(locale: LocaleCode): string {
  return join(ROOT, "src/i18n/stamps", `${locale}.json`);
}

/** The stamps of `locale`, or none before its first. */
async function readStamps(locale: LocaleCode): Promise<Stamps> {
  const file = Bun.file(stampFile(locale));
  return (await file.exists()) ? ((await file.json()) as Stamps) : {};
}

/** The text of every `.ts` file of `src/`, and of each source the units name, by its path from the root. */
async function sourceFiles(units: readonly Unit[]): Promise<Map<string, string>> {
  const files = new Map<string, string>();
  for (const file of new Bun.Glob("src/**/*.ts").scanSync(ROOT)) files.set(file.replaceAll("\\", "/"), await Bun.file(join(ROOT, file)).text());
  for (const source of new Set(units.flatMap((unit) => unit.texts.map((text) => text.source)))) {
    if (!files.has(source)) files.set(source, await Bun.file(join(ROOT, source)).text());
  }
  return files;
}

/** The locale `code` names, unless it is English or no row's. */
function localeArg(code: string | undefined): LocaleCode {
  const row = LOCALE_TABLE.find((each) => each.code === code);
  if (row === undefined || row.code === "en") throw new Error(`Name a locale other than English: ${LOCALE_TABLE.slice(1).map((each) => each.code).join(", ")}.`);
  return row.code;
}

/** The unit `name` of `units`. */
function unitArg(units: readonly Unit[], name: string | undefined): Unit {
  const unit = units.find((each) => each.name === name);
  if (unit === undefined) throw new Error(`Name a unit, such as ${units[0]?.name}. \`status\` lists them.`);
  return unit;
}

/** Runs the command of `args`, writing its report to the console. */
async function main(args: readonly string[]): Promise<void> {
  const [command, code, name] = args;
  const locale = localeArg(code);
  const units = await loadUnits();
  const stamps = await readStamps(locale);
  if (command === "status") {
    const statuses = statusOf(units, locale, stamps);
    for (const status of statuses) {
      console.log(`${status.unit}: ${status.missing.length} missing, ${status.stale.length} stale, ${status.fallenBack.length} fallen back`);
      for (const id of status.fallenBack) console.log(`  fallen back: ${id}`);
    }
    const sum = (pick: (status: UnitStatus) => string[]) => statuses.reduce((total, status) => total + pick(status).length, 0);
    const all = units.reduce((total, unit) => total + unit.texts.length, 0);
    console.log(`Total of ${all} texts: ${sum((s) => s.missing)} missing, ${sum((s) => s.stale)} stale, ${sum((s) => s.fallenBack)} fallen back.`);
    return;
  }
  if (command === "work") {
    const unit = unitArg(units, name);
    const out = join(ROOT, ".agent-tmp/i18n", locale, `${unit.name.replace("/", "-")}.json`);
    await Bun.write(out, `${JSON.stringify(workList(unit, locale, stamps, lookIn(await sourceFiles([unit]))), null, 2)}\n`);
    console.log(`Wrote the work list of ${unit.texts.length} texts to ${relative(ROOT, out)}.`);
    return;
  }
  if (command === "stamp") {
    const unit = unitArg(units, name);
    await Bun.write(stampFile(locale), `${JSON.stringify(stampUnit(stamps, units, unit, locale), null, 2)}\n`);
    console.log(`Stamped ${unit.name} in ${relative(ROOT, stampFile(locale))}.`);
    return;
  }
  throw new Error("Run `status <locale>`, `work <locale> <unit>` or `stamp <locale> <unit>`.");
}

if (import.meta.main) {
  try {
    await main(Bun.argv.slice(2));
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

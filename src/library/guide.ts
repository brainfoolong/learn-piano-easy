/**
 * The guide of a song of ours: how to play each of its four versions. `tools/make-our-songs.ts` writes
 * it as `public/songs/ours/<slug>/guide.json`, and the app reads it through `readGuide`.
 *
 * One guide serves the song's four versions. The song's story and fun fact are shared, and each version
 * has its own skills, fingers, start position, practice plan, tips and tricky spots.
 *
 * A version's `Rarity` is its id, which its file and its catalog row carry. The learner never reads
 * it. They read the version's name, which is its difficulty: Beginner, Easy, Medium or Hard. The
 * original score, where the catalog holds one, is the song's last step and is named Original.
 *
 * The names and taglines come from the live locale's catalog. The catalog's titles keep the English
 * names, since `tools/make-our-songs.ts` writes them once for every locale.
 *
 * Every text a learner reads in a guide is a `GuideText`: one string per locale, such as
 * `{ "en": "…", "de": "…" }`. `textIn` picks the live locale's string.
 *
 * Decisions, and what each costs:
 * - The fingers of a version are one list per track, in the order of that track's notes in the file.
 *   Track 0 is the right hand and track 1 the left, as `tools/song-notation.ts` writes them. A finger
 *   then maps to the app's note key, its track and index, with no search.
 * - The start position names the key under each finger of each hand, from finger 1 to 5, or null for a
 *   finger the opening never uses.
 * - A practice step's speed is a share of full speed, from `MIN_STEP_SPEED` to 1. A loop names its
 *   first and last bar, from 1, and null plays the whole song.
 * - `readGuide` checks every field, and a malformed guide is dropped whole. The song then plays without
 *   one, which is safer than a guide that half applies.
 * - A text needs its English, and every other locale may be missing. `textIn` then shows the English,
 *   so a guide reads before its translation lands. The writer's test lists every song that lacks one.
 * - Each text carries its locales side by side, so the panel picks one string per field and needs no
 *   second guide per locale.
 * - Every bar a guide names lies inside the version, which only the writer knows. `readGuide` checks
 *   the bars are whole numbers from 1 in order, and the writer's test checks the rest.
 */
import { t } from "../i18n/live";
import { LOCALE_TABLE, type LocaleCode } from "../i18n/locale";
import { playerLibrary } from "../i18n/messages/player-library.en";
import type { Finger, Hand } from "../theory/fingering";
import { isSkillId, type SkillId } from "./skills";

/** The ids of the four versions of a song of ours, from the easiest. */
export const RARITIES = ["common", "rare", "epic", "legendary"] as const;

/** The id of a version of ours. */
export type Rarity = (typeof RARITIES)[number];

/** The level each version sits at, which names it. The meter keeps a version's difficulty inside that level. */
export const RARITY_LEVELS = { common: "beginner", rare: "easy", epic: "medium", legendary: "hard" } as const satisfies Record<Rarity, string>;

/** The English name of each version, which the catalog's titles and files carry whatever the live locale. */
export const RARITY_NAMES: Readonly<Record<Rarity, string>> = {
  common: playerLibrary.panel.levels.beginner,
  rare: playerLibrary.panel.levels.easy,
  epic: playerLibrary.panel.levels.medium,
  legendary: playerLibrary.panel.levels.hard,
};

/** The name the learner reads for the version `rarity`, in the live locale: the name of its level. */
export function rarityName(rarity: Rarity): string {
  return t().player.library.panel.levels[RARITY_LEVELS[rarity]];
}

/** The tagline the learner reads for the version `rarity`, in the live locale. */
export function rarityTagline(rarity: Rarity): string {
  return t().player.library.rarity.taglines[rarity];
}

/** The name of a song's original score, its last step, in the live locale. */
export function originalName(): string {
  return t().player.library.rarity.originalName;
}

/** The tagline of a song's original score, in the live locale. */
export function originalTagline(): string {
  return t().player.library.rarity.originalTagline;
}

/** The slowest speed a practice step sets, as a share of full speed. */
export const MIN_STEP_SPEED = 0.25;

/** The kinds of tip. */
export const TIP_KINDS = ["fingering", "rhythm", "sound", "trick"] as const;

/** A kind of tip. */
export type TipKind = (typeof TIP_KINDS)[number];

/** Which hands a practice step plays. */
export type StepHands = Hand | "both";

/** A text of the guide in each locale it is written in. The English is always there. */
export type GuideText = { en: string } & Partial<Record<LocaleCode, string>>;

/** `text` in `locale`, or in English where `text` has none in `locale`. */
export function textIn(text: GuideText, locale: LocaleCode): string {
  return text[locale] ?? text.en;
}

/** One step of a practice plan: what to do, and the setup one click applies. */
export interface PracticeStep {
  text: GuideText;
  hands: StepHands;
  /** A share of full speed, from `MIN_STEP_SPEED` to 1. */
  speed: number;
  /** The first and last bar to loop, from 1, or null for the whole song. */
  loop: [number, number] | null;
  wait: boolean;
}

/** A tip tied to bars `fromBar` to `toBar`, from 1. */
export interface Tip {
  fromBar: number;
  toBar: number;
  kind: TipKind;
  text: GuideText;
}

/** A bar the meter measures as one of the hardest, with a tip for it. */
export interface TrickySpot {
  bar: number;
  text: GuideText;
}

/** The guide of one version. */
export interface VersionGuide {
  /** The version's catalog file, from `songs/`. */
  file: string;
  skills: SkillId[];
  /** One finger per note of the right hand's track, then the left hand's, in file order. */
  fingers: Record<Hand, Finger[]>;
  /** The MIDI note under each finger, 1 to 5, at the first note, or null for a finger the opening leaves out. */
  start: Record<Hand, (number | null)[]>;
  practice: PracticeStep[];
  tips: Tip[];
  tricky: TrickySpot[];
}

/** The guide of one song of ours. */
export interface Guide {
  /** The song's slug, as its catalog rows name it. */
  song: string;
  title: string;
  composer: string;
  /** Where the tune comes from, in two to four sentences. */
  about: GuideText;
  funFact: GuideText;
  /** The catalog file of the original score, the song's last step, or null. */
  mythic: string | null;
  versions: Record<Rarity, VersionGuide>;
}

/** Whether `value` is a plain object. */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Whether `value` is a string with text in it. */
function isText(value: unknown): value is string {
  return typeof value === "string" && value.trim() !== "";
}

/** Whether `value` is a guide's text: English with text in it, and text in each other locale it names. */
function isGuideText(value: unknown): value is GuideText {
  return isRecord(value) && isText(value.en) && LOCALE_TABLE.every(({ code }) => value[code] === undefined || isText(value[code]));
}

/** Whether `value` is a bar number: a whole number from 1. */
function isBar(value: unknown): value is number {
  return Number.isInteger(value) && (value as number) >= 1;
}

/** Whether `value` is a finger from 1 to 5. */
function isFinger(value: unknown): value is Finger {
  return Number.isInteger(value) && (value as number) >= 1 && (value as number) <= 5;
}

/** Whether `value` is a MIDI note number. */
function isPitch(value: unknown): value is number {
  return Number.isInteger(value) && (value as number) >= 0 && (value as number) <= 127;
}

/** Whether `value` is a list of `min` to `max` items that each pass `check`. */
function isList<T>(value: unknown, check: (item: unknown) => item is T, min = 0, max = Infinity): value is T[] {
  return Array.isArray(value) && value.length >= min && value.length <= max && value.every(check);
}

/** Whether `value` holds a list per hand that each pass `check`. */
function isPerHand<T>(value: unknown, check: (item: unknown) => boolean): value is Record<Hand, T> {
  return isRecord(value) && check(value.right) && check(value.left);
}

function isStep(value: unknown): value is PracticeStep {
  if (!isRecord(value) || !isGuideText(value.text) || typeof value.wait !== "boolean") return false;
  if (value.hands !== "both" && value.hands !== "right" && value.hands !== "left") return false;
  if (typeof value.speed !== "number" || value.speed < MIN_STEP_SPEED || value.speed > 1) return false;
  return value.loop === null || (isList(value.loop, isBar, 2, 2) && value.loop[0]! <= value.loop[1]!);
}

function isTip(value: unknown): value is Tip {
  return (
    isRecord(value) &&
    isBar(value.fromBar) &&
    isBar(value.toBar) &&
    value.fromBar <= value.toBar &&
    TIP_KINDS.includes(value.kind as TipKind) &&
    isGuideText(value.text)
  );
}

function isTricky(value: unknown): value is TrickySpot {
  return isRecord(value) && isBar(value.bar) && isGuideText(value.text);
}

function isVersion(value: unknown): value is VersionGuide {
  if (!isRecord(value) || !isText(value.file)) return false;
  if (!isList(value.skills, isSkillId, 1, 3) || new Set(value.skills).size !== value.skills.length) return false;
  if (!isPerHand(value.fingers, (list) => isList(list, isFinger))) return false;
  const isStartKey = (item: unknown): item is number | null => item === null || isPitch(item);
  if (!isPerHand(value.start, (list) => isList(list, isStartKey, 5, 5))) return false;
  return isList(value.practice, isStep, 3, 5) && isList(value.tips, isTip) && isList(value.tricky, isTricky);
}

/** `raw` as a guide, or undefined when any field of it is missing or malformed. */
export function readGuide(raw: unknown): Guide | undefined {
  if (!isRecord(raw) || !isText(raw.song) || !isText(raw.title) || !isText(raw.composer)) return undefined;
  if (!isGuideText(raw.about) || !isGuideText(raw.funFact) || !(raw.mythic === null || isText(raw.mythic))) return undefined;
  const versions = raw.versions;
  if (!isRecord(versions) || !RARITIES.every((rarity) => isVersion(versions[rarity]))) return undefined;
  return raw as unknown as Guide;
}

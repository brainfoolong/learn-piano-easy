import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { expect, test } from "../testing";
import { SETTINGS } from "./schema";

const ROOT = join(import.meta.dir, "..", "..");

/** The reference's ids that our schema carries under another name, mapped to ours. */
const RENAMED: Record<string, string> = {
  showMiliseconds: "showMilliseconds",
  minInputNote: "keyboardFirstNote",
  maxInputNote: "keyboardLastNote",
  volumePP: "inputGain",
  autoCacheFluidR3: "autoCacheSounds",
  autoCacheMusyngKite: "autoCacheSounds",
};

/** The reference's ids that the app leaves out on purpose, each with its reason. */
const DROPPED: Record<string, string> = {
  pianoEnableLighter: "a blend mode of a 2D canvas; our 3D scene draws glow with a bloom pass",
  noteEnableLighterDraw: "a blend mode of a 2D canvas; our 3D scene draws glow with a bloom pass",
  volumeMainSW: "a second copy of the main volume; our volumeMain is the one main volume",
  useHQPianoSoundfont: "our one sound set is already a full concert grand, so there is no better piano to switch to",
  soundfontName: "the app ships one freely licensed piano, the Salamander grand, so there is no set to choose",
  strokeNotesColor: "our edge glow takes each note's own colour, so the bloom reads it as light from the note",
  strokeActiveNotes: "a sounding note glows in its own colour under showHitKeys, which the bloom turns into its outline",
  strokeActiveNotesColor: "a sounding note glows in its own colour under showHitKeys, which the bloom turns into its outline",
  strokeActiveNotesWidth: "a sounding note glows in its own colour under showHitKeys, which the bloom turns into its outline",
  noteShadowColor: "a drop shadow of a 2D canvas; our scene's lights shade the 3D bars",
  noteShadowBlur: "a drop shadow of a 2D canvas; our scene's lights shade the 3D bars",
  pianoShadowColor: "a drop shadow of a 2D canvas; our scene's lights shade the 3D piano",
  pianoShadowBlur: "a drop shadow of a 2D canvas; our scene's lights shade the 3D piano",
  extendBgPastPiano: "the 3D piano sits on the end of the lanes, so there is no background past it",
  bgCol2: "a second fill for alternate lanes; our lanes use one fill, and the octave dividers mark the octaves",
  bgCol4: "a second stroke for alternate lanes; our lanes use one divider colour at each octave",
  restrictInputRange: "the input always follows the learner's keyboard, so there is nothing to switch off",
  forceDelay: "wait mode counts a held key only when struck after the last moment, so a repeated note needs no forced gap",
  minNoteDuration: "it only tunes forceDelay's gaps, and forceDelay is dropped",
  lastSong: "the last song lives in localStorage apart from the settings, so a settings file never names a song",
  keyOverride: "one key never fits every song, so the key is set per song in the Tracks panel and kept beside its tracks",
  enableAutoFingering: "fingers are generated on the first read that needs them and cached, so a song that shows none pays nothing",
  fingeringButtons: "generation needs no button, and a finger set by hand is cleared one at a time, so no click erases fingering work",
  sheetFormatToStave: "our engraver always lays out every staff of a measure together, so struck notes share a column",
  particlePresetName: "the built-in presets are named toggles, and the learner's own preset is one, so none needs a typed name",
  particleTypeName: "the learner's own preset holds one particle type, so its type needs no name",
  inputInstrument: "the only sound set is a piano, so every instrument would play it; a choice comes with a second instrument",
  autoCacheMain: "the service worker precaches the app on every install, so there is nothing to switch on",
  autoCacheHqPiano: "the app has no high-quality piano set; autoCacheSounds keeps every sound set saved",
  autoCacheFatBoy: "the app has no FatBoy sound set; autoCacheSounds keeps every sound set saved",
};

/** The reference's ids that a later goal adds to the schema, by the goal's slug. */
const PENDING: Record<string, readonly string[]> = {
};

/** Every id in the reference's tables, in the order they appear. */
function referenceIds(): string[] {
  const text = readFileSync(join(ROOT, "docs", "reference", "settings.md"), "utf8");
  return [...text.matchAll(/^\| `([A-Za-z0-9_]+)` \|/gm)].map((m) => m[1] ?? "");
}

test("every_reference_setting_is_covered_or_pending", () => {
  const reference = referenceIds();
  expect(reference.length).toBeGreaterThan(200);
  const ours = new Set<string>(SETTINGS.map((s) => s.id));

  // Each id is in exactly one place: the schema, renamed, dropped or pending.
  const placed = new Map<string, string[]>();
  const place = (id: string, where: string): void => {
    placed.set(id, [...(placed.get(id) ?? []), where]);
  };
  for (const id of reference) if (ours.has(id)) place(id, "schema");
  for (const id of Object.keys(RENAMED)) place(id, "renamed");
  for (const id of Object.keys(DROPPED)) place(id, "dropped");
  for (const [goal, ids] of Object.entries(PENDING)) for (const id of ids) place(id, `pending in ${goal}`);

  const missing = reference.filter((id) => !placed.has(id));
  expect(missing).toEqual([]);
  const twice = [...placed].filter(([, where]) => where.length > 1).map(([id, where]) => `${id}: ${where.join(", ")}`);
  expect(twice).toEqual([]);

  // No list names an id the reference lacks, so a stale entry fails.
  const known = new Set(reference);
  const stale = [...placed.keys()].filter((id) => !known.has(id));
  expect(stale).toEqual([]);

  // A rename points at a setting the schema has.
  const badRenames = Object.entries(RENAMED).filter(([, to]) => !ours.has(to));
  expect(badRenames).toEqual([]);

  // A drop states its reason, and a pending goal is a goal still in the tree.
  expect(Object.values(DROPPED).every((reason) => reason.length > 10)).toBe(true);
  const goneGoals = Object.keys(PENDING).filter((goal) => !existsSync(join(ROOT, "docs", "goals", `${goal}.md`)));
  expect(goneGoals).toEqual([]);
});

test("no_reference_setting_is_pending", () => {
  const pending = Object.entries(PENDING).flatMap(([goal, ids]) => ids.map((id) => `${id}: ${goal}`));
  expect(pending).toEqual([]);
});

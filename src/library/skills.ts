/**
 * The skills a version of our songs teaches. A guide names one to three of them by id, and the library
 * shows each by its name in the live locale, so a learner sees what is new at each difficulty.
 *
 * Decisions, and what each costs:
 * - The list is fixed here, and a guide that names an unknown id is refused. A new skill is one line
 *   here and its name in each catalog, so the names stay consistent across every song.
 * - A skill's name sits in the catalog under `player.library.skills`, by its key here.
 * - The order runs roughly from the first days to the end of the first year.
 */
import { t } from "../i18n/live";
import type { Messages } from "../i18n/messages/en";

/** The key of a skill's name in the catalog. */
type SkillKey = keyof Messages["player"]["library"]["skills"];

/** One skill: its id, as a guide names it, and the key of the name the learner reads. */
export interface Skill {
  id: string;
  key: SkillKey;
}

/** Every skill a guide may name, from the first days on. */
export const SKILLS = [
  { id: "five-finger-position", key: "fiveFingerPosition" },
  { id: "held-bass", key: "heldBass" },
  { id: "open-fifths", key: "openFifths" },
  { id: "eighth-notes", key: "eighthNotes" },
  { id: "dotted-rhythm", key: "dottedRhythm" },
  { id: "triads", key: "triads" },
  { id: "two-note-chords", key: "twoNoteChords" },
  { id: "position-change", key: "positionChange" },
  { id: "thumb-under", key: "thumbUnder" },
  { id: "finger-over", key: "fingerOver" },
  { id: "broken-chords", key: "brokenChords" },
  { id: "alberti-bass", key: "albertiBass" },
  { id: "waltz-bass", key: "waltzBass" },
  { id: "pedal", key: "pedal" },
  { id: "left-hand-melody", key: "leftHandMelody" },
  { id: "thirds-and-sixths", key: "thirdsAndSixths" },
  { id: "octave-bass", key: "octaveBass" },
  { id: "stride", key: "stride" },
  { id: "arpeggios", key: "arpeggios" },
  { id: "counter-melody", key: "counterMelody" },
  { id: "melody-in-chords", key: "melodyInChords" },
  { id: "hand-crossing", key: "handCrossing" },
  { id: "sixteenth-notes", key: "sixteenthNotes" },
] as const satisfies readonly Skill[];

/** The id of a skill of `SKILLS`. */
export type SkillId = (typeof SKILLS)[number]["id"];

/** Whether `id` names a skill of `SKILLS`. */
export function isSkillId(id: unknown): id is SkillId {
  return SKILLS.some((skill) => skill.id === id);
}

/** The name the learner reads for the skill `id`, in the live locale, or `id` itself when it is unknown. */
export function skillName(id: string): string {
  const skill = SKILLS.find((entry) => entry.id === id);
  return skill === undefined ? id : t().player.library.skills[skill.key];
}

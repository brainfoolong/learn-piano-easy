/**
 * The gallery's section of the chip: every variant, a toggle off and on, and the chip of each version
 * of a song of ours. A version's chip carries its id as `rarity`, and its label is the name a learner
 * reads.
 */
import { chip, type ChipOptions } from "../components/chip";
import { group, section, specimen, type Locale } from "./parts";

const MESSAGES = {
  en: {
    chip: "Chip",
    variants: "Variants",
    rarities: "Versions of a song",
    beginner: "Beginner",
    classical: "Classical",
    filmMusic: "Film music",
    leftHand: "Left hand only",
    removeLeftHand: "Remove the filter “Left hand only”",
    common: "Beginner",
    rare: "Easy",
    epic: "Medium",
    legendary: "Hard",
    mythic: "Original",
  },
  de: {
    chip: "Chip",
    variants: "Varianten",
    rarities: "Fassungen eines Lieds",
    beginner: "Für Anfänger",
    classical: "Klassik",
    filmMusic: "Filmmusik",
    leftHand: "Nur linke Hand",
    removeLeftHand: "Filter „Nur linke Hand“ entfernen",
    common: "Einsteiger",
    rare: "Leicht",
    epic: "Mittel",
    legendary: "Schwer",
    mythic: "Original",
  },
} satisfies Record<Locale, Record<string, string>>;

const chips = (entries: [string, ChipOptions][]) => entries.map(([state, options]) => specimen(state, chip(options)));

/** The chip's section in the gallery. */
export function chipSection(locale: Locale): HTMLElement {
  const t = MESSAGES[locale];
  return section("chip", t.chip, [
    group(
      t.variants,
      chips([
        ["neutral", { label: t.beginner }],
        ["unselected", { label: t.classical, variant: "selected", selected: false }],
        ["selected", { label: t.filmMusic, variant: "selected", selected: true }],
        ["removable", { label: t.leftHand, variant: "removable", removeLabel: t.removeLeftHand }],
      ]),
    ),
    group(
      t.rarities,
      chips([
        ["rarity-common", { label: t.common, variant: "rarity", rarity: "common" }],
        ["rarity-rare", { label: t.rare, variant: "rarity", rarity: "rare" }],
        ["rarity-epic", { label: t.epic, variant: "rarity", rarity: "epic" }],
        ["rarity-legendary", { label: t.legendary, variant: "rarity", rarity: "legendary" }],
        ["rarity-mythic", { label: t.mythic, variant: "rarity", rarity: "mythic" }],
      ]),
    ),
  ]);
}

import { expect, test } from "../testing";
import { GROUPS, SECTIONS, SETTINGS, SUBHEADINGS } from "./schema";

/** The sub-heading that stands before setting `id`, if any. */
const headingOf = (id: string): string | undefined => (SUBHEADINGS as Record<string, string | undefined>)[id];

test("every_panel_setting_sits_in_one_section_of_one_group", () => {
  expect(new Set(SECTIONS).size).toBe(SECTIONS.length);
  expect(new Set(GROUPS.map((group) => group.id)).size).toBe(GROUPS.length);

  const shown = new Set<string>(SECTIONS);
  const lost = SETTINGS.filter((setting) => setting.section !== "site" && !shown.has(setting.section)).map((setting) => setting.id);
  expect(lost).toEqual([]);

  // No section of the panel is empty, so no group shows a card without a row.
  const used = new Set<string>(SETTINGS.map((setting) => setting.section));
  expect(SECTIONS.filter((section) => !used.has(section))).toEqual([]);
});

test("a_section_cut_by_sub_headings_starts_with_one", () => {
  // A row above the first sub-heading would belong to none, and read as part of the card's header.
  const headless: string[] = [];
  for (const section of SECTIONS) {
    const inSection = SETTINGS.filter((setting) => setting.section === section);
    const first = inSection[0];
    if (first === undefined) continue;
    if (inSection.some((setting) => headingOf(setting.id) !== undefined) && headingOf(first.id) === undefined) headless.push(section);
  }
  expect(headless).toEqual([]);
});

test("each_sub_heading_stands_once_in_the_panel", () => {
  const names = Object.values(SUBHEADINGS);
  expect(new Set(names).size).toBe(names.length);

  const shown = new Set<string>(SECTIONS);
  const sectionOf = new Map<string, string>(SETTINGS.map((setting) => [setting.id, setting.section]));
  const outside = Object.keys(SUBHEADINGS).filter((id) => !shown.has(sectionOf.get(id) ?? ""));
  expect(outside).toEqual([]);
});

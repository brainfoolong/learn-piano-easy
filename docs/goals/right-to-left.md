---
looper: 1
title: Right to left
summary: "A right-to-left locale mirrors every page's layout, while the piano, the notes, the staff and the song's timeline keep their direction."
context: [docs/goals/many-locales.md, src/i18n/locale.ts, src/ui/base.css, src/ui/icons/icons.ts, src/learn/map-view.ts]
stages:
  - id: 1
    title: "The page's direction, logical CSS and a right-to-left pseudo-locale"
    status: open
  - id: 2
    title: What mirrors and what never does
    status: open
  - id: 3
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: css-sides
    stage: 1
    name: no stylesheet names a physical side unless it says why
    run: [bun, test, tools/css-sides.test.ts]
    tests: [no_stylesheet_uses_a_physical_side]
  - id: rtl-pages
    stage: 2
    name: a right-to-left page mirrors, and the music never does
    run: [bun, x, playwright, test, e2e/rtl.e2e.ts]
    tests: [a_right_to_left_page_mirrors_its_layout, the_piano_and_the_staff_never_mirror, a_directional_icon_points_the_reading_way]
  - id: isolate
    stage: 2
    name: an argument in a right-to-left text is isolated
    run: [bun, test, src/i18n/format.test.ts]
    tests: [isolate_wraps_text_in_first_strong_isolates]
---

# Right to left

## Why

Arabic and Urdu are read from right to left, and so is a page in them. Its layout mirrors: the start of
a line, a menu and a list is on the right, and a "next" arrow points left. A page that only sets
`dir="rtl"` breaks wherever its CSS names a left or a right side.

Music does not mirror. A piano's low keys are on the left in every country. Printed music runs from left
to right, and so does a song's timeline. This goal builds that split once, before the `arabic` goal, and
proves it with a pseudo-locale while no right-to-left translation exists.

## Standing decisions

- **The direction comes from the locale table's `dir`.** The build writes `dir` on each page's `<html>`,
  and the language switch sets it with `lang`.
- **Every side in CSS is logical:** `inline-start` and `inline-end`, `inset-inline`, `text-align: start`.
  A rule that must stay physical carries `/* ltr: <reason> */` on its line, and the test allows only those.
- **The music never mirrors, and carries `dir="ltr"` on its root.** That is the 3D piano and its lanes,
  the 2D notes, the staff and every sheet. It is also the song's timeline and loop markers, the keyboard
  range picker, and the key and finger labels.
- **Everything else mirrors.** That is the site bar, the menus, the dialogs, the settings and the library.
  It is also the course map's path, the lesson's steps and the progress bars of a lesson or a level.
- **A directional icon mirrors** through `.icon--directional`, which `:dir(rtl)` flips. It is set on
  arrows and chevrons that mean back, next, open or close. A media icon, such as play or rewind, never
  mirrors, as the timeline does not.
- **An argument that may hold left-to-right text is isolated** with `isolate()` of `src/i18n/format.ts`.
  It wraps the text in U+2068 and U+2069, so a song title or a note name keeps its order in Arabic text.
  The rules test checks it in every right-to-left locale.
- **A field a learner types into gets `dir="auto"`,** so a title typed in Latin letters reads left to
  right on a right-to-left page.
- **The pseudo-locale is `ar-XB`.** Its texts are the English, wrapped in U+202E and U+202C so they read
  mirrored, on a page with `dir="rtl"`. It is built like `en-XA`, never released, and never listed.
- **The layout checks run in `ar-XB` at every width.**
- **Lanes:** stage 2 needs stage 1's logical CSS, so the stages run in order.

## Stages

### 1. The page's direction, logical CSS and a right-to-left pseudo-locale

**Does:** `dir` on every page, every physical side in CSS made logical, and `ar-XB` pages.
**Split:** a read-only `Explore` subagent lists every physical side across `src/**/*.css` and every
`style.left` or `style.right` set from TypeScript. Writing subagents convert them, one per folder of
`src/`, side by side.
**Gate:** `src/i18n/pseudo.ts` exists and `en-XA` pages build.

- [ ] The build writes `dir`, and the language switch sets it. `tools/build.ts:224`, `src/site/site.ts:136`
- [ ] `ar-XB` in the table, built from the English by `pseudo()`. `src/i18n/pseudo.ts:1`
- [ ] Every physical side the subagent lists becomes logical, or carries its `ltr:` reason. `src/app/player.css:45`, `src/game/game-hud.css:205`, `src/input/history.css:25`
- [ ] Every left or right set from TypeScript reads the direction. `src/ui/layout-geometry.ts:1`
- [ ] Test `no_stylesheet_uses_a_physical_side`. `tools/css-sides.test.ts:1`
- [ ] The layout checks run in `ar-XB` at every width. `e2e/layout-check.ts:43`

### 2. What mirrors and what never does

**Does:** `dir="ltr"` on the music, mirrored directional icons, isolated arguments and typed fields.
**Gate:** `tools/css-sides.test.ts` passes.

- [ ] `dir="ltr"` on the 3D piano, the lanes, the staff, the sheet, the timeline and the range picker. `src/render/piano-keys.ts:1`, `src/sheet/sheet-view.ts:1`
- [ ] `.icon--directional` on every arrow and chevron that means a direction. `src/ui/icons/icons.ts:1`, `src/ui/components/link.ts:1`
- [ ] The course map's path runs from the right. `src/learn/map-view.ts:1`
- [ ] `isolate()`, and test `isolate_wraps_text_in_first_strong_isolates`. `src/i18n/format.ts:1`, `src/i18n/format.test.ts:1`
- [ ] `dir="auto"` on every text field. `src/library/search.ts:1`
- [ ] Tests `a_right_to_left_page_mirrors_its_layout`, `the_piano_and_the_staff_never_mirror` and `a_directional_icon_points_the_reading_way`. `e2e/rtl.e2e.ts:1`
- [ ] The site design gains a section on direction. `docs/site-design.md:162`
- [ ] Look at the landing, the map, a lesson, the player and the settings in `ar-XB` with `bun run shot`, on a phone and a desktop.

### 3. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

The goal is written, on the chain behind `hindi` and ahead of `arabic`. No stage has started.

### Next

**Stage 1: the page's direction, logical CSS and a right-to-left pseudo-locale.** Files: `tools/build.ts`,
`src/site/site.ts`, `src/i18n/pseudo.ts` and every stylesheet the subagent lists. Gate: the `en-XA`
pages of `many-locales` build.

Expected red: the layout checks in `ar-XB`, until stage 2 sets `dir="ltr"` on the music.

### Backlog

- A number in a right-to-left sentence may need its own isolation once Arabic texts exist.

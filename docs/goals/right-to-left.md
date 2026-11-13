---
looper: 1
title: Right to left
summary: "A right-to-left locale mirrors every page's layout, while the piano, the notes, the staff and the song's timeline keep their direction."
context: [docs/goals/many-locales.md, src/i18n/locale.ts, src/ui/base.css, src/ui/icons/icons.ts, src/learn/map-view.ts]
stages:
  - id: 1
    title: "The page's direction, logical CSS and a right-to-left pseudo-locale"
    status: done
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
- **The pseudo-locales are rows of `PSEUDO_ROWS`,** and `isPseudoLocale` names them. `pseudo()` and
  `pseudoTree()` take the pseudo-locale, `en-XA` when absent, so every caller of `textFor` serves both.
- **What CSS cannot name logically reads helpers at the end of `src/ui/base.css`.** They are
  `--side-start`, `--side-end`, `--inline-sign`, `--safe-start` and `--safe-end`. They are set on
  `:root` and on every `[dir]`, so the music's `dir="ltr"` resets them inside it.
- **A box centred by `left: 50%` and `translate(-50%)` stays physical,** since it lands the same either
  way. The test treats a `translate` by `-50%` as no side, and the `left` carries its marker.
- **A position measured or projected from physical coordinates stays physical.** That covers a
  tooltip, the 3D scene's cards and pops, the settings nav's marker and the colour picker's axes.

## Stages

### 1. The page's direction, logical CSS and a right-to-left pseudo-locale

**Does:** `dir` on every page, every physical side in CSS made logical, and `ar-XB` pages.
**Split:** a read-only `Explore` subagent lists every physical side across `src/**/*.css` and every
`style.left` or `style.right` set from TypeScript. Writing subagents convert them, one per folder of
`src/`, side by side.
**Gate:** `src/i18n/pseudo.ts` exists and `en-XA` pages build.

- [x] The build writes `dir`, and the language switch sets it. `tools/build.ts:224`, `src/site/site.ts:136`
- [x] `ar-XB` in the table, built from the English by `pseudo()`. `src/i18n/pseudo.ts:1`
- [x] Every physical side the subagent lists becomes logical, or carries its `ltr:` reason. `src/app/player.css:45`, `src/game/game-hud.css:205`, `src/input/history.css:25`
- [x] Every left or right set from TypeScript reads the direction. `src/ui/layout-geometry.ts:1`
- [x] Test `no_stylesheet_uses_a_physical_side`. `tools/css-sides.test.ts:1`
- [x] The layout checks run in `ar-XB` at every width. `e2e/layout-check.ts:43`

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

Stage 1 is done. Every page carries `dir` from its row, and the language switch sets it. A `--pseudo`
build writes `ar-XB/` pages with `dir="rtl"`. `tools/css-sides.test.ts` passes, with every physical
side made logical or marked. The landing, the site bar and the onboarding dialog mirror in `ar-XB`.

The TypeScript sides need no change. The tooltip already reads the direction, and the rest are
measured coordinates or music. `src/settings/panel.ts` scrolls its nav by negative `scrollLeft` in
right-to-left, which no screenshot has checked yet.

### Next

**Stage 2: what mirrors and what never does.** Files: `src/render/piano-keys.ts`,
`src/sheet/sheet-view.ts`, `src/play/timeline.ts`, `src/ui/icons/icons.ts`, `src/learn/map-view.ts`,
`src/i18n/format.ts` and `e2e/rtl.e2e.ts`.

- `dir="ltr"` on the music's roots. Add the play-modes preview of the note lanes, `src/play-modes/modes-view.css:196`, whose notes use `inset-inline-start` now.
- The course map: `src/learn/map-view.ts:95` draws the road from a physical x, and `src/learn/map-view.css:338` places the stops from the same x. Mirror the x in the script for both.
- `.icon--directional`: the "Start learning" arrow on the landing still points right in `ar-XB`.
- The hero's highlighted last word, "Easy", shows unoverridden in `ar-XB`. Its script splits the title, so the override wraps only the first part.
- Look at the settings nav in `ar-XB` on a phone, and check that the marker and the scroll follow the current section.

Expected red: the layout checks in `ar-XB`, in `e2e/play.e2e.ts` and every file that loops over
`LOCALES` of `e2e/layout-check.ts`, until stage 2 lands.

### Backlog

- A number in a right-to-left sentence may need its own isolation once Arabic texts exist.
- `src/ui/color-picker.ts:151` builds the alpha fill inline as `linear-gradient(to right, …)`. It
  matches the picker's physical axes, but the CSS test cannot see a gradient set from a script.

---
looper: 1
title: Urdu
summary: "Every text of the site, the course and the song guides reads in Urdu as if a native teacher wrote it, and the Urdu site ships."
context: [docs/agent/translation.md, docs/decisions/0012.md, docs/goals/many-locales.md, docs/goals/right-to-left.md, src/i18n/locale.ts, src/i18n/typography.ts]
stages:
  - id: 1
    title: The Urdu style guide and glossary
    status: open
  - id: 2
    title: The site and the player in Urdu
    status: open
  - id: 3
    title: The course in Urdu
    status: open
  - id: 4
    title: "The song guides in Urdu, from a to m"
    status: open
  - id: 5
    title: "The song guides in Urdu, from n to z"
    status: open
  - id: 6
    title: The Urdu site ships
    status: open
  - id: 7
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: urdu-rules
    stage: 2
    name: every Urdu text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [urdu_texts_keep_their_rules]
  - id: urdu-site
    stage: 6
    name: the Urdu site reads in Urdu
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_urdu_site_reads_in_urdu]
---

# Urdu

## Why

About 245 million people read Urdu, most of them in Pakistan and India. Most of them read English
poorly, so an English course does not reach them. Urdu reads from right to left, which the
`right-to-left` goal built and `arabic` proved. Its script style is Nastaliq, whose sloping lines need a
taller line than Arabic's Naskh. The method in [docs/agent/translation.md](../agent/translation.md)
already carries what the `spanish` pilot taught.

## Standing decisions

- **The method is [docs/agent/translation.md](../agent/translation.md),** step by step. This goal adds
  only what is Urdu.
- **Each decision below is confirmed by the style guide in stage 1,** against its sources. Or the guide
  changes it, with a recorded reason.
- **The variety is standard Urdu as written in Pakistan,** in the everyday register of Pakistani apps.
  `Intl` uses `ur-PK`.
- **A common English loanword is written in Urdu script** where Urdu apps use it. The text avoids words
  found only in Hindi or only in Persian.
- **The direction is settled.** `right-to-left` is reached long before this goal, and `arabic` proved it.
  Isolation, `dir` and no `letter-spacing` apply to every Urdu text.
- **The learner is آپ.** An instruction uses the polite form, such as منتخب کریں or دبائیں.
- **The learner's gender stays out of the text where it can.** An Urdu verb agrees with gender, so the
  text prefers constructions that name none. Where that is impossible, it uses the honorific plural with
  آپ, and the guide names that form.
- **Notes are letters:** C D E F G A B, each isolated inside Urdu text.
- **The marks:** `۔` (U+06D4) ends a sentence. The comma is `،` and the question mark is `؟`.
- **Numbers follow `Intl` for `ur-PK`,** which writes Western digits, unless the guide's sources settle
  otherwise. No digit or separator is set by hand.
- **The script style is Nastaliq.** The Nastaliq font stack of `many-locales` applies, with Naskh as the
  fallback. Nastaliq needs a taller line, so the look check covers clipped ascenders and descenders.
- **The layout checks in `ur` run at every width,** as those in `ar-XB` do.
- **The kept words:** *Learn Piano Easy*, *MIDI*, the song titles and the composers' names.
- **Lanes:** stage 1 comes first. Stages 2 to 5 touch disjoint files, but each follows the glossary
  stage 1 writes, so they run in order. Stage 6 needs all of them.

## Stages

### 1. The Urdu style guide and glossary

**Does:** writes `docs/reference/translation/ur.md` in the shape the method names, and fills the Urdu
entry of the rule table.
**Split:** a read-only `reader` subagent lists every recurring music term and interface term in the English
catalogs, lessons and guides, with a count. `web-fetch` subagents, sent together, read the sources and
report what each settles.
**Gate:** `tools/i18n.ts` and `src/i18n/typography.ts` exist.

- [ ] The term list: every music and interface term the English uses more than once. `docs/reference/translation/ur.md:1`
- [ ] Microsoft's Urdu style guide: the address, the marks and the interface terms. `docs/reference/translation/ur.md:1`
- [ ] Urdu Wikipedia's music articles and Urdu-language piano methods: each music term with two sources. `docs/reference/translation/ur.md:1`
- [ ] Every section of the style guide, with calibration texts from every kind of text. `docs/reference/translation/ur.md:1`
- [ ] The Urdu entry of the rule table: script, kept words and the patterns of the marks. `src/i18n/typography.ts:1`
- [ ] The Urdu row of the locale table, confirmed or changed with its reason. `src/i18n/locale.ts:18`

### 2. The site and the player in Urdu

**Does:** every catalog section, translated, reviewed blind and stamped.
**Split:** three writing subagents translate side by side, one per item below. Three fresh reviewers
then review them blind, as the method says.
**Gate:** `docs/reference/translation/ur.md` exists.

- [ ] The site, its pages and *Learn Piano*. `src/i18n/messages/ur.ts:1`, `src/i18n/messages/learn-lesson.ur.ts:1`
- [ ] The player's shell, bar, library, input and play modes. `src/i18n/messages/player-shell.ur.ts:1`
- [ ] The player's settings. `src/i18n/messages/player-settings.ur.ts:1`
- [ ] Each batch reviewed blind, every finding settled, and every *wrong* batch reviewed again.
- [ ] `bun x tsc` and `urdu_texts_keep_their_rules` pass, with every argument isolated. `src/i18n/translation-rules.test.ts:1`
- [ ] `bun run i18n stamp ur` for each catalog section. `src/i18n/stamps/ur.json:1`

### 3. The course in Urdu

**Does:** every lesson of every world, translated, reviewed blind and stamped.
**Split:** five writing subagents, side by side, in batches sized by the method. *Expression* and *Both
hands* each go alone. *Chords* goes with *Rhythm*, *Reading music* with *Meet the piano*, and *Scales and
keys* with *First melodies*. Five fresh reviewers then review the five batches blind.
**Gate:** stage 2's catalogs are stamped.

- [ ] *Meet the piano* and *First melodies*. `src/learn/lessons/meet-the-piano/texts.ur.ts:1`, `src/learn/lessons/first-melodies/texts.ur.ts:1`
- [ ] *Rhythm* and *Reading music*. `src/learn/lessons/rhythm/texts.ur.ts:1`, `src/learn/lessons/reading-music/texts.ur.ts:1`
- [ ] *Both hands* and *Chords*. `src/learn/lessons/both-hands/texts.ur.ts:1`, `src/learn/lessons/chords/texts.ur.ts:1`
- [ ] *Scales and keys* and *Expression*. `src/learn/lessons/scales-and-keys/texts.ur.ts:1`, `src/learn/lessons/expression/texts.ur.ts:1`
- [ ] Each world reviewed blind, and every finding settled.
- [ ] `bun run i18n stamp ur` for each world. `src/i18n/stamps/ur.json:1`

### 4. The song guides in Urdu, from a to m

**Does:** the guide of every song whose slug starts with a letter from a to m.
**Split:** `bun run i18n status ur` lists those slugs as `guide/<slug>` units. Writing subagents of at
most eight guides each work side by side, and one fresh reviewer per batch reviews it blind.
**Gate:** stage 3's worlds are stamped.

- [ ] One `tools/our-songs/<slug>.ur.ts` per slug from `alle-jahre-wieder` to `morgen-kinder`. `tools/our-songs/alle-jahre-wieder.ur.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp ur` stamps them. `public/songs/ours/alle-jahre-wieder/guide.json:1`

### 5. The song guides in Urdu, from n to z

**Does:** the guide of every song whose slug starts with a letter from n to z.
**Split:** as stage 4.
**Gate:** stage 4's guides are stamped.

- [ ] One `tools/our-songs/<slug>.ur.ts` per slug from `o-christmas-tree` to `yankee-doodle`. `tools/our-songs/o-christmas-tree.ur.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp ur` stamps them. `public/songs/ours/o-christmas-tree/guide.json:1`

### 6. The Urdu site ships

**Does:** one read of the whole locale for consistency, then `ur` ships, and every page is looked at.
**Split:** a fresh `reader` subagent reads every Urdu file against the glossary, and lists each term,
address or mark that drifts between files.
**Gate:** `bun run i18n status ur` lists no missing and no stale text outside `legal`.

- [ ] Every drift the reader lists is settled in the files it names.
- [ ] `ur` is `shipped`. `src/i18n/locale.ts:18`
- [ ] The Urdu social image. `tools/make-social-image.ts:104`
- [ ] The layout checks run in `ur` at every width. `e2e/layout-check.ts:43`
- [ ] Test `the_urdu_site_reads_in_urdu`: `lang`, `dir`, the switch's *اردو*, a lesson step and the player in Urdu. `e2e/locales.e2e.ts:1`
- [ ] Look at every route in `ur` with `bun run shot --locale ur-PK`, on a phone and a desktop, in both themes. No ascender or descender is clipped.
- [ ] Look for any character drawn as a missing-glyph box, in Chrome on Windows and on an Android phone width.
- [ ] The feature list and the README name Urdu. `docs/reference/features.md:1`, `README.md:12`

### 7. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

The goal is written, behind `french` on the chain. No stage has started.

### Next

**Stage 1: the Urdu style guide and glossary.** Files: `docs/reference/translation/ur.md`,
`src/i18n/typography.ts` and `src/i18n/locale.ts`. Gate: `french` is reached.

Expected red: none.

### Backlog

- A read of the course by an Urdu speaker from India would catch words that read as Pakistan's only.

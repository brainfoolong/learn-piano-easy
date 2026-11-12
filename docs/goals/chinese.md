---
looper: 1
title: Chinese
summary: "Every text of the site, the course and the song guides reads in Chinese as if a native teacher wrote it, and the Chinese site ships."
context: [docs/agent/translation.md, docs/decisions/0012.md, docs/goals/many-locales.md, src/i18n/locale.ts, src/i18n/typography.ts]
stages:
  - id: 1
    title: The Chinese style guide and glossary
    status: open
  - id: 2
    title: The site and the player in Chinese
    status: open
  - id: 3
    title: The course in Chinese
    status: open
  - id: 4
    title: "The song guides in Chinese, from a to m"
    status: open
  - id: 5
    title: "The song guides in Chinese, from n to z"
    status: open
  - id: 6
    title: The Chinese site ships
    status: open
  - id: 7
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: chinese-rules
    stage: 2
    name: every Chinese text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [chinese_texts_keep_their_rules]
  - id: chinese-site
    stage: 6
    name: the Chinese site reads in Chinese
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_chinese_site_reads_in_chinese]
---

# Chinese

## Why

About 1.2 billion people read Chinese, and most of them read English poorly. A beginner should not have
to learn the piano and a second language at once. Chinese is the first locale in a script other than
Latin. It puts no space between words, uses full-width marks and has no plural forms. The method in
[docs/agent/translation.md](../agent/translation.md) already carries what the `spanish` pilot taught.

## Standing decisions

- **The method is [docs/agent/translation.md](../agent/translation.md),** step by step. This goal adds
  only what is Chinese.
- **Each fact below is a decision.** Stage 1 confirms it against the guide's sources, or changes it and
  records the reason.
- **The variety is Simplified Chinese as mainland China writes it,** with `lang` `zh-Hans` and the `Intl`
  tag `zh-Hans-CN`. Readers of Traditional Chinese also reach this locale. So the text avoids words used
  only in one region.
- **The learner is `你`, never `您`.** No `他` or `她` stands for the learner.
- **To play the piano is `弹`, as in `弹钢琴`.** Starting a song's playback is `播放`, and a game is
  `游戏`. The glossary settles each "play" by where it is used.
- **Notes are letters:** C D E F G A B. A key is `C 大调` or `a 小调`. The syllables of `唱名`, do re mi,
  appear only where the English means singing. The note letters count as kept words in the rule table.
- **The marks are full width:** `，。？！：；`. Quotes are `“ ”`, as the standard GB/T 15834 sets.
- **No space stands between two Han characters.** The style guide settles the space between a Han
  character and a Latin letter or a digit.
- **Chinese runs shorter than English,** so the layout's risk is a line that breaks in a bad place. The
  `line-break: strict` rule of `many-locales` applies.
- **Numbers follow `Intl` for `zh-Hans-CN`.** No digit or separator is set by hand.
- **Chinese has no plural forms.** `Intl` names only `other`, so a counted message has one form.
- **The kept words:** *Learn Piano Easy*, *MIDI*, the song titles and the composers' names. The script
  is Han, and the kept words are written in Latin letters.
- **Lanes:** stage 1 comes first. Stages 2 to 5 touch disjoint files, but each follows the glossary
  stage 1 writes, so they run in order. Stage 6 needs all of them.

## Stages

### 1. The Chinese style guide and glossary

**Does:** writes `docs/reference/translation/zh.md` in the shape the method names, and fills the Chinese
entry of the rule table.
**Split:** a read-only `reader` subagent lists every recurring music term and interface term in the English
catalogs, lessons and guides, with a count. `web-fetch` subagents, sent together, read the sources and
report what each settles.
**Gate:** `tools/i18n.ts` and `src/i18n/typography.ts` exist.

- [ ] The term list: every music and interface term the English uses more than once. `docs/reference/translation/zh.md:1`
- [ ] Microsoft's Simplified Chinese style guide and GB/T 15834: the address, the marks and the interface terms. `docs/reference/translation/zh.md:1`
- [ ] Chinese Wikipedia's music articles and Chinese piano methods: each music term with two sources. `docs/reference/translation/zh.md:1`
- [ ] Every section of the style guide, with calibration texts from every kind of text. `docs/reference/translation/zh.md:1`
- [ ] The Chinese entry of the rule table: script, kept words and the patterns of the marks. `src/i18n/typography.ts:1`
- [ ] The Chinese row of the locale table, confirmed or changed with its reason. `src/i18n/locale.ts:18`

### 2. The site and the player in Chinese

**Does:** every catalog section, translated, reviewed blind and stamped.
**Split:** three writing subagents translate side by side, one per item below. Three fresh reviewers
then review them blind, as the method says.
**Gate:** `docs/reference/translation/zh.md` exists.

- [ ] The site, its pages and *Learn Piano*. `src/i18n/messages/zh.ts:1`, `src/i18n/messages/learn-lesson.zh.ts:1`
- [ ] The player's shell, bar, library, input and play modes. `src/i18n/messages/player-shell.zh.ts:1`
- [ ] The player's settings. `src/i18n/messages/player-settings.zh.ts:1`
- [ ] Each batch reviewed blind, every finding settled, and every *wrong* batch reviewed again.
- [ ] `bun x tsc` and `chinese_texts_keep_their_rules` pass. `src/i18n/translation-rules.test.ts:1`
- [ ] `bun run i18n stamp zh` for each catalog section. `src/i18n/stamps/zh.json:1`

### 3. The course in Chinese

**Does:** every lesson of every world, translated, reviewed blind and stamped.
**Split:** eight writing subagents, one per world, side by side. Eight fresh reviewers then review them
blind.
**Gate:** stage 2's catalogs are stamped.

- [ ] *Meet the piano* and *First melodies*. `src/learn/lessons/meet-the-piano/texts.zh.ts:1`, `src/learn/lessons/first-melodies/texts.zh.ts:1`
- [ ] *Rhythm* and *Reading music*. `src/learn/lessons/rhythm/texts.zh.ts:1`, `src/learn/lessons/reading-music/texts.zh.ts:1`
- [ ] *Both hands* and *Chords*. `src/learn/lessons/both-hands/texts.zh.ts:1`, `src/learn/lessons/chords/texts.zh.ts:1`
- [ ] *Scales and keys* and *Expression*. `src/learn/lessons/scales-and-keys/texts.zh.ts:1`, `src/learn/lessons/expression/texts.zh.ts:1`
- [ ] Each world reviewed blind, and every finding settled.
- [ ] `bun run i18n stamp zh` for each world. `src/i18n/stamps/zh.json:1`

### 4. The song guides in Chinese, from a to m

**Does:** the guide of every song whose slug starts with a letter from a to m.
**Split:** a read-only `Explore` subagent lists those slugs. Three writing subagents take a third each,
side by side, and three fresh reviewers review them blind.
**Gate:** stage 3's worlds are stamped.

- [ ] One `tools/our-songs/<slug>.zh.ts` per slug from `alle-jahre-wieder` to `morgen-kinder`. `tools/our-songs/alle-jahre-wieder.zh.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp zh` stamps them. `public/songs/ours/alle-jahre-wieder/guide.json:1`

### 5. The song guides in Chinese, from n to z

**Does:** the guide of every song whose slug starts with a letter from n to z.
**Split:** as stage 4.
**Gate:** stage 4's guides are stamped.

- [ ] One `tools/our-songs/<slug>.zh.ts` per slug from `o-christmas-tree` to `yankee-doodle`. `tools/our-songs/o-christmas-tree.zh.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp zh` stamps them. `public/songs/ours/o-christmas-tree/guide.json:1`

### 6. The Chinese site ships

**Does:** one read of the whole locale for consistency, then `zh` ships, and every page is looked at.
**Split:** a fresh `reader` subagent reads every Chinese file against the glossary, and lists each term,
address or mark that drifts between files.
**Gate:** `bun run i18n status zh` lists no missing and no stale text outside `legal`.

- [ ] Every drift the reader lists is settled in the files it names.
- [ ] `zh` is `shipped`. `src/i18n/locale.ts:18`
- [ ] The Chinese social image. `tools/make-social-image.ts:104`
- [ ] The layout checks run in `zh` at 360 and 1280 pixels. `e2e/layout-check.ts:43`
- [ ] Test `the_chinese_site_reads_in_chinese`: `lang`, the switch's *简体中文*, a lesson step and the player in Chinese. `e2e/locales.e2e.ts:1`
- [ ] Look at every route in `zh` with `bun run shot --locale zh-CN`, on a phone and a desktop, in both themes.
- [ ] Look for any character drawn as a missing-glyph box, in Chrome on Windows and on an Android phone width.
- [ ] The feature list and the README name Chinese. `docs/reference/features.md:1`, `README.md:12`

### 7. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

The goal is written, behind `spanish` on the chain. No stage has started.

### Next

**Stage 1: the Chinese style guide and glossary.** Files: `docs/reference/translation/zh.md`,
`src/i18n/typography.ts` and `src/i18n/locale.ts`. Gate: `spanish` is reached.

Expected red: none.

### Backlog

- A Traditional Chinese locale, `zh-Hant`, could follow if readers in Taiwan and Hong Kong ask for one.

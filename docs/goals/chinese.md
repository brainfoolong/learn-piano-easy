---
looper: 1
title: Chinese
summary: "Every text of the site, the course and the song guides reads in Chinese as if a native teacher wrote it, and the Chinese site ships."
context: [docs/agent/translation.md, docs/decisions/0012.md, docs/goals/many-locales.md, src/i18n/locale.ts, src/i18n/typography.ts]
stages:
  - id: 1
    title: The Chinese style guide and glossary
    status: done
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
- **Notes are letters:** C D E F G A B. A key is `C 大调` or `A 小调`, its letter always uppercase. The
  syllables of `唱名`, do re mi, appear only where the English means singing. Stage 1 changed the minor
  key's lowercase letter: one form is simpler, and the rules test already skips an uppercase note letter.
- **The marks are full width:** `，。？！：；`. Quotes are `“ ”`, as the standard GB/T 15834 sets.
- **No space stands between two Han characters.** A half-width space stands between a Han character and a
  Latin letter or a digit, as Microsoft's, Apple's and Google's Chinese texts set it. So it is `中央 C`,
  though Chinese Wikipedia writes `中央C`.
- **Chinese runs shorter than English,** so the layout's risk is a line that breaks in a bad place. The
  `line-break: strict` rule of `many-locales` applies.
- **Numbers follow `Intl` for `zh-Hans-CN`.** No digit or separator is set by hand.
- **Chinese has no plural forms.** `Intl` names only `other`, so a counted message has one form.
- **The kept words:** *Learn Piano Easy*, *MIDI*, the units, the printed marks such as `f` and `rit.`,
  and the library's song titles. The script is Han, and the kept words are written in Latin letters.
- **In prose, a work and a composer take their usual Chinese names,** as Chinese Wikipedia gives them:
  `贝多芬`, `《欢乐颂》`. Stage 1 changed this from keeping the Latin names, since a native teacher never
  writes *Beethoven* in a Chinese sentence. A work with no Chinese name keeps its English title in `《》`,
  and its writer adds the title to the `kept` list.
- **The rules test counts a kept word only where no Latin letter touches it.** Stage 1 made this change,
  so the syllable `re` never cuts into an English word.
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

- [x] The term list: every music and interface term the English uses more than once. `docs/reference/translation/zh.md:1`
- [x] Microsoft's Simplified Chinese style guide and GB/T 15834: the address, the marks and the interface terms. `docs/reference/translation/zh.md:1`
- [x] Chinese Wikipedia's music articles and Chinese piano methods: each music term with two sources. `docs/reference/translation/zh.md:1`
- [x] Every section of the style guide, with calibration texts from every kind of text. `docs/reference/translation/zh.md:1`
- [x] The Chinese entry of the rule table: script, kept words and the patterns of the marks. `src/i18n/typography.ts:1`
- [x] The Chinese row of the locale table, confirmed or changed with its reason. `src/i18n/locale.ts:18`

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

Stage 1 is done. `docs/reference/translation/zh.md` holds every section the method names. Its glossary
covers the Spanish guide's terms and the gaps a term count found, such as lift, hand shape and the
judgement words. The `zh` entry of `src/i18n/typography.ts` holds the kept words and eleven mark rules.
Test `the_chinese_marks_hold_and_spare_kept_words` pins them. The locale table's `zh` row is confirmed
as it stands, so `src/i18n/locale-table.ts` did not change.

### Next

**Stage 2: the site and the player in Chinese.** Follow `docs/agent/translation.md` § *A pass, step by
step*, with `bun tools/i18n.ts status zh` and `work zh <unit>`. Catalogs: `src/i18n/messages/<section>.en.ts`,
written as `<section>.zh.ts` beside the `.es.ts` files. Each writer's brief carries the whole of
`docs/reference/translation/zh.md`. `src/i18n/locale.ts:44` needs a `zh` entry in `CATALOG_CHUNKS` once
`src/i18n/messages/zh.ts` exists. Copy `es`'s line.

Expected red: none.

### Backlog

- A Traditional Chinese locale, `zh-Hant`, could follow if readers in Taiwan and Hong Kong ask for one.
- A mainland piano teacher could confirm the guide's unsourced terms, which its § *Open* lists.

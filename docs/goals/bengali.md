---
looper: 1
title: Bengali
summary: "Every text of the site, the course and the song guides reads in Bengali as if a native teacher wrote it, and the Bengali site ships."
context: [docs/agent/translation.md, docs/decisions/0012.md, docs/goals/many-locales.md, src/i18n/locale.ts, src/i18n/typography.ts]
stages:
  - id: 1
    title: The Bengali style guide and glossary
    status: open
  - id: 2
    title: The site and the player in Bengali
    status: open
  - id: 3
    title: The course in Bengali
    status: open
  - id: 4
    title: "The song guides in Bengali, from a to m"
    status: open
  - id: 5
    title: "The song guides in Bengali, from n to z"
    status: open
  - id: 6
    title: The Bengali site ships
    status: open
  - id: 7
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: bengali-rules
    stage: 2
    name: every Bengali text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [bengali_texts_keep_their_rules]
  - id: bengali-site
    stage: 6
    name: the Bengali site reads in Bengali
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_bengali_site_reads_in_bengali]
---

# Bengali

## Why

About 285 million people read Bengali, in Bangladesh and in the Indian state of West Bengal. Most of them
read English poorly, so an English course does not reach them. Bengali is the first locale in the
Bengali script, which stacks consonants into conjuncts and draws vowel signs around them. It also ends a
sentence with the dari `।` and counts in its own digits. The method in
[docs/agent/translation.md](../agent/translation.md) already carries what the `spanish` pilot taught.

## Standing decisions

- **The method is [docs/agent/translation.md](../agent/translation.md),** step by step. This goal adds
  only what is Bengali.
- **Each decision below is confirmed by the style guide in stage 1,** against its sources. Or the guide
  changes it, with a recorded reason.
- **The variety is standard written Bengali,** the *chalit* form, with Bangla Academy spelling. `Intl`
  uses `bn-BD`. The text must read naturally in West Bengal too, so it avoids words used in one country only.
- **The learner is আপনি.** An instruction is the polite imperative of আপনি, such as চাপুন or বেছে নিন.
- **The learner's gender stays out of the text.** A Bengali verb has no gender, so the risk is a noun or
  an adjective that describes the learner. The text avoids both.
- **Notes are letters:** C D E F G A B. Sargam is never used, since it is movable and a different system.
- **The marks:** the dari `।` ends a sentence.
- **A count in a sentence uses CLDR's default digits for `bn`,** which are Bengali digits, unless the
  guide's sources settle otherwise. Fingers, octaves and bars keep Western digits.
- **A common English loanword is written in Bengali script** where Bengali apps use it.
- **The script is Bengali,** with the font stack of `many-locales`. The look check covers conjuncts and
  vowel signs.
- **The kept words:** *Learn Piano Easy*, *MIDI*, the song titles and the composers' names.
- **Lanes:** stage 1 comes first. Stages 2 to 5 touch disjoint files, but each follows the glossary
  stage 1 writes, so they run in order. Stage 6 needs all of them.

## Stages

### 1. The Bengali style guide and glossary

**Does:** writes `docs/reference/translation/bn.md` in the shape the method names, and fills the Bengali
entry of the rule table.
**Split:** a read-only `reader` subagent lists every recurring music term and interface term in the English
catalogs, lessons and guides, with a count. `web-fetch` subagents, sent together, read the sources and
report what each settles.
**Gate:** `tools/i18n.ts` and `src/i18n/typography.ts` exist.

- [ ] The term list: every music and interface term the English uses more than once. `docs/reference/translation/bn.md:1`
- [ ] Microsoft's Bangla style guides, for Bangladesh and for India: the address, the marks and the interface terms. `docs/reference/translation/bn.md:1`
- [ ] Bengali Wikipedia's music articles and Bengali-language piano methods: each music term with two sources. `docs/reference/translation/bn.md:1`
- [ ] Every section of the style guide, with calibration texts from every kind of text. `docs/reference/translation/bn.md:1`
- [ ] The Bengali entry of the rule table: script, kept words and the patterns of the marks. `src/i18n/typography.ts:1`
- [ ] The Bengali row of the locale table, confirmed or changed with its reason. `src/i18n/locale.ts:18`

### 2. The site and the player in Bengali

**Does:** every catalog section, translated, reviewed blind and stamped.
**Split:** three writing subagents translate side by side, one per item below. Three fresh reviewers
then review them blind, as the method says.
**Gate:** `docs/reference/translation/bn.md` exists.

- [ ] The site, its pages and *Learn Piano*. `src/i18n/messages/bn.ts:1`, `src/i18n/messages/learn-lesson.bn.ts:1`
- [ ] The player's shell, bar, library, input and play modes. `src/i18n/messages/player-shell.bn.ts:1`
- [ ] The player's settings. `src/i18n/messages/player-settings.bn.ts:1`
- [ ] Each batch reviewed blind, every finding settled, and every *wrong* batch reviewed again.
- [ ] `bun x tsc` and `bengali_texts_keep_their_rules` pass. `src/i18n/translation-rules.test.ts:1`
- [ ] `bun run i18n stamp bn` for each catalog section. `src/i18n/stamps/bn.json:1`

### 3. The course in Bengali

**Does:** every lesson of every world, translated, reviewed blind and stamped.
**Split:** eight writing subagents, one per world, side by side. Eight fresh reviewers then review them
blind.
**Gate:** stage 2's catalogs are stamped.

- [ ] *Meet the piano* and *First melodies*. `src/learn/lessons/meet-the-piano/texts.bn.ts:1`, `src/learn/lessons/first-melodies/texts.bn.ts:1`
- [ ] *Rhythm* and *Reading music*. `src/learn/lessons/rhythm/texts.bn.ts:1`, `src/learn/lessons/reading-music/texts.bn.ts:1`
- [ ] *Both hands* and *Chords*. `src/learn/lessons/both-hands/texts.bn.ts:1`, `src/learn/lessons/chords/texts.bn.ts:1`
- [ ] *Scales and keys* and *Expression*. `src/learn/lessons/scales-and-keys/texts.bn.ts:1`, `src/learn/lessons/expression/texts.bn.ts:1`
- [ ] Each world reviewed blind, and every finding settled.
- [ ] `bun run i18n stamp bn` for each world. `src/i18n/stamps/bn.json:1`

### 4. The song guides in Bengali, from a to m

**Does:** the guide of every song whose slug starts with a letter from a to m.
**Split:** a read-only `Explore` subagent lists those slugs. Three writing subagents take a third each,
side by side, and three fresh reviewers review them blind.
**Gate:** stage 3's worlds are stamped.

- [ ] One `tools/our-songs/<slug>.bn.ts` per slug from `alle-jahre-wieder` to `morgen-kinder`. `tools/our-songs/alle-jahre-wieder.bn.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp bn` stamps them. `public/songs/ours/alle-jahre-wieder/guide.json:1`

### 5. The song guides in Bengali, from n to z

**Does:** the guide of every song whose slug starts with a letter from n to z.
**Split:** as stage 4.
**Gate:** stage 4's guides are stamped.

- [ ] One `tools/our-songs/<slug>.bn.ts` per slug from `o-christmas-tree` to `yankee-doodle`. `tools/our-songs/o-christmas-tree.bn.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp bn` stamps them. `public/songs/ours/o-christmas-tree/guide.json:1`

### 6. The Bengali site ships

**Does:** one read of the whole locale for consistency, then `bn` ships, and every page is looked at.
**Split:** a fresh `reader` subagent reads every Bengali file against the glossary, and lists each term,
address or mark that drifts between files.
**Gate:** `bun run i18n status bn` lists no missing and no stale text outside `legal`.

- [ ] Every drift the reader lists is settled in the files it names.
- [ ] `bn` is `shipped`. `src/i18n/locale.ts:18`
- [ ] The Bengali social image. `tools/make-social-image.ts:104`
- [ ] The layout checks run in `bn` at 360 and 1280 pixels. `e2e/layout-check.ts:43`
- [ ] Test `the_bengali_site_reads_in_bengali`: `lang`, the switch's *বাংলা*, a lesson step and the player in Bengali. `e2e/locales.e2e.ts:1`
- [ ] Look at every route in `bn` with `bun run shot --locale bn-BD`, on a phone and a desktop, in both themes. Conjuncts and vowel signs draw whole.
- [ ] Look for any character drawn as a missing-glyph box, in Chrome on Windows and on an Android phone width.
- [ ] The feature list and the README name Bengali. `docs/reference/features.md:1`, `README.md:12`

### 7. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

The goal is written, behind `indonesian` on the chain. No stage has started.

### Next

**Stage 1: the Bengali style guide and glossary.** Files: `docs/reference/translation/bn.md`,
`src/i18n/typography.ts` and `src/i18n/locale.ts`. Gate: `indonesian` is reached.

Expected red: none.

### Backlog

- A native reader from Bangladesh and one from West Bengal would each catch words that read as the other country's.

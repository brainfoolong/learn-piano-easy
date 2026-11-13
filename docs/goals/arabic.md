---
looper: 1
title: Arabic
summary: "Every text of the site, the course and the song guides reads in Arabic as if a native teacher wrote it, and the Arabic site ships."
context: [docs/agent/translation.md, docs/decisions/0012.md, docs/goals/many-locales.md, docs/goals/right-to-left.md, src/i18n/locale.ts, src/i18n/typography.ts, src/i18n/format.ts]
stages:
  - id: 1
    title: The Arabic style guide and glossary
    status: done
  - id: 2
    title: The site and the player in Arabic
    status: done
  - id: 3
    title: The course in Arabic
    status: done
  - id: 4
    title: "The song guides in Arabic, from a to m"
    status: open
  - id: 5
    title: "The song guides in Arabic, from n to z"
    status: open
  - id: 6
    title: The Arabic site ships
    status: open
  - id: 7
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: arabic-rules
    stage: 2
    name: every Arabic text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [arabic_texts_keep_their_rules]
  - id: arabic-site
    stage: 6
    name: the Arabic site reads in Arabic
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_arabic_site_reads_in_arabic]
---

# Arabic

## Why

About 330 million people speak Arabic, across more than twenty countries, and most of them read English
poorly. A beginner should not have to learn the piano and a second language at once. Arabic is the first
translation read from right to left. It builds on the `right-to-left` goal, which mirrors each page while
the music keeps its direction. Arabic also needs six plural forms, a rule for gendered imperatives and
isolated arguments. The method in [docs/agent/translation.md](../agent/translation.md) already carries
what the `spanish` pilot taught.

## Standing decisions

- **The method is [docs/agent/translation.md](../agent/translation.md),** step by step. This goal adds
  only what is Arabic.
- **Each fact below is a decision.** Stage 1 confirms it against the guide's sources, or changes it and
  records the reason.
- **The variety is Modern Standard Arabic,** which readers in every Arab country understand. The text
  uses no dialect word.
- **The learner's gender stays out of the text.** A label or a button is a verbal noun, the *masdar*,
  such as `تشغيل`, or a plain noun, such as `الإعدادات`. Prose uses neutral constructions.
- **Where an imperative cannot be avoided, it is the masculine singular,** used as the generic form. The
  style guide states this.
- **Notes are solfège in Arabic script:** `دو ري مي فا صول لا سي`, as `many-locales` sets. Sharp is
  `دييز` and flat is `بيمول`, unless the guide's sources say otherwise.
- **The marks:** `،` `؛` `؟`. The style guide settles the quotes.
- **No tashkeel is written.** Tashkeel are the marks of short vowels, and they appear only where a word
  would be ambiguous without them.
- **The style guide settles the digits of a count,** Western or Arabic-Indic, from its sources and CLDR's
  default for `ar`. A choice against that default goes into the row's `Intl` tag, never into a text.
  Fingers, octaves and bars keep Western digits.
- **Every argument that may hold left-to-right text goes through `isolate()`.** The rules test checks
  it. No text uses `letter-spacing`, since it breaks the joined letters.
- **Arabic has six plural forms:** zero, one, two, few, many and other. A counted message needs all six.
- **The kept words:** *Learn Piano Easy*, *MIDI*, the song titles and the composers' names. They stay in
  Latin letters, so each one is isolated where a sentence holds it.
- **Stage 1 confirmed the facts above, with these changes,** each recorded in
  [docs/reference/translation/ar.md](../reference/translation/ar.md):
  - An instruction step in a lesson or a guide is the masculine singular imperative, since a teacher
    instructs so. Microsoft, Android and Firefox do the same. Labels and tooltips stay verbal nouns.
  - A composer with an Arabic Wikipedia article takes its Arabic spelling, such as `بيتهوفن`. A Latin
    name in every line reads foreign. Other names and every song title stay in Latin letters.
  - Quotes are `« »`, as Arabic Wikipedia prints them, against Microsoft's straight quotes.
  - Digits are Western. CLDR 48 gives `ar` Western digits, so the row's `intl` stays `ar`.
  - The plural forms `zero`, `one` and `two` show no digit: `لا دروس بعد`, `درس واحد`, `درسان`.
    Microsoft § 4.1.12 asks this.
- **Lanes:** stage 1 comes first. Stages 2 to 5 touch disjoint files, but each follows the glossary
  stage 1 writes, so they run in order. Stage 2 also waits for `right-to-left`. Stage 6 needs all of
  them.

## Stages

### 1. The Arabic style guide and glossary

**Does:** writes `docs/reference/translation/ar.md` in the shape the method names, and fills the Arabic
entry of the rule table.
**Split:** a read-only `reader` subagent lists every recurring music term and interface term in the English
catalogs, lessons and guides, with a count. `web-fetch` subagents, sent together, read the sources and
report what each settles.
**Gate:** `tools/i18n.ts` and `src/i18n/typography.ts` exist.

- [x] The term list: every music and interface term the English uses more than once. `docs/reference/translation/ar.md:1`
  - [x] The English rows of the Hindi guide's glossaries, which a reader listed from the same texts.
  - [x] Arabic terms for the piano glossary and the interface glossary.
- [x] Microsoft's Arabic style guide: the address, the marks, the digits and the interface terms. `docs/reference/translation/ar.md:1`
  - [x] The guide read, and what it settles reported by page.
  - [x] Android's and Firefox's Arabic strings for the interface terms it lacks.
- [x] Arabic Wikipedia's music articles and Arabic piano methods: each music term with two sources. `docs/reference/translation/ar.md:1`
  - [x] Arabic Wikipedia's music articles read in their wikitext.
  - [x] MuseScore's and two music apps' Arabic strings as the second source. No piano method was reachable.
- [x] Every section of the style guide, with calibration texts from every kind of text. `docs/reference/translation/ar.md:1`
  - [x] The twelve sections, the guides' recurring steps and *Open*.
  - [x] Twenty-one calibration rows.
- [x] The Arabic entry of the rule table: script, kept words and the patterns of the marks. `src/i18n/typography.ts:1`
  - [x] The kept words shared with Hindi in one list.
  - [x] Eleven mark rules, each stated in § 9 of the guide.
- [x] The Arabic row of the locale table, confirmed or changed with its reason. `src/i18n/locale.ts:18`
  - [x] `intl` `ar` writes Western digits under CLDR 48, so the row stays as it is.

### 2. The site and the player in Arabic

**Does:** every catalog section, translated, reviewed blind and stamped.
**Split:** three writing subagents translate side by side, one per item below. Three fresh reviewers
then review them blind, as the method says.
**Gate:** `docs/reference/translation/ar.md` exists, and `right-to-left` is reached.

- [x] The site, its pages and *Learn Piano*. `src/i18n/messages/ar.ts:1`, `src/i18n/messages/learn-lesson.ar.ts:1`
  - [x] Eight files written by one writer, with every argument isolated.
  - [x] `ar` added to `CATALOG_CHUNKS` and to `CATALOGS`.
- [x] The player's shell, bar, library, input and play modes. `src/i18n/messages/player-shell.ar.ts:1`
  - [x] Five files written by one writer.
- [x] The player's settings. `src/i18n/messages/player-settings.ar.ts:1`
  - [x] The panel and its look settings by one writer, the play settings by another.
  - [x] A key's tonic in Arabic solfège, as Spanish writes it.
- [x] Each batch reviewed blind, every finding settled, and every *wrong* batch reviewed again.
  - [x] Four blind reviews, 5 *wrong* findings, all settled with the glossary first.
  - [x] Four second reviews. The one *wrong* left was a missing space after a colon, fixed without a third read.
- [x] `bun x tsc` and `arabic_texts_keep_their_rules` pass, with every argument isolated. `src/i18n/translation-rules.test.ts:1`
  - [x] The isolation check accepts a number's decimals, such as `12.50`.
  - [x] The fixture of Arabic-Indic digits runs without the mark rules that refuse them.
- [x] `bun run i18n stamp ar` for each catalog section. `src/i18n/stamps/ar.json:1`

### 3. The course in Arabic

**Does:** every lesson of every world, translated, reviewed blind and stamped.
**Split:** eight writing subagents, one per world, side by side. Eight fresh reviewers then review them
blind.
**Gate:** stage 2's catalogs are stamped.

- [x] *Meet the piano* and *First melodies*. `src/learn/lessons/meet-the-piano/black-key-groups.ar.ts:1`, `src/learn/lessons/first-melodies/hands-take-turns.ar.ts:1`
  - [x] Nine lesson files and `texts.ar.ts` per world, by one writer each.
  - [x] `ar` added to each world's `translations` in its `index.ts`.
- [x] *Rhythm* and *Reading music*. `src/learn/lessons/rhythm/counting-to-four.ar.ts:1`, `src/learn/lessons/reading-music/bass-landmarks.ar.ts:1`
- [x] *Both hands* and *Chords*. `src/learn/lessons/both-hands/a-held-bass-note.ar.ts:1`, `src/learn/lessons/chords/alberti-bass.ar.ts:1`
- [x] *Scales and keys* and *Expression*. `src/learn/lessons/scales-and-keys/f-major.ar.ts:1`, `src/learn/lessons/expression/crescendo-and-diminuendo.ar.ts:1`
- [x] Each world reviewed blind, and every finding settled.
  - [x] Eight blind reviews, 5 *wrong* findings, all settled.
  - [x] *Reading music* and *Both hands* reviewed again. The four *wrong* findings of the second read broke a rule set after their fixer ran, and were fixed without a third read.
  - [x] The rulings that bind every world written into the style guide.
- [x] `bun run i18n stamp ar` for each world. `src/i18n/stamps/ar.json:1`

### 4. The song guides in Arabic, from a to m

**Does:** the guide of every song whose slug starts with a letter from a to m.
**Split:** a read-only `Explore` subagent lists those slugs. Three writing subagents take a third each,
side by side, and three fresh reviewers review them blind.
**Gate:** stage 3's worlds are stamped.

- [ ] One `tools/our-songs/<slug>.ar.ts` per slug from `alle-jahre-wieder` to `morgen-kinder`. `tools/our-songs/alle-jahre-wieder.ar.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp ar` stamps them. `public/songs/ours/alle-jahre-wieder/guide.json:1`

### 5. The song guides in Arabic, from n to z

**Does:** the guide of every song whose slug starts with a letter from n to z.
**Split:** as stage 4.
**Gate:** stage 4's guides are stamped.

- [ ] One `tools/our-songs/<slug>.ar.ts` per slug from `o-christmas-tree` to `yankee-doodle`. `tools/our-songs/o-christmas-tree.ar.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp ar` stamps them. `public/songs/ours/o-christmas-tree/guide.json:1`

### 6. The Arabic site ships

**Does:** one read of the whole locale for consistency, then `ar` ships, and every page is looked at.
**Split:** a fresh `reader` subagent reads every Arabic file against the glossary, and lists each term,
address or mark that drifts between files.
**Gate:** `bun run i18n status ar` lists no missing and no stale text outside `legal`.

- [ ] Every drift the reader lists is settled in the files it names.
- [ ] `ar` is `shipped`. `src/i18n/locale.ts:18`
- [ ] The Arabic social image. `tools/make-social-image.ts:104`
- [ ] The layout checks run in `ar` at every width, not only at 360 and 1280 pixels. `e2e/layout-check.ts:43`
- [ ] Test `the_arabic_site_reads_in_arabic`: `lang`, the switch's *العربية*, a lesson step and the player in Arabic. `e2e/locales.e2e.ts:1`
- [ ] Look at every route in `ar` with `bun run shot --locale ar-EG`, on a phone and a desktop, in both themes.
- [ ] Look at every route mirrored, and check that the music did not mirror.
- [ ] Look for any character drawn as a missing-glyph box, in Chrome on Windows and on an Android phone width.
- [ ] The feature list and the README name Arabic. `docs/reference/features.md:1`, `README.md:12`

### 7. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stages 1 to 3 are done. Every catalog section and every lesson of the eight worlds has its Arabic file,
reviewed blind and stamped in `src/i18n/stamps/ar.json`. Each world's `index.ts` loads `texts.ar`. `ar` is
not shipped yet. `bun x tsc`, the build and `arabic_texts_keep_their_rules` are green. `status` lists one
lesson text as missing on purpose: the answers `1`, `3`, `5` of `finger-numbers`, which equal the English.

### Next

**Stage 4: the song guides from a to m.** Gate: stage 3's worlds are stamped, and they are.

- A read-only `Explore` subagent lists the slugs of `tools/our-songs/*.ts` from `a` to `m`. Split them in
  three, and run `bun tools/i18n.ts work ar guide/<slug>` for each.
- Each guide is `tools/our-songs/<slug>.ar.ts`, shaped like its `.hi.ts` sibling.
- The lesson briefs are in `.agent-tmp/i18n/ar/`: `brief-lesson-writer.md`, `brief-lesson-reviewer.md`
  and `brief-lesson-fixer.md`. Adapt their paths from a world to a batch of guides. The fixer brief
  holds the rulings that bind every text, so give its rules section to the writers too.
- The rulings stage 3 settled, now in `docs/reference/translation/ar.md`:
  - A count from 3 to 10 is a digit (§ 8), quiz answers included: `4 موازير`. A count with the article,
    such as `النغمات الثلاث`, names a known set and stays a word.
  - A note value's plural is `بيضاوات`, `سوداوات`, `مستديرات` (§ 5). `نغمات بيضاء` reads as white keys.
  - The note `لا` is `نغمة لا` after a verb, a preposition or `هي` (§ 7).
  - `الإصبع` is masculine: `الإصبع الأوسط` (§ 5). `أخفض` is the plain comparative for pitch.
- Writers who type `⁨` with Write or Edit get the raw character. Tell them to type `\u2068`
  and Grep for a raw U+2068 afterwards.
- The song titles stay in Latin letters and isolated. A composer with an Arabic Wikipedia article takes
  its Arabic spelling, as the standing decisions say.

Expected red: none.

### Backlog

- A native Arabic speaker's read of the course would catch what a blind review cannot.
- No Arabic piano method was reachable. The guide's *Open* lists the terms a teacher should confirm.

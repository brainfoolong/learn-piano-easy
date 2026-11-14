---
looper: 1
title: Bengali
summary: "Every text of the site, the course and the song guides reads in Bengali as if a native teacher wrote it, and the Bengali site ships."
context: [docs/agent/translation.md, docs/decisions/0012.md, docs/goals/many-locales.md, src/i18n/locale.ts, src/i18n/typography.ts]
stages:
  - id: 1
    title: The Bengali style guide and glossary
    status: done
  - id: 2
    title: The site and the player in Bengali
    status: done
  - id: 3
    title: The course in Bengali
    status: done
  - id: 4
    title: "The song guides in Bengali, from a to m"
    status: done
  - id: 5
    title: "The song guides in Bengali, from n to z"
    status: done
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
- **The style guide confirmed each decision above,** and settled what they left open. Its § 8 adds
  beats and time signatures to the Western digits. `bn-BD` stays, since CLDR treats `bn-IN` the same.
  A bar is `বার`, kept apart from `দুবার`, "twice", by its classifier.
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

- [x] The term list: every music and interface term the English uses more than once. `docs/reference/translation/bn.md:1`
- [x] Microsoft's Bangla style guides, for Bangladesh and for India: the address, the marks and the interface terms. `docs/reference/translation/bn.md:1`
- [x] Bengali Wikipedia's music articles and Bengali-language piano methods: each music term with two sources. `docs/reference/translation/bn.md:1`
- [x] Every section of the style guide, with calibration texts from every kind of text. `docs/reference/translation/bn.md:1`
- [x] The Bengali entry of the rule table: script, kept words and the patterns of the marks. `src/i18n/typography.ts:1`
- [x] The Bengali row of the locale table, confirmed or changed with its reason. `src/i18n/locale.ts:18`

### 2. The site and the player in Bengali

**Does:** every catalog section, translated, reviewed blind and stamped.
**Split:** three writing subagents translate side by side, one per item below. Three fresh reviewers
then review them blind, as the method says.
**Gate:** `docs/reference/translation/bn.md` exists.

- [x] The site, its pages and *Learn Piano*. `src/i18n/messages/bn.ts:1`, `src/i18n/messages/learn-lesson.bn.ts:1`
  - [x] The work lists of every catalog section are written under `.agent-tmp/i18n/bn/`.
  - [x] `bn` joins `CATALOG_CHUNKS` and `src/i18n/all-catalogs.ts`.
  - [x] The root, the pages, *Learn Piano* and the play modes hold their Bengali.
- [x] The player's shell, bar, library, input and play modes. `src/i18n/messages/player-shell.bn.ts:1`
  - [x] The shell, the bar, the library and the input hold their Bengali.
- [x] The player's settings. `src/i18n/messages/player-settings.bn.ts:1`
  - [x] The panel and the look half hold their Bengali.
  - [x] The play half holds its Bengali.
- [x] Each batch reviewed blind, every finding settled, and every *wrong* batch reviewed again.
  - [x] Each batch has a blind review.
  - [x] Every finding is settled, and the glossary holds each new term.
  - [x] Each batch with a *wrong* finding is reviewed again.
- [x] `bun x tsc` and `bengali_texts_keep_their_rules` pass. `src/i18n/translation-rules.test.ts:1`
  - [x] `bun x tsc` passes.
  - [x] `bengali_texts_keep_their_rules` passes.
- [x] `bun run i18n stamp bn` for each catalog section. `src/i18n/stamps/bn.json:1`
  - [x] Every catalog section is stamped.

### 3. The course in Bengali

**Does:** every lesson of every world, translated, reviewed blind and stamped.
**Split:** five writing subagents, side by side, in batches sized by the method. *Expression* and *Both
hands* each go alone. *Chords* goes with *Rhythm*, *Reading music* with *Meet the piano*, and *Scales and
keys* with *First melodies*. Five fresh reviewers then review the five batches blind.
**Gate:** stage 2's catalogs are stamped.

- [x] *Meet the piano* and *First melodies*. `src/learn/lessons/meet-the-piano/texts.bn.ts:1`, `src/learn/lessons/first-melodies/texts.bn.ts:1`
- [x] *Rhythm* and *Reading music*. `src/learn/lessons/rhythm/texts.bn.ts:1`, `src/learn/lessons/reading-music/texts.bn.ts:1`
- [x] *Both hands* and *Chords*. `src/learn/lessons/both-hands/texts.bn.ts:1`, `src/learn/lessons/chords/texts.bn.ts:1`
- [x] *Scales and keys* and *Expression*. `src/learn/lessons/scales-and-keys/texts.bn.ts:1`, `src/learn/lessons/expression/texts.bn.ts:1`
- [x] Each world reviewed blind, and every finding settled.
- [x] `bun run i18n stamp bn` for each world. `src/i18n/stamps/bn.json:1`

### 4. The song guides in Bengali, from a to m

**Does:** the guide of every song whose slug starts with a letter from a to m.
**Split:** `bun run i18n status bn` lists those slugs as `guide/<slug>` units. Writing subagents of at
most eight guides each work side by side, and one fresh reviewer per batch reviews it blind.
**Gate:** stage 3's worlds are stamped.

- [x] One `tools/our-songs/<slug>.bn.ts` per slug from `alle-jahre-wieder` to `morgen-kinder`. `tools/our-songs/alle-jahre-wieder.bn.ts:1`
- [x] Each batch reviewed blind, and every finding settled.
- [x] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp bn` stamps them. `public/songs/ours/alle-jahre-wieder/guide.json:1`

### 5. The song guides in Bengali, from n to z

**Does:** the guide of every song whose slug starts with a letter from n to z.
**Split:** as stage 4.
**Gate:** stage 4's guides are stamped.

- [x] One `tools/our-songs/<slug>.bn.ts` per slug from `o-christmas-tree` to `yankee-doodle`. `tools/our-songs/o-christmas-tree.bn.ts:1`
  - [x] The work lists of the 29 slugs are written.
  - [x] Four writers write the four batches.
  - [x] `bun x tsc` and `bengali_texts_keep_their_rules` pass.
- [x] Each batch reviewed blind, and every finding settled.
  - [x] Each batch has a blind review.
  - [x] Every finding is settled, and `bn.md` holds each new rule.
  - [x] The batch with a *wrong* finding is reviewed again and settled.
- [x] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp bn` stamps them. `public/songs/ours/o-christmas-tree/guide.json:1`
  - [x] Every guide is stamped.
  - [x] The guides' JSON is written, and a build is green.

### 6. The Bengali site ships

**Does:** one read of the whole locale for consistency, then `bn` ships, and every page is looked at.
**Split:** a fresh `reader` subagent reads every Bengali file against the glossary, and lists each term,
address or mark that drifts between files.
**Gate:** `bun run i18n status bn` lists no missing and no stale text outside `legal`.

- [ ] Every drift the reader lists is settled in the files it names.
- [ ] `bn` is `shipped`. `src/i18n/locale-table.ts:57`
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

Stages 1 to 5 are done. Every catalog section, every lesson and the guides of all 80 songs hold their
Bengali, and `src/i18n/stamps/bn.json` stamps them all. `public/songs/ours/<slug>/guide.json` carries each
guide's Bengali. `bun x tsc` and `bengali_texts_keep_their_rules` pass, and a build is green.

Stage 5's four batches were reviewed blind and every finding is settled. Only the batch from
`the-blue-danube` to `tochter-zion` had a *wrong* finding: a step down read as "one key lower". A
second blind review of that batch found nothing wrong.

`bn.md` gained the rules the batches settled. § 6 now spells more places, gives a Bible place or saint
the Bengali Bible's name, and bans a detached `এর` after a Latin name. § 5 makes "the next bar"
`পরের বারটি`, and the glossary maps "symphonic poem" to `টোন পোয়েম`. `SONG_NAMES` gained `Thuringia` and
the curly `See, the conqu’ring hero comes`.

`bun tools/i18n.ts status bn` still lists missing texts in some catalogs and lessons. The ones read so far
are kept English on purpose, such as `siteName`, *Learn Piano Easy*.

### Next

**Stage 6: the Bengali site ships.** The gate is `bun tools/i18n.ts status bn`. Its remaining "missing"
texts must each be a kept word, such as `siteName`. `bun tools/i18n.ts work bn <unit>` lists each one with
its English. Translate any that is not a kept word before shipping.

- **The consistency read goes to fresh `reader` subagents, sent together:** one for the catalogs and the
  course, and one for each half of the guides. Each reads `bn.md` first and lists each drift as
  `file:line`. The session settles them, then runs the rules test once.
- **Ship it:** `shipped: true` on the `bn` row of `src/i18n/locale-table.ts:57`. `PASSED_LOCALES` in
  `e2e/layout-check.ts:53` then takes it with no edit.
- **The test:** copy `the_indonesian_site_reads_in_indonesian` at `e2e/locales.e2e.ts:168`, with `বাংলা`,
  `lang="bn"`, a lesson step and the player. Add Bengali to the list in the file's head comment at line 5.
- **The social image:** `tools/make-social-image.ts` loops over `LOCALES`, so run it once and commit the image it writes.
- **The look:** `bun run shot --locale bn-BD` on every route, at phone and desktop widths, in both themes.
  Check that conjuncts and vowel signs draw whole.

Expected red: `the_bengali_site_reads_in_bengali` until stage 6 adds it.

### Backlog

- A native reader from Bangladesh and one from West Bengal would each catch words that read as the other country's.
- The manger is `যাবপাত্র`, the Bengali Bible's spelling, though a reviewer proposed `জাবপাত্র`. A native
  Christian reader settles it for `ihr-kinderlein-kommet` and any later carol.
- The game's miss flash in `src/i18n/messages/player-input.bn.ts` reads `ফসকে গেছে`, while the glossary's
  miss is `ফসকে যাওয়া`. The stage 6 consistency read decides whether a flash keeps its past tense.
- The Bengali marks in `src/i18n/typography.ts` miss a colon with no space after it, such as `করে:একটি`.
  A reviewer caught one in a lesson. A pattern for it would catch the next.
- Several stage 4 guides write `পরের বারে` for "into the next bar", such as `tools/our-songs/bolero.bn.ts:43`.
  It can also read as "next time". The consistency read decides whether each becomes `পরের বারটিতে`.

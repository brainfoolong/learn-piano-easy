---
looper: 1
title: Portuguese
summary: "Every text of the site, the course and the song guides reads in Portuguese as if a native teacher wrote it, and the Portuguese site ships."
context: [docs/agent/translation.md, docs/decisions/0012.md, docs/goals/many-locales.md, src/i18n/locale.ts, src/i18n/typography.ts]
stages:
  - id: 1
    title: The Portuguese style guide and glossary
    status: done
  - id: 2
    title: The site and the player in Portuguese
    status: done
  - id: 3
    title: The course in Portuguese
    status: done
  - id: 4
    title: "The song guides in Portuguese, from a to m"
    status: done
  - id: 5
    title: "The song guides in Portuguese, from n to z"
    status: done
  - id: 6
    title: The Portuguese site ships
    status: done
  - id: 7
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: portuguese-rules
    stage: 2
    name: every Portuguese text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [portuguese_texts_keep_their_rules]
  - id: portuguese-site
    stage: 6
    name: the Portuguese site reads in Portuguese
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_portuguese_site_reads_in_portuguese]
---

# Portuguese

## Why

About 265 million people speak Portuguese, most of them in Brazil, and most of them read English poorly.
A beginner should not have to learn the piano and a second language at once. Its readers live in Brazil,
Portugal and Africa, so one variety must read well in all three. Its greetings and adjectives agree with
the learner's gender, which the text must avoid. The method in
[docs/agent/translation.md](../agent/translation.md) already carries what the `spanish` pilot taught.

## Standing decisions

- **The method is [docs/agent/translation.md](../agent/translation.md),** step by step. This goal adds
  only what is Portuguese.
- **Each fact below is a decision.** Stage 1 confirms it against the guide's sources, or changes it and
  records the reason.
- **The variety is Brazilian Portuguese,** with `lang` `pt-BR`, spelled by the 1990 spelling agreement.
  Readers in Portugal and Africa also reach this locale. So the text uses no Brazilian slang.
- **The learner is *você*.** An instruction is the imperative as Brazilian apps write it: *Toque*,
  *Escolha*, *Pressione*.
- **To play the piano is *tocar*, and to play a game is *jogar*.** Starting a song's playback is
  *reproduzir*. The glossary settles each "play" by where it is used.
- **The learner's gender stays out of the text.** *Boas-vindas*, not *Bem-vindo*. A neutral phrase
  replaces an adjective that describes the learner.
- **Notes are solfège:** *Dó Ré Mi Fá Sol Lá Si*, as `many-locales` sets. A note, a key and a chord
  always take the capital: *Dó maior*, *Lá menor*. Stage 1 changed the lowercase key, since *lá*, *si*,
  *sol* and *mi* are also everyday words. Middle C is `Dó4`, as the screen shows it.
- **The teacher is male,** *seu professor de piano*, as the German *Klavierlehrer* is. Only the
  learner's gender stays out of the text, and the app never says *Obrigado*.
- **A control is *selecionado*, never *tocado*,** since *tocar* is the piano's verb.
- **The marks:** quotes are `“ ”`, with `‘ ’` inside.
- **The row of `src/i18n/locale-table.ts` stands as written:** `pt-BR` for `lang` and `Intl`, `pt_BR`
  for Open Graph, and solfège. Stage 1 confirmed it against CLDR and the guide.
- **Numbers follow `Intl` for `pt-BR`.** No digit or separator is set by hand.
- **The plural forms come from `Intl` for `pt-BR`:** one, many and other. A counted message needs all
  three.
- **The kept words:** *Learn Piano Easy*, *MIDI*, the song titles and the composers' names.
- **Lanes:** stage 1 comes first. Stages 2 to 5 touch disjoint files, but each follows the glossary
  stage 1 writes, so they run in order. Stage 6 needs all of them.

## Stages

### 1. The Portuguese style guide and glossary

**Does:** writes `docs/reference/translation/pt.md` in the shape the method names, and fills the
Portuguese entry of the rule table.
**Split:** a read-only `reader` subagent lists every recurring music term and interface term in the English
catalogs, lessons and guides, with a count. `web-fetch` subagents, sent together, read the sources and
report what each settles.
**Gate:** `tools/i18n.ts` and `src/i18n/typography.ts` exist.

- [x] The term list: every music and interface term the English uses more than once. `docs/reference/translation/pt.md:1`
- [x] Microsoft's Brazilian Portuguese style guide: the address, the marks and the interface terms. `docs/reference/translation/pt.md:1`
- [x] Portuguese Wikipedia's music articles and Brazilian piano methods: each music term with two sources. `docs/reference/translation/pt.md:1`
- [x] Every section of the style guide, with calibration texts from every kind of text. `docs/reference/translation/pt.md:1`
- [x] The Portuguese entry of the rule table: script, kept words and the patterns of the marks. `src/i18n/typography.ts:1`
- [x] The Portuguese row of the locale table, confirmed or changed with its reason. `src/i18n/locale-table.ts:55`

### 2. The site and the player in Portuguese

**Does:** every catalog section, translated, reviewed blind and stamped.
**Split:** three writing subagents translate side by side, one per item below. Three fresh reviewers
then review them blind, as the method says.
**Gate:** `docs/reference/translation/pt.md` exists.

- [x] The site, its pages and *Learn Piano*. `src/i18n/messages/pt.ts:1`, `src/i18n/messages/learn-lesson.pt.ts:1`
- [x] The player's shell, bar, library, input and play modes. `src/i18n/messages/player-shell.pt.ts:1`
- [x] The player's settings. `src/i18n/messages/player-settings.pt.ts:1`
- [x] Each batch reviewed blind, every finding settled, and every *wrong* batch reviewed again.
- [x] `bun x tsc` and `portuguese_texts_keep_their_rules` pass. `src/i18n/translation-rules.test.ts:1`
- [x] `bun run i18n stamp pt` for each catalog section. `src/i18n/stamps/pt.json:1`

### 3. The course in Portuguese

**Does:** every lesson of every world, translated, reviewed blind and stamped.
**Split:** five writing subagents, side by side, in batches sized by the method. *Expression* and *Both
hands* each go alone. *Chords* goes with *Rhythm*, *Reading music* with *Meet the piano*, and *Scales and
keys* with *First melodies*. Five fresh reviewers then review the five batches blind.
**Gate:** stage 2's catalogs are stamped.

- [x] *Meet the piano* and *First melodies*. `src/learn/lessons/meet-the-piano/texts.pt.ts:1`, `src/learn/lessons/first-melodies/texts.pt.ts:1`
- [x] *Rhythm* and *Reading music*. `src/learn/lessons/rhythm/texts.pt.ts:1`, `src/learn/lessons/reading-music/texts.pt.ts:1`
- [x] *Both hands* and *Chords*. `src/learn/lessons/both-hands/texts.pt.ts:1`, `src/learn/lessons/chords/texts.pt.ts:1`
- [x] *Scales and keys* and *Expression*. `src/learn/lessons/scales-and-keys/texts.pt.ts:1`, `src/learn/lessons/expression/texts.pt.ts:1`
- [x] Each world reviewed blind, and every finding settled.
- [x] `bun run i18n stamp pt` for each world. `src/i18n/stamps/pt.json:1`

### 4. The song guides in Portuguese, from a to m

**Does:** the guide of every song whose slug starts with a letter from a to m.
**Split:** `bun run i18n status pt` lists those slugs as `guide/<slug>` units. Writing subagents of at
most eight guides each work side by side, and one fresh reviewer per batch reviews it blind.
**Gate:** stage 3's worlds are stamped.

- [x] One `tools/our-songs/<slug>.pt.ts` per slug from `air-on-the-g-string` to `mozart-21-andante`. `tools/our-songs/alle-jahre-wieder.pt.ts:1`
- [x] Each batch reviewed blind, and every finding settled.
- [x] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp pt` stamps them. `public/songs/ours/alle-jahre-wieder/guide.json:1`

### 5. The song guides in Portuguese, from n to z

**Does:** the guide of every song whose slug starts with a letter from n to z.
**Split:** as stage 4.
**Gate:** stage 4's guides are stamped.

- [x] One `tools/our-songs/<slug>.pt.ts` per slug from `neon-chase` to `yankee-doodle`. `tools/our-songs/o-christmas-tree.pt.ts:1`
- [x] Each batch reviewed blind, and every finding settled.
- [x] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp pt` stamps them. `public/songs/ours/o-christmas-tree/guide.json:1`

### 6. The Portuguese site ships

**Does:** one read of the whole locale for consistency, then `pt` ships, and every page is looked at.
**Split:** a fresh `reader` subagent reads every Portuguese file against the glossary, and lists each
term, address or mark that drifts between files.
**Gate:** `bun run i18n status pt` lists no missing and no stale text outside `legal`.

- [x] Every drift the reader lists is settled in the files it names.
- [x] `pt` is `shipped`. `src/i18n/locale.ts:18`
- [x] The Portuguese social image. `tools/make-social-image.ts:104`
- [x] The layout checks run in `pt` at 360 and 1280 pixels. `e2e/layout-check.ts:43`
- [x] Test `the_portuguese_site_reads_in_portuguese`: `lang`, the switch's *Português (Brasil)*, a lesson step and the player in Portuguese. `e2e/locales.e2e.ts:1`
- [x] Look at every route in `pt` with `bun run shot --locale pt-BR`, on a phone and a desktop, in both themes.
- [x] The feature list and the README name Portuguese. `docs/reference/features.md:1`, `README.md:12`

### 7. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stages 1 to 6 are done, and `pt` ships. The build writes every page under `pt/`, and the switch
offers *Português (Brasil)*. The worlds carry their titles from `pt.md` in `src/learn/course.ts`.
`public/images/social/pt.png` draws the lead. The README and the feature list name Portuguese.

`the_portuguese_site_reads_in_portuguese` passed once, run by name. The layout checks take `pt` by
themselves, since `PASSED_LOCALES` in `e2e/layout-check.ts` holds every shipped locale outside the
complete ones. They have not run in `pt` yet.

Every route in `pt` was shot on a phone and a desktop, in both themes, with no page error. A lesson
names its keys *Dó3* to *Dó6*. No label is clipped.

Three fresh readers read the whole locale. Every drift they listed is settled in commit `fix(i18n): the
Portuguese texts name each idea one way`. `pt.md` gained rows for the mordent, a figure (*o padrão* or
*o desenho*, never *a figura*), and a song that plays by itself (*a música toca*). *Tochter Zion*'s
*alegra-te* stays, since it quotes Zechariah 9:9 as Brazilian Bibles print it.

`status pt` lists 12 texts that stay out on purpose. Nine are catalog texts: the site's name and the
seven languages' own names. Three are in *Expression*: *Legato*, *Staccato* and the dynamics answers.
A stamp hashes the English alone, so editing a translation never moves one.

### Next

**Stage 7: the goal is verified once.** Run `looper verify`, fix every failure in one pass, and run it
once more. `every_page_passes_the_layout_checks_in_pt` in `e2e/locales.e2e.ts` runs for the first time
there. A flaw it finds in `pt` is settled with a shorter text in the `.pt.ts` file it names.
`portuguese_texts_keep_their_rules` in `src/i18n/translation-rules.test.ts` reads the edited texts.

Expected red: none known. The layout checks in `pt` may find a long label, since no run has measured it.

### Backlog

- A European Portuguese locale, `pt-PT`, could follow if readers in Portugal ask for one.

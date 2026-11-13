---
looper: 1
title: Spanish
summary: "Every text of the site, the course and the song guides reads in Spanish as if a native teacher wrote it, and the Spanish site ships."
context: [docs/agent/translation.md, docs/decisions/0012.md, docs/goals/many-locales.md, src/i18n/locale.ts, src/i18n/typography.ts]
stages:
  - id: 1
    title: The Spanish style guide and glossary
    status: done
  - id: 2
    title: The site and the player in Spanish
    status: open
  - id: 3
    title: The course in Spanish
    status: open
  - id: 4
    title: "The song guides in Spanish, from a to m"
    status: open
  - id: 5
    title: "The song guides in Spanish, from n to z"
    status: open
  - id: 6
    title: The Spanish site ships
    status: open
  - id: 7
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: spanish-rules
    stage: 2
    name: every Spanish text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [spanish_texts_keep_their_rules]
  - id: spanish-site
    stage: 6
    name: the Spanish site reads in Spanish
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_spanish_site_reads_in_spanish]
---

# Spanish

## Why

About 560 million people speak Spanish, and most of them read English poorly. Spanish is the first
translation, so it is also the pilot of the method in [docs/agent/translation.md](../agent/translation.md).
What the pilot teaches goes back into that file before the next locale starts.

## Standing decisions

- **The method is [docs/agent/translation.md](../agent/translation.md),** step by step. This goal adds
  only what is Spanish.
- **The variety is neutral Latin American Spanish,** as `es-419` names it. About nine in ten speakers live
  in the Americas. The text avoids words used only in Spain, such as *ordenador* and *móvil*, and words used
  only in one American country.
- **The learner is *tú*,** as German uses *du*. The plural is *ustedes*, never *vosotros*. *Vos* is never used.
- **An instruction is an imperative in *tú*:** *Toca*, *Pulsa*, *Elige*.
- **To play the piano is *tocar*, and to play a game is *jugar*.** Starting a song's playback is
  *reproducir*. The glossary settles each "play" by where it is used.
- **The learner's gender stays out of the text.** *Te damos la bienvenida*, not *Bienvenido*. *Todo
  listo*, not *Estás listo*.
- **Notes are solfège:** *do, re, mi, fa, sol, la, si*, with ♯ and ♭. In prose a note and a key are
  lowercase, *el do central* and *do mayor*, as FundéuRAE, Spanish Wikipedia and teoria.com write them.
  A name the code builds, such as `Mi4`, keeps `src/theory/note-names.ts`'s capital, since it stands as a
  label. Changing the helper would touch every locale for one style point.
- **The marks:** an opening `¿` and `¡` for every question and exclamation. Quotes are `« »`, the RAE's
  first form. Microsoft's documents use “ ”, but the norm decides, and « » stands apart from code's `"`.
- **A button or a menu item is an infinitive or a noun,** such as *Continuar*. Running text is a *tú*
  imperative. Microsoft's neutral guide and Android's Latin American strings both do this.
- **The locale row stays as it is.** `lang` is `es`, so the one Spanish site also serves readers in Spain.
  `intl` is `es-419`, CLDR's form for Latin America, which writes `1,234.5`. `og` is `es_LA`, and `naming` is `solfege`.
- **Numbers follow `Intl` for `es-419`.** No digit or separator is set by hand.
- **The kept words:** *Learn Piano Easy*, *MIDI*, the song titles and the composers' names.
- **Lanes:** stage 1 comes first. Stages 2 to 5 touch disjoint files, but each follows the glossary
  stage 1 writes, so they run in order. Stage 6 needs all of them.

## Stages

### 1. The Spanish style guide and glossary

**Does:** writes `docs/reference/translation/es.md` in the shape the method names, and fills the Spanish
entry of the rule table.
**Split:** a read-only `reader` subagent lists every recurring music term and interface term in the English
catalogs, lessons and guides, with a count. `web-fetch` subagents, sent together, read the sources and
report what each settles.
**Gate:** `tools/i18n.ts` and `src/i18n/typography.ts` exist.

- [x] The term list: every music and interface term the English uses more than once. `docs/reference/translation/es.md:1`
- [x] Microsoft's Spanish style guide: the address, the marks and the interface terms. `docs/reference/translation/es.md:1`
- [x] Spanish Wikipedia's music articles and Spanish-language piano methods: each music term with two sources. `docs/reference/translation/es.md:1`
- [x] Every section of the style guide, with calibration texts from every kind of text. `docs/reference/translation/es.md:1`
- [x] The Spanish entry of the rule table: script, kept words and the patterns of the marks. `src/i18n/typography.ts:1`
- [x] The Spanish row of the locale table, confirmed or changed with its reason. `src/i18n/locale-table.ts:48`

### 2. The site and the player in Spanish

**Does:** every catalog section, translated, reviewed blind and stamped.
**Split:** three writing subagents translate side by side, one per item below. Three fresh reviewers
then review them blind, as the method says.
**Gate:** `docs/reference/translation/es.md` exists.

- [ ] The site, its pages and *Learn Piano*. `src/i18n/messages/es.ts:1`, `src/i18n/messages/learn-lesson.es.ts:1`
- [ ] The player's shell, bar, library, input and play modes. `src/i18n/messages/player-shell.es.ts:1`
- [ ] The player's settings. `src/i18n/messages/player-settings.es.ts:1`
- [ ] Each batch reviewed blind, every finding settled, and every *wrong* batch reviewed again.
- [ ] `bun x tsc` and `spanish_texts_keep_their_rules` pass. `src/i18n/translation-rules.test.ts:1`
- [ ] `bun run i18n stamp es` for each catalog section. `src/i18n/stamps/es.json:1`

### 3. The course in Spanish

**Does:** every lesson of every world, translated, reviewed blind and stamped.
**Split:** eight writing subagents, one per world, side by side. Eight fresh reviewers then review them
blind.
**Gate:** stage 2's catalogs are stamped.

- [ ] *Meet the piano* and *First melodies*. `src/learn/lessons/meet-the-piano/texts.es.ts:1`, `src/learn/lessons/first-melodies/texts.es.ts:1`
- [ ] *Rhythm* and *Reading music*. `src/learn/lessons/rhythm/texts.es.ts:1`, `src/learn/lessons/reading-music/texts.es.ts:1`
- [ ] *Both hands* and *Chords*. `src/learn/lessons/both-hands/texts.es.ts:1`, `src/learn/lessons/chords/texts.es.ts:1`
- [ ] *Scales and keys* and *Expression*. `src/learn/lessons/scales-and-keys/texts.es.ts:1`, `src/learn/lessons/expression/texts.es.ts:1`
- [ ] Each world reviewed blind, and every finding settled.
- [ ] `bun run i18n stamp es` for each world. `src/i18n/stamps/es.json:1`

### 4. The song guides in Spanish, from a to m

**Does:** the guide of every song whose slug starts with a letter from a to m.
**Split:** a read-only `Explore` subagent lists those slugs. Three writing subagents take a third each,
side by side, and three fresh reviewers review them blind.
**Gate:** stage 3's worlds are stamped.

- [ ] One `tools/our-songs/<slug>.es.ts` per slug from `alle-jahre-wieder` to `morgen-kinder`. `tools/our-songs/alle-jahre-wieder.es.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp es` stamps them. `public/songs/ours/alle-jahre-wieder/guide.json:1`

### 5. The song guides in Spanish, from n to z

**Does:** the guide of every song whose slug starts with a letter from n to z.
**Split:** as stage 4.
**Gate:** stage 4's guides are stamped.

- [ ] One `tools/our-songs/<slug>.es.ts` per slug from `o-christmas-tree` to `yankee-doodle`. `tools/our-songs/o-christmas-tree.es.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp es` stamps them. `public/songs/ours/o-christmas-tree/guide.json:1`

### 6. The Spanish site ships

**Does:** one read of the whole locale for consistency, then `es` ships, and every page is looked at.
**Split:** a fresh `reader` subagent reads every Spanish file against the glossary, and lists each term,
address or mark that drifts between files.
**Gate:** `bun run i18n status es` lists no missing and no stale text outside `legal`.

- [ ] Every drift the reader lists is settled in the files it names.
- [ ] `es` is `shipped`. `src/i18n/locale.ts:18`
- [ ] The Spanish social image. `tools/make-social-image.ts:104`
- [ ] The layout checks run in `es` at 360 and 1280 pixels. `e2e/layout-check.ts:43`
- [ ] Test `the_spanish_site_reads_in_spanish`: `lang`, the switch's *Español*, a lesson step and the player in Spanish. `e2e/locales.e2e.ts:1`
- [ ] Look at every route in `es` with `bun run shot --locale es-419`, on a phone and a desktop, in both themes.
- [ ] The feature list and the README name Spanish. `docs/reference/features.md:1`, `README.md:12`
- [ ] What the pilot taught goes into the method. `docs/agent/translation.md:1`

### 7. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stage 1 is done. `docs/reference/translation/es.md` holds all twelve sections, with 21 calibration texts.
The `es` entry of `src/i18n/typography.ts` holds the kept words and six mark rules. A mark rule now
reads a text with each kept word written as `X`, so *Hark! The Herald Angels Sing* passes. Test
`the_spanish_marks_hold_and_spare_kept_titles` covers the rules. The locale row is confirmed unchanged.

Some rows have one source or none. The guide's `## Open` lists them: the finger names, *calderón*,
*partitura*, *racha* and other common words marked "unsourced".

### Next

**Stage 2: the site and the player in Spanish.** Gate: `docs/reference/translation/es.md` exists.

- Run `bun tools/i18n.ts status es`, then `bun tools/i18n.ts work es <unit>` per catalog section.
- Before the writers start, a `web-fetch` subagent finds a second source for each "unsourced" row of
  the guide. Settle each in the glossary first.
- Three writers, one per item of stage 2, each with the whole guide. Files: `src/i18n/messages/<section>.es.ts`.
- The catalog chunk of `es` goes into `CATALOG_CHUNKS` of `src/i18n/locale.ts:44`, as `de`'s does.
- "Just Play Piano" is transcreated, and its writer proposes the form (guide § 6).

Expected red: none. `spanish_texts_keep_their_rules` turns red if a writer breaks a mark rule.

### Backlog

- A native Spanish speaker's read of the course would catch what a blind review cannot.

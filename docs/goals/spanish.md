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
    status: done
  - id: 3
    title: The course in Spanish
    status: done
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
- **A text whose Spanish equals the English stays out of its file,** such as *Audio*, *Normal* or *Cursor*.
  The site shows the same text either way, and the rules test refuses a copy. `status` counts each as
  missing, so stage 6's gate allows these 47, by unit: site 3, learn-lesson 2, player-bar 5,
  player-input 3, player-library 5, player-settings 20, player-shell 4, and in the course meet-the-piano 1,
  rhythm 1, expression 3. A list whose items would all equal the English, such as `["1", "3", "5"]`,
  stays out whole.
- **The worlds' Spanish titles are settled in the guide's interface glossary.** `src/learn/course.ts`
  types a world's title by `ShippedLocale`, so it takes them in stage 6, when `es` ships.
- **The note *la* never reads as the article,** and *el do grave* is the course's "low C". Guide § 7
  holds both rules, with *de tres en tres* over the River Plate's *de a tres*.
- **"Just Play Piano" is *Piano libre*,** a noun that reads well inside a sentence (guide § 6).
- **A setting is *una opción*, and Medium is *Intermedio*.** The glossary's interface table holds every
  term the writers of stage 2 settled, so later stages follow them.
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

- [x] The site, its pages and *Learn Piano*. `src/i18n/messages/es.ts:1`, `src/i18n/messages/learn-lesson.es.ts:1`
- [x] The player's shell, bar, library, input and play modes. `src/i18n/messages/player-shell.es.ts:1`
- [x] The player's settings. `src/i18n/messages/player-settings.es.ts:1`
- [x] Each batch reviewed blind, every finding settled, and every *wrong* batch reviewed again.
- [x] `bun x tsc` and `spanish_texts_keep_their_rules` pass. `src/i18n/translation-rules.test.ts:1`
- [x] `bun run i18n stamp es` for each catalog section. `src/i18n/stamps/es.json:1`

### 3. The course in Spanish

**Does:** every lesson of every world, translated, reviewed blind and stamped.
**Split:** eight writing subagents, one per world, side by side. Eight fresh reviewers then review them
blind.
**Gate:** stage 2's catalogs are stamped.

- [x] *Meet the piano* and *First melodies*. `src/learn/lessons/meet-the-piano/texts.es.ts:1`, `src/learn/lessons/first-melodies/texts.es.ts:1`
- [x] *Rhythm* and *Reading music*. `src/learn/lessons/rhythm/texts.es.ts:1`, `src/learn/lessons/reading-music/texts.es.ts:1`
- [x] *Both hands* and *Chords*. `src/learn/lessons/both-hands/texts.es.ts:1`, `src/learn/lessons/chords/texts.es.ts:1`
- [x] *Scales and keys* and *Expression*. `src/learn/lessons/scales-and-keys/texts.es.ts:1`, `src/learn/lessons/expression/texts.es.ts:1`
- [x] Each world reviewed blind, and every finding settled.
- [x] `bun run i18n stamp es` for each world. `src/i18n/stamps/es.json:1`

### 4. The song guides in Spanish, from a to m

**Does:** the guide of every song whose slug starts with a letter from a to m.
**Split:** a read-only `Explore` subagent lists those slugs. Three writing subagents take a third each,
side by side, and three fresh reviewers review them blind.
**Gate:** stage 3's worlds are stamped.

- [x] One `tools/our-songs/<slug>.es.ts` per slug from `alle-jahre-wieder` to `morgen-kinder`. `tools/our-songs/alle-jahre-wieder.es.ts:1`
  - [x] Every one of the 51 slugs from a to m has its `.es.ts`.
  - [x] The guide's glossary holds the guides' new terms, and `typography.ts` keeps *Moulin Rouge!*.
  - [x] `bun x tsc --noEmit` passes over them.
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
- [ ] Each world's `title` takes its Spanish from the guide's interface glossary. `src/learn/course.ts:58`
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

Stages 1 to 3 are done. Every catalog section and every lesson of the eight worlds has its Spanish file.
Each world's `texts.es.ts` gathers its lessons, and its `index.ts` loads it under `translations.es`.
`es` is not shipped, so no Spanish page is written yet, and the course was not looked at in a browser.

Eight writers took one world each. Eight blind reviews found one *wrong* text, in scales-and-keys, and a
second review of that world found none. Every finding is settled, and every world is stamped in
`src/i18n/stamps/es.json`. The course's 5 missing texts are deliberate copies, as *Standing decisions*
counts them.

The reviews showed three recurring traps, now rules in the guide's § 7: *la* read as the article,
*do grave* for a spelled-out place, and *de a tres*. A sweep fixed them in every world. The guide's
piano glossary gained the course's new terms, and its interface glossary the worlds' titles.

The boss of *First melodies* moved from `mary.*` to `mary-had-a-little-lamb.*`, since `tools/i18n.ts`
finds a lesson's English by its id.

The briefs are scratch under `.agent-tmp/i18n/es/`: `writer-brief.md` and `reviewer-brief.md` for the
catalogs, and `lesson-writer-brief.md`, `lesson-reviewer-brief.md` and `lesson-settle-brief.md` for the
course. A new session rewrites a guide's brief from these when they are gone.

Stage 4's writers are done. All 51 guides from `air-on-the-g-string` to `mozart-21-andante` have their
`.es.ts`, and `bun x tsc --noEmit` passes. A wip commit of session 0198 holds them, since the CLI's
login failed before that session wrapped. No guide is reviewed, built or stamped yet.

### Next

**Stage 4: review, build and stamp the guides from a to m.** Gate: stage 3's worlds are stamped, which holds.

- Review the 51 guides blind in batches of about seven, one fresh `reader` per batch, and settle each finding.
- Then run the rules test once by name: `spanish_texts_keep_their_rules`.
- The notes below are how the writers worked. Stage 5 follows them for n to z.
- A guide's German sits in its module's `de` field, `tools/our-songs/<slug>.ts`. Every other locale is a
  file `tools/our-songs/<slug>.es.ts` exporting `translation: Translation<GuideTranslation>`, which
  `guideTranslationsOf` finds (`tools/make-our-songs.ts:454`).
- `bun tools/i18n.ts work es guide/<slug>` writes each work list. A batch is about seven songs, so about
  seven writers side by side, then one fresh `reader` per batch.
- A guide writes an accidental as a word, *fa sostenido* (guide § 7). Song titles stay as data writes them.
- Rewrite the lesson briefs for guides: the input is the song module, and lists fall back whole.
- Then `bun tools/make-our-songs.ts`, and `bun tools/i18n.ts stamp es guide/<slug>` per song.

Expected red: none. `spanish_texts_keep_their_rules` turns red if a writer breaks a mark rule.

### Backlog

- A native Spanish speaker's read of the course would catch what a blind review cannot.

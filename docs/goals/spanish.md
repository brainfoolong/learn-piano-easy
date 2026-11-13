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
    status: done
  - id: 5
    title: "The song guides in Spanish, from n to z"
    status: done
  - id: 6
    title: The Spanish site ships
    status: done
  - id: 7
    title: "the goal is verified once, and every failure is fixed"
    status: done
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
  missing, so stage 6's gate allows these 48. By unit, the catalogs hold site 3, learn-lesson 2,
  player-bar 5, player-input 3, player-library 5, player-settings 21 and player-shell 4. The course holds
  meet-the-piano 1, rhythm 1 and expression 3. A list whose items would all equal the English, such as `["1", "3", "5"]`,
  stays out whole. The 48th is the language option *Español*, which every locale names alike.
- **The gallery and the legal pages stay in English on the Spanish site.** Their texts are keyed by
  `CompleteLocale`, so only English and German hold them. The legal texts' binding wording is the English,
  and the gallery is a contributors' page.
- **A song guide gives one note after a verb or a preposition its article:** *toca el mi*, *baja al sol*.
  The n-to-z guides set it, and guide § 7 holds it. The course keeps its bare *toca sol*, as § 7's
  lowercase example writes it.
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
- [x] Each batch reviewed blind, and every finding settled.
  - [x] Eight batches reviewed blind, each by a fresh `reader`.
  - [x] Every finding applied, and the sweep's patterns gone from every guide.
  - [x] `spanish_texts_keep_their_rules` passes.
- [x] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp es` stamps them. `public/songs/ours/alle-jahre-wieder/guide.json:1`
  - [x] All 51 `guide.json` files hold their Spanish.
  - [x] `status es` lists no a-to-m guide as missing or stale.

### 5. The song guides in Spanish, from n to z

**Does:** the guide of every song whose slug starts with a letter from n to z.
**Split:** as stage 4.
**Gate:** stage 4's guides are stamped.

- [x] One `tools/our-songs/<slug>.es.ts` per slug from `neon-chase` to `yankee-doodle`. `tools/our-songs/neon-chase.es.ts:1`
  - [x] The writer brief carries the settle brief's sweep patterns.
  - [x] Four writers write the 29 files, and `bun x tsc --noEmit` is green.
- [x] Each batch reviewed blind, and every finding settled.
  - [x] Four blind reviews, one per batch.
  - [x] A settle pass applies every finding.
- [x] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp es` stamps them. `public/songs/ours/neon-chase/guide.json:1`
  - [x] `spanish_texts_keep_their_rules` passes.
  - [x] Every n-to-z guide is built and stamped.

### 6. The Spanish site ships

**Does:** one read of the whole locale for consistency, then `es` ships, and every page is looked at.
**Split:** a fresh `reader` subagent reads every Spanish file against the glossary, and lists each term,
address or mark that drifts between files.
**Gate:** `bun run i18n status es` lists no missing and no stale text outside `legal`.

- [x] Every drift the reader lists is settled in the files it names.
  - [x] Three fresh readers list the drift: the catalogs and the course, and the guides in two halves.
  - [x] The course's and the catalogs' findings are settled.
  - [x] The k-to-m guides' findings are settled, and the a-to-j guides are swept for the note's article.
  - [x] The guides are rebuilt with `bun tools/make-our-songs.ts`.
- [x] `es` is `shipped`. `src/i18n/locale-table.ts:49`
- [x] Each world's `title` takes its Spanish from the guide's interface glossary. `src/learn/course.ts:58`
- [x] The Spanish social image. `tools/make-social-image.ts:104`
- [x] The layout checks run in `es` at 360 and 1280 pixels. `e2e/layout-check.ts:43`
- [x] Test `the_spanish_site_reads_in_spanish`: `lang`, the switch's *Español*, a lesson step and the player in Spanish. `e2e/locales.e2e.ts:1`
- [x] Look at every route in `es` with `bun run shot --locale es-419`, on a phone and a desktop, in both themes.
- [x] The feature list and the README name Spanish. `docs/reference/features.md:1`, `README.md:12`
- [x] What the pilot taught goes into the method. `docs/agent/translation.md:1`

### 7. the goal is verified once, and every failure is fixed

- [x] Run `looper verify` over the whole goal.
- [x] Fix every failure it names in one pass, never deleting or loosening a test.
- [x] Run `looper verify` once more, and it is green.

## Handoff

### State

Stages 1 to 6 are done. Every text of the site, the course and the 80 song guides has its Spanish, and
`es` ships. `status es` lists only the 48 deliberate copies, with nothing stale.

Shipping made every text keyed by `ShippedLocale` ask for Spanish. The gallery's and the legal pages'
texts are keyed by the new `CompleteLocale` in `src/i18n/locale-table.ts`, so they show their English.
The language option names *Español* in `player-settings-play.en.ts` and its German twin.

The consistency read took three fresh readers. Their findings are settled:
- The course and the catalogs: three *la*-as-article slips, one chord list, and one verb.
- The k-to-m guides: the Alberti step, *toda la canción*, *Toca con la mano … sola*, *los primeros N
  compases*, and a note's article.
- The a-to-j guides: swept for a note's article, now guide § 7's rule for the song guides.
- `the-blue-danube.es.ts` writes *2001: A Space Odyssey* bare, as every other guide does.
Every guide is rebuilt into `public/songs/ours/*/guide.json`. No English changed, so no stamp moved.

The shots of every route in `es`, on a phone and a desktop in both themes, show no page error. They
showed a lesson's piano naming `C4` in Spanish. `src/render/piano-keys.ts` now takes the locale's naming,
and each key's span mirrors its name as `data-name`.

Stage 7 is done, and `looper verify` is green on every step. The first run failed two unit tests that
held `es` unshipped. `src/i18n/i18n.test.ts` now reads `es/play/` as Spanish and `zh/play/` as no
locale's. `src/learn/model.test.ts` gives the merged texts to every shipped locale. Every e2e test passed,
`every_page_passes_the_layout_checks_in_es` among them.

### Next

The goal is reached. Harvest it into `docs/findings.md` § `spanish`, move its two checks into the floor,
and delete this file. The next goal on the chain is `chinese`. No test is expected to go red.

### Backlog

- A native Spanish speaker's read of the course would catch what a blind review cannot.
- The English `tools/our-songs/the-blue-danube.ts:323` and its German wrap *2001: A Space Odyssey* in
  asterisks, which the guide shows as they are. `also-sprach-zarathustra.ts` writes it bare.
- The course writes a note bare after a verb, *toca sol*, while the guides write *toca el sol*. A sweep
  of the 80 lessons would make the locale read as one.

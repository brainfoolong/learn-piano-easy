---
looper: 1
title: Russian
summary: "Every text of the site, the course and the song guides reads in Russian as if a native teacher wrote it, and the Russian site ships."
context: [docs/agent/translation.md, docs/decisions/0012.md, docs/goals/many-locales.md, src/i18n/locale.ts, src/i18n/typography.ts]
stages:
  - id: 1
    title: The Russian style guide and glossary
    status: done
  - id: 2
    title: The site and the player in Russian
    status: done
  - id: 3
    title: The course in Russian
    status: done
  - id: 4
    title: "The song guides in Russian, from a to m"
    status: done
  - id: 5
    title: "The song guides in Russian, from n to z"
    status: open
  - id: 6
    title: The Russian site ships
    status: open
  - id: 7
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: russian-rules
    stage: 2
    name: every Russian text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [russian_texts_keep_their_rules]
  - id: russian-site
    stage: 6
    name: the Russian site reads in Russian
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_russian_site_reads_in_russian]
---

# Russian

## Why

About 255 million people read Russian, in Russia, Central Asia, the Caucasus and Eastern Europe. Most of
them read English poorly, so an English course does not reach them. Russian is written in Cyrillic, and
a counted message needs four plural forms. Its words are long, which tests every narrow layout. The
method in [docs/agent/translation.md](../agent/translation.md) already carries what the `spanish` pilot
taught.

## Standing decisions

- **The method is [docs/agent/translation.md](../agent/translation.md),** step by step. This goal adds
  only what is Russian.
- **Each decision below is confirmed by the style guide in stage 1,** against its sources. Or the guide
  changes it, with a recorded reason.
- **The variety is standard Russian.** `Intl` uses `ru`.
- **The learner is *вы*,** written lower case, as Russian software writes it. An instruction is the
  imperative of *вы*: *Нажмите*, *Выберите*. The guide may switch to *ты*, as a friendly learning app
  might, with a recorded reason.
- **The learner's gender stays out of the text.** With *вы*, a past verb and a short adjective take the
  plural: *вы сыграли*, *вы готовы*. That form is neutral, and the text keeps to it.
- **To play the piano is *играть на фортепиано*.** The guide settles *фортепиано* or *пианино*. Starting
  a song's playback is *воспроизвести*. The glossary settles each "play" by where it is used.
- **Notes are solfège in Cyrillic:** *до ре ми фа соль ля си*. A key is *до мажор* or *ля минор*. A
  chord symbol such as `C` or `Am` stays Latin where the English shows a symbol.
- **The marks:** quotes are `« »`. The guide settles *ё*, used everywhere or nowhere, and the rules of
  the dash.
- **The plural forms are one, few, many and other,** as `Intl` names them for `ru`. A counted message
  has all four.
- **Numbers follow `Intl` for `ru`.** No digit or separator is set by hand.
- **The script is Cyrillic.** The Latin font has no Cyrillic, so the Cyrillic font stack of
  `many-locales` applies.
- **Russian runs longer than English, and its words are long.** The layout checks at 360 pixels matter
  most. A label that clips takes the glossary's short form.
- **The kept words:** *Learn Piano Easy*, *MIDI*, the song titles and the composers' names.
- **The style guide confirmed each decision above,** and settled what they left open. The instrument is
  `фортепиано`. `ё` is written everywhere, since children read the site, though Microsoft never writes
  it. Quotes stay `« »`, though Microsoft's guide asks for straight ones in software. The locale row
  stands unchanged: `ru`, `ru_RU`, solfège and Cyrillic.
- **The guide changed one decision: names and works take their Russian form in prose.** A person, a
  place or a work with a Russian Wikipedia article is written in Cyrillic, from its title. Russian prose
  never prints a foreign name in Latin letters. The library's song titles stay Latin, as data.
- **Units are Cyrillic (`мс`, `Гц`, `дБ`), and a counted beat is a word (`«раз-и, два-и»`),** as Russian
  writes and counts them.
- **Lanes:** stage 1 comes first. Stages 2 to 5 touch disjoint files, but each follows the glossary
  stage 1 writes, so they run in order. Stage 6 needs all of them.

## Stages

### 1. The Russian style guide and glossary

**Does:** writes `docs/reference/translation/ru.md` in the shape the method names, and fills the Russian
entry of the rule table.
**Split:** a read-only `reader` subagent lists every recurring music term and interface term in the English
catalogs, lessons and guides, with a count. `web-fetch` subagents, sent together, read the sources and
report what each settles.
**Gate:** `tools/i18n.ts` and `src/i18n/typography.ts` exist.

- [x] The term list: every music and interface term the English uses more than once. `docs/reference/translation/ru.md:1`
- [x] Microsoft's Russian style guide: the address, the marks and the interface terms. `docs/reference/translation/ru.md:1`
- [x] Russian Wikipedia's music articles and Russian-language piano methods: each music term with two sources. `docs/reference/translation/ru.md:1`
- [x] Every section of the style guide, with calibration texts from every kind of text. `docs/reference/translation/ru.md:1`
- [x] The Russian entry of the rule table: script, kept words and the patterns of the marks. `src/i18n/typography.ts:1`
- [x] The Russian row of the locale table, confirmed or changed with its reason. `src/i18n/locale.ts:18`

### 2. The site and the player in Russian

**Does:** every catalog section, translated, reviewed blind and stamped.
**Split:** three writing subagents translate side by side, one per item below. Three fresh reviewers
then review them blind, as the method says.
**Gate:** `docs/reference/translation/ru.md` exists.

- [x] The site, its pages and *Learn Piano*. `src/i18n/messages/ru.ts:1`, `src/i18n/messages/learn-lesson.ru.ts:1`
- [x] The player's shell, bar, library, input and play modes. `src/i18n/messages/player-shell.ru.ts:1`
- [x] The player's settings. `src/i18n/messages/player-settings.ru.ts:1`
- [x] Each batch reviewed blind, every finding settled, and every *wrong* batch reviewed again.
- [x] `bun x tsc` and `russian_texts_keep_their_rules` pass. `src/i18n/translation-rules.test.ts:1`
- [x] `bun run i18n stamp ru` for each catalog section. `src/i18n/stamps/ru.json:1`

### 3. The course in Russian

**Does:** every lesson of every world, translated, reviewed blind and stamped.
**Split:** five writing subagents, side by side, in batches sized by the method. *Expression* and *Both
hands* each go alone. *Chords* goes with *Rhythm*, *Reading music* with *Meet the piano*, and *Scales and
keys* with *First melodies*. Five fresh reviewers then review the five batches blind.
**Gate:** stage 2's catalogs are stamped.

- [x] *Meet the piano* and *First melodies*. `src/learn/lessons/meet-the-piano/texts.ru.ts:1`, `src/learn/lessons/first-melodies/texts.ru.ts:1`
- [x] *Rhythm* and *Reading music*. `src/learn/lessons/rhythm/texts.ru.ts:1`, `src/learn/lessons/reading-music/texts.ru.ts:1`
- [x] *Both hands* and *Chords*. `src/learn/lessons/both-hands/texts.ru.ts:1`, `src/learn/lessons/chords/texts.ru.ts:1`
- [x] *Scales and keys* and *Expression*. `src/learn/lessons/scales-and-keys/texts.ru.ts:1`, `src/learn/lessons/expression/texts.ru.ts:1`
- [x] Each world reviewed blind, and every finding settled.
- [x] `bun run i18n stamp ru` for each world. `src/i18n/stamps/ru.json:1`

### 4. The song guides in Russian, from a to m

**Does:** the guide of every song whose slug starts with a letter from a to m.
**Split:** `bun run i18n status ru` lists those slugs as `guide/<slug>` units. Writing subagents of at
most eight guides each work side by side, and one fresh reviewer per batch reviews it blind.
**Gate:** stage 3's worlds are stamped.

- [x] One `tools/our-songs/<slug>.ru.ts` per slug from `alle-jahre-wieder` to `morgen-kinder`. `tools/our-songs/alle-jahre-wieder.ru.ts:1`
- [x] Each batch reviewed blind, and every finding settled.
- [x] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp ru` stamps them. `public/songs/ours/alle-jahre-wieder/guide.json:1`

### 5. The song guides in Russian, from n to z

**Does:** the guide of every song whose slug starts with a letter from n to z.
**Split:** as stage 4.
**Gate:** stage 4's guides are stamped.

- [ ] One `tools/our-songs/<slug>.ru.ts` per slug from `o-christmas-tree` to `yankee-doodle`. `tools/our-songs/o-christmas-tree.ru.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp ru` stamps them. `public/songs/ours/o-christmas-tree/guide.json:1`

### 6. The Russian site ships

**Does:** one read of the whole locale for consistency, then `ru` ships, and every page is looked at.
**Split:** a fresh `reader` subagent reads every Russian file against the glossary, and lists each term,
address or mark that drifts between files.
**Gate:** `bun run i18n status ru` lists no missing and no stale text outside `legal`.

- [ ] Every drift the reader lists is settled in the files it names.
- [ ] `ru` is `shipped`. `src/i18n/locale.ts:18`
- [ ] The Russian social image. `tools/make-social-image.ts:104`
- [ ] The layout checks run in `ru` at 360 and 1280 pixels. `e2e/layout-check.ts:43`
- [ ] Test `the_russian_site_reads_in_russian`: `lang`, the switch's *Русский*, a lesson step and the player in Russian. `e2e/locales.e2e.ts:1`
- [ ] Look at every route in `ru` with `bun run shot --locale ru-RU`, on a phone and a desktop, in both themes.
- [ ] Look for any character drawn as a missing-glyph box, in Chrome on Windows and on an Android phone width.
- [ ] The feature list and the README name Russian. `docs/reference/features.md:1`, `README.md:12`

### 7. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stages 1 to 4 are done. Every catalog section, every lesson and the guides of the 51 songs from
`air-on-the-g-string` to `mozart-21-andante` hold their Russian. `src/i18n/stamps/ru.json` stamps them
all, and `public/songs/ours/<slug>/guide.json` carries each guide's Russian. `bun x tsc`, every
locale's rules test and a build pass. `bun tools/i18n.ts status ru` lists only the 29 guides from
`neon-chase` to `yankee-doodle` as missing, besides the catalogs' kept words.

Seven guide batches were reviewed blind and every finding is settled. Batches 2, 3, 5 and 6 had
*wrong* findings, mostly undeclined sharps and the thumb. Their second blind reviews found only words a
settler had run together, which are fixed and swept across every file.

The guides settled these rows in `ru.md`:

- The thumb is `первый палец`, never `большой палец`. A finger the English numbers takes digits.
- A sharp or a flat declines and is masculine: `на до-диезе`, `верхний до-диез`. A key's mode declines:
  `в до мажоре`. A plain note stays neuter and never declines.
- A century is a Roman numeral, and the `kept` list of `src/i18n/typography.ts` holds `XIII` to `XX`.
- A run is `пассаж`, and single notes are `одиночные ноты`.
- A new mark rule wants a space after a sentence's end. It caught a joined string in
  `src/learn/lessons/both-hands/a-held-bass-note.ru.ts`, which is fixed.

A person or work with no Russian Wikipedia article stays in Latin, and the writers rephrase so no
Latin name takes a case ending. A quoted score direction such as `senza sordino` stays Latin.

### Next

**Stage 5: the 29 song guides from n to z,** as `bun tools/i18n.ts status ru` lists them. Four
batches, run as stage 4 ran:

1. `neon-chase night-on-bald-mountain o-christmas-tree o-come-all-ye-faithful o-du-froehliche
   o-holy-night o-little-town-of-bethlehem ode-to-joy`
2. `old-macdonald-had-a-farm row-row-row-your-boat sailors-hornpipe silent-night spanish-ladies
   suesser-die-glocken swan-lake`
3. `the-blue-danube the-entertainer the-first-noel the-sorcerers-apprentice
   the-twelve-days-of-christmas toccata-in-d-minor tochter-zion`
4. `twinkle-twinkle-little-star up-on-the-housetop vltava we-three-kings wedding-march william-tell
   yankee-doodle`

- **A writer** runs `bun tools/i18n.ts work ru guide/<slug>` and writes `tools/our-songs/<slug>.ru.ts`,
  mirroring `tools/our-songs/air-on-the-g-string.ru.ts`. Its brief points at `ru.md` whole and
  translation.md § *The writer's rules*. It names the settled rows above, since writers drifted on
  each. It checks every name with the English article's `langlinks` to `ru`.
- **One fresh blind reviewer per batch,** on a smaller model, reads the Russian before the English. It
  writes findings to `.agent-tmp/i18n/ru/review-batch-<n>.md`. Its brief names what is settled, so it
  does not flag Latin names with no Russian article.
- **A settler per batch** applies the findings with Edit and runs the Russian rules test once. A batch
  with a *wrong* finding gets a second fresh reviewer.
- Then grep the guides for `большой палец`, a feminine or neuter adjective before a sharp, and a
  declined sharp glued to the next word. Stamp each with `bun tools/i18n.ts stamp ru guide/<slug>`.
  Run `bun tools/make-our-songs.ts`, and build with `--out .agent-tmp/russian-dist`.

Expected red: none.

### Backlog

- A native Russian speaker's read of the course would catch what a blind review cannot.
- Stage 6's shots include a Russian lesson, where a long title or quiz answer may clip at 360 pixels.
- A Russian piano teacher's read of the glossary's *unsourced* rows, as `ru.md` § *Open* lists.
- The keyboard range field may show a solfège name such as `до2` but accept only `C2`, since
  `parsePitch` in `src/keyboard/range.ts` reads letters. The help texts keep `C2`, as Spanish does.

---
looper: 1
title: Indonesian
summary: "Every text of the site, the course and the song guides reads in Indonesian as if a native teacher wrote it, and the Indonesian site ships."
context: [docs/agent/translation.md, docs/decisions/0012.md, docs/goals/many-locales.md, src/i18n/locale.ts, src/i18n/typography.ts]
stages:
  - id: 1
    title: The Indonesian style guide and glossary
    status: done
  - id: 2
    title: The site and the player in Indonesian
    status: done
  - id: 3
    title: The course in Indonesian
    status: open
  - id: 4
    title: "The song guides in Indonesian, from a to m"
    status: open
  - id: 5
    title: "The song guides in Indonesian, from n to z"
    status: open
  - id: 6
    title: The Indonesian site ships
    status: open
  - id: 7
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: indonesian-rules
    stage: 2
    name: every Indonesian text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [indonesian_texts_keep_their_rules]
  - id: indonesian-site
    stage: 6
    name: the Indonesian site reads in Indonesian
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_indonesian_site_reads_in_indonesian]
---

# Indonesian

## Why

About 250 million people speak Indonesian, and most of them read English poorly. A beginner should not
have to learn the piano and a second language at once. Indonesian is written in Latin letters, as Spanish
is. Unlike Spanish, it has no plural forms, and its everyday speech is far from its standard form. The text
keeps to the standard language without sounding stiff. The method in
[docs/agent/translation.md](../agent/translation.md) already carries what the `spanish` pilot taught.

## Standing decisions

- **The method is [docs/agent/translation.md](../agent/translation.md),** step by step. This goal adds
  only what is Indonesian.
- **Each fact below is a decision.** Stage 1 confirms it against the guide's sources, or changes it and
  records the reason.
- **The variety is standard Indonesian, *bahasa baku*.** Its spelling is EYD, the official spelling
  rules, and its word forms are those of KBBI, the official dictionary.
- **The interface terms are the established Indonesian ones,** such as *unduh*, where the guide's sources
  use them. Microsoft and Android both write *file* and *folder*, never *berkas*, so the guide follows them.
- **The learner is *kamu*,** although Microsoft and Android write *Anda*. They speak to adults managing a
  device, and this app is a teacher beside a learner, often a child. Android uses *kamu* where it speaks
  to young users. The teacher speaks as *aku*.
- **Settings is *Pengaturan*,** as Microsoft writes it. Android's *Setelan* also means a suit of clothes.
- **A label is sentence case,** as Android writes it. Microsoft's title case for menus is not followed.
- **The term list is the Portuguese guide's English column.** The English changed by one line since that
  list was made, so no new count was run.
- **The locale row is confirmed unchanged:** `id`, `Bahasa Indonesia`, `id_ID`, letters, Latin. It lives in
  `src/i18n/locale-table.ts`.
- **An instruction is a short imperative:** *Tekan*, *Pilih*, *Mainkan*.
- **The particle *-lah* and the other particles are used sparingly.** The text uses no slang, *bahasa
  gaul*.
- **Notes are letters:** C D E F G A B, as piano teaching in Indonesia names them. Do re mi appears only
  where the English means singing.
- **Indonesian has no plural forms.** `Intl` names only `other`, so a counted message has one form.
- **A word is never doubled for its plural where a count already shows it:** *3 lagu*, never
  *3 lagu-lagu*.
- **The marks:** quotes are `“ ”`.
- **Numbers follow `Intl` for `id`.** No digit or separator is set by hand.
- **The kept words:** *Learn Piano Easy*, *MIDI*, the song titles and the composers' names.
- **A second review's *wrong* finding with an exact one-word fix is applied without a third review.**
  A third reviewer costs a full read of the batch for one word. Any larger *wrong* fix gets a third review.
- **A dialog's title keeps the glossary's short form,** even where a reviewer proposes a longer, clearer
  one. *File tanpa internet* stays the title of the offline files.
- **Lanes:** stage 1 comes first. Stages 2 to 5 touch disjoint files, but each follows the glossary
  stage 1 writes, so they run in order. Stage 6 needs all of them.

## Stages

### 1. The Indonesian style guide and glossary

**Does:** writes `docs/reference/translation/id.md` in the shape the method names, and fills the
Indonesian entry of the rule table.
**Split:** a read-only `reader` subagent lists every recurring music term and interface term in the English
catalogs, lessons and guides, with a count. `web-fetch` subagents, sent together, read the sources and
report what each settles.
**Gate:** `tools/i18n.ts` and `src/i18n/typography.ts` exist.

- [x] The term list: every music and interface term the English uses more than once. `docs/reference/translation/id.md:1`
- [x] Microsoft's Indonesian style guide: the address, the marks and the interface terms. `docs/reference/translation/id.md:1`
- [x] Indonesian Wikipedia's music articles and Indonesian piano methods: each music term with two sources. `docs/reference/translation/id.md:1`
- [x] Every section of the style guide, with calibration texts from every kind of text. `docs/reference/translation/id.md:1`
- [x] The Indonesian entry of the rule table: script, kept words and the patterns of the marks. `src/i18n/typography.ts:1`
- [x] The Indonesian row of the locale table, confirmed or changed with its reason. `src/i18n/locale.ts:18`

### 2. The site and the player in Indonesian

**Does:** every catalog section, translated, reviewed blind and stamped.
**Split:** three writing subagents translate side by side, one per item below. Three fresh reviewers
then review them blind, as the method says.
**Gate:** `docs/reference/translation/id.md` exists.

- [x] The site, its pages and *Learn Piano*. `src/i18n/messages/id.ts:1`, `src/i18n/messages/learn-lesson.id.ts:1`
- [x] The player's shell, bar, library, input and play modes. `src/i18n/messages/player-shell.id.ts:1`
- [x] The player's settings. `src/i18n/messages/player-settings.id.ts:1`
- [x] Each batch reviewed blind, every finding settled, and every *wrong* batch reviewed again.
- [x] `bun x tsc` and `indonesian_texts_keep_their_rules` pass. `src/i18n/translation-rules.test.ts:1`
- [x] `bun run i18n stamp id` for each catalog section. `src/i18n/stamps/id.json:1`

### 3. The course in Indonesian

**Does:** every lesson of every world, translated, reviewed blind and stamped.
**Split:** five writing subagents, side by side, in batches sized by the method. *Expression* and *Both
hands* each go alone. *Chords* goes with *Rhythm*, *Reading music* with *Meet the piano*, and *Scales and
keys* with *First melodies*. Five fresh reviewers then review the five batches blind.
**Gate:** stage 2's catalogs are stamped.

- [ ] *Reading music* and *Meet the piano*. `src/learn/lessons/reading-music/bass-landmarks.id.ts:1`, `src/learn/lessons/meet-the-piano/black-key-groups.id.ts:1`
- [ ] *Scales and keys* and *First melodies*. `src/learn/lessons/scales-and-keys/f-major.id.ts:1`, `src/learn/lessons/first-melodies/hands-take-turns.id.ts:1`
- [ ] *Chords* and *Rhythm*. `src/learn/lessons/chords/alberti-bass.id.ts:1`, `src/learn/lessons/rhythm/counting-to-four.id.ts:1`
- [ ] *Both hands*. `src/learn/lessons/both-hands/a-held-bass-note.id.ts:1`
- [ ] *Expression*. `src/learn/lessons/expression/crescendo-and-diminuendo.id.ts:1`
- [ ] Each world reviewed blind, and every finding settled.
- [ ] `bun run i18n stamp id` for each world. `src/i18n/stamps/id.json:1`

### 4. The song guides in Indonesian, from a to m

**Does:** the guide of every song whose slug starts with a letter from a to m.
**Split:** `bun run i18n status id` lists those slugs as `guide/<slug>` units. Writing subagents of at
most eight guides each work side by side, and one fresh reviewer per batch reviews it blind.
**Gate:** stage 3's worlds are stamped.

- [ ] One `tools/our-songs/<slug>.id.ts` per slug from `alle-jahre-wieder` to `morgen-kinder`. `tools/our-songs/alle-jahre-wieder.id.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp id` stamps them. `public/songs/ours/alle-jahre-wieder/guide.json:1`

### 5. The song guides in Indonesian, from n to z

**Does:** the guide of every song whose slug starts with a letter from n to z.
**Split:** as stage 4.
**Gate:** stage 4's guides are stamped.

- [ ] One `tools/our-songs/<slug>.id.ts` per slug from `o-christmas-tree` to `yankee-doodle`. `tools/our-songs/o-christmas-tree.id.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp id` stamps them. `public/songs/ours/o-christmas-tree/guide.json:1`

### 6. The Indonesian site ships

**Does:** one read of the whole locale for consistency, then `id` ships, and every page is looked at.
**Split:** a fresh `reader` subagent reads every Indonesian file against the glossary, and lists each
term, address or mark that drifts between files.
**Gate:** `bun run i18n status id` lists no missing and no stale text outside `legal`.

- [ ] Every drift the reader lists is settled in the files it names.
- [ ] `id` is `shipped`. `src/i18n/locale.ts:18`
- [ ] The Indonesian social image. `tools/make-social-image.ts:104`
- [ ] The layout checks run in `id` at 360 and 1280 pixels. `e2e/layout-check.ts:43`
- [ ] Test `the_indonesian_site_reads_in_indonesian`: `lang`, the switch's *Bahasa Indonesia*, a lesson step and the player in Indonesian. `e2e/locales.e2e.ts:1`
- [ ] Look at every route in `id` with `bun run shot --locale id-ID`, on a phone and a desktop, in both themes.
- [ ] The feature list and the README name Indonesian. `docs/reference/features.md:1`, `README.md:12`

### 7. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stages 1 and 2 are done. Every catalog section has its Indonesian in `src/i18n/messages/*.id.ts`, and
`src/i18n/stamps/id.json` stamps all fourteen. `CATALOG_CHUNKS` in `src/i18n/locale.ts` loads `id`. `bun x
tsc` and `indonesian_texts_keep_their_rules` pass.

Four writers worked side by side, with the settings split into its play and look halves. Four blind
reviewers followed. Three batches had a *wrong* finding, and each was reviewed again. The second reviews
found one more *wrong* text, the bare *Kedua* for both hands, and it was fixed as proposed.

The glossary grew from what the writers met. New rows cover the scene (*tampilan 3D*), the default
(*bawaan*), input and output, the MIDI channel, combo, the chord's root, particle wander, frame,
offline files, the ape, the sponsor page, setup, and the streak's heading. *Menu*, *Level* and *Audio*
joined the kept words.

### Next

**Stage 3: the course in Indonesian.** Run `bun tools/i18n.ts work id lesson/<world>` for each world. Five
writers go side by side, in the batches of stage 3's items. A lesson is
`src/learn/lessons/<world>/<lesson>.id.ts`, nine per world. Each `.zh.ts` sibling is the code shape to copy,
since Chinese names notes by letters too.

- Each brief carries `docs/reference/translation/id.md` whole, and its § 5 rows added in stage 2.
- A writer creates files with Write only. The guard refuses a shell write, even `sed -i`.
- A reviewer writes its findings to `.agent-tmp/i18n/id/review-<batch>.md`, one line per finding with
  its proposed text. A fixer applies them.
- Then run `bun x tsc` and `bun test src/i18n/translation-rules.test.ts -t indonesian`, and stamp each world.

Expected red: none.

### Backlog

- A native Indonesian speaker's read of the course would catch what a blind review cannot.
- No Indonesian piano method loaded. The guide's *Open* lists the course terms a teacher should confirm.

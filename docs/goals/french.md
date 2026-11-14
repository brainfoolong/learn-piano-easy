---
looper: 1
title: French
summary: "Every text of the site, the course and the song guides reads in French as if a native teacher wrote it, and the French site ships."
context: [docs/agent/translation.md, docs/decisions/0012.md, docs/goals/many-locales.md, src/i18n/locale.ts, src/i18n/typography.ts]
stages:
  - id: 1
    title: The French style guide and glossary
    status: done
  - id: 2
    title: The site and the player in French
    status: done
  - id: 3
    title: The course in French
    status: open
  - id: 4
    title: "The song guides in French, from a to m"
    status: open
  - id: 5
    title: "The song guides in French, from n to z"
    status: open
  - id: 6
    title: The French site ships
    status: open
  - id: 7
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: french-rules
    stage: 2
    name: every French text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [french_texts_keep_their_rules]
  - id: french-site
    stage: 6
    name: the French site reads in French
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_french_site_reads_in_french]
---

# French

## Why

About 310 million people read French, in Europe, in Canada and across much of Africa. Most of them read
English poorly, so an English course does not reach them. French puts a no-break space before some
marks and inside its quotes, and the rules test checks each one. The method in
[docs/agent/translation.md](../agent/translation.md) already carries what the `spanish` pilot taught.

## Standing decisions

- **The method is [docs/agent/translation.md](../agent/translation.md),** step by step. This goal adds
  only what is French.
- **Each decision below is confirmed by the style guide in stage 1,** against its sources. Or the guide
  changes it, with a recorded reason.
- **The variety is standard French** that reads naturally in France, Belgium, Switzerland, Canada and
  Africa. The text avoids words used in one region only. `Intl` uses `fr`.
- **The learner is *tu*,** as German uses *du* in this app. An instruction is the imperative of *tu*,
  such as *Choisis*. The guide may switch to *vous* with a recorded reason.
- **The learner's gender stays out of the text.** No inclusive *point médian* is used. A neutral phrase
  stands in, such as *Bienvenue*, and no adjective describes the learner.
- **To play the piano is *jouer du piano*.** Starting a song's playback is *lire*, and a game is a
  *jeu*. The glossary settles each "play" by where it is used.
- **Notes are solfège:** *do ré mi fa sol la si*. Sharp is *dièse* and flat is *bémol*. A key is *do
  majeur* or *la mineur*. A note label keeps the capitals `many-locales` set: `Do Ré Mi Fa Sol La Si`.
- **The marks:** a narrow no-break space (U+202F) goes before `;`, `!` and `?`, and inside `« »`. A
  no-break space (U+00A0) goes before `:`. The apostrophe is `’`. The rules test checks each of these.
- **The plural forms come from `Intl` for `fr`:** *one* covers 0 and 1, then *many* and *other*. A
  counted message has all three.
- **Numbers follow `Intl` for `fr`.** No digit or separator is set by hand.
- **French runs about a fifth longer than English.** A label that clips takes the glossary's short form.
- **The kept words:** *Learn Piano Easy*, *MIDI*, the song titles and the composers' names.
- **The style guide confirmed each decision above,** and added three. A guide's prose names a work by
  its French title and a person by French Wikipedia's spelling. An interface word stands unquoted, as
  Microsoft asks. Prose says `do central` with no octave number, since France's `do 3` differs from the
  code's `Do4`.
- **The narrow no-break space counts as Latin in Unicode's data.** The rules test now skips it beside a
  kept word, so a title inside `« »` is spared.
- **A computer key a text names sits in the same place on every layout.** French readers type on
  AZERTY, QWERTZ or QWERTY, and the bindings are physical keys. A text names E, R and T, or the rows of keys.
- **A key name the code builds keeps the note label's capital:** `Si♭ majeur`, as § 7 of the guide says.
- **Soft is `doux`, and a space stands outside `« »`.** The rules test now checks both, after a review
  caught each.
- **Lanes:** stage 1 comes first. Stages 2 to 5 touch disjoint files, but each follows the glossary
  stage 1 writes, so they run in order. Stage 6 needs all of them.

## Stages

### 1. The French style guide and glossary

**Does:** writes `docs/reference/translation/fr.md` in the shape the method names, and fills the French
entry of the rule table.
**Split:** a read-only `reader` subagent lists every recurring music term and interface term in the English
catalogs, lessons and guides, with a count. `web-fetch` subagents, sent together, read the sources and
report what each settles.
**Gate:** `tools/i18n.ts` and `src/i18n/typography.ts` exist.

- [x] The term list: every music and interface term the English uses more than once. `docs/reference/translation/fr.md:1`
- [x] Microsoft's French style guides, for France and for Canada: the address, the marks and the interface terms. `docs/reference/translation/fr.md:1`
- [x] French Wikipedia's music articles and French-language piano methods: each music term with two sources. `docs/reference/translation/fr.md:1`
- [x] Every section of the style guide, with calibration texts from every kind of text. `docs/reference/translation/fr.md:1`
- [x] The French entry of the rule table: script, kept words and the patterns of the marks. `src/i18n/typography.ts:1`
- [x] The French row of the locale table, confirmed or changed with its reason. `src/i18n/locale.ts:18`

### 2. The site and the player in French

**Does:** every catalog section, translated, reviewed blind and stamped.
**Split:** three writing subagents translate side by side, one per item below. Three fresh reviewers
then review them blind, as the method says.
**Gate:** `docs/reference/translation/fr.md` exists.

- [x] The site, its pages and *Learn Piano*. `src/i18n/messages/fr.ts:1`, `src/i18n/messages/learn-lesson.fr.ts:1`
- [x] The player's shell, bar, library, input and play modes. `src/i18n/messages/player-shell.fr.ts:1`
- [x] The player's settings. `src/i18n/messages/player-settings.fr.ts:1`
- [x] Each batch reviewed blind, every finding settled, and every *wrong* batch reviewed again.
- [x] `bun x tsc` and `french_texts_keep_their_rules` pass. `src/i18n/translation-rules.test.ts:1`
- [x] `bun run i18n stamp fr` for each catalog section. `src/i18n/stamps/fr.json:1`

### 3. The course in French

**Does:** every lesson of every world, translated, reviewed blind and stamped.
**Split:** five writing subagents, side by side, in batches sized by the method. *Expression* and *Both
hands* each go alone. *Chords* goes with *Rhythm*, *Reading music* with *Meet the piano*, and *Scales and
keys* with *First melodies*. Five fresh reviewers then review the five batches blind.
**Gate:** stage 2's catalogs are stamped.

- [ ] *Meet the piano* and *First melodies*. `src/learn/lessons/meet-the-piano/texts.fr.ts:1`, `src/learn/lessons/first-melodies/texts.fr.ts:1`
- [ ] *Rhythm* and *Reading music*. `src/learn/lessons/rhythm/texts.fr.ts:1`, `src/learn/lessons/reading-music/texts.fr.ts:1`
- [ ] *Both hands* and *Chords*. `src/learn/lessons/both-hands/texts.fr.ts:1`, `src/learn/lessons/chords/texts.fr.ts:1`
- [ ] *Scales and keys* and *Expression*. `src/learn/lessons/scales-and-keys/texts.fr.ts:1`, `src/learn/lessons/expression/texts.fr.ts:1`
- [ ] Each world reviewed blind, and every finding settled.
- [ ] `bun run i18n stamp fr` for each world. `src/i18n/stamps/fr.json:1`

### 4. The song guides in French, from a to m

**Does:** the guide of every song whose slug starts with a letter from a to m.
**Split:** `bun run i18n status fr` lists those slugs as `guide/<slug>` units. Writing subagents of at
most eight guides each work side by side, and one fresh reviewer per batch reviews it blind.
**Gate:** stage 3's worlds are stamped.

- [ ] One `tools/our-songs/<slug>.fr.ts` per slug from `alle-jahre-wieder` to `morgen-kinder`. `tools/our-songs/alle-jahre-wieder.fr.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp fr` stamps them. `public/songs/ours/alle-jahre-wieder/guide.json:1`

### 5. The song guides in French, from n to z

**Does:** the guide of every song whose slug starts with a letter from n to z.
**Split:** as stage 4.
**Gate:** stage 4's guides are stamped.

- [ ] One `tools/our-songs/<slug>.fr.ts` per slug from `o-christmas-tree` to `yankee-doodle`. `tools/our-songs/o-christmas-tree.fr.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp fr` stamps them. `public/songs/ours/o-christmas-tree/guide.json:1`

### 6. The French site ships

**Does:** one read of the whole locale for consistency, then `fr` ships, and every page is looked at.
**Split:** a fresh `reader` subagent reads every French file against the glossary, and lists each term,
address or mark that drifts between files.
**Gate:** `bun run i18n status fr` lists no missing and no stale text outside `legal`.

- [ ] Every drift the reader lists is settled in the files it names.
- [ ] `fr` is `shipped`. `src/i18n/locale.ts:18`
- [ ] The French social image. `tools/make-social-image.ts:104`
- [ ] The layout checks run in `fr` at 360 and 1280 pixels. `e2e/layout-check.ts:43`
- [ ] Test `the_french_site_reads_in_french`: `lang`, the switch's *Français*, a lesson step and the player in French. `e2e/locales.e2e.ts:1`
- [ ] Look at every route in `fr` with `bun run shot --locale fr-FR`, on a phone and a desktop, in both themes.
- [ ] The feature list and the README name French. `docs/reference/features.md:1`, `README.md:12`

### 7. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stages 1 and 2 are done. Every catalog section has its `src/i18n/messages/*.fr.ts`, and `fr.ts` loads
as the `fr` chunk of `src/i18n/locale.ts`. `src/i18n/all-catalogs.ts` holds it for the tools and tests.
Six writers translated the catalogs, and six fresh reviewers read them blind. Settler subagents applied
every finding. The three batches with a *wrong* finding were reviewed again until none was left.
`src/i18n/stamps/fr.json` stamps every section. The 13 texts left missing are those Russian leaves to
English too, such as `siteName`.

The `fr` entry of `src/i18n/typography.ts` now holds 17 mark rules and a longer kept list. Both French
rules tests pass. The glossary in `docs/reference/translation/fr.md` gained the terms the writers met.

### Next

**Stage 3: the course in French.** Files: `src/learn/lessons/<world>/*.fr.ts`, one `texts.fr.ts` per
world, and one line per world's `index.ts` that loads `texts.fr` as its chunk, as `texts.ru` loads. Commit
`5ec26ec` is the Russian model. Start with `bun tools/i18n.ts work fr lesson/<world>` for each world.

What worked in stage 2:
- **One shared brief file per role,** under `.agent-tmp/`, which each subagent reads whole. The writer's
  brief named its files, its Russian model for structure only, and the marks trap. The reviewer's brief
  asked for one line per finding: id, kind, weight, the French that fixes it, and why.
- **A settler subagent per batch** got the findings and the session's rulings, and edited the files.
- **Write and Edit store a typed ` ` as the raw character,** which is right. Grep afterwards for an
  ASCII space before `!?:;»%`.

Expected red: `french_texts_keep_their_rules` until each world keeps the marks.

### Backlog

- A read of the course by a speaker from Canada and one from Africa would catch words that read as France's only.
- A French piano teacher's read would confirm the guide's *unsourced* rows, which its *Open* lists.
- The key-binding dialog and the piano's key labels name each key by its QWERTY letter, through
  `keyLabel` of `src/play/hotkeys.ts:101`. An AZERTY learner sees the wrong letters. `navigator.keyboard.getLayoutMap()`
  would name them, where a browser offers it. This is a feature change, outside a translation pass.
- The range fields show a note as `Do2` in a solfège locale, but `parsePitch` of `src/keyboard/range.ts`
  reads letters only. Their help keeps `C2`. Solfège input would serve every solfège locale.

---
looper: 1
title: Hindi
summary: "Every text of the site, the course and the song guides reads in Hindi as if a native teacher wrote it, and the Hindi site ships."
context: [docs/agent/translation.md, docs/decisions/0012.md, docs/goals/many-locales.md, src/i18n/locale.ts, src/i18n/typography.ts]
stages:
  - id: 1
    title: The Hindi style guide and glossary
    status: done
  - id: 2
    title: The site and the player in Hindi
    status: done
  - id: 3
    title: The course in Hindi
    status: done
  - id: 4
    title: "The song guides in Hindi, from a to m"
    status: open
  - id: 5
    title: "The song guides in Hindi, from n to z"
    status: open
  - id: 6
    title: The Hindi site ships
    status: open
  - id: 7
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: hindi-rules
    stage: 2
    name: every Hindi text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [hindi_texts_keep_their_rules]
  - id: hindi-site
    stage: 6
    name: the Hindi site reads in Hindi
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_hindi_site_reads_in_hindi]
---

# Hindi

## Why

About 600 million people speak Hindi, and most of them read English poorly. A beginner should not have
to learn the piano and a second language at once. Hindi is written in Devanagari, which joins consonants
and hangs vowel signs on them. Its verbs agree with gender, and its numbers group in lakhs. The method in
[docs/agent/translation.md](../agent/translation.md) already carries what the `spanish` pilot taught.

## Standing decisions

- **The method is [docs/agent/translation.md](../agent/translation.md),** step by step. This goal adds
  only what is Hindi.
- **Each fact below is a decision.** Stage 1 confirms it against the guide's sources, or changes it and
  records the reason.
- **The variety is standard Hindi in Devanagari,** with the `Intl` tag `hi-IN`. Its register is the
  everyday one of Indian apps.
- **A common English loanword is written in Devanagari** where Indians use it, such as `फ़ाइल`. A heavy
  Sanskritized coinage is never used.
- **The learner is `आप`.** An instruction is the polite imperative, such as `चुनें` or `दबाएँ`.
- **The learner's gender stays out of the text.** Hindi verbs agree with gender. So the text prefers
  forms that carry no gender of the learner: the ergative past, a noun or the infinitive. Where none
  fits, it uses the honorific plural with `आप`, and the style guide names that form.
- **Notes are letters:** C D E F G A B, as Western piano teaching in India names them. The note letters
  count as kept words in the rule table.
- **Sargam, `सा रे गा`, is never used.** It is a movable system of its own, so it names no fixed key.
- **The marks:** the danda `।` ends a sentence, unless the guide's sources settle on the full stop. The
  nukta is used the same way in every file, as the guide sets.
- **Numbers follow `Intl` for `hi-IN`,** which groups digits in lakhs. No digit or separator is set by
  hand.
- **The script is Devanagari,** and its fonts are the system stacks `many-locales` sets. The look in
  stage 6 covers conjuncts, which join consonants, and matras, which are vowel signs.
- **The kept words:** *Learn Piano Easy*, *MIDI*, the song titles and the composers' names.
- **Stage 1 confirmed these facts against the sources,** and changed three. The guide's § 12 names
  each source.
  - **The danda stays,** though Microsoft's guide and Android's strings use the full stop. Hindi
    Wikipedia and the Hindi learner apps use the danda. A teacher's prose reads native with it, and one
    mark is simpler to keep and to test.
  - **A composer with a Hindi Wikipedia article takes its Devanagari spelling,** such as `बीथोवेन`. A
    native teacher never writes a famous name in Latin letters. Every other name stays in Latin.
  - **The nukta is the combining sign on `ज़` and `फ़` alone,** and the chandrabindu ends a nasal word,
    as Microsoft § 4.1.12 sets. The rule table checks both.
  - **A note letter stays Latin and is never spelled `सी` or `जी`,** since `जी` is also the honorific.
  - **The `hi-IN` row is unchanged:** `lang` `hi`, `intl` `hi-IN`, letters, Devanagari and `hi_IN`.
    CLDR names the language `हिन्दी`, as the row's endonym does.
- **The term list is the English column of the Chinese glossary,** `docs/reference/translation/zh.md`
  § 5. Its reader built it from the same English two goals ago, so a new count would repeat it.
- **The song guides' Latin titles and names are one list, `SONG_NAMES`,** in `src/i18n/typography.ts`.
  Chinese and Hindi both spread it, and a stage 4 or 5 writer adds a missing title there.
- **A count whose form changes picks it by `n === 1`, where 0 can show.** `Intl` puts 0 in `one`, but
  Hindi says `0 गाने`. A noun that keeps its form still goes through `plural`, as `hi.md` § 8 says.
- **Lanes:** stage 1 comes first. Stages 2 to 5 touch disjoint files, but each follows the glossary
  stage 1 writes, so they run in order. Stage 6 needs all of them.

## Stages

### 1. The Hindi style guide and glossary

**Does:** writes `docs/reference/translation/hi.md` in the shape the method names, and fills the Hindi
entry of the rule table.
**Split:** a read-only `reader` subagent lists every recurring music term and interface term in the English
catalogs, lessons and guides, with a count. `web-fetch` subagents, sent together, read the sources and
report what each settles.
**Gate:** `tools/i18n.ts` and `src/i18n/typography.ts` exist.

- [x] The term list: every music and interface term the English uses more than once. `docs/reference/translation/hi.md:1`
- [x] Microsoft's Hindi style guide: the address, the marks and the interface terms. `docs/reference/translation/hi.md:1`
- [x] Hindi Wikipedia's music articles and Hindi piano methods: each music term with two sources. `docs/reference/translation/hi.md:1`
- [x] Every section of the style guide, with calibration texts from every kind of text. `docs/reference/translation/hi.md:1`
- [x] The Hindi entry of the rule table: script, kept words and the patterns of the marks. `src/i18n/typography.ts:1`
- [x] The Hindi row of the locale table, confirmed or changed with its reason. `src/i18n/locale.ts:18`

### 2. The site and the player in Hindi

**Does:** every catalog section, translated, reviewed blind and stamped.
**Split:** three writing subagents translate side by side, one per item below. Three fresh reviewers
then review them blind, as the method says.
**Gate:** `docs/reference/translation/hi.md` exists.

- [x] The site, its pages and *Learn Piano*. `src/i18n/messages/hi.ts:1`, `src/i18n/messages/learn-lesson.hi.ts:1`
- [x] The player's shell, bar, library, input and play modes. `src/i18n/messages/player-shell.hi.ts:1`
- [x] The player's settings. `src/i18n/messages/player-settings.hi.ts:1`
- [x] Each batch reviewed blind, every finding settled, and every *wrong* batch reviewed again.
- [x] `bun x tsc` and `hindi_texts_keep_their_rules` pass. `src/i18n/translation-rules.test.ts:1`
- [x] `bun run i18n stamp hi` for each catalog section. `src/i18n/stamps/hi.json:1`

### 3. The course in Hindi

**Does:** every lesson of every world, translated, reviewed blind and stamped.
**Split:** eight writing subagents, one per world, side by side. Eight fresh reviewers then review them
blind.
**Gate:** stage 2's catalogs are stamped.

- [x] *Meet the piano* and *First melodies*. `src/learn/lessons/meet-the-piano/texts.hi.ts:1`, `src/learn/lessons/first-melodies/texts.hi.ts:1`
- [x] *Rhythm* and *Reading music*. `src/learn/lessons/rhythm/texts.hi.ts:1`, `src/learn/lessons/reading-music/texts.hi.ts:1`
- [x] *Both hands* and *Chords*. `src/learn/lessons/both-hands/texts.hi.ts:1`, `src/learn/lessons/chords/texts.hi.ts:1`
- [x] *Scales and keys* and *Expression*. `src/learn/lessons/scales-and-keys/texts.hi.ts:1`, `src/learn/lessons/expression/texts.hi.ts:1`
- [x] Each world reviewed blind, and every finding settled.
- [x] `bun run i18n stamp hi` for each world. `src/i18n/stamps/hi.json:1`

### 4. The song guides in Hindi, from a to m

**Does:** the guide of every song whose slug starts with a letter from a to m.
**Split:** a read-only `Explore` subagent lists those slugs. Three writing subagents take a third each,
side by side, and three fresh reviewers review them blind.
**Gate:** stage 3's worlds are stamped.

- [ ] One `tools/our-songs/<slug>.hi.ts` per slug from `alle-jahre-wieder` to `morgen-kinder`. `tools/our-songs/alle-jahre-wieder.hi.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp hi` stamps them. `public/songs/ours/alle-jahre-wieder/guide.json:1`

### 5. The song guides in Hindi, from n to z

**Does:** the guide of every song whose slug starts with a letter from n to z.
**Split:** as stage 4.
**Gate:** stage 4's guides are stamped.

- [ ] One `tools/our-songs/<slug>.hi.ts` per slug from `o-christmas-tree` to `yankee-doodle`. `tools/our-songs/o-christmas-tree.hi.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp hi` stamps them. `public/songs/ours/o-christmas-tree/guide.json:1`

### 6. The Hindi site ships

**Does:** one read of the whole locale for consistency, then `hi` ships, and every page is looked at.
**Split:** a fresh `reader` subagent reads every Hindi file against the glossary, and lists each term,
address or mark that drifts between files.
**Gate:** `bun run i18n status hi` lists no missing and no stale text outside `legal`.

- [ ] Every drift the reader lists is settled in the files it names.
- [ ] `hi` is `shipped`. `src/i18n/locale.ts:18`
- [ ] The Hindi social image. `tools/make-social-image.ts:104`
- [ ] The layout checks run in `hi` at 360 and 1280 pixels. `e2e/layout-check.ts:43`
- [ ] Test `the_hindi_site_reads_in_hindi`: `lang`, the switch's *हिन्दी*, a lesson step and the player in Hindi. `e2e/locales.e2e.ts:1`
- [ ] Look at every route in `hi` with `bun run shot --locale hi-IN`, on a phone and a desktop, in both themes. Every conjunct and matra draws whole.
- [ ] Look for any character drawn as a missing-glyph box, in Chrome on Windows and on an Android phone width.
- [ ] The feature list and the README name Hindi. `docs/reference/features.md:1`, `README.md:12`

### 7. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stages 1 to 3 are done. Every lesson of the eight worlds has its `<lesson>.hi.ts`, each world's
`texts.hi.ts` gathers them, and each `index.ts` loads it under `hi`. Each world is stamped in
`src/i18n/stamps/hi.json`. The only texts left out are quiz answers made of note letters or digits,
which equal the English.

The first blind reviews found 26 wrong texts. Most used `ऊँचा`/`नीचा` for pitch, or a bare `तेज़` for
speed, and both read as loudness. Every batch with a *wrong* finding was reviewed again until a fresh
reviewer found none, or its last *wrong* was a leftover the session checked by hand (*Chords*).

`hi.md` gained what the reviews settled. § 7 says where `ऊपर वाला`, `ऊँची पिच` and never `ऊँचा` go.
§ 3 sets "Well done." as `बहुत बढ़िया।`. § 5 gained rows for the step, skip and leap nouns, staff line and
space, the genders of `बीट` and `की सिग्नेचर`, held beats, fast and slow with `स्पीड`, and the two holds.
*Old MacDonald* joined the `hi` kept list.

### Next

**Stage 4: the song guides from a to m.** A read-only `Explore` subagent lists the slugs in
`tools/our-songs/` from `alle-jahre-wieder` to `morgen-kinder`. Run `bun tools/i18n.ts work hi
guide/<slug>` for each. Brief three writers side by side, each with
a third of the slugs and the whole of `hi.md`, read in two parts. Then a blind reviewer and a settler
per batch, and a fresh reviewer for each batch with a *wrong* finding.

- Brief each writer and reviewer on the traps this stage met. `ऊँचा`/`नीचा` never qualifies a note
  (§ 7). `तेज़` or `धीरे` alone never means a speed (§ 5's tempo row). A pronoun must not point at the
  wrong key, and a demo must not give a quiz away.
- Copy the recurring steps' wording, such as "Play the whole song", from the first batch into the
  next briefs, as `translation.md` § *Before a locale ships* asks.
- A writer adds a missing Latin title to `SONG_NAMES` in `src/i18n/typography.ts` only through the
  session, which edits that shared file.
- `bun tools/make-our-songs.ts` writes the guides once all three batches are settled.

Expected red: none.

### Backlog

- A native Hindi speaker's read of the course would catch what a blind review cannot. Start with
  *High and low* in `src/learn/lessons/meet-the-piano/high-and-low.hi.ts`, whose `पिच` and `मोटी`/`पतली
  आवाज़` are a reviewer's choice.
- An Indian piano teacher's read of the glossary's notation loanwords, and of `स्केल` for a song's key.

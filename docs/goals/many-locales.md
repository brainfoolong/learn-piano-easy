---
looper: 1
title: Many locales
summary: "A locale may lack any text and shows the English instead, each locale loads only its own texts, and the tools and checks of a translation pass exist."
context: [docs/decisions/0012.md, docs/agent/translation.md, src/i18n/locale.ts, src/i18n/live.ts, src/i18n/format.ts, src/learn/model.ts, src/library/guide.ts, tools/make-our-songs.ts]
stages:
  - id: 1
    title: A locale table, and catalogs that fall back to English
    status: open
  - id: 2
    title: Lesson texts and song guides fall back to English and load per locale
    status: open
  - id: 3
    title: The translation tool, the stamps and the rules test
    status: open
  - id: 4
    title: A pseudo-locale finds every hard-coded and every cramped text
    status: open
  - id: 5
    title: "Scripts, fonts, note names and sorting follow the locale"
    status: open
  - id: 6
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: catalog-fallback
    stage: 1
    name: a missing text shows in English, and a page loads only its own catalog
    run: [bun, test, src/i18n/i18n.test.ts]
    tests: [a_missing_text_shows_in_english, a_page_loads_only_its_own_catalog, every_locale_names_its_plural_forms]
  - id: lesson-fallback
    stage: 2
    name: a lesson text a locale lacks shows in English
    run: [bun, test, src/learn/model.test.ts]
    tests: [a_missing_lesson_text_shows_in_english]
  - id: guide-fallback
    stage: 2
    name: a guide text a locale lacks shows in English
    run: [bun, test, tools/our-songs.test.ts]
    tests: [a_guide_without_a_translation_shows_english, a_translated_list_of_another_length_shows_english]
  - id: i18n-tool
    stage: 3
    name: the translation tool lists missing and stale texts and stamps a unit
    run: [bun, test, tools/i18n.test.ts]
    tests: [status_lists_missing_and_stale_texts, stamp_records_only_the_named_unit, work_lists_each_text_with_its_use]
  - id: translation-rules
    stage: 3
    name: the rules test fails a broken translation
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [a_text_in_the_wrong_script_fails, a_lost_argument_fails, a_missing_plural_form_fails, a_broken_mark_rule_fails]
  - id: pseudo-locale
    stage: 4
    name: no page shows a hard-coded text, and every page holds longer text
    run: [bun, x, playwright, test, e2e/pseudo.e2e.ts]
    tests: [no_page_shows_a_hard_coded_text, every_page_holds_longer_text]
  - id: locale-scripts
    stage: 5
    name: solfège follows the locale's script, and the Latin font covers every Latin locale
    run: [bun, test, src/theory/note-names.test.ts, tools/font-coverage.test.ts]
    tests: [solfege_follows_the_locale_script, a_new_learner_gets_the_locale_naming_system, the_latin_font_covers_every_latin_locale]
---

# Many locales

## Why

The site is in English and German, and every catalog must hold every text ([decision 0004](../decisions/0004.md)).
Eleven more locales are planned ([decision 0012](../decisions/0012.md)). A feature session writes only
English and German, so every other locale must be able to lack a text and show the English instead.

Thirteen catalogs and thirteen sets of lesson texts in one bundle would make every page heavier. So each
locale loads only its own texts.

A translation pass needs tools. It needs a list of what is missing or stale, and a work list with each
text's context. It needs a record of the English each translation was made from, and checks a machine
can make. The method that
uses them is [docs/agent/translation.md](../agent/translation.md).

## Standing decisions

- **The locale table is the one home of a locale's facts,** in `src/i18n/locale.ts`. A row holds the
  code, the English name, the endonym, the `lang` tag, the `Intl` tag and the direction. It also holds
  the Open Graph locale, the default naming system, the alphabet and the flags `shipped` and `complete`. Every list elsewhere derives from it.
- **The rows, decided now.** Each locale's goal may change its own row with a recorded reason.

  | Code | Endonym | `lang` | `Intl` tag | Dir | Notes by default |
  |---|---|---|---|---|---|
  | `en` | English | `en` | `en` | ltr | letters |
  | `de` | Deutsch | `de` | `de` | ltr | German letters |
  | `es` | Español | `es` | `es-419` | ltr | solfège |
  | `zh` | 简体中文 | `zh-Hans` | `zh-Hans-CN` | ltr | letters |
  | `hi` | हिन्दी | `hi` | `hi-IN` | ltr | letters |
  | `ar` | العربية | `ar` | `ar` | rtl | solfège |
  | `pt` | Português (Brasil) | `pt-BR` | `pt-BR` | ltr | solfège |
  | `id` | Bahasa Indonesia | `id` | `id` | ltr | letters |
  | `bn` | বাংলা | `bn` | `bn-BD` | ltr | letters |
  | `ru` | Русский | `ru` | `ru` | ltr | solfège |
  | `fr` | Français | `fr` | `fr` | ltr | solfège |
  | `ur` | اردو | `ur` | `ur-PK` | rtl | letters |
  | `ja` | 日本語 | `ja` | `ja` | ltr | solfège |

- **A locale's folder is its code,** such as `es/play/`. A browser language matches by its first subtag,
  so `es-MX`, `pt-PT` and `zh-TW` find `es`, `pt` and `zh`. A reader of Traditional Chinese reads
  Simplified better than English, and the language switch offers every locale.
- **`shipped` gates everything a visitor meets:** the pages the build writes, the language switch, the
  footer's links, `hreflang` and the sitemap. A locale's translation files exist and are checked before
  it ships. Only `en` and `de` ship in this goal.
- **`complete` marks the locales that hold every text:** `en` and `de`. The type checker and
  `every_locale_has_every_message` hold them to it. The check that no English shows runs only on them.
- **A translation is `Translation<T>`, a deep partial of the English type.** A function and an array are
  leaves, translated whole or not at all, since half a list cannot match the English one.
- **The fallback merges once, when a catalog loads.** `withEnglish(en, translation)` copies each English
  leaf the translation lacks. `t()` and `messagesOf` stay synchronous and never check per call.
- **English is in the main bundle. Every other locale's catalog is its own chunk,** loaded by
  `loadLocale(locale)`. A page awaits its locale's chunk before its first render. The language switch
  awaits the new chunk before `setLiveLocale`. `messagesOf` throws for a locale not loaded yet. The cost
  is one more request on a first visit, and the service worker precaches every chunk.
- **The build reads every catalog through `src/i18n/all-catalogs.ts`,** which imports them statically.
  Only `tools/` imports it, and a test checks that no `src/` module does.
- **German moves to the lazy path too,** so English is the one locale with a special path.
- **Lesson texts load per world and locale.** Each world has `texts.<locale>.ts`, which imports that
  world's lesson text files of the locale. `World.loadTexts(locale)` loads it, and English stays in the
  world's chunk.
- **A guide's translation is `tools/our-songs/<slug>.<locale>.ts`,** with the shape of the German block,
  `GuideTranslation`. The German block stays in the song module. The writer puts every locale's text side
  by side in `guide.json`, as `GuideText` already holds them. Each guide then grows with each locale.
- **A non-German translated list whose length differs from the English shows the English list,** and
  `status` lists it. The writer still refuses a German list of another length.
- **A text's id is its path:** a catalog's dotted key, `lesson/<world>/<lesson>/<key>`, or
  `guide/<slug>/<key>`.
- **A stamp is `src/i18n/stamps/<locale>.json`,** mapping each id to the first 12 hex digits of the
  SHA-256 of the English text it was made from. A function's stamp hashes its source text as Bun reads it.
  `stamp` writes only the ids of the unit it names.
- **The plural forms are a typed table, `PLURAL_FORMS`,** naming each locale's categories. `plural()`
  takes forms typed by the locale, so a missing form fails the type check. A test holds the table equal
  to `Intl.PluralRules(...).resolvedOptions().pluralCategories`.
- **The rules test reads its rules from `src/i18n/typography.ts`,** one entry per locale: the script's
  Unicode ranges, the kept words, and the patterns of its marks. A locale's style guide fills its entry.
- **The script check passes what music writes in Latin in every locale.** That is note letters with ♯
  and ♭, chord symbols such as `Am7`, digits, and the kept words. Everything else must be the locale's script.
- **The rules test names one test per locale,** from the row's English name: `spanish_texts_keep_their_rules`,
  `chinese_texts_keep_their_rules`, and so on. Each locale's goal checks its own.
- **The legal notice and the privacy text are English and German only.** A wrong word there has legal
  weight, and nobody on the project can check it. `status` leaves the `legal` section out, and the
  pages show the English.
- **The pseudo-locale is `en-XA`.** Each text is wrapped in `⟦ ⟧`, its vowels are accented, and it runs
  40% longer. The dev server and a build with `--pseudo` write its pages. The release build never does,
  and the language switch never lists it.
- **No font is shipped for a new script.** Each script gets a system font stack as a token under
  `:root:lang(<code>)`. Han text names its locale's fonts, because Chinese and Japanese draw the same
  character differently.
- **A script that joins its letters gets no `letter-spacing`,** since spacing breaks Arabic and Devanagari
  shapes. Chinese and Japanese get no italic, since their fonts have none. They take bold for emphasis.
- **Solfège syllables are written in the locale's script and spelling:**

  | Locale | Syllables |
  |---|---|
  | `fr` | `Do Ré Mi Fa Sol La Si` |
  | `pt` | `Dó Ré Mi Fá Sol Lá Si` |
  | `ru` | `до ре ми фа соль ля си` |
  | `ar` | `دو ري مي فا صول لا سي` |
  | `ja` | `ド レ ミ ファ ソ ラ シ` |
  | every other | `Do Re Mi Fa Sol La Si` |
- **A new learner's naming system is their locale's default** until they pick one in the settings.
- **Sorting uses `Intl.Collator` of the live locale.**
- **The layout checks run in `en`, `de` and `en-XA` at every width.** A shipped locale adds its own run at
  360 and 1280 pixels in its own goal.
- **Lanes:** every stage touches `src/i18n/`, so the stages run in order.

## Stages

### 1. A locale table, and catalogs that fall back to English

**Does:** the locale table, `Translation<T>`, the fallback, and one lazy chunk per locale's catalog.
**Split:** a read-only `Explore` subagent first lists every caller of `messagesOf`, `CATALOGS` and
`LOCALES`, and every hard-coded `"en"` or `"de"` list. Its list is the anchor set of the callers item.
**Gate:** none.

- [ ] The locale table, with every row above and only `en` and `de` shipped. `src/i18n/locale.ts:18`
- [ ] `Translation<T>` and `withEnglish`. `src/i18n/translation.ts:1`
- [ ] `loadLocale`, and `messagesOf` that throws for a locale not loaded. `src/i18n/locale.ts:38`
- [ ] `src/i18n/all-catalogs.ts` for the build, and the test that no `src/` module imports it. `src/i18n/all-catalogs.ts:1`
- [ ] The site's boot awaits its page's locale, and the language switch awaits the new one. `src/site/site.ts:73`, `src/site/site-bar.ts:84`
- [ ] Every caller the subagent lists reads the table. `tools/build.ts:124`, `src/settings/schema.ts:239`, `e2e/layout-check.ts:43`, `tools/make-social-image.ts:104`
- [ ] `PLURAL_FORMS`, and `plural()` typed by the locale. `src/i18n/format.ts:19`
- [ ] `every_locale_has_every_message` holds the complete locales, and the untranslated check runs on them only. `src/i18n/i18n.test.ts:17`, `src/i18n/untranslated.test.ts:19`
- [ ] Tests `a_missing_text_shows_in_english`, `a_page_loads_only_its_own_catalog` and `every_locale_names_its_plural_forms`. `src/i18n/i18n.test.ts:1`
- [ ] The landing page stays within its byte budget. `tools/build.test.ts:1`

### 2. Lesson texts and song guides fall back to English and load per locale

**Does:** a lesson and a guide show English for each text their locale lacks, and a world loads only
the live locale's texts.
**Gate:** `loadLocale` exists in `src/i18n/locale.ts`.

- [ ] `LessonTexts` takes a `Translation`, and a step's texts merge with the English. `src/learn/model.ts:6`
- [ ] Each world's `texts.de.ts`, and `World.loadTexts`. `src/learn/lessons/meet-the-piano/index.ts:1`
- [ ] Every lesson module stops importing its German file. `src/learn/lessons/meet-the-piano/octaves.ts:9`
- [ ] The lesson view awaits the live locale's texts. `src/learn/lesson-view.ts:1`
- [ ] A test that every lesson text file is in its world's `texts.<locale>.ts`. `src/learn/course.test.ts:1`
- [ ] `GuideTranslation`, and the writer reads each `<slug>.<locale>.ts`. `tools/make-our-songs.ts:338`
- [ ] A non-German list of another length falls back to English. `tools/make-our-songs.ts:306`
- [ ] Test `a_missing_lesson_text_shows_in_english`. `src/learn/model.test.ts:1`
- [ ] Tests `a_guide_without_a_translation_shows_english` and `a_translated_list_of_another_length_shows_english`. `tools/our-songs.test.ts:1`

### 3. The translation tool, the stamps and the rules test

**Does:** `tools/i18n.ts` with `status`, `work` and `stamp`, the rules test with its rule table, and the
docs that state the new rules.
**Gate:** `World.loadTexts` exists.

- [ ] `status <locale>`: missing, stale and fallen-back texts by unit, and a total. `tools/i18n.ts:1`
- [ ] `work <locale> <unit>`: each text's id, English, German, doc comment, use sites, kind and length. `tools/i18n.ts:1`
- [ ] `stamp <locale> <unit>`: writes the unit's ids to the locale's stamp file. `src/i18n/stamps/README.md:1`
- [ ] `bun run i18n` in `package.json`. `package.json:1`
- [ ] Tests `status_lists_missing_and_stale_texts`, `stamp_records_only_the_named_unit` and `work_lists_each_text_with_its_use`, over fixtures. `tools/i18n.test.ts:1`
- [ ] The rule table, empty for every locale but its script ranges. `src/i18n/typography.ts:1`
- [ ] The rules test: script, arguments, plurals, marks, isolation and no copy, over every translation file. `src/i18n/translation-rules.test.ts:1`
- [ ] Tests `a_text_in_the_wrong_script_fails`, `a_lost_argument_fails`, `a_missing_plural_form_fails` and `a_broken_mark_rule_fails`, over fixtures. `src/i18n/translation-rules.test.ts:1`
- [ ] The curriculum says each text is written in English and German, and links the method. `docs/curriculum.md:64`
- [ ] The song rules say the same of guides. `docs/our-songs.md:123`
- [ ] The site design's languages say the same, and name the layout locales. `docs/site-design.md:162`
- [ ] The design's `src/i18n/` row names the table, the fallback and the lazy chunks. `docs/design.md:39`
- [ ] `docs/agent/translation.md` loses its `## Open` items this goal closed. `docs/agent/translation.md:1`
- [ ] CONTRIBUTING invites native speakers to report a text, and says how a report is reviewed. `CONTRIBUTING.md:1`

### 4. A pseudo-locale finds every hard-coded and every cramped text

**Does:** `en-XA` pages in dev and in a `--pseudo` build, and an e2e sweep over every route in them.
**Split:** the sweep's first run lists the hard-coded texts. Writing subagents move them into the catalogs
in English and German, one subagent per folder of `src/`, side by side.
**Gate:** `src/i18n/translation-rules.test.ts` exists.

- [ ] `en-XA` in the table, built from the English by `pseudo()`. `src/i18n/pseudo.ts:1`
- [ ] The build's `--pseudo` flag, and the dev server writes its pages. `tools/build.ts:241`
- [ ] The e2e web server builds with `--pseudo`. `playwright.config.ts:1`
- [ ] The sweep: every visible text holds a `⟦` or is a number, a note name, a song title or a kept word. `e2e/pseudo.e2e.ts:1`
- [ ] Every hard-coded text the sweep finds moves into the catalog, in English and German. `src/i18n/messages/en.ts:1`
- [ ] The layout checks run in `en-XA` at every width. `e2e/layout-check.ts:43`
- [ ] Every layout that breaks at 40% longer text wraps or gets room. `src/ui/base.css:1`
- [ ] Tests `no_page_shows_a_hard_coded_text` and `every_page_holds_longer_text`. `e2e/pseudo.e2e.ts:1`
- [ ] Look at the landing, the map, a lesson and the player in `en-XA` with `bun run shot`.

### 5. Scripts, fonts, note names and sorting follow the locale

**Does:** each script's font stack and line rules, solfège in the locale's script, the naming default,
and sorting by the live locale.
**Gate:** `e2e/pseudo.e2e.ts` exists.

- [ ] A font token per script under `:root:lang(<code>)`, for Han in Chinese and in Japanese, Devanagari, Bengali, Arabic, Nastaliq and Cyrillic. `src/ui/base.css:25`
- [ ] Line height per script, with more room for Devanagari, Bengali and Nastaliq. `src/ui/base.css:1`
- [ ] No `letter-spacing` for a joining script, and no italic for Han. `src/ui/base.css:1`
- [ ] `line-break: strict` for Chinese and Japanese, and `word-break: auto-phrase` for Japanese. `src/ui/base.css:1`
- [ ] The 3D labels draw with the locale's font stack. `src/render/labels.ts:1`
- [ ] Solfège syllables per locale. `src/theory/note-names.ts:46`
- [ ] A new learner's naming system follows the locale until they pick one. `src/settings/schema.ts:1`
- [ ] Sorting through `Intl.Collator` of the live locale. `src/library/search.ts:191`, `src/library/uploads.ts:201`
- [ ] Tests `solfege_follows_the_locale_script` and `a_new_learner_gets_the_locale_naming_system`. `src/theory/note-names.test.ts:1`
- [ ] Test `the_latin_font_covers_every_latin_locale`: the font's `cmap` holds each Latin locale's alphabet and every character its translation files use. `tools/font-coverage.test.ts:1`

### 6. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

The goal is written and live on the chain. No stage has started. The policy it builds on is
decision 0012 and rule 9 of `AGENTS.md`.

### Next

**Stage 1: a locale table, and catalogs that fall back to English.** Files: `src/i18n/`, `src/site/`,
`tools/build.ts`, `src/settings/schema.ts` and `e2e/layout-check.ts`. No gate. The items are the stage's
list above.

Expected red: every test that imports `CATALOGS.de` directly, until it loads German first.

### Backlog

- The web app manifest has one English name and description. A manifest per locale could follow.
- A locale's 404 page, if the site ever gets one.

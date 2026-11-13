---
looper: 1
title: Many locales
summary: "A locale may lack any text and shows the English instead, each locale loads only its own texts, and the tools and checks of a translation pass exist."
context: [docs/decisions/0012.md, docs/agent/translation.md, src/i18n/locale.ts, src/i18n/live.ts, src/i18n/format.ts, src/learn/model.ts, src/library/guide.ts, tools/make-our-songs.ts]
stages:
  - id: 1
    title: A locale table, and catalogs that fall back to English
    status: done
  - id: 2
    title: Lesson texts and song guides fall back to English and load per locale
    status: done
  - id: 3
    title: The translation tool, the stamps and the rules test
    status: done
  - id: 4
    title: A pseudo-locale finds every hard-coded and every cramped text
    status: done
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

- **The locale table is the one home of a locale's facts,** in `src/i18n/locale-table.ts`. A row holds the
  code, the English name, the endonym, the `lang` tag, the `Intl` tag and the direction. It also holds
  the Open Graph locale, the default naming system, the alphabet and the flags `shipped` and `complete`. Every list elsewhere derives from it.
- **The table's file imports nothing,** and `src/i18n/locale.ts` re-exports it. The settings' schema
  and `format.ts` read it without loading a catalog, so no import cycle runs through the catalogs.
- **`ShippedLocale` is a shipped locale, and `Locale` is a page's locale: a shipped one or `en-XA`.**
  A text keyed by `ShippedLocale`, such as a world's title, fails the type check when a row ships
  without it. `textFor` reads it for any locale. `LanguageCode` is any row's code, and `LocaleCode` adds
  `en-XA`. Catalogs, `loadLocale`, `messagesOf` and the `Intl` helpers take a `LocaleCode`. Renaming the
  record keys touched about 30 lines, where a new page-locale type would have touched about 120.
- **The language switch and the footer name a locale by the table's endonym.** The catalogs hold no
  `languageName`.
- **The router awaits `prepare(path)` before a move,** which loads the page's catalog. A later move wins,
  and the page it left never shows. Every move across locales goes through it.
- **Tools, tests and e2e files read catalogs through `src/i18n/all-catalogs.ts`:** `CATALOGS` as the
  files hold them, and `catalogOf` merged with English. `tools/build.ts` loads every shipped catalog
  when it loads. `tools/test-preload.ts` does the same before each unit test file, through `bunfig.toml`.
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
- **A world fills `Lesson.texts[locale]` in place, merged once by `mergeTexts`.** `World.load` runs once,
  so every reader shares one lesson object. `textsOf` throws before the load, as `messagesOf` does. A
  WeakMap beside the lesson would keep it immutable, but every test that builds a lesson inline would
  then need a load as well.
- **A built skip test gains a locale's texts in `loadTexts`,** through `translateSkipTest`, once its
  lessons hold theirs.
- **A translated lesson list of another length shows the English list,** in every locale. A quiz names
  its right answer by index, so a list of another length would mark the wrong answer right.
- **A guide's translation is `tools/our-songs/<slug>.<locale>.ts`,** with the shape of the German block,
  `GuideTranslation`. The German block stays in the song module. The writer puts every locale's text side
  by side in `guide.json`, as `GuideText` already holds them. Each guide then grows with each locale.
  The file exports `translation`, a `Translation<GuideTranslation>`, and `guideTranslationsOf` finds it.
  `GuideText` is keyed by `LocaleCode`, so a guide holds a locale's text before the locale ships.
- **A non-German translated list whose length differs from the English shows the English list,** and
  `status` lists it. The writer still refuses a German list of another length.
- **A text's id is its path:** a catalog's dotted key, `lesson/<world>/<lesson>/<key>`, or
  `guide/<slug>/<key>`.
- **A stamp is `src/i18n/stamps/<locale>.json`,** mapping each id to the first 12 hex digits of the
  SHA-256 of the English text it was made from. A function's stamp hashes its source text as Bun reads it.
  `stamp` writes only the ids of the unit it names.
- **A unit is `catalog/<section>`, `lesson/<world>` or `guide/<slug>`.** A section is a catalog file's
  stem, and `catalog/site` holds the texts of `en.ts` itself. A world's unit holds its lessons and its boss.
  The built skip test reuses their texts, so no unit holds it.
- **A translated text without a stamp is stale,** so German, which has no stamps, reads all stale.
- **`stamp` drops an id no unit holds any more,** so a deleted text leaves no stamp behind.
- **The rule table holds the kept words and the marks, and the scripts follow the row's alphabet** through
  `SCRIPTS`, so a locale names its script once. A script matches by `Script_Extensions`.
- **The rules test skips English and German.** English is the source, and German is checked by eye.
- **A message's arguments are checked by calling it with marker numbers.** A message the English cannot
  build from numbers is left to the review. An argument that shows in ASCII digits came in raw, so a
  right-to-left locale must isolate it.
- **The plural check reads each `plural(...)` call's forms from the message's source,** since the type
  checker already refuses a missing form outside a cast.
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
- **`PSEUDO_ROW` sits beside `LOCALE_TABLE`, never in it,** so the tools, the rules test and every list
  of languages leave it out. `rowOf` finds it.
- **The runtime always knows `en-XA`, and only the build decides whether its pages exist.** Its catalog,
  lesson texts and guide texts derive from the English when they load. The cost is `pseudo.ts`, about
  1 kB, in the release bundle. A build flag read by the runtime would break `bun test` and the tools.
- **A browser's language never moves a visit to `en-XA`,** so the layout checks open its pages by path.
- **`pseudoTree` keeps a value under `route` or `href`,** since an address is no text.
- **The longer-text test fails only on a flaw `en-XA` adds over English,** since each page's own test
  holds the English to the layout checks.
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

- [x] The locale table, with every row above and only `en` and `de` shipped. `src/i18n/locale-table.ts:44`
- [x] `Translation<T>` and `withEnglish`. `src/i18n/translation.ts:1`
- [x] `loadLocale`, and `messagesOf` that throws for a locale not loaded. `src/i18n/locale.ts:40`
- [x] `src/i18n/all-catalogs.ts` for the build, and the test that no `src/` module imports it. `src/i18n/all-catalogs.ts:1`
- [x] The site's boot awaits its page's locale, and the language switch awaits the new one. `src/site/site.ts:73`, `src/site/router.ts:84`
- [x] Every caller the subagent lists reads the table. `tools/build.ts:124`, `src/settings/schema.ts:239`, `e2e/layout-check.ts:43`, `tools/make-social-image.ts:104`
- [x] `PLURAL_FORMS`, and `plural()` typed by the locale. `src/i18n/format.ts:14`
- [x] `every_locale_has_every_message` holds the complete locales, and the untranslated check runs on them only. `src/i18n/i18n.test.ts:22`, `e2e/layout-check.ts:238`
- [x] Tests `a_missing_text_shows_in_english`, `a_page_loads_only_its_own_catalog` and `every_locale_names_its_plural_forms`. `src/i18n/i18n.test.ts:1`
- [x] The landing page stays within its byte budget. `tools/build.test.ts:1`

### 2. Lesson texts and song guides fall back to English and load per locale

**Does:** a lesson and a guide show English for each text their locale lacks, and a world loads only
the live locale's texts.
**Gate:** `loadLocale` exists in `src/i18n/locale.ts`.

- [x] `LessonTexts` takes a `Translation`, and a step's texts merge with the English. `src/learn/model.ts:6`
- [x] Each world's `texts.de.ts`, and `World.loadTexts`. `src/learn/lessons/meet-the-piano/index.ts:1`
- [x] Every lesson module stops importing its German file. `src/learn/lessons/meet-the-piano/octaves.ts:9`
- [x] The lesson view awaits the live locale's texts. `src/learn/lesson-view.ts:1`
- [x] A test that every lesson text file is in its world's `texts.<locale>.ts`. `src/learn/course.test.ts:1`
- [x] `GuideTranslation`, and the writer reads each `<slug>.<locale>.ts`. `tools/make-our-songs.ts:338`
- [x] A non-German list of another length falls back to English. `tools/make-our-songs.ts:306`
- [x] Test `a_missing_lesson_text_shows_in_english`. `src/learn/model.test.ts:1`
- [x] Tests `a_guide_without_a_translation_shows_english` and `a_translated_list_of_another_length_shows_english`. `tools/our-songs.test.ts:1`

### 3. The translation tool, the stamps and the rules test

**Does:** `tools/i18n.ts` with `status`, `work` and `stamp`, the rules test with its rule table, and the
docs that state the new rules.
**Gate:** `World.loadTexts` exists.

- [x] `status <locale>`: missing, stale and fallen-back texts by unit, and a total. `tools/i18n.ts:1`
- [x] `work <locale> <unit>`: each text's id, English, German, doc comment, use sites, kind and length. `tools/i18n.ts:1`
- [x] `stamp <locale> <unit>`: writes the unit's ids to the locale's stamp file. `src/i18n/stamps/README.md:1`
- [x] `bun run i18n` in `package.json`. `package.json:1`
- [x] Tests `status_lists_missing_and_stale_texts`, `stamp_records_only_the_named_unit` and `work_lists_each_text_with_its_use`, over fixtures. `tools/i18n.test.ts:1`
- [x] The rule table, empty for every locale but its script ranges. `src/i18n/typography.ts:1`
- [x] The rules test: script, arguments, plurals, marks, isolation and no copy, over every translation file. `src/i18n/translation-rules.test.ts:1`
- [x] Tests `a_text_in_the_wrong_script_fails`, `a_lost_argument_fails`, `a_missing_plural_form_fails` and `a_broken_mark_rule_fails`, over fixtures. `src/i18n/translation-rules.test.ts:1`
- [x] The curriculum says each text is written in English and German, and links the method. `docs/curriculum.md:64`
- [x] The song rules say the same of guides. `docs/our-songs.md:123`
- [x] The site design's languages say the same, and name the layout locales. `docs/site-design.md:162`
- [x] The design's `src/i18n/` row names the table, the fallback and the lazy chunks. `docs/design.md:39`
- [x] `docs/agent/translation.md` loses its `## Open` items this goal closed. `docs/agent/translation.md:1`
- [x] CONTRIBUTING invites native speakers to report a text, and says how a report is reviewed. `CONTRIBUTING.md:1`

### 4. A pseudo-locale finds every hard-coded and every cramped text

**Does:** `en-XA` pages in dev and in a `--pseudo` build, and an e2e sweep over every route in them.
**Split:** the sweep's first run lists the hard-coded texts. Writing subagents move them into the catalogs
in English and German, one subagent per folder of `src/`, side by side.
**Gate:** `src/i18n/translation-rules.test.ts` exists.

- [x] `en-XA` in the table, built from the English by `pseudo()`. `src/i18n/pseudo.ts:1`
- [x] The build's `--pseudo` flag, and the dev server writes its pages. `tools/build.ts:241`
- [x] The e2e web server builds with `--pseudo`. `playwright.config.ts:1`
- [x] The sweep: every visible text holds a `⟦` or is a number, a note name, a song title or a kept word. `e2e/pseudo.e2e.ts:1`
- [x] Every hard-coded text the sweep finds moves into the catalog, in English and German. `src/i18n/messages/en.ts:1`
- [x] The layout checks run in `en-XA` at every width. `e2e/layout-check.ts:43`
- [x] Every layout that breaks at 40% longer text wraps or gets room. `src/ui/base.css:1`
- [x] Tests `no_page_shows_a_hard_coded_text` and `every_page_holds_longer_text`. `e2e/pseudo.e2e.ts:1`
- [x] Look at the landing, the map, a lesson and the player in `en-XA` with `bun run shot`.

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

Stages 1 to 4 are done. The check `pseudo-locale` passes, and `src/i18n/pseudo.test.ts` passes, each
run once by file.

- `src/i18n/pseudo.ts` holds `pseudo`, `pseudoTree` and `textFor`. `PSEUDO_ROW` sits beside
  `LOCALE_TABLE` in `src/i18n/locale-table.ts`, so no table loop meets it.
- `Locale` is now a page's locale, and the pseudo-locale is one. `ShippedLocale` keys world titles,
  the legal texts, the gallery's messages and the stored language choice.
- The sweep's first run found few hard-coded texts, so no split ran. The license texts on About now carry
  `lang="en"`. Weekday letters from `Intl`, chord degrees, locale codes, `XP` and `1k` pass the sweep.
- The sweep found one bug: `pseudoTree` rewrote a legal link's `route`. It now keeps `route` and `href`.
- `every_page_holds_longer_text` checks each page in English and in `en-XA`, and fails only on a flaw
  the longer text adds. Each page's own test holds the English.
- The sweep opens every route and the first lesson, fresh and past the setup. It opens no dialog or panel.
- `tsc` and the build are clean. The shots of the landing, the map, a lesson and the player show
  only bracketed text.

What earlier stages left to later ones:

- `src/site/legal-view.ts:25` imports `legal.de` statically. Legal stays English and German only.
- `src/theory/note-names.ts:71` compares the locale with `"de"`, and the two `player-settings-play`
  catalogs label the language options with endonyms. That is stage 5, which may read the table there.
- `src/learn/profile-view.ts:143` hands `Intl` the page's code, not `rowOf(locale).intl`. Stage 5 fixes it.

### Next

**Stage 5: scripts, fonts, note names and sorting.** Files: `src/ui/base.css:25`, `src/render/labels.ts`,
`src/theory/note-names.ts:46`, `src/settings/schema.ts`, `src/library/search.ts:191`,
`src/library/uploads.ts:201`, `src/learn/profile-view.ts:143`, `src/theory/note-names.test.ts` and
`tools/font-coverage.test.ts` (new). The schema must stay free of runtime imports from `src/i18n/`
but `locale-table.ts`, as the playbook's `tsc` trap says.

Expected red: every layout test now runs `en-XA` too, through `LOCALES` of `e2e/layout-check.ts`. None of
them ran in this session. A flaw only `en-XA` shows may fail `e2e/design.e2e.ts`, `e2e/site.e2e.ts`,
`e2e/landing.e2e.ts`, `e2e/play.e2e.ts` or `e2e/game.e2e.ts`. Each runs 1.5 times
longer, so a tight `test.setTimeout` may fail too. Stage 6 fixes each.

### Backlog

- The web app manifest has one English name and description. A manifest per locale could follow.
- A locale's 404 page, if the site ever gets one.

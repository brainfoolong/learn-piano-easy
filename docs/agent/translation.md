# Translation: how a locale is translated and kept up to date

English is the source of every text, and German follows every change ([decision 0012](../decisions/0012.md)).
This file is the method for the other eleven locales, which a translation pass brings up to date. A
feature session never translates into them.

A translation here is never a word-for-word copy. A learner who reads it must not be able to tell that it
was written in English first.

## What a translation keeps

- **The meaning.** The same facts, the same instruction and the same result of a click. Nothing is added,
  and nothing is left out.
- **The voice.** Warm, plain and short, as a good teacher speaks. A playful text stays playful.
- **The address.** One form of "you" in the whole locale, which its style guide names.
- **The terms.** One term per idea, the glossary's, in every file of the locale.
- **The fit.** A label fits its button, a plural agrees with its number, and every argument still shows.
- **The reader.** The text reads as if a native teacher wrote it for this app.

## Where the texts live

| Unit | English | A locale's translation |
|---|---|---|
| The site and the player | `src/i18n/messages/<section>.en.ts` | `src/i18n/messages/<section>.<locale>.ts` |
| A lesson | `src/learn/lessons/<world>/<lesson>.en.ts` | `src/learn/lessons/<world>/<lesson>.<locale>.ts` |
| A song's guide | `tools/our-songs/<slug>.ts` | `tools/our-songs/<slug>.<locale>.ts` |
| The style guide | this file's shape | `docs/reference/translation/<locale>.md` |

A translation file may leave out any text, and the site shows the English in its place. It never holds a
key the English lacks.

## The style guide of a locale

A locale's style guide is written before its first text, and every writer and reviewer reads it whole.
It has these sections, in this order:

1. **Variant and readers.** Which variety of the language, such as Latin American Spanish, and who reads it.
2. **Address.** The one form of "you", and how an instruction is phrased, such as an imperative.
3. **Voice.** Three short English texts, each with its translation and why it reads warm and plain.
4. **Gender.** How a text avoids the learner's gender, and the form it falls back to where it cannot.
5. **Terms.** The piano glossary and the interface glossary. Each row is the English, the term and its source.
6. **Kept words.** What stays as it is, such as the site's name, MIDI and the song titles.
7. **Note names.** Letters or solfège, the syllables in the locale's script, and how a key is named.
8. **Numbers.** The digits of a count in a sentence. Fingers, octaves and bars keep Western digits, as
   printed music does.
9. **Marks.** Punctuation, quotes and spaces, each rule with the pattern the rules test checks.
10. **Length.** The room a short label has, and the short forms of long terms.
11. **Calibration.** About fifteen texts of every kind, each with the chosen translation and why it beat
    the next best one.
12. **Sources.** Each source, and what it settled.

### The sources a guide uses

Each glossary term has two sources that agree. Where they disagree, the guide says which it follows and why.

- **Microsoft's style guide for the language** settles the address, the marks and the interface terms.
  The guides are at `learn.microsoft.com/globalization/reference/microsoft-style-guides`.
- **The language's Wikipedia articles** on the piano, notation and music theory settle the music terms.
  A term cites its article.
- **School music books and piano methods published in the language** settle what a beginner is taught.
- **The interface of the big phone and desktop systems in the language** settles words like Settings,
  Open and Cancel.
- **CLDR, through `Intl`,** settles numbers, dates and plural forms. A guide never overrides it by hand.

## A pass, step by step

A pass works in batches. A batch is one catalog section, one world's lessons, or about seven songs.

1. **Status.** `bun tools/i18n.ts status <locale>` lists every missing and every stale text, by unit.
2. **Work list.** `bun tools/i18n.ts work <locale> <unit>` writes the batch's work list under
   `.agent-tmp/i18n/`. Each text has its id, its English, its German, its doc comment, where the code
   uses it, its kind and its English length.
3. **Translate.** One writing subagent per batch gets the style guide, the work list and the writer's
   rules below. It writes the batch's translation files and nothing else.
4. **Check.** `bun x tsc` and the rules test run on the batch. Each failure goes back to its writer.
5. **Review blind.** A fresh subagent per batch reviews it, as the reviewer's brief below says. It has
   never seen the writer's brief or reasoning.
6. **Settle.** The writer applies each finding, or answers why not. The session decides each dispute by
   the style guide. A disputed term is settled in the glossary first, and every batch then follows it.
7. **Review again** each batch that had a finding of the kind *wrong*, with a new fresh reviewer.
8. **Stamp.** `bun tools/i18n.ts stamp <locale> <unit>` records the English each reviewed text was made
   from. A text whose English changes later is stale until a pass stamps it again.
9. **Look.** `bun run shot --locale <locale>` on every page the batch's texts show on, at phone and
   desktop widths, in both themes. A text that clips is shortened with the glossary's short form, never
   shown in a smaller font.

The review is blind because a reviewer who reads the English first reads its meaning into the
translation. A back-translation made without the source shows what the text says, not what it should say.

### The writer's rules

- **Translate the meaning, then write it as a native teacher would.** Reorder, split or join sentences
  as the language needs.
- **Keep every fact, instruction, number, note name and warning.** Add no fact.
- **Recreate a text marked for transcreation.** World titles, badges, taglines and game texts keep their
  effect, not their words. A pun becomes a local pun, or plain charm.
- **Keep the learner's gender out of the text,** as the style guide's *Gender* says.
- **Keep the guide's address in every text,** and its terms in every file.
- **Keep every argument of a message,** in the order the language needs.
- **Give a plural message every form** the locale's plural rules name.
- **Name notes as the guide's *Note names* says.** A letter that code checks, such as a quiz answer, stays
  the catalog's own.
- **Keep a label within its room.** A button or a label keeps about the English length. Prose may grow.
- **Leave the kept words as they are.**
- **Read the German when the English is ambiguous.** When both are, the work list's use site decides.
  When that fails too, the writer asks the session, never guesses.
- **Keep sentences short,** one idea each, as [prose.md](prose.md) asks of the English.

### The reviewer's brief

The reviewer gets the style guide, the batch's translation files, and then the work list. It answers in
three reads, in this order:

1. **Back-translate.** From the translation alone, write in plain English what each text says.
2. **Compare.** Set each back-translation beside the English and the German. List each text whose
   meaning, instruction, tone or term differs.
3. **Read as a learner.** Read the batch as a native speaker learning piano. List each sentence that
   sounds translated, stiff or wrong in register, and each wrong agreement, case, particle or mark.

Each finding names the text's id and its kind: meaning, voice, term, grammar, mark or fit. It names its
weight: *wrong*, *unnatural* or *nit*. It proposes the text that fixes it.

## The checks a machine makes

`src/i18n/translation-rules.test.ts` runs these on every translation file, for every locale:

- **Script.** Each text is written in the locale's script, apart from its kept words.
- **Arguments.** A message called with marked arguments shows every argument the English shows.
- **Plurals.** A counted message has every form `Intl.PluralRules` names for its locale.
- **Marks.** Each pattern of the style guide's *Marks* holds, such as `¿` before a Spanish question.
- **Isolation.** In a right-to-left locale, every argument that may hold left-to-right text is isolated.
- **No copy.** No text equals its English, unless it is a kept word.

A machine check catches the slips a reader forgives. It never shows that a text reads well, which is the
review's job.

## A catch-up pass

New English texts pile up between passes, and every locale shows them in English. A catch-up pass runs
the steps above over what `status` lists. It takes one locale per session, starting with the locale
that has the most missing texts.

## What a feature session does

- **It writes each new or changed text in English and German,** and touches no other locale's file.
- **It gives a text whose meaning changes a new key.** The type checker then names the old key in each
  translation, and the session deletes it there.
- **It never writes a translation in passing,** even into a language it knows.

## Help from native speakers

A native speaker may report a text that reads wrong. The fix goes through the same blind review before it
lands, and the glossary changes first when the report is about a term.

## Open

- `tools/i18n.ts`, the stamps and `src/i18n/translation-rules.test.ts` do not exist yet. The
  `many-locales` goal builds them, with the translation files' fallback to English.
- No locale has a style guide yet. Each locale's goal writes its own as its first stage.

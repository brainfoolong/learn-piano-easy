import { expect, test } from "../testing";
import { CATALOGS } from "./locale";
import { translatedAway, untranslated } from "./untranslated";

test("a_text_is_english_only_when_its_translation_differs", () => {
  const english = translatedAway(
    { title: "Songs", name: "learn-piano-easy", nested: { close: "Close  now" }, count: (n: number) => `${n} songs` },
    { title: "Lieder", name: "learn-piano-easy", nested: { close: "Jetzt schließen" }, count: (n: number) => `${n} Lieder` },
  );
  expect([...english].sort()).toEqual(["Close now", "Songs"]);
});

test("each_english_text_on_a_page_is_named_once", () => {
  const english = new Set(["Songs", "Close"]);
  expect(untranslated(["Lieder", " Songs ", "Songs", "Songs of joy"], english)).toEqual(['English text "Songs" shows']);
});

test("the_german_catalog_translates_some_english_text", () => {
  const english = translatedAway(CATALOGS.en, CATALOGS.de);
  expect(english.has(CATALOGS.en.pages.learn.title)).toBe(true);
  expect(english.has(CATALOGS.en.siteName)).toBe(false);
});

test("a_word_both_languages_share_never_counts_as_english", () => {
  const english = translatedAway(CATALOGS.en, CATALOGS.de);
  const style = CATALOGS.en.player.library.panel.styles.ragtime;
  expect(CATALOGS.de.player.library.panel.styles.ragtime).toBe(style);
  expect(english.has(style)).toBe(false);
  expect(untranslated([style], english)).toEqual([]);
});

test("a_word_one_message_keeps_never_counts_where_another_translates_it", () => {
  const english = translatedAway({ lesson: { start: "Start" }, modes: { start: "Start" } }, { lesson: { start: "Start" }, modes: { start: "Los" } });
  expect([...english]).toEqual([]);
});

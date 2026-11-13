import { LOCALE_TABLE } from "../i18n/locale-table";
import { defaults } from "../settings/schema";
import { expect, test } from "../testing";
import { namingSystemOf, noteName, pitchClassName } from "./note-names";

const SCALE = [60, 62, 64, 65, 67, 69, 71];

test("solfege_follows_the_locale_script", () => {
  const syllables = (locale: "en" | "es" | "fr" | "pt" | "ru" | "ar" | "ja") =>
    SCALE.map((pitch) => noteName(pitch, { system: "solfege", octave: false, locale }));
  expect(syllables("fr")).toEqual(["Do", "Ré", "Mi", "Fa", "Sol", "La", "Si"]);
  expect(syllables("pt")).toEqual(["Dó", "Ré", "Mi", "Fá", "Sol", "Lá", "Si"]);
  expect(syllables("ru")).toEqual(["до", "ре", "ми", "фа", "соль", "ля", "си"]);
  expect(syllables("ar")).toEqual(["دو", "ري", "مي", "فا", "صول", "لا", "سي"]);
  expect(syllables("ja")).toEqual(["ド", "レ", "ミ", "ファ", "ソ", "ラ", "シ"]);
  expect(syllables("es")).toEqual(["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"]);
  expect(syllables("en")).toEqual(syllables("es"));
  // The accidental and the octave keep their shape in every script.
  expect(noteName(70, { system: "solfege", accidentals: "flats", locale: "ru" })).toBe("си♭4");
  expect(pitchClassName(1, { system: "solfege", locale: "ja" })).toBe("ド♯");
});

test("a_new_learner_gets_the_locale_naming_system", () => {
  const choice = defaults().pitchNotationSystem;
  expect(choice).toBe("auto");
  for (const row of LOCALE_TABLE) {
    expect(namingSystemOf(choice, row.code)).toBe(row.naming === "solfege" ? "solfege" : "letters");
  }
  expect(noteName(60, { system: choice, locale: "fr" })).toBe("Do4");
  expect(noteName(71, { system: choice, locale: "de" })).toBe("H4");
  expect(noteName(71, { system: choice, locale: "en" })).toBe("B4");
  // A system the learner picked holds in every locale.
  expect(noteName(60, { system: "letters", locale: "fr" })).toBe("C4");
  expect(noteName(60, { system: "solfege", locale: "en" })).toBe("Do4");
});

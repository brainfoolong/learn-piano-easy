import { expect, test } from "../src/testing";
import { lookIn, stampOf, stampUnit, statusOf, textsOf, workList, type Unit } from "./i18n";

/** A catalog section of two texts, as a fixture's English file exports it. */
const english = {
  title: "Songs",
  count: (n: number) => `${n} songs`,
};

/** A unit of `english`, with the Spanish `es` and the German `de`. */
function unitOf(name: string, es: object, de: object = {}, source = "src/i18n/messages/songs.en.ts"): Unit {
  return { name, texts: textsOf(english, { es, de }, { idOf: (path) => ["songs", ...path].join("."), source }) };
}

test("status_lists_missing_and_stale_texts", () => {
  const unit = unitOf("catalog/songs", { title: "Canciones" });
  const lessons: Unit = {
    name: "lesson/first",
    texts: textsOf({ steps: { quiz: { answers: ["One", "Two"] } } }, { es: { steps: { quiz: { answers: ["Uno"] } } } }, {
      idOf: (path) => `lesson/first/hello/${path.join(".")}`,
      source: "src/learn/lessons/first/hello.en.ts",
      listsFallBack: true,
    }),
  };
  expect(statusOf([unit, lessons], "es", {})).toEqual([
    { unit: "catalog/songs", missing: ["songs.count"], stale: ["songs.title"], fallenBack: [] },
    { unit: "lesson/first", missing: [], stale: [], fallenBack: ["lesson/first/hello/steps.quiz.answers"] },
  ]);
  const stamped = { "songs.title": stampOf("Songs") };
  expect(statusOf([unit], "es", stamped)).toEqual([{ unit: "catalog/songs", missing: ["songs.count"], stale: [], fallenBack: [] }]);
  expect(statusOf([unit], "es", { "songs.title": stampOf("Old songs") })[0]!.stale).toEqual(["songs.title"]);
});

test("stamp_records_only_the_named_unit", () => {
  const songs = unitOf("catalog/songs", { title: "Canciones", count: (n: number) => `${n} canciones` });
  const other: Unit = { name: "catalog/other", texts: textsOf({ hello: "Hello", bye: "Bye" }, { es: { hello: "Hola", bye: "Adiós" } }, { idOf: (path) => path.join("."), source: "x.ts" }) };
  const stamps = stampUnit({ hello: "000000000000", "songs.gone": "111111111111" }, [songs, other], songs, "es");
  expect(stamps).toEqual({ hello: "000000000000", "songs.count": stampOf(english.count), "songs.title": stampOf("Songs") });
  expect(stampOf("Songs")).toMatch(/^[0-9a-f]{12}$/);
  const partial = stampUnit({}, [songs], unitOf("catalog/songs", { title: "Canciones" }), "es");
  expect(Object.keys(partial)).toEqual(["songs.title"]);
});

test("work_lists_each_text_with_its_use", () => {
  const files = new Map([
    ["src/i18n/messages/songs.en.ts", ["export const songs = {", '  title: "Songs",', "  /** How many songs the library holds. */", "  count: (n: number) => `${n} songs`,", "};"].join("\n")],
    ["src/library/view.ts", ["const heading = t().songs.title;", "const total = t().songs.count(rows.length);"].join("\n")],
    ["src/i18n/messages/songs.de.ts", "const x = t().songs.title;"],
  ]);
  const unit = unitOf("catalog/songs", { title: "Canciones" }, { title: "Lieder", count: (n: number) => `${n} Lieder` });
  const items = workList(unit, "es", {}, lookIn(files));
  expect(items.map(({ id, state, kind, length, english: text, german, current, comment, uses }) => ({ id, state, kind, length, text, german, current, comment, uses }))).toEqual([
    { id: "songs.title", state: "stale", kind: "label", length: 5, text: "Songs", german: "Lieder", current: "Canciones", comment: null, uses: ["src/library/view.ts:1"] },
    {
      id: "songs.count",
      state: "missing",
      kind: "message",
      length: null,
      text: english.count.toString(),
      german: expect.stringContaining("Lieder") as unknown as string,
      current: null,
      comment: "How many songs the library holds.",
      uses: ["src/library/view.ts:2"],
    },
  ]);
});

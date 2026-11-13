import { expect, test } from "../testing";
import { pseudo, pseudoTree, textFor } from "./pseudo";

test("a_pseudo_text_is_wrapped_accented_and_longer", () => {
  const text = "Play the song again";
  const made = pseudo(text);
  expect(made.startsWith("⟦") && made.endsWith("⟧")).toBe(true);
  expect(made).toContain("Pláý thé söng ágáín");
  expect([...made].length).toBeGreaterThanOrEqual(Math.floor(text.length * 1.4));
  expect(pseudo("")).toBe("");
});

test("a_pseudo_tree_keeps_its_addresses_and_wraps_its_functions", () => {
  const tree = pseudoTree({ run: { text: "Your data", route: "data" }, count: (n: number) => `${n} songs` });
  expect(tree.run.route).toBe("data");
  expect(tree.run.text).toStartWith("⟦Ýöür dátá");
  expect(tree.count(3)).toStartWith("⟦3 söngs");
});

test("text_for_reads_a_locale_and_derives_the_pseudo_locale", () => {
  const title = { en: "Rhythm", de: "Rhythmus" };
  expect(textFor(title, "de")).toBe("Rhythmus");
  expect(textFor(title, "es")).toBe("Rhythm");
  expect(textFor(title, "en-XA")).toStartWith("⟦Rhýthm");
});

/** The gallery's section of the XP counter: one at rest, and one that counts up at a button's press. */
import { button } from "../components/button";
import { xpCounter } from "../components/xp-counter";
import { el } from "../dom";
import { signal } from "../signal";
import { group, section, specimen, textFor, type Locale, type CompleteLocale } from "./parts";

const MESSAGES = {
  en: {
    xpCounter: "XP counter",
    states: "States",
    earn: "Earn 250 XP",
  },
  de: {
    xpCounter: "XP-Zähler",
    states: "Zustände",
    earn: "250 XP verdienen",
  },
} satisfies Record<CompleteLocale, Record<string, string>>;

/** The unit after the number. "XP" reads the same in both locales. */
const format = (number: string) => `${number} XP`;

/** The XP counter's section in the gallery. */
export function xpCounterSection(locale: Locale): HTMLElement {
  const t = textFor(MESSAGES, locale);
  const counting = signal(1250);
  return section("xp-counter", t.xpCounter, [
    group(t.states, [
      specimen("rest", xpCounter({ xp: signal(128400), format, locale })),
      specimen(
        "counting",
        el("div", {
          attrs: { style: "display: flex; flex-wrap: wrap; align-items: center; gap: var(--s-4); max-width: 100%" },
          children: [
            xpCounter({ xp: counting, format, locale }),
            button({ label: t.earn, icon: "sparkles", onClick: () => counting.set(counting.get() + 250) }),
          ],
        }),
      ),
    ]),
  ]);
}

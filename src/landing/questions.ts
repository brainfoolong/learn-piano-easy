/**
 * The landing page's band of questions: each a native `details` fold, closed until the visitor opens it.
 *
 * A fold needs no script, so a keyboard and a screen reader open it as the browser does. Its question
 * is the `summary`, with a chevron that turns as it opens. The folds stand in one column, held to the
 * reading measure and centred under the heading.
 */
import { messagesOf, type Locale } from "../i18n/locale";
import { section } from "../ui/components/section";
import { el } from "../ui/dom";
import { icon } from "../ui/icons/icons";

/** The band of questions in `locale`. */
export function questions(locale: Locale): HTMLElement {
  const t = messagesOf(locale).landing.questions;
  const folds = t.items.map((item) =>
    el("details", {
      class: "landing-questions__fold",
      children: [
        el("summary", {
          class: "landing-questions__question",
          children: [el("span", { text: item.question }), icon("chevron-down")],
        }),
        el("p", { class: "landing-questions__answer", text: item.answer }),
      ],
    }),
  );
  return section({
    eyebrow: t.eyebrow,
    heading: t.heading,
    align: "center",
    tone: "band",
    body: [el("div", { class: "landing-questions", children: folds })],
  });
}

/**
 * The checks a machine makes on every translation file, for every locale but English and German:
 * script, arguments, plurals, marks, isolation and no copy. `docs/agent/translation.md` § *The checks a
 * machine makes* is their home, and `src/i18n/typography.ts` holds each locale's rules.
 *
 * - **A message is called with marked arguments,** the numbers of `MARKERS`. An argument the English
 *   shows must show in the translation, in any digits. A message the English cannot build from numbers,
 *   such as one that reads a list, is left to the review.
 * - **A plural's forms are read from the message's source,** at each call of `plural`. The type checker
 *   already refuses a missing form, so this catches what a cast hides.
 * - **An argument that shows in ASCII digits may hold left-to-right text.** In a right-to-left locale it
 *   must sit between an isolate and U+2069, with any decimals `Intl` gives it. A number that `Intl`
 *   formats in the locale's own digits, such as `ar-EG`'s, needs no isolate.
 * - **A mark rule reads a text with each kept word written as `X`,** so a kept title such as *Hark! The
 *   Herald Angels Sing* never breaks a rule about `¡`.
 * - **A kept word counts only where no Latin letter touches it,** so a short one such as the syllable `re`
 *   never cuts into `Press`.
 * - **Music's Latin passes in every script:** note letters with ♯ and ♭, chord symbols such as `Am7`, and
 *   digits. A text made only of them may equal its English.
 */
import { loadUnits, type Leaf, type Text } from "../../tools/i18n";
import { expect, test } from "../testing";
import { PLURAL_FORMS } from "./format";
import { LOCALE_TABLE, rowOf, type LanguageCode as LocaleCode } from "./locale-table";
import { SCRIPTS, TYPOGRAPHY, type Typography } from "./typography";

/** The numbers a message is called with, one per argument, each easy to find in its text. */
const MARKERS = [731, 842, 953, 164, 275, 386] as const;

/** The zero of each run of decimal digits a locale's numbers may show in. */
const ZEROS = [0x30, 0x660, 0x6f0, 0x966, 0x9e6, 0xff10];

/** `text` with every digit of `ZEROS`'s runs written as an ASCII digit. */
function asciiDigits(text: string): string {
  return text.replace(/\p{Nd}/gu, (digit) => {
    const code = digit.codePointAt(0)!;
    const zero = ZEROS.find((each) => code >= each && code < each + 10);
    return zero === undefined ? digit : String(code - zero);
  });
}

/** The text `message` builds from the markers, or undefined when it cannot build one. */
function called(message: (...args: never[]) => unknown): string | undefined {
  try {
    const out = (message as (...args: number[]) => unknown)(...MARKERS.slice(0, Math.max(1, message.length)));
    return typeof out === "string" ? out : undefined;
  } catch {
    return undefined;
  }
}

/** The indexes of the markers that `text` shows, in any digits. */
function shownMarkers(text: string): number[] {
  const plain = asciiDigits(text);
  return MARKERS.flatMap((marker, index) => (plain.includes(String(marker)) ? [index] : []));
}

/** The texts a reader may see of `leaf`: a string, each item of a list, or what a message builds. */
function rendered(leaf: Leaf): string[] {
  if (typeof leaf === "string") return [leaf];
  if (typeof leaf === "function") {
    const out = called(leaf);
    return out === undefined ? [] : [out];
  }
  return [...leaf];
}

/**
 * The parts of the bracketed list that opens at `open` of `source`, split at its own commas. A comma
 * inside a string, a template's `${}` or a deeper bracket never splits.
 */
function bracketed(source: string, open: number): string[] {
  const stack: string[] = [];
  const parts: string[] = [];
  let start = open + 1;
  for (let at = open; at < source.length; at++) {
    const char = source[at]!;
    const top = stack.at(-1);
    if (top === '"' || top === "'" || top === "`") {
      if (char === "\\") at++;
      else if (char === top) stack.pop();
      else if (top === "`" && char === "$" && source[at + 1] === "{") {
        stack.push("${");
        at++;
      }
      continue;
    }
    if (char === '"' || char === "'" || char === "`") stack.push(char);
    else if (char === "(" || char === "[" || char === "{") stack.push(char);
    else if (char === ")" || char === "]" || char === "}") {
      stack.pop();
      if (stack.length === 0) {
        parts.push(source.slice(start, at));
        return parts.map((part) => part.trim()).filter((part) => part !== "");
      }
    } else if (char === "," && stack.length === 1) {
      parts.push(source.slice(start, at));
      start = at + 1;
    }
  }
  return [];
}

/** Each call of `plural` in `source`: the locale it names and the forms it passes, when it passes them inline. */
function pluralCalls(source: string): { locale: string; forms: string[] | undefined }[] {
  return [...source.matchAll(/\bplural\s*\(/g)].map((match) => {
    const [locale = "", , forms = ""] = bracketed(source, match.index + match[0].length - 1);
    const keys = forms.startsWith("{") ? bracketed(forms, 0).map((entry) => entry.split(":")[0]!.trim().replace(/^["']|["']$/g, "")) : undefined;
    return { locale: locale.replace(/^["']|["']$/g, ""), forms: keys };
  });
}

/** Each kept list's patterns, compiled once, since every text of a locale reads the same list. */
const keptPatterns = new WeakMap<readonly string[], RegExp[]>();

/** The pattern of each word of `kept`, which matches only where no Latin letter touches the word. */
function patternsOf(kept: readonly string[]): RegExp[] {
  let patterns = keptPatterns.get(kept);
  if (patterns === undefined) {
    patterns = kept.map((word) => new RegExp(`(?<!\\p{scx=Latin})${RegExp.escape(word)}(?!\\p{scx=Latin})`, "gu"));
    keptPatterns.set(kept, patterns);
  }
  return patterns;
}

/** `text` with each of its kept words written as `by`, where no Latin letter touches the word. */
function replaceKept(text: string, kept: readonly string[], by: string): string {
  return patternsOf(kept).reduce((out, pattern) => out.replace(pattern, by), text);
}

/** `text` with its kept words and music's Latin taken out. */
function withoutKept(text: string, kept: readonly string[]): string {
  return replaceKept(text, kept, " ").replace(/(?<![\p{L}\p{N}])[A-H][♯♭#b]?(?:maj|min|dim|aug|sus|add|m|M)?\d*(?![\p{L}])/gu, " ");
}

/** A locale's rules: its typography, its scripts, its direction and its plural forms. */
interface Rules extends Typography {
  scripts: readonly string[];
  dir: "ltr" | "rtl";
  plurals: readonly string[];
}

/** The rules of `locale`, from the locale table and the rule table. */
function rulesOf(locale: LocaleCode): Rules {
  const row = rowOf(locale);
  return { ...TYPOGRAPHY[locale], scripts: SCRIPTS[row.alphabet], dir: row.dir, plurals: PLURAL_FORMS[locale] };
}

/** Each way the translations of `locale` in `texts` break `rules`, as a sentence naming the text's id. */
function problemsOf(texts: readonly Text[], locale: LocaleCode, rules: Rules = rulesOf(locale)): string[] {
  const problems: string[] = [];
  const script = new RegExp(`[${rules.scripts.map((name) => `\\p{scx=${name}}`).join("")}]`, "u");
  for (const text of texts) {
    const own = text.own[locale];
    if (own === undefined) continue;
    const say = (what: string) => problems.push(`${text.id}: ${what}`);
    for (const shown of rendered(own)) {
      const stray = [...withoutKept(shown, rules.kept).matchAll(/\p{L}+/gu)].map(([word]) => word).find((word) => [...word].some((char) => !script.test(char)));
      if (stray !== undefined) say(`"${stray}" is not written in ${rules.scripts.join(" or ")}`);
      const marked = replaceKept(shown, rules.kept, "X");
      for (const mark of rules.marks) {
        if (mark.when !== undefined && !mark.when.test(marked)) continue;
        if ((mark.must !== undefined && !mark.must.test(marked)) || mark.mustNot?.test(marked) === true) say(`breaks the rule "${mark.says}" in "${shown}"`);
      }
    }
    if (typeof own === "function" && typeof text.english === "function") {
      const english = called(text.english);
      const translated = called(own);
      if (english !== undefined && translated === undefined) say("cannot be built from the arguments the English takes");
      if (english !== undefined && translated !== undefined) {
        const kept = shownMarkers(translated);
        for (const index of shownMarkers(english)) if (!kept.includes(index)) say(`loses argument ${index + 1}`);
        if (rules.dir === "rtl") {
          for (const index of kept) {
            const raw = translated.indexOf(String(MARKERS[index]));
            const after = translated.slice(raw + String(MARKERS[index]).length);
            const isolated = raw > 0 && /[⁦-⁨]/.test(translated[raw - 1]!) && /^(?:[.,]\d+)?⁩/.test(after);
            if (raw >= 0 && !isolated) say(`does not isolate argument ${index + 1}`);
          }
        }
      }
      for (const call of pluralCalls(own.toString())) {
        if (call.locale !== locale) say(`counts in the plural rules of "${call.locale}"`);
        const lacking = call.forms === undefined ? [] : rules.plurals.filter((form) => !call.forms!.includes(form));
        if (lacking.length > 0) say(`lacks the plural forms ${lacking.join(", ")}`);
      }
    }
    if (typeof own !== "function" && typeof text.english !== "function") {
      const english = typeof text.english === "string" ? [text.english] : text.english;
      rendered(own).forEach((shown, index) => {
        if (shown === english[index] && /\p{L}/u.test(withoutKept(shown, rules.kept))) say(`"${shown}" is a copy of the English`);
      });
    }
  }
  return problems;
}

/** One text, English and translated into `locale`. */
function textOf(english: Leaf, own: Leaf, locale: LocaleCode = "es"): Text {
  return { id: "fixture.text", source: "fixture.ts", path: ["text"], english, own: { [locale]: own }, listsFallBack: false };
}

test("a_text_in_the_wrong_script_fails", () => {
  expect(problemsOf([textOf("Press C", "Press C", "zh")], "zh")).toEqual(['fixture.text: "Press" is not written in Han', 'fixture.text: "Press C" is a copy of the English']);
  expect(problemsOf([textOf("Press C", "按 C 键", "zh"), textOf("Play Am7", "弹 Am7 和 F♯", "zh")], "zh")).toEqual([]);
  expect(problemsOf([textOf("Long", "ロングー", "ja")], "ja")).toEqual([]);
});

test("a_lost_argument_fails", () => {
  const english = (n: number, title: string) => `${n} notes in ${title}`;
  expect(problemsOf([textOf(english, (n: number) => `${n} notas`)], "es")).toEqual(["fixture.text: loses argument 2"]);
  expect(problemsOf([textOf(english, (n: number, title: string) => `${title}: ${n} notas`)], "es")).toEqual([]);
  expect(problemsOf([textOf(english, (n: number, title: string) => `${n} نوتة في ${title}`, "ar")], "ar")).toEqual(["fixture.text: does not isolate argument 1", "fixture.text: does not isolate argument 2"]);
  const isolated = (n: number, title: string) => `${new Intl.NumberFormat("ar-EG").format(n)} نوتة في ⁨${title}⁩`;
  expect(problemsOf([textOf(english, isolated, "ar")], "ar", { ...rulesOf("ar"), marks: [] })).toEqual([]);
  const decimals = (n: number, title: string) => `⁨${n.toFixed(2)}⁩ نوتة في ⁨${title}⁩`;
  expect(problemsOf([textOf(english, decimals, "ar")], "ar")).toEqual([]);
});

test("a_missing_plural_form_fails", () => {
  const forms = (n: number, given: Record<string, string>) => given[n === 1 ? "one" : "other"]!;
  const plural = (_locale: string, n: number, given: Record<string, string>) => forms(n, given);
  const english = (n: number) => `${n} ${plural("en", n, { one: "song", other: "songs" })}`;
  const lacking = (n: number) => `${n} ${plural("es", n, { one: "canción", other: "canciones" })}`;
  expect(problemsOf([textOf(english, lacking)], "es")).toEqual(["fixture.text: lacks the plural forms many"]);
  const whole = (n: number) => `${n} ${plural("es", n, { one: "canción", many: "de canciones", other: "canciones" })}`;
  expect(problemsOf([textOf(english, whole)], "es")).toEqual([]);
});

test("a_broken_mark_rule_fails", () => {
  const rules = { ...rulesOf("es"), marks: [{ says: "A question opens with ¿", when: /\?/, must: /¿/ }] };
  expect(problemsOf([textOf("What is it?", "Qué es?")], "es", rules)).toEqual(['fixture.text: breaks the rule "A question opens with ¿" in "Qué es?"']);
  expect(problemsOf([textOf("What is it?", "¿Qué es?")], "es", rules)).toEqual([]);
});

test("the_spanish_marks_hold_and_spare_kept_titles", () => {
  const broken = ["Qué es?", "¿Qué es? Y esto?", "¡Bien", "Cuenta \"1-2\".", "Nivel :", "Cargando...", "¿ Listo?"];
  for (const text of broken) expect(problemsOf([textOf("English", text)], "es")).not.toEqual([]);
  const kept = ["¿Qué es? ¿Y esto?", "¡Subiste de nivel!", "Cuenta «1-2» en cada blanca.", "Toca Hark! The Herald Angels Sing con la mano derecha.", "Cargando…", "Al 80%."];
  for (const text of kept) expect(problemsOf([textOf("English", text)], "es")).toEqual([]);
});

test("the_chinese_marks_hold_and_spare_kept_words", () => {
  const broken = ["弹C键", "你好!", "名称:", "完成.", "数\"1\"", "(强)", "加载中...", "加载中…", "第 1-4 小节", "弹 。", "钢琴 老师", "一个—两个"];
  for (const text of broken) expect(problemsOf([textOf("English", text, "zh")], "zh")).not.toEqual([]);
  const kept = [
    "你好！我是你的钢琴老师。我们一起弹琴吧？", "轮到你了。把右手拇指放在中央 C 上，同时弹 C 和 E。", "每个二分音符数“1、2”。",
    "这段旋律出自贝多芬《第九交响曲》的最后一个乐章，1824 年在维也纳首演。", "第 1～4 小节", "升 C 小调", "A 小三和弦由 A、C、E 组成。",
    "f（强）和 mf（中强）", "rit. 表示渐慢。", "唱 do re mi。", "正在查找文件夹……", "共有 1,234 首歌", "80% 的速度", "点击“播放”", "用 MIDI 键盘弹。",
  ];
  for (const text of kept) expect(problemsOf([textOf("English", text, "zh")], "zh")).toEqual([]);
});

test("the_hindi_marks_hold_and_spare_kept_words", () => {
  const broken = [
    "पाठ पूरा हुआ.", "नमस्ते !", "\"1, 2\" गिनें।", "माप ३", "फ़ाइल खोलें।", "ग़लत नोट", "C दबाएं।", "माप 1-4", "बजाएँ॥",
  ];
  for (const text of broken) expect(problemsOf([textOf("English", text, "hi")], "hi")).not.toEqual([]);
  const kept = [
    "नमस्ते! मैं आपका पियानो टीचर हूँ। चलिए, बजाना शुरू करें?", "अब आपकी बारी। दाएँ हाथ का अँगूठा मध्य C पर रखें, और C और E एक साथ बजाएँ।",
    "हर हाफ़ नोट पर “1, 2” गिनें।", "बीथोवेन ने यह धुन अपनी नौवीं सिम्फ़नी के आखिरी मूवमेंट के लिए लिखी थी। यह पहली बार 1824 में वियना में बजाई गई।",
    "माप 1–4", "C शार्प माइनर", "A माइनर कॉर्ड में A, C और E हैं।", "f (ज़ोर से) और p (हल्के से)", "rit. का मतलब है धीरे-धीरे धीमा करना।",
    "‘चलाएँ’ दबाएँ।", "फ़ोल्डर खोजा जा रहा है…", "12,34,567 गाने", "80% स्पीड पर", "MIDI कीबोर्ड से बजाएँ।", "Jingle Bells दाएँ हाथ से बजाएँ।",
    "छोटे समूह में कितनी काली कुंजियाँ हैं?",
  ];
  for (const text of kept) expect(problemsOf([textOf("English", text, "hi")], "hi")).toEqual([]);
});

test("the_portuguese_marks_hold_and_spare_kept_words", () => {
  const broken = [
    "Conte \"1-2\".", "Conte «1-2».", "¿Pronto?", "Nível :", "Carregando...", "Pronto !", "Uma idéia", "Agüente", "Tu tocas bem.",
    "Bem-vindo!", "Abra o ficheiro.", "Toque no ecrã.", "compassos 1 - 4",
  ];
  for (const text of broken) expect(problemsOf([textOf("English", text, "pt")], "pt")).not.toEqual([]);
  const kept = [
    "Olá! Vamos tocar piano juntos?", "Sua vez. Coloque o polegar direito no Dó central e toque Dó e Mi juntos.",
    "Conte “1-2” em cada mínima.", "Toque Hark! The Herald Angels Sing com a mão direita.", "Carregando…", "A 80%.", "compassos 1–4",
    "Boas-vindas!", "Abra o arquivo.", "Uma ideia", "Aguente firme.", "O tempo é 3/4.", "Para Elise, toque Mi.", "1.234,5 notas",
  ];
  for (const text of kept) expect(problemsOf([textOf("English", text, "pt")], "pt")).toEqual([]);
});

const units = await loadUnits();
const everyText = units.flatMap((unit) => unit.texts);

for (const row of LOCALE_TABLE) {
  if (row.code === "en" || row.code === "de") continue;
  test(`${row.english.toLowerCase()}_texts_keep_their_rules`, () => {
    expect(problemsOf(everyText, row.code)).toEqual([]);
  });
}

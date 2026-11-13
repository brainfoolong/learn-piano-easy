/**
 * The rules a machine checks in each locale's translations: its script, its kept words and its marks.
 * `src/i18n/translation-rules.test.ts` reads them.
 *
 * - **A script is named by its Unicode script,** matched by `Script_Extensions`. A mark that several
 *   scripts share, such as the Japanese long vowel `ー`, then counts for each of them.
 * - **A locale's scripts follow its alphabet in the locale table,** so a row names its alphabet once.
 * - **A locale's style guide fills its kept words and its marks.** Its *Kept words* section lists what
 *   stays as it is, such as MIDI, and its *Marks* section gives each rule with the pattern here.
 */
import type { Alphabet, LanguageCode } from "./locale-table";

/** The Unicode scripts each alphabet writes in, by their `Script_Extensions` names. */
export const SCRIPTS: Record<Alphabet, readonly string[]> = {
  latin: ["Latin"],
  han: ["Han"],
  devanagari: ["Devanagari"],
  arabic: ["Arabic"],
  bengali: ["Bengali"],
  cyrillic: ["Cyrillic"],
  japanese: ["Han", "Hiragana", "Katakana"],
};

/** One rule of a locale's marks: when a text matches `when`, it must match `must` and never `mustNot`. */
export interface MarkRule {
  /** The rule as the style guide states it, such as "A question opens with ¿". */
  says: string;
  /** The texts the rule covers. Every text, without it. */
  when?: RegExp;
  must?: RegExp;
  mustNot?: RegExp;
}

/** A locale's rules beyond its script. */
export interface Typography {
  /** The words that stay as they are in any script, such as the site's name. */
  kept: readonly string[];
  marks: readonly MarkRule[];
}

/** Each locale's rules. English is the source, and German is checked by eye, so the test skips both. */
export const TYPOGRAPHY: Record<LanguageCode, Typography> = {
  en: { kept: [], marks: [] },
  de: { kept: [], marks: [] },
  es: {
    kept: [
      "Learn Piano Easy", "Hark! The Herald Angels Sing", "Moulin Rouge!", "Ah! vous dirai-je, maman","Web MIDI", "MIDI", "MusicXML", "GitHub", "Matomo", "Chrome", "Edge", "Firefox", "Safari",
      "XP", "BPM", "FPS", "PDF", "kHz", "Hz", "dB", "ms", "KB", "MB", "combo", "Combo", "tempo", "Tempo",
      "legato", "staccato", "crescendo", "diminuendo", "forte", "piano", "Piano", "Error",
    ],
    marks: [
      { says: "A question opens with ¿ and closes with ?, one pair per question", mustNot: /^[^¿]*\?|\?[^¿]*\?|¿[^?]*¿|¿[^?]*$/ },
      { says: "An exclamation opens with ¡ and closes with !, one pair per exclamation", mustNot: /^[^¡]*!|![^¡]*!|¡[^!]*¡|¡[^!]*$/ },
      { says: "An opening mark is never followed by a space, and a closing mark never follows one", mustNot: /[¿¡«]\s|\s[?!»]/ },
      { says: "A quote stands in « », never in straight or curly double quotes", mustNot: /["“”]/ },
      { says: "No space stands before a colon, a semicolon or a percent sign", mustNot: /\s[:;%]/ },
      { says: "An ellipsis is the one character …", mustNot: /\.\.\./ },
    ],
  },
  zh: {
    kept: [
      "Learn Piano Easy", "Wikimedia Commons", "Wikipedia", "Mutopia", "Web MIDI", "MIDI", "MusicXML", "GitHub", "Matomo",
      "Chrome", "Edge", "Firefox", "Safari", "XP", "BPM", "bpm", "FPS", "PDF", "USB", "kHz", "Hz", "dB", "ms", "KB", "MB",
      "BWV", "K.", "rit.", "cresc.", "dim.", "a tempo", "do", "re", "mi", "fa", "sol", "la", "si",
      "mp", "mf", "pp", "ff", "p", "f",
    ],
    marks: [
      { says: "A comma, question, exclamation or semicolon is full width", mustNot: /(?<!\d),|,(?!\d)|[?!;]/ },
      { says: "A colon is full width", mustNot: /:/ },
      { says: "A sentence ends with 。, and an ASCII period stands only inside a number", mustNot: /(?<!\d)\.|\.(?!\d)/ },
      { says: "A quote stands in “ ”, with ‘ ’ inside", mustNot: /["'「」『』«»]/ },
      { says: "Parentheses are full width", mustNot: /[()]/ },
      { says: "An ellipsis is two characters: ……", mustNot: /\.\.\.|(?<!…)…(?!…)/ },
      { says: "A dash is two characters: ——", mustNot: /(?<!—)—(?!—)/ },
      { says: "A range of numbers takes ～", mustNot: /\d[-–]\d/ },
      { says: "No space stands beside a full-width mark", mustNot: /\s[，。？！：；、“”‘’（）《》～…]|[，。？！：；、“”‘’（）《》～]\s/ },
      { says: "A space stands between a Han character and a Latin letter or a digit", mustNot: /\p{Unified_Ideograph}[A-Za-z0-9]|[A-Za-z0-9]\p{Unified_Ideograph}/u },
      { says: "No space stands between two Han characters", mustNot: /\p{Unified_Ideograph}\s+\p{Unified_Ideograph}/u },
    ],
  },
  hi: { kept: [], marks: [] },
  ar: { kept: [], marks: [] },
  pt: { kept: [], marks: [] },
  id: { kept: [], marks: [] },
  bn: { kept: [], marks: [] },
  ru: { kept: [], marks: [] },
  fr: { kept: [], marks: [] },
  ur: { kept: [], marks: [] },
  ja: { kept: [], marks: [] },
};

/** *The white keys* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { TheWhiteKeysTexts } from "./the-white-keys.en";

export const theWhiteKeysZh: Translation<TheWhiteKeysTexts> = {
  title: "白键",
  steps: {
    "c-to-c": {
      text: "看一看，听一听。钢琴从中央 C 往上，弹到下一个 C，每个白键都弹一遍。",
    },
    "seven-letters": {
      text: "白键用七个字母命名：C、D、E、F、G、A、B。B 之后，字母又从 C 重新开始。黑键会告诉你每个字母在哪里。",
    },
    "find-d": {
      text: "D 在一组两个黑键的中间。找到一个 D。",
    },
    "find-e": {
      text: "E 是紧挨在一组两个黑键右边的白键。找到一个 E。",
    },
    "find-f": {
      text: "F 是紧挨在一组三个黑键左边的白键。找到一个 F。",
    },
    "find-g": {
      text: "G 在一组三个黑键的第一个和第二个之间。找到一个 G。",
    },
    "find-a": {
      text: "A 在一组三个黑键的第二个和第三个之间。找到一个 A。",
    },
    "find-b": {
      text: "B 是紧挨在一组三个黑键右边的白键。找到一个 B。",
    },
    "play-c-to-c": {
      text: "现在从中央 C 往上弹到下一个 C，弹遍所有白键。每弹一个，就说出它的字母。",
    },
    "letters-quiz": {
      text: "在白键上，B 后面是哪个字母？",
    },
    recap: {
      text: "做得好。你知道每个白键的名字了。",
      points: ["白键的名字是 C、D、E、F、G、A、B。", "B 之后，字母又从 C 重新开始。", "两个一组和三个一组的黑键告诉你每个字母在哪里。"],
    },
  },
};

/** *The key hunt* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { KeyHuntTexts } from "./key-hunt.en";

export const keyHuntZh: Translation<KeyHuntTexts> = {
  title: "寻键大作战",
  steps: {
    ready: {
      text: "寻键大作战开始了！每个琴键限时八秒。靠一组一组的黑键找到位置。",
    },
    "any-c": { text: "找到任意一个 C。" },
    "middle-c": { text: "现在找到中央 C，也就是钢琴中间的那个 C。" },
    "any-f": { text: "找到任意一个 F。" },
    "any-g": { text: "找到任意一个 G。" },
    "any-d": { text: "找到任意一个 D。" },
    "any-b": { text: "找到任意一个 B。" },
    "three-middle": { text: "找到一组三个黑键中间的那个。" },
    "any-e": { text: "找到任意一个 E。" },
    "any-a": { text: "找到任意一个 A。" },
    "high-c": { text: "最后一个！找到比中央 C 高一个八度的 C。" },
    recap: {
      text: "你完成了寻键大作战。你已经熟悉钢琴上的位置了。",
      points: ["黑键两个一组、三个一组，为你指路。", "七个字母给白键命名，从 C 到 B。", "同一个字母在高一个八度的地方再次出现。"],
    },
  },
};

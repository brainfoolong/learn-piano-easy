/** *Repeated notes* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { RepeatedNotesTexts } from "./repeated-notes.en";

export const repeatedNotesZh: Translation<RepeatedNotesTexts> = {
  title: "重复音",
  steps: {
    "repeat-demo": {
      text: "仔细看，仔细听。有些音一遍又一遍地响，手却一动不动。",
    },
    "what-a-repeat-is": {
      text: "一个音可以重复。手指留在它的琴键上，再弹一次。两个音之间，让琴键先弹回原位。",
    },
    "same-or-not": {
      text: "每次你会听到两个音。第二个音比第一个高、低，还是一样？",
    },
    "repeat-e-d": {
      text: "把右手放在 C 手位上。用 3 指弹三次 E，再用 2 指弹三次 D。",
    },
    "repeat-after-skip": {
      text: "现在先跳进，再重复。用 3 指弹 E，再用 5 指弹两次 G。",
    },
    "how-many-keys-quiz": {
      text: "你弹 C、C、C。你按了几个琴键？",
      answers: ["一个琴键，弹三次", "三个不同的琴键"],
    },
    "mixed-phrase": {
      text: "这段旋律有级进、跳进，也有重复音。手保持在 C 手位上，跟着标出的琴键弹。",
    },
    recap: {
      text: "做得好！你现在会弹重复音了。",
      points: ["重复音就是把同一个琴键再弹一次。", "手指留在琴键上，让琴键弹回原位。", "一段旋律可以把级进、跳进和重复音混在一起。"],
    },
  },
};

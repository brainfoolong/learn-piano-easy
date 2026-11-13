/** *Mary's first phrase* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { MaryFirstPhraseTexts } from "./mary-first-phrase.en";

export const maryFirstPhraseZh: Translation<MaryFirstPhraseTexts> = {
  title: "《玛丽有只小羊羔》第一句",
  steps: {
    "phrase-demo": {
      text: "听一听《玛丽有只小羊羔》的前半段。它由级进、重复音和一个跳进组成，这些你都已经学过了。",
    },
    "first-note-quiz": {
      text: "这段旋律从哪个音开始？",
    },
    "the-fingers": {
      text: "右手保持在 C 手位上，拇指放在中央 C 上。这段旋律用到四根手指：1 指弹 C，2 指弹 D，3 指弹 E，5 指弹 G。",
    },
    "g-finger-quiz": {
      text: "哪根手指弹 G？",
      answers: ["2 指", "3 指", "5 指"],
    },
    "bars-one-two": {
      text: "弹开头：E、D、C、D，然后弹三次 E。手指依次是 3、2、1、2，然后 3、3、3。",
    },
    "bars-three-four": {
      text: "现在弹下一部分：三次 D，然后 E，再弹两次 G。手指依次是 2、2、2，然后 3、5、5。",
    },
    "whole-phrase": {
      text: "现在不停顿地弹完整个乐句：E D C D E E E，D D D，E G G。",
    },
    recap: {
      text: "做得好！这是一首真正的歌曲，你已经弹出了它的前半段。",
      points: ["这段旋律由级进、重复音和一个跳进组成。", "学一段旋律，先一小块一小块地练，再连起来。", "手指编号告诉你的手该往哪里去。"],
    },
  },
};

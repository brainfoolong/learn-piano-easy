/** *The waltz bass* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { TheWaltzBassTexts } from "./the-waltz-bass.en";

export const theWaltzBassZh: Translation<TheWaltzBassTexts> = {
  title: "圆舞曲低音",
  steps: {
    "waltz-demo": {
      text: "单独听左手。它以三拍为一组摇摆，像在跳舞。这就是圆舞曲低音。",
    },
    "three-beats": {
      text: "圆舞曲是 3/4 拍，读作四三拍。每小节有三拍：“1、2、3”。第一拍是强拍。",
    },
    "oom-pah-pah": {
      text: "在第一拍，左手在低处弹和弦的根音。在第二拍和第三拍，左手同时弹上面的两个音。听起来像“嘣嚓嚓”。",
    },
    "root-on-one": {
      text: "在圆舞曲低音里，低处的根音在第几拍响起？",
      answers: ["第 2 拍", "第 1 拍", "第 3 拍"],
    },
    "c-waltz": {
      text: "轮到你了，先在 C 上弹。5 指弹中央 C 下面的 C，然后 3 指和 1 指同时弹 E 和 G，弹两次。一共弹两个小节。",
    },
    "g-and-f-shapes": {
      text: "同样的音型适用于每个和弦。G 和弦：先弹低处的 G，再弹 B 和 D。F 和弦：先弹低处的 F，再弹 A 和 C。",
    },
    "g-waltz": {
      text: "把手往下移到中央 C 下面那个 C 再往下的 G。5 指弹 G，然后 3 指和 1 指同时弹 B 和 D，弹两次。",
    },
    "f-beats-two-and-three": {
      text: "在 F 和弦的小节里，左手在第二拍和第三拍弹什么？",
      answers: ["只弹 F", "F、A、C 一个接一个地弹", "A 和 C 一起弹"],
    },
    "f-waltz": {
      text: "现在移到那个 G 下面一个白键的 F。5 指弹 F，然后 3 指和 1 指同时弹 A 和 C，弹两次。",
    },
    "chord-walk": {
      text: "C、F、G、C 各弹一小节。在第一拍换手位，一直数着“1、2、3”。",
    },
    "waltz-tune-demo": {
      text: "这是一段配圆舞曲低音的短旋律。右手弹长音，左手一直弹着“嘣嚓嚓”。",
    },
    "waltz-tune": {
      text: "把右手拇指放在中央 C 上。每个旋律音都和它下面的左手键一起按下，两个旋律音之间让圆舞曲低音继续下去。",
    },
    recap: {
      text: "做得好。现在你的左手能弹圆舞曲低音了。",
      points: [
        "圆舞曲是 3/4 拍，每小节三拍。",
        "左手在第一拍弹低处的根音。",
        "在第二拍和第三拍，左手同时弹上面的音。",
        "音型跟着和弦移动：C、F、G。",
      ],
    },
  },
};

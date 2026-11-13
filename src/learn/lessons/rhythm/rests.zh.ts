/** *Rests* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { RestsTexts } from "./rests.en";

export const restsZh: Translation<RestsTexts> = {
  title: "休止符",
  steps: {
    "rests-demo": {
      text: "看一看，听一听。有几拍钢琴没有声音，但节拍一直在继续。",
    },
    "what-a-rest-is": {
      text: "休止符是音乐里的无声。你什么都不弹，但还是要数它。一个四分休止符持续一拍，和四分音符一样。",
    },
    "quarter-rest-quiz": {
      text: "你弹 C、C，一个四分休止符，再弹 C。这里有几拍无声？",
      answers: ["一拍", "两拍", "一拍也没有"],
    },
    "half-rest": {
      text: "一个二分休止符持续两拍，和二分音符一样。你保持无声，数两拍，再接着弹。",
    },
    "half-rest-quiz": {
      text: "一个二分休止符有几拍无声？",
      answers: ["一拍", "两拍", "四拍"],
    },
    "fill-a-bar-quiz": {
      text: "你弹一个四分音符，然后是一个四分休止符，再弹一个二分音符。一共几拍？",
      answers: ["两拍", "三拍", "四拍"],
    },
    "phrase-with-rests": {
      text: "看一看，听一听。钢琴弹 C、D、E，休止一拍，再弹 E、D。然后休止两拍，最后落在 C 上。",
    },
    "play-with-rests": {
      text: "轮到你了，先听一小节预备拍。跟着滴答声弹 C、D、E，然后抬起手指，空一拍不出声。弹 E、D，保持两拍无声，最后落在 C 上。",
    },
    recap: {
      text: "做得好！你已经认识最基本的两种休止符了。",
      points: ["休止符是无声，但也要数。", "一个四分休止符持续一拍。", "一个二分休止符持续两拍。"],
    },
  },
};

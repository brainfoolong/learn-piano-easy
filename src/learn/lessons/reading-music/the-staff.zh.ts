/** *The staff* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { TheStaffTexts } from "./the-staff.en";

export const theStaffZh: Translation<TheStaffTexts> = {
  title: "谱表",
  steps: {
    "five-lines": {
      text: "音乐写在谱表上。谱表由五条线组成，一条叠在另一条上面。线要从下往上数，所以最下面的线是第一线。",
    },
    "lines-quiz": {
      text: "谱表有几条线？",
      answers: ["四条", "五条", "六条"],
    },
    "four-spaces": {
      text: "五条线之间有四个间。间也是从下往上数。",
    },
    "spaces-quiz": {
      text: "谱表的线之间有几个间？",
      answers: ["三个", "四个", "五个"],
    },
    "line-or-space": {
      text: "音符要么在线上，要么在间里。在线上时，线从音符正中间穿过。在间里时，音符填满两条线之间的空隙。",
    },
    "line-or-space-quiz": {
      text: "一条线正好从音符中间穿过。这个音符在哪里？",
      answers: ["在线上", "在间里"],
    },
    "higher-is-higher": {
      text: "音符在谱表上的位置越高，声音就越高。往上走一步，从一条线到上面的间，就是右边的下一个白键。",
    },
    "climb-demo": {
      text: "看一看，听一听。琴声从最下面的线一直走到最上面的线，每次走一条线或一个间。每个音都比前一个高一点。",
    },
    "higher-or-lower-listen": {
      text: "你会听到两个音。第二个音比第一个高、比第一个低，还是一样高？更高的音在谱表上的位置也更高。",
    },
    "top-or-bottom-quiz": {
      text: "一个音符在最上面的线上，另一个在最下面的线上。哪一个听起来更高？",
      answers: ["最下面那条线上的音符", "最上面那条线上的音符", "一样高"],
    },
    "first-line-quiz": {
      text: "谱表的哪条线是第一线？",
      answers: ["最下面的线", "中间的线", "最上面的线"],
    },
    recap: {
      text: "做得好！现在你认识谱表了。",
      points: ["谱表有五条线和四个间，都从下往上数。", "音符在线上或间里。", "音符在谱表上越高，声音就越高。"],
    },
  },
};

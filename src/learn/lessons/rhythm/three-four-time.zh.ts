/** *Three-four time* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { ThreeFourTimeTexts } from "./three-four-time.en";

export const threeFourTimeZh: Translation<ThreeFourTimeTexts> = {
  title: "3/4 拍",
  steps: {
    "waltz-demo": {
      text: "看一看，听一听。第一拍响一个低音，后面两拍响较高的音。这个音型不断重复。",
    },
    "beats-in-threes": {
      text: "有些音乐每三拍为一组。你数“1、2、3、1、2、3”，第 1 拍最强。这就是 3/4 拍，读作四三拍，也是圆舞曲的拍子。",
    },
    "beats-in-a-bar-quiz": {
      text: "3/4 拍的一个小节有几拍？",
      answers: ["两拍", "三拍", "四拍"],
    },
    "which-is-a-waltz-quiz": {
      text: "圆舞曲是 3/4 拍。该怎么数？",
      answers: ["1、2、3、1、2、3", "1、2、3、4、1、2、3、4"],
    },
    "tap-in-threes": {
      text: "点击“开始”，先听四声滴答。然后每响一声，就弹一下任意一个琴键，同时大声数“1、2、3”。每个“1”都数得稍微响一点。",
    },
    recap: {
      text: "做得好！你已经会三拍三拍地数了。",
      points: ["有些音乐每三拍为一组。", "3/4 拍的一个小节有三拍，数“1、2、3”。", "第 1 拍最强，圆舞曲就是这样。"],
    },
  },
};

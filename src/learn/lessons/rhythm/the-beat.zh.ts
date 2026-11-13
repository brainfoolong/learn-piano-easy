/** *The beat* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { TheBeatTexts } from "./the-beat.en";

export const theBeatZh: Translation<TheBeatTexts> = {
  title: "节拍",
  steps: {
    "beat-demo": {
      text: "看一看，听一听。在旋律下面，一个低音一遍又一遍地响起，速度始终不变。",
    },
    "what-the-beat-is": {
      text: "音乐有稳定的节拍，就像你的心跳，或者走路时的脚步。你刚才听到的低音，弹出的就是节拍。你可以跟着它点头或轻轻打拍子。",
    },
    "tap-the-beat": {
      text: "点击“开始”，先听四声滴答。然后每响一声，就弹一下任意一个琴键。",
    },
    "steady-beat-quiz": {
      text: "一首歌从头播放到尾。它的节拍会怎样？",
      answers: ["一会儿快，一会儿慢", "保持稳定"],
    },
    "tap-a-longer-beat": {
      text: "现在来一轮更长的，稍微快一点。继续跟着滴答声弹，每响一声弹一下。",
    },
    recap: {
      text: "做得好！你能感觉到节拍，也能跟着它弹了。",
      points: ["音乐有稳定的节拍。", "节拍就像心跳或走路的脚步。", "每一拍弹一下。"],
    },
  },
};

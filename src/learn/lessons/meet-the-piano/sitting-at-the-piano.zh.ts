/** *Sitting at the piano* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { SittingAtThePianoTexts } from "./sitting-at-the-piano.en";

export const sittingAtThePianoZh: Translation<SittingAtThePianoTexts> = {
  title: "坐在钢琴前",
  steps: {
    "face-middle-c": {
      text: "弹得好，先要坐得好。坐在钢琴的正中间，让中央 C 就在你正前方。这样两只手都能轻松够到要弹的琴键。",
    },
    "find-middle-c": {
      text: "按下中央 C，也就是你正对着的那个琴键。",
    },
    "bench-and-feet": {
      text: "坐在琴凳的前半部分，不要坐到最后面。背挺直，同时保持放松。两只脚平放在地上。",
    },
    "bench-quiz": {
      text: "你该坐在琴凳的什么位置？",
      answers: ["前半部分，两只脚平放在地上", "坐到最后面，靠着东西", "最边上，脚离开地面"],
    },
    forearms: {
      text: "小臂应该和琴键一样高，既不向上斜，也不向下斜。调高或调低琴凳，直到小臂和琴键一样高。肩膀保持放松。",
    },
    "forearms-quiz": {
      text: "琴凳多高才适合你？",
      answers: ["手肘远低于琴键的时候", "小臂和琴键一样高的时候", "手从上面垂到琴键上的时候"],
    },
    "curved-fingers": {
      text: "手指轻轻弯曲，就像握着一个小球。用指尖按琴键，不要用伸平的手指。整个过程中，手都保持放松。",
    },
    "fingers-quiz": {
      text: "手指在琴键上是什么样子？",
      answers: ["平平地伸直", "绷紧，用力并在一起", "放松、弯曲，用指尖弹"],
    },
    "relaxed-play": {
      text: "想象手里握着一个小球，用指尖弹标出的琴键。从肩膀到手指，都保持放松。",
    },
    "posture-quiz": {
      text: "下面哪一种是坐在钢琴前的好姿势？",
      answers: [
        "坐在琴凳最远的一头，手指平放",
        "正对中央 C，坐在琴凳前部，小臂与琴键齐平，手指弯曲",
        "坐得很低，手臂往上够琴键",
      ],
    },
    recap: {
      text: "做得好。你知道怎样坐在钢琴前了。",
      points: [
        "正对中央 C，坐在琴凳的前半部分，两只脚平放。",
        "小臂和琴键一样高。",
        "手指保持放松和弯曲，用指尖弹。",
      ],
    },
  },
};

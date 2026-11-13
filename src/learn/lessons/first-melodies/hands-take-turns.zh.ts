/** *Hands take turns* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { HandsTakeTurnsTexts } from "./hands-take-turns.en";

export const handsTakeTurnsZh: Translation<HandsTakeTurnsTexts> = {
  title: "双手轮流",
  steps: {
    "call-and-answer": {
      text: "听一听这段一问一答。右手弹三个音，然后左手低一个八度，再弹一遍。",
    },
    "both-positions": {
      text: "把两只手同时放在 C 手位上。右手拇指放在中央 C 上，左手小指放在低一个八度的 C 上。",
    },
    "low-hand-quiz": {
      text: "两只手都在 C 手位上。哪只手弹低的音？",
      answers: ["左手", "右手", "两只手一起"],
    },
    "echo-listen": {
      text: "每次听两个音。第二个音比第一个高、低，还是一样？",
    },
    "first-turn": {
      text: "轮到你了。右手弹 C、D、E，然后左手弹 C、D、E。",
    },
    "second-turn": {
      text: "现在从右手小指开始，往下走到 E。左手来应答，从拇指往下走到 E。",
    },
    "one-waits": {
      text: "一只手弹的时候，另一只手放在自己的琴键上等着。它留在原位，轮到它时就能马上弹。",
    },
    "long-phrase": {
      text: "两只手都保持在 C 手位上。这段更长的旋律要轮流四次：右手、左手、右手，再左手。跟着标出的琴键，从一只手换到另一只手。",
    },
    recap: {
      text: "做得好！现在你的两只手能合作弹一段旋律了。",
      points: [
        "两只手可以同时放在 C 手位上，相隔一个八度。",
        "左手弹低的音，右手弹高的音。",
        "一只手弹的时候，另一只手在原位等着轮到它。",
      ],
    },
  },
};

/** *A held bass note* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { AHeldBassNoteTexts } from "./a-held-bass-note.en";

export const aHeldBassNoteZh: Translation<AHeldBassNoteTexts> = {
  title: "按住低音",
  steps: {
    "bass-under-tune": {
      text: "看一看，听一听。你的左手弹一个又长又低的音，右手在它上面弹一段旋律。",
    },
    "hold-it": {
      text: "这个又长又低的音就是低音。左手把它弹成一个全音符，把琴键按住四拍。",
    },
    "let-go-quiz": {
      text: "你的左手按住一个全音符，右手在上面弹四个四分音符。左手什么时候松开？",
      answers: ["第四个四分音符之后", "第一个四分音符之后", "马上松开"],
    },
    "first-bar": {
      text: "左手按中央 C 下面的 C，右手按中央 C。按住低音 C 不放，同时右手弹 D、E、F。",
    },
    "both-bars": {
      text: "弹两个小节，每个低音都要按住。左手按中央 C 下面的 C，右手按中央 C，然后弹 D、E、F。接着用同样的方法按中央 C 下面的 G 和中央 C 上面的 G，然后弹 F、E、D。",
    },
    "half-bass": {
      text: "低音也可以是二分音符。它持续两拍，所以每个小节里低音要换两次。",
    },
    "half-note-bass": {
      text: "听一段由二分音符组成的低音。每个低音都在旋律的两拍下面响着。",
    },
    "half-bass-quiz": {
      text: "你的左手按住一个二分音符。右手在它上面弹几个四分音符？",
      answers: ["一个", "两个", "四个"],
    },
    "half-bass-tune": {
      text: "轮到你了。每个低音都和它上面的旋律音一起弹，下一个旋律音响起时继续按住它。",
    },
    recap: {
      text: "做得好！现在你的左手可以在旋律下面按住低音了。",
      points: [
        "旋律在上面流动时，左手可以在下面弹一个长长的低音。",
        "低音和旋律音一起按下，然后按住不放。",
        "全音符的低音持续四拍，二分音符的低音持续两拍。",
      ],
    },
  },
};
